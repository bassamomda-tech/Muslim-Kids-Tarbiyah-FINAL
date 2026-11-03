/* ════════════════════════════════════════════════════════════════
   functions/index.js — secure cloud narration for the website.

   WHAT IT DOES
   • Receives { text, lang, gender, style } from the site.
   • Returns an MP3 URL of that text read aloud.
   • VOICE: Gemini text-to-speech (natural, warm, follows a style
     instruction such as "a calm storyteller for children"). If Gemini is
     not set up or fails, it falls back to the Google Cloud TTS voices, so
     the site never goes silent.
   • CACHES every clip in Firebase Storage keyed by a hash of
     voice+style+text, so each sentence is generated ONCE — replays are free.
   • The API key lives ONLY here on the server (a Firebase secret), never in
     the browser.

   SETUP (once): see functions/README.md → «Gemini voice».
     firebase functions:secrets:set GEMINI_API_KEY      (paste the AI Studio key)
     firebase deploy --only functions
   Optional settings (functions/.env): GEMINI_TTS_MODEL, GEMINI_VOICE_AR_F,
     GEMINI_VOICE_AR_M, GEMINI_VOICE_EN_F, GEMINI_VOICE_EN_M,
     TTS_DAILY_NEW (new clips/day, default 3000), TTS_IP_HOURLY (per visitor/hour, default 200)
   ════════════════════════════════════════════════════════════════ */
const { onRequest, onCall, HttpsError } = require('firebase-functions/v2/https');
const { defineSecret } = require('firebase-functions/params');
const admin = require('firebase-admin');
const crypto = require('crypto');
const tts = require('@google-cloud/text-to-speech');

admin.initializeApp();
const client = new tts.TextToSpeechClient();
const GEMINI_API_KEY = defineSecret('GEMINI_API_KEY');

/* Gemini voices (multilingual — they speak Arabic). Change in functions/.env to taste:
   warm/gentle female: Sulafat · Vindemiatrix · Achernar · Aoede     friendly male: Achird · Sadaltager · Iapetus · Charon */
const G = {
  model: process.env.GEMINI_TTS_MODEL || 'gemini-2.5-flash-preview-tts',
  ar: { female: process.env.GEMINI_VOICE_AR_F || 'Sulafat', male: process.env.GEMINI_VOICE_AR_M || 'Achird' },
  en: { female: process.env.GEMINI_VOICE_EN_F || 'Sulafat', male: process.env.GEMINI_VOICE_EN_M || 'Achird' },
};
/* How to read — an instruction to the voice model, it is not spoken */
const STYLE = {
  ar: {
    story:   'اقرأ النصّ التالي بالعربية الفصحى بصوتٍ دافئٍ هادئٍ حنون، كراوٍ يحكي قصّةً لطفلٍ قبل النوم، بنطقٍ واضحٍ صحيح ووقفاتٍ طبيعية، دون مبالغة:',
    podcast: 'اقرأ هذه الجملة بالعربية الفصحى بصوتٍ طبيعيٍّ ودود، كأنّك تتحدّث مع طفلٍ في حلقة بودكاست هادئة، بنطقٍ واضح وإيقاعٍ مريح:',
    ui:      'اقرأ بالعربية الفصحى بصوتٍ لطيفٍ واضحٍ هادئ:',
  },
  en: {
    story:   'Read the following in a warm, calm, gentle voice, like a storyteller reading to a child at bedtime, with clear pronunciation and natural pauses:',
    podcast: 'Say this in a natural, friendly voice, as if talking with a child in a calm podcast episode:',
    ui:      'Read this in a kind, clear, calm voice:',
  },
};
/* Arabic = Modern Standard Arabic (الفصحى) ONLY — never Egyptian or any other dialect.
   Said in English too, because the voice model follows English instructions most reliably. */
const FUSHA = 'Speak in Modern Standard Arabic (Fusha / العربية الفصحى) with classical pronunciation, exactly as written, including the diacritics. ' +
  'Do NOT use Egyptian or any other dialect or accent: pronounce ج as "j" (not "g"), ق as a true "q" (not a glottal stop), ث and ذ as interdental sounds (not "s"/"t" or "z"/"d"). ' +
  'تكلّم بالعربية الفصحى فقط، بلا لهجةٍ مصرية ولا أيّ لهجةٍ عامّية.';
