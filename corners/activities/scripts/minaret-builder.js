/* ============================================================
   81 · مهندس المآذن — ركّب أجزاء المسجد بالترتيب الصحيح
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    back:        { ar: "الرجوع للوحة الأنشطة", en: "Back to activities" },
    crumbSection:{ ar: "صنّاع الغد", en: "Makers of Tomorrow" },
    crumbTitle:  { ar: "مهندس المآذن", en: "Minaret Engineer" },
    title:       { ar: "مهندس المآذن", en: "The Minaret Engineer" },
    desc:        { ar: "كن مهندساً معمارياً وابنِ مسجداً جميلاً! اتبع المخطّط: ضع القاعدة، فالجدران، فالقبّة، فالمئذنة والهلال. رتّب القطع بالترتيب الصحيح لترتفع بنايتك.", en: "Be an architect and build a beautiful mosque! Follow the plan: lay the base, the walls, the dome, the minaret, and the crescent. Place the parts in the right order to raise your building." },
    trayLabel:   { ar: "صندوق القطع — انقر القطعة الصحيحة التالية", en: "Parts box — tap the correct next part" },
    statBuilt:   { ar: "القطع المركّبة", en: "Parts placed" },
    statMosques: { ar: "مساجد بنيتها", en: "Mosques built" },
    sideTitle:   { ar: "عمارة المساجد", en: "Mosque architecture" },
    sideQuote:   { ar: "«مَن بنى مسجداً لله بنى الله له بيتاً في الجنة»", en: "\"Whoever builds a mosque for Allah, Allah builds for him a house in Paradise\"" },
    sideSrc:     { ar: "متفق عليه", en: "Agreed upon" },
    tip:         { ar: "للمسجد أجزاء: القاعدة، وقاعة الصلاة، والمحراب (اتجاه القبلة)، والقبّة، والمئذنة التي يُرفع منها الأذان. كل مسجدٍ عمارةٌ من عمائر الإسلام.", en: "A mosque has parts: the base, prayer hall, mihrab (qibla direction), dome, and minaret from which the adhan is called. Each mosque is a landmark of Islam." },
    winEyebrow:  { ar: "اكتمل البناء", en: "Construction complete" },
    winTitle:    { ar: "بنيتَ مسجداً جميلاً!", en: "You built a beautiful mosque!" },
    winDone:     { ar: "انتهيت", en: "Done" },
    winReplay:   { ar: "مسجد جديد", en: "New mosque" },
    mission:     { ar: "التالي في المخطّط:", en: "Next in the plan:" },
    good:        { ar: "قطعة في مكانها! 🧱", en: "Part in place! 🧱" },
    bad:         { ar: "ليست القطعة التالية في المخطّط — انظر الترتيب", en: "Not the next part in the plan — check the order" },
  };

  /* أجزاء المسجد بالترتيب من الأسفل للأعلى */
  const PARTS = [
    { id: "base",   ar: "القاعدة",  en: "Base",    color: "#8A6B9A", w: 260, h: 30, emoji: "" },
    { id: "hall",   ar: "قاعة الصلاة", en: "Prayer hall", color: "#A83A72", w: 240, h: 90, emoji: "🚪" },
    { id: "arches", ar: "الأقواس",  en: "Arches",  color: "#C85A92", w: 240, h: 34, emoji: "⌒" },
    { id: "dome",   ar: "القبّة",   en: "Dome",    color: "#5A9A8A", w: 150, h: 80, emoji: "", dome: true },
    { id: "minaret",ar: "المئذنة",  en: "Minaret", color: "#D4A94A", w: 40, h: 130, emoji: "", side: true },
    { id: "crescent",ar: "الهلال",  en: "Crescent",color: "#E0C060", w: 34, h: 34, emoji: "☪️", crescent: true },
  ];

  const $ = (id) => document.getElementById(id);
  const scene = $("bl-scene");
  let placed = 0, mosques = 0;

  function renderMission() {
    const L = Lang.current();
    const next = PARTS[placed];
    if (next) $("bl-mission").innerHTML = `🏗 ${I18N.mission[L]} <strong>${next[L === "ar" ? "ar" : "en"]}</strong>`;
    $("stat-built").textContent = `${placed}/${PARTS.length}`;
  }

  function renderTray() {
    const L = Lang.current();
    /* اعرض القطع غير المركّبة مخلوطة */
    const remaining = PARTS.map((p, i) => ({ p, i })).filter(x => x.i >= placed).sort(() => Math.random() - 0.5);
    $("bl-tray").innerHTML = remaining.map(x => `
      <button class="bl-piece" data-i="${x.i}"
        style="background:${x.p.color}; width:${Math.min(120, x.p.w / 2)}px; height:${Math.max(38, Math.min(60, x.p.h / 1.6))}px; border-radius:${x.p.dome ? "40px 40px 6px 6px" : x.p.crescent ? "50%" : "6px"};">
        ${x.p.emoji || x.p[L]}
      </button>`).join("");
    $("bl-tray").querySelectorAll(".bl-piece").forEach(b => b.addEventListener("click", () => place(+b.dataset.i, b)));
  }

  function drawPlaced() {
    /* أزل القطع القديمة عدا الأرض */
    scene.querySelectorAll(".bl-block").forEach(e => e.remove());
    let y = 30; /* من فوق الأرض */
    const cx = scene.clientWidth / 2 || 300;
    for (let i = 0; i < placed; i++) {
      const p = PARTS[i];
      const el = document.createElement("div");
      el.className = "bl-block";
      if (p.side) {
        /* المئذنة على الجانب */
        el.style.width = p.w + "px"; el.style.height = p.h + "px";
        el.style.background = p.color;
        el.style.left = (cx + 120) + "px";
        el.style.bottom = "30px";
        el.style.borderRadius = "6px 6px 0 0";
        el.textContent = "";
      } else if (p.crescent) {
        el.style.width = p.w + "px"; el.style.height = p.h + "px";
        el.style.background = "transparent"; el.style.boxShadow = "none";
        el.style.left = (cx + 120 + p.w / 2 - 4) + "px";
        el.style.bottom = (30 + PARTS[4].h) + "px";
        el.style.fontSize = "26px";
        el.textContent = "☪️";
      } else {
        el.style.width = p.w + "px"; el.style.height = p.h + "px";
        el.style.background = p.color;
        el.style.left = (cx - p.w / 2) + "px";
        el.style.bottom = y + "px";
        el.style.borderRadius = p.dome ? "80px 80px 6px 6px" : "6px";
        el.textContent = p.emoji || "";
        y += p.h;
      }
      el.style.animation = "fd-pop 0.35s ease";
      scene.appendChild(el);
    }
  }

  function place(i, btn) {
    const L = Lang.current();
    if (i === placed) {
      placed++;
      AudioBus.tone(300 + placed * 70, 0.16, "square", 0.07);
      Particles.fire(14, { originY: "55%" });
      $("bl-feedback").textContent = I18N.good[L];
      drawPlaced(); renderMission(); renderTray();
      if (placed >= PARTS.length) setTimeout(win, 600);
    } else {
      AudioBus.fail();
      btn.style.transform = "translateY(4px)";
      setTimeout(() => { btn.style.transform = ""; }, 250);
      $("bl-feedback").textContent = I18N.bad[L];
    }
  }

  function win() {
    mosques++; $("stat-mosques").textContent = mosques;
    const L = Lang.current();
    $("win-sub").textContent = L === "ar" ? "قاعدة وجدران وقبّة ومئذنة وهلال — عمارةٌ كاملة!" : "Base, walls, dome, minaret and crescent — a complete build!";
    Storage.set("anos_minaret_done", true);
    AudioBus.success(); Particles.fire(120);
    Modal.open("win-modal");
  }

  function reset() {
    placed = 0;
    $("bl-feedback").textContent = "";
    Modal.close("win-modal");
    drawPlaced(); renderMission(); renderTray();
  }

  Lang.init(I18N);
  document.addEventListener("langchange", () => { renderMission(); renderTray(); });
  Modal.bindClose("win-modal");
  $("win-replay").addEventListener("click", reset);
  $("reset-btn").addEventListener("click", reset);
  AudioBus.bindButton($("mute-btn"));
  renderMission(); renderTray(); drawPlaced();
})();
