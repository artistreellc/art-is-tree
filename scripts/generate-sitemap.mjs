// Post-build sitemap generator.
//
// URLs come from the pages that actually shipped in dist/, so the sitemap can
// never list a 404 and a new page is picked up the moment it prerenders.
//
// lastmod is the last commit date of the page's own source component. The page
// file only, not the components it imports: a tweak to a shared component like
// LocalSEOMeta is not a content change to twelve articles, and letting it bump
// every date would destroy the freshness signal lastmod exists to carry.
//
// THE SHALLOW-CLONE TRAP: `git log -1 -- <file>` on a --depth 1 clone returns
// the tip commit for EVERY file, because no earlier history is present. Vercel
// shallow-clones by default, so a generator that trusted git unconditionally
// would stamp every page with the deploy date on every deploy — telling Google
// the whole site changed every time, which is worse than a stale date. So when
// history is incomplete we keep the dates already committed in
// public/sitemap.xml rather than inventing new ones.
//
// To refresh the committed dates, run a build where full history is available
// and pass --write-source:
//     git fetch --unshallow && npm run build -- --write-source
import { readdirSync, readFileSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { execFileSync } from 'node:child_process';

const DIST = 'dist';
const SOURCE_SITEMAP = 'public/sitemap.xml';
const ORIGIN = 'https://artistreevabeach.com';
const WRITE_SOURCE = process.argv.includes('--write-source');

// Never list these: they are not indexable destinations.
const EXCLUDE = new Set(['/404']);
const EXCLUDE_PREFIX = ['/google']; // Search Console verification files

// Per-URL overrides. Everything else inherits the site default below. These
// mirror what the hand-maintained sitemap already declared.
const DEFAULTS = { changefreq: 'daily', priority: '1' };
const OVERRIDES = {
  '/financing': { changefreq: 'monthly', priority: '0.8' },
};

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (name.endsWith('.html')) out.push(full);
  }
  return out;
}

function git(args) {
  try {
    return execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return '';
  }
}

// Is per-file history trustworthy? A shallow clone answers "true" to
// is-shallow-repository and silently reports the tip commit for every path.
function historyIsReliable() {
  if (git(['rev-parse', '--is-inside-work-tree']) !== 'true') return false;
  return git(['rev-parse', '--is-shallow-repository']) !== 'true';
}

// url -> source component, parsed from the route table.
function routeSourceMap() {
  const routes = readFileSync('src/routes.jsx', 'utf8');
  const map = {};
  const re = /path:\s*'([^']*)'[^}]*?import\('@\/(pages\/[^']+)'\)/g;
  for (const m of routes.matchAll(re)) map['/' + m[1]] = 'src/' + m[2];
  const idx = routes.match(/index:\s*true[^}]*?import\('@\/(pages\/[^']+)'\)/);
  if (idx) map['/'] = 'src/' + idx[1];
  return map;
}

// Dates already committed, used as the fallback when git can't be trusted.
function existingDates() {
  if (!existsSync(SOURCE_SITEMAP)) return {};
  const xml = readFileSync(SOURCE_SITEMAP, 'utf8');
  const out = {};
  for (const m of xml.matchAll(/<loc>(.*?)<\/loc>\s*<lastmod>(.*?)<\/lastmod>/gs)) {
    out[m[1].replace(ORIGIN, '') || '/'] = m[2];
  }
  return out;
}

const reliable = historyIsReliable();
const sources = routeSourceMap();
const fallback = existingDates();
const today = new Date().toISOString().slice(0, 10);

const urls = [];
const unmapped = [];
for (const file of walk(DIST)) {
  let url = '/' + relative(DIST, file).replace(/\\/g, '/').replace(/index\.html$/, '').replace(/\.html$/, '');
  url = url.replace(/\/{2,}/g, '/');
  if (url !== '/' && url.endsWith('/')) url = url.slice(0, -1);

  if (EXCLUDE.has(url) || EXCLUDE_PREFIX.some((p) => url.startsWith(p))) continue;

  // Respect the page's own robots directive rather than a hardcoded list, so a
  // page that becomes noindex drops out of the sitemap automatically.
  const html = readFileSync(file, 'utf8');
  if (/<meta[^>]+name="robots"[^>]*content="[^"]*noindex/i.test(html)) continue;

  const src = sources[url];
  let lastmod = '';
  if (reliable && src) {
    lastmod = git(['log', '-1', '--format=%cs', '--', src]);
  }
  if (!lastmod) lastmod = fallback[url] || '';
  if (!src) unmapped.push(url);

  // Never emit a future date: Google discards the entry outright.
  if (lastmod && lastmod > today) lastmod = today;

  urls.push({ url, lastmod, ...DEFAULTS, ...(OVERRIDES[url] || {}) });
}

// Keep the order the committed sitemap already uses — home first, then the main
// pages, services, articles, legal. Sitemap order carries no ranking weight, but
// that order is curated and readable, and re-sorting it every build would churn
// the whole file on every diff. Genuinely new URLs land at the end, where they
// are easy to spot in review.
const order = Object.keys(fallback);
urls.sort((a, b) => {
  const ia = order.indexOf(a.url);
  const ib = order.indexOf(b.url);
  if (ia === -1 && ib === -1) return a.url.localeCompare(b.url);
  if (ia === -1) return 1;
  if (ib === -1) return -1;
  return ia - ib;
});

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((u) =>
    [
      '  <url>',
      `    <loc>${ORIGIN}${u.url === '/' ? '/' : u.url}</loc>`,
      ...(u.lastmod ? [`    <lastmod>${u.lastmod}</lastmod>`] : []),
      `    <changefreq>${u.changefreq}</changefreq>`,
      `    <priority>${u.priority}</priority>`,
      '  </url>',
    ].join('\n')
  ),
  '</urlset>',
  '',
].join('\n');

writeFileSync(join(DIST, 'sitemap.xml'), xml);
if (WRITE_SOURCE && reliable) writeFileSync(SOURCE_SITEMAP, xml);

const dated = urls.filter((u) => u.lastmod).length;
console.log(`\x1b[32m✓ Sitemap: ${urls.length} URLs, ${dated} with lastmod.\x1b[0m`);
if (!reliable) {
  console.log(
    '\x1b[33m  Git history is shallow or unavailable — kept the committed lastmod dates.\x1b[0m\n' +
      '\x1b[33m  To refresh them: git fetch --unshallow && npm run build -- --write-source\x1b[0m'
  );
} else if (WRITE_SOURCE) {
  console.log(`\x1b[32m  Wrote refreshed dates back to ${SOURCE_SITEMAP}.\x1b[0m`);
}
if (unmapped.length) {
  console.log(`\x1b[33m  No source mapped (lastmod from fallback): ${unmapped.join(', ')}\x1b[0m`);
}
