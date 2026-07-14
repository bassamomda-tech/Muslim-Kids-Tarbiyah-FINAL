/* ============================================================
   83 · سباق الفروسية — عدّاء بحواجز، اقفز في الوقت الصحيح
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "صنّاع الغد", en: "Makers of Tomorrow" },
    crumbTitle:  { ar: "سباق الفروسية", en: "Horse Race" },
    title:       { ar: "سباق الفروسية", en: "The Horse Race" },
    desc:        { ar: "«علّموا أولادكم السباحة والرماية وركوب الخيل»! امتطِ جوادك واقفز فوق الحواجز في الميدان. الوقت يقترب — اقفز في اللحظة الصحيحة لتُكمل الشوط!", en: "\"Teach your children swimming, archery, and horse-riding!\" Mount your horse and leap the hurdles in the arena. Jump at the right moment to finish the race!" },
    startTitle:  { ar: "إلى الميدان!", en: "To the arena!" },
    startDesc:   { ar: "اقطع 500 متر واقفز فوق الحواجز. انقر أو اضغط المسافة للقفز في الوقت المناسب.", en: "Cover 500 meters and jump the hurdles. Tap or press Space to jump at the right time." },
    startBtn:    { ar: "انطلق!", en: "Go!" },
    loseTitle:   { ar: "تعثّر الجواد!", en: "The horse stumbled!" },
    loseDesc:    { ar: "اصطدمتَ بالحاجز. الفارس الماهر يتدرّب ويعيد المحاولة — جرّب ثانيةً!", en: "You hit a hurdle. A skilled rider trains and tries again — go again!" },
    retryBtn:    { ar: "أعد المحاولة", en: "Try again" },
    hint:        { ar: "💡 انقر / المسافة = قفز", en: "💡 Tap / Space = jump" },
    statBest:    { ar: "أفضل مسافة", en: "Best distance" },
    statClears:  { ar: "حواجز عبرتها", en: "Hurdles cleared" },
    sideTitle:   { ar: "رياضة الفروسية", en: "Horsemanship" },
    sideQuote:   { ar: "«ارموا واركبوا، وأن ترموا أحبّ إليّ من أن تركبوا»", en: "\"Shoot and ride, though shooting is dearer to me than riding\"" },
    sideSrc:     { ar: "رواه مسلم", en: "Narrated by Muslim" },
    tip:         { ar: "شجّع الإسلام على الرياضة والقوّة البدنية. «المؤمن القويّ خيرٌ وأحبّ إلى الله من المؤمن الضعيف». اعتنِ بجسدك فهو أمانة.", en: "Islam encourages sport and physical strength. \"The strong believer is better and more beloved to Allah than the weak believer.\" Care for your body — it's a trust." },
    winEyebrow:  { ar: "فارسٌ ماهر", en: "Skilled rider" },
    winTitle:    { ar: "أكملتَ الشوط!", en: "You finished the race!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "سباق جديد", en: "New race" },
  };

  const W = 720, H = 320, GROUND = 250, GOAL = 500;
  const $ = (id) => document.getElementById(id);
  const cv = $("gl-canvas"), ctx = cv.getContext("2d");
  const overlay = $("gl-overlay");

  let running = false, raf = null;
  let dist, speed, py, vy, hurdles, spawnT, clears, t;

  function init() {
    dist = 0; speed = 3; py = GROUND; vy = 0; hurdles = []; spawnT = 80; clears = 0; t = 0;
  }
  function jump() { if (running && py >= GROUND - 1) { vy = -13; AudioBus.tick(620); } }

  function loop() {
    t++;
    dist += speed * 0.09;
    if (spawnT-- <= 0) { hurdles.push({ x: W + 30, cleared: false }); spawnT = 90 + Math.random() * 50 - Math.min(30, t * 0.008); }
    vy += 0.7; py += vy; if (py > GROUND) { py = GROUND; vy = 0; }
    hurdles.forEach(h => h.x -= speed * 1.6);
    hurdles = hurdles.filter(h => h.x > -40);
    speed = Math.min(5, speed + 0.002);

    /* اصطدام */
    for (const h of hurdles) {
      if (!h.cleared && h.x < 118 && h.x > 70 && py > GROUND - 34) return end(false);
      if (!h.cleared && h.x < 80) { h.cleared = true; clears++; $("stat-clears").textContent = clears; AudioBus.pop(); Particles.fire(10, { originX: "14%", originY: "70%" }); }
    }

    /* رسم */
    ctx.clearRect(0, 0, W, H);
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, "#F3D1E3"); sky.addColorStop(1, "#E8C8D8");
    ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H);
    /* مدرجات */
    ctx.fillStyle = "#C8A0B8"; ctx.fillRect(0, 60, W, 40);
    for (let i = 0; i < 30; i++) { ctx.fillStyle = ["#A83A72", "#5A9A8A", "#D4A94A"][i % 3]; ctx.fillRect(i * 26, 66, 8, 8); }
    /* الأرض */
    ctx.fillStyle = "#C6A878"; ctx.fillRect(0, GROUND + 30, W, H - GROUND);
    ctx.strokeStyle = "rgba(255,255,255,0.3)"; ctx.setLineDash([16, 20]);
    ctx.beginPath(); ctx.moveTo(-(t * speed * 1.6 % 36), GROUND + 44); ctx.lineTo(W, GROUND + 44); ctx.stroke(); ctx.setLineDash([]);
    /* الحواجز */
    hurdles.forEach(h => {
      ctx.fillStyle = "#8A5B3A"; ctx.fillRect(h.x, GROUND - 4, 6, 34); ctx.fillRect(h.x + 24, GROUND - 4, 6, 34);
      ctx.fillStyle = "#D4A94A"; ctx.fillRect(h.x - 2, GROUND, 34, 8);
    });
    /* الفارس */
    const bob = py >= GROUND ? Math.sin(t * 0.5) * 2 : 0;
    ctx.font = "46px sans-serif"; ctx.textAlign = "center";
    ctx.save(); ctx.translate(96, py + 12 + bob); ctx.scale(-1, 1); ctx.fillText("🏇", 0, 0); ctx.restore();
    /* HUD */
    $("gl-dist").textContent = Math.round(dist) + "m / " + GOAL + "m";
    $("gl-jumps").textContent = "🚧 " + clears;

    if (dist >= GOAL) return end(true);
    raf = requestAnimationFrame(loop);
  }

  function end(won) {
    running = false; cancelAnimationFrame(raf);
    const L = Lang.current();
    const best = Storage.get("anos_horse_best", 0);
    if (dist > best) Storage.set("anos_horse_best", Math.round(dist));
    $("stat-best").textContent = Math.max(best, Math.round(dist)) + "m";
    if (won) {
      $("win-sub").textContent = L === "ar" ? `عبرتَ ${clears} حاجزاً ووصلت خط النهاية!` : `You cleared ${clears} hurdles and reached the finish!`;
      AudioBus.success(); Particles.fire(120); Modal.open("win-modal");
    } else {
      overlay.style.display = "grid";
      overlay.querySelector("h3").textContent = I18N.loseTitle[L];
      overlay.querySelector("p").textContent = I18N.loseDesc[L];
      $("gl-start").textContent = I18N.retryBtn[L];
      AudioBus.fail();
    }
  }

  function start() { init(); overlay.style.display = "none"; running = true; loop(); }

  Lang.init(I18N);
  Modal.bindClose("win-modal");
  $("gl-start").addEventListener("click", start);
  $("win-replay").addEventListener("click", () => { Modal.close("win-modal"); start(); });
  $("reset-btn").addEventListener("click", () => { cancelAnimationFrame(raf); running = false; start(); });
  cv.addEventListener("pointerdown", jump);
  document.addEventListener("keydown", (e) => { if (e.code === "Space") { e.preventDefault(); jump(); } });
  AudioBus.bindButton($("mute-btn"));
  $("stat-best").textContent = (Storage.get("anos_horse_best", 0) || "—") + (Storage.get("anos_horse_best", 0) ? "m" : "");
  init();
  ctx.fillStyle = "#F3D1E3"; ctx.fillRect(0, 0, W, H);
})();
