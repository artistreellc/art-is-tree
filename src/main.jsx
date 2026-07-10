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
