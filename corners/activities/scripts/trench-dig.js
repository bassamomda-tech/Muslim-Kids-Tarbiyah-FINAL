/* ============================================================
   80 · حفر الخندق — لعبة توقيت: أوقِف المؤشّر في المنطقة الخضراء
   لتضرب ضربةً قوية وتحفر الخندق كاملاً
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "على خطى القدوات", en: "In the Footsteps of Role Models" },
    crumbTitle:  { ar: "حفر الخندق", en: "Digging the Trench" },
    title:       { ar: "حفر الخندق", en: "Digging the Trench" },
    desc:        { ar: "في غزوة الأحزاب حفر النبي ﷺ والصحابة خندقاً حول المدينة! أوقِف مؤشّر القوّة في المنطقة الخضراء لتضرب بالمعول ضربةً قوية. احفر الخندق كاملاً!", en: "In the Battle of the Confederates, the Prophet ﷺ and Companions dug a trench around Madinah! Stop the power meter in the green zone to strike hard with the pickaxe. Dig the whole trench!" },
    strikeBtn:   { ar: "⛏ اضرب بالمعول!", en: "⛏ Strike!" },
    statDepth:   { ar: "عمق الخندق", en: "Trench depth" },
    statPerfect: { ar: "ضربات مثالية", en: "Perfect strikes" },
    sideTitle:   { ar: "غزوة الخندق", en: "The Battle of the Trench" },
    sideQuote:   { ar: "كان النبي ﷺ يحفر مع الصحابة حتى اغبرّ بطنه الشريف، وينشد معهم ويرفع معنوياتهم.", en: "The Prophet ﷺ dug alongside the Companions until dust covered him, singing with them and lifting their spirits." },
    sideSrc:     { ar: "السيرة النبوية", en: "The Prophetic biography" },
    tip:         { ar: "درسٌ عظيم: القائد يعمل مع جنوده ولا يتكبّر. أوقِف المؤشّر في الوسط الأخضر تماماً للحصول على «ضربة مثالية» تحفر أعمق!", en: "A great lesson: the leader works with his people and isn't arrogant. Stop the meter right in the green center for a \"perfect strike\" that digs deeper!" },
    winEyebrow:  { ar: "اكتمل الخندق", en: "Trench complete" },
    winTitle:    { ar: "حميتَ المدينة بالخندق!", en: "You protected Madinah with the trench!" },
    winMeaning:  { ar: "<strong>النتيجة</strong> عجز الأحزاب عن عبور الخندق، وأرسل الله ريحاً شديدة فرحلوا. نصرٌ بالتخطيط والعمل الجماعي والتوكل على الله.", en: "<strong>The result</strong> The Confederates couldn't cross the trench, and Allah sent a fierce wind so they withdrew. Victory through planning, teamwork, and trust in Allah." },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "احفر ثانيةً", en: "Dig again" },
    perfect:     { ar: "ضربة مثالية! 💥", en: "Perfect strike! 💥" },
    good:        { ar: "ضربة جيدة", en: "Good strike" },
    weak:        { ar: "ضربة ضعيفة — صوّب على الأخضر", en: "Weak strike — aim for the green" },
  };

  const W = 720, H = 340;
  const $ = (id) => document.getElementById(id);
  const cv = $("kh-canvas"), ctx = cv.getContext("2d");

  let depth = 0, strikes = 0, perfect = 0;
  let meterPos = 0, meterDir = 1, meterRaf = null, meterSpeed = 1.7;
  const sweetStart = 40, sweetEnd = 60; /* المنطقة الخضراء ٪ */
  let diggers = [];

  function initDiggers() {
    diggers = [ { x: 180, emoji: "🧑", swing: 0 }, { x: 360, emoji: "🧔", swing: 0.4 }, { x: 540, emoji: "🧑‍🦱", swing: 0.8 } ];
  }

  function draw(shake) {
    ctx.clearRect(0, 0, W, H);
    /* السماء */
    ctx.fillStyle = "#CFE0EC"; ctx.fillRect(0, 0, W, H);
    /* أسوار المدينة خلفاً */
    ctx.fillStyle = "#C9B08A";
    for (let i = 0; i < 8; i++) { ctx.fillRect(20 + i * 90, 40, 60, 60); ctx.fillRect(20 + i * 90, 30, 12, 12); ctx.fillRect(44 + i * 90, 30, 12, 12); }
    /* الأرض */
    const groundY = 150;
    ctx.fillStyle = "#B58A5A"; ctx.fillRect(0, groundY, W, H - groundY);
    /* الخندق (يتعمّق مع depth) */
    const trenchDepth = (depth / 100) * (H - groundY - 20);
    ctx.fillStyle = "#6B4A2A";
    ctx.beginPath();
    ctx.moveTo(120, groundY);
    ctx.lineTo(140, groundY + trenchDepth);
    ctx.lineTo(W - 140, groundY + trenchDepth);
    ctx.lineTo(W - 120, groundY);
    ctx.closePath(); ctx.fill();
    /* ظل داخلي */
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(140, groundY + trenchDepth - 6, W - 280, 6);
    /* الحفّارون */
    const sh = shake || 0;
    diggers.forEach(d => {
      ctx.save();
      ctx.translate(d.x + sh, groundY - 4);
      ctx.font = "40px sans-serif"; ctx.textAlign = "center";
      ctx.fillText(d.emoji, 0, 0);
      /* معول */
      ctx.font = "24px sans-serif";
      ctx.fillText("⛏", 22, -8 - Math.sin(d.swing) * 6);
      ctx.restore();
    });
    /* غبار عند الاهتزاز */
    if (shake) {
      ctx.fillStyle = "rgba(180,138,90,0.4)";
      for (let i = 0; i < 8; i++) ctx.fillRect(140 + Math.random() * (W - 280), groundY + trenchDepth - Math.random() * 20, 4, 4);
    }
  }

  function renderSweet() {
    $("kh-sweet").style.insetInlineStart = sweetStart + "%";
    $("kh-sweet").style.width = (sweetEnd - sweetStart) + "%";
  }

  function meterLoop() {
    meterPos += meterDir * meterSpeed;
    if (meterPos >= 100) { meterPos = 100; meterDir = -1; }
    if (meterPos <= 0) { meterPos = 0; meterDir = 1; }
    $("kh-fill").style.width = meterPos + "%";
    meterRaf = requestAnimationFrame(meterLoop);
  }

  function strike() {
    if (depth >= 100) return;
    const L = Lang.current();
    strikes++;
    let gain, msg, shake;
    if (meterPos >= sweetStart && meterPos <= sweetEnd) {
      /* مثالية */
      const center = (sweetStart + sweetEnd) / 2;
      const bonus = 1 - Math.abs(meterPos - center) / ((sweetEnd - sweetStart) / 2);
      gain = 9 + bonus * 5;
      perfect++; $("stat-perfect").textContent = perfect;
      msg = I18N.perfect[L]; shake = 8;
      AudioBus.chord([392, 523, 659], 0.18);
      Particles.fire(24, { originY: "55%" });
    } else if (meterPos >= sweetStart - 15 && meterPos <= sweetEnd + 15) {
      gain = 5; msg = I18N.good[L]; shake = 4;
      AudioBus.tone(300, 0.14, "square", 0.06);
    } else {
      gain = 2; msg = I18N.weak[L]; shake = 2;
      AudioBus.tone(180, 0.14, "sawtooth", 0.05);
    }
    depth = Math.min(100, depth + gain);
    $("stat-depth").textContent = Math.round(depth) + "%";
    $("kh-depth").textContent = Math.round(depth) + "%";
    $("kh-strikes").textContent = strikes;
    $("kh-feedback").textContent = msg;
    diggers.forEach(d => d.swing += 1);
    /* اهتزاز */
    let s = shake, sd = () => { draw(s); s = -s * 0.7; if (Math.abs(s) > 0.5) requestAnimationFrame(sd); else draw(0); };
    sd();
    /* تسريع المؤشّر تدريجياً */
    meterSpeed = Math.min(3.4, 1.7 + depth * 0.016);
    if (depth >= 100) setTimeout(win, 500);
  }

  function win() {
    cancelAnimationFrame(meterRaf);
    const L = Lang.current();
    $("win-sub").textContent = L === "ar" ? `حفرتَ الخندق بـ ${strikes} ضربة (${perfect} مثالية)` : `You dug the trench in ${strikes} strikes (${perfect} perfect)`;
    Storage.set("anos_trench_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    depth = 0; strikes = 0; perfect = 0; meterPos = 0; meterDir = 1; meterSpeed = 1.7;
    $("stat-depth").textContent = "0%"; $("stat-perfect").textContent = 0;
    $("kh-depth").textContent = "0%"; $("kh-strikes").textContent = 0;
    $("kh-feedback").textContent = "";
    Modal.close("win-modal");
    initDiggers(); draw(0);
    cancelAnimationFrame(meterRaf); meterLoop();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { draw(0); });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  $("kh-strike").addEventListener("click", strike);
  document.addEventListener("keydown", (e) => { if (e.code === "Space") { e.preventDefault(); strike(); } });
  AudioBus.bindButton($("mute-btn"));
  initDiggers(); renderSweet(); draw(0); meterLoop();
})();
