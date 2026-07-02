/* ════════════════════════════════════════════════════════════════
   functions/index.js — secure cloud Text-to-Speech for the website.

   WHAT IT DOES
   • Receives { text, lang } from the site.
   • Returns an MP3 URL of that text spoken in a natural Google voice.
   • CACHES every clip in Firebase Storage keyed by a hash of text+lang,
     so each sentence is generated ONCE — replays are free.
   • The Google credentials live ONLY here on the server, never in the
     browser. Safe.

   COST CONTROL
   • Hard cap of 800 chars per request (a story paragraph).
   • Because clips are cached, your monthly character usage stays tiny —
     almost certainly inside Google's free tier.

   VOICES (natural "Neural2/Wavenet")
   • Arabic  : ar-XA-Wavenet-B (warm male)   — swap to -A/-C/-D if preferred
   • English : en-US-Neural2-C (clear female)
   ════════════════════════════════════════════════════════════════ */
const { onRequest, onCall, HttpsError } = require('firebase-functions/v2/https');
const admin = require('firebase-admin');
const crypto = require('crypto');
const tts = require('@google-cloud/text-to-speech');

admin.initializeApp();
const client = new tts.TextToSpeechClient();

/* Consistent natural narrator on every device (laptop/phone/tablet).
   Arabic: ar-XA-Wavenet-D (gentle, clear female). pitch 0 = normal.
   Raise pitch for younger, lower for deeper. */
const VOICES = {
  ar: {
    female: { languageCode: 'ar-XA', name: 'ar-XA-Wavenet-D', pitch: 0, rate: 0.98 },
    male:   { languageCode: 'ar-XA', name: 'ar-XA-Wavenet-C', pitch: 0, rate: 0.98 },
  },
  en: {
    female: { languageCode: 'en-US', name: 'en-US-Neural2-F', pitch: 0, rate: 1.0 },
    male:   { languageCode: 'en-US', name: 'en-US-Neural2-D', pitch: 0, rate: 1.0 },
  },
};
const MAX = 800;

exports.narrate = onRequest(
  { cors: true, region: 'us-central1', memory: '256MiB', timeoutSeconds: 30 },
  async (req, res) => {
    try {
      const text = String((req.body && req.body.text) || req.query.text || '').trim().slice(0, MAX);
      const lang = ((req.body && req.body.lang) || req.query.lang || 'ar').toLowerCase().indexOf('ar') === 0 ? 'ar' : 'en';
      const gender = (((req.body && req.body.gender) || req.query.gender || 'female') + '').toLowerCase() === 'male' ? 'male' : 'female';
      if (!text) { res.status(400).json({ error: 'no text' }); return; }

      const bucket = admin.storage().bucket();
      const v = VOICES[lang][gender];
      const hash = crypto.createHash('sha1').update(v.name + '|' + v.pitch + '|' + lang + '|' + gender + '|' + text).digest('hex');
      const path = `tts/${lang}/${hash}.mp3`;
      const file = bucket.file(path);

      // Cache hit → return the existing public URL.
      const [exists] = await file.exists();
      if (!exists) {
        const [resp] = await client.synthesizeSpeech({
          input: { text },
          voice: { languageCode: v.languageCode, name: v.name },
          audioConfig: { audioEncoding: 'MP3', speakingRate: v.rate, pitch: v.pitch },
        });
        await file.save(Buffer.from(resp.audioContent, 'base64'), {
          metadata: { contentType: 'audio/mpeg', cacheControl: 'public, max-age=31536000, immutable' },
        });
        await file.makePublic();
      }
      const url = `https://storage.googleapis.com/${bucket.name}/${path}`;
      res.set('Cache-Control', 'public, max-age=3600');
      res.json({ url, cached: exists });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'tts-failed' });
    }
  }
);

/* ════════════════════════════════════════════════════════════════
   adminReport — secure activity report for the site owner only.
   Callable from the admin dashboard. Verifies the caller's email,
   then uses the Admin SDK to read EVERYTHING (bypassing client rules):
   members, posts+comments, challenges+joins, private progress, and
   abuse reports. Returns one JSON summary the dashboard renders.
   ════════════════════════════════════════════════════════════════ */
const ADMIN_EMAIL = 'bassamomda91@gmail.com';

