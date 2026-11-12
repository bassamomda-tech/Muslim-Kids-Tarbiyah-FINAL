/* ════════════════════════════════════════════════════════════════
   mk-voice.js — «سجّل صوتي»: the child records their own recitation and hears it back.
   • The recording stays on this device (in memory) unless a PARENT chooses to share it.
   • Sharing = parent signed in + the parent question (MKGate) + a consent tick → uploaded as
     «بانتظار المراجعة». It appears in «أصوات الصغار» (voices.html) for everyone ONLY after the
     admin approves it. The parent can delete it at any time from «تسجيلاتي».
   Usage: MKVoiceRec.mount(element, { kind:'ayah'|'dua'|'dhikr', ref:'[الإخلاص: ١]', text:'…', lang:'ar'|'en' })
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (window.MKVoiceRec) return;
  var MAX_S = 60;
  function L() { try { return localStorage.getItem('bunyanLang') === 'en' ? 'en' : 'ar'; } catch (e) { return 'ar'; } }
  function T(a, e) { return L() === 'en' ? e : a; }
  function css() {
    if (document.getElementById('mkvr-css')) return;
    var s = document.createElement('style'); s.id = 'mkvr-css';
    s.textContent = '.mkvr{margin-top:.8rem;border:1.5px dashed rgba(245,204,90,.5);border-radius:1rem;padding:.7rem .8rem;text-align:center}' +
      '.mkvr b{display:block;font-size:.98rem;margin-bottom:.4rem}' +
      '.mkvr .row{display:flex;gap:.5rem;flex-wrap:wrap;justify-content:center;align-items:center}' +
      '.mkvr button,.mkvr a.bt{min-height:48px;padding:0 1rem;border-radius:999px;border:1.5px solid rgba(245,204,90,.45);background:rgba(255,255,255,.08);color:inherit;font:900 .95rem inherit;font-family:inherit;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:.3rem}' +
      '.mkvr button.rec{background:#C0392B;border-color:#C0392B;color:#fff}' +
      '.mkvr button.go{background:linear-gradient(135deg,#3BB36D,#1F7A44);border:none;color:#fff}' +
      '.mkvr audio{width:100%;max-width:340px;margin:.5rem auto 0;display:block}' +
      '.mkvr .msg{margin-top:.5rem;font-weight:800;line-height:1.6;font-size:.92rem}' +
      '.mkvr .consent{display:flex;gap:.5rem;align-items:flex-start;text-align:start;margin:.6rem 0;font-weight:700;line-height:1.6;font-size:.92rem}' +
      '.mkvr .consent input{width:24px;height:24px;flex:0 0 auto;margin-top:.15rem}';
    (document.head || document.documentElement).appendChild(s);
  }
  /* sharing needs the account layer; pages like «يومي» load it only when a parent taps «شارك» */
  var ME = (document.currentScript && document.currentScript.src) || '', cloudP = null;
  function here(f) { return ME ? ME.replace(/mk-voice\.js.*$/, f) : f; }
  function load(src) { return new Promise(function (res) { var sc = document.createElement('script'); sc.src = src; sc.async = false; sc.onload = sc.onerror = function () { res(); }; document.head.appendChild(sc); }); }
  function ensureCloud() {
    if (cloudP) return cloudP;
    var V = 'https://www.gstatic.com/firebasejs/10.12.5/', fb = window.firebase, steps = [];
    if (!fb || !fb.initializeApp) steps.push(V + 'firebase-app-compat.js');
    if (!fb || !fb.auth) steps.push(V + 'firebase-auth-compat.js');
    if (!fb || !fb.firestore) steps.push(V + 'firebase-firestore-compat.js');
    if (!fb || !fb.storage) steps.push(V + 'firebase-storage-compat.js');
    if (!window.firebaseConfig) steps.push(here('firebase-config.js'));
    if (!window.MKAuth) steps.push(here('mk-auth.js'));
    if (!window.MKAuth || !window.MKAuth.isLive || !window.MKAuth.isLive()) steps.push(here('mk-firebase.js'));
    cloudP = steps.reduce(function (p, src) { return p.then(function () { return load(src); }); }, Promise.resolve());
    return cloudP;
  }
  function mime() {
    var c = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus'];
    for (var i = 0; i < c.length; i++) if (window.MediaRecorder && MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(c[i])) return c[i];
    return '';
  }
  function mount(el, meta) {
    if (!el) return; css(); meta = meta || {};
    var blob = null, url = null, rec = null, stream = null, timer = null, secs = 0, state = 'idle', shared = false;
    function stopStream() { try { stream && stream.getTracks().forEach(function (t) { t.stop(); }); } catch (e) {} stream = null; }
    function paint(msg) {
      var h = '<b>🎙️ ' + (meta.title || T('سجّل صوتك وأنت تقرأ', 'Record yourself reading')) + '</b><div class="row">';
      if (state === 'rec') h += '<button class="rec" data-a="stop">⏹ ' + T('أوقف التسجيل', 'Stop') + ' · ' + secs + '</button>';
      else h += '<button data-a="rec">' + (blob ? '🔁 ' + T('سجّل من جديد', 'Record again') : '🎙️ ' + T('ابدأ التسجيل', 'Start recording')) + '</button>';
      if (blob && state !== 'rec' && !shared) h += '<button class="go" data-a="share">🤝 ' + T('شارك في «أصوات الصغار»', 'Share in «Little Voices»') + '</button>';
      h += '<a class="bt" href="' + (meta.galleryHref || 'voices.html') + '">🎧 ' + T('أصوات الصغار', 'Little Voices') + '</a></div>';
      if (blob && state !== 'rec') h += '<audio controls src="' + url + '"></audio>';
      if (state === 'consent') h += '<label class="consent"><input type="checkbox" id="mkvrOk"><span>' +
        T('أنا وليُّ الأمر، وأوافق على نشر هذا التسجيل بالاسم الأوّل لطفلي فقط في صفحة «أصوات الصغار» بعد مراجعة المشرف. أعلم أنّي أستطيع حذفه في أيّ وقت من «تسجيلاتي».',
          'I am the parent, and I agree to publish this recording with my child\'s first name only on the «Little Voices» page after the admin reviews it. I know I can delete it at any time from «My recordings».') +
        '</span></label><div class="row"><button class="go" data-a="send">⬆️ ' + T('أرسل للمراجعة', 'Send for review') + '</button><button data-a="cancel">' + T('إلغاء', 'Cancel') + '</button></div>';
      h += '<div class="msg" aria-live="polite">' + (msg || (blob ? T('🔒 تسجيلك على هذا الجهاز فقط، ولا يراه أحد إلا إذا شاركه أحد والديك.', '🔒 Your recording is on this device only — nobody hears it unless a parent shares it.') : (meta.hint || T('اقرأ بصوتٍ واضح وهدوء، ثم استمع إلى نفسك.', 'Read clearly and calmly, then listen to yourself.')))) + '</div>';
      el.className = 'mkvr'; el.innerHTML = h;
      el.querySelectorAll('[data-a]').forEach(function (b) { b.onclick = function () { act(b.getAttribute('data-a')); }; });
    }
    function start() {
      if (!navigator.mediaDevices || !window.MediaRecorder) return paint(T('التسجيل غير متاح في هذا المتصفّح.', 'Recording is not available in this browser.'));
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (st) {
        stream = st; var chunks = [], m = mime();
        try { rec = m ? new MediaRecorder(st, { mimeType: m, audioBitsPerSecond: 48000 }) : new MediaRecorder(st); } catch (e) { rec = new MediaRecorder(st); }
        rec.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
        rec.onstop = function () {
          clearInterval(timer); stopStream(); state = 'idle';
          blob = new Blob(chunks, { type: rec.mimeType || m || 'audio/webm' });
          if (url) try { URL.revokeObjectURL(url); } catch (e) {}
          url = URL.createObjectURL(blob); shared = false; paint();
          try { window.dispatchEvent(new CustomEvent('mk-voice-recorded', { detail: meta })); } catch (e) {}
        };
        try { if (window.MKTTS) MKTTS.stop(); } catch (e) {}
        rec.start(); state = 'rec'; secs = 0; paint();
        timer = setInterval(function () { secs++; var b = el.querySelector('[data-a="stop"]'); if (b) b.textContent = '⏹ ' + T('أوقف التسجيل', 'Stop') + ' · ' + secs; if (secs >= MAX_S) act('stop'); }, 1000);
      }).catch(function () { paint(T('لم نستطع فتح الميكروفون. اسمح للموقع باستخدامه من إعدادات المتصفّح.', 'We could not open the microphone. Allow the site to use it in your browser settings.')); });
    }
    function act(a) {
      if (a === 'rec') return start();
      if (a === 'stop') { try { rec && rec.state !== 'inactive' && rec.stop(); } catch (e) {} return; }
      if (a === 'cancel') { state = 'idle'; return paint(); }
      if (a === 'share') {
        if (!window.MKAuth || !MKAuth.isLive || !MKAuth.isLive() || !(window.firebase && firebase.storage)) {
          if (!act.tried) { act.tried = true; paint(T('⏳ لحظة…', '⏳ One moment…')); return ensureCloud().then(function () { act('share'); }); }
        }
        if (!window.MKAuth || !MKAuth.isLive || !MKAuth.isLive()) return paint(T('المشاركة تحتاج الاتصال بالإنترنت وحسابَ أحد الوالدين.', 'Sharing needs an internet connection and a parent account.'));
        var ask = function () { state = 'consent'; paint(); };
        var go = function () { if (window.MKGate && MKGate.ask) MKGate.ask(ask, T('المشاركة يوافق عليها أحد الوالدين', 'Sharing needs a parent\'s permission')); else ask(); };
        if (MKAuth.user()) return go();
        return MKAuth.refresh().then(function (u) { if (u) go(); else paint(T('ليشارك أحد والديك التسجيل، عليه أن يسجّل الدخول أوّلًا: ', 'For a parent to share the recording, they need to sign in first: ') + '<a class="bt" href="' + (meta.accountHref || 'account.html') + '">' + T('تسجيل الدخول', 'Sign in') + '</a>'); })
          .catch(function () { paint(T('تعذّر التحقّق من الحساب. حاول لاحقًا.', 'Could not check the account. Try again later.')); });
      }
      if (a === 'send') {
        var ok = el.querySelector('#mkvrOk'); if (!ok || !ok.checked) { var m = el.querySelector('.msg'); if (m) m.textContent = T('ضع علامة الموافقة أوّلًا.', 'Tick the consent box first.'); return; }
        if (blob.size > 2.8 * 1024 * 1024) { state = 'idle'; return paint(T('التسجيل طويل. سجّل دقيقةً أو أقل.', 'The recording is too long. Record one minute or less.')); }
        var prof = (window.MK && MK.activeProfile && MK.activeProfile()) || null;
        state = 'idle'; paint(T('⏳ جارٍ الإرسال…', '⏳ Sending…'));
        MKAuth.voiceUpload(blob, { kid: prof ? String(prof.name).split(/\s+/)[0] : '', avatar: prof && prof.avatar, kind: meta.kind, ref: meta.ref, text: meta.text },
          function (p) { var m2 = el.querySelector('.msg'); if (m2) m2.textContent = T('⏳ جارٍ الإرسال… ', '⏳ Sending… ') + p + '%'; })
          .then(function () { shared = true; paint(T('✅ أُرسل! سيظهر في «أصوات الصغار» بعد أن يراجعه المشرف، إن شاء الله.', '✅ Sent! It will appear in «Little Voices» after the admin reviews it, insha\'Allah.')); })
          .catch(function () { paint(T('تعذّر الإرسال الآن. حاول مرّةً أخرى لاحقًا.', 'Could not send right now. Please try again later.')); });
      }
    }
    paint();
  }
  window.MKVoiceRec = { mount: mount, MAX_S: MAX_S };
})();
