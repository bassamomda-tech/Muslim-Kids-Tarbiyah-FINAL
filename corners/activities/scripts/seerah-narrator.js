/* mkvoice-loader */(function(){try{var cs=document.currentScript,src=(cs&&cs.src)||"";var m=src.match(/^(.*\/corners\/)/);var base=m?m[1]:"";if(base&&!window.MKVoice&&!document.querySelector("script[data-mkvoice]")){var s=document.createElement("script");s.src=base+"shared/voice-engine.js";s.setAttribute("data-mkvoice","1");document.head.appendChild(s);}}catch(e){}})();
/* ============================================================
   79 · راوي السيرة — كتاب صوتي بتظليل الكلمات (karaoke-style)
   يستخدم SpeechSynthesis إن توفّر، وإلا تظليل موقوت + نغمات
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "على خطى القدوات", en: "In the Footsteps of Role Models" },
    crumbTitle:  { ar: "راوي السيرة", en: "Seerah Narrator" },
    title:       { ar: "راوي السيرة", en: "The Seerah Narrator" },
    desc:        { ar: "كتابٌ صوتيّ يروي لك السيرة النبوية! اضغط «اقرأ لي» فتُضاء الكلمات واحدةً واحدة مع الصوت. تنقّل بين الصفحات وعِش قصة النبي ﷺ منذ مولده.", en: "An audiobook narrating the Prophet's ﷺ life! Press \"Read to me\" and words light up one by one with the voice. Turn the pages and live the story from his birth." },
    readBtn:     { ar: "🔊 اقرأ لي", en: "🔊 Read to me" },
    stopBtn:     { ar: "⏹ أوقف", en: "⏹ Stop" },
    statPage:    { ar: "الصفحة", en: "Page" },
    sideTitle:   { ar: "فصول السيرة", en: "Chapters of the Seerah" },
    sidePill:    { ar: "6 فصول", en: "6 chapters" },
    tip:         { ar: "قراءة السيرة النبوية تزرع في القلب حبّ النبي ﷺ. اجعل لك وردَاً يومياً من قراءتها مع أهلك.", en: "Reading the Prophet's ﷺ biography plants love for him in the heart. Make a daily habit of reading it with your family." },
    winEyebrow:  { ar: "ختمتَ الكتاب", en: "Book finished" },
    winTitle:    { ar: "أتممتَ قراءة السيرة!", en: "You finished reading the Seerah!" },
    winSub:      { ar: "اللهم صلِّ وسلّم على نبيّنا محمد", en: "O Allah, send peace and blessings upon our Prophet Muhammad" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "اقرأ ثانيةً", en: "Read again" },
  };

  const PAGES = [
    { emoji: "🌟", floats: ["✨", "🐫", "🕋"], chapter: { ar: "المولد الشريف", en: "The Noble Birth" },
      ar: "وُلد النبي محمد ﷺ في مكة عام الفيل، يتيم الأب. كفله جدّه عبد المطّلب ثم عمّه أبو طالب.",
      en: "The Prophet Muhammad ﷺ was born in Makkah in the Year of the Elephant, his father having passed. His grandfather then his uncle cared for him." },
    { emoji: "🐑", floats: ["⛰", "☀️"], chapter: { ar: "الصادق الأمين", en: "The Truthful, Trustworthy" },
      ar: "رعى الغنم صغيراً، واشتهر بين الناس بالصدق والأمانة، حتى لقّبوه «الصادق الأمين» قبل النبوّة.",
      en: "As a youth he shepherded sheep and became known for truth and trust, called \"the Truthful, the Trustworthy\" before prophethood." },
    { emoji: "📜", floats: ["🕳", "🌙"], chapter: { ar: "نزول الوحي", en: "The Revelation Descends" },
      ar: "في غار حراء نزل جبريل عليه السلام بأول الوحي: «اقرأ باسم ربك الذي خلق». وبدأت رسالة الإسلام.",
      en: "In the cave of Hira, Jibril brought the first revelation: \"Read in the name of your Lord who created.\" The message of Islam began." },
    { emoji: "🕋", floats: ["💫", "🤲"], chapter: { ar: "الدعوة والصبر", en: "The Call and Patience" },
      ar: "دعا النبي ﷺ قومه إلى عبادة الله وحده، فآذوه وأصحابه، لكنه صبر ودعا لهم بالهداية.",
      en: "The Prophet ﷺ called his people to worship Allah alone; they harmed him and his followers, yet he was patient and prayed for their guidance." },
    { emoji: "🕌", floats: ["🌴", "🌙", "⭐"], chapter: { ar: "الهجرة والمدينة", en: "The Hijrah and Madinah" },
      ar: "هاجر إلى المدينة، فبنى المسجد وآخى بين المهاجرين والأنصار، وأقام دولة العدل والرحمة.",
      en: "He migrated to Madinah, built the mosque, joined the Muhajirun and Ansar as brothers, and established a state of justice and mercy." },
    { emoji: "☪️", floats: ["🤍", "🕊", "✨"], chapter: { ar: "الرحمة المهداة", en: "The Mercy to the Worlds" },
      ar: "بلّغ الرسالة كاملة، وفتح مكة بالعفو، وترك لنا القرآن والسنّة. كان رحمةً للعالمين ﷺ.",
      en: "He conveyed the full message, opened Makkah with forgiveness, and left us the Quran and Sunnah. He was a mercy to the worlds ﷺ." },
  ];

  const $ = (id) => document.getElementById(id);
  let page = 0, reading = false, wordTimer = null, seen = new Set();

  function renderChapters() {
    const L = Lang.current();
    $("rw-chapters").innerHTML = PAGES.map((p, i) => `
      <div class="dhikr-item ${seen.has(i) ? "is-highlighted" : ""}">
        <span class="dhikr-swatch" style="background:${seen.has(i) ? "var(--coral)" : "var(--bg-soft)"}"></span>
        <span class="dhikr-text" style="font-size:13px;">${p.chapter[L]}</span>
        <span class="dhikr-count">${seen.has(i) ? "✓" : i + 1}</span>
      </div>`).join("");
  }

  function renderDots() {
    $("rw-dots").innerHTML = PAGES.map((_, i) => `<span class="d ${i === page ? "on" : ""}"></span>`).join("");
  }

  function render() {
    stopReading();
    const p = PAGES[page], L = Lang.current();
    seen.add(page);
    $("rw-illus").innerHTML = `${p.emoji}` + p.floats.map((f, i) =>
      `<span class="float-em" style="left:${12 + i * 30}%; top:${18 + (i % 2) * 46}%;">${f}</span>`).join("");
    const words = p[L].split(" ");
    $("rw-text").innerHTML = words.map((w, i) => `<span class="word" data-w="${i}">${w}</span>`).join(" ");
    $("stat-page").textContent = `${page + 1}/${PAGES.length}`;
    renderDots(); renderChapters();
    $("rw-prev").disabled = page === 0;
  }

  function readAloud() {
    if (reading) { stopReading(); return; }
    const L = Lang.current();
    const words = $("rw-text").querySelectorAll(".word");
    reading = true;
    $("rw-read").textContent = I18N.stopBtn[L];

    /* الصوت: نستخدم SpeechSynthesis إن وُجد صوت مناسب */
    let useTTS = false;
    try {
      const u = new SpeechSynthesisUtterance($("rw-text").textContent);
      u.lang = L === "ar" ? "ar-SA" : "en-US";
      u.rate = 0.9;
      const voices = speechSynthesis.getVoices();
      const v = (L==="ar"&&window.MKVoice&&MKVoice.bestVoice("ar",MKVoice.guessGender($("rw-text").textContent))) || voices.find(v => v.lang && v.lang.startsWith(L === "ar" ? "ar" : "en"));
      if (v) { u.voice = v; useTTS = true; }
      u.onend = () => finishReading();
      if (useTTS) speechSynthesis.speak(u);
    } catch (e) { useTTS = false; }

    /* تظليل الكلمات (مع الصوت أو نغمات بديلة) */
    let i = 0;
    const per = 380;
    wordTimer = setInterval(() => {
      words.forEach(w => w.classList.remove("hl"));
      if (i < words.length) {
        words[i].classList.add("hl");
        if (!useTTS && !AudioBus.muted) AudioBus.tone(300 + (i % 6) * 50, 0.12, "sine", 0.05);
        i++;
      } else {
        if (!useTTS) finishReading();
        else { clearInterval(wordTimer); wordTimer = null; }
      }
    }, per);
  }

  function finishReading() {
    stopReading();
    /* انتقال تلقائي للصفحة التالية بعد لحظة */
    if (page < PAGES.length - 1) {
      AudioBus.tick(600);
    } else if (!Storage.get("anos_seerah_done", false)) {
      win();
    }
  }

  function stopReading() {
    reading = false;
    clearInterval(wordTimer); wordTimer = null;
    try { speechSynthesis.cancel(); } catch (e) {}
    $("rw-text").querySelectorAll(".word").forEach(w => w.classList.remove("hl"));
    $("rw-read").textContent = I18N.readBtn[Lang.current()];
  }

  function next() {
    if (page < PAGES.length - 1) { page++; render(); }
    else win();
  }
  function prev() { if (page > 0) { page--; render(); } }

  function win() {
    Storage.set("anos_seerah_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    page = 0; seen = new Set();
    Modal.close("win-modal");
    render();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", render);
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  $("rw-read").addEventListener("click", readAloud);
  $("rw-next").addEventListener("click", next);
  $("rw-prev").addEventListener("click", prev);
  AudioBus.bindButton($("mute-btn"));
  /* حمّل أصوات TTS مبكراً */
  try { speechSynthesis.getVoices(); speechSynthesis.onvoiceschanged = () => {}; } catch (e) {}
  render();
})();
