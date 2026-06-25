/* ============================================================
   DASHBOARD RENDERER
   يبني الأقسام والبطاقات من البيانات، ويتعامل مع التصفية والبحث
   ============================================================ */

(function () {
  "use strict";

  const root = document.getElementById("sections");
  const L = () => (window.I18N && I18N.lang === "en") ? "en" : "ar";
  const UI = {
    ar: { play:"العب", start:"ابدأ الآن", soon:"قريباً", locked:"مغلق", done:"مكتمل", completed:"مكتمل", difficulty:"مستوى الصعوبة" },
    en: { play:"Play", start:"Start now", soon:"Soon", locked:"Locked", done:"Completed", completed:"completed", difficulty:"difficulty" }
  };
  const U = () => UI[L()];

  /* بطاقة نشاط واحدة */
  function cardHTML(act) {
    const locked = act.status === "locked";
    const done   = act.status === "done";
    const featured = act.status === "featured";
    const href = act.href ? `href="${act.href}"` : 'href="#"';
    const tag = act.href && !locked ? 'a' : 'div';

    const u = U();
    const title = (L() === "en" && act.te) ? act.te : act.t;
    // علامة الحالة العلوية اليسرى
    let mark = "";
    if (locked) mark = `<span class="lock" aria-label="${u.locked}">${iconLock()}</span>`;
    else if (done) mark = `<span class="check" aria-label="${u.done}">${iconCheck()}</span>`;

    // مؤشر الصعوبة (3 نقاط)
    const dots = [0,1,2].map(i =>
      `<span class="dot ${i < act.d ? 'on' : ''}"></span>`
    ).join("");

    // الرقم بصيغة 01..50
    const num = String(act.n).padStart(2, "0");

    return `
      <${tag} ${tag === 'a' ? href : ''}
              class="card"
              data-status="${act.status}"
              data-locked="${locked}"
              data-name="${act.t} ${act.te || ""}"
              data-mech="${act.m}">
        <div class="card-thumb">
          <span class="num">${num}</span>
          ${mark}
          <span class="glyph">${G[act.g] || ""}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title">${title}</h3>
          <span class="card-mech">${act.m}</span>
        </div>
        <div class="card-foot">
          <span class="difficulty" aria-label="${u.difficulty}">${dots}</span>
          <span class="play">
            ${featured ? u.start : (locked ? u.soon : u.play)}
            ${!locked ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>` : ""}
          </span>
        </div>
      </${tag}>
    `;
  }

  /* قسم كامل */
  function sectionHTML(sec, idx) {
    // حساب نسبة الإنجاز للقسم (افتراضياً للعرض)
    const total = sec.activities.length;
    const done = sec.activities.filter(a => a.status === "done").length;
    const featured = sec.activities.filter(a => a.status === "featured").length;
    const completed = done + featured;
    const pct = Math.round((completed / total) * 100);
    const en = L() === "en";
    const secTitle = (en && sec.titleEn) ? sec.titleEn : sec.title;
    const secSub = (en && sec.subEn) ? sec.subEn : sec.sub;

    return `
      <section class="section" data-color="${sec.color}" data-id="${sec.id}">
        <header class="section-head">
          <div class="section-title-block">
            <div class="section-icon" aria-hidden="true">
              <span>${sec.icon}</span>
            </div>
            <div>
              <h2>${secTitle}</h2>
              <p class="sub">${secSub}</p>
            </div>
          </div>
          <div class="section-meta">
            <span>${completed}/${total} ${U().completed}</span>
            <div class="bar"><span style="width:${pct}%"></span></div>
          </div>
        </header>
        <div class="grid">
          ${sec.activities.map(cardHTML).join("")}
        </div>
      </section>
    `;
  }

  function iconLock() {
    return `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>`;
  }
  function iconCheck() {
    return `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>`;
  }

  /* تصيير كل الأقسام */
  function render() {
    root.innerHTML = SECTIONS.map(sectionHTML).join("");
  }

  /* تصفية القسم النشط */
  function applyFilter(filterId) {
    const sections = root.querySelectorAll(".section");
    sections.forEach(s => {
      const id = s.dataset.id;
      s.style.display = (filterId === "all" || id === filterId) ? "" : "none";
    });
  }

  /* بحث */
  function applySearch(query) {
    const q = query.trim().toLowerCase();
    const cards = root.querySelectorAll(".card");
    cards.forEach(c => {
      const name = (c.dataset.name || "").toLowerCase();
      const mech = (c.dataset.mech || "").toLowerCase();
      const hit = !q || name.includes(q) || mech.includes(q);
      c.style.display = hit ? "" : "none";
    });
    // إخفاء قسم لا يحتوي نتائج
    root.querySelectorAll(".section").forEach(s => {
      const any = [...s.querySelectorAll(".card")].some(c => c.style.display !== "none");
      if (!q) {
        s.style.opacity = "";
      } else {
        s.style.opacity = any ? "" : "0.4";
      }
    });
  }

  /* ربط أحداث التصفية والبحث */
  function bindUI() {
    // الأزرار
    document.querySelectorAll(".filter-tabs button").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-tabs button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        applyFilter(btn.dataset.filter);
      });
    });

    // البحث
    const input = document.getElementById("search-input");
    input.addEventListener("input", e => applySearch(e.target.value));

    // اختصار "/" لتركيز البحث
    document.addEventListener("keydown", e => {
      if (e.key === "/" && document.activeElement !== input) {
        e.preventDefault(); input.focus();
      }
    });
  }

  /* تحديث الإحصائيات في الأعلى وبطاقة التقدم */
  function updateStats() {
    let total = 0, done = 0, featured = 0;
    SECTIONS.forEach(s => {
      total += s.activities.length;
      s.activities.forEach(a => {
        if (a.status === "done") done++;
        if (a.status === "featured") featured++;
      });
    });
    const playable = SECTIONS.reduce((acc, s) =>
      acc + s.activities.filter(a => a.status !== "locked").length, 0);

    // اختياري: قراءة الأوسمة من localStorage
    const earned = JSON.parse(localStorage.getItem("mk_badges") || "[]").length;

    document.getElementById("stat-playable").textContent = playable;
    document.getElementById("stat-badges").textContent = earned;
    document.getElementById("stat-streak").textContent = "3";

    const completed = done + featured;
    const pct = Math.round((completed / total) * 100);
    const ring = document.getElementById("progress-ring");
    if (ring) {
      ring.style.setProperty("--pct", pct);
      ring.querySelector("span").textContent = pct + "%";
    }
    const pctEl = document.getElementById("progress-pct");
    if (pctEl) pctEl.textContent = pct + "%";
    const completedEl = document.getElementById("progress-completed");
    if (completedEl) completedEl.textContent = `${completed}/${total}`;
  }

  // تشغيل
  render();
  bindUI();
  updateStats();

  // إعادة التصيير عند تبديل اللغة
  window.addEventListener("anos:langchange", () => {
    const active = document.querySelector(".filter-tabs button.active");
    const search = document.getElementById("search-input");
    render();
    updateStats();
    if (active) applyFilter(active.dataset.filter);
    if (search && search.value) applySearch(search.value);
  });
})();
