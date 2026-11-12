/* battles.js — «خُطَط القادة» / The Commanders' Plans (page logic)
   Hub of five battles → guided lesson: background → 3 decisions (the map advances after each)
   → lessons card → 3-question quiz. No network, no audio. Progress: localStorage "battles_done". */
(function () {
  'use strict';
  var LS = null; try { LS = window.localStorage; } catch (e) {}
  var B = window.BATTLES || [];
  var root = document.getElementById('bt');
  var lang = 'ar'; try { lang = LS.getItem('bunyanLang') === 'en' ? 'en' : 'ar'; } catch (e) {}
  var S = { id: null, step: 0, pick: {}, qi: 0, qok: false, qmiss: {}, fin: false };

  var UI = {
    title: { ar: 'خُطَط القادة', en: 'The Commanders’ Plans' },
    sub: { ar: 'خمسُ معاركَ من تاريخنا على خرائطَ تفاعليّة. في كلّ معركةٍ ثلاثةُ قراراتٍ للتفكير فيها، ثم نرى ما الذي حدث فعلًا ولماذا كان حكيمًا.', en: 'Five battles from our history on interactive maps. Each has three decisions to think through — then we see what really happened and why it was wise.' },
    note: { ar: 'الخرائط تخطيطيّةٌ للتوضيح وليست بمقياسٍ دقيق. الجيوش تُمثَّل بمربّعاتٍ وراياتٍ وأسهمٍ فقط.', en: 'The maps are simple sketches, not to scale. Armies are shown only as blocks, banners and arrows.' },
    start: { ar: 'ابدأ', en: 'Start' }, again: { ar: 'مراجعة', en: 'Review' }, doneMark: { ar: 'اكتملت', en: 'Done' },
    count: { ar: 'اكتمل {n} من {t}', en: '{n} of {t} done' },
    all: { ar: 'كلّ المعارك', en: 'All battles' },
    why: { ar: 'لماذا وقعت؟', en: 'Why did it happen?' },
    go: { ar: 'هيّا إلى القرار الأوّل', en: 'On to the first decision' },
    dec: { ar: 'القرار {k} من 3', en: 'Decision {k} of 3' },
    cmd: { ar: 'لو كانت القيادةُ بيدك…', en: 'If you were in command…' },
    yours: { ar: 'اختيارك', en: 'Your choice' },
    wise: { ar: 'اختيارٌ حكيم', en: 'A wise choice' },
    think: { ar: 'فكرةٌ تستحقّ التأمّل', en: 'An idea worth thinking about' },
    taken: { ar: 'القرار الذي اتُّخذ', en: 'The decision that was taken' },
    actual: { ar: 'ما الذي حدث فعلًا؟', en: 'What really happened?' },
    next: { ar: 'التالي', en: 'Next' }, prev: { ar: 'السابق', en: 'Back' },
    toLessons: { ar: 'ما الدروس؟', en: 'What are the lessons?' },
    lessons: { ar: 'دروسٌ من المعركة', en: 'Lessons from the battle' },
    sources: { ar: 'المصادر', en: 'Sources' },
    toQuiz: { ar: 'إلى الاختبار القصير', en: 'To the short quiz' },
    quiz: { ar: 'سؤال {k} من 3', en: 'Question {k} of 3' },
    right: { ar: 'إجابةٌ صحيحة!', en: 'Correct!' },
    retry: { ar: 'ليست هذه. لا بأس، محاولةٌ أخرى!', en: 'Not that one. No worries — have another go!' },
    finT: { ar: 'اكتملت الخطّة!', en: 'Plan complete!' },
    finD: { ar: 'عملٌ رائع! ثلاثُ نجومٍ أُضيفت إلى رحلتك.', en: 'Great work! Three stars have been added to your journey.' },
    finD0: { ar: 'عملٌ رائع! أكملتَ هذه المعركة.', en: 'Great work! This battle is complete.' },
    nextB: { ar: 'المعركة التالية', en: 'Next battle' },
    legend: { ar: 'مفتاح الخريطة', en: 'Map key' },
    mapOf: { ar: 'خريطة تخطيطيّة: ', en: 'Sketch map: ' },
    steps: { ar: ['المقدّمة', 'القرار 1', 'القرار 2', 'القرار 3', 'الدروس', 'الاختبار'], en: ['Intro', 'Decision 1', 'Decision 2', 'Decision 3', 'Lessons', 'Quiz'] }
  };
  UI.finD0.ar = 'عملٌ رائع! اكتملت هذه المعركة.';

  function t(o) { return o ? (o[lang] != null ? o[lang] : o.ar) : ''; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function fill(s, o) { return s.replace(/\{(\w+)\}/g, function (m, k) { return o[k]; }); }
  function byId(id) { for (var i = 0; i < B.length; i++) if (B[i].id === id) return B[i]; return null; }
  function done() { try { var a = JSON.parse(LS.getItem('battles_done') || '[]'); return Array.isArray(a) ? a : []; } catch (e) { return []; } }
  function markDone(id) {
    var a = done(); if (a.indexOf(id) < 0) { a.push(id); try { LS.setItem('battles_done', JSON.stringify(a)); } catch (e) {} }
    try { if (window.MKJourney && typeof MKJourney.earn === 'function') MKJourney.earn('battle', id, 3); } catch (e) {}
  }
  var arrow = function () { return lang === 'ar' ? '←' : '→'; }, back = function () { return lang === 'ar' ? '→' : '←'; };

  /* ── hub ── */
  function hub() {
    var d = done(), h = '';
    h += '<section class="bt-crest"><div class="bt-seal" aria-hidden="true">🗺️</div><h1>' + esc(t(UI.title)) + '</h1><p>' + esc(t(UI.sub)) + '</p>' +
      '<div class="bt-count">' + esc(fill(t(UI.count), { n: d.filter(byId).length, t: B.length })) + '</div></section>';
    h += '<ol class="bt-list">';
    B.forEach(function (b, i) {
      var ok = d.indexOf(b.id) >= 0;
      h += '<li><button type="button" class="bt-card' + (ok ? ' done' : '') + '" data-open="' + b.id + '" style="--bc:' + b.c + '">' +
        '<span class="bt-num">' + (i + 1) + '</span><span class="bt-ic" aria-hidden="true">' + b.icon + '</span>' +
        '<span class="bt-tx"><b>' + esc(t(b.title)) + '</b><small>' + esc(t(b.date)) + '</small><em>' + esc(t(b.teaser)) + '</em></span>' +
        '<span class="bt-go">' + (ok ? '✓ ' + esc(t(UI.doneMark)) : esc(t(UI.start)) + ' ' + arrow()) + '</span></button></li>';
    });
    h += '</ol><p class="bt-note">' + esc(t(UI.note)) + '</p>';
    root.innerHTML = h;
    document.title = t(UI.title) + (lang === 'ar' ? ' | حِصن الأبطال' : ' | Heroes’ Fortress');
  }

  /* ── lesson frame (the map stays in place while the panel under it changes) ── */
  function stage() {
    if (S.step === 0) return 0;
    if (S.step <= 3) return S.pick[S.step] != null ? S.step : S.step - 1;
    return 3;
  }
  function lesson() {
    var b = byId(S.id); if (!b) return hub();
    var h = '<section class="bt-lesson" style="--bc:' + b.c + '">' +
      '<button type="button" class="bt-back" data-hub="1">' + back() + ' ' + esc(t(UI.all)) + '</button>' +
      '<header class="bt-head"><span class="bt-ic" aria-hidden="true">' + b.icon + '</span><div><h1>' + esc(t(b.title)) + '</h1><p>' + esc(t(b.date)) + '</p></div></header>' +
      '<ol class="bt-dots" id="btDots"></ol>' +
      '<figure class="bt-map"><svg id="btSvg" viewBox="0 0 360 250" role="img" preserveAspectRatio="xMidYMid meet">' +
      '<defs>' + ['m', 'e', 'n'].map(function (k) { return '<marker id="ah-' + k + '" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path class="ah ' + k + '" d="M0,0 L10,5 L0,10 z"/></marker>'; }).join('') + '</defs>' +
      b.map + '</svg>' +
      '<div class="bt-key" aria-label="' + esc(t(UI.legend)) + '"><span><i class="k m"></i>' + esc(t(b.sides.m)) + '</span><span><i class="k e"></i>' + esc(t(b.sides.e)) + '</span><span><i class="k w"></i>' + (lang === 'ar' ? 'ماء' : 'Water') + '</span></div>' +
      '<figcaption id="btCap"></figcaption></figure>' +
      '<div id="btBody" class="bt-body"></div></section>';
    root.innerHTML = h;
    [].forEach.call(root.querySelectorAll('#btSvg text[data-ar]'), function (x) { x.textContent = x.getAttribute('data-' + lang); });
    document.title = t(b.title) + ' | ' + t(UI.title);
    panel(false);
  }
  function setStage() {
    var b = byId(S.id), n = stage(), svg = document.getElementById('btSvg'); if (!svg) return;
    [].forEach.call(svg.querySelectorAll('.st'), function (g) {
      var s = +g.getAttribute('data-s'), u = g.getAttribute('data-u');
      g.classList.toggle('on', n >= s && (u == null || n <= +u));
    });
    svg.setAttribute('aria-label', t(UI.mapOf) + t(b.caps[n]));
    document.getElementById('btCap').textContent = t(b.caps[n]);
  }
  function dots() {
    var L = UI.steps[lang], h = '';
    for (var i = 0; i < 6; i++) h += '<li class="' + (i < S.step || (S.fin && i === 5) ? 'past' : i === S.step ? 'now' : '') + '"' + (i === S.step ? ' aria-current="step"' : '') + '><span>' + esc(L[i]) + '</span></li>';
    document.getElementById('btDots').innerHTML = h;
  }
  function nav(nextLabel, canNext) {
    return '<div class="bt-nav">' + (S.step > 0 ? '<button type="button" class="bt-btn ghost" data-prev="1">' + back() + ' ' + esc(t(UI.prev)) + '</button>' : '<span></span>') +
      (canNext ? '<button type="button" class="bt-btn" data-next="1">' + esc(nextLabel) + ' ' + arrow() + '</button>' : '') + '</div>';
  }
  function panel(scroll) {
    var b = byId(S.id), h = '', k = S.step;
    if (k === 0) {
      h = '<div class="bt-panel"><h2>' + esc(t(UI.why)) + '</h2><p class="bt-p">' + esc(t(b.bg)) + '</p></div>' + nav(t(UI.go), true);
    } else if (k <= 3) {
      var d = b.decisions[k - 1], p = S.pick[k];
      h = '<div class="bt-panel"><div class="bt-kick"><b>' + esc(fill(t(UI.dec), { k: k })) + '</b><span>' + esc(t(UI.cmd)) + '</span></div><h2 class="bt-q">' + esc(t(d.q)) + '</h2>';
      if (p == null) {
        h += '<div class="bt-opts">' + d.opts.map(function (o, i) { return '<button type="button" class="bt-opt" data-pick="' + i + '"><i>' + (lang === 'ar' ? 'أبج' : 'ABC').charAt(i) + '</i><span>' + esc(t(o.t)) + '</span></button>'; }).join('') + '</div></div>' + nav('', false);
      } else {
        var o = d.opts[p], ok = !!o.ok, w = d.opts.filter(function (x) { return x.ok; })[0];
        h += '<div class="bt-res ' + (ok ? 'ok' : 'soft') + '"><div class="bt-tag">' + (ok ? '⭐ ' + esc(t(UI.wise)) : '💭 ' + esc(t(UI.think))) + '</div>' +
          '<p><b>' + esc(t(UI.yours)) + ':</b> ' + esc(t(o.t)) + '</p><p>' + esc(t(o.fb)) + '</p>' +
          (ok ? '' : '<p class="bt-taken"><b>' + esc(t(UI.taken)) + ':</b> ' + esc(t(w.t)) + '</p>') + '</div>' +
          '<div class="bt-act"><h3>' + esc(t(UI.actual)) + '</h3><p class="bt-p">' + esc(t(d.actual)) + '</p></div></div>' +
          nav(k < 3 ? t(UI.next) : t(UI.toLessons), true);
      }
    } else if (k === 4) {
      h = '<div class="bt-panel"><h2>' + esc(t(UI.lessons)) + '</h2><ul class="bt-vals">' +
        b.lessons.map(function (l) { return '<li><span class="vi" aria-hidden="true">' + l.i + '</span><div><b>' + esc(t(l.t)) + '</b><p>' + esc(t(l.d)) + '</p></div></li>'; }).join('') +
        '</ul><p class="bt-src"><b>' + esc(t(UI.sources)) + ':</b> ' + esc(t(b.sources)) + '</p></div>' + nav(t(UI.toQuiz), true);
    } else if (!S.fin) {
      var q = b.quiz[S.qi];
      h = '<div class="bt-panel"><div class="bt-kick"><b>' + esc(fill(t(UI.quiz), { k: S.qi + 1 })) + '</b></div><h2 class="bt-q">' + esc(t(q.q)) + '</h2><div class="bt-opts">' +
        q.o.map(function (o, i) {
          var cls = S.qok && i === q.a ? ' right' : S.qmiss[i] ? ' miss' : '';
          return '<button type="button" class="bt-opt' + cls + '" data-ans="' + i + '"' + (S.qok || S.qmiss[i] ? ' disabled' : '') + '><i>' + (S.qok && i === q.a ? '✓' : (lang === 'ar' ? 'أبج' : 'ABC').charAt(i)) + '</i><span>' + esc(t(o)) + '</span></button>';
        }).join('') + '</div><p class="bt-fb ' + (S.qok ? 'ok' : '') + '" role="status">' + (S.qok ? '⭐ ' + esc(t(UI.right)) : Object.keys(S.qmiss).length ? esc(t(UI.retry)) : '') + '</p></div>' +
        nav(t(UI.next), S.qok);
    } else {
      var i = B.indexOf(b), nb = B[i + 1];
      h = '<div class="bt-panel bt-fin"><div class="bt-stars" aria-hidden="true">⭐⭐⭐</div><h2>' + esc(t(UI.finT)) + '</h2><p class="bt-p">' + esc(t(window.MKJourney ? UI.finD : UI.finD0)) + '</p>' +
        '<div class="bt-nav">' + '<button type="button" class="bt-btn ghost" data-hub="1">' + esc(t(UI.all)) + '</button>' +
        (nb ? '<button type="button" class="bt-btn" data-open="' + nb.id + '">' + esc(t(UI.nextB)) + ' ' + arrow() + '</button>' : '') + '</div></div>';
    }
    document.getElementById('btBody').innerHTML = h;
    dots(); setStage();
    if (scroll) toEl(root.querySelector(S.step === 0 || S.step > 3 ? '.bt-head' : '.bt-map'));
  }

  /* bring an element just under the sticky top bar (no smooth scrolling: the map should be in view at once) */
  function toEl(m) {
    if (!m) return;
    var bar = document.getElementById('mktb'), y = m.getBoundingClientRect().top + (window.pageYOffset || 0) - (bar ? bar.offsetHeight : 0) - 8;
    y = Math.max(0, Math.round(y));
    try { window.scrollTo({ top: y, behavior: 'instant' }); } catch (e) { window.scrollTo(0, y); }
  }
  function open(id, quiet) {
    if (!byId(id)) return;
    S = { id: id, step: 0, pick: {}, qi: 0, qok: false, qmiss: {}, fin: false };
    if (!quiet) { try { history.replaceState(null, '', '#' + id); } catch (e) {} }
    lesson(); try { window.scrollTo(0, 0); } catch (e) {}
  }
  function toHub() { S.id = null; try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {} hub(); try { window.scrollTo(0, 0); } catch (e) {} }

  root.addEventListener('click', function (ev) {
    var el = ev.target.closest ? ev.target.closest('button') : null; if (!el || !root.contains(el)) return;
    var a;
    if ((a = el.getAttribute('data-open'))) return open(a);
    if (el.hasAttribute('data-hub')) return toHub();
    if ((a = el.getAttribute('data-pick')) != null) { S.pick[S.step] = +a; return panel(true); }
    if ((a = el.getAttribute('data-ans')) != null) {
      var b = byId(S.id), q = b.quiz[S.qi];
      if (+a === q.a) S.qok = true; else S.qmiss[+a] = 1;
      return panel(false);
    }
    if (el.hasAttribute('data-prev')) {
      if (S.step === 5 && S.qi > 0 && !S.fin) { S.qi--; S.qok = true; S.qmiss = {}; }
      else if (S.step > 0) { S.step--; }
      return panel(true);
    }
    if (el.hasAttribute('data-next')) {
      if (S.step < 5) { S.step++; if (S.step === 5) { S.qi = 0; S.qok = false; S.qmiss = {}; } }
      else if (S.qi < 2) { S.qi++; S.qok = false; S.qmiss = {}; }
      else { S.fin = true; markDone(S.id); }
      return panel(true);
    }
  });

  /* ── language ── */
  function applyLang() {
    var H = document.documentElement; H.lang = lang; H.dir = lang === 'ar' ? 'rtl' : 'ltr';
    [].forEach.call(document.querySelectorAll('.bt-hdr [data-lang]'), function (b) { var on = b.getAttribute('data-lang') === lang; b.classList.toggle('active', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); });
    [].forEach.call(document.querySelectorAll('.bt-hdr .lng-ar'), function (e) { e.style.display = lang === 'ar' ? '' : 'none'; });
    [].forEach.call(document.querySelectorAll('.bt-hdr .lng-en'), function (e) { e.style.display = lang === 'en' ? '' : 'none'; });
  }
  function go(l) {
    lang = l === 'en' ? 'en' : 'ar'; try { LS.setItem('bunyanLang', lang); } catch (e) {}
    applyLang(); if (S.id) lesson(); else hub();
  }
  window.setLang = go;
  [].forEach.call(document.querySelectorAll('.bt-hdr [data-lang]'), function (b) { b.addEventListener('click', function () { go(b.getAttribute('data-lang')); }); });

  applyLang();
  var h0 = (location.hash || '').replace('#', '');
  if (byId(h0)) open(h0, true); else hub();
  window.addEventListener('hashchange', function () { var h = (location.hash || '').replace('#', ''); if (byId(h)) { if (S.id !== h) open(h, true); } else if (S.id) { S.id = null; hub(); } });
})();
