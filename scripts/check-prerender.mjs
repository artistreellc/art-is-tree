// Post-build guard: fail the build if any prerendered page shipped a runtime
// error instead of real content. This prevents a broken SSG render (e.g. a
// failed data fetch parsed as JSON) from silently deploying — which would
// serve error pages to Google and visitors.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
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
for (const file of walk(DIST)) {
  const html = readFileSync(file, 'utf8');
  // Only inspect the rendered #root body, not inlined bundles/head.
  const rootMatch = html.match(/<div id="root"[^>]*>([\s\S]*?)<\/div>\s*<script/);
  const body = rootMatch ? rootMatch[1] : html;
  if (ERROR_MARKERS.some((m) => body.includes(m))) {
    broken.push(file);
  }
}

if (broken.length) {
  console.error('\n[31m✗ Prerender check FAILED — these pages rendered an error instead of content:[0m');
  for (const f of broken) console.error('   - ' + f);
  console.error('\nFix the runtime error before deploying. Build aborted.\n');
  process.exit(1);
}

console.log(`[32m✓ Prerender check passed — all pages rendered real content.[0m`);
