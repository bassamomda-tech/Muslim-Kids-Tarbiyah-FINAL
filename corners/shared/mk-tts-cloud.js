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
  if (window.MKTTS) return;                        // loaded once (mk-system.js or mk-a11y.js)
  var EP = window.MK_TTS_ENDPOINT || 'https://narrate-ltyvjxcneq-uc.a.run.app';
  var audio = null, memo = {}, pending = {}, gen = 0;
  var ME = (document.currentScript && document.currentScript.src) || '';

  // Narrator gender per corner: a page sets window.MK_NARRATOR_GENDER='male'
  // (default 'female' = the current voice). Used for both lang voices.
  function gender() { return (window.MK_NARRATOR_GENDER === 'male') ? 'male' : 'female'; }

  function stop() {
    gen++;
    if (audio) { try { audio.pause(); } catch (e) {} audio = null; }
    if (qvTimer) { clearInterval(qvTimer); qvTimer = null; }
  }

  /* ═══ Quran verses → Sheikh Al-Husary ═══════════════════════════
     Any quote between ﴿ ﴾ that is in quran-verse-map.js is played from
     Al-Husary's real recitation (everyayah.com, Husary 64kbps — the file
     quran.com's word timings belong to), never read by a synthetic voice.
     A partial quote plays only its words; the text around it is narrated
     as usual. Unknown quotes fall back to the normal voice. */
  var QV_AUDIO = 'https://everyayah.com/data/Husary_64kbps/';
  var qvMap = null, qvWait = null, qvTimer = null;
  function qvLoad() {
    if (qvMap) return Promise.resolve(qvMap);
    if (window.MK_QV_MAP) return Promise.resolve(qvMap = window.MK_QV_MAP);
    return qvWait || (qvWait = new Promise(function (res) {
      var sc = document.createElement('script');
      sc.src = ME ? ME.replace(/mk-tts-cloud\.js.*$/, 'quran-verse-map.js') : 'corners/shared/quran-verse-map.js';
      sc.onload = function () { res(qvMap = window.MK_QV_MAP || {}); };
      sc.onerror = function () { res(qvMap = {}); };
      setTimeout(function () { if (!qvMap) res(qvMap = window.MK_QV_MAP || {}); }, 6000);
      (document.head || document.documentElement).appendChild(sc);
    }));
  }
  function qvNorm(t) {
    return String(t).replace(/<[^>]*>/g, '')
      .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED\u0640\u08D3-\u08FF]/g, '')
      .replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه').replace(/ؤ/g, 'و').replace(/ئ/g, 'ي')
      .replace(/[^\u0621-\u064A]/g, '').replace(/[اء]/g, '');
  }
  function qvHash(n) {
    var b = unescape(encodeURIComponent(n)), h = 0x811c9dc5;
    for (var i = 0; i < b.length; i++) { h ^= b.charCodeAt(i); h = Math.imul(h, 0x01000193); }
    return (h >>> 0).toString(16);
  }
  /* text → [{t:'narration'}, {v:{s,a1,a2,t0,t1}, t:'quote text'}, ...] */
  function qvSplit(text) {
    var out = [], last = 0, m, re = /﴿([^﴾]*)﴾/g;
    function txt(x) { if (/[\u0600-\u06FFA-Za-z0-9]/.test(x)) out.push({ t: x.trim() }); }
    while ((m = re.exec(text))) {
      var n = qvNorm(m[1]), r = n.length >= 6 && qvMap[qvHash(n)];
      var p = r && /^(\d+):(\d+)(?:-(\d+))?(?:@(\d+))?(?:~(\d+))?$/.exec(r);
      if (!p) continue;                                  // unknown quote: stays in the narration
      txt(text.slice(last, m.index)); last = re.lastIndex;
      out.push({ t: m[1], v: { s: +p[1], a1: +p[2], a2: +(p[3] || p[2]), t0: +(p[4] || 0), t1: +(p[5] || 0) } });
    }
    if (!out.length) return null;
    txt(text.slice(last));
    return out;
  }
  function pad3(x) { return ('00' + x).slice(-3); }
  function qvUrl(s, a) { return QV_AUDIO + pad3(s) + pad3(a) + '.mp3'; }
  function playAyah(url, t0, t1, my) {
    return new Promise(function (res, rej) {
      if (my !== gen) return;
      var el = new Audio(url), done = false;
      function fin() { if (done) return; done = true; if (qvTimer) { clearInterval(qvTimer); qvTimer = null; } try { el.pause(); } catch (e) {} res(true); }
      audio = el; el.preload = 'auto';
      el.onended = fin;
      el.onerror = function () { if (!done) { done = true; rej(new Error('verse audio')); } };
      if (t0) el.addEventListener('loadedmetadata', function () { try { el.currentTime = t0 / 1000; } catch (e) {} }, { once: true });
      if (t1) qvTimer = setInterval(function () { if (my !== gen) { clearInterval(qvTimer); qvTimer = null; return; } if (el.currentTime * 1000 >= t1) fin(); }, 60);
      el.play().catch(function (e) { if (!done) { done = true; rej(e); } });
      /* slow network: if the recitation hasn't started after 9 s, read the words instead */
      setTimeout(function () { if (!done && my === gen && !(el.currentTime > (t0 / 1000) + 0.05)) { done = true; try { el.pause(); } catch (e) {} rej(new Error('verse stall')); } }, 9000);
    });
  }
  function playVerse(v, my) {
    var a = v.a1, chain = Promise.resolve();
    for (var i = v.a1; i <= v.a2; i++) (function (i) {
      chain = chain.then(function () {
        if (my !== gen) return new Promise(function () {});
        if (i < v.a2) { try { var pre = new Audio(); pre.preload = 'auto'; pre.src = qvUrl(v.s, i + 1); } catch (e) {} }
        return playAyah(qvUrl(v.s, i), i === v.a1 ? v.t0 : 0, i === v.a2 ? v.t1 : 0, my);
      });
    })(i);
    return chain;
  }
  /* browser voice for one piece (used when the cloud voice is unreachable) */
  function browserSay(text, lang, my) {
    return new Promise(function (res) {
      var SS = window.speechSynthesis; if (!SS || my !== gen) return res(true);
      var u = new SpeechSynthesisUtterance(window.MKVoice ? MKVoice.fixText(text) : text);
      u.lang = lang === 'en' ? 'en-US' : 'ar-SA';
      try { if (window.MKVoice) MKVoice.applyGender(u, text, lang, window.MK_VOICE_GENDER); } catch (e) {}
      u.onend = u.onerror = function () { res(true); };
      (SS.__mkOrigSpeak || SS.speak).call(SS, u);
    });
  }
  function runParts(parts, lang, opt, my) {
    var chain = Promise.resolve();
    parts.forEach(function (p, k) {
      chain = chain.then(function () {
        if (my !== gen) return new Promise(function () {});
        var nx = parts[k + 1];
        if (nx && !nx.v) prefetch(nx.t, lang, opt);
        if (p.v) return playVerse(p.v, my).catch(function () { return say(p.t); });
        return say(p.t);
      });
    });
    function say(t) {
      return playClip(t, lang, opt, my).catch(function () { return browserSay(t, lang, my); });
    }
    return chain;
  }

  /* style = how the server's voice reads: 'story' (default, calm storyteller), 'podcast' (friendly talk), 'ui' */
  function fetchUrl(text, lang, opt) {
    opt = opt || {};
    var g = opt.gender || gender(), st = opt.style || window.MK_TTS_STYLE || 'story';
    var key = lang + '|' + g + '|' + st + '|' + text;
    if (memo[key]) return Promise.resolve(memo[key]);
    if (pending[key]) return pending[key];
    return (pending[key] = fetch(EP, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text, lang: lang, gender: g, style: st }),
    }).then(function (r) {
      if (!r.ok) throw new Error('tts http ' + r.status);
      return r.json();
    }).then(function (j) {
      if (!j || !j.url) throw new Error('tts no url');
      memo[key] = j.url; delete pending[key];
      return j.url;
    }, function (e) { delete pending[key]; throw e; }));
  }
  /* ask the server to prepare a clip now (e.g. the next podcast line while this one plays) */
  function prefetch(text, lang, opt) {
    if (!EP) return;
    lang = (lang || 'ar').toLowerCase().indexOf('ar') === 0 ? 'ar' : 'en';
    text = String(text || '').trim().slice(0, 800); if (!text) return;
    fetchUrl(text, lang, opt).then(function (u) { try { var a = new Audio(); a.preload = 'auto'; a.src = u; } catch (e) {} }, function () {});
  }

  function playClip(text, lang, opt, my) {
    if (!EP) return Promise.reject(new Error('no endpoint'));
    text = String(text || '').trim().slice(0, 800);
    if (!text) return Promise.resolve(true);
    return fetchUrl(text, lang, opt).then(function (url) {
      return new Promise(function (res, rej) {
        if (my !== gen) return;
        audio = new Audio(url);
        audio.onended = function () { res(true); };
        audio.onerror = function () { rej(new Error('audio error')); };
        audio.play().catch(rej);
      });
    });
  }
  function speak(text, lang, opt) {
    lang = (lang || 'ar').toLowerCase().indexOf('ar') === 0 ? 'ar' : 'en';
    text = String(text || '').trim();
    if (!text) return Promise.reject(new Error('no text'));
    stop(); var my = gen;
    if (lang === 'ar' && text.indexOf('﴿') >= 0) {
      return qvLoad().then(function () {
        if (my !== gen) return new Promise(function () {});
        var parts = qvSplit(text);
        return parts ? runParts(parts, lang, opt, my) : playClip(text, lang, opt, my);
      });
    }
    return playClip(text, lang, opt, my);
  }
  /* start fetching the verse map early on pages that show verses */
  setTimeout(function () { try { if (document.body && document.body.textContent.indexOf('﴿') >= 0) qvLoad(); } catch (e) {} }, 1500);

  window.MKTTS = { get enabled() { return !!EP; }, speak: speak, stop: stop, prefetch: prefetch,
                   verseRef: function (t) { return qvLoad().then(function () { var p = qvSplit('﴿' + t + '﴾'); return p && p[0].v; }); } };

  /* ── Global voice unifier ───────────────────────────────────────
     Route EVERY browser speechSynthesis.speak call through the natural
     cloud voice, so all read-aloud features sound identical on every
     device (laptop / phone / tablet). Falls back to the browser voice
     only if the cloud is unavailable. One patch covers all corners. */
  if (EP && typeof window.speechSynthesis !== 'undefined' && !window.__mkSpeechPatched) {
    window.__mkSpeechPatched = true;
    var SS = window.speechSynthesis;
    var origSpeak = SS.speak.bind(SS); SS.__mkOrigSpeak = SS.speak;
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
