/* ============================================================
   WATER SAVE — توفير المياه
   لُعبة تَوقيت: افتَح الصُّنبور، أَغلِق عند الهَدَف.
   ============================================================ */

(function () {
  "use strict";

  const TASKS = [
    { ic: "💧", name: "شُربُ كَأس", hint: "املأ الكأسَ ثَلاثَةَ أَرباعِها مِن غَيرِ سَكب.", target: 75 },
    { ic: "🧼", name: "غَسلُ اليَدَين", hint: "كَمِّيَّةٌ خَفيفة تَكفي لِغَسلِ يَدَيك بِالصَّابون.", target: 35 },
    { ic: "🌱", name: "سَقيُ نَبتَة", hint: "النَّبتَة تَحتاج نِصفَ كَأسٍ فَقَط.", target: 50 },
    { ic: "🚿", name: "وُضوءُ الذِّراع", hint: "اِغسِل ذِراعَيك ثَلاثاً، الكَأس يَكفي.", target: 65 },
    { ic: "🍵", name: "إِبريقُ شاي", hint: "الإبريق صَغير، يَأخُذ كَأساً كامِلة.", target: 95 },
  ];

  const STORAGE_KEY = "mk_watersave_v1";
  const STORE = Storage.get(STORAGE_KEY, { bestPoints: 0, rounds: 0 });

  let tasks = [];
  let idx = 0;
  let fill = 0;             // % 0..120
  let flowing = false;
  let totalPoints = 0;
  let totalWaste = 0;
  let raf = null;
  let last = 0;
  const FLOW_RATE = 38;     // % per second

  const canvas = document.getElementById("ws-flow");
  const ctx = canvas.getContext("2d");
  const drops = [];         // {x,y,vy,r}

  /* ============ Build round ============ */
  function newRound() {
    tasks = shuffle(TASKS).map(t => ({ ...t, done: false, score: 0, waste: 0 }));
    idx = 0;
    totalPoints = 0;
    totalWaste = 0;
    loadTask();
    renderList();
    updateHUD();
    document.getElementById("btn-finish").disabled = true;
  }

  function loadTask() {
    fill = 0;
    flowing = false;
    drops.length = 0;
    document.getElementById("tap-btn").classList.remove("on");
    document.getElementById("ws-tap-wrap")?.classList?.remove("tap-on");
    document.querySelector(".ws-tap-wrap").classList.remove("tap-on");
    document.getElementById("result").textContent = "";
    document.getElementById("result").className = "ws-result";
    document.getElementById("puddle").style.width = "0";

    const t = tasks[idx];
    document.getElementById("task-icon").textContent = t.ic;
    document.getElementById("task-title").textContent = t.name;
    document.getElementById("task-hint").textContent = t.hint;
    document.getElementById("task-target").textContent = t.target + "%";
    document.getElementById("ws-task").textContent = idx + 1;
    updateGlass();
    placeTargetLine(t.target);
    renderList();
  }

  function shuffle(a) {
    const arr = a.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function placeTargetLine(pct) {
    const line = document.getElementById("glass-target-line");
    const label = document.getElementById("glass-target-label");
    const glassH = 130;
    const bottom = (pct / 100) * glassH;
    line.style.bottom = bottom + "px";
    label.style.bottom = (bottom - 6) + "px";
    label.style.left = "calc(50% - 20px)";
  }

  function updateGlass() {
    const f = Math.min(100, fill);
    document.getElementById("glass-fill").style.height = f + "%";
    document.getElementById("ws-pct").textContent = Math.round(f);
    if (fill > 100) {
      const overflow = (fill - 100) * 6;
      document.getElementById("puddle").style.width = Math.min(180, overflow) + "px";
    }
  }

  /* ============ Tap toggle ============ */
  function toggleTap() {
    flowing = !flowing;
    const btn = document.getElementById("tap-btn");
    const wrap = document.querySelector(".ws-tap-wrap");
    btn.classList.toggle("on", flowing);
    wrap.classList.toggle("tap-on", flowing);
    if (flowing) {
      AudioBus.tone(660, 0.12, "sine", 0.05);
      if (!raf) { last = performance.now(); raf = requestAnimationFrame(loop); }
    } else {
      evaluateAttempt();
    }
  }

  /* ============ Loop ============ */
  function loop(t) {
    const dt = (t - last) / 1000;
    last = t;

    if (flowing) {
      fill += FLOW_RATE * dt;
      // إضافة قَطرات للجريان
      if (Math.random() < 0.85) {
        drops.push({
          x: 70 + Math.random() * 8,
          y: 78,
          vy: 220 + Math.random() * 80,
          r: 2.5 + Math.random() * 2,
        });
      }
      if (fill > 100) {
        // ماء يَسيل
        totalWaste += dt * 12; // ml لكل ثانية
        AudioBus.tick(280 + Math.random() * 60);
      }
      if (fill > 130) {
        // تجاوُز كبير — توقف
        flowing = false;
        document.getElementById("tap-btn").classList.remove("on");
        document.querySelector(".ws-tap-wrap").classList.remove("tap-on");
        evaluateAttempt();
      }
      updateGlass();
    }

    // قَطرات
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = drops.length - 1; i >= 0; i--) {
      const d = drops[i];
      d.y += d.vy * dt;
      ctx.beginPath();
      ctx.fillStyle = "#2E5F8A";
      ctx.arc(d.x, d.y, d.r, 0, Math.PI*2);
      ctx.fill();
      // small highlight
      ctx.beginPath();
      ctx.fillStyle = "rgba(255,255,255,0.6)";
      ctx.arc(d.x - d.r*0.35, d.y - d.r*0.35, d.r*0.35, 0, Math.PI*2);
      ctx.fill();

      const glassTopY = 200 + (100 - Math.min(100, fill)) * 1.3;
      if (d.y > glassTopY) drops.splice(i, 1);
    }

    if (flowing || drops.length > 0) {
      raf = requestAnimationFrame(loop);
    } else {
      raf = null;
    }

    document.getElementById("ws-waste").textContent = Math.round(totalWaste);
  }

  /* ============ Evaluate ============ */
  function evaluateAttempt() {
    const t = tasks[idx];
    if (t.done) return;
    const diff = Math.abs(fill - t.target);
    let points = 0;
    let label = "";
    let kind = "good";
    if (diff <= 3)      { points = 100; label = "إِتقانٌ تامّ! 💎"; }
    else if (diff <= 8) { points = 80;  label = "ممتاز! بَركة في الماء."; }
    else if (diff <= 15){ points = 60;  label = "جَيِّد، اقتَرَبت."; }
    else if (diff <= 30){ points = 30;  label = "حاوِل أن تَكونَ أَقرَب."; kind = "bad"; }
    else                { points = 10;  label = "إِسرافٌ كَبير، توفيرُ الماءِ بَركة."; kind = "bad"; }

    if (fill > 100) {
      label += " فاضَ الماءُ — حاوِل أن لا يَسيل.";
      kind = "bad";
      points = Math.max(0, points - 20);
    }

    t.score = points;
    t.waste = Math.round(totalWaste);
    t.done = true;
    totalPoints += points;

    const rEl = document.getElementById("result");
    rEl.textContent = `+${points} نقطة · ${label}`;
    rEl.className = "ws-result " + kind;

    if (kind === "good") AudioBus.success();
    else AudioBus.fail();

    updateHUD();
    renderList();

    // التَّقَدُّم
    setTimeout(() => {
      if (idx + 1 < tasks.length) {
        idx++; loadTask();
      } else {
        document.getElementById("btn-finish").disabled = false;
      }
    }, 1400);
  }

  function updateHUD() {
    document.getElementById("ws-points").textContent = totalPoints;
    document.getElementById("ws-pct").textContent = Math.round(Math.min(100, fill));
    document.getElementById("best").textContent = STORE.bestPoints > 0 ? `${STORE.bestPoints} نقطة` : "—";
  }

  function renderList() {
    const root = document.getElementById("task-list");
    root.innerHTML = "";
    tasks.forEach((t, i) => {
      const r = document.createElement("div");
      r.className = "row" + (i === idx ? " current" : "") + (t.done ? " done" : "");
      r.innerHTML = `
        <span class="ic">${t.ic}</span>
        <span class="nm">${t.name}</span>
        ${t.done ? `<span class="sc">+${t.score}</span>` : `<span class="sc">${t.target}%</span>`}
      `;
      root.appendChild(r);
    });
    document.getElementById("task-pill").textContent = tasks.length;
  }

  function finishRound() {
    STORE.rounds++;
    if (totalPoints > STORE.bestPoints) STORE.bestPoints = totalPoints;
    Storage.set(STORAGE_KEY, STORE);

    Particles.fire(120, { colors: ["#CFE3F2","#CDEBD7","#FFD9C2","#FFE9A8"] });
    AudioBus.success();

    const list = tasks.map(t =>
      `<div style="display:flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid var(--line); font-size:13px;">
        <span>${t.ic} ${t.name}</span>
        <span><strong>+${t.score}</strong> · ${t.waste} مل مُسرَّب</span>
      </div>`
    ).join("");

    document.getElementById("done-summary").innerHTML = `
      <div>إجمالي النَّقَطات: <strong>${totalPoints}</strong></div>
      <div style="margin-top: var(--s-3);">${list}</div>
      <div style="margin-top: var(--s-3); padding: 10px; background: var(--bg-soft); border-radius: 8px; font-size: 13px;">
        تَوفيرُ الماءِ خُلُقٌ نَبَوي. أَفضَلُ المُؤمِنين مَن أَحسَنَ إلى نَفسِه وَمَن حَولَه.
      </div>
    `;
    setTimeout(() => Modal.open("done-modal"), 400);
  }

  /* ============ Bind ============ */
  document.getElementById("tap-btn").addEventListener("click", () => {
    if (tasks[idx].done) return;
    toggleTap();
  });
  document.getElementById("btn-skip").addEventListener("click", () => {
    if (idx + 1 < tasks.length) { idx++; loadTask(); }
    else { document.getElementById("btn-finish").disabled = false; }
  });
  document.getElementById("btn-finish").addEventListener("click", finishRound);
  document.getElementById("done-next").addEventListener("click", () => {
    Modal.close("done-modal"); setTimeout(newRound, 300);
  });
  Modal.bindClose("done-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY); location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ Start ============ */
  newRound();
})();
