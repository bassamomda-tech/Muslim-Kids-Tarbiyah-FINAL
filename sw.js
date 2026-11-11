/* sw.js — service worker for Muslim Kids' Tarbiyah (installable PWA).
   Strategy: network-first for navigations (always fresh pages when online),
   cache fallback when offline so the app opens. Static assets are
   cached on first use (stale-while-revalidate). This is intentionally
   light — it does NOT pre-cache the whole site (hundreds of books). */
var CACHE = 'mkt-v9';
var CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/logo-mark.svg',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

self.addEventListener('install', function (e) {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return Promise.all(CORE.map(function (u) { return c.add(u).catch(function () {}); }));
  }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) { if (k !== CACHE) return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // let CDN/Firebase handle themselves

  // Navigations: network-first, fall back to cache, then offline shell.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
        return res;
      }).catch(function () {
        return caches.match(req).then(function (m) { return m || caches.match('./index.html'); });
      })
    );
    return;
  }

  // Code files (JS / CSS / HTML): NETWORK-FIRST so visitors always get the
  // newest version immediately when online; cache is only an offline fallback.
  if (/\.(?:js|css|html|webmanifest)(?:$|\?)/i.test(url.pathname)) {
    e.respondWith(
      fetch(req).then(function (res) {
        if (res && res.status === 200) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () { return caches.match(req); })
    );
    return;
  }

  // Images / fonts / other assets: stale-while-revalidate (fast, rarely change).
  e.respondWith(
    caches.match(req).then(function (cached) {
      var net = fetch(req).then(function (res) {
        if (res && res.status === 200) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () { return cached; });
      return cached || net;
    })
  );
});


/* «احفظ الموقع للاستخدام بلا إنترنت» (parents' weekly report page): download the main pages + the games
   once, together with every script/stylesheet each page uses, and report progress back to the page. */
var OFFLINE_PAGES = [
  './index.html', './corners/shared/my-day.html', './corners/shared/garden.html', './corners/shared/journey.html',
  './corners/shared/bag.html', './corners/shared/report.html', './corners/activities/dashboard.html', './corners/activities/play.html'
];
var OFFLINE_FILES = [   // loaded by other scripts, so not visible in the pages' HTML
  './corners/shared/mk-a11y.js', './corners/shared/mk-home.js', './corners/shared/mk-tts-cloud.js', './corners/shared/mk-avatars.js',
  './corners/shared/mk-topbar.js', './corners/shared/mk-citynav.js', './corners/shared/mk-notify.js', './corners/shared/mk-bag.js',
  './corners/shared/mk-journey.js', './corners/shared/my-day-data.js', './corners/shared/journey-story.js', './corners/shared/quran-verse-map.js',
  './corners/activities/scripts/anos-track.js', './corners/activities/scripts/activities-data.js', './corners/activities/scripts/i18n.js'
];
self.addEventListener('message', function (e) {
  var d = e.data || {}; if (d.type !== 'mk-offline') return;
  var port = e.ports && e.ports[0];
  var pages = OFFLINE_PAGES.concat((d.extra || []).map(function (x) { return './' + String(x).replace(/^\.?\//, ''); }));
  var seen = {}, ok = 0, total = 0;
  function say(done) { try { port && port.postMessage({ ok: ok, total: total, done: !!done }); } catch (er) {} }
  function abs(u, base) { try { var x = new URL(u, base); x.hash = ''; return x.origin === self.location.origin ? x.href : null; } catch (er) { return null; } }
  e.waitUntil(caches.open(CACHE).then(function (c) {
    function get(url) {
      if (!url || seen[url]) return Promise.resolve(null); seen[url] = 1; total++;
      return fetch(url, { cache: 'no-cache' }).then(function (res) {
        if (!res || res.status !== 200) return null;
        var copy = res.clone(); return c.put(url, copy).then(function () { ok++; if (ok % 10 === 0) say(false); return res; });
      }).catch(function () { return null; });
    }
    var files = OFFLINE_FILES.map(function (f) { return abs(f, self.location.href); });
    var chain = Promise.all(files.map(get));
    pages.forEach(function (p) {
      var url = abs(p, self.location.href);
      chain = chain.then(function () {
        return get(url).then(function (res) {
          if (!res || !/\.html$/i.test(new URL(url).pathname)) return;
          return res.text().then(function (html) {
            var refs = [], re = /(?:src|href)\s*=\s*["']([^"'#?]+\.(?:js|css))["']/gi, m;
            while ((m = re.exec(html))) { var a = abs(m[1], url); if (a) refs.push(a); }
            return Promise.all(refs.map(get));
          });
        });
      });
    });
    return chain.then(function () { say(true); });
  }));
});
