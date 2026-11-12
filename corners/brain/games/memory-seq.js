/* تذكَّر التتابع — Remember the sequence: four coloured pads light up in a growing order; repeat it.
   Reach the goal length to win (easy 5 · medium 8 · hard 12). Each pad also has its own shape and tone. */
(function () {
  'use strict';
  Brain.css(
    '.ms{display:grid;grid-template-columns:1fr 1fr;gap:12px;width:min(100%,380px);aspect-ratio:1}' +
    '.ms button{border:none;border-radius:26px;cursor:pointer;font-size:clamp(2.2rem,12vw,3.4rem);color:rgba(255,255,255,.55);box-shadow:inset 0 -8px 0 rgba(0,0,0,.25);opacity:.62;padding:0;font-family:inherit}' +
    '.ms button.p0{background:#2E9E5B}.ms button.p1{background:#D9503F}.ms button.p2{background:#D9A520}.ms button.p3{background:#2F7FD0}' +
    '.ms button.lit{opacity:1;color:#fff;box-shadow:0 0 0 5px #fff,inset 0 -8px 0 rgba(0,0,0,.15)}' +
    '.ms.wait button{cursor:default}');
  var GOAL = { easy: 5, medium: 8, hard: 12 }, SPEED = { easy: 720, medium: 560, hard: 430 }, SHAPES = ['●', '▲', '■', '◆'];
  var B, seq = [], pos = 0, phase = 'idle', timers = [];
  function later(f, ms) { timers.push(setTimeout(f, ms)); }
  function stop() { timers.forEach(clearTimeout); timers = []; pads().forEach(function (p) { p.classList.remove('lit'); }); }
  function pads() { return [].slice.call(B.stage.querySelectorAll('.ms button')); }
  function best() { return B.store('best') || 0; }
  function status() {
    var g = GOAL[B.level], tail = ' <small>' + B.T('الهدف: ', 'Goal: ') + B.N(g) + (best() ? ' · ' + B.T('أفضلُ ما وصلتَ إليه: ', 'Your best: ') + B.N(best()) : '') + '</small>';
    if (phase === 'idle') B.status(B.T('اضغط «ابدأ» ثمّ راقب الألوان جيّدًا', 'Press "Start", then watch the colours carefully') + tail);
    else if (phase === 'show') B.status(B.T('راقِب… ', 'Watch… ') + B.N(seq.length) + ' / ' + B.N(g) + tail);
    else if (phase === 'input') B.status(B.T('دورك! أعِد التتابع: ', 'Your turn! Repeat it: ') + B.N(pos) + ' / ' + B.N(seq.length) + tail);
    B.stage.querySelector('.ms').classList.toggle('wait', phase !== 'input');
    var st = document.getElementById('msStart'); st.textContent = B.T('▶ ابدأ', '▶ Start'); st.hidden = phase !== 'idle';
  }
  function light(k, ms) { var p = pads()[k]; p.classList.add('lit'); B.beep('p' + k); later(function () { p.classList.remove('lit'); }, ms); }
  function show() {
    phase = 'show'; pos = 0; status();
    var sp = SPEED[B.level];
    seq.forEach(function (k, i) { later(function () { light(k, sp * 0.62); }, 500 + i * sp); });
    later(function () { phase = 'input'; status(); }, 500 + seq.length * sp);
  }
  function start() { if (phase !== 'idle') return; seq = [Math.floor(Math.random() * 4)]; B.over = false; show(); }
  function press(k) {
    if (phase !== 'input' || B.over) return false;
    if (k !== seq[pos]) {
      phase = 'done'; B.over = true; var reached = seq.length - 1, right = seq[pos];
      pads()[right].classList.add('lit');
      if (reached > best()) B.store('best', reached);
      later(function () { stop(); B.lose(B.T('الصحيحُ كان اللونَ المضيء. تذكّرتَ تتابعًا من ' + B.N(reached) + ' — جميل!', 'The right one was the lit colour. You remembered a sequence of ' + reached + ' — nice!')); }, 900);
      return true;
    }
    light(k, 220); pos++; status();
    if (pos === seq.length) {
      if (seq.length > best()) B.store('best', seq.length);
      if (seq.length >= GOAL[B.level]) { phase = 'done'; B.over = true; later(function () { B.win({ msg: B.T('تذكّرتَ تتابعًا من ' + B.N(seq.length) + ' ألوان — ذاكرةٌ قويّة!', 'You remembered a sequence of ' + seq.length + ' colours — a strong memory!') }); }, 500); }
      else { phase = 'show'; later(function () { seq.push(Math.floor(Math.random() * 4)); show(); }, 750); }
    }
    return true;
  }
  Brain.game({
    id: 'memory-seq',
    how: {
      ar: ['اضغط «ابدأ» وراقِب: تُضيء الألوانُ واحدًا بعد واحد.', 'ثمّ اضغط الألوانَ بالترتيب نفسه.', 'في كلّ مرّةٍ يزيد التتابعُ لونًا. قُل أسماءَ الألوان في نفسك لتتذكّرها.'],
      en: ['Press "Start" and watch: the colours light up one after another.', 'Then tap the colours in the same order.', 'Each round adds one more colour. Say the colour names quietly to yourself to remember them.']
    },
    init: function (b) {
      B = b; var names = [['أخضر', 'green'], ['أحمر', 'red'], ['أصفر', 'yellow'], ['أزرق', 'blue']];
      B.stage.innerHTML = '<div class="bd ms">' + [0, 1, 2, 3].map(function (k) { return '<button type="button" class="p' + k + '" data-k="' + k + '" aria-label="' + names[k][0] + ' / ' + names[k][1] + '">' + SHAPES[k] + '</button>'; }).join('') + '</div>';
      B.extra.innerHTML = '<button class="bbtn go" id="msStart" type="button"></button>';
      pads().forEach(function (p) { p.addEventListener('pointerdown', function (e) { e.preventDefault(); press(+p.dataset.k); }); p.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); press(+p.dataset.k); } }); });
      document.getElementById('msStart').onclick = start;
      B.api = { seq: function () { return seq.slice(); }, phase: function () { return phase; }, press: press, start: start, pos: function () { return pos; }, goal: function () { return GOAL[B.level]; } };
    },
    newGame: function () { stop(); seq = []; pos = 0; phase = 'idle'; status(); },
    relang: function () { status(); }
  });
})();