/* Fallback: Google Cloud TTS (Wavenet / Neural2) */
const VOICES = {
  ar: {
    /* GOOGLE_VOICE_AR_F / _M in functions/.env can pick a newer Modern Standard Arabic voice
       (e.g. a «Chirp3-HD» ar-XA voice from the Cloud Text-to-Speech voice list) */
    female: { languageCode: 'ar-XA', name: process.env.GOOGLE_VOICE_AR_F || 'ar-XA-Wavenet-D', pitch: 0, rate: 0.98 },
    male:   { languageCode: 'ar-XA', name: process.env.GOOGLE_VOICE_AR_M || 'ar-XA-Wavenet-C', pitch: 0, rate: 0.98 },
  },
  en: {
    female: { languageCode: 'en-US', name: 'en-US-Neural2-F', pitch: 0, rate: 1.0 },
    male:   { languageCode: 'en-US', name: 'en-US-Neural2-D', pitch: 0, rate: 1.0 },
  },
};
const MAX = 800;

/* Gemini returns raw 16-bit PCM (24 kHz, mono) → MP3 for small, phone-friendly files */
async function pcmToMp3(pcm, rate) {
  const { Mp3Encoder } = await import('@breezystack/lamejs');
  const enc = new Mp3Encoder(1, rate, 32)   /* 32 kbps mono: speech sounds the same, half the download */, s = new Int16Array(pcm.buffer, pcm.byteOffset, Math.floor(pcm.length / 2)), out = [];
  for (let i = 0; i < s.length; i += 1152) { const b = enc.encodeBuffer(s.subarray(i, i + 1152)); if (b.length) out.push(Buffer.from(b)); }
  const e = enc.flush(); if (e.length) out.push(Buffer.from(e));
  return Buffer.concat(out);
}
async function geminiSpeak(text, lang, gender, style, key) {
  const voice = G[lang][gender], prompt = (lang === 'ar' ? FUSHA + '\n' : '') + (STYLE[lang][style] || STYLE[lang].story) + '\n' + text;
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${G.model}:generateContent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseModalities: ['AUDIO'], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voice } } } },
    }),
  });
  if (!r.ok) throw new Error('gemini http ' + r.status + ' ' + (await r.text()).slice(0, 300));
  const j = await r.json();
  const part = (((j.candidates || [])[0] || {}).content || {}).parts || [];
  const inline = (part.find((p) => p.inlineData) || {}).inlineData;
  if (!inline || !inline.data) throw new Error('gemini: no audio');
  const rate = parseInt(((inline.mimeType || '').match(/rate=(\d+)/) || [])[1], 10) || 24000;
  return { mp3: await pcmToMp3(Buffer.from(inline.data, 'base64'), rate), id: 'gemini|' + G.model + '|' + voice + '|' + style };
}
async function googleSpeak(text, lang, gender) {
  const v = VOICES[lang][gender];
  const [resp] = await client.synthesizeSpeech({
    input: { text },
    voice: { languageCode: v.languageCode, name: v.name },
    audioConfig: /Chirp/i.test(v.name) ? { audioEncoding: 'MP3' } : { audioEncoding: 'MP3', speakingRate: v.rate, pitch: v.pitch },   // Chirp voices take no pitch
  });
  return Buffer.from(resp.audioContent, 'base64');
}

/* ═══ Protection for a public, busy site ═══════════════════════════════
   Replays of saved clips are always free and unlimited. Only NEW clips cost money, so only
   new clips are limited:
   • TTS_DAILY_NEW   (default 3000) new clips per day for the whole site
   • TTS_IP_HOURLY   (default 200)  new clips per hour from one visitor
   Over a limit the server answers 429 and the website reads with the device's own voice.
   warm-voices.js (run by you in Cloud Shell) proves it is you with a hash of the Gemini key,
   so preparing all the podcasts is not blocked by these limits.
   Counters live in Firestore (collection tts_limits); the website itself cannot read them. */
