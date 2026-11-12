/* البنّاء الصغير — Little Builder: place coloured blocks of several sizes on an 8×8 board.
   «انسخ الصورة» = copy one of 12 target pictures (the match is checked by colour, cell by cell) · «بناء حرّ» = free build.
   Tap an empty square to place the chosen block, tap a block to remove it; with the 1×1 block you can also drag to paint. */
(function () {
  'use strict';
  var COL = { r: '#E5574A', o: '#F0963C', y: '#F5CC5A', g: '#3BB36D', b: '#3D8BD8', n: '#8B5E3C', w: '#F4F1E8', k: '#2E2E38' };
  var CN = { r: ['أحمر', 'red'], o: ['برتقاليّ', 'orange'], y: ['أصفر', 'yellow'], g: ['أخضر', 'green'], b: ['أزرق', 'blue'], n: ['بنّيّ', 'brown'], w: ['أبيض', 'white'], k: ['أسود', 'black'] };
  var SIZES = [[1, 1], [2, 1], [1, 2], [2, 2], [3, 1], [1, 3]];
  var PUZ = [
    { ar: 'بيت', en: 'House', g: ['...rr...', '..rrrr..', '.rrrrrr.', 'rrrrrrrr', '.yyyyyy.', '.ybbynn.', '.ybbynn.', '.yyyynn.'] },
    { ar: 'مسجد', en: 'Mosque', g: ['......y.', '..yy..w.', '..gg..w.', '.gggg.w.', 'ggggggw.', 'wwwwwww.', 'wbnnbww.', 'wbnnbww.'] },
    { ar: 'نخلة', en: 'Palm tree', g: ['.gg..gg.', 'gggggggg', '.gggggg.', 'g.gnng.g', '...nn...', '...nn...', '...nn...', '.yyyyyy.'] },
    { ar: 'قارب', en: 'Boat', g: ['...n....', '...nww..', '...nwww.', '...nwwww', '...n....', 'rrrrrrrr', '.rrrrrr.', 'bbbbbbbb'] },
    { ar: 'فانوس', en: 'Lantern', g: ['...yy...', '..nnnn..', '..yooy..', '.nyyyyn.', '.nyooyn.', '.nyyyyn.', '..nnnn..', '...nn...'] },
    { ar: 'هلال ونجمة', en: 'Crescent and star', g: ['..yyy...', '.yy.....', 'yy......', 'yy...ww.', 'yy...ww.', 'yy......', '.yy.....', '..yyy...'] },
    { ar: 'وردة', en: 'Flower', g: ['.rr..rr.', '.rryyrr.', '...yy...', '.rryyrr.', '.rr..rr.', '...gg...', '..ggg...', '...gg...'] },
    { ar: 'صاروخ', en: 'Rocket', g: ['...rr...', '..rrrr..', '..wwww..', '..wbbw..', '..wbbw..', '..wwww..', '.rwwwwr.', 'rr.oo.rr'] },
    { ar: 'سيّارة', en: 'Car', g: ['........', '..bbbb..', '.bbwwbb.', 'bbbbbbbb', 'bbbbbbbb', '.kk..kk.', '.kk..kk.', '........'] },
    { ar: 'تفّاحة', en: 'Apple', g: ['....ng..', '....n...', '.rrrrrr.', 'rrrrrrrr', 'rrrrrrrr', 'rrrrrrrr', '.rrrrrr.', '..rrrr..'] },
    { ar: 'طائرة ورقيّة', en: 'Kite', g: ['...yr...', '..yyrr..', '.yyyrrr.', '..bbgg..', '...bg...', '...n....', '..n.....', '.n......'] },
    { ar: 'الكعبة المشرَّفة', en: 'The Kaaba', g: ['........', 'kkkkkkkk', 'yyyyyyyy', 'kkkkkkkk', 'kkkkkkkk', 'kkkkyykk', 'kkkkyykk', 'kkkkyykk'] }
  ];
  Brain.css(
    '.bk{width:min(100%,480px);aspect-ratio:1;border-radius:12px;background:#143A5E;box-shadow:0 0 0 4px #0B2440,0 10px 26px rgba(0,0,0,.4);overflow:hidden}' +
    '.bkc{position:absolute;inset:0;display:grid;grid-template-columns:repeat(8,1fr);grid-template-rows:repeat(8,1fr)}' +
    '.bkc button{border:none;border-inline-end:1px solid rgba(255,255,255,.07);border-bottom:1px solid rgba(255,255,255,.07);background:radial-gradient(circle,rgba(255,255,255,.1) 0 16%,transparent 17%);padding:0;margin:0;min-width:0;min-height:0;cursor:pointer}' +
    '.bkc button.gh{background:var(--g);opacity:.42}' +
    '.bkl{position:absolute;inset:0;pointer-events:none}' +
    '.bkb{position:absolute;border-radius:7px;border:2px solid rgba(0,0,0,.4);box-shadow:inset 0 -5px 0 rgba(0,0,0,.2),inset 0 3px 0 rgba(255,255,255,.3);background-image:radial-gradient(circle at 50% 46%,rgba(255,255,255,.45) 0 20%,rgba(0,0,0,.2) 21% 25%,transparent 26%)}' +
    '.bkrow{display:grid;gap:6px;margin:.6rem auto 0;width:min(100%,480px);direction:ltr}.bkrow.sz{grid-template-columns:repeat(6,1fr)}.bkrow.cl{grid-template-columns:repeat(8,1fr)}' +
    '@media(max-width:479px){.bkrow.cl{grid-template-columns:repeat(4,1fr)}}' +
    '.bkrow button{min-height:48px;border-radius:12px;border:2px solid var(--line);background:rgba(255,255,255,.07);cursor:pointer;padding:0;display:grid;place-items:center}' +
    '.bkrow button.on{border-color:#fff;box-shadow:0 0 0 3px var(--gold)}' +
    '.bkrow.sz i{display:block;background:var(--tc,#F5CC5A);border-radius:3px;box-shadow:inset 0 -2px 0 rgba(0,0,0,.25)}' +
    '.bkrow.cl button{background:var(--c)}' +
    '.bktop{display:flex;align-items:center;gap:.8rem;justify-content:center;margin:0 auto .7rem;width:min(100%,480px);text-align:start}' +
    '.bktop .tx{flex:1;min-width:0;font-weight:800;line-height:1.6}.bktop .tx b{color:var(--gold-lt);font-size:1.1rem;display:block}' +
    '.bkth{display:grid;grid-template-columns:repeat(8,1fr);aspect-ratio:1;background:#143A5E;border-radius:8px;overflow:hidden;direction:ltr;flex:0 0 auto}' +
    '.bkth i{display:block}.bktop .bkth{width:124px;border:3px solid var(--gold)}' +
    '.bkpick{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;direction:ltr}@media(min-width:560px){.bkpick{grid-template-columns:repeat(6,1fr)}}' +
    '.bkpick button{position:relative;border:2px solid var(--line);border-radius:12px;background:rgba(255,255,255,.05);padding:6px;cursor:pointer;min-height:56px}' +
    '.bkpick button.on{border-color:var(--gold-lt);background:rgba(232,181,48,.2)}.bkpick button .ok{position:absolute;top:-6px;right:-6px;width:22px;height:22px;border-radius:50%;background:#2E9E5B;color:#fff;font-size:13px;display:grid;place-items:center;font-weight:900}');
  var B, blocks = [], grid, tool = { w: 1, h: 1, c: 'r' }, pz = 0, painting = false, lastCell = -1;
  function occupancy() { grid = new Array(64).fill(-1); blocks.forEach(function (b, k) { for (var y = b.y; y < b.y + b.h; y++) for (var x = b.x; x < b.x + b.w; x++) grid[y * 8 + x] = k; }); }
  function colourAt(i) { return grid[i] < 0 ? '.' : blocks[grid[i]].c; }
  function fits(x, y, w, h) { if (x < 0 || y < 0 || x + w > 8 || y + h > 8) return false; for (var yy = y; yy < y + h; yy++) for (var xx = x; xx < x + w; xx++) if (grid[yy * 8 + xx] >= 0) return false; return true; }
  function place(x, y, w, h, c) { if (!fits(x, y, w, h)) return false; blocks.push({ x: x, y: y, w: w, h: h, c: c }); occupancy(); return true; }
  function target() { return PUZ[pz].g.join(''); }
  function matchCount() { var t = target(), ok = 0, need = 0, wrong = 0; for (var i = 0; i < 64; i++) { var c = colourAt(i); if (t[i] !== '.') { need++; if (c === t[i]) ok++; else if (c !== '.') wrong++; } else if (c !== '.') wrong++; } return { ok: ok, need: need, wrong: wrong }; }
  function done() { return B.store('done') || {}; }
  function thumb(g) { var h = '<span class="bkth">'; g.join('').split('').forEach(function (ch) { h += '<i style="background:' + (COL[ch] || 'transparent') + '"></i>'; }); return h + '</span>'; }
  function status() {
    if (B.mode === 'free') return B.status(B.T('ابنِ ما تشاء! 🧱', 'Build whatever you like! 🧱') + ' <small>' + B.T('المربّعات المبنيّة: ', 'Squares built: ') + B.N(grid.filter(function (v) { return v >= 0; }).length) + '</small>');
    var m = matchCount();
    B.status(B.T('انسخ الصورة: ', 'Copy the picture: ') + B.T(PUZ[pz].ar, PUZ[pz].en) + ' <small>' + B.T('الصحيح: ', 'Correct: ') + B.N(m.ok) + ' / ' + B.N(m.need) + (m.wrong ? ' · ' + B.T('في غير مكانه: ', 'Out of place: ') + B.N(m.wrong) : '') + '</small>');
  }
  function render() {
    var cells = B.stage.querySelectorAll('.bkc button'), t = target(), ghost = B.mode === 'puzzle' && B.level !== 'hard';
    for (var i = 0; i < 64; i++) {
      var g = ghost && t[i] !== '.' && grid[i] < 0;
      cells[i].className = g ? 'gh' : ''; cells[i].style.setProperty('--g', g ? (B.level === 'easy' ? COL[t[i]] : '#9fb4c8') : 'transparent');
      cells[i].setAttribute('aria-label', B.T('مربّع ', 'Square ') + B.N((i & 7) + 1) + '،' + B.N((i >> 3) + 1) + ' ' + (grid[i] >= 0 ? B.T(CN[colourAt(i)][0], CN[colourAt(i)][1]) : B.T('فارغ', 'empty')));
    }
    B.stage.querySelector('.bkl').innerHTML = blocks.map(function (b) {
      return '<div class="bkb" style="left:' + b.x * 12.5 + '%;top:' + b.y * 12.5 + '%;width:' + b.w * 12.5 + '%;height:' + b.h * 12.5 + '%;background-color:' + COL[b.c] + ';background-size:' + 100 / b.w + '% ' + 100 / b.h + '%"></div>';
    }).join('');
    status();
  }
  function tools() {
    var sz = document.getElementById('bkSz'), cl = document.getElementById('bkCl');
    sz.innerHTML = SIZES.map(function (s, k) { return '<button type="button" data-k="' + k + '" class="' + (tool.w === s[0] && tool.h === s[1] ? 'on' : '') + '" aria-label="' + B.T('قطعة ', 'Block ') + s[0] + '×' + s[1] + '"><i style="width:' + s[0] * 13 + 'px;height:' + s[1] * 13 + 'px;--tc:' + COL[tool.c] + '"></i></button>'; }).join('');
    cl.innerHTML = Object.keys(COL).map(function (c) { return '<button type="button" data-c="' + c + '" class="' + (tool.c === c ? 'on' : '') + '" style="--c:' + COL[c] + '" aria-label="' + B.T(CN[c][0], CN[c][1]) + '"></button>'; }).join('');
    sz.querySelectorAll('button').forEach(function (x) { x.onclick = function () { var s = SIZES[+x.dataset.k]; tool.w = s[0]; tool.h = s[1]; B.beep('move'); tools(); }; });
    cl.querySelectorAll('button').forEach(function (x) { x.onclick = function () { tool.c = x.dataset.c; B.beep('move'); tools(); }; });
  }
  function top() {
    var el = document.getElementById('bkTop'), pk = document.getElementById('bkPick'), d = done();
    el.hidden = pk.hidden = B.mode !== 'puzzle';
    el.innerHTML = thumb(PUZ[pz].g) + '<div class="tx"><b>' + B.N(pz + 1) + '. ' + B.T(PUZ[pz].ar, PUZ[pz].en) + (d[pz] ? ' ✅' : '') + '</b>' + B.T('ابنِ مثلَ هذه الصورة على اللوحة، بالألوان نفسها.', 'Build this picture on the board, with the same colours.') + '</div>';
    pk.innerHTML = '<h2>' + B.T('🖼️ اختر صورة', '🖼️ Choose a picture') + '</h2><div class="bkpick">' + PUZ.map(function (p, k) { return '<button type="button" data-k="' + k + '" class="' + (k === pz ? 'on' : '') + '" aria-label="' + B.T(p.ar, p.en) + '">' + thumb(p.g) + (d[k] ? '<span class="ok">✓</span>' : '') + '</button>'; }).join('') + '</div>';
    pk.querySelectorAll('button').forEach(function (x) { x.onclick = function () { setPuzzle(+x.dataset.k); window.scrollTo(0, 0); }; });
    document.getElementById('bkDone').hidden = B.mode !== 'free';
    document.getElementById('bkClear').textContent = B.T('🧹 امسح اللوحة', '🧹 Clear the board');
    document.getElementById('bkDone').textContent = B.T('✅ انتهيتُ من بنائي', '✅ I finished my build');
  }
  function persist() { B.save({ blocks: blocks, pz: pz, tool: tool }); }
  function setPuzzle(k) { pz = (k + PUZ.length) % PUZ.length; B.store('pz', pz); blocks = []; occupancy(); B.over = false; persist(); top(); render(); }
  function check() {
    if (B.mode !== 'puzzle' || B.over) return;
    var m = matchCount(); if (m.ok !== m.need || m.wrong) return;
    var d = done(); d[pz] = 1; B.store('done', d); top();
    setTimeout(function () { B.win({ msg: B.T('بنيتَ «' + PUZ[pz].ar + '» تمامًا كالصورة!', 'You built the ' + PUZ[pz].en.toLowerCase() + ' exactly like the picture!') }); }, 350);
    B.over = true;
  }
  function act(i, dragging) {
    if (B.over) return;
    var x = i & 7, y = i >> 3;
    if (grid[i] >= 0) { if (dragging) return; blocks.splice(grid[i], 1); occupancy(); B.beep('move'); painting = false; }
    else {
      var ok = false;
      for (var dy = 0; dy < tool.h && !ok; dy++) for (var dx = 0; dx < tool.w && !ok; dx++) ok = place(x - dx, y - dy, tool.w, tool.h, tool.c);
      if (!ok) { if (!dragging) { B.beep('bad'); B.status(B.T('لا مكانَ لهذه القطعة هنا — جرِّب قطعةً أصغر أو مكانًا آخر.', 'This block does not fit here — try a smaller block or another spot.')); } return; }
      B.beep('tap'); painting = tool.w === 1 && tool.h === 1;
    }
    persist(); render(); check();
  }
  Brain.game({
    id: 'blocks',
    modes: [{ id: 'puzzle', ar: 'انسخ الصورة', en: 'Copy the picture' }, { id: 'free', ar: 'بناء حرّ', en: 'Free build' }],
    how: {
      ar: ['اختر حجمَ القطعة ولونَها، ثمّ اضغط مربّعًا فارغًا لتضعها.', 'اضغط قطعةً موضوعةً لتزيلها.', 'في «انسخ الصورة»: ابنِ الصورةَ بالألوان نفسها. في «سهل» تظهر الصورةُ خفيفةً على اللوحة لتساعدك.'],
      en: ['Choose a block size and a colour, then tap an empty square to place it.', 'Tap a placed block to remove it.', 'In "Copy the picture": build the picture with the same colours. On Easy a faint picture on the board helps you.']
    },
    afterWin: { label: function (b) { return b.T('➡️ الصورة التالية', '➡️ Next picture'); }, go: function () { setPuzzle(pz + 1); } },
    init: function (b) {
      B = b;
      var h = '<div class="bktop" id="bkTop"></div><div class="bd bk"><div class="bkc">'; for (var i = 0; i < 64; i++) h += '<button type="button" data-i="' + i + '"></button>';
      B.stage.innerHTML = h + '</div><div class="bkl"></div></div><div class="bkrow sz" id="bkSz"></div><div class="bkrow cl" id="bkCl"></div>';
      B.extra.innerHTML = '<button class="bbtn" id="bkClear" type="button"></button><button class="bbtn go" id="bkDone" type="button"></button>';
      var pk = document.createElement('section'); pk.className = 'bpanel'; pk.id = 'bkPick'; B.extra.parentNode.appendChild(pk);
      var bd = B.stage.querySelector('.bk');
      function cellAt(e) { var r = bd.getBoundingClientRect(), x = Math.floor((e.clientX - r.left) / r.width * 8), y = Math.floor((e.clientY - r.top) / r.height * 8); return x < 0 || x > 7 || y < 0 || y > 7 ? -1 : y * 8 + x; }
      bd.addEventListener('pointerdown', function (e) { var i = cellAt(e); if (i < 0) return; e.preventDefault(); lastCell = i; painting = false; act(i, false); try { bd.setPointerCapture(e.pointerId); } catch (x) {} });
      bd.addEventListener('pointermove', function (e) { if (!painting) return; var i = cellAt(e); if (i < 0 || i === lastCell) return; lastCell = i; act(i, true); });
      ['pointerup', 'pointercancel'].forEach(function (n) { bd.addEventListener(n, function () { painting = false; }); });
      bd.addEventListener('keydown', function (e) { if ((e.key === 'Enter' || e.key === ' ') && e.target.dataset && e.target.dataset.i) { e.preventDefault(); act(+e.target.dataset.i, false); } });
      document.getElementById('bkClear').onclick = function () { blocks = []; occupancy(); B.over = false; persist(); render(); };
      document.getElementById('bkDone').onclick = function () {
        var n = grid.filter(function (v) { return v >= 0; }).length;
        if (n < 8) return B.status(B.T('ابنِ قليلًا بعدُ — ثمانيةَ مربّعاتٍ على الأقلّ 🙂', 'Build a little more — at least eight squares 🙂'));
        B.win({ stars: 1, keep: true, title: B.T('بناءٌ جميل! ما شاء الله', 'A lovely build! Masha\'Allah'), msg: B.T('بنيتَ شيئًا من خيالك — أرِه لأهلك!', 'You built something from your own imagination — show your family!') }); B.over = false;
      };
      var p0 = B.store('pz'); if (typeof p0 === 'number' && PUZ[p0]) pz = p0;
      B.api = { place: function (x, y, w, h, c) { var ok = place(x, y, w, h, c); if (ok) { persist(); render(); check(); } return ok; }, act: act, target: target, grid: function () { return grid.map(function (v, i) { return colourAt(i); }).join(''); }, setPuzzle: setPuzzle, puzzles: PUZ.length, blocks: function () { return blocks; }, setTool: function (w, h, c) { tool = { w: w, h: h, c: c }; tools(); }, pz: function () { return pz; } };
    },
    newGame: function () { blocks = []; occupancy(); tools(); top(); render(); },
    restore: function (b, s) { if (!s || !s.blocks) return false; blocks = []; occupancy(); if (typeof s.pz === 'number' && PUZ[s.pz]) pz = s.pz; if (s.tool && COL[s.tool.c]) tool = s.tool; s.blocks.forEach(function (k) { if (COL[k.c]) place(k.x, k.y, k.w, k.h, k.c); }); tools(); top(); render(); },
    relang: function () { tools(); top(); render(); }
  });
})();
