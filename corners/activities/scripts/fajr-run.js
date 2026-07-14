/* ============================================================
   59 · سباق الفجر — عدّاء بسيط: اقفز فوق الوسائد وصل المسجد
   قبل شروق الشمس. مسافة السباق 300م.
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "رحلة الإيمان", en: "Journey of Faith" },
    crumbTitle:  { ar: "سباق الفجر", en: "Fajr Dash" },
    title:       { ar: "سباق الفجر", en: "Fajr Dash" },
    desc:        { ar: "الأذان انطلق والمسجد بعيد! اقفز فوق الوسائد والألحفة التي يرميها الكسل في طريقك، وصِل قبل أن تشرق الشمس. اضغط المسافة أو انقر للقفز!", en: "The adhan has sounded and the mosque is far! Jump over the pillows and blankets laziness throws in your path, and arrive before sunrise. Press Space or tap to jump!" },
    startTitle:  { ar: "أذّن الفجر!", en: "The Fajr adhan!" },
    startDesc:   { ar: "اقطع 300 متر إلى المسجد قبل شروق الشمس. كل اصطدام بوسادة يبطئك. انقر أو اضغط المسافة للقفز.", en: "Cover 300 meters to the mosque before sunrise. Every pillow hit slows you down. Tap or press Space to jump." },
    startBtn:    { ar: "انطلق!", en: "Go!" },
    loseTitle:   { ar: "أشرقت الشمس...", en: "The sun rose..." },
    loseDesc:    { ar: "لا بأس — من نام عن صلاةٍ فليصلّها إذا ذكرها. جرّب السباق مرة أخرى!", en: "It's okay — whoever misses a prayer prays it when they remember. Try the dash again!" },
    retryBtn:    { ar: "أعد المحاولة", en: "Try again" },
    statBest:    { ar: "أفضل مسافة", en: "Best distance" },
    statWins:    { ar: "وصلات ناجحة", en: "Successful arrivals" },
    sideTitle:   { ar: "فضل الفجر", en: "The virtue of Fajr" },
    sideQuote:   { ar: "«ركعتا الفجر خيرٌ من الدنيا وما فيها»", en: "\"The two rak'ahs of Fajr are better than this world and all it contains\"" },
    sideSrc:     { ar: "رواه مسلم", en: "Narrated by Muslim" },
    tip:         { ar: "سرّ الاستيقاظ للفجر: نم مبكراً، واقرأ أذكار النوم، واطلب من أحد والديك إيقاظك — وضَع نيّتك من الليل!", en: "The secret to waking for Fajr: sleep early, say the bedtime adhkar, ask a parent to wake you — and set your intention the night before!" },
    winEyebrow:  { ar: "في ذمة الله", en: "Under Allah's protection" },
    winTitle:    { ar: "وصلتَ المسجد قبل الشروق!", en: "You reached the mosque before sunrise!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "سباق جديد", en: "New dash" },
  };

  const W = 720, H = 320, GROUND = 264;
  const GOAL = 300; /* متراً */

  const $ = (id) => document.getElementById(id);
  const cv = $("fr-canvas"), ctx = cv.getContext("2d");
  const overlay = $("fr-overlay");

  let running = false, raf = null;
  let dist, sun, speed, py, vy, jumping, obstacles, spawnT, wins = 0, t;

  function init() {
    dist = 0; sun = 100; speed = 2.6; py = GROUND; vy = 0; jumping = false;
    obstacles = []; spawnT = 60; t = 0;
  }

  function jump() {
    if (!running) return;
    if (py >= GROUND - 1) { vy = -11.5; AudioBus.tick(700); }
  }

  function spawn() {
    const type = Math.random() > 0.5 ? "pillow" : "blanket";
    obstacles.push({ x: W + 40, w: type === "pillow" ? 46 : 70, h: type === "pillow" ? 30 : 22, type, hit: false });
  }

  function skyColor(p) {
    /* p = تقدم الشروق 0..1 */
    const r = Math.round(42 + p * 180);
    const g = Math.round(51 + p * 140);
    const b = Math.round(88 + p * 60);
    return `rgb(${r},${g},${b})`;
  }

  function loop() {
    t++;
    /* التحديث */
    dist += speed * 0.11;
    sun -= 0.062;
    if (spawnT-- <= 0) { spawn(); spawnT = 70 + Math.random() * 60 - Math.min(30, t * 0.01); }
    vy += 0.62; py += vy;
    if (py > GROUND) { py = GROUND; vy = 0; }
    obstacles.forEach(o => { o.x -= speed * 1.7; });
    obstacles = obstacles.filter(o => o.x > -100);
    /* الاصطدام */
    obstacles.forEach(o => {
      if (!o.hit && o.x < 130 && o.x + o.w > 90 && py > GROUND - o.h - 6) {
        o.hit = true;
        speed = Math.max(1.6, speed - 0.7);
        sun -= 4;
        AudioBus.fail();
      }
    });
    speed = Math.min(4.2, speed + 0.0022);

    /* الرسم */
    const sunP = 1 - sun / 100;
    ctx.fillStyle = skyColor(sunP);
    ctx.fillRect(0, 0, W, H);
    /* الشمس تطلع */
    ctx.beginPath();
    ctx.arc(W - 110, 320 - sunP * 200, 34, 0, Math.PI * 2);
    ctx.fillStyle = "#FFD469"; ctx.fill();
    /* نجوم تخفت */
    ctx.globalAlpha = Math.max(0, 0.8 - sunP);
    ctx.fillStyle = "#fff";
    for (let i = 0; i < 14; i++) ctx.fillRect((i * 97 + 30) % W, (i * 53) % 150 + 10, 2, 2);
    ctx.globalAlpha = 1;
    /* المسجد يقترب في الأفق */
    const prog = Math.min(1, dist / GOAL);
    const mx = W - 60 - prog * (W - 210), scale = 0.5 + prog * 0.9;
    ctx.save(); ctx.translate(mx, GROUND + 2); ctx.scale(scale, scale);
    ctx.fillStyle = "#3D4468";
    ctx.fillRect(-46, -58, 92, 58);
    ctx.beginPath(); ctx.arc(0, -58, 30, Math.PI, 0); ctx.fill();
    ctx.fillRect(56, -104, 9, 104);
    ctx.beginPath(); ctx.arc(60.5, -106, 7, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#FFD469"; ctx.fillRect(-12, -30, 24, 30);
    ctx.restore();
    /* الأرض */
    ctx.fillStyle = "#5B5348";
    ctx.fillRect(0, GROUND + 26, W, H - GROUND);
    ctx.strokeStyle = "rgba(255,255,255,0.25)"; ctx.lineWidth = 2; ctx.setLineDash([18, 22]);
    ctx.beginPath(); ctx.moveTo(-(t * speed * 1.7 % 40), GROUND + 40); ctx.lineTo(W, GROUND + 40); ctx.stroke(); ctx.setLineDash([]);
    /* العوائق */
    obstacles.forEach(o => {
      ctx.fillStyle = o.type === "pillow" ? "#E8DFF5" : "#E8C8C8";
      ctx.beginPath();
      ctx.roundRect(o.x, GROUND + 26 - o.h, o.w, o.h, 10);
      ctx.fill();
      ctx.strokeStyle = "rgba(0,0,0,0.15)"; ctx.stroke();
    });
    /* العدّاء */
    const bob = py >= GROUND ? Math.sin(t * 0.4) * 2 : 0;
    ctx.font = "40px sans-serif"; ctx.textAlign = "center";
    ctx.fillText("🏃", 110, py + 22 + bob);
    /* HUD */
    $("fr-dist").textContent = Math.round(dist) + "m / " + GOAL + "m";
    $("fr-sun").textContent = "☀ " + Math.max(0, Math.round(sun)) + "%";

    /* النهاية */
    if (dist >= GOAL) return end(true);
    if (sun <= 0) return end(false);
    raf = requestAnimationFrame(loop);
  }

  function end(won) {
    running = false;
    cancelAnimationFrame(raf);
    const L = Lang.current();
    const best = Storage.get("anos_fajr_best", 0);
    if (dist > best) Storage.set("anos_fajr_best", Math.round(dist));
    $("stat-best").textContent = Math.max(best, Math.round(dist)) + "m";
    if (won) {
      wins++; $("stat-wins").textContent = wins;
      $("win-sub").textContent = L === "ar" ? "«بشّر المشّائين في الظُّلَم إلى المساجد بالنور التام يوم القيامة»" : "\"Give glad tidings to those who walk to the mosques in darkness: complete light on the Day of Resurrection\"";
      AudioBus.success(); Particles.fire(120);
      Modal.open("win-modal");
    } else {
      overlay.style.display = "grid";
      overlay.querySelector("h3").textContent = I18N.loseTitle[L];
      overlay.querySelector("p").textContent = I18N.loseDesc[L];
      $("fr-start").textContent = I18N.retryBtn[L];
      AudioBus.fail();
    }
  }

  function start() {
    init();
    overlay.style.display = "none";
    running = true;
    loop();
  }

  Lang.init(I18N);
  Modal.bindClose("win-modal");
  $("fr-start").addEventListener("click", start);
  $("win-replay").addEventListener("click", () => { Modal.close("win-modal"); start(); });
  $("reset-btn").addEventListener("click", () => { cancelAnimationFrame(raf); running = false; start(); });
  AudioBus.bindButton($("mute-btn"));

  cv.addEventListener("pointerdown", jump);
  document.addEventListener("keydown", (e) => {
    if (e.code === "Space") { e.preventDefault(); jump(); }
  });

  $("stat-best").textContent = (Storage.get("anos_fajr_best", 0) || "—") + (Storage.get("anos_fajr_best", 0) ? "m" : "");
  init();
  /* رسم إطار أول ثابت خلف نافذة البداية */
  ctx.fillStyle = skyColor(0); ctx.fillRect(0, 0, W, H);
})();
