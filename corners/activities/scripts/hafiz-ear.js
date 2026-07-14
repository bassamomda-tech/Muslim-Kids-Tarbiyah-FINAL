/* ============================================================
   69 · أذن الحافظ — وضعان: تدريب (سورة→نغمة) واختبار (نغمة→سورة)
   نغمات رمزية للّعب: كل سورة لها لحن قصير مميز
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "كنوز الوحي", en: "Treasures of Revelation" },
    crumbTitle:  { ar: "أذن الحافظ", en: "The Hafiz's Ear" },
    title:       { ar: "أذن الحافظ", en: "The Hafiz's Ear" },
    desc:        { ar: "للحافظ أذنٌ ذكية! أولاً تدرّب: انقر السورة لتسمع «نغمتها» المميزة. ثم اختبر أذنك: تُعزف نغمة، وعليك أن تعرف صاحبتها من بين السور!", en: "A hafiz has a sharp ear! First, train: tap a surah to hear its unique 'melody'. Then test your ear: a melody plays and you must recognize which surah it belongs to!" },
    playBtn:     { ar: "🔊 اعزف النغمة", en: "🔊 Play the melody" },
    replayBtn:   { ar: "🔊 أعد العزف", en: "🔊 Play again" },
    statRound:   { ar: "الاختبار", en: "Test" },
    statScore:   { ar: "إصابات", en: "Hits" },
    sideTitle:   { ar: "كيف يحفظ الحفّاظ؟", en: "How do the memorizers do it?" },
    sideQuote:   { ar: "«تعاهدوا هذا القرآن، فوالذي نفسي بيده لهو أشدّ تفلّتاً من الإبل في عُقُلها»", en: "\"Keep refreshing the Quran, for by the One in whose hand is my soul, it slips away faster than camels from their ropes\"" },
    sideSrc:     { ar: "متفق عليه", en: "Agreed upon" },
    tip:         { ar: "هذه «نغمات» رمزية للّعب فقط — في الواقع يميّز الحافظ السور بإيقاع كلماتها وفواصل آياتها. السماع المتكرر مفتاح الحفظ!", en: "These 'melodies' are just for play — in reality a hafiz recognizes surahs by the rhythm of their words and verse-endings. Repeated listening is the key to memorizing!" },
    winEyebrow:  { ar: "أذنٌ ذهبية", en: "A golden ear" },
    winTitle:    { ar: "ميّزتَ كل السور!", en: "You recognized every surah!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "اختبار جديد", en: "New test" },
    modeTrain:   { ar: "🎓 تدريب", en: "🎓 Train" },
    modeTest:    { ar: "🎯 اختبار", en: "🎯 Test" },
    trainMission:{ ar: "انقر أي سورة لتسمع نغمتها المميزة وتحفظها", en: "Tap any surah to hear and learn its unique melody" },
    testMission: { ar: "اعزف النغمة، ثم انقر السورة التي تظنّها صاحبتها", en: "Play the melody, then tap the surah you think it belongs to" },
    correct:     { ar: "أذنٌ حادّة! إصابة صحيحة ✓", en: "Sharp ear! Correct ✓" },
    wrong:       { ar: "ليست هي — أعد العزف وأنصت جيداً", en: "Not it — replay and listen closely" },
  };

  /* السور ونغماتها الرمزية */
  const SURAHS = [
    { ar: "الفاتحة", en: "Al-Fatiha", notes: [392, 440, 523, 440] },
    { ar: "الإخلاص", en: "Al-Ikhlas", notes: [523, 523, 392] },
    { ar: "الفلق", en: "Al-Falaq", notes: [440, 494, 587, 494] },
    { ar: "الناس", en: "An-Nas", notes: [587, 523, 440, 392] },
    { ar: "الكوثر", en: "Al-Kawthar", notes: [659, 587, 659] },
    { ar: "الفيل", en: "Al-Fil", notes: [330, 392, 330, 262] },
  ];
  const TEST_ROUNDS = 6;

  const $ = (id) => document.getElementById(id);
  let mode = "train", curTarget = null, round = 0, score = 0, answered = false;

  function playMelody(notes) {
    notes.forEach((f, i) => setTimeout(() => AudioBus.tone(f, 0.3, "sine", 0.11), i * 260));
  }

  function renderModes() {
    const L = Lang.current();
    $("hd-modes").innerHTML = `
      <button class="wq-btn ${mode === "train" ? "" : ""}" id="mode-train"
        style="flex:1; background:${mode === "train" ? "var(--sand-ink)" : "var(--bg-soft)"}; color:${mode === "train" ? "#fff" : "var(--muted)"}; font-size:15px; padding:12px;">
        ${I18N.modeTrain[L]}</button>
      <button class="wq-btn" id="mode-test"
        style="flex:1; background:${mode === "test" ? "var(--sand-ink)" : "var(--bg-soft)"}; color:${mode === "test" ? "#fff" : "var(--muted)"}; font-size:15px; padding:12px;">
        ${I18N.modeTest[L]}</button>`;
    $("mode-train").addEventListener("click", () => setMode("train"));
    $("mode-test").addEventListener("click", () => setMode("test"));
  }

  function renderSurahs() {
    const L = Lang.current();
    $("hd-surahs").innerHTML = SURAHS.map((s, i) => `
      <button class="hd-surah" data-i="${i}">
        ${s[L]}
        <small>${mode === "train" ? (L === "ar" ? "انقر للاستماع" : "tap to hear") : ""}</small>
      </button>`).join("");
    $("hd-surahs").querySelectorAll(".hd-surah").forEach(b => {
      b.addEventListener("click", () => pick(+b.dataset.i, b));
    });
  }

  function setMode(m) {
    mode = m;
    answered = false;
    const L = Lang.current();
    renderModes(); renderSurahs();
    if (m === "train") {
      $("hd-play").style.display = "none";
      $("hd-mission").innerHTML = "🎓 " + I18N.trainMission[L];
      $("hd-feedback").textContent = "";
      $("stat-round").textContent = "—";
    } else {
      round = 0; score = 0;
      $("stat-score").textContent = 0;
      $("hd-play").style.display = "";
      $("hd-mission").innerHTML = "🎯 " + I18N.testMission[L];
      newTest();
    }
  }

  function newTest() {
    answered = false;
    curTarget = Math.floor(Math.random() * SURAHS.length);
    $("stat-round").textContent = `${round + 1}/${TEST_ROUNDS}`;
    $("hd-feedback").textContent = "";
    $("hd-play").textContent = I18N.playBtn[Lang.current()];
    $("hd-surahs").querySelectorAll(".hd-surah").forEach(b => b.classList.remove("good", "bad", "lit"));
    /* اعزف تلقائياً بعد لحظة */
    setTimeout(() => playMelody(SURAHS[curTarget].notes), 400);
  }

  function pick(i, btn) {
    if (mode === "train") {
      btn.classList.add("lit");
      setTimeout(() => btn.classList.remove("lit"), 700);
      playMelody(SURAHS[i].notes);
      return;
    }
    /* اختبار */
    if (answered) return;
    const L = Lang.current();
    if (i === curTarget) {
      answered = true;
      score++; $("stat-score").textContent = score;
      btn.classList.add("good");
      AudioBus.success();
      Particles.fire(24, { originY: "45%" });
      $("hd-feedback").textContent = I18N.correct[L];
      round++;
      setTimeout(() => { if (round >= TEST_ROUNDS) win(); else newTest(); }, 1300);
    } else {
      btn.classList.add("bad");
      setTimeout(() => btn.classList.remove("bad"), 500);
      AudioBus.fail();
      $("hd-feedback").textContent = I18N.wrong[L];
    }
  }

  function win() {
    const L = Lang.current();
    $("win-sub").textContent = L === "ar"
      ? `${score} من ${TEST_ROUNDS} — أذنك تعرف السور!`
      : `${score} of ${TEST_ROUNDS} — your ear knows the surahs!`;
    Storage.set("anos_hafiz_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => setMode(mode));
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", () => { Modal.close("win-modal"); setMode("test"); });
  $("reset-btn").addEventListener("click", () => setMode("train"));
  $("hd-play").addEventListener("click", () => { if (curTarget != null) { playMelody(SURAHS[curTarget].notes); $("hd-play").textContent = I18N.replayBtn[Lang.current()]; } });
  AudioBus.bindButton($("mute-btn"));
  setMode("train");
})();
