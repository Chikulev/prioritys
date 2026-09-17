const CACHE_NAME = 'prioritys-v11';
const ASSETS = ['/', '/index.html', '/m.html', '/config.html', '/analytics.html', '/lite.html', '/style.css', '/themes.js', '/locales.js'];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
    // Network-First: Всегда пытаемся забрать свежие данные из сети, если интернета нет - отдаем из кэша
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    );
});