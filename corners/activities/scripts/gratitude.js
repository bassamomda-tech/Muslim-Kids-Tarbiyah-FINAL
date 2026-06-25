/* ============================================================
   GRATITUDE — مفكرة الامتنان
   نِعمَ يَوميَّة. مَخزون حسب التَّاريخ.
   ============================================================ */

(function () {
  "use strict";

  const STORAGE_KEY = "mk_gratitude_v1";
  const STORE = Storage.get(STORAGE_KEY, { byDay: {}, bestStreak: 0 });

  const EMOJIS = [
    { c: "♡", name: "حُب" },
    { c: "☀", name: "نور" },
    { c: "✿", name: "وَردة" },
    { c: "★", name: "نَجمة" },
    { c: "ﷲ", name: "اللّٰه" },
    { c: "✦", name: "بَريق" },
    { c: "♪", name: "بَهجة" },
    { c: "✸", name: "نِعمة" },
  ];

  let currentDate = todayKey();
  let selectedEmoji = EMOJIS[0].c;

  /* ============ Helpers ============ */
  function todayKey() { return dKey(new Date()); }
  function dKey(d) {
    return d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0");
  }
  function parseKey(k) {
    const [y,m,d] = k.split("-").map(Number);
    return new Date(y, m-1, d);
  }
  function fmtDate(k) {
    const d = parseKey(k);
    const t = todayKey();
    if (k === t) return "اليوم";
    const yest = dKey(new Date(Date.now() - 86400000));
    if (k === yest) return "أمس";
    return d.toLocaleDateString("ar-EG", { weekday: "long", day: "numeric", month: "long" });
  }
  function shiftDay(k, n) {
    const d = parseKey(k); d.setDate(d.getDate()+n); return dKey(d);
  }

  function getDay(k) { return STORE.byDay[k] || []; }

  function computeStreak() {
    let s = 0;
    let k = todayKey();
    // إذا اليوم لم يكتمل لا نكسر السلسلة، نبدأ من الأمس
    if (getDay(k).length < 3) k = shiftDay(k, -1);
    while (getDay(k).length >= 3) {
      s++;
      k = shiftDay(k, -1);
      if (s > 365) break;
    }
    return s;
  }

  function computeTotal() {
    let t = 0;
    for (const k in STORE.byDay) t += STORE.byDay[k].length;
    return t;
  }
  function computeDays() {
    return Object.keys(STORE.byDay).filter(k => STORE.byDay[k].length > 0).length;
  }

  /* ============ Renderers ============ */
  function renderEmojis() {
    const root = document.getElementById("emojis");
    root.innerHTML = "";
    EMOJIS.forEach(e => {
      const b = document.createElement("button");
      b.className = "gr-emoji" + (e.c === selectedEmoji ? " active" : "");
      b.textContent = e.c;
      b.title = e.name;
      b.addEventListener("click", () => {
        selectedEmoji = e.c;
        renderEmojis();
        AudioBus.pop();
      });
      root.appendChild(b);
    });
  }

  function renderEntries() {
    const root = document.getElementById("entries");
    const empty = document.getElementById("empty-state");
    const entries = getDay(currentDate);
    root.innerHTML = "";
    empty.hidden = entries.length > 0;
    entries.forEach((e, i) => {
      const div = document.createElement("div");
      div.className = "gr-entry";
      div.innerHTML = `
        <div class="ic">${e.emoji}</div>
        <div class="body">${escapeHtml(e.text)}</div>
        <span class="time">${e.time || ""}</span>
        <button class="del" aria-label="حذف">×</button>
      `;
      div.querySelector(".del").addEventListener("click", () => deleteEntry(i));
      root.appendChild(div);
    });
  }

  function renderDate() {
    document.getElementById("date-pill").textContent = fmtDate(currentDate);
  }

  function renderWeek() {
    const root = document.getElementById("week-grid");
    root.innerHTML = "";
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today); d.setDate(d.getDate() - i);
      const k = dKey(d);
      const count = getDay(k).length;
      const dayEl = document.createElement("div");
      dayEl.className = "day" + (k === todayKey() ? " today" : "") + (k === currentDate ? " selected" : "");
      const names = ["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"];
      const pips = [0,1,2].map(j => `<span class="p ${j < count ? "on" : ""}"></span>`).join("");
      dayEl.innerHTML = `
        <div class="dn">${names[d.getDay()]}</div>
        <div class="dd">${d.getDate()}</div>
        <div class="pips">${pips}</div>
      `;
      dayEl.addEventListener("click", () => { currentDate = k; refresh(); });
      root.appendChild(dayEl);
    }
  }

  function updateHUD() {
    document.getElementById("today-count").textContent = getDay(todayKey()).length;
    const streak = computeStreak();
    document.getElementById("streak").textContent = streak;
    document.getElementById("total").textContent = computeTotal();
    document.getElementById("days").textContent = computeDays();
    document.getElementById("best").textContent = STORE.bestStreak > 0 ? `${STORE.bestStreak} يوم` : "—";
    if (streak > STORE.bestStreak) {
      STORE.bestStreak = streak;
      Storage.set(STORAGE_KEY, STORE);
    }
  }

  /* ============ Actions ============ */
  function addEntry() {
    const input = document.getElementById("entry-text");
    const text = input.value.trim();
    if (!text) return;
    if (!STORE.byDay[currentDate]) STORE.byDay[currentDate] = [];
    const t = new Date();
    STORE.byDay[currentDate].push({
      emoji: selectedEmoji,
      text,
      time: `${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`,
      ts: Date.now(),
    });
    Storage.set(STORAGE_KEY, STORE);
    input.value = "";
    document.getElementById("add-btn").disabled = true;
    AudioBus.pop();

    refresh();

    // اكتمل اليوم؟
    if (getDay(currentDate).length === 3 && currentDate === todayKey()) {
      AudioBus.success();
      Particles.fire(80, { colors: ["#E0D5F2","#FFD9C2","#FFE9A8","#CDEBD7"] });
      const list = STORE.byDay[currentDate].map(e =>
        `<div style="display:flex; gap:8px; padding:6px 0; border-bottom:1px solid var(--line);">
           <span style="font-size:18px;">${e.emoji}</span>
           <span style="font-weight:600;">${escapeHtml(e.text)}</span>
         </div>`
      ).join("");
      document.getElementById("day-summary").innerHTML = `
        <div>كَتَبتَ ثَلاثَ نِعَمٍ اليوم. سِلسِلَتُك الآن <strong>${computeStreak()}</strong> أيَّام.</div>
        <div style="margin-top: var(--s-3);">${list}</div>
      `;
      setTimeout(() => Modal.open("day-modal"), 600);
    }
  }

  function deleteEntry(i) {
    if (!confirm("حَذف هذه النِّعمة؟")) return;
    STORE.byDay[currentDate].splice(i, 1);
    if (STORE.byDay[currentDate].length === 0) delete STORE.byDay[currentDate];
    Storage.set(STORAGE_KEY, STORE);
    refresh();
  }

  function refresh() {
    renderDate();
    renderEntries();
    renderWeek();
    updateHUD();
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }

  /* ============ Bind ============ */
  const input = document.getElementById("entry-text");
  const addBtn = document.getElementById("add-btn");
  input.addEventListener("input", () => addBtn.disabled = !input.value.trim());
  input.addEventListener("keydown", e => { if (e.key === "Enter" && !addBtn.disabled) addEntry(); });
  addBtn.addEventListener("click", addEntry);

  document.querySelectorAll(".gr-quick .qb").forEach(b => {
    b.addEventListener("click", () => {
      input.value = b.dataset.suggest;
      addBtn.disabled = false;
      input.focus();
      AudioBus.tick(640);
    });
  });

  document.getElementById("prev-day").addEventListener("click", () => {
    currentDate = shiftDay(currentDate, -1); refresh(); AudioBus.tick(440);
  });
  document.getElementById("next-day").addEventListener("click", () => {
    const next = shiftDay(currentDate, 1);
    if (parseKey(next) > new Date()) { AudioBus.fail(); return; }
    currentDate = next; refresh(); AudioBus.tick(560);
  });
  document.getElementById("today-btn").addEventListener("click", () => {
    currentDate = todayKey(); refresh();
  });

  Modal.bindClose("day-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) {
      Storage.clear(STORAGE_KEY); location.reload();
    }
  });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  /* ============ Start ============ */
  renderEmojis();
  refresh();
})();
