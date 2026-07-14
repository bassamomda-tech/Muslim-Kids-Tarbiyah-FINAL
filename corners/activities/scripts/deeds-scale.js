/* ============================================================
   57 · ميزان الحسنات — ميزان ذو كفّتين يميل بالفيزياء
   أضف أعمالاً صالحة حتى ترجح كفة الحسنات
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "رحلة الإيمان", en: "Journey of Faith" },
    crumbTitle:  { ar: "ميزان الحسنات", en: "Scale of Deeds" },
    title:       { ar: "ميزان الحسنات", en: "The Scale of Good Deeds" },
    desc:        { ar: "كفّة السيئات مثقلة! اختر أعمالاً صالحة وضعها في كفّة الحسنات حتى ترجح — وشاهد الميزان يميل مع كل عمل تضيفه.", en: "The bad-deeds pan is heavy! Pick good deeds and place them on the good pan until it outweighs — watch the scale tilt with every deed you add." },
    goodPan:     { ar: "الحسنات", en: "Good deeds" },
    badPan:      { ar: "السيئات", en: "Bad deeds" },
    deedsLabel:  { ar: "اختر من الأعمال الصالحة", en: "Choose from the good deeds" },
    statRound:   { ar: "الجولة", en: "Round" },
    statGood:    { ar: "وزن الحسنات", en: "Good weight" },
    statBad:     { ar: "وزن السيئات", en: "Bad weight" },
    sideTitle:   { ar: "الميزان يوم القيامة", en: "The Scale on Judgment Day" },
    sideQuote:   { ar: "﴿وَنَضَعُ الْمَوَازِينَ الْقِسْطَ لِيَوْمِ الْقِيَامَةِ فَلَا تُظْلَمُ نَفْسٌ شَيْئًا﴾", en: "\"We shall set up the scales of justice on the Day of Resurrection, so no soul will be wronged at all\"" },
    sideSrc:     { ar: "الأنبياء · 47", en: "Al-Anbiya · 47" },
    tip:         { ar: "قال ﷺ: «كلمتان خفيفتان على اللسان، ثقيلتان في الميزان: سبحان الله وبحمده، سبحان الله العظيم» — بعض الأعمال الصغيرة وزنها كبير جداً!", en: "The Prophet ﷺ said: \"Two phrases light on the tongue, heavy on the Scale: SubhanAllahi wa bihamdih, SubhanAllahil-'Adheem\" — some small deeds weigh enormously!" },
    winEyebrow:  { ar: "ثقيل الميزان", en: "Heavy on the Scale" },
    winTitle:    { ar: "رجحت كفّة حسناتك!", en: "Your good deeds outweighed!" },
    winMeaning:  { ar: "<strong>سر جميل</strong> الحسنة بعشر أمثالها إلى سبعمائة ضعف — أما السيئة فبواحدة فقط. رحمة الله تُرجّح كفّتك دائماً!", en: "<strong>A beautiful secret</strong> A good deed counts ten to seven hundred times — a bad deed only once. Allah's mercy always tips your scale!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "جولة جديدة", en: "New round" },
  };

  const DEEDS = [
    { ar: "صلاة الفجر في وقتها", en: "Fajr on time",              w: 8 },
    { ar: "برّ الوالدين",         en: "Kindness to parents",       w: 8 },
    { ar: "قراءة صفحة قرآن",     en: "Reading a Quran page",      w: 7 },
    { ar: "سبحان الله وبحمده ×100", en: "SubhanAllah ×100",        w: 6 },
    { ar: "صدقة سرّية",          en: "A secret charity",          w: 5 },
    { ar: "صلة الأرحام",         en: "Visiting relatives",        w: 5 },
    { ar: "إماطة الأذى عن الطريق", en: "Removing harm from the road", w: 3 },
    { ar: "ابتسامة في وجه أخيك",  en: "A smile for your brother",  w: 2 },
    { ar: "كلمة طيبة",           en: "A kind word",               w: 2 },
  ];

  /* الجولات: وزن السيئات المطلوب التغلب عليه */
  const ROUNDS = [
    { bad: 12, missions: { ar: "يومٌ فيه كذبةٌ صغيرة وكلمةٌ جارحة — أثقل كفّة الحسنات!", en: "A day with a small lie and a hurtful word — outweigh them with good!" } },
    { bad: 20, missions: { ar: "يومٌ أصعب: غضبٌ وشجارٌ وإهمال صلاة — تحتاج حسناتٍ أثقل", en: "A harder day: anger, a fight, a missed prayer — you need heavier good deeds" } },
    { bad: 30, missions: { ar: "التحدي الأكبر! هل تصل لوزن 30 قبل أن تنفد الأعمال؟", en: "The biggest challenge! Can you reach weight 30 before deeds run out?" } },
  ];

  const $ = (id) => document.getElementById(id);
  let round = 0, goodW = 0, used = [];

  function tilt() {
    /* ميل الكفة: موجب = الحسنات أثقل. الحسنات على اليمين */
    const diff = goodW - ROUNDS[round].bad;
    const deg = Math.max(-14, Math.min(14, diff * 1.2));
    /* الكفة الأثقل تنزل: دوران سالب ينزل يمين الميزان */
    $("ds-beam").style.transform = `translateX(-50%) rotate(${-deg}deg)`;
    $("pan-good").style.top = `${deg * 2.4}px`;
    $("pan-bad").style.top = `${-deg * 2.4}px`;
  }

  function renderPans() {
    const bad = ROUNDS[round].bad;
    $("plate-bad").innerHTML = Array.from({ length: Math.ceil(bad / 4) }, () =>
      `<span class="ds-token sin">✕</span>`).join("");
    $("plate-good").innerHTML = used.map(() => `<span class="ds-token">✓</span>`).join("");
    $("stat-good").textContent = goodW;
    $("stat-bad").textContent = bad;
    tilt();
  }

  function renderDeeds() {
    const L = Lang.current();
    $("ds-deeds").innerHTML = DEEDS.map((d, i) => `
      <button class="ds-deed ${used.includes(i) ? "used" : ""}" data-i="${i}">
        ${d[L]} <span class="w">+${d.w}</span>
      </button>`).join("");
    $("ds-deeds").querySelectorAll(".ds-deed:not(.used)").forEach(b => {
      b.addEventListener("click", () => addDeed(+b.dataset.i));
    });
  }

  function addDeed(i) {
    used.push(i);
    goodW += DEEDS[i].w;
    AudioBus.tone(500 + DEEDS[i].w * 40, 0.15, "triangle", 0.08);
    renderPans(); renderDeeds();
    const L = Lang.current();
    if (goodW > ROUNDS[round].bad) {
      AudioBus.success();
      Particles.fire(50, { originY: "40%" });
      $("ds-feedback").textContent = L === "ar" ? "رجحت كفّتك! ما شاء الله ⚖️✨" : "Your pan outweighed! MashaAllah ⚖️✨";
      setTimeout(() => {
        round++;
        if (round >= ROUNDS.length) return win();
        startRound();
      }, 1600);
    } else {
      const need = ROUNDS[round].bad - goodW + 1;
      $("ds-feedback").textContent = L === "ar" ? `تحتاج ${need} وزناً إضافياً على الأقل` : `You need at least ${need} more weight`;
    }
  }

  function startRound() {
    goodW = 0; used = [];
    const L = Lang.current();
    $("ds-mission").innerHTML = `⚖️ ${ROUNDS[round].missions[L]}`;
    $("stat-round").textContent = `${round + 1}/${ROUNDS.length}`;
    $("ds-feedback").textContent = "";
    renderPans(); renderDeeds();
  }

  function win() {
    const L = Lang.current();
    $("win-sub").textContent = L === "ar"
      ? "ثلاثة أيام رجحت فيها كفّة الخير"
      : "Three days where goodness outweighed";
    Storage.set("anos_scale_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    round = 0;
    Modal.close("win-modal");
    startRound();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", startRound);
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  AudioBus.bindButton($("mute-btn"));
  startRound();
})();
