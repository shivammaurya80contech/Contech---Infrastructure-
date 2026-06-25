const CACHE_NAME = "contech-v3";


const urlsToCache = [
  "/shivammaurya80contech/",
  "/shivammaurya80contech/index.html",
  "/shivammaurya80contech/manifest.json",
  "/shivammaurya80contech/icon-192.png",
  "/shivammaurya80contech/icon-512.png"
];


self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

