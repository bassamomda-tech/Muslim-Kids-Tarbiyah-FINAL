/* ============================================================
   BUILD MOSQUE — منطق لعبة الملصقات
   إضافة، سحب، تحجيم، حذف، حفظ في localStorage
   ============================================================ */

(function () {
  "use strict";

  /* ---------- مكتبة الملصقات (SVG) ---------- */
  const STICKERS = {
    "mosque-body": {
      label: "جسم المسجد",
      w: 220, h: 130,
      svg: `<svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="20" width="220" height="110" fill="#EFD8A8" stroke="#9A7530" stroke-width="2"/>
        <path d="M0 30 L110 5 L220 30" fill="#E5C57F" stroke="#9A7530" stroke-width="2" stroke-linejoin="round"/>
        <path d="M30 60 Q30 40 50 40 Q70 40 70 60 V100 H30 Z" fill="#9A7530"/>
        <path d="M85 60 Q85 40 105 40 Q125 40 125 60 V100 H85 Z" fill="#9A7530"/>
        <path d="M140 60 Q140 40 160 40 Q180 40 180 60 V100 H140 Z" fill="#9A7530"/>
      </svg>`,
    },
    "dome-big": {
      label: "قبة كبيرة",
      w: 130, h: 130,
      svg: `<svg viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 90 Q20 30 65 20 Q110 30 110 90 Z" fill="#2F7A52" stroke="#1F4A30" stroke-width="2.5" stroke-linejoin="round"/>
        <rect x="62" y="0" width="6" height="22" fill="#9A7530"/>
        <path d="M55 6 Q65 -2 75 6 Q70 0 65 8 Q60 0 55 6Z" fill="#C9A961"/>
        <rect x="20" y="90" width="90" height="10" fill="#1F4A30"/>
      </svg>`,
    },
    "dome-small": {
      label: "قبة صغيرة",
      w: 80, h: 80,
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 60 Q15 20 40 15 Q65 20 65 60 Z" fill="#5A3F94" stroke="#3A2860" stroke-width="2" stroke-linejoin="round"/>
        <rect x="37" y="0" width="6" height="18" fill="#C9A961"/>
        <rect x="15" y="60" width="50" height="6" fill="#3A2860"/>
      </svg>`,
    },
    "minaret": {
      label: "مئذنة",
      w: 60, h: 220,
      svg: `<svg viewBox="0 0 60 220" xmlns="http://www.w3.org/2000/svg">
        <rect x="22" y="0" width="3" height="20" fill="#9A7530"/>
        <path d="M16 22 Q30 14 44 22 Q40 18 30 24 Q20 18 16 22Z" fill="#C9A961"/>
        <path d="M14 24 Q14 18 30 16 Q46 18 46 24 V40 H14 Z" fill="#2F7A52" stroke="#1F4A30" stroke-width="1.5"/>
        <rect x="14" y="40" width="32" height="60" fill="#EFD8A8" stroke="#9A7530" stroke-width="1.5"/>
        <rect x="22" y="58" width="16" height="20" fill="#9A7530"/>
        <path d="M10 100 H50 V108 H10Z" fill="#9A7530"/>
        <rect x="18" y="108" width="24" height="100" fill="#EFD8A8" stroke="#9A7530" stroke-width="1.5"/>
        <rect x="26" y="130" width="8" height="30" fill="#9A7530"/>
      </svg>`,
    },
    "door": {
      label: "باب",
      w: 70, h: 110,
      svg: `<svg viewBox="0 0 70 110" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 110 V40 Q35 5 65 40 V110 Z" fill="#6A3C1A" stroke="#3A1F0A" stroke-width="2" stroke-linejoin="round"/>
        <path d="M15 110 V45 Q35 18 55 45 V110" fill="#8B5028" stroke="#3A1F0A" stroke-width="1.5" stroke-linejoin="round"/>
        <circle cx="50" cy="78" r="3" fill="#C9A961"/>
        <rect x="33" y="58" width="4" height="12" fill="#C9A961"/>
      </svg>`,
    },
    "window": {
      label: "نافذة",
      w: 60, h: 80,
      svg: `<svg viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 75 V35 Q30 5 55 35 V75 Z" fill="#1F4A30" stroke="#0F2A18" stroke-width="2" stroke-linejoin="round"/>
        <path d="M30 12 V70 M12 40 H48" stroke="#C9A961" stroke-width="2"/>
      </svg>`,
    },
    "palm": {
      label: "نخلة",
      w: 90, h: 180,
      svg: `<svg viewBox="0 0 90 180" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 180 Q42 100 45 40" stroke="#6A3C1A" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M45 40 Q10 30 5 50" stroke="#2F7A52" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M45 40 Q80 30 85 50" stroke="#2F7A52" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M45 40 Q15 50 12 75" stroke="#3F8A62" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M45 40 Q75 50 78 75" stroke="#3F8A62" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M45 40 Q25 60 30 85" stroke="#4FA572" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M45 40 Q65 60 60 85" stroke="#4FA572" stroke-width="5" fill="none" stroke-linecap="round"/>
        <circle cx="42" cy="48" r="3" fill="#9A7530"/>
        <circle cx="48" cy="50" r="3" fill="#9A7530"/>
        <circle cx="46" cy="54" r="3" fill="#9A7530"/>
      </svg>`,
    },
    "lantern": {
      label: "فانوس",
      w: 50, h: 90,
      svg: `<svg viewBox="0 0 50 90" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 0 V12" stroke="#9A7530" stroke-width="2"/>
        <rect x="18" y="12" width="14" height="6" fill="#9A7530"/>
        <path d="M25 18 Q5 25 5 50 Q5 75 25 80 Q45 75 45 50 Q45 25 25 18Z" fill="#FFE9A8" stroke="#9A7530" stroke-width="2"/>
        <path d="M15 30 V70 M25 25 V80 M35 30 V70" stroke="#9A7530" stroke-width="1.5" opacity="0.5"/>
        <rect x="18" y="80" width="14" height="6" fill="#9A7530"/>
        <rect x="20" y="86" width="10" height="4" fill="#6A3C1A"/>
      </svg>`,
    },
    "crescent": {
      label: "هلال ونجمة",
      w: 70, h: 70,
      svg: `<svg viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 10 A25 25 0 1 0 40 60 A20 20 0 1 1 40 10Z" fill="#C9A961" stroke="#9A7530" stroke-width="2"/>
        <path d="M58 22 L62 32 L72 32 L64 38 L66 48 L58 42 L50 48 L52 38 L44 32 L54 32 Z" fill="#FFE9A8" stroke="#9A7530" stroke-width="1.5" stroke-linejoin="round" transform="translate(-8 -6)"/>
      </svg>`,
    },
    "cloud": {
      label: "سحابة",
      w: 100, h: 50,
      svg: `<svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="25" cy="32" rx="20" ry="14" fill="#FBFAF6"/>
        <ellipse cx="50" cy="25" rx="22" ry="16" fill="#FBFAF6"/>
        <ellipse cx="75" cy="32" rx="20" ry="14" fill="#FBFAF6"/>
        <path d="M5 42 Q50 50 95 42" stroke="#D9D5C8" stroke-width="1.5" fill="none"/>
      </svg>`,
    },
    "star": {
      label: "نجمة",
      w: 50, h: 50,
      svg: `<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 4 L30 18 L45 19 L33 28 L37 42 L25 34 L13 42 L17 28 L5 19 L20 18Z" fill="#FFE9A8" stroke="#9A7530" stroke-width="2" stroke-linejoin="round"/>
      </svg>`,
    },
    "carpet": {
      label: "سجادة",
      w: 140, h: 50,
      svg: `<svg viewBox="0 0 140 50" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="10" width="130" height="32" fill="#B53B3B" stroke="#7A2424" stroke-width="2"/>
        <path d="M10 14 H130 M10 38 H130" stroke="#FFE9A8" stroke-width="1.5"/>
        <path d="M70 10 V42" stroke="#FFE9A8" stroke-width="1.5"/>
        <path d="M0 12 L5 22 L0 32 M140 12 L135 22 L140 32" stroke="#7A2424" stroke-width="2" fill="none"/>
      </svg>`,
    },
  };

  /* ---------- حالة ---------- */
  const STORAGE_KEY = "mk_builder_state_v1";
  const state = Storage.get(STORAGE_KEY, {
    saved: [],
    muted: false,
  });
  AudioBus.setMuted(state.muted);

  let scene = [];     // [{id, type, x, y, scale, rot}]
  let nextId = 1;
  let selectedId = null;

  /* ---------- DOM ---------- */
  const sceneEl = document.getElementById("scene");
  const paletteEl = document.getElementById("palette");
  const countEl = document.getElementById("sticker-count");

  /* ============================================================
     رسم لوحة الملصقات
     ============================================================ */
  function renderPalette() {
    paletteEl.innerHTML = "";
    Object.entries(STICKERS).forEach(([type, def]) => {
      const item = document.createElement("button");
      item.className = "palette-item";
      item.title = def.label;
      item.innerHTML = def.svg + `<span class="pal-label">${def.label}</span>`;
      item.addEventListener("click", () => addSticker(type));
      paletteEl.appendChild(item);
    });
  }

  /* ============================================================
     إضافة ملصق
     ============================================================ */
  function addSticker(type) {
    const def = STICKERS[type];
    const sceneRect = sceneEl.getBoundingClientRect();
    // وضع عشوائي حول المنتصف
    const x = (sceneRect.width - def.w) / 2 + (Math.random() - 0.5) * 80;
    const y = (sceneRect.height - def.h) / 2 + (Math.random() - 0.5) * 60;
    const item = {
      id: nextId++,
      type,
      x: Math.max(0, Math.min(x, sceneRect.width - def.w)),
      y: Math.max(0, Math.min(y, sceneRect.height - def.h)),
      scale: 1,
      rot: 0,
    };
    scene.push(item);
    renderScene();
    selectSticker(item.id);
    AudioBus.pop();
  }

  /* ============================================================
     رسم الساحة
     ============================================================ */
  function renderScene() {
    // مسح الملصقات الحالية لكن الاحتفاظ بالتلميح
    const hint = sceneEl.querySelector(".scene-empty-hint");
    sceneEl.innerHTML = "";
    if (hint) sceneEl.appendChild(hint);

    scene.forEach(it => {
      const def = STICKERS[it.type];
      const el = document.createElement("div");
      el.className = "sticker" + (selectedId === it.id ? " selected" : "");
      el.dataset.id = it.id;
      el.style.left = it.x + "px";
      el.style.top  = it.y + "px";
      el.style.width  = (def.w * it.scale) + "px";
      el.style.height = (def.h * it.scale) + "px";
      el.style.transform = `rotate(${it.rot}deg)`;
      el.innerHTML = def.svg + `
        <div class="ctrls">
          <button data-act="scale-up"   title="تكبير">+</button>
          <button data-act="scale-down" title="تصغير">−</button>
          <button data-act="rot"        title="تدوير">↻</button>
          <button data-act="del"        class="danger" title="حذف">×</button>
        </div>
      `;
      bindStickerEvents(el, it);
      sceneEl.appendChild(el);
    });

    sceneEl.classList.toggle("has-stickers", scene.length > 0);
    countEl.textContent = scene.length;
  }

  /* ============================================================
     أحداث ملصق
     ============================================================ */
  function bindStickerEvents(el, it) {
    // نقر للاختيار
    el.addEventListener("pointerdown", e => {
      if (e.target.closest(".ctrls")) return; // أزرار التحكم تتجاهَل
      selectSticker(it.id);
      startDrag(e, el, it);
    });

    // أزرار التحكم
    el.querySelectorAll(".ctrls button").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const act = btn.dataset.act;
        if (act === "del") {
          scene = scene.filter(s => s.id !== it.id);
          selectedId = null;
          renderScene();
          AudioBus.tick(440);
        } else if (act === "scale-up") {
          it.scale = Math.min(2, it.scale + 0.15);
          renderScene();
        } else if (act === "scale-down") {
          it.scale = Math.max(0.4, it.scale - 0.15);
          renderScene();
        } else if (act === "rot") {
          it.rot = (it.rot + 15) % 360;
          renderScene();
        }
      });
    });
  }

  function selectSticker(id) {
    selectedId = id;
    document.querySelectorAll(".sticker").forEach(el => {
      el.classList.toggle("selected", Number(el.dataset.id) === id);
      // رفع المحدد للأعلى
      if (Number(el.dataset.id) === id) el.style.zIndex = 20;
      else el.style.zIndex = 2;
    });
  }

  /* ============================================================
     السحب
     ============================================================ */
  function startDrag(e, el, it) {
    el.setPointerCapture(e.pointerId);
    el.classList.add("dragging");
    const sceneRect = sceneEl.getBoundingClientRect();
    const offsetX = e.clientX - sceneRect.left - it.x;
    const offsetY = e.clientY - sceneRect.top  - it.y;

    function onMove(ev) {
      const def = STICKERS[it.type];
      const w = def.w * it.scale, h = def.h * it.scale;
      let nx = ev.clientX - sceneRect.left - offsetX;
      let ny = ev.clientY - sceneRect.top  - offsetY;
      nx = Math.max(-w * 0.3, Math.min(nx, sceneRect.width  - w * 0.7));
      ny = Math.max(-h * 0.3, Math.min(ny, sceneRect.height - h * 0.7));
      it.x = nx; it.y = ny;
      el.style.left = nx + "px";
      el.style.top  = ny + "px";
    }
    function onUp() {
      el.releasePointerCapture(e.pointerId);
      el.classList.remove("dragging");
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
    }
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
  }

  /* ============================================================
     لوحة المفاتيح
     ============================================================ */
  document.addEventListener("keydown", e => {
    if (!selectedId) return;
    const it = scene.find(s => s.id === selectedId);
    if (!it) return;
    if (e.key === "Delete" || e.key === "Backspace") {
      e.preventDefault();
      scene = scene.filter(s => s.id !== selectedId);
      selectedId = null;
      renderScene();
    }
    if (e.key === "ArrowUp")    { it.y -= 4; renderScene(); selectSticker(it.id); }
    if (e.key === "ArrowDown")  { it.y += 4; renderScene(); selectSticker(it.id); }
    if (e.key === "ArrowLeft")  { it.x -= 4; renderScene(); selectSticker(it.id); }
    if (e.key === "ArrowRight") { it.x += 4; renderScene(); selectSticker(it.id); }
  });

  // نقر على ساحة فارغة → إلغاء التحديد
  sceneEl.addEventListener("pointerdown", e => {
    if (e.target === sceneEl || e.target.classList.contains("scene-empty-hint")) {
      selectedId = null;
      renderScene();
    }
  });

  /* ============================================================
     أزرار الإجراءات
     ============================================================ */
  document.getElementById("clear-btn").addEventListener("click", () => {
    if (scene.length === 0) return;
    if (confirm("هل تريد مسح كل الملصقات؟")) {
      scene = []; selectedId = null; renderScene();
    }
  });

  document.getElementById("save-btn").addEventListener("click", () => {
    if (scene.length === 0) return;
    state.saved.unshift({
      at: Date.now(),
      data: JSON.parse(JSON.stringify(scene)),
    });
    if (state.saved.length > 6) state.saved.pop();
    Storage.set(STORAGE_KEY, state);
    AudioBus.success();
    Particles.fire(60);
    renderSaved();
    document.getElementById("save-flash").classList.add("show");
    setTimeout(() => document.getElementById("save-flash").classList.remove("show"), 1400);
  });

  function renderSaved() {
    const wrap = document.getElementById("saved-list");
    if (state.saved.length === 0) {
      wrap.innerHTML = `<div style="grid-column:1/-1; text-align:center; color:var(--muted); font-size:12px; padding:var(--s-3);">لم تحفظ مسجداً بعد</div>`;
      return;
    }
    wrap.innerHTML = state.saved.map((s, i) => `
      <div class="saved-card" data-i="${i}">
        <span class="saved-count">${s.data.length}</span>
        <div class="saved-thumb"></div>
        مسجد ${state.saved.length - i}
      </div>
    `).join("");
    wrap.querySelectorAll(".saved-card").forEach(c => {
      c.addEventListener("click", () => {
        const i = +c.dataset.i;
        scene = JSON.parse(JSON.stringify(state.saved[i].data));
        // تجديد nextId
        nextId = scene.reduce((m, s) => Math.max(m, s.id), 0) + 1;
        selectedId = null;
        renderScene();
      });
    });
  }

  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط كامل المعرض المحفوظ؟")) {
      Storage.clear(STORAGE_KEY); location.reload();
    }
  });

  const muteBtn = document.getElementById("mute-btn");
  AudioBus.bindButton(muteBtn, v => { state.muted = v; Storage.set(STORAGE_KEY, state); });

  /* ---------- تهيئة ---------- */
  renderPalette();
  renderScene();
  renderSaved();
})();
