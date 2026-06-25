/* ============================================================
   HONESTY MAZE — متاهة الصدق
   مولّد متاهة (Depth-first), حركة بالأسهم/keypad,
   مواقف صدق عند النجوم.
   ============================================================ */

(function () {
  "use strict";

  const COLS = 15;
  const ROWS = 12;
  const CELL = 40;
  const STORAGE_KEY = "mk_maze_state_v1";

  /* المواقف اليومية */
  const SCENARIOS = [
    {
      q: "وجدتَ محفظة فيها نقود في الطريق، ماذا تفعل؟",
      truth: "أبحث عن صاحبها أو أسلّمها للشرطة، فهي ليست لي.",
      lie:   "أحتفظ بها لنفسي، فلن يعرف أحد.",
      moral: "الصادقُ يَردّ الأمانة لأهلها ولو لم يره أحد، لأنّ الله يراه.",
    },
    {
      q: "كسرتَ كأساً في المطبخ بالخطأ. ماذا تقول لأمّك؟",
      truth: "أنا الذي كسرته بالخطأ، أنا آسف يا أمّي.",
      lie:   "ما أعلم، ربما القطّة قفزت فكسرته.",
      moral: "الاعتراف بالخطأ شجاعة، والصادقُ لا يَخاف من قول الحقّ.",
    },
    {
      q: "حصلتَ على درجة منخفضة في الاختبار، وأبوك يسأل: لماذا؟",
      truth: "لم أُذاكِر جيّداً، سأبذل جهداً أكبر.",
      lie:   "المعلّم وضع أسئلةً صعبةً جداً، والجميع رسبوا.",
      moral: "الاعتراف بالتقصير أوّل خطوة في التحسّن، أما الكذب فيُكرّر الخطأ.",
    },
    {
      q: "زميلك أراد أن ينسخ من ورقتك في الاختبار، ماذا تفعل؟",
      truth: "أعتذر بلطف وأبتعد، فالغشّ ظُلم لنا وله.",
      lie:   "أتركه ينسخ، فهو صديقي ولا أريد أن أُحرجه.",
      moral: "«من غَشَّ فليس منَّا». الصدق هو ألا نُعين أحداً على الظلم.",
    },
    {
      q: "سألك أبوك: هل غسلتَ يديك قبل الأكل؟ ولم تفعل بعد.",
      truth: "لا، نسيتُ، سأذهبُ الآن لأغسلهما.",
      lie:   "نعم غسلتهما، لا تَقلق.",
      moral: "الكَذِب الصغير عادةٌ سيّئة، والصادقُ يَصدُق ولو في الأمور البسيطة.",
    },
  ];

  /* الحالة */
  const STORAGE = Storage.get(STORAGE_KEY, { best: null, plays: 0 });
  let grid;        // grid[r][c] = { walls:{n,s,e,w}, visited }
  let player;      // {r,c}
  let goal;        // {r,c}
  let stars;       // [{r,c,idx,collected:false,answered:false}]
  let honesty = 5; // 0..5 — يبدأ بـ 5
  let starsTaken = 0;
  let steps = 0;
  let level = 1;
  let playing = false;
  let drawAnim = 0;

  const canvas = document.getElementById("maze");
  const ctx = canvas.getContext("2d");

  /* ============ توليد المتاهة (DFS) ============ */
  function genMaze() {
    grid = [];
    for (let r = 0; r < ROWS; r++) {
      const row = [];
      for (let c = 0; c < COLS; c++) {
        row.push({
          walls: { n: true, s: true, e: true, w: true },
          visited: false,
        });
      }
      grid.push(row);
    }

    const stack = [];
    let cur = { r: 0, c: 0 };
    grid[0][0].visited = true;
    stack.push(cur);

    while (stack.length) {
      cur = stack[stack.length - 1];
      const neighbors = unvisitedNeighbors(cur);
      if (!neighbors.length) {
        stack.pop();
        continue;
      }
      const next = neighbors[Math.floor(Math.random() * neighbors.length)];
      removeWall(cur, next);
      grid[next.r][next.c].visited = true;
      stack.push(next);
    }

    // Place goal at far corner
    goal = { r: ROWS - 1, c: COLS - 1 };

    // Place stars at 5 different reachable cells (deterministic-ish)
    stars = [];
    const candidates = [];
    for (let r = 1; r < ROWS - 1; r++) {
      for (let c = 1; c < COLS - 1; c++) {
        const d = Math.abs(r - 0) + Math.abs(c - 0);
        if (d > 3 && d < ROWS + COLS - 3) candidates.push({ r, c });
      }
    }
    // Shuffle
    candidates.sort(() => Math.random() - 0.5);
    const chosen = [];
    for (const cand of candidates) {
      if (chosen.length >= 5) break;
      // Ensure not too close to others
      const tooClose = chosen.some(p => Math.abs(p.r - cand.r) + Math.abs(p.c - cand.c) < 3);
      if (!tooClose) chosen.push(cand);
    }
    chosen.forEach((p, i) => stars.push({ ...p, idx: i, collected: false, answered: false }));
  }

  function unvisitedNeighbors(cell) {
    const { r, c } = cell;
    const arr = [];
    if (r > 0       && !grid[r - 1][c].visited) arr.push({ r: r - 1, c, dir: "n" });
    if (r < ROWS-1  && !grid[r + 1][c].visited) arr.push({ r: r + 1, c, dir: "s" });
    if (c > 0       && !grid[r][c - 1].visited) arr.push({ r, c: c - 1, dir: "w" });
    if (c < COLS-1  && !grid[r][c + 1].visited) arr.push({ r, c: c + 1, dir: "e" });
    return arr;
  }

  function removeWall(a, b) {
    const dr = b.r - a.r;
    const dc = b.c - a.c;
    if (dr === -1) { grid[a.r][a.c].walls.n = false; grid[b.r][b.c].walls.s = false; }
    if (dr ===  1) { grid[a.r][a.c].walls.s = false; grid[b.r][b.c].walls.n = false; }
    if (dc === -1) { grid[a.r][a.c].walls.w = false; grid[b.r][b.c].walls.e = false; }
    if (dc ===  1) { grid[a.r][a.c].walls.e = false; grid[b.r][b.c].walls.w = false; }
  }

  /* ============ الرسم ============ */
  function draw() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // خلفية ناعمة
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, "#FAF5FF");
    grad.addColorStop(1, "#F3E6FA");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // الجدران
    ctx.strokeStyle = "#5A3F94";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const x = c * CELL;
        const y = r * CELL;
        const cell = grid[r][c];
        ctx.beginPath();
        if (cell.walls.n) { ctx.moveTo(x, y); ctx.lineTo(x + CELL, y); }
        if (cell.walls.s) { ctx.moveTo(x, y + CELL); ctx.lineTo(x + CELL, y + CELL); }
        if (cell.walls.w) { ctx.moveTo(x, y); ctx.lineTo(x, y + CELL); }
        if (cell.walls.e) { ctx.moveTo(x + CELL, y); ctx.lineTo(x + CELL, y + CELL); }
        ctx.stroke();
      }
    }

    // البداية
    drawStartCell(0, 0);

    // الهدف
    drawGoal(goal.c, goal.r);

    // النجوم
    stars.forEach(s => {
      if (!s.collected) drawStar(s.c, s.r, s.answered);
    });

    // اللاعب
    drawPlayer(player.c, player.r);
  }

  function drawStartCell(c, r) {
    const x = c * CELL + CELL / 2;
    const y = r * CELL + CELL / 2;
    ctx.fillStyle = "#DCE9DC";
    ctx.beginPath();
    ctx.arc(x, y, CELL * 0.32, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#6A8E7F";
    ctx.font = "700 11px Tajawal";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("بدء", x, y);
  }

  function drawGoal(c, r) {
    const x = c * CELL;
    const y = r * CELL;
    const pulse = 1 + Math.sin(drawAnim / 18) * 0.08;
    ctx.save();
    ctx.translate(x + CELL / 2, y + CELL / 2);
    ctx.scale(pulse, pulse);
    // بوابة ذهبية
    ctx.fillStyle = "#C9A961";
    ctx.beginPath();
    ctx.moveTo(-12, 10);
    ctx.lineTo(-12, -8);
    ctx.quadraticCurveTo(-12, -16, 0, -16);
    ctx.quadraticCurveTo(12, -16, 12, -8);
    ctx.lineTo(12, 10);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#8A6510";
    ctx.beginPath();
    ctx.arc(7, 2, 1.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawStar(c, r, answered) {
    const x = c * CELL + CELL / 2;
    const y = r * CELL + CELL / 2;
    const bob = Math.sin(drawAnim / 12 + (c + r)) * 1.5;
    ctx.save();
    ctx.translate(x, y + bob);
    ctx.fillStyle = answered ? "#7A7A8C" : "#FFD98B";
    ctx.strokeStyle = answered ? "#3D4564" : "#8A6510";
    ctx.lineWidth = 1.5;
    starPath(ctx, 0, 0, 5, 11, 5);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  function starPath(ctx, cx, cy, spikes, outer, inner) {
    let rot = Math.PI / 2 * 3;
    const step = Math.PI / spikes;
    ctx.beginPath();
    ctx.moveTo(cx, cy - outer);
    for (let i = 0; i < spikes; i++) {
      ctx.lineTo(cx + Math.cos(rot) * outer, cy + Math.sin(rot) * outer);
      rot += step;
      ctx.lineTo(cx + Math.cos(rot) * inner, cy + Math.sin(rot) * inner);
      rot += step;
    }
    ctx.lineTo(cx, cy - outer);
    ctx.closePath();
  }

  function drawPlayer(c, r) {
    const x = c * CELL + CELL / 2;
    const y = r * CELL + CELL / 2;
    // ظل
    ctx.fillStyle = "rgba(31,37,64,0.18)";
    ctx.beginPath();
    ctx.ellipse(x, y + 10, 9, 3, 0, 0, Math.PI * 2);
    ctx.fill();
    // الجسم
    const grad = ctx.createRadialGradient(x - 2, y - 4, 2, x, y, 14);
    grad.addColorStop(0, "#A8DDF0");
    grad.addColorStop(1, "#5A8DB6");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, 12, 0, Math.PI * 2);
    ctx.fill();
    // عمامة صغيرة / عمامة بسيطة على الرأس
    ctx.fillStyle = "#1F2540";
    ctx.beginPath();
    ctx.arc(x, y - 4, 9, Math.PI, 0);
    ctx.fill();
    // عينان
    ctx.fillStyle = "#1F2540";
    ctx.beginPath();
    ctx.arc(x - 3, y + 1, 1.4, 0, Math.PI * 2);
    ctx.arc(x + 3, y + 1, 1.4, 0, Math.PI * 2);
    ctx.fill();
    // فم
    ctx.strokeStyle = "#1F2540";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(x, y + 4, 2.5, 0, Math.PI);
    ctx.stroke();
  }

  /* ============ الحركة ============ */
  function move(dir) {
    if (!playing) return;
    if (isChoiceOpen()) return;
    const { r, c } = player;
    const cell = grid[r][c];
    if (dir === "up"    && !cell.walls.n) player.r--;
    if (dir === "down"  && !cell.walls.s) player.r++;
    // RTL flip: visual right is grid west? No — we use logical grid.
    // For Arabic UI, "right arrow" semantically means moving right on the screen.
    // We will keep grid coords and map left=west, right=east.
    if (dir === "left"  && !cell.walls.w) player.c--;
    if (dir === "right" && !cell.walls.e) player.c++;

    if (player.r !== r || player.c !== c) {
      steps++;
      AudioBus.tick(620);
      updateHUD();
      checkCell();
    }
  }

  function checkCell() {
    // نجمة؟
    const star = stars.find(s => s.r === player.r && s.c === player.c && !s.collected);
    if (star) {
      openScenario(star);
      return;
    }
    // هدف؟
    if (player.r === goal.r && player.c === goal.c) {
      finishLevel();
    }
  }

  /* ============ المواقف ============ */
  function isChoiceOpen() {
    return document.getElementById("choice-overlay").classList.contains("open");
  }

  function openScenario(star) {
    const data = SCENARIOS[star.idx % SCENARIOS.length];
    const overlay = document.getElementById("choice-overlay");
    const q = document.getElementById("choice-q");
    const opts = document.getElementById("choice-options");
    const fb = document.getElementById("choice-feedback");

    // ترتيب عشوائي للخيارين
    const choices = Math.random() < 0.5
      ? [{ text: data.truth, kind: "truth" }, { text: data.lie, kind: "lie" }]
      : [{ text: data.lie, kind: "lie" }, { text: data.truth, kind: "truth" }];

    q.textContent = data.q;
    fb.classList.remove("open");
    fb.textContent = "";

    opts.innerHTML = "";
    choices.forEach(ch => {
      const b = document.createElement("button");
      b.textContent = ch.text;
      b.addEventListener("click", () => answerScenario(ch.kind, star, data, b));
      opts.appendChild(b);
    });

    document.getElementById("hint-card").innerHTML =
      `<span class="who">موقف ${star.idx + 1} من 5</span>${data.q}`;

    overlay.classList.add("open");
  }

  function answerScenario(kind, star, data, btn) {
    const fb = document.getElementById("choice-feedback");
    const overlay = document.getElementById("choice-overlay");
    btn.classList.add(kind === "truth" ? "correct" : "wrong");
    // disable
    overlay.querySelectorAll(".choice-options button").forEach(b => b.disabled = true);

    if (kind === "truth") {
      star.collected = true;
      starsTaken++;
      AudioBus.success();
      Particles.fire(40, { colors: ["#FFD98B","#DCE9DC","#CDEBD7"] });
      fb.innerHTML = `<strong>أحسنتَ! نجمة صدقٍ لك.</strong>${data.moral}`;
    } else {
      star.answered = true;
      honesty = Math.max(0, honesty - 1);
      AudioBus.fail();
      fb.innerHTML = `<strong>الصدق أولى.</strong>${data.moral}`;
    }
    fb.classList.add("open");
    updateHUD();

    setTimeout(() => {
      overlay.classList.remove("open");
    }, 2200);
  }

  /* ============ HUD ============ */
  function updateHUD() {
    document.getElementById("stars").textContent = starsTaken;
    document.getElementById("steps").textContent = steps;
    document.getElementById("level").textContent = level;
    const m = document.getElementById("honesty-meter");
    m.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      const s = document.createElement("span");
      if (i >= honesty) s.className = "off";
      m.appendChild(s);
    }
    const best = STORAGE.best;
    document.getElementById("best").textContent = best ? `${best} خطوة` : "—";
  }

  /* ============ بدء/نهاية ============ */
  function start() {
    genMaze();
    player = { r: 0, c: 0 };
    stars.forEach(s => { s.collected = false; s.answered = false; });
    honesty = 5;
    starsTaken = 0;
    steps = 0;
    playing = true;
    document.getElementById("start-overlay").classList.add("hidden");
    document.getElementById("hint-card").innerHTML =
      `<span class="who">القائد الصغير</span>تحرّك بأسهم لوحة المفاتيح. اقترب من نجمةٍ لتسمع موقفاً.`;
    updateHUD();
    draw();
  }

  function finishLevel() {
    playing = false;
    AudioBus.success();
    Particles.fire(140);

    // record best
    if (STORAGE.best == null || steps < STORAGE.best) STORAGE.best = steps;
    STORAGE.plays++;
    Storage.set(STORAGE_KEY, STORAGE);

    // تلخيص
    let title, eyebrow, summary;
    if (starsTaken === 5 && honesty === 5) {
      eyebrow = "صدّيقٌ صَدوق";
      title  = "ما أَجملَ صدقَك!";
      summary = "اخترتَ الصدق في كل المواقف الخمسة. لقد فُتح لك بابُ الجنة الذهبي.";
    } else if (starsTaken >= 3) {
      eyebrow = "وصلتَ إلى الباب";
      title  = "أحسنتَ، وما زال أمامك خيرٌ كثير";
      summary = `جمعتَ <strong>${starsTaken}</strong> نجمات من 5، وحافظتَ على <strong>${honesty}</strong> من الصدق. حاول جولةً أخرى لتجمع الخمس كلَّها.`;
    } else {
      eyebrow = "وصلتَ، لكن…";
      title  = "الصدقُ يحتاج تدريباً";
      summary = "جمعتَ نجماتٍ قليلة. لا بأس، لنُعِد الكَرَّة وقد عَرَفتَ أنّ الصدقَ أحبُّ إلى الله.";
    }
    document.getElementById("win-eyebrow").textContent = eyebrow;
    document.getElementById("win-title").textContent = title;
    document.getElementById("win-summary").innerHTML = `
      ${summary}
      <div style="display:grid; grid-template-columns: repeat(3,1fr); gap: var(--s-2); margin-top: var(--s-3);">
        <div><strong>الخطوات</strong>${steps}</div>
        <div><strong>النجوم</strong>${starsTaken} / 5</div>
        <div><strong>مقياس الصدق</strong>${honesty} / 5</div>
      </div>
    `;
    setTimeout(() => Modal.open("win-modal"), 600);
  }

  /* ============ الإدخال ============ */
  document.addEventListener("keydown", e => {
    if (!playing) return;
    const k = e.key;
    if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d","W","A","S","D"].includes(k)) {
      e.preventDefault();
    }
    if (k === "ArrowUp"    || k === "w" || k === "W") move("up");
    if (k === "ArrowDown"  || k === "s" || k === "S") move("down");
    if (k === "ArrowLeft"  || k === "a" || k === "A") move("left");
    if (k === "ArrowRight" || k === "d" || k === "D") move("right");
  });

  document.querySelectorAll("#keypad button").forEach(b => {
    b.addEventListener("click", () => move(b.dataset.dir));
  });

  // Swipe على اللوحة (للجوال)
  let touch = null;
  canvas.addEventListener("touchstart", e => {
    const t = e.touches[0];
    touch = { x: t.clientX, y: t.clientY };
  }, { passive: true });
  canvas.addEventListener("touchend", e => {
    if (!touch) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.x;
    const dy = t.clientY - touch.y;
    if (Math.abs(dx) > Math.abs(dy)) {
      if (Math.abs(dx) > 20) move(dx > 0 ? "right" : "left");
    } else {
      if (Math.abs(dy) > 20) move(dy > 0 ? "down" : "up");
    }
    touch = null;
  }, { passive: true });

  document.getElementById("start-btn").addEventListener("click", () => { AudioBus.pop(); start(); });
  document.getElementById("win-replay").addEventListener("click", () => {
    Modal.close("win-modal");
    setTimeout(() => { level++; start(); }, 300);
  });
  Modal.bindClose("win-modal");

  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY);
      location.reload();
    }
  });

  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ حلقة الرسم ============ */
  function loop() {
    drawAnim++;
    if (grid) draw();
    requestAnimationFrame(loop);
  }

  // تهيئة أولية (متاهة للعرض)
  genMaze();
  player = { r: 0, c: 0 };
  updateHUD();
  loop();
})();
