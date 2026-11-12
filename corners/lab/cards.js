/* cards.js — «بطاقات الاكتشاف» / Discovery Cards (data: cards-data.js → window.LAB_CARDS).
   Hub of categories → a category has three tabs: browse the cards · «ما هذا؟» · «أين الكلمة؟».
   Seen cards: localStorage `lab_cards_seen` = {catId:[cardIds]}.
   Stars: finishing a game → MKJourney.earn('cards', '<catId>:what|where', 2, {daily:true}).
   No network calls, no audio. */
(function () {
  'use strict';
  var DATA = (window.LAB_CARDS && window.LAB_CARDS.cats) || [];
  var KEY = 'lab_cards_seen', ROUNDS = 6, STARS = 2;
  var host = document.getElementById('lab'), lang = 'ar';
  try { lang = localStorage.getItem('bunyanLang') === 'en' ? 'en' : 'ar'; } catch (e) {}
  /* st.view: 'hub' | 'cat';  st.tab: 'browse' | 'what' | 'where' */
  var st = { view: 'hub', cat: null, tab: 'browse', i: 0, flip: false, g: null }, timer = 0;

  function T(o) { return lang === 'en' ? o.en : o.ar; }
  function N(n) { var s = String(n); return lang === 'ar' ? s.replace(/\d/g, function (c) { return '٠١٢٣٤٥٦٧٨٩'[c]; }) : s; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function name(c) { return lang === 'en' ? c.en : c.ar; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function catById(id) { for (var i = 0; i < DATA.length; i++) if (DATA[i].id === id) return DATA[i]; return null; }

  /* ── seen cards ── */
  function seenAll() { try { var o = JSON.parse(localStorage.getItem(KEY) || '{}'); return o && typeof o === 'object' && !Array.isArray(o) ? o : {}; } catch (e) { return {}; } }
  function seenOf(cat) {
    var a = seenAll()[cat.id]; if (!Array.isArray(a)) return [];
    return a.filter(function (id) { return cat.cards.some(function (c) { return c.id === id; }); });
  }
  function markSeen(cat, card) {
    var o = seenAll(), a = Array.isArray(o[cat.id]) ? o[cat.id] : [];
    if (a.indexOf(card.id) >= 0) return;
    a.push(card.id); o[cat.id] = a;
    try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {}
  }

  /* ── language ── */
  function applyLang() {
    document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('.lng-ar').forEach(function (e) { e.style.display = lang === 'ar' ? '' : 'none'; });
    document.querySelectorAll('.lng-en').forEach(function (e) { e.style.display = lang === 'en' ? '' : 'none'; });
    document.querySelectorAll('.lang button').forEach(function (b) { b.classList.toggle('active', b.dataset.lang === lang); });
    document.title = lang === 'en' ? 'Discovery Cards | Discovery Lab' : 'بطاقات الاكتشاف | مختبر الاكتشاف';
  }
  function setLang(l) {
    lang = l === 'en' ? 'en' : 'ar';
    try { localStorage.setItem('bunyanLang', lang); } catch (e) {}
    applyLang(); render();
  }
  window.setLang = setLang;
  document.querySelectorAll('.lang button').forEach(function (b) { b.onclick = function () { setLang(b.dataset.lang); }; });

  /* ── hub ── */
  function hubHtml() {
    var seenN = 0, total = 0, grid = '';
    DATA.forEach(function (cat) {
      var s = seenOf(cat).length, n = cat.cards.length; seenN += s; total += n;
      grid += '<button type="button" class="dc-cat" data-cat="' + cat.id + '" style="--c:' + cat.color + '">' +
        '<span class="ic" aria-hidden="true">' + cat.e + '</span>' +
        '<b>' + esc(T(cat.t)) + '</b>' +
        '<span class="pg"><i style="width:' + Math.round(s / n * 100) + '%"></i></span>' +
        '<small>' + N(s) + ' / ' + N(n) + (s >= n ? ' ✅' : '') + '</small></button>';
    });
    return '<div class="hub-hero"><h1>🗂️ ' + T({ ar: 'بِطاقاتُ الاكْتِشاف', en: 'Discovery Cards' }) + '</h1>' +
      '<p>' + T({ ar: 'نَتَعَرَّفُ عَلى الأَشْياءِ مِنْ حَوْلِنا: اسْمُها بِالعَرَبِيَّةِ وَالإِنْجِليزِيَّة، وَمَعْلومَةٌ عَنْها، ثُمَّ نَلْعَب.', en: 'Let\'s get to know the things around us: their names in Arabic and English, a fact about each, and then a game.' }) + '</p>' +
      '<div class="hub-total">✨ ' + T({ ar: 'بِطاقاتٌ شاهَدْناها:', en: 'Cards seen:' }) + ' ' + N(seenN) + ' / ' + N(total) + '</div></div>' +
      '<div class="dc-cats">' + grid + '</div>';
  }

  /* ── category frame ── */
  function catHtml(cat) {
    function tab(id, ic, t) { return '<button type="button" role="tab" data-tab="' + id + '" aria-selected="' + (st.tab === id) + '">' + ic + ' ' + t + '</button>'; }
    return '<div class="lab-head"><button type="button" class="dc-back" data-go="hub" aria-label="' + T({ ar: 'كُلُّ البِطاقات', en: 'All cards' }) + '">' + (lang === 'ar' ? '→' : '←') + '</button>' +
      '<div class="ic" aria-hidden="true">' + cat.e + '</div><div class="tx"><h1>' + esc(T(cat.t)) + '</h1></div></div>' +
      '<div class="lab-tabs" role="tablist">' +
      tab('browse', '🗂️', T({ ar: 'البِطاقات', en: 'Cards' })) +
      tab('what', '❓', T({ ar: 'ما هٰذا؟', en: 'What is it?' })) +
      tab('where', '🔎', T({ ar: 'أَيْنَ الكَلِمَة؟', en: 'Find it' })) + '</div>' +
      '<div id="dcBody">' + (st.tab === 'browse' ? browseHtml(cat) : gameHtml(cat)) + '</div>';
  }

  /* ── browse ── */
  function browseHtml(cat) {
    var c = cat.cards[st.i], seen = seenOf(cat), other = lang === 'en' ? c.ar : c.en, olang = lang === 'en' ? 'ar' : 'en';
    var badge = c.q ? '<span class="dc-q">📖 ' + T({ ar: 'ذُكِرَ في القُرْآن', en: 'Mentioned in the Quran' }) + '</span>' : '';
    var face = st.flip
      ? '<span class="em sm" aria-hidden="true">' + c.e + '</span><span class="nm sm">' + esc(name(c)) + '</span>' +
        '<span class="ft">💡 ' + esc(T(c.f)) + '</span>' +
        (c.s ? '<span class="sd">' + T({ ar: 'صَوْتُهُ:', en: 'Its sound:' }) + ' <b>' + esc(T(c.s)) + '</b></span>' : '') + badge
      : '<span class="em" aria-hidden="true">' + c.e + '</span><span class="nm">' + esc(name(c)) + '</span>' +
        '<span class="nm2" lang="' + olang + '" dir="' + (olang === 'ar' ? 'rtl' : 'ltr') + '">' + esc(other) + '</span>' + badge;
    var thumbs = cat.cards.map(function (x, k) {
      return '<button type="button" data-jump="' + k + '" class="' + (k === st.i ? 'cur ' : '') + (seen.indexOf(x.id) >= 0 ? 'seen' : '') + '" aria-label="' + esc(name(x)) + '">' + x.e + '</button>';
    }).join('');
    return '<button type="button" class="dc-card' + (st.flip ? ' back' : '') + '" id="dcCard" data-id="' + c.id + '">' + face +
      '<span class="hint">🔄 ' + (st.flip ? T({ ar: 'نَلْمِسُ البِطاقَةَ لِنَرى الاسْم', en: 'Tap the card to see the name' }) : T({ ar: 'نَلْمِسُ البِطاقَةَ لِنَقْرَأَ المَعْلومَة', en: 'Tap the card to read the fact' })) + '</span></button>' +
      '<div class="dc-nav"><button type="button" class="btn" id="dcPrev"' + (st.i === 0 ? ' disabled' : '') + '>' + (lang === 'ar' ? '→ ' : '← ') + T({ ar: 'السّابِق', en: 'Back' }) + '</button>' +
      '<span class="cnt" id="dcCount">' + N(st.i + 1) + ' / ' + N(cat.cards.length) + '</span>' +
      '<button type="button" class="btn gold" id="dcNext"' + (st.i === cat.cards.length - 1 ? ' disabled' : '') + '>' + T({ ar: 'التّالي', en: 'Next' }) + (lang === 'ar' ? ' ←' : ' →') + '</button></div>' +
      '<div class="dc-thumbs" aria-label="' + T({ ar: 'كُلُّ البِطاقات', en: 'All cards' }) + '">' + thumbs + '</div>';
  }

  /* ── games ── */
  function newGame(cat, kind) {
    var nOpt = kind === 'what' ? 3 : 4;
    var rounds = shuffle(cat.cards).slice(0, ROUNDS).map(function (target) {
      var others = shuffle(cat.cards.filter(function (c) { return c.id !== target.id && c.e !== target.e; })).slice(0, nOpt - 1);
      return { target: target, opts: shuffle([target].concat(others)), wrong: [], done: false };
    });
    return { kind: kind, rounds: rounds, r: 0, first: 0, msg: null, fin: false, got: 0 };
  }
  function gameHtml(cat) {
    var g = st.g; if (!g) return '';
    if (g.fin) return finHtml(cat, g);
    var rd = g.rounds[g.r], what = g.kind === 'what';
    var dots = g.rounds.map(function (x, k) { return '<i class="' + (k < g.r || x.done ? 'done' : k === g.r ? 'cur' : '') + '"></i>'; }).join('');
    var opts = rd.opts.map(function (o) {
      var cls = rd.done && o.id === rd.target.id ? 'ok' : rd.wrong.indexOf(o.id) >= 0 ? 'no' : '';
      var dis = rd.done || rd.wrong.indexOf(o.id) >= 0 ? ' disabled' : '';
      return '<button type="button" data-opt="' + o.id + '" class="' + cls + '"' + dis + (what ? '' : ' aria-label="' + esc(name(o)) + '"') + '>' + (what ? esc(name(o)) : '<span aria-hidden="true">' + o.e + '</span>') + '</button>';
    }).join('');
    var msg = g.msg === 'ok' ? '<p class="st-after" id="dcMsg" role="status">✅ ' + T({ ar: 'أَحْسَنْتُمْ! هٰذا صَحيح.', en: 'Well done! That is right.' }) + ' ' + rd.target.e + ' ' + esc(name(rd.target)) + '</p>'
      : g.msg === 'no' ? '<p class="st-after no" id="dcMsg" role="status">🌱 ' + T({ ar: 'لا بَأْس، نُحاوِلُ مَرَّةً أُخْرى.', en: 'That\'s okay — let\'s try again.' }) + '</p>'
      : '<p class="st-after no" id="dcMsg" role="status" style="visibility:hidden">·</p>';
    return '<div class="lab-card dc-game" data-kind="' + g.kind + '">' +
      '<div class="st-top"><span class="st-n">' + N(g.r + 1) + ' / ' + N(g.rounds.length) + '</span><span class="st-dots">' + dots + '</span></div>' +
      '<p class="st-t">' + (what ? T({ ar: 'ما هٰذا؟ نَخْتارُ الاسْمَ الصَّحيح.', en: 'What is it? Choose the right name.' }) : T({ ar: 'أَيْنَ الكَلِمَة؟ نَخْتارُ الصّورَةَ الصَّحيحَة.', en: 'Find the word: choose the right picture.' })) + '</p>' +
      '<div class="dc-ask' + (what ? '' : ' word') + '" id="dcAsk" data-id="' + rd.target.id + '">' + (what ? '<span aria-hidden="true">' + rd.target.e + '</span>' : esc(name(rd.target))) + '</div>' +
      '<div class="' + (what ? 'opts dc-names' : 'dc-pics') + '" id="dcOpts">' + opts + '</div>' + msg + '</div>';
  }
  function finHtml(cat, g) {
    var line = g.got > 0
      ? '<p class="stars" id="dcStars" data-got="' + g.got + '">' + '⭐'.repeat(g.got) + ' ' + T({ ar: 'رَبِحْنا نَجْمَتَيْنِ لِلرِّحْلَة!', en: 'We earned 2 stars for the journey!' }) + '</p>'
      : '<p class="stars" id="dcStars" data-got="0">' + '⭐'.repeat(STARS) + ' ' + T({ ar: 'نُجومُ هٰذِهِ اللُّعْبَةِ مَحْفوظَةٌ اليَوْم. نَعودُ غَدًا لِنُجومٍ جَديدَة!', en: 'Today\'s stars for this game are already saved. Come back tomorrow for new ones!' }) + '</p>';
    return '<div class="lab-card fin" id="dcFin"><div class="big">🎉</div><h2>' + T({ ar: 'ما شاءَ الله! أَكْمَلْنا اللُّعْبَة', en: 'Masha Allah! Game complete' }) + '</h2>' + line +
      '<p class="dc-first">' + T({ ar: 'إِجاباتٌ صَحيحَةٌ مِنْ أَوَّلِ مَرَّة:', en: 'Right first time:' }) + ' ' + N(g.first) + ' / ' + N(g.rounds.length) + '</p>' +
      '<div class="st-row"><button type="button" class="btn gold wide" id="dcAgain">🔁 ' + T({ ar: 'نَلْعَبُ مَرَّةً أُخْرى', en: 'Play again' }) + '</button>' +
      '<button type="button" class="btn wide" data-go="hub">🗂️ ' + T({ ar: 'كُلُّ البِطاقات', en: 'All cards' }) + '</button></div></div>';
  }
  function answer(cat, id) {
    var g = st.g, rd = g.rounds[g.r]; if (rd.done) return;
    if (id === rd.target.id) {
      rd.done = true; g.msg = 'ok'; if (!rd.wrong.length) g.first++;
      render();
      clearTimeout(timer);
      timer = setTimeout(function () {
        if (st.g !== g) return;
        g.msg = null;
        if (g.r < g.rounds.length - 1) g.r++;
        else {
          g.fin = true; g.got = 0;
          try { if (window.MKJourney && MKJourney.earn) g.got = MKJourney.earn('cards', cat.id + ':' + g.kind, STARS, { daily: true }) || 0; } catch (e) {}
        }
        render();
      }, 1100);
    } else {
      if (rd.wrong.indexOf(id) < 0) rd.wrong.push(id);
      g.msg = 'no'; render();
    }
  }

  /* ── render + events ── */
  function render() {
    var cat = st.view === 'cat' ? catById(st.cat) : null;
    if (!cat) { st.view = 'hub'; host.innerHTML = hubHtml(); return; }
    if (st.tab === 'browse') markSeen(cat, cat.cards[st.i]);
    host.innerHTML = catHtml(cat);
  }
  function openTab(tab) {
    clearTimeout(timer);
    st.tab = tab; st.flip = false;
    st.g = tab === 'browse' ? null : newGame(catById(st.cat), tab);
    render();
  }
  host.addEventListener('click', function (ev) {
    var t = ev.target.closest('button'); if (!t || t.disabled) return;
    var cat = catById(st.cat);
    if (t.dataset.cat) { st.view = 'cat'; st.cat = t.dataset.cat; st.i = 0; openTab('browse'); window.scrollTo(0, 0); return; }
    if (t.dataset.go === 'hub') { clearTimeout(timer); st.view = 'hub'; st.g = null; render(); window.scrollTo(0, 0); return; }
    if (t.dataset.tab) { openTab(t.dataset.tab); return; }
    if (!cat) return;
    if (t.id === 'dcCard') { st.flip = !st.flip; render(); focusId('dcCard'); return; }
    if (t.id === 'dcPrev') { if (st.i > 0) { st.i--; st.flip = false; render(); focusId(st.i === 0 ? 'dcNext' : 'dcPrev'); } return; }
    if (t.id === 'dcNext') { if (st.i < cat.cards.length - 1) { st.i++; st.flip = false; render(); focusId(st.i === cat.cards.length - 1 ? 'dcPrev' : 'dcNext'); } return; }
    if (t.dataset.jump != null) { st.i = +t.dataset.jump; st.flip = false; render(); return; }
    if (t.dataset.opt && st.g) { answer(cat, t.dataset.opt); return; }
    if (t.id === 'dcAgain') { openTab(st.tab); return; }
  });
  function focusId(id) { var e = document.getElementById(id); if (e) { try { e.focus({ preventScroll: true }); } catch (x) {} } }

  applyLang(); render();
})();
