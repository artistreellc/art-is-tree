// Build src/constants/jobLog.json from a Bouncie "Trip Data Export" CSV.
//
//   node scripts/build-job-log.mjs <export.csv> [--dry-run]
//
// This is the preferred path over the REST API. The CSV already contains what
// the API makes you work for: explicit end coordinates and a fully geocoded end
// address, with no weekly paging, no polyline decoding and no token.
//
// PRIVACY — READ BEFORE CHANGING ANYTHING HERE
// The CSV contains customers' home addresses. jobLog.json is committed to a
// public repo. So addresses are used only to derive city and ZIP, then dropped,
// and coordinates are rounded to ~1km. The output answers "which neighborhood",
// never "which house". Do not add a raw address or a full-precision coordinate
// to the payload.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { resolveNeighborhood } from '../src/constants/neighborhoodAnchors.js';
import { serviceAreaNeighborhoods } from '../src/data/serviceAreaNeighborhoods.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'src', 'constants', 'jobLog.json');
const src = process.argv[2];
const DRY = process.argv.includes('--dry-run');
if (!src) {
  console.error('usage: node scripts/build-job-log.mjs <export.csv> [--dry-run]');
  process.exit(1);
}

const MIN_STOP_MIN = 45;   // below this it is a light, a fuel stop, or traffic
const MAX_STOP_MIN = 600;  // above this it is overnight parking
const EXCLUDE_KM = 0.35;

/** Minimal CSV reader that respects quoted fields containing commas. */
function parseCsv(text) {
  const rows = [];
  let row = [], field = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') q = false;
      else field += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
    else if (c !== '\r') field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const head = rows.shift().map((h) => h.trim());
  return rows.filter((r) => r.length > 1).map((r) => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ''])));
}

