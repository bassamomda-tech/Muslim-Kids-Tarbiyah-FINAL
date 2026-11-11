/* ============================================================
   LETTER TRACE — أكتبُ حروفي (ages 4–8)
   Pick a letter, then trace it with a finger in its forms: alone, at the start, in the middle
   and at the end of a word (letters that never join on the left have only two forms).
   A trace counts when it covers most of the letter and stays near it. 8 traces → win-modal.
   ============================================================ */
(function () {
  "use strict";
  /* j: false for the six letters that never join the letter after them */
  const L = [
    ["ا", "أَلِف", false], ["ب", "بَاء"], ["ت", "تَاء"], ["ث", "ثَاء"], ["ج", "جِيم"], ["ح", "حَاء"], ["خ", "خَاء"],
    ["د", "دَال", false], ["ذ", "ذَال", false], ["ر", "رَاء", false], ["ز", "زَاي", false], ["س", "سِين"], ["ش", "شِين"],
    ["ص", "صَاد"], ["ض", "ضَاد"], ["ط", "طَاء"], ["ظ", "ظَاء"], ["ع", "عَيْن"], ["غ", "غَيْن"], ["ف", "فَاء"], ["ق", "قَاف"],
    ["ك", "كَاف"], ["ل", "لَام"], ["م", "مِيم"], ["ن", "نُون"], ["ه", "هَاء"], ["و", "وَاو", false], ["ي", "يَاء"]
  ].map(([ch, name, j]) => ({ ch, name, joins: j !== false }));
  const T = "ـ";   // tatweel shows the joining forms
  function forms(x) {
    const f = [{ k: "alone", ar: "وحده", en: "Alone", s: x.ch }];
    if (x.joins) f.push({ k: "start", ar: "في أوّل الكلمة", en: "At the start", s: x.ch + T }, { k: "mid", ar: "في وسط الكلمة", en: "In the middle", s: T + x.ch + T });
    f.push({ k: "end", ar: "في آخر الكلمة", en: "At the end", s: T + x.ch });
    return f;
  }
  const GOAL = 8, NEED = 0.6, OFF = 0.4;
  const $ = (id) => document.getElementById(id);
  const en = () => { try { return localStorage.getItem("bunyanLang") === "en"; } catch (e) { return false; } };
  let cur = 0, form = 0, done = 0, tries = 0, drawing = false, last = null, strokes = 0;
  const cv = $("lt-canvas"), ctx = cv.getContext("2d");
  let mask = null, ink = null, W = 0, H = 0, dpr = 1;

  function say(text) {
    try { const S = window.speechSynthesis; if (!S) return; S.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = "ar-SA"; u.rate = 0.8; S.speak(u); } catch (e) {}
  }
  /* the guide letter, drawn big and pale; the same glyph (thickened) is the "inside" mask */
  function glyph(c, fill, extra) {
    const f = forms(L[cur])[form].s, size = Math.min(W * 0.62, H * 0.78);
    c.save(); c.textAlign = "center"; c.textBaseline = "middle"; c.direction = "rtl";
    c.font = "800 " + size + "px Tajawal, 'Noto Naskh Arabic', Arial, sans-serif";
    c.fillStyle = fill; c.fillText(f, W / 2, H * 0.52);
    if (extra) { c.lineJoin = "round"; c.lineWidth = extra; c.strokeStyle = fill; c.strokeText(f, W / 2, H * 0.52); }
    c.restore();
  }
  function setup() {
    dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const r = cv.getBoundingClientRect(); W = Math.round(r.width); H = Math.round(r.height);
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    mask = document.createElement("canvas"); mask.width = W; mask.height = H;
    ink = document.createElement("canvas"); ink.width = W; ink.height = H;
    draw();
    const m = mask.getContext("2d"); m.clearRect(0, 0, W, H); glyph(m, "#000", Math.max(10, W * 0.035));
    strokes = 0;
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "#FFFDF6"; ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = "rgba(0,0,0,.06)"; ctx.lineWidth = 1;
    for (let y = H * 0.25; y < H; y += H * 0.25) { ctx.beginPath(); ctx.moveTo(10, y); ctx.lineTo(W - 10, y); ctx.stroke(); }
    glyph(ctx, "rgba(46,109,164,.32)");
    ctx.drawImage(ink, 0, 0, W, H);
  }
  function pos(e) { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }
  function line(a, b) {
    const c = ink.getContext("2d"); c.lineCap = c.lineJoin = "round"; c.strokeStyle = "#E8A317"; c.lineWidth = Math.max(14, W * 0.045);
    c.beginPath(); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); c.stroke();
  }
  cv.addEventListener("pointerdown", (e) => { e.preventDefault(); cv.setPointerCapture(e.pointerId); drawing = true; last = pos(e); line(last, [last[0] + .1, last[1]]); strokes++; draw(); });
  cv.addEventListener("pointermove", (e) => { if (!drawing) return; const p = pos(e); line(last, p); last = p; draw(); });
  ["pointerup", "pointercancel", "pointerleave"].forEach((t) => cv.addEventListener(t, () => { drawing = false; }));

  /* coverage: how much of the letter is inked, and how much ink is outside it (sampled on a grid) */
  function score() {
    const m = mask.getContext("2d").getImageData(0, 0, W, H).data, k = ink.getContext("2d").getImageData(0, 0, W, H).data;
    let inL = 0, cov = 0, inkN = 0, out = 0;
    for (let y = 0; y < H; y += 3) for (let x = 0; x < W; x += 3) {
      const i = (y * W + x) * 4 + 3, mm = m[i] > 40, kk = k[i] > 40;
      if (mm) { inL++; if (kk) cov++; }
      if (kk) { inkN++; if (!mm) out++; }
    }
    return { cov: inL ? cov / inL : 0, off: inkN ? out / inkN : 1 };
  }
  function feedback(t, ok) { const f = $("feedback"); f.textContent = t; f.className = "kp-feedback" + (ok === true ? " ok" : ok === false ? " no" : ""); }
  function check() {
    const s = score();
    if (s.cov >= NEED && s.off <= OFF) {
      done++; window.AudioBus && AudioBus.success && AudioBus.success();
      feedback(en() ? "Beautiful writing! ⭐" : "ما أجملَ خطَّك! ⭐", true); paintStats(); markForm();
      if (done >= GOAL) { $("win-tries").textContent = tries; setTimeout(() => Modal.open("win-modal"), 700); return; }
      setTimeout(nextForm, 900);
    } else {
      tries++; window.AudioBus && AudioBus.fail && AudioBus.fail(); paintStats();
      feedback(s.cov < NEED ? (en() ? "Trace the whole letter — follow the pale shape 👆" : "تتبّع الحرف كلَّه — امشِ على الشكل الفاتح 👆")
                            : (en() ? "Try to stay on the letter 🙂" : "حاول أن تبقى على الحرف 🙂"), false);
    }
  }
  function markForm() { const b = document.querySelector('.lt-form[data-f="' + form + '"]'); if (b) b.classList.add("done"); const lb = document.querySelector('.lt-letter[data-i="' + cur + '"]'); if (lb) lb.classList.add("done"); }
  function nextForm() { const F = forms(L[cur]); if (form < F.length - 1) pickForm(form + 1); else pick((cur + 1) % L.length); }
  function clearInk() { ink.getContext("2d").clearRect(0, 0, W, H); draw(); }
  function paintStats() { $("stat-done").textContent = done + "/" + GOAL; $("stat-tries").textContent = tries; }
  function pickForm(i) {
    form = i; document.querySelectorAll(".lt-form").forEach((b) => b.setAttribute("aria-pressed", String(+b.dataset.f === i)));
    const f = forms(L[cur])[i]; $("lt-form-name").textContent = en() ? f.en : f.ar;
    setup(); feedback(en() ? "Trace the letter with your finger ✍️" : "تتبّع الحرف بإصبعك ✍️");
  }
  function pick(i) {
    cur = i; document.querySelectorAll(".lt-letter").forEach((b) => b.setAttribute("aria-pressed", String(+b.dataset.i === i)));
    const box = $("lt-forms"); box.innerHTML = "";
    forms(L[i]).forEach((f, k) => {
      const b = document.createElement("button"); b.type = "button"; b.className = "lt-form"; b.dataset.f = k;
      b.innerHTML = '<span class="g">' + f.s + "</span><small>" + (en() ? f.en : f.ar) + "</small>";
      b.addEventListener("click", () => pickForm(k)); box.appendChild(b);
    });
    $("lt-name").textContent = L[i].name;
    pickForm(0); say(L[i].name);
  }
  function buildLetters() {
    const box = $("lt-letters");
    L.forEach((x, i) => {
      const b = document.createElement("button"); b.type = "button"; b.className = "lt-letter"; b.dataset.i = i; b.textContent = x.ch;
      b.setAttribute("aria-label", x.name); b.addEventListener("click", () => { pick(i); $("lt-canvas").scrollIntoView({ block: "center", behavior: "smooth" }); });
      box.appendChild(b);
    });
  }
  function reset() { done = 0; tries = 0; paintStats(); document.querySelectorAll(".lt-letter.done,.lt-form.done").forEach((b) => b.classList.remove("done")); pick(0); }

  $("lt-check").addEventListener("click", check);
  $("lt-clear").addEventListener("click", () => { clearInk(); feedback(en() ? "Try again ✍️" : "حاول من جديد ✍️"); });
  $("lt-hear").addEventListener("click", () => say(L[cur].name));
  $("reset-btn").addEventListener("click", reset);
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", () => { Modal.close("win-modal"); reset(); });
  AudioBus.bindButton($("mute-btn"));
  let rt = null; window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { const keep = ink; setup(); ink.getContext("2d").drawImage(keep, 0, 0, W, H); draw(); }, 200); });
  buildLetters();
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(reset);
  window.__lt = { score: score, mask: () => mask, ink: () => ink, check: check, draw: draw };   // for tests
})();
