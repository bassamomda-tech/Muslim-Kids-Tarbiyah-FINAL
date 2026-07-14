/* ============================================================
   70 · إشارة الوقف والوصل — لعبة ردّ فعل
   تظهر علامة وقف؛ اضغط الزر الصحيح قبل نفاد المؤقّت.
   العلامات تُسرِع تدريجياً.
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "كنوز الوحي", en: "Treasures of Revelation" },
    crumbTitle:  { ar: "إشارة الوقف والوصل", en: "Waqf Signals" },
    title:       { ar: "إشارة الوقف والوصل", en: "Stop & Continue Signals" },
    desc:        { ar: "في المصحف رموزٌ صغيرة تخبرك متى تقف ومتى تصل! تظهر الإشارة بسرعة — اضغط «قِف» عند علامة الوقف، و«صِل» عند علامة الوصل، قبل نفاد الوقت!", en: "The mushaf has tiny symbols telling you when to stop and when to continue! The signal flashes quickly — press \"Stop\" at a stop-sign and \"Go\" at a continue-sign before time runs out!" },
    stopBtn:     { ar: "قِف ✋", en: "Stop ✋" },
    goBtn:       { ar: "صِل ➜", en: "Go ➜" },
    startBtn:    { ar: "ابدأ", en: "Start" },
    statRound:   { ar: "الإشارة", en: "Signal" },
    statScore:   { ar: "إصابات", en: "Hits" },
    statStreak:  { ar: "التتابع", en: "Streak" },
    sideTitle:   { ar: "علامات الوقف", en: "Waqf marks" },
    sidePill:    { ar: "رموز", en: "Symbols" },
    tip:         { ar: "علامات الوقف تساعدنا على فهم المعنى وعدم قطع الكلام في مكانٍ يُفسده. وضعها العلماء رحمةً بالقارئ.", en: "Waqf marks help us understand the meaning and avoid stopping where it would distort it. Scholars placed them out of mercy for the reader." },
    winEyebrow:  { ar: "قارئ سريع البديهة", en: "Quick-witted reciter" },
    winTitle:    { ar: "عرفتَ متى تقف ومتى تصل!", en: "You know when to stop and continue!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "جولة جديدة", en: "New round" },
    good:        { ar: "إصابة! ✓", en: "Hit! ✓" },
    bad:         { ar: "خطأ — راجع معنى الرمز", en: "Wrong — check the symbol's meaning" },
    timeout:     { ar: "انتهى الوقت! كن أسرع", en: "Time's up! Be faster" },
    tapStart:    { ar: "اضغط «ابدأ» — استعدّ لردّ فعلٍ سريع!", en: "Press \"Start\" — get ready for quick reflexes!" },
  };

  /* العلامات: sym الرمز، action صح، اسمها ومعناها */
  const SIGNS = [
    { sym: "مـ", action: "stop", ar: "الوقف اللازم", en: "Obligatory stop", desc: { ar: "قِف حتماً — الوصل يُغيّر المعنى", en: "Must stop — continuing changes the meaning" } },
    { sym: "ط", action: "stop", ar: "الوقف المطلق", en: "Absolute stop", desc: { ar: "الأفضل أن تقف", en: "Better to stop" } },
    { sym: "قلى", action: "stop", ar: "الوقف أولى", en: "Stopping is preferred", desc: { ar: "الوقف أرجح من الوصل", en: "Stopping is preferred over continuing" } },
    { sym: "لا", action: "go", ar: "لا تقف", en: "Do not stop", desc: { ar: "صِل ولا تقف هنا", en: "Continue — don't stop here" } },
    { sym: "صلى", action: "go", ar: "الوصل أولى", en: "Continuing is preferred", desc: { ar: "الوصل أرجح من الوقف", en: "Continuing is preferred over stopping" } },
    { sym: "ج", action: "go", ar: "الوقف الجائز", en: "Permissible (lean continue)", desc: { ar: "يجوز الوجهان، وهنا نصِل للّعب", en: "Both allowed; here we continue for the game" } },
  ];
  const TOTAL = 12;

  const $ = (id) => document.getElementById(id);
  let round = 0, score = 0, streak = 0, cur = null, timer = null, deadline = 0, dur = 2200, active = false;

  function renderLegend() {
    const L = Lang.current();
    $("wq-legend").innerHTML = SIGNS.map(s => `
      <div class="row">
        <span class="sym" style="color:${s.action === "stop" ? "#B04A32" : "var(--mint-ink)"}">${s.sym}</span>
        <span>${L === "ar" ? s.ar : s.en} — <span style="color:${s.action === "stop" ? "#B04A32" : "var(--mint-ink)"}; font-weight:800;">${s.action === "stop" ? (L === "ar" ? "قِف" : "Stop") : (L === "ar" ? "صِل" : "Go")}</span></span>
      </div>`).join("");
  }

  function nextSign() {
    if (round >= TOTAL) return win();
    cur = SIGNS[Math.floor(Math.random() * SIGNS.length)];
    const L = Lang.current();
    $("wq-sign").textContent = cur.sym;
    $("wq-sign").style.color = "var(--ink)";
    $("wq-sign").style.animation = "none"; void $("wq-sign").offsetWidth; $("wq-sign").style.animation = "";
    $("stat-round").textContent = `${round + 1}/${TOTAL}`;
    $("wq-feedback").textContent = cur ? (L === "ar" ? cur.ar : cur.en) : "";
    AudioBus.tick(660);
    /* المؤقّت */
    dur = Math.max(900, 2200 - round * 110);
    deadline = performance.now() + dur;
    active = true;
    tickTimer();
  }

  function tickTimer() {
    cancelAnimationFrame(timer);
    (function frame() {
      const left = deadline - performance.now();
      const pct = Math.max(0, left / dur);
      $("wq-timer").style.width = (pct * 100) + "%";
      if (left <= 0) { active = false; miss("timeout"); return; }
      if (active) timer = requestAnimationFrame(frame);
    })();
  }

  function answer(action) {
    if (!active || !cur) return;
    active = false;
    cancelAnimationFrame(timer);
    const L = Lang.current();
    if (action === cur.action) {
      score++; streak++;
      $("stat-score").textContent = score;
      $("stat-streak").textContent = streak;
      AudioBus.chord([523, 659], 0.14);
      if (streak >= 3) Particles.fire(16, { originY: "35%" });
      $("wq-feedback").textContent = I18N.good[L] + " — " + (L === "ar" ? cur.desc.ar : cur.desc.en);
      $("wq-sign").style.color = "var(--mint-ink)";
    } else {
      streak = 0; $("stat-streak").textContent = 0;
      AudioBus.fail();
      $("wq-feedback").textContent = I18N.bad[L] + " — " + (L === "ar" ? cur.desc.ar : cur.desc.en);
      $("wq-sign").style.color = "#B04A32";
    }
    round++;
    setTimeout(nextSign, 900);
  }

  function miss(reason) {
    streak = 0; $("stat-streak").textContent = 0;
    AudioBus.fail();
    $("wq-feedback").textContent = I18N[reason][Lang.current()];
    round++;
    setTimeout(nextSign, 900);
  }

  function start() {
    round = 0; score = 0; streak = 0;
    $("stat-score").textContent = 0; $("stat-streak").textContent = 0;
    $("wq-start").style.display = "none";
    nextSign();
  }

  function win() {
    active = false;
    const L = Lang.current();
    $("wq-timer").style.width = "0%";
    $("wq-sign").textContent = "✓";
    $("wq-start").style.display = "";
    $("win-sub").textContent = L === "ar"
      ? `${score} إصابة من ${TOTAL} — عينٌ سريعة على المصحف!`
      : `${score} of ${TOTAL} hits — a quick eye on the mushaf!`;
    Storage.set("anos_waqf_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { renderLegend(); if (!active) $("wq-feedback").textContent = I18N.tapStart[Lang.current()]; });
  Modal.bindClose("win-modal");
  $("wq-start").addEventListener("click", start);
  $("win-replay").addEventListener("click", () => { Modal.close("win-modal"); start(); });
  $("reset-btn").addEventListener("click", () => { active = false; cancelAnimationFrame(timer); $("wq-timer").style.width = "0%"; $("wq-sign").textContent = "مـ"; $("wq-start").style.display = ""; $("wq-feedback").textContent = I18N.tapStart[Lang.current()]; round = 0; score = 0; streak = 0; $("stat-round").textContent = "0/12"; $("stat-score").textContent = 0; $("stat-streak").textContent = 0; });
  $("wq-stop").addEventListener("click", () => answer("stop"));
  $("wq-go").addEventListener("click", () => answer("go"));
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" || e.key === "s") answer("stop");
    if (e.key === "ArrowRight" || e.key === "g") answer("go");
  });
  AudioBus.bindButton($("mute-btn"));
  renderLegend();
  $("wq-feedback").textContent = I18N.tapStart[Lang.current()];
})();
