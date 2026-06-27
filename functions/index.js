const { onRequest } = require('firebase-functions/v2/https');
const admin = require('firebase-admin');
const crypto = require('crypto');
const tts = require('@google-cloud/text-to-speech');

admin.initializeApp();
const client = new tts.TextToSpeechClient();

/* Consistent natural narrator on every device (laptop/phone/tablet).
   Arabic: ar-XA-Wavenet-D (gentle, clear female). pitch 0 = normal. */
const VOICES = {
  ar: { languageCode: 'ar-XA', name: 'ar-XA-Wavenet-D', pitch: 0, rate: 0.98 },
  en: { languageCode: 'en-US', name: 'en-US-Neural2-F', pitch: 0, rate: 1.0 },
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
      const v = VOICES[lang];
      const hash = crypto.createHash('sha1').update(v.name + '|' + v.pitch + '|' + lang + '|' + text).digest('hex');
      const path = `tts/${lang}/${hash}.mp3`;
      const file = bucket.file(path);

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