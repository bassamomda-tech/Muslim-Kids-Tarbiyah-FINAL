/* ============================================================
   WORD TRACE — تتبع الكلمات
   رسم على لوحة canvas مع قياس التغطية ضدّ ماسك الحرف المُستهدَف
   ============================================================ */

(function () {
  "use strict";

  /* ============ قائمة الدروس ============ */
  const LESSONS = [
    { text: "ا",  name: "حرف الألِف",  hint: "ارسم خطّاً عمودياً من أعلى إلى أسفل", fontSize: 220 },
    { text: "ب",  name: "حرف الباء",   hint: "كوبٌ صغير تحته نقطة",                fontSize: 220 },
    { text: "ل",  name: "حرف اللام",   hint: "خطٌّ نازل ثم انحناءة لليمين",         fontSize: 220 },
    { text: "م",  name: "حرف الميم",   hint: "دائرة صغيرة لها ذيل نازل",            fontSize: 220 },
    { text: "حب", name: "كلمة: حُبّ",  hint: "حاء وباء — مَطلَع كل خير",            fontSize: 200 },
    { text: "أم", name: "كلمة: أُمّ",  hint: "أمّك جنّتك، اكتُبها بحبّ",            fontSize: 200 },
    { text: "قمر", name: "كلمة: قمر", hint: "قاف وميم وراء — نور الليل",          fontSize: 180 },
    { text: "ماء", name: "كلمة: ماء", hint: "ميم وألف وهمزة — سرّ الحياة",       fontSize: 180 },
  ];

  const STORAGE_KEY = "mk_trace_state_v1";
  const STORAGE = Storage.get(STORAGE_KEY, { best: 0, plays: 0 });

  const W = 600, H = 320;
  const COMPLETE_THRESHOLD = 0.55;

  // Canvas refs
  const guideCanvas = document.getElementById("guide-canvas");
  const userCanvas = document.getElementById("user-canvas");
  const guideCtx = guideCanvas.getContext("2d");
  const userCtx = userCanvas.getContext("2d");

  // Off-screen mask for coverage
  const maskCanvas = document.createElement("canvas");
  maskCanvas.width = W; maskCanvas.height = H;
  const maskCtx = maskCanvas.getContext("2d");

  // State
  let lessonIdx = 0;
  let totalStars = 0;
  let doneCount = 0;
  let slips = 0;
  let brushSize = 22;
  let drawing = false;
  let lastPt = null;
  let currentCoverage = 0;
  let perLessonAttempts = 0;

  /* ============ رسم الـ Guide ============ */
  function renderLesson() {
    const lesson = LESSONS[lessonIdx];

    // Mask: solid black text
    maskCtx.clearRect(0, 0, W, H);
    maskCtx.fillStyle = "#000";
    maskCtx.font = `900 ${lesson.fontSize}px Tajawal, sans-serif`;
    maskCtx.textAlign = "center";
    maskCtx.textBaseline = "middle";
    maskCtx.fillText(lesson.text, W / 2, H / 2 + 10);

    // Guide: filled in light beige, dashed orange outline
    guideCtx.clearRect(0, 0, W, H);
    guideCtx.font = `900 ${lesson.fontSize}px Tajawal, sans-serif`;
    guideCtx.textAlign = "center";
    guideCtx.textBaseline = "middle";
    guideCtx.fillStyle = "#FFE4D0";
    guideCtx.fillText(lesson.text, W / 2, H / 2 + 10);
    guideCtx.lineWidth = 3;
    guideCtx.setLineDash([6, 6]);
    guideCtx.strokeStyle = "#B5612A";
    guideCtx.strokeText(lesson.text, W / 2, H / 2 + 10);
    guideCtx.setLineDash([]);

    // Clear user canvas
    userCtx.clearRect(0, 0, W, H);
    perLessonAttempts = 0;
    currentCoverage = 0;
    updateCoverageBar();

    // labels
    document.getElementById("label-num").textContent = lessonIdx + 1;
    document.getElementById("label-name").textContent = lesson.name;
    document.getElementById("label-sub").textContent = lesson.hint;
    document.getElementById("t-idx").textContent = lessonIdx + 1;
    renderLessonsList();
  }

  /* ============ تفاعل الفُرشاة ============ */
  function getPos(e) {
    const rect = userCanvas.getBoundingClientRect();
    const scaleX = W / rect.width;
    const scaleY = H / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;
    return { x, y };
  }

  function startStroke(e) {
    drawing = true;
    e.target.setPointerCapture?.(e.pointerId);
    const p = getPos(e);
    lastPt = p;
    drawDot(p);
  }
  function moveStroke(e) {
    if (!drawing) return;
    const p = getPos(e);
    drawLine(lastPt, p);
    lastPt = p;
    // throttle coverage updates a bit
    if (perLessonAttempts === 0 || Math.random() < 0.3) {
      currentCoverage = calcCoverage();
      updateCoverageBar();
    }
  }
  function endStroke() {
    if (!drawing) return;
    drawing = false;
    lastPt = null;
    currentCoverage = calcCoverage();
    updateCoverageBar();
  }

  function drawDot(p) {
    userCtx.fillStyle = "#B5612A";
    userCtx.beginPath();
    userCtx.arc(p.x, p.y, brushSize / 2, 0, Math.PI * 2);
    userCtx.fill();
  }
  function drawLine(a, b) {
    userCtx.strokeStyle = "#B5612A";
    userCtx.lineWidth = brushSize;
    userCtx.lineCap = "round";
    userCtx.lineJoin = "round";
    userCtx.beginPath();
    userCtx.moveTo(a.x, a.y);
    userCtx.lineTo(b.x, b.y);
    userCtx.stroke();
  }

  userCanvas.addEventListener("pointerdown", startStroke);
  userCanvas.addEventListener("pointermove", moveStroke);
  userCanvas.addEventListener("pointerup", endStroke);
  userCanvas.addEventListener("pointercancel", endStroke);
  userCanvas.addEventListener("pointerleave", endStroke);

  /* ============ حساب التغطية ============ */
  function calcCoverage() {
    const userData = userCtx.getImageData(0, 0, W, H).data;
    const maskData = maskCtx.getImageData(0, 0, W, H).data;
    let inMask = 0, drawn = 0, drawnOut = 0;
    // sample every 2nd pixel for performance
    for (let i = 0; i < userData.length; i += 8) {
      const mA = maskData[i + 3];
      const uA = userData[i + 3];
      if (mA > 50) {
        inMask++;
        if (uA > 50) drawn++;
      } else if (uA > 50) {
        drawnOut++;
      }
    }
    const coverage = inMask ? drawn / inMask : 0;
    // penalty for drawing way outside
    const penalty = Math.min(0.3, drawnOut / Math.max(inMask, 1) * 0.4);
    return Math.max(0, coverage - penalty);
  }

  function updateCoverageBar() {
    const pct = Math.round(currentCoverage * 100);
    document.getElementById("cov-bar").style.width = Math.min(100, pct) + "%";
    document.getElementById("cov-pct").textContent = pct + "%";
  }

  /* ============ زر "أكملتُ" ============ */
  function checkComplete() {
    perLessonAttempts++;
    currentCoverage = calcCoverage();
    updateCoverageBar();
    if (currentCoverage >= COMPLETE_THRESHOLD) {
      onLessonDone();
    } else {
      slips++;
      AudioBus.fail();
      flashTip(`لم تَكمُل التغطية بعد (${Math.round(currentCoverage*100)}%). حاول مرَّة أخرى.`);
      updateHUD();
    }
  }

  function onLessonDone() {
    doneCount++;
    // award stars (3 stars max, based on perLessonAttempts)
    let stars = 3;
    if (perLessonAttempts >= 3) stars = 2;
    if (perLessonAttempts >= 6) stars = 1;
    LESSONS[lessonIdx]._stars = stars;
    LESSONS[lessonIdx]._done = true;
    totalStars += stars;

    AudioBus.success();
    Particles.fire(60, { colors: ["#FFD9C2","#FFE9A8","#FFCFB0"] });

    updateHUD();
    renderLessonsList();

    setTimeout(() => {
      if (lessonIdx + 1 < LESSONS.length) {
        lessonIdx++;
        renderLesson();
      } else {
        finishRound();
      }
    }, 1000);
  }

  function skipLesson() {
    if (lessonIdx + 1 < LESSONS.length) {
      lessonIdx++;
      renderLesson();
    } else {
      finishRound();
    }
  }

  /* ============ مَحو ============ */
  function clearCanvas() {
    userCtx.clearRect(0, 0, W, H);
    currentCoverage = 0;
    updateCoverageBar();
  }

  /* ============ HUD ============ */
  function updateHUD() {
    document.getElementById("t-idx").textContent = lessonIdx + 1;
    document.getElementById("t-done").textContent = doneCount;
    document.getElementById("t-stars").textContent = totalStars;
    document.getElementById("t-slips").textContent = slips;
    document.getElementById("lessons-pill").textContent = `${doneCount}/${LESSONS.length}`;
    document.getElementById("best").textContent =
      STORAGE.best > 0 ? `${STORAGE.best} ⭐` : "—";
  }

  function renderLessonsList() {
    const list = document.getElementById("lessons-list");
    list.innerHTML = "";
    LESSONS.forEach((l, i) => {
      const row = document.createElement("div");
      const cls = l._done ? "done" : (i === lessonIdx ? "current" : "");
      row.className = "lesson-row " + cls;
      const stars = l._stars
        ? "★".repeat(l._stars) + "☆".repeat(3 - l._stars)
        : "☆☆☆";
      row.innerHTML = `
        <span class="check">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>
        </span>
        <span class="word">${l.text}</span>
        <div style="display:flex; flex-direction:column; align-items: flex-end; gap: 2px;">
          <span class="stars">${stars}</span>
          <span class="meta">${l.name}</span>
        </div>
      `;
      list.appendChild(row);
    });
  }

  function flashTip(msg) {
    let t = document.getElementById("t-flash");
    if (!t) {
      t = document.createElement("div");
      t.id = "t-flash";
      t.style.cssText = "position:fixed; top:24px; right:50%; transform:translateX(50%); background:var(--ink); color:#FBF6EC; padding:10px 18px; border-radius:999px; font-weight:700; font-size:13px; z-index:200; box-shadow: var(--shadow-lg); transition: opacity 0.3s ease;";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.opacity = "1";
    clearTimeout(t._h);
    t._h = setTimeout(() => t.style.opacity = "0", 2300);
  }

  /* ============ النهاية ============ */
  function finishRound() {
    if (totalStars > STORAGE.best) STORAGE.best = totalStars;
    STORAGE.plays++;
    Storage.set(STORAGE_KEY, STORAGE);
    Particles.fire(140);
    const max = LESSONS.length * 3;
    document.getElementById("win-summary").innerHTML = `
      تتبَّعتَ <strong>${doneCount}</strong> دروس بنجاح. كل تَدريبٍ يُحسِّن خطَّك ويزيد ثقتك بنفسك.
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:var(--s-2); margin-top: var(--s-3);">
        <div><strong>النجوم</strong>${totalStars} / ${max}</div>
        <div><strong>محاولات</strong>${slips}</div>
        <div><strong>أعلى نجوم</strong>${STORAGE.best}</div>
      </div>
      <div style="margin-top: var(--s-3); padding: 10px; background: var(--bg-soft); border-radius: 8px; font-size: 13px;">
        نَصيحة: اكتب 5 دقائق يومياً في دفتر، ستجدُ خطَّك يَتحسَّن خلال شهر.
      </div>
    `;
    setTimeout(() => Modal.open("win-modal"), 600);
  }

  /* ============ ربط أزرار ============ */
  document.getElementById("check-btn").addEventListener("click", checkComplete);
  document.getElementById("clear-canvas").addEventListener("click", clearCanvas);
  document.getElementById("skip-btn").addEventListener("click", skipLesson);

  document.querySelectorAll(".brush-btn").forEach(b => {
    b.addEventListener("click", () => {
      document.querySelectorAll(".brush-btn").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      brushSize = parseInt(b.dataset.size, 10);
    });
  });

  document.getElementById("win-replay").addEventListener("click", () => {
    Modal.close("win-modal");
    setTimeout(() => {
      LESSONS.forEach(l => { delete l._done; delete l._stars; });
      lessonIdx = 0;
      doneCount = 0;
      totalStars = 0;
      slips = 0;
      renderLesson();
      updateHUD();
    }, 300);
  });
  Modal.bindClose("win-modal");

  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY);
      location.reload();
    }
  });

  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ تشغيل ============ */
  // wait for fonts to load before rendering text-to-canvas
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => { renderLesson(); updateHUD(); });
  } else {
    setTimeout(() => { renderLesson(); updateHUD(); }, 300);
  }
})();
