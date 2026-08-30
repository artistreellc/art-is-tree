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
import { NEIGHBORHOOD_ANCHORS, MAX_KM, haversineKm } from '../src/constants/neighborhoodAnchors.js';
import { serviceAreaNeighborhoods } from '../src/data/serviceAreaNeighborhoods.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'src', 'constants', 'jobLog.json');
const src = process.argv[2];
const DRY = process.argv.includes('--dry-run');
if (!src) {
  console.error('usage: node scripts/build-job-log.mjs <export.csv> [--dry-run]');
  process.exit(1);
}

// 45 minutes is what separates working from everything else a truck does, and
// fuel is the case worth stating because these are diesel trucks that refuel
// constantly. In the real export the most-visited location in the entire year
// is a stop on Indian River Rd: 69 separate days, median duration 9 minutes,
// exactly one visit reaching 45 minutes. Fuel is frequent and brief, so the
// floor removes it without any need to special-case it. The next four
// most-visited locations behave the same way — 3 to 9 minute medians, one
// long stop between them.
const MIN_STOP_MIN = 45;
const MAX_STOP_MIN = 600;  // above this it is overnight parking
const EXCLUDE_KM = 0.35;

// ONE JOB IS NOT ONE STOP. Read this before touching the numbers.
//
// A stop is one truck sitting still. A job is one customer's property. The chip
// truck and the grapple truck roll to the same address and each logs its own
// stop; the bucket truck joins on the tall work; any of them may leave to dump
// and come back. In the real export that is a 49% overcount — 706 stops for 361
// same-day sites — and 122 sites had more than one truck on them.
//
// So stops are grouped into jobs by place and time: within JOB_RADIUS_M of each
// other and no more than JOB_MERGE_DAYS apart. The day window is what keeps a
// two-day removal from counting twice, and what stops next spring's job at the
// same house from merging into this one.
//
// These thresholds barely matter, which is the reassuring part. Sweeping
// 30-60 min x 100-200 m x 1-3 days moves the job count only between 283 and 394,
// while the raw stop count swings 577 to 843. Counting jobs is roughly three
// times more stable than counting stops.
const JOB_RADIUS_M = 150;
const JOB_MERGE_DAYS = 3;

// Places the trucks go that are not customers. Owner-confirmed, one at a time —
// nothing belongs here on a guess, because every entry silently deletes work.
// These are business locations, never a customer address.
const EXCLUDED_SITES = [
  {
    name: 'Repair shop',
    lat: 36.7652, lon: -76.3592, radiusM: 250,
    // 31 visits, and the reason it has to be removed before the yard is found
    // rather than after: the stays run 17, 28 and 44 days, which fed straight
    // into overnight-stop clustering. Eight visits landed in the 45-600 min
    // window and were being counted as Chesapeake jobs. Cluster spread is 61m,
    // so 250m is comfortable without reaching any neighbouring property.
  },
];
const isExcluded = (g) =>
  EXCLUDED_SITES.some(
    (s) => Math.hypot((g.lat - s.lat) * 111000, (g.lon - s.lon) * 89000) <= s.radiusM,
  );

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

const excludedCount = gaps.filter(isExcluded).length;
for (let i = gaps.length - 1; i >= 0; i--) if (isExcluded(gaps[i])) gaps.splice(i, 1);
if (excludedCount) {
  console.log(
    `\nexcluded ${excludedCount} stops at ${EXCLUDED_SITES.length} known non-customer site(s): ` +
      EXCLUDED_SITES.map((s) => s.name).join(', '),
  );
}

