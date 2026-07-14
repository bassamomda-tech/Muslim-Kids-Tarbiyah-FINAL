/* ============================================================
   85 · استوديو النشيد — مؤلّف إيقاعي (step sequencer)
   6 نغمات × 8 نبضات، تشغيل متكرّر + ألحان جاهزة
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "صنّاع الغد", en: "Makers of Tomorrow" },
    crumbTitle:  { ar: "استوديو النشيد", en: "Nasheed Studio" },
    title:       { ar: "استوديو النشيد", en: "The Nasheed Studio" },
    desc:        { ar: "لحّن نشيدك الإسلامي الخاص! انقر الخلايا لتضيء النغمات، ثم اضغط «شغّل» لتسمع لحنك. جرّب الألحان الجاهزة أو أبدع لحناً من عندك بالدفّ والنغمات.", en: "Compose your own nasheed! Tap the cells to light up notes, then press \"Play\" to hear your melody. Try the presets or create your own tune with drum and notes." },
    playBtn:     { ar: "▶ شغّل اللحن", en: "▶ Play melody" },
    stopBtn:     { ar: "⏹ أوقف", en: "⏹ Stop" },
    presetsLabel:{ ar: "ألحان جاهزة:", en: "Presets:" },
    preset1:     { ar: "طلع البدر", en: "Tala' al-Badr" },
    preset2:     { ar: "لحن بسيط", en: "Simple tune" },
    hint:        { ar: "💡 انقر الخلايا لتؤلّف — كل صفٍّ نغمة، وكل عمودٍ نبضة", en: "💡 Tap cells to compose — each row a note, each column a beat" },
    statNotes:   { ar: "نغمات اخترتها", en: "Notes chosen" },
    statPlays:   { ar: "مرّات التشغيل", en: "Plays" },
    sideTitle:   { ar: "الأناشيد الإسلامية", en: "Islamic nasheeds" },
    sideQuote:   { ar: "أنشد الأنصار للنبي ﷺ عند قدومه المدينة: «طلع البدر علينا من ثنيّات الوداع».", en: "The Ansar sang to the Prophet ﷺ on his arrival in Madinah: \"The full moon rose upon us from the valley of Wada'.\"" },
    sideSrc:     { ar: "السيرة النبوية", en: "The Prophetic biography" },
    tip:         { ar: "الأناشيد الهادفة تُدخل السرور وتُعلّم القيم. حاول أن تصنع لحناً فرِحاً بنغماتٍ متدرّجة، وأضف ضربات الدفّ في الصف الأخير.", en: "Purposeful nasheeds bring joy and teach values. Try making a happy tune with rising notes, and add drum beats in the last row." },
  };

  /* النغمات (سلّم بسيط) + الدفّ */
  const NOTES = [
    { name: { ar: "دفّ", en: "Duff" }, freq: 0, drum: true },
    { name: { ar: "دو عالية", en: "High Do" }, freq: 523 },
    { name: { ar: "لا", en: "La" }, freq: 440 },
    { name: { ar: "صول", en: "Sol" }, freq: 392 },
    { name: { ar: "مي", en: "Mi" }, freq: 330 },
    { name: { ar: "دو", en: "Do" }, freq: 262 },
  ];
  const STEPS = 8;

  /* الألحان الجاهزة: [row,col] */
  const PRESETS = {
    tala: [[5,0],[4,1],[3,2],[4,3],[5,4],[3,5],[3,6],[5,7],[0,0],[0,2],[0,4],[0,6]],
    simple: [[5,0],[5,1],[3,2],[3,3],[2,4],[2,5],[3,6],[0,1],[0,3],[0,5],[0,7]],
  };

  const $ = (id) => document.getElementById(id);
  let grid = NOTES.map(() => Array(STEPS).fill(false));
  let playing = false, playCol = 0, playTimer = null, plays = 0;

  function build() {
    const L = Lang.current();
    $("ns-grid").innerHTML = NOTES.map((n, r) => `
      <div class="ns-row">
        <span class="note-name">${n.drum ? "🥁 " : ""}${n.name[L]}</span>
        <div class="ns-cells">
          ${Array.from({ length: STEPS }, (_, c) => `<div class="ns-cell ${grid[r][c] ? "on" : ""}" data-r="${r}" data-c="${c}"></div>`).join("")}
        </div>
      </div>`).join("");
    $("ns-grid").querySelectorAll(".ns-cell").forEach(cell => {
      cell.addEventListener("click", () => {
        const r = +cell.dataset.r, c = +cell.dataset.c;
        grid[r][c] = !grid[r][c];
        cell.classList.toggle("on");
        if (grid[r][c]) { NOTES[r].drum ? AudioBus.tone(90, 0.12, "sine", 0.12) : AudioBus.tone(NOTES[r].freq, 0.2, "sine", 0.1); }
        updateCount();
      });
    });
  }

  function updateCount() {
    let n = 0; grid.forEach(row => row.forEach(v => { if (v) n++; }));
    $("stat-notes").textContent = n;
  }

  function play() {
    if (playing) { stop(); return; }
    playing = true; playCol = 0;
    $("ns-play").textContent = I18N.stopBtn[Lang.current()];
    plays++; $("stat-plays").textContent = plays;
    step();
  }

  function step() {
    if (!playing) return;
    /* أزل التمييز السابق */
    $("ns-grid").querySelectorAll(".ns-cell.playing").forEach(c => c.classList.remove("playing"));
    /* شغّل العمود الحالي */
    NOTES.forEach((n, r) => {
      if (grid[r][playCol]) {
        if (n.drum) AudioBus.tone(90, 0.14, "sine", 0.14);
        else AudioBus.tone(n.freq, 0.22, "triangle", 0.09);
      }
      const cell = $("ns-grid").querySelector(`[data-r="${r}"][data-c="${playCol}"]`);
      if (cell) cell.classList.add("playing");
    });
    playCol = (playCol + 1) % STEPS;
    playTimer = setTimeout(step, 260);
  }

  function stop() {
    playing = false;
    clearTimeout(playTimer);
    $("ns-grid").querySelectorAll(".ns-cell.playing").forEach(c => c.classList.remove("playing"));
    $("ns-play").textContent = I18N.playBtn[Lang.current()];
  }

  function loadPreset(name) {
    grid = NOTES.map(() => Array(STEPS).fill(false));
    PRESETS[name].forEach(([r, c]) => { grid[r][c] = true; });
    build(); updateCount();
    AudioBus.pop();
    if (!playing) play();
  }

  function reset() {
    stop();
    grid = NOTES.map(() => Array(STEPS).fill(false));
    build(); updateCount();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", build);
  $("ns-play").addEventListener("click", play);
  $("reset-btn").addEventListener("click", reset);
  document.querySelectorAll(".ns-preset").forEach(b => b.addEventListener("click", () => loadPreset(b.dataset.preset)));
  AudioBus.bindButton($("mute-btn"));
  build(); updateCount();
})();
