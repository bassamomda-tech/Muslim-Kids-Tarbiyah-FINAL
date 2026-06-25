/* ============================================================
   CATCH — صيد حروف المد
   حروف المد الثلاثة: الألف (ا) والواو (و) والياء (ي).
   تَسقط الحروف، احصُد حروف المد بالسلَّة وتَجنَّب غيرها.
   ============================================================ */

(function () {
  "use strict";

  const MADD = ["ا", "و", "ي"];
  const OTHER = ["ب","ت","ث","ج","ح","د","ر","س","ش","ص","ط","ع","ف","ق","ك","ل","م","ن","ه"];
  const GOAL = 15;            // عدد حروف المد للفوز
  const LIVES = 3;

  const STORAGE_KEY = "mk_catch_state_v1";
  const STORE = Storage.get(STORAGE_KEY, { best: 0, plays: 0 });

  const stage   = document.getElementById("stage");
  const basket  = document.getElementById("basket");
  const overlay = document.getElementById("overlay");

  let running = false;
  let raf = null;
  let lastT = 0;
  let spawnTimer = 0;
  let spawnGap = 1050;       // ms بين الحروف
  let fallSpeed = 0.10;      // px/ms
  let tokens = [];           // {el, x, y, vy, madd}
  let basketX = 0.5;         // نسبة 0..1
  let score = 0;             // حروف المد المحصودة
  let lives = LIVES;
  let missed = 0;
  let elapsed = 0;

  /* ---------- HUD ---------- */
  function updateHUD() {
    document.getElementById("c-score").textContent = score;
    document.getElementById("c-goal").textContent = "/" + GOAL;
    document.getElementById("c-missed").textContent = missed;
    document.getElementById("c-lives").textContent = "♥".repeat(lives) + "♡".repeat(LIVES - lives);
    document.getElementById("best").textContent = STORE.best > 0 ? STORE.best : "—";
    document.getElementById("plays").textContent = STORE.plays;
  }

  /* ---------- البدء ---------- */
  function start() {
    overlay.classList.add("hidden");
    tokens.forEach(t => t.el.remove());
    tokens = [];
    score = 0; lives = LIVES; missed = 0; elapsed = 0;
    spawnGap = 1050; fallSpeed = 0.10; spawnTimer = 0;
    running = true; lastT = performance.now();
    updateHUD();
    raf = requestAnimationFrame(loop);
  }

  /* ---------- الحلقة ---------- */
  function loop(t) {
    if (!running) return;
    const dt = Math.min(48, t - lastT);
    lastT = t; elapsed += dt;

    // تصعيد تدريجي
    fallSpeed = 0.10 + Math.min(0.12, elapsed / 1000 * 0.0016);
    spawnGap = Math.max(620, 1050 - elapsed / 1000 * 12);

    // توليد حرف
    spawnTimer += dt;
    if (spawnTimer >= spawnGap) { spawnTimer = 0; spawn(); }

    const rect = stage.getBoundingClientRect();
    const basketCenter = basketX * rect.width;
    const catchY = rect.height - 64;

    for (let i = tokens.length - 1; i >= 0; i--) {
      const tk = tokens[i];
      tk.y += tk.vy * dt;
      tk.el.style.transform = `translate(${tk.x}px, ${tk.y}px) rotate(${tk.rot}deg)`;

      // التقاط
      if (tk.y >= catchY && tk.y <= catchY + 54 && !tk.done) {
        if (Math.abs((tk.x + 28) - basketCenter) < 76) {
          tk.done = true;
          caught(tk);
          tokens.splice(i, 1);
          continue;
        }
      }
      // خروج من الأسفل
      if (tk.y > rect.height + 10) {
        if (tk.madd && !tk.done) {
          missed++;
          loseLife("فاتَك حرفُ مدّ!");
        }
        tk.el.remove();
        tokens.splice(i, 1);
      }
    }

    updateHUD();
    if (running) raf = requestAnimationFrame(loop);
  }

  function spawn() {
    const rect = stage.getBoundingClientRect();
    const madd = Math.random() < 0.52;
    const ch = madd ? MADD[Math.floor(Math.random() * MADD.length)]
                    : OTHER[Math.floor(Math.random() * OTHER.length)];
    const el = document.createElement("div");
    el.className = "falling " + (madd ? "madd" : "other");
    el.textContent = ch;
    const x = 8 + Math.random() * (rect.width - 72);
    el.style.transform = `translate(${x}px, -60px)`;
    stage.appendChild(el);
    tokens.push({ el, x, y: -60, vy: fallSpeed * (0.85 + Math.random() * 0.4), madd, rot: (Math.random()*16-8), done: false });
  }

  function caught(tk) {
    tk.el.classList.add("pop");
    setTimeout(() => tk.el.remove(), 320);
    if (tk.madd) {
      score++;
      AudioBus.pop();
      Particles.fire(14, { colors: ["#CDEBD7","#2F7A52","#FFE9A8"],
        originX: (tk.x + 28) + "px", originY: "88%" });
      if (score >= GOAL) return win();
    } else {
      AudioBus.fail();
      loseLife("هذا ليس حرفَ مدّ!");
    }
  }

  function loseLife(msg) {
    lives--;
    flash(msg);
    if (lives <= 0) gameOver();
  }

  /* ---------- رسائل سريعة ---------- */
  let flashEl = null;
  function flash(msg) {
    if (!flashEl) {
      flashEl = document.createElement("div");
      flashEl.className = "catch-flash";
      flashEl.style.cssText = "position:absolute;top:14px;left:50%;transform:translateX(-50%);background:rgba(31,37,64,.85);color:#fff;padding:8px 16px;border-radius:999px;font-weight:700;font-size:13px;z-index:5;pointer-events:none;transition:opacity .3s;";
      stage.appendChild(flashEl);
    }
    flashEl.textContent = msg;
    flashEl.style.opacity = "1";
    clearTimeout(flashEl._t);
    flashEl._t = setTimeout(() => { if (flashEl) flashEl.style.opacity = "0"; }, 850);
  }

  /* ---------- النهايات ---------- */
  function stopLoop() { running = false; if (raf) cancelAnimationFrame(raf); }

  function gameOver() {
    stopLoop();
    saveScore();
    showOverlay(`<h2>انتهت المحاولة</h2>
      <p>حصَدتَ <strong>${score}</strong> من حروف المدّ.<br/>جرِّب مرّة أخرى — التركيز سرُّ النجاح!</p>
      <button class="btn-primary" id="ov-btn" style="width:100%;justify-content:center;">محاولة جديدة</button>`);
  }

  function win() {
    stopLoop();
    score = Math.max(score, GOAL);
    saveScore();
    AudioBus.success();
    Particles.fire(170);
    document.getElementById("win-summary").innerHTML = `
      <div>أحسنت! حصَدتَ <strong>${GOAL}</strong> حرفَ مدٍّ ولم تَفقِد إلا <strong>${missed}</strong>.</div>
      <div style="margin-top:var(--s-3); padding:10px; background:var(--bg-soft); border-radius:8px; font-size:13px;">
        حروفُ المدِّ ثلاثة: الألفُ والواوُ والياء، تَمُدُّ الصوتَ في القراءة فتُجمِّلها.
      </div>`;
    setTimeout(() => Modal.open("win-modal"), 400);
  }

  function saveScore() {
    if (score > STORE.best) STORE.best = score;
    STORE.plays++;
    Storage.set(STORAGE_KEY, STORE);
    updateHUD();
  }

  /* ---------- overlay ---------- */
  function showOverlay(html) {
    overlay.querySelector(".catch-overlay-card").innerHTML = html;
    overlay.classList.remove("hidden");
    const btn = document.getElementById("ov-btn");
    if (btn) btn.addEventListener("click", e => { e.stopPropagation(); start(); });
  }

  /* ---------- تحكُّم السلَّة ---------- */
  function setBasket(px) {
    const rect = stage.getBoundingClientRect();
    basketX = Math.max(0.06, Math.min(0.94, px / rect.width));
    basket.style.transform = `translateX(${basketX * rect.width}px) translateX(-50%)`;
  }
  stage.addEventListener("pointermove", e => {
    const rect = stage.getBoundingClientRect();
    setBasket(e.clientX - rect.left);
  });
  let keyDir = 0, keyRaf = null;
  function keyLoop() {
    if (keyDir !== 0) {
      const rect = stage.getBoundingClientRect();
      setBasket(basketX * rect.width + keyDir * 13);
      keyRaf = requestAnimationFrame(keyLoop);
    } else keyRaf = null;
  }
  document.addEventListener("keydown", e => {
    // ملاحظة: الاتجاه معكوس بصرياً يبقى منطقياً لأنّ المسرح RTL لكن الإحداثيات LTR
    if (e.key === "ArrowRight") keyDir = -1;
    else if (e.key === "ArrowLeft") keyDir = 1;
    else return;
    if (!keyRaf) keyLoop();
  });
  document.addEventListener("keyup", e => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") keyDir = 0;
  });
  // أزرار اللمس
  function bindPad(id, dir) {
    const el = document.getElementById(id);
    if (!el) return;
    let h = null;
    const go = () => { const rect = stage.getBoundingClientRect(); setBasket(basketX*rect.width + dir*16); };
    el.addEventListener("pointerdown", e => { e.preventDefault(); go(); h = setInterval(go, 30); });
    const stop = () => { if (h) { clearInterval(h); h = null; } };
    el.addEventListener("pointerup", stop);
    el.addEventListener("pointerleave", stop);
  }
  bindPad("pad-left", 1);
  bindPad("pad-right", -1);

  /* ---------- overlay click to start ---------- */
  overlay.addEventListener("click", () => { if (!running) start(); });

  /* ---------- bind ---------- */
  document.getElementById("win-replay").addEventListener("click", () => {
    Modal.close("win-modal"); setTimeout(start, 300);
  });
  Modal.bindClose("win-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) { Storage.clear(STORAGE_KEY); location.reload(); }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  // وضع السلَّة الابتدائي
  requestAnimationFrame(() => setBasket(stage.getBoundingClientRect().width * 0.5));
  updateHUD();
})();
