/* ============================================================
   LANG — تبديل عربي/إنجليزي للأنشطة
   الاستخدام: عناصر تحمل data-i18n="key"، وقاموس I18N في نشاطك:
     Lang.init(I18N)   ← يطبّق اللغة المحفوظة ويربط زر #lang-btn
     Lang.t("key")     ← نص بالسلسلة الحالية (للنصوص الديناميكية)
     document.addEventListener("langchange", fn) ← أعد الرسم عند التبديل
   ============================================================ */

const Lang = (function () {
  let cur = "ar";
  let dict = {};

  try {
    const saved = localStorage.getItem("anos_lang");
    if (saved === "en" || saved === "ar") cur = saved;
  } catch (e) {}

  function apply() {
    document.documentElement.lang = cur;
    document.documentElement.dir = cur === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const entry = dict[el.dataset.i18n];
      if (entry && entry[cur] != null) el.innerHTML = entry[cur];
    });
    const btn = document.getElementById("lang-btn");
    if (btn) btn.textContent = cur === "ar" ? "EN" : "عربي";
  }

  function toggle() {
    cur = cur === "ar" ? "en" : "ar";
    try { localStorage.setItem("anos_lang", cur); } catch (e) {}
    apply();
    document.dispatchEvent(new CustomEvent("langchange", { detail: cur }));
  }

  function init(d) {
    dict = d || {};
    const btn = document.getElementById("lang-btn");
    if (btn) btn.addEventListener("click", toggle);
    apply();
  }

  function t(key) {
    const entry = dict[key];
    if (!entry) return key;
    return entry[cur] != null ? entry[cur] : entry.ar;
  }

  return { init, t, current: () => cur };
})();

window.Lang = Lang;
