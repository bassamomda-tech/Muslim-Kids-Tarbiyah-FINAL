/* ============================================================
   SORT GAME — فرز حلال وحرام
   منطق سقوط الأصناف وفرزها
   ============================================================ */

(function () {
  "use strict";

  /* ---------- بنك الأصناف ---------- */
  const ITEMS = [
    // حلال (مع أيقونة بسيطة)
    { ar: "تفّاحة",     cat: "halal", glyph: "apple"  },
    { ar: "تمر",        cat: "halal", glyph: "date"   },
    { ar: "خبز",        cat: "halal", glyph: "bread"  },
    { ar: "سمك",        cat: "halal", glyph: "fish"   },
    { ar: "حليب",       cat: "halal", glyph: "milk"   },
    { ar: "عسل",        cat: "halal", glyph: "honey"  },
    { ar: "موز",        cat: "halal", glyph: "banana" },
    { ar: "جزر",        cat: "halal", glyph: "carrot" },
    { ar: "عنب",        cat: "halal", glyph: "grape"  },
    { ar: "زبادي",      cat: "halal", glyph: "yogurt" },
    { ar: "خروف",       cat: "halal", glyph: "sheep"  },
    { ar: "ماء",         cat: "halal", glyph: "water"  },
    { ar: "زيتون",      cat: "halal", glyph: "olive"  },
    { ar: "بيض",         cat: "halal", glyph: "egg"    },
    // حرام
    { ar: "لحم خنزير",  cat: "haram", glyph: "pig"     },
    { ar: "خمر",         cat: "haram", glyph: "alcohol" },
    { ar: "ميتة",        cat: "haram", glyph: "skull"   },
    { ar: "دم",          cat: "haram", glyph: "blood"   },
  ];

  /* ---------- أيقونات بسيطة لكل صنف ---------- */
  const GLYPHS = {
    apple: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 7c-2-3-6-3-7 0-2 4 2 13 7 13s9-9 7-13c-1-3-5-3-7 0z"/><path d="M12 7c0-2 1-4 3-5"/></svg>`,
    date: `<svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="13" rx="5" ry="8"/></svg>`,
    bread: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 10c0-3 4-5 8-5s8 2 8 5-2 4-2 4v5c0 1-1 2-2 2H8c-1 0-2-1-2-2v-5s-2-1-2-4z"/></svg>`,
    fish: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 12s4-6 10-6 8 4 8 6-2 6-8 6-10-6-10-6z"/><circle cx="16" cy="11" r="1" fill="currentColor"/><path d="M3 12l-1-3v6z"/></svg>`,
    milk: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M8 4h8v3l2 4v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9l2-4V4z"/></svg>`,
    honey: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l8 5v8l-8 5-8-5V8z"/></svg>`,
    banana: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 6c0 8 6 14 14 14-2-4-2-8 0-12-4 2-8 2-12 0z"/></svg>`,
    carrot: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 21l-7-7 9-9 7 7-9 9z"/><path d="M14 5l3-3M16 5l3-2M14 7l3-1"/></svg>`,
    grape: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="6" r="2"/><circle cx="9" cy="10" r="2.5"/><circle cx="15" cy="10" r="2.5"/><circle cx="6" cy="14" r="2.5"/><circle cx="12" cy="14" r="2.5"/><circle cx="18" cy="14" r="2.5"/><circle cx="9" cy="18" r="2.5"/><circle cx="15" cy="18" r="2.5"/></svg>`,
    yogurt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M6 7h12l-2 13H8z"/><path d="M5 7h14"/></svg>`,
    sheep: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><circle cx="8" cy="10" r="3"/><circle cx="12" cy="9" r="3"/><circle cx="16" cy="10" r="3"/><circle cx="10" cy="13" r="3"/><circle cx="14" cy="13" r="3"/><path d="M9 16v3M14 16v3"/></svg>`,
    water: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z"/></svg>`,
    olive: `<svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx="9" cy="14" rx="4" ry="6"/><ellipse cx="15" cy="14" rx="4" ry="6"/></svg>`,
    egg:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="13" rx="6" ry="8"/></svg>`,
    pig:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><circle cx="12" cy="13" r="7"/><circle cx="10" cy="12" r="1" fill="currentColor"/><circle cx="14" cy="12" r="1" fill="currentColor"/><ellipse cx="12" cy="15" rx="3" ry="2"/></svg>`,
    alcohol: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M10 3h4v3l3 4v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9l3-4V3z"/></svg>`,
    skull: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M5 11a7 7 0 0 1 14 0v3l-2 2v3h-3v-2h-4v2H7v-3l-2-2z"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/></svg>`,
    blood: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z"/></svg>`,
  };

  /* ---------- حالة ---------- */
  const STORAGE_KEY = "mk_sort_state_v1";
  const state = Storage.get(STORAGE_KEY, {
    highScore: 0,
    gamesPlayed: 0,
    muted: false,
  });
  AudioBus.setMuted(state.muted);

  /* ---------- متغيرات الجولة ---------- */
  let score = 0;
  let lives = 3;
  let level = 1;
  let speed = 60; // بكسل في الثانية
  let running = false;
  let currentItem = null;     // { el, item, y, lock }
  let lastTime = 0;
  let rafId = null;

  /* ---------- DOM ---------- */
  const arena = document.getElementById("arena");
  const overlay = document.getElementById("arena-overlay");
  const scoreEl = document.getElementById("score");
  const levelEl = document.getElementById("level");
  const livesEl = document.getElementById("lives");
  const highEl = document.getElementById("high");

  /* ============================================================
     بدء جولة
     ============================================================ */
  function startGame() {
    score = 0; lives = 3; level = 1; speed = 60;
    running = true;
    overlay.classList.add("hidden");
    updateHUD();
    spawnItem();
    lastTime = performance.now();
    rafId = requestAnimationFrame(loop);
  }

  /* ============================================================
     توليد عنصر
     ============================================================ */
  function spawnItem() {
    if (!running) return;
    // اختيار عشوائي مع ميل أكبر للحلال (8:2)
    const isHaram = Math.random() < 0.25;
    const pool = ITEMS.filter(i => i.cat === (isHaram ? "haram" : "halal"));
    const item = pool[Math.floor(Math.random() * pool.length)];

    const el = document.createElement("div");
    el.className = "falling-item";
    el.innerHTML = `
      <span class="item-glyph">${GLYPHS[item.glyph] || ""}</span>
      <span>${item.ar}</span>
    `;
    el.style.left = "50%";
    el.style.top = "0px";
    arena.appendChild(el);

    currentItem = { el, item, y: -10, lock: false };
  }

  /* ============================================================
     الحلقة (Loop)
     ============================================================ */
  function loop(now) {
    if (!running) return;
    const dt = Math.min(0.05, (now - lastTime) / 1000);
    lastTime = now;

    if (currentItem && !currentItem.lock) {
      currentItem.y += speed * dt;
      currentItem.el.style.top = currentItem.y + "px";

      // فحص الوصول للأسفل
      const arenaHeight = arena.clientHeight;
      if (currentItem.y > arenaHeight - 30) {
        // فات بدون تصنيف → خسارة حياة
        currentItem.lock = true;
        AudioBus.fail();
        currentItem.el.classList.add("wrong");
        loseLife();
        setTimeout(() => {
          if (currentItem) currentItem.el.remove();
          currentItem = null;
          if (running) spawnItem();
        }, 450);
      }
    }

    rafId = requestAnimationFrame(loop);
  }

  /* ============================================================
     تصنيف
     ============================================================ */
  function classify(choice /* "halal" | "haram" */) {
    if (!running || !currentItem || currentItem.lock) return;
    currentItem.lock = true;
    const correct = currentItem.item.cat === choice;
    const bin = document.querySelector(`.bin.${choice}`);

    if (correct) {
      score += 10 * level;
      AudioBus.tone(880, 0.12, "sine", 0.08);
      currentItem.el.classList.add("correct");
      bin.classList.add("flash-correct");
      // تصاعد المستوى كل 50 نقطة
      const newLevel = Math.floor(score / 60) + 1;
      if (newLevel > level) {
        level = newLevel;
        speed += 18;
      }
    } else {
      AudioBus.fail();
      currentItem.el.classList.add("wrong");
      bin.classList.add("flash-wrong");
      loseLife();
    }

    setTimeout(() => bin.classList.remove("flash-correct", "flash-wrong"), 500);
    setTimeout(() => {
      if (currentItem) currentItem.el.remove();
      currentItem = null;
      if (running) spawnItem();
    }, 450);

    updateHUD();
  }

  /* ============================================================
     خسارة حياة
     ============================================================ */
  function loseLife() {
    lives--;
    updateHUD();
    if (lives <= 0) gameOver();
  }

  /* ============================================================
     نهاية اللعبة
     ============================================================ */
  function gameOver() {
    running = false;
    cancelAnimationFrame(rafId);
    state.gamesPlayed++;
    let isHigh = false;
    if (score > state.highScore) {
      state.highScore = score;
      isHigh = true;
    }
    Storage.set(STORAGE_KEY, state);

    setTimeout(() => {
      document.getElementById("end-score").textContent = score;
      document.getElementById("end-level").textContent = level;
      document.getElementById("end-high").textContent = state.highScore;
      document.getElementById("end-record").style.display = isHigh ? "" : "none";
      Modal.open("end-modal");
      if (isHigh) Particles.fire(80);
    }, 700);
  }

  /* ============================================================
     HUD
     ============================================================ */
  function updateHUD() {
    scoreEl.textContent = score;
    levelEl.textContent = level;
    highEl.textContent = state.highScore;
    livesEl.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      const heart = document.createElement("span");
      heart.className = "life" + (i < lives ? "" : " lost");
      livesEl.appendChild(heart);
    }
  }

  /* ============================================================
     ربط أحداث
     ============================================================ */
  document.querySelector(".bin.halal").addEventListener("click", () => classify("halal"));
  document.querySelector(".bin.haram").addEventListener("click", () => classify("haram"));

  // اختصارات لوحة المفاتيح
  document.addEventListener("keydown", e => {
    if (!running) return;
    if (e.key === "ArrowRight") classify("halal");  // RTL: اليمين = حلال
    if (e.key === "ArrowLeft")  classify("haram");
  });

  document.getElementById("start-btn").addEventListener("click", startGame);
  document.getElementById("end-replay").addEventListener("click", () => {
    Modal.close("end-modal");
    setTimeout(startGame, 300);
  });
  document.getElementById("end-dismiss").addEventListener("click", () => Modal.close("end-modal"));

  const muteBtn = document.getElementById("mute-btn");
  AudioBus.bindButton(muteBtn, v => { state.muted = v; Storage.set(STORAGE_KEY, state); });

  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط البيانات؟")) { Storage.clear(STORAGE_KEY); location.reload(); }
  });

  updateHUD();
})();
