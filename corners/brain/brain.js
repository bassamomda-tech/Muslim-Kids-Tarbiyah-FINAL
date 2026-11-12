/* ════════════════════════════════════════════════════════════════
   brain.js — «نادي الأذكياء» (Brain Club) shared shell.
   • Brain.hub()      draws the hub (index.html): one card per game + today's stars.
   • Brain.game(def)  draws a game page: title bar, difficulty (remembered per game), mode,
                      "new game", "how to play" (+ read-aloud), status line, result panel.
   def = { id, levels:false?, modes:[{id,ar,en}]?, how:{ar:[3],en:[3]},
           init(B), newGame(B), restore(B,state)?, relang(B)? }
   B   = { stage, extra, level, mode, T(ar,en), N(n), status(html), win(opt), lose(msg), draw(msg),
           save(state), clear(), beep(kind), calm(), api }
   Stars: MKJourney.earn('brain', id, stars, {daily:true}) + a one-time «first win» bonus.
   Keys (ordinary child keys, kept per child by mk-system.js): brain_cfg, brain_today, brain_st_<id>.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.Brain) return;
  var LS = window.localStorage;
  var lang = 'ar';
  try { lang = LS.getItem('bunyanLang') === 'en' ? 'en' : 'ar'; } catch (e) {}
  function T(a, e) { return lang === 'en' ? e : a; }
  function arNum(n) { return String(n).replace(/\d/g, function (c) { return '٠١٢٣٤٥٦٧٨٩'[c]; }); }
  function N(n) { return lang === 'ar' ? arNum(n) : String(n); }
  function jget(k, d) { try { var v = JSON.parse(LS.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
  function jset(k, v) { try { LS.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function dayKey() { return window.MKJourney ? MKJourney.dayKey() : new Date().toISOString().slice(0, 10); }
  function calm() {
    var c = document.documentElement.classList;
    if (c.contains('calm') || c.contains('a11y-focus')) return true;
    try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; }
  }

  /* ── the games (hub order) ── */
  var GAMES = [
    { id: 'xo', icon: '⭕', c: '#2E6DA4', ar: 'إكس أو', en: 'Tic-tac-toe', skAr: 'الانتباه والتخطيط', skEn: 'Attention and planning' },
    { id: 'four', icon: '🟡', c: '#B5562A', ar: 'أربعة في صفّ', en: 'Four in a Row', skAr: 'التفكير قبل اللعب', skEn: 'Thinking ahead' },
    { id: 'chess', icon: '♟️', c: '#6C4AB6', ar: 'الشطرنج', en: 'Chess', skAr: 'التخطيط والصبر', skEn: 'Strategy and patience' },
    { id: 'checkers', icon: '🔴', c: '#8A3B3B', ar: 'الداما', en: 'Checkers', skAr: 'الحساب والتخطيط', skEn: 'Counting moves and planning' },
    { id: 'blocks', icon: '🧱', c: '#C0762A', ar: 'البنّاء الصغير', en: 'Little Builder', skAr: 'التخيّل والبناء', skEn: 'Imagination and building' },
    { id: 'tangram', icon: '🔷', c: '#1F7A6B', ar: 'لغز الأشكال', en: 'Tangram', skAr: 'الأشكال الهندسيّة', skEn: 'Shapes and geometry' },
    { id: 'slide', icon: '🔢', c: '#2E8B57', ar: 'لغز الترتيب', en: 'Sliding Puzzle', skAr: 'الترتيب وحلّ المشكلات', skEn: 'Ordering and problem solving' },
    { id: 'memory-seq', icon: '🎨', c: '#A8456E', ar: 'تذكَّر التتابع', en: 'Remember the Sequence', skAr: 'الذاكرة والتركيز', skEn: 'Memory and focus' },
    { id: 'maze', icon: '🧭', c: '#3D6FB3', ar: 'المتاهة', en: 'The Maze', skAr: 'إيجاد الطريق', skEn: 'Finding the way' },
    { id: 'hanoi', icon: '🗼', c: '#7A5A1E', ar: 'برج الأقراص', en: 'Tower of Discs', skAr: 'التفكير خطوةً خطوة', skEn: 'Step-by-step logic' }
  ];
  function meta(id) { for (var i = 0; i < GAMES.length; i++) if (GAMES[i].id === id) return GAMES[i]; return null; }

  function starsText(n) {
    if (lang === 'en') return n + (n === 1 ? ' star' : ' stars');
    if (n === 1) return 'نجمةً واحدة';
    if (n === 2) return 'نجمتَين';
    return arNum(n) + (n <= 10 ? ' نجوم' : ' نجمة');
  }
  function todayMap() { var t = jget('brain_today', null); return t && t.d === dayKey() ? (t.g || {}) : {}; }
  function addToday(id, n) { var g = todayMap(); g[id] = (g[id] || 0) + n; jset('brain_today', { d: dayKey(), g: g }); }

  /* ── sound: tiny WebAudio beeps, silent when the child turned game sounds off ── */
  var AC = null;
  function sfxOn() { var o = jget('mk:a11y', null); return !(o && o.sfx === 'off'); }
  var TONES = { tap: [[520, .07]], move: [[440, .06]], good: [[660, .09], [880, .12]], bad: [[220, .16]], win: [[523, .11], [659, .11], [784, .11], [1047, .2]], p0: [[330, .28]], p1: [[415, .28]], p2: [[494, .28]], p3: [[622, .28]] };
  function beep(kind) {
    if (!sfxOn()) return false;
    try {
      var C = window.AudioContext || window.webkitAudioContext; if (!C) return false;
      AC = AC || new C(); if (AC.state === 'suspended' && AC.resume) AC.resume();
      var t = AC.currentTime;
      (TONES[kind] || TONES.tap).forEach(function (n) {
        var o = AC.createOscillator(), g = AC.createGain();
        o.type = 'sine'; o.frequency.value = n[0];
        g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.11, t + 0.015); g.gain.exponentialRampToValueAtTime(0.0001, t + n[1]);
        o.connect(g); g.connect(AC.destination); o.start(t); o.stop(t + n[1] + 0.03); t += n[1];
      });
      return true;
    } catch (e) { return false; }
  }
  function speak(text) {
    function fallback() { try { var u = new SpeechSynthesisUtterance(text); u.lang = lang === 'ar' ? 'ar' : 'en'; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch (e) {} }
    try {
      if (window.MKTTS && MKTTS.speak) { var p = MKTTS.speak(text, lang); if (p && p.catch) p.catch(fallback); }
      else fallback();
    } catch (e) { fallback(); }
  }

  function langButtons(onChange) {
    function mark() {
      document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.querySelectorAll('.lang button').forEach(function (b) { b.classList.toggle('active', b.dataset.lang === lang); });
    }
    function set(l) { lang = l === 'en' ? 'en' : 'ar'; try { LS.setItem('bunyanLang', lang); } catch (e) {} mark(); onChange(); }
    document.querySelectorAll('.lang button').forEach(function (b) { b.onclick = function () { set(b.dataset.lang); }; });
    window.setLang = set;
    mark();
  }
  function root() { var r = $('brain-app'); if (!r) { r = document.createElement('div'); r.id = 'brain-app'; document.body.insertBefore(r, document.body.firstChild); } return r; }
  /* the page header is a direct child of <body> with class "header", so mk-topbar.js can fold it into the site's top bar */
  function head() {
    var h = document.querySelector('body > div.header');
    if (!h) { h = document.createElement('div'); h.className = 'header bh'; document.body.insertBefore(h, document.body.firstChild); }
    h.innerHTML = '<a class="back-btn" id="bBack"></a><div class="lang"><button data-lang="en">EN</button><button data-lang="ar">عربي</button></div>';
    return '';
  }

  /* ════════ the hub ════════ */
  function hub() {
    root().innerHTML = head() + '<main class="bw hub"><h1 id="bTitle"></h1><p class="blead" id="bLead"></p><div class="btotal" id="bTotal"></div><div class="bgrid" id="bGrid"></div></main>';
    $('bBack').href = '../activities/play.html';
    function draw() {
      $('bBack').innerHTML = '↩️ ' + T('كوكب الإبداع', 'Creativity Planet');
      $('bTitle').textContent = T('🧠 نادي الأذكياء', '🧠 Brain Club');
      $('bLead').textContent = T('ألعابٌ تُقوّي عقلك: فكِّر، وخطِّط، وجرِّب. العقلُ نعمةٌ من الله، فلنشكره بحُسن استعمالها.', 'Games that make your mind stronger: think, plan and try. The mind is a gift from Allah — we thank Him by using it well.');
      var g = todayMap(), sum = 0;
      $('bGrid').innerHTML = GAMES.map(function (m) {
        var n = g[m.id] || 0; sum += n;
        return '<a class="bcard" href="' + m.id + '.html" data-game="' + m.id + '"><span class="ic" style="--c:' + m.c + '">' + m.icon + '</span><b>' + esc(T(m.ar, m.en)) + '</b>' +
          '<span class="sk">' + esc(T(m.skAr, m.skEn)) + '</span>' +
          '<span class="sd' + (n ? '' : ' none') + '">' + (n ? '⭐ ' + T('اليوم: ', 'Today: ') + starsText(n) : T('☆ لم تلعبها اليوم', '☆ Not played today')) + '</span></a>';
      }).join('');
      $('bTotal').textContent = sum ? '⭐ ' + T('نجومُ اليوم في النادي: ', 'Today\'s club stars: ') + N(sum) : T('✨ اختر لعبةً وابدأ!', '✨ Pick a game and start!');
    }
    langButtons(draw); draw();
  }

  /* ════════ a game page ════════ */
  var LEVELS = [['easy', 'سهل', 'Easy'], ['medium', 'متوسّط', 'Medium'], ['hard', 'صعب', 'Hard']];
  function game(def) {
    var m = meta(def.id) || { ar: def.id, en: def.id, icon: '🎲' };
    var cfgAll = jget('brain_cfg', {}) || {}, cfg = cfgAll[def.id] || {};
    var hasLevels = def.levels !== false;
    var B = {
      id: def.id, T: T, N: N, esc: esc, calm: calm, beep: beep, starsText: starsText, lang: function () { return lang; },
      level: hasLevels && /^(easy|medium|hard)$/.test(cfg.l) ? cfg.l : 'easy',
      mode: def.modes ? (def.modes.some(function (x) { return x.id === cfg.m; }) ? cfg.m : def.modes[0].id) : null,
      api: null, over: false
    };
    root().innerHTML = head() + '<main class="bw"><h1 id="bTitle"></h1>' +
      '<div class="bbar"><div class="seg" id="bLevels" role="group"></div><div class="seg" id="bModes" role="group"></div></div>' +
      '<div class="bbar"><button class="bbtn gold" id="bNew" type="button"></button><button class="bbtn" id="bHow" type="button" aria-expanded="false"></button></div>' +
      '<section class="bhow" id="bHowBox" hidden></section>' +
      '<p class="bstatus" id="bStatus" aria-live="polite"></p><div class="bstage" id="bStage"></div><div class="bextra" id="bExtra"></div></main>' +
      '<div class="bres" id="bRes" hidden role="dialog" aria-modal="true"><div class="bconf" id="bConf"></div><div class="c" id="bResC"></div></div>';
    $('bBack').href = 'index.html';
    B.stage = $('bStage'); B.extra = $('bExtra');
    function saveCfg() { cfgAll = jget('brain_cfg', {}) || {}; cfgAll[def.id] = { l: B.level, m: B.mode }; jset('brain_cfg', cfgAll); }
    B.status = function (html) { $('bStatus').innerHTML = html || ''; };
    B.save = function (st) { jset('brain_st_' + def.id, { l: B.level, m: B.mode, s: st }); };
    B.clear = function () { try { LS.removeItem('brain_st_' + def.id); } catch (e) {} };
    B.store = function (k, v) { if (arguments.length > 1) jset('brain_' + def.id + '_' + k, v); return jget('brain_' + def.id + '_' + k, null); };

    function shell() {
      $('bBack').innerHTML = '↩️ ' + T('نادي الأذكياء', 'Brain Club');
      $('bTitle').textContent = m.icon + ' ' + T(m.ar, m.en);
      $('bLevels').innerHTML = hasLevels ? LEVELS.map(function (l) { return '<button type="button" data-l="' + l[0] + '" class="' + (B.level === l[0] ? 'on' : '') + '" aria-pressed="' + (B.level === l[0]) + '">' + T(l[1], l[2]) + '</button>'; }).join('') : '';
      $('bModes').innerHTML = def.modes ? def.modes.map(function (x) { return '<button type="button" data-m="' + x.id + '" class="' + (B.mode === x.id ? 'on' : '') + '" aria-pressed="' + (B.mode === x.id) + '">' + esc(T(x.ar, x.en)) + '</button>'; }).join('') : '';
      $('bNew').textContent = T('🔄 لعبة جديدة', '🔄 New game');
      $('bHow').textContent = T('❓ كيف ألعب؟', '❓ How to play');
      var lines = (def.how && def.how[lang]) || [];
      $('bHowBox').innerHTML = '<ol>' + lines.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ol><button class="bbtn" id="bRead" type="button">' + T('🔊 اقرأ لي', '🔊 Read to me') + '</button>';
      $('bRead').onclick = function () { speak(lines.join(' ')); };
      $('bLevels').querySelectorAll('button').forEach(function (b) { b.onclick = function () { if (B.level === b.dataset.l) return; B.level = b.dataset.l; saveCfg(); shell(); fresh(); }; });
      $('bModes').querySelectorAll('button').forEach(function (b) { b.onclick = function () { if (B.mode === b.dataset.m) return; B.mode = b.dataset.m; saveCfg(); shell(); fresh(); }; });
    }
    function fresh() { hideRes(); B.over = false; B.clear(); def.newGame(B); }
    B.fresh = fresh;
    $('bNew').onclick = function () { beep('tap'); fresh(); };
    $('bHow').onclick = function () { var bx = $('bHowBox'); bx.hidden = !bx.hidden; this.setAttribute('aria-expanded', String(!bx.hidden)); };

    /* result panel */
    function hideRes() { $('bRes').hidden = true; $('bConf').innerHTML = ''; }
    function showRes(em, title, lines, kind) {
      $('bResC').innerHTML = '<div class="em">' + em + '</div><h2>' + esc(title) + '</h2>' + lines.map(function (l) { return l ? '<p' + (l.cls ? ' class="' + l.cls + '"' : '') + '>' + esc(l.t || l) + '</p>' : ''; }).join('') +
        '<div class="row"><button class="bbtn gold" id="bAgain" type="button">' + (kind === 'win' ? T('🔄 لعبة جديدة', '🔄 New game') : T('🔄 حاول مرّةً أخرى', '🔄 Try again')) + '</button>' +
        (def.afterWin && kind === 'win' ? '<button class="bbtn" id="bNext" type="button">' + esc(def.afterWin.label(B)) + '</button>' : '') +
        '<button class="bbtn" id="bSee" type="button">' + T('👀 أرى اللوحة', '👀 See the board') + '</button>' +
        '<a class="bbtn" href="index.html">' + T('🧠 النادي', '🧠 The club') + '</a></div>';
      $('bRes').hidden = false;
      $('bRes').dataset.kind = kind;
      $('bAgain').onclick = fresh; $('bSee').onclick = hideRes;
      if ($('bNext')) $('bNext').onclick = function () { hideRes(); B.over = false; def.afterWin.go(B); };
      try { $('bAgain').focus(); } catch (e) {}
      if (kind === 'win' && !calm()) {
        var cols = ['#F5CC5A', '#3BB36D', '#37B8C4', '#E5674F', '#fff'], h = '';
        for (var i = 0; i < 26; i++) h += '<i style="left:' + Math.round(Math.random() * 96 + 2) + '%;background:' + cols[i % 5] + ';animation-delay:' + (Math.random() * .5).toFixed(2) + 's"></i>';
        $('bConf').innerHTML = h;
        setTimeout(function () { $('bConf').innerHTML = ''; }, 3200);
      }
    }
    /* opt: { stars?, msg?, title? } — stars default 1/2/3 by level */
    B.win = function (opt) {
      opt = opt || {}; B.over = true; if (!opt.keep) B.clear();
      var stars = opt.stars != null ? opt.stars : ({ easy: 1, medium: 2, hard: 3 }[B.level] || 1), got = 0, first = 0;
      if (window.MKJourney && MKJourney.earn) {
        got = MKJourney.earn('brain', def.id, stars, { daily: true });
        first = MKJourney.earn('brain', def.id + ':first', 3);
      }
      if (got + first) addToday(def.id, got + first);
      B.lastAward = { got: got, first: first };
      beep('win');
      showRes('🌟', opt.title || T('أحسنت! ما شاء الله', 'Well done! Masha\'Allah'), [
        opt.msg || T('لقد فزت!', 'You won!'),
        got ? { cls: 'st', t: '⭐ ' + T('ربحتَ ' + starsText(got) + '!', 'You earned ' + starsText(got) + '!') } : { t: T('أخذتَ نجومَ هذه اللعبة اليوم — عُد غدًا لتربح نجومًا جديدة.', 'You already earned this game\'s stars today — come back tomorrow for new ones.') },
        first ? { cls: 'st', t: '🎁 ' + T('وثلاثُ نجومٍ هديّةً لأوّل فوزٍ لك!', 'Plus 3 bonus stars for your very first win!') } : null
      ], 'win');
    };
    B.lose = function (msg) {
      B.over = true; B.clear(); beep('bad');
      showRes('🙂', T('لا بأس!', 'That\'s okay!'), [msg || T('فاز الحاسوب هذه المرّة.', 'The computer won this time.'), T('كلُّ محاولةٍ تجعلك أذكى. حاول مرّةً أخرى 🙂', 'Every try makes you smarter. Try again 🙂')], 'lose');
    };
    B.draw = function (msg) {
      B.over = true; B.clear(); beep('good');
      showRes('🤝', T('تعادل!', 'It\'s a draw!'), [msg || T('لعبةٌ جميلة — لم يغلب أحدٌ أحدًا.', 'A lovely game — nobody beat anybody.'), T('حاول مرّةً أخرى 🙂', 'Try again 🙂')], 'draw');
    };

    langButtons(function () { shell(); if (def.relang) def.relang(B); });
    shell();
    def.init(B);
    var saved = jget('brain_st_' + def.id, null), ok = false;
    if (saved && def.restore && saved.l === B.level && saved.m === B.mode) { try { ok = def.restore(B, saved.s) !== false; } catch (e) { ok = false; } }
    if (!ok) { B.clear(); def.newGame(B); }
    window.BrainGame = B;
    return B;
  }

  function css(t) { var s = document.createElement('style'); s.textContent = t; document.head.appendChild(s); }
  window.Brain = { css: css, GAMES: GAMES, hub: hub, game: game, T: T, N: N, beep: beep, sfxOn: sfxOn, speak: speak, calm: calm, starsText: starsText, todayMap: todayMap };
})();
