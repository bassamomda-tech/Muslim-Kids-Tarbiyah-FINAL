/* ============================================================
   ACTIVITY COMMON — أدوات مشتركة لكل الأنشطة
   AudioBus: أصوات Web Audio
   Particles: جسيمات احتفالية
   Modal: فتح/إغلاق نوافذ منبثقة
   Storage: مساعدات localStorage
   ============================================================ */

/* ============================================================
   AudioBus — مكتبة أصوات بسيطة (Web Audio API)
   ============================================================ */
const AudioBus = (function () {
  let ctx = null;
  let muted = false;

  function get() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    return ctx;
  }

  function tone(freq, duration = 0.2, type = "sine", gain = 0.08) {
    if (muted) return;
    try {
      const c = get();
      const osc = c.createOscillator();
      const g = c.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      g.gain.setValueAtTime(0, c.currentTime);
      g.gain.linearRampToValueAtTime(gain, c.currentTime + 0.01);
      g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + duration);
      osc.connect(g).connect(c.destination);
      osc.start();
      osc.stop(c.currentTime + duration);
    } catch (e) {}
  }

  function tick(freq = 680) { tone(freq, 0.05, "square", 0.04); }

  function chord(freqs, dur = 0.25) {
    freqs.forEach((f, i) => setTimeout(() => tone(f, dur, "sine", 0.09), i * 90));
  }

  function success() { chord([523.25, 659.25, 783.99, 1046.5], 0.22); }
  function fail()    { chord([330, 247], 0.25); }
  function pop()     { tone(880, 0.08, "sine", 0.07); }

  function setMuted(v) { muted = v; }
  function isMuted() { return muted; }

  function bindButton(btn, onChange) {
    function updateUI() {
      btn.setAttribute("aria-pressed", String(muted));
      const lbl = btn.querySelector(".mute-label");
      const ic = btn.querySelector(".mute-icon");
      if (lbl) lbl.textContent = muted ? "تشغيل الصوت" : "كتم الصوت";
      if (ic) ic.innerHTML = muted
        ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10v4h4l5 4V6L7 10H3Z"/><path d="M16 9l6 6m0-6l-6 6"/></svg>`
        : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10v4h4l5 4V6L7 10H3Z"/><path d="M16 8a6 6 0 0 1 0 8"/><path d="M19 5a10 10 0 0 1 0 14"/></svg>`;
    }
    btn.addEventListener("click", () => {
      muted = !muted;
      updateUI();
      if (onChange) onChange(muted);
    });
    updateUI();
  }

  return { tone, tick, chord, success, fail, pop, setMuted, isMuted, bindButton };
})();

/* ============================================================
   Particles — جسيمات الاحتفال
   ============================================================ */
const Particles = (function () {
  function fire(count = 80, opts = {}) {
    const layer = document.getElementById("particles") || createLayer();
    const colors = opts.colors || ["#FFD9C2","#CDEBD7","#E0D5F2","#CFE3F2","#FFE9A8","#E8A5A5","#C9A961","#FFCFB0"];
    const originX = opts.originX || "50%";
    const originY = opts.originY || "50%";

    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.style.cssText = `
        position:absolute;
        top:${originY}; left:${originX};
        width:${6 + Math.random() * 10}px;
        height:${10 + Math.random() * 10}px;
        background:${colors[i % colors.length]};
        border-radius:2px;
        transform:translate(-50%,-50%) rotate(${Math.random() * 360}deg);
        pointer-events:none;
      `;
      layer.appendChild(p);

      const angle = Math.random() * Math.PI * 2;
      const distance = 180 + Math.random() * 420;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance - 80;
      const rot = Math.random() * 720 - 360;
      const dur = 1100 + Math.random() * 1400;

      p.animate(
        [
          { transform: `translate(-50%,-50%) rotate(0deg)`, opacity: 1 },
          { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) rotate(${rot}deg)`, opacity: 0 },
        ],
        { duration: dur, easing: "cubic-bezier(.15,.8,.4,1)" }
      ).onfinish = () => p.remove();
    }
  }

  function createLayer() {
    const el = document.createElement("div");
    el.className = "particles";
    el.id = "particles";
    document.body.appendChild(el);
    return el;
  }

  return { fire };
})();

/* ============================================================
   Modal — فتح/إغلاق المودالات
   ============================================================ */
const Modal = (function () {
  function open(id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.classList.add("open");
    document.addEventListener("keydown", escClose);
    m.addEventListener("click", backdropClick);
    function backdropClick(e) {
      if (e.target === m) close(id);
    }
    function escClose(e) {
      if (e.key === "Escape") close(id);
    }
    m._escClose = escClose;
    m._backdropClick = backdropClick;
  }
  function close(id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.classList.remove("open");
    if (m._escClose) document.removeEventListener("keydown", m._escClose);
  }
  function bindClose(id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.querySelectorAll("[data-close]").forEach(b => {
      b.addEventListener("click", () => close(id));
    });
  }
  return { open, close, bindClose };
})();

/* ============================================================
   Storage — مساعدات localStorage
   ============================================================ */
const Storage = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return fallback;
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (e) {}
  },
  clear(key) { try { localStorage.removeItem(key); } catch (e) {} },
};

/* ============================================================
   Format — مساعدات تنسيق
   ============================================================ */
const Fmt = {
  time(sec) {
    if (sec == null) return "—";
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
  },
  pad2(n) { return String(n).padStart(2, "0"); },
};

window.AudioBus = AudioBus;
window.Particles = Particles;
window.Modal = Modal;
window.Storage = Storage;
window.Fmt = Fmt;
