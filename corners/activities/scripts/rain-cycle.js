/* ============================================================
   RAIN CYCLE — دورة المطر
   Flowchart logic: place 5 stages in correct positions
   ============================================================ */

(function () {
  "use strict";

  const STAGES = [
    {
      id: "sun",
      pos: 1,
      name: "الشَّمسُ تُسَخِّن",
      ic: "☀",
      sub: "بِدايَةُ الدَّورَة",
      detail: "تُرسِلُ الشَّمسُ حَرارَتَها فَتَبدَأ المياهُ تَسخُن.",
    },
    {
      id: "evap",
      pos: 2,
      name: "تَبَخُّر الماء",
      ic: "↑",
      sub: "صُعودٌ خَفِيّ",
      detail: "يَتَحَوَّلُ الماءُ إلى بُخارٍ يَصعَدُ إلى السَّماء.",
    },
    {
      id: "cloud",
      pos: 3,
      name: "تَكاثُفٌ وسُحُب",
      ic: "☁",
      sub: "اِجتِماعُ القَطرات",
      detail: "البُخارُ يَبرُد ويَتَجَمَّع، فَتَتَكَوَّنُ السُّحُب.",
    },
    {
      id: "rain",
      pos: 4,
      name: "نُزولُ المَطَر",
      ic: "☂",
      sub: "رِزقٌ نازِل",
      detail: "تَثقُلُ السُّحُب فَتَنزِلُ القَطرات على الأَرض.",
    },
    {
      id: "sea",
      pos: 5,
      name: "أَنهارٌ وبَحر",
      ic: "≈",
      sub: "عَودَةٌ لِلبَدء",
      detail: "تَجري المياهُ في أَنهارٍ وتَعودُ إلى البَحر، لِتَبدَأَ الدَّورَةُ مَرَّةً أُخرى.",
    },
  ];

  const STORAGE_KEY = "mk_raincycle_v1";
  const STORE = Storage.get(STORAGE_KEY, { bestPoints: 0, bestTries: 0, rounds: 0 });

  // Map of slotPos -> placed stage id (or null)
  let board = { 1: null, 2: null, 3: null, 4: null, 5: null };
  let tries = 0;
  let hintsUsed = 0;
  let solved = false;
  let selectedChip = null;     // id from tray
  let selectedSlot = null;     // pos number

  function newRound() {
    board = { 1: null, 2: null, 3: null, 4: null, 5: null };
    tries = 0; hintsUsed = 0; solved = false;
    selectedChip = null; selectedSlot = null;

    buildBoard();
    buildTray();
    renderStagesList();
    updateHUD();
    document.querySelector(".rc-stage").classList.remove("flowing");
    document.getElementById("btn-flow").disabled = true;
  }

  /* ============ Board ============ */
  function buildBoard() {
    const root = document.getElementById("rc-slots");
    root.innerHTML = "";
    [1, 2, 3, 4, 5].forEach(pos => {
      const slot = document.createElement("div");
      slot.className = "rc-slot";
      slot.dataset.pos = pos;
      slot.innerHTML = `
        <div class="drop-zone" data-pos="${pos}">
          <span class="num">${pos}</span>
          <span class="empty-text">المَرحَلَة ${pos}</span>
        </div>
      `;

      const zone = slot.querySelector(".drop-zone");
      zone.addEventListener("dragover", (e) => { e.preventDefault(); slot.classList.add("over"); });
      zone.addEventListener("dragleave", () => slot.classList.remove("over"));
      zone.addEventListener("drop", (e) => {
        e.preventDefault();
        slot.classList.remove("over");
        const id = e.dataTransfer.getData("text/plain");
        if (id) placeOnSlot(id, pos);
      });
      zone.addEventListener("click", () => onSlotClick(pos));

      root.appendChild(slot);
    });
  }

  function buildTray() {
    const tray = document.getElementById("rc-tray");
    tray.innerHTML = "";
    // Shuffle stages for tray
    const shuffled = STAGES.slice().sort(() => Math.random() - 0.5);
    shuffled.forEach(s => {
      const chip = document.createElement("div");
      chip.className = "rc-chip";
      chip.dataset.id = s.id;
      chip.draggable = true;
      chip.innerHTML = `<span class="ic">${s.ic}</span><span>${s.name}</span>`;
      chip.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", s.id);
        e.dataTransfer.effectAllowed = "move";
        chip.classList.add("dragging");
      });
      chip.addEventListener("dragend", () => chip.classList.remove("dragging"));
      chip.addEventListener("click", () => onChipClick(s.id, chip));
      tray.appendChild(chip);
    });
  }

  function onChipClick(id, chipEl) {
    // toggle select
    if (selectedChip === id) {
      selectedChip = null;
      chipEl.classList.remove("selected");
      return;
    }
    selectedChip = id;
    document.querySelectorAll(".rc-chip").forEach(c => c.classList.toggle("selected", c.dataset.id === id));
    AudioBus.tick(720);

    // if a slot was selected earlier, place
    if (selectedSlot != null) {
      placeOnSlot(id, selectedSlot);
      selectedChip = null;
      selectedSlot = null;
      document.querySelectorAll(".rc-chip").forEach(c => c.classList.remove("selected"));
      document.querySelectorAll(".rc-slot").forEach(s => s.classList.remove("selected"));
    }
  }

  function onSlotClick(pos) {
    if (solved) return;

    // If slot is already filled, take it back
    if (board[pos]) {
      const id = board[pos];
      board[pos] = null;
      const chip = document.querySelector(`.rc-chip[data-id="${id}"]`);
      if (chip) chip.classList.remove("placed");
      const slot = document.querySelector(`.rc-slot[data-pos="${pos}"]`);
      slot.classList.remove("filled", "correct", "wrong");
      slot.querySelector(".drop-zone").innerHTML = `<span class="num">${pos}</span><span class="empty-text">المَرحَلَة ${pos}</span>`;
      AudioBus.pop();
      updateHUD();
      renderStagesList();
      return;
    }

    // If a chip is selected, place it
    if (selectedChip) {
      placeOnSlot(selectedChip, pos);
      selectedChip = null;
      selectedSlot = null;
      document.querySelectorAll(".rc-chip").forEach(c => c.classList.remove("selected"));
      document.querySelectorAll(".rc-slot").forEach(s => s.classList.remove("selected"));
      return;
    }

    // otherwise select the slot
    selectedSlot = pos;
    document.querySelectorAll(".rc-slot").forEach(s => s.classList.toggle("selected", Number(s.dataset.pos) === pos));
    AudioBus.tick(820);
  }

  function placeOnSlot(id, pos) {
    if (solved) return;
    const stage = STAGES.find(s => s.id === id);
    if (!stage) return;

    // If slot has something, remove it back to tray
    if (board[pos]) {
      const prevId = board[pos];
      const prevChip = document.querySelector(`.rc-chip[data-id="${prevId}"]`);
      if (prevChip) prevChip.classList.remove("placed");
    }

    // If this stage was placed elsewhere, clear that slot
    for (const k in board) {
      if (board[k] === id) {
        board[k] = null;
        const s = document.querySelector(`.rc-slot[data-pos="${k}"]`);
        s.classList.remove("filled", "correct", "wrong");
        s.querySelector(".drop-zone").innerHTML = `<span class="num">${k}</span><span class="empty-text">المَرحَلَة ${k}</span>`;
      }
    }

    board[pos] = id;
    const slot = document.querySelector(`.rc-slot[data-pos="${pos}"]`);
    slot.classList.add("filled");
    slot.classList.remove("wrong", "correct", "selected");
    slot.querySelector(".drop-zone").innerHTML = `
      <span class="num">${pos}</span>
      <span class="ic">${stage.ic}</span>
      <span>${stage.name}</span>
    `;

    const chip = document.querySelector(`.rc-chip[data-id="${id}"]`);
    if (chip) chip.classList.add("placed");

    tries++;
    AudioBus.tick(620);
    updateHUD();
    renderStagesList();
    checkAttempt();
  }

  function checkAttempt() {
    const filled = Object.values(board).filter(Boolean).length;
    if (filled < 5) return;

    // Evaluate
    let correct = 0;
    [1, 2, 3, 4, 5].forEach(pos => {
      const stage = STAGES.find(s => s.id === board[pos]);
      const slot = document.querySelector(`.rc-slot[data-pos="${pos}"]`);
      if (stage && stage.pos === pos) {
        correct++;
        slot.classList.add("correct");
        slot.classList.remove("wrong");
      } else {
        slot.classList.add("wrong");
        slot.classList.remove("correct");
      }
    });

    document.getElementById("rc-correct").textContent = correct;
    updateHUD();

    if (correct === 5) {
      solved = true;
      document.getElementById("btn-flow").disabled = false;
      AudioBus.success();
      Particles.fire(120, { colors: ["#CFE3F2","#CDEBD7","#FFE9A8","#FFD9C2"] });
      setTimeout(() => finishRound(), 600);
    } else {
      AudioBus.fail();
      // After feedback, give learner a moment then loosen the wrong ones
      setTimeout(() => {
        document.querySelectorAll(".rc-slot.wrong").forEach(s => {
          const pos = Number(s.dataset.pos);
          const id = board[pos];
          board[pos] = null;
          s.classList.remove("filled", "wrong");
          s.querySelector(".drop-zone").innerHTML = `<span class="num">${pos}</span><span class="empty-text">المَرحَلَة ${pos}</span>`;
          const chip = document.querySelector(`.rc-chip[data-id="${id}"]`);
          if (chip) chip.classList.remove("placed");
        });
        renderStagesList();
      }, 1100);
    }
  }

  function useHint() {
    if (solved) return;
    // Find first empty slot's correct stage and place it
    for (let pos = 1; pos <= 5; pos++) {
      const correctStage = STAGES.find(s => s.pos === pos);
      if (board[pos] === correctStage.id) continue;
      // unplace whoever wrong is here
      if (board[pos]) {
        const prev = board[pos];
        const prevChip = document.querySelector(`.rc-chip[data-id="${prev}"]`);
        if (prevChip) prevChip.classList.remove("placed");
      }
      // remove correctStage from wherever it was
      for (const k in board) {
        if (board[k] === correctStage.id) {
          board[k] = null;
          const s = document.querySelector(`.rc-slot[data-pos="${k}"]`);
          s.classList.remove("filled", "correct", "wrong");
          s.querySelector(".drop-zone").innerHTML = `<span class="num">${k}</span><span class="empty-text">المَرحَلَة ${k}</span>`;
        }
      }
      board[pos] = correctStage.id;
      const slot = document.querySelector(`.rc-slot[data-pos="${pos}"]`);
      slot.classList.add("filled", "correct");
      slot.querySelector(".drop-zone").innerHTML = `
        <span class="num">${pos}</span>
        <span class="ic">${correctStage.ic}</span>
        <span>${correctStage.name}</span>
      `;
      const chip = document.querySelector(`.rc-chip[data-id="${correctStage.id}"]`);
      if (chip) chip.classList.add("placed");

      hintsUsed++;
      AudioBus.tick(900);
      updateHUD();
      renderStagesList();
      // re-check
      const filled = Object.values(board).filter(Boolean).length;
      if (filled === 5) checkAttempt();
      return;
    }
  }

  function resetBoard() {
    if (solved) return;
    for (const k in board) board[k] = null;
    buildBoard();
    document.querySelectorAll(".rc-chip").forEach(c => c.classList.remove("placed", "selected"));
    selectedChip = null; selectedSlot = null;
    document.getElementById("rc-correct").textContent = 0;
    renderStagesList();
  }

  function runFlow() {
    const stage = document.querySelector(".rc-stage");
    stage.classList.toggle("flowing");
    AudioBus.tone(440, 0.18, "sine", 0.05);
  }

  function renderStagesList() {
    const root = document.getElementById("stages-list");
    root.innerHTML = "";
    STAGES.forEach(s => {
      const placed = Object.values(board).includes(s.id);
      const slotPos = Object.entries(board).find(([k, v]) => v === s.id)?.[0];
      const correct = slotPos && Number(slotPos) === s.pos;

      const row = document.createElement("div");
      row.className = "row" + (correct ? " done" : "");
      row.innerHTML = `
        <span class="num">${s.pos}</span>
        <span class="nm">${s.name}<small>${s.detail}</small></span>
        <span class="st">${correct ? "✓" : (placed ? "…" : "·")}</span>
      `;
      root.appendChild(row);
    });
  }

  function updateHUD() {
    document.getElementById("rc-placed").textContent = Object.values(board).filter(Boolean).length;
    document.getElementById("rc-tries").textContent = tries;
    let correct = 0;
    for (const pos in board) {
      const stage = STAGES.find(s => s.id === board[pos]);
      if (stage && stage.pos === Number(pos)) correct++;
    }
    document.getElementById("rc-correct").textContent = correct;
    document.getElementById("rc-points").textContent = scorePoints(correct);
    document.getElementById("best").textContent = STORE.bestPoints > 0 ? `${STORE.bestPoints} نقطة` : "—";
  }

  function scorePoints(correct = 0) {
    const base = correct * 40;
    const penalty = Math.max(0, tries - 5) * 5 + hintsUsed * 15;
    return Math.max(0, base - penalty);
  }

  function finishRound() {
    const points = scorePoints(5);
    if (points > STORE.bestPoints) STORE.bestPoints = points;
    if (!STORE.bestTries || tries < STORE.bestTries) STORE.bestTries = tries;
    STORE.rounds++;
    Storage.set(STORAGE_KEY, STORE);
    Particles.fire(160, { colors: ["#CFE3F2","#CDEBD7","#FFE9A8","#FFD9C2","#E0D5F2"] });

    const list = STAGES.map(s =>
      `<div style="display:flex; gap:8px; padding: 5px 0; font-size: 13px; border-bottom: 1px dashed var(--line);">
        <span style="font-family: var(--font-en); font-weight: 800; color: var(--brand-ink); min-width: 18px;">${s.pos}.</span>
        <span><strong>${s.name}</strong> — <span style="color:var(--muted)">${s.detail}</span></span>
      </div>`
    ).join("");

    document.getElementById("done-summary").innerHTML = `
      <div style="display:flex; gap:8px; justify-content:center; margin-bottom: var(--s-3);">
        <span style="padding:6px 12px; background:var(--mint); color:var(--mint-ink); border-radius:var(--r-pill); font-weight:800; font-size:12px;">${tries} مُحاوَلة</span>
        ${hintsUsed > 0 ? `<span style="padding:6px 12px; background:var(--peach); color:var(--peach-ink); border-radius:var(--r-pill); font-weight:800; font-size:12px;">${hintsUsed} تَلميح</span>` : ""}
        <span style="padding:6px 12px; background:var(--butter); color:var(--butter-ink); border-radius:var(--r-pill); font-weight:800; font-size:12px;">+${points} نقطة</span>
      </div>
      <div>${list}</div>
      <div style="margin-top: var(--s-3); padding: 10px; background: var(--bg-soft); border-radius: 8px; font-size: 12px; line-height: 1.7;">
        كلُّ قَطرَةِ ماءٍ شَرِبتَها مَرَّت بِهذه الدَّورَة. سُبحانَ مَن قَدَّرَ فَأَحسَنَ التَّقدير.
      </div>
    `;
    // Run flow animation
    document.querySelector(".rc-stage").classList.add("flowing");
    setTimeout(() => Modal.open("done-modal"), 1200);
  }

  /* ============ Bind ============ */
  document.getElementById("btn-hint").addEventListener("click", useHint);
  document.getElementById("btn-reset-board").addEventListener("click", resetBoard);
  document.getElementById("btn-flow").addEventListener("click", runFlow);
  document.getElementById("done-next").addEventListener("click", () => {
    Modal.close("done-modal"); setTimeout(newRound, 300);
  });
  Modal.bindClose("done-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY); location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ Start ============ */
  newRound();
})();
