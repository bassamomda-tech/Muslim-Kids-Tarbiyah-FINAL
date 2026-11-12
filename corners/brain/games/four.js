/* أربعة في صفّ — Four in a Row: 7×6, vs computer (alpha-beta, 3 depths) or two players */
(function () {
  'use strict';
  Brain.css('.c4{display:grid;grid-template-columns:repeat(7,1fr);gap:5px;width:min(100%,490px);padding:8px;border-radius:18px;background:linear-gradient(160deg,#2E6DA4,#1C4A78);box-shadow:inset 0 -6px 0 rgba(0,0,0,.25)}' +
    '.c4 button{aspect-ratio:1;border-radius:50%;border:none;padding:0;cursor:pointer;background:#0B2440;box-shadow:inset 0 3px 5px rgba(0,0,0,.5);min-width:0}' +
    '.c4 button.p1{background:radial-gradient(circle at 35% 30%,#FFE89A,#E8B530 60%,#B8860B)}' +
    '.c4 button.p2{background:radial-gradient(circle at 35% 30%,#FF9C8A,#E5674F 60%,#A8372A)}' +
    '.c4 button.win{outline:4px solid #fff;outline-offset:-4px}.c4 button.last{box-shadow:0 0 0 3px rgba(255,255,255,.55)}' +
    '.c4dot{display:inline-block;width:1.1em;height:1.1em;border-radius:50%;vertical-align:-.2em}.c4dot.p1{background:#E8B530}.c4dot.p2{background:#E5674F}');
  var W = 7, H = 6, B, S, busy = false, timer = null, WIN = [];
  (function () {
    for (var r = 0; r < H; r++) for (var c = 0; c < W; c++) [[1, 0], [0, 1], [1, 1], [1, -1]].forEach(function (d) {
      var ec = c + 3 * d[0], er = r + 3 * d[1]; if (ec < 0 || ec >= W || er < 0 || er >= H) return;
      WIN.push([0, 1, 2, 3].map(function (k) { return (r + k * d[1]) * W + c + k * d[0]; }));
    });
  })();
  function heights(g) { var h = []; for (var c = 0; c < W; c++) { var r = 0; while (r < H && g[r * W + c]) r++; h.push(r); } return h; }
  function winLine(g) { for (var i = 0; i < WIN.length; i++) { var w = WIN[i], p = g[w[0]]; if (p && g[w[1]] === p && g[w[2]] === p && g[w[3]] === p) return w; } return null; }
  function wonAt(g, i, p) {
    var r = (i / W) | 0, c = i % W, D = [[1, 0], [0, 1], [1, 1], [1, -1]];
    for (var d = 0; d < 4; d++) {
      var n = 1, k, x, y;
      for (k = 1; k < 4; k++) { x = c + D[d][0] * k; y = r + D[d][1] * k; if (x < 0 || x >= W || y < 0 || y >= H || g[y * W + x] !== p) break; n++; }
      for (k = 1; k < 4; k++) { x = c - D[d][0] * k; y = r - D[d][1] * k; if (x < 0 || x >= W || y < 0 || y >= H || g[y * W + x] !== p) break; n++; }
      if (n >= 4) return true;
    }
    return false;
  }
  var SC = [0, 1, 8, 60, 0];
  function evalFor(g, p) {
    var s = 0;
    for (var i = 0; i < WIN.length; i++) { var w = WIN[i], a = 0, b = 0; for (var k = 0; k < 4; k++) { var v = g[w[k]]; if (v === p) a++; else if (v) b++; } if (!b) s += SC[a]; else if (!a) s -= SC[b]; }
    for (var r = 0; r < H; r++) { if (g[r * W + 3] === p) s += 3; else if (g[r * W + 3]) s -= 3; }
    return s;
  }
  var ORDER = [3, 2, 4, 1, 5, 0, 6];
  function nega(g, h, d, a, b, p) {
    var best = -1e9, any = false;
    for (var k = 0; k < 7; k++) {
      var c = ORDER[k]; if (h[c] >= H) continue; any = true;
      var i = h[c] * W + c, sc; g[i] = p; h[c]++;
      if (wonAt(g, i, p)) sc = 100000 + d; else if (d <= 1) sc = evalFor(g, p); else sc = -nega(g, h, d - 1, -b, -a, 3 - p);
      h[c]--; g[i] = 0;
      if (sc > best) best = sc; if (sc > a) a = sc; if (a >= b) break;
    }
    return any ? best : 0;
  }
  function cpuMove(p) {
    var g = S.g.slice(), h = heights(g), depth = { easy: 1, medium: 3, hard: 6 }[B.level], best = -1e9, picks = [];
    var cols = ORDER.filter(function (c) { return h[c] < H; });
    if (B.level === 'easy' && Math.random() < 0.5) return cols[Math.floor(Math.random() * cols.length)];
    cols.forEach(function (c) {
      var i = h[c] * W + c, sc; g[i] = p; h[c]++;
      if (wonAt(g, i, p)) sc = 200000; else if (depth <= 1) sc = evalFor(g, p); else sc = -nega(g, h, depth - 1, -1e9, 1e9, 3 - p);
      h[c]--; g[i] = 0;
      if (sc > best + 0.5) { best = sc; picks = [c]; } else if (Math.abs(sc - best) <= 0.5) picks.push(c);
    });
    return picks[Math.floor(Math.random() * picks.length)];
  }
  function dot(p) { return '<span class="c4dot p' + p + '"></span>'; }
  function status() {
    if (B.over) return;
    if (B.mode === 'two') B.status(dot(S.t) + (S.t === 1 ? B.T('دورُ اللاعب الأوّل', 'Player 1\'s turn') : B.T('دورُ اللاعب الثاني', 'Player 2\'s turn')));
    else B.status(S.t === 1 ? dot(1) + B.T('دورك! اختر عمودًا', 'Your turn! Choose a column') : dot(2) + B.T('الحاسوب يفكّر…', 'The computer is thinking…'));
  }
  function render() {
    var w = winLine(S.g), bs = B.stage.querySelectorAll('.c4 button');
    bs.forEach(function (b) {
      var i = +b.dataset.i, v = S.g[i];
      b.className = (v ? 'p' + v : '') + (w && w.indexOf(i) >= 0 ? ' win' : '') + (S.last === i ? ' last' : '');
    });
    status();
  }
  function full() { return S.g.every(function (v) { return v; }); }
  function finish() {
    var w = winLine(S.g); if (!w && !full()) return false;
    B.over = true; render();
    var p = w ? S.g[w[0]] : 0;
    timer = setTimeout(function () {
      if (!p) return B.draw(B.T('امتلأت اللوحة ولم يصُفّ أحدٌ أربعة.', 'The board is full and nobody made four.'));
      if (B.mode === 'two') B.win({ stars: 1, title: B.T('انتهت اللعبة!', 'Game over!'), msg: p === 1 ? B.T('فاز اللاعب الأوّل (الأصفر) — وأحسنَ اللاعبُ الثاني أيضًا!', 'Player 1 (yellow) won — and well played, Player 2!') : B.T('فاز اللاعب الثاني (الأحمر) — وأحسنَ اللاعبُ الأوّل أيضًا!', 'Player 2 (red) won — and well played, Player 1!') });
      else if (p === 1) B.win({ msg: B.T('صففتَ أربعةً في صفّ!', 'You made four in a row!') }); else B.lose(B.T('صفَّ الحاسوبُ أربعةً هذه المرّة.', 'The computer made four this time.'));
    }, 800);
    return true;
  }
  function drop(c, p) { var h = heights(S.g); if (h[c] >= H) return false; S.last = h[c] * W + c; S.g[S.last] = p; return true; }
  function play(c) {
    if (B.over || busy) return false;
    if (!drop(c, S.t)) return false;
    S.t = 3 - S.t; B.beep('tap'); B.save(S); render();
    if (finish()) return true;
    if (B.mode === 'cpu' && S.t === 2) cpuTurn();
    return true;
  }
  function cpuTurn() {
    busy = true;
    timer = setTimeout(function () { busy = false; drop(cpuMove(2), 2); S.t = 1; B.beep('move'); B.save(S); render(); finish(); }, 420);
  }
  Brain.game({
    id: 'four',
    modes: [{ id: 'cpu', ar: 'ضدّ الحاسوب', en: 'vs Computer' }, { id: 'two', ar: 'لاعبان', en: 'Two players' }],
    how: {
      ar: ['اضغط عمودًا ليسقط قرصُك إلى أسفله.', 'مَن يصُفّ أربعةَ أقراصٍ متتاليةً — أفقيًّا أو عموديًّا أو مائلًا — يفوز.', 'انتبه لأقراص صاحبك، وامنعه قبل أن يكمل أربعة.'],
      en: ['Tap a column and your disc drops to the bottom.', 'Whoever lines up four discs — across, down or diagonally — wins.', 'Watch the other player\'s discs and block them before they make four.']
    },
    init: function (b) {
      B = b; var h = '<div class="bd c4">';
      for (var r = H - 1; r >= 0; r--) for (var c = 0; c < W; c++) h += '<button type="button" data-i="' + (r * W + c) + '" data-c="' + c + '" aria-label="' + (c + 1) + '"></button>';
      B.stage.innerHTML = h + '</div>';
      B.stage.querySelectorAll('button').forEach(function (x) { x.onclick = function () { play(+x.dataset.c); }; });
      B.api = { state: function () { return S; }, play: play, legal: function () { var h = heights(S.g); return ORDER.filter(function (c) { return h[c] < H; }); }, winLine: function () { return winLine(S.g); }, busy: function () { return busy; } };
    },
    newGame: function () { clearTimeout(timer); busy = false; S = { g: new Array(W * H).fill(0), t: 1, last: -1 }; render(); },
    restore: function (b, s) { if (!s || !s.g || s.g.length !== 42 || winLine(s.g)) return false; S = s; if (full()) return false; render(); if (B.mode === 'cpu' && S.t === 2) cpuTurn(); },
    relang: function () { render(); }
  });
})();
