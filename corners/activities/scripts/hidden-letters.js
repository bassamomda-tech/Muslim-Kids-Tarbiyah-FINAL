/* ============================================================
   HIDDEN LETTERS — الحروف المختبئة
   لكل جولة: حرفٌ هدف + N نُسخ منه مَخفيَّة وسط حروفٍ مُشتِّتة.
   ============================================================ */

(function () {
  "use strict";

  const ROUNDS = [
    { target: "ج", name: "حَرف الجيم",  count: 5, distractors: ["ح","خ","ر","ز","ن","ث"] },
    { target: "ع", name: "حَرف العَين", count: 5, distractors: ["غ","ص","ض","ف","ق","م"] },
    { target: "ب", name: "حَرف الباء",  count: 5, distractors: ["ت","ث","ن","ي","ل","ك"] },
    { target: "م", name: "حَرف الميم",  count: 6, distractors: ["ن","ه","ل","و","د","ر"] },
    { target: "س", name: "حَرف السين",  count: 6, distractors: ["ش","ص","ض","ث","ك","ت"] },
    { target: "ل", name: "حَرف اللام",  count: 6, distractors: ["ك","ا","ي","ن","ر","ز"] },
  ];

  const STORAGE_KEY = "mk_hidden_state_v1";
  const STORE = Storage.get(STORAGE_KEY, { best: 0, plays: 0 });

  const stage = document.getElementById("stage");

  let roundIdx = 0;
  let foundThisRound = 0;
  let missThisRound = 0;
  let totalStars = 0;
  let revealUsed = false;

  // grid cells to avoid overlap
  const COLS = 8, ROWS = 6;

  function buildRound() {
    foundThisRound = 0;
    missThisRound = 0;
    revealUsed = false;

    const r = ROUNDS[roundIdx];
    document.getElementById("target-glyph").textContent = r.target;
    document.getElementById("target-name").textContent = r.name;
    document.getElementById("target-count").textContent = toArNum(r.count);

    // clear stage items, keep toast
    stage.querySelectorAll(".hl-item").forEach(el => el.remove());

    // build progress dots
    const dots = document.getElementById("target-dots");
    dots.innerHTML = "";
    for (let i = 0; i < r.count; i++) {
      const d = document.createElement("div");
      d.className = "dot";
      dots.appendChild(d);
    }

    // build a list of cells (grid)
    const cells = [];
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) cells.push({ row, col });
    }
    shuffle(cells);

    // place N targets first
    const targetCells = cells.splice(0, r.count);
    // place ~25 distractors
    const distCount = Math.min(30 - r.count, cells.length);
    const distractCells = cells.splice(0, distCount);

    targetCells.forEach(c => placeLetter(r.target, c, true));
    distractCells.forEach(c => placeLetter(pick(r.distractors), c, false));

    updateUI();
    renderRoundsList();
  }

  function placeLetter(ch, cell, isTarget) {
    const el = document.createElement("div");
    el.className = "hl-item";
    el.textContent = ch;
    el.dataset.target = isTarget ? "1" : "0";

    // position inside its cell with some jitter
    const stageRect = { w: 100, h: 100 }; // percentages
    const colW = stageRect.w / COLS;
    const rowH = stageRect.h / ROWS;
    const x = (cell.col + 0.5) * colW + (Math.random() - 0.5) * colW * 0.5;
    const y = (cell.row + 0.5) * rowH + (Math.random() - 0.5) * rowH * 0.5;

    el.style.left = x + "%";
    el.style.top = y + "%";
    el.style.transform = `translate(-50%, -50%) rotate(var(--rot))`;
    const rot = (Math.random() - 0.5) * 30;
    el.style.setProperty("--rot", rot + "deg");
    el.style.fontSize = (32 + Math.random() * 28) + "px";
    el.style.opacity = 0.32 + Math.random() * 0.25;

    el.addEventListener("click", () => onClickItem(el, isTarget));
    stage.appendChild(el);
  }

  function onClickItem(el, isTarget) {
    if (el.classList.contains("found")) return;
    if (isTarget) {
      el.classList.add("found");
      el.style.opacity = "1";
      foundThisRound++;
      // mark progress dot
      const dots = document.querySelectorAll("#target-dots .dot");
      if (dots[foundThisRound - 1]) dots[foundThisRound - 1].classList.add("found");

      AudioBus.pop();
      Particles.fire(15, {
        colors: ["#CDEBD7","#E0D5F2"],
        originX: el.style.left, originY: el.style.top,
      });

      const r = ROUNDS[roundIdx];
      if (foundThisRound >= r.count) {
        onRoundDone();
      }
      updateUI();
    } else {
      el.classList.add("wrong-flash");
      setTimeout(() => el.classList.remove("wrong-flash"), 500);
      AudioBus.fail();
      missThisRound++;
      toast(`هذا ليس حرف «${ROUNDS[roundIdx].target}» — انظُر مَرَّةً أخرى`);
      updateUI();
    }
  }

  function onRoundDone() {
    const r = ROUNDS[roundIdx];
    // stars: based on misses + reveals
    let s = 3;
    if (missThisRound >= 1) s = 2;
    if (missThisRound >= 4) s = 1;
    if (revealUsed) s = Math.max(1, s - 1);
    r._done = true;
    r._stars = s;
    totalStars += s;

    AudioBus.success();
    Particles.fire(80, { colors: ["#E0D5F2","#CDEBD7","#FFE9A8"] });

    setTimeout(() => {
      if (roundIdx + 1 < ROUNDS.length) {
        roundIdx++;
        buildRound();
      } else {
        finishGame();
      }
    }, 1100);
  }

  function reveal() {
    if (revealUsed) return;
    const unfound = Array.from(stage.querySelectorAll('.hl-item[data-target="1"]'))
      .filter(el => !el.classList.contains("found"));
    if (!unfound.length) return;
    const el = unfound[0];
    el.style.opacity = "1";
    el.style.color = "var(--lavender-ink)";
    el.style.textShadow = "0 0 16px rgba(90, 63, 148, 0.5)";
    el.animate(
      [{ transform: el.style.transform + " scale(1.3)" }, { transform: el.style.transform + " scale(1)" }],
      { duration: 400, easing: "ease-out" }
    );
    revealUsed = true;
    document.getElementById("btn-reveal").disabled = true;
    document.getElementById("btn-reveal").style.opacity = "0.5";
    toast("نُسخةٌ مُضاءَة — استمرّ في البحث");
    AudioBus.tick(540);
  }

  function shuffleStage() {
    const items = Array.from(stage.querySelectorAll(".hl-item"));
    const cells = [];
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) cells.push({ row, col });
    }
    shuffle(cells);
    const colW = 100 / COLS, rowH = 100 / ROWS;
    items.forEach((el, i) => {
      const c = cells[i % cells.length];
      const x = (c.col + 0.5) * colW + (Math.random() - 0.5) * colW * 0.5;
      const y = (c.row + 0.5) * rowH + (Math.random() - 0.5) * rowH * 0.5;
      el.style.left = x + "%";
      el.style.top = y + "%";
    });
    AudioBus.tick(620);
  }

  function skip() {
    if (roundIdx + 1 < ROUNDS.length) {
      roundIdx++; buildRound();
    } else {
      finishGame();
    }
  }

  function toast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._h);
    t._h = setTimeout(() => t.classList.remove("show"), 1600);
  }

  function updateUI() {
    document.getElementById("h-round").textContent = roundIdx + 1;
    document.getElementById("h-found").textContent = foundThisRound;
    document.getElementById("h-miss").textContent = missThisRound;
    document.getElementById("h-stars").textContent = totalStars;
    document.getElementById("rounds-pill").textContent =
      `${ROUNDS.filter(r => r._done).length}/${ROUNDS.length}`;
    document.getElementById("best").textContent = STORE.best > 0 ? `${STORE.best} ⭐` : "—";
    document.getElementById("plays").textContent = STORE.plays;
  }

  function renderRoundsList() {
    const list = document.getElementById("rounds-list");
    list.innerHTML = "";
    ROUNDS.forEach((r, i) => {
      const el = document.createElement("div");
      const cls = r._done ? "done" : (i === roundIdx ? "current" : "");
      el.className = "hl-round-chip " + cls;
      el.textContent = r.target;
      list.appendChild(el);
    });
  }

  function finishGame() {
    if (totalStars > STORE.best) STORE.best = totalStars;
    STORE.plays++;
    Storage.set(STORAGE_KEY, STORE);
    Particles.fire(160);
    const max = ROUNDS.length * 3;
    const rows = ROUNDS.map(r =>
      `<div style="display:flex; justify-content:space-between; padding: 6px 0; border-bottom: 1px solid var(--line);">
        <span style="font-weight:700;"><span style="display:inline-block; width: 24px; text-align:center;">${r.target}</span> ${r.name}</span>
        <span>${r._done ? "★".repeat(r._stars) + "☆".repeat(3-r._stars) : "—"}</span>
      </div>`
    ).join("");
    document.getElementById("win-summary").innerHTML = `
      <div>وجدتَ كل الحروف بِنجاحٍ في <strong>${ROUNDS.filter(r=>r._done).length}</strong> من ${ROUNDS.length} جَولات،
      وحَصلتَ على <strong>${totalStars}</strong> نَجمة من ${max}.</div>
      <div style="margin-top: var(--s-3);">${rows}</div>
      <div style="margin-top: var(--s-3); padding: 10px; background: var(--bg-soft); border-radius: 8px; font-size: 13px;">
        التَّأنّي من الرَّحمن، والعَجَلة من الشَّيطان. اقرأ الحروف بِتمَهُّل، تَجِدها كلَّها.
      </div>
    `;
    setTimeout(() => Modal.open("win-modal"), 500);
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function toArNum(n) {
    return String(n).replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[d]);
  }
  function newGame() {
    ROUNDS.forEach(r => { delete r._done; delete r._stars; });
    roundIdx = 0; totalStars = 0;
    buildRound(); updateUI();
  }

  /* Bind */
  document.getElementById("btn-reveal").addEventListener("click", reveal);
  document.getElementById("btn-shuffle").addEventListener("click", shuffleStage);
  document.getElementById("btn-skip").addEventListener("click", skip);
  document.getElementById("win-replay").addEventListener("click", () => {
    Modal.close("win-modal"); setTimeout(newGame, 300);
  });
  Modal.bindClose("win-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY);
      location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  buildRound();
  updateUI();
})();