const DAILY_NEW = parseInt(process.env.TTS_DAILY_NEW || '3000', 10);
const IP_HOURLY = parseInt(process.env.TTS_IP_HOURLY || '200', 10);
function visitor(req) {
  // Google's front end ADDS the real address at the end; anything before it can be faked by the caller
  const ip = String(req.headers['x-forwarded-for'] || req.ip || '').split(',').pop().trim();
  return crypto.createHash('sha256').update('mk|' + ip).digest('hex').slice(0, 24);   // no raw IP is stored
}
async function allowNewClip(req, key) {
  if (key && req.headers['x-mk-warm'] && req.headers['x-mk-warm'] === crypto.createHash('sha256').update('warm|' + key).digest('hex')) return true;
  const db = admin.firestore(), now = new Date();
  const day = now.toISOString().slice(0, 10), hour = now.toISOString().slice(0, 13);
  const dayRef = db.collection('tts_limits').doc('day_' + day);
  const ipRef = db.collection('tts_limits').doc('ip_' + visitor(req) + '_' + hour);
  return db.runTransaction(async (t) => {
    const [d, v] = await Promise.all([t.get(dayRef), t.get(ipRef)]);
    const dn = (d.exists && d.get('n')) || 0, vn = (v.exists && v.get('n')) || 0;
    if (dn >= DAILY_NEW || vn >= IP_HOURLY) return false;
    const exp = admin.firestore.Timestamp.fromMillis(now.getTime() + 3 * 864e5);   // for an optional TTL clean-up policy
    t.set(dayRef, { n: dn + 1, exp }, { merge: true });
    t.set(ipRef, { n: vn + 1, exp }, { merge: true });
    return true;
  });
}

exports.narrate = onRequest(
  { cors: true, region: 'us-central1', memory: '512MiB', timeoutSeconds: 60, secrets: [GEMINI_API_KEY] },
  async (req, res) => {
    try {
      const q = Object.assign({}, req.query, req.body || {});
      const text = String(q.text || '').trim().slice(0, MAX);
      const lang = String(q.lang || 'ar').toLowerCase().indexOf('ar') === 0 ? 'ar' : 'en';
      const gender = String(q.gender || 'female').toLowerCase() === 'male' ? 'male' : 'female';
      const style = ['story', 'podcast', 'ui'].includes(q.style) ? q.style : 'story';
      if (!text) { res.status(400).json({ error: 'no text' }); return; }

      const bucket = admin.storage().bucket();
      /* TTS_ENGINE=google in functions/.env → use the Google voices even when a Gemini key is set */
      const key = (process.env.TTS_ENGINE || '').toLowerCase() === 'google' ? '' : (GEMINI_API_KEY.value() || '').trim();
      // one cache entry per (engine, voice, style, text): switching voices never mixes old clips
      const engineId = key ? 'gemini|fusha1|' + G.model + '|' + G[lang][gender] + '|' + style : VOICES[lang][gender].name + '|' + VOICES[lang][gender].pitch + '|' + lang + '|' + gender;
      const path = `tts/${lang}/${crypto.createHash('sha1').update(engineId + '|' + text).digest('hex')}.mp3`;
      const file = bucket.file(path);

      const [exists] = await file.exists();
      let engine = key ? 'gemini' : 'google';
      if (!exists) {
        let ok = true;
        try { ok = await allowNewClip(req, key); } catch (e) { console.warn('limit check failed (allowing):', e.message); }
        if (!ok) { res.set('Cache-Control', 'no-store'); res.status(429).json({ error: 'limit' }); return; }
        let mp3;
        if (key) {
          try { mp3 = (await geminiSpeak(text, lang, gender, style, key)).mp3; }
          catch (e) { console.warn('gemini failed, using google voice:', e.message); engine = 'google'; }
        }
        if (!mp3) mp3 = await googleSpeak(text, lang, gender);
        // a Google fallback clip is NOT stored under the Gemini name, so Gemini is retried next time
        const savePath = engine === 'gemini' || !key ? path : `tts/${lang}/fallback-${crypto.createHash('sha1').update(VOICES[lang][gender].name + '|' + text).digest('hex')}.mp3`;
        const out = bucket.file(savePath);
        await out.save(mp3, { metadata: { contentType: 'audio/mpeg', cacheControl: 'public, max-age=31536000, immutable' } });
        await out.makePublic();
        res.set('Cache-Control', engine === 'gemini' || !key ? 'public, max-age=3600' : 'no-store');
        res.json({ url: `https://storage.googleapis.com/${bucket.name}/${savePath}`, cached: false, engine });
        return;
      }
      res.set('Cache-Control', 'public, max-age=3600');
      res.json({ url: `https://storage.googleapis.com/${bucket.name}/${path}`, cached: true, engine });
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
