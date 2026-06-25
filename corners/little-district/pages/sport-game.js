/* ════ sport-game.js — per-station "Key Game" for the Sports Club journeys ════
   Builds a small tap-game from data that ALREADY exists on every station (its
   `key`), so every station gets an activity like the other corners — with no
   extra content needed. Shows the station's own key + two keys borrowed from
   other stations; the child taps the one that belongs to this station. */
window.buildSportGame = function (st, L, S) {
  if (!st || !st.key) return '';
  var pool = (S || []).filter(function (x) { return x.id !== st.id && x.key; });
  pool = pool.map(function (x) { return [Math.random(), x]; })
             .sort(function (a, b) { return a[0] - b[0]; })
             .map(function (x) { return x[1]; })
             .slice(0, 2);
  var opts = [{ k: st.key, c: 1 }];
  pool.forEach(function (o) { opts.push({ k: o.key, c: 0 }); });
  opts = opts.map(function (x) { return [Math.random(), x]; })
             .sort(function (a, b) { return a[0] - b[0]; })
             .map(function (x) { return x[1]; });
  var style = 'display:block;width:100%;text-align:start;margin-bottom:.5rem;padding:.7rem .9rem;' +
    'border:1.5px solid rgba(255,255,255,.18);border-radius:.9rem;background:rgba(255,255,255,.05);' +
    'color:inherit;font:700 .95rem/1.6 "Tajawal",sans-serif;cursor:pointer;transition:.15s';
  var btns = opts.map(function (o) {
    return '<button class="sg-opt" data-c="' + o.c + '" style="' + style + '">«' + o.k[L] + '»</button>';
  }).join('');
  var title = (L === 'ar') ? 'لُعبةُ المِفتاح' : 'Key Game';
  var q = (L === 'ar') ? 'أيُّ مِفتاحٍ يُناسِبُ هذِهِ المَحطّة؟ اختَرِ الصحيح' : 'Which key fits this station? Pick the right one';
  return '<div class="block sportgame"><h3><span class="bi">🎯</span>' + title + '</h3>' +
    '<p style="margin-bottom:.7rem;font-size:.95rem">' + q + '</p>' +
    '<div class="sg-opts">' + btns + '</div></div>';
};
