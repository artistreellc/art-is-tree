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
//     OUTSIDE the repo. The script refuses a cache path that lands inside the
//     repo, comparing REAL paths — a symlinked directory does not fool it.
//   - The committed output holds NO address, NO name, NO price, and no
//     coordinate finer than ~1km. A job row answers "which neighborhood",
//     never "which house".
//   - The API key comes from the environment or a gitignored .env. It is
//     never written to any file in the repo and never printed. It travels in
//     a URL fed to curl over stdin, so it never appears in a process list.
//
// WHAT COUNTS AS A JOB (the inflation rule, learned the hard way):
//   - A Drive file in a completed-jobs folder is a completed job.
//   - A calendar event is an ESTIMATE — evidence of where a job was, never a
//     job by itself. Events are geocoded to give completed jobs their
//     coordinates, and are only counted through the Drive record they link to.
//   - Two Drive files that link to the SAME calendar event are one job filed
//     twice (a photo and a scan of the same contract). Counted once.
//   - Records near or inside the tracker window are dropped: the trucks
//     already counted that work. The Drive file is created when the contract
//     is SIGNED, days to weeks before the work is done ("Battle Sammy 11 or
//     12 Sep" was filed Aug 26), so the exclusion extends BOUNDARY_BUFFER_DAYS
//     before the tracker's first day. Undercounting beats double counting.
import { readFileSync, writeFileSync, existsSync, mkdirSync, realpathSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join, sep, resolve as resolvePath } from 'node:path';
import { homedir } from 'node:os';
import { NEIGHBORHOOD_ANCHORS, MAX_KM, haversineKm } from '../src/constants/neighborhoodAnchors.js';
import { serviceAreaNeighborhoods } from '../src/data/serviceAreaNeighborhoods.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'src', 'constants', 'jobHistory.json');

// The Drive file's creation date is the SIGNING date. Work follows it by days
// to weeks, so any record filed this close to the tracker's first day may
// describe work the trucks already counted. Sized from the owner's own filing
// habits (estimates in the archive run up to ~5 weeks ahead of the work).
const BOUNDARY_BUFFER_DAYS = 45;

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
// must never be able to reach git. Real paths are compared, not lexical ones:
// path.resolve() never follows a symlink, so a link pointing into the repo
// would pass a startsWith check while the bytes land inside the repo. The
// check runs at startup AND at every save.
function guardCachePath() {
  const rootReal = realpathSync(root);
  const dir = dirname(resolvePath(CACHE_PATH));
  mkdirSync(dir, { recursive: true });
  const dirReal = realpathSync(dir);
  if (dirReal === rootReal || dirReal.startsWith(rootReal + sep)) {
    console.error(`refusing cache path inside the repo: ${CACHE_PATH} -> ${dirReal}`);
    process.exit(1);
  }
}
guardCachePath();

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
// Words that are neither a name nor a street, seen in real filenames and event
// summaries: scheduling notes, months, honorifics, filler.
const STOPWORDS = new Set([
  'the', 'and', 'mr', 'mrs', 'ms', 'miss', 'job', 'jobs', 'tree', 'trees', 'removal',
  'estimate', 'invoice', 'signed', 'proposal', 'sched', 'scheduled', 'schedule',
  'week', 'after', 'before', 'half', 'each', 'no', 'option', 'postponed', 'ask',
  'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec',
  'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',
]);
const nameTokensOf = (words) =>
  words.filter(
    (w) => /^[a-z]{3,}$/.test(w) && !SUFFIX[w] && !CITY_TOKEN[w] && !STOPWORDS.has(w),
  );

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
    p.on('error', () => res(null));
    p.on('close', () => {
      try { res(JSON.parse(out)); } catch { res(null); }
    });
    p.stdin.write(`url = ${JSON.stringify(url)}\nsilent\nshow-error\nmax-time = 20\n`);
    p.stdin.end();
  });
}

