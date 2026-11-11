/* ════════════════════════════════════════════════════════════════
   mk-journey.js — «رحلتي» (the child's journey), shared by «يومي», the dhikr garden and the home page.
   • Hijri date (Umm al-Qura) and the SEASON it brings (Ramadan, the ten days of Dhul-Hijjah, the two
     Eids, Muharram & Ashura, the white days, Friday) — each with its own message and a link.
   • The child's AGE GROUP (4–6 · 7–9 · 10–12), chosen once on «يومي».
   • The child's LEVEL on the journey (🌱 seed → 🌴 tall palm), from the stars they have earned.
   • «يومي» log + day streak, and the palm trees of the dhikr garden.
   All keys are ordinary child keys (no "mk:" prefix), so mk-system.js keeps them per child and syncs them.
   Window global: MKJourney.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (window.MKJourney) return;
  var LS = window.localStorage;
  function jget(k, d) { try { var v = JSON.parse(LS.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
  function jset(k, v) { try { LS.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function lang() { try { return LS.getItem('bunyanLang') === 'en' ? 'en' : 'ar'; } catch (e) { return 'ar'; } }
  function dayKey(d) { d = d || new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }

  /* ── where the shared folder is, from any page ── */
  var ME = (document.currentScript && document.currentScript.src) || '';
  function shared(file) { return ME ? ME.replace(/mk-journey\.js.*$/, file) : file; }

  /* ── Hijri date ── */
  var HM = { ar: ['محرّم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوّال', 'ذو القعدة', 'ذو الحجّة'],
             en: ['Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Akhir', 'Jumada al-Ula', 'Jumada al-Akhirah', 'Rajab', "Sha'ban", 'Ramadan', 'Shawwal', "Dhu al-Qa'dah", 'Dhu al-Hijjah'] };
  function hijri(d) {
    d = d || new Date();
    try {
      var p = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', { day: 'numeric', month: 'numeric', year: 'numeric' }).formatToParts(d), o = {};
      p.forEach(function (x) { if (x.type === 'day' || x.type === 'month' || x.type === 'year') o[x.type] = parseInt(x.value, 10); });
      if (o.day && o.month && o.year) return { d: o.day, m: o.month, y: o.year };
    } catch (e) {}
    return null;
  }
  function arNum(n) { return String(n).replace(/\d/g, function (c) { return '٠١٢٣٤٥٦٧٨٩'[c]; }); }
  function hijriText(h) {
    h = h || hijri(); if (!h) return '';
    return lang() === 'ar' ? arNum(h.d) + ' ' + HM.ar[h.m - 1] + ' ' + arNum(h.y) + ' هـ' : h.d + ' ' + HM.en[h.m - 1] + ' ' + h.y + ' AH';
  }

  /* ── seasons: the first one that matches today wins (most special first). href = path from the site root ── */
  var SEASONS = [
    { id: 'eid-fitr', icon: '🎉', c: '#D4A017', test: function (h) { return h.m === 10 && h.d <= 3; },
      t: { ar: 'عيد الفطر مبارك! 🎉', en: 'Eid Mubarak! 🎉' },
      s: { ar: 'يومُ فرحٍ وشكرٍ لله: البس أجمل ثيابك، وكبّر الله، وصِل أهلك، وأدخل السرور على من حولك.', en: 'A day of joy and thanks to Allah: wear your best clothes, say takbir, visit family and make others happy.' },
      go: { ar: 'آداب العيد', en: 'Eid manners' }, href: 'corners/treasures/eids.html' },
    { id: 'eid-adha', icon: '🐑', c: '#D4A017', test: function (h) { return h.m === 12 && h.d >= 10 && h.d <= 13; },
      t: { ar: 'عيد الأضحى مبارك! 🐑', en: 'Eid al-Adha Mubarak! 🐑' },
      s: { ar: 'نتذكّر طاعةَ إبراهيم وإسماعيل عليهما السلام، ونكبّر الله، ونشارك الأضحية مع الأهل والفقراء.', en: 'We remember the obedience of Ibrahim and Isma\'il (peace be upon them), say takbir, and share the sacrifice with family and the poor.' },
      go: { ar: 'آداب العيد', en: 'Eid manners' }, href: 'corners/treasures/eids.html' },
    { id: 'arafah', icon: '🤲', c: '#C0392B', test: function (h) { return h.m === 12 && h.d === 9; },
      t: { ar: 'اليوم يومُ عرفة 🤲', en: 'Today is the Day of Arafah 🤲' },
      s: { ar: 'خيرُ يومٍ للدعاء. الحُجّاج على جبل عرفات، ونحن ندعو الله كثيرًا في بيوتنا.', en: 'The best day for du\'a. The pilgrims stand at Arafat, and we make lots of du\'a at home.' },
      go: { ar: 'رحلة الحج', en: 'The Hajj journey' }, href: 'corners/little-district/pages/ibada-journeys.html?j=hajj' },
    { id: 'dhul-hijjah', icon: '🕋', c: '#C0392B', test: function (h) { return h.m === 12 && h.d <= 8; },
      t: { ar: 'العشرُ الأوائل من ذي الحجّة 🕋', en: 'The first ten days of Dhul-Hijjah 🕋' },
      s: { ar: 'أفضلُ أيام الدنيا! أكثِر من التكبير: الله أكبر، الله أكبر، لا إله إلا الله، والله أكبر، الله أكبر، ولله الحمد.', en: 'The best days of the year! Say lots of takbir: Allahu akbar, Allahu akbar, la ilaha illa Allah, wa Allahu akbar, Allahu akbar, wa lillahil-hamd.' },
      go: { ar: 'رحلة الحج', en: 'The Hajj journey' }, href: 'corners/little-district/pages/ibada-journeys.html?j=hajj' },
    { id: 'ramadan-last', icon: '✨', c: '#6C4AB6', test: function (h) { return h.m === 9 && h.d >= 21; },
      t: { ar: 'العشرُ الأواخر من رمضان ✨', en: 'The last ten nights of Ramadan ✨' },
      s: { ar: 'فيها ليلةُ القدر، خيرٌ من ألف شهر. قل كثيرًا: «اللهمّ إنّك عفوٌّ تحبّ العفوَ فاعفُ عنّي».', en: 'Laylat al-Qadr is in them — better than a thousand months. Say often: "O Allah, You are forgiving and love to forgive, so forgive me."' },
      go: { ar: 'مدرسة الصيام', en: 'Fasting school' }, href: 'corners/little-district/pages/ibada-journeys.html?j=fasting' },
    { id: 'ramadan', icon: '🌙', c: '#6C4AB6', test: function (h) { return h.m === 9; },
      t: { ar: 'رمضان كريم 🌙', en: 'Ramadan Kareem 🌙' },
      s: { ar: 'شهرُ القرآن والصيام والخير. جرّب اليوم: آية تحفظها، وصدقة صغيرة، ودعاء عند الإفطار.', en: 'The month of the Quran, fasting and good deeds. Today try: one ayah to learn, a small charity, and a du\'a at iftar.' },
      go: { ar: 'مدرسة الصيام', en: 'Fasting school' }, href: 'corners/little-district/pages/ibada-journeys.html?j=fasting' },
    { id: 'ashura', icon: '🌊', c: '#2E6DA4', test: function (h) { return h.m === 1 && (h.d === 9 || h.d === 10); },
      t: { ar: 'يومُ عاشوراء 🌊', en: 'The Day of Ashura 🌊' },
      s: { ar: 'اليوم الذي نجّى الله فيه موسى عليه السلام من فرعون. صامه النبي ﷺ، ويُستحبّ صيام التاسع معه.', en: 'The day Allah saved Musa (peace be upon him) from Pharaoh. The Prophet ﷺ fasted it, and it is recommended to fast the 9th with it.' },
      go: { ar: 'قصص القرآن', en: 'Quran stories' }, href: 'corners/little-district/pages/quran-stories.html' },
    { id: 'new-year', icon: '🗓️', c: '#2E6DA4', test: function (h) { return h.m === 1 && h.d <= 8; },
      t: { ar: 'عامٌ هجريٌّ جديد 🗓️', en: 'A new Hijri year 🗓️' },
      s: { ar: 'يبدأ التقويم الهجري من هجرة النبي ﷺ إلى المدينة. ما الخيرُ الذي تنوي أن تفعله هذا العام؟', en: 'The Hijri calendar starts from the Prophet\'s ﷺ migration to Madinah. What good do you intend to do this year?' },
      go: { ar: 'رحلة الهجرة', en: 'The Hijrah journey' }, href: 'corners/treasures/tours.html' },
    { id: 'shaban', icon: '🌙', c: '#6C4AB6', test: function (h) { return h.m === 8 && h.d >= 15; },
      t: { ar: 'رمضان قريب! 🌙', en: 'Ramadan is coming! 🌙' },
      s: { ar: 'استعدّ لرمضان: تدرّب على الصيام قليلًا، واختر سورةً قصيرة تحفظها فيه.', en: 'Get ready for Ramadan: practise fasting a little and choose a short surah to learn in it.' },
      go: { ar: 'مدرسة الصيام', en: 'Fasting school' }, href: 'corners/little-district/pages/ibada-journeys.html?j=fasting' },
    { id: 'white-days', icon: '🌕', c: '#2E8B57', test: function (h) { return h.d >= 13 && h.d <= 15 && h.m !== 9 && h.m !== 12; },
      t: { ar: 'الأيام البيض 🌕', en: 'The White Days 🌕' },
      s: { ar: 'القمرُ بدرٌ هذه الليالي. كان النبي ﷺ يوصي بصيام ثلاثة أيام من كل شهر. انظر إلى القمر الليلة وقل: سبحان الله!', en: 'The moon is full these nights. The Prophet ﷺ advised fasting three days every month. Look at the moon tonight and say: SubhanAllah!' } },
    { id: 'friday', icon: '🕌', c: '#117A8B', test: function (h, d) { return d.getDay() === 5; },
      t: { ar: 'جمعة مباركة 🕌', en: 'Jumu\'ah Mubarak 🕌' },
      s: { ar: 'الجمعة عيدُ الأسبوع: اغتسل، والبس نظيفًا، واقرأ سورة الكهف، وأكثِر من الصلاة على النبي ﷺ.', en: 'Friday is the Eid of the week: take a bath, wear clean clothes, read Surah al-Kahf and send lots of salawat on the Prophet ﷺ.' },
      go: { ar: 'الجمعة في الأعياد', en: 'Friday & the Eids' }, href: 'corners/treasures/eids.html' }
  ];
  function season(d) {
    d = d || new Date(); var h = hijri(d); if (!h) return null;
    for (var i = 0; i < SEASONS.length; i++) if (SEASONS[i].test(h, d)) return SEASONS[i];
    return null;
  }

  /* ── age group ── */
  var AGES = [{ id: 'young', ic: '🧸', ar: '٤–٦ سنوات', en: '4–6 years' }, { id: 'mid', ic: '🎒', ar: '٧–٩ سنوات', en: '7–9 years' }, { id: 'older', ic: '🧭', ar: '١٠–١٢ سنة', en: '10–12 years' }];
  function age() { var a = jget('journey_age', null); return a === 'young' || a === 'mid' || a === 'older' ? a : null; }
  function setAge(a) { jset('journey_age', a); try { document.documentElement.setAttribute('data-age', a); } catch (e) {} }

  /* ── «يومي» log: {"YYYY-MM-DD": {ayah:1, hadith:1, dua:1, play:1, deed:1}} ── */
  var STEPS = ['ayah', 'hadith', 'dua', 'play', 'deed'];
  function log() { return jget('myday_log', {}) || {}; }
  function today() { return log()[dayKey()] || {}; }
  function mark(step) {
    var L = log(), k = dayKey(); L[k] = L[k] || {}; if (L[k][step]) return false;
    L[k][step] = 1;
    var keys = Object.keys(L).sort(); while (keys.length > 120) delete L[keys.shift()];   // keep ~4 months
    jset('myday_log', L); return true;
  }
  function doneCount(o) { o = o || today(); return STEPS.filter(function (s) { return o[s]; }).length; }
  function full(o) { return doneCount(o) === STEPS.length; }
  /* streak: days in a row with at least 3 of the 5 steps (yesterday still counts while today is in progress) */
  function streak() {
    var L = log(), n = 0, d = new Date(), k = dayKey(d);
    if (doneCount(L[k] || {}) < 3) d.setDate(d.getDate() - 1);
    for (;;) { k = dayKey(d); if (doneCount(L[k] || {}) >= 3) { n++; d.setDate(d.getDate() - 1); } else break; }
    return n;
  }
  function fullDays() { var L = log(); return Object.keys(L).filter(function (k) { return full(L[k]); }).length; }
  /* stars the journey itself gives: one per step, kept in the log */
  function dayStars() { var L = log(), n = 0; Object.keys(L).forEach(function (k) { n += doneCount(L[k]); }); return n; }

  /* ── the dhikr garden ── */
  function palms() { var v = parseInt(jget('garden_palms', 0), 10); return isNaN(v) ? 0 : v; }

  /* ── the level on the journey (from every star the child has: bag + «يومي» + garden) ── */
  var LEVELS = [
    { at: 0,   ic: '🌱', ar: 'بذرة', en: 'Seed' },
    { at: 15,  ic: '🌿', ar: 'بُرعم', en: 'Sprout' },
    { at: 50,  ic: '🪴', ar: 'غِراس', en: 'Sapling' },
    { at: 120, ic: '🌳', ar: 'شجرة طيّبة', en: 'Good tree' },
    { at: 250, ic: '🌴', ar: 'نخلة باسقة', en: 'Tall palm' },
    { at: 450, ic: '🏡', ar: 'بستانٌ مُثمر', en: 'Fruitful garden' }
  ];
  function totalStars() {
    var bag = null;
    try { if (window.MKBagCollect) { var c = window.MKBagCollect(); bag = (c.stars || 0) + (c.badges || 0) * 5; jset('journey_bagstars', bag); } } catch (e) {}
    if (bag == null) bag = parseInt(jget('journey_bagstars', 0), 10) || 0;   // pages without the bag (home) use the last count seen
    try { var D = jget('anos_done', {}) || {}; bag += Object.keys(D).length; } catch (e) {}
    return bag + dayStars() + Math.floor(palms() / 3) + questStars() + nights();
  }
  function level(n) {
    n = n == null ? totalStars() : n; var i = 0;
    while (i + 1 < LEVELS.length && n >= LEVELS[i + 1].at) i++;
    var cur = LEVELS[i], next = LEVELS[i + 1] || null;
    return { i: i, ic: cur.ic, name: cur, stars: n, next: next, pct: next ? Math.round((n - cur.at) / (next.at - cur.at) * 100) : 100 };
  }

  /* ── «مهمّة الأسبوع»: one value a week for the whole family (week-quests.js) ── */
  function weekKey(d) { d = new Date(d || new Date()); d.setHours(12, 0, 0, 0); d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); return dayKey(d); }   // Monday
  function quest(d) {
    var Q = window.MK_QUESTS || []; if (!Q.length) return null;
    var mon = new Date(weekKey(d) + 'T12:00'), n = Math.round(mon.getTime() / (7 * 864e5));
    return Q[((n % Q.length) + Q.length) % Q.length];
  }
  function questLog() { return jget('quest_log', {}) || {}; }
  function questDone(d) { return questLog()[weekKey(d)] || {}; }
  function questTick(k) { var L = questLog(), w = weekKey(); L[w] = L[w] || {}; L[w][k] = L[w][k] ? 0 : 1; var ks = Object.keys(L).sort(); while (ks.length > 30) delete L[ks.shift()]; jset('quest_log', L); return L[w][k]; }
  function questStars() { var L = questLog(), n = 0; Object.keys(L).forEach(function (w) { var o = L[w], t = ['t0', 't1', 't2'].filter(function (k) { return o[k]; }).length; n += t + (t === 3 ? 3 : 0) + (o.fam ? 1 : 0); }); return n; }

  /* ── «قبل النوم»: a short bedtime check-in ── */
  function nightLog() { return jget('night_log', {}) || {}; }
  function night(d) { return nightLog()[dayKey(d)] || null; }
  function setNight(v) { var L = nightLog(), k = dayKey(); L[k] = v; var ks = Object.keys(L).sort(); while (ks.length > 120) delete L[ks.shift()]; jset('night_log', L); }
  function nights() { return Object.keys(nightLog()).length; }

  /* ── milestones of full «يومي» days, each celebrated once ── */
  var MILESTONES = [7, 30, 100, 365];
  function milestoneDue() { var seen = jget('myday_ms', []) || [], f = fullDays(); for (var i = MILESTONES.length - 1; i >= 0; i--) if (f >= MILESTONES[i] && seen.indexOf(MILESTONES[i]) < 0) return MILESTONES[i]; return null; }
  function milestoneSeen(m) { var seen = jget('myday_ms', []) || []; MILESTONES.forEach(function (x) { if (x <= m && seen.indexOf(x) < 0) seen.push(x); }); jset('myday_ms', seen); }

  /* chapters of «رحلة أنوس» the child has read, and the highest level ever reached (levels are never lost) */
  function readChapters() { return jget('journey_read', {}) || {}; }
  function markRead(lvl) { var r = readChapters(); r[lvl] = r[lvl] || dayKey(); jset('journey_read', r); }
  function bestLevel() {
    var lv = level(), best = jget('journey_best', { i: 0, at: {} }) || { i: 0, at: {} };
    if (!best.at) best.at = {};
    if (lv.i > best.i || !best.at[0]) { for (var k = 0; k <= lv.i; k++) if (!best.at[k]) best.at[k] = dayKey(); best.newly = lv.i > best.i ? lv.i : null; best.i = Math.max(best.i, lv.i); jset('journey_best', { i: best.i, at: best.at }); }
    return best;
  }

  try { var a0 = age(); if (a0) document.documentElement.setAttribute('data-age', a0); } catch (e) {}

  window.MKJourney = {
    dayKey: dayKey, hijri: hijri, hijriText: hijriText, arNum: arNum, season: season, SEASONS: SEASONS,
    AGES: AGES, age: age, setAge: setAge,
    STEPS: STEPS, log: log, today: today, mark: mark, doneCount: doneCount, full: full, streak: streak, fullDays: fullDays, dayStars: dayStars,
    palms: palms, LEVELS: LEVELS, totalStars: totalStars, level: level, shared: shared, lang: lang,
    readChapters: readChapters, markRead: markRead, bestLevel: bestLevel,
    weekKey: weekKey, quest: quest, questDone: questDone, questTick: questTick, questStars: questStars,
    night: night, setNight: setNight, nights: nights, MILESTONES: MILESTONES, milestoneDue: milestoneDue, milestoneSeen: milestoneSeen
  };
})();
