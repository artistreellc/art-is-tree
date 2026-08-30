// Build a job log from Bouncie fleet-tracker history.
//
//   node scripts/fetch-bouncie-jobs.mjs --since 2025-09-01
//   node scripts/fetch-bouncie-jobs.mjs --since 2025-09-01 --dry-run
//
// WHY THIS RUNS OFFLINE, NOT AT REQUEST TIME
// The site is fully prerendered. Job history changes daily at most, so a live
// integration would buy nothing and would put BOUNCIE_ACCESS_TOKEN in
// production. This writes a committed JSON file that the build reads. The token
// lives in a local .env, is used only here, and never reaches Vercel or the
// client bundle.
//
// WHY STOPS ARE DERIVED, NOT FETCHED
// Bouncie reports trips (drive from A to B). A job site is the gap BETWEEN two
// trips: the truck arrives, sits for hours, leaves. So a stop is end-of-trip-N
// to start-of-trip-N+1, and its location is where trip N ended.
//
// TWO CONSTRAINTS FROM THE API SPEC, BOTH OF WHICH SHAPE THIS FILE
//   1. A trip carries NO explicit end coordinate. The only location data is the
//      `gps` field — an encoded polyline or GeoJSON of the whole path. Trip end
//      is therefore the LAST POINT of that path. We request geojson and fall
//      back to decoding a polyline.
//   2. starts-after..ends-before may span AT MOST ONE WEEK. A year of history is
//      ~52 sequential requests per vehicle, so this pages through weekly windows
//      with a small delay rather than asking for the range in one call.
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
const SINCE = new Date(arg('since', '2025-09-01'));
const MIN_STOP_MIN = Number(arg('min-stop', 45));
const MAX_STOP_MIN = Number(arg('max-stop', 600));
const DELAY_MS = Number(arg('delay', 250)); // be polite between windows

// The API rejects windows longer than a week; 6 days leaves margin.
const WINDOW_DAYS = 6;
// Bouncie will not serve data before this date.
const EARLIEST = new Date('2020-05-21');

// Places that are not customers. Stops within EXCLUDE_KM are dropped. The yard
// MUST be listed or it dominates every count. Coordinates are intentionally left
// null — fill them in locally, do not commit them.
const EXCLUDE_KM = 0.35;
const EXCLUDED = [{ name: 'yard (2597 Nestlebrook Trail)', lat: null, lon: null }];

function loadToken() {
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
        'Put it in a local .env (already gitignored):\n  BOUNCIE_ACCESS_TOKEN=...\n' +
        'Never commit it and never paste it into chat.\n'
    );
    process.exit(1);
  }
  return t;
}
const TOKEN = loadToken();

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function api(path) {
  const res = await fetch(`${API}${path}`, {
    headers: { Authorization: TOKEN, Accept: 'application/json', 'Content-Type': 'application/json' },
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`${res.status} ${res.statusText} on ${path.replace(/imei=[^&]+/, 'imei=<id>')}\n${body.slice(0, 300)}`);
  }
  return res.json();
}

/** Google encoded-polyline decoder — used only if geojson is unavailable. */
function decodePolyline(str) {
  const pts = [];
  let i = 0, lat = 0, lon = 0;
  while (i < str.length) {
    let b, shift = 0, result = 0;
    do { b = str.charCodeAt(i++) - 63; result |= (b & 0x1f) << shift; shift += 5; } while (b >= 0x20);
    lat += result & 1 ? ~(result >> 1) : result >> 1;
    shift = 0; result = 0;
    do { b = str.charCodeAt(i++) - 63; result |= (b & 0x1f) << shift; shift += 5; } while (b >= 0x20);
    lon += result & 1 ? ~(result >> 1) : result >> 1;
    pts.push([lat / 1e5, lon / 1e5]);
  }
  return pts;
}

/**
 * Last point of a trip's path = where the truck stopped.
 * GeoJSON coordinates are [lon, lat] — reversed from the usual order, and
 * getting this backwards would put every job in the Indian Ocean.
 */
function tripEnd(trip) {
  const g = trip.gps;
  if (!g) return null;
  if (typeof g === 'string') {
    const pts = decodePolyline(g);
    return pts.length ? { lat: pts.at(-1)[0], lon: pts.at(-1)[1] } : null;
  }
  const coords = g.coordinates ?? g.geometry?.coordinates ?? g.features?.at(-1)?.geometry?.coordinates;
  if (!Array.isArray(coords) || !coords.length) return null;
  const last = Array.isArray(coords[0][0]) ? coords.at(-1).at(-1) : coords.at(-1);
  return { lat: last[1], lon: last[0] };
}

const excluded = (lat, lon) =>
  EXCLUDED.some((e) => {
    if (e.lat == null) return false;
    return Math.hypot((lat - e.lat) * 111, (lon - e.lon) * 89) <= EXCLUDE_KM;
  });

