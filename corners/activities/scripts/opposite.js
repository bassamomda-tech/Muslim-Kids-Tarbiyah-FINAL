/* ============================================================
   OPPOSITE — الكلمة وعكسها
   صِلْ كلَّ كلمةٍ بِضِدِّها. ثلاث جولات، ست كلماتٍ في كلِّ جولة.
   ============================================================ */

(function () {
  "use strict";

  /* بنك الأضداد (الكلمة، ضدّها) */
  const PAIRS = [
    ["كبير", "صغير"], ["ليل", "نهار"], ["حارّ", "بارد"], ["فوق", "تحت"],
    ["سعيد", "حزين"], ["قويّ", "ضعيف"], ["قريب", "بعيد"], ["جديد", "قديم"],
    ["طويل", "قصير"], ["سريع", "بطيء"], ["مفتوح", "مغلق"], ["نظيف", "متّسخ"],
    ["صحيح", "خطأ"], ["كثير", "قليل"], ["أوّل", "آخِر"], ["صعب", "سهل"],
    ["غنيّ", "فقير"], ["واسع", "ضيّق"],
  ];

  const COLORS = ["#2F7A52","#2E5F8A","#5A3F94","#B5612A","#8A6510","#C0567A"];
  const PER_ROUND = 6;
  const TOTAL_ROUNDS = 3;

  const STORAGE_KEY = "mk_opposite_state_v1";
  const STORE = Storage.get(STORAGE_KEY, { best: null, plays: 0 });

  let pool = [];
  let round = 0;
  let roundPairs = [];      // [[a,b], ...] لهذه الجولة
  let leftItems = [];       // {word, pairId}
  let rightItems = [];
  let selected = null;      // {side, idx, pairId, el}
  let matchedCount = 0;
  let mistakes = 0;
  let totalMatched = 0;

  const svg = document.getElementById("opp-svg");

  /* ---------- بناء جولة ---------- */
  function buildRound() {
    matchedCount = 0;
    selected = null;
    roundPairs = pool.slice(round * PER_ROUND, round * PER_ROUND + PER_ROUND);

    leftItems  = roundPairs.map((p, i) => ({ word: p[0], pairId: i }));
    rightItems = roundPairs.map((p, i) => ({ word: p[1], pairId: i }));
    shuffle(rightItems);
    // تأكد ألا يتطابق ترتيب العمودين تماماً
    if (rightItems.every((r, i) => r.pairId === i)) shuffle(rightItems);

    renderCols();
    renderPairList();
    clearLines();
    updateHUD();
    document.querySelectorAll(".opp-rounds .pip").forEach((p, i) => p.classList.toggle("on", i <= round));
  }

  function renderCols() {
    const left = document.getElementById("col-left");
    const right = document.getElementById("col-right");
    left.innerHTML = ""; right.innerHTML = "";
    leftItems.forEach((it, i) => left.appendChild(makeWord(it, "left", i)));
    rightItems.forEach((it, i) => right.appendChild(makeWord(it, "right", i)));
  }

  function makeWord(it, side, idx) {
    const el = document.createElement("button");
    el.className = "opp-word";
    el.textContent = it.word;
    el.dataset.side = side; el.dataset.idx = idx; el.dataset.pair = it.pairId;
    el.addEventListener("click", () => onPick(side, idx, it.pairId, el));
    return el;
  }

  /* ---------- اختيار ---------- */
  function onPick(side, idx, pairId, el) {
    if (el.classList.contains("matched")) return;
    AudioBus.tick(620);

    if (!selected) {
      select(el, side, idx, pairId);
      return;
    }
    if (selected.el === el) { deselect(); return; }
    if (selected.side === side) { // إعادة اختيار من نفس العمود
      deselect(); select(el, side, idx, pairId); return;
    }
    // عمودان مختلفان → تحقّق
    if (selected.pairId === pairId) {
      matchPair(selected.el, el, pairId);
      deselectState();
    } else {
      el.classList.add("wrong");
      selected.el.classList.add("wrong");
      AudioBus.fail();
      mistakes++;
      const sEl = selected.el;
      setTimeout(() => { el.classList.remove("wrong"); sEl.classList.remove("wrong"); }, 420);
      deselect();
      updateHUD();
    }
  }

  function select(el, side, idx, pairId) {
    el.classList.add("selected");
    selected = { el, side, idx, pairId };
  }
  function deselect() { if (selected) selected.el.classList.remove("selected"); selected = null; }
  function deselectState() { if (selected) selected.el.classList.remove("selected"); selected = null; }

  function matchPair(elA, elB, pairId) {
    const color = COLORS[pairId % COLORS.length];
    [elA, elB].forEach(el => {
      el.classList.remove("selected");
      el.classList.add("matched");
      el.style.background = color;
      el.style.borderColor = color;
      const dot = document.createElement("span"); dot.className = "dot";
      el.appendChild(dot);
    });
    drawLine(elA, elB, color);
    AudioBus.pop();
    matchedCount++; totalMatched++;
    markPairRow(pairId, color);
    updateHUD();

    if (matchedCount === roundPairs.length) {
      AudioBus.success();
      Particles.fire(40, { colors: COLORS });
      setTimeout(nextRound, 850);
    }
  }

  function nextRound() {
    round++;
    if (round >= TOTAL_ROUNDS || round * PER_ROUND >= pool.length) return finish();
    buildRound();
  }

  /* ---------- خطوط الوصل ---------- */
  function lineCoords(el) {
    const stage = document.getElementById("opp-stage").getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const side = el.dataset.side;
    const y = r.top - stage.top + r.height / 2;
    const x = side === "left" ? (r.left - stage.left) : (r.right - stage.left);
    return { x, y };
  }
  function drawLine(elA, elB, color) {
    const a = lineCoords(elA), b = lineCoords(elB);
    const ln = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const mx = (a.x + b.x) / 2;
    ln.setAttribute("d", `M ${a.x} ${a.y} C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`);
    ln.setAttribute("fill", "none");
    ln.setAttribute("stroke", color);
    ln.setAttribute("stroke-width", "3.5");
    ln.setAttribute("stroke-linecap", "round");
    ln.setAttribute("opacity", "0.85");
    ln.style.strokeDasharray = "600";
    ln.style.strokeDashoffset = "600";
    svg.appendChild(ln);
    requestAnimationFrame(() => { ln.style.transition = "stroke-dashoffset 0.5s ease"; ln.style.strokeDashoffset = "0"; });
  }
  function clearLines() { svg.innerHTML = ""; }

  /* ---------- side list ---------- */
  function renderPairList() {
    const list = document.getElementById("pair-list");
    list.innerHTML = "";
    roundPairs.forEach((p, i) => {
      const row = document.createElement("div");
      row.className = "opp-pair-row"; row.dataset.pair = i;
      row.innerHTML = `<span class="swatch"></span><span>${p[0]}</span><span class="arrow">⇄</span><span>${p[1]}</span>`;
      list.appendChild(row);
    });
  }
  function markPairRow(pairId, color) {
    const row = document.querySelector(`.opp-pair-row[data-pair="${pairId}"]`);
    if (row) { row.classList.add("done"); row.querySelector(".swatch").style.background = color; }
  }

  /* ---------- HUD ---------- */
  function updateHUD() {
    document.getElementById("o-round").textContent = (round + 1);
    document.getElementById("o-matched").textContent = totalMatched;
    document.getElementById("o-mistakes").textContent = mistakes;
    document.getElementById("best").textContent = STORE.best != null ? STORE.best : "—";
    document.getElementById("plays").textContent = STORE.plays;
  }

  /* ---------- النهاية ---------- */
  function finish() {
    STORE.plays++;
    if (STORE.best == null || mistakes < STORE.best) STORE.best = mistakes;
    Storage.set(STORAGE_KEY, STORE);
    updateHUD();
    Particles.fire(170);
    AudioBus.success();
    const stars = mistakes === 0 ? 3 : (mistakes <= 3 ? 2 : 1);
    document.getElementById("win-summary").innerHTML = `
      <div>وصَلتَ <strong>${totalMatched}</strong> زوجاً من الأضداد عبرَ ${TOTAL_ROUNDS} جولات
      بـ <strong>${mistakes}</strong> أخطاء فقط.</div>
      <div style="margin-top:var(--s-3); font-size:22px; letter-spacing:4px;">
        ${"★".repeat(stars)}${"☆".repeat(3 - stars)}
      </div>
      <div style="margin-top:var(--s-3); padding:10px; background:var(--bg-soft); border-radius:8px; font-size:13px;">
        معرفةُ الضدِّ تُوسِّع لغتَك: فبِالضدِّ تَتميَّز الأشياء، ﴿وَمِن كُلِّ شَيءٍ خَلَقنا زَوجَين﴾.
      </div>`;
    setTimeout(() => Modal.open("win-modal"), 450);
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function newGame() {
    pool = shuffle(PAIRS.slice()).slice(0, PER_ROUND * TOTAL_ROUNDS);
    round = 0; mistakes = 0; totalMatched = 0;
    buildRound();
  }

  /* ---------- bind ---------- */
  window.addEventListener("resize", () => {
    // أعِد رسم الخطوط للأزواج المتطابقة
    clearLines();
    document.querySelectorAll('.opp-word.matched[data-side="left"]').forEach(elA => {
      const pid = elA.dataset.pair;
      const elB = document.querySelector(`.opp-word.matched[data-side="right"][data-pair="${pid}"]`);
      if (elB) drawLine(elA, elB, COLORS[pid % COLORS.length]);
    });
  });
  document.getElementById("win-replay").addEventListener("click", () => {
    Modal.close("win-modal"); setTimeout(newGame, 300);
  });
  Modal.bindClose("win-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) { Storage.clear(STORAGE_KEY); location.reload(); }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  newGame();
})();
