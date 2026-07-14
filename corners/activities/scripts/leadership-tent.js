/* ============================================================
   88 · خيمة القيادة — «أربعة في خطّ» لاعبَان على نفس الجهاز
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "صنّاع الغد", en: "Makers of Tomorrow" },
    crumbTitle:  { ar: "خيمة القيادة", en: "Leadership Tent" },
    title:       { ar: "خيمة القيادة", en: "The Leadership Tent" },
    desc:        { ar: "لعبة استراتيجية للاعبَين! كلٌّ يقود فريقه لبناء صفٍّ من أربع خيامٍ متتالية (أفقياً أو عمودياً أو قطرياً) قبل خصمه. فكّر كقائد وخطّط بذكاء!", en: "A 2-player strategy game! Each leads their team to build a row of four tents (horizontal, vertical, or diagonal) before the opponent. Think like a leader and plan wisely!" },
    statP1:      { ar: "🔴 القائد الأول", en: "🔴 Leader 1" },
    statP2:      { ar: "🔵 القائد الثاني", en: "🔵 Leader 2" },
    sideTitle:   { ar: "كيف نلعب؟", en: "How to play" },
    how:         { ar: "بالتناوب، كل قائد ينقر عموداً لتسقط خيمته في أسفل مكانٍ فارغ. أول من يصنع 4 خيامٍ متتالية يفوز — كلعبة «أربعة في خطّ».", en: "Taking turns, each leader taps a column to drop their tent to the lowest empty spot. First to make 4 tents in a row wins — like Connect Four." },
    tip:         { ar: "القيادة تحتاج تخطيطاً وتوقّعاً لخطوات الآخرين. راقب خصمك وامنعه من إكمال صفّه بينما تبني صفّك. الشورى والحكمة أساس القيادة.", en: "Leadership needs planning and anticipating others' moves. Watch your opponent and block their row while building yours. Consultation and wisdom are the foundation of leadership." },
    winEyebrow:  { ar: "انتهت الجولة", en: "Round over" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "جولة جديدة", en: "New round" },
    turnP1:      { ar: "🔴 دور القائد الأول — انقر عموداً", en: "🔴 Leader 1's turn — tap a column" },
    turnP2:      { ar: "🔵 دور القائد الثاني — انقر عموداً", en: "🔵 Leader 2's turn — tap a column" },
    p1wins:      { ar: "🔴 فاز القائد الأول!", en: "🔴 Leader 1 wins!" },
    p2wins:      { ar: "🔵 فاز القائد الثاني!", en: "🔵 Leader 2 wins!" },
    draw:        { ar: "تعادل! امتلأت الخيام", en: "A draw! The camp is full" },
  };

  const ROWS = 6, COLS = 7;
  const $ = (id) => document.getElementById(id);
  let board, turn, over, p1Score = 0, p2Score = 0;

  function initBoard() {
    board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
    turn = 1; over = false;
    renderTurn();
    renderBoard();
    $("tn-feedback").textContent = "";
  }

  function renderTurn() {
    const L = Lang.current();
    const el = $("tn-turn");
    el.className = "tn-turn " + (turn === 1 ? "p1" : "p2");
    el.textContent = turn === 1 ? I18N.turnP1[L] : I18N.turnP2[L];
  }

  function renderBoard() {
    $("tn-board").innerHTML = "";
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const cell = document.createElement("div");
        cell.className = "tn-cell" + (board[r][c] === 1 ? " p1" : board[r][c] === 2 ? " p2" : "");
        cell.textContent = board[r][c] === 1 ? "⛺" : board[r][c] === 2 ? "🏕" : "";
        cell.dataset.c = c;
        cell.addEventListener("click", () => drop(c));
        $("tn-board").appendChild(cell);
      }
    }
  }

  function drop(c) {
    if (over) return;
    /* أوجد أدنى صف فارغ */
    let r = -1;
    for (let i = ROWS - 1; i >= 0; i--) { if (board[i][c] === 0) { r = i; break; } }
    if (r === -1) return;
    board[r][c] = turn;
    AudioBus.tone(turn === 1 ? 330 : 440, 0.14, "triangle", 0.07);
    renderBoard();
    if (checkWin(r, c, turn)) return end(turn);
    if (board.every(row => row.every(v => v !== 0))) return end(0);
    turn = turn === 1 ? 2 : 1;
    renderTurn();
  }

  function checkWin(r, c, p) {
    const dirs = [[0, 1], [1, 0], [1, 1], [1, -1]];
    for (const [dr, dc] of dirs) {
      let count = 1;
      for (const sign of [1, -1]) {
        let rr = r + dr * sign, cc = c + dc * sign;
        while (rr >= 0 && rr < ROWS && cc >= 0 && cc < COLS && board[rr][cc] === p) { count++; rr += dr * sign; cc += dc * sign; }
      }
      if (count >= 4) return true;
    }
    return false;
  }

  function end(winner) {
    over = true;
    const L = Lang.current();
    if (winner === 1) { p1Score++; $("stat-p1").textContent = p1Score; $("win-title").textContent = I18N.p1wins[L]; AudioBus.success(); Particles.fire(120); }
    else if (winner === 2) { p2Score++; $("stat-p2").textContent = p2Score; $("win-title").textContent = I18N.p2wins[L]; AudioBus.success(); Particles.fire(120); }
    else { $("win-title").textContent = I18N.draw[L]; AudioBus.tone(300, 0.3); }
    $("win-sub").textContent = L === "ar" ? `النتيجة الإجمالية — الأول: ${p1Score} · الثاني: ${p2Score}` : `Overall — L1: ${p1Score} · L2: ${p2Score}`;
    Storage.set("anos_tent_done", true);
    setTimeout(() => Modal.open("win-modal"), 700);
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { renderTurn(); });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", () => { Modal.close("win-modal"); initBoard(); });
  $("reset-btn").addEventListener("click", () => { Modal.close("win-modal"); initBoard(); });
  AudioBus.bindButton($("mute-btn"));
  initBoard();
})();
