/* ============================================================
   STAR TELESCOPE — منظار النجوم
   Parallax sky pan with reticle observation
   ============================================================ */

(function () {
  "use strict";

  // Targets are placed by NORMALIZED x position on the "near" layer (0..1).
  const TARGETS = [
    {
      id: "shams",
      name: "الشَّمس",
      x: 0.08, y: 0.30, size: 22, color: "#FFE9A8",
      ayah: "«وَالشَّمْسِ وَضُحَاهَا»",
      ref: "الشمس · 1",
      desc: "سِراجُ النَّهار. أَكبَرُ نَجمٍ يَدورُ في فَلَكِنا.",
    },
    {
      id: "qamar",
      name: "القَمَر",
      x: 0.22, y: 0.20, size: 18, color: "#CFE3F2",
      ayah: "«وَجَعَلَ الْقَمَرَ فِيهِنَّ نُورًا»",
      ref: "نوح · 16",
      desc: "ضَوءُ اللَّيل. يَعكِسُ نورَ الشَّمسِ إلَينا.",
    },
    {
      id: "zuhra",
      name: "الزُّهَرَة",
      x: 0.40, y: 0.42, size: 10, color: "#FFD9C2",
      ayah: "«فَلَا أُقْسِمُ بِالْخُنَّسِ · الْجَوَارِ الْكُنَّسِ»",
      ref: "التكوير · 15-16",
      desc: "كَوكَبُ الصَّباحِ، أَلمَعُ ما يُرى بَعدَ الشَّمسِ والقَمَر.",
    },
    {
      id: "thurayya",
      name: "الثُّرَيّا",
      x: 0.56, y: 0.18, size: 7, color: "#fff", cluster: true,
      ayah: "«قَالَ ﷺ: لَو كَانَ الإِيمَانُ عِندَ الثُّرَيَّا، لَنَالَهُ رِجَالٌ مِن هَؤُلَاءِ»",
      ref: "البخاري ومسلم",
      desc: "مَجموعَةُ نُجومٍ صَغيرَة كالعُنقود، تُشيرُ إِلى مَوسِمٍ في السَّنَة.",
    },
    {
      id: "jawza",
      name: "الجَوزاء",
      x: 0.72, y: 0.35, size: 9, color: "#FFE9A8", constellation: true,
      ayah: "«وَالسَّمَاءِ ذَاتِ الْبُرُوجِ»",
      ref: "البروج · 1",
      desc: "بُرجٌ في السَّماء يُعرَفُ بِنَجمَيهِ اللّامِعَين كَكَتِفَين.",
    },
    {
      id: "shi3ra",
      name: "الشِّعرى",
      x: 0.88, y: 0.50, size: 11, color: "#E0D5F2",
      ayah: "«وَأَنَّهُ هُوَ رَبُّ الشِّعْرَىٰ»",
      ref: "النجم · 49",
      desc: "أَلمَعُ نَجمٍ نَراهُ في سَمائِنا. ذُكِرَ في القُرآنِ بِاسمِه.",
    },
  ];

  const STORAGE_KEY = "mk_telescope_v1";
  const STORE = Storage.get(STORAGE_KEY, { bestPoints: 0, rounds: 0 });

  const stage = document.getElementById("ts-stage");
  const layerFar = document.getElementById("layer-far");
  const layerMid = document.getElementById("layer-mid");
  const layerNear = document.getElementById("layer-near");

  // pan position in normalized [0..1]
  let pan = 0.0;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartPan = 0;
  let stageW = 600;        // populated on resize
  let lockedTarget = null;
  const FOUND = new Set();
  let revealTimer = null;
  let points = 0;

  /* ============ Build sky ============ */
  function buildLayers() {
    // Far layer: many tiny stars
    layerFar.innerHTML = "";
    for (let i = 0; i < 120; i++) {
      const s = document.createElement("span");
      s.className = "ts-star" + (Math.random() < 0.15 ? " twinkle" : "");
      const size = 1 + Math.random() * 1.5;
      s.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}%;
        top:${Math.random() * 95}%;
        opacity:${0.35 + Math.random() * 0.5};
      `;
      layerFar.appendChild(s);
    }

    // Mid layer: bigger + warmer
    layerMid.innerHTML = "";
    for (let i = 0; i < 70; i++) {
      const s = document.createElement("span");
      const cls = Math.random() < 0.2 ? "warm" : (Math.random() < 0.4 ? "cool" : "");
      s.className = `ts-star ${cls}` + (Math.random() < 0.25 ? " twinkle" : "");
      const size = 1.5 + Math.random() * 2.5;
      s.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}%;
        top:${Math.random() * 90}%;
        opacity:${0.55 + Math.random() * 0.45};
      `;
      layerMid.appendChild(s);
    }

    // Near layer: named targets + their attendant stars
    layerNear.innerHTML = "";
    TARGETS.forEach(t => {
      const wrap = document.createElement("div");
      wrap.className = "ts-target";
      wrap.dataset.id = t.id;
      wrap.style.cssText = `
        left:${t.x * 100}%; top:${t.y * 100}%;
        transform: translate(-50%, -50%);
        color:${t.color};
      `;

      // Build body: maybe constellation/cluster
      if (t.cluster) {
        // tiny cluster of 6 stars
        const clusterWrap = document.createElement("div");
        clusterWrap.style.cssText = `position:relative; width:${t.size * 4}px; height:${t.size * 3}px;`;
        const offsets = [[0,0],[10,4],[18,0],[6,12],[16,14],[22,8]];
        offsets.forEach(([dx, dy]) => {
          const dot = document.createElement("span");
          dot.className = "ts-star";
          dot.style.cssText = `
            width:${t.size}px; height:${t.size}px;
            background:${t.color}; box-shadow: 0 0 ${t.size * 2}px ${t.color};
            position:absolute; left:${dx}px; top:${dy}px;
          `;
          clusterWrap.appendChild(dot);
        });
        wrap.appendChild(clusterWrap);
        const glow = document.createElement("span");
        glow.className = "glow";
        glow.style.cssText = `inset:-12px; width:auto; height:auto;`;
        wrap.appendChild(glow);
      } else if (t.constellation) {
        // 5-star pattern with connecting lines
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("width", t.size * 6);
        svg.setAttribute("height", t.size * 4);
        svg.style.display = "block";
        const pts = [[10,10],[28,16],[42,8],[20,32],[44,28]];
        const lines = [[0,1],[1,2],[1,3],[1,4]];
        lines.forEach(([a, b]) => {
          const line = document.createElementNS(svgNS, "line");
          line.setAttribute("x1", pts[a][0]); line.setAttribute("y1", pts[a][1]);
          line.setAttribute("x2", pts[b][0]); line.setAttribute("y2", pts[b][1]);
          line.setAttribute("stroke", "rgba(255,255,255,0.25)");
          line.setAttribute("stroke-width", "1");
          svg.appendChild(line);
        });
        pts.forEach(([x, y], i) => {
          const c = document.createElementNS(svgNS, "circle");
          c.setAttribute("cx", x); c.setAttribute("cy", y);
          c.setAttribute("r", i === 1 ? t.size / 2 : t.size / 3);
          c.setAttribute("fill", t.color);
          c.style.filter = `drop-shadow(0 0 ${t.size}px ${t.color})`;
          svg.appendChild(c);
        });
        wrap.appendChild(svg);
        const glow = document.createElement("span");
        glow.className = "glow";
        glow.style.cssText = `inset:-12px; width:auto; height:auto;`;
        wrap.appendChild(glow);
      } else {
        const body = document.createElement("span");
        body.className = "body";
        body.style.cssText = `width:${t.size}px; height:${t.size}px;`;
        wrap.appendChild(body);
        const glow = document.createElement("span");
        glow.className = "glow";
        glow.style.cssText = `width:${t.size * 4}px; height:${t.size * 4}px;`;
        wrap.appendChild(glow);
      }

      const nm = document.createElement("span");
      nm.className = "nm";
      nm.textContent = t.name;
      wrap.appendChild(nm);

      // direct click also opens observation if in scope
      wrap.addEventListener("click", (e) => {
        e.stopPropagation();
        if (FOUND.has(t.id)) return;
        if (lockedTarget && lockedTarget.id === t.id) observe();
      });

      layerNear.appendChild(wrap);
    });
  }

  /* ============ Pan / layer transforms ============ */
  function applyTransforms() {
    // Near layer (factor 1.0): maximum shift = stage width
    const nearShift = -pan * stageW; // pan: 0 at far-right, 1 at far-left
    const midShift = nearShift * 0.65;
    const farShift = nearShift * 0.3;

    layerNear.style.transform = `translateX(${nearShift}px)`;
    layerMid.style.transform = `translateX(${midShift}px)`;
    layerFar.style.transform = `translateX(${farShift}px)`;

    // Compass needle: pan 0 = right (RTL "start"), pan 1 = left
    const needle = document.getElementById("compass-needle");
    if (needle) needle.style.right = `${pan * 100}%`;

    // Angle indicator
    const angle = Math.round(pan * 360);
    document.getElementById("ts-angle").textContent = toArDigits(angle) + "°";

    detectLock();
  }

  function toArDigits(n) {
    return String(n).replace(/[0-9]/g, d => "٠١٢٣٤٥٦٧٨٩"[d]);
  }

  /* ============ Lock detection ============ */
  function detectLock() {
    // Reticle is at screen center. Find target whose screen X is closest.
    let bestT = null;
    let bestDist = Infinity;
    TARGETS.forEach(t => {
      // Target's normalized x on near-layer is t.x. The near-layer pans [0..stageW] across [pan 0..1].
      // Near-layer width is 200% of stage, so target screen-x = t.x * (stageW * 2) - pan * stageW
      const screenX = t.x * (stageW * 2) - pan * stageW;
      const dx = screenX - stageW / 2;
      const dy = (t.y - 0.5) * stage.clientHeight; // approximate; vertical fixed
      const dist = Math.hypot(dx, dy);
      const el = layerNear.querySelector(`.ts-target[data-id="${t.id}"]`);
      if (!el) return;
      const inScope = dist < 70 && !FOUND.has(t.id);
      el.classList.toggle("in-scope", inScope);
      if (inScope && dist < bestDist) {
        bestDist = dist;
        bestT = t;
      }
    });

    const scopeEl = document.querySelector(".ts-scope");
    const observeBtn = document.getElementById("btn-observe");
    const tag = document.getElementById("scope-tag");
    const near = document.getElementById("ts-near");
    if (bestT) {
      lockedTarget = bestT;
      scopeEl.classList.add("locked");
      observeBtn.disabled = false;
      tag.textContent = `قُربَ ${bestT.name}`;
      near.textContent = bestT.name;
    } else {
      lockedTarget = null;
      scopeEl.classList.remove("locked");
      observeBtn.disabled = true;
      tag.textContent = "اِسحَب أو حَرِّك";
      // hint: nearest unfound target name
      const unfound = TARGETS.filter(t => !FOUND.has(t.id));
      if (unfound.length > 0) {
        let closest = null, cdist = Infinity;
        unfound.forEach(t => {
          const screenX = t.x * (stageW * 2) - pan * stageW;
          const dx = Math.abs(screenX - stageW / 2);
          if (dx < cdist) { cdist = dx; closest = t; }
        });
        near.textContent = closest ? `${closest.name} (${Math.round(cdist)}px)` : "—";
      } else {
        near.textContent = "—";
      }
    }
  }

  /* ============ Observe ============ */
  function observe() {
    if (!lockedTarget || FOUND.has(lockedTarget.id)) return;
    FOUND.add(lockedTarget.id);
    points += 100;

    // Card reveal
    const reveal = document.getElementById("ts-reveal");
    reveal.innerHTML = `
      <div class="card">
        <span class="label">رَصدٌ جَديد</span>
        <h4>${lockedTarget.name}</h4>
        <div class="ayah">${lockedTarget.ayah}<br/><small style="font-family:var(--font-en); color:var(--muted); font-size:11px;">${lockedTarget.ref}</small></div>
        <div class="desc">${lockedTarget.desc}</div>
      </div>
    `;
    if (revealTimer) clearTimeout(revealTimer);
    revealTimer = setTimeout(() => { reveal.innerHTML = ""; }, 6000);

    // Mark target as found
    const el = layerNear.querySelector(`.ts-target[data-id="${lockedTarget.id}"]`);
    if (el) {
      el.classList.add("found");
      el.classList.remove("in-scope");
    }

    AudioBus.success();
    Particles.fire(40, { colors: ["#FFE9A8","#CFE3F2","#FFD9C2"] });

    renderCatalog();
    updateHUD();
    detectLock();

    if (FOUND.size === TARGETS.length) {
      setTimeout(() => finishRound(), 800);
    }
  }

  function renderCatalog() {
    const root = document.getElementById("catalog");
    root.innerHTML = "";
    TARGETS.forEach(t => {
      const found = FOUND.has(t.id);
      const row = document.createElement("div");
      row.className = "ts-cat-row" + (found ? " found" : "");
      row.innerHTML = `
        <span class="dot"></span>
        <span class="nm">${found ? t.name : "؟"}<small>${found ? t.ref : "غَير مَرصود بَعد"}</small></span>
        <span class="pt">${found ? "+100" : "·"}</span>
      `;
      root.appendChild(row);
    });
    document.getElementById("cat-pill").textContent = `${FOUND.size} / ${TARGETS.length}`;
  }

  function updateHUD() {
    document.getElementById("ts-found").textContent = FOUND.size;
    document.getElementById("ts-points").textContent = points;
    document.getElementById("best").textContent = STORE.bestPoints > 0 ? `${STORE.bestPoints} نقطة` : "—";
  }

  function finishRound() {
    if (points > STORE.bestPoints) STORE.bestPoints = points;
    STORE.rounds++;
    Storage.set(STORAGE_KEY, STORE);
    Particles.fire(180, { colors: ["#FFE9A8","#CFE3F2","#E0D5F2","#FFD9C2","#fff"] });
    AudioBus.success();

    const list = TARGETS.map(t =>
      `<div style="display:flex; gap:8px; padding: 5px 0; font-size: 12px; border-bottom: 1px dashed var(--line);">
        <span style="width:14px; height:14px; border-radius:50%; background:${t.color}; box-shadow:0 0 6px ${t.color}; flex-shrink:0; margin-top:4px;"></span>
        <span><strong>${t.name}</strong> — <span style="color:var(--muted); font-family:'Amiri',serif;">${t.ayah}</span></span>
      </div>`
    ).join("");

    document.getElementById("done-summary").innerHTML = `
      <div style="display:flex; gap:8px; justify-content:center; margin-bottom: var(--s-3);">
        <span style="padding:6px 12px; background:var(--mint); color:var(--mint-ink); border-radius:var(--r-pill); font-weight:800; font-size:12px;">${FOUND.size}/${TARGETS.length} مَرصودَة</span>
        <span style="padding:6px 12px; background:var(--butter); color:var(--butter-ink); border-radius:var(--r-pill); font-weight:800; font-size:12px;">+${points} نقطة</span>
      </div>
      <div>${list}</div>
      <div style="margin-top: var(--s-3); padding: 10px; background: var(--bg-soft); border-radius: 8px; font-size: 12px; line-height: 1.7;">
        قَسَمَ اللهُ تَعالى بِالشَّمسِ والقَمَرِ والشِّعرى. والنَّظَرُ في السَّماءِ يُورِثُ تَعظيمَ الخالِق.
      </div>
    `;
    setTimeout(() => Modal.open("done-modal"), 800);
  }

  /* ============ Drag/scroll ============ */
  function setPan(p) {
    pan = Math.max(0, Math.min(1, p));
    applyTransforms();
  }
  function nudgePan(delta) {
    setPan(pan + delta);
  }

  // Pointer drag
  stage.addEventListener("pointerdown", (e) => {
    isDragging = true;
    dragStartX = e.clientX;
    dragStartPan = pan;
    stage.setPointerCapture(e.pointerId);
    document.getElementById("scope-tag").textContent = "جارٍ التَّحريك…";
  });
  stage.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    // RTL: drag right → pan decreases (sky moves right)
    // We want: drag left → pan increases (we explore westward)
    const dx = e.clientX - dragStartX;
    const newPan = dragStartPan - dx / stageW;
    setPan(newPan);
  });
  ["pointerup", "pointercancel", "pointerleave"].forEach(ev => {
    stage.addEventListener(ev, () => { isDragging = false; });
  });

  // Wheel — only when stage hovered
  stage.addEventListener("wheel", (e) => {
    if (Math.abs(e.deltaX) + Math.abs(e.deltaY) < 1) return;
    e.preventDefault();
    nudgePan((e.deltaY + e.deltaX) * 0.0008);
  }, { passive: false });

  // Buttons
  document.getElementById("btn-left").addEventListener("click", () => { nudgePan(-0.08); AudioBus.tick(560); });
  document.getElementById("btn-right").addEventListener("click", () => { nudgePan(0.08); AudioBus.tick(620); });
  document.getElementById("btn-observe").addEventListener("click", observe);

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { nudgePan(-0.06); AudioBus.tick(560); }
    else if (e.key === "ArrowRight") { nudgePan(0.06); AudioBus.tick(620); }
    else if (e.key === " ") { if (!document.getElementById("btn-observe").disabled) { e.preventDefault(); observe(); } }
  });

  // Resize
  function onResize() {
    stageW = stage.clientWidth || 600;
    applyTransforms();
  }
  window.addEventListener("resize", onResize);

  /* ============ Bind common ============ */
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

  /* ============ Init ============ */
  function newRound() {
    FOUND.clear();
    points = 0;
    pan = 0.0;
    buildLayers();
    onResize();
    renderCatalog();
    updateHUD();
    document.getElementById("ts-reveal").innerHTML = "";
  }
  newRound();
})();
