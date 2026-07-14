/* ============================================================
   63 · بستان السور — اقرأ السورة آيةً آية فتنمو شجرتها
   المستويات 0..3 محفوظة في localStorage
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "كنوز الوحي", en: "Treasures of Revelation" },
    crumbTitle:  { ar: "بستان السور", en: "Surah Garden" },
    title:       { ar: "بستان السور", en: "The Surah Garden" },
    desc:        { ar: "لكل سورةٍ قصيرة شجرةٌ في بستانك! اقرأ السورة آيةً آية لتنمو شجرتها. كل قراءةٍ كاملة ترفعها درجة — والبستان يبقى محفوظاً كلما عدت.", en: "Every short surah has a tree in your garden! Read the surah ayah by ayah and its tree grows. Each full reading raises it a level — and your garden is saved every time you return." },
    statTrees:   { ar: "أشجار نمَت", en: "Trees grown" },
    statReads:   { ar: "قراءات كاملة", en: "Full readings" },
    sideTitle:   { ar: "لماذا بستان؟", en: "Why a garden?" },
    sideQuote:   { ar: "«مثل المؤمن الذي يقرأ القرآن كمثل الأترجّة: ريحها طيب وطعمها طيب»", en: "\"The believer who recites the Quran is like a citron: its scent is sweet and its taste is sweet\"" },
    sideSrc:     { ar: "متفق عليه", en: "Agreed upon" },
    tip:         { ar: "اقرأ بصوتٍ مسموع وبتأنٍّ. الشجرة تنمو ثلاث درجات: بذرة، شجيرة، ثم شجرة مثمرة — تماماً كالحفظ: تكرارٌ ونموّ!", en: "Read aloud and slowly. Each tree grows through three levels: seed, sapling, then fruit tree — just like memorization: repetition and growth!" },
    winEyebrow:  { ar: "بستانك مزهر", en: "Your garden blooms" },
    winTitle:    { ar: "كل الأشجار نمت!", en: "All the trees have grown!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winMore:     { ar: "أكمل رعاية البستان", en: "Keep tending the garden" },
    readBtn:     { ar: "قرأتُها ✓", en: "I read it ✓" },
    pickPlot:    { ar: "انقر على شجرةٍ من البستان لتبدأ القراءة 🌱", en: "Tap a tree in the garden to start reading 🌱" },
    grew:        { ar: "نمت الشجرة درجة! ما شاء الله 🌿", en: "The tree grew a level! MashaAllah 🌿" },
    maxed:       { ar: "شجرة مثمرة مكتملة — اخترت سورة تحفظها جيداً!", en: "A complete fruit tree — you know this surah well!" },
  };

  /* السور القصيرة بنصوصها */
  const SURAHS = [
    { id: "ikhlas", name: { ar: "الإخلاص", en: "Al-Ikhlas" },
      ayat: ["قُلْ هُوَ اللَّهُ أَحَدٌ", "اللَّهُ الصَّمَدُ", "لَمْ يَلِدْ وَلَمْ يُولَدْ", "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ"] },
    { id: "falaq", name: { ar: "الفلق", en: "Al-Falaq" },
      ayat: ["قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", "مِن شَرِّ مَا خَلَقَ", "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ", "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ", "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ"] },
    { id: "nas", name: { ar: "الناس", en: "An-Nas" },
      ayat: ["قُلْ أَعُوذُ بِرَبِّ النَّاسِ", "مَلِكِ النَّاسِ", "إِلَٰهِ النَّاسِ", "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ", "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ", "مِنَ الْجِنَّةِ وَالنَّاسِ"] },
    { id: "kawthar", name: { ar: "الكوثر", en: "Al-Kawthar" },
      ayat: ["إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ", "فَصَلِّ لِرَبِّكَ وَانْحَرْ", "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ"] },
    { id: "asr", name: { ar: "العصر", en: "Al-Asr" },
      ayat: ["وَالْعَصْرِ", "إِنَّ الْإِنسَانَ لَفِي خُسْرٍ", "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ"] },
    { id: "nasr", name: { ar: "النصر", en: "An-Nasr" },
      ayat: ["إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ", "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا", "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا"] },
  ];
  const TREES = ["🌱", "🌿", "🌳", "🌳"];

  const $ = (id) => document.getElementById(id);
  let levels = Storage.get("anos_garden", {});
  let reads = Storage.get("anos_garden_reads", 0);
  let cur = null, ayahIdx = 0, winShown = false;

  function lv(id) { return levels[id] || 0; }

  function renderGarden() {
    const L = Lang.current();
    $("gr-garden").innerHTML = SURAHS.map(s => `
      <button class="gr-plot" data-lv="${lv(s.id)}" data-id="${s.id}">
        <span class="tree">${TREES[lv(s.id)]}</span>
        <span class="nm">${s.name[L]}</span>
      </button>`).join("");
    $("gr-garden").querySelectorAll(".gr-plot").forEach(p => {
      p.addEventListener("click", () => startReading(p.dataset.id));
    });
    const grown = SURAHS.filter(s => lv(s.id) > 0).length;
    $("stat-trees").textContent = `${grown}/${SURAHS.length}`;
    $("stat-reads").textContent = reads;
  }

  function startReading(id) {
    cur = SURAHS.find(s => s.id === id);
    ayahIdx = 0;
    AudioBus.pop();
    renderReader();
  }

  function renderReader() {
    const L = Lang.current();
    if (!cur) {
      $("gr-reader").innerHTML = `<div class="gr-reader" style="color:var(--muted); font-weight:700;">${I18N.pickPlot[L]}</div>`;
      return;
    }
    const total = cur.ayat.length;
    $("gr-reader").innerHTML = `
      <div class="gr-reader">
        <div style="font-size:12px; font-weight:800; color:var(--sand-ink); margin-bottom:10px;">
          ${L === "ar" ? "سورة" : "Surah"} ${cur.name[L]} · ${ayahIdx + 1}/${total}
        </div>
        <p class="ayah">${cur.ayat[ayahIdx]}</p>
        <button class="btn-primary" id="gr-next">${I18N.readBtn[L]}</button>
      </div>`;
    $("gr-next").addEventListener("click", () => {
      AudioBus.tick(600 + ayahIdx * 40);
      ayahIdx++;
      if (ayahIdx >= total) return finishSurah();
      renderReader();
    });
  }

  function finishSurah() {
    const L = Lang.current();
    reads++;
    Storage.set("anos_garden_reads", reads);
    const before = lv(cur.id);
    if (before < 3) {
      levels[cur.id] = before + 1;
      Storage.set("anos_garden", levels);
      AudioBus.chord([523, 659, 784], 0.22);
      Particles.fire(40, { originY: "35%" });
      $("gr-reader").innerHTML = `<div class="gr-reader" style="font-weight:800; color:var(--mint-ink);">${I18N.grew[L]}</div>`;
    } else {
      AudioBus.success();
      $("gr-reader").innerHTML = `<div class="gr-reader" style="font-weight:800; color:var(--mint-ink);">${I18N.maxed[L]}</div>`;
    }
    cur = null;
    renderGarden();
    if (!winShown && SURAHS.every(s => lv(s.id) > 0)) {
      winShown = true;
      $("win-sub").textContent = L === "ar"
        ? "ست سور قصيرة صارت بستاناً أخضر — واصل حتى تُثمر كلها!"
        : "Six short surahs became a green garden — keep going until they all bear fruit!";
      AudioBus.success(); Particles.fire(120);
      setTimeout(() => Modal.open("win-modal"), 700);
    }
  }

  function reset() {
    levels = {}; reads = 0; cur = null; winShown = false;
    Storage.set("anos_garden", levels);
    Storage.set("anos_garden_reads", 0);
    Modal.close("win-modal");
    renderGarden(); renderReader();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { renderGarden(); renderReader(); });
  Modal.bindClose("win-modal");
  $("reset-btn").addEventListener("click", reset);
  AudioBus.bindButton($("mute-btn"));
  renderGarden(); renderReader();
})();
