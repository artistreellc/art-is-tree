const CACHE_NAME = 'artistree-cache-v1';
const DYNAMIC_CACHE = 'artistree-dynamic-v1';

const CORE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Skip cross-origin requests unless they are specific known CDNs (like images)
  if (url.origin !== self.location.origin && !url.hostname.includes('images.unsplash.com') && !url.hostname.includes('supabase.co')) {
    return;
  }

  // Network-first for API/Supabase calls
  if (url.hostname.includes('supabase.co') || url.pathname.includes('/api/')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const resClone = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => cache.put(event.request, resClone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Cache-first for images and static assets
  if (event.request.destination === 'image' || event.request.destination === 'font' || event.request.destination === 'style' || event.request.destination === 'script') {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic' && response.type !== 'cors') {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        });
      })
    );
    return;
  }

  // Default: Stale-while-revalidate for HTML and others
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        caches.open(DYNAMIC_CACHE).then((cache) => {
          cache.put(event.request, networkResponse.clone());
        });
        return networkResponse;
      }).catch(() => {
        // Fallback or do nothing
      });
      return cachedResponse || fetchPromise;
    })
  );
});