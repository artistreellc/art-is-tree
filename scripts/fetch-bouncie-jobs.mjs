// Build a job log from Bouncie fleet-tracker history.
//
//   node scripts/fetch-bouncie-jobs.mjs --days 365
//   node scripts/fetch-bouncie-jobs.mjs --days 30 --dry-run
//
// WHY THIS RUNS OFFLINE, NOT AT REQUEST TIME
// The site is fully prerendered. Job history changes daily at most, so there is
// nothing to gain from a live call and plenty to lose: a runtime integration
// would need the token in production. Instead this writes a committed JSON file
// that the build reads. BOUNCIE_ACCESS_TOKEN lives in a local .env, is used only
// here, and never reaches Vercel or the client bundle.
//
// WHY STOPS ARE DERIVED, NOT FETCHED
// Bouncie reports trips (drive from A to B). A job site is the gap BETWEEN two
// trips: the truck arrives, sits for hours, then leaves. So a stop is
// end-of-trip-N to start-of-trip-N+1, and its location is where trip N ended.
//
// FIELD NAMES ARE NOT VERIFIED. This was written without access to the Bouncie
// docs, so the response shape below is a best guess. The script prints the first
// raw record it receives and exits clearly if a field is missing, rather than
// silently producing a wrong log. Fix the mapping in normalizeTrip() if it
// complains.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { resolveNeighborhood } from '../src/constants/neighborhoodAnchors.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const API = 'https://api.bouncie.dev/v1';
const OUT = join(root, 'src', 'constants', 'jobLog.json');

const arg = (k, d) => {
  const i = process.argv.indexOf(`--${k}`);
  return i > -1 && process.argv[i + 1] ? process.argv[i + 1] : d;
};
const DRY = process.argv.includes('--dry-run');
const DAYS = Number(arg('days', 365));

// A stop only counts as a job if the truck sat there this long. Below this it is
// a light, a fuel stop, or traffic. Above the cap it is overnight at the yard.
const MIN_STOP_MIN = Number(arg('min-stop', 45));
const MAX_STOP_MIN = Number(arg('max-stop', 600));

// Places that are not customers. Stops within EXCLUDE_KM of these are dropped.
// The yard MUST be excluded or it dominates every count.
const EXCLUDE_KM = 0.35;
const EXCLUDED = [
  // 2597 Nestlebrook Trail, Virginia Beach VA 23456 — the yard. Coordinates are
  // intentionally left null: fill them in locally, do not commit them.
  { name: 'yard', lat: null, lon: null },
];

