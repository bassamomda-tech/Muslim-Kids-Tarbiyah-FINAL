/* الداما — Checkers (8×8): men move forward one diagonal step, captures are forced (multi-jumps too),
   a man reaching the far row becomes a king (moves both ways). vs computer (3 levels) or two players.
   Pieces: 1 = light man, 2 = light king (plays up the board), -1 / -2 = dark (plays down). */
(function () {
  'use strict';
  Brain.css(
    '.ck{display:grid;grid-template-columns:repeat(8,1fr);width:min(100%,520px);aspect-ratio:1;border-radius:10px;overflow:hidden;box-shadow:0 0 0 4px #5b3d17,0 10px 26px rgba(0,0,0,.4)}' +
    '.ck button{position:relative;border:none;padding:0;margin:0;display:grid;place-items:center;min-width:0;min-height:0;aspect-ratio:1;background:#F1DFB6;cursor:default}' +
    '.ck button.dk{background:#8A5A2B;cursor:pointer}.ck button.sel{background:#3F8F62}.ck button.can{box-shadow:inset 0 0 0 3px rgba(245,204,90,.9)}' +
    '.ck button.to::after{content:"";position:absolute;width:34%;height:34%;border-radius:50%;background:rgba(255,255,255,.75)}' +
    '.ck button.last{background:#A9772F}' +
    '.ck i{width:78%;height:78%;border-radius:50%;display:grid;place-items:center;font-style:normal;font-size:clamp(14px,4.4vw,24px);line-height:1;box-shadow:inset 0 -4px 0 rgba(0,0,0,.28),0 2px 4px rgba(0,0,0,.4)}' +
    '.ck i.a{background:radial-gradient(circle at 35% 30%,#FFF3C4,#E8B530 65%,#B8860B);color:#5b3d05}' +
    '.ck i.b{background:radial-gradient(circle at 35% 30%,#7A86C8,#33407F 65%,#1B2452);color:#E6E9FF}' +
    '.ck i.gone{opacity:.25}' +
    '.ckdot{display:inline-block;width:1.1em;height:1.1em;border-radius:50%;vertical-align:-.2em}.ckdot.a{background:#E8B530}.ckdot.b{background:#4A58A8}');
  var B, S, sel = null, busy = false, timer = null, lastTo = -1;
  function own(v, side) { return side > 0 ? v > 0 : v < 0; }
  /* all jump sequences for the piece on sq */
  function jumps(b, sq, side, v, path, caps, out) {
    var r = sq >> 3, c = sq & 7, king = Math.abs(v) === 2, dirs = king ? [[-1, -1], [-1, 1], [1, -1], [1, 1]] : (side > 0 ? [[-1, -1], [-1, 1]] : [[1, -1], [1, 1]]), found = false;
    for (var d = 0; d < dirs.length; d++) {
      var mr = r + dirs[d][0], mc = c + dirs[d][1], tr = r + 2 * dirs[d][0], tc = c + 2 * dirs[d][1];
      if (tr < 0 || tr > 7 || tc < 0 || tc > 7) continue;
      var mid = mr * 8 + mc, to = tr * 8 + tc;
      if (!b[mid] || own(b[mid], side) || caps.indexOf(mid) >= 0 || (b[to] && to !== path[0])) continue;
      found = true;
      var np = path.concat(to), nc = caps.concat(mid);
      if (!king && (side > 0 ? tr === 0 : tr === 7)) out.push({ path: np, caps: nc });        // crowned: the move ends
      else jumps(b, to, side, v, np, nc, out);
    }
    if (!found && caps.length) out.push({ path: path, caps: caps });
  }
  function genMoves(b, side) {
    var caps = [], steps = [], i, v;
    for (i = 0; i < 64; i++) { v = b[i]; if (v && own(v, side)) jumps(b, i, side, v, [i], [], caps); }
    if (caps.length) return caps;
    for (i = 0; i < 64; i++) {
      v = b[i]; if (!v || !own(v, side)) continue;
      var r = i >> 3, c = i & 7, dirs = Math.abs(v) === 2 ? [[-1, -1], [-1, 1], [1, -1], [1, 1]] : (side > 0 ? [[-1, -1], [-1, 1]] : [[1, -1], [1, 1]]);
      for (var d = 0; d < dirs.length; d++) { var y = r + dirs[d][0], x = c + dirs[d][1]; if (y >= 0 && y < 8 && x >= 0 && x < 8 && !b[y * 8 + x]) steps.push({ path: [i, y * 8 + x], caps: [] }); }
    }
    return steps;
  }
  function apply(b, m) {
    var n = b.slice(), from = m.path[0], to = m.path[m.path.length - 1], v = n[from];
    n[from] = 0; m.caps.forEach(function (c) { n[c] = 0; });
    if (v === 1 && (to >> 3) === 0) v = 2; if (v === -1 && (to >> 3) === 7) v = -2;
    n[to] = v; return n;
  }
  function evalFor(b, side) {
    var s = 0;
    for (var i = 0; i < 64; i++) {
      var v = b[i]; if (!v) continue; var r = i >> 3, c = i & 7, x;
      if (v === 1) x = 100 + (7 - r) * 4 + (r === 7 ? 8 : 0); else if (v === -1) x = 100 + r * 4 + (r === 0 ? 8 : 0); else x = 175 + (c > 0 && c < 7 && r > 0 && r < 7 ? 6 : 0);
      s += v > 0 ? x : -x;
    }
    return side > 0 ? s : -s;
  }
  function nega(b, side, d, a, be) {
    var ms = genMoves(b, side); if (!ms.length) return -100000 - d;
    if (d <= 0 && !ms[0].caps.length) return evalFor(b, side);
    if (d <= -6) return evalFor(b, side);
    for (var i = 0; i < ms.length; i++) { var sc = -nega(apply(b, ms[i]), -side, d - 1, -be, -a); if (sc > a) { a = sc; if (a >= be) break; } }
    return a;
  }
  function cpuMove(side) {
    var ms = genMoves(S.b, side); if (!ms.length) return null;
    if (B.level === 'easy') return ms[Math.floor(Math.random() * ms.length)];
    var depth = B.level === 'medium' ? 2 : 6, best = -1e9, picks = [];
    ms.forEach(function (m) { var sc = -nega(apply(S.b, m), -side, depth - 1, -1e9, 1e9) + Math.random() * (B.level === 'medium' ? 12 : 2); if (sc > best) { best = sc; picks = [m]; } });
    return picks[0];
  }
  function dot(side) { return '<span class="ckdot ' + (side > 0 ? 'a' : 'b') + '"></span>'; }
  function status() {
    if (B.over) return;
    var forced = S.moves.length && S.moves[0].caps.length ? ' <small>' + B.T('(يجب أن تأسِر!)', '(you must capture!)') + '</small>' : '';
    if (B.mode === 'two') B.status(dot(S.t) + (S.t > 0 ? B.T('دورُ اللاعب الأوّل', 'Player 1\'s turn') : B.T('دورُ اللاعب الثاني', 'Player 2\'s turn')) + forced);
    else B.status(S.t > 0 ? dot(1) + B.T('دورك! حرِّك قطعةً ذهبيّة', 'Your turn! Move a gold piece') + forced : dot(-1) + B.T('الحاسوب يفكّر…', 'The computer is thinking…'));
  }
  /* sequences that continue the current selection */
  function options() { if (!sel) return []; return S.moves.filter(function (m) { for (var i = 0; i < sel.length; i++) if (m.path[i] !== sel[i]) return false; return m.path.length > sel.length; }); }
  function render() {
    var bs = B.stage.querySelectorAll('.ck button'), human = !B.over && !busy && (B.mode === 'two' || S.t > 0), starts = {}, tos = {}, gone = {}, cur = sel ? sel[sel.length - 1] : -1;
    if (human) S.moves.forEach(function (m) { starts[m.path[0]] = 1; });
    var opts = options(); opts.forEach(function (m) { tos[m.path[sel.length]] = 1; });
    if (sel && opts.length) opts[0].caps.slice(0, sel.length - 1).forEach(function (c) { gone[c] = 1; });
    for (var i = 0; i < 64; i++) {
      var dk = ((i >> 3) + (i & 7)) % 2 === 1, v = S.b[i];
      if (sel && i === sel[0] && cur !== i) v = 0;
      if (sel && i === cur) v = S.b[sel[0]];
      bs[i].className = (dk ? 'dk' : '') + (i === cur ? ' sel' : '') + (tos[i] ? ' to' : '') + (!sel && starts[i] ? ' can' : '') + (i === lastTo && !sel ? ' last' : '');
      bs[i].innerHTML = v ? '<i class="' + (v > 0 ? 'a' : 'b') + (gone[i] ? ' gone' : '') + '">' + (Math.abs(v) === 2 ? '★' : '') + '</i>' : '';
      bs[i].setAttribute('aria-label', 'abcdefgh'[i & 7] + (8 - (i >> 3)) + (v ? (v > 0 ? B.T(' قطعة ذهبيّة', ' gold piece') : B.T(' قطعة زرقاء', ' blue piece')) + (Math.abs(v) === 2 ? B.T(' (ملك)', ' (king)') : '') : ''));
    }
    status();
  }
  function ending() {
    if (S.moves.length && S.quiet < 80) return false;
    B.over = true; render();
    var winner = S.moves.length ? 0 : -S.t;
    timer = setTimeout(function () {
      if (!winner) return B.draw(B.T('أربعون حركةً بلا أسرٍ — اللعبةُ متعادلة.', 'Forty moves with no capture — the game is a draw.'));
      if (B.mode === 'two') B.win({ stars: 1, title: B.T('انتهت اللعبة!', 'Game over!'), msg: winner > 0 ? B.T('فاز اللاعب الأوّل (الذهبيّ) — وأحسنَ اللاعبُ الثاني أيضًا!', 'Player 1 (gold) won — and well played, Player 2!') : B.T('فاز اللاعب الثاني (الأزرق) — وأحسنَ اللاعبُ الأوّل أيضًا!', 'Player 2 (blue) won — and well played, Player 1!') });
      else if (winner > 0) B.win({ msg: B.T('لم يبقَ للحاسوب حركة — لقد فزت!', 'The computer has no moves left — you won!') }); else B.lose(B.T('لم تبقَ لك حركة هذه المرّة.', 'You have no moves left this time.'));
    }, 700);
    return true;
  }
  function commit(m) {
    var man = Math.abs(S.b[m.path[0]]) === 1;
    S.b = apply(S.b, m); S.quiet = (m.caps.length || man) ? 0 : S.quiet + 1; S.t = -S.t; S.moves = genMoves(S.b, S.t);
    lastTo = m.path[m.path.length - 1]; sel = null; B.beep(m.caps.length ? 'good' : 'tap');
    B.save({ b: S.b, t: S.t, quiet: S.quiet }); render();
    if (ending()) return;
    if (B.mode === 'cpu' && S.t < 0) cpuTurn();
  }
  function cpuTurn() { busy = true; render(); timer = setTimeout(function () { var m = cpuMove(-1); busy = false; if (m) commit(m); }, 420); }
  function tap(i) {
    if (B.over || busy) return;
    if (sel) {
      var opts = options().filter(function (m) { return m.path[sel.length] === i; });
      if (opts.length) {
        sel.push(i);
        var done = opts.filter(function (m) { return m.path.length === sel.length; });
        if (done.length) commit(done[0]); else { B.beep('move'); render(); }
        return;
      }
      if (sel.length > 1) return;                       // in the middle of a multi-jump: must finish it
    }
    var can = S.moves.some(function (m) { return m.path[0] === i; });
    sel = can && !(sel && sel[0] === i) ? [i] : null; if (can) B.beep('move');
    render();
  }
  function setup() {
    var b = new Array(64).fill(0);
    for (var i = 0; i < 64; i++) { var r = i >> 3; if (((r + (i & 7)) % 2) === 1) { if (r < 3) b[i] = -1; else if (r > 4) b[i] = 1; } }
    return b;
  }
  function load(b, t, quiet) { clearTimeout(timer); busy = false; sel = null; lastTo = -1; S = { b: b, t: t, quiet: quiet || 0 }; S.moves = genMoves(b, t); B.over = false; render(); }
  Brain.game({
    id: 'checkers',
    modes: [{ id: 'cpu', ar: 'ضدّ الحاسوب', en: 'vs Computer' }, { id: 'two', ar: 'لاعبان', en: 'Two players' }],
    how: {
      ar: ['اضغط قطعتَك ثمّ اضغط المربّعَ المضيء: تتحرّك القطعةُ خطوةً مائلةً إلى الأمام.', 'اقفز فوق قطعة الخصم لتأسِرها — وإذا أمكنك الأسرُ وجب عليك.', 'القطعةُ التي تصل آخرَ اللوحة تصير ملكًا ★ يتحرّك إلى الأمام والخلف.'],
      en: ['Tap your piece, then tap the lit square: pieces move one diagonal step forward.', 'Jump over the other player\'s piece to capture it — if you can capture, you must.', 'A piece that reaches the far row becomes a king ★ and can move forward and backward.']
    },
    init: function (b) {
      B = b; var h = '<div class="bd ck">'; for (var i = 0; i < 64; i++) h += '<button type="button" data-i="' + i + '"></button>'; B.stage.innerHTML = h + '</div>';
      B.stage.querySelectorAll('button').forEach(function (x) { x.onclick = function () { tap(+x.dataset.i); }; });
      B.api = { state: function () { return S; }, moves: function () { return S.moves; }, tap: tap, busy: function () { return busy; }, load: load, playMove: function (k) { var m = S.moves[k]; if (!m || busy || B.over) return false; sel = null; m.path.forEach(function (sq) { tap(sq); }); return true; } };
    },
    newGame: function () { load(setup(), 1, 0); },
    restore: function (b, s) { if (!s || !s.b || s.b.length !== 64) return false; load(s.b, s.t, s.quiet); if (!S.moves.length) return false; if (B.mode === 'cpu' && S.t < 0) cpuTurn(); },
    relang: function () { render(); }
  });
})();
