/* ============================================================
   72 · مجلس الصحابة — مبارزة لاعبَين على نفس الجهاز
   نفس السؤال يظهر للاعبَين (أحدهما مقلوب)، أسرعهما يكسب
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "على خطى القدوات", en: "In the Footsteps of Role Models" },
    crumbTitle:  { ar: "مجلس الصحابة", en: "Council of Companions" },
    title:       { ar: "مجلس الصحابة", en: "The Companions' Duel" },
    desc:        { ar: "لاعبان على جهازٍ واحد! تعرّفا على الصحابة الكرام في مسابقةٍ وجهاً لوجه. أسرعكما بالإجابة الصحيحة يكسب النقطة. من يجمع نقاطاً أكثر بعد 8 جولات؟", en: "Two players, one device! Learn about the noble Companions face to face. The faster correct answer wins the point. Who scores most after 8 rounds?" },
    player1:     { ar: "اللاعب الأول 🔴", en: "Player 1 🔴" },
    player2:     { ar: "اللاعب الثاني 🔵", en: "Player 2 🔵" },
    vs:          { ar: "استعدّا!", en: "Get ready!" },
    startBtn:    { ar: "ابدأ المباراة", en: "Start match" },
    statRound:   { ar: "الجولة", en: "Round" },
    sideTitle:   { ar: "كيف نلعب؟", en: "How to play" },
    how:         { ar: "اجلسا متقابلَين والجهاز بينكما. تظهر نفس البطاقة لكلٍّ منكما بالمقلوب — أول من يضغط الإجابة الصحيحة يكسب!", en: "Sit facing each other with the device between you. The same card appears for each of you (one upside-down) — first to tap the correct answer wins!" },
    tip:         { ar: "الصحابة رضي الله عنهم هم من رأوا النبي ﷺ وآمنوا به. قال ﷺ: «أصحابي كالنجوم بأيّهم اقتديتم اهتديتم».", en: "The Companions (may Allah be pleased with them) saw the Prophet ﷺ and believed. He ﷺ said: \"My Companions are like stars — whichever you follow, you'll be guided.\"" },
    winEyebrow:  { ar: "انتهت المباراة", en: "Match over" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "مباراة جديدة", en: "New match" },
    p1wins:      { ar: "فاز اللاعب الأول! 🔴", en: "Player 1 wins! 🔴" },
    p2wins:      { ar: "فاز اللاعب الثاني! 🔵", en: "Player 2 wins! 🔵" },
    draw:        { ar: "تعادل! 🤝", en: "It's a draw! 🤝" },
    go:          { ar: "أجب بسرعة!", en: "Answer fast!" },
    p1got:       { ar: "🔴 اللاعب الأول أصاب!", en: "🔴 Player 1 scored!" },
    p2got:       { ar: "🔵 اللاعب الثاني أصاب!", en: "🔵 Player 2 scored!" },
    wrong:       { ar: "إجابة خاطئة — الدور للآخر", en: "Wrong — chance for the other" },
  };

  const QUESTIONS = [
    { q: { ar: "مَن أول من آمن من الرجال؟", en: "Who was the first man to believe?" },
      opts: [ { ar: "أبو بكر الصدّيق", en: "Abu Bakr as-Siddiq", ok: true }, { ar: "أبو جهل", en: "Abu Jahl" } ] },
    { q: { ar: "مَن لُقّب بالفاروق؟", en: "Who was titled 'al-Faruq'?" },
      opts: [ { ar: "عمر بن الخطاب", en: "Umar ibn al-Khattab", ok: true }, { ar: "عثمان بن عفان", en: "Uthman ibn Affan" } ] },
    { q: { ar: "مَن جهّز جيش العسرة بماله؟", en: "Who funded the Army of Hardship?" },
      opts: [ { ar: "عثمان بن عفان", en: "Uthman ibn Affan", ok: true }, { ar: "بلال بن رباح", en: "Bilal ibn Rabah" } ] },
    { q: { ar: "مَن كان مؤذّن النبي ﷺ؟", en: "Who was the Prophet's ﷺ mu'adhin?" },
      opts: [ { ar: "بلال بن رباح", en: "Bilal ibn Rabah", ok: true }, { ar: "خالد بن الوليد", en: "Khalid ibn al-Walid" } ] },
    { q: { ar: "مَن لُقّب بسيف الله المسلول؟", en: "Who was 'the Drawn Sword of Allah'?" },
      opts: [ { ar: "خالد بن الوليد", en: "Khalid ibn al-Walid", ok: true }, { ar: "أبو هريرة", en: "Abu Hurayrah" } ] },
    { q: { ar: "مَن أكثر الصحابة روايةً للحديث؟", en: "Which Companion narrated the most hadith?" },
      opts: [ { ar: "أبو هريرة", en: "Abu Hurayrah", ok: true }, { ar: "سلمان الفارسي", en: "Salman al-Farisi" } ] },
    { q: { ar: "مَن أشار بحفر الخندق؟", en: "Who suggested digging the trench?" },
      opts: [ { ar: "سلمان الفارسي", en: "Salman al-Farisi", ok: true }, { ar: "أنس بن مالك", en: "Anas ibn Malik" } ] },
    { q: { ar: "مَن كان حِبر الأمة وترجمان القرآن؟", en: "Who was the scholar of the Ummah, interpreter of the Quran?" },
      opts: [ { ar: "عبد الله بن عباس", en: "Abdullah ibn Abbas", ok: true }, { ar: "زيد بن ثابت", en: "Zayd ibn Thabit" } ] },
    { q: { ar: "مَن كتب الوحي وجمع القرآن؟", en: "Who wrote the revelation and compiled the Quran?" },
      opts: [ { ar: "زيد بن ثابت", en: "Zayd ibn Thabit", ok: true }, { ar: "عمّار بن ياسر", en: "Ammar ibn Yasir" } ] },
    { q: { ar: "مَن أول الشهداء في الإسلام؟", en: "Who was the first martyr in Islam?" },
      opts: [ { ar: "سميّة بنت خيّاط", en: "Sumayyah bint Khayyat", ok: true }, { ar: "أم سلمة", en: "Umm Salamah" } ] },
  ];

  const $ = (id) => document.getElementById(id);
  let round = 0, p1 = 0, p2 = 0, current = null, locked = true, order = [];

  function newRound() {
    if (round >= 8) return win();
    locked = false;
    current = order[round];
    const q = QUESTIONS[current];
    const L = Lang.current();
    /* نفس ترتيب الخيارات للاعبَين */
    const opts = q.opts.map((o, i) => ({ o, i })).sort(() => Math.random() - 0.5);
    ["1", "2"].forEach(p => {
      $(`p${p}-q`).textContent = q.q[L];
      $(`p${p}-opts`).innerHTML = opts.map(x =>
        `<button class="mj-opt" data-p="${p}" data-ok="${x.o.ok ? 1 : 0}">${x.o[L]}</button>`).join("");
    });
    $("mj-p1").classList.add("active"); $("mj-p2").classList.add("active");
    $("mj-center").innerHTML = `<span>${I18N.go[L]}</span>`;
    $("stat-round").textContent = `${round + 1}/8`;
    document.querySelectorAll(".mj-opt").forEach(b => b.addEventListener("click", () => answer(b)));
  }

  function answer(btn) {
    if (locked) return;
    const L = Lang.current();
    if (btn.dataset.ok === "1") {
      locked = true;
      btn.classList.add("good");
      const p = btn.dataset.p;
      if (p === "1") { p1++; $("p1-score").textContent = p1; $("mj-feedback").textContent = I18N.p1got[L]; }
      else { p2++; $("p2-score").textContent = p2; $("mj-feedback").textContent = I18N.p2got[L]; }
      AudioBus.chord([523, 659, 784], 0.2);
      Particles.fire(24);
      round++;
      setTimeout(() => { $("mj-feedback").textContent = ""; newRound(); }, 1400);
    } else {
      btn.classList.add("bad");
      btn.style.pointerEvents = "none";
      AudioBus.fail();
    }
  }

  function win() {
    const L = Lang.current();
    let title, sub;
    if (p1 > p2) { title = I18N.p1wins[L]; }
    else if (p2 > p1) { title = I18N.p2wins[L]; }
    else { title = I18N.draw[L]; }
    $("win-title").textContent = title;
    $("win-sub").textContent = L === "ar" ? `النتيجة — الأول: ${p1} · الثاني: ${p2}` : `Score — P1: ${p1} · P2: ${p2}`;
    Storage.set("anos_sahaba_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function start() {
    round = 0; p1 = 0; p2 = 0;
    $("p1-score").textContent = 0; $("p2-score").textContent = 0;
    order = QUESTIONS.map((_, i) => i).sort(() => Math.random() - 0.5).slice(0, 8);
    $("mj-start").style.display = "none";
    newRound();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { if (current != null && !locked) newRound(); });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", () => { Modal.close("win-modal"); start(); });
  $("mj-start").addEventListener("click", start);
  $("reset-btn").addEventListener("click", () => { Modal.close("win-modal"); $("mj-start").style.display = ""; $("mj-feedback").textContent = ""; round = 0; p1 = p2 = 0; $("p1-score").textContent = 0; $("p2-score").textContent = 0; $("p1-q").textContent = ""; $("p2-q").textContent = ""; $("p1-opts").innerHTML = ""; $("p2-opts").innerHTML = ""; $("stat-round").textContent = "0/8"; });
  AudioBus.bindButton($("mute-btn"));
})();
