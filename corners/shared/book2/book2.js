/* ═══ book2 — assembles a complete, print-ready book from a corner's journey data ═══
   Config: window.BOOK2 (see the book's HTML page). URL options:
     ?lang=en        English edition (Arabic is the default)
     ?size=print     8.5×11 in trim + 0.125 in bleed for printers (default: A4 for home printing / the website)
     ?cover=wrap     the full printer's cover (back + spine + front) as one sheet
     ?part=salah     only one part (handy for printing a little at a time) */
(function () {
  'use strict';
  var Q = new URLSearchParams(location.search);
  var LANG = Q.get('lang') === 'en' ? 'en' : 'ar', AR = LANG === 'ar';
  var PRINT = Q.get('size') === 'print' || Q.get('size') === 'kdp';
  var ONLY = Q.get('part');
  var CFG = window.BOOK2, ART = window.ART;
  document.documentElement.lang = LANG; document.documentElement.dir = AR ? 'rtl' : 'ltr';
  if (PRINT) document.documentElement.classList.add('kdp');
  var st = document.createElement('style');
  st.textContent = '@page{size:' + (PRINT ? '8.625in 11.25in' : '210mm 297mm') + ';margin:0}';
  document.head.appendChild(st);

  function T(o) { if (o == null) return ''; if (typeof o === 'string') return o; return o[LANG] != null ? o[LANG] : (o.ar || ''); }
  function N(n) { return AR ? String(n).replace(/\d/g, function (d) { return '٠١٢٣٤٥٦٧٨٩'[d]; }) : String(n); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function strip(s) { return String(s || '').replace(/<[^>]+>/g, ''); }
  function safe(s) { return String(s || '').replace(/<(?!\/?b>)[^>]*>/g, ''); } // keep only <b>
  var UI = {
    station: { ar: 'المحطة', en: 'Station' }, of: { ar: 'من', en: 'of' }, part: { ar: 'الجزء', en: 'Part' },
    learn: { ar: '📘 أتعلّم', en: '📘 I learn' }, proof: { ar: '📜 الدليل', en: '📜 The evidence' },
    myth: { ar: '❌ فكرةٌ خاطئة', en: '❌ A wrong idea' }, truth: { ar: '✅ والصواب', en: '✅ The truth' }, check: { ar: '🔍 صحّح الفكرة', en: '🔍 Fix the idea' },
    task: { ar: '🏅 مهمّتي اليوم — ضع ✓ حين تُنجزها', en: '🏅 My task today — tick it when done' }, key: { ar: '🔑 خلاصة المحطة', en: '🔑 The key idea' },
    color: { ar: '🖍️ صفحة تلوين', en: '🖍️ Colouring page' }, colorHint: { ar: 'لوّن الصورة بألوانك المفضّلة، ثم ارسم في الإطار ما تحبّ أن تضيفه.', en: 'Colour the picture, then draw something you would add in the frame below.' },
    drawHere: { ar: '✏️ ارسم هنا…', en: '✏️ Draw here…' },
    tf: { ar: '✔️ صحّ أم خطأ؟', en: '✔️ True or false?' }, tfHint: { ar: 'اقرأ كلّ جملة، ثم ضع دائرة حول «صحّ» أو «خطأ».', en: 'Read each sentence and circle True or False.' },
    yes: { ar: 'صحّ', en: 'True' }, no: { ar: 'خطأ', en: 'False' },
    ws: { ar: '🔎 ابحث عن الكلمات', en: '🔎 Word search' }, wsHint: { ar: 'الكلمات مخبّأة أفقيًّا (من اليمين إلى اليسار) وعموديًّا (من الأعلى إلى الأسفل).', en: 'Words go across (left to right) and down.' },
    maze: { ar: '🧭 المتاهة', en: '🧭 Maze' },
    answers: { ar: 'الحلول', en: 'Answers' }, cert: { ar: 'شهادة إتمام', en: 'Certificate of Completion' },
    contents: { ar: 'المحتويات', en: 'Contents' }, parents: { ar: 'إلى الوالدين والمربّين', en: 'To parents and teachers' },
    page: { ar: 'صفحة', en: 'page' }, stations: { ar: 'محطة', en: 'stations' },
    print: { ar: '🖨️ احفظ PDF / اطبع', en: '🖨️ Save PDF / Print' },
    mine: { ar: '✍️ أكتب بكلماتي: ماذا تعلّمتُ من هذه المحطّة؟', en: '✍️ In my own words: what did I learn here?' }
  };

  var pages = [], parts = [];
  function pg(cls, html, o) { pages.push({ cls: cls, html: html, o: o || {} }); }
  function sceneHTML(rc, line) { return '<div class="scene">' + ART.paint(rc, line) + '</div>'; }
  function partVars(p) { return '--pc:' + p.color + ';--pcd:' + ART.dark(p.color, .35) + ';--pcl:' + ART.light(p.color, .84); }

  /* ── seeded random for the puzzles ── */
  function rng(seed) { return ART.rng(seed); }

  /* ── word search ── */
  var AR_LETTERS = 'ابتثجحخدذرزسشصضطظعغفقكلمنهوي';
  var EN_LETTERS = 'ABCDEFGHIJKLMNOPRSTUWY';
  function wordSearch(words, seed) {
    var n = 10, R = rng(seed), grid = [], placed = [];
    for (var i = 0; i < n; i++) { grid.push([]); for (var j = 0; j < n; j++) grid[i].push(''); }
    words.forEach(function (w) {
      var L = Array.from(w), ok = false;
      for (var tries = 0; tries < 300 && !ok; tries++) {
        var dir = R() < .55 ? 0 : 1, r = Math.floor(R() * n), c = Math.floor(R() * n);
        var dr = dir ? 1 : 0, dc = dir ? 0 : 1;
        if (r + dr * (L.length - 1) >= n || c + dc * (L.length - 1) >= n) continue;
        var fit = true;
        for (var k = 0; k < L.length; k++) { var g = grid[r + dr * k][c + dc * k]; if (g && g !== L[k]) { fit = false; break; } }
        if (!fit) continue;
        for (k = 0; k < L.length; k++) grid[r + dr * k][c + dc * k] = L[k];
        placed.push({ w: w, r: r, c: c, dir: dir }); ok = true;
      }
    });
    var A = AR ? AR_LETTERS : EN_LETTERS;
    var key = grid.map(function (row) { return row.map(function (x) { return !!x; }); });
    for (i = 0; i < n; i++) for (j = 0; j < n; j++) if (!grid[i][j]) grid[i][j] = A[Math.floor(R() * A.length)];
    return { grid: grid, key: key, placed: placed };
  }
  function wsTable(ws, showKey, small) {
    return '<table style="direction:' + (AR ? 'rtl' : 'ltr') + '">' + ws.grid.map(function (row, i) {
      return '<tr>' + row.map(function (ch, j) { var on = showKey && ws.key[i][j]; return '<td style="' + (small ? 'width:6mm;height:6mm;font-size:9pt;' : '') + (on ? 'background:var(--pcl);color:var(--pcd)' : (showKey ? 'color:#bbb' : '')) + '">' + ch + '</td>'; }).join('') + '</tr>';
    }).join('') + '</table>';
  }

  /* ── maze (recursive backtracker) ── */
  function maze(seed, cols, rows) {
    var R = rng(seed), cells = [], i, stack = [];
    for (i = 0; i < cols * rows; i++) cells.push({ v: false, w: [true, true, true, true] }); // top right bottom left
    function idx(x, y) { return y * cols + x; }
    var cur = [0, 0]; cells[0].v = true; stack.push(cur);
    var D = [[0, -1, 0, 2], [1, 0, 1, 3], [0, 1, 2, 0], [-1, 0, 3, 1]];
    while (stack.length) {
      cur = stack[stack.length - 1];
      var opts = D.filter(function (d) { var nx = cur[0] + d[0], ny = cur[1] + d[1]; return nx >= 0 && ny >= 0 && nx < cols && ny < rows && !cells[idx(nx, ny)].v; });
      if (!opts.length) { stack.pop(); continue; }
      var d = opts[Math.floor(R() * opts.length)], nx = cur[0] + d[0], ny = cur[1] + d[1];
      cells[idx(cur[0], cur[1])].w[d[2]] = false; cells[idx(nx, ny)].w[d[3]] = false; cells[idx(nx, ny)].v = true; stack.push([nx, ny]);
    }
    // solve (BFS) from top-left to bottom-right
    var prev = {}, q = [[0, 0]], seen = { '0,0': 1 };
    while (q.length) { var c = q.shift(); if (c[0] === cols - 1 && c[1] === rows - 1) break; D.forEach(function (d) { if (cells[idx(c[0], c[1])].w[d[2]]) return; var k = (c[0] + d[0]) + ',' + (c[1] + d[1]); if (!seen[k]) { seen[k] = 1; prev[k] = c; q.push([c[0] + d[0], c[1] + d[1]]); } }); }
    var path = [], at = [cols - 1, rows - 1]; while (at) { path.push(at); at = prev[at[0] + ',' + at[1]]; } path.reverse();
    return { cells: cells, cols: cols, rows: rows, path: path };
  }
  function mazeSVG(m, startIcon, endIcon, solve) {
    var s = 30, W = m.cols * s, H = m.rows * s, o = '<svg viewBox="-40 -40 ' + (W + 80) + ' ' + (H + 80) + '" xmlns="http://www.w3.org/2000/svg">';
    o += '<rect x="0" y="0" width="' + W + '" height="' + H + '" fill="#fff"/>';
    if (solve) o += '<polyline points="' + m.path.map(function (p) { return (p[0] * s + s / 2) + ',' + (p[1] * s + s / 2); }).join(' ') + '" fill="none" stroke="#E5574A" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity=".8"/>';
    var d = '';
    for (var y = 0; y < m.rows; y++) for (var x = 0; x < m.cols; x++) {
      var w = m.cells[y * m.cols + x].w, X = x * s, Y = y * s;
      if (w[0] && !(x === 0 && y === 0)) d += 'M' + X + ' ' + Y + 'h' + s;
      if (w[3] && !(x === 0 && y === 0)) d += 'M' + X + ' ' + Y + 'v' + s;
      if (w[1] && !(x === m.cols - 1 && y === m.rows - 1)) d += 'M' + (X + s) + ' ' + Y + 'v' + s;
      if (w[2] && !(x === m.cols - 1 && y === m.rows - 1)) d += 'M' + X + ' ' + (Y + s) + 'h' + s;
    }
    o += '<path d="' + d + '" stroke="#2B2118" stroke-width="3.2" stroke-linecap="square" fill="none"/>';
    o += '<text x="-22" y="-8" font-size="34">' + startIcon + '</text><text x="' + (W - 8) + '" y="' + (H + 34) + '" font-size="34">' + endIcon + '</text>';
    return o + '</svg>';
  }

  /* ════ build ════ */
  CFG.parts.forEach(function (p, i) { if (!ONLY || ONLY === p.key) parts.push(p); p.no = i + 1; });
  var answers = [];

  function front() {
    if (!PRINT) pg('cover', '<div class="art">' + (CFG.coverImg ? '<img src="' + CFG.coverImg + '" alt="" style="width:100%;height:100%;object-fit:cover;display:block">' : ART.paint(CFG.cover, false).replace('<svg ', '<svg preserveAspectRatio="xMidYMid slice" ')) + '</div><div class="ttl"><div class="kick">' + esc(T(CFG.kicker)) + '</div><h1>' + esc(T(CFG.title)) + '</h1><div class="orn"></div><div class="sub">' + esc(T(CFG.sub)) + '</div><div class="brand">🌙 ' + esc(T(CFG.brand)) + '</div></div>', { nonum: true });
    var FMX = AR ? CFG.fm : CFG.fmEn;
    if (FMX) { frontMatter(FMX); return; }
    pg('title-pg white', (AR ? '<div class="bism">بِسمِ اللهِ الرَّحمٰنِ الرَّحيم</div>' : '<div class="bism">In the name of Allah, the Most Merciful</div>') + '<h1>' + esc(T(CFG.title)) + '</h1><div class="sub">' + esc(T(CFG.sub)) + '</div>' + (CFG.titleImg ? '<div class="scene line-img" style="width:130mm"><img src="' + CFG.titleImg + '" alt=""></div>' : sceneHTML(CFG.titleArt || CFG.cover, true)) + '<div class="pub">' + esc(T(CFG.brand)) + ' · tarbiyahkids.uk</div>', { nonum: true });
    pg('prose', '<h2>' + T(UI.parents) + '</h2>' + T(CFG.parents));
    pg('toc', '<h2>' + T(UI.contents) + '</h2><div id="tocRows"></div>');
  }

  /* ── front matter in the style of a published children's curriculum book:
        belongs-to · imprint · contents · about us · values · why · about this book ·
        story objectives · welcome letter · special words. Lettered folios (أ ب ج …). ── */
  function frontMatter(F) {
    var LET = AR ? ['أ', 'ب', 'ج', 'د', 'هـ', 'و', 'ز', 'ح', 'ط', 'ي', 'ك', 'ل', 'م', 'ن', 'س', 'ع'] : ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x', 'xi', 'xii', 'xiii', 'xiv', 'xv', 'xvi'], k = 0;
    var BISM = AR ? 'بِسمِ اللهِ الرَّحمٰنِ الرَّحيم' : 'In the name of Allah, the Most Merciful';
    var TITLE = esc(T(CFG.title));
    function fp(cls, inner, sec, o) {
      var side = k % 2 ? 'r' : 'l', n = LET[k++] || '';
      o = o || {}; o.nonum = true;
      pg('fm ' + cls + ' s' + side, '<div class="fm-tab">' + TITLE + '</div><div class="fm-card">' + inner + '</div>' +
        '<div class="fm-foot"><span class="fm-no">' + n + '</span><span class="fm-sec">' + esc(sec || '') + '</span>' +
        (CFG.logo ? '<span class="fm-logo"><img src="' + CFG.logo + '" alt="">' + esc(T(CFG.brand)) + '</span>' : '') + '</div>', o);
    }
    // 1 · belongs to
    pg('fm fm-belong', '<div class="fm-card"><div class="bism">' + BISM + '</div><h1>' + TITLE + '</h1><div class="fm-pill">' + esc(F.ages) + '</div>' +
      (CFG.titleImg ? '<div class="fm-tim"><img src="' + CFG.titleImg + '" alt=""></div>' : '') +
      '<div class="fm-bh">' + esc(F.belongs.h) + '</div><div class="fm-line"><b>' + esc(F.belongs.name) + '</b><i></i></div><div class="fm-line"><b>' + esc(F.belongs.cls) + '</b><i></i></div></div>', { nonum: true });
    // 2 · imprint
    var I = F.imprint;
    pg('fm fm-imp white', '<div class="fm-impin">' + (CFG.logo ? '<img class="fm-implogo" src="' + CFG.logo + '" alt="">' : '') + '<div class="fm-impname">' + esc(T(CFG.brand)) + '</div>' +
      '<p>' + esc(I.about) + '</p>' + I.lines.map(function (l) { return '<p class="sm">' + esc(l) + '</p>'; }).join('') +
      '<p class="sm">' + esc(I.contact) + '</p><p class="site">' + esc(I.site) + '</p><p class="sm">' + esc(I.rights) + '</p><p class="sm it">' + esc(I.note) + '</p></div>', { nonum: true });
    // 3 · contents (rows filled in render())
    fp('toc', '<h2 class="fm-h">' + T(UI.contents) + '</h2><div id="tocRows"></div>', T(UI.contents));
    // 4 · about us
    var A = F.about;
    fp('fm-about', '<h2 class="fm-h teal">' + esc(A.h) + '</h2>' +
      '<div class="fm-box pink"><h3>' + esc(A.vision.h) + '</h3><p>' + esc(A.vision.t) + '</p></div>' +
      '<div class="fm-box cream"><h3>' + esc(A.goal.h) + '</h3><p>' + esc(A.goal.t) + '</p></div>' +
      '<div class="fm-box mint"><h3>' + esc(A.aims.h) + '</h3><p>' + esc(A.aims.lead) + '</p><ol>' + A.aims.list.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ol></div>', A.h);
    // 5 · values + corners
    var V = F.values;
    fp('fm-values', '<div class="fm-ayah"><div class="a">' + esc(V.ayah.t) + '</div><div class="r">' + esc(V.ayah.ref) + '</div><p>' + esc(V.ayah.ex) + '</p></div>' +
      '<h3 class="fm-h3">' + esc(V.h) + '</h3><div class="fm-vals"><div class="c">' + esc(V.center) + '</div>' +
      V.list.map(function (v, i) { return '<div class="v v' + i + '"><b>' + esc(v[0]) + '</b><small>' + esc(v[1]) + '</small></div>'; }).join('') + '</div>' +
      (V.areas ? '<div class="fm-areas"><h3>' + esc(V.areasH) + '</h3><div class="g">' + V.areas.map(function (x) { return '<div class="ar" style="--ac:' + x[3] + '"><b>' + esc(x[1]) + '</b><span>' + x[0] + '</span><small>' + esc(x[2]) + '</small></div>'; }).join('') + '</div></div>' : '') +
      '<div class="fm-corners"><h3>' + esc(V.cornersH) + '</h3><div class="g">' + V.corners.map(function (c) { return '<div class="cn' + (c[3] ? ' on' : '') + '" style="--cc:' + c[2] + '"><span>' + c[0] + '</span><b>' + esc(c[1]) + '</b></div>'; }).join('') + '</div><p>' + esc(V.cornersNote) + '</p></div>', A.h);
    // 6–7 · why this book (aims + essay, split over two pages)
    var W = F.why;
    function sec(x) {
      return '<h4 class="fm-h4">' + esc(x.h) + '</h4>' + (x.ev ? '<div class="fm-ev' + (x.ev.ayah ? ' ay' : '') + '"><div class="t">' + esc(x.ev.t) + '</div><div class="r">' + esc(x.ev.ref) + '</div></div>' : '') +
        x.p.map(function (q) { return '<p class="fm-p">' + esc(q) + '</p>'; }).join('');
    }
    fp('fm-why', '<h2 class="fm-h">' + esc(W.h) + '</h2><div class="fm-aims"><h3>' + esc(W.aimsH) + '</h3>' +
      W.aims.map(function (a, i) { return '<div class="ai ai' + i + '"><span>' + N(i + 1) + '</span><p>' + esc(a) + '</p></div>'; }).join('') + '</div>' +
      W.sections.slice(0, 2).map(sec).join(''), W.h);
    fp('fm-why2', W.sections.slice(2).map(sec).join(''), W.h);
    // 8 · about this book
    var B = F.book;
    fp('fm-book', '<h2 class="fm-h">' + esc(B.h) + '</h2><div class="bism sm">' + BISM + '</div>' +
      B.p.map(function (q) { return '<p class="fm-p">' + q + '</p>'; }).join('') +
      '<div class="fm-tips"><div class="bk"><span>' + esc(B.tipsH) + '</span></div><div class="rib">' + B.tips.map(function (t, i) { return '<div class="t t' + i + '">' + esc(t) + '</div>'; }).join('') + '</div></div>' +
      '<p class="fm-p">' + esc(B.close) + '</p><p class="fm-note">' + esc(B.note) + '</p>', B.h);
    // 9+ · story objectives table (12 rows a page)
    var st = [].concat.apply([], CFG.parts.map(function (q) { return (q.data && q.data.stations) || []; })), rows = [];
    st.forEach(function (s, i) {
      var S = ((AR ? window.STORIES : window.STORIES_EN) || {})[s.id] || {}, o = F.objectives[i]; if (!o) return;
      rows.push('<tr><td class="l"><small>' + (AR ? 'القصّة ' : 'Story ') + N(s.gn || i + 1) + ' · ' + esc(S.hero || '') + '</small><b>' + esc(S.t || strip(T(s.title))) + '</b></td><td><ul>' +
        o[0].map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></td><td class="kw">' + o[1].map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('') + '</td></tr>');
    });
    var PER = 12;
    for (var r = 0; r < rows.length; r += PER) {
      fp('fm-obj', (r ? '' : '<h2 class="fm-h">' + esc(F.objH) + '</h2>') + '<table class="fm-tbl"><thead><tr>' + F.objCols.map(function (c) { return '<th>' + esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>' + rows.slice(r, r + PER).join('') + '</tbody></table>', F.objH);
    }
    // welcome letter from the heroes
    var L = F.letter;
    pg('fm fm-letter', '<div class="fm-lt"><p class="hi">' + esc(L.hi) + '</p>' + L.p.map(function (q) { return '<p>' + esc(q) + '</p>'; }).join('') +
      '<p>' + esc(L.sign) + '</p><div class="who">' + L.who.map(function (w, i) { return (i ? '<i>·</i>' : '') + '<b style="color:' + w[1] + '">' + esc(w[0]) + '</b>'; }).join('') + '</div></div>' +
      '<div class="fm-say">' + L.say.map(function (x, i) { return '<div class="b b' + i + '"><b>' + esc(x[0]) + ':</b> ' + esc(x[1]) + '</div>'; }).join('') + '</div>' +
      '<div class="fm-limg"><img src="' + L.img + '" alt=""></div>', { nonum: true });
    // special words we say
    var Wd = F.words, COL = { 'يوسف': '#1F6FB2', 'أنس': '#1F8A5B', 'مريم': '#C2185B', 'محمد': '#E07B00', 'Muhammad': '#E07B00', 'Yusuf': '#1F6FB2', 'Anas': '#1F8A5B', 'Maryam': '#C2185B' };
    pg('fm fm-words', '<div class="fm-card"><div class="fm-wh">' + esc(Wd.h) + '</div><p class="fm-wl">' + esc(Wd.lead) + '</p>' +
      Wd.rows.map(function (r) {
        return '<div class="wq"><span class="av" style="--ac:' + COL[r[0]] + '">' + esc(r[0].charAt(0)) + '</span><div class="q">' + esc(r[1]) + '</div></div>' +
          '<div class="wa"><div class="ar">' + esc(r[2]) + '</div><div class="mn">' + esc(r[3]) + '</div></div>';
      }).join('') + '</div>', { nonum: true });
  }

  function part(p) {
    var J = p.data, st = J.stations, vars = partVars(p);
    var opArt = (CFG.partImg || {})[p.key];
    pg('opener', '<div class="art">' + (opArt ? '<img src="' + opArt + '" alt="" style="width:100%;height:100%;object-fit:cover;display:block">' : ART.paint(CFG.openers[p.key], false).replace('<svg ', '<svg preserveAspectRatio="xMidYMid slice" ')) + '</div><div class="body"><div class="pills"><span class="partno">' + T(UI.part) + ' ' + N(p.no) + '</span><span class="partno alt">' + N(st.length) + ' ' + T(UI.stations) + '</span></div><h2>' + esc(T(p.title)) + '</h2><div class="tag">' + esc(T(p.tagline)) + '</div><div class="guide">' + safe(T(J.guide)) + '</div></div>', { vars: vars, part: p, anchor: 'part-' + p.key });
    var ans = { p: p, items: [] };
    st.forEach(function (s, i) {
      var rc = CFG.scenes[s.id] || CFG.openers[p.key];
      var run = '<div class="run"><span>' + esc(T(CFG.title)) + '</span><b>' + esc(T(p.title)) + ' · ' + (CFG.storyWord ? T(CFG.storyWord) : T(UI.station) + ' ') + N(s.gn || i + 1) + '</b></div>';
      var story = AR ? (window.STORIES && window.STORIES[s.id]) : (window.STORIES_EN && window.STORIES_EN[s.id]);
      if (story) return storyStation(s, i, p, vars, run, story, ans);
      pg('pic', run + '<div class="head"><div class="badge">' + N(i + 1) + '</div><div>' + (s.chapter ? '<div class="ch">' + esc(T(s.chapter)) + '</div>' : '') + '<h2>' + esc(T(s.title)) + '</h2></div></div>' + sceneHTML(rc, false) +
        '<div class="simile">' + esc(strip(T(s.simile))) + '</div>' +
        '<div class="task"><div class="box"></div><div><b>' + T(UI.task) + '</b><span>' + esc(strip(T(s.action)).replace(/^🏅\s*/, '')) + '</span></div></div>' +
        '<div class="mine"><b>' + T(UI.mine) + '</b><i></i><i></i><i></i><i></i></div>' +
        '<div class="key"><small>' + T(UI.key) + '</small>' + esc(strip(T(s.key))) + '</div>', { vars: vars, part: p });
      var e = s.evidence, ev;
      if (e.kind === 'ayah') ev = '<div class="txt">' + esc(e.text) + '</div><div class="src">' + esc(T(e.ref)) + '</div>' + (e.explain ? '<div class="ex">' + esc(strip(T(e.explain))) + '</div>' : '');
      else ev = '<div class="txt">' + esc(e.text.ar) + '</div><div class="src">' + esc(T(e.source)) + '</div>' + (!AR && e.text.en ? '<div class="tr">' + esc(e.text.en) + '</div>' : '');
      pg('learn', run + '<div class="lh"><div class="badge">' + N(i + 1) + '</div><h3>' + esc(T(s.title)) + '</h3></div><div class="lc" style="flex:1;overflow:hidden">' +
        '<div class="sec"><b class="h">' + T(UI.learn) + '</b><p class="teach">' + safe(T(s.teach)) + '</p></div>' +
        '<div class="sec"><b class="h">' + T(UI.proof) + '</b><div class="ev">' + ev + '</div></div>' +
        '<div class="sec"><b class="h">' + T(UI.check) + '</b><div class="flip"><div class="no"><b class="t">' + T(UI.myth) + '</b>' + esc(strip(T(s.flip.claim))) + '</div><div class="yes"><b class="t">' + T(UI.truth) + '</b>' + safe(T(s.flip.bust)) + '</div></div></div>' +
        '</div>', { vars: vars, part: p, fit: true });
      if ((CFG.coloring[p.key] || []).indexOf(s.id) > -1) {
        pg('color-pg white', '<h2>' + T(UI.color) + ' · ' + esc(T(s.title)) + '</h2><div class="hint">' + T(UI.colorHint) + '</div>' + sceneHTML(rc, true) + '<div class="draw"><span>' + T(UI.drawHere) + '</span></div>', { vars: vars, part: p });
      }
    });
    activities(p, vars, ans);
  }

  function torn(seed) {
    var R = ART.rng(seed), pts = [], n = 46, j;
    for (j = 0; j <= n; j++) pts.push((j / n * 100).toFixed(2) + '% ' + (R() * 1.1).toFixed(2) + '%');
    for (j = 0; j <= n; j++) pts.push((100 - R() * 1.5).toFixed(2) + '% ' + (j / n * 100).toFixed(2) + '%');
    for (j = n; j >= 0; j--) pts.push((j / n * 100).toFixed(2) + '% ' + (100 - R() * 1.1).toFixed(2) + '%');
    for (j = n; j >= 0; j--) pts.push((R() * 1.5).toFixed(2) + '% ' + (j / n * 100).toFixed(2) + '%');
    return 'polygon(' + pts.join(',') + ')';
  }
  function evHTML(e) {
    if (Array.isArray(e)) return e.map(evHTML).join('<div class="evsep"></div>');
    if (e.kind === 'ayah') return '<div class="txt">' + esc(e.text) + '</div><div class="src">' + esc(T(e.ref)) + '</div>' + (e.explain ? '<div class="ex">' + esc(strip(T(e.explain))) + '</div>' : '');
    return '<div class="txt">' + esc(e.text.ar) + '</div><div class="src">' + esc(T(e.source)) + '</div>' + (!AR && e.text.en ? '<div class="tr">' + esc(e.text.en) + '</div>' : '');
  }

  /* ── story mode: three pages per station — the story, what the hero learned, then colouring or an activity ── */
  function storyStation(s, i, p, vars, run, S, ans) {
    var heroes = { 'يوسف': 'يوسف · ٨ سنوات', 'أنس': 'أنس · ٩ سنوات', 'مريم': 'مريم · ٧ سنوات' };
    if (!AR) heroes = { 'Yusuf': 'Yusuf, age 8', 'Anas': 'Anas, age 9', 'Maryam': 'Maryam, age 7' };
    if (CFG.heroes) heroes = AR ? CFG.heroes.ar : (CFG.heroes.en || heroes);
    var gn = s.gn || (i + 1), girl = (CFG.girls || ['مريم', 'Maryam']).indexOf(S.hero) > -1, lbl = CFG.storyWord ? T(CFG.storyWord) : (AR ? 'قصّةُ المحطّة ' : 'Story ');
    var SP = (AR && CFG.twoPage && window.STORIES_LONG && window.STORIES_LONG[s.id]) || S.p;
    var paras = SP.map(function (t, k) {
      var h = esc(t).replace(/«([^»]*)»/g, '<q>«$1»</q>').replace(/“([^”]*)”/g, '<q>“$1”</q>');
      return '<p>' + h + '</p>';
    }).join('');
    if (CFG.parchment) {
      var num = ('0' + gn).slice(-2);
      var two = CFG.twoPage;
      pg('storyp parch' + (two ? ' pa' : ''), '<div class="sheet" style="clip-path:' + torn(31 + gn * 7) + '"></div>' +
        (CFG.logo ? '<div class="plogo"><img src="' + CFG.logo + '" alt=""></div>' : '') +
        '<div class="ptxt"><h1>' + esc(S.t) + '</h1><div class="orn"><i></i>❖ ✦ ❖<i></i></div>' +
        '<div class="hero">' + (AR ? lbl + N(gn) + ' · ' + (S.hero === 'الجميع' ? 'أبطالُ القصّة: ' : girl ? 'بطلةُ القصّة: ' : 'بطلُ القصّة: ') : lbl + gn + ' · Our hero: ') + esc(heroes[S.hero] || S.hero) + '</div>' +
        '<div class="lc story">' + paras + '</div></div>' +
        '<div class="part"><img src="' + CFG.storyArt + 'c' + num + '.jpg" alt=""></div>' +
        (two ? '' : '<div class="key pkey"><small>' + T(UI.key) + '</small>' + esc(strip(T(s.key))) + '</div>'), { vars: vars, part: p, fit: two ? null : 'story', anchor: 'st-' + s.id });
      if (two) pg('parch pb', '<div class="sheet" style="clip-path:' + torn(57 + gn * 5) + '"></div>' +
        '<div class="ptxt2"><div class="lc2 story"></div><div class="orn2">❖ ✦ ❖</div>' +
        '<div class="key pkey2"><small>' + T(UI.key) + '</small>' + esc(strip(T(s.key))) + '</div></div>', { vars: vars, part: p });
    } else
    pg('storyp', run + '<div class="story-h"><span class="kick">📖 قصّةُ المحطّة ' + N(i + 1) + (s.chapter ? ' · ' + esc(strip(T(s.chapter)).replace(/^[^·]*·\s*/, '')) : '') + '</span><h1>' + esc(S.t) + '</h1><div class="hero">بطلُ القصّة: ' + esc(heroes[S.hero] || S.hero) + '</div></div>' +
      '<div class="lc story" style="flex:1;overflow:hidden">' + paras + '</div>' +
      '<div class="key"><small>' + T(UI.key) + '</small>' + esc(strip(T(s.key))) + '</div>', { vars: vars, part: p, fit: 'story' });
    pg('learn', run + '<div class="lh"><div class="badge">' + N(gn) + '</div><h3>' + (AR ? (S.hero === 'الجميع' ? 'ماذا تعلّمَ أبطالُنا؟ — ' : (girl ? 'ماذا تعلّمتْ ' : 'ماذا تعلّمَ ') + esc(S.hero) + '؟ — ') : 'What did ' + esc(S.hero) + ' learn? — ') + esc(strip(T(s.title))) + '</h3></div><div class="lc" style="flex:1;overflow:hidden">' +
      '<div class="sec"><b class="h">' + T(UI.learn) + '</b><p class="teach">' + safe(T(s.teach)) + '</p></div>' +
      '<div class="sec"><b class="h">' + T(UI.proof) + '</b><div class="ev">' + evHTML(s.evidence) + '</div></div>' +
      '<div class="sec"><b class="h">' + T(UI.check) + '</b><div class="flip"><div class="no"><b class="t">' + T(UI.myth) + '</b>' + esc(strip(T(s.flip.claim))) + '</div><div class="yes"><b class="t">' + T(UI.truth) + '</b>' + safe(T(s.flip.bust)) + '</div></div></div>' +
      '<div class="task"><div class="box"></div><div><b>' + T(UI.task) + '</b><span>' + esc(strip(T(s.action)).replace(/^🏅\s*/, '')) + '</span></div></div>' +
      '<div class="talk"><b>' + (AR ? '🗣️ نتحاور:' : '🗣️ Let’s talk:') + '</b> ' + esc(S.talk) + '</div>' +
      '</div>', { vars: vars, part: p, fit: true });
    var th = S.third || {};
    if (th.type === 'img' || th.type === 'code') {
      var pic = th.type === 'img' ? '<div class="scene line-img"><img src="' + CFG.storyArt + th.src + '" alt=""></div>' : sceneHTML(CFG.scenes[th.scene], true);
      pg('color-pg white', '<h2>' + (AR ? '🖍️ لوّن مع ' : '🖍️ Colour with ') + esc(S.hero) + '</h2><div class="hint">' + esc(th.cap) + '</div>' + pic + '<div class="draw"><span>' + T(UI.drawHere) + '</span></div>', { vars: vars, part: p });
    } else if (th.type === 'act') {
      var r = storyAct(th, p, gn - 1);
      pg('act white sact', '<h2>' + esc(th.title || T(UI.maze)) + '</h2><div class="hint">' + esc(th.hint || '') + '</div>' + r.html, { vars: vars, part: p });
      if (r.ans) ans.items.push(r.ans);
    }
  }

  function storyAct(a, p, i) {
    var lbl = '<h3>' + N(i + 1) + ') ' + esc(a.title || T(UI.maze)) + '</h3>';
    if (a.kind === 'maze') {
      var m = maze(57 + i * 11, 14, 18);
      return { html: '<div class="maze">' + mazeSVG(m, a.from, a.to) + '</div>', ans: '<div class="ansbox">' + lbl + '<div style="width:52mm">' + mazeSVG(m, a.from, a.to, true) + '</div></div>' };
    }
    if (a.kind === 'choose') {
      return { html: '<div class="tf">' + a.items.map(function (it, k) { return '<div class="item"><span class="n">' + N(k + 1) + '</span><span class="q">' + esc(it[0]) + '</span><span class="ch"><span>✓</span><span>✗</span></span></div>'; }).join('') + '</div>',
        ans: lbl + '<p>' + a.items.map(function (it, k) { return N(k + 1) + ') ' + (it[1] ? '✓' : '✗'); }).join(' · ') + '</p>' };
    }
    if (a.kind === 'sort') {
      var chips = '<div class="chips">' + a.items.map(function (it, k) { return '<span><b>' + N(k + 1) + '</b>' + esc(it[0]) + '</span>'; }).join('') + '</div>';
      var boxes = '<div class="bins" style="grid-template-columns:repeat(' + a.cols.length + ',1fr)">' + a.cols.map(function (c) { return '<div><b>' + esc(c) + '</b><i></i></div>'; }).join('') + '</div>';
      return { html: chips + boxes, ans: lbl + '<p>' + a.cols.map(function (c, ci) { return esc(c) + ': ' + a.items.map(function (it, k) { return it[1] === ci ? N(k + 1) : null; }).filter(Boolean).join(AR ? '، ' : ', '); }).join(' — ') + '</p>' };
    }
    if (a.kind === 'match') {
      var ord = a.order; // display position → index of the correct right item
      var L = a.left.map(function (t, k) { return '<div class="ml"><span>' + esc(t) + '</span><i></i></div>'; }).join('');
      var Rr = ord.map(function (ri, pos) { return '<div class="mr"><i></i><span><b>' + (AR ? 'أبجدهوز' : 'ABCDEFG').charAt(pos) + '</b> ' + esc(a.right[ri]) + '</span></div>'; }).join('');
      return { html: '<div class="match"><div>' + L + '</div><div>' + Rr + '</div></div>',
        ans: lbl + '<p>' + a.left.map(function (t, k) { return N(k + 1) + (AR ? ' ← ' : ' → ') + (AR ? 'أبجدهوز' : 'ABCDEFG').charAt(ord.indexOf(k)); }).join(' · ') + '</p>' };
    }
    if (a.kind === 'ws') {
      var ws = wordSearch(a.words, 211 + i * 17);
      return { html: '<div class="ws">' + wsTable(ws) + '<div class="words">' + ws.placed.map(function (x) { return '<span>' + x.w + '</span>'; }).join('') + '</div></div>', ans: '<div class="ansbox">' + lbl + wsTable(ws, true, true) + '</div>' };
    }
    if (a.kind === 'bricks') {
      var o = '<div class="bricks"><div class="roof">🏡</div>';
      a.rows.forEach(function (r) { o += '<div class="brow"><b>' + esc(r[0]) + '</b>' + new Array(r[1] + 1).join('<i></i>') + '</div>'; });
      return { html: o + '<div class="bfoot">' + (AR ? '١٢ ركعةً = بيتٌ في الجنّة' : '12 rak‘ahs = a house in Paradise') + '</div></div>' };
    }
    if (a.kind === 'order') {
      return { html: '<div class="order">' + a.items.map(function (t) { return '<div class="step"><span class="box"></span><span>' + esc(t) + '</span></div>'; }).join('') + '</div>',
        ans: lbl + '<p>' + a.items.map(function (t, k) { return esc(t) + ' = ' + N(a.answer[k]); }).join(' · ') + '</p>' };
    }
    if (a.kind === 'write') return { html: '<div class="write">' + a.lines.map(function (l) { return '<div class="ln">' + esc(l) + '</div><div class="ln"></div>'; }).join('') + '</div>' };
    if (a.kind === 'tracker') {
      var cols = AR ? ['الفجر', 'الظهر', 'العصر', 'المغرب', 'العشاء'] : ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'], days = AR ? ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'] : ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
      return { html: '<div class="trk"><table><tr><th></th>' + cols.map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr>' + days.map(function (d) { return '<tr><td class="d">' + d + '</td>' + cols.map(function () { return '<td><span class="circle"></span></td>'; }).join('') + '</tr>'; }).join('') + '</table></div>' };
    }
    if (a.kind === 'draw') return { html: '<div class="drawbig">' + a.labels.map(function (l, k) { return '<span class="dl dl' + k + '">' + esc(l) + '</span>'; }).join('') + '</div>' };
    return { html: '' };
  }

  function activities(p, vars, ans) {
    var st = p.data.stations, acts = CFG.activities[p.key] || [];
    ans = ans || { p: p, items: [] };
    acts.forEach(function (a, ai) {
      if (a === 'tf') {
        var n = Math.min(8, st.length), items = [];
        for (var i = 0; i < n; i++) { var s = st[Math.floor(i * st.length / n)]; var f = i % 2 === 0; items.push({ q: strip(T(f ? s.flip.claim : s.key)).replace(/^[«"“]|[»"”]$/g, '').replace(/[«»]/g, ''), a: !f }); }
        pg('act white', '<h2>' + T(UI.tf) + '</h2><div class="hint">' + T(UI.tfHint) + '</div><div class="tf">' + items.map(function (it, k) { return '<div class="item"><span class="n">' + N(k + 1) + '</span><span class="q">' + esc(it.q) + '</span><span class="ch"><span>' + T(UI.yes) + '</span><span>' + T(UI.no) + '</span></span></div>'; }).join('') + '</div>', { vars: vars, part: p });
        ans.items.push('<h3>' + T(UI.tf) + '</h3><p>' + items.map(function (it, k) { return N(k + 1) + ') ' + (it.a ? T(UI.yes) : T(UI.no)); }).join(' · ') + '</p>');
      } else if (a === 'ws') {
        var words = (CFG.words[p.key] || {})[LANG] || [];
        var ws = wordSearch(words, 97 + p.no * 13);
        pg('act white', '<h2>' + T(UI.ws) + '</h2><div class="hint">' + T(UI.wsHint) + '</div><div class="ws">' + wsTable(ws) + '<div class="words">' + ws.placed.map(function (x) { return '<span>' + x.w + '</span>'; }).join('') + '</div></div>', { vars: vars, part: p });
        ans.items.push('<div class="ansbox"><h3>' + T(UI.ws) + '</h3>' + wsTable(ws, true, true) + '</div>');
      } else if (a.t === 'maze') {
        var m = maze(31 + p.no * 7, 14, 18);
        pg('act white', '<h2>' + T(UI.maze) + '</h2><div class="hint">' + esc(T(a.hint)) + '</div><div class="maze">' + mazeSVG(m, a.from, a.to) + '</div>', { vars: vars, part: p });
        ans.items.push('<div class="ansbox"><h3>' + T(UI.maze) + '</h3><div style="width:62mm">' + mazeSVG(m, a.from, a.to, true) + '</div></div>');
      } else if (a.t === 'spot') {
        pg('act white sd', '<h2>' + (AR ? '🔎 أوجِد ' + N(a.n || 5) + ' فروق' : '🔎 Spot ' + (a.n || 5) + ' differences') + '</h2><div class="hint">' + (AR ? 'انظر جيّدًا إلى الصورتين، وضع دائرةً حول كلِّ فرق، ثمّ لوّن نجمةً لكلِّ فرقٍ تجده!' : 'Look closely at the two pictures, circle each difference, then colour a star for every one you find!') + '</div><div class="pair"><img src="' + a.a + '" alt=""><img src="' + a.b + '" alt=""></div><div class="stars">' + Array(+(a.n || 5) + 1).join('☆ ').trim() + '</div>', { vars: vars, part: p });
        ans.items.push('<div class="ansbox"><h3>' + (AR ? '🔎 أوجِد ' + N(a.n || 5) + ' فروق' : '🔎 Spot ' + (a.n || 5) + ' differences') + '</h3><img src="' + a.key + '" alt="" style="width:70mm;border-radius:2mm;display:block"></div>');
      } else if (a.t === 'html') {
        pg('act white', '<h2>' + esc(T(a.title)) + '</h2><div class="hint">' + esc(T(a.hint)) + '</div>' + a.body(T, N, sceneHTML), { vars: vars, part: p });
        if (a.answer) ans.items.push('<h3>' + esc(T(a.title)) + '</h3><p>' + a.answer(T, N) + '</p>');
      }
    });
    answers.push(ans);
  }

  function back() {
    
    // pack the answers item by item (a grid, maze or picture is heavy; a line of answers is light)
    var cur = [], w = 0, first = true, lastPart = null;
    function flush() { if (!cur.length) return; pg('ans white', (first ? '<h2 style="text-align:center;font:900 22pt/1.5 Tajawal;margin:0 0 2mm">' + T(UI.answers) + '</h2>' : '') + cur.join(''), { anchor: first ? 'answers' : null }); first = false; cur = []; w = 0; lastPart = null; }
    answers.forEach(function (a) {
      a.items.forEach(function (h) {
        var iw = /ansbox/.test(h) ? 3 : 1;
        if (w + iw > 9) flush();
        if (lastPart !== a.p) { cur.push('<h2 style="font:900 15pt/1.5 Tajawal;color:' + ART.dark(a.p.color, .35) + ';margin:3mm 0 0;width:100%">' + esc(T(a.p.title)) + '</h2>'); lastPart = a.p; }
        cur.push('<div style="' + partVars(a.p) + ';display:inline-block;vertical-align:top;max-width:100%">' + h + '</div>'); w += iw;
      });
    });
    flush();
    var CERTS = AR ? CFG.certs : (CFG.certsEn || CFG.certs);
    if (CERTS) CERTS.forEach(function (c, k) {
      var corner = '<svg viewBox="0 0 60 60"><path d="M30 2 L36 24 L58 30 L36 36 L30 58 L24 36 L2 30 L24 24 Z" fill="#E2B04A" stroke="#7A4E0A" stroke-width="1.5"/><path d="M30 14 L33 27 L46 30 L33 33 L30 46 L27 33 L14 30 L27 27 Z" fill="#FFF3C8" stroke="#7A4E0A" stroke-width="1"/><circle cx="30" cy="30" r="4" fill="#7A4E0A"/></svg>';
      pg('cert2 ' + c.cls, '<div class="cframe"><div class="cin">' +
        ['tl', 'tr', 'bl', 'br'].map(function (q) { return '<span class="cc ' + q + '">' + corner + '</span>'; }).join('') +
        '<div class="carch"><img src="' + c.img + '" alt=""></div>' +
        '<div class="cbism">' + (AR ? 'بِسمِ اللهِ الرَّحمٰنِ الرَّحيم' : 'In the name of Allah, the Most Merciful') + '</div>' +
        '<h2>' + esc(c.title) + '</h2><div class="csub">' + esc(c.sub) + '</div>' +
        '<div class="cto">' + esc(c.to) + '</div><div class="cname"></div>' +
        '<p>' + esc(c.text) + '</p>' +
        '<div class="cayah">' + (c.ayah || '﴿رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي﴾') + '<small>' + (AR ? (c.ayahRef || 'سورة إبراهيم · ٤٠') : (c.ayahNote || 'Surah Ibrahim 14:40')) + '</small></div>' +
        '<div class="cstars">★ ★ ★ ★ ★</div>' +
        '<div class="cfoot"><span>' + (AR ? 'التاريخ' : 'Date') + '</span><div class="cseal"><b>☾</b>' + (c.seal || 'فارسُ<br>الصلاة') + '</div><span>' + (AR ? 'توقيعُ وليِّ الأمر' : 'Parent’s signature') + '</span></div>' +
        '</div></div>', { anchor: k === 0 ? 'cert' : null, nonum: true });
    });
    else pg('cert', '<div class="frame">' + (CFG.certPlain ? '<div style="font:700 44pt/1 Amiri;color:#C9962A;margin-top:6mm">۞</div>' : '<div style="width:70mm">' + ART.paint(CFG.certArt || CFG.cover, false) + '</div>') + '<h2>' + T(UI.cert) + '</h2><div class="lbl">' + esc(T(CFG.certTo)) + '</div><div class="name"></div><p>' + esc(T(CFG.certText)) + '</p><div class="seal"><span>' + esc(T(CFG.certDate)) + '</span><span>' + esc(T(CFG.certSign)) + '</span></div></div>', { anchor: 'cert' });
    if (!PRINT) {
      var picks = CFG.backImgs ? CFG.backImgs.map(function (u) { return '<div class="scene"><img src="' + u + '" alt="" style="width:100%;display:block"></div>'; }).join('') : CFG.backArt.map(function (k) { return sceneHTML(CFG.scenes[k], false); }).join('');
      pg('back', '<h2>' + esc(T(CFG.title)) + '</h2><p>' + esc(T(CFG.blurb)) + '</p><div class="grid">' + picks + '</div><ul>' + T(CFG.bullets).map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul><div class="site">tarbiyahkids.uk</div>', { nonum: true });
    }
  }

  /* ── printer's wrap cover: back + spine + front, with 0.125 in bleed ── */
  function wrap(nPages) {
    var spine = Math.max(.06, nPages * .002252), w = 8.5 * 2 + spine + .25, h = 11.25;
    st.textContent = '@page{size:' + w.toFixed(3) + 'in ' + h + 'in;margin:0}';
    var front = '<div dir="' + (AR ? 'rtl' : 'ltr') + '" style="width:8.625in;height:100%;display:flex;flex-direction:column;background:#0F3B33;color:#fff"><div style="height:62%">' + (CFG.coverImg ? '<img src="' + CFG.coverImg + '" style="width:100%;height:100%;object-fit:cover;display:block">' : ART.paint(CFG.cover, false).replace('<svg ', '<svg preserveAspectRatio="xMidYMid slice" style="height:100%" ')) + '</div><div class="ttl" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:6mm .8in .55in"><div class="kick" style="font:800 13pt/1.6 Tajawal;color:#F5CC5A;margin:0 0 4mm">' + esc(T(CFG.kicker)) + '</div><h1 style="font:700 52pt/1.75 Amiri;margin:0 0 1mm;padding-top:2mm;color:#FFF3C8">' + esc(T(CFG.title)) + '</h1><div style="width:60mm;height:3mm;margin:2mm auto 4mm;background:repeating-linear-gradient(90deg,#F5CC5A 0 3mm,transparent 3mm 6mm);border-radius:2mm;opacity:.8"></div><div style="font:700 15pt/1.7 Tajawal;color:#E6F4EF;max-width:6.4in">' + esc(T(CFG.sub)) + '</div><div style="margin-top:5mm;display:inline-flex;gap:2mm;align-items:center;font:900 11.5pt Tajawal;background:#F5CC5A;color:#0F3B33;border-radius:99px;padding:1.6mm 5mm">🌙 ' + esc(T(CFG.brand)) + '</div></div></div>';
    var backC = '<div dir="' + (AR ? 'rtl' : 'ltr') + '" style="width:8.625in;height:100%;background:#0F3B33;color:#EAF5F1;padding:.7in .75in;box-sizing:border-box;display:flex;flex-direction:column"><h2 style="font:700 26pt/1.75 Amiri;color:#FFF3C8;text-align:center;margin:0 0 4mm">' + esc(T(CFG.title)) + '</h2><p style="font:600 12.5pt/1.9 Tajawal">' + esc(T(CFG.blurb)) + '</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:4mm">' + (CFG.backImgs ? CFG.backImgs.map(function (u) { return '<div style="border-radius:3mm;overflow:hidden"><img src="' + u + '" style="width:100%;display:block"></div>'; }) : CFG.backArt.map(function (k) { return '<div style="border-radius:3mm;overflow:hidden">' + ART.paint(CFG.scenes[k], false) + '</div>'; })).join('') + '</div><div style="margin-top:auto;display:flex;justify-content:space-between;align-items:flex-end"><b style="font:900 13pt Tajawal;color:#F5CC5A">tarbiyahkids.uk</b><div style="width:2in;height:1.2in;background:#fff;border-radius:2mm;color:#999;font:700 8pt Tajawal;display:grid;place-items:center">barcode area</div></div></div>';
    var sp = '<div style="width:' + spine.toFixed(3) + 'in;height:100%;background:#0B2E28;display:flex;align-items:center;justify-content:center"><div style="transform:rotate(' + (AR ? 90 : 90) + 'deg);white-space:nowrap;font:900 ' + Math.min(14, spine * 72 * .55).toFixed(1) + 'pt Tajawal;color:#F5CC5A">' + esc(T(CFG.title)) + ' · ' + esc(T(CFG.brand)) + '</div></div>';
    // Arabic books bind on the right: the front cover sits on the left of the flat sheet
    var row = AR ? front + sp + backC : backC + sp + front;
    var bk = document.getElementById('book'); bk.style.cssText = 'display:block;padding:0';
    bk.innerHTML = '<div class="pg" style="width:' + w.toFixed(3) + 'in;height:' + h + 'in;padding:0;flex-direction:row;direction:ltr">' + row + '</div>';
  }

  /* ── render ── */
  function render() {
    var book = document.getElementById('book'), no = 0, out = [];
    pages.forEach(function (p) {
      if (!p.o.nonum) no++;
      p.no = p.o.nonum ? 0 : no;
      out.push('<section class="pg ' + p.cls + '"' + (p.o.vars ? ' style="' + p.o.vars + '"' : '') + (p.o.anchor ? ' id="' + p.o.anchor + '"' : '') + '>' + p.html + (p.no ? '<div class="num"><i>' + N(p.no) + '</i></div>' : '') + '</section>');
    });
    book.innerHTML = out.join('');
    // contents
    var rows = [];
    function pnum(id) { var el = document.getElementById(id); if (!el) return ''; var i = Array.prototype.indexOf.call(book.children, el); if (!pages[i]) return ''; if (pages[i].no) return N(pages[i].no); for (var j = i - 1; j >= 0; j--) if (pages[j].no) return N(pages[j].no + i - j); return ''; }
    parts.forEach(function (p) {
      rows.push('<div class="row" style="' + partVars(p) + '"><span class="dot"></span><span class="t">' + T(UI.part) + ' ' + N(p.no) + ': ' + esc(T(p.title)) + '<small>' + esc(T(p.tagline)) + '</small></span><span class="p">' + pnum('part-' + p.key) + '</span></div>');
      var SS = AR ? window.STORIES : window.STORIES_EN;
      if (CFG.parchment && SS) {
        var li = p.data.stations.map(function (s, i) { var S = SS[s.id]; if (!S) return ''; return '<div class="srow"><b>' + N(s.gn || i + 1) + '</b><span>' + esc(S.t) + '</span><i></i><em>' + pnum('st-' + s.id) + '</em></div>'; }).join('');
        rows.push('<div class="slist" style="' + partVars(p) + ';grid-template-rows:repeat(' + Math.ceil(p.data.stations.length / 2) + ',auto)">' + li + '</div>');
      }
    });
    var tr2 = document.getElementById('tocRows2');
    rows.push('<div class="row" style="--pc:#7A6A58"><span class="dot"></span><span class="t">' + T(UI.answers) + '</span><span class="p">' + pnum('answers') + '</span></div>');
    rows.push('<div class="row" style="--pc:#C9962A"><span class="dot"></span><span class="t">' + T(UI.cert) + '</span><span class="p">' + pnum('cert') + '</span></div>');
    var tr = document.getElementById('tocRows');
    if (tr && tr2) { var cut = 2 * Math.ceil(parts.length / 2); tr.innerHTML = rows.slice(0, cut).join(''); tr2.innerHTML = rows.slice(cut).join(''); } // two rows (title + story list) per part
    else if (tr) tr.innerHTML = rows.join('');
    return no;
  }
  function flowTwo() {
    Array.prototype.forEach.call(document.querySelectorAll('.pa'), function (a) {
      var b = a.nextElementSibling, A = a.querySelector('.lc'), B = b.querySelector('.lc2'), fs = 13.4;
      var all = Array.prototype.slice.call(A.children);
      function place() {
        a.style.setProperty('--fs', fs.toFixed(1) + 'pt'); b.style.setProperty('--fs', fs.toFixed(1) + 'pt');
        all.forEach(function (n) { A.appendChild(n); });
        while (A.scrollHeight > A.clientHeight + 1 && A.children.length > 1) B.insertBefore(A.lastElementChild, B.firstChild);
      }
      place();
      while (B.scrollHeight > B.clientHeight + 1 && fs > 10.6) { fs -= .3; place(); }
      a.dataset.fs = b.dataset.fs = fs.toFixed(1);
    });
  }
  function fit() {
    flowTwo();
    Array.prototype.forEach.call(document.querySelectorAll('.learn,.storyp:not(.pa)'), function (pgEl) {
      var lc = pgEl.querySelector('.lc'), fs = pgEl.classList.contains('storyp') ? 15.8 : 13.6;
      while (lc.scrollHeight > lc.clientHeight + 1 && fs > 9.6) { fs -= .3; pgEl.style.setProperty('--fs', fs.toFixed(1) + 'pt'); }
      pgEl.dataset.fs = fs.toFixed(1);
    });
  }
  function toolbar(n) {
    var tb = document.createElement('div'); tb.className = 'tb';
    function link(k, v) { var u = new URLSearchParams(location.search); if (v == null) u.delete(k); else u.set(k, v); return '?' + u.toString(); }
    tb.innerHTML = '<button class="main" onclick="print()">' + T(UI.print) + '</button>' +
      '<button onclick="location.search=\'' + link('lang', AR ? 'en' : null) + '\'">' + (AR ? 'English' : 'العربية') + '</button>' +
      '<button onclick="location.search=\'' + link('size', PRINT ? null : 'print') + '\'">' + (PRINT ? 'A4' : '8.5×11 in (print)') + '</button>' +
      (PRINT ? '<button onclick="location.search=\'' + link('cover', 'wrap') + '\'">' + (AR ? 'غلاف المطبعة' : 'Printer cover') + '</button>' : '') +
      '<select onchange="location.search=this.value"><option value="' + link('part', null) + '">' + (AR ? 'الكتاب كاملًا' : 'Whole book') + '</option>' + CFG.parts.map(function (p) { return '<option value="' + link('part', p.key) + '"' + (ONLY === p.key ? ' selected' : '') + '>' + esc(T(p.title)) + '</option>'; }).join('') + '</select>' +
      '<span class="info">' + N(n) + ' ' + T(UI.page) + '</span>';
    document.body.insertBefore(tb, document.body.firstChild);
  }

  function go() {
    if (Q.get('cover') === 'wrap') {
      // count interior pages first so the spine width is right
      front(); parts.forEach(part); back();
      var n = pages.filter(function (p) { return !/cover|back/.test(p.cls); }).length;
      wrap(n); document.getElementById('loading').remove(); window.BOOK_READY = true; return;
    }
    front(); parts.forEach(part); back();
    var n = render();
    var done = function () { fit(); toolbar(pages.length); var l = document.getElementById('loading'); if (l) l.remove(); window.BOOK_READY = true; window.BOOK_PAGES = pages.length; };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { setTimeout(done, 50); }); else setTimeout(done, 600);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
})();
