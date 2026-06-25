/* ============================================================
   HIJRI TIMELINE — شريط الزمن الهجري
   Drag 8 major events to their hijri-year positions on a horizontal axis
   ============================================================ */

(function () {
  "use strict";

  const EVENTS = [
    { id: "bi3tha",    year: -13, name: "البِعثَة المُحَمَّديَّة", ic: "★", detail: "نُزولُ الوَحيِ على الجَبَل" },
    { id: "isra",      year:  -1, name: "الإسراءُ والمِعراج", ic: "☾", detail: "رِحلَةُ السَّماء" },
    { id: "hijra",     year:   1, name: "الهِجرَة إلى المَدينَة", ic: "✦", detail: "بِدايَةُ التَّقويمِ الهِجري" },
    { id: "badr",      year:   2, name: "غَزوَة بَدر", ic: "⚔", detail: "أَوَّلُ نَصرٍ كَبير" },
    { id: "uhud",      year:   3, name: "غَزوَة أُحُد", ic: "⛰", detail: "دُروسٌ في الثَّبات" },
    { id: "hudaybiyya",year:   6, name: "صُلحُ الحُدَيبيَة", ic: "✿", detail: "فَتحٌ مُبين" },
    { id: "fath",      year:   8, name: "فَتحُ مَكَّة", ic: "☪", detail: "دُخولُ النَّبيِّ مَكَّة" },
    { id: "wada3",     year:  10, name: "حَجَّةُ الوَداع", ic: "🜨", detail: "آخِرُ خُطبَةٍ كُبرى" },
  ];

  // Timeline years to render as slots: -13 to 10
  const YEAR_RANGE = [-13, -10, -7, -5, -3, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const STORAGE_KEY = "mk_hijri_v1";
  const STORE = Storage.get(STORAGE_KEY, { bestPoints: 0, bestTries: 0, rounds: 0 });

  // Map of year -> event id placed there
  let board = {};        // year -> event id
  let placed = {};       // event id -> year
  let tries = 0;
  let hintsUsed = 0;
  let selectedChip = null;
  let selectedYear = null;
  let checkedOnce = false;

  function newRound() {
    board = {}; placed = {};
    tries = 0; hintsUsed = 0;
    selectedChip = null; selectedYear = null;
    checkedOnce = false;

    buildTimeline();
    buildTray();
    renderEventsList();
    updateHUD();
    document.querySelector(".ht-timeline-wrap").classList.remove("scanning");
    document.getElementById("btn-check").disabled = true;
  }

  function buildTimeline() {
    const root = document.getElementById("ht-timeline");
    // Remove existing year markers (preserve axis/arrow/zero)
    root.querySelectorAll(".ht-year").forEach(el => el.remove());

    // Range: -13 (right) to +10 (left). Total span = 23 years. Each year = unit on axis.
    // Width allocation: padding 30px on right (axis arrow), to ~100% left.
    // Position via right: %
    const minY = -13;
    const maxY = 10;
    const total = maxY - minY; // 23
    YEAR_RANGE.forEach(y => {
      const wrap = document.createElement("div");
      wrap.className = "ht-year";
      wrap.dataset.year = y;
      // Compute right offset in percent of timeline width (minus arrow space)
      const pct = ((y - minY) / total) * 92 + 4; // 4% to 96%
      wrap.style.right = (100 - pct) + "%";

      const isAH = y > 0;
      const isPre = y < 0;
      const lbl = isPre ? `${Math.abs(y)}- بـ` : (y === 0 ? "صِفر" : `${y}هـ`);
      wrap.innerHTML = `
        <span class="tick"></span>
        <span class="slot" data-year="${y}"></span>
        <span class="label ${isPre ? "bce" : (isAH ? "ah" : "")}">${lbl}</span>
      `;

      const slot = wrap.querySelector(".slot");
      slot.addEventListener("dragover", (e) => { e.preventDefault(); wrap.classList.add("over"); });
      slot.addEventListener("dragleave", () => wrap.classList.remove("over"));
      slot.addEventListener("drop", (e) => {
        e.preventDefault();
        wrap.classList.remove("over");
        const id = e.dataTransfer.getData("text/plain");
        if (id) placeOnYear(id, y);
      });
      slot.addEventListener("click", () => onYearClick(y));

      root.appendChild(wrap);
    });
  }

  function buildTray() {
    const tray = document.getElementById("ht-tray");
    tray.innerHTML = "";
    const shuffled = EVENTS.slice().sort(() => Math.random() - 0.5);
    shuffled.forEach(ev => {
      const chip = document.createElement("div");
      chip.className = "ht-chip";
      chip.dataset.id = ev.id;
      chip.draggable = true;
      chip.innerHTML = `<span class="ic">${ev.ic}</span><span>${ev.name}</span>`;
      chip.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", ev.id);
        e.dataTransfer.effectAllowed = "move";
        chip.classList.add("dragging");
      });
      chip.addEventListener("dragend", () => chip.classList.remove("dragging"));
      chip.addEventListener("click", () => onChipClick(ev.id, chip));
      tray.appendChild(chip);
    });
  }

  function onChipClick(id, chipEl) {
    if (selectedChip === id) {
      selectedChip = null;
      chipEl.classList.remove("selected");
      return;
    }
    selectedChip = id;
    document.querySelectorAll(".ht-chip").forEach(c => c.classList.toggle("selected", c.dataset.id === id));
    AudioBus.tick(700);
    if (selectedYear != null) {
      placeOnYear(id, selectedYear);
      clearSelections();
    }
  }
  function onYearClick(y) {
    // If filled, take chip back
    if (board[y]) {
      const id = board[y];
      delete board[y];
      delete placed[id];
      document.querySelector(`.ht-chip[data-id="${id}"]`)?.classList.remove("placed");
      const wrap = document.querySelector(`.ht-year[data-year="${y}"]`);
      wrap.classList.remove("filled", "correct", "wrong");
      wrap.querySelector(".pinned")?.remove();
      AudioBus.pop();
      updateHUD(); renderEventsList();
      return;
    }
    if (selectedChip) {
      placeOnYear(selectedChip, y);
      clearSelections();
      return;
    }
    selectedYear = y;
    document.querySelectorAll(".ht-year").forEach(el => el.classList.toggle("selected", Number(el.dataset.year) === y));
    AudioBus.tick(820);
  }
  function clearSelections() {
    selectedChip = null; selectedYear = null;
    document.querySelectorAll(".ht-chip").forEach(c => c.classList.remove("selected"));
    document.querySelectorAll(".ht-year").forEach(c => c.classList.remove("selected"));
  }

  function placeOnYear(id, y) {
    const ev = EVENTS.find(e => e.id === id);
    if (!ev) return;

    // Remove from previous year if any
    if (placed[id] != null) {
      const oldY = placed[id];
      delete board[oldY];
      const wrap = document.querySelector(`.ht-year[data-year="${oldY}"]`);
      wrap.classList.remove("filled", "correct", "wrong");
      wrap.querySelector(".pinned")?.remove();
    }
    // Remove any other event from this year
    if (board[y]) {
      const prevId = board[y];
      delete placed[prevId];
      document.querySelector(`.ht-chip[data-id="${prevId}"]`)?.classList.remove("placed");
    }

    board[y] = id;
    placed[id] = y;

    const wrap = document.querySelector(`.ht-year[data-year="${y}"]`);
    wrap.classList.add("filled");
    wrap.classList.remove("correct", "wrong", "selected");
    const pin = document.createElement("div");
    pin.className = "pinned";
    pin.innerHTML = `<span class="ic">${ev.ic}</span> ${ev.name}`;
    pin.addEventListener("click", (e) => {
      e.stopPropagation();
      // Unpin back to tray
      delete board[y];
      delete placed[id];
      document.querySelector(`.ht-chip[data-id="${id}"]`)?.classList.remove("placed");
      wrap.classList.remove("filled", "correct", "wrong");
      pin.remove();
      AudioBus.pop();
      updateHUD(); renderEventsList();
    });
    wrap.appendChild(pin);

    const chip = document.querySelector(`.ht-chip[data-id="${id}"]`);
    if (chip) chip.classList.add("placed");

    tries++;
    AudioBus.tick(620);
    updateHUD();
    renderEventsList();

    // Auto-evaluate per placement (subtle)
    const correctYear = ev.year === y;
    if (checkedOnce) {
      wrap.classList.toggle("correct", correctYear);
      wrap.classList.toggle("wrong", !correctYear);
    }

    if (Object.keys(placed).length === EVENTS.length) {
      document.getElementById("btn-check").disabled = false;
    }
  }

  function checkBoard() {
    checkedOnce = true;
    let correct = 0;
    EVENTS.forEach(ev => {
      const y = placed[ev.id];
      const wrap = y != null ? document.querySelector(`.ht-year[data-year="${y}"]`) : null;
      if (wrap) {
        if (ev.year === y) { wrap.classList.add("correct"); wrap.classList.remove("wrong"); correct++; }
        else { wrap.classList.add("wrong"); wrap.classList.remove("correct"); }
      }
    });
    document.getElementById("ht-correct").textContent = correct;
    AudioBus.tone(correct === EVENTS.length ? 880 : 440, 0.2, "sine", 0.06);

    if (correct === EVENTS.length) {
      document.querySelector(".ht-timeline-wrap").classList.add("scanning");
      Particles.fire(150, { colors: ["#CDEBD7","#FFD9C2","#FFE9A8","#E0D5F2"] });
      AudioBus.success();
      setTimeout(() => finishRound(correct), 2400);
    } else {
      AudioBus.fail();
    }
    updateHUD();
  }

  function useHint() {
    // Find first unplaced event and place it correctly, OR fix first wrong placement
    const wrong = EVENTS.find(ev => placed[ev.id] != null && placed[ev.id] !== ev.year);
    if (wrong) {
      placeOnYear(wrong.id, wrong.year);
      checkedOnce = true;
      const wrap = document.querySelector(`.ht-year[data-year="${wrong.year}"]`);
      wrap.classList.add("correct");
      hintsUsed++;
      AudioBus.tick(960);
      updateHUD();
      return;
    }
    const missing = EVENTS.find(ev => placed[ev.id] == null);
    if (missing) {
      placeOnYear(missing.id, missing.year);
      const wrap = document.querySelector(`.ht-year[data-year="${missing.year}"]`);
      if (checkedOnce) wrap.classList.add("correct");
      hintsUsed++;
      AudioBus.tick(960);
      updateHUD();
    }
  }

  function resetBoard() {
    board = {}; placed = {};
    checkedOnce = false;
    document.querySelectorAll(".ht-chip").forEach(c => c.classList.remove("placed"));
    document.querySelectorAll(".ht-year").forEach(el => {
      el.classList.remove("filled", "correct", "wrong", "selected", "over");
      el.querySelector(".pinned")?.remove();
    });
    document.getElementById("btn-check").disabled = true;
    renderEventsList();
    updateHUD();
  }

  function renderEventsList() {
    const root = document.getElementById("events-list");
    root.innerHTML = "";
    EVENTS.slice().sort((a, b) => a.year - b.year).forEach(ev => {
      const y = placed[ev.id];
      const correct = y === ev.year;
      const row = document.createElement("div");
      row.className = "row" + (correct ? " done" : "");
      const yearLbl = ev.year < 0 ? `${Math.abs(ev.year)}- بـ` : `${ev.year}هـ`;
      row.innerHTML = `
        <span class="yr">${yearLbl}</span>
        <span class="nm">${ev.name}<small>${ev.detail}</small></span>
        <span class="st">${correct ? "✓" : (y != null ? "…" : "·")}</span>
      `;
      root.appendChild(row);
    });
    document.getElementById("ev-pill").textContent = EVENTS.length;
  }

  function updateHUD() {
    document.getElementById("ht-placed").textContent = Object.keys(placed).length;
    let correct = 0;
    EVENTS.forEach(ev => { if (placed[ev.id] === ev.year) correct++; });
    document.getElementById("ht-correct").textContent = correct;
    document.getElementById("ht-tries").textContent = tries;
    document.getElementById("ht-points").textContent = scorePoints(correct);
    document.getElementById("best").textContent = STORE.bestPoints > 0 ? `${STORE.bestPoints} نقطة` : "—";
  }

  function scorePoints(correct = 0) {
    const base = correct * 30;
    const penalty = Math.max(0, tries - EVENTS.length) * 4 + hintsUsed * 18;
    return Math.max(0, base - penalty);
  }

  function finishRound(correct) {
    const points = scorePoints(correct);
    if (points > STORE.bestPoints) STORE.bestPoints = points;
    if (!STORE.bestTries || tries < STORE.bestTries) STORE.bestTries = tries;
    STORE.rounds++;
    Storage.set(STORAGE_KEY, STORE);

    const list = EVENTS.slice().sort((a, b) => a.year - b.year).map(ev => {
      const yearLbl = ev.year < 0 ? `${Math.abs(ev.year)} قَبلَ الهِجرَة` : `${ev.year}هـ`;
      return `<div style="display:grid; grid-template-columns: 80px 1fr; gap:10px; padding: 5px 0; font-size: 13px; border-bottom: 1px dashed var(--line);">
        <span style="font-family: var(--font-en); font-weight: 800; color: var(--brand-ink);">${yearLbl}</span>
        <span><strong>${ev.name}</strong> — <span style="color:var(--muted)">${ev.detail}</span></span>
      </div>`;
    }).join("");

    document.getElementById("done-summary").innerHTML = `
      <div style="display:flex; gap:8px; justify-content:center; margin-bottom: var(--s-3);">
        <span style="padding:6px 12px; background:var(--mint); color:var(--mint-ink); border-radius:var(--r-pill); font-weight:800; font-size:12px;">${tries} مُحاوَلة</span>
        ${hintsUsed > 0 ? `<span style="padding:6px 12px; background:var(--peach); color:var(--peach-ink); border-radius:var(--r-pill); font-weight:800; font-size:12px;">${hintsUsed} تَلميح</span>` : ""}
        <span style="padding:6px 12px; background:var(--butter); color:var(--butter-ink); border-radius:var(--r-pill); font-weight:800; font-size:12px;">+${points} نقطة</span>
      </div>
      ${list}
      <div style="margin-top: var(--s-3); padding: 10px; background: var(--bg-soft); border-radius: 8px; font-size: 12px; line-height: 1.7;">
        كَأَنَّكَ مَشَيتَ مع النَّبيِّ ﷺ مِنَ البِعثَةِ إلى حَجَّةِ الوَداع.
      </div>
    `;
    setTimeout(() => Modal.open("done-modal"), 600);
  }

  /* ============ Bind ============ */
  document.getElementById("btn-hint").addEventListener("click", useHint);
  document.getElementById("btn-reset-board").addEventListener("click", resetBoard);
  document.getElementById("btn-check").addEventListener("click", checkBoard);
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
