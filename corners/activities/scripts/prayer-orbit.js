/* ============================================================
   58 · نجوم الصلوات الخمس — اسحب النجوم إلى مواضع أوقاتها
   المدار = ساعة من 24: أعلى المدار منتصف النهار
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "رحلة الإيمان", en: "Journey of Faith" },
    crumbTitle:  { ar: "نجوم الصلوات الخمس", en: "Five Prayer Stars" },
    title:       { ar: "نجوم الصلوات الخمس", en: "The Five Prayer Stars" },
    desc:        { ar: "خمس نجوم تائهة في سماء اليوم! اسحب كل نجمة صلاة إلى موضع وقتها الصحيح على مدار اليوم — من فجر الصباح حتى عشاء الليل.", en: "Five stars are lost in the day's sky! Drag each prayer star to its correct time position on the day's orbit — from dawn's Fajr to night's Isha." },
    centerLabel: { ar: "مدار اليوم<br/>٢٤ ساعة", en: "The day's orbit<br/>24 hours" },
    statPlaced:  { ar: "نجوم في مكانها", en: "Stars placed" },
    statTries:   { ar: "المحاولات", en: "Tries" },
    sideTitle:   { ar: "مواقيت الصلاة", en: "Prayer times" },
    sidePill:    { ar: "5 صلوات", en: "5 prayers" },
    tip:         { ar: "المواقيت في اللعبة تقريبية — في الحقيقة تتغير كل يوم مع حركة الشمس، ولهذا نسمع الأذان!", en: "The times in this game are approximate — in reality they shift daily with the sun, and that's why we listen for the adhan!" },
    winEyebrow:  { ar: "فلكيّ الصلوات", en: "Prayer Astronomer" },
    winTitle:    { ar: "اكتمل مدار الصلوات!", en: "The prayer orbit is complete!" },
    winMeaning:  { ar: "<strong>تأمل</strong> الصلوات الخمس تحيط بيومك كما تحيط النجوم بالسماء — تبدأ يومك بنورٍ وتختمه بنور.", en: "<strong>Reflect</strong> The five prayers surround your day like stars surround the sky — you open your day with light and close it with light." },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "جولة جديدة", en: "New round" },
  };

  /* الساعة → زاوية: 12 ظهراً أعلى المدار، منتصف الليل أسفله */
  const PRAYERS = [
    { id: "fajr",    ar: "الفجر",   en: "Fajr",    hour: 5,    icon: "🌄", timeLbl: "05:00" },
    { id: "dhuhr",   ar: "الظهر",   en: "Dhuhr",   hour: 12.5, icon: "☀️", timeLbl: "12:30" },
    { id: "asr",     ar: "العصر",   en: "Asr",     hour: 16,   icon: "🌤", timeLbl: "16:00" },
    { id: "maghrib", ar: "المغرب",  en: "Maghrib", hour: 19,   icon: "🌇", timeLbl: "19:00" },
    { id: "isha",    ar: "العشاء",  en: "Isha",    hour: 20.5, icon: "🌙", timeLbl: "20:30" },
  ];

  const $ = (id) => document.getElementById(id);
  const stage = $("po-stage");
  let placed = 0, tries = 0;

  function hourToAngle(h) { return ((h - 12) / 24) * 360; } /* 12h = 0° (أعلى) */
  function anglePos(deg, rPct) {
    const rad = (deg - 90) * Math.PI / 180;
    return [50 + Math.cos(rad) * rPct, 50 + Math.sin(rad) * rPct];
  }

  function build() {
    stage.querySelectorAll(".po-slot, .po-star").forEach(e => e.remove());
    placed = 0; tries = 0;
    $("stat-placed").textContent = "0/5";
    $("stat-tries").textContent = "0";
    $("po-feedback").textContent = "";

    /* الخانات (الأوقات) على المدار */
    PRAYERS.forEach(p => {
      const [x, y] = anglePos(hourToAngle(p.hour), 41);
      const slot = document.createElement("div");
      slot.className = "po-slot";
      slot.dataset.id = p.id;
      slot.style.left = x + "%"; slot.style.top = y + "%";
      slot.innerHTML = `<span>${p.icon}<br/><b style="font-family:var(--font-en)">${p.timeLbl}</b></span>`;
      stage.appendChild(slot);
    });

    /* النجوم في المنتصف مبعثرة */
    const L = Lang.current();
    PRAYERS.slice().sort(() => Math.random() - 0.5).forEach((p, i) => {
      const star = document.createElement("div");
      star.className = "po-star";
      star.dataset.id = p.id;
      const a = i * 72 + 20;
      const [x, y] = anglePos(a, 17);
      star.style.left = x + "%"; star.style.top = y + "%";
      star.innerHTML = `
        <svg viewBox="0 0 60 60"><path d="M30 4l7 16 17 2-13 12 4 17-15-9-15 9 4-17L6 22l17-2 7-16Z" fill="#FFE9A8" stroke="#C9A961" stroke-width="2"/></svg>
        <span class="lbl">${p[L]}</span>`;
      stage.appendChild(star);
      bindDrag(star);
    });
    renderGuide();
  }

  function renderGuide() {
    const L = Lang.current();
    $("po-guide").innerHTML = PRAYERS.map(p => {
      const done = stage.querySelector(`.po-star[data-id="${p.id}"].locked`);
      return `
      <div class="dhikr-item ${done ? "is-highlighted" : ""}">
        <span class="dhikr-swatch" style="background:var(--butter)"></span>
        <span class="dhikr-text" style="font-size:13px;">${p.icon} ${p[L]}</span>
        <span class="dhikr-count" style="font-family:var(--font-en)">${done ? "✓" : "?"}</span>
      </div>`;
    }).join("");
  }

  function bindDrag(star) {
    let dragging = false;
    star.addEventListener("pointerdown", (e) => {
      if (star.classList.contains("locked")) return;
      dragging = true;
      star.setPointerCapture(e.pointerId);
      star.style.zIndex = 5;
    });
    star.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const r = stage.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      star.style.left = Math.max(4, Math.min(96, x)) + "%";
      star.style.top = Math.max(4, Math.min(96, y)) + "%";
    });
    star.addEventListener("pointerup", () => {
      if (!dragging) return;
      dragging = false;
      star.style.zIndex = 3;
      drop(star);
    });
  }

  function drop(star) {
    const r = stage.getBoundingClientRect();
    const sr = star.getBoundingClientRect();
    const sx = sr.left + sr.width / 2, sy = sr.top + sr.height / 2;
    let nearest = null, nd = 1e9;
    stage.querySelectorAll(".po-slot").forEach(slot => {
      const q = slot.getBoundingClientRect();
      const qx = q.left + q.width / 2, qy = q.top + q.height / 2;
      const d = Math.hypot(sx - qx, sy - qy);
      if (d < nd) { nd = d; nearest = slot; }
    });
    const L = Lang.current();
    if (nearest && nd < r.width * 0.09) {
      tries++; $("stat-tries").textContent = tries;
      if (nearest.dataset.id === star.dataset.id && !nearest.classList.contains("filled")) {
        /* صحيح */
        nearest.classList.add("filled");
        star.classList.add("locked");
        star.style.left = nearest.style.left;
        star.style.top = nearest.style.top;
        placed++;
        $("stat-placed").textContent = `${placed}/5`;
        AudioBus.chord([523, 659], 0.2);
        Particles.fire(20, { originY: "40%" });
        $("po-feedback").textContent = L === "ar" ? "نجمة في مكانها ✨" : "A star in its place ✨";
        renderGuide();
        if (placed >= 5) setTimeout(win, 600);
      } else {
        AudioBus.fail();
        $("po-feedback").textContent = L === "ar" ? "ليس هذا وقتها — جرّب موضعاً آخر" : "Not its time — try another spot";
        bounceBack(star);
      }
    } else {
      bounceBack(star);
    }
  }

  function bounceBack(star) {
    const [x, y] = anglePos(Math.random() * 360, 15);
    star.style.transition = "left 0.35s ease, top 0.35s ease";
    star.style.left = x + "%"; star.style.top = y + "%";
    setTimeout(() => { star.style.transition = ""; }, 380);
  }

  function win() {
    const L = Lang.current();
    $("win-sub").textContent = L === "ar"
      ? `خمس نجوم في ${tries} محاولات`
      : `Five stars in ${tries} tries`;
    Storage.set("anos_orbit_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  Lang.init(I18N);
  document.addEventListener("langchange", build);
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", () => { Modal.close("win-modal"); build(); });
  $("reset-btn").addEventListener("click", build);
  AudioBus.bindButton($("mute-btn"));
  build();
})();
