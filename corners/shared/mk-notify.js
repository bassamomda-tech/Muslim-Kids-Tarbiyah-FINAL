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
  var BC_URL = 'https://firestore.googleapis.com/v1/projects/' + PROJECT + '/databases/(default)/documents/meta/broadcast';
  var SEEN_KEY = 'mkcomm:lastSeenAdmin';
  var BC_SEEN = 'mkbroadcast:lastSeen';
  var lastAdminAt = 0;
  var bc = null;

  function L() { try { return localStorage.getItem('bunyanLang') === 'en' ? 'en' : 'ar'; } catch (e) { return 'ar'; } }
  function pageArea() {
    var p = location.pathname.toLowerCase();
    if (/parents\.html|account\.html|community\.html|downloads\.html|store\.html|bag\.html/.test(p)) return 'parents';
    return 'kids';
  }
  function audienceMatch(a) { if (!a || a === 'all') return true; return a === pageArea(); }

  function acctSeen() { try { var u = window.MKAuth && MKAuth.user && MKAuth.user(); return (u && u.bcSeen) || 0; } catch (e) { return 0; } }
  function bcGetSeen() { var ls = 0; try { ls = parseInt(localStorage.getItem(BC_SEEN) || '0', 10) || 0; } catch (e) {} return Math.max(ls, acctSeen()); }
  function bcSetSeen(ts) {
    ts = ts || 0;
    try { localStorage.setItem(BC_SEEN, String(ts)); } catch (e) {}
    // ☁️ persist to the family account so it counts as seen on every device they log in on
    try { if (window.MKAuth && MKAuth.setBroadcastSeen && MKAuth.user && MKAuth.user()) MKAuth.setBroadcastSeen(ts); } catch (e) {}
  }

  function fetchBroadcast() {
    if (!window.fetch) return Promise.resolve(null);
    return fetch(BC_URL, { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) {
        if (j && j.fields) {
          var f = j.fields;
          bc = {
            at: parseInt((f.at || {}).integerValue || (f.at || {}).doubleValue || '0', 10) || 0,
            ar: (f.ar || {}).stringValue || '',
            en: (f.en || {}).stringValue || '',
            audience: (f.audience || {}).stringValue || 'all',
            by: (f.by || {}).stringValue || ''
          };
        }
        return bc;
      })
      .catch(function () { return null; });
  }

  function bannerCss() {
    if (document.getElementById('mk-bc-css')) return;
    var s = document.createElement('style'); s.id = 'mk-bc-css';
    s.textContent = '.mk-bc{position:fixed;top:0;left:0;right:0;z-index:99999;display:flex;align-items:center;gap:.7rem;padding:.85rem 1.1rem;background:linear-gradient(135deg,#10243d,#1a3a5c);color:#fff;box-shadow:0 6px 22px rgba(0,0,0,.3);font-family:"Tajawal","Nunito",system-ui,sans-serif;border-bottom:3px solid #E8B530;transform:translateY(-110%);transition:transform .45s cubic-bezier(.2,.9,.3,1);direction:rtl}'
      + '.mk-bc.show{transform:translateY(0)}'
      + '.mk-bc[data-en="1"]{direction:ltr}'
      + '.mk-bc-ic{font-size:1.5rem;flex:0 0 auto;animation:mkBcBell 2s ease-in-out infinite;transform-origin:50% 0}'
      + '@keyframes mkBcBell{0%,60%,100%{transform:rotate(0)}10%{transform:rotate(14deg)}20%{transform:rotate(-12deg)}30%{transform:rotate(8deg)}40%{transform:rotate(-6deg)}50%{transform:rotate(3deg)}}'
      + '.mk-bc-body{flex:1;min-width:0;line-height:1.45}'
      + '.mk-bc-by{display:block;font-size:.74rem;opacity:.75;font-weight:700;margin-bottom:.1rem}'
      + '.mk-bc-tx{font-size:1rem;font-weight:800;overflow-wrap:break-word}'
      + '.mk-bc-x{flex:0 0 auto;background:rgba(255,255,255,.14);border:none;color:#fff;width:30px;height:30px;border-radius:50%;font-size:1.1rem;cursor:pointer;line-height:1}'
      + '.mk-bc-x:hover{background:rgba(255,255,255,.28)}';
    document.head.appendChild(s);
  }
  function showBanner() {
    if (!bc || !bc.at) return;
    if (bc.at <= bcGetSeen()) return;
    if (!audienceMatch(bc.audience)) return;
    var en = L() === 'en';
    var msg = en ? (bc.en || bc.ar) : (bc.ar || bc.en);
    if (!msg) return;
    if (document.getElementById('mkBcBar')) return;
    bannerCss();
    var bar = document.createElement('div');
    bar.className = 'mk-bc'; bar.id = 'mkBcBar'; if (en) bar.setAttribute('data-en', '1');
    bar.innerHTML = '<span class="mk-bc-ic">\uD83D\uDCE3</span>'
      + '<div class="mk-bc-body"><span class="mk-bc-by">' + (bc.by ? esc(bc.by) : (en ? 'Admin' : '\u0627\u0644\u0625\u062F\u0627\u0631\u0629')) + '</span>'
      + '<span class="mk-bc-tx">' + esc(msg) + '</span></div>'
      + '<button class="mk-bc-x" aria-label="close">\u00D7</button>';
    document.body.appendChild(bar);
    bcSetSeen(bc.at); // ← يُعلَّم كمقروء فور عرضه: يظهر مرّة واحدة فقط ولا يتكرّر في كل زيارة
    requestAnimationFrame(function () { bar.classList.add('show'); });
    bar.querySelector('.mk-bc-x').onclick = function () {
      bcSetSeen(bc.at); bar.classList.remove('show');
      setTimeout(function () { if (bar.parentNode) bar.parentNode.removeChild(bar); }, 450);
    };
  }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

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
    check: function () { injectCss(); return Promise.all([fetchLatest(), fetchBroadcast()]).then(function () { paintBadges(); showBanner(); return unread(); }); },
    refresh: function () { injectCss(); paintBadges(); },
    markSeen: function () { setSeen(Date.now()); paintBadges(); },
    isUnread: unread,
    latest: function () { return lastAdminAt; },
    broadcast: function () { return bc; }
  };
  window.MKNotify = MKNotify;

  // ☁️ Cross-device: once the family account loads, honor its "seen" value.
  // If this broadcast was already dismissed on another device, hide it here;
  // and if it was dismissed on THIS device first, push that up to the account.
  function onAcct() {
    var u = window.MKAuth && MKAuth.user && MKAuth.user();
    if (!u) return;
    var bar = document.getElementById('mkBcBar');
    if (bc && bc.at) {
      if (bc.at <= bcGetSeen()) {
        if (bar) { bar.classList.remove('show'); setTimeout(function () { if (bar.parentNode) bar.parentNode.removeChild(bar); }, 300); }
      }
      // sync a local-only dismissal up to the account
      var ls = 0; try { ls = parseInt(localStorage.getItem(BC_SEEN) || '0', 10) || 0; } catch (e) {}
      if (ls >= bc.at && (u.bcSeen || 0) < bc.at && MKAuth.setBroadcastSeen) { try { MKAuth.setBroadcastSeen(ls); } catch (e) {} }
    }
    paintBadges();
  }
  function hookAuth() { if (window.MKAuth && MKAuth.onChange) { MKAuth.onChange(onAcct); onAcct(); return true; } return false; }
  if (!hookAuth()) { var tries = 0; var iv = setInterval(function () { if (hookAuth() || ++tries > 40) clearInterval(iv); }, 250); }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { MKNotify.check(); });
  else MKNotify.check();
})();
