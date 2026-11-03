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

  /* every event that falls on date d (Hijri day/month or Gregorian day/month) */
  function eventsOn(d) {
    d = noon(d); var h = hijri(d), D = data(), out = [];
    if (h) D.H.forEach(function (e) { if (e.d === h.d && e.m === h.m) out.push(Object.assign({ cal: 'H' }, e)); });
    D.G.forEach(function (e) { if (e.d === d.getDate() && e.m === d.getMonth() + 1) out.push(Object.assign({ cal: 'G' }, e)); });
    return out;
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
  /* year label for an event: "سنة ٢ هـ" / "1187 CE" */
  function yearLabel(e, ar) {
    if (!e.y) return '';
    if (e.cal === 'H') return ar ? ('سنة ' + e.y.toLocaleString('ar-EG') + ' هـ') : (e.y + ' AH');
    return ar ? ('سنة ' + e.y.toLocaleString('ar-EG', { useGrouping: false }) + ' م') : (e.y + ' CE');
  }
  function ago(e, today) {
    if (!e.y) return null;
    if (e.cal === 'G') return today.getFullYear() - e.y;
    var h = hijri(today); return h ? h.y - e.y : null;
  }

  window.MKNews = { hijri: hijri, fmtHijri: fmtHijri, fmtGreg: fmtGreg, eventsOn: eventsOn, upcoming: upcoming, week: week, pick: pick, yearLabel: yearLabel, ago: ago, noon: noon, DAY: DAY };
})();
