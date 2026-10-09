const CACHE_NAME = 'fc-os-v1';
const urlsToCache = [
  './index.html',
  './style.css',
  './script.js',
  'C:/Users/Intel/.gemini/antigravity-ide/brain/8e5e3ce8-b93d-4307-a591-49cd9b11587e/macos_light_wallpaper_1791569506721.jpg',
  'C:/Users/Intel/.gemini/antigravity-ide/brain/8e5e3ce8-b93d-4307-a591-49cd9b11587e/macos_wallpaper_1791568271003.jpg',
  'C:/Users/Intel/.gemini/antigravity-ide/brain/8e5e3ce8-b93d-4307-a591-49cd9b11587e/profile_pic_1791566844588.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache).catch(err => console.log('PWA cache ignore local files cross-origin'));
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
