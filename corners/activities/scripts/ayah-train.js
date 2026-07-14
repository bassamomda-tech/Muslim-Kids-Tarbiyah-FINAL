/* ============================================================
   64 · قطار الآيات — رتّب آيات السورة في عربات القطار
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "كنوز الوحي", en: "Treasures of Revelation" },
    crumbTitle:  { ar: "قطار الآيات", en: "Ayah Train" },
    title:       { ar: "قطار الآيات", en: "The Ayah Train" },
    desc:        { ar: "آيات السورة تبعثرت في المحطة! انقر على الآيات بالترتيب الصحيح لتركب عربات القطار — فإذا اكتمل الترتيب انطلق القطار!", en: "The surah's ayat are scattered in the station! Tap the ayat in the correct order to board the train cars — complete the order and the train departs!" },
    statRound:   { ar: "السورة", en: "Surah" },
    statTries:   { ar: "المحاولات", en: "Tries" },
    sideTitle:   { ar: "لماذا الترتيب مهم؟", en: "Why does order matter?" },
    sideQuote:   { ar: "ترتيب آيات القرآن توقيفيّ — أي بأمر النبي ﷺ عن جبريل عليه السلام، ليس اجتهاداً من أحد.", en: "The order of the Quran's ayat is divinely fixed — set by the Prophet ﷺ as taught by Jibril, not by anyone's opinion." },
    sideSrc:     { ar: "علوم القرآن", en: "Quranic sciences" },
    tip:         { ar: "إذا أخطأت، تُعاد العربة الخاطئة للمحطة فقط — لا تقلق وجرّب من جديد. رتّل الآيات بصوتك لتتذكر تسلسلها!", en: "If you make a mistake, only the wrong car returns to the station — don't worry, try again. Recite the ayat aloud to remember their flow!" },
    winEyebrow:  { ar: "القطار انطلق!", en: "The train departed!" },
    winTitle:    { ar: "رتّبتَ السور الثلاث كاملة!", en: "You ordered all three surahs!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "رحلة جديدة", en: "New journey" },
    goodCar:     { ar: "عربة في مكانها! 🚃", en: "A car in place! 🚃" },
    badCar:      { ar: "ليست هذه الآية التالية — أعدناها للمحطة", en: "Not the next ayah — returned to the station" },
    departed:    { ar: "اكتمل القطار وانطلق! 🚂💨", en: "The train is complete — off it goes! 🚂💨" },
  };

  const ROUNDS = [
    { name: { ar: "سورة الفيل", en: "Al-Fil" },
      ayat: ["أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ", "أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ", "وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ", "تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ", "فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ"] },
    { name: { ar: "سورة قريش", en: "Quraysh" },
      ayat: ["لِإِيلَافِ قُرَيْشٍ", "إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ", "فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ", "الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ"] },
    { name: { ar: "سورة التين", en: "At-Tin" },
      ayat: ["وَالتِّينِ وَالزَّيْتُونِ", "وَطُورِ سِينِينَ", "وَهَٰذَا الْبَلَدِ الْأَمِينِ", "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ", "ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ"] },
  ];

  const $ = (id) => document.getElementById(id);
  let round = 0, tries = 0, nextIdx = 0, poolOrder = [];

  function renderRound() {
    const r = ROUNDS[round], L = Lang.current();
    nextIdx = 0;
    poolOrder = r.ayat.map((_, i) => i).sort(() => Math.random() - 0.5);
    $("tr-mission").innerHTML = `🚂 ${L === "ar" ? "رتّب آيات" : "Order the ayat of"} <strong>${r.name[L]}</strong>`;
    $("stat-round").textContent = `${round + 1}/${ROUNDS.length}`;
    $("tr-feedback").textContent = "";
    renderTrack(); renderPool();
  }

  function renderTrack() {
    const r = ROUNDS[round];
    $("tr-track").innerHTML =
      `<div class="tr-loco">🚂</div>` +
      r.ayat.map((a, i) => `
        <div class="tr-car ${i < nextIdx ? "filled good" : ""}">
          <span class="idx">${i + 1}</span>
          ${i < nextIdx ? a : "؟"}
        </div>`).join("");
  }

  function renderPool() {
    const r = ROUNDS[round];
    $("tr-pool").innerHTML = poolOrder.map(i => `
      <button class="tr-chip ${i < nextIdx ? "used" : ""}" data-i="${i}">${r.ayat[i]}</button>`).join("");
    $("tr-pool").querySelectorAll(".tr-chip:not(.used)").forEach(b => {
      b.addEventListener("click", () => pick(+b.dataset.i, b));
    });
  }

  function pick(i, btn) {
    const L = Lang.current();
    tries++; $("stat-tries").textContent = tries;
    if (i === nextIdx) {
      nextIdx++;
      AudioBus.tone(500 + nextIdx * 60, 0.14, "triangle", 0.08);
      $("tr-feedback").textContent = I18N.goodCar[L];
      renderTrack(); renderPool();
      if (nextIdx >= ROUNDS[round].ayat.length) depart();
    } else {
      AudioBus.fail();
      btn.style.transform = "translateX(6px)";
      setTimeout(() => { btn.style.transform = ""; }, 250);
      $("tr-feedback").textContent = I18N.badCar[L];
    }
  }

  function depart() {
    const L = Lang.current();
    $("tr-feedback").textContent = I18N.departed[L];
    AudioBus.chord([392, 494, 587, 784], 0.25);
    Particles.fire(50, { originY: "40%" });
    /* حركة انطلاق */
    const track = $("tr-track");
    track.style.transition = "transform 1.1s cubic-bezier(0.5, 0, 0.8, 0.4), opacity 1.1s ease";
    track.style.transform = "translateX(-120%)";
    track.style.opacity = "0";
    setTimeout(() => {
      track.style.transition = "none";
      track.style.transform = ""; track.style.opacity = "";
      round++;
      if (round >= ROUNDS.length) return win();
      renderRound();
    }, 1250);
  }

  function win() {
    const L = Lang.current();
    $("win-sub").textContent = L === "ar"
      ? `ثلاثة قطارات انطلقت في ${tries} نقرة`
      : `Three trains departed in ${tries} taps`;
    Storage.set("anos_train_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    round = 0; tries = 0;
    $("stat-tries").textContent = 0;
    Modal.close("win-modal");
    renderRound();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", renderRound);
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  AudioBus.bindButton($("mute-btn"));
  renderRound();
})();
