/* ============================================================
   WHEEL OF DHIKR — منطق نشاط عجلة الأذكار
   تتضمن: رسم العجلة بـ Canvas، دوران سلس، أصوات Web Audio،
   جسيمات احتفالية، نافذة منبثقة، وحفظ الحالة في localStorage
   ============================================================ */

(function () {
  "use strict";

  /* ---------- بيانات الأذكار الثمانية ---------- */
  const DHIKR = [
    {
      ar: "سُبْحَانَ اللَّهِ",
      tr: "Subḥān Allāh",
      meaning: "تنزيهٌ لله عن كل نقص. يُقال 33 مرة بعد الصلاة وهي من أحب الكلام إلى الله.",
      color: "#FFD9C2", ink: "#B5612A",
    },
    {
      ar: "الْحَمْدُ لِلَّهِ",
      tr: "Al-ḥamdu lillāh",
      meaning: "الثناء على الله بصفاته الجميلة ونعمه العظيمة. تملأ الميزان كما ورد في الحديث.",
      color: "#CDEBD7", ink: "#2F7A52",
    },
    {
      ar: "اللَّهُ أَكْبَر",
      tr: "Allāhu Akbar",
      meaning: "الله أعظم من كل شيء. كلمة تُذكِّر الطفل أن الله أكبر من أي مخاوف أو مشاكل.",
      color: "#E0D5F2", ink: "#5A3F94",
    },
    {
      ar: "لا إله إلا الله",
      tr: "Lā ilāha illā Allāh",
      meaning: "أعظم كلمة، وهي شهادة التوحيد التي يدخل بها المسلم في دين الإسلام.",
      color: "#CFE3F2", ink: "#2E5F8A",
    },
    {
      ar: "أَسْتَغْفِرُ اللَّهَ",
      tr: "Astaghfiru Allāh",
      meaning: "أطلب من الله أن يغفر لي. كلمة سهلة تُذكِّرك بأن الله يحب التوّابين.",
      color: "#FFE9A8", ink: "#8A6510",
    },
    {
      ar: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
      tr: "Lā ḥawla wa lā quwwata illā billāh",
      meaning: "لا تغيير في حال، ولا قوة على فعل، إلا بالله. كنزٌ من كنوز الجنة.",
      color: "#DCE9DC", ink: "#2E4A3F",
    },
    {
      ar: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّد",
      tr: "Allāhumma ṣalli ʿalā Muḥammad",
      meaning: "دعاء بأن يرفع الله ذكر النبي ﷺ. من صلى عليّ صلى الله عليه عشراً.",
      color: "#E8A5A5", ink: "#7A2F2F",
    },
    {
      ar: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
      tr: "Ḥasbunā Allāhu wa niʿma al-wakīl",
      meaning: "الله كافينا، ونِعمَ الذي نُوكِّل إليه أمورنا. تُقال عند الخوف والشدائد.",
      color: "#FFCFB0", ink: "#9A4A1A",
    },
  ];

  /* ---------- حالة التطبيق ---------- */
  const STORAGE_KEY = "mk_wheel_state_v1";
  const state = loadState();

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* ignore */ }
    return {
      totalSpins: 0,
      todaySpins: 0,
      lastDate: new Date().toDateString(),
      counts: Array(DHIKR.length).fill(0),
      sessionTarget: 10,
      muted: false,
      badges: [],
    };
  }
  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
    catch (e) { /* ignore */ }
  }
  // إعادة ضبط عدد اليوم إذا تغير التاريخ
  (function rolloverDay() {
    const today = new Date().toDateString();
    if (state.lastDate !== today) {
      state.todaySpins = 0;
      state.lastDate = today;
      saveState();
    }
  })();

  /* ============================================================
     رسم العجلة على Canvas
     ============================================================ */
  const canvas = document.getElementById("wheel");
  const ctx = canvas.getContext("2d");
  let angle = 0;            // الزاوية الحالية (راديان)
  let targetAngle = 0;      // الزاوية المستهدفة
  let spinning = false;
  let spinStart = 0;
  let spinDuration = 0;
  let startAngle = 0;
  let lastTickSegment = -1;

  // ضبط مقاسات Canvas حسب DPR
  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width  = rect.width  * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawWheel();
  }

  function drawWheel() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    const cx = w / 2, cy = h / 2;
    const r = Math.min(w, h) / 2 - 6;
    const N = DHIKR.length;
    const seg = (Math.PI * 2) / N;

    ctx.clearRect(0, 0, w, h);

    // حلقة خارجية (إطار)
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r + 3, 0, Math.PI * 2);
    ctx.fillStyle = "#1F2540";
    ctx.fill();
    ctx.restore();

    // رسم كل قطاع
    for (let i = 0; i < N; i++) {
      const a0 = angle + i * seg - Math.PI / 2 - seg / 2; // المؤشر فوق
      const a1 = a0 + seg;

      // القطاع
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, a0, a1);
      ctx.closePath();
      ctx.fillStyle = DHIKR[i].color;
      ctx.fill();

      // حافة بيضاء بين القطاعات
      ctx.strokeStyle = "rgba(255,255,255,0.8)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // النص (يُرسم محورياً عند منتصف القطاع)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(a0 + seg / 2);
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.fillStyle = DHIKR[i].ink;
      // الحجم يتناسب مع العجلة
      const fs = Math.max(13, Math.min(18, r * 0.062));
      ctx.font = `800 ${fs}px Tajawal, sans-serif`;
      ctx.direction = "rtl";

      const text = DHIKR[i].ar;
      // قياس النص لضبط الموضع
      ctx.fillText(text, r - 16, 0);

      // نقطة زخرفية صغيرة قرب المركز
      ctx.beginPath();
      ctx.arc(r * 0.28, 0, 4, 0, Math.PI * 2);
      ctx.fillStyle = DHIKR[i].ink;
      ctx.globalAlpha = 0.4;
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.restore();
    }

    // حلقة داخلية حول الزر المركزي
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.22, 0, Math.PI * 2);
    ctx.fillStyle = "#FBF6EC";
    ctx.fill();

    // نقاط زخرفية صغيرة على حافة العجلة
    for (let i = 0; i < N; i++) {
      const a = angle + i * seg - Math.PI / 2 - seg / 2;
      const x = cx + Math.cos(a) * (r - 8);
      const y = cy + Math.sin(a) * (r - 8);
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#FBF6EC";
      ctx.fill();
    }
  }

  /* ============================================================
     منطق الدوران
     ============================================================ */
  function spin() {
    if (spinning) return;

    // اختيار النتيجة عشوائياً
    const winner = Math.floor(Math.random() * DHIKR.length);

    // عدد الدورات الكاملة (5-7) + المسافة للقطاع الفائز
    const fullSpins = 5 + Math.random() * 2;
    const N = DHIKR.length;
    const seg = (Math.PI * 2) / N;
    // المؤشر فوق العجلة. لجعل القطاع winner يتموضع تحت المؤشر:
    // نريد الزاوية النهائية = -winner * seg (ليكون منتصف القطاع تحت المؤشر)
    const finalAngle = -winner * seg + (Math.random() - 0.5) * seg * 0.6;
    targetAngle = angle + Math.PI * 2 * fullSpins + (finalAngle - (angle % (Math.PI * 2)));

    spinStart = performance.now();
    spinDuration = 4200 + Math.random() * 800; // 4.2-5 ثوانٍ
    startAngle = angle;
    spinning = true;
    lastTickSegment = -1;

    spinButton.classList.add("spinning");
    spinButton.disabled = true;
    wheelCanvas.classList.remove("idle");

    requestAnimationFrame(tick);

    function tick(now) {
      const t = Math.min(1, (now - spinStart) / spinDuration);
      // easeOutCubic معدّل ليكون أكثر سلاسة في النهاية
      const eased = 1 - Math.pow(1 - t, 4.2);
      angle = startAngle + (targetAngle - startAngle) * eased;

      // صوت "tic" عند مرور قطاع
      const currentSeg = Math.floor((-angle / seg) % N + N) % N;
      if (currentSeg !== lastTickSegment) {
        playTick();
        lastTickSegment = currentSeg;
      }

      drawWheel();

      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        spinning = false;
        spinButton.classList.remove("spinning");
        spinButton.disabled = false;
        wheelCanvas.classList.add("idle");
        onSpinComplete(winner);
      }
    }
  }

  function onSpinComplete(winnerIdx) {
    // تحديث الحالة
    state.totalSpins++;
    state.todaySpins++;
    state.counts[winnerIdx]++;
    state.lastDate = new Date().toDateString();
    saveState();

    updateStatsUI();
    highlightInList(winnerIdx);
    playSuccess();
    fireConfetti();

    // فتح المودال بعد لحظة
    setTimeout(() => openModal(winnerIdx), 500);
  }

  /* ============================================================
     Web Audio API — أصوات تشجيعية
     ============================================================ */
  let audioCtx = null;
  function getAudio() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }

  function playTone(freq, duration, type = "sine", gain = 0.08) {
    if (state.muted) return;
    try {
      const ctx = getAudio();
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      g.gain.setValueAtTime(0, ctx.currentTime);
      g.gain.linearRampToValueAtTime(gain, ctx.currentTime + 0.01);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(g).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) { /* ignore */ }
  }
  function playTick() { playTone(680, 0.05, "square", 0.04); }
  function playSuccess() {
    // نغمة صاعدة: ثلاث نغمات متتابعة
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6
    notes.forEach((f, i) => setTimeout(() => playTone(f, 0.22, "sine", 0.1), i * 110));
  }

  /* ============================================================
     جسيمات الاحتفال (Confetti)
     ============================================================ */
  const particlesLayer = document.getElementById("particles");

  function fireConfetti() {
    const colors = ["#FFD9C2", "#CDEBD7", "#E0D5F2", "#CFE3F2", "#FFE9A8", "#E8A5A5", "#C9A961"];
    const N = 80;
    for (let i = 0; i < N; i++) {
      const p = document.createElement("span");
      p.style.cssText = `
        position:absolute;
        top: 50%; left: 50%;
        width: ${6 + Math.random() * 8}px;
        height: ${10 + Math.random() * 8}px;
        background: ${colors[i % colors.length]};
        border-radius: 2px;
        transform: translate(-50%,-50%) rotate(${Math.random() * 360}deg);
        opacity: 1;
      `;
      particlesLayer.appendChild(p);

      const angle = Math.random() * Math.PI * 2;
      const distance = 200 + Math.random() * 380;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance - 80; // ينحرف لأعلى قليلاً
      const rot = Math.random() * 720 - 360;
      const dur = 1200 + Math.random() * 1200;

      p.animate(
        [
          { transform: `translate(-50%,-50%) rotate(0deg)`, opacity: 1 },
          { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) rotate(${rot}deg)`, opacity: 0 },
        ],
        { duration: dur, easing: "cubic-bezier(.15,.8,.4,1)" }
      ).onfinish = () => p.remove();
    }
  }

  /* ============================================================
     المودال (نافذة النتيجة)
     ============================================================ */
  const backdrop = document.getElementById("modal-backdrop");
  const modalTitle = document.getElementById("modal-title");
  const modalTranslit = document.getElementById("modal-translit");
  const modalMeaning = document.getElementById("modal-meaning");
  const modalProgress = document.getElementById("modal-progress");

  function openModal(idx) {
    const d = DHIKR[idx];
    modalTitle.textContent = d.ar;
    modalTranslit.textContent = d.tr;
    modalMeaning.innerHTML = `<strong>المعنى</strong>${d.meaning}`;

    // شارات التقدم في المودال (تظهر تقدّم اليوم)
    const target = state.sessionTarget;
    const today = Math.min(state.todaySpins, target);
    modalProgress.innerHTML = "";
    for (let i = 0; i < target; i++) {
      const pip = document.createElement("span");
      pip.className = "pip" + (i < today ? " on" : "");
      modalProgress.appendChild(pip);
    }

    backdrop.classList.add("open");
  }
  function closeModal() { backdrop.classList.remove("open"); }

  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-again").addEventListener("click", () => {
    closeModal();
    setTimeout(spin, 350);
  });
  document.getElementById("modal-dismiss").addEventListener("click", closeModal);
  backdrop.addEventListener("click", e => { if (e.target === backdrop) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

  /* ============================================================
     قائمة الأذكار الجانبية
     ============================================================ */
  function renderDhikrList() {
    const list = document.getElementById("dhikr-list");
    list.innerHTML = DHIKR.map((d, i) => `
      <div class="dhikr-item" data-idx="${i}">
        <span class="dhikr-swatch" style="background:${d.color}"></span>
        <div class="dhikr-text">
          ${d.ar}
          <small>${d.tr}</small>
        </div>
        <span class="dhikr-count" id="count-${i}">${state.counts[i]}</span>
      </div>
    `).join("");
  }

  function highlightInList(idx) {
    document.querySelectorAll(".dhikr-item").forEach(el => el.classList.remove("is-highlighted"));
    const el = document.querySelector(`.dhikr-item[data-idx="${idx}"]`);
    if (el) {
      el.classList.add("is-highlighted");
      el.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    const c = document.getElementById(`count-${idx}`);
    if (c) c.textContent = state.counts[idx];
  }

  /* ============================================================
     الأوسمة (Achievements)
     ============================================================ */
  const ACHIEVEMENTS = [
    { id: "first",     name: "البداية المباركة", req: "أول دورة",       check: () => state.totalSpins >= 1 },
    { id: "ten",       name: "عشرٌ في السباق",    req: "10 دورات",        check: () => state.totalSpins >= 10 },
    { id: "session",   name: "هدف اليوم",         req: "10 في يوم",       check: () => state.todaySpins >= 10 },
    { id: "all-eight", name: "ثمانية أذكار",       req: "تعرّفت على الكل", check: () => state.counts.every(c => c > 0) },
    { id: "fifty",     name: "نصف المئة",         req: "50 دورة",         check: () => state.totalSpins >= 50 },
    { id: "century",   name: "ذاكر مئوي",         req: "100 دورة",        check: () => state.totalSpins >= 100 },
  ];

  function renderAchievements() {
    const box = document.getElementById("achievements");
    box.innerHTML = ACHIEVEMENTS.map(a => {
      const earned = a.check();
      return `
        <div class="achievement ${earned ? 'earned' : ''}">
          <div class="achievement-icon">
            ${earned
              ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>`
              : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>`}
          </div>
          <div class="achievement-name">${a.name}</div>
          <div class="achievement-req">${a.req}</div>
        </div>
      `;
    }).join("");
  }

  /* ============================================================
     تحديث واجهة الإحصائيات
     ============================================================ */
  function updateStatsUI() {
    document.getElementById("stat-total").textContent = state.totalSpins;
    document.getElementById("stat-today").textContent = state.todaySpins;

    // شريط جلسة اليوم
    const pct = Math.min(100, (state.todaySpins / state.sessionTarget) * 100);
    document.getElementById("session-bar").style.width = pct + "%";
    document.getElementById("session-count").textContent = `${Math.min(state.todaySpins, state.sessionTarget)}/${state.sessionTarget}`;

    renderAchievements();
  }

  /* ============================================================
     إعداد الأحداث
     ============================================================ */
  const spinButton = document.getElementById("spin-btn");
  const wheelCanvas = document.getElementById("wheel");

  spinButton.addEventListener("click", () => {
    // إيقاظ Audio context عند أول تفاعل (متطلبات المتصفح)
    getAudio();
    spin();
  });

  // كتم الصوت
  const muteBtn = document.getElementById("mute-btn");
  function updateMuteUI() {
    muteBtn.setAttribute("aria-pressed", String(state.muted));
    muteBtn.querySelector(".mute-label").textContent = state.muted ? "تشغيل الصوت" : "كتم الصوت";
    muteBtn.querySelector(".mute-icon").innerHTML = state.muted
      ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10v4h4l5 4V6L7 10H3Z"/><path d="M16 9l6 6m0-6l-6 6"/></svg>`
      : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10v4h4l5 4V6L7 10H3Z"/><path d="M16 8a6 6 0 0 1 0 8"/><path d="M19 5a10 10 0 0 1 0 14"/></svg>`;
  }
  muteBtn.addEventListener("click", () => {
    state.muted = !state.muted;
    saveState();
    updateMuteUI();
  });

  // اختصار المسافة للدوران
  document.addEventListener("keydown", e => {
    if (e.key === " " && !spinning && !backdrop.classList.contains("open")) {
      e.preventDefault();
      spinButton.click();
    }
  });

  // إعادة الضبط (زر اختياري)
  const resetBtn = document.getElementById("reset-btn");
  if (resetBtn) resetBtn.addEventListener("click", () => {
    if (confirm("هل تريد إعادة ضبط جميع البيانات؟")) {
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    }
  });

  /* ============================================================
     التهيئة
     ============================================================ */
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  wheelCanvas.classList.add("idle");
  renderDhikrList();
  renderAchievements();
  updateStatsUI();
  updateMuteUI();

  // عرض النتيجة الأخيرة في القائمة الجانبية إن وجدت
  const lastIdx = state.counts.reduce((max, v, i, arr) => v > arr[max] ? i : max, 0);
  // (لا نُبرز شيئاً عند التحميل لتجنب الإلهاء)
})();
