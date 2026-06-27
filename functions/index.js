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
const { onRequest } = require('firebase-functions/v2/https');
const admin = require('firebase-admin');
const crypto = require('crypto');
const tts = require('@google-cloud/text-to-speech');

admin.initializeApp();
const client = new tts.TextToSpeechClient();

const VOICES = {
  ar: { languageCode: 'ar-XA', name: 'ar-XA-Wavenet-B' },
  en: { languageCode: 'en-US', name: 'en-US-Neural2-C' },
};
const MAX = 800;

exports.narrate = onRequest(
  { cors: true, region: 'us-central1', memory: '256MiB', timeoutSeconds: 30 },
  async (req, res) => {
    try {
      const text = String((req.body && req.body.text) || req.query.text || '').trim().slice(0, MAX);
      const lang = ((req.body && req.body.lang) || req.query.lang || 'ar').toLowerCase().indexOf('ar') === 0 ? 'ar' : 'en';
      if (!text) { res.status(400).json({ error: 'no text' }); return; }

      const bucket = admin.storage().bucket();
      const hash = crypto.createHash('sha1').update(lang + '|' + text).digest('hex');
      const path = `tts/${lang}/${hash}.mp3`;
      const file = bucket.file(path);

      // Cache hit → return the existing public URL.
      const [exists] = await file.exists();
      if (!exists) {
        const [resp] = await client.synthesizeSpeech({
          input: { text },
          voice: VOICES[lang],
          audioConfig: { audioEncoding: 'MP3', speakingRate: 0.96, pitch: 0 },
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
