/* ============================================================
   61 · المقرئ الصغير — سجّل تلاوتك واستمع إليها
   MediaRecorder + AnalyserNode للموجة الصوتية
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "كنوز الوحي", en: "Treasures of Revelation" },
    crumbTitle:  { ar: "المقرئ الصغير", en: "Little Reciter" },
    title:       { ar: "المقرئ الصغير", en: "The Little Reciter's Studio" },
    desc:        { ar: "سجّل تلاوتك بصوتك الجميل ثم استمع إليها! اقرأ الآية بتأنٍّ، سجّل، استمع، وحسّن — حتى ترضى عن تلاوتك وتختم القائمة كلها.", en: "Record your recitation in your beautiful voice, then listen back! Read the ayah slowly, record, listen, improve — until you're proud of it, and finish the whole list." },
    recBtn:      { ar: "سجّل تلاوتك", en: "Record" },
    stopBtn:     { ar: "أوقف التسجيل ⏹", en: "Stop ⏹" },
    playBtn:     { ar: "▶ استمع لنفسك", en: "▶ Listen back" },
    doneBtn:     { ar: "أتقنتُها ✓", en: "Mastered it ✓" },
    statDone:    { ar: "آيات أتقنتها", en: "Ayat mastered" },
    sideTitle:   { ar: "أدب التلاوة", en: "The manner of recitation" },
    sideQuote:   { ar: "«زيّنوا القرآن بأصواتكم»", en: "\"Beautify the Quran with your voices\"" },
    sideSrc:     { ar: "رواه أبو داود", en: "Narrated by Abu Dawud" },
    tip:         { ar: "يحتاج هذا النشاط إذن الميكروفون. اقرأ ببطء وبصوت واضح — الاستماع لنفسك أفضل طريقة لتحسين تلاوتك!", en: "This activity needs microphone permission. Read slowly and clearly — listening to yourself is the best way to improve your recitation!" },
    winEyebrow:  { ar: "صوتٌ من الجنة", en: "A heavenly voice" },
    winTitle:    { ar: "ختمتَ قائمة التلاوة!", en: "You finished the recitation list!" },
    winSub:      { ar: "«الماهر بالقرآن مع السفرة الكرام البررة»", en: "\"The one skilled in the Quran will be with the noble scribes\"" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "من جديد", en: "Again" },
    micDenied:   { ar: "لم نستطع الوصول للميكروفون — اسمح به من إعدادات المتصفح", en: "Couldn't access the microphone — allow it in your browser settings" },
    recorded:    { ar: "تم التسجيل! استمع لنفسك الآن", en: "Recorded! Now listen back" },
    recording:   { ar: "جارٍ التسجيل... اقرأ الآية بصوتٍ جميل", en: "Recording... read the ayah beautifully" },
  };

  const TASKS = [
    { ayah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", info: { ar: "الفاتحة · 1", en: "Al-Fatiha · 1" } },
    { ayah: "قُلْ هُوَ اللَّهُ أَحَدٌ", info: { ar: "الإخلاص · 1", en: "Al-Ikhlas · 1" } },
    { ayah: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ", info: { ar: "الكوثر · 1", en: "Al-Kawthar · 1" } },
    { ayah: "وَالْعَصْرِ ۝ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ", info: { ar: "العصر · 1–2", en: "Al-Asr · 1–2" } },
    { ayah: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ", info: { ar: "الناس · 1", en: "An-Nas · 1" } },
  ];

  const $ = (id) => document.getElementById(id);
  const cvs = $("qr-canvas"), ctx2d = cvs.getContext("2d");

  let cur = 0, done = [], recording = false, recorder = null, chunks = [], blobUrl = null;
  let audioCtx = null, analyser = null, vizRaf = null;

  /* ---------- الموجة الصوتية ---------- */
  function drawViz() {
    const data = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteTimeDomainData(data);
    ctx2d.clearRect(0, 0, 600, 72);
    ctx2d.strokeStyle = recording ? "#C0392B" : "#8A6B2E";
    ctx2d.lineWidth = 2.5;
    ctx2d.beginPath();
    for (let i = 0; i < data.length; i += 4) {
      const x = (i / data.length) * 600;
      const y = 36 + ((data[i] - 128) / 128) * 30;
      i === 0 ? ctx2d.moveTo(x, y) : ctx2d.lineTo(x, y);
    }
    ctx2d.stroke();
    vizRaf = requestAnimationFrame(drawViz);
  }
  function stopViz() {
    cancelAnimationFrame(vizRaf);
    ctx2d.clearRect(0, 0, 600, 72);
    ctx2d.strokeStyle = "#D8CBA8";
    ctx2d.beginPath(); ctx2d.moveTo(0, 36); ctx2d.lineTo(600, 36); ctx2d.stroke();
  }

  /* ---------- التسجيل ---------- */
  async function toggleRecord() {
    const L = Lang.current();
    if (recording) { recorder.stop(); return; }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const src = audioCtx.createMediaStreamSource(stream);
      analyser = audioCtx.createAnalyser(); analyser.fftSize = 1024;
      src.connect(analyser);

      chunks = [];
      recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = () => {
        recording = false;
        stream.getTracks().forEach(t => t.stop());
        stopViz();
        if (blobUrl) URL.revokeObjectURL(blobUrl);
        blobUrl = URL.createObjectURL(new Blob(chunks, { type: "audio/webm" }));
        $("qr-rec").classList.remove("recording");
        $("qr-rec-label").textContent = I18N.recBtn[Lang.current()];
        $("qr-play").disabled = false;
        $("qr-done").disabled = false;
        $("qr-feedback").textContent = I18N.recorded[Lang.current()];
        AudioBus.pop();
      };
      recorder.start();
      recording = true;
      $("qr-rec").classList.add("recording");
      $("qr-rec-label").textContent = I18N.stopBtn[L];
      $("qr-feedback").textContent = I18N.recording[L];
      drawViz();
    } catch (e) {
      $("qr-feedback").textContent = I18N.micDenied[L];
    }
  }

  function playBack() {
    if (!blobUrl) return;
    const a = new Audio(blobUrl);
    /* موجة أثناء الاستماع */
    if (audioCtx) {
      const src = audioCtx.createMediaElementSource(a);
      analyser = audioCtx.createAnalyser(); analyser.fftSize = 1024;
      src.connect(analyser); analyser.connect(audioCtx.destination);
      drawViz();
      a.onended = stopViz;
    }
    a.play();
  }

  function master() {
    if (!done.includes(cur)) done.push(cur);
    AudioBus.chord([523, 659, 784], 0.2);
    Particles.fire(24, { originY: "40%" });
    /* التالي غير المُتقَن */
    const next = TASKS.findIndex((_, i) => !done.includes(i));
    $("stat-done").textContent = `${done.length}/${TASKS.length}`;
    if (next === -1) return win();
    cur = next;
    renderTask();
  }

  function renderTask() {
    const L = Lang.current();
    $("qr-ayah").textContent = TASKS[cur].ayah;
    $("qr-info").textContent = TASKS[cur].info[L];
    $("qr-play").disabled = true;
    $("qr-done").disabled = true;
    $("qr-feedback").textContent = "";
    $("stat-done").textContent = `${done.length}/${TASKS.length}`;
    blobUrl = null;
    stopVizSafe();
    $("qr-list").innerHTML = TASKS.map((t, i) => `
      <button class="qr-check-chip ${done.includes(i) ? "done" : i === cur ? "current" : ""}" data-i="${i}">
        ${t.info[L]} ${done.includes(i) ? "✓" : ""}
      </button>`).join("");
    $("qr-list").querySelectorAll(".qr-check-chip").forEach(b => {
      b.addEventListener("click", () => { cur = +b.dataset.i; renderTask(); });
    });
  }
  function stopVizSafe() { try { stopViz(); } catch (e) {} }

  function win() {
    Storage.set("anos_qari_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    cur = 0; done = [];
    Modal.close("win-modal");
    renderTask();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", renderTask);
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  $("qr-rec").addEventListener("click", toggleRecord);
  $("qr-play").addEventListener("click", playBack);
  $("qr-done").addEventListener("click", master);
  AudioBus.bindButton($("mute-btn"));
  renderTask();
})();
