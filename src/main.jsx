import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from '@/routes';
import '@/index.css';

export const createRoot = ViteReactSSG(
  { routes },
  ({ isClient }) => {
    if (!isClient) return;

    // Domain safety-net redirect (legacy host -> canonical domain).
    const hostname = window.location.hostname;
    if (hostname === 'artistreeofva.com' || hostname === 'www.artistreeofva.com') {
      window.location.replace(
        'https://artistreevabeach.com' + window.location.pathname + window.location.search
      );
    }

    // Harden vite-react-ssg's injected route loaders against stale deploys.
    // Every prerendered page embeds a build-specific hash, and its route
    // loaders fetch `/static-loader-data-manifest-<hash>.json` (plus per-route
    // data files) and call `.json()` with no status/content-type check. After a
    // new deploy, a browser holding a cached HTML with the old hash requests a
    // manifest that no longer exists; Vercel answers with a plaintext 404
    // ("The page could not be found"), `.json()` throws on the leading "T", and
    // react-router replaces the whole app with its "Unexpected Application
    // Error" screen — a blank page.
    //
    // No route here defines a real loader (the generated data is always empty),
    // so these files carry nothing we need. When one is missing or non-JSON we
    // resolve an empty JSON body instead of letting the parse crash the app; the
    // loader then reads no data and the page renders normally. Stale lazy chunks
    // are separately recovered by the vite:preloadError handler below.
    const isSSGLoaderData = (url) =>
      /static-loader-data-manifest-|\/static-loader-data\//.test(url);
    const emptyJson = () =>
      new Response('{}', { status: 200, headers: { 'Content-Type': 'application/json' } });
    const nativeFetch = window.fetch.bind(window);
    window.fetch = (input, init) => {
      const url =
        typeof input === 'string' ? input : (input && input.url) || String(input);
      if (!isSSGLoaderData(url)) return nativeFetch(input, init);
      return nativeFetch(input, init)
        .then((res) => {
          const type = res.headers.get('content-type') || '';
          return res.ok && type.includes('application/json') ? res : emptyJson();
        })
        .catch(() => emptyJson());
    };

    // Recover from stale chunk references after a deploy. When a lazily
    // imported route module can't be fetched (its hashed filename was
    // replaced by a newer build), reload once to pull the fresh assets
    // instead of showing an error screen. Throttled to avoid reload loops.
    window.addEventListener('vite:preloadError', (event) => {
      if (event && typeof event.preventDefault === 'function') event.preventDefault();
      try {
        const KEY = 'vite-preload-reload-at';
        const last = Number(sessionStorage.getItem(KEY) || 0);
        if (Date.now() - last < 10000) return;
        sessionStorage.setItem(KEY, String(Date.now()));
      } catch (e) { /* sessionStorage unavailable: fall through to reload */ }
      window.location.reload();
    });
  }
);
