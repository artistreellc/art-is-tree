// Build the 2023-2025 job history by geocoding the completed-jobs records.
//
//   node scripts/build-job-history.mjs \
//     --drive <drive_jobs.json> --cal <cal_events.json> --trips <Trip_Data_Export.csv> \
//     [--cache <path>] [--limit N] [--offline] [--dry-run]
//
// WHY THIS EXISTS. The GPS trackers prove twelve months of work with
// coordinates, but three more years live in the Drive completed-jobs folders
// and the Google Calendar — as ADDRESSES, which the site cannot place in a
// neighborhood without turning them into points. This script does that turn,
// through the Google Maps Geocoding API, under the owner's own API key.
//
// PRIVACY — READ BEFORE CHANGING ANYTHING HERE (CLAUDE.md section 10)
// The inputs carry customer names and home addresses. The rules:
//   - Addresses are sent ONLY to Google's Geocoding API, under the owner's own
//     key and Google account. Nowhere else, ever.
//   - The geocode cache holds full-precision results and therefore lives
//     OUTSIDE the repo. The script refuses a cache path inside the repo.
//   - The committed output holds NO address, NO name, NO price, and no
//     coordinate finer than ~1km. A job row answers "which neighborhood",
//     never "which house".
//   - The API key comes from the environment or a gitignored .env. It is
//     never written to any file in the repo and never printed.
//
// WHAT COUNTS AS A JOB (the inflation rule, learned the hard way):
//   - A Drive file in a completed-jobs folder is a completed job.
//   - A calendar event is an ESTIMATE — evidence of where a job was, never a
//     job by itself. Events are geocoded to give completed jobs their
//     coordinates, and are only counted through the Drive record they link to.
//   - Records dated inside the tracker window are dropped: the trucks already
//     counted that work, and counting it twice is the error that got the
//     first version of this analysis reverted.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve as resolvePath } from 'node:path';
import { homedir } from 'node:os';
import { NEIGHBORHOOD_ANCHORS, MAX_KM, haversineKm } from '../src/constants/neighborhoodAnchors.js';
import { serviceAreaNeighborhoods } from '../src/data/serviceAreaNeighborhoods.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'src', 'constants', 'jobHistory.json');

// --- arguments ---------------------------------------------------------------
const arg = (name) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 ? process.argv[i + 1] : null;
};
const has = (name) => process.argv.includes(`--${name}`);
const DRIVE = arg('drive');
const CAL = arg('cal');
const TRIPS = arg('trips');
const DRY = has('dry-run');
const OFFLINE = has('offline'); // gazetteer + cache only; no API calls
const LIMIT = arg('limit') ? Number(arg('limit')) : Infinity;
const CACHE_PATH = arg('cache') || join(homedir(), '.artistree', 'geocode-cache.json');

if (!DRIVE || !CAL || !TRIPS) {
  console.error(
    'usage: node scripts/build-job-history.mjs --drive <drive_jobs.json> --cal <cal_events.json> --trips <trips.csv> [--cache <path>] [--limit N] [--offline] [--dry-run]',
  );
  process.exit(1);
}

// The cache stores full-precision coordinates keyed by customer address, so it
// must never be able to reach git. Refusing here beats trusting .gitignore.
if (resolvePath(CACHE_PATH).startsWith(root + '/')) {
  console.error(`refusing cache path inside the repo: ${CACHE_PATH}`);
  process.exit(1);
}