/**
 * The yard is where the trucks sit overnight, far more than anywhere else.
 * It doubles as the dump site — owner-confirmed — which is why debris never
 * shows up as a landfill anywhere in the trip data.
 */
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
 * DUMP RUNS — why there is no rule excluding them, having checked that there
 * should not be.
 *
 * All three trucks fill up and have to empty out, so the owner's expectation was
 * that a truck leaving a site and returning a trip or two later had gone to dump,
 * and the stop in between was a landfill being miscounted as a job. The pattern
 * is real. The conclusion does not follow, because of where the dumping happens.
 *
 * No landfill appears anywhere in the export, and the owner confirmed why: the
 * lot where the trucks park IS the dump site. Stops bracketed by a return to the
 * same place scatter across 79 distinct locations, 79 of 111 under fifteen
 * minutes, on roads like Lynnhaven Pkwy and Independence Blvd — errands. What
 * shows up instead is 396 mid-day visits to the yard, 271 of them under fifteen
 * minutes, and 75 round trips of job -> yard -> back to the same job inside a
 * day.
 *
 * That is already handled twice: the yard exclusion drops the dump stop, and
 * grouping merges the two visits either side of it into one job.
 *
 * Adding a bracket rule on top would actively destroy data. Of the bracketed
 * stops, 16 run 45 minutes to five hours on residential streets — Ormond Ct,
 * Penrith Clos, Harrington Ct. Those are second jobs worked between two visits
 * to a first one, and a dump-run rule would silently delete all of them.
 *
 * So this is a diagnostic, not a filter. If dumping ever moves off-site, the
 * round-trip count here drops and the landfill starts appearing in the recurring
 * locations report below.
 */
function countDumpRuns(all) {
  const perVehicle = {};
  for (const g of all) if (g.mins <= MAX_STOP_MIN) (perVehicle[g.vehicle] ||= []).push(g);
  let runs = 0;
  for (const list of Object.values(perVehicle)) {
    list.sort((a, b) => a.arrive - b.arrive);
    for (let i = 0; i < list.length; i++) {
      if (isYard(list[i])) continue;
      for (let j = i + 2; j < Math.min(i + 5, list.length); j++) {
        const back =
          Math.hypot((list[i].lat - list[j].lat) * 111000, (list[i].lon - list[j].lon) * 89000) <= JOB_RADIUS_M;
        if (!back || (list[j].arrive - list[i].arrive) / 36e5 > 14) continue;
        if (list.slice(i + 1, j).some(isYard)) runs++;
        break;
      }
    }
  }
  return runs;
}

/**
 * Neighborhood resolution, best source first:
 *   1. the curated anchors (owner-verified where marked)
 *   2. the repo's 56-neighborhood dataset, nearest within 3km
 *
 * THE CITY FROM THE ADDRESS IS AUTHORITATIVE AND CONSTRAINS THE MATCH.
 * Nearest-by-distance alone is wrong on every city line in Hampton Roads, and
 * these lines are close together: Ocean View and East Beach are Norfolk, but
 * they sit near enough to the Virginia Beach border that a pure distance match
 * can hand a Norfolk job to a Virginia Beach neighborhood or the reverse. The
 * geocoder already knows which city the truck was standing in, so a candidate
 * in a different city is rejected outright rather than accepted as "closest".
 *
 * With no city on the address there is nothing to check against, so the match
 * runs unconstrained and is tagged as such.
 */
function resolve(g, city) {
  const sameCity = (c) => !city || !c || c.toLowerCase() === city.toLowerCase();
  let best = null;
  const consider = (name, c, km, limit, source) => {
    if (km > limit || !sameCity(c)) return;
    if (!best || km < best.km) best = { neighborhood: name, km, source: city ? source : `${source}:uncheckedCity` };
  };
  for (const a of NEIGHBORHOOD_ANCHORS) {
    consider(a.name, a.city, haversineKm(g.lat, g.lon, a.lat, a.lon), MAX_KM, 'anchor');
  }
  if (best) return best;
  for (const n of serviceAreaNeighborhoods) {
    if (n.lat == null) continue;
    consider(n.name, n.city, haversineKm(g.lat, g.lon, n.lat, n.lng), 3, 'dataset');
  }
  return best ?? { neighborhood: null, source: 'none' };
}

