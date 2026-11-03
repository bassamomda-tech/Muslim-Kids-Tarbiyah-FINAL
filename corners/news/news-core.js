/* ════════════════════════════════════════════════════════════════
   news-core.js — date logic for «نشرة الأسبوع» and «حدث في مثل هذا اليوم».
   Needs data/on-this-day.js (window.MK_OTD) and, for the weekly page,
   data/weekly.js (window.MK_WEEKLY). No network, no server: the Hijri date
   comes from the browser (Umm al-Qura calendar), so a day may differ from
   the local moon-sighting by one day — the page says so.
   Window global: MKNews.
   ════════════════════════════════════════════════════════════════ */
(function () {
  var DAY = 86400000;
  /* edition 1 = the week starting Sunday 1 Nov 2026 (launch); content rotates every 52 weeks */
  var EPOCH = Date.UTC(2026, 10, 1);

  function noon(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12); }
  function hijri(d) {
    try {
      var p = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura-nu-latn', { day: 'numeric', month: 'numeric', year: 'numeric' }).formatToParts(d);
      var o = {}; p.forEach(function (x) { if (x.type !== 'literal') o[x.type] = parseInt(x.value, 10); });
      if (o.day && o.month) return { d: o.day, m: o.month, y: o.year };
    } catch (e) {}
    return null;
  }
  function fmtHijri(d, ar) {
    try { return new Intl.DateTimeFormat(ar ? 'ar-SA-u-ca-islamic-umalqura' : 'en-u-ca-islamic-umalqura', { day: 'numeric', month: 'long', year: 'numeric' }).format(d); } catch (e) { return ''; }
  }
  function fmtGreg(d, ar) {
    try { return new Intl.DateTimeFormat(ar ? 'ar-EG-u-ca-gregory' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(d); } catch (e) { return d.toDateString(); }
  }
  function data() { return window.MK_OTD || { H: [], G: [] }; }


  /* every event whose HIJRI day and month fall on date d (the news is Hijri-first) */
  function eventsOn(d) {
    d = noon(d); var h = hijri(d), D = data(), out = [];
    if (h) D.H.forEach(function (e) { if (e.d === h.d && e.m === h.m) out.push(Object.assign({ cal: 'H' }, e)); });
    return out;
  }
  /* every event whose GREGORIAN day and month fall on date d: the G list, plus Hijri-list events with an exact
     recorded Gregorian date from 1582 on (earlier dates are Julian, so they are not "this day" in today's calendar) */
  function eventsOnG(d) {
    d = noon(d); var D = data(), out = [], gd = d.getDate(), gm = d.getMonth() + 1;
    (D.G || []).forEach(function (e) { if (e.gd === gd && e.gm === gm) out.push(Object.assign({ cal: 'G' }, e)); });
    D.H.forEach(function (e) { if (e.g && e.g.y >= 1582 && e.g.d === gd && e.g.m === gm) out.push(Object.assign({ cal: 'H', via: 'G' }, e)); });
    return out;
  }
  function upcomingG(n, from) {
    var base = noon(from || new Date()), list = [];
    for (var i = 1; i <= n; i++) { var d = new Date(base.getTime() + i * DAY), ev = eventsOnG(d); if (ev.length) list.push({ date: d, events: ev }); }
    return list;
  }
  /* the next n days starting tomorrow (or today when withToday) → [{date, events}] */
  function upcoming(n, from, withToday) {
    var base = noon(from || new Date()), list = [];
    for (var i = withToday ? 0 : 1; i <= n; i++) { var d = new Date(base.getTime() + i * DAY), ev = eventsOn(d); if (ev.length) list.push({ date: d, events: ev }); }
    return list;
  }
  function week(d) {
    d = noon(d || new Date());
    var sunday = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - d.getDay() * DAY;
    var n = Math.floor((sunday - EPOCH) / (7 * DAY));
    return { edition: Math.max(1, n + 1), index: ((n % 52) + 52) % 52, start: new Date(sunday + 12 * 3600000) };
  }
  function pick(list, i) { return list && list.length ? list[((i % list.length) + list.length) % list.length] : null; }
  var HM = { ar: ['محرّم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوّال', 'ذو القعدة', 'ذو الحجّة'],
             en: ['Muharram', 'Safar', "Rabi' al-Awwal", "Rabi' al-Akhir", 'Jumada al-Ula', 'Jumada al-Akhirah', 'Rajab', "Sha'ban", 'Ramadan', 'Shawwal', "Dhul-Qa'dah", 'Dhul-Hijjah'] };
  var GM = { ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
             en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] };
  function num(n, ar) { return ar ? Number(n).toLocaleString('ar-EG', { useGrouping: false }) : String(n); }
  /* Hijri first, Gregorian beside it:
     «٢٧ رجب ٥٨٣ هـ · ٢ أكتوبر ١١٨٧ م» (recorded Gregorian date) · «١٧ رمضان ٢ هـ · ٦٢٤ م» · «عام الفيل · نحو ٥٧١ م» */
  function dateLabel(e, ar) {
    var L = ar ? 'ar' : 'en';
    if (e.cal === 'G') {   // Gregorian-dated: «٣ مارس ١٩٢٤ م» · a yearly world day: «كلّ عام في ٢١ مارس»
      var gdl = num(e.gd, ar) + ' ' + GM[L][e.gm - 1];
      return e.y ? gdl + ' ' + num(e.y, ar) + (ar ? ' م' : ' CE') : (ar ? 'كلّ عام في ' + gdl : 'Every year on ' + gdl);
    }
    var hd = num(e.d, ar) + ' ' + HM[L][e.m - 1];
    if (e.y) {
      var h = hd + ' ' + num(e.y, ar) + (ar ? ' هـ' : ' AH');
      if (e.g) return h + ' · ' + num(e.g.d, ar) + ' ' + GM[L][e.g.m - 1] + ' ' + num(e.g.y, ar) + (ar ? ' م' : ' CE');
      return h + (e.ce ? ' · ' + num(e.ce, ar) + (ar ? ' م' : ' CE') : '');
    }
    if (e.pre) return hd + ' · ' + (ar ? e.pre[0] : e.pre[1]) + ' · ' + (ar ? 'نحو ' + num(e.ce, ar) + ' م' : 'c. ' + e.ce + ' CE');
    return hd;
  }
  function yearLabel(e, ar) { return dateLabel(e, ar); }   // kept for older callers
  function ago(e, today) {
    if (e.cal === 'G') return e.y ? { n: today.getFullYear() - e.y, cal: 'G' } : null;
    if (e.y) { var h = hijri(today); return h ? { n: h.y - e.y, cal: 'H' } : null; }
    if (e.pre && e.ce) return { n: today.getFullYear() - e.ce, cal: 'G', approx: true };
    return null;
  }

  window.MKNews = { hijri: hijri, fmtHijri: fmtHijri, fmtGreg: fmtGreg, eventsOn: eventsOn, eventsOnG: eventsOnG, upcoming: upcoming, upcomingG: upcomingG, GM: GM, week: week, pick: pick, yearLabel: yearLabel, dateLabel: dateLabel, ago: ago, noon: noon, HM: HM, DAY: DAY };
})();
