// Discovers the Bouncie API shape so the job-log script can be written against
// the real thing instead of a guess.
//
//   node scripts/bouncie-probe.mjs
//
// SAFE TO SHARE THE OUTPUT. This prints STRUCTURE ONLY — endpoint paths, HTTP
// status codes, and the KEY NAMES found in responses, plus the type of each
// value. It never prints a value, so no coordinates, addresses, VINs, IMEIs or
// tokens can leak into a chat log. Sample values are shown only for a short
// allowlist of harmless keys (times and counts).
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function token() {
  const p = join(root, '.env');
  if (existsSync(p)) {
    for (const line of readFileSync(p, 'utf8').split('\n')) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
  const t = process.env.BOUNCIE_ACCESS_TOKEN;
  if (!t) {
    console.error('\n\x1b[31mBOUNCIE_ACCESS_TOKEN not set.\x1b[0m Put it in .env (gitignored):');
    console.error('  BOUNCIE_ACCESS_TOKEN=...\n');
    process.exit(1);
  }
  return t;
}
const TOKEN = token();

const BASES = ['https://api.bouncie.dev/v1', 'https://api.bouncie.dev'];
// Values safe to echo: they cannot identify a person, vehicle or place.
const SAFE = new Set([
  'startTime', 'endTime', 'timeZone', 'totalTripCount', 'count', 'distance',
  'averageSpeed', 'maxSpeed', 'hardBrakingCount', 'hardAccelerationCount', 'model', 'year',
]);

async function hit(url) {
  try {
    const res = await fetch(url, {
      headers: { Authorization: TOKEN, 'Content-Type': 'application/json' },
    });
    const text = await res.text();
    let json = null;
    try { json = JSON.parse(text); } catch {}
    return { status: res.status, json, text: text.slice(0, 200) };
  } catch (e) {
    return { status: 0, error: e.message };
  }
}

/** Recursively describe structure: key -> type, never the value. */
function shape(v, depth = 0, prefix = '') {
  const out = [];
  if (Array.isArray(v)) {
    out.push(`${prefix}[] (${v.length} items)`);
    if (v.length && depth < 3) out.push(...shape(v[0], depth + 1, `${prefix}[0].`));
    return out;
  }
  if (v && typeof v === 'object') {
    for (const [k, val] of Object.entries(v)) {
      const t = Array.isArray(val) ? 'array' : val === null ? 'null' : typeof val;
      const safe = SAFE.has(k) && (typeof val === 'string' || typeof val === 'number');
      out.push(`${prefix}${k}: ${t}${safe ? `  e.g. ${JSON.stringify(val)}` : ''}`);
      if (val && typeof val === 'object' && depth < 3) out.push(...shape(val, depth + 1, `${prefix}${k}.`));
    }
    return out;
  }
  return out;
}

console.log('Bouncie API probe — prints structure only, no values.\n');

let base = null;
for (const b of BASES) {
  const r = await hit(`${b}/user`);
  console.log(`  GET ${b}/user  ->  ${r.status || 'network error'}`);
  if (r.status === 200) { base = b; break; }
}
if (!base) {
  console.error('\nNo base URL responded 200 to /user. Check the token, then paste the status codes above.');
  process.exit(1);
}
console.log(`\nbase URL: ${base}\n`);

const vehicles = await hit(`${base}/vehicles`);
console.log(`GET /vehicles -> ${vehicles.status}`);
if (vehicles.json) {
  console.log('structure:');
  for (const l of shape(vehicles.json).slice(0, 40)) console.log('   ', l);
}

// Find an identifier to use for the trips call, without printing it.
const first = Array.isArray(vehicles.json) ? vehicles.json[0] : vehicles.json?.vehicles?.[0];
const idKey = first ? ['imei', 'vin', 'deviceImei', 'id'].find((k) => first[k]) : null;
console.log(`\nvehicle identifier key: ${idKey ?? 'NOT FOUND — check the structure above'}`);

if (idKey) {
  const id = encodeURIComponent(first[idKey]);
  const since = new Date(Date.now() - 30 * 864e5).toISOString();
  const variants = [
    `/trips?imei=${id}&starts-after=${since}`,
    `/trips?imei=${id}&startsAfter=${since}`,
    `/trips?${idKey}=${id}&starts-after=${since}`,
    `/trips?imei=${id}`,
    `/trips`,
  ];
  console.log('\ntrying trips endpoint variants (last 30 days):');
  let ok = null;
  for (const v of variants) {
    const r = await hit(`${base}${v}`);
    const label = v.replace(id, '<id>').replace(since, '<iso-date>');
    console.log(`  ${r.status}  ${label}`);
    if (r.status === 200 && !ok) ok = r;
  }
  if (ok?.json) {
    console.log('\ntrip response structure (first record):');
    for (const l of shape(ok.json).slice(0, 60)) console.log('   ', l);
  } else {
    console.log('\nNo trips variant returned 200 — paste the status codes above.');
  }
}
console.log('\nDone. This output is safe to paste back.');