let cache = {};
if (existsSync(CACHE_PATH)) cache = JSON.parse(readFileSync(CACHE_PATH, 'utf8'));
const saveCache = () => {
  guardCachePath();
  writeFileSync(CACHE_PATH, JSON.stringify(cache));
};

let apiCalls = 0;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Geocode one address string, cache-first. Returns
 *   { lat, lon, city, zip, precision, partial, streetLevel } or { failed }.
 *
 * Two classes of outcome, cached differently:
 *   - DEFINITIVE (a fact about the address): OK results, ZERO_RESULTS,
 *     out-of-area, wrong-city. Cached forever.
 *   - TRANSIENT (a fact about the moment): network failures, quota. NEVER
 *     cached — a quota blip that got cached once would silently mark those
 *     customers un-geocodable on every future run. Quota exhaustion aborts
 *     the run loudly instead of grinding on.
 *
 * Every accepted response is validated: the point must land inside greater
 * Hampton Roads and the returned locality must be a city this company could
 * plausibly serve. A geocoder happily "finds" a Virginia Beach street name in
 * Texas; validation is what keeps that from becoming a job in Texas.
 * `streetLevel` records whether Google matched an actual street or house
 * rather than a town centroid — callers decide how much precision they need.
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

  const TRANSIENT = new Set(['OVER_QUERY_LIMIT', 'OVER_DAILY_LIMIT', 'UNKNOWN_ERROR']);
  let body = null;
  for (let attempt = 0; attempt < 3; attempt++) {
    apiCalls++;
    body = await curlJson(url);
    if (body && !TRANSIENT.has(body.status)) break;
    await sleep(1000 * 2 ** attempt);
  }
  await sleep(60); // stay far under Google's rate limit

  if (!body) return { failed: 'network' }; // transient: not cached
  if (body.status === 'REQUEST_DENIED') {
    saveCache();
    console.error(`\ngeocoder refused the key: ${body.error_message || body.status}`);
    process.exit(1);
  }
  if (TRANSIENT.has(body.status)) {
    saveCache();
    console.error(
      `\ngeocoder quota exhausted (${body.status}) after ${apiCalls} calls — stopping so nothing gets mislabeled. Cache is saved; rerun later to continue where this left off.`,
    );
    process.exit(1);
  }
  if (body.status !== 'OK' || !body.results?.length) return (cache[k] = { failed: body.status });

  const r = body.results[0];
  const { lat, lng } = r.geometry.location;
  const comp = (type) => r.address_components.find((c) => c.types.includes(type))?.long_name || null;
  const city = comp('locality') || comp('sublocality') || comp('administrative_area_level_2');
  const zip = comp('postal_code');
  const precision = r.geometry.location_type; // ROOFTOP > RANGE_INTERPOLATED > GEOMETRIC_CENTER > APPROXIMATE
  const streetLevel =
    precision !== 'APPROXIMATE' &&
    r.types.some((t) => ['street_address', 'premise', 'subpremise', 'route', 'intersection'].includes(t));

  if (lat < 36.4 || lat > 37.2 || lng < -76.9 || lng > -75.7) return (cache[k] = { failed: 'out-of-area' });
  if (!city || !AREA_CITIES.has(city)) return (cache[k] = { failed: `city:${city || 'none'}` });
  return (cache[k] = { lat, lon: lng, city, zip, precision, partial: Boolean(r.partial_match), streetLevel });
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
// reported as failed — never quietly guessed. Alongside coordinates, each
// event keeps its house number and the name tokens from its summary: those are
// what let a Drive record pick the RIGHT estimate when two customers on the
// same street were quoted the same season.
console.log('geocoding calendar estimate addresses...');
const calEvents = JSON.parse(readFileSync(CAL, 'utf8'));
const dayOf = (e) => (e.start?.dateTime || e.start?.date || '').slice(0, 10);
const calByStreet = new Map(); // normalized street -> [event records]
const calByName = new Map(); // name token -> [event records]
let calOk = 0, calFail = 0, calSkipped = 0;
const calFailReasons = {};
const precisionHist = {};
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
  precisionHist[g.precision] = (precisionHist[g.precision] || 0) + 1;
  const rec = {
    id: e.id || `${date}|${loc.slice(0, 20)}`,
    date,
    house: (loc.match(/^\s*(\d{1,5})\s/) || [])[1] || null,
    names: nameTokensOf((e.summary || '').toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/)),
    ...g,
  };
  const street = normStreet(loc.split(',')[0].replace(/^\s*\d+\s+/, ''));
  if (street.length > 3) {
    if (!calByStreet.has(street)) calByStreet.set(street, []);
    calByStreet.get(street).push(rec);
  }
  for (const n of rec.names) {
    if (!calByName.has(n)) calByName.set(n, []);
    calByName.get(n).push(rec);
  }
  if (calOk % 200 === 0) { saveCache(); console.log(`  ${calOk} geocoded...`); }
}
saveCache();
console.log(`  calendar: ${calOk} geocoded, ${calFail} failed, ${calSkipped} without location/date`);
console.log(`  precision: ${JSON.stringify(precisionHist)}`);
if (calFail) console.log('  failure reasons:', JSON.stringify(calFailReasons));

