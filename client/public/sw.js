const CACHE_NAME = 'ssnlc-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/logo.jpeg',
  '/collegelogo.png',
  '/manifest.json',
  '/images/library/library-bg.jpg',
  '/images/library/reading-area.jpg',
  '/images/library/book-collection.jpg',
];

// Assets to cache on install
const urlsToCache = [
  ...STATIC_ASSETS,
  // Add CSS and JS files that are critical
  '/_next/static/css/app.css',
];

// Install a service worker
self.addEventListener('install', event => {
  // Skip waiting to ensure the new service worker activates immediately
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('Pre-caching failed:', error);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  // Don't cache POST requests or API calls
  if (event.request.method !== 'GET' || 
      event.request.url.includes('/api/') ||
      !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request because it's a one-time use stream
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest)
          .then(response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response because it's a one-time use stream
            const responseToCache = response.clone();

            // Check if the URL is an image or static asset
            const url = new URL(event.request.url);
            const isAsset = 
              url.pathname.startsWith('/_next/static/') || 
              url.pathname.startsWith('/images/') ||
              STATIC_ASSETS.includes(url.pathname) ||
              /\.(js|css|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/.test(url.pathname);

            if (isAsset) {
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                })
                .catch(error => {
                  console.error('Caching failed:', error);
                });
            }

            return response;
          })
          .catch(error => {
            // Network request failed, try to return a cached offline page
            console.error('Fetch failed:', error);
            if (event.request.mode === 'navigate') {
              return caches.match('/');
            }
            return new Response('Network error', { 
              status: 408, 
              headers: new Headers({ 'Content-Type': 'text/plain' }) 
            });
          });
      })
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  
  // Claim clients immediately so the new service worker takes effect right away
  event.waitUntil(self.clients.claim());
  
  // Clean up old caches
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 