/* ============================================================
   FAMILY — شجرة العائلة النبوية
   ضَع كلَّ اسمٍ في موضعه الصحيح من نَسَب النبيِّ ﷺ وأهلِ بيته.
   ============================================================ */

(function () {
  "use strict";

  /* العُقَد: id, role, الاسم الصحيح (أو fixed), التِّيَر (الصفّ) */
  const TIERS = [
    [ { id: "grandfather", role: "الجَدّ", name: "عبد المطّلب" } ],
    [ { id: "father", role: "الأب", name: "عبد الله" },
      { id: "mother", role: "الأم", name: "آمنة بنت وهب" } ],
    [ { id: "prophet", role: "النبيّ ﷺ", name: "محمد ﷺ", fixed: true },
      { id: "wife", role: "الزوجة", name: "خديجة بنت خويلد" } ],
    [ { id: "daughter", role: "الابنة", name: "فاطمة الزهراء" } ],
    [ { id: "grandson1", role: "الحفيد", name: "الحَسَن" },
      { id: "grandson2", role: "الحفيد", name: "الحُسَين" } ],
  ];

  const DISTRACTORS = ["أبو جهل", "سلمان الفارسي"];

  const STORAGE_KEY = "mk_family_state_v1";
  const STORE = Storage.get(STORAGE_KEY, { best: null, plays: 0 });

  let slots = {};           // id -> filledName | null
  let selectedName = null;  // {name, el}
  let placed = 0;
  let mistakes = 0;
  let totalSlots = 0;

  const allSlots = TIERS.flat().filter(n => !n.fixed);
  totalSlots = allSlots.length;

  /* ---------- بناء ---------- */
  function build() {
    slots = {}; selectedName = null; placed = 0; mistakes = 0;
    TIERS.flat().forEach(n => { if (!n.fixed) slots[n.id] = null; });

    renderTree();
    renderBank();
    renderRel();
    updateHUD();
  }

  function renderTree() {
    const root = document.getElementById("fm-tree");
    root.innerHTML = "";
    TIERS.forEach(tier => {
      const row = document.createElement("div");
      row.className = "fm-tier";
      tier.forEach(n => {
        const el = document.createElement("div");
        el.dataset.id = n.id;
        if (n.fixed) {
          el.className = "fm-node fixed";
          el.innerHTML = `<span class="role">${n.role}</span><span class="name">${n.name}</span>`;
        } else {
          const filled = slots[n.id];
          el.className = "fm-node" + (filled ? " filled" : "");
          el.innerHTML = `<span class="role">${n.role}</span>
            <span class="name ${filled ? "" : "empty"}">${filled || "؟"}</span>`;
          el.addEventListener("click", () => onSlot(n));
        }
        row.appendChild(el);
      });
      root.appendChild(row);
    });
  }

  function renderBank() {
    const names = allSlots.map(n => n.name).concat(DISTRACTORS);
    shuffle(names);
    const bank = document.getElementById("fm-bank");
    bank.innerHTML = "";
    names.forEach(nm => {
      const el = document.createElement("button");
      el.className = "fm-name";
      el.textContent = nm; el.dataset.name = nm;
      if (isPlaced(nm)) el.classList.add("used");
      el.addEventListener("click", () => onName(nm, el));
      bank.appendChild(el);
    });
  }

  function isPlaced(nm) { return Object.values(slots).includes(nm); }

  /* ---------- تفاعل ---------- */
  function onName(nm, el) {
    if (el.classList.contains("used")) return;
    AudioBus.tick(620);
    if (selectedName && selectedName.el === el) { clearSel(); return; }
    clearSel();
    selectedName = { name: nm, el };
    el.classList.add("selected");
    // أبرِز المواضع المتاحة
  }

  function onSlot(node) {
    if (slots[node.id]) {                 // إفراغ موضع ممتلئ
      const nm = slots[node.id];
      slots[node.id] = null;
      placed--;
      AudioBus.tick(440);
      renderTree(); renderBank(); renderRel(); updateHUD();
      return;
    }
    if (!selectedName) {
      // أبرِز أنه يجب اختيار اسم أولاً
      const el = document.querySelector(`.fm-node[data-id="${node.id}"]`);
      if (el) { el.classList.add("target"); setTimeout(() => el.classList.remove("target"), 500); }
      return;
    }
    // ضع الاسم
    if (selectedName.name === node.name) {
      slots[node.id] = selectedName.name;
      placed++;
      AudioBus.pop();
      Particles.fire(12, { colors: ["#6A8E7F","#C9A961","#FFE9A8"] });
      clearSel();
      renderTree(); renderBank(); renderRel(); updateHUD();
      if (placed === totalSlots) finish();
    } else {
      mistakes++;
      AudioBus.fail();
      const el = document.querySelector(`.fm-node[data-id="${node.id}"]`);
      if (el) { el.classList.add("wrong"); setTimeout(() => el.classList.remove("wrong"), 420); }
      updateHUD();
    }
  }

  function clearSel() {
    if (selectedName) selectedName.el.classList.remove("selected");
    selectedName = null;
  }

  /* ---------- side list ---------- */
  function renderRel() {
    const root = document.getElementById("fm-rel");
    root.innerHTML = "";
    allSlots.forEach(n => {
      const done = !!slots[n.id];
      const row = document.createElement("div");
      row.className = "fm-rel-row" + (done ? " done" : "");
      row.innerHTML = `<span class="ic">${done ? "✓" : "؟"}</span>
        <b>${n.role}</b><span class="r-name">${done ? n.name : "—"}</span>`;
      root.appendChild(row);
    });
    document.getElementById("fm-pill").textContent = `${placed}/${totalSlots}`;
  }

  /* ---------- HUD ---------- */
  function updateHUD() {
    document.getElementById("f-placed").textContent = placed;
    document.getElementById("f-total").textContent = "/" + totalSlots;
    document.getElementById("f-mistakes").textContent = mistakes;
    document.getElementById("best").textContent = STORE.best != null ? STORE.best : "—";
    document.getElementById("plays").textContent = STORE.plays;
  }

  function finish() {
    STORE.plays++;
    if (STORE.best == null || mistakes < STORE.best) STORE.best = mistakes;
    Storage.set(STORAGE_KEY, STORE);
    updateHUD();
    AudioBus.success();
    Particles.fire(170);
    const stars = mistakes === 0 ? 3 : (mistakes <= 2 ? 2 : 1);
    document.getElementById("win-summary").innerHTML = `
      <div>أكملتَ شجرةَ آلِ البيت بـ <strong>${mistakes}</strong> أخطاء.</div>
      <div style="margin-top:var(--s-3); font-size:22px; letter-spacing:4px;">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</div>
      <div style="margin-top:var(--s-3); padding:10px; background:var(--bg-soft); border-radius:8px; font-size:13px; text-align:right;">
        نَسَبُه ﷺ: محمدُ بنُ عبدِ الله بنِ عبدِ المطّلب. تزوَّج خديجةَ، ووُلِدت له فاطمةُ،
        ومنها سِبطاه الحَسَنُ والحُسَين رضي الله عنهم.
      </div>`;
    setTimeout(() => Modal.open("win-modal"), 500);
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  /* ---------- bind ---------- */
  document.getElementById("win-replay").addEventListener("click", () => { Modal.close("win-modal"); setTimeout(build, 300); });
  Modal.bindClose("win-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) { Storage.clear(STORAGE_KEY); location.reload(); }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  build();
})();
