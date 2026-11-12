/* لغز الأشكال — Tangram: seven pieces (2 big triangles, 1 medium, 2 small, a square, a parallelogram).
   Drag a piece to move it, tap it to turn it 45° (the parallelogram also flips over after four turns).
   Pieces snap to the corners of the shape and to each other. Eight shapes; the shape is solved when it is
   (almost) completely covered — any arrangement that fills it counts.
   Units: the small triangle's short side = 1. Board = 9 × 9.6 units. */
(function () {
  'use strict';
  var BW = 9, BH = 9.6;
  var BASE = { L: [0, 0, 2, 0, 0, 2], M: [0, 0, 2, 0, 1, 1], S: [0, 0, 1, 0, 0, 1], Q: [0, 0, 1, 0, 1, 1, 0, 1], P: [0, 0, 1, 0, 2, 1, 1, 1] };
  var KINDS = ['L', 'L', 'M', 'S', 'S', 'Q', 'P'];
  var COLS = ['#E5574A', '#3D8BD8', '#F5CC5A', '#3BB36D', '#F0963C', '#B07CE8', '#37B8C4'];
  var HOME = [[1.3, 6.35], [3.6, 6.35], [5.9, 6.1], [4.3, 8.5], [6.2, 8.5], [7.9, 6.2], [1.8, 8.6]];
  /* each shape: the seven pieces as [kind, x,y, x,y, …] on a whole-number grid */
  var FIGS = [
    { ar: 'بيت', en: 'House', p: [['L', 2, 2, 0, 2, 2, 0], ['L', 2, 2, 4, 2, 2, 0], ['M', 3, 2, 3, 4, 2, 3], ['S', 1, 4, 1, 3, 2, 4], ['S', 2, 2, 3, 2, 2, 3], ['Q', 1, 2, 2, 2, 2, 3, 1, 3], ['P', 1, 3, 2, 3, 3, 4, 2, 4]] },
    { ar: 'قارب', en: 'Boat', p: [['L', 2, 3, 2, 1, 0, 3], ['L', 3, 3, 3, 1, 5, 3], ['M', 3, 3, 5, 3, 4, 4], ['S', 1, 3, 0, 3, 1, 4], ['S', 2, 4, 2, 3, 3, 4], ['Q', 1, 3, 2, 3, 2, 4, 1, 4], ['P', 2, 3, 3, 3, 4, 4, 3, 4]] },
    { ar: 'مسجد', en: 'Mosque', p: [['L', 0, 2, 2, 2, 0, 4], ['L', 2, 4, 0, 4, 2, 2], ['M', 0, 2, 2, 2, 1, 1], ['S', 2, 3, 2, 2, 3, 3], ['S', 3, 1, 3, 2, 2, 1], ['Q', 2, 3, 3, 3, 3, 4, 2, 4], ['P', 2, 1, 2, 2, 3, 3, 3, 2]] },
    { ar: 'خيمة', en: 'Tent', p: [['L', 2, 2, 0, 2, 2, 0], ['L', 2, 2, 4, 2, 2, 0], ['M', 0, 3, 2, 3, 1, 2], ['S', 0, 2, 1, 2, 0, 3], ['S', 3, 2, 2, 2, 3, 3], ['Q', 3, 2, 4, 2, 4, 3, 3, 3], ['P', 1, 2, 2, 2, 3, 3, 2, 3]] },
    { ar: 'سهم', en: 'Arrow', p: [['L', 0, 1, 2, 1, 0, 3], ['L', 2, 3, 0, 3, 2, 1], ['M', 3, 1, 3, 3, 4, 2], ['S', 2, 2, 2, 1, 3, 2], ['S', 2, 3, 3, 3, 2, 4], ['Q', 2, 2, 3, 2, 3, 3, 2, 3], ['P', 2, 0, 2, 1, 3, 2, 3, 1]] },
    { ar: 'وعاء', en: 'Bowl', p: [['L', 2, 0, 0, 0, 2, 2], ['L', 4, 0, 6, 0, 4, 2], ['M', 4, 0, 4, 2, 3, 1], ['S', 2, 2, 2, 1, 3, 2], ['S', 3, 0, 4, 0, 3, 1], ['Q', 2, 0, 3, 0, 3, 1, 2, 1], ['P', 2, 1, 3, 1, 4, 2, 3, 2]] },
    { ar: 'سمكة', en: 'Fish', p: [['L', 2, 0, 4, 0, 2, 2], ['L', 4, 2, 2, 2, 4, 0], ['M', 1, 0, 1, 2, 0, 1], ['S', 1, 1, 2, 1, 1, 2], ['S', 2, 2, 1, 2, 2, 1], ['Q', 1, 0, 2, 0, 2, 1, 1, 1], ['P', 4, 1, 5, 0, 5, 1, 4, 2]] },
    { ar: 'جبال', en: 'Mountains', p: [['L', 2, 2, 0, 2, 2, 0], ['L', 2, 2, 4, 2, 2, 0], ['M', 5, 1, 7, 1, 6, 0], ['S', 6, 2, 5, 2, 6, 1], ['S', 7, 2, 7, 1, 8, 2], ['Q', 6, 1, 7, 1, 7, 2, 6, 2], ['P', 4, 2, 5, 2, 6, 1, 5, 1]] }
  ];
  Brain.css(
    '.tg{width:min(100%,520px);border-radius:14px;background:#143A5E;box-shadow:0 0 0 4px #0B2440,0 10px 26px rgba(0,0,0,.4);overflow:hidden}' +
    '.tg svg{display:block;width:100%;height:auto;touch-action:none}' +
    '.tg .sil{fill:#081A2E;stroke:#081A2E;stroke-width:.04;stroke-linejoin:round}.tg .gd{fill:none;stroke:rgba(255,255,255,.4);stroke-width:.03;stroke-dasharray:.12 .1}' +
    '.tg .pc{stroke:rgba(0,0,0,.45);stroke-width:.045;stroke-linejoin:round;cursor:grab}.tg .pc.drag{stroke:#fff;stroke-width:.07;cursor:grabbing}' +
    '.tg .tray{fill:rgba(255,255,255,.05)}' +
    '.tgpick{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;direction:ltr}' +
    '.tgpick button{position:relative;border:2px solid var(--line);border-radius:12px;background:rgba(255,255,255,.05);padding:4px;cursor:pointer;min-height:56px;color:var(--ink);font-weight:800;font-size:.85rem}' +
    '.tgpick button.on{border-color:var(--gold-lt);background:rgba(232,181,48,.2)}.tgpick svg{display:block;width:100%;height:44px}.tgpick svg polygon{fill:#F5CC5A;stroke:#F5CC5A;stroke-width:.05}' +
    '.tgpick .ok{position:absolute;top:-6px;right:-6px;width:22px;height:22px;border-radius:50%;background:#2E9E5B;color:#fff;font-size:13px;display:grid;place-items:center;font-weight:900}');
  var B, fig = 0, P = [], svgEl, drag = null, OX = 0, OY = 0, solved = [];
  function centroid(v) { var x = 0, y = 0, n = v.length / 2; for (var i = 0; i < v.length; i += 2) { x += v[i]; y += v[i + 1]; } return [x / n, y / n]; }
  /* polygon of a piece kind in state st, centred on (cx,cy) */
  function shape(kind, st, cx, cy) {
    var b = BASE[kind], c = centroid(b), rot = kind === 'P' ? st % 4 : st % 8, flip = kind === 'P' && (st % 8) >= 4, a = rot * Math.PI / 4, cs = Math.cos(a), sn = Math.sin(a), out = [];
    for (var i = 0; i < b.length; i += 2) { var x = b[i] - c[0], y = b[i + 1] - c[1]; if (flip) x = -x; out.push(cx + x * cs - y * sn, cy + x * sn + y * cs); }
    return out;
  }
  function poly(i) { return shape(KINDS[i], P[i].st, P[i].x, P[i].y); }
  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; i += 2) { var ok = false; for (var j = 0; j < b.length; j += 2) if (Math.abs(a[i] - b[j]) < 0.01 && Math.abs(a[i + 1] - b[j + 1]) < 0.01) { ok = true; break; } if (!ok) return false; }
    return true;
  }
  /* where every piece goes in the stored solution: [{st,x,y}] (board units) */
  function solution(f) {
    return FIGS[f].p.map(function (q) {
      var v = q.slice(1), c = centroid(v);
      for (var st = 0; st < 8; st++) if (sameSet(shape(q[0], st, c[0], c[1]), v)) return { st: st, x: c[0] + OX, y: c[1] + OY };
      return { st: 0, x: c[0] + OX, y: c[1] + OY, bad: true };
    });
  }
  function bbox(f) { var x0 = 99, y0 = 99, x1 = -99, y1 = -99; FIGS[f].p.forEach(function (q) { for (var i = 1; i < q.length; i += 2) { x0 = Math.min(x0, q[i]); x1 = Math.max(x1, q[i]); y0 = Math.min(y0, q[i + 1]); y1 = Math.max(y1, q[i + 1]); } }); return [x0, y0, x1, y1]; }
  function place(f) { var b = bbox(f); OX = (BW - (b[2] - b[0])) / 2 - b[0]; OY = 0.5 + (4 - (b[3] - b[1])) / 2 - b[1]; }
  function inPoly(v, x, y) { var c = false; for (var i = 0, j = v.length - 2; i < v.length; j = i, i += 2) { if ((v[i + 1] > y) !== (v[j + 1] > y) && x < (v[j] - v[i]) * (y - v[i + 1]) / (v[j + 1] - v[i + 1]) + v[i]) c = !c; } return c; }
  function coverage() {
    var b = bbox(fig), tot = 0, cov = 0, polys = [0, 1, 2, 3, 4, 5, 6].map(poly), sil = FIGS[fig].p.map(function (q) { return q.slice(1); });
    for (var y = b[1] + 0.0625; y < b[3]; y += 0.125) for (var x = b[0] + 0.0625; x < b[2]; x += 0.125) {
      var k, ins = false; for (k = 0; k < 7 && !ins; k++) ins = inPoly(sil[k], x, y); if (!ins) continue; tot++;
      for (k = 0; k < 7; k++) if (inPoly(polys[k], x + OX, y + OY)) { cov++; break; }
    }
    return cov / tot;
  }
  function pts(v) { var s = ''; for (var i = 0; i < v.length; i += 2) s += (i ? ' ' : '') + v[i].toFixed(3) + ',' + v[i + 1].toFixed(3); return s; }
  function status() {
    if (B.over) return;
    B.status(B.T('املأ الشكل: ', 'Fill the shape: ') + B.T(FIGS[fig].ar, FIGS[fig].en) + ' <small>' + B.T('امتلأ ', 'Filled ') + B.N(Math.round(coverage() * 100)) + B.T('٪', '%') + '</small>');
  }
  function drawBoard() {
    var h = '<rect class="tray" x="0" y="5.05" width="' + BW + '" height="' + (BH - 5.05) + '"/><g transform="translate(' + OX + ' ' + OY + ')">';
    FIGS[fig].p.forEach(function (q) { h += '<polygon class="sil" points="' + pts(q.slice(1)) + '"/>'; });
    if (B.level === 'easy') FIGS[fig].p.forEach(function (q) { h += '<polygon class="gd" points="' + pts(q.slice(1)) + '"/>'; });
    h += '</g><g id="tgPcs">';
    for (var i = 0; i < 7; i++) h += '<polygon class="pc" data-i="' + i + '" fill="' + COLS[i] + '" points="' + pts(poly(i)) + '"/>';
    svgEl.innerHTML = h + '</g>';
    status();
  }
  function redraw(i) { var el = svgEl.querySelector('.pc[data-i="' + i + '"]'); if (el) el.setAttribute('points', pts(poly(i))); }
  function snap(i) {
    var v = poly(i), best = 0.36, dx = 0, dy = 0, k, j, a, b, d;
    var tg = []; FIGS[fig].p.forEach(function (q) { for (var z = 1; z < q.length; z += 2) tg.push(q[z] + OX, q[z + 1] + OY); });
    for (a = 0; a < v.length; a += 2) for (b = 0; b < tg.length; b += 2) { d = Math.hypot(tg[b] - v[a], tg[b + 1] - v[a + 1]); if (d < best) { best = d; dx = tg[b] - v[a]; dy = tg[b + 1] - v[a + 1]; } }
    if (best >= 0.36) {
      best = 0.26;
      for (k = 0; k < 7; k++) { if (k === i) continue; var o = poly(k); for (a = 0; a < v.length; a += 2) for (j = 0; j < o.length; j += 2) { d = Math.hypot(o[j] - v[a], o[j + 1] - v[a + 1]); if (d < best) { best = d; dx = o[j] - v[a]; dy = o[j + 1] - v[a + 1]; } } }
    }
    P[i].x += dx; P[i].y += dy;
  }
  function clamp(i) { P[i].x = Math.max(0.4, Math.min(BW - 0.4, P[i].x)); P[i].y = Math.max(0.4, Math.min(BH - 0.4, P[i].y)); }
  function persist() { B.save({ fig: fig, P: P }); }
  function done() { return B.store('done') || {}; }
  function check() {
    status();
    if (B.over || coverage() < 0.97) return false;
    B.over = true; var d = done(); d[fig] = 1; B.store('done', d); picker();
    setTimeout(function () { B.win({ msg: B.T('ملأتَ شكل «' + FIGS[fig].ar + '» بالقطع السبع!', 'You filled the ' + FIGS[fig].en.toLowerCase() + ' with all seven pieces!') }); }, 400);
    return true;
  }
  function turn(i) { P[i].st = (P[i].st + 1) % 8; snap(i); clamp(i); redraw(i); B.beep('move'); persist(); check(); }
  function drop(i) { snap(i); clamp(i); redraw(i); B.beep('tap'); persist(); check(); }
  function deal() {
    P = HOME.map(function (h, i) {
      var st = B.level === 'easy' ? solved[i].st : B.level === 'medium' ? 2 * Math.floor(Math.random() * 4) : Math.floor(Math.random() * 8);
      return { st: st, x: h[0], y: h[1] };
    });
  }
  function setFig(f) { fig = (f + FIGS.length) % FIGS.length; B.store('fig', fig); place(fig); solved = solution(fig); B.over = false; deal(); persist(); drawBoard(); picker(); }
  function picker() {
    var pk = document.getElementById('tgPick'), d = done();
    pk.innerHTML = '<h2>' + B.T('🔷 اختر شكلًا', '🔷 Choose a shape') + '</h2><div class="tgpick">' + FIGS.map(function (f, k) {
      var b = bbox(k), w = b[2] - b[0], hh = b[3] - b[1];
      return '<button type="button" data-k="' + k + '" class="' + (k === fig ? 'on' : '') + '"><svg viewBox="' + (b[0] - .2) + ' ' + (b[1] - .2) + ' ' + (w + .4) + ' ' + (hh + .4) + '" aria-hidden="true">' + f.p.map(function (q) { return '<polygon points="' + pts(q.slice(1)) + '"/>'; }).join('') + '</svg>' + B.esc(B.T(f.ar, f.en)) + (d[k] ? '<span class="ok">✓</span>' : '') + '</button>';
    }).join('') + '</div>';
    pk.querySelectorAll('button').forEach(function (x) { x.onclick = function () { setFig(+x.dataset.k); window.scrollTo(0, 0); }; });
  }
  function unit(e) { var r = svgEl.getBoundingClientRect(); return [(e.clientX - r.left) / r.width * BW, (e.clientY - r.top) / r.height * BH]; }
  Brain.game({
    id: 'tangram',
    how: {
      ar: ['اسحب القطعةَ بإصبعك لتحرّكها، واضغطها ضغطةً قصيرةً لتدور.', 'ضع القطعَ السبعَ كلَّها داخل الشكل الداكن حتّى يمتلئ تمامًا، بلا فراغٍ ولا تراكُب.', 'القطعةُ تلتصق بزاوية الشكل إذا قرّبتَها منها. في «سهل» تظهر خطوطٌ تساعدك.'],
      en: ['Drag a piece with your finger to move it, and give it a short tap to turn it.', 'Put all seven pieces inside the dark shape until it is completely full — no gaps and no overlaps.', 'A piece snaps to a corner of the shape when you bring it close. On Easy, guide lines help you.']
    },
    afterWin: { label: function (b) { return b.T('➡️ الشكل التالي', '➡️ Next shape'); }, go: function () { setFig(fig + 1); } },
    init: function (b) {
      B = b;
      B.stage.innerHTML = '<div class="bd tg"><svg viewBox="0 0 ' + BW + ' ' + BH + '" role="img"></svg></div>';
      svgEl = B.stage.querySelector('svg');
      var pk = document.createElement('section'); pk.className = 'bpanel'; pk.id = 'tgPick'; B.extra.parentNode.appendChild(pk);
      svgEl.addEventListener('pointerdown', function (e) {
        var t = e.target; if (!t.classList || !t.classList.contains('pc') || B.over) return;
        e.preventDefault(); var i = +t.dataset.i, u = unit(e);
        drag = { i: i, id: e.pointerId, sx: u[0], sy: u[1], px: P[i].x, py: P[i].y, moved: false, t: Date.now() };
        t.classList.add('drag'); t.parentNode.appendChild(t);
        try { svgEl.setPointerCapture(e.pointerId); } catch (x) {}
      });
      svgEl.addEventListener('pointermove', function (e) {
        if (!drag || e.pointerId !== drag.id) return;
        var u = unit(e), dx = u[0] - drag.sx, dy = u[1] - drag.sy;
        if (!drag.moved && Math.hypot(dx, dy) < 0.16) return;
        drag.moved = true; P[drag.i].x = drag.px + dx; P[drag.i].y = drag.py + dy; clamp(drag.i); redraw(drag.i);
      });
      function end(e) {
        if (!drag || e.pointerId !== drag.id) return;
        var d = drag; drag = null; var el = svgEl.querySelector('.pc[data-i="' + d.i + '"]'); if (el) el.classList.remove('drag');
        if (e.type === 'pointercancel') { redraw(d.i); return; }
        if (d.moved) drop(d.i); else turn(d.i);
      }
      svgEl.addEventListener('pointerup', end); svgEl.addEventListener('pointercancel', end);
      var f0 = B.store('fig'); if (typeof f0 === 'number' && FIGS[f0]) fig = f0;
      B.api = {
        figs: FIGS.length, fig: function () { return fig; }, setFig: setFig, pieces: function () { return P; }, solution: function () { return solved; }, coverage: coverage,
        setPiece: function (i, st, x, y) { P[i] = { st: st, x: x, y: y }; snap(i); redraw(i); persist(); return check(); },
        poly: poly, toClient: function (x, y) { var r = svgEl.getBoundingClientRect(); return [r.left + x / BW * r.width, r.top + y / BH * r.height]; },
        verify: function () {          // data check: every stored shape is seven true pieces that tile it without overlap
          return FIGS.map(function (f, k) {
            var keep = fig, ox = OX, oy = OY; fig = k; place(k); var s = solution(k), bad = s.filter(function (q) { return q.bad; }).length;
            var kinds = f.p.map(function (q) { return q[0]; }).join(''); var save = P; P = s.map(function (q) { return { st: q.st, x: q.x, y: q.y }; });
            var b = bbox(k), tot = 0, dbl = 0; for (var y = b[1] + 0.05; y < b[3]; y += 0.1) for (var x = b[0] + 0.05; x < b[2]; x += 0.1) { var n = 0; for (var z = 0; z < 7; z++) if (inPoly(f.p[z].slice(1), x, y)) n++; if (n) tot++; if (n > 1) dbl++; }
            var cov = coverage(); P = save; fig = keep; OX = ox; OY = oy;
            var area = 0; f.p.forEach(function (q) { var v = q.slice(1), t = 0; for (var e = 0; e < v.length; e += 2) { var g = (e + 2) % v.length; t += v[e] * v[g + 1] - v[g] * v[e + 1]; } area += Math.abs(t) / 2; });
            return { name: f.en, kinds: kinds, bad: bad, area: area, sampled: tot * 0.01, overlap: dbl, cov: cov };
          });
        }
      };
    },
    newGame: function () { place(fig); solved = solution(fig); deal(); drawBoard(); picker(); },
    restore: function (b, s) { if (!s || !s.P || s.P.length !== 7 || !FIGS[s.fig]) return false; fig = s.fig; place(fig); solved = solution(fig); P = s.P; drawBoard(); picker(); },
    relang: function () { picker(); status(); }
  });
})();
