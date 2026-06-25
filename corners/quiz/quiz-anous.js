/* ════════════════════════════════════════════════════════════════
   اختبارات الأركان — Anous surfacing
   Reads localStorage 'mkUnlocked' (written by quiz-engine on ≥75%)
   and shows the unlocked activities as a banner on the Anous dashboard,
   with direct links. Hrefs are stored relative to the Anous root, so
   they work as-is here.
   ════════════════════════════════════════════════════════════════ */
(function () {
  const NAMES = { aqeeda: { ar: 'منارة العقيدة', en: 'Faith Minaret' }, ibada: { ar: 'واحة العبادة', en: 'Worship Oasis' }, sport: { ar: 'النادي الرياضي', en: 'Sports Club' }, quds: { ar: 'ركن القدس', en: 'Al-Quds Corner' }, hisn: { ar: 'حصن الأبطال', en: "Heroes' Fortress" }, heart: { ar: 'القلب السليم', en: 'The Pure Heart' }, academy: { ar: 'أكاديمية المبدعين', en: "Innovators' Academy" }, quran: { ar: 'بستان القرآن', en: 'Quran Garden' } };
  function run() {
    let u; try { u = JSON.parse(localStorage.getItem('mkUnlocked') || '{}'); } catch (e) { return; }
    const corners = Object.keys(u || {}).filter(c => Array.isArray(u[c]) && u[c].length);
    if (!corners.length) return;
    if (document.getElementById('mkq-anous-banner')) return;
    const isAr = (document.documentElement.lang || 'ar') !== 'en';
    const tx = o => isAr ? o.ar : o.en;
    let cards = '';
    corners.forEach(c => u[c].forEach(r => {
      cards += `<a href="${r.href}" style="display:flex;align-items:center;gap:10px;background:#fff;border:1px solid #ECE3D4;border-radius:14px;padding:10px 14px;text-decoration:none;color:#23332b;font-weight:700;font-size:14px;box-shadow:0 4px 14px rgba(0,0,0,.05)">
        <span style="font-size:22px">${r.icon}</span><span>${tx(r.t)}</span></a>`;
    }));
    const list = corners.map(c => tx(NAMES[c] || { ar: c, en: c })).join('، ');
    const banner = document.createElement('section');
    banner.id = 'mkq-anous-banner';
    banner.style.cssText = 'max-width:1180px;margin:18px auto 0;padding:18px 20px;background:linear-gradient(135deg,#FBF4E6,#F3ECDD);border:1.5px solid #C9A961;border-radius:20px';
    banner.innerHTML = `<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
        <span style="font-size:26px">🎁</span>
        <div><div style="font:800 16px/1.3 'Tajawal',sans-serif;color:#23332b">${isAr ? 'أنشطة فُتِحت لك كمكافأة!' : 'Activities unlocked as a reward!'}</div>
        <div style="font:600 12.5px/1.4 'Tajawal',sans-serif;color:#7a6f5d">${isAr ? 'لأنك تخطّيتَ ٧٥٪ في: ' : 'For passing 75% in: '}${list}</div></div></div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:10px">${cards}</div>`;
    const hero = document.querySelector('.hero') || document.querySelector('.filter-bar') || document.querySelector('.shell');
    if (hero && hero.parentNode) hero.parentNode.insertBefore(banner, hero.nextSibling);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
