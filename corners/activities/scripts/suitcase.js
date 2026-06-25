/* ============================================================
   SUITCASE — حقيبة المسافر
   جهِّز حقيبتك لرحلةِ العمرة: ضَع الأغراضَ الضروريّةَ واترُكِ ما لا يَلزَم.
   ============================================================ */

(function () {
  "use strict";

  /* الأغراض: emoji, الاسم, ضروري؟ */
  const ITEMS = [
    { e: "🕋", nm: "ملابس الإحرام", need: true },
    { e: "📖", nm: "مصحف صغير", need: true },
    { e: "🧴", nm: "صابون بلا عطر", need: true },
    { e: "🩴", nm: "نَعْل مريح", need: true },
    { e: "💧", nm: "زجاجة ماء", need: true },
    { e: "☂️", nm: "مظلّة للشمس", need: true },
    { e: "🤲", nm: "كتاب أدعية", need: true },
    { e: "💳", nm: "بطاقة المعرّف", need: true },
    { e: "🎮", nm: "جهاز ألعاب", need: false },
    { e: "🍭", nm: "كيس حلوى كبير", need: false },
    { e: "⚽", nm: "كرة قدم", need: false },
    { e: "🧸", nm: "دمية كبيرة", need: false },
  ];

  const STORAGE_KEY = "mk_suitcase_state_v1";
  const STORE = Storage.get(STORAGE_KEY, { best: null, plays: 0 });

  let packed = [];          // مؤشرات الأغراض المعبّأة
  let checked = false;
  const NEED_COUNT = ITEMS.filter(i => i.need).length;

  /* ---------- render ---------- */
  function render() {
    renderShelf();
    renderCase();
    renderCheck();
    updateHUD();
  }

  function renderShelf() {
    const shelf = document.getElementById("sc-shelf");
    shelf.innerHTML = "";
    ITEMS.forEach((it, i) => {
      const el = document.createElement("button");
      el.className = "sc-item" + (packed.includes(i) ? " packed" : "");
      el.innerHTML = `<span class="emoji">${it.e}</span><span class="nm">${it.nm}</span>`;
      el.addEventListener("click", () => pack(i));
      shelf.appendChild(el);
    });
  }

  function renderCase() {
    const box = document.getElementById("sc-case-items");
    box.innerHTML = "";
    packed.forEach(i => {
      const it = ITEMS[i];
      const chip = document.createElement("button");
      chip.className = "sc-chip";
      if (checked) chip.classList.add(it.need ? "right" : "wrong");
      chip.innerHTML = `<span>${it.e}</span><span>${it.nm}</span>` +
        (checked ? `<span>${it.need ? "✓" : "✕"}</span>` : `<span class="x">✕</span>`);
      if (!checked) chip.addEventListener("click", () => unpack(i));
      box.appendChild(chip);
    });
    document.getElementById("sc-count").textContent = packed.length;
  }

  function renderCheck() {
    const root = document.getElementById("sc-check");
    root.innerHTML = "";
    ITEMS.filter(i => i.need).forEach((it) => {
      const realIdx = ITEMS.indexOf(it);
      const done = packed.includes(realIdx);
      const row = document.createElement("div");
      row.className = "sc-check-row" + (done ? " done" : "");
      row.innerHTML = `<span class="box">${done ? "✓" : ""}</span><span>${it.e} ${it.nm}</span>`;
      root.appendChild(row);
    });
  }

  /* ---------- interaction ---------- */
  function pack(i) {
    if (checked || packed.includes(i)) return;
    packed.push(i);
    AudioBus.pop();
    render();
  }
  function unpack(i) {
    if (checked) return;
    packed = packed.filter(x => x !== i);
    AudioBus.tick(440);
    render();
  }

  /* ---------- travel / check ---------- */
  function travel() {
    if (checked) return;
    checked = true;
    document.getElementById("sc-case").classList.add("checked");

    const rightNeeds = packed.filter(i => ITEMS[i].need).length;
    const wrongPacked = packed.filter(i => !ITEMS[i].need).length;
    const missed = NEED_COUNT - rightNeeds;
    const correct = rightNeeds === NEED_COUNT && wrongPacked === 0;

    renderCase();

    const score = Math.max(0, rightNeeds - wrongPacked); // من NEED_COUNT
    STORE.plays++;
    if (STORE.best == null || score > STORE.best) STORE.best = score;
    Storage.set(STORAGE_KEY, STORE);
    updateHUD();

    if (correct) { AudioBus.success(); Particles.fire(170); }
    else AudioBus.fail();

    const stars = correct ? 3 : (score >= NEED_COUNT - 2 && wrongPacked <= 1 ? 2 : 1);
    document.getElementById("win-summary").innerHTML = `
      <div>عبّأتَ <strong>${rightNeeds}/${NEED_COUNT}</strong> من الضروريّات
      ${wrongPacked ? `، وأدخلتَ <strong>${wrongPacked}</strong> غرضاً لا يَلزَم` : ""}.</div>
      ${missed ? `<div style="margin-top:var(--s-2); color:var(--muted); font-size:13px;">نسيتَ ${missed} غرضاً ضروريّاً.</div>` : ""}
      <div style="margin-top:var(--s-3); font-size:22px; letter-spacing:4px;">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</div>
      <div style="margin-top:var(--s-3); padding:10px; background:var(--bg-soft); border-radius:8px; font-size:13px; text-align:right;">
        دعاءُ السفر: «سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ».
      </div>`;
    document.getElementById("win-title").textContent = correct ? "رحلةٌ مباركة!" : "راجِع حقيبتك";
    setTimeout(() => Modal.open("win-modal"), 500);
  }

  /* ---------- HUD ---------- */
  function updateHUD() {
    document.getElementById("s-packed").textContent = packed.length;
    document.getElementById("s-need").textContent = "/" + NEED_COUNT;
    const got = packed.filter(i => ITEMS[i].need).length;
    document.getElementById("s-needed").textContent = got;
    document.getElementById("best").textContent = STORE.best != null ? STORE.best : "—";
    document.getElementById("plays").textContent = STORE.plays;
  }

  function reset() {
    packed = []; checked = false;
    document.getElementById("sc-case").classList.remove("checked");
    render();
  }

  /* ---------- bind ---------- */
  document.getElementById("sc-go").addEventListener("click", travel);
  document.getElementById("sc-clear").addEventListener("click", reset);
  document.getElementById("win-replay").addEventListener("click", () => { Modal.close("win-modal"); setTimeout(reset, 300); });
  Modal.bindClose("win-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) { Storage.clear(STORAGE_KEY); location.reload(); }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  render();
})();