// --- 3. Drive completed jobs: the records that actually count ----------------
console.log('placing completed-job records...');
const driveFiles = JSON.parse(readFileSync(DRIVE, 'utf8')).filter(
  (f) => !/folder|shortcut/.test(f.mimeType || ''),
);

// The tracker already owns everything after its start date, minus the signing
// lag buffer explained at the top. jobLog.json is the authority on the boundary.
const jobLog = JSON.parse(readFileSync(join(root, 'src', 'constants', 'jobLog.json'), 'utf8'));
const trackerStart = jobLog.from || '9999-12-31';
const bufferStart = new Date(new Date(trackerStart) - BOUNDARY_BUFFER_DAYS * 864e5)
  .toISOString()
  .slice(0, 10);

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
    if (/^\d+k$/.test(toks[i]) || /^\$\d/.test(toks[i])) continue;
    rest.push(toks[i]);
  }
  // A number sitting immediately before a word is a HOUSE number ("2331
  // Vincent ave"); one at the end or before the city is a price. Both matter:
  // the house number is what picks the right estimate on a shared street.
  const houses = [];
  const words = [];
  for (let i = 0; i < rest.length; i++) {
    if (/^\d{1,5}$/.test(rest[i])) {
      if (i + 1 < rest.length && /^[a-z]/.test(rest[i + 1])) houses.push(rest[i]);
      continue;
    }
    words.push(rest[i]);
  }
  // candidate street phrases: suffix-anchored windows, SHORTEST FIRST — the
  // short window ("holland rd") is likelier to be pure street than the long
  // one ("moore holland rd", which drags a surname in). The street-level and
  // partial-match rejection below makes the ordering self-correcting.
  const candidates = [];
  for (let i = 0; i < words.length; i++) {
    if (SUFFIX[words[i]]) {
      for (const len of [2, 3]) {
        const start = i - (len - 1);
        if (start >= 0) candidates.push(normStreet(words.slice(start, i + 1).join(' ')));
      }
    }
  }
  // fallback: the leftover minus a likely surname first, then the whole thing
  if (!candidates.length && words.length) {
    if (words.length > 1) candidates.push(normStreet(words.slice(1).join(' ')));
    candidates.push(normStreet(words.join(' ')));
  }
  return {
    city,
    houses,
    names: nameTokensOf(words),
    candidates: [...new Set(candidates)].filter((c) => c.length > 3),
  };
}

// The estimate precedes the completed-job filing: allow it up to ~8 months
// ahead, or 14 days after (same-day filings with timezone slop).
const linkable = (eventDate, done) => {
  const gap = (new Date(done) - new Date(eventDate)) / 864e5;
  return gap >= -14 && gap <= 240;
};

const jobs = [];
const usedEvents = new Set();
const tally = {
  streetLinked: 0, nameLinked: 0, geocoded: 0, gazetteer: 0,
  unresolved: 0, overlap: 0, boundaryDropped: 0, duplicateFiling: 0,
};
const disagreements = [];

