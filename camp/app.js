/* معسكر القادة — الواجهة */
(function () {
  'use strict';
  var C = window.CAMP, S = C.S, app = document.getElementById('app');
  var lang = localStorage.getItem('camp-lang') === 'en' ? 1 : 0;
  var view = {};                       // حالة مؤقتة للواجهة (تبويب الإذاعة، اليوم المختار…)
  var V = C.views = {};                // شاشات الأقسام: V[name](kid) → HTML

  /* ── أدوات اللغة والنص ── */
  function L(p) { return p ? (Array.isArray(p) ? (p[lang] != null ? p[lang] : p[0]) : p) : ''; }
  function T(k) { return L(C.I18N[k]); }
  var AR = '٠١٢٣٤٥٦٧٨٩';
  function N(n) { n = String(n); return lang ? n : n.replace(/\d/g, function (d) { return AR[d]; }); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function toast(m) { var t = document.getElementById('toast'); t.textContent = m; t.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(function () { t.classList.remove('on'); }, 2200); }
  function hm(d) { return N(String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0')); }
  function setLang() { document.documentElement.lang = lang ? 'en' : 'ar'; document.documentElement.dir = lang ? 'ltr' : 'rtl'; document.title = T('appName'); }
  /* أسماء الأبناء بدل «الكبير/الأوسط/الصغير» في نصوص الخطة */
  function nm(text) {
    if (lang) return text;
    var by = {}; C.kids().forEach(function (k) { if (!by[k.tier]) by[k.tier] = k.name; });
    var map = { 'الكبير': by.big, 'الأوسط': by.mid, 'الصغير': by.small };
    // لا نستبدل أسماء الأركان والعبارات الثابتة مثل «حيّنا الصغير» و«القائد الصغير»
    return String(text).replace(/(حيّنا |القائد |البرلمان |المؤذن |الحكواتي )?(الكبير|الأوسط|الصغير)(?![\u0621-\u064A])/g, function (all, pre, w) { return pre || !map[w] ? all : map[w]; });
  }

  /* ── الجلسة: القائد الحالي، وقفل الوالدين ── */
  function curKid() { var id = localStorage.getItem('camp-kid'); return C.kid(id); }
  function parentOpen() { return Date.now() - (+sessionStorage.getItem('camp-parent') || 0) < 15 * 60e3; }
  function askPin(ok) {
    if (parentOpen()) return ok();
    var fam = S.state.family || {};
    var m = document.createElement('div'); m.className = 'full'; m.style.cssText = 'position:fixed;inset:0;z-index:60';
    m.innerHTML = '<div class="panel" style="max-width:22rem;text-align:center"><h2 style="justify-content:center">🔒 ' + T('pinEnter') + '</h2><input type="password" inputmode="numeric" maxlength="8" autocomplete="off" id="pinv" style="text-align:center;font-size:1.5rem;letter-spacing:.4em"><p class="muted" id="pine" style="min-height:1.6em;color:var(--red)"></p><div class="row" style="justify-content:center"><button class="btn" id="pinok">' + T('open') + '</button><button class="btn ghost" id="pinno">' + T('cancel') + '</button></div></div>';
    document.body.appendChild(m);
    var inp = m.querySelector('#pinv'); inp.focus();
    function go() { if (C.pinHash(inp.value) === fam.pin) { sessionStorage.setItem('camp-parent', Date.now()); m.remove(); ok(); } else { m.querySelector('#pine').textContent = T('pinWrong'); inp.value = ''; inp.focus(); } }
    m.querySelector('#pinok').onclick = go; m.querySelector('#pinno').onclick = function () { m.remove(); };
    inp.onkeydown = function (e) { if (e.key === 'Enter') go(); };
  }

  /* ── مواقيت الصلاة ── */
  function times(date) {
    var f = S.state.family || {}, c = f.city;
    if (!c || c.lat == null) return null;
    return C.prayerTimes(date || new Date(), +c.lat, +c.lng, { method: f.method || 'MWL', hanafi: !!f.hanafi, offsets: f.offsets || {} });
  }
  function nextPrayer() {
    var t = times(); if (!t) return null;
    var now = new Date(), order = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
    for (var i = 0; i < order.length; i++) if (t[order[i]] > now) return { k: order[i], at: t[order[i]], t: t };
    var tm = new Date(); tm.setDate(tm.getDate() + 1); var t2 = times(tm);
    return { k: 'fajr', at: t2.fajr, t: t };
  }
  function countdown(at) { var m = Math.max(0, Math.round((at - new Date()) / 60e3)), h = Math.floor(m / 60); return (h ? N(h) + ' ' + T('hours') + ' ' : '') + N(m % 60) + ' ' + T('minutes'); }
  function prayStrip() {
    var np = nextPrayer(); if (!np) return '<p class="muted">' + T('city') + ' — ' + T('settings') + '</p>';
    return '<div class="pray">' + ['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'].map(function (k) {
      return '<div class="' + (k === np.k && np.at === np.t[k] ? 'next' : '') + '">' + L(C.I18N.prayers[k]) + '<b>' + hm(np.t[k]) + '</b></div>';
    }).join('') + '</div>';
  }
  function hijri() { try { return new Intl.DateTimeFormat((lang ? 'en' : 'ar') + '-u-ca-islamic-umalqura', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date()).replace(/\d+/g, N); } catch (e) { return ''; } }
  function greg() { return new Intl.DateTimeFormat(lang ? 'en-GB' : 'ar-EG', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date()).replace(/\d+/g, N); }

  /* ── الهيكل ── */
  var NAV = [['home', '⛺'], ['missions', '🎯'], ['plan', '🗓️'], ['goals', '🏅'], ['rewards', '💰'], ['radio', '📻'], ['library', '📚'], ['shura', '🏛️'], ['banner', '🚩']];
  function shell(route, kid, body) {
    var links = NAV.map(function (n) { return '<a href="#/' + n[0] + '" class="' + (route === n[0] ? 'on' : '') + '"><b>' + n[1] + '</b><span>' + T(n[0]) + '</span></a>'; }).join('');
    var st = C.stats(kid.id), syncIc = S.sync === 'on' ? '☁️' : S.sync === 'error' ? '⚠️' : '📱';
    return '<div class="shell"><aside class="side"><div class="brand"><i>⛺</i>' + T('appName') + '</div><nav class="nav">' + links + '</nav>' +
      '<div class="foot"><button class="mini" data-act="who"><span style="font-size:1.4rem">' + esc(kid.avatar) + '</span><span>' + esc(kid.name) + ' · ' + N(st.balance) + ' ⭐</span></button>' +
      '<button class="mini" data-act="parent">🔒 ' + T('parent') + ' ' + syncIc + '</button><button class="mini" data-act="lang">🌐 ' + T('lang') + '</button></div></aside>' +
      '<div><div class="topbar"><span>⛺ ' + esc(kid.avatar) + ' ' + esc(kid.name) + '</span><span class="sp"><button data-act="who">⇄</button><button data-act="lang">🌐</button><button data-act="parent">🔒 ' + syncIc + '</button></span></div>' +
      '<main class="main">' + body + '</main></div><nav class="tabbar">' + links + '</nav></div>';
  }

  /* ── من القائد اليوم؟ ── */
  function whoView() {
    var kids = C.kids(), f = S.state.family || {};
    return '<div class="full"><div style="font-size:3.5rem">⛺</div><h1>' + esc(f.name || T('appName')) + '</h1><p class="sub">' + esc(f.motto || T('tagline')) + '</p><h2 style="color:#fff">' + T('who') + '</h2><div class="whos">' +
      kids.map(function (k) { var r = C.rankOf(C.stats(k.id).life); return '<button class="whoc" data-act="pick" data-id="' + k.id + '"><div class="av">' + esc(k.avatar) + '</div>' + esc(k.name) + '<small>' + r.rank.icon + ' ' + L(r.rank.n) + '</small></button>'; }).join('') +
      '</div><div class="row" style="justify-content:center"><button class="btn gold" data-act="parent">🔒 ' + T('parent') + '</button><a class="btn ghost" href="#/tv">📺 ' + T('tv') + '</a><button class="btn ghost" data-act="lang">🌐 ' + T('lang') + '</button></div></div>';
  }

  /* ── الإعداد الأول ── */
  function setupView() {
    var rows = [[9, '🦁'], [5, '🐯'], [2, '🐣']].map(function (r, i) {
      return '<div class="form" style="grid-template-columns:2fr 1fr"><label>' + T('name') + ' ' + N(i + 1) + '<input type="text" data-k="name' + i + '" maxlength="20"></label><label>' + T('age') + '<input type="number" data-k="age' + i + '" value="' + r[0] + '" min="1" max="17"></label></div>';
    }).join('');
    var cities = C.CITIES.map(function (c, i) { return '<option value="' + i + '">' + c[0] + '</option>'; }).join('');
    return '<div class="full"><div style="font-size:3.5rem">⛺</div><h1>' + T('welcome') + '</h1><p class="sub">' + T('setup1') + '</p><div class="panel"><div class="grid">' +
      '<label>' + T('familyName') + '<input type="text" data-k="fname" maxlength="30"></label>' + rows +
      '<div class="form"><label>' + T('pinSet') + '<input type="password" inputmode="numeric" data-k="pin" maxlength="8" autocomplete="new-password"></label><label>' + T('city') + '<select data-k="city">' + cities + '</select></label></div>' +
      '<div class="row"><button class="btn" data-act="setup">' + T('start') + ' ⛺</button><button class="btn ghost" data-act="lang">🌐 ' + T('lang') + '</button></div>' +
      (S.canSync() ? '<hr style="border:none;border-top:1px dashed var(--line)"><p class="muted">' + (lang ? 'Already have a camp on another device? Sign in to load it:' : 'عندكم معسكر على جهاز آخر؟ سجّلوا الدخول لتحميله:') + '</p>' + authForm() : '') +
      '</div></div></div>';
  }
  function authForm() {
    if (S.user) return '<p><span class="pill g">☁️ ' + T('syncOn') + '</span> ' + esc(S.user.email || '') + ' <button class="btn sm ghost" data-act="signout">' + T('signOut') + '</button></p>';
    return '<div class="form"><label>' + T('email') + '<input type="email" data-k="em" autocomplete="username"></label><label>' + T('pass') + '<input type="password" data-k="pw" autocomplete="current-password"></label></div><div class="row" style="margin-top:.6rem"><button class="btn sm" data-act="signin">' + T('signIn') + '</button><button class="btn sm ghost" data-act="signup">' + T('signUp') + '</button></div>';
  }
  function val(k) { var e = app.querySelector('[data-k="' + k + '"]'); return e ? e.value.trim() : ''; }
  function tierOf(age) { return age >= 8 ? 'big' : age >= 4 ? 'mid' : 'small'; }

  /* ── المقرّ ── */
  V.home = function (kid) {
    var st = C.stats(kid.id), r = C.rankOf(st.life), np = nextPrayer(), wi = C.weekNow(), w = window.CAMP_WEEKS[wi], we = C.WEEKS_EN[wi];
    var ms = C.missionsFor(kid), day = ((S.state.log || {})[C.dkey()] || {})[kid.id] || {};
    var doneN = ms.filter(function (m) { return day[m.id]; }).length;
    var goal = { big: lang ? we[2] : w.y, mid: lang ? we[3] : w.a, small: lang ? we[4] : w.s }[kid.tier];
    var left = ms.filter(function (m) { return !day[m.id]; }).slice(0, 4);
    return '<section class="hero"><div class="who"><div class="av">' + esc(kid.avatar) + '</div><div><h1>' + (lang ? 'Peace be upon you, ' : 'السلام عليكم يا ') + esc(kid.name) + '</h1><div class="rk">' + r.rank.icon + ' ' + L(r.rank.n) + (r.next ? (lang ? ' → ' : ' ← ') + r.next.icon + ' ' + L(r.next.n) : '') + '</div></div></div>' +
      '<div class="bar"><i style="width:' + r.pct + '%"></i></div><div class="muted" style="color:#CFE0DB">' + (r.next ? T('nextRank') + ': ' + N(r.left) + ' ⭐' : '👑') + '</div>' +
      '<div class="stats"><div class="stat"><b>' + N(st.balance) + '</b><span>' + T('balance') + '</span></div><div class="stat"><b>' + N(st.today) + '</b><span>' + T('todayStars') + '</span></div><div class="stat"><b>' + N(doneN) + '/' + N(ms.length) + '</b><span>' + T('missions') + '</span></div><div class="stat"><b>' + N(st.streak) + '</b><span>' + T('streak') + '</span></div></div></section>' +
      '<h2>🕌 ' + (np ? T('nextPrayer') + ': ' + L(C.I18N.prayers[np.k]) + ' — ' + T('after') + ' ' + countdown(np.at) : T('nextPrayer')) + '</h2>' + prayStrip() + '<p class="muted">' + greg() + ' · ' + hijri() + '</p>' +
      '<div class="grid g2" style="margin-top:1rem"><div><h2>🎯 ' + T('missions') + '</h2>' + (left.length ? left.map(function (m) { return missionRow(kid, m, day[m.id], C.dkey()); }).join('') : '<div class="card">🎉 ' + T('allDone') + '</div>') + '<a class="btn ghost sm" href="#/missions">' + T('missions') + (lang ? ' →' : ' ←') + '</a></div>' +
      '<div><h2>🌿 ' + T('weekKhuluq') + ': ' + esc(lang ? we[1] : w.k) + '</h2><div class="pw"><div class="pill">🔑 ' + T('password') + '</div><div class="ay">' + esc(w.p[0]) + '</div><div class="muted">' + T('childSays') + ': <b class="ay" style="color:var(--pine)">' + esc(w.p[1]) + '</b></div></div>' +
      '<div class="card" style="margin-top:.7rem"><h3>🎯 ' + T('myGoal') + '</h3>' + esc(nm(goal)) + '</div><div class="card" style="margin-top:.7rem"><h3>' + L(C.THEMES[new Date().getDay()]) + '</h3><span class="muted">' + T('tonight') + ':</span> ' + esc(nm(w.d[new Date().getDay()])) + '</div></div></div>';
  };

  /* ── المهام ── */
  function missionRow(kid, m, e, dk) {
    var s = e && e.s, small = kid.tier === 'small';
    var btn = s === 'a' ? '<span class="pill g">✓ ' + T('approved') + '</span>' :
      s === 'p' ? '<span class="pill o">⏳ ' + T('pending') + '</span><button class="btn sm ghost" data-act="undo" data-m="' + m.id + '" data-d="' + dk + '">' + T('undo') + '</button>' :
        '<button class="btn sm' + (small ? ' gold' : '') + '" data-act="done" data-m="' + m.id + '" data-d="' + dk + '">' + (small ? '🔒 ' : '') + T('done') + '</button>';
    return '<div class="mi ' + (s || '') + '"><span class="st">' + N(m.s) + '⭐</span><span class="tx">' + L(m.n) + (m.why ? '<small>' + L(m.why) + '</small>' : '') + '</span>' + btn + '</div>';
  }
  V.missions = function (kid) {
    var off = view.dayOff || 0, d = new Date(); d.setDate(d.getDate() - off);
    var dk = C.dkey(d), ms = C.missionsFor(kid, d), day = ((S.state.log || {})[dk] || {})[kid.id] || {};
    var got = ms.reduce(function (a, m) { return a + (day[m.id] && day[m.id].s === 'a' ? m.s : 0); }, 0), max = ms.reduce(function (a, m) { return a + m.s; }, 0);
    var html = '<div class="row"><h1>🎯 ' + T('missions') + '</h1><span class="sp pill">' + N(got) + ' / ' + N(max) + ' ⭐</span></div>' +
      '<div class="seg"><button class="' + (off ? '' : 'on') + '" data-act="day" data-o="0">' + T('today') + '</button><button class="' + (off ? 'on' : '') + '" data-act="day" data-o="1">' + (lang ? 'Yesterday' : 'أمس') + '</button></div>' +
      (kid.tier === 'small' ? '<p class="muted">🔒 ' + T('parentLogs') + '</p>' : '');
    C.BLOCKS.forEach(function (b) {
      var l = ms.filter(function (m) { return m.b === b.id; }); if (!l.length) return;
      html += '<div class="blk"><h3>' + b.icon + ' ' + L(b.n) + '</h3>' + l.map(function (m) { return missionRow(kid, m, day[m.id], dk); }).join('') + '</div>';
    });
    return html;
  };

  /* ── التوجيه والرسم ── */
  function route() { return (location.hash.replace(/^#\//, '') || 'home').split('?')[0]; }
  function render() {
    setLang();
    var r = route(), st = S.state, hasKids = C.kids().length > 0;
    if (!hasKids || !(st.family || {}).pin) { app.innerHTML = setupView(); return; }
    if (r === 'tv') { app.innerHTML = V.tv(); return; }
    if (r === 'parent') { if (!parentOpen()) { location.hash = '#/who'; return; } app.innerHTML = V.parent(); return; }
    var kid = curKid();
    if (r === 'who' || !kid) { app.innerHTML = whoView(); return; }
    var fn = V[r] || V.home;
    app.innerHTML = shell(V[r] ? r : 'home', kid, fn(kid));
    if (C.afterRender) C.afterRender(r, kid);
  }
  var pendingRender = null;
  function softRender() {              // تحديث قادم من المزامنة: لا نقاطع من يكتب
    var a = document.activeElement;
    if (a && app.contains(a) && /INPUT|TEXTAREA|SELECT/.test(a.tagName)) { clearTimeout(pendingRender); pendingRender = setTimeout(softRender, 2500); return; }
    render();
  }

  /* ── الأحداث ── */
  var ACT = C.actions = {
    lang: function () { lang = lang ? 0 : 1; localStorage.setItem('camp-lang', lang ? 'en' : 'ar'); render(); },
    who: function () { location.hash = '#/who'; if (route() === 'who') render(); },
    pick: function (el) { localStorage.setItem('camp-kid', el.dataset.id); location.hash = '#/home'; render(); },
    parent: function () { askPin(function () { location.hash = '#/parent'; render(); }); },
    day: function (el) { view.dayOff = +el.dataset.o; render(); },
    done: function (el) {
      var kid = curKid(), path = ['log', el.dataset.d, kid.id, el.dataset.m];
      if (kid.tier === 'small') return askPin(function () { S.set(path, { s: 'a', t: Date.now() }); toast('⭐'); });
      S.set(path, { s: 'p', t: Date.now() }); toast('⏳ ' + T('pending'));
    },
    undo: function (el) { S.del(['log', el.dataset.d, curKid().id, el.dataset.m]); },
    setup: function () {
      var pin = val('pin'); if (!/^\d{4,8}$/.test(pin)) return toast(T('pinSet'));
      var kids = {}, n = 0;
      for (var i = 0; i < 3; i++) { var name = val('name' + i), age = +val('age' + i) || 0; if (name) { kids['k' + (i + 1)] = { name: name, age: age, tier: tierOf(age), avatar: ['🦁', '🐯', '🐣'][i], order: i }; n++; } }
      if (!n) return toast(T('name'));
      var c = C.CITIES[+val('city') || 0], sat = new Date(); sat.setDate(sat.getDate() - ((sat.getDay() + 1) % 7));
      S.set(['kids'], kids);
      S.set(['family'], { name: val('fname') || T('appName'), pin: C.pinHash(pin), city: { name: c[0], lat: c[1], lng: c[2] }, method: 'MWL', start: C.dkey(sat), starValue: 2, sadaqaPct: 20, causes: lang ? 'Our local mosque\nOrphans\nPalestine relief' : 'مسجد الحي\nكفالة يتيم\nإغاثة فلسطين' });
      location.hash = '#/who';
    },
    signin: function () { S.signIn(val('em'), val('pw')).catch(function (e) { toast(e.message); }); },
    signup: function () { S.signUp(val('em'), val('pw')).catch(function (e) { toast(e.message); }); },
    signout: function () { S.signOut(); }
  };
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-act]'); if (!el) return;
    var f = ACT[el.dataset.act]; if (f) { e.preventDefault(); f(el); }
  });
  window.addEventListener('hashchange', render);
  C.render = render; C.h = { L: L, T: T, N: N, esc: esc, toast: toast, nm: nm, hm: hm, val: val, askPin: askPin, parentOpen: parentOpen, curKid: curKid, view: view, prayStrip: prayStrip, nextPrayer: nextPrayer, countdown: countdown, hijri: hijri, greg: greg, authForm: authForm, tierOf: tierOf, lang: function () { return lang; }, missionRow: missionRow };

  C.boot = function () {
    S.on(softRender); S.init(); render();
    setInterval(function () { var r = route(); if (r === 'tv' || r === 'home') softRender(); }, 60e3);
  };
})();