// Full precision here on purpose: grouping happens at 150m, so the ~1km
// rounding that protects the customer has to come after it, not before.
const stops = gaps
  .filter((g) => g.mins >= MIN_STOP_MIN && g.mins <= MAX_STOP_MIN && !isYard(g))
  .map((g) => {
    const addr = parseAddr(g.addr);
    return { ...g, ...addr, ...resolve(g, addr.city) };
  })
  .sort((a, b) => a.arrive - b.arrive);

/** Most frequent non-null value, so one odd geocode cannot relabel a job. */
function mode(values) {
  const tally = {};
  for (const v of values) if (v) tally[v] = (tally[v] || 0) + 1;
  return Object.entries(tally).sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
}

/** Collapse stops into jobs by place and time. Stops arrive already sorted. */
function groupJobs(all) {
  const jobs = [];
  for (const s of all) {
    const day = Math.floor(s.arrive / 864e5);
    const hit = jobs.find(
      (j) =>
        day - j.lastDay <= JOB_MERGE_DAYS &&
        Math.hypot((s.lat - j.lat) * 111000, (s.lon - j.lon) * 89000) <= JOB_RADIUS_M,
    );
    if (hit) {
      hit.stops.push(s);
      hit.lastDay = day;
    } else jobs.push({ lat: s.lat, lon: s.lon, lastDay: day, stops: [s] });
  }
  return jobs.map((j) => {
    const days = [...new Set(j.stops.map((s) => s.arrive.toISOString().slice(0, 10)))].sort();
    return {
      date: days[0],
      days: days.length,
      // Full precision, stripped before the payload is written. Any distance
      // test has to run on this: the published coordinates are rounded to about
      // 1km, so at that resolution a "within 300m" check matches every property
      // in the same grid cell and reports the whole city as recurring.
      precise: { lat: j.lat, lon: j.lon },
      // ~1km precision, deliberately. See the privacy note at the top.
      lat: Number(j.lat.toFixed(2)),
      lon: Number(j.lon.toFixed(2)),
      city: mode(j.stops.map((s) => s.city)),
      zip: mode(j.stops.map((s) => s.zip)),
      neighborhood: mode(j.stops.map((s) => s.neighborhood)),
      hours: Number((j.stops.reduce((t, s) => t + s.mins, 0) / 60).toFixed(1)),
      trucks: [...new Set(j.stops.map((s) => s.vehicle))].length,
    };
  });
}

const jobs = groupJobs(stops).sort((a, b) => a.date.localeCompare(b.date));

const count = (key) =>
  jobs.reduce((m, j) => (j[key] ? ((m[j[key]] = (m[j[key]] || 0) + 1), m) : m), {});
const byNeighborhood = count('neighborhood');
const byCity = count('city');
const byZip = count('zip');

console.log(`\ngaps: ${gaps.length}   stops (${MIN_STOP_MIN}-${MAX_STOP_MIN} min): ${stops.length}`);
if (yard) {
  const midday = gaps.filter((g) => isYard(g) && g.mins <= MAX_STOP_MIN);
  console.log(`yard: ${Math.round(yard.share * 100)}% of ${yard.nights} overnight stops — excluded`);
  console.log(
    `dump runs: ${countDumpRuns(gaps)} round trips job -> yard -> same job, ` +
      `${midday.length} mid-day yard visits (${midday.filter((g) => g.mins < 15).length} under 15 min). ` +
      `Debris goes to the yard, so these are already out of the count.`,
  );
} else console.log('yard: not identified; counts may include overnight parking');

const multiTruck = jobs.filter((j) => j.trucks > 1).length;
const multiDay = jobs.filter((j) => j.days > 1).length;
console.log(
  `\njobs after grouping: ${jobs.length}  ` +
    `(${stops.length - jobs.length} duplicate stops collapsed — ` +
    `${multiTruck} jobs ran more than one truck, ${multiDay} spanned more than a day)`,
);