function stopsFromTrips(trips) {
  const t = trips
    .map((x) => ({ start: x.startTime, end: x.endTime, pos: tripEnd(x) }))
    .filter((x) => x.start && x.end && x.pos)
    .sort((a, b) => new Date(a.end) - new Date(b.end));

  const stops = [];
  for (let i = 0; i < t.length - 1; i++) {
    const arrive = new Date(t[i].end);
    const depart = new Date(t[i + 1].start);
    const mins = (depart - arrive) / 60000;
    if (!(mins >= MIN_STOP_MIN && mins <= MAX_STOP_MIN)) continue;
    const { lat, lon } = t[i].pos;
    if (excluded(lat, lon)) continue;
    const hood = resolveNeighborhood(lat, lon);
    stops.push({
      date: arrive.toISOString().slice(0, 10),
      arrivedAt: arrive.toISOString(),
      minutes: Math.round(mins),
      // Rounded to ~1km on purpose. This file is committed to a public repo and
      // full-precision job coordinates are customer home addresses. The log
      // answers "which neighborhood", never "which house".
      lat: Number(lat.toFixed(2)),
      lon: Number(lon.toFixed(2)),
      neighborhood: hood?.name ?? null,
      city: hood?.city ?? null,
      anchorKm: hood?.km ?? null,
    });
  }
  return stops;
}

/** Weekly windows from `from` to now, because the API caps a query at 7 days. */
function windows(from) {
  const start = from < EARLIEST ? EARLIEST : from;
  const out = [];
  for (let a = new Date(start); a < new Date(); ) {
    const b = new Date(Math.min(a.getTime() + WINDOW_DAYS * 864e5, Date.now()));
    out.push([new Date(a), b]);
    a = new Date(b.getTime() + 1000);
  }
  return out;
}

const wins = windows(SINCE);
console.log(`Bouncie job log`);
console.log(`  since        ${SINCE.toISOString().slice(0, 10)}`);
console.log(`  windows      ${wins.length} x ${WINDOW_DAYS}d (API caps a query at 7 days)`);
console.log(`  stop filter  ${MIN_STOP_MIN}-${MAX_STOP_MIN} min\n`);

const vehiclesRes = await api('/vehicles');
const vehicles = Array.isArray(vehiclesRes) ? vehiclesRes : vehiclesRes.vehicles ?? [];
if (!vehicles.length) {
  console.error('No vehicles returned. Structure:', JSON.stringify(vehiclesRes).slice(0, 400));
  process.exit(1);
}
console.log(`vehicles: ${vehicles.length}`);

const all = [];
let totalTrips = 0, failed = 0;
for (const v of vehicles) {
  const imei = v.imei ?? v.deviceImei;
  const label = v.nickName ?? v.nickname ?? v.model?.name ?? `imei…${String(imei).slice(-4)}`;
  if (!imei) { console.log(`  ${label}: no imei, skipped`); continue; }

  const trips = [];
  process.stdout.write(`  ${String(label).padEnd(24)} `);
  for (const [a, b] of wins) {
    const q =
      `/trips?imei=${encodeURIComponent(imei)}` +
      `&starts-after=${a.toISOString()}&ends-before=${b.toISOString()}&gps-format=geojson`;
    try {
      const r = await api(q);
      trips.push(...(Array.isArray(r) ? r : r.trips ?? []));
      process.stdout.write('.');
    } catch (e) {
      failed++;
      process.stdout.write('x');
      if (failed === 1) console.error(`\n    first failure: ${e.message}\n    `);
    }
    await sleep(DELAY_MS);
  }
  const stops = stopsFromTrips(trips);
  totalTrips += trips.length;
  console.log(`  trips ${String(trips.length).padStart(5)} -> stops ${stops.length}`);
  all.push(...stops.map((s) => ({ ...s, vehicle: String(label) })));
}

all.sort((a, b) => a.arrivedAt.localeCompare(b.arrivedAt));

const byNeighborhood = {};
for (const s of all) {
  const k = s.neighborhood ?? '(unresolved)';
  byNeighborhood[k] = (byNeighborhood[k] || 0) + 1;
}

console.log(`\ntrips fetched: ${totalTrips}   job stops: ${all.length}${failed ? `   failed windows: ${failed}` : ''}`);
console.log('by neighborhood:');
for (const [k, n] of Object.entries(byNeighborhood).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(n).padStart(5)}  ${k}`);
}
const unresolved = byNeighborhood['(unresolved)'] ?? 0;
if (unresolved) {
  console.log(
    `\n\x1b[33m${unresolved} stops fell outside every anchor.\x1b[0m Those are real jobs in\n` +
      'neighborhoods with no anchor yet. Add anchors for them rather than widening\n' +
      'MAX_KM, which would mislabel the ones already resolving correctly.'
  );
}
if (!EXCLUDED.some((e) => e.lat != null)) {
  console.log(
    '\n\x1b[33mThe yard is not excluded — its coordinates are null in EXCLUDED.\x1b[0m\n' +
      'Until you fill those in locally, overnight parking will show up as the\n' +
      'busiest "job site" in the log.'
  );
}

const payload = {
  generated: new Date().toISOString(),
  since: SINCE.toISOString().slice(0, 10),
  windowDays: Math.round((Date.now() - SINCE) / 864e5),
  minStopMinutes: MIN_STOP_MIN,
  stopCount: all.length,
  byNeighborhood,
  stops: all,
};

if (DRY) console.log('\n--dry-run: nothing written.');
else {
  writeFileSync(OUT, JSON.stringify(payload, null, 2) + '\n');
  console.log(`\nwrote ${OUT.replace(root + '/', '')}`);
}
