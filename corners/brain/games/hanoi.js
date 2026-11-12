/* برج الأقراص — Tower of discs (Tower of Hanoi): 3 / 4 / 5 discs. Tap a peg to lift its top disc,
   tap another peg to put it down. A bigger disc never goes on a smaller one. Shows moves and the minimum. */
(function () {
  'use strict';
  Brain.css(
    '.hn{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;width:min(100%,520px)}' +
    '.hn button{position:relative;height:230px;border:2px solid var(--line);border-radius:16px;background:rgba(255,255,255,.05);cursor:pointer;padding:0 0 12px;display:flex;flex-direction:column-reverse;align-items:center;gap:3px;overflow:hidden;font-family:inherit}' +
    '.hn button::before{content:"";position:absolute;bottom:10px;left:50%;width:10px;margin-left:-5px;height:170px;border-radius:6px;background:#8B5E3C}' +
    '.hn button::after{content:"";position:absolute;bottom:0;left:6%;right:6%;height:12px;border-radius:6px 6px 0 0;background:#8B5E3C}' +
    '.hn button.sel{border-color:#fff;background:rgba(232,181,48,.18)}.hn button.goal{border-style:dashed;border-color:var(--gold-lt)}' +
    '.hn i{position:relative;z-index:1;display:block;height:26px;border-radius:13px;box-shadow:inset 0 -4px 0 rgba(0,0,0,.22)}' +
    '.hn i.up{margin-bottom:auto;margin-top:8px;order:9;box-shadow:0 0 0 3px #fff}' +
    '.hn .flag{position:absolute;top:6px;left:0;right:0;text-align:center;font-size:1.1rem;z-index:1}');
  var COL = ['#E5574A', '#F0963C', '#F5CC5A', '#3BB36D', '#3D8BD8'], B, S, sel = -1;
  function discs() { return S.n; }
  function status(msg) {
    if (B.over) return;
    var min = Math.pow(2, discs()) - 1;
    B.status((msg || B.T('انقل البرجَ كلَّه إلى العمود الأخير 🏁', 'Move the whole tower to the last peg 🏁')) + ' <small>' + B.T('الحركات: ', 'Moves: ') + B.N(S.moves) + ' · ' + B.T('أقلُّ عددٍ ممكن: ', 'Fewest possible: ') + B.N(min) + '</small>');
  }
  function render(msg) {
    var bs = B.stage.querySelectorAll('.hn button');
    for (var p = 0; p < 3; p++) {
      var st = S.pegs[p], h = p === 2 ? '<span class="flag">🏁</span>' : '';
      st.forEach(function (d, k) { h += '<i class="' + (p === sel && k === st.length - 1 ? 'up' : '') + '" style="width:' + (26 + d * (62 / discs())) + '%;background:' + COL[d - 1] + '"></i>'; });
      bs[p].innerHTML = h; bs[p].className = (p === sel ? 'sel' : '') + (p === 2 ? ' goal' : '');
      bs[p].setAttribute('aria-label', B.T('العمود ', 'Peg ') + B.N(p + 1) + B.T('، الأقراص: ', ', discs: ') + B.N(st.length));
    }
    status(msg);
  }
  function tapPeg(p) {
    if (B.over) return false;
    if (sel < 0) { if (!S.pegs[p].length) return false; sel = p; B.beep('move'); render(); return true; }
    if (sel === p) { sel = -1; render(); return true; }
    var from = S.pegs[sel], to = S.pegs[p], d = from[from.length - 1];
    if (to.length && to[to.length - 1] < d) { sel = -1; B.beep('bad'); render(B.T('لا يوضع قرصٌ كبيرٌ فوق قرصٍ صغير 🙂', 'A big disc cannot go on a smaller one 🙂')); return false; }
    to.push(from.pop()); sel = -1; S.moves++; B.beep('tap'); B.save(S); render();
    if (S.pegs[2].length === discs()) {
      B.over = true; var m = S.moves, min = Math.pow(2, discs()) - 1;
      setTimeout(function () { B.win({ msg: m === min ? B.T('نقلتَ البرج بأقلِّ عددٍ ممكنٍ من الحركات: ' + B.N(m) + '! ممتاز!', 'You moved the tower in the fewest possible moves: ' + m + '! Excellent!') : B.T('نقلتَ البرج في ' + B.N(m) + ' حركة. هل تستطيع في ' + B.N(min) + '؟', 'You moved the tower in ' + m + ' moves. Can you do it in ' + min + '?') }); }, 450);
    }
    return true;
  }
  Brain.game({
    id: 'hanoi',
    how: {
      ar: ['اضغط عمودًا لترفع قرصَه الأعلى، ثمّ اضغط عمودًا آخر لتضعه عليه.', 'تُنقل الأقراصُ واحدًا واحدًا، ولا يوضع قرصٌ كبيرٌ فوق قرصٍ صغير.', 'الهدف: أن تنقل البرجَ كلَّه إلى العمود الأخير 🏁 بأقلِّ حركاتٍ ممكنة.'],
      en: ['Tap a peg to lift its top disc, then tap another peg to put it down.', 'Move one disc at a time, and never put a big disc on a smaller one.', 'The goal: move the whole tower to the last peg 🏁 in as few moves as you can.']
    },
    init: function (b) {
      B = b; B.stage.innerHTML = '<div class="bd hn"><button type="button"></button><button type="button"></button><button type="button"></button></div>';
      [].forEach.call(B.stage.querySelectorAll('.hn button'), function (x, p) { x.onclick = function () { tapPeg(p); }; });
      B.api = { state: function () { return S; }, tapPeg: tapPeg };
    },
    newGame: function () { var n = { easy: 3, medium: 4, hard: 5 }[B.level], a = []; for (var d = n; d >= 1; d--) a.push(d); S = { n: n, pegs: [a, [], []], moves: 0 }; sel = -1; render(); },
    restore: function (b, s) { if (!s || !s.pegs || s.pegs.length !== 3 || s.pegs[2].length === s.n) return false; S = s; sel = -1; render(); },
    relang: function () { render(); }
  });
})();
