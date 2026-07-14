/* ============================================================
   100 · نسيج الأمة الواحد — لاعبان يتعاونان لملء نسيج مشترك
   نقشٌ هدفٌ محدّد؛ كل لاعبٍ يملأ خلايا لونه بالتناوب حتى يكتمل
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "أمتي الواحدة", en: "My One Ummah" },
    crumbTitle:  { ar: "نسيج الأمة الواحد", en: "The One Ummah Weave" },
    title:       { ar: "نسيج الأمة الواحد", en: "The One Ummah Weave" },
    desc:        { ar: "لاعبان يتعاونان لنسج سجّادةٍ جميلة ترمز لوحدة الأمة! بالتناوب، انسجا خيوطكما لتكوين النقش الكامل معاً. الأمة نسيجٌ واحد، كل خيطٍ فيه مهمّ.", en: "Two players cooperate to weave a beautiful carpet symbolizing the Ummah's unity! Taking turns, weave your threads to form the full pattern together. The Ummah is one fabric — every thread matters." },
    statFilled:  { ar: "خيوط منسوجة", en: "Threads woven" },
    statTogether:{ ar: "أُنجز بالتعاون", en: "Made together" },
    sideTitle:   { ar: "وحدة الأمة", en: "The Ummah's unity" },
    sideQuote:   { ar: "«المؤمن للمؤمن كالبنيان يشدّ بعضه بعضاً»", en: "\"A believer to another believer is like a building whose parts support each other\"" },
    sideSrc:     { ar: "متفق عليه", en: "Agreed upon" },
    tip:         { ar: "بالتناوب ينقر كل لاعبٍ خيطاً فارغاً بلونه. أكملا النسيج معاً لتظهر السجّادة الكاملة — رمز أنّ الأمة لا تكتمل إلا بتعاون الجميع.", en: "Taking turns, each player taps an empty thread in their color. Complete the weave together to reveal the full carpet — a symbol that the Ummah is only complete through everyone's cooperation." },
    winEyebrow:  { ar: "اكتمل النسيج", en: "The weave is complete" },
    winTitle:    { ar: "نسجتما سجّادة الأمة الواحدة!", en: "You wove the One Ummah carpet!" },
    winSub:      { ar: "كل خيطٍ منكما جعل النقش أجمل — هكذا الأمة بتعاون أبنائها", en: "Every thread you added made the pattern more beautiful — so is the Ummah through its people's cooperation" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "نسيج جديد", en: "New weave" },
    turnP1:      { ar: "🟢 دور اللاعب الأول — انسج خيطاً", en: "🟢 Player 1's turn — weave a thread" },
    turnP2:      { ar: "🔴 دور اللاعب الثاني — انسج خيطاً", en: "🔴 Player 2's turn — weave a thread" },
  };

  const N = 6;
  const $ = (id) => document.getElementById(id);
  /* النقش الهدف: 1 = للاعب الأول (أخضر)، 2 = للاعب الثاني (أحمر) — نقشٌ متناظر */
  const PATTERN = [
    1,1,2,2,1,1,
    1,2,2,2,2,1,
    2,2,1,1,2,2,
    2,2,1,1,2,2,
    1,2,2,2,2,1,
    1,1,2,2,1,1,
  ];
  const COLORS = { 1: "#5A7A2E", 2: "#B04A32" };

  let cells, turn, filled;

  function init() {
    cells = Array(N * N).fill(0);
    turn = 1; filled = 0;
    $("stat-filled").textContent = `0/${N * N}`;
    renderTurn(); renderLoom();
    $("wv-feedback").textContent = "";
  }

  function renderTurn() {
    const L = Lang.current();
    const el = $("wv-turn");
    el.className = "wv-turn " + (turn === 1 ? "p1" : "p2");
    el.textContent = turn === 1 ? I18N.turnP1[L] : I18N.turnP2[L];
  }

  function renderLoom() {
    $("wv-loom").style.gridTemplateColumns = `repeat(${N}, 1fr)`;
    $("wv-loom").innerHTML = cells.map((v, i) => {
      const bg = v ? COLORS[v] : "#EDE6D4";
      /* لمّح للنقش: الخلايا التي تخصّ دور اللاعب الحالي تُبرز خفيفاً */
      const isTurnCell = !v && PATTERN[i] === turn;
      return `<div class="wv-thread" data-i="${i}" style="background:${bg}; ${isTurnCell ? "box-shadow: inset 0 0 0 2px " + COLORS[turn] + "44;" : ""}"></div>`;
    }).join("");
    $("wv-loom").querySelectorAll(".wv-thread").forEach(t => t.addEventListener("click", () => weave(+t.dataset.i)));
  }

  function weave(i) {
    const L = Lang.current();
    if (cells[i]) return;
    if (PATTERN[i] !== turn) {
      /* هذه الخلية ليست من لون هذا اللاعب في النقش */
      AudioBus.fail();
      $("wv-feedback").textContent = L === "ar" ? "هذا الخيط لشريكك — انسج خيطاً بلونك أنت" : "That thread is your partner's — weave one in your color";
      return;
    }
    cells[i] = turn;
    filled++;
    $("stat-filled").textContent = `${filled}/${N * N}`;
    AudioBus.tone(turn === 1 ? 392 : 330, 0.14, "triangle", 0.07);
    Particles.fire(6);
    $("wv-feedback").textContent = "";
    if (filled >= N * N) return win();
    turn = turn === 1 ? 2 : 1;
    renderTurn(); renderLoom();
  }

  function win() {
    renderLoom();
    $("stat-together").textContent = "✓";
    Storage.set("anos_weave_done", true);
    AudioBus.success(); Particles.fire(140);
    Modal.open("win-modal");
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { renderTurn(); renderLoom(); });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", () => { Modal.close("win-modal"); init(); });
  $("reset-btn").addEventListener("click", () => { Modal.close("win-modal"); init(); });
  AudioBus.bindButton($("mute-btn"));
  init();
})();
