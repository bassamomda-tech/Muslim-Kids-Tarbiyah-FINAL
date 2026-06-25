/* ============================================================
   i18n.js — Shared bilingual engine for the Anos Activities corner
   ------------------------------------------------------------
   • Default language: Arabic (ar). Persists choice in localStorage
     ('bunyanLang' — shared with the rest of the city) and reads the
     ?lang= URL param when arriving from the city map.
   • Keeps Arabic GAME CONTENT intact; translates the UI only, via a
     dictionary keyed by the exact Arabic source string.
   • A text-node walker swaps known Arabic UI strings → English (and
     restores Arabic on toggle), including common element attributes.
   • A MutationObserver re-applies after activities inject DOM, so
     dynamically generated buttons / instructions also translate —
     as long as their exact Arabic text exists in the dictionary.
   ------------------------------------------------------------
   Per page: optionally set `window.PAGE_DICT = { "عربي": "English" }`
   BEFORE this script loads to add page-specific UI strings.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- shared chrome dictionary (every page) ---------- */
  var SHARED = {
    // nav / chrome
    "العودة للمدينة": "Back to City",
    "↩︎ العودة للمدينة": "↩︎ Back to City",
    "الرجوع للوحة الأنشطة": "Back to Activities",
    "إعادة الضبط": "Reset",
    "كتم الصوت": "Mute",
    "تشغيل الصوت": "Unmute",
    "إغلاق": "Close",
    "انتهيت": "Done",
    "العب": "Play",
    "ابدأ الآن": "Start now",
    "قريباً": "Soon",
    "مكتمل": "Completed",
    "مغلق": "Locked",
    // sections (also used in breadcrumbs)
    "العبادات والإيمان": "Worship & Faith",
    "اللغة والمعرفة": "Language & Knowledge",
    "الفن والإبداع": "Art & Creativity",
    "العلوم والاستكشاف": "Science & Discovery",
    "تحديات السيرة واللغة": "Seerah & Language Challenges",
    "الأركان، الأذكار، السنن، والقيم الإيمانية": "Pillars, dhikr, sunnahs & faith values",
    "الكلمات، الحروف، الأحاديث والمعلومات": "Words, letters, hadith & knowledge",
    "التلوين، التصميم، الأناشيد، والقصص": "Coloring, design, nasheeds & stories",
    "العالم من حولنا، المخلوقات، والكون": "The world around us, creatures & cosmos",
    "ألعاب سريعة، تحديات، وألغاز ممتعة": "Quick games, challenges & fun puzzles",
    // common panel / modal labels
    "كيف ألعب؟": "How to play?",
    "كيف ألعب": "How to play",
    "طريقة اللعب": "How to play",
    "طريقة التحديد:": "How to select:",
    "طريقة التحديد": "How to select",
    "إحصاءات": "Stats",
    "المُكتشَف": "Found",
    "المكتشف": "Found",
    "جولاتٌ سابقة": "Previous rounds",
    "جولات سابقة": "Previous rounds",
    "أسرع وقت": "Best time",
    "أفضل وقت": "Best time",
    "الحديث الشريف": "Hadith",
    "الحديث": "Hadith",
    "★ رقم قياسي جديد ★": "★ New record ★",
    "رقم قياسي جديد": "New record",
    // hadith attribution
    "رواه مسلم": "Narrated by Muslim",
    "رواه البخاري": "Narrated by al-Bukhari",
    "رواه البخاري ومسلم": "Narrated by al-Bukhari & Muslim",
    "متفق عليه": "Agreed upon (Bukhari & Muslim)",
    "رواه الترمذي": "Narrated by at-Tirmidhi",
    "رواه أبو داود": "Narrated by Abu Dawud",
    "رواه أحمد": "Narrated by Ahmad",
    "رواه ابن ماجه": "Narrated by Ibn Majah",
    "رواه الطبراني": "Narrated by at-Tabarani",
    "رواه النسائي": "Narrated by an-Nasa'i",
    "رواه أبو داود والنسائي": "Narrated by Abu Dawud & an-Nasa'i",
    "رواه أحمد والترمذي": "Narrated by Ahmad & at-Tirmidhi",
    "رواه الترمذي وابن ماجه": "Narrated by at-Tirmidhi & Ibn Majah",
    // authenticity grade (shown beside every hadith)
    "صحيح": "Sahih (authentic)",
    "حسن": "Hasan (sound)",
    "صحيح · متفق عليه": "Sahih · Agreed upon",
    // narrator + grade combos (data-driven displays)
    "رواه البخاري ومسلم · صحيح": "Narrated by al-Bukhari & Muslim · Sahih (authentic)",
    "رواه البخاري · صحيح": "Narrated by al-Bukhari · Sahih (authentic)",
    "رواه الترمذي · صحيح": "Narrated by at-Tirmidhi · Sahih (authentic)",
    "حديث شريف · رواه ابن ماجه · صحيح": "A hadith · Narrated by Ibn Majah · Sahih",
    "حديث شريف · رواه البخاري · صحيح": "A hadith · Narrated by al-Bukhari · Sahih",
    "حديث شريف · رواه الترمذي · صحيح": "A hadith · Narrated by at-Tirmidhi · Sahih",
    // replay / modal buttons
    "جولة جديدة": "New round",
    "جَولة جديدة": "New round",
    "جولةٌ جديدة": "New round",
    "العب مرة أخرى": "Play again",
    "العب مجدداً": "Play again",
    "إعادة من البداية": "Restart",
    "ابدأ من جديد": "Start over",
    "لغز جديد": "New puzzle",
    "قضية جديدة": "New case",
    "رحلة جديدة": "New journey",
    "شبكة جديدة": "New grid",
    "جهّز من جديد": "Pack again",
    "نشيد آخر": "Another nasheed",
    "تلميح": "Hint",
    "أعطني تلميحاً": "Give me a hint",
    "موضوع آخر": "New topic",
    "أحسنت!": "Well done!",
    "أحسنتَ!": "Well done!",
    "رائع!": "Awesome!",
    "مبروك!": "Congratulations!",
    "النتيجة": "Score",
    "الوقت": "Time",
    "محاولات": "Attempts",
    "الموضوع": "Topic",
    "نقاط": "Points",
    "المستوى": "Level",
    "الجولة": "Round"
  };

  var KEY = "bunyanLang";

  function pickLang() {
    var qs = new URLSearchParams(location.search);
    var q = qs.get("lang");
    if (q === "ar" || q === "en") { try { localStorage.setItem(KEY, q); } catch (e) {} return q; }
    try { var s = localStorage.getItem(KEY); if (s === "ar" || s === "en") return s; } catch (e) {}
    return "ar";
  }

  var I18N = {
    lang: pickLang(),
    dict: Object.assign({}, SHARED, (window.PAGE_DICT || {})),
    _nodes: null,      // [{node, ar}]
    _attrs: null,      // [{el, name, ar}]
    _observer: null,
    _applying: false
  };

  function norm(s) { return s.trim().replace(/\s+/g, " "); }
  function tr(ar) {
    return I18N.dict[norm(ar)];
  }

  /* collect translatable text nodes + attributes once */
  function collect() {
    I18N._nodes = [];
    I18N._attrs = [];
    var skip = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1 };
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (skip[n.parentNode && n.parentNode.nodeName]) return NodeFilter.FILTER_REJECT;
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while ((n = walker.nextNode())) I18N._nodes.push({ node: n, ar: n.nodeValue });
    // attributes
    var attrNames = ["placeholder", "title", "aria-label", "alt", "value"];
    document.querySelectorAll("[placeholder],[title],[aria-label],[alt]").forEach(function (el) {
      attrNames.forEach(function (a) {
        if (el.hasAttribute(a)) I18N._attrs.push({ el: el, name: a, ar: el.getAttribute(a) });
      });
    });
  }

  function applyText() {
    I18N._applying = true;
    var en = I18N.lang === "en";
    I18N._nodes.forEach(function (rec) {
      if (en) {
        var t = tr(rec.ar);
        if (t != null) {
          // preserve leading / trailing whitespace
          var m = rec.ar.match(/^(\s*)([\s\S]*?)(\s*)$/);
          rec.node.nodeValue = (m ? m[1] : "") + t + (m ? m[3] : "");
        }
      } else {
        if (rec.node.nodeValue !== rec.ar) rec.node.nodeValue = rec.ar;
      }
    });
    I18N._attrs.forEach(function (rec) {
      if (en) { var t = tr(rec.ar); if (t != null) rec.el.setAttribute(rec.name, t); }
      else if (rec.el.getAttribute(rec.name) !== rec.ar) rec.el.setAttribute(rec.name, rec.ar);
    });
    I18N._applying = false;
  }

  function applyDir() {
    var en = I18N.lang === "en";
    document.documentElement.lang = en ? "en" : "ar";
    document.documentElement.dir = en ? "ltr" : "rtl";
    document.documentElement.classList.toggle("lang-en", en);
    document.documentElement.classList.toggle("lang-ar", !en);
  }

  function refresh() { collect(); applyText(); }

  function setLang(l) {
    I18N.lang = (l === "en") ? "en" : "ar";
    try { localStorage.setItem(KEY, I18N.lang); } catch (e) {}
    applyDir();
    refresh();
    syncToggle();
    try { window.dispatchEvent(new CustomEvent("anos:langchange", { detail: { lang: I18N.lang } })); } catch (e) {}
  }

  /* ---------- toggle button ---------- */
  function syncToggle() {
    var btn = document.getElementById("__langToggle");
    if (btn) btn.textContent = I18N.lang === "en" ? "عربي" : "EN";
  }
  function injectToggle() {
    if (document.getElementById("__langToggle")) return;
    var btn = document.createElement("button");
    btn.id = "__langToggle";
    btn.type = "button";
    btn.setAttribute("aria-label", "Toggle language");
    btn.textContent = I18N.lang === "en" ? "عربي" : "EN";
    btn.onclick = function () { setLang(I18N.lang === "en" ? "ar" : "en"); };
    /* Prefer sitting INSIDE the nav action group (aligned with the reset
       button) so it never overlaps the back-link. Fall back to a fixed
       corner button only if no nav group exists. */
    var host = document.querySelector(".activity-actions");
    if (host) {
      btn.style.cssText =
        "height:40px;min-width:54px;padding:0 16px;border-radius:999px;cursor:pointer;" +
        "background:#23332b;color:#FBF6EC;border:2px solid #C9A961;" +
        "display:inline-flex;align-items:center;justify-content:center;" +
        "font:800 13px/1 'Plus Jakarta Sans',system-ui,sans-serif;letter-spacing:.02em;" +
        "transition:filter .18s ease;";
      btn.onmouseenter = function () { btn.style.filter = "brightness(1.12)"; };
      btn.onmouseleave = function () { btn.style.filter = "none"; };
      host.insertBefore(btn, host.firstChild);
    } else {
      btn.style.cssText =
        "position:fixed;top:14px;inset-inline-start:14px;z-index:2147483646;" +
        "background:#23332b;color:#FBF6EC;border:2px solid #C9A961;border-radius:999px;" +
        "min-width:54px;padding:8px 14px;font:800 14px/1 'Plus Jakarta Sans',system-ui,sans-serif;" +
        "cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.22);letter-spacing:.02em;";
      document.body.appendChild(btn);
    }
  }

  /* ---------- observer for dynamically injected DOM ---------- */
  function startObserver() {
    if (I18N._observer) return;
    var pending = false;
    I18N._observer = new MutationObserver(function () {
      if (I18N._applying) return;
      if (pending) return;
      pending = true;
      requestAnimationFrame(function () { pending = false; refresh(); });
    });
    I18N._observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  function boot() {
    // merge any late-defined page dict
    if (window.PAGE_DICT) I18N.dict = Object.assign(I18N.dict, window.PAGE_DICT);
    injectGradeStyle();
    applyDir();
    collect();
    applyText();
    injectToggle();
    startObserver();
    syncToggle();
  }

  /* ---------- shared hadith-grade badge style ---------- */
  function injectGradeStyle() {
    if (document.getElementById("__gradeStyle")) return;
    var s = document.createElement("style");
    s.id = "__gradeStyle";
    s.textContent =
      ".hadith-grade{display:inline-block;margin-inline-start:6px;padding:1px 8px;border-radius:999px;" +
      "font-size:.82em;font-weight:800;vertical-align:middle;white-space:nowrap;line-height:1.7}" +
      ".hadith-grade.ok{background:rgba(31,138,91,.16);color:#1F8A5B}" +
      ".hadith-grade.hasan{background:rgba(212,160,23,.18);color:#9a7414}";
    (document.head || document.documentElement).appendChild(s);
  }

  window.I18N = I18N;
  I18N.setLang = setLang;
  I18N.refresh = refresh;
  I18N.addDict = function (obj) { Object.assign(I18N.dict, obj || {}); refresh(); };
  I18N.t = function (ar) { return I18N.lang === "en" ? (tr(ar) || ar) : ar; };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
