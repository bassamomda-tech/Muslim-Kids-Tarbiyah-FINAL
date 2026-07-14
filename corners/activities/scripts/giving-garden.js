/* ============================================================
   89 · حديقة العطاء — اعتنِ بالنباتات بالأداة الصحيحة لتُزهر
   كل نبتة تطلب حاجة؛ أعطِها الأداة المطابقة 3 مرّات لتُزهر
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "صنّاع الغد", en: "Makers of Tomorrow" },
    crumbTitle:  { ar: "حديقة العطاء", en: "Garden of Giving" },
    title:       { ar: "حديقة العطاء", en: "The Garden of Giving" },
    desc:        { ar: "كل عملٍ صالحٍ زهرةٌ تنمو! اعتنِ بنباتاتك: كلٌّ يحتاج شيئاً (ماء، شمس، تقليم). اختر الأداة المناسبة لما يطلبه النبات لتُزهر حديقتك بالخير كلها.", en: "Every good deed is a flower that grows! Care for your plants: each needs something (water, sun, pruning). Pick the right tool for what the plant asks to make your whole garden of goodness bloom." },
    toolsLabel:  { ar: "اختر أداةً ثم انقر النبات المحتاج إليها", en: "Pick a tool, then tap the plant that needs it" },
    statBloomed: { ar: "أزهار متفتّحة", en: "Flowers bloomed" },
    statCare:    { ar: "أعمال عناية", en: "Care actions" },
    sideTitle:   { ar: "العطاء والزرع", en: "Giving and planting" },
    sideQuote:   { ar: "«ما مِن مسلمٍ يغرس غرساً فيأكل منه إنسانٌ أو طيرٌ إلا كان له به صدقة»", en: "\"No Muslim plants a tree from which a human or bird eats but it is a charity for him\"" },
    sideSrc:     { ar: "متفق عليه", en: "Agreed upon" },
    tip:         { ar: "انظر للرمز فوق كل نبتة لتعرف حاجتها: 💧 ماء، ☀️ شمس، ✂️ تقليم، 🐛 إزالة آفة. العناية المستمرة كالعمل الصالح — تنمو بالمداومة.", en: "Look at the icon above each plant to know its need: 💧 water, ☀️ sun, ✂️ pruning, 🐛 pest removal. Consistent care is like good deeds — it grows with perseverance." },
    winEyebrow:  { ar: "حديقةٌ مزهرة", en: "A blooming garden" },
    winTitle:    { ar: "أزهرت حديقة العطاء كلها!", en: "The whole garden bloomed!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "حديقة جديدة", en: "New garden" },
    pickTool:    { ar: "اختر أداةً أولاً", en: "Pick a tool first" },
    right:       { ar: "أحسنت! النبتة سعيدة 🌱", en: "Great! The plant is happy 🌱" },
    wrong:       { ar: "هذه ليست حاجتها — انظر رمزها", en: "That's not its need — check its icon" },
    bloomed:     { ar: "تفتّحت زهرة! 🌸", en: "A flower bloomed! 🌸" },
  };

  const TOOLS = [
    { id: "water", em: "💧", ar: "ماء", en: "Water" },
    { id: "sun", em: "☀️", ar: "شمس", en: "Sunlight" },
    { id: "prune", em: "✂️", ar: "تقليم", en: "Pruning" },
    { id: "pest", em: "🐛", ar: "إزالة آفة", en: "Pest removal" },
  ];
  const FLOWERS = ["🌷", "🌻", "🌼", "🌹", "🏵️"];

  const $ = (id) => document.getElementById(id);
  let plants = [], selectedTool = null, bloomed = 0, careCount = 0, winShown = false;

  function randomNeed() { return TOOLS[Math.floor(Math.random() * TOOLS.length)].id; }

  function initGarden() {
    bloomed = 0; careCount = 0; selectedTool = null; winShown = false;
    plants = FLOWERS.map((f, i) => ({ flower: f, stage: 0, need: randomNeed(), x: 8 + i * 19 }));
    $("stat-bloomed").textContent = `0/${FLOWERS.length}`;
    $("stat-care").textContent = 0;
    $("gv-feedback").textContent = "";
    renderGarden(); renderTools();
  }

  function needEmoji(id) { return TOOLS.find(t => t.id === id).em; }

  function renderGarden() {
    $("gv-garden").innerHTML = plants.map((p, i) => `
      <div class="gv-plant" data-i="${i}" data-stage="${p.stage}" style="left:${p.x}%;">
        <span class="need">${p.stage >= 3 ? "" : needEmoji(p.need)}</span>
        <span class="bloom">${p.stage >= 3 ? p.flower : p.stage >= 1 ? "🌿" : "🌱"}</span>
      </div>`).join("") + `<div style="position:absolute; bottom:0; left:0; right:0; height:24px; background:var(--berry-ink); opacity:0.4;"></div>`;
    $("gv-garden").querySelectorAll(".gv-plant").forEach(el => el.addEventListener("click", () => care(+el.dataset.i)));
  }

  function renderTools() {
    const L = Lang.current();
    $("gv-tools").innerHTML = TOOLS.map(t => `
      <button class="gv-tool ${selectedTool === t.id ? "selected" : ""}" data-id="${t.id}">
        <span style="font-size:20px;">${t.em}</span> ${t[L]}
      </button>`).join("");
    $("gv-tools").querySelectorAll(".gv-tool").forEach(b => b.addEventListener("click", () => {
      selectedTool = selectedTool === b.dataset.id ? null : b.dataset.id;
      AudioBus.tick(540);
      renderTools();
    }));
  }

  function care(i) {
    const L = Lang.current();
    const p = plants[i];
    if (p.stage >= 3) return;
    if (!selectedTool) { $("gv-feedback").textContent = I18N.pickTool[L]; return; }
    if (selectedTool === p.need) {
      p.stage++;
      careCount++; $("stat-care").textContent = careCount;
      AudioBus.tone(400 + p.stage * 80, 0.15, "sine", 0.08);
      Particles.fire(12, { originX: p.x + "%", originY: "55%" });
      if (p.stage >= 3) {
        bloomed++; $("stat-bloomed").textContent = `${bloomed}/${FLOWERS.length}`;
        AudioBus.chord([523, 659, 784], 0.2);
        $("gv-feedback").textContent = I18N.bloomed[L];
      } else {
        p.need = randomNeed(); /* حاجة جديدة */
        $("gv-feedback").textContent = I18N.right[L];
      }
      renderGarden();
      if (bloomed >= FLOWERS.length && !winShown) { winShown = true; setTimeout(win, 700); }
    } else {
      AudioBus.fail();
      $("gv-feedback").textContent = I18N.wrong[L];
    }
  }

  function win() {
    const L = Lang.current();
    $("win-sub").textContent = L === "ar" ? `خمس أزهار تفتّحت بعنايتك ومثابرتك!` : `Five flowers bloomed through your care and perseverance!`;
    Storage.set("anos_garden2_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { renderGarden(); renderTools(); });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", () => { Modal.close("win-modal"); initGarden(); });
  $("reset-btn").addEventListener("click", initGarden);
  AudioBus.bindButton($("mute-btn"));
  initGarden();
})();
