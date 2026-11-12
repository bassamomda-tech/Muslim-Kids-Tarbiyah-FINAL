/* معسكر القادة — المخزن: حالة الأسرة، الحفظ المحلي، والمزامنة الحية عبر Firestore.
   مستند واحد لكل حساب: camp/{uid}. كل التعديلات تُرسل بدمج عميق حتى لا يكتب جهاز فوق جهاز. */
(function () {
  'use strict';
  var C = window.CAMP = window.CAMP || {};
  var LS = 'camp-state-v1';
  var S = C.S = { state: null, user: null, sync: 'local', listeners: [] };

  function blank() { return { family: {}, kids: {}, log: {}, adj: {}, red: {}, bank: {}, pass: {}, goals: {}, prop: {}, rec: {}, prefs: {} }; }
  function load() { try { return Object.assign(blank(), JSON.parse(localStorage.getItem(LS)) || {}); } catch (e) { return blank(); } }
  function persist() { try { localStorage.setItem(LS, JSON.stringify(S.state)); } catch (e) {} }
  S.state = load();

  function emit() { S.listeners.forEach(function (f) { try { f(); } catch (e) { console.error(e); } }); }
  S.on = function (f) { S.listeners.push(f); };

  function nest(path, val) { var o = {}, cur = o; path.forEach(function (k, i) { cur[k] = i === path.length - 1 ? val : {}; cur = cur[k]; }); return o; }
  function setLocal(path, val) {
    var cur = S.state;
    for (var i = 0; i < path.length - 1; i++) { if (typeof cur[path[i]] !== 'object' || cur[path[i]] === null) cur[path[i]] = {}; cur = cur[path[i]]; }
    if (val === undefined) delete cur[path[path.length - 1]]; else cur[path[path.length - 1]] = val;
  }

  var db = null, ref = null, unsub = null, bucket = null;
  function fail(e) { console.warn('camp sync', e && e.code, e && e.message); S.sync = 'error'; emit(); }

  /* تعديل قيمة عند مسار، محليًا ثم سحابيًا */
  S.set = function (path, val) {
    setLocal(path, val); persist(); emit();
    if (ref) ref.set(nest(path, val), { merge: true }).catch(fail);
  };
  S.del = function (path) {
    setLocal(path, undefined); persist(); emit();
    if (ref) { var u = {}; u[path.join('.')] = firebase.firestore.FieldValue.delete(); ref.update(u).catch(fail); }
  };
  S.wipe = function () {
    Object.keys(S.state.rec || {}).forEach(function (id) { S.fileDel(id); });
    S.state = blank(); persist(); if (ref) ref.set(blank()).catch(fail); emit();
  };

  /* ── ملفات التسجيلات على Firebase Storage: camp/{uid}/rec/{id} ── */
  function fref(id) { return bucket.ref('camp/' + S.user.uid + '/rec/' + id); }
  S.canStore = function () { return !!(bucket && S.user); };
  S.upload = function (id, blob) { return fref(id).put(blob, { contentType: blob.type || 'audio/webm' }); };
  S.fileUrl = function (id) { return fref(id).getDownloadURL(); };
  S.fileDel = function (id) { if (S.canStore()) fref(id).delete().catch(function () {}); };

  /* ── الحساب والمزامنة ── */
  function attach(user) {
    if (unsub) { unsub(); unsub = null; }
    S.user = user; ref = null;
    if (!user) { S.sync = 'local'; emit(); return; }
    ref = db.collection('camp').doc(user.uid);
    S.sync = 'connecting'; emit();
    var first = true;
    unsub = ref.onSnapshot(function (snap) {
      if (first) {
        first = false;
        if (!snap.exists) {             // حساب جديد على السحابة: نرفع ما على هذا الجهاز
          ref.set(S.state).catch(fail); S.sync = 'on'; emit(); return;
        }
      }
      if (snap.exists) { S.state = Object.assign(blank(), snap.data()); persist(); }
      S.sync = 'on'; emit();
    }, fail);
  }
  S.init = function () {
    try {
      if (!window.firebase || !window.firebaseConfig) return;
      if (!firebase.apps.length) firebase.initializeApp(window.firebaseConfig);
      db = firebase.firestore();
      try { if (firebase.storage) bucket = firebase.storage(); } catch (e) { console.warn('camp: storage unavailable', e); }
      firebase.auth().onAuthStateChanged(attach);
    } catch (e) { console.warn('camp: firebase unavailable', e); }
  };
  S.signIn = function (email, pass) { return firebase.auth().signInWithEmailAndPassword(email, pass); };
  S.signUp = function (email, pass) { return firebase.auth().createUserWithEmailAndPassword(email, pass); };
  S.signOut = function () { return firebase.auth().signOut(); };
  S.canSync = function () { return !!(window.firebase && window.firebaseConfig); };

  /* ── أدوات ── */
  C.uid = function () { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); };
  C.dkey = function (d) { d = d || new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  C.kids = function () {
    var k = S.state.kids || {};
    return Object.keys(k).map(function (id) { return Object.assign({ id: id }, k[id]); }).sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
  };
  C.kid = function (id) { var k = (S.state.kids || {})[id]; return k ? Object.assign({ id: id }, k) : null; };
  C.missionsFor = function (kid, date) {
    var wd = (date || new Date()).getDay();
    return (C.MISSIONS[kid.tier] || []).filter(function (m) { return m.days.indexOf(wd) >= 0; });
  };
  function mstars(tier, mid) { var l = C.MISSIONS[tier] || []; for (var i = 0; i < l.length; i++) if (l[i].id === mid) return l[i].s; return 0; }

  /* إحصاءات القائد: المجموع، الرصيد، نجوم اليوم، المعلّق، الأيام المتتالية */
  C.stats = function (kidId) {
    var st = S.state, kid = C.kid(kidId) || {}, life = 0, spent = 0, today = 0, pend = 0, tk = C.dkey();
    Object.keys(st.log || {}).forEach(function (d) {
      var day = (st.log[d] || {})[kidId] || {};
      Object.keys(day).forEach(function (mid) {
        var e = day[mid]; if (!e) return;
        if (e.s === 'a') { var n = mstars(kid.tier, mid); life += n; if (d === tk) today += n; }
        else if (e.s === 'p') pend++;
      });
    });
    Object.keys(st.adj || {}).forEach(function (id) { var a = st.adj[id]; if (a && a.k === kidId) { if (a.amt > 0) life += a.amt; else spent += -a.amt; } });
    Object.keys(st.red || {}).forEach(function (id) { var r = st.red[id]; if (r && r.k === kidId && r.st !== 'r') spent += r.cost; });
    var money = 0, sadaqa = 0;
    Object.keys(st.bank || {}).forEach(function (id) { var b = st.bank[id]; if (b && b.k === kidId && b.st !== 'r') { spent += b.stars; if (b.st === 'g') { money += b.money; sadaqa += b.sadaqa; } } });
    var streak = 0, d = new Date();
    for (var i = 0; i < 400; i++) {
      var day = ((st.log || {})[C.dkey(d)] || {})[kidId];
      var has = day && Object.keys(day).some(function (m) { return day[m] && (day[m].s === 'a' || day[m].s === 'p'); });
      if (has) streak++; else if (i > 0) break;
      d.setDate(d.getDate() - 1);
    }
    return { life: life, balance: life - spent, today: today, pending: pend, streak: streak, money: money, sadaqa: sadaqa };
  };
  C.rankOf = function (life) {
    var R = C.RANKS, i = 0; while (i + 1 < R.length && life >= R[i + 1].at) i++;
    var next = R[i + 1] || null;
    return { i: i, rank: R[i], next: next, pct: next ? Math.min(100, Math.round((life - R[i].at) / (next.at - R[i].at) * 100)) : 100, left: next ? next.at - life : 0 };
  };
  /* الأسبوع الحالي من خطة الـ٢٤ أسبوعًا */
  C.weekNow = function () {
    var s = (S.state.family || {}).start, idx = 0;
    if (s) { var a = new Date(s + 'T00:00:00'), diff = Math.floor((new Date() - a) / 864e5); if (diff > 0) idx = Math.floor(diff / 7) % 24; }
    return idx;
  };
  C.pinHash = function (p) { var h = 7; p = 'camp:' + p; for (var i = 0; i < p.length; i++) { h = (h * 31 + p.charCodeAt(i)) | 0; } return 'p' + h; };

  /* ── استوديو التسجيل: نسخة محلية في IndexedDB (تُرفع إلى السحابة عند تسجيل الدخول) ── */
  var idb = null;
  function odb() {
    return new Promise(function (res, rej) {
      if (idb) return res(idb);
      var rq = indexedDB.open('camp-rec', 1);
      rq.onupgradeneeded = function () { rq.result.createObjectStore('rec', { keyPath: 'id' }); };
      rq.onsuccess = function () { idb = rq.result; res(idb); }; rq.onerror = function () { rej(rq.error); };
    });
  }
  function tx(mode, fn) { return odb().then(function (d) { return new Promise(function (res, rej) { var t = d.transaction('rec', mode), r = fn(t.objectStore('rec')); t.oncomplete = function () { res(r && r.result); }; t.onerror = function () { rej(t.error); }; }); }); }
  C.rec = {
    add: function (o) { return tx('readwrite', function (s) { return s.put(o); }); },
    put: function (o) { return tx('readwrite', function (s) { return s.put(o); }); },
    all: function () { return tx('readonly', function (s) { return s.getAll(); }); },
    del: function (id) { return tx('readwrite', function (s) { return s.delete(id); }); }
  };
})();
