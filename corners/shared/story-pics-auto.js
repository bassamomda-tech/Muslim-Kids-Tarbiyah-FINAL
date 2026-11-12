/* story-pics-auto.js — adds the drawn page picture (story-pics.js) to the other story readers WITHOUT
   touching their engines: it watches the page, and whenever a reader shows a story page it draws the
   scene for that page's text and puts it in the reader's own scene box.
     · Heroes' Fortress stories   #srScene  (+ .sr-character emoji, text in #srPage)
     · Treasures stories          .tr-story-pg > .scene  (emoji text, story text beside it)
     · Quran stories              .sp-scene (+ .big emoji, text in .sp-text)
   All of these are stories of long ago → era 'old' (no modern objects, no people).               */
(function () {
  if (window.__mkPicAuto || !window.MKStoryPic) return; window.__mkPicAuto = 1;
  var css = document.createElement('style');
  css.textContent =
    '.mkpic{display:block;width:100%;height:100%}' +
    '#srScene.mkpic-on .sr-character{left:auto;right:10px;bottom:8px;transform:none;width:46px;height:46px;border-radius:50%;display:grid;place-items:center;font-size:1.5rem;line-height:1;background:rgba(255,255,255,.93);box-shadow:0 2px 8px rgba(0,0,0,.25);animation:none;filter:none}' +
    '.tr-story-pg .scene.mkpic-on{position:relative;font-size:0;line-height:0;aspect-ratio:12/5;border-radius:16px;overflow:hidden;margin:.2rem 0 .8rem;box-shadow:0 6px 16px rgba(0,0,0,.18)}' +
    '.story-pane .sp-scene.mkpic-on{height:auto;aspect-ratio:12/5;display:block;background:none}' +
    '.story-pane .sp-scene.mkpic-on>:not(.mkpic):not(.big){display:none}' +
    '.mkpic-emo,.story-pane .sp-scene.mkpic-on .big{position:absolute;bottom:8px;inset-inline-start:8px;width:44px;height:44px;border-radius:50%;display:grid;place-items:center;font-size:1.45rem !important;line-height:1;background:rgba(255,255,255,.93);box-shadow:0 2px 8px rgba(0,0,0,.25);filter:none}' +
    '.mkpic-noemo .mkpic-emo,.mkpic-noemo .big,.mkpic-noemo .sr-character{display:none !important}';
  document.head.appendChild(css);
  var PERSON = /[\u{1F466}-\u{1F478}\u{1F47C}\u{1F481}-\u{1F487}\u{1F574}\u{1F575}\u{1F57A}\u{1F600}-\u{1F64B}\u{1F64D}\u{1F64E}\u{1F926}\u{1F930}-\u{1F939}\u{1F9D1}-\u{1F9DF}\u{1F9B8}\u{1F9B9}]/u;
  function txt(n) { return n ? (n.textContent || '').replace(/\s+/g, ' ').trim() : ''; }
  function hash(s) { var h = 0; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); }
  var READERS = [
    { find: function () { var s = document.getElementById('srScene'), p = document.getElementById('srPage'); return s && p && p.querySelector('.sr-page-num') ? [s] : []; },
      emoji: function (s) { return txt(s.querySelector('.sr-character')); },
      text: function () { var p = document.getElementById('srPage').cloneNode(true); [].forEach.call(p.querySelectorAll('.sr-page-num,button'), function (x) { x.remove(); }); return txt(p); },
      put: function (s, svg) { [].forEach.call(s.querySelectorAll('svg'), function (x) { x.remove(); }); s.insertAdjacentHTML('afterbegin', svg); } },
    { find: function () { return [].slice.call(document.querySelectorAll('.tr-story-pg > .scene')).filter(function (s) { return !!s.parentNode.querySelector('p'); }); },
      emoji: function (s) { var e = s.querySelector('.mkpic-emo'); return e ? txt(e) : txt(s); },
      text: function (s) { var p = s.parentNode.cloneNode(true), sc = p.querySelector('.scene'); if (sc) sc.remove(); return txt(p); },
      put: function (s, svg, em) { s.innerHTML = svg + '<b class="mkpic-emo" aria-hidden="true"></b>'; s.querySelector('.mkpic-emo').textContent = em; } },
    { find: function () { return [].slice.call(document.querySelectorAll('.story-pane .sp-scene')); },
      emoji: function (s) { return txt(s.querySelector('.big')); },
      text: function (s) { return txt(s.parentNode.querySelector('.sp-text')); },
      put: function (s, svg) { [].forEach.call(s.querySelectorAll('.mkpic'), function (x) { x.remove(); }); s.insertAdjacentHTML('afterbegin', svg); } }
  ];
  function scan() {
    READERS.forEach(function (R) {
      R.find().forEach(function (s) {
        var em = R.emoji(s), text = R.text(s); if (!text) return;
        var sig = hash(em + '|' + text.slice(0, 400)); if (s.__mkSig === sig) return; s.__mkSig = sig;
        s.classList.remove('mkpic-on'); s.classList.remove('mkpic-noemo');
        MKStoryPic.get({ id: 'auto-' + sig, title: '', text: text, emoji: em, era: 'old' }, function (svg) {
          if (!svg || s.__mkSig !== sig || !document.contains(s)) return;
          busy = true;
          try {
            R.put(s, svg, em);
            var g = s.querySelector('svg'); if (g) { g.setAttribute('class', 'mkpic'); g.setAttribute('preserveAspectRatio', 'xMidYMid slice'); g.setAttribute('aria-hidden', 'true'); }
            s.classList.add('mkpic-on'); s.classList.toggle('mkpic-noemo', !em || PERSON.test(em));
          } catch (e) {}
          setTimeout(function () { busy = false; }, 0);
        });
      });
    });
  }
  var busy = false, queued = false;
  new MutationObserver(function () { if (busy || queued) return; queued = true; setTimeout(function () { queued = false; scan(); }, 60); }).observe(document.documentElement, { childList: true, subtree: true, characterData: true });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scan); else scan();
})();
