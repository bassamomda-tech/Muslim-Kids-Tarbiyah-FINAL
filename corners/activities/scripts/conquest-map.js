/* ============================================================
   76 · خطى الفاتحين — رتّب الأحداث زمنياً فتُضيء مناطق الخريطة
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "على خطى القدوات", en: "In the Footsteps of Role Models" },
    crumbTitle:  { ar: "خطى الفاتحين", en: "Paths of the Openers" },
    title:       { ar: "خطى الفاتحين", en: "Paths of the Openers" },
    desc:        { ar: "كيف انتشر نور الإسلام في الأرض؟ رتّب الأحداث التاريخية على خط الزمن بالترتيب الصحيح، وشاهد الخريطة تُضيء منطقةً بعد منطقة مع كل حدث.", en: "How did the light of Islam spread across the earth? Arrange the historical events on the timeline in the correct order, and watch the map light up region by region." },
    statPlaced:  { ar: "أحداث رتّبتها", en: "Events placed" },
    statTries:   { ar: "المحاولات", en: "Tries" },
    sideTitle:   { ar: "انتشار الإسلام", en: "The spread of Islam" },
    sideQuote:   { ar: "﴿هو الذي أرسل رسوله بالهدى ودين الحق ليُظهره على الدين كله﴾", en: "\"It is He who sent His Messenger with guidance and the religion of truth to manifest it over all religion\"" },
    sideSrc:     { ar: "الفتح · 28", en: "Al-Fath · 28" },
    tip:         { ar: "انتشر الإسلام بالعدل والأخلاق قبل السيف. كثيرٌ من الشعوب دخلت الإسلام بحسن معاملة التجار والدعاة، كما في جنوب شرق آسيا وأفريقيا.", en: "Islam spread through justice and character before the sword. Many peoples embraced it through the good conduct of traders and callers, as in Southeast Asia and Africa." },
    winEyebrow:  { ar: "مؤرّخ صغير", en: "Little Historian" },
    winTitle:    { ar: "رتّبتَ خط الزمن كاملاً!", en: "You ordered the whole timeline!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "من جديد", en: "Again" },
    good:        { ar: "صحيح! أضاءت منطقةٌ جديدة ✦", en: "Correct! A new region lit up ✦" },
    bad:         { ar: "ليس هذا الحدث التالي زمنياً — جرّب غيره", en: "Not the next event in time — try another" },
    mission:     { ar: "اختر الحدث الأقدم زمنياً التالي في السلسلة:", en: "Pick the next-earliest event in the sequence:" },
  };

  /* الأحداث بترتيبها الزمني + منطقة على الخريطة */
  const EVENTS = [
    { yr: "622م", region: [72, 55], ar: "الهجرة إلى المدينة وقيام أول دولة", en: "Hijrah to Madinah, first state founded" },
    { yr: "630م", region: [70, 50], ar: "فتح مكة وتطهير الكعبة من الأصنام", en: "Opening of Makkah, Ka'bah cleansed" },
    { yr: "636م", region: [58, 42], ar: "بلاد الشام تدخل في الإسلام", en: "The Levant enters Islam" },
    { yr: "642م", region: [50, 58], ar: "مصر وشمال أفريقيا", en: "Egypt and North Africa" },
    { yr: "711م", region: [28, 40], ar: "الأندلس (إسبانيا) تُفتح", en: "Al-Andalus (Spain) is opened" },
    { yr: "1300م", region: [86, 72], ar: "الإسلام يصل جنوب شرق آسيا بالتجارة", en: "Islam reaches SE Asia through trade" },
  ];

  const $ = (id) => document.getElementById(id);
  let placed = 0, tries = 0, poolOrder = [];

  function buildMap() {
    $("ft-map").innerHTML = EVENTS.map((e, i) => `
      <div class="ft-region ${i < placed ? "lit" : ""}" data-i="${i}" style="left:${e.region[0]}%; top:${e.region[1]}%;">
        <span class="dot"></span>
      </div>`).join("") + `
      <div style="position:absolute; inset:0; opacity:0.12; background:
        radial-gradient(circle at 30% 45%, #5A7A2E 0 8%, transparent 9%),
        radial-gradient(circle at 55% 45%, #5A7A2E 0 12%, transparent 13%),
        radial-gradient(circle at 78% 60%, #5A7A2E 0 10%, transparent 11%);"></div>`;
  }

  function renderTimeline() {
    const L = Lang.current();
    if (!poolOrder.length) poolOrder = EVENTS.map((_, i) => i).sort(() => Math.random() - 0.5);
    $("ft-mission").innerHTML = "⏳ " + I18N.mission[L];
    $("ft-timeline").innerHTML = poolOrder.map(i => `
      <button class="ft-event ${i < placed ? "placed" : ""}" data-i="${i}">
        <span class="yr">${EVENTS[i].yr}</span><br/>${EVENTS[i][L]}
      </button>`).join("");
    $("ft-timeline").querySelectorAll(".ft-event:not(.placed)").forEach(b => b.addEventListener("click", () => pick(+b.dataset.i, b)));
    $("stat-placed").textContent = `${placed}/${EVENTS.length}`;
  }

  function pick(i, btn) {
    const L = Lang.current();
    tries++; $("stat-tries").textContent = tries;
    if (i === placed) {
      placed++;
      AudioBus.chord([440, 554, 659], 0.2);
      Particles.fire(20, { originY: "35%" });
      $("ft-feedback").textContent = I18N.good[L];
      buildMap(); renderTimeline();
      if (placed >= EVENTS.length) setTimeout(win, 700);
    } else {
      AudioBus.fail();
      btn.style.transform = "translateX(6px)";
      setTimeout(() => { btn.style.transform = ""; }, 250);
      $("ft-feedback").textContent = I18N.bad[L];
    }
  }

  function win() {
    const L = Lang.current();
    $("win-sub").textContent = L === "ar" ? `ستة قرونٍ من التاريخ في ${tries} محاولات` : `Six centuries of history in ${tries} tries`;
    Storage.set("anos_conquest_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    placed = 0; tries = 0; poolOrder = [];
    $("stat-tries").textContent = 0;
    $("ft-feedback").textContent = "";
    Modal.close("win-modal");
    buildMap(); renderTimeline();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { buildMap(); renderTimeline(); });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  AudioBus.bindButton($("mute-btn"));
  buildMap(); renderTimeline();
})();
