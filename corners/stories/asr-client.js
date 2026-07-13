/* asr-client.js — عميل التسميع عبر خادم Cloudflare Worker + Groq Whisper
   ─────────────────────────────────────────────────────────────────────────────
   بعد نشر server/quran-asr-worker.js على Cloudflare، ضع رابط الـ Worker هنا: */
var ASR_ENDPOINT = 'https://quran-asr.bassamomda.workers.dev'; // مثال: 'https://quran-asr.YOURNAME.workers.dev'

/* يسجّل الصوت بمقاطع قصيرة متتالية ويرسل كل مقطع للخادم فور اكتماله.
   الاستخدام:
     var rec = new QuranASRClient({
       onText: function(fullText){...},   // النص المتراكم كله منذ البداية
       onState: function(s){...},         // 'recording' | 'stopped' | 'error'
       onError: function(msg){...}
     });
     rec.start(); rec.stop();
     QuranASRClient.available()  → true إن كان الرابط مضبوطًا والمتصفح يدعم التسجيل
*/
(function () {
  function pickMime() {
    var M = window.MediaRecorder;
    if (!M || !M.isTypeSupported) return '';
    var list = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus'];
    for (var i = 0; i < list.length; i++) { if (M.isTypeSupported(list[i])) return list[i]; }
    return '';
  }

  function QuranASRClient(opts) {
    opts = opts || {};
    this.onText = opts.onText || function () {};
    this.onState = opts.onState || function () {};
    this.onError = opts.onError || function () {};
    this.segMs = opts.segMs || 4000;   // طول المقطع الواحد
    this.getPrompt = opts.getPrompt || null; // دالة تُعيد الآيةَ المتوقَّعة لرفع الدقة
    this.texts = [];                   // نص كل مقطع بترتيبه
    this.pending = 0;
    this.stream = null;
    this.rec = null;
    this.stopped = true;
    this.failCount = 0;
  }

  QuranASRClient.available = function () {
    return !!(ASR_ENDPOINT && window.MediaRecorder && navigator.mediaDevices && navigator.mediaDevices.getUserMedia && pickMime());
  };

  QuranASRClient.prototype.start = function () {
    var self = this;
    if (!QuranASRClient.available()) { self.onError('asr_unavailable'); return; }
    self.stopped = false; self.texts = []; self.failCount = 0;
    navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 }
    }).then(function (stream) {
      if (self.stopped) { stream.getTracks().forEach(function (t) { t.stop(); }); return; }
      self.stream = stream;
      self.onState('recording');
      self._segLoop();
    }).catch(function () { self.onError('mic_denied'); });
  };

  /* يسجل مقطعًا كاملًا مستقلًا (له ترويسة صالحة) ثم يبدأ التالي فورًا */
  QuranASRClient.prototype._segLoop = function () {
    var self = this;
    if (self.stopped || !self.stream) return;
    var mime = pickMime();
    var rec;
    try { rec = new MediaRecorder(self.stream, { mimeType: mime, audioBitsPerSecond: 48000 }); }
    catch (e) { try { rec = new MediaRecorder(self.stream); } catch (e2) { self.onError('rec_failed'); return; } }
    self.rec = rec;
    var chunks = [];
    var idx = self.texts.length;
    self.texts.push(null); // يحجز مكانه بالترتيب
    rec.ondataavailable = function (ev) { if (ev.data && ev.data.size) chunks.push(ev.data); };
    rec.onstop = function () {
      var blob = new Blob(chunks, { type: mime || 'audio/webm' });
      self._send(blob, idx);
      if (!self.stopped) self._segLoop();
    };
    try { rec.start(); } catch (e) { self.onError('rec_failed'); return; }
    setTimeout(function () { try { if (rec.state !== 'inactive') rec.stop(); } catch (e) {} }, self.segMs);
  };

  QuranASRClient.prototype._send = function (blob, idx) {
    var self = this;
    if (blob.size < 2000) { self.texts[idx] = ''; self._emit(); return; } // صمت
    self.pending++;
    var ctrl = (typeof AbortController !== 'undefined') ? new AbortController() : null;
    var to = setTimeout(function () { if (ctrl) ctrl.abort(); }, 25000);
    var url = ASR_ENDPOINT;
    if (self.getPrompt) { try { var _p = self.getPrompt(); if (_p) url += (url.indexOf('?') < 0 ? '?' : '&') + 'prompt=' + encodeURIComponent(String(_p).slice(0, 700)); } catch (e) {} }
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': blob.type || 'audio/webm' },
      body: blob,
      signal: ctrl ? ctrl.signal : undefined
    }).then(function (r) { return r.json(); })
      .then(function (j) {
        self.texts[idx] = (j && j.text) ? j.text : '';
        self.failCount = 0;
        self._emit();
      })
      .catch(function () {
        self.texts[idx] = '';
        self.failCount++;
        if (self.failCount >= 3) self.onError('server_down'); // ليعود المتصل لمحرك المتصفح
      })
      .finally(function () { clearTimeout(to); self.pending--; if (self.stopped && self.pending === 0) self.onState('stopped'); });
  };

  QuranASRClient.prototype._emit = function () {
    var done = [];
    for (var i = 0; i < this.texts.length; i++) { if (this.texts[i] === null) break; done.push(this.texts[i]); }
    this.onText(done.join(' '));
  };

  QuranASRClient.prototype.stop = function () {
    this.stopped = true;
    try { if (this.rec && this.rec.state !== 'inactive') this.rec.stop(); } catch (e) {}
    this.rec = null;
    try { if (this.stream) this.stream.getTracks().forEach(function (t) { t.stop(); }); } catch (e) {}
    this.stream = null;
    if (this.pending === 0) this.onState('stopped');
  };

  window.QuranASRClient = QuranASRClient;
})();
