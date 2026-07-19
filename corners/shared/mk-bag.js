/* ════════════════════════════════════════════════════════════════
   mk-bag.js — Global child "treasure bag" (شنطة الطفل).
   A single floating 🎒 button on EVERY journey/section page that
   gathers the active child's whole collection across the site:
   badges (completed stations), certificates, points (behaviour +
   stations), and unlocked rewards. Reuses any local journey
   collections (#cupBtn / #collStickers…) when present.
   Loads after mk-system.js + mk-journeys.js (degrades if absent).
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (window.__mkBag) return; window.__mkBag = true;

  function lang() { return (window.MK && MK.lang && MK.lang()) || localStorage.getItem('bunyanLang') || 'ar'; }
  function ar() { return lang() === 'ar'; }
  function tx(a, e) { return ar() ? a : e; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* path to corners/shared/ from the current document */
  function sharedBase() {
    var p = location.pathname, i = p.indexOf('/corners/');
    if (i < 0) return 'corners/shared/';
    var rest = p.slice(i + '/corners/'.length).split('/');
    rest.pop();                       // drop filename
    return new Array(rest.length + 1).join('../') + 'shared/';
  }
  var SHARED = sharedBase();

  /* ───────── data ───────── */
  function bpsPoints(pid) {
    try { var o = JSON.parse(localStorage.getItem('mk:bps') || '{}'); return (o.child && o.child[pid] && o.child[pid].points) || 0; } catch (e) { return 0; }
  }
  function rewardsCount() {
    try { var u = JSON.parse(localStorage.getItem('mkUnlocked') || '{}'); var n = 0; for (var k in u) if (Array.isArray(u[k])) n += u[k].length; return n; } catch (e) { return 0; }
  }
  /* era-based corners (story/challenge halls) keep progress in hisn-acts-<era> */
  var ERA_MAP = { heart: ['heart'], history: ['prophets', 'seerah', 'heroes', 'battles'], academy: ['creativity', 'minds', 'explorers'] };
  function eraSolved(era) {
    try { var o = JSON.parse(localStorage.getItem('hisn-acts-' + era) || '{}'); var n = 0; for (var k in o) if (o[k]) n++; return n; } catch (e) { return 0; }
  }
  function eraTotal(era) {
    var pack = window.HISN && HISN.activities && HISN.activities[era];
    return pack && pack.list ? pack.list.length * 3 : 0;
  }
  function collect() {
    var prof = (window.MK && MK.activeProfile && MK.activeProfile()) || null;
    var perCorner = [], badges = 0, totalStations = 0, certs = 0, journeysDone = 0, stationPts = 0;
    var snap = {}; try { snap = JSON.parse(localStorage.getItem('mk:cornerCard') || '{}'); } catch (e) {}
    if (window.MK && window.MK.CORNERS) {
      MK.CORNERS.forEach(function (c) {
        var cs = snap[c.id];
        // Live station tracking — the truth whenever this page can compute it
        var live = null;
        if (window.MK_J) {
          var st = MK_J.cornerStats(c.id);
          var done = 0, total = 0, jDone = 0, jCount = 0;
          if (st && st.total > 0) { done = st.done; total = st.total; jDone = st.journeysDone; jCount = st.count; }
          var eras = ERA_MAP[c.id];
          if (eras) {
            eras.forEach(function (e) {
              var d = eraSolved(e), t = eraTotal(e);
              if (t) { done += d; total += t; if (d >= t) jDone++; jCount++; }
              else if (d) { done += d; total += d; }
            });
          }
          if (total > 0) {
            var FIXED = { academy: 72, aqeeda: 130 };
            if (FIXED[c.id]) { var fp = total ? done / total : 0; total = FIXED[c.id]; done = Math.round(fp * total); jCount = jCount || 5; }
            live = { done: done, total: total, jDone: jDone, jCount: jCount };
          }
        }
        // Prefer the corner CARD snapshot (single source of truth), EXCEPT when
        // live progress is ahead of it — new progress must show in the bag
        // immediately, not only after re-visiting the corner page.
        if (cs && cs.station && !(live && live.done > cs.station[0])) {
          var sd = cs.station[0], stt = cs.station[1];
          badges += (cs.medal ? cs.medal[0] : sd);
          totalStations += stt;
          certs += (cs.cert ? cs.cert[0] : 0);
          journeysDone += (cs.journey ? cs.journey[0] : 0);
          stationPts += sd * 10;
          perCorner.push({ id: c.id, icon: c.icon, name: c.name, color: c.color, done: sd, total: stt, pct: cs.pct != null ? cs.pct : (stt ? Math.round(sd / stt * 100) : 0) });
          return;
        }
        if (!live) return;
        badges += live.done; totalStations += live.total; stationPts += live.done * 10; journeysDone += live.jDone; certs += live.jCount;
        perCorner.push({ id: c.id, icon: c.icon, name: c.name, color: c.color, done: live.done, total: live.total, pct: live.total ? Math.round(live.done / live.total * 100) : 0 });
      });
    }
    var pts = stationPts + (prof ? bpsPoints(prof.id) : 0);
    // A certificate = a journey the child has actually earned (the same set shown
    // as downloadable cards in downloads.html / bag.html). Keep this stat equal to
    // that list so the number never disagrees with what's downloadable.
    var earnedCerts = certs;
    try { if (window.MK_J && window.MK_JOURNEYS) { earnedCerts = 0; MK_JOURNEYS.forEach(function (j) { if (MK_J.completedOf(j) > 0) earnedCerts++; }); } } catch (e) {}
    try { var ca = JSON.parse(localStorage.getItem('comp_awards') || '[]'); if (Array.isArray(ca)) earnedCerts += ca.length; } catch (e) {}
    return { prof: prof, perCorner: perCorner, badges: badges, totalStations: totalStations, certs: earnedCerts, journeysDone: journeysDone, points: pts, rewards: rewardsCount() };
  }

  /* local journey collections present on this page? */
  function localItems() {
    var items = [];
    if (document.getElementById('collStickers')) items.push({ k: 'collStickers', icon: '🎖️', ar: 'أوسمة الرحلة', en: 'Journey badges' });
    if (document.getElementById('collKeys')) items.push({ k: 'collKeys', icon: '🔑', ar: 'مفاتيح الرحلة', en: 'Journey keys' });
    if (document.getElementById('collNames')) items.push({ k: 'collNames', icon: '🕋', ar: 'جدار الأسماء', en: 'Names wall' });
    var cup = document.getElementById('cupBtn') || document.getElementById('collCert');
    if (cup) items.push({ k: cup.id, icon: '📜', ar: 'شهادة هذه الرحلة', en: 'This journey certificate' });
    return items;
  }

  /* ───────── UI ───────── */
  function build() {
    var wrap = document.createElement('div');
    wrap.id = 'mkBag';
    wrap.innerHTML =
      '<button id="mkBagBtn" class="mkbag-btn" aria-label="bag" title="' + (ar() ? 'اسحبني لتغيير مكاني' : 'Drag me to move') + '"><span class="mkbag-ic">🎒</span><span class="mkbag-lb"></span><span class="mkbag-dot" id="mkBagDot"></span></button>' +
      '<div id="mkBagPanel" class="mkbag-panel"></div>';
    document.body.appendChild(wrap);
    setupDrag(wrap, document.getElementById('mkBagBtn'));
    restorePos(wrap);
    document.addEventListener('click', function (e) { if (!wrap.contains(e.target)) close(); });
    paintBtn(); updateDot();
  }

  /* ───────── draggable floating bag (position persists per device) ───────── */
  function clampPos(wrap, x, y) {
    var w = wrap.offsetWidth || 60, h = wrap.offsetHeight || 60;
    var maxX = Math.max(4, window.innerWidth - w - 4), maxY = Math.max(4, window.innerHeight - h - 4);
    return { x: Math.min(Math.max(4, x), maxX), y: Math.min(Math.max(4, y), maxY) };
  }
  function applyPos(wrap, x, y) {
    var c = clampPos(wrap, x, y);
    wrap.style.left = c.x + 'px'; wrap.style.top = c.y + 'px';
    wrap.style.right = 'auto'; wrap.style.bottom = 'auto'; wrap.style.transform = 'none';
  }
  function savePos(x, y) { try { localStorage.setItem('mk:bagPos', JSON.stringify({ x: x, y: y })); } catch (e) {} }
  function readPos() { try { return JSON.parse(localStorage.getItem('mk:bagPos') || 'null'); } catch (e) { return null; } }
  function restorePos(wrap) {
    var p = readPos();
    if (p && typeof p.x === 'number') applyPos(wrap, p.x, p.y);
    window.addEventListener('resize', function () { var q = readPos(); if (q) applyPos(wrap, q.x, q.y); });
  }
  function setupDrag(wrap, handle) {
    var dragging = false, moved = false, sx = 0, sy = 0, ox = 0, oy = 0;
    handle.addEventListener('pointerdown', function (e) {
      if (e.button != null && e.button !== 0) return;
      dragging = true; moved = false;
      var r = wrap.getBoundingClientRect(); ox = r.left; oy = r.top; sx = e.clientX; sy = e.clientY;
      try { handle.setPointerCapture(e.pointerId); } catch (er) {}
    });
    handle.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      var dx = e.clientX - sx, dy = e.clientY - sy;
      if (!moved && Math.abs(dx) + Math.abs(dy) < 5) return;
      moved = true; close(); applyPos(wrap, ox + dx, oy + dy);
    });
    handle.addEventListener('pointerup', function () {
      if (!dragging) return; dragging = false;
      if (moved) { var r = wrap.getBoundingClientRect(); savePos(r.left, r.top); }
      else toggle();                     // a tap (not a drag) opens/closes the bag
    });
    handle.addEventListener('pointercancel', function () { dragging = false; });
  }

  /* ───────── “save to bag” button on the journey certificate overlay ───────── */
  function saveCertToBag(btn) {
    var inp = document.getElementById('certName');
    var v = inp ? (inp.tagName === 'INPUT' ? inp.value : (inp.textContent || '')) : '';
    v = (v || '').trim();
    if (v) {
      try { localStorage.setItem('parentChildName', v); } catch (e) {}
      if (inp && inp.tagName === 'INPUT') { inp.value = v; inp.dispatchEvent(new Event('input', { bubbles: true })); }
    }
    try { if (window.MK && MK.snapshotActive) MK.snapshotActive(); } catch (e) {}
    updateDot();
    var old = btn.innerHTML;
    btn.innerHTML = ar() ? '✓ حُفِظَت في حقيبتك' : '✓ Saved to bag';
    btn.disabled = true;
    setTimeout(function () { btn.innerHTML = old; btn.disabled = false; }, 1700);
  }
  function injectCertSave() {
    var tools = document.querySelector('#certOverlay .cert-tools');
    if (!tools || document.getElementById('mkCertSave')) return;
    var b = document.createElement('button');
    b.id = 'mkCertSave'; b.className = 'cprint mkcert-save';
    b.innerHTML = '🎒 <span class="lng-ar">احفظ في الحقيبة</span><span class="lng-en">Save to bag</span>';
    var printBtn = tools.querySelector('#certPrint');
    if (printBtn) tools.insertBefore(b, printBtn); else tools.appendChild(b);
    b.addEventListener('click', function (e) { e.stopPropagation(); saveCertToBag(b); });
  }
  function paintBtn() {
    var lb = document.querySelector('#mkBagBtn .mkbag-lb'); if (lb) lb.textContent = tx('حقيبتي', 'My Bag');
  }
  function updateDot() {
    var d = collect(), el = document.getElementById('mkBagDot'); if (!el) return;
    el.textContent = d.points; el.style.display = d.points > 0 ? 'flex' : 'none';
  }
  function toggle() { var p = document.getElementById('mkBagPanel'); if (p.classList.contains('open')) close(); else open(); }
  function close() { var p = document.getElementById('mkBagPanel'); if (p) p.classList.remove('open'); }
  function open() {
    render(); updateDot();
    document.getElementById('mkBagPanel').classList.add('open');
  }

  function render() {
    var p = document.getElementById('mkBagPanel'); if (!p) return;
    var d = collect(), A = ar();
    var head = d.prof
      ? '<div class="mkbag-prof"><span class="mkbag-avi" style="background:' + (d.prof.color || '#D4A017') + '">' + (d.prof.avatar || '🧒') + '</span>' +
        '<div class="mkbag-pn"><b>' + esc(d.prof.name) + '</b><a href="' + SHARED + 'login.html?lang=' + lang() + '">' + (A ? 'تبديل الطفل' : 'switch child') + '</a></div></div>'
      : '<div class="mkbag-prof"><span class="mkbag-avi">🧒</span><div class="mkbag-pn"><b>' + (A ? 'ضيف' : 'Guest') + '</b><a href="' + SHARED + 'login.html?lang=' + lang() + '">' + (A ? 'تسجيل الدخول' : 'log in') + '</a></div></div>';

    var pointsCard = '<div class="mkbag-points"><span class="mkbag-pts-n">' + d.points + '</span><span class="mkbag-pts-s">⭐ ' + (A ? 'نقطة' : 'points') + '</span></div>';

    var stats = '<div class="mkbag-stats">' +
      '<div class="mkbag-stat"><span class="s-i">🎖️</span><b>' + d.badges + '</b><span>' + (A ? 'أوسمة' : 'Badges') + '</span></div>' +
      '<div class="mkbag-stat"><span class="s-i">📜</span><b>' + d.certs + '</b><span>' + (A ? 'شهادات' : 'Certs') + '</span></div>' +
      '<div class="mkbag-stat"><span class="s-i">🗺️</span><b>' + d.journeysDone + '</b><span>' + (A ? 'رحلات' : 'Journeys') + '</span></div>' +
      '<div class="mkbag-stat"><span class="s-i">🎁</span><b>' + d.rewards + '</b><span>' + (A ? 'جوائز' : 'Rewards') + '</span></div>' +
      '</div>';

    var loc = localItems();
    var localHtml = loc.length
      ? '<div class="mkbag-sec">' + (A ? '🧭 كنوز هذه الرحلة' : '🧭 This journey') + '</div><div class="mkbag-local">' +
        loc.map(function (it) { return '<button class="mkbag-lbtn" data-k="' + it.k + '"><span>' + it.icon + '</span>' + (A ? it.ar : it.en) + '</button>'; }).join('') + '</div>'
      : '';

    var corners = d.perCorner.length
      ? '<div class="mkbag-sec">' + (A ? '🏙️ تقدّمي في الأركان' : '🏙️ My corners') + '</div><div class="mkbag-corners">' +
        d.perCorner.map(function (c) {
          return '<div class="mkbag-crow"><span class="c-ic">' + c.icon + '</span><span class="c-nm">' + (A ? c.name.ar : c.name.en) + '</span>' +
            '<span class="c-bar"><i style="width:' + c.pct + '%;background:' + c.color + '"></i></span><span class="c-pct">' + c.pct + '%</span></div>';
        }).join('') + '</div>'
      : '';

    var foot = '<div class="mkbag-foot">' +
      '<a class="mkbag-fbtn" href="' + SHARED + 'bag.html?lang=' + lang() + '">🎒 ' + (A ? 'صفحة حقيبتي كاملة' : 'Open my full bag') + '</a>' +
      '</div>';

    p.innerHTML = '<div class="mkbag-head">' + (A ? '🎒 حقيبةُ كنوزي' : '🎒 My Treasure Bag') + '<button class="mkbag-x" id="mkBagX">✕</button></div>' +
      head + pointsCard + stats + localHtml + corners + foot;

    p.querySelector('#mkBagX').onclick = close;
    p.querySelectorAll('.mkbag-lbtn').forEach(function (b) {
      b.onclick = function () { var el = document.getElementById(b.dataset.k); close(); if (el) el.click(); };
    });
  }

  /* ───────── styles ───────── */
  function css() {
    if (document.getElementById('mkbag-css')) return;
    var s = document.createElement('style'); s.id = 'mkbag-css';
    s.textContent =
      '#mkBag{position:fixed;top:50%;left:12px;transform:translateY(-50%);z-index:2147483000;font-family:"Tajawal","Nunito",sans-serif;direction:' + (ar() ? 'rtl' : 'ltr') + '}' +
      /* panel opens to the right of the mid-screen button */
      '.mkbag-panel{position:absolute;left:0;top:calc(100% + 10px);width:320px;max-width:calc(100vw - 28px);max-height:70vh;overflow-y:auto;background:#0e2c49;border:1.5px solid rgba(232,181,48,.42);border-radius:1.2rem;padding:.8rem;box-shadow:0 22px 54px rgba(0,0,0,.6);display:none;color:#FEF5DC}' +
      '.mkbag-btn{position:relative;display:flex;align-items:center;gap:.5rem;background:linear-gradient(140deg,#E8B530,#c79518);color:#10243d;border:none;border-radius:2rem;padding:.55rem 1rem;font-weight:900;cursor:pointer;font-family:inherit;box-shadow:0 10px 26px rgba(0,0,0,.4);font-size:.95rem}' +
      '.mkbag-btn:hover{filter:brightness(1.05)}' +
      '.mkbag-ic{font-size:1.3rem}' +
      '.mkbag-dot{display:none;align-items:center;justify-content:center;min-width:20px;height:20px;padding:0 5px;border-radius:11px;background:#C0392B;color:#fff;font-size:.7rem;font-weight:900;position:absolute;top:-7px;inset-inline-start:-7px;box-shadow:0 2px 6px rgba(0,0,0,.4)}' +
      '.mkbag-panel.open{display:block;animation:mkbagIn .18s ease}' +
      '@keyframes mkbagIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}' +
      '.mkbag-head{display:flex;align-items:center;justify-content:space-between;font-weight:900;color:#F5CC5A;font-size:1.02rem;margin-bottom:.6rem}' +
      '.mkbag-x{background:rgba(255,255,255,.08);border:none;color:#FEF5DC;width:28px;height:28px;border-radius:50%;cursor:pointer;font-weight:900}' +
      '.mkbag-prof{display:flex;align-items:center;gap:.6rem;background:rgba(255,255,255,.05);border:1px solid rgba(232,181,48,.22);border-radius:.9rem;padding:.5rem .7rem;margin-bottom:.6rem}' +
      '.mkbag-avi{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;font-size:1.3rem;background:#D4A017}' +
      '.mkbag-pn{display:flex;flex-direction:column;line-height:1.3}.mkbag-pn b{font-weight:900}.mkbag-pn a{color:#9fd0ff;font-size:.76rem;text-decoration:none}' +
      '.mkbag-points{display:flex;align-items:baseline;gap:.5rem;justify-content:center;background:linear-gradient(135deg,rgba(232,181,48,.2),rgba(232,181,48,.06));border:1px solid rgba(232,181,48,.4);border-radius:1rem;padding:.7rem;margin-bottom:.6rem}' +
      '.mkbag-pts-n{font-size:2rem;font-weight:900;color:#F5CC5A}.mkbag-pts-s{font-weight:800;opacity:.85}' +
      '.mkbag-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:.4rem;margin-bottom:.4rem}' +
      '.mkbag-stat{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:.8rem;padding:.5rem .2rem;text-align:center;display:flex;flex-direction:column;gap:.1rem}' +
      '.mkbag-stat .s-i{font-size:1.1rem}.mkbag-stat b{font-size:1.05rem;font-weight:900;color:#F5CC5A}.mkbag-stat span:last-child{font-size:.64rem;opacity:.75;font-weight:700}' +
      '.mkbag-sec{font-weight:900;color:#F5CC5A;font-size:.86rem;margin:.7rem 0 .4rem}' +
      '.mkbag-local{display:flex;flex-wrap:wrap;gap:.4rem}' +
      '.mkbag-lbtn{display:flex;align-items:center;gap:.35rem;background:rgba(255,255,255,.06);border:1px solid rgba(232,181,48,.28);border-radius:.7rem;padding:.45rem .65rem;color:#FEF5DC;font-weight:800;font-size:.8rem;cursor:pointer;font-family:inherit}' +
      '.mkbag-lbtn:hover{background:rgba(232,181,48,.16)}.mkbag-lbtn span{font-size:1rem}' +
      '.mkbag-corners{display:flex;flex-direction:column;gap:.4rem}' +
      '.mkbag-crow{display:flex;align-items:center;gap:.5rem;font-size:.8rem}' +
      '.mkbag-crow .c-ic{font-size:1rem}.mkbag-crow .c-nm{flex:1;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
      '.mkbag-crow .c-bar{width:70px;height:6px;background:rgba(255,255,255,.1);border-radius:4px;overflow:hidden}.mkbag-crow .c-bar i{display:block;height:100%;border-radius:4px}' +
      '.mkbag-crow .c-pct{font-weight:800;font-size:.74rem;color:#F5CC5A;min-width:30px;text-align:end}' +
      '.mkbag-foot{margin-top:.7rem}' +
      '.mkbag-fbtn{display:block;text-align:center;background:linear-gradient(135deg,#1F8A5B,#176b46);color:#fff;border-radius:.9rem;padding:.6rem;font-weight:800;text-decoration:none;font-size:.86rem}' +
      '#mkBagBtn{touch-action:none}' +
      '.mkcert-save{background:linear-gradient(160deg,#1F8A5B,#176b46)!important;color:#fff!important}' +
      /* the top collections row (badges/keys/names/cert) lives in the bag now */
      '.collections{display:none!important}' +
      '.drawer{z-index:2147483001!important}';
    document.head.appendChild(s);
  }

  function boot() {
    css(); build();
    injectCertSave();
    // the overlay is static markup, but retry briefly in case a page builds it late
    var tries = 0, ct = setInterval(function () { injectCertSave(); if (++tries > 20 || document.getElementById('mkCertSave')) clearInterval(ct); }, 250);
    document.querySelectorAll('.lang button, #btnAr, #btnEn').forEach(function (b) {
      b.addEventListener('click', function () { setTimeout(function () { paintBtn(); updateDot(); if (document.getElementById('mkBagPanel').classList.contains('open')) render(); }, 50); });
    });
    var map = document.getElementById('map');
    if (map) new MutationObserver(function () { updateDot(); }).observe(map, { childList: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
