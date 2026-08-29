/* Temperament — service worker.
   Strategy: NETWORK-FIRST with cache fallback, deliberately.
   This project has been bitten twice by silently stale copies; a cache-first
   worker would institutionalize that bug. Online users always get the newest
   deploy; the cache exists solely so the app keeps working offline.
   Bump CACHE_VERSION on any deploy that must invalidate old caches. */

const CACHE_VERSION = 'temperament-v1';

const PRECACHE = [
  './',
  'index.html',
  'manifest.webmanifest',
  'icon-192.png',
  'icon-512.png',
  'apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only GET, only same-origin. Lemon Squeezy checkout, the licensing
  // Worker (/activate, /status on workers.dev), and any other cross-origin
  // call pass through untouched — the SW must never sit between the app
  // and licensing.
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(req)
      .then((res) => {
        // Fresh from network: serve it and refresh the cache copy.
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
        }
        return res;
      })
      .catch(() =>
        // Offline: serve from cache; for navigations fall back to the shell.
        caches.match(req).then((hit) =>
          hit || (req.mode === 'navigate' ? caches.match('index.html') : undefined)
        )
      )
  );
});
