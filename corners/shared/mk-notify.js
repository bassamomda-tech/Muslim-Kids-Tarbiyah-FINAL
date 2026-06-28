/* mk-notify.js — lightweight "new admin announcement" badge.
   No Firebase SDK needed: reads ONE public marker doc (meta/community)
   via the Firestore REST API, compares its timestamp with the last one
   this device has seen, and shows a red dot on any element marked
   [data-community-badge] (and on the city-nav button).

   Public API:
     MKNotify.check()     → fetch marker + paint badges (returns Promise<bool unread>)
     MKNotify.refresh()   → repaint badges from cached value (after DOM changes)
     MKNotify.markSeen()  → clear the badge (call when the community page opens)
     MKNotify.isUnread()  → bool
*/
(function () {
  if (window.MKNotify) return;
  var PROJECT = 'muslim-kids-tarbiyah';
  var URL = 'https://firestore.googleapis.com/v1/projects/' + PROJECT + '/databases/(default)/documents/meta/community';
  var SEEN_KEY = 'mkcomm:lastSeenAdmin';
  var lastAdminAt = 0;

  function getSeen() { try { return parseInt(localStorage.getItem(SEEN_KEY) || '0', 10) || 0; } catch (e) { return 0; } }
  function setSeen(ts) { try { localStorage.setItem(SEEN_KEY, String(ts || Date.now())); } catch (e) {} }
  function unread() { return lastAdminAt > getSeen(); }

  function fetchLatest() {
    if (!window.fetch) return Promise.resolve(0);
    return fetch(URL, { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) {
        if (j && j.fields && j.fields.lastAdminAt) {
          var f = j.fields.lastAdminAt;
          lastAdminAt = parseInt(f.integerValue || f.doubleValue || '0', 10) || 0;
        }
        return lastAdminAt;
      })
      .catch(function () { return 0; });
  }

  function injectCss() {
    if (document.getElementById('mk-noti-css')) return;
    var s = document.createElement('style'); s.id = 'mk-noti-css';
    s.textContent = '.mk-noti-dot{position:absolute;top:-3px;inset-inline-end:-3px;width:12px;height:12px;border-radius:50%;background:#E53935;border:2px solid #fff;box-shadow:0 0 0 1px rgba(0,0,0,.18);animation:mkNotiPulse 1.6s ease-in-out infinite;z-index:6;pointer-events:none}@keyframes mkNotiPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.28)}}';
    document.head.appendChild(s);
  }
  function toggleDot(el, show) {
    if (!el) return;
    var dot = el.querySelector(':scope > .mk-noti-dot');
    if (show) {
      if (!dot) {
        dot = document.createElement('span'); dot.className = 'mk-noti-dot';
        if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
        el.appendChild(dot);
      }
    } else if (dot) { dot.remove(); }
  }
  function paintBadges() {
    var show = unread();
    document.querySelectorAll('[data-community-badge]').forEach(function (el) { toggleDot(el, show); });
    toggleDot(document.getElementById('mkcnBtn'), show);
  }

  var MKNotify = {
    check: function () { injectCss(); return fetchLatest().then(function () { paintBadges(); return unread(); }); },
    refresh: function () { injectCss(); paintBadges(); },
    markSeen: function () { setSeen(Date.now()); paintBadges(); },
    isUnread: unread,
    latest: function () { return lastAdminAt; }
  };
  window.MKNotify = MKNotify;

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { MKNotify.check(); });
  else MKNotify.check();
})();
