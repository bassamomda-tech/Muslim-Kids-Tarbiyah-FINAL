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
  /* what THIS child has FINISHED (anos-track.js) — stars, medals and the streak count finished activities only.
     Before the first finish is tracked on this device, earlier plays still count (nothing is taken away). */
  function finished() { try { return localStorage.getItem("anos_done_v1") ? (JSON.parse(localStorage.getItem("anos_done") || "{}") || {}) : played(); } catch (e) { return {}; } }
  function days() { try { return JSON.parse(localStorage.getItem("anos_days") || "[]") || []; } catch (e) { return []; } }
  function actId(a) { return (a.href || "").split("/").pop().replace(/\.html$/i, ""); }
  function isPlayed(a, P) { return !!(P || finished())[actId(a)]; }
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
    const P = finished();
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

    // اختصار "/" لتركيز البحث (يفتح تبويب «كلّ الأنشطة» أولاً)
    document.addEventListener("keydown", e => {
      const ae = document.activeElement, typing = ae && (ae.tagName === "INPUT" || ae.tagName === "TEXTAREA" || ae.isContentEditable);
      if (e.key === "/" && ae !== input && !typing) {
        e.preventDefault(); if (curTab !== "all") showTab("all", { hash: true }); input.focus();
      }
    });
  }

  /* تحديث الإحصائيات في الأعلى وبطاقة التقدم */
  function updateStats() {
    const P = finished(), en = L() === "en";
    let total = 0, done = 0;
    SECTIONS.forEach(s => { total += s.activities.length; s.activities.forEach(a => { if (isPlayed(a, P)) done++; }); });
    const playable = SECTIONS.reduce((acc, s) => acc + s.activities.filter(a => a.status !== "locked").length, 0);
    // a section medal = every activity in that section finished at least once
    // a medal once earned stays earned (anos_medals), even when new activities join its section
    let kept = []; try { kept = JSON.parse(localStorage.getItem("anos_medals") || "[]") || []; } catch (e) {}
    const keptIds = new Set(kept.map(m => m.id));
    const medals = SECTIONS.map(s => ({ s, got: keptIds.has(s.id) || s.activities.every(a => isPlayed(a, P)), n: s.activities.filter(a => isPlayed(a, P)).length }));
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
      : (en ? `<strong>${week} of ${GOAL} this week</strong> Finish ${GOAL - week} more to earn the “Little Achiever” badge 🏅` : `<strong>${week} من ${GOAL} هذا الأسبوع</strong> أنهِ ${GOAL - week} ${GOAL - week === 1 ? "نشاطًا" : "أنشطة"} أخرى لتنال وسام «المثابر الصغير» 🏅`);
    const row = document.getElementById("medals-row");
    if (row) row.innerHTML = medals.map(m => {
      const t = en && m.s.titleEn ? m.s.titleEn : m.s.title, tot = m.s.activities.length;
      const pc = m.got ? 100 : Math.round((m.n / tot) * 100);
      return `<div class="badge-mini medal-tile ${m.got ? "earned" : "locked"}" data-color="${m.s.color}" title="${t} — ${m.n}/${tot}">
        <span class="mt-ic" aria-hidden="true">${m.got ? "★" : m.s.icon}</span>
        <span class="mt-name">${t}</span>
        <span class="mt-n">${m.got ? (en ? "Earned!" : "نِلتَه!") : m.n + "/" + tot}</span>
        <span class="mt-bar" aria-hidden="true"><span style="width:${pc}%"></span></span>
      </div>`;
    }).join("");
    try { const keep = kept.slice(); medals.forEach(m => { if (m.got && !keptIds.has(m.s.id)) keep.push({ id: m.s.id, ar: m.s.title, en: m.s.titleEn || m.s.title }); }); localStorage.setItem("anos_medals", JSON.stringify(keep)); } catch (e) {}
    const mc = document.getElementById("medals-count");
    if (mc) mc.textContent = medals.filter(m => m.got).length + " / " + medals.length;

    /* the «Today» tab: the child's own numbers, big and simple (same values as the chips above) */
    const setT = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
    const nStreak = streak();
    setT("kid-stars", done);
    setT("kid-streak", nStreak);
    setT("kid-medals", medals.filter(m => m.got).length);
    /* the «My medals» tab: the weekly badge and the streak */
    let weeks = 0; try { const W = JSON.parse(localStorage.getItem("anos_weekly") || "[]"); weeks = Array.isArray(W) ? W.length : 0; } catch (e) {}
    const aw = document.getElementById("award-weekly");
    if (aw) aw.classList.toggle("earned", week >= GOAL || weeks > 0);
    setT("award-weekly-txt", week >= GOAL
      ? (en ? "Earned this week!" : "نلتَه هذا الأسبوع!")
      : (en ? `${week} of ${GOAL} this week` : `${week} من ${GOAL} هذا الأسبوع`) + (weeks ? (en ? ` · earned ${weeks}×` : ` · نلتَه ${weeks} مرّة`) : ""));
    const as = document.getElementById("award-streak");
    if (as) as.classList.toggle("earned", nStreak > 0);
    setT("award-streak-txt", en ? `${nStreak} ${nStreak === 1 ? "day" : "days"} in a row` : `${nStreak} ${nStreak === 1 ? "يوم" : "أيام"} متتالية`);
  }

  /* ---------- «اليوم»: تابِع اللعب + اقتراحات ---------- */
  function allActs() {
    const out = [];
    SECTIONS.forEach(s => s.activities.forEach(a => out.push({ a, s })));
    return out;
  }
  function miniHTML(x) {
    const en = L() === "en", a = x.a, s = x.s;
    const title = (en && a.te) ? a.te : a.t;
    const sec = (en && s.titleEn) ? s.titleEn : s.title;
    const done = isPlayed(a);
    return `<a class="mini-act" href="${a.href}" style="--c:var(--${s.color});--ci:var(--${s.color}-ink)">
      <span class="ma-thumb" aria-hidden="true">${G[a.g] || s.icon}</span>
      <span class="ma-txt"><b>${title}</b><small>${sec}${done ? (en ? " · ✓ played" : " · ✓ لعبتَه") : ""}</small></span>
      <span class="ma-go">${U().play}</span>
    </a>`;
  }
  function renderToday() {
    const acts = allActs().filter(x => x.a.href && x.a.status !== "locked");
    const byId = {}; acts.forEach(x => { byId[actId(x.a)] = x; });
    const P = played(), F = finished();
    // keep playing: the activities opened most recently (newest first)
    const recent = Object.keys(P).filter(k => byId[k]).sort((p, q) => ((P[q] && P[q][1]) || 0) - ((P[p] && P[p][1]) || 0)).slice(0, 3);
    const cWrap = document.getElementById("today-continue"), cList = document.getElementById("continue-list");
    if (cWrap && cList) { cWrap.hidden = !recent.length; cList.innerHTML = recent.map(k => miniHTML(byId[k])).join(""); }
    // try today: not yet finished, one from a different section each, changes once a day
    const sList = document.getElementById("suggest-list");
    if (sList) {
      const day = Math.floor((Date.now() - new Date().getTimezoneOffset() * 6e4) / 864e5);
      const used = new Set(recent), pick = [];
      if (!Object.keys(P).length) { const f = acts.find(x => x.a.status === "featured"); if (f) { pick.push(f); used.add(actId(f.a)); } }
      for (let i = 0; i < SECTIONS.length && pick.length < 4; i++) {
        const s = SECTIONS[(day + i * 3) % SECTIONS.length];
        const fresh = s.activities.filter(a => a.href && a.status !== "locked" && !F[actId(a)] && !used.has(actId(a)));
        const pool = fresh.length ? fresh : s.activities.filter(a => a.href && a.status !== "locked" && !used.has(actId(a)));
        if (!pool.length) continue;
        const a = pool[(day + i) % pool.length]; used.add(actId(a)); pick.push({ a, s });
      }
      sList.innerHTML = pick.map(miniHTML).join("");
    }
  }

  /* ---------- التبويبات الثلاثة: اليوم · أوسمتي · كلّ الأنشطة ---------- */
  const TABS = ["today", "medals", "all"], TAB_KEY = "anos_dash_tab";
  let curTab = null;
  function tabBtn(t) { return document.getElementById("tab-" + t); }
  function showTab(t, opts) {
    opts = opts || {};
    if (TABS.indexOf(t) < 0) t = "today";
    const changed = curTab !== t; curTab = t;
    TABS.forEach(x => {
      const b = tabBtn(x), p = document.getElementById("panel-" + x), on = x === t;
      if (b) { b.setAttribute("aria-selected", on ? "true" : "false"); b.tabIndex = on ? 0 : -1; b.classList.toggle("active", on); }
      if (p) p.hidden = !on;
    });
    try { sessionStorage.setItem(TAB_KEY, t); } catch (e) {}
    if (opts.hash) { try { history.replaceState(null, "", "#" + t); } catch (e) {} }
    if (opts.focus && tabBtn(t)) tabBtn(t).focus();
    // when the tab bar is stuck at the top, bring the new tab's start into view
    if (changed && opts.scroll !== false) {
      const nav = document.querySelector(".dash-tabs");
      if (nav) {
        const navTop = nav.getBoundingClientRect().top, panel = document.getElementById("panel-" + t);
        const pTop = panel ? panel.getBoundingClientRect().top : 0;
        if (pTop < navTop + nav.offsetHeight) window.scrollTo(0, Math.max(0, window.scrollY + pTop - navTop - nav.offsetHeight - 8));
      }
    }
  }
  /* which tab holds an element (for links like #sections or #medals-row) */
  function tabOf(el) { const p = el && el.closest && el.closest("[data-panel]"); return p ? p.dataset.panel : null; }
  function fromHash(h, scroll) {
    h = (h || "").replace(/^#/, "");
    if (!h) return false;
    if (TABS.indexOf(h) >= 0) { showTab(h); return true; }
    let el = null; try { el = document.getElementById(decodeURIComponent(h)); } catch (e) {}
    const t = tabOf(el);
    if (!t) return false;
    showTab(t, { scroll: false });
    if (scroll) requestAnimationFrame(() => el.scrollIntoView({ block: "start" }));
    return true;
  }
  function bindTabs() {
    TABS.forEach(t => {
      const b = tabBtn(t); if (!b) return;
      b.addEventListener("click", () => showTab(t, { hash: true }));
      b.addEventListener("keydown", e => {
        const rtl = getComputedStyle(b).direction === "rtl";
        let i = TABS.indexOf(t), n = null;
        if (e.key === "ArrowRight") n = i + (rtl ? -1 : 1);
        else if (e.key === "ArrowLeft") n = i + (rtl ? 1 : -1);
        else if (e.key === "Home") n = 0;
        else if (e.key === "End") n = TABS.length - 1;
        if (n === null) return;
        e.preventDefault();
        showTab(TABS[(n + TABS.length) % TABS.length], { hash: true, focus: true });
      });
    });
    // in-page links (#all, #medals, #sections …) open the tab that holds their target first
    document.addEventListener("click", e => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a || a.closest("#mktb")) return;
      const h = a.getAttribute("href");
      if (h.length < 2) return;
      if (fromHash(h, true)) { e.preventDefault(); try { history.replaceState(null, "", TABS.indexOf(h.slice(1)) >= 0 ? h : "#" + tabOf(document.getElementById(h.slice(1)))); } catch (x) {} }
    });
    window.addEventListener("hashchange", () => fromHash(location.hash, true));
    let start = null; try { start = sessionStorage.getItem(TAB_KEY); } catch (e) {}
    if (!fromHash(location.hash, true)) showTab(TABS.indexOf(start) >= 0 ? start : "today", { scroll: false });
  }

  // تشغيل
  render();
  bindUI();
  updateStats();
  renderToday();
  bindTabs();

  // إعادة التصيير عند تبديل اللغة
  window.addEventListener("anos:langchange", () => {
    const active = document.querySelector(".filter-tabs button.active");
    const search = document.getElementById("search-input");
    render();
    updateStats();
    renderToday();
    if (active) applyFilter(active.dataset.filter);
    if (search && search.value) applySearch(search.value);
  });
})();
