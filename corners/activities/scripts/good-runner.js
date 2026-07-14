/* ============================================================
   90 · عدّاء الخير — عدّاء لا نهائي: اجمع الحسنات وتجنّب العقبات
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "صنّاع الغد", en: "Makers of Tomorrow" },
    crumbTitle:  { ar: "عدّاء الخير", en: "Good Deeds Runner" },
    title:       { ar: "عدّاء الخير", en: "The Good Deeds Runner" },
    desc:        { ar: "اركض واجمع الحسنات! التقط القلوب الطيّبة (أعمال الخير) وتجنّب العقبات (الأخلاق السيّئة). كلما جمعتَ خيراً أكثر ارتفعت نقاطك. إلى أين تصل؟", en: "Run and collect good deeds! Grab the kind hearts (good deeds) and dodge obstacles (bad manners). The more good you gather, the higher your score. How far can you go?" },
    startTitle:  { ar: "انطلق يا عدّاء الخير!", en: "Run, good runner!" },
    startDesc:   { ar: "اقفز لجمع القلوب (الأعمال الصالحة) وتجنّب العقبات السوداء (الأخلاق السيّئة). انقر أو اضغط المسافة للقفز.", en: "Jump to collect hearts (good deeds) and avoid the black obstacles (bad manners). Tap or press Space to jump." },
    startBtn:    { ar: "ابدأ الركض!", en: "Start running!" },
    hint:        { ar: "💡 انقر / المسافة = قفز · اجمع 💚 وتجنّب ⬛", en: "💡 Tap / Space = jump · collect 💚 avoid ⬛" },
    statBest:    { ar: "أفضل نتيجة", en: "Best score" },
    statGood:    { ar: "حسنات جمعتها", en: "Good deeds collected" },
    sideTitle:   { ar: "المسارعة للخيرات", en: "Racing to good" },
    sideQuote:   { ar: "﴿فاستبقوا الخيرات﴾", en: "\"So race to [all that is] good\"" },
    sideSrc:     { ar: "البقرة · 148", en: "Al-Baqarah · 148" },
    tip:         { ar: "القلوب الخضراء أعمالٌ صالحة: ابتسامة، صدقة، مساعدة. المربّعات السوداء أخلاقٌ سيّئة تجنّبها. سارِع للخير كلما استطعت!", en: "Green hearts are good deeds: a smile, charity, helping. Black squares are bad manners to avoid. Race to good whenever you can!" },
    winEyebrow:  { ar: "انتهى الشوط", en: "Run over" },
    winTitle:    { ar: "جمعتَ حسناتٍ كثيرة!", en: "You gathered many good deeds!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "اركض ثانيةً", en: "Run again" },
  };

  const W = 720, H = 320, GROUND = 250;
  const $ = (id) => document.getElementById(id);
  const cv = $("rn-canvas"), ctx = cv.getContext("2d");
  const overlay = $("rn-overlay");

  let running = false, raf = null;
  let dist, py, vy, items, spawnT, score, good, t, lives;
  const GOOD_LABELS = ["ابتسامة", "صدقة", "مساعدة", "سلام", "صدق"];

  function init() {
    dist = 0; py = GROUND; vy = 0; items = []; spawnT = 50; score = 0; good = 0; t = 0; lives = 3;
  }
  function jump() { if (running && py >= GROUND - 1) { vy = -12.5; AudioBus.tick(640); } }

  function spawn() {
    const isGood = Math.random() < 0.62;
    if (isGood) {
      const high = Math.random() < 0.5;
      items.push({ x: W + 30, y: high ? GROUND - 70 : GROUND - 20, type: "good", got: false });
    } else {
      items.push({ x: W + 30, y: GROUND, type: "bad", got: false });
    }
  }

  function loop() {
    t++;
    dist += 0.09 * 3;
    if (spawnT-- <= 0) { spawn(); spawnT = 42 + Math.random() * 40 - Math.min(20, t * 0.006); }
    vy += 0.68; py += vy; if (py > GROUND) { py = GROUND; vy = 0; }
    const speed = 3 + Math.min(2.5, t * 0.001);
    items.forEach(o => o.x -= speed * 1.6);
    items = items.filter(o => o.x > -40);

    /* التصادم/الجمع */
    for (const o of items) {
      if (o.got) continue;
      const dx = Math.abs(o.x - 100), dy = Math.abs(o.y - py);
      if (dx < 30 && dy < 34) {
        if (o.type === "good") {
          o.got = true; good++; score += 10; $("stat-good").textContent = good;
          AudioBus.chord([523, 659], 0.14); Particles.fire(12, { originX: "14%", originY: "60%" });
        } else {
          o.got = true; lives--; score = Math.max(0, score - 5);
          AudioBus.fail();
          if (lives <= 0) return end();
        }
      }
    }

    /* رسم */
    ctx.clearRect(0, 0, W, H);
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, "#F3D1E3"); sky.addColorStop(1, "#E8D8E8");
    ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H);
    /* تلال */
    ctx.fillStyle = "#D8B0C8";
    for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.arc((i * 180 - (t * 0.4 % 180)), GROUND + 30, 90, Math.PI, 0); ctx.fill(); }
    /* الأرض */
    ctx.fillStyle = "#C6A878"; ctx.fillRect(0, GROUND + 30, W, H - GROUND);
    ctx.strokeStyle = "rgba(255,255,255,0.3)"; ctx.setLineDash([16, 20]);
    ctx.beginPath(); ctx.moveTo(-(t * speed * 1.6 % 36), GROUND + 44); ctx.lineTo(W, GROUND + 44); ctx.stroke(); ctx.setLineDash([]);
    /* العناصر */
    items.forEach(o => {
      if (o.got) return;
      ctx.textAlign = "center";
      if (o.type === "good") { ctx.font = "30px sans-serif"; ctx.fillText("💚", o.x, o.y + 10); }
      else { ctx.fillStyle = "#2A2438"; ctx.fillRect(o.x - 16, GROUND - 4, 32, 34); ctx.font = "18px sans-serif"; ctx.fillText("💢", o.x, GROUND + 20); }
    });
    /* العدّاء */
    const bob = py >= GROUND ? Math.sin(t * 0.5) * 2 : 0;
    ctx.font = "40px sans-serif"; ctx.textAlign = "center";
    ctx.fillText("🏃", 100, py + 14 + bob);
    /* القلوب (الأرواح) */
    ctx.font = "18px sans-serif"; ctx.textAlign = "left";
    ctx.fillText("❤️".repeat(lives), W - 90, 30);
    /* HUD */
    $("rn-score").textContent = "✨ " + score;
    $("rn-dist").textContent = Math.round(dist) + "m";

    if (dist >= 400) return end(); /* شوط طويل ينتهي بنجاح */
    raf = requestAnimationFrame(loop);
  }

  function end() {
    running = false; cancelAnimationFrame(raf);
    const L = Lang.current();
    const best = Storage.get("anos_runner_best", 0);
    if (score > best) Storage.set("anos_runner_best", score);
    $("stat-best").textContent = Math.max(best, score);
    $("win-sub").textContent = L === "ar" ? `جمعتَ ${good} حسنة ووصلت ${Math.round(dist)} متراً — النقاط ${score}` : `You collected ${good} good deeds over ${Math.round(dist)}m — score ${score}`;
    Storage.set("anos_runner_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function start() { init(); overlay.style.display = "none"; running = true; loop(); }

  Lang.init(I18N);
  Modal.bindClose("win-modal");
  $("rn-start").addEventListener("click", start);
  $("win-replay").addEventListener("click", () => { Modal.close("win-modal"); start(); });
  $("reset-btn").addEventListener("click", () => { cancelAnimationFrame(raf); running = false; overlay.style.display = "grid"; init(); ctx.fillStyle = "#E8D8E8"; ctx.fillRect(0, 0, W, H); });
  cv.addEventListener("pointerdown", jump);
  document.addEventListener("keydown", (e) => { if (e.code === "Space") { e.preventDefault(); jump(); } });
  AudioBus.bindButton($("mute-btn"));
  $("stat-best").textContent = Storage.get("anos_runner_best", 0) || "—";
  init();
  ctx.fillStyle = "#E8D8E8"; ctx.fillRect(0, 0, W, H);
})();
