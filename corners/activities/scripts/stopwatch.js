/* ============================================================
   STOPWATCH — تحدي الـ30 ثانية
   سبِّح أكبرَ عددٍ ممكن خلال 30 ثانية. كلُّ نقرةٍ ذِكر،
   وكلُّ 33 ذِكراً تُكمِل سُبحة.
   ============================================================ */

(function () {
  "use strict";

  const DHIKR = ["سُبْحَانَ الله", "الْحَمْدُ لله", "اللهُ أَكْبَر"];
  const DURATION = 30;
  const BEADS = 33;

  const STORAGE_KEY = "mk_stopwatch_state_v1";
  const STORE = Storage.get(STORAGE_KEY, { best: 0, plays: 0, totalDhikr: 0 });

  const tapBtn = document.getElementById("sw-tap");
  const overlay = document.getElementById("sw-overlay");

  let running = false;
  let count = 0;
  let rounds = 0;
  let timeLeft = DURATION;
  let timer = null;
  let dhikrIdx = 0;

  /* ---------- beads ring ---------- */
  function buildBeads() {
    const wrap = document.getElementById("sw-beads");
    wrap.innerHTML = "";
    for (let i = 0; i < BEADS; i++) {
      const a = (i / BEADS) * Math.PI * 2 - Math.PI / 2;
      const b = document.createElement("span");
      b.className = "sw-bead"; b.dataset.i = i;
      b.style.left = (50 + 46 * Math.cos(a)) + "%";
      b.style.top = (50 + 46 * Math.sin(a)) + "%";
      wrap.appendChild(b);
    }
  }
  function paintBeads() {
    const lit = count % BEADS;
    document.querySelectorAll(".sw-bead").forEach((b, i) => {
      b.classList.toggle("on", i < (lit === 0 && count > 0 ? BEADS : lit));
    });
  }

  /* ---------- start ---------- */
  function start() {
    overlay.classList.add("hidden");
    running = true; count = 0; rounds = 0; timeLeft = DURATION; dhikrIdx = 0;
    tapBtn.classList.remove("disabled");
    updateTimer(); updateCount(); paintBeads(); setDhikr();
    timer = setInterval(tick, 1000);
    AudioBus.tone(660, 0.12, "sine", 0.06);
  }

  function tick() {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 5) AudioBus.tick(800);
    if (timeLeft <= 0) end();
  }

  /* ---------- tap ---------- */
  function onTap(e) {
    if (!running) return;
    count++;
    AudioBus.pop();
    tapBtn.classList.add("press");
    setTimeout(() => tapBtn.classList.remove("press"), 70);
    setDhikr();
    updateCount();
    paintBeads();
    if (count % BEADS === 0) {
      rounds++;
      AudioBus.success();
      Particles.fire(30, { colors: ["#C9A961","#FFE9A8","#6A8E7F"] });
    }
    floatPlus(e);
  }

  function setDhikr() {
    document.getElementById("sw-dhikr").textContent = DHIKR[dhikrIdx % DHIKR.length];
    dhikrIdx++;
  }

  function floatPlus(e) {
    const stage = document.getElementById("sw-stage");
    const rect = stage.getBoundingClientRect();
    const el = document.createElement("span");
    el.className = "sw-pop"; el.textContent = "+1";
    let x = rect.width / 2, y = rect.height / 2;
    if (e && e.clientX) { x = e.clientX - rect.left; y = e.clientY - rect.top; }
    el.style.left = x + "px"; el.style.top = y + "px";
    stage.appendChild(el);
    el.animate([
      { transform: "translate(-50%,-50%) translateY(0)", opacity: 1 },
      { transform: "translate(-50%,-50%) translateY(-46px)", opacity: 0 },
    ], { duration: 700, easing: "ease-out" }).onfinish = () => el.remove();
  }

  /* ---------- end ---------- */
  function end() {
    running = false;
    clearInterval(timer);
    tapBtn.classList.add("disabled");
    STORE.plays++;
    STORE.totalDhikr += count;
    if (count > STORE.best) STORE.best = count;
    Storage.set(STORAGE_KEY, STORE);
    updateHUD();
    AudioBus.success();
    Particles.fire(150);
    const pace = (count / DURATION).toFixed(1);
    document.getElementById("win-summary").innerHTML = `
      <div>سبَّحتَ <strong>${count}</strong> ذِكراً في ٣٠ ثانية —
      أي <strong>${rounds}</strong> سُبحةً كاملة (٣٣).</div>
      <div style="margin-top:var(--s-2); color:var(--muted); font-size:13px;">بمعدّل ${pace} ذِكر/ثانية</div>
      <div style="margin-top:var(--s-3); padding:10px; background:var(--bg-soft); border-radius:8px; font-size:13px;">
        «كلمتان خفيفتان على اللسان، ثقيلتان في الميزان: سبحان الله وبحمده، سبحان الله العظيم» — متفق عليه (صحيح).
      </div>`;
    setTimeout(() => Modal.open("win-modal"), 450);
  }

  /* ---------- HUD ---------- */
  function updateTimer() {
    document.getElementById("s-time").textContent = timeLeft;
    const blk = document.getElementById("timer-block");
    blk.classList.toggle("low", timeLeft <= 5);
  }
  function updateCount() {
    document.getElementById("sw-count").innerHTML = `${count} <small>ذِكر</small>`;
    document.getElementById("s-rounds").textContent = rounds;
  }
  function updateHUD() {
    document.getElementById("best").textContent = STORE.best > 0 ? STORE.best : "—";
    document.getElementById("plays").textContent = STORE.plays;
    const tot = document.getElementById("s-total");
    if (tot) tot.textContent = STORE.totalDhikr;
  }

  /* ---------- bind ---------- */
  tapBtn.addEventListener("pointerdown", onTap);
  overlay.addEventListener("click", () => { if (!running) start(); });
  document.getElementById("sw-go").addEventListener("click", e => { e.stopPropagation(); if (!running) start(); });
  document.getElementById("win-replay").addEventListener("click", () => { Modal.close("win-modal"); setTimeout(start, 300); });
  Modal.bindClose("win-modal");
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("إعادة ضبط جميع البيانات؟")) { Storage.clear(STORAGE_KEY); location.reload(); }
  });
  // منع التمرير عند النقر السريع على الزر في الجوال
  tapBtn.addEventListener("touchstart", e => e.preventDefault(), { passive: false });
  AudioBus.bindButton(document.getElementById("mute-btn"));

  buildBeads();
  paintBeads();
  updateCount();
  updateHUD();
})();
