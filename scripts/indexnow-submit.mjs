// Notifies IndexNow-participating search engines (Bing, Yandex, DuckDuckGo,
// Seznam, etc.) that our URLs have changed, so they re-crawl sooner.
//
// The IndexNow key is public and hosted at
// https://artistreevabeach.com/<key>.txt — no secret required.
// Google does NOT use IndexNow; for Google use Search Console.
//
// Reads the URL list straight from public/sitemap.xml so it always
// matches what we actually publish.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HOST = 'artistreevabeach.com';
const KEY = 'abb7404bda3d4ba28f0e4029272a67d8';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sitemap = readFileSync(join(root, 'public', 'sitemap.xml'), 'utf8');

const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

if (urlList.length === 0) {
  console.error('No <loc> URLs found in sitemap.xml — nothing to submit.');
  process.exit(1);
}

const payload = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };

console.log(`Submitting ${urlList.length} URLs to IndexNow (${ENDPOINT})…`);

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});

const body = await res.text();
console.log(`IndexNow responded ${res.status} ${res.statusText}`);
if (body) console.log(body);

// 200 = accepted, 202 = accepted/queued. Anything else is a failure.
if (res.status !== 200 && res.status !== 202) {
  process.exit(1);
}
console.log('IndexNow submission accepted.');
