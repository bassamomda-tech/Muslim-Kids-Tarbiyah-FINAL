/* ============================================================
   77 · مكتبة بيت الحكمة — فرز الكتب إلى رفوف العلوم
   اختر كتاباً ثم اضغط الرفّ الصحيح
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "على خطى القدوات", en: "In the Footsteps of Role Models" },
    crumbTitle:  { ar: "مكتبة بيت الحكمة", en: "House of Wisdom Library" },
    title:       { ar: "مكتبة بيت الحكمة", en: "The House of Wisdom Library" },
    desc:        { ar: "بيت الحكمة في بغداد كان أعظم مكتبة في العالم! الكتب تناثرت على الطاولة — اختر كل كتابٍ وضعه على الرفّ المناسب لعلمه: الطب، الفلك، الرياضيات...", en: "The House of Wisdom in Baghdad was the world's greatest library! The books are scattered on the table — pick each book and place it on the right shelf for its field: medicine, astronomy, mathematics..." },
    conveyorLabel:{ ar: "طاولة الكتب — اختر كتاباً ثم اضغط رفّه", en: "Book table — pick a book, then tap its shelf" },
    statSorted:  { ar: "كتب رتّبتها", en: "Books sorted" },
    statErrors:  { ar: "أخطاء", en: "Errors" },
    sideTitle:   { ar: "بيت الحكمة", en: "The House of Wisdom" },
    sideQuote:   { ar: "في بغداد أيام الخلافة العباسية، تُرجمت كتب العالم كله إلى العربية، وأبدع العلماء المسلمون علوماً جديدة.", en: "In Baghdad during the Abbasid Caliphate, books from the whole world were translated into Arabic, and Muslim scholars created new sciences." },
    sideSrc:     { ar: "العصر الذهبي", en: "The Golden Age" },
    tip:         { ar: "من علماء بيت الحكمة: الخوارزمي (الجبر)، الكندي (الفلسفة)، بنو موسى (الميكانيكا). كلمة «Algorithm» مأخوذة من اسم الخوارزمي!", en: "Scholars of the House of Wisdom: al-Khwarizmi (algebra), al-Kindi (philosophy), Banu Musa (mechanics). The word \"Algorithm\" comes from al-Khwarizmi's name!" },
    winEyebrow:  { ar: "أمين المكتبة", en: "The Librarian" },
    winTitle:    { ar: "رتّبتَ مكتبة بيت الحكمة!", en: "You organized the House of Wisdom!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "من جديد", en: "Again" },
    good:        { ar: "أحسنت! الكتاب في رفّه ✓", en: "Well done! The book is on its shelf ✓" },
    bad:         { ar: "هذا ليس علم هذا الكتاب — انظر عنوانه", en: "That's not this book's field — check its title" },
    pickFirst:   { ar: "اختر كتاباً أولاً من الطاولة", en: "Pick a book from the table first" },
  };

  const SHELVES = [
    { id: "med", ic: "⚕️", ar: "الطب", en: "Medicine" },
    { id: "astro", ic: "🔭", ar: "الفلك", en: "Astronomy" },
    { id: "math", ic: "📐", ar: "الرياضيات", en: "Mathematics" },
    { id: "chem", ic: "⚗️", ar: "الكيمياء", en: "Chemistry" },
  ];
  const BOOKS = [
    { cat: "med", ic: "📕", ar: "القانون في الطب — ابن سينا", en: "Canon of Medicine — Ibn Sina" },
    { cat: "med", ic: "📕", ar: "التصريف — الزهراوي", en: "Al-Tasrif — Al-Zahrawi" },
    { cat: "med", ic: "📕", ar: "الحاوي — الرازي", en: "Al-Hawi — Al-Razi" },
    { cat: "astro", ic: "📘", ar: "الزيج — البتّاني", en: "Star Tables — Al-Battani" },
    { cat: "astro", ic: "📘", ar: "صور الكواكب — الصوفي", en: "Book of Stars — Al-Sufi" },
    { cat: "astro", ic: "📘", ar: "حركة الأفلاك — البيروني", en: "Motion of Spheres — Al-Biruni" },
    { cat: "math", ic: "📗", ar: "الجبر والمقابلة — الخوارزمي", en: "Algebra — Al-Khwarizmi" },
    { cat: "math", ic: "📗", ar: "الأرقام الهندية — الكندي", en: "Hindu Numerals — Al-Kindi" },
    { cat: "math", ic: "📗", ar: "مساحة الأشكال — بنو موسى", en: "Geometry — Banu Musa" },
    { cat: "chem", ic: "📙", ar: "أسرار الكيمياء — جابر بن حيّان", en: "Secrets of Chemistry — Jabir ibn Hayyan" },
    { cat: "chem", ic: "📙", ar: "التقطير والتصعيد — الرازي", en: "Distillation — Al-Razi" },
    { cat: "chem", ic: "📙", ar: "الأحجار والمعادن — البيروني", en: "Minerals — Al-Biruni" },
  ];

  const $ = (id) => document.getElementById(id);
  let sorted = 0, errors = 0, selected = null, pool = [];

  function build() {
    sorted = 0; errors = 0; selected = null;
    pool = BOOKS.map((b, i) => ({ ...b, id: i })).sort(() => Math.random() - 0.5);
    const L = Lang.current();
    $("bk-shelves").innerHTML = SHELVES.map(s => `
      <div class="bk-shelf" data-shelf="${s.id}">
        <div class="cat">${s.ic} ${s[L]}</div>
        <div class="drop-zone" id="zone-${s.id}"></div>
      </div>`).join("");
    $("bk-shelves").querySelectorAll(".bk-shelf").forEach(sh => sh.addEventListener("click", () => dropOn(sh.dataset.shelf)));
    renderConveyor();
    $("stat-sorted").textContent = `0/${BOOKS.length}`;
    $("stat-errors").textContent = 0;
    $("bk-feedback").textContent = "";
  }

  function renderConveyor() {
    const L = Lang.current();
    $("bk-conveyor").innerHTML = pool.map(b => `
      <button class="bk-book ${selected === b.id ? "selected" : ""}" data-id="${b.id}">
        ${b.ic} ${b[L]}
      </button>`).join("") || `<span style="color:var(--muted); font-weight:700;">${L === "ar" ? "المكتبة مرتّبة! 🎉" : "Library sorted! 🎉"}</span>`;
    $("bk-conveyor").querySelectorAll(".bk-book").forEach(b => b.addEventListener("click", () => {
      selected = selected === +b.dataset.id ? null : +b.dataset.id;
      AudioBus.tick(560);
      renderConveyor();
    }));
  }

  function dropOn(shelfId) {
    const L = Lang.current();
    if (selected === null) { $("bk-feedback").textContent = I18N.pickFirst[L]; return; }
    const book = pool.find(b => b.id === selected);
    if (!book) return;
    if (book.cat === shelfId) {
      $("zone-" + shelfId).innerHTML += `<span class="bk-book-mini">${book.ic}</span>`;
      pool = pool.filter(b => b.id !== selected);
      selected = null; sorted++;
      $("stat-sorted").textContent = `${sorted}/${BOOKS.length}`;
      AudioBus.chord([523, 659], 0.16);
      Particles.fire(12, { originY: "30%" });
      $("bk-feedback").textContent = I18N.good[L];
      renderConveyor();
      if (sorted >= BOOKS.length) setTimeout(win, 600);
    } else {
      errors++; $("stat-errors").textContent = errors;
      AudioBus.fail();
      const shelf = $("bk-shelves").querySelector(`[data-shelf="${shelfId}"]`);
      shelf.classList.add("hover");
      setTimeout(() => shelf.classList.remove("hover"), 400);
      $("bk-feedback").textContent = I18N.bad[L];
    }
  }

  function win() {
    const L = Lang.current();
    $("win-sub").textContent = L === "ar" ? `12 كتاباً في رفوفها بـ ${errors} أخطاء فقط` : `12 books shelved with only ${errors} errors`;
    Storage.set("anos_library_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { /* أعد بناء العناوين مع الحفاظ على التقدم صعب؛ نعيد الضبط */ build(); });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", () => { Modal.close("win-modal"); build(); });
  $("reset-btn").addEventListener("click", build);
  AudioBus.bindButton($("mute-btn"));
  build();
})();
