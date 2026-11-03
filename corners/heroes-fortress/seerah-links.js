/* seerah-links.js — the Seerah journey here is the ONE timeline of the Prophet's ﷺ life.
   Other corners tell some of its events in more detail (a moment, a hadith story, a landmark,
   a virtual tour). This adds one calm "read more" row under a station that has such pages,
   so every event links to where else it is told — instead of each place retelling it.
   The reverse links live in corners/treasures/*.html (TR_PAGE.seerah). */
(function () {
  var id = new URLSearchParams(location.search).get('id'); if (!id) return;
  var T = '../treasures/';
  var PM = ['🌙', 'مواقف النبي ﷺ', 'Moments of the Prophet ﷺ', 'prophet-moments.html#'];
  var HS = ['📖', 'قصص السنة', 'Sunnah Stories', 'hadith-stories.html#'];
  var LM = ['🕋', 'المعالم والخرائط', 'Landmarks & Maps', 'landmarks.html#'];
  var TO = ['🧭', 'جولة افتراضية', 'Virtual tour', 'tours.html'];
  function L(kind, item, ar, en) { return { k: kind, h: T + kind[3] + (item || ''), ar: ar, en: en }; }
  var MAP = {
    cave:     [L(LM, 'hira', 'غار حراء', 'The Cave of Hira')],
    amalhuzn: [L(PM, 'taif', 'يوم الطائف وملَك الجبال', "Ta'if and the Angel of the Mountains")],
    israa:    [L(LM, 'aqsa', 'المسجد الأقصى', 'Al-Masjid al-Aqsa'), L(TO, '', 'رحلة إلى بيت المقدس', 'A Journey to Bayt al-Maqdis')],
    hijrah:   [L(HS, 'cave-thawr', '«ما ظنّك باثنين اللهُ ثالثُهما؟»', '"What do you think of two, when Allah is their third?"'), L(LM, 'quba', 'مسجد قباء', 'Quba Mosque'), L(TO, '', 'رحلة الهجرة النبوية على الخريطة', 'The Hijrah on the map')],
    masjid:   [L(LM, 'nabawi', 'المسجد النبوي', "The Prophet's Mosque"), L(PM, 'trunk', 'جذع النخلة الذي بكى', 'The palm trunk that cried')],
    uhud:     [L(LM, 'uhud', 'جبل أُحُد', 'Mount Uhud')],
    ahzab:    [L(PM, 'trench', 'يحفر مع أصحابه', 'Digging with his Companions')],
    fath:     [L(PM, 'makkah', 'يوم فتح مكة', 'The day Makkah was opened'), L(LM, 'kaaba', 'الكعبة المشرّفة', 'The Kaaba')],
    farewell: [L(LM, 'arafat', 'جبل عرفات', 'Mount Arafah')]
  };
  var links = MAP[id]; if (!links) return;
  function isAr() { return (document.documentElement.lang || localStorage.getItem('bunyanLang') || 'ar') !== 'en'; }
  function paint(box) {
    var ar = isAr();
    box.innerHTML = '<div style="font-weight:900;margin-bottom:.55rem">📚 ' + (ar ? 'اقرأ هذا الحدث بتفصيلٍ أكثر' : 'Read more about this event') + '</div>' +
      '<div style="display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center">' + links.map(function (l) {
        return '<a href="' + l.h + '" style="display:inline-flex;align-items:center;gap:.35rem;padding:.5rem .95rem;border-radius:999px;background:#fff;color:#7A3E0E;text-decoration:none;font-weight:800;font-size:.88rem;border:1.5px solid #E6B17A">' +
          l.k[0] + ' <span>' + (ar ? l.ar : l.en) + '</span><small style="opacity:.7;font-weight:700">· ' + (ar ? l.k[1] : l.k[2]) + '</small></a>';
      }).join('') + '</div>';
  }
  function mount() {
    var st = document.getElementById('station'); if (!st || document.getElementById('seerahLinks')) return;
    var box = document.createElement('section'); box.id = 'seerahLinks';
    box.style.cssText = 'max-width:820px;margin:1.4rem auto;padding:1rem;border-radius:18px;border:1.5px dashed #E6B17A;background:rgba(255,244,230,.92);color:#5A2E0A;text-align:center;font-family:Tajawal,Nunito,sans-serif';
    st.parentNode.insertBefore(box, st.nextSibling); paint(box);   // after the whole station (the engine moves its own nav around)
    new MutationObserver(function () { paint(box); }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
})();
