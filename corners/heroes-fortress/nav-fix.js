/* nav-fix.js — guarantees in-app links navigate inside the sandboxed preview.
   Carries the preview token forward on every same-origin navigation. No page
   transition/fade — relies on the browser's native paint-holding so navigation
   never blinks. */
(function () {
  var STASH = 'mk:navtoken';
  var APP_PARAMS = { j: 1, id: 1, lang: 1, era: 1, cat: 1, story: 1, chapter: 1, ch: 1, p: 1, page: 1, n: 1, level: 1, q: 1, tab: 1, view: 1, learn: 1 };

  function readStash() { try { return JSON.parse(sessionStorage.getItem(STASH) || '{}') || {}; } catch (e) { return {}; } }
  function writeStash(o) { try { sessionStorage.setItem(STASH, JSON.stringify(o)); } catch (e) {} }

  (function captureNow() {
    var cur = new URLSearchParams(location.search), stash = readStash(), changed = false;
    cur.forEach(function (v, k) { if (APP_PARAMS[k.toLowerCase()]) return; if (stash[k] !== v) { stash[k] = v; changed = true; } });
    if (changed) writeStash(stash);
  })();

  function decorate(u) {
    new URLSearchParams(location.search).forEach(function (v, k) { if (APP_PARAMS[k.toLowerCase()]) return; if (!u.searchParams.has(k)) u.searchParams.set(k, v); });
    var stash = readStash();
    Object.keys(stash).forEach(function (k) { if (APP_PARAMS[k.toLowerCase()]) return; if (!u.searchParams.has(k)) u.searchParams.set(k, stash[k]); });
    return u;
  }

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented) return;
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href');
    if (!href) return;
    if (/^(https?:|mailto:|tel:|javascript:|data:)/i.test(href)) return;
    if (href.charAt(0) === '#') return;
    var tgt = a.getAttribute('target');
    if (tgt && tgt !== '' && tgt !== '_self') return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button) return;
    if (a.hasAttribute('download')) return;
    var u; try { u = new URL(href, location.href); } catch (err) { return; }
    if (u.origin !== location.origin) return;
    e.preventDefault();
    window.location.assign(decorate(u).href);
  }, true);

  window.mkGo = function (target) {
    var u; try { u = new URL(target, location.href); } catch (e) { window.location.href = target; return; }
    window.location.assign(decorate(u).href);
  };
})();
