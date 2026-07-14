/* ============================================================
   97 · أطفال العالم المسلم — طابِق الطفل ببلده من تحيّته وثقافته
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "أمتي الواحدة", en: "My One Ummah" },
    crumbTitle:  { ar: "أطفال العالم المسلم", en: "Children of the Muslim World" },
    title:       { ar: "أطفال العالم المسلم", en: "Children of the Muslim World" },
    desc:        { ar: "الأمة الإسلامية تمتدّ من المغرب إلى إندونيسيا! تعرّف على أطفالٍ من بلادٍ مختلفة، واستمع لتحيّتهم، ثم خمّن من أي بلدٍ هم. أمّةٌ واحدةٌ بألوانٍ كثيرة.", en: "The Muslim Ummah stretches from Morocco to Indonesia! Meet children from different countries, hear their greeting, then guess which country they're from. One Ummah of many colors." },
    statRound:   { ar: "الطفل", en: "Child" },
    statScore:   { ar: "تعرّفت عليهم", en: "Recognized" },
    sideTitle:   { ar: "أمّةٌ واحدة", en: "One Ummah" },
    sideQuote:   { ar: "﴿إنّ هذه أمّتكم أمّةً واحدةً وأنا ربّكم فاعبدون﴾", en: "\"Indeed this, your religion, is one religion, and I am your Lord, so worship Me\"" },
    sideSrc:     { ar: "الأنبياء · 92", en: "Al-Anbiya · 92" },
    tip:         { ar: "يعيش أكثر من مليارَي مسلمٍ في العالم بألوانٍ ولغاتٍ مختلفة، لكنهم أمّةٌ واحدة تجمعها العقيدة والقبلة. التحيّة الإسلامية «السلام عليكم» تجمعهم جميعاً.", en: "Over two billion Muslims live worldwide in different colors and languages, yet they are one Ummah united by faith and qibla. The greeting \"As-salamu alaykum\" unites them all." },
    winEyebrow:  { ar: "سفيرُ الأمة", en: "Ambassador of the Ummah" },
    winTitle:    { ar: "تعرّفت على إخوانك حول العالم!", en: "You met your brothers around the world!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "من جديد", en: "Again" },
    correct:     { ar: "أحسنت! السلام عليكم يا أخي 🤝", en: "Well done! Peace be upon you, my brother 🤝" },
    wrong:       { ar: "ليس هذا بلده — اقرأ التلميح", en: "Not their country — read the hint" },
  };

  /* الأطفال: الوجه، التحيّة المحلّية، التلميح، البلد الصحيح + بدائل */
  const KIDS = [
    { face: "🧕🏽", greet: "السلام عليكم", hint: { ar: "بلدٌ عربيّ فيه الأزهر الشريف وأطول نهرٍ في العالم", en: "An Arab country with Al-Azhar and the world's longest river" },
      country: { ar: "مصر", en: "Egypt", flag: "🇪🇬" }, wrong: [ { ar: "اليابان", en: "Japan", flag: "🇯🇵" }, { ar: "البرازيل", en: "Brazil", flag: "🇧🇷" }, { ar: "كندا", en: "Canada", flag: "🇨🇦" } ] },
    { face: "👦🏾", greet: "Assalamu alaikum", hint: { ar: "أكبر دولةٍ إسلاميةً بعدد السكان، آلاف الجزر في جنوب شرق آسيا", en: "The most populous Muslim country, thousands of islands in SE Asia" },
      country: { ar: "إندونيسيا", en: "Indonesia", flag: "🇮🇩" }, wrong: [ { ar: "فرنسا", en: "France", flag: "🇫🇷" }, { ar: "مصر", en: "Egypt", flag: "🇪🇬" }, { ar: "روسيا", en: "Russia", flag: "🇷🇺" } ] },
    { face: "🧒🏼", greet: "Selamün aleyküm", hint: { ar: "بلدٌ بين قارّتين، فيه مدينة إسطنبول ومسجد آيا صوفيا", en: "A country between two continents, home to Istanbul and Hagia Sophia" },
      country: { ar: "تركيا", en: "Turkey", flag: "🇹🇷" }, wrong: [ { ar: "الهند", en: "India", flag: "🇮🇳" }, { ar: "المكسيك", en: "Mexico", flag: "🇲🇽" }, { ar: "نيجيريا", en: "Nigeria", flag: "🇳🇬" } ] },
    { face: "👧🏿", greet: "As-salāmu ʿalaykum", hint: { ar: "أكبر دولةٍ إسلاميةٍ في أفريقيا بعدد المسلمين، غرب القارّة", en: "Africa's largest Muslim population, in the west of the continent" },
      country: { ar: "نيجيريا", en: "Nigeria", flag: "🇳🇬" }, wrong: [ { ar: "الصين", en: "China", flag: "🇨🇳" }, { ar: "تركيا", en: "Turkey", flag: "🇹🇷" }, { ar: "إيطاليا", en: "Italy", flag: "🇮🇹" } ] },
    { face: "🧕🏻", greet: "السلام عليكم", hint: { ar: "بلدٌ فيه الحرمان الشريفان: مكة والمدينة", en: "The country of the two holy mosques: Makkah and Madinah" },
      country: { ar: "السعودية", en: "Saudi Arabia", flag: "🇸🇦" }, wrong: [ { ar: "ألمانيا", en: "Germany", flag: "🇩🇪" }, { ar: "إندونيسيا", en: "Indonesia", flag: "🇮🇩" }, { ar: "تايلاند", en: "Thailand", flag: "🇹🇭" } ] },
    { face: "👦🏽", greet: "السلام عليكم", hint: { ar: "بلدٌ في جنوب آسيا، ثاني أكبر عددٍ للمسلمين، عاصمته إسلام آباد", en: "A South Asian country, second-largest Muslim population, capital Islamabad" },
      country: { ar: "باكستان", en: "Pakistan", flag: "🇵🇰" }, wrong: [ { ar: "إسبانيا", en: "Spain", flag: "🇪🇸" }, { ar: "مصر", en: "Egypt", flag: "🇪🇬" }, { ar: "كوريا", en: "Korea", flag: "🇰🇷" } ] },
  ];

  const $ = (id) => document.getElementById(id);
  let idx = 0, score = 0, order = [];

  function render() {
    const L = Lang.current();
    if (idx >= KIDS.length) return win();
    const k = KIDS[order[idx]];
    $("stat-round").textContent = `${idx + 1}/${KIDS.length}`;
    const opts = [ { ...k.country, ok: true }, ...k.wrong.slice(0, 3).map(w => ({ ...w, ok: false })) ].sort(() => Math.random() - 0.5);
    $("gl-area").innerHTML = `
      <div class="gl-child-card">
        <div class="face">${k.face}</div>
        <div class="greet">«${k.greet}»</div>
        <div class="say">${L === "ar" ? "من أي بلدٍ أنا؟ — " + k.hint.ar : "Which country am I from? — " + k.hint.en}</div>
        <div class="gl-country-opts">
          ${opts.map(o => `<button class="gl-country" data-ok="${o.ok ? 1 : 0}"><span class="flag">${o.flag}</span>${o[L]}</button>`).join("")}
        </div>
      </div>`;
    $("gl-area").querySelectorAll(".gl-country").forEach(b => b.addEventListener("click", () => choose(b)));
    /* «نطق» التحية بنغمة ترحيبية */
    AudioBus.chord([440, 554, 659], 0.18);
  }

  function choose(btn) {
    const L = Lang.current();
    $("gl-area").querySelectorAll(".gl-country").forEach(x => x.style.pointerEvents = "none");
    if (btn.dataset.ok === "1") {
      score++; $("stat-score").textContent = score;
      btn.classList.add("good");
      AudioBus.chord([523, 659, 784], 0.2); Particles.fire(28);
      idx++;
      setTimeout(() => { if (idx >= KIDS.length) win(); else render(); }, 1200);
    } else {
      btn.classList.add("bad");
      AudioBus.fail();
      $("gl-area").querySelectorAll(".gl-country").forEach(x => { if (x.dataset.ok === "1") x.classList.add("good"); });
      idx++;
      setTimeout(() => { if (idx >= KIDS.length) win(); else render(); }, 1600);
    }
  }

  function win() {
    const L = Lang.current();
    $("win-sub").textContent = L === "ar" ? `تعرّفت على ${score} من ${KIDS.length} أطفال — كلهم إخوتك في الأمة الواحدة!` : `You recognized ${score} of ${KIDS.length} children — all your brothers in the one Ummah!`;
    Storage.set("anos_kids_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    idx = 0; score = 0;
    $("stat-score").textContent = 0;
    order = KIDS.map((_, i) => i).sort(() => Math.random() - 0.5);
    Modal.close("win-modal");
    render();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { if (idx < KIDS.length) render(); });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  AudioBus.bindButton($("mute-btn"));
  order = KIDS.map((_, i) => i).sort(() => Math.random() - 0.5);
  render();
})();
