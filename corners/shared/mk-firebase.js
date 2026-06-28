/* ════════════════════════════════════════════════════════════════
   mk-firebase.js — LIVE backend adapter for MKAuth (Firebase).

   Drop-in cloud replacement for the offline LocalAdapter in mk-auth.js.
   Implements the SAME method names, so no UI code changes.

   Self-activating: if the Firebase SDK (compat) and window.firebaseConfig
   are present, it initialises Firebase, registers itself via
   MKAuth.use(...), and re-hydrates the session. If Firebase is missing
   (e.g. a page that didn't load the SDK), it does nothing and the
   offline LocalAdapter keeps working — so every page is safe.

   LOAD ORDER (after the Firebase compat SDK + config + mk-auth.js):
     firebase-app-compat.js
     firebase-auth-compat.js
     firebase-firestore-compat.js
     firebase-config.js        (window.firebaseConfig = {...})
     mk-auth.js                (defines window.MKAuth, default = local)
     mk-firebase.js            (this file — swaps in Firebase)

   FIRESTORE SHAPE:
     users/{uid}        → { name, role, avatar, email, createdAt }
     progress/{uid}     → { at, data }
     challenges/{id}    → { icon, title, desc, days, members, by, createdAt }
     joins/{uid}/items/{challengeId} → { progress, at }
     posts/{id}         → { who, avatar, uid, text, at, likes }
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  if (!window.MKAuth) return;                  // mk-auth.js must load first
  if (!window.firebase || !window.firebaseConfig) return; // page has no SDK → stay offline

  // Initialise once (other pages may already have called initializeApp)
  try {
    if (!firebase.apps || !firebase.apps.length) firebase.initializeApp(window.firebaseConfig);
  } catch (e) { return; } // bad config → keep local adapter

  var auth, db;
  try { auth = firebase.auth(); db = firebase.firestore(); }
  catch (e) { return; }

  function now() { return Date.now(); }
  var ADMIN_EMAILS = ['bassamomda91@gmail.com'];
  function isAdminEmail(e) { return !!e && ADMIN_EMAILS.indexOf(String(e).trim().toLowerCase()) >= 0; }
  function pub(uid, p) {
    p = p || {};
    return { id: uid, email: p.email || '', name: p.name || '', role: p.role || 'parent',
             avatar: p.avatar || '🧑', createdAt: p.createdAt || now(), admin: isAdminEmail(p.email) };
  }
  // Normalise Firebase's verbose error codes to the SAME short codes the UI already handles.
  function mapErr(e) {
    var c = (e && e.code) || '';
    if (c === 'auth/email-already-in-use') return new Error('exists');
    if (c === 'auth/invalid-email')        return new Error('missing');
    if (c === 'auth/missing-password' || c === 'auth/weak-password') return new Error('weakpass');
    if (c === 'auth/user-not-found' || c === 'auth/wrong-password' ||
        c === 'auth/invalid-credential' || c === 'auth/invalid-login-credentials') return new Error('badcreds');
    if (c === 'auth/too-many-requests')    return new Error('toomany');
    if (c === 'auth/network-request-failed') return new Error('network');
    return e instanceof Error ? e : new Error(String(c || 'error'));
  }
  function uidNow() { var u = auth.currentUser; return u ? u.uid : null; }

  var FirebaseAdapter = {
    name: 'firebase',

    /* ---------- AUTH ---------- */
    register: function (data) {
      var email = String(data.email || '').trim().toLowerCase();
      var pass  = String(data.password || '');
      if (!email || !pass) return Promise.reject(new Error('missing'));
      var profile = {
        name: (data.name || '').trim() || email.split('@')[0],
        role: data.role || 'parent',
        avatar: data.avatar || '🧑',
        email: email, createdAt: now()
      };
      return auth.createUserWithEmailAndPassword(email, pass)
        .then(function (cred) {
          var uid = cred.user.uid;
          return db.collection('users').doc(uid).set(profile)
            .then(function () { return pub(uid, profile); });
        })
        .catch(function (e) { return Promise.reject(mapErr(e)); });
    },

    login: function (data) {
      var email = String(data.email || '').trim().toLowerCase();
      var pass  = String(data.password || '');
      if (!email || !pass) return Promise.reject(new Error('missing'));
      return auth.signInWithEmailAndPassword(email, pass)
        .then(function (cred) {
          var uid = cred.user.uid;
          return db.collection('users').doc(uid).get()
            .then(function (snap) { return pub(uid, snap.exists ? snap.data() : { email: email }); });
        })
        .catch(function (e) { return Promise.reject(mapErr(e)); });
    },

    logout: function () { return auth.signOut().then(function () { return true; }); },

    // Resolves once Firebase reports the restored session (handles page reloads).
    current: function () {
      return new Promise(function (res) {
        var off = auth.onAuthStateChanged(function (user) {
          off();
          if (!user) return res(null);
          db.collection('users').doc(user.uid).get()
            .then(function (snap) { res(pub(user.uid, snap.exists ? snap.data() : { email: user.email })); })
            .catch(function () { res(pub(user.uid, { email: user.email })); });
        });
      });
    },

    updateProfile: function (patch) {
      var uid = uidNow();
      if (!uid) return Promise.reject(new Error('noauth'));
      var clean = {};
      ['name', 'avatar', 'role'].forEach(function (k) { if (patch[k] != null) clean[k] = patch[k]; });
      return db.collection('users').doc(uid).set(clean, { merge: true })
        .then(function () { return db.collection('users').doc(uid).get(); })
        .then(function (snap) { return pub(uid, snap.exists ? snap.data() : {}); });
    },

    /* ---------- PROGRESS SYNC ---------- */
    saveProgress: function (snapshot) {
      var uid = uidNow();
      if (!uid) return Promise.reject(new Error('noauth'));
      return db.collection('progress').doc(uid).set({ at: now(), data: snapshot }).then(function () { return true; });
    },
    loadProgress: function () {
      var uid = uidNow();
      if (!uid) return Promise.resolve(null);
      return db.collection('progress').doc(uid).get()
        .then(function (snap) { return snap.exists ? snap.data() : null; });
    },

    /* ---------- COMMUNITY: challenges ---------- */
    listChallenges: function () {
      var uid = uidNow();
      return db.collection('challenges').orderBy('createdAt', 'desc').get()
        .then(function (qs) {
          var list = []; qs.forEach(function (d) { var x = d.data(); x.id = d.id; list.push(x); });
          if (!uid) { list.forEach(function (c) { c.joined = false; c.myProgress = 0; }); return list; }
          return db.collection('joins').doc(uid).collection('items').get()
            .then(function (js) {
              var joins = {}; js.forEach(function (d) { joins[d.id] = d.data(); });
              list.forEach(function (c) { c.joined = !!joins[c.id]; c.myProgress = joins[c.id] ? (joins[c.id].progress || 0) : 0; });
              return list;
            });
        })
        .catch(function () { return []; });
    },
    joinChallenge: function (id) {
      var uid = uidNow(); if (!uid) return Promise.reject(new Error('noauth'));
      return db.collection('joins').doc(uid).collection('items').doc(id)
        .set({ progress: 0, at: now() }, { merge: true })
        .then(function () { return db.collection('challenges').doc(id).update({ members: firebase.firestore.FieldValue.increment(1) }).catch(function(){}); })
        .then(function () { return true; });
    },
    setChallengeProgress: function (id, progress) {
      var uid = uidNow(); if (!uid) return Promise.reject(new Error('noauth'));
      return db.collection('joins').doc(uid).collection('items').doc(id)
        .set({ progress: progress, at: now() }, { merge: true }).then(function () { return true; });
    },
    createChallenge: function (ch) {
      var u = window.MKAuth.user();
      return db.collection('challenges').add({
        icon: ch.icon || '🎯', title: ch.title, desc: ch.desc, days: ch.days || 7,
        members: 1, by: (u && u.name) || 'ضيف', createdAt: now()
      }).then(function () { return true; });
    },

    /* ---------- COMMUNITY: posts ---------- */
    getBlocked: function () {
      var uid = uidNow(); if (!uid) return Promise.resolve([]);
      return db.collection('blocks').doc(uid).get()
        .then(function (s) { return (s.exists && s.data().users) || []; })
        .catch(function () { return []; });
    },
    listPosts: function () {
      return this.getBlocked().then(function (blocked) {
        return db.collection('posts').orderBy('at', 'desc').limit(100).get()
          .then(function (qs) {
            var list = []; qs.forEach(function (d) {
              var x = d.data(); x.id = d.id;
              if (blocked.indexOf(x.uid) < 0 && blocked.indexOf(x.who) < 0) list.push(x);
            });
            list.sort(function (a, c) { return ((c.pinned ? 1 : 0) - (a.pinned ? 1 : 0)) || (c.at - a.at); });
            return list;
          });
      }).catch(function () { return []; });
    },
    addPost: function (text, opts) {
      opts = opts || {};
      var u = window.MKAuth.user();
      var doc = {
        who: (u && u.name) || 'ضيف', avatar: (u && u.avatar) || '🧑',
        uid: uidNow() || '', text: String(text).slice(0, 600), at: now(), likes: 0
      };
      if (u && u.admin && opts.admin) { doc.admin = true; doc.kind = opts.kind || 'announcement'; doc.pinned = true; }
      return db.collection('posts').add(doc).then(function () { return true; });
    },
    likePost: function (id) {
      return db.collection('posts').doc(id).update({ likes: firebase.firestore.FieldValue.increment(1) })
        .then(function () { return true; }).catch(function () { return true; });
    },
    reportPost: function (id, reason) {
      var u = window.MKAuth.user();
      return db.collection('reports').add({
        postId: id, reason: reason || '', by: uidNow() || '', byName: (u && u.name) || '', at: now()
      }).then(function () { return true; }).catch(function () { return true; });
    },
    blockUser: function (who, buid) {
      var uid = uidNow(); if (!uid) return Promise.reject(new Error('noauth'));
      var key = buid || who; if (!key) return Promise.resolve(true);
      return db.collection('blocks').doc(uid)
        .set({ users: firebase.firestore.FieldValue.arrayUnion(key) }, { merge: true })
        .then(function () { return true; });
    },
    listComments: function (postId) {
      return db.collection('posts').doc(postId).collection('comments').orderBy('at', 'asc').limit(200).get()
        .then(function (qs) { var list = []; qs.forEach(function (d) { var x = d.data(); x.id = d.id; list.push(x); }); return list; })
        .catch(function () { return []; });
    },
    addComment: function (postId, text) {
      var u = window.MKAuth.user();
      return db.collection('posts').doc(postId).collection('comments').add({
        who: (u && u.name) || 'ضيف', avatar: (u && u.avatar) || '🧑', uid: uidNow() || '',
        admin: !!(u && u.admin), text: String(text).slice(0, 400), at: now()
      }).then(function () { return true; });
    },
  };

  // Activate the live backend, then re-hydrate the session through it.
  window.MKAuth.use(FirebaseAdapter);
  window.MKAuth.refresh();
})();
