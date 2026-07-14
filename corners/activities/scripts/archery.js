/* ============================================================
   84 · رماية السهام — فيزياء مقذوف مع رياح؛ اضبط الزاوية والقوّة
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "صنّاع الغد", en: "Makers of Tomorrow" },
    crumbTitle:  { ar: "رماية السهام", en: "Archery" },
    title:       { ar: "رماية السهام", en: "Archery" },
    desc:        { ar: "الرماية سنّةٌ نبوية! صوّب على الهدف: اضبط الزاوية والقوّة، وانتبه للرياح، ثم أطلق السهم. أصِب المركز الذهبي لأعلى النقاط. لديك 6 سهام لكل جولة.", en: "Archery is a Prophetic tradition! Aim at the target: set the angle and power, mind the wind, then loose the arrow. Hit the golden center for top points. You have 6 arrows per round." },
    angleLabel:  { ar: "📐 الزاوية", en: "📐 Angle" },
    powerLabel:  { ar: "💪 القوّة", en: "💪 Power" },
    shootBtn:    { ar: "أطلق! 🎯", en: "Loose! 🎯" },
    statRound:   { ar: "الجولة", en: "Round" },
    statBull:    { ar: "في المركز", en: "Bullseyes" },
    sideTitle:   { ar: "فضل الرماية", en: "The virtue of archery" },
    sideQuote:   { ar: "«مَن علِم الرمي ثم تركه فليس منّا»", en: "\"Whoever learns archery then abandons it is not one of us\"" },
    sideSrc:     { ar: "رواه مسلم", en: "Narrated by Muslim" },
    tip:         { ar: "انظر لسهم الرياح أعلى الهدف: إن هبّت يميناً صوّب أكثر لليسار قليلاً. الزاوية المثالية غالباً بين 25° و40°. تدرّب على التصويب!", en: "Watch the wind arrow above the target: if it blows right, aim a bit more left. The ideal angle is often between 25° and 40°. Practice your aim!" },
    winEyebrow:  { ar: "رامٍ ماهر", en: "Skilled archer" },
    winTitle:    { ar: "أنهيتَ جولات الرماية!", en: "You finished the archery rounds!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "من جديد", en: "Again" },
    bull:        { ar: "في المركز الذهبي! 🎯 +10", en: "Golden bullseye! 🎯 +10" },
    hit:         { ar: "إصابة! ", en: "Hit! " },
    miss:        { ar: "أخطأ الهدف — عدّل الزاوية والقوّة", en: "Missed — adjust angle and power" },
  };

  const W = 720, H = 360;
  const $ = (id) => document.getElementById(id);
  const cv = $("ar-canvas"), ctx = cv.getContext("2d");

  const BOW_X = 70, BOW_Y = 290;
  const RINGS = [ { r: 12, pts: 10, c: "#E0C060" }, { r: 26, pts: 7, c: "#C85A92" }, { r: 42, pts: 5, c: "#5A9A8A" }, { r: 60, pts: 2, c: "#8A6B9A" } ];
  let round = 0, arrows = 6, score = 0, bulls = 0;
  let angle = 30, power = 60, wind = 0, targetY = 150, flying = null, marks = [];

  function newRound() {
    arrows = 6; marks = [];
    wind = (Math.random() * 2 - 1) * 3;
    targetY = 110 + Math.random() * 140;
    $("ar-arrows").textContent = "🏹 " + arrows;
    $("stat-round").textContent = `${round + 1}/3`;
    draw();
  }

  function targetCX() { return 620; }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, "#F3D1E3"); sky.addColorStop(1, "#E8D0E0");
    ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#C6DFA8"; ctx.fillRect(0, 320, W, 40);

    /* الهدف */
    const tx = targetCX(), ty = targetY;
    for (let i = RINGS.length - 1; i >= 0; i--) {
      ctx.beginPath(); ctx.arc(tx, ty, RINGS[i].r, 0, Math.PI * 2);
      ctx.fillStyle = RINGS[i].c; ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.6)"; ctx.lineWidth = 1.5; ctx.stroke();
    }
    ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(tx, ty, 3, 0, Math.PI * 2); ctx.fill();
    /* حامل الهدف */
    ctx.strokeStyle = "#8A5B3A"; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(tx, ty + 60); ctx.lineTo(tx, 320); ctx.stroke();

    /* سهم الرياح */
    ctx.fillStyle = "#A83A72"; ctx.font = "800 14px 'Plus Jakarta Sans'"; ctx.textAlign = "center";
    const wtxt = wind > 0.3 ? "الرياح ←→ " + "»".repeat(Math.round(Math.abs(wind))) : wind < -0.3 ? "«".repeat(Math.round(Math.abs(wind))) + " رياح" : "لا رياح";
    ctx.fillText(wind > 0.3 ? "»".repeat(Math.min(3, Math.round(Math.abs(wind)))) : wind < -0.3 ? "«".repeat(Math.min(3, Math.round(Math.abs(wind)))) : "•", tx, ty - 72);

    /* القوس والرامي */
    ctx.font = "40px sans-serif"; ctx.textAlign = "center";
    ctx.fillText("🏹", BOW_X, BOW_Y);
    /* خط التصويب */
    if (!flying) {
      const rad = angle * Math.PI / 180;
      ctx.strokeStyle = "rgba(168,58,114,0.4)"; ctx.setLineDash([4, 6]); ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(BOW_X + 10, BOW_Y - 10);
      ctx.lineTo(BOW_X + 10 + Math.cos(rad) * power * 1.4, BOW_Y - 10 - Math.sin(rad) * power * 1.4);
      ctx.stroke(); ctx.setLineDash([]);
    }
    /* العلامات السابقة */
    marks.forEach(m => { ctx.fillStyle = "#2A2438"; ctx.font = "18px sans-serif"; ctx.fillText("➶", m.x, m.y); });
    /* السهم الطائر */
    if (flying) { ctx.save(); ctx.translate(flying.x, flying.y); ctx.rotate(-Math.atan2(flying.vy, flying.vx)); ctx.font = "24px sans-serif"; ctx.fillText("➶", 0, 0); ctx.restore(); }
  }

  function shoot() {
    if (flying || arrows <= 0) return;
    const rad = angle * Math.PI / 180;
    flying = { x: BOW_X + 10, y: BOW_Y - 10, vx: Math.cos(rad) * power * 0.19, vy: -Math.sin(rad) * power * 0.19 };
    AudioBus.tone(300, 0.12, "triangle", 0.06);
    animate();
  }

  function animate() {
    flying.vy += 0.16;
    flying.vx += wind * 0.006;
    flying.x += flying.vx; flying.y += flying.vy;
    draw();
    const tx = targetCX(), ty = targetY;
    const d = Math.hypot(flying.x - tx, flying.y - ty);
    if (flying.x >= tx - 4 && Math.abs(flying.x - tx) < 12 && d < 62) return hitTarget(d, tx, ty);
    if (flying.y > 320 || flying.x > W + 20) return hitTarget(999, tx, ty);
    requestAnimationFrame(animate);
  }

  function hitTarget(d, tx, ty) {
    const L = Lang.current();
    let pts = 0, ring = null;
    for (const r of RINGS) { if (d <= r.r) { pts = r.pts; ring = r; break; } }
    marks.push({ x: Math.min(tx, flying.x), y: flying.y });
    flying = null; arrows--;
    $("ar-arrows").textContent = "🏹 " + arrows;
    if (pts === 10) { bulls++; $("stat-bull").textContent = bulls; AudioBus.chord([523, 659, 784], 0.2); Particles.fire(30, { originX: "85%", originY: "45%" }); showFb(I18N.bull[L]); }
    else if (pts > 0) { AudioBus.pop(); showFb(I18N.hit[L] + "+" + pts); }
    else { AudioBus.fail(); showFb(I18N.miss[L]); }
    score += pts; $("ar-score").textContent = score;
    draw();
    if (arrows <= 0) {
      round++;
      setTimeout(() => { if (round >= 3) win(); else newRound(); }, 1200);
    }
  }

  let fbTimer = null;
  function showFb(msg) {
    let fb = $("ar-fb");
    if (!fb) { fb = document.createElement("div"); fb.id = "ar-fb"; fb.style.cssText = "position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(42,36,56,0.85);color:#fff;padding:8px 18px;border-radius:99px;font-weight:800;font-size:15px;z-index:4;pointer-events:none;"; $("ar-canvas").parentElement.appendChild(fb); }
    fb.textContent = msg; fb.style.opacity = "1";
    clearTimeout(fbTimer); fbTimer = setTimeout(() => { fb.style.opacity = "0"; fb.style.transition = "opacity 0.4s"; }, 900);
  }

  function win() {
    const L = Lang.current();
    $("win-sub").textContent = L === "ar" ? `مجموع النقاط ${score} · ${bulls} في المركز الذهبي` : `Total score ${score} · ${bulls} bullseyes`;
    Storage.set("anos_archery_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() { round = 0; score = 0; bulls = 0; $("ar-score").textContent = 0; $("stat-bull").textContent = 0; Modal.close("win-modal"); newRound(); }

  $("ar-angle").addEventListener("input", (e) => { angle = +e.target.value; $("ar-angle-v").textContent = angle + "°"; draw(); });
  $("ar-power").addEventListener("input", (e) => { power = +e.target.value; $("ar-power-v").textContent = power + "%"; draw(); });
  $("ar-shoot").addEventListener("click", shoot);

  Lang.init(I18N);
  document.addEventListener("langchange", draw);
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  AudioBus.bindButton($("mute-btn"));
  newRound();
})();
