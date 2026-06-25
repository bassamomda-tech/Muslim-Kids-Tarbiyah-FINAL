/* engine/tweaks-loader.js — lazy loader for the design-time Tweaks panel.

   The Tweaks panel (React + ReactDOM + ~3MB Babel-standalone + the two Babel
   scripts) is an EDITING tool, not something the app needs to run. The chosen
   theme/path are already applied on every page by a tiny inline script reading
   localStorage('hisn-prefs2'). So we keep all that weight OFF the critical path
   and only fetch it the first time the host actually turns edit mode on.

   This keeps normal page loads ~4MB lighter and removes the in-browser JSX
   compile that used to block first paint. */
(function () {
  var REACT   = 'https://unpkg.com/react@18.3.1/umd/react.development.js';
  var REACTI  = 'sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L';
  var RDOM    = 'https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js';
  var RDOMI   = 'sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm';
  var BABEL   = 'https://unpkg.com/@babel/standalone@7.29.0/babel.min.js';
  var BABELI  = 'sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y';

  var loaded = false, pending = false;

  function loadCDN(src, integrity) {
    return new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = src;
      if (integrity) { s.integrity = integrity; s.crossOrigin = 'anonymous'; }
      s.onload = function () { res(); };
      s.onerror = function () { rej(new Error('failed: ' + src)); };
      document.body.appendChild(s);
    });
  }

  // Fetch a JSX/Babel source, compile it to plain JS with Babel, and execute it
  // synchronously as an inline script. Deterministic order — unlike
  // Babel.transformScriptTags(), which re-fetches src tags asynchronously.
  function runBabel(src) {
    return fetch(src).then(function (r) { return r.text(); }).then(function (code) {
      var out = window.Babel.transform(code, { presets: ['react'] }).code;
      var s = document.createElement('script');
      s.textContent = out;
      document.body.appendChild(s);
    });
  }

  function boot() {
    if (loaded) return Promise.resolve();
    loaded = true;
    return loadCDN(REACT, REACTI)
      .then(function () { return loadCDN(RDOM, RDOMI); })
      .then(function () { return loadCDN(BABEL, BABELI); })
      .then(function () { return runBabel('engine/tweaks-panel.jsx'); })
      .then(function () { return runBabel('engine/tweaks.js'); });
  }

  window.addEventListener('message', function (e) {
    var t = e && e.data && e.data.type;
    if (t === '__activate_edit_mode' && !loaded) {
      pending = true;
      boot().then(function () {
        // The real TweaksPanel mounts asynchronously (React 18) and only then
        // registers its message listener. Re-fire activate a few times until it
        // catches one and opens — extra activates after it's open are no-ops.
        if (!pending) return;
        pending = false;
        var tries = 0;
        (function poke() {
          if (document.querySelector('.twk-panel')) return; // open — done
          window.dispatchEvent(new MessageEvent('message', { data: { type: '__activate_edit_mode' } }));
          if (++tries < 40) setTimeout(poke, 60);
        })();
      })['catch'](function (err) { loaded = false; console.warn('[tweaks] load failed', err); });
    }
  });

  // Announce availability so the host toolbar's Tweaks toggle stays enabled even
  // before the heavy stack is fetched.
  if (window.parent) window.parent.postMessage({ type: '__edit_mode_available' }, '*');
})();
