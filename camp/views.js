/* معسكر القادة — بقية الشاشات */
(function () {
  'use strict';
  var C = window.CAMP, S = C.S, V = C.views, A = C.actions, h = C.h;
  var L = h.L, T = h.T, N = h.N, esc = h.esc, toast = h.toast, nm = h.nm, val = h.val, view = h.view;
  function st() { return S.state; }
  function list(map, f) { return Object.keys(map || {}).map(function (id) { return Object.assign({ id: id }, map[id]); }).filter(f || function () { return true; }).sort(function (a, b) { return (b.t || 0) - (a.t || 0); }); }
  function fam() { return st().family || {}; }

  /* ── خطتي ── */
  V.plan = function (kid) {
    var wi = C.weekNow(), w = window.CAMP_WEEKS[wi], we = C.WEEKS_EN[wi], today = new Date().getDay(), lang = h.lang();
    var mo = lang ? C.MONTHS_EN[w.m] : window.CAMP_MONTHS[w.m].n, goal = { big: lang ? we[2] : w.y, mid: lang ? we[3] : w.a, small: lang ? we[4] : w.s }[kid.tier];
    var days = w.d.map(function (x, i) { return '<div class="day ' + (i === today ? 'now' : '') + '"><b>' + C.I18N.days[lang][i] + ' · ' + L(C.THEMES[i]) + '</b>' + esc(nm(x)) + '</div>'; }).join('');
    var sch = (C.SCHEDULE[kid.tier] || []).map(function (r, i) { return '<tr' + (i === today ? ' style="background:#EFF9F4;font-weight:800"' : '') + '><td>' + C.I18N.days[lang][i] + '</td><td>' + L(r[0]) + '</td><td>' + L(r[1]) + '</td></tr>'; }).join('');
    return '<h1>🗓️ ' + T('week') + ' ' + N(wi + 1) + ' ' + T('of') + ' ' + N(24) + ': ' + esc(lang ? we[0] : w.t) + '</h1><p class="sub">' + window.CAMP_MONTHS[w.m].i + ' ' + T('month') + ' ' + N(w.m + 1) + ' — ' + esc(mo) + '</p>' +
      '<div class="grid g2" style="margin-top:.8rem"><div class="pw"><div class="pill">🌿 ' + T('weekKhuluq') + ': ' + esc(lang ? we[1] : w.k) + '</div><div class="ay">' + esc(w.p[0]) + '</div><div class="muted">' + T('childSays') + ': <b class="ay" style="color:var(--pine)">' + esc(w.p[1]) + '</b></div></div>' +
      '<div class="card"><h3>🎯 ' + T('myGoal') + '</h3>' + esc(nm(goal)) + '</div></div>' +
      '<h2>📅 ' + T('weekDays') + '</h2><div class="days">' + days + '</div>' +
      (sch ? '<h2>⏰ ' + T('schedule') + '</h2><div class="card" style="overflow:auto"><table><tr><th></th><th>' + L(['بعد العصر', 'After Asr']) + '</th><th>' + L(['بعد المغرب', 'After Maghrib']) + '</th></tr>' + sch + '</table></div>' : '');
  };

  /* ── أهدافي: الرتب، جواز المواهب، أهدافي الخاصة ── */
  V.goals = function (kid) {
    var s = C.stats(kid.id), r = C.rankOf(s.life), open = h.parentOpen();
    var ranks = C.RANKS.map(function (x, i) {
      return '<div class="rank ' + (i <= r.i ? 'got ' : '') + (i === r.i ? 'cur' : '') + '"><div class="ri">' + x.icon + '</div><div><b>' + L(x.n) + '</b> <span class="pill">' + N(x.at) + ' ⭐</span><div class="muted">⭐ ' + T('model') + ': ' + L(x.model) + '</div><div class="muted">🎖️ ' + T('unlocks') + ': ' + L(x.unlock) + '</div></div></div>';
    }).join('');
    var pass = (C.PASSPORT[kid.tier] || []).map(function (t) {
      var cur = ((st().pass || {})[kid.id] || {})[t.id] || 0;
      var lv = t.lv.map(function (d, i) {
        var on = i < cur ? 'on' : '', inner = '<b>' + C.LEVELS[i][0] + '</b>' + L(C.LEVELS[i][1]) + '<br>' + L(d);
        return open ? '<button class="' + on + '" data-act="level" data-t="' + t.id + '" data-l="' + (i + 1) + '">' + inner + '</button>' : '<span class="' + on + '">' + inner + '</span>';
      }).join('');
      return '<div class="card"><h3>' + t.icon + ' ' + L(t.n) + '</h3><div class="lv">' + lv + '</div></div>';
    }).join('');
    var goals = list(st().goals, function (g) { return g.k === kid.id; }).map(function (g) {
      return '<div class="mi ' + (g.done ? 'a' : '') + '"><span class="tx">' + esc(g.text) + '</span><button class="btn sm ' + (g.done ? 'ghost' : '') + '" data-act="goalDone" data-id="' + g.id + '">' + (g.done ? '↺' : '✓') + '</button><button class="btn sm ghost" data-act="goalDel" data-id="' + g.id + '">✕</button></div>';
    }).join('');
    return '<h1>🏅 ' + T('goals') + '</h1>' +
      (pass ? '<h2>🛂 ' + T('passport') + '</h2><p class="muted">' + (open ? '🔓' : '🔒 ' + T('setLevel')) + '</p><div class="grid g2">' + pass + '</div>' : '') +
      '<h2>✍️ ' + T('myGoals') + '</h2>' + goals + '<div class="row"><input type="text" data-k="goal" maxlength="80" placeholder="' + T('goalPh') + '" style="flex:1;min-width:12rem"><button class="btn" data-act="goalAdd">' + T('addGoal') + '</button></div>' +
      '<h2>🪜 ' + T('ranks') + '</h2><div class="grid">' + ranks + '</div>';
  };
  A.level = function (el) { var kid = h.curKid(), cur = ((st().pass || {})[kid.id] || {})[el.dataset.t] || 0, l = +el.dataset.l; S.set(['pass', kid.id, el.dataset.t], cur === l ? l - 1 : l); };
  A.goalAdd = function () { var t = val('goal'); if (!t) return; S.set(['goals', C.uid()], { k: h.curKid().id, text: t, done: false, t: Date.now() }); };
  A.goalDone = function (el) { var g = st().goals[el.dataset.id]; S.set(['goals', el.dataset.id, 'done'], !g.done); };
  A.goalDel = function (el) { S.del(['goals', el.dataset.id]); };

  /* ── الخزينة ── */
  function money(p) { return '£' + (p / 100).toFixed(2); }
  V.rewards = function (kid) {
    var s = C.stats(kid.id), f = fam(), sv = +f.starValue || 2, pct = +f.sadaqaPct || 0;
    var mine = list(st().red, function (r) { return r.k === kid.id; });
    var cats = Object.keys(C.REWARD_CATS).map(function (c) {
      return '<h2>' + L(C.REWARD_CATS[c]) + '</h2><div class="grid g4">' + C.REWARDS.filter(function (r) { return r.cat === c; }).map(function (r) {
        var can = s.balance >= r.cost;
        return '<div class="card rw"><span class="ic">' + r.icon + '</span><b>' + L(r.n) + '</b><span class="cost">' + N(r.cost) + ' ⭐</span><button class="btn sm ' + (can ? 'gold' : 'ghost') + '" ' + (can ? '' : 'disabled') + ' data-act="redeem" data-id="' + r.id + '">' + (can ? T('request') : T('notEnough')) + '</button></div>';
      }).join('') + '</div>';
    }).join('');
    var causes = String(f.causes || '').split('\n').filter(Boolean).map(function (c) { return '<option>' + esc(c) + '</option>'; }).join('');
    var reqs = mine.slice(0, 8).map(function (r) { return '<div class="mi ' + (r.st === 'g' ? 'a' : r.st === 'p' ? 'p' : '') + '"><span class="st">' + N(r.cost) + '⭐</span><span class="tx">' + esc(r.n) + '</span><span class="pill ' + (r.st === 'g' ? 'g' : r.st === 'p' ? 'o' : 'r') + '">' + (r.st === 'g' ? T('granted') : r.st === 'p' ? T('pending') : T('reject')) + '</span></div>'; }).join('');
    return '<div class="row"><h1>💰 ' + T('rewards') + '</h1><span class="sp pill" style="font-size:1rem">' + T('balance') + ': ' + N(s.balance) + ' ⭐</span></div>' + (reqs ? '<h2>📬 ' + T('requested') + '</h2>' + reqs : '') + cats +
      '<h2>🏦 ' + T('bank') + '</h2><div class="card"><p class="muted">' + T('sadaqaNote') + ' (' + N(pct) + '%)</p><div class="stats" style="margin:.6rem 0"><div class="stat" style="background:#EFF9F4"><b style="color:var(--pine)">' + money(s.money) + '</b><span>' + T('saved') + '</span></div><div class="stat" style="background:#FFF2CC"><b style="color:#8A6500">' + money(s.sadaqa) + '</b><span>' + T('sadaqa') + '</span></div></div>' +
      '<div class="form"><label>' + T('convert') + ' (' + N(1) + '⭐ = ' + N(sv) + 'p)<input type="number" data-k="bstars" min="10" step="10" max="' + s.balance + '" value="' + Math.min(50, Math.floor(s.balance / 10) * 10) + '"></label><label>' + T('sadaqa') + '<select data-k="bcause">' + causes + '</select></label></div><button class="btn gold" style="margin-top:.6rem" data-act="bank">' + T('request') + '</button></div>';
  };
  A.redeem = function (el) {
    var kid = h.curKid(), r = C.REWARDS.filter(function (x) { return x.id === el.dataset.id; })[0];
    if (C.stats(kid.id).balance < r.cost) return toast(T('notEnough'));
    S.set(['red', C.uid()], { k: kid.id, rid: r.id, n: L(r.n), cost: r.cost, st: 'p', t: Date.now() }); toast('📬 ' + T('pending'));
  };
  A.bank = function () {
    var kid = h.curKid(), f = fam(), n = Math.floor(+val('bstars') || 0);
    if (n < 10 || n > C.stats(kid.id).balance) return toast(T('notEnough'));
    var total = n * (+f.starValue || 2), sad = Math.round(total * (+f.sadaqaPct || 0) / 100);
    S.set(['bank', C.uid()], { k: kid.id, stars: n, money: total - sad, sadaqa: sad, cause: val('bcause'), st: 'p', t: Date.now() }); toast('📬 ' + T('pending'));
  };

  /* ── الإذاعة ── */
  var Q = { slug: null, i: -1, rep: 0, playing: false }, audio = document.getElementById('qaudio');
  function loadScript(src) { return new Promise(function (res, rej) { var s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); }); }
  function ensureIndex() { window.SURAHS = window.SURAHS || {}; return window.SURAH_INDEX ? Promise.resolve() : loadScript('../corners/quran-hifz/quran-data/index_data.js'); }
  function ensureSurah(slug) { return window.SURAHS[slug] ? Promise.resolve() : loadScript('../corners/quran-hifz/quran-data/' + slug + '.js'); }
  function pad(n) { return String(n).padStart(3, '0'); }
  /* تفضيلات كل قائد (السورة، القارئ، التكرار) تُحفظ في الحساب فتتبعه على كل جهاز */
  function pref(k, d) { var kid = h.curKid(), p = kid && (S.state.prefs || {})[kid.id]; return (p && p[k]) || localStorage.getItem('camp-' + k) || d; }
  function setPref(k, v) { localStorage.setItem('camp-' + k, v); var kid = h.curKid(); if (kid) S.set(['prefs', kid.id, k], v); }
  function qPlay(i) {
    var idx = window.SURAH_INDEX.filter(function (s) { return s.slug === Q.slug; })[0], su = window.SURAHS[Q.slug];
    if (!su || i >= su.verses.length) { Q.playing = false; Q.i = -1; C.render(); return; }
    Q.i = i; Q.playing = true;
    audio.src = 'https://everyayah.com/data/' + pref('reciter', C.RECITERS[0][0]) + '/' + pad(idx.num) + pad(i + 1) + '.mp3';
    audio.play().catch(function () { toast('🔇'); });
    document.querySelectorAll('.verse').forEach(function (v, n) { v.classList.toggle('on', n === i); if (n === i) v.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); });
  }
  audio.addEventListener('ended', function () {
    var want = +pref('repeat', 1);
    if (++Q.rep < want) { audio.currentTime = 0; audio.play(); } else { Q.rep = 0; qPlay(Q.i + 1); }
  });
  function quranTab() {
    if (!window.SURAH_INDEX) { ensureIndex().then(C.render, function () { toast('⚠️'); }); return '<p class="muted">…</p>'; }
    var lang = h.lang(), slug = Q.slug || pref('surah', 'fatihah'); Q.slug = slug;
    if (!window.SURAHS[slug]) { ensureSurah(slug).then(C.render, function () { toast('⚠️'); }); }
    var su = window.SURAHS[slug], rc = pref('reciter', C.RECITERS[0][0]), rp = String(pref('repeat', '1'));
    var opts = window.SURAH_INDEX.map(function (s) { return '<option value="' + s.slug + '"' + (s.slug === slug ? ' selected' : '') + '>' + s.num + ' · ' + (lang ? s.nameEn : s.nameAr) + '</option>'; }).join('');
    var recs = C.RECITERS.map(function (r) { return '<option value="' + r[0] + '"' + (r[0] === rc ? ' selected' : '') + '>' + L(r[1]) + '</option>'; }).join('');
    var reps = [1, 2, 3, 5, 10].map(function (n) { return '<option' + (String(n) === rp ? ' selected' : '') + ' value="' + n + '">' + N(n) + '×</option>'; }).join('');
    var verses = su ? su.verses.map(function (v, i) { return '<button class="verse ' + (i === Q.i ? 'on' : '') + '" data-act="qverse" data-i="' + i + '"><span class="ay">' + esc(v.ar) + ' ﴿' + N(i + 1) + '﴾</span><small>' + esc(v.trans ? L([v.trans.ar, v.trans.en]) : '') + '</small></button>'; }).join('') : '<p class="muted">…</p>';
    return '<div class="card"><div class="form"><label>' + T('quran') + '<select data-chg="surah">' + opts + '</select></label><label>' + T('reciter') + '<select data-chg="reciter">' + recs + '</select></label><label>' + T('repeat') + '<select data-chg="repeat">' + reps + '</select></label></div>' +
      '<div class="row" style="margin-top:.7rem"><button class="btn gold" data-act="qplay">' + (Q.playing ? '⏸ ' + T('stop') : '▶ ' + T('play')) + '</button></div></div><div style="margin-top:.8rem">' + verses + '</div>';
  }
  A.qplay = function () { if (Q.playing) { audio.pause(); Q.playing = false; C.render(); } else { Q.rep = 0; qPlay(Q.i < 0 ? 0 : Q.i); C.render(); } };
  A.qverse = function (el) { Q.rep = 0; qPlay(+el.dataset.i); };
  document.addEventListener('change', function (e) {
    var k = e.target.dataset && e.target.dataset.chg; if (!k) return;
    if (k === 'surah') { audio.pause(); Q = { slug: e.target.value, i: -1, rep: 0, playing: false }; setPref('surah', e.target.value); C.render(); }
    if (k === 'reciter') setPref('reciter', e.target.value);
    if (k === 'repeat') setPref('repeat', e.target.value);
    if (k === 'rectype') view.recType = e.target.value;
  });

  /* الأذكار: نطق بصوت الجهاز + عدّاد */
  function speak(text) {
    var sy = window.speechSynthesis; if (!sy) return toast('🔇');
    sy.cancel();
    var u = new SpeechSynthesisUtterance(text.replace(/[«»﴿﴾·…()]/g, ' ')); u.lang = 'ar-SA'; u.rate = .85;
    var v = (sy.getVoices() || []).filter(function (x) { return /^ar/i.test(x.lang); })[0]; if (v) u.voice = v;
    sy.speak(u);
  }
  function adhkarTab() {
    var g = view.zgroup || C.ADHKAR[0].id, grp = C.ADHKAR.filter(function (x) { return x.id === g; })[0];
    view.zcount = view.zcount || {};
    return '<div class="seg">' + C.ADHKAR.map(function (x) { return '<button class="' + (x.id === g ? 'on' : '') + '" data-act="zgroup" data-id="' + x.id + '">' + x.icon + ' ' + L(x.n) + '</button>'; }).join('') + '</div>' +
      grp.items.map(function (z, i) {
        var key = g + i, c = view.zcount[key] || 0;
        return '<div class="card zk" style="margin-bottom:.6rem"><div class="ay">' + esc(z.ar) + '</div><p class="muted">' + T('meaning') + ': ' + esc(L(z.m)) + '</p><div class="row" style="margin-top:.4rem"><button class="btn sm" data-act="zspeak" data-g="' + g + '" data-i="' + i + '">🔊 ' + T('listen') + '</button>' +
          (z.n > 1 ? '<button class="btn sm gold" data-act="zcount" data-key="' + key + '" data-n="' + z.n + '">' + N(c) + ' / ' + N(z.n) + '</button>' : '') + '<span class="pill sp">' + esc(L(z.src)) + '</span></div></div>';
      }).join('');
  }
  A.zgroup = function (el) { view.zgroup = el.dataset.id; C.render(); };
  A.zspeak = function (el) { var grp = C.ADHKAR.filter(function (x) { return x.id === el.dataset.g; })[0]; speak(grp.items[+el.dataset.i].ar); };
  A.zcount = function (el) { var k = el.dataset.key, n = +el.dataset.n; view.zcount[k] = ((view.zcount[k] || 0) + 1) % (n + 1); el.textContent = N(view.zcount[k]) + ' / ' + N(n); if (view.zcount[k] === n) toast('✅'); };

  function linkCards(items) {
    return '<div class="grid g3">' + items.map(function (x) {
      return '<a class="card" ' + (x.parent ? 'data-act="plink" data-href="' + esc(x.href) + '" href="#"' : 'href="' + encodeURI(x.href) + '" target="_blank" rel="noopener"') + '><div style="font-size:2rem">' + x.icon + '</div><h3>' + L(x.n) + (x.parent ? ' 🔒' : '') + '</h3><p class="muted">' + L(x.d) + '</p></a>';
    }).join('') + '</div>';
  }
  A.plink = function (el) { h.askPin(function () { window.open(encodeURI(el.dataset.href), '_blank', 'noopener'); }); };

  /* استوديو القائد */
  /* التسجيل يُحفظ محليًا أولًا ثم يُرفع إلى حساب الأسرة؛ القائمة في state.rec فتظهر على كل الأجهزة */
  var rec = { mr: null, chunks: [], t0: 0, list: null, urls: {}, up: {}, want: {} };
  function onRadio() { return location.hash.indexOf('radio') >= 0; }
  function recon() {
    if (!rec.list || !S.canStore() || S.sync !== 'on') return;
    var cl = S.state.rec || {}, uid = S.user.uid;
    rec.list.slice().forEach(function (r) {
      if (cl[r.id]) return;
      if (r.u === uid) {                       // رُفع من قبل ثم حُذف من جهاز آخر
        rec.list.splice(rec.list.indexOf(r), 1); C.rec.del(r.id); return;
      }
      if (r.u || rec.up[r.id]) return;         // يخص حسابًا آخر، أو قيد الرفع
      rec.up[r.id] = 1;
      S.upload(r.id, r.blob).then(function () {
        r.u = uid; C.rec.put(r); delete rec.up[r.id];
        S.set(['rec', r.id], { k: r.k, type: r.type, t: r.t, dur: Math.round(r.dur), ct: r.blob.type || 'audio/webm' });
      }, function (e) { console.warn('camp rec upload', e && e.code); rec.up[r.id] = 'err'; if (onRadio()) C.render(); });
    });
  }
  function refreshRecs() { C.rec.all().then(function (l) { rec.list = l || []; recon(); if (onRadio()) C.render(); }, function () { rec.list = []; if (onRadio()) C.render(); }); }
  S.on(recon);
  function ext(ct) { return /mp4|aac|m4a/.test(ct || '') ? 'm4a' : /ogg/.test(ct || '') ? 'ogg' : 'webm'; }
  function studioTab(kid) {
    if (rec.list === null) { refreshRecs(); return '<p class="muted">…</p>'; }
    var types = ['tilawa', 'adhan', 'khutba', 'story'], ty = view.recType || 'tilawa', cl = S.state.rec || {}, local = {};
    rec.list.forEach(function (r) { local[r.id] = r; });
    var items = Object.keys(cl).filter(function (id) { return cl[id] && cl[id].k === kid.id; }).map(function (id) { return Object.assign({ id: id, cloud: true }, cl[id]); });
    rec.list.forEach(function (r) { if (!cl[r.id] && r.k === kid.id) items.push({ id: r.id, k: r.k, type: r.type, t: r.t, dur: r.dur, ct: r.blob.type }); });
    items.sort(function (a, b) { return b.t - a.t; });
    var rows = items.map(function (r) {
      if (!rec.urls[r.id]) {
        if (local[r.id]) rec.urls[r.id] = URL.createObjectURL(local[r.id].blob);
        else if (S.canStore() && !rec.want[r.id]) { rec.want[r.id] = 1; S.fileUrl(r.id).then(function (u) { rec.urls[r.id] = u; if (onRadio()) C.render(); }, function () { delete rec.want[r.id]; }); }
      }
      var u = rec.urls[r.id], st = r.cloud ? '☁️ ' + T('recCloud') : rec.up[r.id] === 'err' ? '⚠️ ' + T('recErr') : rec.up[r.id] ? '⏫ ' + T('recUp') : '📱 ' + T('recLocal');
      return '<div class="card" style="margin-bottom:.5rem"><div class="row"><b>' + T(r.type) + '</b><span class="muted">' + new Date(r.t).toLocaleDateString(h.lang() ? 'en-GB' : 'ar-EG') + ' · ' + N(Math.round(r.dur)) + (h.lang() ? 's' : 'ث') + '</span><span class="pill' + (r.cloud ? ' g' : '') + '">' + st + '</span><button class="btn sm ghost sp" data-act="recDel" data-id="' + r.id + '">' + T('del') + '</button></div>' +
        (u ? '<audio controls preload="none" src="' + esc(u) + '" style="width:100%;margin-top:.4rem"></audio><a class="btn sm ghost" target="_blank" rel="noopener" download="' + esc(r.type) + '-' + r.id + '.' + ext(r.ct) + '" href="' + esc(u) + '">⬇ ' + T('download') + '</a>' : '<p class="muted">…</p>') + '</div>';
    }).join('') || '<p class="muted">' + T('empty') + '</p>';
    return '<div class="card"><p class="muted">🎙️ ' + T(S.canStore() ? 'recHint' : 'recHintLocal') + '</p><div class="row" style="margin-top:.5rem"><select data-chg="rectype" style="width:auto">' + types.map(function (x) { return '<option value="' + x + '"' + (x === ty ? ' selected' : '') + '>' + T(x) + '</option>'; }).join('') + '</select>' +
      (rec.mr ? '<span class="rec-dot"></span><button class="btn red" data-act="recStop">⏹ ' + T('recStop') + '</button>' : '<button class="btn gold" data-act="recStart">⏺ ' + T('record') + '</button>') + '</div></div><div style="margin-top:.8rem">' + rows + '</div>';
  }
  A.recStart = function () {
    if (!navigator.mediaDevices || !window.MediaRecorder) return toast('🎙️ ✕');
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      var mt = ['audio/mp4;codecs=mp4a.40.2', 'audio/mp4', 'audio/webm;codecs=opus', 'audio/webm'].filter(function (m) { try { return MediaRecorder.isTypeSupported(m); } catch (e) { return false; } })[0];   // mp4 أولًا: يعمل على كل الأجهزة
      rec.chunks = []; rec.t0 = Date.now(); rec.mr = mt ? new MediaRecorder(stream, { mimeType: mt }) : new MediaRecorder(stream);
      rec.mr.ondataavailable = function (e) { if (e.data.size) rec.chunks.push(e.data); };
      rec.mr.onstop = function () {
        stream.getTracks().forEach(function (t) { t.stop(); });
        var o = { id: C.uid(), k: h.curKid().id, type: view.recType || 'tilawa', t: Date.now(), dur: (Date.now() - rec.t0) / 1000, blob: new Blob(rec.chunks, { type: rec.mr.mimeType || mt || 'audio/webm' }) };
        rec.mr = null; C.rec.add(o).then(refreshRecs);
      };
      rec.mr.start(); C.render();
    }, function () { toast('🎙️ ✕'); });
  };
  A.recStop = function () { if (rec.mr) rec.mr.stop(); };
  A.recDel = function (el) {
    var id = el.dataset.id;
    if ((S.state.rec || {})[id]) { S.fileDel(id); S.del(['rec', id]); }
    delete rec.urls[id]; C.rec.del(id).then(refreshRecs, refreshRecs);
  };

  V.radio = function (kid) {
    var tab = view.radio || 'quran', tabs = [['quran', '📖'], ['adhkar', '📿'], ['stories', '📚'], ['recorder', '🎙️']];
    var body = tab === 'quran' ? quranTab() : tab === 'adhkar' ? adhkarTab() : tab === 'stories' ? linkCards(C.STORIES) : studioTab(kid);
    return '<h1>📻 ' + T('radio') + '</h1><div class="seg">' + tabs.map(function (t) { return '<button class="' + (t[0] === tab ? 'on' : '') + '" data-act="rtab" data-id="' + t[0] + '">' + t[1] + ' ' + T(t[0]) + '</button>'; }).join('') + '</div>' + body;
  };
  A.rtab = function (el) { view.radio = el.dataset.id; C.render(); };

  /* ── المكتبة ── */
  V.library = function () { return '<h1>📚 ' + T('library') + '</h1><p class="sub">' + L(['افتح الكتاب ثم اضغط «طباعة» لتنزيله PDF', 'Open a book, then press “Print” to save it as a PDF']) + '</p><div style="margin-top:1rem">' + linkCards(C.LIBRARY) + '</div>'; };

  /* ── الشورى ── */
  V.shura = function (kid) {
    var open = h.parentOpen(), props = list(st().prop);
    var pl = props.map(function (p) {
      var who = C.kid(p.k) || {}, lab = p.st === 'a' ? ['g', T('accepted')] : p.st === 'd' ? ['b', T('discussed')] : ['o', T('newP')];
      return '<div class="mi"><span style="font-size:1.4rem">' + esc(who.avatar || '🙂') + '</span><span class="tx">' + esc(p.text) + '<small>' + esc(who.name || '') + '</small></span><span class="pill ' + lab[0] + '">' + lab[1] + '</span>' +
        (open ? '<button class="btn sm ghost" data-act="propSt" data-id="' + p.id + '" data-s="d">' + T('discussed') + '</button><button class="btn sm" data-act="propSt" data-id="' + p.id + '" data-s="a">' + T('accepted') + '</button><button class="btn sm ghost" data-act="propDel" data-id="' + p.id + '">✕</button>' : '') + '</div>';
    }).join('') || '<p class="muted">' + T('empty') + '</p>';
    return '<h1>🏛️ ' + T('shura') + '</h1><p class="ay" style="color:var(--pine)">﴿وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ﴾</p>' +
      '<h2>📬 ' + T('proposals') + '</h2><div class="row"><input type="text" data-k="prop" maxlength="140" placeholder="' + T('proposePh') + '" style="flex:1;min-width:12rem"><button class="btn" data-act="propAdd">' + T('propose') + '</button></div><div style="margin-top:.7rem">' + pl + '</div>' +
      '<div class="grid g2"><div><h2>🕌 ' + T('agenda') + '</h2><div class="card"><table>' + C.AGENDA.map(function (a, i) { return '<tr><td>' + N(i + 1) + '</td><td>' + L(a[0]) + '</td><td>' + N(a[1]) + ' ' + T('minutes') + '</td></tr>'; }).join('') + '</table></div></div>' +
      '<div><h2>🏛️ ' + T('parliament') + '</h2><div class="card">' + C.PARLIAMENT.map(function (p) { return '<p>' + p[0] + ' ' + esc(nm(L(p[1]))) + '</p>'; }).join('') + '</div></div></div>';
  };
  A.propAdd = function () { var t = val('prop'); if (!t) return; S.set(['prop', C.uid()], { k: h.curKid().id, text: t, st: 'n', t: Date.now() }); toast('📬'); };
  A.propSt = function (el) { S.set(['prop', el.dataset.id, 'st'], el.dataset.s); };
  A.propDel = function (el) { S.del(['prop', el.dataset.id]); };

  /* ── رايتنا ── */
  V.banner = function () {
    var f = fam();
    return '<div class="banner-flag"><div style="font-size:3rem">🚩</div><h1>' + esc(f.name || T('appName')) + '</h1><p>' + esc(f.motto || T('tagline')) + '</p></div>' +
      '<h2>🔭 ' + T('vision') + '</h2><div class="grid g4">' + C.VISION.map(function (v) { return '<div class="card" style="text-align:center"><div style="font-size:1.9rem">' + v[0] + '</div><b>' + L(v[1]) + '</b></div>'; }).join('') + '</div>' +
      '<h2>📜 ' + T('constitution') + '</h2><div class="grid g2">' + C.CONSTITUTION.map(function (r, i) { return '<div class="rank"><div class="ri">' + r[0] + '</div><div><b>' + N(i + 1) + '. ' + L(r[1]) + '</b><div class="muted">' + L(r[2]) + '</div></div></div>'; }).join('') + '</div>';
  };

  /* ── شاشة البيت ── */
  V.tv = function () {
    var np = h.nextPrayer(), wi = C.weekNow(), w = window.CAMP_WEEKS[wi], we = C.WEEKS_EN[wi], now = new Date(), f = fam(), pend = 0;
    var kids = C.kids().map(function (k) {
      var s = C.stats(k.id), r = C.rankOf(s.life), ms = C.missionsFor(k), day = ((st().log || {})[C.dkey()] || {})[k.id] || {};
      var done = ms.filter(function (m) { return day[m.id]; }).length, pct = ms.length ? Math.round(done / ms.length * 100) : 0; pend += s.pending;
      return '<div class="tvk"><div class="av">' + esc(k.avatar) + '</div><h2 style="color:#fff;justify-content:center;margin:.2rem 0">' + esc(k.name) + '</h2><div style="color:var(--gold2);font-weight:900">' + r.rank.icon + ' ' + L(r.rank.n) + '</div><div class="ring" style="--p:' + pct + '"><b>' + N(done) + '/' + N(ms.length) + '</b></div><div>' + N(s.today) + ' ⭐ ' + T('today') + ' · ' + N(s.balance) + ' ⭐</div></div>';
    }).join('');
    return '<div class="full" style="justify-content:flex-start;gap:1rem"><div class="row" style="width:100%;max-width:80rem"><a class="btn ghost sm" href="#/who">←</a><b>⛺ ' + esc(f.name || T('appName')) + '</b><span class="sp">' + h.greg() + ' · ' + h.hijri() + '</span></div>' +
      '<div class="tvclock">' + h.hm(now) + '</div>' + (np ? '<h1>🕌 ' + L(C.I18N.prayers[np.k]) + ' — ' + T('after') + ' ' + h.countdown(np.at) + '</h1><div style="width:100%;max-width:60rem;color:var(--ink)">' + h.prayStrip() + '</div>' : '') +
      '<div class="whos" style="width:100%;max-width:80rem">' + kids + '</div>' +
      '<div class="panel" style="width:min(100%,60rem);text-align:center"><div class="pill">🌿 ' + T('weekKhuluq') + ': ' + esc(h.lang() ? we[1] : w.k) + '</div><div class="ay" style="font-size:1.8rem;color:var(--pine);font-weight:700">' + esc(w.p[0]) + ' ' + esc(w.p[1]) + '</div>' + (pend ? '<p class="pill o">⏳ ' + T('approvals') + ': ' + N(pend) + '</p>' : '') + '</div></div>';
  };
})();
