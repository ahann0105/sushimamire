const CACHE_NAME = "sushimamire-v7";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.png",
  "./sushi-images/tamago.png",
  "./sushi-images/inari.png",
  "./sushi-images/kappa.png",
  "./sushi-images/tekkamaki.png",
  "./sushi-images/ebi.png",
  "./sushi-images/ikura.png",
  "./sushi-images/uni.png",
  "./sushi-images/maguro.png",
  "./sushi-images/otoro.png",
  "./sushi-images/oke.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});