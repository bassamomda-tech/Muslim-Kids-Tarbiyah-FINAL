/* معسكر القادة — لوحة الوالدين */
(function () {
  'use strict';
  var C = window.CAMP, S = C.S, V = C.views, A = C.actions, h = C.h;
  var L = h.L, T = h.T, N = h.N, esc = h.esc, toast = h.toast, val = h.val, view = h.view;
  function st() { return S.state; }
  function fam() { return st().family || {}; }
  function mission(tier, id) { return (C.MISSIONS[tier] || []).filter(function (m) { return m.id === id; })[0]; }
  function money(p) { return '£' + (p / 100).toFixed(2); }

  /* كل المهام المعلّقة لقائد */
  function pendingOf(kid) {
    var out = [];
    Object.keys(st().log || {}).sort().forEach(function (d) {
      var day = (st().log[d] || {})[kid.id] || {};
      Object.keys(day).forEach(function (mid) { if (day[mid] && day[mid].s === 'p') { var m = mission(kid.tier, mid); if (m) out.push({ d: d, m: m }); } });
    });
    return out;
  }

  function approvalsTab() {
    var any = false, html = C.kids().map(function (k) {
      var p = pendingOf(k), s = C.stats(k.id); if (p.length) any = true;
      var rows = p.map(function (x) {
        return '<div class="mi p"><span class="st">' + N(x.m.s) + '⭐</span><span class="tx">' + L(x.m.n) + '<small>' + (x.d === C.dkey() ? T('today') : N(x.d)) + '</small></span><button class="btn sm" data-act="ok" data-k="' + k.id + '" data-d="' + x.d + '" data-m="' + x.m.id + '">✓ ' + T('approve') + '</button><button class="btn sm ghost" data-act="no" data-k="' + k.id + '" data-d="' + x.d + '" data-m="' + x.m.id + '">✕</button></div>';
      }).join('');
      return '<div class="card" style="margin-bottom:.8rem"><div class="row"><span style="font-size:1.8rem">' + esc(k.avatar) + '</span><h3>' + esc(k.name) + '</h3><span class="pill">' + N(s.balance) + ' ⭐</span><span class="pill g">' + N(s.life) + ' ' + T('lifetime') + '</span>' +
        (p.length ? '<button class="btn sm gold sp" data-act="okAll" data-k="' + k.id + '">✓ ' + T('approveAll') + ' (' + N(p.length) + ')</button>' : '') + '</div>' + (rows || '<p class="muted">' + T('noPending') + '</p>') +
        '<div class="row" style="margin-top:.6rem"><input type="number" data-k="amt-' + k.id + '" value="5" min="1" style="width:5.5rem"><input type="text" data-k="why-' + k.id + '" placeholder="' + T('reason') + '" style="flex:1;min-width:8rem"><button class="btn sm" data-act="give" data-k="' + k.id + '" data-sign="1">＋ ' + T('give') + '</button><button class="btn sm ghost" data-act="give" data-k="' + k.id + '" data-sign="-1">－ ' + T('take') + '</button></div></div>';
    }).join('');
    return html;
  }
  A.ok = function (el) { S.set(['log', el.dataset.d, el.dataset.k, el.dataset.m], { s: 'a', t: Date.now() }); };
  A.no = function (el) { S.del(['log', el.dataset.d, el.dataset.k, el.dataset.m]); };
  A.okAll = function (el) { var k = C.kid(el.dataset.k); pendingOf(k).forEach(function (x) { S.set(['log', x.d, k.id, x.m.id], { s: 'a', t: Date.now() }); }); toast('✓'); };
  A.give = function (el) {
    var k = el.dataset.k, n = Math.abs(Math.floor(+val('amt-' + k) || 0)); if (!n) return;
    S.set(['adj', C.uid()], { k: k, amt: n * +el.dataset.sign, note: val('why-' + k), t: Date.now() }); toast((+el.dataset.sign > 0 ? '＋' : '－') + N(n) + ' ⭐');
  };

  function requestsTab() {
    function rows(map, kind) {
      return Object.keys(map || {}).map(function (id) { return Object.assign({ id: id }, map[id]); }).filter(function (r) { return r.st === 'p'; }).sort(function (a, b) { return a.t - b.t; }).map(function (r) {
        var k = C.kid(r.k) || {}, label = kind === 'red' ? esc(r.n) + ' — ' + N(r.cost) + '⭐' : N(r.stars) + '⭐ → ' + money(r.money) + ' + ' + T('sadaqa') + ' ' + money(r.sadaqa) + (r.cause ? ' (' + esc(r.cause) + ')' : '');
        return '<div class="mi p"><span style="font-size:1.4rem">' + esc(k.avatar || '') + '</span><span class="tx">' + label + '<small>' + esc(k.name || '') + '</small></span><button class="btn sm" data-act="grant" data-kind="' + kind + '" data-id="' + r.id + '">✓ ' + T('approve') + '</button><button class="btn sm ghost" data-act="deny" data-kind="' + kind + '" data-id="' + r.id + '">✕ ' + T('reject') + '</button></div>';
      }).join('');
    }
    var a = rows(st().red, 'red'), b = rows(st().bank, 'bank');
    var done = Object.keys(st().red || {}).map(function (id) { return st().red[id]; }).filter(function (r) { return r.st === 'g'; }).sort(function (x, y) { return y.t - x.t; }).slice(0, 10)
      .map(function (r) { var k = C.kid(r.k) || {}; return '<tr><td>' + esc(k.name || '') + '</td><td>' + esc(r.n) + '</td><td>' + N(r.cost) + '⭐</td><td>' + new Date(r.t).toLocaleDateString(h.lang() ? 'en-GB' : 'ar-EG') + '</td></tr>'; }).join('');
    return (a || b ? a + b : '<p class="muted">' + T('noPending') + '</p>') + (done ? '<h2>' + T('history') + '</h2><div class="card"><table>' + done + '</table></div>' : '');
  }
  A.grant = function (el) { S.set([el.dataset.kind, el.dataset.id, 'st'], 'g'); toast('🎁'); };
  A.deny = function (el) { S.set([el.dataset.kind, el.dataset.id, 'st'], 'r'); };

  function kidsTab() {
    var tiers = [['big', T('tierBig')], ['mid', T('tierMid')], ['small', T('tierSmall')]];
    return C.kids().map(function (k) {
      return '<div class="card" style="margin-bottom:.7rem"><div class="form"><label>' + T('name') + '<input type="text" data-k="n-' + k.id + '" value="' + esc(k.name) + '" maxlength="20"></label><label>' + T('age') + '<input type="number" data-k="a-' + k.id + '" value="' + (k.age || '') + '"></label>' +
        '<label>' + T('tier') + '<select data-k="t-' + k.id + '">' + tiers.map(function (t) { return '<option value="' + t[0] + '"' + (t[0] === k.tier ? ' selected' : '') + '>' + t[1] + '</option>'; }).join('') + '</select></label>' +
        '<label>' + T('avatar') + '<select data-k="v-' + k.id + '">' + C.AVATARS.map(function (a) { return '<option' + (a === k.avatar ? ' selected' : '') + '>' + a + '</option>'; }).join('') + '</select></label></div>' +
        '<div class="row" style="margin-top:.6rem"><button class="btn sm" data-act="kidSave" data-id="' + k.id + '">' + T('save') + '</button><button class="btn sm ghost" data-act="kidDel" data-id="' + k.id + '">' + T('del') + '</button></div></div>';
    }).join('') + '<button class="btn gold" data-act="kidAdd">＋ ' + T('addKid') + '</button>';
  }
  A.kidSave = function (el) { var id = el.dataset.id; ['name:n', 'age:a', 'tier:t', 'avatar:v'].forEach(function (p) { p = p.split(':'); var v = val(p[1] + '-' + id); S.set(['kids', id, p[0]], p[0] === 'age' ? +v || 0 : v); }); toast('✓'); };
  A.kidDel = function (el) { if (confirm(T('del') + '?')) S.del(['kids', el.dataset.id]); };
  A.kidAdd = function () { S.set(['kids', 'k' + C.uid()], { name: h.lang() ? 'Leader' : 'قائد', age: 6, tier: 'mid', avatar: '🌟', order: C.kids().length }); };

  function settingsTab() {
    var f = fam(), c = f.city || {}, off = f.offsets || {};
    var cities = '<option value="">—</option>' + C.CITIES.map(function (x, i) { return '<option value="' + i + '"' + (x[0] === c.name ? ' selected' : '') + '>' + x[0] + '</option>'; }).join('');
    var methods = Object.keys(C.METHODS).map(function (m) { return '<option value="' + m + '"' + (m === (f.method || 'MWL') ? ' selected' : '') + '>' + L(C.METHODS[m].n) + '</option>'; }).join('');
    var offs = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'].map(function (k) { return '<label>' + L(C.I18N.prayers[k]) + '<input type="number" data-k="off-' + k + '" value="' + (off[k] || 0) + '"></label>'; }).join('');
    return '<div class="card"><div class="form"><label>' + T('familyName') + '<input type="text" data-k="fname" value="' + esc(f.name || '') + '" maxlength="30"></label><label>' + T('motto') + '<input type="text" data-k="motto" value="' + esc(f.motto || '') + '" maxlength="80"></label>' +
      '<label>' + T('startDate') + '<input type="date" data-k="start" value="' + esc(f.start || '') + '"></label><label>' + T('pin') + '<input type="password" inputmode="numeric" data-k="newpin" placeholder="••••" maxlength="8" autocomplete="new-password"></label></div></div>' +
      '<h2>🕌 ' + T('city') + '</h2><div class="card"><div class="form"><label>' + T('city') + '<select data-k="city">' + cities + '</select></label><label>Lat<input type="number" step="0.0001" data-k="lat" value="' + (c.lat != null ? c.lat : '') + '"></label><label>Lng<input type="number" step="0.0001" data-k="lng" value="' + (c.lng != null ? c.lng : '') + '"></label>' +
      '<label>' + T('method') + '<select data-k="method">' + methods + '</select></label><label>' + T('asrHanafi') + '<select data-k="hanafi"><option value="0">' + L(['لا', 'No']) + '</option><option value="1"' + (f.hanafi ? ' selected' : '') + '>' + L(['نعم', 'Yes']) + '</option></select></label></div>' +
      '<div class="row" style="margin:.6rem 0"><button class="btn sm ghost" data-act="gps">📍 ' + T('useGps') + '</button></div><p class="muted">' + T('timesNote') + '</p><h3 style="margin-top:.6rem">' + T('offsets') + '</h3><div class="form" style="grid-template-columns:repeat(5,1fr)">' + offs + '</div></div>' +
      '<h2>💰 ' + T('rewards') + '</h2><div class="card"><div class="form"><label>' + T('starValue') + '<input type="number" data-k="sv" value="' + (f.starValue != null ? f.starValue : 2) + '" min="0" step="0.5"></label><label>' + T('sadaqaPct') + '<input type="number" data-k="sp" value="' + (f.sadaqaPct != null ? f.sadaqaPct : 20) + '" min="0" max="100"></label></div><label style="margin-top:.6rem">' + T('causes') + '<textarea data-k="causes" rows="3">' + esc(f.causes || '') + '</textarea></label></div>' +
      '<div class="row" style="margin-top:1rem"><button class="btn" data-act="setSave">' + T('save') + '</button><button class="btn ghost" data-act="lang">🌐 ' + T('lang') + '</button><button class="btn red sp" data-act="wipe">' + T('reset') + '</button></div>';
  }
  A.setSave = function () {
    var f = fam(), ci = val('city'), lat = val('lat'), lng = val('lng');
    var preset = ci !== '' ? C.CITIES[+ci] : null, cur = f.city || {};
    var city = preset && preset[0] !== cur.name ? { name: preset[0], lat: preset[1], lng: preset[2] } : { name: cur.name || '', lat: +lat, lng: +lng };
    var off = {}; ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'].forEach(function (k) { off[k] = +val('off-' + k) || 0; });
    var patch = { name: val('fname'), motto: val('motto'), start: val('start'), city: city, method: val('method'), hanafi: val('hanafi') === '1', offsets: off, starValue: +val('sv') || 0, sadaqaPct: +val('sp') || 0, causes: val('causes') };
    var np = val('newpin'); if (np) { if (!/^\d{4,8}$/.test(np)) return toast(T('pinSet')); patch.pin = C.pinHash(np); }
    Object.keys(patch).forEach(function (k) { S.set(['family', k], patch[k]); }); toast('✓ ' + T('save'));
  };
  A.gps = function () {
    if (!navigator.geolocation) return toast('📍 ✕');
    navigator.geolocation.getCurrentPosition(function (p) { S.set(['family', 'city'], { name: h.lang() ? 'My location' : 'موقعي', lat: +p.coords.latitude.toFixed(4), lng: +p.coords.longitude.toFixed(4) }); toast('📍 ✓'); }, function () { toast('📍 ✕'); });
  };
  A.wipe = function () { if (confirm(T('reset') + '?')) { S.wipe(); location.hash = '#/home'; } };

  function syncTab() {
    var ar = !h.lang(), status = S.sync === 'on' ? '<span class="pill g">☁️ ' + T('syncOn') + '</span>' : S.sync === 'error' ? '<span class="pill r">⚠️ ' + T('syncErr') + '</span>' : '<span class="pill o">📱 ' + T('syncOff') + '</span>';
    return '<div class="card"><p>' + status + '</p><div style="margin-top:.7rem">' + (S.canSync() ? h.authForm() : '<p class="muted">Firebase ✕</p>') + '</div></div>' +
      '<h2>📺 ' + T('tv') + '</h2><div class="card"><p>' + T('install') + ': <b dir="ltr">' + esc(location.origin + location.pathname) + '#/tv</b></p></div>' +
      '<h2>🛠️ ' + (ar ? 'تفعيل المزامنة (مرة واحدة)' : 'Enable sync (one time)') + '</h2><div class="card"><ol style="padding-inline-start:1.2rem;line-height:2">' +
      (ar ? '<li>انشر قواعد Firestore المحدّثة: <code dir="ltr">firebase deploy --only firestore:rules</code></li><li>سجّل الدخول هنا بحساب موقعك (أو أنشئ حسابًا للأسرة).</li><li>على كل جهاز آخر: افتح المعسكر وسجّل الدخول بالحساب نفسه؛ فتُحمَّل بيانات الأسرة تلقائيًا.</li>'
        : '<li>Deploy the updated Firestore rules: <code dir="ltr">firebase deploy --only firestore:rules</code></li><li>Sign in here with your site account (or create a family account).</li><li>On every other device: open the camp and sign in with the same account; the family data loads automatically.</li>') + '</ol></div>';
  }

  V.parent = function () {
    var tab = view.ptab || 'approvals', tabs = [['approvals', '✅'], ['requests', '🎁'], ['kids', '🧒'], ['settings', '⚙️'], ['sync', '☁️']];
    var body = tab === 'approvals' ? approvalsTab() : tab === 'requests' ? requestsTab() : tab === 'kids' ? kidsTab() : tab === 'settings' ? settingsTab() : syncTab();
    var nReq = Object.keys(st().red || {}).filter(function (i) { return st().red[i].st === 'p'; }).length + Object.keys(st().bank || {}).filter(function (i) { return st().bank[i].st === 'p'; }).length;
    return '<div class="shell" style="grid-template-columns:1fr"><main class="main"><div class="row"><h1>🔓 ' + T('parent') + '</h1><a class="btn ghost sm sp" href="#/who">' + T('back') + '</a></div>' +
      '<div class="seg">' + tabs.map(function (t) { return '<button class="' + (t[0] === tab ? 'on' : '') + '" data-act="ptab" data-id="' + t[0] + '">' + t[1] + ' ' + T(t[0]) + (t[0] === 'requests' && nReq ? ' (' + N(nReq) + ')' : '') + '</button>'; }).join('') + '</div>' + body + '</main></div>';
  };
  A.ptab = function (el) { view.ptab = el.dataset.id; C.render(); };

  C.boot();
})();
