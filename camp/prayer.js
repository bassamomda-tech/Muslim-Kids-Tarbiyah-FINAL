/* معسكر القادة — حساب مواقيت الصلاة بالمعادلات الفلكية المعروفة (تقريبي؛ يُتبع تقويم المسجد).
   CAMP.prayerTimes(date, lat, lng, {method, hanafi, offsets}) → {fajr,sunrise,dhuhr,asr,maghrib,isha} كـ Date */
(function () {
  'use strict';
  var C = window.CAMP = window.CAMP || {};
  var D2R = Math.PI / 180;
  function sin(d) { return Math.sin(d * D2R); } function cos(d) { return Math.cos(d * D2R); } function tan(d) { return Math.tan(d * D2R); }
  function asin(x) { return Math.asin(x) / D2R; } function acos(x) { return Math.acos(x) / D2R; }
  function atan2(y, x) { return Math.atan2(y, x) / D2R; } function acot(x) { return Math.atan(1 / x) / D2R; }
  function fix(a, b) { a = a - b * Math.floor(a / b); return a < 0 ? a + b : a; }

  C.METHODS = {
    MWL: { n: ['رابطة العالم الإسلامي', 'Muslim World League'], fajr: 18, isha: 17 },
    ISNA: { n: ['أمريكا الشمالية (١٥°)', 'ISNA (15°)'], fajr: 15, isha: 15 },
    Egypt: { n: ['الهيئة المصرية', 'Egyptian Authority'], fajr: 19.5, isha: 17.5 },
    Karachi: { n: ['كراتشي', 'Karachi'], fajr: 18, isha: 18 },
    Makkah: { n: ['أم القرى', 'Umm al-Qura'], fajr: 18.5, ishaMin: 90 }
  };

  function julian(y, m, d) {
    if (m <= 2) { y -= 1; m += 12; }
    var A = Math.floor(y / 100), B = 2 - A + Math.floor(A / 4);
    return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5;
  }
  function sun(jd) {
    var D = jd - 2451545.0, g = fix(357.529 + 0.98560028 * D, 360), q = fix(280.459 + 0.98564736 * D, 360);
    var L = fix(q + 1.915 * sin(g) + 0.020 * sin(2 * g), 360), e = 23.439 - 0.00000036 * D;
    var RA = atan2(cos(e) * sin(L), cos(L)) / 15;
    return { decl: asin(sin(e) * sin(L)), eqt: q / 15 - fix(RA, 24) };
  }

  C.prayerTimes = function (date, lat, lng, o) {
    o = o || {};
    var M = C.METHODS[o.method] || C.METHODS.MWL;
    var jd = julian(date.getFullYear(), date.getMonth() + 1, date.getDate()) - lng / (15 * 24);
    function mid(t) { return fix(12 - sun(jd + t).eqt, 24); }
    function angle(a, t, ccw) {
      var decl = sun(jd + t).decl, noon = mid(t);
      var T = acos((-sin(a) - sin(decl) * sin(lat)) / (cos(decl) * cos(lat))) / 15;
      return noon + (ccw ? -T : T);
    }
    function asr(f, t) { var decl = sun(jd + t).decl; return angle(-acot(f + tan(Math.abs(lat - decl))), t, false); }
    var t = { fajr: 5, sunrise: 6, dhuhr: 12, asr: 13, maghrib: 18, isha: 18 };
    for (var i = 0; i < 2; i++) {
      t = {
        fajr: angle(M.fajr, t.fajr / 24, true), sunrise: angle(0.833, t.sunrise / 24, true), dhuhr: mid(t.dhuhr / 24),
        asr: asr(o.hanafi ? 2 : 1, t.asr / 24), maghrib: angle(0.833, t.maghrib / 24, false),
        isha: M.ishaMin ? NaN : angle(M.isha, t.isha / 24, false)
      };
    }
    // خطوط العرض العالية: نقيّد الفجر والعشاء بنسبة من الليل (طريقة الزاوية)
    var night = fix(t.sunrise - t.maghrib, 24);
    function clamp(time, base, a, ccw) {
      var portion = a / 60 * night, diff = ccw ? fix(base - time, 24) : fix(time - base, 24);
      return (isNaN(time) || diff > portion) ? base + (ccw ? -portion : portion) : time;
    }
    t.fajr = clamp(t.fajr, t.sunrise, M.fajr, true);
    t.isha = M.ishaMin ? t.maghrib + M.ishaMin / 60 : clamp(t.isha, t.maghrib, M.isha, false);
    var tz = -date.getTimezoneOffset() / 60, off = o.offsets || {}, out = {};
    Object.keys(t).forEach(function (k) {
      var h = fix(t[k] + tz - lng / 15, 24) + (off[k] || 0) / 60;
      var d = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
      d.setMinutes(Math.round(h * 60)); out[k] = d;
    });
    return out;
  };
})();
