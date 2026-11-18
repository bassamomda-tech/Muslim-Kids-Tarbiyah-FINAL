/* ════════════════════════════════════════════════════════════════
   akhlaq-book-data.js — builds the «أخلاق الطفل المسلم» book data from
   the site's own series (corners/skills/data/akhlaq-series.js) plus the
   authored book stories (window.AKHLAQ_STORIES, stories-akhlaq-*.js).
   Evidence = the site's verified ayah (Uthmani text + reference) and the
   hadith with its takhrij, exactly as stored in the series data.
   Activities come from the episode's own sort / match / order cards.
   ════════════════════════════════════════════════════════════════ */
(function () {
  var A = window.AKHLAQ_SERIES, ST = window.AKHLAQ_STORIES || {};
  if (!A) return;
  function strip(s) { return String(s || '').replace(/<[^>]+>/g, ''); }
  function shuffleIdx(n, seed) {          // deterministic shuffle that never leaves an item in place
    var a = [], i; for (i = 0; i < n; i++) a.push(i);
    var r = seed;
    for (i = n - 1; i > 0; i--) { r = (r * 9301 + 49297) % 233280; var j = Math.floor(r / 233280 * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    if (a.some(function (v, k) { return v === k; })) a.push(a.shift());
    return a;
  }
  /* replace the series' hero «عمر» in activity cards with the book hero */
  function hero(t, h) { return h ? String(t).replace(/عمر/g, h) : t; }

  function activity(e, th) {
    var steps = (e.online && e.online.steps) || [];
    var s = steps.filter(function (x) { return x.type === th.from; })[0];
    if (!s) return null;
    var h = th.rename, title = th.title || ('🧩 ' + hero(s.title, h)), hint = th.hint;
    if (s.type === 'sort') {
      var items = s.items.slice(0, th.max || 8);
      return { type: 'act', kind: 'sort', title: title, hint: hint || 'اكتب رقمَ كلِّ بطاقةٍ في الصندوقِ المناسب.',
        cols: s.bins.map(function (b) { return hero(b, h); }), items: items.map(function (it) { return [hero(it.t, h), it.bin]; }) };
    }
    if (s.type === 'match') {
      var pairs = s.pairs.slice(0, th.max || 5);
      return { type: 'act', kind: 'match', title: title, hint: hint || 'ارسم خطًّا يصلُ كلَّ عبارةٍ بما يناسبها.',
        left: pairs.map(function (p) { return hero(p[0], h); }), right: pairs.map(function (p) { return hero(p[1], h); }), order: shuffleIdx(pairs.length, e.n * 7 + 3) };
    }
    if (s.type === 'order') {
      var n = s.items.length, sh = shuffleIdx(n, e.n * 11 + 5);
      return { type: 'act', kind: 'order', title: title, hint: hint || ('اكتب رقمَ كلِّ خطوةٍ بحسبِ ترتيبها، من ١ إلى ' + n + '.'),
        items: sh.map(function (i) { return hero(s.items[i], h); }), answer: sh.map(function (i) { return i + 1; }) };
    }
    return null;
  }

  var stations = A.episodes.map(function (e) {
    var id = 'akh-' + e.n, S = ST[id] || {}, isl = e.islam || {};
    var ev = [];
    if (isl.ayah) ev.push({ kind: 'ayah', text: '﴿' + isl.ayah.text.replace(/^[۞\s]+/, '') + '﴾', ref: { ar: isl.ayah.src } });
    if (isl.hadith) ev.push({ kind: 'hadith', text: { ar: '«' + isl.hadith.text + '»' }, source: { ar: isl.hadith.source } });
    var title = e.title.split(':').slice(1).join(':').trim() || e.title;
    if (S.third && S.third.type === 'act' && S.third.from) S.third = activity(e, S.third) || S.third;
    return {
      id: id, n: e.n, gn: e.n, season: e.season,
      title: { ar: title },
      teach: { ar: strip(isl.text) + (e.summary && e.summary.length ? ' ' + e.summary.map(strip).join(' ') : '') },
      evidence: ev.length === 1 ? ev[0] : ev,
      flip: S.flip ? { claim: { ar: S.flip.claim }, bust: { ar: S.flip.bust } } : { claim: { ar: '' }, bust: { ar: '' } },
      action: { ar: strip((e.home && e.home.steps && e.home.steps[0]) || '') },
      key: { ar: strip(S.key || (e.summary && e.summary[0]) || '') }
    };
  });

  var SEASONS = [
    { key: 'akh1', title: { ar: 'أخلاقي مع اللهِ ومع نفسي' }, tagline: { ar: 'الأدبُ مع الله ورسوله ﷺ، والصدقُ والأمانةُ والصبرُ والحياءُ والتواضع' }, color: '#1F8A5B',
      guide: { ar: 'في هذا الجزءِ نتعلّمُ أنّ الخُلُقَ صفةٌ في القلب تظهرُ في الكلامِ والأفعال، وأنّ اللهَ يرانا في كلِّ مكان، وكيف نكونُ صادقين أمناءَ صابرين متواضعين.' } },
    { key: 'akh2', title: { ar: 'أخلاقي في بيتي ومع الناس' }, tagline: { ar: 'الوالدان والأقاربُ والأصدقاءُ والجيرانُ والضيوف، وآدابُ يومي' }, color: '#C0563A',
      guide: { ar: 'في هذا الجزءِ نعيشُ مع أبطالنا في البيتِ ومع الناس: برُّ الوالدين، وصلةُ الرحم، وحقُّ الجار، وإكرامُ الضيف، وآدابُ الطعامِ والنومِ والاستئذانِ والسلام.' } },
    { key: 'akh3', title: { ar: 'أخلاقي في الطريقِ والمسجدِ والملعب' }, tagline: { ar: 'آدابُ الطريقِ والمسجد، والتعاونُ واللعب، وأخلاقٌ نحذرُها' }, color: '#2E6FB0',
      guide: { ar: 'في هذا الجزءِ نخرجُ مع أبطالنا إلى الطريقِ والمسجدِ والملعب، ونتعلّمُ التعاونَ والرفقَ بالحيوان، ونحذرُ الغضبَ والحسدَ والغيبةَ والغشّ.' } }
  ];
  window.AKHLAQ_BOOK = SEASONS.map(function (p, k) {
    return { key: p.key, title: p.title, tagline: p.tagline, color: p.color,
      data: { guide: p.guide, stations: stations.filter(function (s) { return s.season === k + 1; }) } };
  });
})();
