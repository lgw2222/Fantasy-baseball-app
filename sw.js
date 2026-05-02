const CACHE = 'lebaseball-v1';
const ASSETS = [
  '/Fantasy-Baseball-2026/',
  '/Fantasy-Baseball-2026/index.html',
  'https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