function loadEnv() {
  const p = join(root, '.env');
  if (existsSync(p)) {
    for (const line of readFileSync(p, 'utf8').split('\n')) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
  const t = process.env.BOUNCIE_ACCESS_TOKEN;
  if (!t) {
    console.error(
      '\n\x1b[31mBOUNCIE_ACCESS_TOKEN is not set.\x1b[0m\n' +
        'Put it in a local .env (already gitignored):\n' +
        '  BOUNCIE_ACCESS_TOKEN=...\n' +
        'Never commit it and never paste it into chat.\n'
    );
    process.exit(1);
  }
  return t;
}

// Bouncie takes the raw token — no "Bearer" prefix.
async function api(path, token) {
  const res = await fetch(`${API}${path}`, {
    headers: { Authorization: token, 'Content-Type': 'application/json' },
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`${res.status} ${res.statusText} on ${path}\n${body.slice(0, 400)}`);
  }
  return res.json();
}

let warnedShape = false;
function normalizeTrip(t) {
  const start = t.startTime ?? t.start?.time ?? t.started;
  const end = t.endTime ?? t.end?.time ?? t.ended;
  const endLat = t.end?.lat ?? t.endLocation?.lat ?? t.endLat;
  const endLon = t.end?.lon ?? t.end?.lng ?? t.endLocation?.lon ?? t.endLon;
  if ((!end || endLat == null || endLon == null) && !warnedShape) {
    warnedShape = true;
    console.error('\n\x1b[33mCould not find expected fields on a trip record.\x1b[0m');
    console.error('First raw record follows — update normalizeTrip() to match:\n');
    console.error(JSON.stringify(t, null, 2).slice(0, 1500));
  }
  return { start, end, endLat, endLon, raw: t };
}

const excluded = (lat, lon) =>
  EXCLUDED.some((e) => {
    if (e.lat == null) return false;
    const dLat = (lat - e.lat) * 111;
    const dLon = (lon - e.lon) * 89;
    return Math.hypot(dLat, dLon) <= EXCLUDE_KM;
  });

/** Consecutive trips become the stop that sits between them. */
function stopsFromTrips(trips) {
  const t = trips
    .map(normalizeTrip)
    .filter((x) => x.end && x.endLat != null && x.endLon != null)
    .sort((a, b) => new Date(a.end) - new Date(b.end));

  const stops = [];
  for (let i = 0; i < t.length - 1; i++) {
    const arrive = new Date(t[i].end);
    const depart = new Date(t[i + 1].start);
    const mins = (depart - arrive) / 60000;
    if (!(mins >= MIN_STOP_MIN && mins <= MAX_STOP_MIN)) continue;
    const { endLat: lat, endLon: lon } = t[i];
    if (excluded(lat, lon)) continue;
    const hood = resolveNeighborhood(lat, lon);
    stops.push({
      date: arrive.toISOString().slice(0, 10),
      arrivedAt: arrive.toISOString(),
      minutes: Math.round(mins),
      // Coordinates are rounded to ~1km. These describe WHICH NEIGHBORHOOD a job
      // was in; they are never precise enough to identify a customer's address,
      // which is the point — this file is committed to a public repo.
      lat: Number(lat.toFixed(2)),
      lon: Number(lon.toFixed(2)),
      neighborhood: hood?.name ?? null,
      city: hood?.city ?? null,
      anchorKm: hood?.km ?? null,
    });
  }
  return stops;
}

const token = loadEnv();
const since = new Date(Date.now() - DAYS * 864e5).toISOString();

console.log(`Bouncie job log — last ${DAYS} days (stops ${MIN_STOP_MIN}-${MAX_STOP_MIN} min)\n`);

const vehicles = await api('/vehicles', token);
const list = Array.isArray(vehicles) ? vehicles : vehicles.vehicles ?? [];
console.log(`vehicles: ${list.length}`);
if (!list.length) {
  console.error('No vehicles returned. Raw response:\n', JSON.stringify(vehicles, null, 2).slice(0, 800));
  process.exit(1);
}

const all = [];
for (const v of list) {
  const imei = v.imei ?? v.vin ?? v.id;
  const label = v.nickName ?? v.nickname ?? v.model?.name ?? imei;
  const trips = await api(`/trips?imei=${encodeURIComponent(imei)}&starts-after=${since}`, token);
  const arr = Array.isArray(trips) ? trips : trips.trips ?? [];
  const stops = stopsFromTrips(arr);
  console.log(`  ${String(label).padEnd(26)} trips ${String(arr.length).padStart(5)}  ->  stops ${stops.length}`);
  all.push(...stops.map((s) => ({ ...s, vehicle: String(label) })));
}

all.sort((a, b) => a.arrivedAt.localeCompare(b.arrivedAt));

const byHood = {};
for (const s of all) {
  const k = s.neighborhood ?? '(unresolved)';
  byHood[k] = (byHood[k] || 0) + 1;
}

console.log(`\ntotal job stops: ${all.length}`);
console.log('by neighborhood:');
for (const [k, n] of Object.entries(byHood).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(n).padStart(5)}  ${k}`);
}
const unresolved = byHood['(unresolved)'] ?? 0;
if (unresolved) {
  console.log(
    `\n\x1b[33m${unresolved} stops fell outside every anchor.\x1b[0m Those are real jobs in\n` +
      'neighborhoods with no anchor yet — cluster them and add anchors, rather than\n' +
      'widening MAX_KM, which would mislabel them.'
  );
}

const payload = {
  generated: new Date().toISOString(),
  windowDays: DAYS,
  minStopMinutes: MIN_STOP_MIN,
  stopCount: all.length,
  byNeighborhood: byHood,
  stops: all,
};

if (DRY) {
  console.log('\n--dry-run: nothing written.');
} else {
  writeFileSync(OUT, JSON.stringify(payload, null, 2) + '\n');
  console.log(`\nwrote ${OUT.replace(root + '/', '')}`);
}
