/* ═══ book2 · art-core — free, code-drawn painterly scenes for the printed books ═══
   ART.paint(recipe, line) → SVG string (800×560). line=true gives the colouring-page version.
   Rules kept by every drawing: people are faceless and modestly dressed; no prophet, companion
   or angel is ever drawn (stories use places, objects and light instead); the Ka'bah never has a face. */
(function () {
  'use strict';
  var W = 800, H = 560, N = 0;
  var ART = window.ART = { W: W, H: H, bg: {}, prop: {}, fig: null };

  /* ── colour helpers ── */
  function hex(h) { h = h.replace('#', ''); if (h.length === 3) h = h.replace(/./g, '$&$&'); return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]; }
  function mix(a, b, t) { var A = hex(a), B = hex(b); return '#' + [0, 1, 2].map(function (i) { return ('0' + Math.round(A[i] + (B[i] - A[i]) * t).toString(16)).slice(-2); }).join(''); }
  ART.mix = mix;
  ART.dark = function (c, t) { return mix(c, '#1a1008', t == null ? .35 : t); };
  ART.light = function (c, t) { return mix(c, '#ffffff', t == null ? .35 : t); };

  /* ── seeded random so every page draws the same each time ── */
  ART.rng = function (seed) { var s = seed || 1; return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; };

  /* ── Painter: one per SVG ── */
  function Painter(line) {
    this.line = line; this.k = 'g' + (++N) + '_'; this.o = []; this.d = []; this.gid = 0;
    this.ST = line ? 'stroke="#111" stroke-width="2.8" stroke-linejoin="round" stroke-linecap="round"'
                   : 'stroke="#3B2614" stroke-opacity=".5" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"';
    this.TH = line ? 'stroke="#111" stroke-width="1.6" fill="none" stroke-linecap="round"'
                   : 'stroke="#3B2614" stroke-opacity=".3" stroke-width="1.1" fill="none" stroke-linecap="round"';
  }
  var PP = Painter.prototype;
  PP.U = function (id) { return 'url(#' + this.k + id + ')'; };
  PP.f = function (c) { return this.line ? '#fff' : c; };
  PP.add = function (s) { this.o.push(s); return this; };
  PP.col = function (s) { if (!this.line) this.o.push(s); return this; };
  PP.P = function (d, c, x) { return this.add('<path d="' + d + '" fill="' + this.f(c) + '" ' + this.ST + ' ' + (x || '') + '/>'); };
  PP.Pn = function (d, c, x) { return this.add('<path d="' + d + '" fill="' + this.f(c) + '" ' + (x || '') + '/>'); }; // no outline
  PP.E = function (cx, cy, rx, ry, c, x) { return this.add('<ellipse cx="' + r1(cx) + '" cy="' + r1(cy) + '" rx="' + r1(rx) + '" ry="' + r1(ry) + '" fill="' + this.f(c) + '" ' + this.ST + ' ' + (x || '') + '/>'); };
  PP.C = function (cx, cy, r, c, x) { return this.E(cx, cy, r, r, c, x); };
  PP.R = function (x, y, w, h, c, rx, ex) { return this.add('<rect x="' + r1(x) + '" y="' + r1(y) + '" width="' + r1(w) + '" height="' + r1(h) + '" rx="' + (rx || 0) + '" fill="' + this.f(c) + '" ' + this.ST + ' ' + (ex || '') + '/>'); };
  PP.T = function (d, x) { return this.add('<path d="' + d + '" ' + this.TH + ' ' + (x || '') + '/>'); };
  PP.S = function (d, color, w, x) { // stroked-only path (water, strings…) — black in line mode
    return this.add('<path d="' + d + '" fill="none" stroke="' + (this.line ? '#111' : color) + '" stroke-width="' + (this.line ? Math.min(w, 2.4) : w) + '" stroke-linecap="round" stroke-linejoin="round" ' + (x || '') + '/>');
  };
  PP.limb = function (d, c, w) { // outlined thick limb / tube
    this.add('<path d="' + d + '" fill="none" stroke="' + (this.line ? '#111' : '#3B2614') + '" stroke-opacity="' + (this.line ? 1 : .55) + '" stroke-width="' + (w + (this.line ? 5.6 : 2.8)) + '" stroke-linecap="round" stroke-linejoin="round"/>');
    return this.add('<path d="' + d + '" fill="none" stroke="' + this.f(c) + '" stroke-width="' + w + '" stroke-linecap="round" stroke-linejoin="round"/>');
  };
  /* soft edges are vector radial fades (no raster filters) — keeps PDFs small and print crisp */
  PP.fade = function (c, op) {
    if (this.line) return 'none';
    this.fc = this.fc || {}; var key = c + op;
    if (!this.fc[key]) { var id = 'f' + (++this.gid); this.fc[key] = id; this.d.push('<radialGradient id="' + this.k + id + '"><stop offset="0" stop-color="' + c + '" stop-opacity="' + op + '"/><stop offset=".55" stop-color="' + c + '" stop-opacity="' + r1(op * .55 * 100) / 100 + '"/><stop offset="1" stop-color="' + c + '" stop-opacity="0"/></radialGradient>'); }
    return this.U(this.fc[key]);
  };
  PP.shadow = function (cx, cy, rx, ry, op) { return this.col('<ellipse cx="' + r1(cx) + '" cy="' + r1(cy) + '" rx="' + r1(rx * 1.3) + '" ry="' + r1(ry * 1.7) + '" fill="' + this.fade('#2B1808', Math.min(.9, (op || .26) * 1.7)) + '"/>'); };
  PP.glow = function (cx, cy, r, c, op) { return this.col('<circle cx="' + r1(cx) + '" cy="' + r1(cy) + '" r="' + r1(r * 1.3) + '" fill="' + this.fade(c || '#FFE7A0', op || .55) + '"/>'); };
  /* gradients made on demand from one base colour — light from the upper right */
  PP.g = function (base, kind) {
    if (this.line) return '#fff';
    var id = 'd' + (++this.gid), lt = mix(base, '#fff', .28), dk = mix(base, '#1a1008', .32);
    if (kind === 'v') this.d.push('<linearGradient id="' + this.k + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + lt + '"/><stop offset="1" stop-color="' + dk + '"/></linearGradient>');
    else if (kind === 'r') this.d.push('<radialGradient id="' + this.k + id + '" cx=".65" cy=".3" r=".8"><stop offset="0" stop-color="' + lt + '"/><stop offset=".6" stop-color="' + base + '"/><stop offset="1" stop-color="' + dk + '"/></radialGradient>');
    else this.d.push('<linearGradient id="' + this.k + id + '" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="' + dk + '"/><stop offset=".6" stop-color="' + base + '"/><stop offset="1" stop-color="' + lt + '"/></linearGradient>');
    return this.U(id);
  };
  PP.grp = function (tr) { return this.add('<g transform="' + tr + '">'); };
  PP.end = function () { return this.add('</g>'); };
  function r1(n) { return Math.round(n * 10) / 10; }
  ART.r1 = r1;

  function lg(k, id, x2, y2, st) { return '<linearGradient id="' + k + id + '" x1="0" y1="0" x2="' + x2 + '" y2="' + y2 + '">' + st.map(function (s) { return '<stop offset="' + s[0] + '" stop-color="' + s[1] + '"' + (s[2] != null ? ' stop-opacity="' + s[2] + '"' : '') + '/>'; }).join('') + '</linearGradient>'; }
  function rg(k, id, cx, cy, r, st) { return '<radialGradient id="' + k + id + '" cx="' + cx + '" cy="' + cy + '" r="' + r + '">' + st.map(function (s) { return '<stop offset="' + s[0] + '" stop-color="' + s[1] + '"' + (s[2] != null ? ' stop-opacity="' + s[2] + '"' : '') + '/>'; }).join('') + '</radialGradient>'; }
  function commonDefs(k) {
    return lg(k, 'sky_dawn', 0, 1, [[0, '#4F7FC4'], [.45, '#9DBBE2'], [.78, '#F4CFA0'], [1, '#FBE6C2']]) +
      lg(k, 'sky_day', 0, 1, [[0, '#3E86D6'], [.6, '#8EC3EE'], [1, '#D8EEFB']]) +
      lg(k, 'sky_sunset', 0, 1, [[0, '#5B4B9A'], [.4, '#C46A8E'], [.75, '#F39A5B'], [1, '#FCD48A']]) +
      lg(k, 'sky_night', 0, 1, [[0, '#0B1433'], [.6, '#1C2D5E'], [1, '#33477E']]) +
      rg(k, 'sun', .5, .5, .5, [[0, '#FFF8DC'], [.25, '#FFE8A0', .95], [.6, '#FFD27A', .35], [1, '#FFD27A', 0]]) +
      rg(k, 'moon', .5, .5, .5, [[0, '#FFFBE8', .9], [.5, '#E8EEFF', .25], [1, '#E8EEFF', 0]]) +
      rg(k, 'dome', .7, .28, .8, [[0, '#7FE3C8'], [.35, '#22A887'], [.8, '#0E6650'], [1, '#0A4F3E']]) +
      lg(k, 'wall', 1, 0, [[0, '#D3BC8E'], [.55, '#F3E3C1'], [1, '#FCF3DF']]) +
      lg(k, 'mina', 1, 0, [[0, '#C6AE80'], [.6, '#FAF1DC'], [1, '#E6D3AB']]) +
      lg(k, 'gold', 0, 1, [[0, '#FBE08A'], [.5, '#E0A82E'], [1, '#A8751A']]) +
      lg(k, 'wood', 1, 0, [[0, '#5A3418'], [.5, '#8E5A2C'], [1, '#6A3E1C']]) +
      lg(k, 'woodv', 0, 1, [[0, '#A26A38'], [1, '#6A3E1C']]) +
      rg(k, 'warm', .5, .7, .8, [[0, '#FFF6D6'], [.45, '#FFC45E'], [1, '#B8661A']]) +
      lg(k, 'ground', 0, 1, [[0, '#E9D3AA'], [1, '#CDA772']]) +
      lg(k, 'water', 0, 1, [[0, '#E2F6FF'], [1, '#5EB6EA']]) +
      lg(k, 'stone', 0, 1, [[0, '#FBF2DF'], [1, '#C9B184']]) +
      lg(k, 'marble', 0, 1, [[0, '#FFFFFF'], [1, '#DCD8D0']]) +
      lg(k, 'blue', 0, 1, [[0, '#3F82E2'], [1, '#173F86']]) +
      lg(k, 'teal', 0, 1, [[0, '#33C2A5'], [1, '#12705C']]) +
      lg(k, 'carpet', 0, 1, [[0, '#B8322A'], [1, '#7E1C17']]) +
      lg(k, 'grass', 0, 1, [[0, '#9ED36A'], [1, '#4E9A3A']]) +
      lg(k, 'sand', 0, 1, [[0, '#F3D9A4'], [1, '#D6A866']]) +
      lg(k, 'haze', 0, 1, [[0, '#A9BCDD', .85], [1, '#E9D7C2', .9]]) +
      lg(k, 'cloud', 0, 1, [[0, '#FFFFFF'], [1, '#EEF2F8']]) +
      lg(k, 'ray', 0, 1, [[0, '#FFFFFF', .3], [1, '#FFFFFF', 0]]) +
      lg(k, 'ao', 0, 1, [[0, '#5A3A18', 0], [1, '#5A3A18', .35]]) +
      lg(k, 'pot', 1, 0, [[0, '#9C4A22'], [.6, '#D8743E'], [1, '#B4582A']]) +
      rg(k, 'skin0', .65, .35, .7, [[0, '#FBDDBC'], [.7, '#EDBE93'], [1, '#D89D70']]) +
      rg(k, 'skin1', .65, .35, .7, [[0, '#E9B888'], [.7, '#C98D5C'], [1, '#A86E42']]) +
      rg(k, 'skin2', .65, .35, .7, [[0, '#B98058'], [.7, '#8E5A36'], [1, '#6B4026']]) +
      rg(k, 'vig', .5, .45, .75, [[.62, '#3B2210', 0], [1, '#3B2210', .3]]) +
      '<filter id="' + k + 'blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5"/></filter>' +
      '<filter id="' + k + 'soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.4"/></filter>' +
      '<filter id="' + k + 'grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 .3  0 0 0 0 .2  0 0 0 0 .1  0 0 0 .55 -.2"/></filter>' +
      '<clipPath id="' + k + 'frame"><rect x="0" y="0" width="' + W + '" height="' + H + '" rx="16"/></clipPath>';
  }
  ART.skinColors = ['#EDBE93', '#C98D5C', '#8E5A36'];

  /* ══ shared scenery pieces ══ */
  var bg = ART.bg;

  bg.sky = function (p, time) {
    time = time || 'dawn';
    p.add('<rect width="' + W + '" height="' + H + '" fill="' + p.f(p.U('sky_' + time)) + '"/>');
    var R = ART.rng(7);
    if (time === 'night') {
      for (var i = 0; i < 70; i++) { var x = R() * W, y = R() * 300, r = R() * 1.6 + .5; p.col('<circle cx="' + r1(x) + '" cy="' + r1(y) + '" r="' + r1(r) + '" fill="#FFF8DC" opacity="' + r1(.4 + R() * .6) + '"/>'); }
      if (p.line) [[90, 60], [200, 120], [330, 50], [520, 90], [700, 140], [610, 40]].forEach(function (s) { star(p, s[0], s[1], 8, '#fff'); });
      p.col('<circle cx="640" cy="95" r="90" fill="' + p.U('moon') + '"/>');
      p.P('M652 60 a40 40 0 1 0 0 72 a32 32 0 1 1 0 -72z', '#FFF6C8', p.line ? '' : 'stroke-opacity=".2"');
      return;
    }
    var sun = time === 'day' ? [620, 80] : time === 'sunset' ? [150, 250] : [640, 190];
    p.col('<circle cx="' + sun[0] + '" cy="' + sun[1] + '" r="190" fill="' + p.U('sun') + '"/>');
    if (time !== 'day') p.col([[-90, -50], [-40, 0], [10, 50], [60, 100]].map(function (a) {
      var dir = sun[0] > 400 ? -1 : 1;
      return '<path d="M' + sun[0] + ' ' + sun[1] + ' L' + (sun[0] + dir * 700 + a[0] * 2) + ' ' + H + ' L' + (sun[0] + dir * 700 + a[1] * 2 + 60) + ' ' + H + ' Z" fill="' + p.U('ray') + '" opacity=".7"/>';
    }).join(''));
    p.C(sun[0], sun[1], 38, time === 'sunset' ? '#FFE3A0' : '#FFF4C8', p.line ? '' : 'stroke-opacity=".12"');
  };
  function star(p, x, y, r, c) {
    var d = ''; for (var j = 0; j < 10; j++) { var rr = j % 2 ? r * .45 : r, a = j * Math.PI / 5 - Math.PI / 2; d += (j ? 'L' : 'M') + r1(x + rr * Math.cos(a)) + ' ' + r1(y + rr * Math.sin(a)); }
    p.P(d + 'Z', c);
  }
  ART.star = star;
  bg.cloud = function (p, x, y, s) {
    var d = 'M' + x + ' ' + y + ' q' + r1(-4 * s) + ' ' + r1(-26 * s) + ' ' + r1(24 * s) + ' ' + r1(-26 * s) + ' q' + r1(8 * s) + ' ' + r1(-24 * s) + ' ' + r1(38 * s) + ' ' + r1(-16 * s) + ' q' + r1(22 * s) + ' ' + r1(-14 * s) + ' ' + r1(38 * s) + ' ' + r1(10 * s) + ' q' + r1(26 * s) + ' 0 ' + r1(22 * s) + ' ' + r1(32 * s) + ' Z';
    if (p.line) return p.P(d, '#fff');
    p.add('<path d="' + d + '" fill="#F2D6C2" opacity=".8" transform="translate(0 5)"/>');
    p.add('<path d="' + d + '" fill="' + p.U('cloud') + '"/>');
  };
  bg.birds = function (p, list) {
    (list || [[520, 70, 1.2], [560, 95, .8], [300, 110, 1], [330, 130, .7]]).forEach(function (b) {
      var x = b[0], y = b[1], s = b[2];
      p.S('M' + x + ' ' + y + ' q' + r1(8 * s) + ' ' + r1(-9 * s) + ' ' + r1(16 * s) + ' ' + r1(-1 * s) + ' q' + r1(2 * s) + ' ' + r1(s) + ' ' + r1(3 * s) + ' ' + r1(3 * s) + ' q' + r1(2 * s) + ' ' + r1(-3 * s) + ' ' + r1(4 * s) + ' ' + r1(-3 * s) + ' q' + r1(8 * s) + ' ' + r1(-8 * s) + ' ' + r1(16 * s) + ' ' + r1(s), '#2E3A55', 2);
    });
  };
  bg.haze = function (p, y) {
    if (p.line) return;
    y = y || 330;
    var h = 'M0 ' + y + ' V' + (y - 60) + ' h30 v-20 q14-26 28 0 v20 h20 V' + (y - 90) + ' h8 V' + (y - 120) + ' l4-10 4 10 V' + (y - 90) + ' h8 V' + y + ' Z' +
      'M' + (W - 120) + ' ' + y + ' V' + (y - 70) + ' q18-34 36 0 h14 V' + (y - 110) + ' h8 v-24 l4-10 4 10 v24 h8 V' + (y - 40) + ' h40 V' + y + ' Z';
    p.add('<path d="' + h + '" fill="' + p.U('haze') + '" opacity=".75"/>');
  };
  /* perspective floor between y0 and H with vanishing point (vx, vy) */
  bg.floor = function (p, y0, fill, tint, vx, step) {
    vx = vx || W / 2; var vy = y0 - 120;
    p.add('<rect x="0" y="' + y0 + '" width="' + W + '" height="' + (H - y0) + '" fill="' + p.f(fill || p.U('ground')) + '"/>');
    var ys = [], yy = y0, gap = 14; while (yy < H) { ys.push(yy); yy += gap; gap *= 1.45; } ys.push(H);
    var xs = []; for (var b = -1400; b <= W + 1400; b += step || 160) xs.push(b);
    function px(xb, y) { return vx + (xb - vx) * (y - vy) / (H - vy); }
    if (!p.line && tint) for (var yi = 0; yi < ys.length - 1; yi++) for (var xi = 0; xi < xs.length - 1; xi++) {
      if ((xi + yi) % 2) continue; var a = ys[yi], c = ys[yi + 1];
      p.add('<path d="M' + r1(px(xs[xi], a)) + ' ' + a + ' L' + r1(px(xs[xi + 1], a)) + ' ' + a + ' L' + r1(px(xs[xi + 1], c)) + ' ' + c + ' L' + r1(px(xs[xi], c)) + ' ' + c + ' Z" fill="' + tint + '" opacity=".16"/>');
    }
    xs.forEach(function (xb) { p.T('M' + r1(px(xb, y0)) + ' ' + y0 + ' L' + xb + ' ' + H); });
    ys.forEach(function (y) { p.T('M0 ' + r1(y) + ' H' + W); });
    p.col('<rect x="0" y="' + y0 + '" width="' + W + '" height="' + (H - y0) + '" fill="' + p.U('ao') + '" opacity=".5"/>');
  };

  /* the courtyard mosque, drawn in a 600-wide local frame (centre 300, base y 480) */
  bg.mosque = function (p, cx, baseY, s, opts) {
    opts = opts || {};
    p.grp('translate(' + r1(cx - 300 * s) + ' ' + r1(baseY - 480 * s) + ') scale(' + s + ')');
    var lit = opts.time === 'night' || opts.time === 'dawn' || opts.time === 'sunset';
    var win = p.line ? '#fff' : lit ? p.U('warm') : '#2C3E62';
    [[92, 132], [468, 508]].forEach(function (m) {
      var x = m[0], w = m[1] - m[0], c = x + w / 2;
      p.P('M' + x + ' 480 V215 H' + (x + w) + ' V480 Z', p.U('mina'));
      for (var y = 240; y < 480; y += 28) p.T('M' + x + ' ' + y + ' H' + (x + w));
      p.P('M' + (x - 9) + ' 262 h' + (w + 18) + ' l-6 14 h-' + (w + 6) + ' Z', p.U('gold'));
      p.P('M' + (x - 9) + ' 244 h' + (w + 18) + ' v18 h-' + (w + 18) + ' Z', p.U('teal'));
      for (var i = 0; i < 4; i++) p.T('M' + (x - 4 + i * (w + 8) / 3) + ' 262 v-12 q4-6 8 0 v12');
      p.P('M' + (x + 4) + ' 244 V205 H' + (x + w - 4) + ' V244 Z', p.U('mina'));
      p.P('M' + (x - 2) + ' 207 Q' + c + ' 150 ' + (x + w + 2) + ' 207 Z', p.U('gold'));
      p.S('M' + c + ' 179 V158', '#8A5A14', 2.4);
      p.C(c, 170, 3.5, p.U('gold'));
      p.P('M' + (c + 5) + ' 144 a8 8 0 1 0 0 12 a6 6 0 1 1 0 -12z', p.U('gold'));
      p.P('M' + (c - 7) + ' 320 v-14 q7-12 14 0 v14 z', win);
      p.P('M' + (c - 7) + ' 410 v-14 q7-12 14 0 v14 z', win);
      if (opts.adhan && x > 300) for (var a = 1; a <= 3; a++) p.S('M' + (x + w + 12 + a * 12) + ' ' + (240 - a * 10) + ' q' + (a * 8) + ' ' + (a * 12) + ' 0 ' + (a * 24), '#FFFFFF', 3, 'opacity=".9"');
    });
    p.P('M140 480 V300 H460 V480 Z', p.U('wall'));
    for (var y2 = 340; y2 < 480; y2 += 30) p.T('M140 ' + y2 + ' H460');
    for (var x3 = 150; x3 < 460; x3 += 24) p.P('M' + x3 + ' 300 v-12 q7-8 14 0 v12 Z', p.U('wall'));
    p.P('M200 290 V258 H400 V290 Z', p.U('wall'));
    for (var x4 = 214; x4 < 395; x4 += 26) p.P('M' + x4 + ' 286 v-14 q6-10 12 0 v14 Z', win);
    p.P('M196 262 C196 192 244 154 300 140 C356 154 404 192 404 262 Z', p.U('dome'));
    [-70, -35, 0, 35, 70].forEach(function (dx) { p.T('M' + (300 + dx * 1.45) + ' 262 Q' + (300 + dx * .95) + ' 170 300 141'); });
    p.col('<ellipse cx="338" cy="186" rx="30" ry="44" transform="rotate(30 338 186)" fill="' + p.fade('#ffffff', .5) + '"/>');
    p.P('M192 262 H408 v8 H192 Z', p.U('gold'));
    p.S('M300 140 V104', '#8A5A14', 2.4);
    p.C(300, 128, 6, p.U('gold')); p.C(300, 114, 4, p.U('gold'));
    p.P('M310 84 a14 14 0 1 0 0 22 a11 11 0 1 1 0 -22z', p.U('gold'));
    p.P('M140 300 H460 v22 H140 Z', p.U('teal'));
    for (var sx = 156; sx < 460; sx += 32) {
      var st = ''; for (var j = 0; j < 16; j++) { var r = j % 2 ? 4.2 : 9, an = j * Math.PI / 8; st += (j ? 'L' : 'M') + r1(sx + r * Math.cos(an)) + ' ' + r1(311 + r * Math.sin(an)); }
      p.P(st + 'Z', p.U('gold'), p.line ? 'stroke-width="1.5"' : '');
    }
    p.add('<path d="M246 480 V398 Q300 326 354 398 V480" fill="none" stroke="' + (p.line ? '#111' : '#FBF2DF') + '" stroke-width="' + (p.line ? 2.8 : 18) + '"/>');
    if (!p.line) p.add('<path d="M246 480 V398 Q300 326 354 398 V480" fill="none" stroke="#B8432F" stroke-width="18" stroke-dasharray="9 9"/>');
    else p.add('<path d="M236 480 V396 Q300 312 364 396 V480" fill="none" stroke="#111" stroke-width="2.8"/>');
    p.P('M256 480 V402 Q300 342 344 402 V480 Z', lit ? win : (p.line ? '#fff' : '#3A2412'));
    p.P('M256 480 V402 Q270 378 286 366 V480 Z', p.U('wood'));
    p.P('M344 480 V402 Q330 378 314 366 V480 Z', p.U('wood'));
    [266, 276, 324, 334].forEach(function (x) { p.T('M' + x + ' 392 V478'); });
    [172, 398].forEach(function (x) {
      p.P('M' + x + ' 436 V392 Q' + (x + 15) + ' 364 ' + (x + 30) + ' 392 V436 Z', win);
      for (var g = 1; g < 4; g++) p.T('M' + (x + g * 7.5) + ' 378 V436');
      for (var g2 = 1; g2 < 4; g2++) p.T('M' + x + ' ' + (392 + g2 * 11) + ' H' + (x + 30));
      p.P('M' + (x - 6) + ' 436 h42 v7 h-42 Z', p.U('stone'));
    });
    if (lit) [226, 374].forEach(function (x) {
      p.glow(x, 410, 18);
      p.P('M' + (x - 6) + ' 402 h12 l-2 16 h-8 Z', win);
      p.P('M' + (x - 8) + ' 398 h16 l-3 4 h-10 Z', p.U('gold'));
    });
    p.P('M236 480 h128 v8 h-128 Z', p.U('stone')); p.P('M226 488 h148 v9 h-148 Z', p.U('stone'));
    p.col('<rect x="140" y="466" width="320" height="14" fill="' + p.U('ao') + '"/>');
    if (!opts.noPlants) [[208, 478], [392, 478]].forEach(function (q) {
      p.P('M' + (q[0] - 12) + ' ' + (q[1] - 18) + ' h24 l-4 20 h-16 Z', p.U('pot'));
      p.C(q[0] - 8, q[1] - 28, 10, '#3E9B4F'); p.C(q[0] + 8, q[1] - 28, 10, '#3E9B4F'); p.C(q[0], q[1] - 38, 12, '#57B368');
    });
    p.end();
  };

  bg.palm = function (p, x, baseY, s) {
    p.grp('translate(' + r1(x - 44 * s) + ' ' + r1(baseY - 500 * s) + ') scale(' + s + ')');
    p.add('<path d="M44 500 Q56 420 40 300" fill="none" stroke="' + (p.line ? '#111' : '#4A2C14') + '" stroke-width="' + (p.line ? 22 : 20) + '" stroke-linecap="round"/>');
    p.add('<path d="M44 500 Q56 420 40 300" fill="none" stroke="' + (p.line ? '#fff' : '#9A6A3C') + '" stroke-width="' + (p.line ? 16 : 17) + '" stroke-linecap="round"/>');
    for (var ty = 312; ty < 495; ty += 13) { var tx = 40 + (ty - 300) * .05 + Math.sin((ty - 300) / 60) * 6; p.T('M' + r1(tx - 7) + ' ' + ty + ' q7 5 15 0'); }
    function frond(x0, y0, cx, cy, x1, y1) {
      var left = [], right = [];
      for (var i = 0; i <= 14; i++) {
        var t = i / 14, mt = 1 - t;
        var X = mt * mt * x0 + 2 * mt * t * cx + t * t * x1, Y = mt * mt * y0 + 2 * mt * t * cy + t * t * y1;
        var dx = 2 * mt * (cx - x0) + 2 * t * (x1 - cx), dy = 2 * mt * (cy - y0) + 2 * t * (y1 - cy), L = Math.sqrt(dx * dx + dy * dy) || 1;
        var nx = -dy / L, ny = dx / L, w = 22 * Math.sin(Math.PI * Math.min(1, t * 1.1)) + 2;
        left.push([X + nx * w + dx / L * 6, Y + ny * w + dy / L * 6]); right.push([X - nx * w + dx / L * 6, Y - ny * w + dy / L * 6]);
        if (!p.line && i > 0 && i < 14) {
          p.add('<path d="M' + r1(X) + ' ' + r1(Y) + ' L' + r1(left[i][0]) + ' ' + r1(left[i][1]) + '" stroke="' + (i % 2 ? '#2F7D3E' : '#4FAE60') + '" stroke-width="4.5" stroke-linecap="round"/>');
          p.add('<path d="M' + r1(X) + ' ' + r1(Y) + ' L' + r1(right[i][0]) + ' ' + r1(right[i][1]) + '" stroke="' + (i % 2 ? '#3E9B4F' : '#2A6E37') + '" stroke-width="4.5" stroke-linecap="round"/>');
        }
      }
      if (p.line) p.P('M' + x0 + ' ' + y0 + left.map(function (q) { return ' L' + r1(q[0]) + ' ' + r1(q[1]); }).join('') + right.reverse().map(function (q) { return ' L' + r1(q[0]) + ' ' + r1(q[1]); }).join('') + 'Z', '#fff');
      p.S('M' + x0 + ' ' + y0 + ' Q' + cx + ' ' + cy + ' ' + x1 + ' ' + y1, '#2A5E2F', 2.4);
    }
    frond(40, 302, 0, 270, -40, 320); frond(40, 302, 90, 262, 150, 300); frond(40, 302, 20, 240, -10, 210);
    frond(40, 302, 70, 230, 110, 220); frond(40, 302, -10, 300, -30, 370); frond(40, 302, 90, 300, 120, 360);
    [[30, 318], [44, 322], [56, 316], [38, 330], [50, 332]].forEach(function (q) { p.C(q[0], q[1], 5, '#D9822B'); });
    p.end();
  };

  bg.tree = function (p, x, baseY, s, fruit) {
    p.grp('translate(' + r1(x) + ' ' + r1(baseY) + ') scale(' + s + ')');
    p.shadow(10, 0, 90, 10, .25);
    p.P('M-14 0 Q-10 -60 -18 -120 L18 -120 Q10 -60 16 0 Z', p.g('#8A5A32'));
    p.T('M-6 -20 q4 -30 -2 -60'); p.T('M6 -40 q-3 -30 3 -60');
    p.S('M-12 -100 Q-40 -130 -60 -140', '#6B4224', 6); p.S('M12 -110 Q40 -140 62 -150', '#6B4224', 6);
    [[-60, -170, 56], [0, -205, 66], [60, -170, 56], [-30, -140, 50], [36, -136, 50]].forEach(function (c) { p.C(c[0], c[1], c[2], p.g('#4E9A3A', 'r')); });
    p.col('<ellipse cx="22" cy="-215" rx="36" ry="24" fill="' + p.fade('#D6F5B0', .6) + '"/>');
    if (fruit) [[-50, -160], [-14, -190], [30, -200], [52, -150], [-70, -190], [8, -150], [70, -180]].forEach(function (c) { p.C(c[0], c[1], 7, fruit); });
    p.end();
  };

  bg.flowers = function (p, list) {
    list.forEach(function (fl) {
      var x = fl[0], y = fl[1], c = fl[2] || '#E5574A';
      p.S('M' + x + ' ' + y + ' q-3 -14 0 -26', '#3E8A3A', 2.4);
      p.E(x - 6, y - 12, 6, 3, '#57B368', 'transform="rotate(-30 ' + (x - 6) + ' ' + (y - 12) + ')"');
      for (var i = 0; i < 5; i++) { var a = i * Math.PI * 2 / 5; p.C(x + 6 * Math.cos(a), y - 28 + 6 * Math.sin(a), 5, c); }
      p.C(x, y - 28, 3.6, '#F5CC5A');
    });
  };

  /* ══ backgrounds ══ */
  bg.courtyard = function (p, o) {
    bg.sky(p, o.time);
    if (o.time !== 'night') { bg.cloud(p, 70, 120, 1.2); bg.cloud(p, 420, 80, .8); bg.birds(p); }
    bg.haze(p, 330);
    bg.mosque(p, o.mx || 430, 330, o.ms || .78, o);
    bg.floor(p, 336, null, '#B88A50', o.mx || 430);
    if (!o.noPalm) bg.palm(p, o.palmX || 70, 340, .78);
  };
  bg.interior = function (p, o) {
    // back wall with arcade
    p.R(0, 0, W, 360, p.U('wall'));
    for (var y = 40; y < 360; y += 40) p.T('M0 ' + y + ' H' + W);
    // the qibla wall is on the LEFT: every worshipper in the hall faces left, towards the mihrab
    var cols = [250, 360, 470, 580, 690, 800];
    cols.forEach(function (x, i) {
      if (i === cols.length - 1) return;
      var nx = cols[i + 1], m = (x + nx) / 2;
      p.P('M' + (x + 14) + ' 360 V170 Q' + m + ' 90 ' + (nx - 14) + ' 170 V360 Z', p.line ? '#fff' : '#E8D3A8');
      p.P('M' + (m - 22) + ' 250 V200 Q' + m + ' 168 ' + (m + 22) + ' 200 V250 Z', o.time === 'night' ? (p.line ? '#fff' : '#22335E') : (p.line ? '#fff' : '#9DCBEB'));
      p.T('M' + m + ' 172 V250 M' + (m - 22) + ' 222 H' + (m + 22));
    });
    cols.forEach(function (x) { p.R(x - 12, 150, 24, 210, p.U('mina')); p.R(x - 16, 140, 32, 14, p.U('gold')); p.R(x - 16, 346, 32, 14, p.U('stone')); });
    // qibla wall panel with tiles
    p.R(0, 0, 238, 360, p.g('#E3CC9C'));
    for (var ty = 30; ty < 360; ty += 30) for (var tx = 15; tx < 238; tx += 30) p.P('M' + tx + ' ' + (ty - 9) + ' l9 9 l-9 9 l-9 -9 Z', p.line ? '#fff' : '#CDB27A', p.line ? 'stroke-width="1"' : 'stroke-opacity=".15"');
    // mihrab
    p.P('M30 360 V190 Q115 50 200 190 V360 Z', p.U('gold'));
    p.P('M48 360 V198 Q115 86 182 198 V360 Z', p.U('teal'));
    p.P('M66 360 V210 Q115 122 164 210 V360 Z', p.line ? '#fff' : '#0E5B4A');
    for (var r = 0; r < 5; r++) p.T('M' + (72 + r * 4) + ' ' + (216 + r * 22) + ' Q115 ' + (130 + r * 22) + ' ' + (158 - r * 4) + ' ' + (216 + r * 22));
    star(p, 115, 166, 13, p.U('gold'));
    p.add('<text x="115" y="40" text-anchor="middle" font-family="Tajawal" font-weight="900" font-size="20" fill="' + (p.line ? '#111' : '#7A4E0A') + '">القِبلة</text>');
    p.S('M150 36 l30 0 m-8 -6 l8 6 l-8 6', '#7A4E0A', 3, 'transform="rotate(180 165 36)"');
    // minbar (stairs, beside the mihrab)
    p.P('M214 470 V300 l30 -36 l30 36 V470 Z', p.U('wood'));
    p.P('M214 470 L274 470 L274 340 Z', p.line ? '#fff' : '#7A4A22');
    for (var st2 = 0; st2 < 6; st2++) p.T('M' + (214 + st2 * 10) + ' ' + (470 - st2 * 22) + ' h' + (60 - st2 * 10));
    p.P('M236 300 l8 -20 l8 20 Z', p.U('gold'));
    // light beams from the windows
    p.col('<path d="M400 200 L340 560 L520 560 L460 200 Z" fill="' + p.U('ray') + '" opacity=".55"/><path d="M620 200 L560 560 L740 560 L680 200 Z" fill="' + p.U('ray') + '" opacity=".4"/>');
    // carpet with prayer rows
    p.R(0, 360, W, 200, p.U('carpet'));
    var rows = [372, 400, 440, 494, 560];
    rows.forEach(function (y, i) {
      if (i === rows.length - 1) return;
      var h = rows[i + 1] - y, n = 12 - i * 2;
      p.add('<path d="M0 ' + y + ' H' + W + '" stroke="' + (p.line ? '#111' : '#E7C26A') + '" stroke-width="' + (p.line ? 2 : 3) + '"/>');
      for (var a = 0; a <= n; a++) { var ax = a * W / n; p.T('M' + r1(ax) + ' ' + (y + h) + ' V' + (y + h * .45) + ' Q' + r1(ax + W / n / 2) + ' ' + (y + 2) + ' ' + r1(ax + W / n) + ' ' + (y + h * .45), p.line ? '' : 'stroke="#E7C26A" stroke-opacity=".6"'); }
    });
    // chandelier
    p.S('M520 0 V60', '#8A5A14', 2.4);
    p.P('M460 60 h120 l-14 22 h-92 Z', p.U('gold'));
    for (var l = 0; l < 7; l++) { var lx = 470 + l * 16.6; p.glow(lx, 92, 10, '#FFE7A0', .7); p.P('M' + (lx - 4) + ' 82 h8 l-1 14 h-6 Z', p.line ? '#fff' : p.U('warm')); }
  };
  bg.home = function (p, o) {
    var t = o.time || 'day';
    p.R(0, 0, W, 400, p.line ? '#fff' : '#F6E7CB');
    if (!p.line) for (var x = 0; x < W; x += 60) for (var y = 20; y < 400; y += 60) p.add('<path d="M' + x + ' ' + y + ' l10 10 l-10 10 l-10 -10 Z" fill="#E9D3AA" opacity=".55"/>');
    // window
    p.grp('translate(' + (o.winX || 120) + ' 70)');
    p.R(-10, -10, 220, 230, p.U('wood'), 6);
    p.add('<clipPath id="' + p.k + 'win"><rect x="0" y="0" width="200" height="210" rx="4"/></clipPath><g clip-path="url(#' + p.k + 'win)">');
    p.add('<g transform="scale(.25 .375)">'); bg.sky(p, t); p.end();
    if (t !== 'night') bg.cloud(p, 30, 60, .5);
    bg.mosque(p, 100, 230, .32, { time: t, noPlants: true });
    p.end();
    p.P('M100 0 V210 M0 105 H200', '#fff', 'fill="none" stroke-width="' + (p.line ? 2.8 : 6) + '" stroke="' + (p.line ? '#111' : '#7A4A22') + '"');
    p.R(-18, 214, 236, 14, p.U('wood'), 4);
    p.end();
    if (t === 'night') p.col('<rect width="' + W + '" height="400" fill="#0B1433" opacity=".35"/>');
    // shelf with books and a lantern
    var sx = o.shelfX || 520;
    p.R(sx, 150, 200, 12, p.U('wood'), 3);
    ['#C0392B', '#2F6FD6', '#1A9B7B', '#8E44AD', '#D4A017'].forEach(function (c, i) { p.R(sx + 12 + i * 20, 96 + (i % 2) * 8, 17, 54 - (i % 2) * 8, p.g(c), 2); p.T('M' + (sx + 14 + i * 20) + ' ' + (110 + (i % 2) * 8) + ' h12'); });
    p.glow(sx + 160, 120, 26, '#FFE7A0', t === 'night' ? .8 : .45);
    p.P('M' + (sx + 148) + ' 100 h24 l-4 46 h-16 Z', p.line ? '#fff' : p.U('warm'));
    p.P('M' + (sx + 144) + ' 94 h32 l-6 8 h-20 Z', p.U('gold')); p.P('M' + (sx + 146) + ' 146 h28 v6 h-28 Z', p.U('gold'));
    // floor + rug
    p.R(0, 400, W, 160, p.U('woodv'));
    for (var fy = 420; fy < H; fy += 26) p.T('M0 ' + fy + ' H' + W);
    p.col('<rect x="0" y="390" width="' + W + '" height="20" fill="' + p.U('ao') + '"/>');
    p.P('M120 470 L680 470 L740 556 L60 556 Z', p.g(o.rug || '#2F5E9E', 'v'));
    p.P('M150 478 L650 478 L700 548 L100 548 Z', 'none', 'fill="none"');
    for (var tz = 0; tz < 12; tz++) p.T('M' + (110 + tz * 52) + ' 556 l20 -14');
  };
  bg.garden = function (p, o) {
    bg.sky(p, o.time || 'day'); bg.cloud(p, 120, 110, 1); bg.cloud(p, 520, 70, .9); bg.birds(p);
    p.P('M0 330 Q200 280 420 320 T800 300 V560 H0 Z', p.U('grass'));
    p.P('M0 400 Q260 360 520 400 T800 390 V560 H0 Z', p.g('#6DB44A', 'v'));
    if (o.palms) { bg.palm(p, 110, 420, .8); bg.palm(p, 250, 380, .6); bg.palm(p, 640, 400, .75); bg.palm(p, 730, 380, .55); }
    else if (o.trees) { bg.tree(p, 160, 400, 1.1, '#E5574A'); bg.tree(p, 300, 360, .7, '#F5A623'); }
    else if (!o.noTree) { bg.tree(p, 120, 360, .9, '#E5574A'); bg.tree(p, 690, 340, .7, '#F5A623'); }
    bg.flowers(p, [[40, 520, '#E5574A'], [80, 540, '#F5CC5A'], [700, 520, '#C77DFF'], [750, 545, '#E5574A'], [640, 548, '#F5CC5A']]);
  };
  bg.street = function (p, o) {
    bg.sky(p, o.time || 'day'); bg.cloud(p, 520, 70, .8);
    var houses = [[0, 150, 230, '#E9C8A0'], [150, 120, 190, '#F2DDB8'], [270, 160, 250, '#E3BE94'], [430, 140, 200, '#F2DDB8'], [570, 130, 240, '#E9C8A0'], [700, 110, 210, '#F2DDB8']];
    houses.forEach(function (h) {
      var x = h[0], w = h[1], top = 400 - h[2];
      p.R(x, top, w, h[2], p.g(h[3]));
      p.R(x - 4, top - 10, w + 8, 12, p.g(ART.dark(h[3], .2)));
      p.P('M' + (x + w / 2 - 18) + ' 400 V' + (400 - 60) + ' Q' + (x + w / 2) + ' ' + (400 - 88) + ' ' + (x + w / 2 + 18) + ' ' + (400 - 60) + ' V400 Z', p.U('wood'));
      p.R(x + 18, top + 30, 36, 46, p.U('wood'), 3); for (var g = 1; g < 4; g++) p.T('M' + (x + 18 + g * 9) + ' ' + (top + 30) + ' v46');
      if (w > 130) { p.R(x + w - 52, top + 30, 34, 40, p.line ? '#fff' : '#9DCBEB', 3); p.T('M' + (x + w - 35) + ' ' + (top + 30) + ' v40'); }
    });
    p.R(0, 400, W, 160, p.U('stone'));
    for (var y = 410; y < H; y += 18) for (var x = (y / 18 % 2) * 20; x < W; x += 40) p.T('M' + x + ' ' + y + ' h34', 'stroke-opacity=".18"');
    // market stall
    p.R(560, 330, 180, 90, p.U('wood'), 4);
    p.P('M540 330 L760 330 L740 290 L560 290 Z', p.line ? '#fff' : '#C0392B');
    for (var st = 0; st < 6; st++) p.P('M' + (560 + st * 30) + ' 290 h15 l-4 40 h-15 Z', p.line ? '#fff' : '#F5F0E6', p.line ? '' : 'stroke-opacity=".2"');
    [[590, '#E5574A'], [630, '#F5A623'], [670, '#7CB342'], [710, '#8E44AD']].forEach(function (f) { for (var i = 0; i < 4; i++) p.C(f[0] + (i % 2) * 10, 322 - Math.floor(i / 2) * 9, 7, f[1]); });
  };
  bg.makkah = function (p, o) {
    bg.sky(p, o.time || 'day');
    if ((o.time || 'day') !== 'night') bg.cloud(p, 90, 90, .9);
    // arcade of the Haram
    p.R(0, 200, W, 140, p.U('marble'));
    for (var x = 0; x < W; x += 50) { p.P('M' + (x + 6) + ' 340 V258 Q' + (x + 25) + ' 228 ' + (x + 44) + ' 258 V340 Z', p.line ? '#fff' : '#CFC6B4'); }
    p.R(0, 196, W, 12, p.U('gold'));
    [60, 740].forEach(function (mx) { p.R(mx - 14, 60, 28, 150, p.U('marble')); p.P('M' + (mx - 16) + ' 62 Q' + mx + ' 20 ' + (mx + 16) + ' 62 Z', p.U('gold')); p.R(mx - 18, 110, 36, 10, p.U('gold')); });
    // white mataf floor
    p.R(0, 330, W, 230, p.U('marble'));
    [[400, 450, 360, 92], [400, 450, 300, 74], [400, 450, 240, 58]].forEach(function (e) { p.add('<ellipse cx="' + e[0] + '" cy="' + e[1] + '" rx="' + e[2] + '" ry="' + e[3] + '" fill="none" ' + p.TH + '/>'); });
    // the Ka'bah (no face — a cube with its black covering and gold band)
    p.shadow(380, 470, 120, 16, .3);
    p.P('M300 470 L300 300 L400 280 L400 452 Z', p.line ? '#fff' : '#111');
    p.P('M400 452 L400 280 L500 300 L500 470 Z', p.line ? '#fff' : '#272727');
    p.P('M300 300 L400 280 L500 300 L400 320 Z', p.line ? '#fff' : '#3A3A3A');
    p.P('M300 330 L400 312 L400 330 L300 348 Z', p.U('gold')); p.P('M400 312 L500 330 L500 348 L400 330 Z', p.U('gold'));
    p.P('M430 452 L430 380 L466 386 L466 458 Z', p.U('gold'));
    if (!p.line) p.add('<path d="M400 280 L400 452" stroke="#555" stroke-width="1"/>');
    // pilgrims circling (tiny, white, faceless)
    var R = ART.rng(11);
    for (var i = 0; i < 46; i++) {
      var a = R() * Math.PI * 2, rr = .55 + R() * .45, px = 400 + Math.cos(a) * 330 * rr, py = 452 + Math.sin(a) * 88 * rr;
      if (py < 440 && px > 290 && px < 510) continue;
      var sc = .5 + (py - 360) / 300;
      p.E(px, py - 14 * sc, 6 * sc, 12 * sc, p.line ? '#fff' : '#F7F7F2', p.line ? 'stroke-width="1.3"' : '');
      p.C(px, py - 30 * sc, 4.5 * sc, p.line ? '#fff' : ART.skinColors[i % 3], p.line ? 'stroke-width="1.3"' : '');
    }
  };
  bg.arafah = function (p, o) {
    bg.sky(p, o.time || 'day'); bg.cloud(p, 520, 80, .9);
    p.P('M120 330 Q260 150 330 170 Q380 140 460 200 Q560 260 640 330 Z', p.g('#B98B5A', 'v'));
    p.T('M220 300 l40 -30 M300 240 l30 20 M420 230 l30 40 M500 280 l20 -20');
    p.R(334, 132, 12, 46, p.U('marble')); p.R(330, 130, 20, 6, p.U('stone'));
    p.R(0, 330, W, 230, p.U('sand'));
    for (var r = 0; r < 3; r++) for (var t = 0; t < 7; t++) {
      var x = 30 + t * 115 + (r % 2) * 55, y = 360 + r * 60, s = .7 + r * .2;
      p.P('M' + x + ' ' + y + ' l' + (40 * s) + ' ' + (-36 * s) + ' l' + (40 * s) + ' ' + (36 * s) + ' Z', p.g('#FFFFFF', 'v'));
      p.T('M' + (x + 40 * s) + ' ' + (y - 36 * s) + ' V' + y);
    }
  };
  bg.valley = function (p, o) {
    bg.sky(p, o.time || 'day');
    p.P('M0 300 L90 190 L170 260 L260 150 L380 280 L470 180 L590 270 L690 170 L800 260 V340 H0 Z', p.g('#A9774A', 'v'));
    p.T('M90 190 l20 40 M260 150 l-20 50 M470 180 l14 36 M690 170 l-18 40');
    p.R(0, 330, W, 230, p.U('sand'));
    if (!p.line) for (var i = 0; i < 6; i++) p.add('<path d="M' + (i * 150) + ' ' + (420 + (i % 3) * 30) + ' q60 -20 120 0" stroke="#E8C487" stroke-width="3" fill="none" opacity=".7"/>');
    bg.palm(p, 690, 400, .55);
  };
  bg.vignette = function (p, o) {
    var c = o.color || '#1A9B7B';
    p.add('<rect width="' + W + '" height="' + H + '" fill="' + p.f(ART.light(c, .82)) + '"/>');
    p.col('<circle cx="400" cy="280" r="380" fill="' + p.fade(ART.light(c, .55), .75) + '"/>');
    // eight-point star lattice
    for (var x = -40; x < W + 80; x += 80) for (var y = -40; y < H + 80; y += 80) {
      var d = ''; for (var j = 0; j < 16; j++) { var rr = j % 2 ? 13 : 26, a = j * Math.PI / 8; d += (j ? 'L' : 'M') + r1(x + rr * Math.cos(a)) + ' ' + r1(y + rr * Math.sin(a)); }
      p.add('<path d="' + d + 'Z" fill="none" stroke="' + (p.line ? '#111' : ART.dark(c, .1)) + '" stroke-opacity="' + (p.line ? .35 : .18) + '" stroke-width="1.4"/>');
    }
    p.add('<circle cx="400" cy="280" r="205" fill="' + p.f('#FFFDF6') + '" ' + p.ST + '/>');
    p.add('<circle cx="400" cy="280" r="190" fill="none" stroke="' + (p.line ? '#111' : c) + '" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round"/>');
  };

  /* ══ main entry ══ */
  ART.paint = function (rc, line) {
    var p = new Painter(!!line);
    var B = bg[rc.bg || 'courtyard']; B(p, rc);
    (rc.props || []).forEach(function (q) { var fn = ART.prop[q.t]; if (fn) fn(p, q); else console.warn('no prop', q.t); });
    (rc.figs || []).forEach(function (q) { ART.fig(p, q); });
    (rc.front || []).forEach(function (q) { var fn = ART.prop[q.t]; if (fn) fn(p, q); });
    if (!line) p.add('<rect width="' + W + '" height="' + H + '" fill="' + p.U('vig') + '"/>');
    var defs = line ? '<clipPath id="' + p.k + 'frame"><rect x="0" y="0" width="' + W + '" height="' + H + '" rx="16"/></clipPath>' : commonDefs(p.k);
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img"><defs>' + defs + p.d.join('') + '</defs><g clip-path="url(#' + p.k + 'frame)">' + p.o.join('') + '</g>' +
      '<rect x="1.5" y="1.5" width="' + (W - 3) + '" height="' + (H - 3) + '" rx="16" fill="none" stroke="' + (line ? '#111' : '#3B2614') + '" stroke-width="3"/></svg>';
  };
  ART.Painter = Painter;
})();
