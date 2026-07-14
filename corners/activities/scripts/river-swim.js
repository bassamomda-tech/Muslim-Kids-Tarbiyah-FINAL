/* ============================================================
   86 · سبّاح النهر — لعبة إيقاع: انقر في المنطقة الذهبية للتقدّم
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "صنّاع الغد", en: "Makers of Tomorrow" },
    crumbTitle:  { ar: "سبّاح النهر", en: "River Swimmer" },
    title:       { ar: "سبّاح النهر", en: "The River Swimmer" },
    desc:        { ar: "السباحة سنّةٌ نبوية ورياضةٌ رائعة! اسبح في النهر بإيقاعٍ منتظم: انقر في الوقت الصحيح مع كل دائرة لتسبح بقوّة. حافظ على إيقاعك لتصل للضفّة!", en: "Swimming is a Prophetic tradition and a great sport! Swim the river in steady rhythm: tap at the right time with each ring to swim strongly. Keep your rhythm to reach the shore!" },
    startTitle:  { ar: "إلى النهر!", en: "To the river!" },
    startDesc:   { ar: "انقر عندما تدخل الدائرة المتحرّكة في المنطقة الذهبية. النقر المتقن يعطيك دفعة أقوى وأطول.", en: "Tap when the moving ring enters the golden zone. A perfect tap gives you a stronger, longer boost." },
    startBtn:    { ar: "اسبح!", en: "Swim!" },
    hint:        { ar: "💡 انقر / المسافة في اللحظة الذهبية", en: "💡 Tap / Space at the golden moment" },
    statBest:    { ar: "أفضل مسافة", en: "Best distance" },
    statPerfect: { ar: "ضربات متقنة", en: "Perfect strokes" },
    sideTitle:   { ar: "السباحة في السنّة", en: "Swimming in the Sunnah" },
    sideQuote:   { ar: "قال عمر رضي الله عنه: «علّموا أولادكم السباحة والرماية وركوب الخيل».", en: "Umar (may Allah be pleased with him) said: \"Teach your children swimming, archery, and horse-riding.\"" },
    sideSrc:     { ar: "أثر", en: "Report" },
    tip:         { ar: "الإيقاع المنتظم سرّ السباحة الجيدة. راقب الدائرة وانقر عندما تكون في المنتصف الذهبي تماماً — كلما تتابعت ضرباتك المتقنة زادت سرعتك.", en: "Steady rhythm is the secret to good swimming. Watch the ring and tap when it's exactly in the golden middle — the more perfect strokes in a row, the faster you go." },
    winEyebrow:  { ar: "سبّاحٌ ماهر", en: "Skilled swimmer" },
    winTitle:    { ar: "وصلتَ الضفّة الأخرى!", en: "You reached the far shore!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "سباحة جديدة", en: "Swim again" },
  };

  const W = 720, H = 320, GOAL = 300;
  const $ = (id) => document.getElementById(id);
  const cv = $("sw-canvas"), ctx = cv.getContext("2d");
  const overlay = $("sw-overlay");

  let running = false, raf = null;
  let dist, ringR, ringDir, combo, perfect, swimmerX, boost, t;
  const GOLD_MIN = 34, GOLD_MAX = 52, RING_MAX = 70;

  function init() {
    dist = 0; ringR = 8; ringDir = 1; combo = 1; perfect = 0; swimmerX = 90; boost = 0; t = 0;
  }

  function tapStroke() {
    if (!running) return;
    if (ringR >= GOLD_MIN && ringR <= GOLD_MAX) {
      const center = (GOLD_MIN + GOLD_MAX) / 2;
      const acc = 1 - Math.abs(ringR - center) / ((GOLD_MAX - GOLD_MIN) / 2);
      perfect++; combo = Math.min(5, combo + 1);
      boost += 22 + acc * 14 + combo * 3;
      $("stat-perfect").textContent = perfect;
      AudioBus.chord([440 + combo * 40, 660], 0.14);
      Particles.fire(12, { originX: (swimmerX / W * 100) + "%", originY: "55%" });
    } else {
      combo = 1;
      boost += 6;
      AudioBus.tone(200, 0.12, "sine", 0.05);
    }
    $("sw-combo").textContent = "×" + combo;
    ringR = 8; ringDir = 1;
  }

  function loop() {
    t++;
    ringR += ringDir * 1.5;
    if (ringR >= RING_MAX) { ringR = RING_MAX; ringDir = -1; combo = 1; $("sw-combo").textContent = "×1"; }
    if (ringR <= 8) ringDir = 1;
    /* التقدّم */
    if (boost > 0) { const step = Math.min(boost, 1.4); dist += step * 0.12; boost -= step; }
    swimmerX = 90 + (dist / GOAL) * (W - 200);

    ctx.clearRect(0, 0, W, H);
    /* الماء */
    const water = ctx.createLinearGradient(0, 0, 0, H);
    water.addColorStop(0, "#8AC4E4"); water.addColorStop(1, "#4A90B8");
    ctx.fillStyle = water; ctx.fillRect(0, 0, W, H);
    /* أمواج */
    ctx.strokeStyle = "rgba(255,255,255,0.25)"; ctx.lineWidth = 2;
    for (let y = 60; y < H; y += 50) {
      ctx.beginPath();
      for (let x = 0; x <= W; x += 20) ctx.lineTo(x, y + Math.sin((x + t * 3) * 0.05) * 5);
      ctx.stroke();
    }
    /* الضفّة الهدف */
    ctx.fillStyle = "#C6A878"; ctx.fillRect(W - 40, 0, 40, H);
    ctx.fillStyle = "#5A7A2E"; ctx.font = "30px sans-serif"; ctx.textAlign = "center"; ctx.fillText("🌴", W - 20, 60);
    /* السبّاح */
    ctx.font = "38px sans-serif"; ctx.textAlign = "center";
    ctx.fillText("🏊", swimmerX, H / 2 + Math.sin(t * 0.2) * 6);
    /* حلقة الإيقاع */
    const rx = swimmerX, ry = H / 2 + 70;
    /* المنطقة الذهبية */
    ctx.strokeStyle = "rgba(224,192,96,0.9)"; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(rx, ry, (GOLD_MIN + GOLD_MAX) / 2, 0, Math.PI * 2); ctx.stroke();
    ctx.setLineDash([3, 6]); ctx.strokeStyle = "rgba(255,255,255,0.5)"; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(rx, ry, GOLD_MIN, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc(rx, ry, GOLD_MAX, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
    /* الحلقة المنكمشة */
    const inGold = ringR >= GOLD_MIN && ringR <= GOLD_MAX;
    ctx.strokeStyle = inGold ? "#E0C060" : "#fff"; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(rx, ry, ringR, 0, Math.PI * 2); ctx.stroke();

    $("sw-dist").textContent = Math.round(dist) + "m / " + GOAL + "m";

    if (dist >= GOAL) return win();
    raf = requestAnimationFrame(loop);
  }

  function win() {
    running = false; cancelAnimationFrame(raf);
    const L = Lang.current();
    const best = Storage.get("anos_swim_perfect", 0);
    if (perfect > best) Storage.set("anos_swim_perfect", perfect);
    $("stat-best").textContent = Math.max(best, perfect) + " ⭐";
    $("win-sub").textContent = L === "ar" ? `${perfect} ضربة متقنة عبرتَ بها النهر!` : `${perfect} perfect strokes carried you across!`;
    Storage.set("anos_swim_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function start() { init(); overlay.style.display = "none"; running = true; loop(); }

  Lang.init(I18N);
  Modal.bindClose("win-modal");
  $("sw-start").addEventListener("click", start);
  $("win-replay").addEventListener("click", () => { Modal.close("win-modal"); start(); });
  $("reset-btn").addEventListener("click", () => { cancelAnimationFrame(raf); running = false; overlay.style.display = "grid"; init(); ctx.fillStyle = "#4A90B8"; ctx.fillRect(0, 0, W, H); });
  cv.addEventListener("pointerdown", tapStroke);
  document.addEventListener("keydown", (e) => { if (e.code === "Space") { e.preventDefault(); tapStroke(); } });
  AudioBus.bindButton($("mute-btn"));
  const bp = Storage.get("anos_swim_perfect", 0); $("stat-best").textContent = bp ? bp + " ⭐" : "—";
  init();
  ctx.fillStyle = "#4A90B8"; ctx.fillRect(0, 0, W, H);
})();
