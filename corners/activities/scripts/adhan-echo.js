/* ============================================================
   56 · صدى الأذان — استمع وردّد (Simon-style) بترتيب الأذان
   كل عبارة لها نغمة مميزة؛ الجولة k تعرض أول k+1 عبارات
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "رحلة الإيمان", en: "Journey of Faith" },
    crumbTitle:  { ar: "صدى الأذان", en: "Echo of the Adhan" },
    title:       { ar: "صدى الأذان", en: "Echo of the Adhan" },
    desc:        { ar: "أنصت للنغمات وهي تضيء عبارات الأذان بالترتيب، ثم ردّدها أنت بالنقر على العبارات بنفس الترتيب. كل جولة تزداد عبارة — حتى تحفظ الأذان كاملاً!", en: "Listen as the tones light up the adhan phrases in order, then echo them by tapping the phrases in the same order. Each round adds one phrase — until you know the whole adhan!" },
    playBtn:     { ar: "🔊 أسمعني الجولة", en: "🔊 Play the round" },
    replayBtn:   { ar: "🔊 أعد السماع", en: "🔊 Listen again" },
    statRound:   { ar: "الجولة", en: "Round" },
    statStreak:  { ar: "إجابات صحيحة", en: "Correct echoes" },
    sideTitle:   { ar: "فضل الترديد", en: "The reward of echoing" },
    sideQuote:   { ar: "«إذا سمعتم المؤذن فقولوا مثل ما يقول»", en: "\"When you hear the mu'adhin, say as he says\"" },
    sideSrc:     { ar: "رواه مسلم", en: "Narrated by Muslim" },
    tip:         { ar: "من السنة أن نردّد خلف المؤذن، إلا عند «حيّ على الصلاة» و«حيّ على الفلاح» فنقول: «لا حول ولا قوة إلا بالله».", en: "It is Sunnah to repeat after the mu'adhin — except at \"Hayya 'ala-s-salah\" and \"Hayya 'ala-l-falah\", where we say: \"La hawla wa la quwwata illa billah\"." },
    winEyebrow:  { ar: "مؤذّن المستقبل", en: "Future Mu'adhin" },
    winTitle:    { ar: "حفظتَ ترتيب الأذان كاملاً!", en: "You know the whole adhan order!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "من جديد", en: "Again" },
    listen:      { ar: "أنصت جيداً...", en: "Listen carefully..." },
    yourTurn:    { ar: "دورك! ردّد بنفس الترتيب", en: "Your turn! Echo in the same order" },
    wrong:       { ar: "ليس هذا الترتيب — أنصت مرة أخرى", en: "Not that order — listen again" },
    good:        { ar: "أحسنت! جولة أطول قادمة...", en: "Well done! A longer round is coming..." },
  };

  /* عبارات الأذان بالترتيب + نغمة مميزة لكل عبارة */
  const PHRASES = [
    { ar: "اللهُ أكبر، اللهُ أكبر",              en: "Allahu Akbar, Allahu Akbar",            notes: [392, 523] },
    { ar: "أشهد أن لا إله إلا الله",             en: "Ashhadu an la ilaha illa-Allah",        notes: [440, 494, 440] },
    { ar: "أشهد أنّ محمداً رسول الله",           en: "Ashhadu anna Muhammadan rasulu-Allah",  notes: [494, 554, 494] },
    { ar: "حيّ على الصلاة",                      en: "Hayya 'ala-s-salah",                    notes: [523, 659] },
    { ar: "حيّ على الفلاح",                      en: "Hayya 'ala-l-falah",                    notes: [587, 740] },
    { ar: "اللهُ أكبر، اللهُ أكبر",              en: "Allahu Akbar, Allahu Akbar",            notes: [659, 523] },
    { ar: "لا إله إلا الله",                     en: "La ilaha illa-Allah",                   notes: [523, 440, 392] },
  ];
  /* الجولات: عدد العبارات المعروضة (بترتيب الأذان) */
  const ROUNDS = [2, 3, 4, 5, 6, 7];

  const $ = (id) => document.getElementById(id);
  let round = 0, expecting = 0, playing = false, accepting = false, good = 0;

  function phraseCards() {
    const L = Lang.current();
    const count = ROUNDS[round];
    /* نعرض العبارات مخلوطة حتى لا يكون الترتيب ظاهراً */
    const idxs = Array.from({ length: count }, (_, i) => i).sort(() => Math.random() - 0.5);
    $("ae-phrases").innerHTML = idxs.map(i => `
      <button class="ae-phrase" data-i="${i}">
        <span class="wave-ic">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 12h2M18 12h2M8 12c1-6 2-6 3 0s2 6 3 0"/></svg>
        </span>
        <span>${PHRASES[i].ar}<small>${PHRASES[i].en}</small></span>
      </button>`).join("");
    $("ae-phrases").querySelectorAll(".ae-phrase").forEach(b => {
      b.addEventListener("click", () => tap(b));
    });
  }

  function renderPips() {
    $("ae-pips").innerHTML = ROUNDS.map((_, i) =>
      `<span class="pip ${i < round ? "on" : ""}"></span>`).join("");
    $("stat-round").textContent = `${round + 1}/${ROUNDS.length}`;
    $("stat-good").textContent = good;
  }

  function playNotes(notes, then) {
    notes.forEach((f, i) => setTimeout(() => AudioBus.tone(f, 0.28, "sine", 0.1), i * 240));
    setTimeout(then, notes.length * 240 + 160);
  }

  function playSequence() {
    if (playing) return;
    playing = true; accepting = false; expecting = 0;
    $("ae-feedback").textContent = I18N.listen[Lang.current()];
    const count = ROUNDS[round];
    let i = 0;
    (function step() {
      if (i >= count) {
        playing = false; accepting = true;
        $("ae-feedback").textContent = I18N.yourTurn[Lang.current()];
        return;
      }
      const card = $("ae-phrases").querySelector(`[data-i="${i}"]`);
      if (card) card.classList.add("lit");
      playNotes(PHRASES[i].notes, () => {
        if (card) card.classList.remove("lit");
        i++;
        setTimeout(step, 260);
      });
    })();
  }

  function tap(btn) {
    if (!accepting || playing) return;
    const i = +btn.dataset.i;
    if (i === expecting) {
      playNotes(PHRASES[i].notes, () => {});
      btn.classList.add("good");
      setTimeout(() => btn.classList.remove("good"), 500);
      expecting++;
      good++;
      $("stat-good").textContent = good;
      if (expecting >= ROUNDS[round]) {
        accepting = false;
        $("ae-feedback").textContent = I18N.good[Lang.current()];
        AudioBus.success();
        Particles.fire(30, { originY: "40%" });
        setTimeout(() => {
          round++;
          if (round >= ROUNDS.length) return win();
          renderRound();
        }, 1400);
      }
    } else {
      btn.classList.add("bad");
      setTimeout(() => btn.classList.remove("bad"), 500);
      AudioBus.fail();
      accepting = false;
      $("ae-feedback").textContent = I18N.wrong[Lang.current()];
      $("ae-play").textContent = I18N.replayBtn[Lang.current()];
    }
  }

  function renderRound() {
    phraseCards(); renderPips();
    $("ae-feedback").textContent = "";
    $("ae-play").textContent = I18N.playBtn[Lang.current()];
  }

  function win() {
    renderPips();
    const L = Lang.current();
    $("win-sub").textContent = L === "ar"
      ? "سبع عبارات بترتيبها الصحيح — الله أكبر!"
      : "Seven phrases in perfect order — Allahu Akbar!";
    Storage.set("anos_adhan_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    round = 0; good = 0; expecting = 0; playing = false; accepting = false;
    Modal.close("win-modal");
    renderRound();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", renderRound);
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  $("ae-play").addEventListener("click", playSequence);
  AudioBus.bindButton($("mute-btn"));
  renderRound();
})();
