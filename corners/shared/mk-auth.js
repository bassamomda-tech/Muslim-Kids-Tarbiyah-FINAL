/* ════════════════════════════════════════════════════════════════
   mk-auth.js — Account + Community service layer (BACKEND-READY).

   Today it runs fully offline on localStorage so every screen works.
   To go live, implement ONE adapter (Firebase / Supabase / your API)
   with the same method names and set  MKAuth.use(YourAdapter)  — no
   UI changes needed. Every method returns a Promise, exactly like a
   real network call, so the UI is already async-correct.

   Swap points are marked   // ☁️ BACKEND:  throughout.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ---------- tiny helpers ---------- */
  function jget(k, d) { try { var v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }
  function jset(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function uid() { return 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function now() { return Date.now(); }
  function delay(v) { return new Promise(function (res) { setTimeout(function () { res(v); }, 120); }); } // mimic latency
  /* hash a password locally (NOT secure — backend will replace this) */
  function hash(s) { var h = 0; s = String(s); for (var i = 0; i < s.length; i++) { h = (h << 5) - h + s.charCodeAt(i); h |= 0; } return 'h' + h; }

  /* ════════════════════════════════════════════════════════════════
     LOCAL ADAPTER — the default offline implementation.
     Replace each body with real calls to ship a live backend.
     ════════════════════════════════════════════════════════════════ */
  var LocalAdapter = {
    name: 'local',
    K: { users: 'mkauth:users', session: 'mkauth:session', chal: 'mkcomm:challenges', posts: 'mkcomm:posts', joins: 'mkcomm:joins', blocks: 'mkcomm:blocks', reports: 'mkcomm:reports' },

    /* --- AUTH --- */
    register: function (data) {
      // ☁️ BACKEND: createUserWithEmailAndPassword(...) then write profile
      var users = jget(this.K.users, {});
      var email = String(data.email || '').trim().toLowerCase();
      if (!email || !data.password) return Promise.reject(new Error('missing'));
      if (users[email]) return Promise.reject(new Error('exists'));
      var u = { id: uid(), email: email, name: (data.name || '').trim() || email.split('@')[0],
                role: data.role || 'parent', pass: hash(data.password), createdAt: now(), avatar: data.avatar || '🧑' };
      users[email] = u; jset(this.K.users, users);
      localStorage.setItem(this.K.session, u.id + '|' + email);
      return delay(publicUser(u));
    },
    login: function (data) {
      // ☁️ BACKEND: signInWithEmailAndPassword(...)
      var users = jget(this.K.users, {});
      var email = String(data.email || '').trim().toLowerCase();
      var u = users[email];
      if (!u || u.pass !== hash(data.password)) return Promise.reject(new Error('badcreds'));
      localStorage.setItem(this.K.session, u.id + '|' + email);
      return delay(publicUser(u));
    },
    logout: function () { try { localStorage.removeItem(this.K.session); } catch (e) {} return delay(true); },
    current: function () {
      // ☁️ BACKEND: onAuthStateChanged → return current user
      var s = localStorage.getItem(this.K.session); if (!s) return delay(null);
      var email = s.split('|')[1]; var u = jget(this.K.users, {})[email];
      return delay(u ? publicUser(u) : null);
    },
    updateProfile: function (patch) {
      var s = localStorage.getItem(this.K.session); if (!s) return Promise.reject(new Error('noauth'));
      var email = s.split('|')[1]; var users = jget(this.K.users, {}); var u = users[email];
      if (!u) return Promise.reject(new Error('noauth'));
      ['name', 'avatar', 'role'].forEach(function (k) { if (patch[k] != null) u[k] = patch[k]; });
      jset(this.K.users, users); return delay(publicUser(u));
    },

    /* --- CLOUD PROGRESS SYNC (per signed-in account) --- */
    saveProgress: function (snapshot) {
      // ☁️ BACKEND: db.collection('progress').doc(uid).set(snapshot)
      var s = localStorage.getItem(this.K.session); if (!s) return Promise.reject(new Error('noauth'));
      jset('mkcloud:' + s.split('|')[0], { at: now(), data: snapshot }); return delay(true);
    },
    loadProgress: function () {
      // ☁️ BACKEND: db.collection('progress').doc(uid).get()
      var s = localStorage.getItem(this.K.session); if (!s) return delay(null);
      return delay(jget('mkcloud:' + s.split('|')[0], null));
    },

    /* --- COMMUNITY: challenges --- */
    listChallenges: function () {
      // ☁️ BACKEND: db.collection('challenges').orderBy('createdAt','desc').get()
      var c = jget(this.K.chal, null);
      if (!c) { c = SEED_CHALLENGES.slice(); jset(this.K.chal, c); }
      var joins = jget(this.K.joins, {});
      c.forEach(function (ch) { ch.joined = !!joins[ch.id]; ch.myProgress = joins[ch.id] ? joins[ch.id].progress : 0; });
      return delay(c);
    },
    joinChallenge: function (id) {
      // ☁️ BACKEND: db.collection('joins').add({uid, challengeId})
      var joins = jget(this.K.joins, {}); if (!joins[id]) joins[id] = { progress: 0, at: now() }; jset(this.K.joins, joins);
      bump(this.K.chal, id, 'members', 1); return delay(true);
    },
    setChallengeProgress: function (id, progress) {
      var joins = jget(this.K.joins, {}); if (!joins[id]) joins[id] = { at: now() }; joins[id].progress = progress; jset(this.K.joins, joins);
      return delay(true);
    },
    createChallenge: function (ch) {
      // ☁️ BACKEND: db.collection('challenges').add(ch)
      var c = jget(this.K.chal, SEED_CHALLENGES.slice());
      var who = (MKAuth._user && MKAuth._user.name) || 'ضيف';
      c.unshift({ id: uid(), icon: ch.icon || '🎯', title: ch.title, desc: ch.desc, days: ch.days || 7, members: 1, by: who, createdAt: now(), mine: true });
      jset(this.K.chal, c); return delay(true);
    },

    /* --- COMMUNITY: discussion posts --- */
    listPosts: function () {
      var p = jget(this.K.posts, null);
      if (!p) { p = SEED_POSTS.slice(); jset(this.K.posts, p); }
      var b = jget(this.K.blocks, []);
      if (b && b.length) p = p.filter(function (x) { return b.indexOf(x.uid) < 0 && b.indexOf(x.who) < 0; });
      return delay(p);
    },
    addPost: function (text) {
      // ☁️ BACKEND: db.collection('posts').add({uid, text, createdAt})
      var p = jget(this.K.posts, SEED_POSTS.slice());
      var who = (MKAuth._user && MKAuth._user.name) || 'ضيف';
      var av = (MKAuth._user && MKAuth._user.avatar) || '🧑';
      p.unshift({ id: uid(), who: who, avatar: av, text: String(text).slice(0, 600), at: now(), likes: 0, mine: true });
      jset(this.K.posts, p); return delay(true);
    },
    likePost: function (id) { bump(this.K.posts, id, 'likes', 1); return delay(true); },
    reportPost: function (id, reason) {
      // ☁️ BACKEND: db.collection('reports').add({postId,reason,by,at})
      var r = jget(this.K.reports, []); r.push({ id: id, reason: reason || '', at: now() }); jset(this.K.reports, r); return delay(true);
    },
    blockUser: function (who, buid) {
      var b = jget(this.K.blocks, []); var key = buid || who; if (key && b.indexOf(key) < 0) b.push(key); jset(this.K.blocks, b); return delay(true);
    },
    getBlocked: function () { return delay(jget(this.K.blocks, [])); },
  };

  function publicUser(u) { return { id: u.id, email: u.email, name: u.name, role: u.role, avatar: u.avatar, createdAt: u.createdAt }; }
  function bump(key, id, field, n) { var a = jget(key, []); a.forEach(function (x) { if (x.id === id) x[field] = (x[field] || 0) + n; }); jset(key, a); }

  /* seed community content so the screens look alive offline */
  var SEED_CHALLENGES = [
    { id: 'fajr7', icon: '🌅', title: { ar: 'تحدّي الفجر ٧ أيّام', en: '7-Day Fajr Challenge' }, desc: { ar: 'حافِظ على صلاة الفجر في وقتها أسبوعاً كاملاً.', en: 'Keep Fajr on time for a full week.' }, days: 7, members: 128, by: 'فريق الموقع', createdAt: now() },
    { id: 'mulk', icon: '📖', title: { ar: 'حفظ سورة المُلك', en: 'Memorize Surah al-Mulk' }, desc: { ar: 'احفظ سورة الملك آيةً كلَّ يوم.', en: 'Memorize Surah al-Mulk, an ayah a day.' }, days: 30, members: 86, by: 'فريق الموقع', createdAt: now() },
    { id: 'adhkar', icon: '📿', title: { ar: 'أذكار الصباح والمساء', en: 'Morning & Evening Adhkar' }, desc: { ar: 'داوِم على الأذكار صباحاً ومساءً ١٤ يوماً.', en: 'Keep the morning & evening adhkar for 14 days.' }, days: 14, members: 203, by: 'فريق الموقع', createdAt: now() },
    { id: 'kind', icon: '💚', title: { ar: 'لطفٌ كلَّ يوم', en: 'A Kindness Each Day' }, desc: { ar: 'اعمل معروفاً واحداً كلَّ يوم لِأهلِك أو جيرانِك.', en: 'Do one act of kindness daily for family or neighbors.' }, days: 10, members: 152, by: 'فريق الموقع', createdAt: now() },
  ];
  var SEED_POSTS = [
    { id: 'p1', who: 'أمُّ عبدالله', avatar: '🧕', text: 'تجربتي مع تحدّي الفجر رائعة — طفلي صار يوقظني! شاركوني تجاربكم.', at: now() - 86400000, likes: 12 },
    { id: 'p2', who: 'أبو يوسف', avatar: '🧔', text: 'برنامج التعامل مع الغضب غيّر بيتنا. الأسبوع الثالث كان نقطة التحوّل.', at: now() - 43200000, likes: 9 },
    { id: 'p3', who: 'أمُّ مريم', avatar: '👩', text: 'هل من نصائح لتحبيب الصلاة لطفلة عمرها ٦ سنوات؟ جزاكم الله خيراً.', at: now() - 7200000, likes: 5 },
  ];

  /* ════════════════════════════════════════════════════════════════
     PUBLIC API — the UI only ever talks to MKAuth.*  (adapter-agnostic)
     ════════════════════════════════════════════════════════════════ */
  var adapter = LocalAdapter;
  var MKAuth = {
    _user: null,
    backend: function () { return adapter.name; },
    use: function (a) { adapter = a; },                 // ☁️ BACKEND: MKAuth.use(FirebaseAdapter)
    isLive: function () { return adapter.name !== 'local'; },

    register: function (d) { var s = this; return adapter.register(d).then(function (u) { s._user = u; emit(); return u; }); },
    login: function (d) { var s = this; return adapter.login(d).then(function (u) { s._user = u; emit(); return u; }); },
    logout: function () { var s = this; return adapter.logout().then(function () { s._user = null; emit(); return true; }); },
    refresh: function () { var s = this; return adapter.current().then(function (u) { s._user = u; emit(); return u; }); },
    updateProfile: function (p) { var s = this; return adapter.updateProfile(p).then(function (u) { s._user = u; emit(); return u; }); },
    user: function () { return this._user; },

    saveProgress: function (snap) { return adapter.saveProgress(snap); },
    loadProgress: function () { return adapter.loadProgress(); },

    listChallenges: function () { return adapter.listChallenges(); },
    joinChallenge: function (id) { return adapter.joinChallenge(id); },
    setChallengeProgress: function (id, p) { return adapter.setChallengeProgress(id, p); },
    createChallenge: function (c) { return adapter.createChallenge(c); },

    listPosts: function () { return adapter.listPosts(); },
    addPost: function (t) { return adapter.addPost(t); },
    likePost: function (id) { return adapter.likePost(id); },
    reportPost: function (id, reason) { return adapter.reportPost ? adapter.reportPost(id, reason) : Promise.resolve(true); },
    blockUser: function (who, uid) { return adapter.blockUser ? adapter.blockUser(who, uid) : Promise.resolve(true); },
    getBlocked: function () { return adapter.getBlocked ? adapter.getBlocked() : Promise.resolve([]); },

    /* simple change subscription so headers/badges update on login/logout */
    _subs: [],
    onChange: function (fn) { this._subs.push(fn); return fn; },
  };
  function emit() { MKAuth._subs.forEach(function (fn) { try { fn(MKAuth._user); } catch (e) {} }); }

  window.MKAuth = MKAuth;
  // hydrate current session on load
  MKAuth.refresh();
})();