for (const f of driveFiles) {
  const done = (f.createdTime || '').slice(0, 10);
  if (!done) continue;
  if (done >= trackerStart) { tally.overlap++; continue; }
  if (done >= bufferStart) { tally.boundaryDropped++; continue; }

  const { city: fileCity, houses, names, candidates } = parseTitle(f.title || '');
  let placed = null;
  let linkedEvent = null;

  // (a) link to a geocoded calendar estimate by STREET, ranked by evidence:
  // a matching house number beats a matching surname beats recency. Raw
  // recency alone picked the wrong neighbor when two customers on one street
  // were quoted a day apart.
  for (const cand of candidates) {
    const scored = (calByStreet.get(cand) || [])
      .filter((e) => !fileCity || e.city === fileCity)
      .filter((e) => linkable(e.date, done))
      .map((e) => ({
        e,
        score:
          (e.house && houses.includes(e.house) ? 100 : 0) +
          (e.names.some((n) => names.includes(n)) ? 10 : 0) -
          Math.abs((new Date(done) - new Date(e.date)) / 864e5) / 1000,
      }))
      .sort((a, b) => b.score - a.score);
    if (scored.length) {
      linkedEvent = scored[0].e;
      placed = { ...linkedEvent, estimateDate: linkedEvent.date, source: 'street-linked' };
      tally.streetLinked++;
      break;
    }
  }

  // (a2) link by NAME. Most 2023 filenames are just the customer's name
  // ("Rebecca Kelly.heic") — no street to parse or geocode. The calendar
  // event carries both the name and the address, so matching names LOCALLY
  // (nothing leaves this machine) inherits the event's geocoded point.
  // Two shared tokens (first + last name), or one rare long token, required.
  if (!placed && names.length) {
    const counts = new Map();
    for (const n of names)
      for (const e of calByName.get(n) || []) {
        if (fileCity && e.city !== fileCity) continue;
        if (!linkable(e.date, done)) continue;
        const c = counts.get(e.id) || { e, shared: [] };
        c.shared.push(n);
        counts.set(e.id, c);
      }
    const best = [...counts.values()]
      .filter(
        (c) =>
          c.shared.length >= 2 ||
          (c.shared.length === 1 && c.shared[0].length >= 5 && (calByName.get(c.shared[0]) || []).length <= 2),
      )
      .sort((a, b) => b.shared.length - a.shared.length)[0];
    if (best) {
      linkedEvent = best.e;
      placed = { ...linkedEvent, estimateDate: linkedEvent.date, source: 'name-linked' };
      tally.nameLinked++;
    }
  }

  // One estimate, one job. A photo and a scan of the same contract both match
  // the same event; the second one is a duplicate filing, not a second job.
  if (linkedEvent) {
    if (usedEvents.has(linkedEvent.id)) { tally.duplicateFiling++; continue; }
    usedEvents.add(linkedEvent.id);
  }

  // (b) geocode the street from the filename, city-constrained. Only a
  // street-level, non-partial match counts: name-mush like "titus hunt,
  // Virginia Beach" gets an APPROXIMATE town centroid from Google, and an
  // approximate answer to a mushy question is a fabricated job location.
  if (!placed && fileCity) {
    for (const cand of candidates) {
      const g = await geocode(`${cand}, ${fileCity}, VA`);
      if (!g.failed && !g.partial && g.streetLevel && g.city === fileCity) {
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
    `(street-linked ${tally.streetLinked}, name-linked ${tally.nameLinked}, ` +
    `geocoded ${tally.geocoded}, gazetteer ${tally.gazetteer})`,
);
console.log(
  `  unresolved: ${tally.unresolved}   duplicate filings: ${tally.duplicateFiling}\n` +
    `  covered by trackers: ${tally.overlap}   dropped in ${BOUNDARY_BUFFER_DAYS}-day signing buffer: ${tally.boundaryDropped}`,
);
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
  boundaryBufferDays: BOUNDARY_BUFFER_DAYS,
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