exports.adminReport = onCall(
  { region: 'us-central1', memory: '512MiB', timeoutSeconds: 120 },
  async (req) => {
    // ── Auth gate: signed in AND the owner's email ──
    const auth = req.auth;
    if (!auth) throw new HttpsError('unauthenticated', 'Sign in required.');
    if ((auth.token.email || '').toLowerCase() !== ADMIN_EMAIL) {
      throw new HttpsError('permission-denied', 'Admins only.');
    }

    const db = admin.firestore();
    const ms = (t) => (t && t.toMillis ? t.toMillis() : (typeof t === 'number' ? t : null));
    const DAY = 86400000, now = Date.now();

    // ── Pull every collection in parallel ──
    const [usersSnap, postsSnap, commentsSnap, challengesSnap, joinsSnap, progressSnap, reportsSnap] =
      await Promise.all([
        db.collection('users').get(),
        db.collection('posts').get(),
        db.collectionGroup('comments').get(),
        db.collection('challenges').get(),
        db.collectionGroup('items').get(),     // joins/{uid}/items/{id}
        db.collection('progress').get(),
        db.collection('reports').get(),
      ]);

    // ── Member directory ──
    const members = {};
    usersSnap.forEach((d) => {
      const u = d.data() || {};
      members[d.id] = {
        uid: d.id,
        name: u.name || u.displayName || 'بدون اسم',
        avatar: u.avatar || u.photoURL || '',
        joinedMs: ms(u.createdAt) || ms(u.joinedAt) || null,
        posts: 0, comments: 0, likesGiven: 0, likesReceived: 0, challengesJoined: 0,
        // seed activity from the family's own "last seen" heartbeat (site opens)
        lastActiveMs: ms(u.lastSeen) || null,
      };
    });
    const touch = (uid, t) => {
      const m = members[uid]; if (!m || !t) return;
      if (!m.lastActiveMs || t > m.lastActiveMs) m.lastActiveMs = t;
    };

    // ── Posts ──
    let totalLikes = 0;
    const postsTimeline = {}; // dayKey -> count
    postsSnap.forEach((d) => {
      const p = d.data() || {};
      const t = ms(p.at) || ms(p.createdAt) || ms(p.ts);
      const likes = Array.isArray(p.likes) ? p.likes.length : (typeof p.likes === 'number' ? p.likes : 0);
      totalLikes += likes;
      if (members[p.uid]) { members[p.uid].posts++; members[p.uid].likesReceived += likes; touch(p.uid, t); }
      if (Array.isArray(p.likes)) p.likes.forEach((luid) => { if (members[luid]) members[luid].likesGiven++; });
      if (t) { const k = new Date(t).toISOString().slice(0, 10); postsTimeline[k] = (postsTimeline[k] || 0) + 1; }
    });

    // ── Comments ──
    commentsSnap.forEach((d) => {
      const c = d.data() || {};
      const t = ms(c.at) || ms(c.createdAt) || ms(c.ts);
      if (members[c.uid]) { members[c.uid].comments++; touch(c.uid, t); }
    });

    // ── Challenge participation ──
    joinsSnap.forEach((d) => {
      const j = d.data() || {};
      const uid = d.ref.parent.parent && d.ref.parent.parent.id;
      if (members[uid]) { members[uid].challengesJoined++; touch(uid, ms(j.at) || ms(j.createdAt) || ms(j.updatedAt)); }
    });

    // ── Challenge creators (making a challenge counts as activity) ──
    challengesSnap.forEach((d) => {
      const ch = d.data() || {};
      const uid = ch.byUid || ch.uid;
      if (members[uid]) touch(uid, ms(ch.createdAt) || ms(ch.at));
    });

    // ── Private learning progress (admin-only visibility) ──
    let progressWithData = 0;
    progressSnap.forEach((d) => {
      const p = d.data() || {};
      const keys = Object.keys(p);
      if (keys.length) progressWithData++;
      const t = ms(p.at) || ms(p.updatedAt) || ms(p.lastSeen);
      if (t) touch(d.id, t);
    });

    // ── Abuse reports / problems ──
    const reports = [];
    reportsSnap.forEach((d) => {
      const r = d.data() || {};
      reports.push({
        id: d.id,
        reason: r.reason || r.type || 'بلاغ',
        note: r.note || r.text || '',
        targetType: r.targetType || (r.postId ? 'post' : ''),
        targetId: r.postId || r.targetId || '',
        byUid: r.uid || '',
        byName: (members[r.uid] && members[r.uid].name) || '',
        createdMs: ms(r.createdAt) || ms(r.ts) || null,
      });
    });
    reports.sort((a, b) => (b.createdMs || 0) - (a.createdMs || 0));

    // ── Derive activity buckets & leaderboard ──
    const memberList = Object.values(members);
    const score = (m) => m.posts * 3 + m.comments * 2 + m.likesGiven + m.challengesJoined;
    const active7 = memberList.filter((m) => m.lastActiveMs && now - m.lastActiveMs <= 7 * DAY).length;
    const active30 = memberList.filter((m) => m.lastActiveMs && now - m.lastActiveMs <= 30 * DAY).length;
    const topContributors = [...memberList].sort((a, b) => score(b) - score(a)).slice(0, 25)
      .map((m) => ({ ...m, score: score(m) }));

    return {
      generatedMs: now,
      totals: {
        members: usersSnap.size,
        posts: postsSnap.size,
        comments: commentsSnap.size,
        likes: totalLikes,
        challenges: challengesSnap.size,
        challengeJoins: joinsSnap.size,
        learnersWithProgress: progressWithData,
        openReports: reports.length,
        active7, active30,
        silent: memberList.filter((m) => !m.lastActiveMs).length,
      },
      topContributors,
      postsTimeline,   // { 'YYYY-MM-DD': count }
      reports,
    };
  }
);
