/* ============================================================
   WORD SEARCH — شبكة البحث عن الكلمات
   شبكة 10×10، 6 كلمات، 4 اتجاهات، تحديد بالسحب
   ============================================================ */

(function () {
  "use strict";

  /* ============ تطبيع عربي ============ */
  const TASHKEEL = /[\u064B-\u065F\u0670\u0640]/g;
  function normalize(s) {
    return s.replace(TASHKEEL, "").replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي");
  }

  /* ============ مواضيع الكلمات ============ */
  const THEMES = [
    {
      label: "أركان الإسلام",
      words: ["شهادة", "صلاة", "زكاة", "صوم", "توحيد", "ركن"],
    },
    {
      label: "من أسماء الله",
      words: ["رحيم", "عليم", "حكيم", "قدير", "غفور", "كريم"],
    },
    {
      label: "الأخلاق الحميدة",
      words: ["صبر", "شكر", "صدق", "عدل", "رحمة", "حياء"],
    },
    {
      label: "أركان الإيمان",
      words: ["ايمان", "ملائكة", "رسل", "كتب", "قدر", "يوم"],
    },
    {
      label: "العلم والمعرفة",
      words: ["علم", "قلم", "كتاب", "درس", "ذكر", "فهم"],
    },
  ];

  const STORAGE_KEY = "mk_ws_state_v1";
  const STORAGE = Storage.get(STORAGE_KEY, { rounds: 0, bestTime: null });

  const N = 10;          // الحجم
  const TARGET_WORDS = 6;
  const ARABIC_FILL = "ابتثجحخدذرزسشصضطظعغفقكلمنهوي".split("");

  let theme = null;
  let grid = [];           // [r][c] = letter
  let words = [];          // [{raw, normalized, placed:{r,c,dr,dc}, found:bool, color:n}]
  let foundCount = 0;
  let attempts = 0;
  let startTs = 0;
  let timerInt = null;
  let dragging = false;
  let startCell = null;
  let endCell = null;

  /* ============ بدء جولة ============ */
  function newRound() {
    // pick a fresh theme
    theme = THEMES[Math.floor(Math.random() * THEMES.length)];
    document.getElementById("theme-name").textContent = theme.label;
    document.getElementById("theme-label").textContent = theme.label;

    // build words
    words = theme.words.slice(0, TARGET_WORDS).map((w, i) => ({
      raw: w,
      normalized: normalize(w),
      found: false,
      color: i + 1,
    }));

    // generate grid; retry if placement fails
    let attempt = 0;
    while (attempt < 12) {
      try {
        placeAllWords();
        break;
      } catch (e) {
        attempt++;
      }
    }

    fillEmptyCells();
    foundCount = 0;
    attempts = 0;
    startTs = Date.now();
    if (timerInt) clearInterval(timerInt);
    timerInt = setInterval(updateTime, 500);

    renderGrid();
    renderWordsBar();
    updateHUD();
  }

  /* ============ توليد الشبكة ============ */
  function placeAllWords() {
    grid = Array.from({ length: N }, () => Array(N).fill(""));
    // shuffle direction prefs
    const DIRS = [
      { dr: 0, dc: -1 },  // ⬅ horizontal RTL
      { dr: 0, dc:  1 },  // ➡ horizontal LTR (reverse)
      { dr: 1, dc:  0 },  // ⬇ vertical
      { dr: 1, dc: -1 },  // ↙ diagonal
      { dr: 1, dc:  1 },  // ↘ diagonal
    ];
    // Place longer words first (easier)
    words.sort((a, b) => b.normalized.length - a.normalized.length);

    for (const w of words) {
      let placed = false;
      for (let attempt = 0; attempt < 200; attempt++) {
        const dir = DIRS[Math.floor(Math.random() * DIRS.length)];
        const len = w.normalized.length;
        // pick a random start that fits
        const r0min = dir.dr === 0 ? 0 : (dir.dr > 0 ? 0 : len - 1);
        const r0max = dir.dr === 0 ? N - 1 : (dir.dr > 0 ? N - len : N - 1);
        const c0min = dir.dc === 0 ? 0 : (dir.dc > 0 ? 0 : len - 1);
        const c0max = dir.dc === 0 ? N - 1 : (dir.dc > 0 ? N - len : N - 1);
        if (r0min > r0max || c0min > c0max) continue;
        const r0 = r0min + Math.floor(Math.random() * (r0max - r0min + 1));
        const c0 = c0min + Math.floor(Math.random() * (c0max - c0min + 1));

        if (canPlace(w.normalized, r0, c0, dir)) {
          placeWord(w.normalized, r0, c0, dir);
          w.placed = { r0, c0, dr: dir.dr, dc: dir.dc, len };
          placed = true;
          break;
        }
      }
      if (!placed) throw new Error("placement failed");
    }
  }

  function canPlace(word, r0, c0, dir) {
    for (let i = 0; i < word.length; i++) {
      const r = r0 + dir.dr * i;
      const c = c0 + dir.dc * i;
      if (r < 0 || r >= N || c < 0 || c >= N) return false;
      const cur = grid[r][c];
      if (cur && cur !== word[i]) return false;
    }
    return true;
  }

  function placeWord(word, r0, c0, dir) {
    for (let i = 0; i < word.length; i++) {
      const r = r0 + dir.dr * i;
      const c = c0 + dir.dc * i;
      grid[r][c] = word[i];
    }
  }

  function fillEmptyCells() {
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        if (!grid[r][c]) {
          grid[r][c] = ARABIC_FILL[Math.floor(Math.random() * ARABIC_FILL.length)];
        }
      }
    }
  }

  /* ============ التصيير ============ */
  function renderGrid() {
    const g = document.getElementById("grid");
    g.style.gridTemplateColumns = `repeat(${N}, 42px)`;
    g.innerHTML = "";
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        const cell = document.createElement("div");
        cell.className = "ws-cell";
        cell.dataset.r = r;
        cell.dataset.c = c;
        cell.textContent = grid[r][c];
        g.appendChild(cell);
      }
    }
    bindGrid();
  }

  function renderWordsBar() {
    const bar = document.getElementById("words-bar");
    bar.innerHTML = "";
    words.forEach(w => {
      const chip = document.createElement("span");
      chip.className = "ws-word-chip" + (w.found ? " found" : "");
      chip.dataset.word = w.normalized;
      chip.innerHTML = `
        <span>${w.raw}</span>
        <span class="meta">${w.normalized.length} حروف</span>
        <span class="check">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>
        </span>
      `;
      bar.appendChild(chip);
    });
  }

  /* ============ ربط أحداث الشبكة ============ */
  function bindGrid() {
    const g = document.getElementById("grid");
    g.querySelectorAll(".ws-cell").forEach(cell => {
      cell.addEventListener("pointerdown", e => {
        e.preventDefault();
        const r = +cell.dataset.r, c = +cell.dataset.c;
        startCell = { r, c };
        endCell = { r, c };
        dragging = true;
        highlightSelection();
      });
    });

    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);
  }

  function onPointerMove(e) {
    if (!dragging) return;
    const el = document.elementFromPoint(e.clientX, e.clientY);
    if (!el || !el.classList.contains("ws-cell")) return;
    const r = +el.dataset.r, c = +el.dataset.c;
    if (endCell && endCell.r === r && endCell.c === c) return;
    endCell = { r, c };
    highlightSelection();
  }

  function onPointerUp() {
    if (!dragging) return;
    dragging = false;
    finalizeSelection();
  }

  /* ============ تحديد ============ */
  function getLine(a, b) {
    // returns array of {r,c} along a valid line from a→b, or null if invalid
    const dr = b.r - a.r, dc = b.c - a.c;
    if (dr === 0 && dc === 0) return [{ r: a.r, c: a.c }];
    if (dr !== 0 && dc !== 0 && Math.abs(dr) !== Math.abs(dc)) {
      // invalid → just return start
      return [{ r: a.r, c: a.c }];
    }
    const len = Math.max(Math.abs(dr), Math.abs(dc));
    const sr = Math.sign(dr), sc = Math.sign(dc);
    const arr = [];
    for (let i = 0; i <= len; i++) {
      arr.push({ r: a.r + sr * i, c: a.c + sc * i });
    }
    return arr;
  }

  function highlightSelection() {
    document.querySelectorAll(".ws-cell.selecting").forEach(c => c.classList.remove("selecting"));
    const cells = getLine(startCell, endCell);
    cells.forEach(({ r, c }) => {
      const el = document.querySelector(`.ws-cell[data-r="${r}"][data-c="${c}"]`);
      if (el) el.classList.add("selecting");
    });
  }

  function finalizeSelection() {
    document.querySelectorAll(".ws-cell.selecting").forEach(c => c.classList.remove("selecting"));
    if (!startCell || !endCell) return;
    const cells = getLine(startCell, endCell);
    if (cells.length < 2) return;
    attempts++;

    const fwd = cells.map(({ r, c }) => grid[r][c]).join("");
    const rev = fwd.split("").reverse().join("");
    let match = null, matchCells = null;
    for (const w of words) {
      if (w.found) continue;
      if (w.normalized === fwd) { match = w; matchCells = cells; break; }
      if (w.normalized === rev) { match = w; matchCells = cells.slice().reverse(); break; }
    }

    if (match) {
      match.found = true;
      foundCount++;
      AudioBus.success();
      Particles.fire(50, { colors: ["#CDEBD7","#A8D4B5","#FFE9A8"] });
      matchCells.forEach(({ r, c }) => {
        const el = document.querySelector(`.ws-cell[data-r="${r}"][data-c="${c}"]`);
        if (el) el.classList.add("found", `color-${match.color}`);
      });
      renderWordsBar();
      updateHUD();
      if (foundCount === words.length) finishRound();
    } else {
      AudioBus.fail();
      // shake the selection briefly
      cells.forEach(({ r, c }) => {
        const el = document.querySelector(`.ws-cell[data-r="${r}"][data-c="${c}"]`);
        if (el && !el.classList.contains("found")) {
          el.animate(
            [{ transform: "translateX(0)" }, { transform: "translateX(-3px)" }, { transform: "translateX(3px)" }, { transform: "translateX(0)" }],
            { duration: 300 }
          );
        }
      });
      updateHUD();
    }

    startCell = null;
    endCell = null;
  }

  /* ============ تلميح ============ */
  function useHint() {
    const remaining = words.filter(w => !w.found);
    if (!remaining.length) return;
    const w = remaining[Math.floor(Math.random() * remaining.length)];
    const { r0, c0 } = w.placed;
    const el = document.querySelector(`.ws-cell[data-r="${r0}"][data-c="${c0}"]`);
    if (el) {
      el.classList.add("hinted");
      setTimeout(() => el.classList.remove("hinted"), 4500);
    }
    AudioBus.pop();
    attempts++;
    updateHUD();
  }

  /* ============ HUD ============ */
  function updateHUD() {
    document.getElementById("found-count").textContent = foundCount;
    document.getElementById("attempts").textContent = attempts;
    document.getElementById("rounds-stat").textContent = STORAGE.rounds || 0;
    document.getElementById("best-stat").textContent =
      STORAGE.bestTime != null ? Fmt.time(STORAGE.bestTime) : "—";
  }

  function updateTime() {
    const t = Math.floor((Date.now() - startTs) / 1000);
    document.getElementById("time").textContent = Fmt.time(t);
  }

  /* ============ نهاية ============ */
  function finishRound() {
    clearInterval(timerInt);
    const t = Math.floor((Date.now() - startTs) / 1000);
    STORAGE.rounds = (STORAGE.rounds || 0) + 1;
    if (STORAGE.bestTime == null || t < STORAGE.bestTime) STORAGE.bestTime = t;
    Storage.set(STORAGE_KEY, STORAGE);
    Particles.fire(140);

    document.getElementById("win-summary").innerHTML = `
      وجدتَ ست كلماتٍ من <strong>${theme.label}</strong> بنجاح.
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:var(--s-2); margin-top: var(--s-3);">
        <div><strong>الوقت</strong>${Fmt.time(t)}</div>
        <div><strong>محاولات</strong>${attempts}</div>
        <div><strong>أسرع وقت</strong>${Fmt.time(STORAGE.bestTime)}</div>
      </div>
    `;
    setTimeout(() => Modal.open("win-modal"), 600);
  }

  /* ============ ربط أزرار ============ */
  document.getElementById("hint-btn").addEventListener("click", useHint);
  document.getElementById("theme-btn").addEventListener("click", () => {
    AudioBus.pop();
    newRound();
  });
  document.getElementById("win-replay").addEventListener("click", () => {
    Modal.close("win-modal");
    setTimeout(newRound, 300);
  });
  Modal.bindClose("win-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY);
      location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ تشغيل ============ */
  newRound();
})();
