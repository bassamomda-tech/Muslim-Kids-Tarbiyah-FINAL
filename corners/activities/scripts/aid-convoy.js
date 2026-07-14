/* ============================================================
   95 · قافلة الخير — وزّع الموارد (طعام/دواء/ماء) على 5 محطّات
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "أمتي الواحدة", en: "My One Ummah" },
    crumbTitle:  { ar: "قافلة الخير", en: "The Aid Convoy" },
    title:       { ar: "قافلة الخير", en: "The Convoy of Good" },
    desc:        { ar: "قُد قافلة إغاثةٍ لإخوانك المحتاجين! وزّع الطعام والدواء والماء بحكمة على المحطّات. قراراتك تحدّد كم عائلةً ستُغيث. خطّط جيداً لتصل للجميع!", en: "Lead an aid convoy to your brothers in need! Distribute food, medicine, and water wisely across the stops. Your decisions decide how many families you help. Plan well to reach everyone!" },
    food:        { ar: "🍞 طعام", en: "🍞 Food" },
    med:         { ar: "💊 دواء", en: "💊 Medicine" },
    water:       { ar: "💧 ماء", en: "💧 Water" },
    statStop:    { ar: "المحطّة", en: "Stop" },
    statHelped:  { ar: "عائلات أُغيثت", en: "Families helped" },
    sideTitle:   { ar: "إغاثة المحتاجين", en: "Relieving those in need" },
    sideQuote:   { ar: "«مَن كان في حاجة أخيه كان الله في حاجته»", en: "\"Whoever fulfills the needs of his brother, Allah fulfills his needs\"" },
    sideSrc:     { ar: "متفق عليه", en: "Agreed upon" },
    tip:         { ar: "وزّع مواردك بحكمة: أعطِ كل محطّةٍ ما تحتاجه فعلاً دون إسراف، لتكفي الجميع. التخطيط أمانةٌ في العمل الخيري.", en: "Distribute wisely: give each stop what it truly needs without waste, so everyone gets a share. Planning is a trust in charity work." },
    winEyebrow:  { ar: "وصلت القافلة", en: "The convoy arrived" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "رحلة جديدة", en: "New journey" },
    give:        { ar: "أعطِ", en: "Give" },
    notEnough:   { ar: "لا يكفي مخزونك لهذا الاختيار", en: "Your stock isn't enough for this choice" },
  };

  /* المحطّات: العلَم، احتياجها، والخيارات */
  const STOPS = [
    { flag: "🇵🇸", name: { ar: "قرية محاصَرة", en: "A besieged village" },
      need: { ar: "عائلات جائعة تحتاج طعاماً عاجلاً", en: "Hungry families need urgent food" },
      correct: { food: 30, med: 0, water: 10 }, families: 8 },
    { flag: "🏥", name: { ar: "مستشفى ميداني", en: "A field hospital" },
      need: { ar: "جرحى يحتاجون دواءً وماءً نظيفاً", en: "Injured people need medicine and clean water" },
      correct: { food: 5, med: 30, water: 20 }, families: 10 },
    { flag: "🏜", name: { ar: "مخيّم في الصحراء", en: "A desert camp" },
      need: { ar: "لاجئون يعانون العطش الشديد", en: "Refugees suffering severe thirst" },
      correct: { food: 10, med: 5, water: 30 }, families: 12 },
    { flag: "🏫", name: { ar: "مدرسة للأيتام", en: "An orphans' school" },
      need: { ar: "أطفالٌ يحتاجون غذاءً متوازناً", en: "Children needing balanced nourishment" },
      correct: { food: 20, med: 10, water: 15 }, families: 9 },
    { flag: "🏘", name: { ar: "حيٌّ منكوب", en: "A stricken neighborhood" },
      need: { ar: "عائلاتٌ فقدت كل شيء وتحتاج كل المساعدات", en: "Families who lost everything, needing all aid" },
      correct: { food: 20, med: 15, water: 20 }, families: 11 },
  ];

  const $ = (id) => document.getElementById(id);
  let stop = 0, supplies = { food: 100, med: 100, water: 100 }, helped = 0;

  function setBars() {
    ["food", "med", "water"].forEach(k => {
      $("cv-" + k).style.width = Math.max(0, supplies[k]) + "%";
      $("cv-" + k + "-v").textContent = Math.max(0, Math.round(supplies[k]));
    });
  }

  function renderRoute() {
    /* المحطّات على المسار */
    $("cv-route").querySelectorAll(".cv-stop").forEach(e => e.remove());
    STOPS.forEach((s, i) => {
      const el = document.createElement("div");
      el.className = "cv-stop";
      el.style.left = (16 + i * 19) + "%";
      el.innerHTML = `<span class="flag">${i < stop ? "✅" : s.flag}</span><span>${i + 1}</span>`;
      $("cv-route").appendChild(el);
    });
    const truckLeft = stop >= STOPS.length ? 94 : (10 + stop * 19);
    $("cv-truck").style.left = truckLeft + "%";
  }

  function render() {
    const L = Lang.current();
    if (stop >= STOPS.length) return win();
    const s = STOPS[stop];
    $("cv-mission").innerHTML = `${s.flag} <strong>${s.name[L]}</strong> — ${s.need[L]}`;
    $("stat-stop").textContent = `${stop + 1}/${STOPS.length}`;
    /* ثلاثة خيارات: الصحيح + شحيح + مسرف */
    const options = [
      { label: { ar: "توزيعٌ متوازن حسب الحاجة", en: "Balanced distribution per need" }, give: s.correct, type: "right" },
      { label: { ar: "القليل فقط (توفير)", en: "Just a little (saving)" }, give: scale(s.correct, 0.4), type: "low" },
      { label: { ar: "الكثير جداً (سخاء زائد)", en: "Way too much (over-giving)" }, give: scale(s.correct, 1.8), type: "high" },
    ].sort(() => Math.random() - 0.5);
    $("cv-area").innerHTML = options.map((o, i) => `
      <button class="mk-choice" data-i="${i}">
        <span>${o.label[L]}</span>
        <span class="tag ${o.type === "right" ? "trust" : "gold"}">🍞${o.give.food} 💊${o.give.med} 💧${o.give.water}</span>
      </button>`).join("");
    $("cv-area").querySelectorAll(".mk-choice").forEach((b, i) => b.addEventListener("click", () => choose(options[+b.dataset.i])));
    renderRoute();
  }

  function scale(obj, f) { return { food: Math.round(obj.food * f), med: Math.round(obj.med * f), water: Math.round(obj.water * f) }; }

  function choose(opt) {
    const L = Lang.current();
    const g = opt.give;
    if (supplies.food < g.food || supplies.med < g.med || supplies.water < g.water) {
      $("cv-mission").innerHTML = "⚠️ " + I18N.notEnough[L];
      AudioBus.fail();
      return;
    }
    supplies.food -= g.food; supplies.med -= g.med; supplies.water -= g.water;
    const s = STOPS[stop];
    /* نجاح الإغاثة حسب مطابقة الحاجة */
    let fam = 0;
    if (opt.type === "right") { fam = s.families; AudioBus.chord([523, 659, 784], 0.2); Particles.fire(24); }
    else if (opt.type === "low") { fam = Math.round(s.families * 0.5); AudioBus.tone(320, 0.16); }
    else { fam = s.families; AudioBus.tone(400, 0.16); } /* أغاث الجميع لكن أهدر مخزوناً */
    helped += fam; $("stat-helped").textContent = helped;
    setBars();
    stop++;
    /* حرّك الشاحنة */
    renderRoute();
    setTimeout(render, 900);
  }

  function win() {
    renderRoute();
    const L = Lang.current();
    const remaining = supplies.food + supplies.med + supplies.water;
    let title, meaning;
    if (helped >= 45 && remaining >= 20) {
      title = L === "ar" ? "قائد إغاثةٍ حكيم! 🌟" : "A wise relief leader! 🌟";
      meaning = L === "ar" ? "أغثتَ أكبر عددٍ من العائلات ووزّعت بحكمة دون إسراف. هذا هو التخطيط الأمين!" : "You helped the most families and distributed wisely without waste. That's faithful planning!";
    } else if (helped >= 35) {
      title = L === "ar" ? "أحسنت العطاء" : "Well given";
      meaning = L === "ar" ? "أغثتَ كثيرين! تدرّب على التوزيع المتوازن لتصل لعددٍ أكبر بموارد أقل." : "You helped many! Practice balanced distribution to reach more with fewer resources.";
    } else {
      title = L === "ar" ? "رحلةٌ فيها درس" : "A journey with a lesson";
      meaning = L === "ar" ? "الإغاثة تحتاج تخطيطاً. أعطِ كل محطّةٍ ما تحتاجه بالضبط لتكفي الجميع. جرّب ثانيةً!" : "Relief needs planning. Give each stop exactly what it needs to reach everyone. Try again!";
    }
    $("win-title").textContent = title;
    $("win-sub").textContent = L === "ar" ? `${helped} عائلة أُغيثت · تبقّى من المخزون ${Math.round(remaining)}` : `${helped} families helped · ${Math.round(remaining)} supplies left`;
    $("win-meaning").innerHTML = meaning;
    Storage.set("anos_convoy_done", true);
    if (helped >= 45) { AudioBus.success(); Particles.fire(120); } else AudioBus.tone(320, 0.3);
    Modal.open("win-modal");
  }

  function reset() {
    stop = 0; supplies = { food: 100, med: 100, water: 100 }; helped = 0;
    $("stat-helped").textContent = 0;
    setBars();
    Modal.close("win-modal");
    render();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { if (stop < STOPS.length) render(); });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  AudioBus.bindButton($("mute-btn"));
  setBars(); render();
})();
