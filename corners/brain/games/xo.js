/* إكس أو — Tic-tac-toe: vs computer (easy = random · medium = wins/blocks · hard = perfect minimax) or two players */
(function () {
  'use strict';
  Brain.css('.xo{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;width:min(100%,360px);aspect-ratio:1}' +
    '.xo button{border:2px solid var(--line);border-radius:18px;background:rgba(255,255,255,.07);cursor:pointer;padding:0;display:grid;place-items:center;min-height:44px}' +
    '.xo button.win{background:rgba(46,158,91,.35);border-color:#3BB36D}' +
    '.xo svg{width:62%;height:62%}.xo .x{stroke:#F5CC5A}.xo .o{stroke:#37B8C4}' +
    '.xo svg *{fill:none;stroke-width:13;stroke-linecap:round}');
  var LINES = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  var X = '<svg viewBox="0 0 100 100" aria-hidden="true"><path class="x" d="M20 20L80 80M80 20L20 80"/></svg>';
  var O = '<svg viewBox="0 0 100 100" aria-hidden="true"><circle class="o" cx="50" cy="50" r="32"/></svg>';
  var S, B, busy = false, timer = null;
  function winner(c) { for (var i = 0; i < 8; i++) { var l = LINES[i]; if (c[l[0]] && c[l[0]] === c[l[1]] && c[l[1]] === c[l[2]]) return { p: c[l[0]], line: l }; } return null; }
  function empties(c) { var r = []; for (var i = 0; i < 9; i++) if (!c[i]) r.push(i); return r; }
  function minimax(c, p, me) {
    var w = winner(c); if (w) return { s: w.p === me ? 10 : -10 };
    var e = empties(c); if (!e.length) return { s: 0 };
    var best = null;
    for (var i = 0; i < e.length; i++) {
      c[e[i]] = p; var r = minimax(c, 3 - p, me); c[e[i]] = 0;
      var sc = r.s - (r.s > 0 ? 1 : r.s < 0 ? -1 : 0) * 0.01;      // prefer quick wins / slow losses
      if (!best || (p === me ? sc > best.s : sc < best.s)) best = { s: sc, m: e[i] };
    }
    return best;
  }
  function findLine(c, p) { for (var i = 0; i < 8; i++) { var l = LINES[i], n = 0, hole = -1; for (var k = 0; k < 3; k++) { if (c[l[k]] === p) n++; else if (!c[l[k]]) hole = l[k]; } if (n === 2 && hole >= 0) return hole; } return -1; }
  function cpuMove() {
    var c = S.c, e = empties(c), m;
    if (B.level === 'hard') m = e.length === 9 ? [0, 2, 4, 6, 8][Math.floor(Math.random() * 5)] : minimax(c.slice(), 2, 2).m;
    else if (B.level === 'medium') { m = findLine(c, 2); if (m < 0) m = findLine(c, 1); if (m < 0) m = e[Math.floor(Math.random() * e.length)]; }
    else m = e[Math.floor(Math.random() * e.length)];
    return m;
  }
  function status() {
    if (B.over) return;
    if (B.mode === 'two') B.status(S.t === 1 ? B.T('دورُ اللاعب الأوّل', 'Player 1\'s turn') + ' ✕' : B.T('دورُ اللاعب الثاني', 'Player 2\'s turn') + ' ◯');
    else B.status(S.t === 1 ? B.T('دورك! ضع علامتك ✕', 'Your turn! Place your ✕') : B.T('الحاسوب يفكّر…', 'The computer is thinking…'));
  }
  function render() {
    var w = winner(S.c), bs = B.stage.querySelectorAll('.xo button');
    for (var i = 0; i < 9; i++) {
      bs[i].innerHTML = S.c[i] === 1 ? X : S.c[i] === 2 ? O : '';
      bs[i].className = w && w.line.indexOf(i) >= 0 ? 'win' : '';
      bs[i].setAttribute('aria-label', B.T('مربّع ', 'Square ') + B.N(i + 1) + (S.c[i] ? (S.c[i] === 1 ? ' ✕' : ' ◯') : B.T(' فارغ', ' empty')));
    }
    status();
  }
  function finish() {
    var w = winner(S.c);
    if (!w && empties(S.c).length) return false;
    B.over = true; render();
    timer = setTimeout(function () {
      if (B.mode === 'two') {
        if (w) B.win({ stars: 1, title: B.T('انتهت اللعبة!', 'Game over!'), msg: w.p === 1 ? B.T('فاز اللاعب الأوّل ✕ — وأحسنَ اللاعبُ الثاني أيضًا!', 'Player 1 ✕ won — and well played, Player 2!') : B.T('فاز اللاعب الثاني ◯ — وأحسنَ اللاعبُ الأوّل أيضًا!', 'Player 2 ◯ won — and well played, Player 1!') });
        else B.draw();
      } else if (w) { if (w.p === 1) B.win({ msg: B.T('صففتَ ثلاثًا في خطّ!', 'You got three in a row!') }); else B.lose(); }
      else if (B.level === 'hard') B.win({ stars: 2, title: B.T('تعادلٌ رائع!', 'A great draw!'), msg: B.T('الحاسوبُ القويّ لا يُغلَب، والتعادلُ معه إنجاز!', 'The strong computer cannot be beaten — a draw with it is an achievement!') });
      else B.draw();
    }, 650);
    return true;
  }
  function play(i) {
    if (B.over || busy || S.c[i]) return false;
    S.c[i] = S.t; S.t = 3 - S.t; B.beep('tap'); B.save(S); render();
    if (finish()) return true;
    if (B.mode === 'cpu' && S.t === 2) cpuTurn();
    return true;
  }
  function cpuTurn() {
    busy = true;
    timer = setTimeout(function () {
      busy = false; var m = cpuMove(); S.c[m] = 2; S.t = 1; B.beep('move'); B.save(S); render(); finish();
    }, 480);
  }
  Brain.game({
    id: 'xo',
    modes: [{ id: 'cpu', ar: 'ضدّ الحاسوب', en: 'vs Computer' }, { id: 'two', ar: 'لاعبان', en: 'Two players' }],
    how: {
      ar: ['اضغط مربّعًا فارغًا لتضع علامتك.', 'مَن يصُفّ ثلاثَ علاماتٍ في خطٍّ واحدٍ يفوز.', 'فكِّر قبل أن تلعب: أين سيلعب صاحبُك بعدك؟'],
      en: ['Tap an empty square to place your mark.', 'Whoever gets three marks in one line wins.', 'Think before you play: where will the other player go next?']
    },
    init: function (b) {
      B = b; var h = '<div class="bd xo">'; for (var i = 0; i < 9; i++) h += '<button type="button" data-i="' + i + '"></button>'; B.stage.innerHTML = h + '</div>';
      B.stage.querySelectorAll('button').forEach(function (x) { x.onclick = function () { play(+x.dataset.i); }; });
      B.api = { state: function () { return S; }, play: play, winner: function () { return winner(S.c); } };
    },
    newGame: function () { clearTimeout(timer); busy = false; S = { c: [0, 0, 0, 0, 0, 0, 0, 0, 0], t: 1 }; render(); },
    restore: function (b, s) { if (!s || !s.c || s.c.length !== 9 || winner(s.c) || !empties(s.c).length) return false; S = s; render(); if (B.mode === 'cpu' && S.t === 2) cpuTurn(); },
    relang: function () { render(); }
  });
})();
