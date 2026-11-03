/* ════════════════════════════════════════════════════════════════
   tr.js — «كنوز المعرفة» engine. Each page only declares data:

     window.TR_PAGE = {
       id, icon, color, title:{ar,en}, intro:{ar,en},
       kind: 'cards' | 'stories',
       filters: [{id, label:{ar,en}}],          // optional (item.tag)
       items: [{
         id, icon, title:{}, sub:{}, tag, num,
         arName: 'الرَّحْمَنُ',                    // big word on the card front (optional)
         matn:{}, source:{},                      // text on the card back (cards)
         pages:[{scene:'🏜️', text:{}}],           // story pages (stories)
         sections:[{icon, h:{}, html:{}}],        // meaning / lesson / apply …
         quiz:{q:{}, opts:[{t:{}, ok:true}], fb:{}}
       }],
       parents:{ar:'<h3>…', en:'…'},            // guide for parents (HTML)
       worksheet:{ar:'…', en:'…'},              // printable activity sheet (HTML)
       panels:[{id, icon, label:{}, render:function(el, TR){}}]  // extra tabs (maps, tours…)
     };

   Calm by design: one card at a time, no autoplay, no timers racing
   the child, a gentle break reminder after 20 minutes, "calm mode"
   that switches off all motion. Progress («تعلّمتُها ✓») is stored in
   localStorage under tr:<page id>, so mk-system's per-child snapshot
   keeps each child's stars separate. Everything is free and offline.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var P = window.TR_PAGE || { items: [] };
  var LS = window.localStorage;
  function lsGet(k, d) { try { var v = LS.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }
  function lsSet(k, v) { try { LS.setItem(k, JSON.stringify(v)); } catch (e) {} }

  /* ── language (shared site pref: bunyanLang; ?lang= overrides) ── */
  var qLang = new URLSearchParams(location.search).get('lang');
  if (qLang === 'ar' || qLang === 'en') { try { LS.setItem('bunyanLang', qLang); } catch (e) {} }
  function lang() { try { return LS.getItem('bunyanLang') === 'en' ? 'en' : 'ar'; } catch (e) { return 'ar'; } }
  function ar() { return lang() === 'ar'; }
  function t(o) { if (o == null) return ''; if (typeof o === 'string') return o; return (ar() ? o.ar : o.en) || o.ar || o.en || ''; }
  function tx(a, e) { return ar() ? a : e; }
  function applyDir() { var h = document.documentElement; h.lang = lang(); h.dir = ar() ? 'rtl' : 'ltr'; }
  applyDir();
  if (P.color) {
    var rs = document.documentElement.style, c = P.color.replace('#', '');
    var rgb = [0, 2, 4].map(function (k) { return parseInt(c.substr(k, 2), 16); }).join(',');
    rs.setProperty('--acc', P.color); rs.setProperty('--acc-soft', 'rgba(' + rgb + ',.12)');
  }

  /* ── calm mode (shared, not per child → mk: prefix) ── */
  function calm() { return lsGet('mk:calm', false) === true; }
  function applyCalm() { document.documentElement.classList.toggle('calm', calm()); }
  applyCalm();

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function strip(h) { var d = document.createElement('div'); d.innerHTML = h || ''; var s = d.textContent || ''; try { s = s.replace(/[\u{1F000}-\u{1FFFF}\u{2190}-\u{2BFF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}]/gu, ''); } catch (e) {} return s.replace(/\s+/g, ' ').trim(); }

  /* ── read aloud ── */
  var synth = window.speechSynthesis, speakingBtn = null;
  function stopSpeak() { try { synth && synth.cancel(); } catch (e) {} if (speakingBtn) speakingBtn.innerHTML = '🔊 ' + tx('استمِع', 'Listen'); speakingBtn = null; }
  function speak(text, btn) {
    if (!synth) { toast(tx('القراءة الصوتية غير متاحة في هذا المتصفح', 'Read-aloud is not available in this browser')); return; }
    if (btn && speakingBtn === btn) { stopSpeak(); return; }
    stopSpeak();
    var s = strip(text); if (!s) return;
    var u = new SpeechSynthesisUtterance(window.MKVoice && MKVoice.fixText ? MKVoice.fixText(s) : s);
    u.lang = ar() ? 'ar-SA' : 'en-US'; u.rate = 0.9;
    try {
      if (window.MKVoice && MKVoice.bestVoice) { var bv = MKVoice.bestVoice(lang()); if (bv) u.voice = bv; }
      else { var vs = (synth.getVoices() || []).filter(function (v) { return v.lang && v.lang.toLowerCase().indexOf(lang()) === 0; }); if (vs[0]) u.voice = vs[0]; }
    } catch (e) {}
    u.onend = u.onerror = function () { stopSpeak(); };
    synth.speak(u);
    if (btn) { speakingBtn = btn; btn.innerHTML = '⏸ ' + tx('إيقاف', 'Stop'); }
  }

  /* ── toast ── */
  var toastEl;
  function toast(msg) {
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'tr-toast'; toastEl.setAttribute('role', 'status'); document.body.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.classList.add('show');
    clearTimeout(toastEl._t); toastEl._t = setTimeout(function () { toastEl.classList.remove('show'); }, 2400);
  }

  /* ── progress («تعلّمتُها») — per child via mk-system snapshot ── */
  var PKEY = 'tr:' + (P.id || 'page');
  function learned() { return lsGet(PKEY, []); }
  function isLearned(id) { return learned().indexOf(id) > -1; }
  function toggleLearned(id) {
    var L = learned(), i = L.indexOf(id);
    if (i > -1) L.splice(i, 1); else L.push(id);
    lsSet(PKEY, L); return i < 0;
  }

  /* ── gentle break reminder: 20 min of on-page time across the session ── */
  var BREAK_AT = 20 * 60, tick = 0;
  function breakTimer() {
    setInterval(function () {
      if (document.hidden) return;
      var s = 0; try { s = +sessionStorage.getItem('trTime') || 0; } catch (e) {}
      s += 15; try { sessionStorage.setItem('trTime', s); } catch (e) {}
      if (s >= BREAK_AT && !document.querySelector('.tr-break.open')) showBreak();
    }, 15000);
  }
  function showBreak() {
    var b = document.querySelector('.tr-break');
    if (!b) {
      b = document.createElement('div'); b.className = 'tr-break'; b.setAttribute('role', 'dialog');
      document.body.appendChild(b);
    }
    b.innerHTML = '<div><div class="big">🌿</div><h3>' + tx('وقتُ استراحةٍ لطيفة', 'Time for a little break') + '</h3>' +
      '<p>' + tx('أحسنتَ! تعلّمتَ كثيرًا اليوم. قُم واشرب ماءً، وتحرّك قليلًا، أو اذهب لتساعد أمّك وأباك 💚', 'Well done! You learned a lot today. Get up, drink some water, move around, or go help your parents 💚') + '</p>' +
      '<div class="tr-actions"><a class="tr-btn" href="' + ROOT + 'index.html">🏠 ' + tx('سأرتاح الآن', "I'll rest now") + '</a>' +
      '<button class="tr-btn ghost" id="trMore">' + tx('دقائق قليلة أخرى', 'A few more minutes') + '</button></div></div>';
    b.classList.add('open');
    b.querySelector('#trMore').onclick = function () { try { sessionStorage.setItem('trTime', BREAK_AT - 5 * 60); } catch (e) {} b.classList.remove('open'); };
  }

  /* ── paths ── */
  var ROOT = (function () { var p = location.pathname, i = p.indexOf('/corners/'); if (i < 0) return ''; var r = p.slice(i + 1).split('/'); r.pop(); return new Array(r.length + 1).join('../'); })();
  var isHub = P.id === 'hub';

  /* ════════════════ render ════════════════ */
  var filter = P.defaultFilter || 'all', curIdx = -1, curPage = 0;   // defaultFilter: open on one group, not a wall of every card

  function header() {
    var back = P.back ? P.back.href : isHub ? ROOT + 'index.html' : 'index.html';   // P.back: {href, label:{ar,en}} for pages that live under another hub
    var backLbl = P.back ? t(P.back.label) : isHub ? tx('المدينة', 'City') : tx('الفهرس', 'Index');
    return '<header class="tr-top">' +
      '<a class="tr-back" href="' + back + '">' + (ar() ? '→' : '←') + ' <span class="lbl">' + backLbl + '</span></a>' +
      '<h1>' + esc(P.icon || '') + ' ' + esc(t(P.title)) + '</h1>' +
      '<div class="tr-tools">' +
      '<button class="tr-ic" id="trCalm" aria-pressed="' + calm() + '" title="' + tx('الوضع الهادئ: بلا حركة', 'Calm mode: no motion') + '">🍃</button>' +
      '<button class="tr-ic" id="trLang" title="' + tx('English', 'العربية') + '">' + tx('EN', 'ع') + '</button>' +
      '</div></header>';
  }

  function tabsHtml() {
    var tabs = [{ id: 'kids', icon: '🧒', label: { ar: 'للأطفال', en: 'For Kids' } }].concat(P.panels || []);
    if (P.parents) tabs.push({ id: 'parents', icon: '👨‍👩‍👧', label: { ar: 'دليل الأهل', en: 'Parents' } });
    if (P.items && P.items.length) tabs.push({ id: 'print', icon: '🖨️', label: { ar: 'اطبع مجانًا', en: 'Print free' } });
    if (tabs.length < 2) return '';
    return '<div class="tr-tabs" role="tablist">' + tabs.map(function (x, i) {
      return '<button class="tr-tab" role="tab" data-tab="' + x.id + '" aria-selected="' + (i === 0) + '">' + (x.icon || '') + ' ' + esc(t(x.label)) + '</button>';
    }).join('') + '</div>';
  }

  function render() {
    applyDir(); stopSpeak();
    document.title = t(P.title) + ' | ' + tx('تربية الطفل المسلم', "Muslim Kids' Tarbiyah");
    var root = document.getElementById('tr-root');
    root.innerHTML = header() +
      '<main class="tr-wrap">' +
      '<section class="tr-hero"><div class="big">' + (P.icon || '') + '</div><h2>' + esc(t(P.title)) + '</h2><p>' + t(P.intro) + '</p>' + guideHtml() + '</section>' +
      tabsHtml() +
      '<section class="tr-panel" data-panel="kids">' + kidsPanel() + '</section>' +
      (P.panels || []).map(function (x) { return '<section class="tr-panel" data-panel="' + x.id + '" hidden></section>'; }).join('') +
      (P.parents ? '<section class="tr-panel" data-panel="parents" hidden><div class="tr-prose">' + t(P.parents) + '</div></section>' : '') +
      (P.items && P.items.length ? '<section class="tr-panel" data-panel="print" hidden>' + printPanel() + '</section>' : '') +
      nextHtml() +
      '<p class="tr-foot">💚 ' + tx('كلُّ المحتوى مجّانيٌّ بالكامل — اطبع وشارك صدقةً جارية', 'All content is completely free — print and share as ongoing charity') +
      ' · <a href="' + ROOT + 'index.html">' + tx('خريطة المدينة', 'City map') + '</a></p>' +
      '</main>' +
      '<div class="tr-view" id="trView" aria-modal="true" role="dialog"><div class="tr-sheet" id="trSheet"></div></div>' +
      '<div class="tr-print-area" id="trPrint"></div>';
    bind();
    (P.panels || []).forEach(function (x) { var el = root.querySelector('[data-panel="' + x.id + '"]'); try { x.render(el, API); } catch (e) { console.error(e); } });
    if (P.onRender) try { P.onRender(API); } catch (e) { console.error(e); }
  }

  /* «خطوتك التالية» — ONE calm suggestion at the end of the page instead of a strip of links.
     P.next: {href, icon, title:{ar,en}, why:{ar,en}} */
  function nextHtml() {
    var n = P.next; if (!n) return '';
    return '<a class="tr-next" href="' + n.href + '"><span class="ic">' + (n.icon || '➡️') + '</span><span class="tx"><span class="k">' + tx('خطوتك التالية', 'Your next step') + '</span>' +
      '<b>' + esc(t(n.title)) + '</b>' + (n.why ? '<span class="w">' + esc(t(n.why)) + '</span>' : '') + '</span><span class="go">' + (ar() ? '←' : '→') + '</span></a>';
  }

  /* P.guide: the corner's hero character — {icon, name:{ar,en}, say:{ar,en}} — one calm speech bubble */
  function guideHtml() {
    var g = P.guide; if (!g) return '';
    return '<div class="tr-guide"><span class="who" aria-hidden="true">' + g.icon + '</span><div class="speech"><b>' + esc(t(g.name)) + '</b>' + t(g.say) + '</div></div>';
  }

  function visibleItems() { return (P.items || []).filter(function (it) { return filter === 'all' || it.tag === filter; }); }

  function kidsPanel() {
    var items = P.items || [];
    if (!items.length) return P.kidsHtml ? t(P.kidsHtml) : '';
    var n = items.filter(function (it) { return isLearned(it.id); }).length;
    var prog = '<div class="tr-prog"><span>⭐ ' + n + ' / ' + items.length + '</span><div class="bar"><i style="width:' + Math.round(n / items.length * 100) + '%"></i></div><span>' +
      (P.kind === 'stories' ? tx('قصص قرأتُها', 'stories read') : tx('بطاقات تعلّمتُها', 'cards learned')) + '</span></div>';
    var chips = (P.filters && P.filters.length) ? '<div class="tr-chips">' + [{ id: 'all', label: { ar: 'الكل', en: 'All' } }].concat(P.filters).map(function (f) {
      return '<button class="tr-chip" data-filter="' + f.id + '" aria-pressed="' + (filter === f.id) + '">' + esc(t(f.label)) + '</button>';
    }).join('') + '</div>' : '';
    return (P.kidsHtml ? t(P.kidsHtml) : '') + prog + chips + '<div class="tr-grid" id="trGrid">' + gridHtml() + '</div>';
  }

  function gridHtml() {
    return visibleItems().map(function (it) {
      var i = P.items.indexOf(it);
      return '<button class="tr-card' + (isLearned(it.id) ? ' is-done' : '') + '" data-i="' + i + '">' +
        (it.num ? '<span class="num">' + it.num + '</span>' : '') + '<span class="done">⭐</span>' +
        (it.arName ? '<span class="ar-name">' + esc(it.arName) + '</span>' : '<span class="ic">' + (it.icon || '✨') + '</span>') +
        '<span class="t">' + esc(t(it.title)) + '</span>' + (it.sub ? '<span class="s">' + esc(t(it.sub)) + '</span>' : '') + '</button>';
    }).join('');
  }

  /* ── the focus viewer ── */
  function openItem(i) { curIdx = i; curPage = 0; drawSheet(); document.getElementById('trView').classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeView() { stopSpeak(); document.getElementById('trView').classList.remove('open'); document.body.style.overflow = ''; refreshGrid(); }
  function refreshGrid() { var g = document.getElementById('trGrid'); if (!g) return; var panel = g.closest('.tr-panel'); panel.innerHTML = kidsPanel(); bindGrid(panel); }

  function sectionsHtml(it) {
    return (it.sections || []).map(function (s) {
      return '<div class="tr-sec"><h4>' + (s.icon || '') + ' ' + esc(t(s.h)) + '</h4><div>' + t(s.html) + '</div></div>';
    }).join('');
  }
  /* data often lists the right answer first — rotate by a stable hash of the id
     so children can't learn "always tap the top one" (stable = same order on revisit) */
  function quizOrder(it) {
    var n = it.quiz.opts.length, h = 0, s = String(it.id || '');
    for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    var r = h % n, out = [];
    for (var k = 0; k < n; k++) out.push((k + r) % n);
    return out;
  }
  function quizHtml(it) {
    if (!it.quiz) return '';
    return '<div class="tr-sec tr-q"><h4>🤔 ' + esc(t(it.quiz.q)) + '</h4>' + quizOrder(it).map(function (k) {
      return '<button data-q="' + k + '">' + esc(t(it.quiz.opts[k].t)) + '</button>';
    }).join('') + '<div class="fb" id="trFb" aria-live="polite"></div></div>';
  }

  function drawSheet() {
    var vis = visibleItems(), it = P.items[curIdx], pos = vis.indexOf(it);
    var sheet = document.getElementById('trSheet');
    var hd = '<div class="tr-sheet-hd"><button class="tr-ic" id="trClose" aria-label="' + tx('إغلاق', 'Close') + '">✕</button>' +
      '<span class="pos">' + (pos + 1) + ' / ' + vis.length + '</span>' +
      '<button class="tr-ic" id="trPrev" ' + (pos <= 0 ? 'disabled' : '') + ' aria-label="prev">' + (ar() ? '→' : '←') + '</button>' +
      '<button class="tr-ic" id="trNext" ' + (pos >= vis.length - 1 ? 'disabled' : '') + ' aria-label="next">' + (ar() ? '←' : '→') + '</button></div>';
    var body = (P.kind === 'stories' && it.pages && it.pages.length) ? storyBody(it) : cardBody(it);
    var done = isLearned(it.id);
    var acts = '<div class="tr-actions">' +
      (P.kind === 'stories' && it.pages && it.pages.length ? '<button class="tr-btn ghost" id="trPgPrev">↺ ' + tx('أعِد القصّة', 'Read again') + '</button>' : '') +
      '<button class="tr-btn ghost" id="trSpeak">🔊 ' + tx('استمِع', 'Listen') + '</button>' +
      '<button class="tr-btn ' + (done ? 'ok' : '') + '" id="trDone">' + (done ? '⭐ ' + tx('تعلّمتُها', 'Learned') : '☆ ' + tx('تعلّمتُها!', 'I learned it!')) + '</button></div>';
    var showActs = !(P.kind === 'stories' && it.pages && curPage < it.pages.length);
    /* P.seerah: {itemId: fortressNodeId} — the Seerah has ONE timeline (حصن الأبطال); point to the event there */
    var sn = P.seerah && P.seerah[it.id];
    if (sn && showActs) acts += '<a class="tr-seerah" href="' + ROOT + 'corners/heroes-fortress/chapter.html?id=' + sn + '">🏰 ' + tx('مكانُها في رحلة السيرة — حصن الأبطال', 'Where it happens on the Seerah journey — Heroes\' Fortress') + ' ' + (ar() ? '←' : '→') + '</a>';
    sheet.innerHTML = hd + '<div class="tr-sheet-bd">' + body + (showActs ? acts : '') + '</div>';
    sheet.scrollTop = 0;
    bindSheet(it);
  }

  function cardBody(it) {
    var front = '<div class="tr-face front">' +
      (it.arName ? '<div class="ar-name">' + esc(it.arName) + '</div>' : '<div class="ic">' + (it.icon || '✨') + '</div>') +
      '<div class="t">' + esc(t(it.title)) + '</div>' + (it.sub ? '<div class="s">' + esc(t(it.sub)) + '</div>' : '') +
      '<div class="hint">👆 ' + tx('اضغط لتقلب البطاقة', 'Tap to flip the card') + '</div></div>';
    var backTxt = it.matn ? '<div class="matn">' + t(it.matn) + '</div>' : (it.back ? '<div>' + t(it.back) + '</div>' : (it.sections && it.sections[0] ? '<div>' + t(it.sections[0].html) + '</div>' : ''));
    var back = '<div class="tr-face back">' + backTxt + (it.source ? '<div class="tr-src">📚 ' + esc(t(it.source)) + '</div>' : '') + '</div>';
    return '<div class="tr-flip" id="trFlip" role="button" tabindex="0"><div class="tr-flip-in">' + front + back + '</div></div>' + sectionsHtml(it) + quizHtml(it);
  }

  function storyBody(it) {
    var n = it.pages.length;
    var dots = '<div class="tr-dots">' + it.pages.map(function (_, k) { return '<i class="' + (k === curPage ? 'on' : '') + '"></i>'; }).join('') + '<i class="' + (curPage >= n ? 'on' : '') + '"></i></div>';
    if (curPage < n) {
      var pg = it.pages[curPage];
      return '<div class="tr-story-pg"><div class="scene">' + (pg.scene || it.icon || '') + '</div>' +
        (curPage === 0 ? '<h3 style="text-align:center;color:var(--acc);margin-bottom:.5rem">' + esc(t(it.title)) + '</h3>' : '') +
        '<p>' + t(pg.text) + '</p></div>' + dots +
        '<div class="tr-actions"><button class="tr-btn ghost" id="trSpeak">🔊 ' + tx('استمِع', 'Listen') + '</button>' +
        (curPage > 0 ? '<button class="tr-btn ghost" id="trPgPrev">' + tx('السابق', 'Back') + '</button>' : '') +
        '<button class="tr-btn" id="trPgNext">' + (curPage === n - 1 ? tx('ماذا تعلّمنا؟ 🌟', 'What did we learn? 🌟') : tx('التالي', 'Next')) + '</button></div>';
    }
    return '<div class="tr-story-pg"><div class="scene">🌟</div><h3 style="text-align:center;color:var(--acc)">' + esc(t(it.title)) + '</h3></div>' +
      (it.matn ? '<div class="tr-sec"><h4>💬 ' + tx('الحديث', 'The hadith') + '</h4><div style="font-family:Amiri,serif;font-size:1.15rem">' + t(it.matn) + '</div>' + (it.source ? '<div class="tr-src">📚 ' + esc(t(it.source)) + '</div>' : '') + '</div>' : '') +
      sectionsHtml(it) + quizHtml(it) + dots;
  }

  function sheetText(it) {
    if (P.kind === 'stories' && it.pages && curPage < it.pages.length) return t(it.pages[curPage].text);
    var parts = [t(it.title)];
    if (it.matn) parts.push(t(it.matn)); else if (it.back) parts.push(t(it.back));
    (it.sections || []).forEach(function (s) { parts.push(t(s.h) + '. ' + t(s.html)); });
    return parts.join('. ');
  }

  function bindSheet(it) {
    var $ = function (id) { return document.getElementById(id); };
    $('trClose').onclick = closeView;
    var vis = visibleItems(), pos = vis.indexOf(it);
    $('trPrev').onclick = function () { if (pos > 0) { stopSpeak(); curIdx = P.items.indexOf(vis[pos - 1]); curPage = 0; drawSheet(); } };
    $('trNext').onclick = function () { if (pos < vis.length - 1) { stopSpeak(); curIdx = P.items.indexOf(vis[pos + 1]); curPage = 0; drawSheet(); } };
    var flip = $('trFlip');
    if (flip) { var f = function () { flip.classList.toggle('flipped'); }; flip.onclick = f; flip.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); f(); } }; }
    if ($('trSpeak')) $('trSpeak').onclick = function () { speak(sheetText(it), this); };
    if ($('trPgNext')) $('trPgNext').onclick = function () { stopSpeak(); curPage++; drawSheet(); };
    if ($('trPgPrev')) $('trPgPrev').onclick = function () { stopSpeak(); curPage = curPage >= it.pages.length ? 0 : curPage - 1; drawSheet(); };
    if ($('trDone')) $('trDone').onclick = function () {
      var now = toggleLearned(it.id);
      toast(now ? (P.guide ? P.guide.icon + ' ' + t(P.guide.name) + ': ' : '') + tx('ما شاء الله! نجمةٌ جديدة ⭐', 'Masha Allah! A new star ⭐') : tx('أُزيلت النجمة', 'Star removed'));
      drawSheet();
    };
    document.querySelectorAll('#trSheet .tr-q button[data-q]').forEach(function (b) {
      b.onclick = function () {
        var o = it.quiz.opts[+b.dataset.q], fb = $('trFb');
        document.querySelectorAll('#trSheet .tr-q button').forEach(function (x) { x.classList.remove('right', 'wrong'); });
        b.classList.add(o.ok ? 'right' : 'wrong');
        fb.textContent = o.ok ? ('✅ ' + (t(it.quiz.fb) || tx('أحسنت!', 'Well done!'))) : ('💭 ' + tx('فكّر مرّةً أخرى، لا بأس!', "Think again — that's okay!"));
      };
    });
  }

  /* ── printing (free flash cards / guide / worksheet) ── */
  function printPanel() {
    return '<div class="tr-prose" style="text-align:center"><h3>🖨️ ' + tx('موادّ مجّانية للطباعة', 'Free printables') + '</h3>' +
      '<p>' + tx('اطبع على ورق A4، ثم قُصّ على الخط المتقطّع واطوِ كلّ بطاقة من المنتصف: الوجه في جهة والمعنى في الجهة الأخرى.', 'Print on A4, cut along the dashed lines and fold each card in half: front on one side, meaning on the other.') + '</p>' +
      '<div class="tr-print-opts" style="margin-top:1rem">' +
      '<button class="tr-btn" data-print="cards">🃏 ' + tx('بطاقات للطفل', 'Cards for kids') + '</button>' +
      (P.worksheet ? '<button class="tr-btn" data-print="worksheet">✏️ ' + tx('ورقة نشاط', 'Activity sheet') + '</button>' : '') +
      (P.parents ? '<button class="tr-btn ghost" data-print="parents">👨‍👩‍👧 ' + tx('دليل الأهل', 'Parents guide') + '</button>' : '') +
      '</div></div>';
  }
  function printCards() {
    var cells = (P.items || []).map(function (it) {
      var back = it.matn ? '<div class="m">' + t(it.matn) + '</div>' : '';
      var first = (it.sections || [])[0];
      if (!back && it.back) back = '<div class="b">' + t(it.back) + '</div>';
      if (first) back += '<div class="b">' + strip(t(first.html)).slice(0, 320) + '</div>';
      return '<div class="pc">' + (it.arName ? '<div class="m" style="font-size:24pt">' + esc(it.arName) + '</div>' : '<div class="ic">' + (it.icon || '') + '</div>') +
        '<div class="t">' + esc(t(it.title)) + '</div>' + (it.sub ? '<div class="b">' + esc(t(it.sub)) + '</div>' : '') + '</div>' +
        '<div class="pc back">' + back + (it.source ? '<div class="src">' + esc(t(it.source)) + '</div>' : '') + '</div>';
    }).join('');
    return '<div class="pc-grid" dir="' + (ar() ? 'rtl' : 'ltr') + '">' + cells + '</div>';
  }
  function doPrint(kind) {
    var area = document.getElementById('trPrint');
    var head = '<div class="pg"><h1>' + (P.icon || '') + ' ' + esc(t(P.title)) + '</h1></div>';
    if (kind === 'cards') area.innerHTML = printCards();
    else if (kind === 'worksheet') area.innerHTML = '<div class="pg" dir="' + (ar() ? 'rtl' : 'ltr') + '">' + head + t(P.worksheet) + '</div>';
    else area.innerHTML = '<div class="pg" dir="' + (ar() ? 'rtl' : 'ltr') + '">' + head + t(P.parents) + '</div>';
    setTimeout(function () { window.print(); }, 60);
  }

  /* ── events ── */
  function bindGrid(scope) {
    scope.querySelectorAll('.tr-card[data-i]').forEach(function (c) { c.onclick = function () { openItem(+c.dataset.i); }; });
    scope.querySelectorAll('.tr-chip[data-filter]').forEach(function (c) { c.onclick = function () { filter = c.dataset.filter; refreshGrid(); }; });
  }
  function bind() {
    var root = document.getElementById('tr-root');
    root.querySelector('#trLang').onclick = function () { try { LS.setItem('bunyanLang', ar() ? 'en' : 'ar'); } catch (e) {} render(); };
    root.querySelector('#trCalm').onclick = function () { lsSet('mk:calm', !calm()); applyCalm(); this.setAttribute('aria-pressed', calm()); toast(calm() ? tx('الوضع الهادئ مُفعّل 🍃', 'Calm mode on 🍃') : tx('الوضع الهادئ مُطفأ', 'Calm mode off')); };
    root.querySelectorAll('.tr-tab').forEach(function (b) {
      b.onclick = function () {
        root.querySelectorAll('.tr-tab').forEach(function (x) { x.setAttribute('aria-selected', x === b); });
        root.querySelectorAll('.tr-panel').forEach(function (p) { p.hidden = p.dataset.panel !== b.dataset.tab; });
        if (P.onTab) try { P.onTab(b.dataset.tab, API); } catch (e) {}
      };
    });
    root.querySelectorAll('[data-print]').forEach(function (b) { b.onclick = function () { doPrint(b.dataset.print); }; });
    var kids = root.querySelector('[data-panel="kids"]'); if (kids) bindGrid(kids);
    var view = document.getElementById('trView');
    view.onclick = function (e) { if (e.target === view) closeView(); };
  }
  document.addEventListener('keydown', function (e) {
    var v = document.getElementById('trView'); if (!v || !v.classList.contains('open')) return;
    if (e.key === 'Escape') closeView();
  });

  var API = { t: t, tx: tx, ar: ar, lang: lang, esc: esc, speak: speak, stopSpeak: stopSpeak, toast: toast, root: ROOT, rerender: function () { render(); }, open: openItem, closeView: function () { var v = document.getElementById('trView'); if (v && v.classList.contains('open')) closeView(); } };
  window.TR = API;

  /* #<item id> in the URL opens that card/story directly (links from other corners) */
  function openFromHash() {
    var id = decodeURIComponent((location.hash || '').slice(1)); if (!id || !P.items) return;
    for (var i = 0; i < P.items.length; i++) if (P.items[i].id === id) { filter = 'all'; refreshGrid(); openItem(i); return; }
  }
  function start() { render(); openFromHash(); breakTimer(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
