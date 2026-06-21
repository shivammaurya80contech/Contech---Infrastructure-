const CACHE_NAME = "contech-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./Shivam.jpg",
  "./building.jpg"
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