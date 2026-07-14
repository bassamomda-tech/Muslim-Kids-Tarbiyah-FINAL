/* ============================================================
   68 · فسيفساء جزء عمّ — أسئلة عن سور جزء عمّ تكشف زخرفة فسيفسائية
   شبكة 6×3 = 18 بلاطة، تُضاء بلاطة لكل إجابة صحيحة
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "كنوز الوحي", en: "Treasures of Revelation" },
    crumbTitle:  { ar: "فسيفساء جزء عمّ", en: "Juz Amma Mosaic" },
    title:       { ar: "فسيفساء جزء عمّ", en: "The Juz Amma Mosaic" },
    desc:        { ar: "خلف هذه الفسيفساء المعتمة زخرفةٌ إسلامية جميلة! أجب عن الأسئلة حول سور جزء عمّ، ومع كل إجابةٍ صحيحة تضيء بلاطة وتظهر الزخرفة.", en: "Behind this dim mosaic is a beautiful Islamic pattern! Answer questions about the surahs of Juz Amma, and with each correct answer a tile lights up and the pattern appears." },
    statTiles:   { ar: "بلاطات مضيئة", en: "Tiles lit" },
    statScore:   { ar: "إجابات صحيحة", en: "Correct answers" },
    sideTitle:   { ar: "جزء عمّ", en: "Juz Amma" },
    sideQuote:   { ar: "جزء عمّ هو الجزء الثلاثون والأخير من القرآن، وفيه 37 سورة قصيرة — أول ما يحفظه الأطفال عادةً.", en: "Juz Amma is the 30th and final part of the Quran, with 37 short surahs — usually the first thing children memorize." },
    sideSrc:     { ar: "علوم القرآن", en: "Quranic sciences" },
    tip:         { ar: "سُمّي «جزء عمّ» لأنه يبدأ بسورة النبأ: ﴿عمّ يتساءلون﴾. الفسيفساء الإسلامية تُبنى من أشكالٍ هندسية متكررة بلا صور.", en: "It's called \"Juz Amma\" because it opens with Surah an-Naba: \"Amma yatasa'alun\". Islamic mosaics are built from repeating geometric shapes, without images." },
    winEyebrow:  { ar: "فنّان الفسيفساء", en: "Mosaic Artist" },
    winTitle:    { ar: "اكتملت الزخرفة!", en: "The pattern is complete!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "فسيفساء جديدة", en: "New mosaic" },
    correct:     { ar: "أحسنت! أضاءت بلاطة ✦", en: "Correct! A tile lit up ✦" },
    wrong:       { ar: "ليست الإجابة الصحيحة — حاول في السؤال التالي", en: "Not correct — try the next question" },
  };

  /* ألوان الفسيفساء (نمط هندسي) */
  const PALETTE = ["#1F6E68", "#C9A961", "#B04A32", "#5A7A2E", "#2A6FA8", "#8A5B9A"];

  const QUESTIONS = [
    { q: { ar: "بأي سورة يبدأ جزء عمّ؟", en: "Which surah begins Juz Amma?" },
      opts: [ { ar: "النبأ", en: "An-Naba", ok: true }, { ar: "الفاتحة", en: "Al-Fatiha" }, { ar: "الناس", en: "An-Nas" } ] },
    { q: { ar: "سورة تتحدث عن الفيل وأصحابه؟", en: "Which surah tells of the elephant and its people?" },
      opts: [ { ar: "الفيل", en: "Al-Fil", ok: true }, { ar: "قريش", en: "Quraysh" }, { ar: "الهُمَزة", en: "Al-Humazah" } ] },
    { q: { ar: "أي سورة تُعادل ثلث القرآن؟", en: "Which surah equals a third of the Quran?" },
      opts: [ { ar: "الإخلاص", en: "Al-Ikhlas", ok: true }, { ar: "الكوثر", en: "Al-Kawthar" }, { ar: "الفلق", en: "Al-Falaq" } ] },
    { q: { ar: "«تبّت يدا أبي لهب» من أي سورة؟", en: "\"Tabbat yada Abi Lahab\" is from which surah?" },
      opts: [ { ar: "المسد", en: "Al-Masad", ok: true }, { ar: "الكافرون", en: "Al-Kafirun" }, { ar: "النصر", en: "An-Nasr" } ] },
    { q: { ar: "سورة نتعوّذ بها من شرّ الوسواس الخنّاس؟", en: "Which surah seeks refuge from the whispering devil?" },
      opts: [ { ar: "الناس", en: "An-Nas", ok: true }, { ar: "الفلق", en: "Al-Falaq" }, { ar: "الفجر", en: "Al-Fajr" } ] },
    { q: { ar: "«أرأيت الذي يكذّب بالدين» بداية سورة؟", en: "\"Have you seen the one who denies the Recompense\" opens which surah?" },
      opts: [ { ar: "الماعون", en: "Al-Ma'un", ok: true }, { ar: "الزلزلة", en: "Az-Zalzalah" }, { ar: "التكاثر", en: "At-Takathur" } ] },
    { q: { ar: "سورة تأمر النبي أن «فصلِّ لربك وانحر»؟", en: "Which surah commands \"so pray to your Lord and sacrifice\"?" },
      opts: [ { ar: "الكوثر", en: "Al-Kawthar", ok: true }, { ar: "العصر", en: "Al-Asr" }, { ar: "القارعة", en: "Al-Qari'ah" } ] },
    { q: { ar: "«إذا زلزلت الأرض زلزالها» من سورة؟", en: "\"When the earth is shaken with its quake\" is from?" },
      opts: [ { ar: "الزلزلة", en: "Az-Zalzalah", ok: true }, { ar: "الانفطار", en: "Al-Infitar" }, { ar: "الغاشية", en: "Al-Ghashiyah" } ] },
    { q: { ar: "سورة فيها «لكم دينكم ولي دين»؟", en: "Which surah has \"For you your religion, and for me mine\"?" },
      opts: [ { ar: "الكافرون", en: "Al-Kafirun", ok: true }, { ar: "الإخلاص", en: "Al-Ikhlas" }, { ar: "الماعون", en: "Al-Ma'un" } ] },
    { q: { ar: "«ألم نشرح لك صدرك» تُخاطِب مَن؟", en: "\"Did We not expand your chest\" addresses whom?" },
      opts: [ { ar: "النبي محمد ﷺ", en: "The Prophet Muhammad ﷺ", ok: true }, { ar: "موسى عليه السلام", en: "Musa (a.s.)" }, { ar: "المؤمنين جميعاً", en: "All believers" } ] },
    { q: { ar: "كم عدد سور جزء عمّ تقريباً؟", en: "About how many surahs are in Juz Amma?" },
      opts: [ { ar: "37 سورة", en: "37 surahs", ok: true }, { ar: "10 سور", en: "10 surahs" }, { ar: "60 سورة", en: "60 surahs" } ] },
    { q: { ar: "«والعصر إن الإنسان لفي خسر» من سورة؟", en: "\"By time, indeed mankind is in loss\" is from?" },
      opts: [ { ar: "العصر", en: "Al-Asr", ok: true }, { ar: "الفجر", en: "Al-Fajr" }, { ar: "الضحى", en: "Ad-Duha" } ] },
    { q: { ar: "سورة تصف يوم القيامة بـ«القارعة»؟", en: "Which surah calls the Day of Judgment \"the Striking Calamity\"?" },
      opts: [ { ar: "القارعة", en: "Al-Qari'ah", ok: true }, { ar: "الهمزة", en: "Al-Humazah" }, { ar: "التين", en: "At-Tin" } ] },
    { q: { ar: "«والتين والزيتون» قسمٌ في سورة؟", en: "\"By the fig and the olive\" is an oath in which surah?" },
      opts: [ { ar: "التين", en: "At-Tin", ok: true }, { ar: "البلد", en: "Al-Balad" }, { ar: "الشمس", en: "Ash-Shams" } ] },
    { q: { ar: "«قل أعوذ برب الفلق» بداية سورة؟", en: "\"Say: I seek refuge in the Lord of daybreak\" opens?" },
      opts: [ { ar: "الفلق", en: "Al-Falaq", ok: true }, { ar: "الناس", en: "An-Nas" }, { ar: "الكوثر", en: "Al-Kawthar" } ] },
    { q: { ar: "سورة ختمت بـ«فسبّح بحمد ربك واستغفره»؟", en: "Which surah ends \"glorify your Lord and seek forgiveness\"?" },
      opts: [ { ar: "النصر", en: "An-Nasr", ok: true }, { ar: "الفيل", en: "Al-Fil" }, { ar: "قريش", en: "Quraysh" } ] },
    { q: { ar: "«اقرأ باسم ربك الذي خلق» أول ما نزل، من سورة؟", en: "\"Read in the name of your Lord who created\" — first revealed, from?" },
      opts: [ { ar: "العلق", en: "Al-Alaq", ok: true }, { ar: "القدر", en: "Al-Qadr" }, { ar: "البيّنة", en: "Al-Bayyinah" } ] },
    { q: { ar: "«إنا أنزلناه في ليلة القدر» من سورة؟", en: "\"Indeed We sent it down on the Night of Decree\" is from?" },
      opts: [ { ar: "القدر", en: "Al-Qadr", ok: true }, { ar: "العلق", en: "Al-Alaq" }, { ar: "الزلزلة", en: "Az-Zalzalah" } ] },
  ];

  const $ = (id) => document.getElementById(id);
  let qIdx = 0, score = 0, litOrder = [];

  function buildGrid() {
    $("mo-grid").innerHTML = QUESTIONS.map((_, i) =>
      `<div class="mo-tile" data-t="${i}"></div>`).join("");
  }

  function litTile() {
    /* أضئ بلاطة عشوائية غير مضاءة بلون من اللوحة */
    const tiles = [...$("mo-grid").querySelectorAll(".mo-tile:not(.on)")];
    if (!tiles.length) return;
    const tile = tiles[Math.floor(Math.random() * tiles.length)];
    const idx = +tile.dataset.t;
    /* نمط لوني قطري لطيف */
    const row = Math.floor(idx / 6), col = idx % 6;
    tile.style.background = PALETTE[(row + col) % PALETTE.length];
    tile.classList.add("on");
    $("stat-tiles").textContent = `${$("mo-grid").querySelectorAll(".mo-tile.on").length}/18`;
  }

  function render() {
    const L = Lang.current();
    if (qIdx >= QUESTIONS.length) return;
    const q = QUESTIONS[qIdx];
    const opts = q.opts.map((o, i) => ({ o, i })).sort(() => Math.random() - 0.5);
    $("mo-area").innerHTML = `
      <div class="fd-event">
        <h3>❓ ${L === "ar" ? "سؤال" : "Question"} ${qIdx + 1}/${QUESTIONS.length}</h3>
        <p>${q.q[L]}</p>
        <div class="fd-choices">
          ${opts.map(x => `<button class="fd-choice" data-ok="${x.o.ok ? 1 : 0}">${x.o[L]}</button>`).join("")}
        </div>
      </div>`;
    $("mo-area").querySelectorAll(".fd-choice").forEach(b => b.addEventListener("click", () => choose(b)));
  }

  function choose(btn) {
    const L = Lang.current();
    $("mo-area").querySelectorAll(".fd-choice").forEach(x => x.disabled = true);
    if (btn.dataset.ok === "1") {
      score++; $("stat-score").textContent = score;
      btn.style.background = "var(--mint)"; btn.style.borderColor = "var(--mint-ink)";
      AudioBus.chord([523, 659], 0.16);
      litTile();
      Particles.fire(14, { originY: "30%" });
    } else {
      btn.style.background = "var(--rose)";
      AudioBus.fail();
      /* أظهر الصحيحة */
      $("mo-area").querySelectorAll(".fd-choice").forEach(x => {
        if (x.dataset.ok === "1") { x.style.background = "var(--mint)"; x.style.borderColor = "var(--mint-ink)"; }
      });
    }
    qIdx++;
    setTimeout(() => { if (qIdx >= QUESTIONS.length) win(); else render(); }, 1100);
  }

  function win() {
    /* أكمل أي بلاطات متبقية */
    while ($("mo-grid").querySelectorAll(".mo-tile:not(.on)").length) litTile();
    const L = Lang.current();
    $("win-sub").textContent = L === "ar"
      ? `${score} من ${QUESTIONS.length} إجابة صحيحة — زخرفةٌ من نور!`
      : `${score} of ${QUESTIONS.length} correct — a pattern of light!`;
    Storage.set("anos_mosaic_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    qIdx = 0; score = 0;
    $("stat-score").textContent = 0;
    $("stat-tiles").textContent = "0/18";
    Modal.close("win-modal");
    buildGrid(); render();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", render);
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  AudioBus.bindButton($("mute-btn"));
  buildGrid(); render();
})();
