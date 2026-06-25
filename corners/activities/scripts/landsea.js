/* ============================================================
   LAND/SEA — فرز البر والبحر
   ============================================================ */

(function () {
  "use strict";

  const ALL = [
    { e: "🦒", n: "زَرافة", k: "land" },
    { e: "🐫", n: "جَمَل",   k: "land" },
    { e: "🦁", n: "أَسَد",   k: "land" },
    { e: "🐘", n: "فِيل",    k: "land" },
    { e: "🐎", n: "حِصان",   k: "land" },
    { e: "🐑", n: "خَروف",   k: "land" },
    { e: "🦌", n: "غَزال",   k: "land" },
    { e: "🐇", n: "أَرنَب",   k: "land" },
    { e: "🐺", n: "ذِئب",     k: "land" },
    { e: "🐺", n: "ثَعلَب",   k: "land" },

    { e: "🐬", n: "دُولفين", k: "sea" },
    { e: "🐳", n: "حُوت",    k: "sea" },
    { e: "🐠", n: "سَمَكَة",  k: "sea" },
    { e: "🐙", n: "أُخطُبوط", k: "sea" },
    { e: "🦑", n: "حَبَّار",   k: "sea" },
    { e: "🦈", n: "قِرش",    k: "sea" },
    { e: "🦞", n: "كَركَند",  k: "sea" },
    { e: "🐟", n: "تُونة",   k: "sea" },
    { e: "🦐", n: "جَمبَري",  k: "sea" },
    { e: "🪸", n: "مَرجان",  k: "sea" },

    { e: "🐸", n: "ضِفدَع",   k: "both" },
    { e: "🐢", n: "سُلَحفاة", k: "both" },
    { e: "🐊", n: "تِمساح",  k: "both" },
    { e: "🦆", n: "بَطّة",    k: "both" },
    { e: "🦦", n: "قُندُس",   k: "both" },
    { e: "🦭", n: "فُقمة",    k: "both" },
  ];

  const STORAGE_KEY = "mk_landsea_v1";
  const STORE = Storage.get(STORAGE_KEY, { rounds: [], bestAcc: 0 });

  let round = 1;
  let pool = [];
  let correct = 0;
  let wrong = 0;
  let selected = null;
  let dragging = null;
  let armedBucket = null;

  /* ============ Build round ============ */
  function newRound() {
    // 12 مَخلوقاً مَع تَوزيعٍ مُتَوازِن
    const land = shuffle(ALL.filter(a => a.k === "land")).slice(0, 4);
    const sea  = shuffle(ALL.filter(a => a.k === "sea")).slice(0, 4);
    const both = shuffle(ALL.filter(a => a.k === "both")).slice(0, 4);
    pool = shuffle([...land, ...sea, ...both]).map((c, i) => ({ ...c, id: round*100 + i, placed: false }));
    correct = 0; wrong = 0; selected = null;
    ["sea","land","both"].forEach(k => document.getElementById("count-"+k).textContent = "0");
    render(); updateHUD();
  }

  function shuffle(a) {
    const arr = a.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  /* ============ Render ============ */
  function render() {
    const root = document.getElementById("creatures");
    root.innerHTML = "";
    pool.filter(c => !c.placed).forEach(c => {
      const el = document.createElement("div");
      el.className = "creature" + (selected === c.id ? " selected" : "");
      el.setAttribute("draggable", "true");
      el.innerHTML = `<span class="e">${c.e}</span><span class="nm">${c.n}</span>`;
      el.addEventListener("click", () => selectCreature(c.id));
      el.addEventListener("dragstart", e => {
        dragging = c.id;
        el.classList.add("dragging");
        try { e.dataTransfer.setData("text/plain", String(c.id)); } catch {}
      });
      el.addEventListener("dragend", () => {
        dragging = null;
        el.classList.remove("dragging");
      });
      root.appendChild(el);
    });
  }

  function selectCreature(id) {
    selected = selected === id ? null : id;
    armBuckets(selected !== null);
    render();
    AudioBus.pop();
  }
  function armBuckets(on) {
    document.querySelectorAll(".bucket").forEach(b => b.classList.toggle("armed", on));
  }

  /* ============ Place ============ */
  function place(id, bucket) {
    const c = pool.find(x => x.id === id);
    if (!c || c.placed) return;
    const right = c.k === bucket;
    const bEl = document.getElementById("bucket-"+bucket);
    if (right) {
      c.placed = true; correct++;
      const ctEl = document.getElementById("count-"+bucket);
      ctEl.textContent = Number(ctEl.textContent) + 1;
      bEl.classList.add("flash-good");
      AudioBus.success();
      // animate the creature out
      const creatureEl = [...document.querySelectorAll(".creature")].find(el => {
        return el.querySelector(".nm")?.textContent === c.n && !el.classList.contains("gone");
      });
      if (creatureEl) {
        creatureEl.classList.add("gone");
        setTimeout(() => { selected = null; armBuckets(false); render(); }, 350);
      } else {
        selected = null; armBuckets(false); render();
      }
    } else {
      wrong++;
      bEl.classList.add("flash-bad");
      AudioBus.fail();
    }
    setTimeout(() => bEl.classList.remove("flash-good", "flash-bad"), 480);

    updateHUD();
    if (pool.every(x => x.placed)) finishRound();
  }

  function updateHUD() {
    const left = pool.filter(c => !c.placed).length;
    document.getElementById("ls-correct").textContent = correct;
    document.getElementById("ls-wrong").textContent = wrong;
    document.getElementById("ls-left").textContent = left;
    document.getElementById("ls-round").textContent = round;
    document.getElementById("best").textContent =
      STORE.bestAcc > 0 ? `${STORE.bestAcc}%` : "—";
  }

  function finishRound() {
    const acc = Math.round(correct / (correct + wrong) * 100);
    if (acc > STORE.bestAcc) STORE.bestAcc = acc;
    STORE.rounds.push({ round, correct, wrong, acc, date: new Date().toLocaleDateString("ar-EG", { day: "numeric", month: "short" }) });
    if (STORE.rounds.length > 10) STORE.rounds.shift();
    Storage.set(STORAGE_KEY, STORE);

    AudioBus.success();
    Particles.fire(120, { colors: ["#CDEBD7","#CFE3F2","#FFE9A8","#FFD9C2"] });

    document.getElementById("done-summary").innerHTML = `
      <div>أَصَبتَ <strong>${correct}</strong> وأَخطَأتَ <strong>${wrong}</strong>. الدِّقَّة: <strong>${acc}%</strong>.</div>
      <div style="margin-top: var(--s-3); padding: 10px; background: var(--bg-soft); border-radius: 8px; font-size: 13px;">
        قال تعالى: «وَفِي خَلْقِ الْأَنْعَامِ وَالْإِبِلِ كَيْفَ خُلِقَتْ» — كلُّ مَخلوقٍ آيَة.
      </div>
    `;
    setTimeout(() => Modal.open("done-modal"), 500);
    renderRecs();
  }

  function renderRecs() {
    const root = document.getElementById("recs");
    root.innerHTML = "";
    if (STORE.rounds.length === 0) {
      const e = document.createElement("div");
      e.className = "empty"; e.textContent = "لا جَولاتٍ بَعد.";
      root.appendChild(e); return;
    }
    STORE.rounds.slice().reverse().forEach(r => {
      const div = document.createElement("div");
      div.className = "rec";
      div.innerHTML = `
        <span class="nm">جَولة #${r.round}</span>
        <span style="font-size:11px; color:var(--muted);">${r.date}</span>
        <span class="score">${r.acc}%</span>
      `;
      root.appendChild(div);
    });
    document.getElementById("rec-pill").textContent = STORE.rounds.length;
  }

  /* ============ Drag & drop on buckets ============ */
  function bindBuckets() {
    document.querySelectorAll(".bucket").forEach(b => {
      const bucket = b.dataset.bucket;
      b.addEventListener("click", () => {
        if (selected != null) place(selected, bucket);
      });
      b.addEventListener("dragover", e => { e.preventDefault(); b.classList.add("hover-target"); });
      b.addEventListener("dragleave", () => b.classList.remove("hover-target"));
      b.addEventListener("drop", e => {
        e.preventDefault();
        b.classList.remove("hover-target");
        if (dragging != null) place(dragging, bucket);
        else if (selected != null) place(selected, bucket);
      });
    });
  }

  /* ============ Bind ============ */
  document.getElementById("btn-shuffle").addEventListener("click", () => {
    pool = shuffle(pool); render(); AudioBus.tick(580);
  });
  document.getElementById("btn-newround").addEventListener("click", () => {
    round++; newRound();
  });
  document.getElementById("done-next").addEventListener("click", () => {
    Modal.close("done-modal"); round++; setTimeout(newRound, 300);
  });
  Modal.bindClose("done-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY); location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ Start ============ */
  bindBuckets();
  newRound();
  renderRecs();
})();
