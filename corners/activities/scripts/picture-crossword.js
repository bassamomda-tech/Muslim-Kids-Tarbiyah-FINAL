/* ============================================================
   PICTURE CROSSWORD — كلمات متقاطعة مصورة
   شبكتان تتقاطع فيهما 4 كلمات لكل. عند الإكمال تُكشَف الأحجية التالية.
   ============================================================ */

(function () {
  "use strict";

  /* ============ أيقونات الأدلّة ============ */
  const ICONS = {
    book: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 0-2 2"/><path d="M9 7h6M9 11h6"/></svg>`,
    heart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-4.6-7-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.4-7 11-7 11z"/></svg>`,
    bulb: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a6 6 0 0 0-4 10.5V15a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.5A6 6 0 0 0 12 2Z"/></svg>`,
    moon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>`,
    tongue: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
    hourglass: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h12M6 22h12"/><path d="M6 2v6a6 6 0 0 0 12 0V2"/><path d="M6 22v-6a6 6 0 0 1 12 0v6"/></svg>`,
    crown: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4l4 8 6-6 6 6 4-8v16H2z"/></svg>`,
  };

  /* ============ الأحجيات ============ */
  const PUZZLES = [
    {
      rows: 5, cols: 5,
      title: "أحجية المعرفة",
      words: [
        { id: "qrn", word: "قران",  meaning: "كلام الله المُنزَّل", icon: "book",  dir: "across", r: 0, c: 0 },
        { id: "imn", word: "ايمان", meaning: "التصديق بالقلب",       icon: "heart", dir: "down",   r: 0, c: 2 },
        { id: "elm", word: "علم",   meaning: "نور العقل",            icon: "bulb",  dir: "across", r: 2, c: 0 },
        { id: "nwm", word: "نوم",   meaning: "راحة الجسد بالليل",     icon: "moon",  dir: "across", r: 4, c: 2 },
      ],
    },
    {
      rows: 5, cols: 4,
      title: "أحجية الأخلاق",
      words: [
        { id: "sdq", word: "صدق",  meaning: "ضِدّ الكذب",            icon: "tongue",    dir: "across", r: 0, c: 0 },
        { id: "sbr", word: "صبر",  meaning: "حِلمٌ عند الانتظار",     icon: "hourglass", dir: "down",   r: 0, c: 0 },
        { id: "rhm", word: "رحمة", meaning: "اللُّطف بمن حولك",       icon: "heart",     dir: "across", r: 2, c: 0 },
        { id: "mlk", word: "ملك",  meaning: "صاحب المُلك والقرار",    icon: "crown",     dir: "down",   r: 2, c: 2 },
      ],
    },
  ];

  const STORAGE_KEY = "mk_crossword_state_v1";
  const STORAGE = Storage.get(STORAGE_KEY, { best: 0, plays: 0 });

  /* ============ الحالة ============ */
  let pIdx = 0;
  let cells = [];          // [r][c] = { letter:'', expected:'', wordIds:[], num:null } | null
  let words = [];          // current puzzle's words with computed cell list, solved flag
  let activeWordId = null;
  let activeCellIdx = 0;
  let attempts = 0;
  let solvedTotal = 0;
  let pointsTotal = 0;

  /* ============ بناء الأحجية ============ */
  function buildPuzzle(p) {
    cells = Array.from({ length: p.rows }, () =>
      Array.from({ length: p.cols }, () => null)
    );
    words = p.words.map(w => ({ ...w, cellPath: [], solved: false }));

    // place letters
    for (const w of words) {
      const letters = [...w.word];
      const cellPath = [];
      letters.forEach((letter, i) => {
        const r = w.r + (w.dir === "down" ? i : 0);
        const c = w.c + (w.dir === "across" ? i : 0);
        if (!cells[r][c]) {
          cells[r][c] = { letter: "", expected: letter, wordIds: [], num: null };
        }
        cells[r][c].wordIds.push(w.id);
        cellPath.push({ r, c });
      });
      w.cellPath = cellPath;
    }

    // numbering: scan reading order
    let num = 1;
    for (let r = 0; r < p.rows; r++) {
      for (let c = 0; c < p.cols; c++) {
        const cell = cells[r][c];
        if (!cell) continue;
        // does any word start here?
        const startsHere = words.some(w => w.r === r && w.c === c);
        if (startsHere) {
          cell.num = num++;
        }
      }
    }
  }

  /* ============ التصيير ============ */
  function renderAll() {
    const p = PUZZLES[pIdx];
    document.getElementById("puzzle-idx").textContent = pIdx + 1;
    document.getElementById("total-words").textContent = words.length;
    document.getElementById("solved-count").textContent = words.filter(w => w.solved).length;
    document.getElementById("across-count").textContent =
      `${words.filter(w => w.dir === "across" && w.solved).length}/${words.filter(w => w.dir === "across").length}`;
    document.getElementById("down-count").textContent =
      `${words.filter(w => w.dir === "down" && w.solved).length}/${words.filter(w => w.dir === "down").length}`;
    document.getElementById("attempts").textContent = attempts;
    document.getElementById("points").textContent = pointsTotal;

    renderGrid(p);
    renderClues();
    renderKeyboard();
    renderDiscovered();
  }

  function renderGrid(p) {
    const grid = document.getElementById("grid");
    grid.style.gridTemplateColumns = `repeat(${p.cols}, 52px)`;
    grid.innerHTML = "";
    for (let r = 0; r < p.rows; r++) {
      for (let c = 0; c < p.cols; c++) {
        const cell = cells[r][c];
        const el = document.createElement("div");
        if (!cell) {
          el.className = "cw-cell blocked";
        } else {
          el.className = "cw-cell active";
          el.dataset.r = r;
          el.dataset.c = c;
          el.innerHTML = `
            ${cell.num ? `<span class="num-badge">${cell.num}</span>` : ""}
            <span class="letter">${cell.letter}</span>
          `;
          // focus / in-word styling
          if (activeWordId) {
            const w = words.find(ww => ww.id === activeWordId);
            if (w && w.cellPath.some(p => p.r === r && p.c === c)) {
              el.classList.add("in-word");
              if (w.cellPath[activeCellIdx] &&
                  w.cellPath[activeCellIdx].r === r &&
                  w.cellPath[activeCellIdx].c === c) {
                el.classList.add("focus");
              }
            }
          }
          // solved coloring
          const solvedWordsHere = words.filter(ww => ww.solved && ww.cellPath.some(p => p.r === r && p.c === c));
          if (solvedWordsHere.length) {
            const idx = words.indexOf(solvedWordsHere[0]);
            const colorClass = idx === 0 ? "solved" : `solved-${(idx % 4) + 1}`;
            el.classList.add(colorClass);
          }
          el.addEventListener("click", () => onCellClick(r, c));
        }
        grid.appendChild(el);
      }
    }
  }

  function renderClues() {
    renderClueGroup("across", document.getElementById("clues-across"));
    renderClueGroup("down", document.getElementById("clues-down"));
  }

  function renderClueGroup(dir, container) {
    container.innerHTML = "";
    words.filter(w => w.dir === dir).forEach(w => {
      const startCell = cells[w.r][w.c];
      const row = document.createElement("div");
      row.className = "cw-clue-row";
      if (activeWordId === w.id) row.classList.add("active");
      if (w.solved) row.classList.add("solved");
      row.innerHTML = `
        <span class="num">${startCell.num}</span>
        <span class="icon">${ICONS[w.icon] || ""}</span>
        <span class="text">
          <small>${w.word.length} حروف</small>
          ${w.meaning}
        </span>
      `;
      row.addEventListener("click", () => selectWord(w.id, 0));
      container.appendChild(row);
    });
  }

  function renderKeyboard() {
    const kb = document.getElementById("keyboard");
    const letters = "ابتثجحخدذرزسشصضطظعغفقكلمنهويةؤئ".split("");
    kb.innerHTML = "";
    letters.forEach(l => {
      const b = document.createElement("button");
      b.className = "cw-kbd-key";
      b.textContent = l;
      b.addEventListener("click", () => onLetterInput(l));
      kb.appendChild(b);
    });
    const back = document.createElement("button");
    back.className = "cw-kbd-key special";
    back.innerHTML = "← مسح";
    back.addEventListener("click", () => onLetterInput(""));
    kb.appendChild(back);
  }

  function renderDiscovered() {
    const wrap = document.getElementById("discovered");
    const list = document.getElementById("discovered-list");
    const solved = words.filter(w => w.solved);
    if (!solved.length) { wrap.style.display = "none"; return; }
    wrap.style.display = "";
    list.innerHTML = "";
    solved.forEach(w => {
      const row = document.createElement("div");
      row.className = "cw-discovered-row";
      row.innerHTML = `<span class="word">${w.word}</span><span class="meaning">${w.meaning}</span>`;
      list.appendChild(row);
    });
  }

  /* ============ التفاعل ============ */
  function onCellClick(r, c) {
    const cell = cells[r][c];
    if (!cell || !cell.wordIds.length) return;
    // if cell belongs to current word and we click it, move focus there
    if (activeWordId && cell.wordIds.includes(activeWordId)) {
      const w = words.find(ww => ww.id === activeWordId);
      const idx = w.cellPath.findIndex(p => p.r === r && p.c === c);
      if (idx >= 0) {
        activeCellIdx = idx;
        renderAll();
        return;
      }
    }
    // otherwise switch word — prefer one that isn't solved
    const candidates = cell.wordIds.map(id => words.find(w => w.id === id)).filter(w => !w.solved);
    const chosen = candidates[0] || words.find(w => w.id === cell.wordIds[0]);
    if (chosen) {
      const idx = chosen.cellPath.findIndex(p => p.r === r && p.c === c);
      selectWord(chosen.id, Math.max(0, idx));
    }
  }

  function selectWord(id, idx) {
    const w = words.find(ww => ww.id === id);
    if (!w) return;
    if (w.solved) {
      // pick another unsolved word if any
      const next = words.find(ww => !ww.solved);
      if (next) { activeWordId = next.id; activeCellIdx = 0; }
    } else {
      activeWordId = id;
      activeCellIdx = idx;
    }
    renderAll();
  }

  function onLetterInput(letter) {
    if (!activeWordId) {
      // pick first unsolved word
      const first = words.find(w => !w.solved);
      if (!first) return;
      activeWordId = first.id;
      activeCellIdx = 0;
    }
    const w = words.find(ww => ww.id === activeWordId);
    if (!w) return;
    const pos = w.cellPath[activeCellIdx];
    if (!pos) return;
    const cell = cells[pos.r][pos.c];
    cell.letter = letter;
    AudioBus.tick(letter ? 620 : 380);

    if (letter) {
      // check if the placed letter is the expected one (we won't reveal that yet,
      // but if it isn't expected, count an attempt mistake)
      if (letter !== cell.expected) attempts++;
    }

    // advance focus
    if (letter) {
      if (activeCellIdx < w.cellPath.length - 1) {
        activeCellIdx++;
      }
    } else {
      if (activeCellIdx > 0) activeCellIdx--;
    }

    // check word solved
    const wordStr = w.cellPath.map(p => cells[p.r][p.c].letter).join("");
    if (wordStr === w.word && !w.solved) {
      w.solved = true;
      solvedTotal++;
      pointsTotal += Math.max(20, 60 - Math.floor(attempts / 2));
      AudioBus.success();
      Particles.fire(50, { colors: ["#CDEBD7","#A8D4B5","#CFE3F2"] });
      // move to next unsolved
      const next = words.find(ww => !ww.solved);
      if (next) { activeWordId = next.id; activeCellIdx = 0; }
      else activeWordId = null;

      if (words.every(ww => ww.solved)) {
        onPuzzleSolved();
      }
    }

    renderAll();
  }

  function onPuzzleSolved() {
    AudioBus.success();
    Particles.fire(120);
    document.getElementById("next-puzzle-btn").style.display = "";
    if (pIdx + 1 >= PUZZLES.length) {
      setTimeout(finishRound, 700);
    }
  }

  function nextPuzzle() {
    pIdx++;
    if (pIdx >= PUZZLES.length) {
      finishRound();
      return;
    }
    document.getElementById("next-puzzle-btn").style.display = "none";
    buildPuzzle(PUZZLES[pIdx]);
    activeWordId = words[0].id;
    activeCellIdx = 0;
    renderAll();
  }

  /* ============ كَشف حرف ============ */
  function revealLetter() {
    if (!activeWordId) {
      const first = words.find(w => !w.solved);
      if (!first) return;
      activeWordId = first.id;
      activeCellIdx = 0;
    }
    const w = words.find(ww => ww.id === activeWordId);
    const pos = w.cellPath[activeCellIdx];
    if (!pos) return;
    const cell = cells[pos.r][pos.c];
    cell.letter = cell.expected;
    attempts += 2;  // small penalty
    AudioBus.pop();
    // advance
    if (activeCellIdx < w.cellPath.length - 1) activeCellIdx++;
    // re-check
    onLetterInput("");
    onLetterInput(cell.expected); // hack: not ideal — let's instead just trigger word check
  }

  /* ============ النهاية ============ */
  function finishRound() {
    if (pointsTotal > STORAGE.best) STORAGE.best = pointsTotal;
    STORAGE.plays++;
    Storage.set(STORAGE_KEY, STORAGE);
    Particles.fire(160);
    document.getElementById("win-summary").innerHTML = `
      أكملتَ <strong>${PUZZLES.length}</strong> أحجيات بنجاح. كلّ كلمةٍ كَسبتَها أضافت لرصيدك من المعرفة.
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:var(--s-2); margin-top: var(--s-3);">
        <div><strong>النقاط</strong>${pointsTotal}</div>
        <div><strong>كلمات</strong>${solvedTotal}</div>
        <div><strong>أعلى نقاط</strong>${STORAGE.best}</div>
      </div>
    `;
    setTimeout(() => Modal.open("win-modal"), 600);
  }

  /* ============ ربط ============ */
  document.getElementById("reveal-letter").addEventListener("click", () => {
    const w = words.find(ww => ww.id === activeWordId);
    if (!w) return;
    const pos = w.cellPath[activeCellIdx];
    if (!pos) return;
    const cell = cells[pos.r][pos.c];
    cell.letter = cell.expected;
    attempts += 2;
    AudioBus.pop();
    // check word
    const wordStr = w.cellPath.map(p => cells[p.r][p.c].letter).join("");
    if (wordStr === w.word && !w.solved) {
      w.solved = true;
      solvedTotal++;
      pointsTotal += 20;
      Particles.fire(40);
      const next = words.find(ww => !ww.solved);
      activeWordId = next ? next.id : null;
      activeCellIdx = 0;
      if (words.every(ww => ww.solved)) onPuzzleSolved();
    } else {
      if (activeCellIdx < w.cellPath.length - 1) activeCellIdx++;
    }
    renderAll();
  });

  document.getElementById("clear-cell").addEventListener("click", () => onLetterInput(""));
  document.getElementById("next-puzzle-btn").addEventListener("click", nextPuzzle);

  document.getElementById("win-replay").addEventListener("click", () => {
    Modal.close("win-modal");
    setTimeout(() => {
      pIdx = 0; attempts = 0; solvedTotal = 0; pointsTotal = 0;
      buildPuzzle(PUZZLES[0]);
      activeWordId = words[0].id; activeCellIdx = 0;
      document.getElementById("next-puzzle-btn").style.display = "none";
      renderAll();
    }, 300);
  });
  Modal.bindClose("win-modal");

  document.addEventListener("keydown", e => {
    const k = e.key;
    if (k === "Backspace") { e.preventDefault(); onLetterInput(""); return; }
    if (k === "Tab") {
      e.preventDefault();
      const order = words.filter(w => !w.solved);
      if (!order.length) return;
      const cur = order.findIndex(w => w.id === activeWordId);
      const next = order[(cur + 1) % order.length];
      selectWord(next.id, 0);
      return;
    }
    if (k.length === 1 && /[\u0600-\u06FF]/.test(k)) {
      e.preventDefault();
      // normalize alif variants
      let l = k.replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي");
      onLetterInput(l);
    }
  });

  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY);
      location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ تشغيل ============ */
  buildPuzzle(PUZZLES[0]);
  activeWordId = words[0].id;
  activeCellIdx = 0;
  renderAll();
})();
