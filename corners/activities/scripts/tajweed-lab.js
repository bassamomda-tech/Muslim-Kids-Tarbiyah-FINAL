/* ============================================================
   65 · مختبر التجويد — اسمع المدّ وخمّن مقداره (2/4/6 حركات)
   الموجة تُرسم بطول يتناسب مع مقدار المدّ، والنغمة تُمَدّ صوتياً
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "كنوز الوحي", en: "Treasures of Revelation" },
    crumbTitle:  { ar: "مختبر التجويد", en: "Tajweed Lab" },
    title:       { ar: "مختبر التجويد", en: "The Tajweed Sound Lab" },
    desc:        { ar: "المدّ هو إطالة الصوت بحرف العلّة. اسمع الكلمة، وشاهد الموجة تمتدّ، ثم خمّن مقدار المدّ: حركتان، أربع، أم ست؟ كن عالِم أصوات!", en: "Madd is stretching the sound of a vowel. Listen to the word, watch the wave stretch, then guess the madd length: 2, 4, or 6 counts? Be a sound scientist!" },
    playBtn:     { ar: "🔊 اسمع المدّ", en: "🔊 Hear the madd" },
    replayBtn:   { ar: "🔊 أعد السماع", en: "🔊 Listen again" },
    statRound:   { ar: "الكلمة", en: "Word" },
    statScore:   { ar: "إجابات صحيحة", en: "Correct" },
    sideTitle:   { ar: "أنواع المدّ", en: "Types of Madd" },
    sidePill:    { ar: "تجويد", en: "Tajweed" },
    tip:         { ar: "الحركة = مقدار زمني صغير (قبض الإصبع أو بسطه). المدّ الطبيعي حركتان، وبعض المدود تصل ست حركات — كلما طالت الموجة، طال المدّ!", en: "A 'count' is a small unit of time (like closing or opening a finger). Natural madd is 2 counts; some madds reach 6 — the longer the wave, the longer the madd!" },
    winEyebrow:  { ar: "عالِم التجويد", en: "Tajweed Scientist" },
    winTitle:    { ar: "أتقنتَ مقادير المدّ!", en: "You mastered the madd lengths!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "من جديد", en: "Again" },
    c2:          { ar: "حركتان", en: "2 counts" },
    c4:          { ar: "أربع حركات", en: "4 counts" },
    c6:          { ar: "ست حركات", en: "6 counts" },
    correct:     { ar: "أحسنت! مدٌّ صحيح ✓", en: "Correct madd! ✓" },
    wrong:       { ar: "ليس تماماً — أنصت لطول الموجة", en: "Not quite — listen to the wave's length" },
    listen:      { ar: "أنصت للمدّ ثم اختر مقداره", en: "Listen to the madd, then choose its length" },
  };

  const LEGEND = [
    { c: 2, ar: "المدّ الطبيعي (حركتان)", en: "Natural madd (2 counts)", ex: "قَالَ" },
    { c: 4, ar: "المدّ المتصل (أربع–خمس)", en: "Connected madd (4–5)", ex: "السَّمَاءِ" },
    { c: 6, ar: "المدّ اللازم (ست حركات)", en: "Obligatory madd (6 counts)", ex: "الضَّالِّينَ" },
  ];

  /* الكلمات: الحرف الممدود يُلوّن بـ .madd */
  const WORDS = [
    { html: 'ق<span class="madd">َا</span>لَ', counts: 2 },
    { html: 'الضّ<span class="madd">َا</span>لّينَ', counts: 6 },
    { html: 'السَّم<span class="madd">َا</span>ءِ', counts: 4 },
    { html: 'ن<span class="madd">ُو</span>حٌ', counts: 2 },
    { html: 'ج<span class="madd">َا</span>ءَ', counts: 4 },
    { html: 'الْح<span class="madd">َا</span>قّةُ', counts: 6 },
  ];

  const $ = (id) => document.getElementById(id);
  const cvs = $("tj-canvas"), c2d = cvs.getContext("2d");

  let round = 0, score = 0, answered = false, animRaf = null;

  function renderLegend() {
    const L = Lang.current();
    $("tj-legend").innerHTML = LEGEND.map(l => `
      <div class="dhikr-item">
        <span class="dhikr-swatch" style="background:var(--sand)"></span>
        <span class="dhikr-text" style="font-size:13px;">${L === "ar" ? l.ar : l.en}<br/><span style="font-weight:800; font-size:15px;">${l.ex}</span></span>
        <span class="dhikr-count" style="font-family:var(--font-en)">${l.c}</span>
      </div>`).join("");
  }

  function drawWave(progress, counts) {
    /* الموجة تمتد بمقدار counts؛ progress 0..1 لكم رُسم منها */
    c2d.clearRect(0, 0, 600, 90);
    const stretch = counts / 6; /* 2→0.33, 4→0.66, 6→1 */
    const usableW = 120 + stretch * 460;
    const cycles = 3;
    c2d.strokeStyle = "#7EE4D0"; c2d.lineWidth = 3; c2d.lineCap = "round";
    c2d.beginPath();
    const drawnW = usableW * progress;
    for (let x = 0; x <= drawnW; x += 3) {
      const damp = Math.sin((x / usableW) * Math.PI); /* مغلّف */
      const y = 45 - Math.sin((x / usableW) * Math.PI * 2 * cycles) * 28 * damp;
      x === 0 ? c2d.moveTo(x + 20, y) : c2d.lineTo(x + 20, y);
    }
    c2d.stroke();
    /* خط الأساس */
    c2d.strokeStyle = "rgba(255,255,255,0.15)"; c2d.lineWidth = 1;
    c2d.beginPath(); c2d.moveTo(0, 45); c2d.lineTo(600, 45); c2d.stroke();
  }

  function playMadd() {
    const counts = WORDS[round].counts;
    const dur = 0.3 + counts * 0.22; /* المدة تتناسب مع الحركات */
    AudioBus.tone(392, dur, "sine", 0.12);
    setTimeout(() => AudioBus.tone(330, 0.18, "sine", 0.1), dur * 1000);
    /* أنيميشن الموجة */
    cancelAnimationFrame(animRaf);
    const start = performance.now();
    (function frame(t) {
      const p = Math.min(1, (t - start) / (dur * 1000));
      drawWave(p, counts);
      if (p < 1) animRaf = requestAnimationFrame(frame);
    })(start);
  }

  function renderRound() {
    answered = false;
    const L = Lang.current();
    $("tj-word").innerHTML = WORDS[round].html;
    $("stat-round").textContent = `${round + 1}/${WORDS.length}`;
    $("tj-feedback").textContent = I18N.listen[L];
    $("tj-play").textContent = I18N.playBtn[L];
    drawWave(0, WORDS[round].counts);
    const opts = [2, 4, 6];
    $("tj-counts").innerHTML = opts.map(c => `
      <button class="tj-count-btn" data-c="${c}">
        ${c}<small>${I18N["c" + c][L]}</small>
      </button>`).join("");
    $("tj-counts").querySelectorAll(".tj-count-btn").forEach(b => {
      b.addEventListener("click", () => choose(+b.dataset.c, b));
    });
  }

  function choose(c, btn) {
    if (answered) return;
    const L = Lang.current();
    if (c === WORDS[round].counts) {
      answered = true;
      score++; $("stat-score").textContent = score;
      btn.classList.add("good");
      AudioBus.success();
      Particles.fire(24, { originY: "40%" });
      $("tj-feedback").textContent = I18N.correct[L];
      setTimeout(() => {
        round++;
        if (round >= WORDS.length) return win();
        renderRound();
      }, 1400);
    } else {
      btn.classList.add("bad");
      setTimeout(() => btn.classList.remove("bad"), 500);
      AudioBus.fail();
      $("tj-feedback").textContent = I18N.wrong[L];
    }
  }

  function win() {
    const L = Lang.current();
    $("win-sub").textContent = L === "ar"
      ? `أصبت ${score} من ${WORDS.length} — أذنك تُميّز المدود!`
      : `You got ${score} of ${WORDS.length} — your ear knows the madds!`;
    Storage.set("anos_tajweed_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    round = 0; score = 0;
    $("stat-score").textContent = 0;
    Modal.close("win-modal");
    renderLegend(); renderRound();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { renderLegend(); renderRound(); });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  $("tj-play").addEventListener("click", () => { playMadd(); $("tj-play").textContent = I18N.replayBtn[Lang.current()]; });
  AudioBus.bindButton($("mute-btn"));
  renderLegend(); renderRound();
})();
