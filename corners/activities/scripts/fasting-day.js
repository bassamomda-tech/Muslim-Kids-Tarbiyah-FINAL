/* ============================================================
   52 · يوم مع الصائم — محاكاة يوم رمضاني بقرارات
   الوقت يجري من 04:15 حتى 19:05، ومواقف تقطعه
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "رحلة الإيمان", en: "Journey of Faith" },
    crumbTitle:  { ar: "يوم مع الصائم", en: "A Fasting Day" },
    title:       { ar: "يوم مع الصائم", en: "A Day with a Fasting Kid" },
    desc:        { ar: "عِش يوماً كاملاً من رمضان: من السحور قبل الفجر حتى مدفع الإفطار. الشمس تتحرك، والمواقف تظهر — وقراراتك تملأ قلبك نوراً!", en: "Live a full Ramadan day: from suhoor before dawn until the iftar cannon. The sun moves, situations appear — and your choices fill your heart with light!" },
    meterLabel:  { ar: "نور القلب", en: "Heart light" },
    statEvents:  { ar: "المواقف", en: "Events" },
    statBest:    { ar: "أفضل نور", en: "Best light" },
    sideTitle:   { ar: "لماذا نصوم؟", en: "Why do we fast?" },
    sidePill:    { ar: "رمضان", en: "Ramadan" },
    sideQuote:   { ar: "«مَن صام رمضان إيماناً واحتساباً غُفر له ما تقدّم من ذنبه»", en: "\"Whoever fasts Ramadan out of faith and hope of reward, his past sins are forgiven\"" },
    sideSrc:     { ar: "متفق عليه", en: "Agreed upon" },
    tip:         { ar: "الصيام ليس عن الطعام فقط — الصائم الحقيقي يصوم لسانُه عن الكلام السيّئ، وعينُه وأذنُه عمّا لا يُرضي الله.", en: "Fasting is not only about food — a true fasting person keeps their tongue from bad words, and their eyes and ears from what displeases Allah." },
    winEyebrow:  { ar: "الله أكبر... مدفع الإفطار!", en: "Allahu Akbar... the iftar cannon!" },
    winTitle:    { ar: "أتممتَ يوم الصيام", en: "You completed the fasting day" },
    winScoreLabel:{ ar: "نور قلبك اليوم", en: "Your heart's light today" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "يوم جديد", en: "New day" },
  };

  /* المواقف: time بالدقائق من منتصف الليل */
  const EVENTS = [
    { time: 4 * 60 + 15, icon: "🥣",
      t: { ar: "السحور", en: "Suhoor" },
      p: { ar: "أيقظتك أمك للسحور، وعيناك لا تريدان أن تفتحا...", en: "Mom wakes you for suhoor, and your eyes refuse to open..." },
      c: [
        { ar: "أقوم وأتسحّر — «تسحّروا فإن في السحور بركة»", en: "Get up and eat — \"Have suhoor, for in it is blessing\"", pts: 15 },
        { ar: "أكمل نومي وأصوم بلا سحور", en: "Keep sleeping and fast without suhoor", pts: 4 },
      ] },
    { time: 5 * 60, icon: "🕌",
      t: { ar: "أذان الفجر", en: "Fajr adhan" },
      p: { ar: "الأذان يرتفع من المسجد القريب. ماذا تفعل؟", en: "The adhan rises from the nearby mosque. What do you do?" },
      c: [
        { ar: "أصلّي الفجر ثم أنام", en: "Pray Fajr, then sleep", pts: 15 },
        { ar: "أنام الآن وأصلّي عندما أستيقظ", en: "Sleep now and pray when I wake up", pts: 3 },
      ] },
    { time: 10 * 60 + 30, icon: "🍬",
      p: { ar: "في المدرسة، صديقك غير الصائم يعرض عليك قطعة حلوى لذيذة!", en: "At school, your non-fasting friend offers you a delicious candy!" },
      t: { ar: "إغراء الحلوى", en: "The candy test" },
      c: [
        { ar: "أشكره وأقول: أنا صائم، احتفظ لي بها للإفطار", en: "Thank him: \"I'm fasting — save it for me for iftar!\"", pts: 15 },
        { ar: "آكلها بسرعة قبل أن يراني أحد", en: "Eat it quickly before anyone sees", pts: 0 },
      ] },
    { time: 12 * 60 + 30, icon: "😠",
      t: { ar: "غضب الظهيرة", en: "Midday anger" },
      p: { ar: "زميلٌ أخذ قلمك بلا إذن وأنت جائع ومتضايق. تشعر أنك ستنفجر!", en: "A classmate took your pen without asking, and you're hungry and annoyed. You feel like exploding!" },
      c: [
        { ar: "أتنفّس وأقول: اللهم إني صائم", en: "Breathe and say: \"O Allah, I am fasting\"", pts: 15 },
        { ar: "أصرخ في وجهه", en: "Yell at him", pts: 0 },
      ] },
    { time: 14 * 60, icon: "🥵",
      t: { ar: "عطش العصر", en: "Afternoon thirst" },
      p: { ar: "عدت من المدرسة والجو حار، والماء البارد أمامك في الثلاجة...", en: "You're back from school, it's hot, and cold water is right there in the fridge..." },
      c: [
        { ar: "أصبر وأتوضأ لأصلّي العصر — الماء البارد ينعش!", en: "Be patient and make wudu for Asr — cool water refreshes!", pts: 15 },
        { ar: "رشفة صغيرة لن يعرف بها أحد", en: "One tiny sip, no one will know", pts: 0 },
      ] },
    { time: 16 * 60, icon: "😴",
      t: { ar: "تعب ما قبل المغرب", en: "Pre-sunset tiredness" },
      p: { ar: "بقيت ساعات قليلة، وأنت متعب. أمك تجهّز مائدة الإفطار في المطبخ.", en: "A few hours left, and you're tired. Mom is preparing iftar in the kitchen." },
      c: [
        { ar: "أساعدها في تجهيز المائدة", en: "Help her set the table", pts: 15 },
        { ar: "أجلس أمام الشاشة حتى الأذان", en: "Sit in front of a screen until adhan", pts: 5 },
      ] },
    { time: 18 * 60 + 30, icon: "🤲",
      t: { ar: "ساعة الإجابة", en: "The hour of answered du'a" },
      p: { ar: "قبل المغرب بقليل — للصائم عند فطره دعوةٌ لا تُرَدّ!", en: "Just before sunset — the fasting person's du'a at iftar is not rejected!" },
      c: [
        { ar: "أرفع يديّ وأدعو لي ولعائلتي وللمسلمين", en: "Raise my hands and pray for me, my family, and all Muslims", pts: 15 },
        { ar: "أراقب الساعة فقط وأعدّ الدقائق", en: "Just watch the clock counting minutes", pts: 5 },
      ] },
    { time: 19 * 60 + 5, icon: "🌙",
      t: { ar: "أذان المغرب", en: "Maghrib adhan" },
      p: { ar: "الله أكبر! حان وقت الإفطار. بماذا تبدأ؟", en: "Allahu Akbar! It's iftar time. What do you start with?" },
      c: [
        { ar: "تمرات وماء وأقول: ذهب الظمأ وابتلّت العروق", en: "Dates and water, saying the iftar du'a", pts: 15 },
        { ar: "أهجم على كل شيء دفعة واحدة!", en: "Attack everything at once!", pts: 5 },
      ] },
  ];

  const DAY_START = 4 * 60, DAY_END = 19 * 60 + 10;
  const $ = (id) => document.getElementById(id);

  let time = DAY_START, score = 0, evIdx = 0, timer = null, running = false;

  function fmtTime(m) {
    return `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
  }

  /* السماء والشمس */
  function renderSky() {
    const sky = $("fd-sky"), sun = $("fd-sun");
    const p = (time - DAY_START) / (DAY_END - DAY_START); // 0..1
    // قوس الشمس
    const x = 8 + p * 84;
    const y = 88 - Math.sin(p * Math.PI) * 62;
    sun.style.left = x + "%";
    sun.style.top = y + "%";
    // لون السماء
    let bg;
    if (p < 0.08) bg = "linear-gradient(180deg,#2A3358,#6B5B8A)";           // فجر
    else if (p < 0.2) bg = "linear-gradient(180deg,#8AA8CB,#F8D8A8)";       // شروق
    else if (p < 0.75) bg = "linear-gradient(180deg,#9CC4E4,#DCEBF5)";      // نهار
    else if (p < 0.95) bg = "linear-gradient(180deg,#E8A76B,#F5D6A8)";      // أصيل
    else bg = "linear-gradient(180deg,#3A3358,#8A5B6B)";                    // مغرب
    sky.style.background = bg;
    $("fd-clock").textContent = fmtTime(Math.round(time));
  }

  function renderMeter() {
    const max = EVENTS.length * 15;
    $("fd-fill").style.width = (score / max) * 100 + "%";
    $("fd-score").textContent = score;
    $("stat-events").textContent = `${evIdx}/${EVENTS.length}`;
  }

  /* حلقة الزمن */
  function tick() {
    time += 2.2;
    if (evIdx < EVENTS.length && time >= EVENTS[evIdx].time) {
      time = EVENTS[evIdx].time;
      pause();
      showEvent(EVENTS[evIdx]);
    }
    if (time >= DAY_END) { pause(); return win(); }
    renderSky();
  }
  function play() { if (!running) { running = true; timer = setInterval(tick, 50); } }
  function pause() { running = false; clearInterval(timer); }

  function showEvent(ev) {
    const L = Lang.current();
    AudioBus.pop();
    $("fd-area").innerHTML = `
      <div class="fd-event">
        <h3>${ev.icon} ${ev.t[L]}</h3>
        <p>${ev.p[L]}</p>
        <div class="fd-choices">
          ${ev.c.map((c, i) => `<button class="fd-choice" data-i="${i}">${c[L]}</button>`).join("")}
        </div>
      </div>`;
    $("fd-area").querySelectorAll(".fd-choice").forEach(btn => {
      btn.addEventListener("click", () => {
        const c = ev.c[+btn.dataset.i];
        score += c.pts;
        if (c.pts >= 10) { AudioBus.chord([523, 659], 0.18); Particles.fire(18, { originY: "35%" }); }
        else AudioBus.tick(300);
        evIdx++;
        renderMeter();
        $("fd-area").innerHTML = "";
        play();
      });
    });
  }

  function win() {
    const max = EVENTS.length * 15;
    const best = Storage.get("anos_fasting_best", 0);
    if (score > best) Storage.set("anos_fasting_best", score);
    $("stat-best").textContent = Math.max(best, score);
    $("win-score").textContent = `${score}/${max}`;
    const L = Lang.current();
    const verdicts = score >= max * 0.85
      ? { ar: "قلبك مليء بالنور — صيامٌ مبرور!", en: "Your heart is full of light — a beautiful fast!" }
      : score >= max * 0.5
      ? { ar: "أحسنت! وغداً يمكنك أن تجعل النور أكمل", en: "Well done! Tomorrow you can make the light even fuller" }
      : { ar: "الصيام مدرسة — جرّب يوماً جديداً واختر الأفضل", en: "Fasting is a school — try a new day and choose better" };
    $("win-verdict").textContent = verdicts[L];
    AudioBus.success();
    Particles.fire(110);
    Modal.open("win-modal");
  }

  function reset() {
    pause();
    time = DAY_START; score = 0; evIdx = 0;
    $("fd-area").innerHTML = "";
    Modal.close("win-modal");
    renderSky(); renderMeter();
    $("stat-best").textContent = Storage.get("anos_fasting_best", 0) || "—";
    play();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { /* النصوص الثابتة تُحدَّث تلقائياً */ });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  AudioBus.bindButton($("mute-btn"));

  $("stat-best").textContent = Storage.get("anos_fasting_best", 0) || "—";
  renderSky(); renderMeter();
  play();
})();
