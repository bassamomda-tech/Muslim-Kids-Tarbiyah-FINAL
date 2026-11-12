/* لغز الترتيب — Sliding puzzle: 3×3 (easy) or 4×4 (medium = lightly mixed, hard = well mixed).
   The board is mixed by sliding tiles from the solved picture, so every puzzle can be solved. */
(function () {
  'use strict';
  Brain.css(
    '.sl{display:grid;gap:6px;width:min(100%,420px);aspect-ratio:1;padding:8px;border-radius:16px;background:#0B2440;box-shadow:0 0 0 4px #5b3d17,0 10px 26px rgba(0,0,0,.4)}' +
    '.sl button{border:none;border-radius:12px;font-weight:900;font-size:clamp(1.5rem,8vw,2.4rem);color:#3b2c12;background:linear-gradient(160deg,#FFE9A8,#E8B530);box-shadow:inset 0 -5px 0 rgba(0,0,0,.2);cursor:pointer;padding:0;min-width:0;min-height:0;font-family:inherit}' +
    '.sl button.ok{background:linear-gradient(160deg,#BFEFD0,#3BB36D);color:#0f3d22}.sl button.bl{background:transparent;box-shadow:none;cursor:default}');
  var B, S;
  function n() { return S.n; }
  function solved(t) { for (var i = 0; i < t.length - 1; i++) if (t[i] !== i + 1) return false; return true; }
  function neighbours(z, N) { var r = (z / N) | 0, c = z % N, o = []; if (r > 0) o.push(z - N); if (r < N - 1) o.push(z + N); if (c > 0) o.push(z - 1); if (c < N - 1) o.push(z + 1); return o; }
  function mix(N, steps) {
    var t = []; for (var i = 1; i < N * N; i++) t.push(i); t.push(0);
    var z = N * N - 1, prev = -1;
    do {
      for (var k = 0; k < steps; k++) { var o = neighbours(z, N).filter(function (q) { return q !== prev; }), q = o[Math.floor(Math.random() * o.length)]; t[z] = t[q]; t[q] = 0; prev = z; z = q; }
    } while (solved(t));
    return t;
  }
  function status() { if (!B.over) B.status(B.T('رتِّب الأرقام من ١ إلى ' + B.N(n() * n() - 1), 'Put the numbers in order from 1 to ' + (n() * n() - 1)) + ' <small>' + B.T('الحركات: ', 'Moves: ') + B.N(S.moves) + '</small>'); }
  function render() {
    var N = n(), el = B.stage.querySelector('.sl'), h = '';
    el.style.gridTemplateColumns = 'repeat(' + N + ',1fr)';
    for (var i = 0; i < N * N; i++) { var v = S.t[i]; h += v ? '<button type="button" data-i="' + i + '" class="' + (v === i + 1 ? 'ok' : '') + '">' + B.N(v) + '</button>' : '<button type="button" class="bl" data-i="' + i + '" tabindex="-1" aria-label="' + B.T('فارغ', 'empty') + '"></button>'; }
    el.innerHTML = h; status();
  }
  function tap(i) {
    if (B.over) return false;
    var N = n(), z = S.t.indexOf(0), r = (i / N) | 0, c = i % N, zr = (z / N) | 0, zc = z % N, d;
    if (i === z || (r !== zr && c !== zc)) return false;
    d = r === zr ? (c > zc ? 1 : -1) : (r > zr ? N : -N);
    while (z !== i) { S.t[z] = S.t[z + d]; z += d; } S.t[z] = 0;
    S.moves++; B.beep('tap'); B.save(S); render();
    if (solved(S.t)) { B.over = true; var m = S.moves; setTimeout(function () { B.win({ msg: B.T('رتّبتَ الأرقام كلَّها في ' + B.N(m) + ' حركة!', 'You put all the numbers in order in ' + m + ' moves!') }); }, 400); }
    return true;
  }
  Brain.game({
    id: 'slide',
    how: {
      ar: ['اضغط رقمًا بجانب المربّع الفارغ لينزلق إليه.', 'رتِّب الأرقام بالترتيب: من الأعلى إلى الأسفل، صفًّا بعد صفّ، والفارغُ في الآخر.', 'ابدأ بالصفّ الأوّل ثمّ الذي يليه. الرقمُ الأخضر في مكانه الصحيح.'],
      en: ['Tap a number next to the empty square and it slides into it.', 'Put the numbers in order: top to bottom, row by row, with the empty square last.', 'Start with the first row, then the next. A green number is in its right place.']
    },
    init: function (b) {
      B = b; B.stage.innerHTML = '<div class="bd sl"></div>';
      B.stage.querySelector('.sl').addEventListener('click', function (e) { var t = e.target.closest('button'); if (t) tap(+t.dataset.i); });
      B.api = { state: function () { return S; }, tap: tap };
    },
    newGame: function () { var N = B.level === 'easy' ? 3 : 4; S = { n: N, t: mix(N, B.level === 'easy' ? 40 : B.level === 'medium' ? 24 : 120), moves: 0 }; render(); },
    restore: function (b, s) { if (!s || !s.t || s.t.length !== s.n * s.n || solved(s.t)) return false; S = s; render(); },
    relang: function () { render(); }
  });
})();