// A customer's property is a one-time visit. A location that keeps producing
// separate long stops months apart is something else — a dump, a supply yard, a
// standing commercial account — and only the owner can say which. These are
// reported rather than dropped, because guessing either way corrupts the count.
const recurring = [];
for (const j of jobs) {
  const hit = recurring.find(
    (r) =>
      Math.hypot((j.precise.lat - r.lat) * 111000, (j.precise.lon - r.lon) * 89000) <= JOB_RADIUS_M * 2,
  );
  if (hit) hit.dates.push(j.date);
  else recurring.push({ lat: j.precise.lat, lon: j.precise.lon, dates: [j.date], show: [j.lat, j.lon] });
}
const suspect = recurring
  .filter((r) => r.dates.length >= 3)
  .map((r) => ({ ...r, span: Math.round((new Date(r.dates.at(-1)) - new Date(r.dates[0])) / 864e5) }))
  .filter((r) => r.span > 60);
if (suspect.length) {
  console.log('\n⚠ locations producing repeat jobs over a long span — confirm these are customers:');
  for (const r of suspect.sort((a, b) => b.dates.length - a.dates.length))
    console.log(`  ${String(r.dates.length).padStart(3)} jobs over ${r.span}d near ${r.show[0]}, ${r.show[1]}`);
  console.log('  (coordinates are the rounded ~1km ones, enough to locate on a map)');
}

console.log('\nby city:');
for (const [k, n] of Object.entries(byCity).sort((a, b) => b[1] - a[1])) console.log(`  ${String(n).padStart(5)}  ${k}`);
// Grouped under the city each neighborhood actually belongs to. A flat list
// hides exactly the mistake worth catching — Ocean View and East Beach reading
// as Virginia Beach when both are Norfolk.
console.log('\nby neighborhood, under its city:');
const cityOf = {};
for (const j of jobs) if (j.neighborhood && j.city) cityOf[j.neighborhood] = j.city;
for (const [city] of Object.entries(byCity).sort((a, b) => b[1] - a[1])) {
  const here = Object.entries(byNeighborhood)
    .filter(([n]) => cityOf[n] === city)
    .sort((a, b) => b[1] - a[1]);
  const named = here.reduce((t, [, n]) => t + n, 0);
  console.log(`\n  ${city} — ${byCity[city]} jobs, ${byCity[city] - named} not resolved to a neighborhood`);
  for (const [n, c] of here) console.log(`    ${String(c).padStart(4)}  ${n}`);
}
const unresolved = jobs.filter((j) => !j.neighborhood).length;
console.log(`\nunresolved neighborhood: ${unresolved} of ${jobs.length} jobs`);

const dates = jobs.map((j) => j.date).sort();
const payload = {
  generated: new Date().toISOString(),
  source: 'Bouncie Trip Data Export',
  from: dates[0] ?? null,
  to: dates.at(-1) ?? null,
  windowDays: dates.length ? Math.round((new Date(dates.at(-1)) - new Date(dates[0])) / 864e5) : 0,
  minStopMinutes: MIN_STOP_MIN,
  jobRadiusM: JOB_RADIUS_M,
  jobMergeDays: JOB_MERGE_DAYS,
  // Both are kept so the grouping stays auditable: jobCount is what the site
  // may claim, stopCount is the unreduced input it came from.
  jobCount: jobs.length,
  stopCount: stops.length,
  byCity,
  byZip,
  byNeighborhood,
  // `precise` is dropped here: it exists only for in-script distance tests.
  jobs: jobs.map(({ precise, ...j }) => j),
};

if (DRY) console.log('\n--dry-run: nothing written.');
else {
  writeFileSync(OUT, JSON.stringify(payload, null, 2) + '\n');
  console.log(`\nwrote ${OUT.replace(root + '/', '')}`);
}
