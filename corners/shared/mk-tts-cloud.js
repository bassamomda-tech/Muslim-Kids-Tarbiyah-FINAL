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

  // Narrator gender per corner: a page sets window.MK_NARRATOR_GENDER='male'
  // (default 'female' = the current voice). Used for both lang voices.
  function gender() { return (window.MK_NARRATOR_GENDER === 'male') ? 'male' : 'female'; }

  function stop() {
    if (audio) { try { audio.pause(); } catch (e) {} audio = null; }
  }

  function fetchUrl(text, lang) {
    var g = gender();
    var key = lang + '|' + g + '|' + text;
    if (memo[key]) return Promise.resolve(memo[key]);
    return fetch(EP, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text, lang: lang, gender: g }),
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

  /* ── Global voice unifier ───────────────────────────────────────
     Route EVERY browser speechSynthesis.speak call through the natural
     cloud voice, so all read-aloud features sound identical on every
     device (laptop / phone / tablet). Falls back to the browser voice
     only if the cloud is unavailable. One patch covers all corners. */
  if (EP && typeof window.speechSynthesis !== 'undefined' && !window.__mkSpeechPatched) {
    window.__mkSpeechPatched = true;
    var SS = window.speechSynthesis;
    var origSpeak = SS.speak.bind(SS);
    var origCancel = SS.cancel.bind(SS);
    function uLang(u) {
      var l = (u && u.lang) ? String(u.lang).toLowerCase()
                            : (localStorage.getItem('bunyanLang') || 'ar');
      return l.indexOf('ar') === 0 ? 'ar' : 'en';
    }
    SS.speak = function (u) {
      var txt = '';
      try { txt = (u && u.text) ? String(u.text) : ''; } catch (e) {}
      if (!txt) { return origSpeak(u); }
      speak(txt, uLang(u)).then(function () {
        try { if (u && typeof u.onend === 'function') u.onend({ target: u }); } catch (e) {}
      }).catch(function () {
        try { origSpeak(u); } catch (e) {}
      });
    };
    SS.cancel = function () {
      try { stop(); } catch (e) {}
      try { return origCancel(); } catch (e) {}
    };
  }
})();
