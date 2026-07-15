/*
 * Self-destructing service worker (kill switch).
 *
 * The old Horizons build registered a service worker at /sw.js that cached the
 * site cache-first (caching '/', '/index.html', etc.). It kept serving the OLD
 * site to returning visitors even after the new build shipped, and simply
 * deleting the file did not un-register it from browsers that already had it.
 *
 * This replacement lives at the same path so browsers pick it up on their next
 * update check. On activation it deletes every cache, unregisters itself, and
 * reloads open tabs so everyone lands on the current site fetched fresh from the
 * network. The current app registers NO service worker, so once this runs the
 * problem is gone for good.
 */

self.addEventListener('install', () => {
  // Take over immediately instead of waiting for existing tabs to close.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      try {
        // 1. Delete every cache the old service worker created.
        const cacheKeys = await caches.keys();
        await Promise.all(cacheKeys.map((key) => caches.delete(key)));

        // 2. Un-register this service worker so it never runs again.
        await self.registration.unregister();

        // 3. Reload every open tab so it re-fetches the current site.
        const clients = await self.clients.matchAll({ type: 'window' });
        clients.forEach((client) => {
          try {
            client.navigate(client.url);
          } catch (e) {
            /* older browsers: ignore, the next manual reload picks it up */
          }
        });
      } catch (e) {
        /* best-effort cleanup; never throw from the SW */
      }
    })()
  );
});

// While briefly active, never serve from cache — always hit the network so no
// stale content can be handed back before the reload above completes.
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request).catch(() => new Response('', { status: 504 })));
});
