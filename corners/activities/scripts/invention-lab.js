/* ============================================================
   73 · مخترعو الحضارة — اجمع القطع الصحيحة لصنع اختراع إسلامي
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "على خطى القدوات", en: "In the Footsteps of Role Models" },
    crumbTitle:  { ar: "مخترعو الحضارة", en: "Inventors of Civilization" },
    title:       { ar: "مخترعو الحضارة", en: "Inventors of Civilization" },
    desc:        { ar: "في العصر الذهبي أبدع علماء المسلمين اختراعاتٍ غيّرت العالم! اجمع القطع الصحيحة على طاولة العمل لتُعيد بناء اختراعٍ من اختراعاتهم.", en: "In the Golden Age, Muslim scholars created inventions that changed the world! Gather the right parts on the workbench to rebuild one of their inventions." },
    benchLabel:  { ar: "قطع المخترع — اختر ما يلزم فقط", en: "Inventor's parts — pick only what's needed" },
    buildBtn:    { ar: "اصنع الاختراع!", en: "Build it!" },
    statRound:   { ar: "الاختراع", en: "Invention" },
    statBuilt:   { ar: "اختراعات صنعتها", en: "Inventions built" },
    sideTitle:   { ar: "العالِم", en: "The scholar" },
    sideQuote:   { ar: "«طلب العلم فريضة على كل مسلم»", en: "\"Seeking knowledge is an obligation upon every Muslim\"" },
    sideSrc:     { ar: "رواه ابن ماجه", en: "Narrated by Ibn Majah" },
    tip:         { ar: "ازدهرت العلوم في الحضارة الإسلامية بين القرنين الثامن والرابع عشر: الطب والفلك والرياضيات والكيمياء والهندسة — بفضل قيمة العلم في ديننا.", en: "Sciences flourished in Islamic civilization between the 8th and 14th centuries: medicine, astronomy, mathematics, chemistry, engineering — thanks to the value of knowledge in our religion." },
    winEyebrow:  { ar: "مخترع صغير", en: "Little Inventor" },
    winTitle:    { ar: "أعدتَ بناء كنوز العلماء!", en: "You rebuilt the scholars' treasures!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "من جديد", en: "Again" },
    built:       { ar: "اختراع رائع! صنعته بنجاح ✓", en: "Brilliant! Built successfully ✓" },
    missing:     { ar: "ينقص الاختراع قطعة أساسية", en: "The invention is missing an essential part" },
    extra:       { ar: "هناك قطعة زائدة لا تنتمي لهذا الاختراع", en: "There's an extra part that doesn't belong" },
  };

  /* الاختراعات: القطع الصحيحة + قطع ملهية، والعالِم */
  const INVENTIONS = [
    { name: { ar: "الكاميرا (بيت الضوء)", en: "The Camera Obscura" },
      by: { ar: "ابن الهيثم — أبو علم البصريات", en: "Ibn al-Haytham — father of optics" },
      need: [
        { ic: "📦", ar: "صندوق مظلم", en: "Dark box" },
        { ic: "🕳", ar: "ثقب صغير", en: "Tiny hole" },
        { ic: "☀️", ar: "مصدر ضوء", en: "Light source" },
        { ic: "🖼", ar: "شاشة للصورة", en: "Image screen" },
      ],
      extra: [ { ic: "🔋", ar: "بطارية", en: "Battery" }, { ic: "⚙️", ar: "تروس معدنية", en: "Metal gears" } ] },
    { name: { ar: "الإسطرلاب", en: "The Astrolabe" },
      by: { ar: "مريم الإسطرلابية وعلماء الفلك", en: "Mariam al-Astrulabi & astronomers" },
      need: [
        { ic: "⭐", ar: "خريطة النجوم", en: "Star map" },
        { ic: "📐", ar: "زاوية القياس", en: "Measuring angle" },
        { ic: "🧭", ar: "قرص دوّار", en: "Rotating disc" },
        { ic: "🌙", ar: "مؤشر الأجرام", en: "Celestial pointer" },
      ],
      extra: [ { ic: "💧", ar: "خزان ماء", en: "Water tank" }, { ic: "🔥", ar: "موقد", en: "Furnace" } ] },
    { name: { ar: "أدوات الجراحة", en: "Surgical Instruments" },
      by: { ar: "الزهراوي — أبو الجراحة الحديثة", en: "Al-Zahrawi — father of modern surgery" },
      need: [
        { ic: "🔪", ar: "مِشرط دقيق", en: "Fine scalpel" },
        { ic: "🧵", ar: "خيط جراحي", en: "Surgical thread" },
        { ic: "🩹", ar: "ضمادة", en: "Bandage" },
        { ic: "📖", ar: "كتاب التصريف", en: "Medical manual" },
      ],
      extra: [ { ic: "🔭", ar: "تلسكوب", en: "Telescope" }, { ic: "⚖️", ar: "ميزان تجاري", en: "Trade scale" } ] },
    { name: { ar: "الساعة الفيلية", en: "The Elephant Clock" },
      by: { ar: "الجزري — رائد الهندسة الميكانيكية", en: "Al-Jazari — pioneer of mechanical engineering" },
      need: [
        { ic: "🐘", ar: "هيكل الفيل", en: "Elephant frame" },
        { ic: "💧", ar: "خزان ماء موقوت", en: "Timed water tank" },
        { ic: "⚙️", ar: "تروس متحركة", en: "Moving gears" },
        { ic: "🪶", ar: "طائر يصفّر", en: "Whistling bird" },
      ],
      extra: [ { ic: "🔌", ar: "سلك كهرباء", en: "Electric wire" }, { ic: "📱", ar: "شاشة رقمية", en: "Digital screen" } ] },
  ];

  const $ = (id) => document.getElementById(id);
  let round = 0, built = 0, selected = [];

  function renderRound() {
    selected = [];
    const inv = INVENTIONS[round], L = Lang.current();
    $("in-mission").innerHTML = `🔧 ${L === "ar" ? "أعِد بناء" : "Rebuild"}: <strong>${inv.name[L]}</strong>`;
    $("stat-round").textContent = `${round + 1}/${INVENTIONS.length}`;
    $("in-scientist").innerHTML = `<div class="quote" style="font-size:14px;">${inv.by[L]}</div><span class="src">${L === "ar" ? "من العصر الذهبي" : "From the Golden Age"}</span>`;
    $("in-feedback").textContent = "";
    /* اخلط القطع الصحيحة والملهية */
    const all = [...inv.need.map((p, i) => ({ ...p, key: "n" + i })), ...inv.extra.map((p, i) => ({ ...p, key: "e" + i }))]
      .sort(() => Math.random() - 0.5);
    $("in-bench").innerHTML = all.map(p => `
      <button class="in-part" data-key="${p.key}">
        <span class="ic">${p.ic}</span>
        <span>${p[L]}</span>
      </button>`).join("");
    $("in-bench").querySelectorAll(".in-part").forEach(b => b.addEventListener("click", () => toggle(b)));
    renderWorkbench();
  }

  function toggle(btn) {
    const key = btn.dataset.key;
    if (selected.includes(key)) { selected = selected.filter(k => k !== key); btn.classList.remove("selected"); AudioBus.tick(360); }
    else { selected.push(key); btn.classList.add("selected"); AudioBus.tick(620); }
    renderWorkbench();
  }

  function renderWorkbench() {
    const inv = INVENTIONS[round], L = Lang.current();
    if (!selected.length) {
      $("in-workbench").innerHTML = `<span style="color:var(--muted); font-weight:700;">${L === "ar" ? "اختر القطع لتظهر هنا..." : "Pick parts to see them here..."}</span>`;
      return;
    }
    $("in-workbench").innerHTML = selected.map(key => {
      const src = key[0] === "n" ? inv.need[+key.slice(1)] : inv.extra[+key.slice(1)];
      return `<span class="in-slot-chip">${src.ic} ${src[L]}</span>`;
    }).join("");
  }

  function build() {
    const inv = INVENTIONS[round], L = Lang.current();
    const needKeys = inv.need.map((_, i) => "n" + i);
    const hasAllNeed = needKeys.every(k => selected.includes(k));
    const hasExtra = selected.some(k => k[0] === "e");
    if (hasAllNeed && !hasExtra && selected.length === needKeys.length) {
      built++; $("stat-built").textContent = built;
      AudioBus.success();
      Particles.fire(50, { originY: "40%" });
      $("in-feedback").textContent = I18N.built[L];
      $("in-workbench").style.borderColor = "var(--mint-ink)";
      setTimeout(() => {
        $("in-workbench").style.borderColor = "";
        round++;
        if (round >= INVENTIONS.length) return win();
        renderRound();
      }, 1600);
    } else if (hasExtra) {
      AudioBus.fail();
      $("in-feedback").textContent = I18N.extra[L];
    } else {
      AudioBus.fail();
      $("in-feedback").textContent = I18N.missing[L];
    }
  }

  function win() {
    const L = Lang.current();
    $("win-sub").textContent = L === "ar"
      ? `أربعة اختراعات من العصر الذهبي — أنت مخترع الغد!`
      : `Four Golden-Age inventions — you're tomorrow's inventor!`;
    Storage.set("anos_invention_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    round = 0; built = 0;
    $("stat-built").textContent = 0;
    Modal.close("win-modal");
    renderRound();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", renderRound);
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  $("in-build").addEventListener("click", build);
  AudioBus.bindButton($("mute-btn"));
  renderRound();
})();
