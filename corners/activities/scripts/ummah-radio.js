/* ============================================================
   98 · إذاعة الأمة — رتّب فقرات النشرة واقرأها «على الهواء»
   تظليل الكلمات + SpeechSynthesis إن توفّر
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "أمتي الواحدة", en: "My One Ummah" },
    crumbTitle:  { ar: "إذاعة الأمة", en: "Ummah Radio" },
    title:       { ar: "إذاعة الأمة", en: "Ummah Radio Studio" },
    desc:        { ar: "كن مذيع إذاعةٍ يوصل أخبار الخير في أمتنا! رتّب فقرات نشرتك بالترتيب الصحيح، ثم اضغط «على الهواء» لتقرأ كل فقرة. أوصِل صوت الأمة للعالم.", en: "Be a radio host sharing good news from our Ummah! Arrange your bulletin's segments in the right order, then go on air to read each one. Carry the Ummah's voice to the world." },
    onair:       { ar: "على الهواء", en: "ON AIR" },
    segsLabel:   { ar: "فقرات النشرة — اقرأها بالترتيب الصحيح", en: "Bulletin segments — read them in the right order" },
    statRead:    { ar: "فقرات أذعتها", en: "Segments aired" },
    sideTitle:   { ar: "كلمة الحقّ", en: "The word of truth" },
    sideQuote:   { ar: "«بلّغوا عنّي ولو آية»", en: "\"Convey from me, even one verse\"" },
    sideSrc:     { ar: "رواه البخاري", en: "Narrated by al-Bukhari" },
    tip:         { ar: "الإعلام مسؤولية: انقل الخير والحقّ، وادعُ لإخوانك، وعرّف بقضايا أمتك بأسلوبٍ صادقٍ جميل. الكلمة الطيبة صدقة.", en: "Media is a responsibility: convey good and truth, pray for your brothers, and share your Ummah's causes truthfully and beautifully. A kind word is charity." },
    winEyebrow:  { ar: "انتهت النشرة", en: "Bulletin over" },
    winTitle:    { ar: "أذعتَ نشرة الأمة كاملة!", en: "You aired the whole Ummah bulletin!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "نشرة جديدة", en: "New bulletin" },
    nextIs:      { ar: "الفقرة التالية:", en: "Next segment:" },
    wrongOrder:  { ar: "ليست الفقرة التالية — ابدأ بالافتتاحية", en: "Not the next segment — start with the opening" },
  };

  /* الفقرات بالترتيب الصحيح */
  const SEGMENTS = [
    { icon: "🎙", label: { ar: "الافتتاحية", en: "Opening" },
      text: { ar: "بسم الله، السلام عليكم ورحمة الله. أهلاً بكم في إذاعة الأمة، نشرة الخير التي تجمع أخبار المسلمين حول العالم.", en: "In the name of Allah, peace be upon you. Welcome to Ummah Radio, the good-news bulletin gathering Muslims' news around the world." } },
    { icon: "🕌", label: { ar: "خبر القدس", en: "Al-Quds news" },
      text: { ar: "من القدس: المصلّون يعمرون المسجد الأقصى بالصلاة والقرآن، ونسأل الله أن يحفظه ويحفظ أهله الصامدين.", en: "From Al-Quds: worshippers fill Al-Aqsa with prayer and Quran; we ask Allah to protect it and its steadfast people." } },
    { icon: "🤝", label: { ar: "خبر التكافل", en: "Solidarity news" },
      text: { ar: "قوافل الخير تصل للمحتاجين في بلادٍ عديدة، حاملةً الطعام والدواء — فالمؤمنون كالجسد الواحد.", en: "Convoys of good reach the needy in many lands, carrying food and medicine — the believers are like one body." } },
    { icon: "📚", label: { ar: "فقرة العلم", en: "Knowledge segment" },
      text: { ar: "وفي أخبار العلم: أطفالٌ حول العالم يحفظون القرآن ويتعلّمون دينهم، فهم بناة الغد ونور الأمة.", en: "In knowledge news: children worldwide memorize the Quran and learn their religion — they are the builders of tomorrow and the light of the Ummah." } },
    { icon: "🤲", label: { ar: "الختام والدعاء", en: "Closing du'a" },
      text: { ar: "وفي ختام نشرتنا، ندعو الله أن يوحّد صفّ الأمة وينصر المستضعفين. والسلام عليكم ورحمة الله وبركاته.", en: "To close our bulletin, we ask Allah to unite the Ummah and support the oppressed. Peace and blessings be upon you." } },
  ];

  const $ = (id) => document.getElementById(id);
  let nextIdx = 0, poolOrder = [], reading = false, wordTimer = null;

  function renderSegments() {
    const L = Lang.current();
    if (!poolOrder.length) poolOrder = SEGMENTS.map((_, i) => i).sort(() => Math.random() - 0.5);
    $("rd-segments").innerHTML = poolOrder.map(i => `
      <button class="rd-seg ${i < nextIdx ? "done" : ""}" data-i="${i}">
        ${SEGMENTS[i].icon} ${SEGMENTS[i].label[L]} ${i < nextIdx ? "✓" : ""}
      </button>`).join("");
    $("rd-segments").querySelectorAll(".rd-seg:not(.done)").forEach(b => b.addEventListener("click", () => pick(+b.dataset.i)));
    $("stat-read").textContent = `${nextIdx}/${SEGMENTS.length}`;
    if (nextIdx === 0) $("rd-script").innerHTML = `<span style="opacity:0.6;">${L === "ar" ? "اضغط الافتتاحية لتبدأ البثّ..." : "Press the opening to start broadcasting..."}</span>`;
  }

  function pick(i) {
    const L = Lang.current();
    if (reading) return;
    if (i !== nextIdx) { $("rd-feedback").textContent = I18N.wrongOrder[L]; AudioBus.fail(); return; }
    readSegment(i);
  }

  function readSegment(i) {
    const L = Lang.current();
    reading = true;
    $("rd-onair").classList.add("live");
    $("rd-feedback").textContent = "";
    const words = SEGMENTS[i].text[L].split(" ");
    $("rd-script").innerHTML = words.map((w, k) => `<span class="word" data-w="${k}">${w}</span>`).join(" ");
    const wordEls = $("rd-script").querySelectorAll(".word");

    /* TTS إن توفّر */
    let useTTS = false;
    try {
      const u = new SpeechSynthesisUtterance(SEGMENTS[i].text[L]);
      u.lang = L === "ar" ? "ar-SA" : "en-US"; u.rate = 0.95;
      const v = speechSynthesis.getVoices().find(v => v.lang && v.lang.startsWith(L === "ar" ? "ar" : "en"));
      if (v) { u.voice = v; useTTS = true; u.onend = () => finish(i); speechSynthesis.speak(u); }
    } catch (e) {}

    let k = 0;
    wordTimer = setInterval(() => {
      wordEls.forEach(w => w.classList.remove("hl"));
      if (k < wordEls.length) { wordEls[k].classList.add("hl"); if (!useTTS && !AudioBus.muted) AudioBus.tone(280 + (k % 5) * 40, 0.1, "sine", 0.04); k++; }
      else { clearInterval(wordTimer); wordTimer = null; if (!useTTS) finish(i); }
    }, 300);
  }

  function finish(i) {
    clearInterval(wordTimer); wordTimer = null;
    try { speechSynthesis.cancel(); } catch (e) {}
    $("rd-onair").classList.remove("live");
    $("rd-script").querySelectorAll(".word").forEach(w => w.classList.remove("hl"));
    reading = false;
    nextIdx++;
    AudioBus.chord([440, 587], 0.14); Particles.fire(14);
    renderSegments();
    if (nextIdx >= SEGMENTS.length) setTimeout(win, 500);
  }

  function win() {
    const L = Lang.current();
    $("win-sub").textContent = L === "ar" ? "خمس فقراتٍ من الخير أوصلتَ بها صوت أمتك!" : "Five good segments carrying your Ummah's voice!";
    Storage.set("anos_radio_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    nextIdx = 0; poolOrder = []; reading = false;
    clearInterval(wordTimer);
    try { speechSynthesis.cancel(); } catch (e) {}
    $("rd-onair").classList.remove("live");
    $("rd-feedback").textContent = "";
    Modal.close("win-modal");
    renderSegments();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { if (!reading) renderSegments(); });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  AudioBus.bindButton($("mute-btn"));
  try { speechSynthesis.getVoices(); } catch (e) {}
  renderSegments();
})();
