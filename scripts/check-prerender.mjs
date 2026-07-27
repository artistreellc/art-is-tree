// Post-build guard: fail the build if any prerendered page shipped a runtime
// error instead of real content. This prevents a broken SSG render (e.g. a
// failed data fetch parsed as JSON) from silently deploying — which would
// serve error pages to Google and visitors.
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';

// vite-react-ssg preloads every @fontsource face in BOTH woff2 and woff and
// mislabels them all type="font/woff2". Modern browsers only ever use the
// woff2, so the woff preloads are ~146KB of wasted, wrong-typed downloads on
// every page. Strip the .woff preloads post-build (keep woff2); the woff still
// serves as an @font-face fallback, just no longer force-preloaded.
const WOFF_PRELOAD = /<link\b[^>]*rel="preload"[^>]*as="font"[^>]*href="[^"]*\.woff"[^>]*>/g;
const ERROR_MARKERS = [
  'Unexpected Application Error',
  'is not valid JSON',
  'Minified React error',
  'data-error-fallback', // RootErrorBoundary rendered during prerender = a page failed to build
];

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (name.endsWith('.html')) out.push(full);
  }
  return out;
}

const broken = [];
let fontsTrimmed = 0;
for (const file of walk(DIST)) {
  let html = readFileSync(file, 'utf8');

  // Strip redundant .woff font preloads (keep woff2).
  const before = html;
  html = html.replace(WOFF_PRELOAD, '');
  if (html !== before) {
    fontsTrimmed += (before.match(WOFF_PRELOAD) || []).length;
    writeFileSync(file, html);
  }

  // Only inspect the rendered #root body, not inlined bundles/head.
  const rootMatch = html.match(/<div id="root"[^>]*>([\s\S]*?)<\/div>\s*<script/);
  const body = rootMatch ? rootMatch[1] : html;
  if (ERROR_MARKERS.some((m) => body.includes(m))) {
    broken.push(file);
  }
}
if (fontsTrimmed) console.log(`[32m✓ Trimmed ${fontsTrimmed} redundant .woff font preloads across prerendered pages.[0m`);

if (broken.length) {
  console.error('\n[31m✗ Prerender check FAILED — these pages rendered an error instead of content:[0m');
  for (const f of broken) console.error('   - ' + f);
  console.error('\nFix the runtime error before deploying. Build aborted.\n');
  process.exit(1);
}

console.log(`[32m✓ Prerender check passed — all pages rendered real content.[0m`);
