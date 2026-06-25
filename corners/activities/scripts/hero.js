/* ============================================================
   HERO — بطل الأركان الخمسة (2D Platformer)
   اعبُر المنصّات واجمَع أركانَ الإسلامِ الخمسة بالترتيب الصحيح.
   ============================================================ */

(function () {
  "use strict";

  const PILLARS_INFO = [
    { name: "الشهادة", ic: "☝️", sub: "شهادةُ أن لا إله إلا الله" },
    { name: "الصلاة", ic: "🕌", sub: "خمسُ صلواتٍ في اليوم" },
    { name: "الزكاة", ic: "🤲", sub: "طُهرةُ المالِ للفقراء" },
    { name: "الصوم", ic: "🌙", sub: "صومُ شهرِ رمضان" },
    { name: "الحج", ic: "🕋", sub: "حجُّ البيتِ لمن استطاع" },
  ];

  const STORAGE_KEY = "mk_hero_state_v1";
  const STORE = Storage.get(STORAGE_KEY, { best: null, plays: 0 });

  const canvas = document.getElementById("hr-canvas");
  const ctx = canvas.getContext("2d");
  const stage = document.getElementById("hr-stage");
  const overlay = document.getElementById("hr-overlay");

  // أبعاد العالم (منطقية)
  const VIEW_H = 440;
  let VIEW_W = 760;
  const GROUND_Y = 360;
  const GRAV = 0.62, MOVE = 0.7, MAX_VX = 4.2, JUMP = 12.5, FRICTION = 0.82;

  // مقاطع الأرض (x, w) — الفجوات بينها حُفَر
  const GROUND = [
    { x: 0, w: 520 }, { x: 600, w: 380 }, { x: 1060, w: 460 },
    { x: 1600, w: 520 }, { x: 2200, w: 700 },
  ];
  // منصّات معلّقة
  const PLATS = [
    { x: 360, y: 270, w: 120 }, { x: 760, y: 250, w: 120 },
    { x: 1180, y: 268, w: 120 }, { x: 1380, y: 200, w: 110 },
    { x: 1760, y: 262, w: 130 }, { x: 2000, y: 210, w: 120 },
    { x: 2420, y: 250, w: 130 },
  ];
  // الأركان الخمسة (مواضعها فوق منصّات/الأرض)
  const PILLAR_POS = [
    { x: 410, y: 230 }, { x: 810, y: 210 }, { x: 1230, y: 228 },
    { x: 2055, y: 170 }, { x: 2480, y: 210 },
  ];
  const WORLD_END = 2860;
  const FLAG_X = 2760;

  let hero, camX, pillars, lives, started, raf, deaths;
  const keys = { left: false, right: false, jump: false };

  function resize() {
    const r = stage.getBoundingClientRect();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    VIEW_W = r.width;
    canvas.width = r.width * dpr;
    canvas.height = VIEW_H * dpr;
    canvas.style.height = VIEW_H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function reset(full) {
    hero = { x: 60, y: GROUND_Y - 46, w: 30, h: 46, vx: 0, vy: 0, onGround: false, face: 1 };
    camX = 0;
    if (full) {
      pillars = PILLAR_POS.map((p, i) => ({ x: p.x, y: p.y, got: false, idx: i }));
      lives = 3; deaths = 0;
    }
    updateHUD();
  }

  function start() {
    overlay.classList.add("hidden");
    reset(true);
    started = true;
    if (!raf) raf = requestAnimationFrame(loop);
  }

  function nextPillar() { return pillars.find(p => !p.got); }

  /* ---------- الحلقة ---------- */
  function loop() {
    if (started) update();
    draw();
    raf = requestAnimationFrame(loop);
  }

  function update() {
    // إدخال
    if (keys.left)  { hero.vx -= MOVE; hero.face = -1; }
    if (keys.right) { hero.vx += MOVE; hero.face = 1; }
    if (!keys.left && !keys.right) hero.vx *= FRICTION;
    hero.vx = Math.max(-MAX_VX, Math.min(MAX_VX, hero.vx));
    if (keys.jump && hero.onGround) { hero.vy = -JUMP; hero.onGround = false; AudioBus.tone(520, 0.1, "square", 0.05); }

    hero.vy += GRAV;
    hero.x += hero.vx;
    hero.y += hero.vy;

    // حدود
    if (hero.x < 0) { hero.x = 0; hero.vx = 0; }
    if (hero.x + hero.w > WORLD_END) { hero.x = WORLD_END - hero.w; hero.vx = 0; }

    // تصادم الأرضيات (من الأعلى فقط)
    hero.onGround = false;
    const feet = hero.y + hero.h;
    // الأرض
    GROUND.forEach(g => landOn(g.x, GROUND_Y, g.w, feet));
    PLATS.forEach(p => landOn(p.x, p.y, p.w, feet));

    // السقوط في حفرة
    if (hero.y > VIEW_H + 60) die();

    // جمع الأركان
    const np = nextPillar();
    pillars.forEach(p => {
      if (p.got) return;
      if (Math.abs((hero.x + hero.w / 2) - p.x) < 34 && Math.abs((hero.y + hero.h / 2) - (p.y + 14)) < 44) {
        if (p === np) collect(p);
      }
    });

    // الوصول للنهاية
    if (hero.x > FLAG_X && pillars.every(p => p.got)) win();

    // الكاميرا
    const targetCam = hero.x - VIEW_W * 0.32;
    camX += (targetCam - camX) * 0.12;
    camX = Math.max(0, Math.min(WORLD_END - VIEW_W, camX));
  }

  function landOn(x, topY, w, feet) {
    if (hero.x + hero.w > x && hero.x < x + w) {
      if (hero.vy >= 0 && feet >= topY && feet <= topY + 22 + hero.vy) {
        hero.y = topY - hero.h; hero.vy = 0; hero.onGround = true;
      }
    }
  }

  function collect(p) {
    p.got = true;
    AudioBus.success();
    Particles.fire(26, { colors: ["#6A8E7F","#C9A961","#FFE9A8","#CDEBD7"],
      originX: "50%", originY: "40%" });
    updateHUD();
  }

  function die() {
    lives--; deaths++;
    AudioBus.fail();
    updateHUD();
    if (lives <= 0) { gameOver(); return; }
    // أعِد البطل لآخر ركنٍ مجموع (نقطة تفتيش) أو البداية
    const lastGot = [...pillars].reverse().find(p => p.got);
    hero.x = lastGot ? lastGot.x - 40 : 60;
    hero.y = GROUND_Y - hero.h - 80; hero.vx = 0; hero.vy = 0;
  }

  /* ---------- الرسم ---------- */
  function draw() {
    ctx.clearRect(0, 0, VIEW_W, VIEW_H);
    // غيوم خلفية (parallax)
    drawClouds();
    ctx.save();
    ctx.translate(-camX, 0);

    // الأرض
    GROUND.forEach(g => drawGround(g.x, g.w));
    // المنصّات
    PLATS.forEach(p => drawPlat(p.x, p.y, p.w));
    // علم النهاية
    drawFlag();
    // الأركان
    pillars.forEach(p => drawPillar(p));
    // البطل
    drawHero();

    ctx.restore();
  }

  function drawClouds() {
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    const off = camX * 0.3;
    [[120, 70], [420, 110], [680, 60], [300, 150]].forEach(([x, y]) => {
      const cx = ((x - off) % (VIEW_W + 200) + VIEW_W + 200) % (VIEW_W + 200) - 100;
      ctx.beginPath();
      ctx.ellipse(cx, y, 36, 18, 0, 0, Math.PI * 2);
      ctx.ellipse(cx + 30, y + 6, 26, 14, 0, 0, Math.PI * 2);
      ctx.ellipse(cx - 28, y + 8, 22, 12, 0, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function roundRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function drawGround(x, w) {
    ctx.fillStyle = "#6A8E7F";
    roundRect(x, GROUND_Y, w, VIEW_H - GROUND_Y + 40, 10); ctx.fill();
    ctx.fillStyle = "#7FA593";
    ctx.fillRect(x, GROUND_Y, w, 10);
    // عُشب
    ctx.fillStyle = "#9FC0AE";
    for (let gx = x + 8; gx < x + w - 6; gx += 22) {
      ctx.beginPath(); ctx.moveTo(gx, GROUND_Y);
      ctx.lineTo(gx + 4, GROUND_Y - 7); ctx.lineTo(gx + 8, GROUND_Y);
      ctx.fill();
    }
  }

  function drawPlat(x, y, w) {
    ctx.fillStyle = "#C9A961";
    roundRect(x, y, w, 18, 8); ctx.fill();
    ctx.fillStyle = "#DBC089";
    ctx.fillRect(x, y, w, 5);
  }

  function drawPillar(p) {
    const info = PILLARS_INFO[p.idx];
    if (p.got) {
      // علامة مجموعة باهتة
      ctx.globalAlpha = 0.25;
    } else {
      // توهّج إذا كان التالي
      const isNext = nextPillar() === p;
      if (isNext) {
        const t = (Date.now() % 1000) / 1000;
        ctx.save();
        ctx.globalAlpha = 0.4 + 0.3 * Math.sin(t * Math.PI * 2);
        ctx.fillStyle = "#FFE9A8";
        ctx.beginPath(); ctx.arc(p.x, p.y + 12, 30, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      } else {
        ctx.globalAlpha = 0.55;
      }
    }
    // قاعدة عمود
    ctx.fillStyle = p.got ? "#9FB6AB" : "#2E5F8A";
    roundRect(p.x - 16, p.y - 6, 32, 40, 7); ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.font = "20px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(info.ic, p.x, p.y + 14);
    ctx.globalAlpha = 1;
    // الاسم
    ctx.fillStyle = "#1F2540";
    ctx.font = "bold 14px Tajawal, sans-serif";
    ctx.fillText(info.name, p.x, p.y - 18);
  }

  function drawFlag() {
    ctx.strokeStyle = "#1F2540"; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(FLAG_X, GROUND_Y); ctx.lineTo(FLAG_X, GROUND_Y - 80); ctx.stroke();
    ctx.fillStyle = "#E8A5A5";
    ctx.beginPath();
    ctx.moveTo(FLAG_X, GROUND_Y - 80); ctx.lineTo(FLAG_X + 46, GROUND_Y - 66);
    ctx.lineTo(FLAG_X, GROUND_Y - 52); ctx.fill();
    ctx.font = "22px sans-serif"; ctx.textAlign = "center";
    ctx.fillText("🏁", FLAG_X + 2, GROUND_Y - 95);
  }

  function drawHero() {
    const { x, y, w, h, face } = hero;
    // ظل
    ctx.fillStyle = "rgba(31,37,64,0.15)";
    ctx.beginPath(); ctx.ellipse(x + w / 2, y + h + 4, 18, 5, 0, 0, Math.PI * 2); ctx.fill();
    // جسم (ثوب)
    ctx.fillStyle = "#2E4A3F";
    roundRect(x, y + 16, w, h - 16, 8); ctx.fill();
    // رأس
    ctx.fillStyle = "#F4D6B0";
    ctx.beginPath(); ctx.arc(x + w / 2, y + 12, 13, 0, Math.PI * 2); ctx.fill();
    // طاقية
    ctx.fillStyle = "#C9A961";
    ctx.beginPath(); ctx.arc(x + w / 2, y + 6, 12, Math.PI, 0); ctx.fill();
    ctx.fillRect(x + w / 2 - 12, y + 5, 24, 4);
    // عينان
    ctx.fillStyle = "#1F2540";
    ctx.beginPath();
    ctx.arc(x + w / 2 + face * 3, y + 12, 1.8, 0, Math.PI * 2);
    ctx.arc(x + w / 2 + face * 8, y + 12, 1.8, 0, Math.PI * 2);
    ctx.fill();
  }

  /* ---------- HUD ---------- */
  function updateHUD() {
    const got = pillars ? pillars.filter(p => p.got).length : 0;
    document.getElementById("h-got").textContent = got;
    const np = pillars && nextPillar();
    document.getElementById("h-pillar").textContent = np ? PILLARS_INFO[np.idx].name : "النهاية!";
    document.getElementById("h-lives").textContent = "♥".repeat(Math.max(0, lives || 0)) + "♡".repeat(Math.max(0, 3 - (lives || 0)));
    document.getElementById("best").textContent = STORE.best != null ? STORE.best : "—";
    document.getElementById("plays").textContent = STORE.plays;
    // chips
    document.querySelectorAll(".hr-pill-chip").forEach((c, i) => {
      c.classList.toggle("got", pillars && pillars[i].got);
      c.classList.toggle("next", pillars && !pillars[i].got && nextPillar() === pillars[i]);
    });
  }

  /* ---------- النهايات ---------- */
  function gameOver() {
    started = false;
    saveScore();
    const got = pillars.filter(p => p.got).length;
    showOverlay(`<h2>سقطتَ في الطريق</h2>
      <p>جمعتَ <strong>${got}</strong> من ٥ أركان.<br/>انهَض وحاوِل مرّةً أخرى — البطلُ لا ييأس!</p>
      <button class="btn-primary" id="ov-btn" style="width:100%;justify-content:center;">من البداية</button>`);
  }

  function win() {
    started = false;
    saveScore(true);
    AudioBus.success();
    Particles.fire(180);
    document.getElementById("win-summary").innerHTML = `
      <div>جمعتَ <strong>أركانَ الإسلامِ الخمسة</strong> ووصلتَ للنهاية
      بـ <strong>${deaths}</strong> سَقطات!</div>
      <div style="margin-top:var(--s-3); display:flex; gap:6px; justify-content:center; flex-wrap:wrap;">
        ${PILLARS_INFO.map(p => `<span style="background:var(--brand);color:#fff;padding:5px 10px;border-radius:999px;font-size:12px;font-weight:700;">${p.ic} ${p.name}</span>`).join("")}
      </div>
      <div style="margin-top:var(--s-3); padding:10px; background:var(--bg-soft); border-radius:8px; font-size:13px;">
        «بُنِيَ الإسلامُ على خمسٍ» — رواه البخاري ومسلم (صحيح).
      </div>`;
    setTimeout(() => Modal.open("win-modal"), 400);
  }

  function saveScore(won) {
    STORE.plays++;
    if (won && (STORE.best == null || deaths < STORE.best)) STORE.best = deaths;
    Storage.set(STORAGE_KEY, STORE);
    updateHUD();
  }

  function showOverlay(html) {
    overlay.querySelector(".hr-overlay-card").innerHTML = html;
    overlay.classList.remove("hidden");
    const btn = document.getElementById("ov-btn");
    if (btn) btn.addEventListener("click", e => { e.stopPropagation(); start(); });
  }

  /* ---------- إدخال ---------- */
  document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") keys.left = true;
    else if (e.key === "ArrowRight") keys.right = true;
    else if (e.key === " " || e.key === "ArrowUp") { keys.jump = true; if (started) e.preventDefault(); }
  });
  document.addEventListener("keyup", e => {
    if (e.key === "ArrowLeft") keys.left = false;
    else if (e.key === "ArrowRight") keys.right = false;
    else if (e.key === " " || e.key === "ArrowUp") keys.jump = false;
  });
  function bindTouch(id, on) {
    const el = document.getElementById(id);
    if (!el) return;
    const set = v => { keys[on] = v; };
    el.addEventListener("pointerdown", e => { e.preventDefault(); set(true); });
    el.addEventListener("pointerup", () => set(false));
    el.addEventListener("pointerleave", () => set(false));
    el.addEventListener("pointercancel", () => set(false));
  }
  bindTouch("t-left", "left");
  bindTouch("t-right", "right");
  bindTouch("t-jump", "jump");

  overlay.addEventListener("click", () => { if (!started) start(); });

  document.getElementById("win-replay").addEventListener("click", () => { Modal.close("win-modal"); setTimeout(start, 300); });
  Modal.bindClose("win-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) { Storage.clear(STORAGE_KEY); location.reload(); }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));
  window.addEventListener("resize", resize);

  /* ---------- بدء ---------- */
  resize();
  pillars = PILLAR_POS.map((p, i) => ({ x: p.x, y: p.y, got: false, idx: i }));
  lives = 3; deaths = 0;
  reset(true);
  draw();
  raf = requestAnimationFrame(loop);
})();
