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

  /* what THIS child has really played (written by activity-common.js on every activity page) */
  function played() { try { return JSON.parse(localStorage.getItem("anos_played") || "{}") || {}; } catch (e) { return {}; } }
  function days() { try { return JSON.parse(localStorage.getItem("anos_days") || "[]") || []; } catch (e) { return []; } }
  function actId(a) { return (a.href || "").split("/").pop().replace(/\.html$/i, ""); }
  function isPlayed(a, P) { return !!(P || played())[actId(a)]; }
  function streak() {   // days in a row up to today (or up to yesterday, so a streak isn't lost before today's play)
    const set = new Set(days()), d = new Date(); let n = 0;
    const key = (x) => x.getFullYear() + "-" + ("0" + (x.getMonth() + 1)).slice(-2) + "-" + ("0" + x.getDate()).slice(-2);
    if (!set.has(key(d))) d.setDate(d.getDate() - 1);
    while (set.has(key(d))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function playedThisWeek(P) { const since = Date.now() - 7 * 864e5; return Object.keys(P).filter(k => (P[k][1] || 0) >= since).length; }

  /* بطاقة نشاط واحدة */
  function cardHTML(act) {
    const locked = act.status === "locked";
    const done   = isPlayed(act);
    const featured = act.status === "featured" && !Object.keys(played()).length;   // «ابدأ من هنا» only until the first play
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
              data-status="${featured ? "featured" : (done ? "done" : act.status === "featured" ? "normal" : act.status)}"
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
          ${done ? `<span class="card-mech">${L() === "en" ? "✓ You played it" : "✓ لعبتَه"}</span>` : ""}
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
    const P = played();
    const completed = sec.activities.filter(a => isPlayed(a, P)).length;
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
            <span>${completed}/${total} ${L() === "en" ? "played" : "لعبتَها"}</span>
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
    const P = played(), en = L() === "en";
    let total = 0, done = 0;
    SECTIONS.forEach(s => { total += s.activities.length; s.activities.forEach(a => { if (isPlayed(a, P)) done++; }); });
    const playable = SECTIONS.reduce((acc, s) => acc + s.activities.filter(a => a.status !== "locked").length, 0);
    // a section medal = every activity in that section played at least once
    const medals = SECTIONS.map(s => ({ s, got: s.activities.every(a => isPlayed(a, P)), n: s.activities.filter(a => isPlayed(a, P)).length }));
    const week = playedThisWeek(P), GOAL = 4;

    document.getElementById("stat-playable").textContent = playable;
    document.getElementById("stat-badges").textContent = medals.filter(m => m.got).length;
    document.getElementById("stat-streak").textContent = streak();

    const pct = Math.min(100, Math.round((week / GOAL) * 100));
    const ring = document.getElementById("progress-ring");
    if (ring) { ring.style.setProperty("--pct", pct); ring.querySelector("span").textContent = Math.min(week, GOAL) + "/" + GOAL; }
    const pctEl = document.getElementById("progress-pct");
    if (pctEl) pctEl.textContent = done + "/" + total;
    const meta = document.getElementById("progress-meta");
    if (meta) meta.innerHTML = week >= GOAL
      ? (en ? "<strong>Well done! 🏅</strong> You earned the “Little Achiever” badge this week — keep going!" : "<strong>أحسنت! 🏅</strong> نلتَ وسام «المثابر الصغير» هذا الأسبوع — واصل!")
      : (en ? `<strong>${week} of ${GOAL} this week</strong> Play ${GOAL - week} more to earn the “Little Achiever” badge 🏅` : `<strong>${week} من ${GOAL} هذا الأسبوع</strong> العب ${GOAL - week} ${GOAL - week === 1 ? "نشاطًا" : "أنشطة"} أخرى لتنال وسام «المثابر الصغير» 🏅`);
    const row = document.getElementById("medals-row");
    if (row) row.innerHTML = medals.map(m => {
      const t = en && m.s.titleEn ? m.s.titleEn : m.s.title;
      return `<div class="badge-mini ${m.got ? "earned" : "locked"}" title="${t} — ${m.n}/${m.s.activities.length}">${m.got ? "★" : m.s.icon}</div>`;
    }).join("");
    const mc = document.getElementById("medals-count");
    if (mc) mc.textContent = medals.filter(m => m.got).length + " / " + medals.length;
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
