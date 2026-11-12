/* المتاهة — The maze: a fresh maze each game (7×7 · 10×10 · 13×13); reach the mosque.
   Move with the arrow buttons, the keyboard arrows, or by dragging / swiping a finger on the board. */
(function () {
  'use strict';
  Brain.css(
    '.mz{width:min(100%,480px);aspect-ratio:1;border-radius:12px;background:#F6ECD2;box-shadow:0 0 0 4px #5b3d17,0 10px 26px rgba(0,0,0,.4);overflow:hidden}' +
    '.mz svg{display:block;width:100%;height:100%}' +
    '.mz .w{stroke:#1D4A78;stroke-width:.1;stroke-linecap:round}.mz .tr{fill:rgba(232,181,48,.4)}.mz .me{fill:#E8B530;stroke:#7A4A12;stroke-width:.06}.mz .goal{fill:#CFEBD8}' +
    '.mzpad{display:grid;grid-template-columns:repeat(3,58px);grid-template-rows:repeat(2,54px);gap:6px;justify-content:center;direction:ltr;margin:.2rem auto 0}' +
    '.mzpad button{border-radius:14px;border:1.5px solid var(--line);background:rgba(255,255,255,.1);color:var(--ink);font-size:1.5rem;font-weight:900;cursor:pointer;padding:0;touch-action:manipulation;font-family:inherit}' +
    '.mzpad .u{grid-column:2;grid-row:1}.mzpad .l{grid-column:1;grid-row:2}.mzpad .d{grid-column:2;grid-row:2}.mzpad .r{grid-column:3;grid-row:2}');
  var DX = [0, 1, 0, -1], DY = [-1, 0, 1, 0], B, S, drag = null;
  /* open[i] bit d set = no wall on side d (0 up · 1 right · 2 down · 3 left) */
  function carve(n) {
    var open = new Array(n * n).fill(0), seen = new Array(n * n).fill(false), stack = [0]; seen[0] = true;
    while (stack.length) {
      var c = stack[stack.length - 1], x = c % n, y = (c / n) | 0, opts = [];
      for (var d = 0; d < 4; d++) { var nx = x + DX[d], ny = y + DY[d]; if (nx >= 0 && nx < n && ny >= 0 && ny < n && !seen[ny * n + nx]) opts.push(d); }
      if (!opts.length) { stack.pop(); continue; }
      var k = opts[Math.floor(Math.random() * opts.length)], t = (y + DY[k]) * n + x + DX[k];
      open[c] |= 1 << k; open[t] |= 1 << ((k + 2) % 4); seen[t] = true; stack.push(t);
    }
    return open;
  }
  function status() { if (!B.over) B.status(B.T('أوصِل الكرةَ الذهبيّة إلى المسجد 🕌', 'Take the golden ball to the mosque 🕌') + ' <small>' + B.T('الخطوات: ', 'Steps: ') + B.N(S.moves) + '</small>'); }
  function render() {
    var n = S.n, h = '<rect class="goal" x="' + (n - 1) + '" y="' + (n - 1) + '" width="1" height="1"/>', i, x, y;
    for (i = 0; i < n * n; i++) if (S.trail[i]) h += '<rect class="tr" x="' + (i % n + .3) + '" y="' + (((i / n) | 0) + .3) + '" width=".4" height=".4" rx=".2"/>';
    h += '<text x="' + (n - .5) + '" y="' + (n - .5) + '" font-size=".72" text-anchor="middle" dominant-baseline="central">🕌</text>';
    var w = '';
    for (i = 0; i < n * n; i++) { x = i % n; y = (i / n) | 0; if (!(S.open[i] & 2)) w += 'M' + (x + 1) + ' ' + y + 'v1'; if (!(S.open[i] & 4)) w += 'M' + x + ' ' + (y + 1) + 'h1'; }
    h += '<path class="w" fill="none" d="M0 0h' + n + 'M0 0v' + n + w + '"/><circle class="me" cx="' + (S.x + .5) + '" cy="' + (S.y + .5) + '" r=".3"/>';
    var svg = B.stage.querySelector('svg'); svg.setAttribute('viewBox', '-0.08 -0.08 ' + (n + .16) + ' ' + (n + .16)); svg.innerHTML = h;
    svg.setAttribute('aria-label', B.T('متاهة. الكرة في العمود ' + B.N(S.x + 1) + ' والصفّ ' + B.N(S.y + 1), 'Maze. The ball is at column ' + (S.x + 1) + ', row ' + (S.y + 1)));
    status();
  }
  function move(d) {
    if (B.over) return false;
    var n = S.n, i = S.y * n + S.x;
    if (!(S.open[i] & (1 << d))) return false;
    S.trail[i] = 1; S.x += DX[d]; S.y += DY[d]; S.moves++; B.save(S); render();
    if (S.x === n - 1 && S.y === n - 1) { B.over = true; B.beep('good'); var m = S.moves; setTimeout(function () { B.win({ msg: B.T('وصلتَ إلى المسجد في ' + B.N(m) + ' خطوة!', 'You reached the mosque in ' + m + ' steps!') }); }, 350); }
    return true;
  }
  function pad() {
    var L = [['u', 0, '▲', 'أعلى', 'Up'], ['l', 3, '◀', 'يسار', 'Left'], ['d', 2, '▼', 'أسفل', 'Down'], ['r', 1, '▶', 'يمين', 'Right']];
    B.extra.innerHTML = '<div class="mzpad">' + L.map(function (a) { return '<button type="button" class="' + a[0] + '" data-d="' + a[1] + '" aria-label="' + B.T(a[3], a[4]) + '">' + a[2] + '</button>'; }).join('') + '</div>';
    B.extra.querySelectorAll('button').forEach(function (x) { x.onclick = function () { if (!move(+x.dataset.d)) B.beep('bad'); else B.beep('move'); }; });
  }
  Brain.game({
    id: 'maze',
    how: {
      ar: ['حرِّك الكرةَ الذهبيّة بالأسهم، أو اسحب إصبعَك على المتاهة في الاتّجاه الذي تريد.', 'الخطوطُ الزرقاء جدران لا تُعبَر. ابحث عن الطريق المفتوح.', 'الهدف: أن تصل إلى المسجد 🕌 في الزاوية. إذا وصلتَ طريقًا مسدودًا فارجع وجرِّب غيرَه.'],
      en: ['Move the golden ball with the arrows, or drag your finger on the maze in the direction you want.', 'The blue lines are walls you cannot cross. Look for the open path.', 'The goal: reach the mosque 🕌 in the corner. If you hit a dead end, go back and try another way.']
    },
    init: function (b) {
      B = b; B.stage.innerHTML = '<div class="bd mz"><svg role="img"></svg></div>';
      var bd = B.stage.querySelector('.mz');
      bd.addEventListener('pointerdown', function (e) { e.preventDefault(); drag = { id: e.pointerId, x: e.clientX, y: e.clientY }; try { bd.setPointerCapture(e.pointerId); } catch (x) {} });
      bd.addEventListener('pointermove', function (e) {
        if (!drag || e.pointerId !== drag.id) return;
        var cell = bd.getBoundingClientRect().width / S.n, step = Math.max(18, cell * 0.8), guard = 0;
        while (guard++ < 30) {
          var dx = e.clientX - drag.x, dy = e.clientY - drag.y, d;
          if (Math.abs(dx) < step && Math.abs(dy) < step) break;
          if (Math.abs(dx) >= Math.abs(dy)) { d = dx > 0 ? 1 : 3; drag.x += dx > 0 ? step : -step; drag.y = e.clientY; } else { d = dy > 0 ? 2 : 0; drag.y += dy > 0 ? step : -step; drag.x = e.clientX; }
          move(d);
        }
      });
      ['pointerup', 'pointercancel'].forEach(function (n) { bd.addEventListener(n, function () { drag = null; }); });
      document.addEventListener('keydown', function (e) { var d = { ArrowUp: 0, ArrowRight: 1, ArrowDown: 2, ArrowLeft: 3 }[e.key]; if (d != null && !B.over) { e.preventDefault(); move(d); } });
      pad();
      B.api = { state: function () { return S; }, move: move };
    },
    newGame: function () { var n = { easy: 7, medium: 10, hard: 13 }[B.level]; S = { n: n, open: carve(n), x: 0, y: 0, moves: 0, trail: new Array(n * n).fill(0) }; render(); },
    restore: function (b, s) { if (!s || !s.open || s.open.length !== s.n * s.n || (s.x === s.n - 1 && s.y === s.n - 1)) return false; S = s; render(); },
    relang: function () { pad(); render(); }
  });
})();
