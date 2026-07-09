const CACHE_NAME = 'vocnjak-store-w1-v2';
const ASSETS = [
  './',
  './index.html',
  './privacy.html',
  './support.html',
  './manifest.json',
  './fonts/fonts.css',
  './fonts/dm-sans-latin-ext.woff2',
  './fonts/dm-sans-latin.woff2',
  './fonts/playfair-display-latin-ext.woff2',
  './fonts/playfair-display-latin.woff2',
  './fonts/playfair-display-italic-latin-ext.woff2',
  './fonts/playfair-display-italic-latin.woff2',
  './fonts/fraunces-latin-ext.woff2',
  './fonts/fraunces-latin.woff2',
  './fonts/fraunces-italic-latin-ext.woff2',
  './fonts/fraunces-italic-latin.woff2',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

// Install — cache core assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate — clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

function cacheableRequest(request) {
  return request.method === 'GET';
}

function cacheResponse(request, response) {
  if (!response || response.status !== 200 || response.type === 'opaque') return response;
  const clone = response.clone();
  caches.open(CACHE_NAME).then(cache => cache.put(request, clone)).catch(() => {});
  return response;
}

// Fetch — local app shell first, with network-first navigation for Safari safety
self.addEventListener('fetch', e => {
  if (!cacheableRequest(e.request)) return;
  const url = new URL(e.request.url);

  // Navigation requests stay network-first to avoid Safari redirect handling issues.
  // If the bridge is offline, fall back to the bundled app shell cached at install.
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .catch(() => caches.match(e.request).then(cached => cached || caches.match('./index.html')))
    );
    return;
  }

  // Local assets — cache first
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request).then(res => cacheResponse(e.request, res)))
    );
  }
});