const parseWhen = (s) => {
  // "08/28/2026 06:13 PM"
  const m = (s || '').match(/(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})\s*(AM|PM)/i);
  if (!m) return null;
  let h = Number(m[4]) % 12;
  if (/PM/i.test(m[6])) h += 12;
  return new Date(Number(m[3]), Number(m[1]) - 1, Number(m[2]), h, Number(m[5]));
};
const parseLatLng = (s) => {
  const m = (s || '').match(/(-?\d+\.\d+)\s*,\s*(-?\d+\.\d+)/);
  return m ? { lat: Number(m[1]), lon: Number(m[2]) } : null;
};
const parseAddr = (a) => {
  const m = (a || '').match(/,\s*([A-Za-z .'-]+),\s*([A-Z]{2})\s*(\d{5})?/);
  return { city: m ? m[1].trim() : null, zip: m && m[3] ? m[3] : null };
};

const rows = parseCsv(readFileSync(src, 'utf8'));
console.log(`trips in export: ${rows.length}`);

// Gaps between consecutive trips, per vehicle.
const byVehicle = {};
for (const r of rows) {
  const v = (r.Nickname || 'unknown').trim();
  (byVehicle[v] ||= []).push(r);
}

const gaps = [];
for (const [vehicle, trips] of Object.entries(byVehicle)) {
  const t = trips
    .map((r) => ({
      start: parseWhen(r['Start Date/Time']),
      end: parseWhen(r['End Date/Time']),
      pos: parseLatLng(r['End Location Lat/Lng']),
      addr: r['End Location'],
    }))
    .filter((x) => x.start && x.end && x.pos)
    .sort((a, b) => a.end - b.end);

  for (let i = 0; i < t.length - 1; i++) {
    const mins = (t[i + 1].start - t[i].end) / 60000;
    if (mins <= 0) continue;
    gaps.push({ vehicle, arrive: t[i].end, mins, ...t[i].pos, addr: t[i].addr });
  }
  console.log(`  ${vehicle.padEnd(16)} trips ${String(t.length).padStart(5)}`);
}

/** The yard is where the trucks sit overnight, far more than anywhere else. */
function detectYard(all) {
  const overnight = all.filter((g) => g.mins > MAX_STOP_MIN);
  if (overnight.length < 5) return null;
  const clusters = [];
  for (const g of overnight) {
    const hit = clusters.find((c) => Math.hypot((g.lat - c.lat) * 111, (g.lon - c.lon) * 89) <= EXCLUDE_KM);
    if (hit) {
      hit.n++;
      hit.lat = (hit.lat * (hit.n - 1) + g.lat) / hit.n;
      hit.lon = (hit.lon * (hit.n - 1) + g.lon) / hit.n;
    } else clusters.push({ lat: g.lat, lon: g.lon, n: 1 });
  }
  clusters.sort((a, b) => b.n - a.n);
  const top = clusters[0];
  const share = top.n / overnight.length;
  return share >= 0.25 ? { ...top, share, nights: overnight.length } : null;
}

const yard = detectYard(gaps);
const isYard = (g) => yard && Math.hypot((g.lat - yard.lat) * 111, (g.lon - yard.lon) * 89) <= EXCLUDE_KM;

/**
 * Neighborhood resolution, best source first:
 *   1. the curated anchors (owner-verified where marked)
 *   2. the repo's 56-neighborhood dataset, nearest within 3km
 * City always comes from the geocoded address, which is authoritative.
 */
function resolve(g) {
  const anchor = resolveNeighborhood(g.lat, g.lon);
  if (anchor) return { neighborhood: anchor.name, source: 'anchor' };
  let best = null;
  for (const n of serviceAreaNeighborhoods) {
    if (n.lat == null) continue;
    const km = Math.hypot((g.lat - n.lat) * 111, (g.lon - n.lng) * 89);
    if (km <= 3 && (!best || km < best.km)) best = { neighborhood: n.name, km, source: 'dataset' };
  }
  return best ?? { neighborhood: null, source: 'none' };
}

const stops = gaps
  .filter((g) => g.mins >= MIN_STOP_MIN && g.mins <= MAX_STOP_MIN && !isYard(g))
  .map((g) => {
    const { city, zip } = parseAddr(g.addr);
    const { neighborhood } = resolve(g);
    return {
      date: g.arrive.toISOString().slice(0, 10),
      minutes: Math.round(g.mins),
      // ~1km precision, deliberately. See the privacy note at the top.
      lat: Number(g.lat.toFixed(2)),
      lon: Number(g.lon.toFixed(2)),
      city,
      zip,
      neighborhood,
      vehicle: g.vehicle,
    };
  })
  .sort((a, b) => a.date.localeCompare(b.date));

const count = (key) =>
  stops.reduce((m, s) => (s[key] ? ((m[s[key]] = (m[s[key]] || 0) + 1), m) : m), {});
const byNeighborhood = count('neighborhood');
const byCity = count('city');
const byZip = count('zip');

console.log(`\ngaps: ${gaps.length}   job stops (${MIN_STOP_MIN}-${MAX_STOP_MIN} min): ${stops.length}`);
if (yard) console.log(`yard: ${Math.round(yard.share * 100)}% of ${yard.nights} overnight stops — excluded`);
else console.log('yard: not identified; counts may include overnight parking');

console.log('\nby city:');
for (const [k, n] of Object.entries(byCity).sort((a, b) => b[1] - a[1])) console.log(`  ${String(n).padStart(5)}  ${k}`);
console.log('\nby neighborhood (top 20):');
for (const [k, n] of Object.entries(byNeighborhood).sort((a, b) => b[1] - a[1]).slice(0, 20))
  console.log(`  ${String(n).padStart(5)}  ${k}`);
const unresolved = stops.filter((s) => !s.neighborhood).length;
console.log(`\nunresolved neighborhood: ${unresolved} of ${stops.length}`);

const dates = stops.map((s) => s.date).sort();
const payload = {
  generated: new Date().toISOString(),
  source: 'Bouncie Trip Data Export',
  from: dates[0] ?? null,
  to: dates.at(-1) ?? null,
  windowDays: dates.length ? Math.round((new Date(dates.at(-1)) - new Date(dates[0])) / 864e5) : 0,
  minStopMinutes: MIN_STOP_MIN,
  stopCount: stops.length,
  byCity,
  byZip,
  byNeighborhood,
  stops,
};

if (DRY) console.log('\n--dry-run: nothing written.');
else {
  writeFileSync(OUT, JSON.stringify(payload, null, 2) + '\n');
  console.log(`\nwrote ${OUT.replace(root + '/', '')}`);
}
