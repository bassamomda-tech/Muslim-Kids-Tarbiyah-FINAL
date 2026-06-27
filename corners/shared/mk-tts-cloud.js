/* ════════════════════════════════════════════════════════════════
   mk-tts-cloud.js — client bridge to the cloud-TTS Cloud Function.

   Exposes window.MKTTS:
     MKTTS.enabled          → true once an endpoint is configured
     MKTTS.speak(text,lang) → plays natural cloud audio; returns a
                              Promise. Rejects if unavailable so the
                              caller can fall back to browser voices.
     MKTTS.stop()           → stops playback.

   SETUP: after deploying the function, set ONE line in firebase-config.js
   (or anywhere before this script):
       window.MK_TTS_ENDPOINT = 'https://us-central1-<your-project>.cloudfunctions.net/narrate';
   If that global is absent, MKTTS.enabled = false and the site silently
   uses the built-in browser voices (today's behaviour). Zero breakage.
   ════════════════════════════════════════════════════════════════ */
(function () {
  var EP = window.MK_TTS_ENDPOINT || '';
  var audio = null, memo = {};

  function stop() {
    if (audio) { try { audio.pause(); } catch (e) {} audio = null; }
  }

  function fetchUrl(text, lang) {
    var key = lang + '|' + text;
    if (memo[key]) return Promise.resolve(memo[key]);
    return fetch(EP, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text, lang: lang }),
    }).then(function (r) {
      if (!r.ok) throw new Error('tts http ' + r.status);
      return r.json();
    }).then(function (j) {
      if (!j || !j.url) throw new Error('tts no url');
      memo[key] = j.url;
      return j.url;
    });
  }

  function speak(text, lang) {
    if (!EP) return Promise.reject(new Error('no endpoint'));
    lang = (lang || 'ar').toLowerCase().indexOf('ar') === 0 ? 'ar' : 'en';
    text = String(text || '').trim().slice(0, 800);
    if (!text) return Promise.reject(new Error('no text'));
    stop();
    return fetchUrl(text, lang).then(function (url) {
      return new Promise(function (res, rej) {
        audio = new Audio(url);
        audio.onended = function () { res(true); };
        audio.onerror = function () { rej(new Error('audio error')); };
        audio.play().catch(rej);
      });
    });
  }

  window.MKTTS = { get enabled() { return !!EP; }, speak: speak, stop: stop };
})();