// --- API key: environment first, then gitignored .env. Never printed. --------
function loadKey() {
  if (!process.env.GOOGLE_MAPS_API_KEY && existsSync(join(root, '.env'))) {
    for (const line of readFileSync(join(root, '.env'), 'utf8').split('\n')) {
      const m = line.match(/^\s*GOOGLE_MAPS_API_KEY\s*=\s*(.*)\s*$/);
      if (m) process.env.GOOGLE_MAPS_API_KEY = m[1].replace(/^["']|["']$/g, '');
    }
  }
  return process.env.GOOGLE_MAPS_API_KEY || null;
}
const KEY = loadKey();
if (!KEY && !OFFLINE) {
  console.error(
    '\nGOOGLE_MAPS_API_KEY is not set. Put it in the environment or in .env (gitignored):\n' +
      '  GOOGLE_MAPS_API_KEY=...\n' +
      'Or run with --offline to use only the truck gazetteer and existing cache.\n',
  );
  process.exit(1);
}

// --- shared parsing helpers (same behavior as build-job-log.mjs) -------------
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

const SUFFIX = {
  street: 'st', st: 'st', road: 'rd', rd: 'rd', drive: 'dr', dr: 'dr',
  avenue: 'ave', ave: 'ave', av: 'ave', lane: 'ln', ln: 'ln', court: 'ct', ct: 'ct',
  circle: 'cir', cir: 'cir', boulevard: 'blvd', blvd: 'blvd', place: 'pl', pl: 'pl',
  parkway: 'pkwy', pkwy: 'pkwy', crescent: 'cres', cres: 'cres', trail: 'trl', trl: 'trl',
  terrace: 'ter', ter: 'ter', way: 'way', wy: 'way', cove: 'cove', point: 'point',
  quay: 'quay', close: 'close', arch: 'arch', run: 'run', square: 'sq', sq: 'sq', loop: 'loop',
};
const normStreet = (s) =>
  (s || '')
    .toLowerCase()
    .replace(/[.,'']/g, ' ')
    .split(/\s+/)
    .map((w) => SUFFIX[w] || w)
    .filter(Boolean)
    .join(' ')
    .trim();

// City tokens as they appear at the tail of Drive filenames. 'n' really is
// Norfolk in this archive ("Brittany Lena N $5800") — verified against files
// whose PDFs name the city in full.
const CITY_TOKEN = {
  vb: 'Virginia Beach', zvb: 'Virginia Beach', 'virginia beach': 'Virginia Beach',
  nor: 'Norfolk', nfk: 'Norfolk', norfolk: 'Norfolk', n: 'Norfolk',
  ches: 'Chesapeake', chesapeake: 'Chesapeake',
  p: 'Portsmouth', ports: 'Portsmouth', portsmouth: 'Portsmouth',
  suffolk: 'Suffolk', suf: 'Suffolk',
};
const AREA_CITIES = new Set([
  'Virginia Beach', 'Norfolk', 'Chesapeake', 'Portsmouth', 'Suffolk',
  'Hampton', 'Newport News', 'Moyock', 'Knotts Island',
]);

function resolveNeighborhoodAt(lat, lon, city) {
  const same = (c) => !city || !c || c.toLowerCase() === city.toLowerCase();
  let best = null;
  const consider = (n, c, km, lim) => {
    if (km <= lim && same(c) && (!best || km < best.km)) best = { n, km };
  };
  for (const a of NEIGHBORHOOD_ANCHORS) consider(a.name, a.city, haversineKm(lat, lon, a.lat, a.lon), MAX_KM);
  if (best) return best.n;
  for (const n of serviceAreaNeighborhoods) {
    if (n.lat == null) continue;
    consider(n.name, n.city, haversineKm(lat, lon, n.lat, n.lng), 3);
  }
  return best ? best.n : null;
}

// --- geocoding ---------------------------------------------------------------
// curl is spawned instead of using fetch because this environment routes HTTPS
// through a proxy that Node 22's fetch does not honor; curl reads HTTPS_PROXY
// and the proxy CA automatically, here and on a normal laptop alike. The
// request is fed through stdin (--config -) so the URL — which carries the API
// key and a customer address — never appears in a process list.
function curlJson(url) {
  return new Promise((res) => {
    const p = spawn('curl', ['--config', '-'], { stdio: ['pipe', 'pipe', 'pipe'] });
    let out = '';
    p.stdout.on('data', (d) => (out += d));
    p.on('close', () => {
      try { res(JSON.parse(out)); } catch { res(null); }
    });
    p.stdin.write(`url = ${JSON.stringify(url)}\nsilent\nshow-error\nmax-time = 20\n`);
    p.stdin.end();
  });
}

let cache = {};
if (existsSync(CACHE_PATH)) cache = JSON.parse(readFileSync(CACHE_PATH, 'utf8'));
mkdirSync(dirname(CACHE_PATH), { recursive: true });
const saveCache = () => writeFileSync(CACHE_PATH, JSON.stringify(cache));

let apiCalls = 0;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Geocode one address string, cache-first. Returns
 *   { lat, lon, city, zip, precision } or { failed: reason }.
 * Every response is validated before it is trusted:
 *   - the point must land inside greater Hampton Roads, and
 *   - the returned locality must be a city this company could plausibly serve.
 * A geocoder happily "finds" a Virginia Beach street name in Texas; validation
 * is what keeps that from becoming a job in Texas.
 */
async function geocode(addr) {
  const k = addr.toLowerCase().trim();
  if (cache[k]) return cache[k];
  if (OFFLINE) return { failed: 'offline' };
  if (apiCalls >= LIMIT) return { failed: 'limit' };

  const url =
    'https://maps.googleapis.com/maps/api/geocode/json' +
    `?address=${encodeURIComponent(addr)}` +
    '&components=' + encodeURIComponent('country:US|administrative_area:VA') +
    '&bounds=' + encodeURIComponent('36.55,-76.65|37.05,-75.85') +
    `&key=${KEY}`;

  let body = null;
  for (let attempt = 0; attempt < 3; attempt++) {
    apiCalls++;
    body = await curlJson(url);
    if (body && body.status !== 'OVER_QUERY_LIMIT' && body.status !== 'UNKNOWN_ERROR') break;
    await sleep(1000 * 2 ** attempt);
  }
  await sleep(60); // stay far under Google's rate limit

  if (!body) return (cache[k] = { failed: 'network' });
  if (body.status === 'REQUEST_DENIED') {
    // Do not cache: this is a key problem, not an address problem.
    console.error(`\ngeocoder refused the key: ${body.error_message || body.status}`);
    process.exit(1);
  }
  if (body.status !== 'OK' || !body.results?.length) return (cache[k] = { failed: body.status });

  const r = body.results[0];
  const { lat, lng } = r.geometry.location;
  const comp = (type) => r.address_components.find((c) => c.types.includes(type))?.long_name || null;
  const city = comp('locality') || comp('sublocality') || comp('administrative_area_level_2');
  const zip = comp('postal_code');
  const precision = r.geometry.location_type; // ROOFTOP > RANGE_INTERPOLATED > GEOMETRIC_CENTER > APPROXIMATE

  if (lat < 36.4 || lat > 37.2 || lng < -76.9 || lng > -75.7) return (cache[k] = { failed: 'out-of-area' });
  if (!city || !AREA_CITIES.has(city)) return (cache[k] = { failed: `city:${city || 'none'}` });
  return (cache[k] = { lat, lon: lng, city, zip, precision });
}

// --- 1. truck gazetteer: free ground truth, and a cross-check on Google ------
console.log('building the truck gazetteer...');
const trips = parseCsv(readFileSync(TRIPS, 'utf8'));
const gazRaw = new Map();
for (const t of trips) {
  const m = (t['End Location Lat/Lng'] || '').match(/(-?\d+\.\d+)\s*,\s*(-?\d+\.\d+)/);
  const parts = (t['End Location'] || '').split(',');
  if (!m || parts.length < 3) continue;
  const s = normStreet(parts[0].replace(/^\s*\d+\s+/, ''));
  const city = parts[1].trim();
  if (s.length < 4 || !city) continue;
  const nb = resolveNeighborhoodAt(Number(m[1]), Number(m[2]), city);
  if (!nb) continue;
  if (!gazRaw.has(s)) gazRaw.set(s, new Map());
  const key = `${city}|${nb}|${Number(m[1]).toFixed(3)}|${Number(m[2]).toFixed(3)}`;
  gazRaw.get(s).set(key, (gazRaw.get(s).get(key) || 0) + 1);
}
const gazetteer = new Map(); // street -> {city, nb, lat, lon} where one city only
for (const [s, tally] of gazRaw) {
  const cities = new Set([...tally.keys()].map((x) => x.split('|')[0]));
  if (cities.size !== 1) continue;
  const [city, nb, lat, lon] = [...tally].sort((a, b) => b[1] - a[1])[0][0].split('|');
  gazetteer.set(s, { city, nb, lat: Number(lat), lon: Number(lon) });
}
console.log(`  ${gazetteer.size} unambiguous streets from ${trips.length} trips`);

// --- 2. calendar: geocode estimate addresses ---------------------------------
// The location field is a full street address with no city on 99% of rows.
// Geocoding is constrained to VA + a Hampton Roads viewport, and the returned
// city is validated, so an ambiguous street either resolves correctly or is
// reported as failed — never quietly guessed.
console.log('geocoding calendar estimate addresses...');
const calEvents = JSON.parse(readFileSync(CAL, 'utf8'));
const dayOf = (e) => (e.start?.dateTime || e.start?.date || '').slice(0, 10);
const calByStreet = new Map(); // normalized street -> [{date, lat, lon, city, zip, precision}]
let calOk = 0, calFail = 0, calSkipped = 0;
const calFailReasons = {};
for (const e of calEvents) {
  const loc = (e.location || '').trim();
  const date = dayOf(e);
  if (!loc || !date) { calSkipped++; continue; }
  const g = await geocode(/,\s*va/i.test(loc) ? loc : `${loc}, VA`);
  if (g.failed) {
    calFail++;
    calFailReasons[g.failed] = (calFailReasons[g.failed] || 0) + 1;
    continue;
  }
  calOk++;
  const street = normStreet(loc.split(',')[0].replace(/^\s*\d+\s+/, ''));
  if (street.length > 3) {
    if (!calByStreet.has(street)) calByStreet.set(street, []);
    calByStreet.get(street).push({ date, ...g });
  }
  if (calOk % 200 === 0) { saveCache(); console.log(`  ${calOk} geocoded...`); }
}
saveCache();
console.log(`  calendar: ${calOk} geocoded, ${calFail} failed, ${calSkipped} without location/date`);
if (calFail) console.log('  failure reasons:', JSON.stringify(calFailReasons));

// --- 3. Drive completed jobs: the records that actually count ----------------
console.log('placing completed-job records...');
const driveFiles = JSON.parse(readFileSync(DRIVE, 'utf8')).filter(
  (f) => !/folder|shortcut/.test(f.mimeType || ''),
);

// The tracker already owns everything after its start date. jobLog.json is the
// authority on where that boundary sits.
const jobLog = JSON.parse(readFileSync(join(root, 'src', 'constants', 'jobLog.json'), 'utf8'));
const trackerStart = jobLog.from || '9999-12-31';

function parseTitle(title) {
  const base = title.replace(/\.(pdf|jpe?g|heic|png|docx)$/i, '');
  const toks = base.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean);
  let city = null;
  const rest = [];
  for (let i = 0; i < toks.length; i++) {
    // city tokens bind from the right; prices and 4-6 digit numbers are noise
    if (i === toks.length - 1 || i === toks.length - 2) {
      if (CITY_TOKEN[toks[i]]) { city = CITY_TOKEN[toks[i]]; continue; }
    }
    if (/^\d+k?$/.test(toks[i]) || /^\$\d/.test(toks[i])) continue;
    rest.push(toks[i]);
  }
  // candidate street phrases, suffix-anchored first, longest first
  const candidates = [];
  for (let i = 0; i < rest.length; i++) {
    if (SUFFIX[rest[i]]) {
      for (const len of [3, 2]) {
        const start = i - (len - 1);
        if (start >= 0) candidates.push(normStreet(rest.slice(start, i + 1).join(' ')));
      }
    }
  }
  // fallback: the whole leftover, and the leftover minus a likely surname
  if (!candidates.length && rest.length) {
    candidates.push(normStreet(rest.join(' ')));
    if (rest.length > 1) candidates.push(normStreet(rest.slice(1).join(' ')));
  }
  return { city, candidates: [...new Set(candidates)].filter((c) => c.length > 3) };
}

const jobs = [];
const tally = { linked: 0, geocoded: 0, gazetteer: 0, unresolved: 0, overlap: 0 };
const disagreements = [];

for (const f of driveFiles) {
  const done = (f.createdTime || '').slice(0, 10);
  if (!done) continue;
  if (done >= trackerStart) { tally.overlap++; continue; }

  const { city: fileCity, candidates } = parseTitle(f.title || '');
  let placed = null;

  // (a) link to a geocoded calendar estimate: best evidence, and it carries
  // the estimate date the owner asked to keep alongside the completion date
  for (const cand of candidates) {
    const events = calByStreet.get(cand) || [];
    const match = events
      .filter((e) => !fileCity || e.city === fileCity)
      .filter((e) => {
        const gap = (new Date(done) - new Date(e.date)) / 864e5;
        return gap >= -14 && gap <= 240; // estimate precedes completion, within ~8 months
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date))[0];
    if (match) {
      placed = { ...match, estimateDate: match.date, source: 'calendar-linked' };
      tally.linked++;
      break;
    }
  }

  // (b) geocode the street from the filename, city-constrained
  if (!placed && fileCity) {
    for (const cand of candidates) {
      const g = await geocode(`${cand}, ${fileCity}, VA`);
      if (!g.failed && g.city === fileCity) {
        placed = { ...g, source: 'geocoded' };
        tally.geocoded++;
        break;
      }
    }
  }

  // (c) truck gazetteer
  if (!placed) {
    for (const cand of candidates) {
      const g = gazetteer.get(cand);
      if (g && (!fileCity || g.city === fileCity)) {
        placed = { lat: g.lat, lon: g.lon, city: g.city, zip: null, source: 'gazetteer' };
        tally.gazetteer++;
        break;
      }
    }
  }

  if (!placed) { tally.unresolved++; continue; }

  // cross-check: when Google and the trucks both know the street, they must
  // agree on the city — a disagreement is reported, and the record is dropped
  // rather than filed under a coin-flip
  const gz = candidates.map((c) => gazetteer.get(c)).find(Boolean);
  if (gz && placed.city && gz.city !== placed.city) {
    disagreements.push({ city1: placed.city, city2: gz.city });
    tally.unresolved++;
    continue;
  }

  const neighborhood = resolveNeighborhoodAt(placed.lat, placed.lon, placed.city);
  jobs.push({
    date: done,
    estimateDate: placed.estimateDate || null,
    // ~1km precision, same rule as jobLog.json. See the privacy note on top.
    lat: Number(placed.lat.toFixed(2)),
    lon: Number(placed.lon.toFixed(2)),
    city: placed.city,
    zip: placed.zip || null,
    neighborhood,
    source: placed.source,
  });
}
saveCache();

// --- 4. report and write -----------------------------------------------------
jobs.sort((a, b) => a.date.localeCompare(b.date));
const count = (key) => jobs.reduce((m, j) => (j[key] ? ((m[j[key]] = (m[j[key]] || 0) + 1), m) : m), {});
const byCity = count('city');
const byNeighborhood = count('neighborhood');

console.log(`\ncompleted-job records: ${driveFiles.length}`);
console.log(
  `  pre-tracker placed: ${jobs.length}  ` +
    `(linked ${tally.linked}, geocoded ${tally.geocoded}, gazetteer ${tally.gazetteer})`,
);
console.log(`  unresolved: ${tally.unresolved}   already covered by trackers: ${tally.overlap}`);
if (disagreements.length)
  console.log(`  ⚠ Google/gazetteer city disagreements (dropped): ${disagreements.length}`);
console.log(`  API calls this run: ${apiCalls}`);

console.log('\nhistory by city:');
for (const [k, v] of Object.entries(byCity).sort((a, b) => b[1] - a[1]))
  console.log(`  ${String(v).padStart(5)}  ${k}`);
console.log('\nhistory by neighborhood (top 20):');
for (const [k, v] of Object.entries(byNeighborhood).sort((a, b) => b[1] - a[1]).slice(0, 20))
  console.log(`  ${String(v).padStart(5)}  ${k}`);

console.log('\ncombined preview (history + tracker):');
const comb = { ...byCity };
for (const [k, v] of Object.entries(jobLog.byCity || {})) comb[k] = (comb[k] || 0) + v;
for (const [k, v] of Object.entries(comb).sort((a, b) => b[1] - a[1]))
  console.log(`  ${String(v).padStart(5)}  ${k}`);

const dates = jobs.map((j) => j.date);
const payload = {
  generated: new Date().toISOString(),
  source: 'Drive completed-jobs folders + Google Calendar, geocoded',
  from: dates[0] ?? null,
  to: dates.at(-1) ?? null,
  jobCount: jobs.length,
  unresolvedCount: tally.unresolved,
  byCity,
  byNeighborhood,
  jobs,
};

if (DRY) console.log('\n--dry-run: nothing written.');
else {
  writeFileSync(OUT, JSON.stringify(payload, null, 2) + '\n');
  console.log(`\nwrote ${OUT.replace(root + '/', '')}`);
}
