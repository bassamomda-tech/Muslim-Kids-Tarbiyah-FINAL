/* ════════════════════════════════════════════════════════════════
   coloring-scenes.js — 20 full-page coloring & activity pages.
   Only shapes that draw ACCURATELY by maths or simple geometry:
   Islamic geometric patterns, mosque, houses, lantern, cup, mihrab,
   stars & moon — plus imagination activities that use the child's
   own hand: connect-the-dots, complete-the-symmetry, finish-the-
   pattern, and draw-your-own frames.
   Pure outlines (fill:none) so children colour them.
   window.COLOR_SCENES = [{theme, ar, en, draw()}]
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var S = 'stroke="#111" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"';
  var T = 'stroke="#111" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
  var G = 'stroke="#9aa0a6" fill="none" stroke-width="2" stroke-dasharray="2 10" stroke-linecap="round" stroke-linejoin="round"';
  var DASH = 'stroke="#111" fill="none" stroke-width="2" stroke-dasharray="3 11" stroke-linecap="round"';

  /* ---------- geometry helpers (all maths-accurate) ---------- */
  function nstar(cx, cy, R, r, n, rot, attr) {
    var p = '', i; rot = (rot == null ? -90 : rot) * Math.PI / 180;
    for (i = 0; i < 2 * n; i++) { var a = rot + i * Math.PI / n, rr = (i % 2 ? r : R); p += (i ? 'L' : 'M') + (cx + rr * Math.cos(a)).toFixed(1) + ' ' + (cy + rr * Math.sin(a)).toFixed(1); }
    return '<path d="' + p + 'Z" ' + (attr || S) + '/>';
  }
  function ngon(cx, cy, R, n, rot, attr) {
    var p = '', i; rot = (rot == null ? -90 : rot) * Math.PI / 180;
    for (i = 0; i < n; i++) { var a = rot + i * 2 * Math.PI / n; p += (i ? 'L' : 'M') + (cx + R * Math.cos(a)).toFixed(1) + ' ' + (cy + R * Math.sin(a)).toFixed(1); }
    return '<path d="' + p + 'Z" ' + (attr || S) + '/>';
  }
  function circ(cx, cy, r, attr) { return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" ' + (attr || S) + '/>'; }
  function dot(x, y, r) { return circ(x, y, r, T); }
  function petals(cx, cy, R, n, rw, rl, attr) {
    var s = '', i;
    for (i = 0; i < n; i++) { var a = i * 2 * Math.PI / n, x = (cx + R * Math.cos(a)).toFixed(1), y = (cy + R * Math.sin(a)).toFixed(1), d = (a * 180 / Math.PI + 90).toFixed(1); s += '<ellipse cx="' + x + '" cy="' + y + '" rx="' + rw + '" ry="' + rl + '" transform="rotate(' + d + ' ' + x + ' ' + y + ')" ' + (attr || T) + '/>'; }
    return s;
  }
  function cloud(x, y, s) { return '<path d="M' + x + ' ' + y + ' a' + s + ' ' + s + ' 0 0 1 ' + (s * 1.4) + ' 0 a' + (s * 0.9) + ' ' + (s * 0.9) + ' 0 0 1 ' + (s * 1.2) + ' 0 a' + s + ' ' + s + ' 0 0 1 ' + (s * 0.4) + ' ' + (s * 0.5) + ' h' + (-s * 3.4) + ' a' + s + ' ' + s + ' 0 0 1 ' + (s * 0.4) + ' ' + (-s * 0.5) + 'Z" ' + T + '/>'; }
  function crescent(cx, cy, R, attr) { // accurate lune: outer circle minus an offset cut-circle
    var ox = 0.55 * R, rc = 0.95 * R;                 // cut circle offset right + radius
    var x = (R * R - rc * rc + ox * ox) / (2 * ox);   // intersection x (rel. to centre)
    var y = Math.sqrt(R * R - x * x);                 // intersection y
    var tx = (cx + x).toFixed(1), t1 = (cy - y).toFixed(1), t2 = (cy + y).toFixed(1);
    return '<path d="M' + tx + ' ' + t1 +
      ' A' + R + ' ' + R + ' 0 1 0 ' + tx + ' ' + t2 +          // outer arc (left, major)
      ' A' + rc.toFixed(1) + ' ' + rc.toFixed(1) + ' 0 0 1 ' + tx + ' ' + t1 + 'Z" ' + (attr || S) + '/>'; // inner cut arc
  }
  function nd(n, x, y) { return '<circle cx="' + x + '" cy="' + y + '" r="4.5" fill="#111"/><text x="' + (x + 11) + '" y="' + (y - 9) + '" font-family="Nunito,sans-serif" font-size="23" font-weight="800" fill="#111">' + n + '</text>'; }
  function dots(pts) { var s = '', i; for (i = 0; i < pts.length; i++) s += nd(i + 1, pts[i][0], pts[i][1]); return s; }
  function cap(ar, en) {
    return '<text x="350" y="892" text-anchor="middle" font-family="Tajawal,sans-serif" font-size="25" font-weight="700" fill="#111" direction="rtl">' + ar + '</text>' +
      (en ? '<text x="350" y="918" text-anchor="middle" font-family="Nunito,sans-serif" font-size="16" font-weight="700" fill="#666">' + en + '</text>' : '');
  }

  /* outer frame + corner stars */
  function frame() {
    return '<rect x="14" y="14" width="672" height="932" rx="22" ' + S + '/>' +
      '<rect x="30" y="30" width="640" height="900" rx="14" ' + T + '/>' +
      nstar(50, 50, 16, 7, 5, -90, T) + nstar(650, 50, 16, 7, 5, -90, T) +
      nstar(50, 910, 16, 7, 5, -90, T) + nstar(650, 910, 16, 7, 5, -90, T);
  }
  function ground(y) { return '<path d="M40 ' + y + ' h620" ' + S + '/>'; }

  var SC = [];
  function add(theme, ar, en, draw) { SC.push({ theme: theme, ar: ar, en: en, draw: draw }); }

  /* ══ 1 — Khatam 8-point star medallion (geometry) ══ */
  add('pattern', 'نجمةُ الخَتم', 'The Khatam Star — colour the medallion', function () {
    var cx = 350, cy = 480, g = frame();
    g += circ(cx, cy, 270, T) + circ(cx, cy, 250, S);
    g += ngon(cx, cy, 250, 4, -90, S) + ngon(cx, cy, 250, 4, -45, S);   // two squares → 8-point star
    g += ngon(cx, cy, 130, 8, -90 + 22.5, S);                            // inner octagon
    g += nstar(cx, cy, 84, 40, 8, -90, S);                               // centre star
    var i, ring = ''; for (i = 0; i < 16; i++) { var a = Math.PI * 2 * i / 16; ring += dot((cx + 270 * Math.cos(a)).toFixed(0), (cy + 270 * Math.sin(a)).toFixed(0), 5); }
    g += ring;
    return g;
  });

  /* ══ 2 — Flower of life (overlapping circles, exact) ══ */
  add('pattern', 'زهرةُ الأشكال', 'Flower of Shapes — overlapping circles', function () {
    var cx = 350, cy = 470, r = 84, g = frame(), i, a;
    g += circ(cx, cy, 3 * r, S) + circ(cx, cy, 3 * r + 16, T);
    g += circ(cx, cy, r, T);
    for (i = 0; i < 6; i++) { a = Math.PI * i / 3; g += circ((cx + r * Math.cos(a)).toFixed(1), (cy + r * Math.sin(a)).toFixed(1), r, T); }
    for (i = 0; i < 6; i++) { a = Math.PI * i / 3; g += circ((cx + 2 * r * Math.cos(a)).toFixed(1), (cy + 2 * r * Math.sin(a)).toFixed(1), r, T); }
    for (i = 0; i < 6; i++) { a = Math.PI / 6 + Math.PI * i / 3; g += circ((cx + r * Math.sqrt(3) * Math.cos(a)).toFixed(1), (cy + r * Math.sqrt(3) * Math.sin(a)).toFixed(1), r, T); }
    return g;
  });

  /* ══ 3 — Carpet of stars (repeating grid) ══ */
  add('pattern', 'بِساطُ النجوم', 'Carpet of Stars — a repeating tile', function () {
    var g = frame(), col, row;
    for (row = 0; row < 5; row++) for (col = 0; col < 4; col++) {
      var x = 160 + col * 127, y = 248 + row * 112;
      g += nstar(x, y, 52, 30, 8, -90, S);
    }
    for (row = 0; row < 4; row++) for (col = 0; col < 3; col++) {
      g += ngon(160 + col * 127 + 63.5, 248 + row * 112 + 56, 24, 4, -90, T);
    }
    return g;
  });

  /* ══ 4 — Round rosette / mandala (petal rings) ══ */
  add('pattern', 'الزخرفةُ الدائرية', 'The Round Rosette', function () {
    var cx = 350, cy = 480, g = frame(), i, a;
    g += circ(cx, cy, 252, S) + circ(cx, cy, 230, T);
    g += petals(cx, cy, 205, 20, 9, 26, T);
    g += petals(cx, cy, 150, 16, 11, 30, T);
    g += petals(cx, cy, 96, 12, 12, 26, S);
    g += petals(cx, cy, 44, 8, 10, 20, T) + circ(cx, cy, 20, S);
    var ring = ''; for (i = 0; i < 24; i++) { a = Math.PI * 2 * i / 24; ring += dot((cx + 230 * Math.cos(a)).toFixed(0), (cy + 230 * Math.sin(a)).toFixed(0), 4); }
    g += ring;
    return g;
  });

  /* ══ 5 — Zellij border tiles (rows of motifs) ══ */
  add('pattern', 'شريطُ الزليج', 'Zellij Border Tiles', function () {
    var g = frame(), r, c, ys = [220, 360, 500, 640, 780];
    for (r = 0; r < ys.length; r++) {
      var y = ys[r];
      g += '<path d="M70 ' + (y - 64) + ' h560" ' + T + '/><path d="M70 ' + (y + 64) + ' h560" ' + T + '/>';
      for (c = 0; c < 6; c++) {
        var x = 122 + c * 91.2;
        g += (r % 2 === 0) ? ngon(x, y, 36, 4, -90, S) : nstar(x, y, 32, 18, 8, -90, S);
        if (c < 5) g += dot(x + 45.6, y, 6);
      }
    }
    return g;
  });

  /* ══ 6 — Crescent moon & stars ══ */
  add('moon', 'الهلالُ والنجوم', 'Crescent Moon & Stars', function () {
    var g = frame();
    g += crescent(360, 440, 195, S);
    g += nstar(150, 230, 30, 14, 5, -90, S) + nstar(560, 250, 26, 12, 5, -90, S);
    g += nstar(120, 470, 22, 10, 5, -90, S) + nstar(580, 520, 30, 14, 6, -90, S);
    g += nstar(200, 720, 26, 12, 5, -90, S) + nstar(470, 740, 22, 10, 5, -90, S) + nstar(350, 800, 18, 8, 5, -90, T);
    g += dot(110, 360, 6) + dot(610, 380, 6) + dot(150, 600, 6) + dot(560, 660, 6) + dot(300, 250, 5);
    return g;
  });

  /* ══ 7 — The neighbourhood mosque ══ */
  add('mosque', 'مسجدُ الحيّ', 'The Neighbourhood Mosque', function () {
    var g = frame();
    g += crescent(560, 200, 46, S) + nstar(150, 210, 22, 10, 5, -90, T) + nstar(120, 360, 16, 7, 5, -90, T);
    g += cloud(430, 250, 22);
    // hall
    g += '<rect x="250" y="470" width="200" height="250" ' + S + '/>';
    // dome + finial
    g += '<path d="M250 470 Q350 320 450 470Z" ' + S + '/>';
    g += '<path d="M340 470 Q350 380 360 470" ' + T + '/>';
    g += circ(350, 332, 9, S) + '<path d="M350 323 v-20" ' + S + '/>' + crescent(350, 296, 12, S);
    // minarets
    g += '<rect x="206" y="430" width="34" height="290" ' + S + '/><path d="M206 430 q17 -34 34 0Z" ' + S + '/>' + circ(223, 420, 7, S);
    g += '<rect x="460" y="430" width="34" height="290" ' + S + '/><path d="M460 430 q17 -34 34 0Z" ' + S + '/>' + circ(477, 420, 7, S);
    // door + windows
    g += '<path d="M322 720 V612 Q350 566 378 612 V720Z" ' + S + '/><path d="M350 612 V720" ' + T + '/>';
    g += '<path d="M276 590 V548 Q291 524 306 548 V590Z" ' + T + '/><path d="M394 590 V548 Q409 524 424 548 V590Z" ' + T + '/>';
    g += ground(720) + nstar(150, 800, 20, 9, 5, -90, T) + nstar(560, 800, 20, 9, 5, -90, T) + dot(350, 830, 7);
    return g;
  });

  /* ══ 8 — The houses of our street ══ */
  add('houses', 'بيوتُ حيّنا', 'The Houses of Our Street', function () {
    var g = frame();
    function house(x, by, w, h, dome) {
      var s = '<rect x="' + x + '" y="' + (by - h) + '" width="' + w + '" height="' + h + '" ' + S + '/>';
      if (dome) s += '<path d="M' + x + ' ' + (by - h) + ' Q' + (x + w / 2) + ' ' + (by - h - w * 0.62) + ' ' + (x + w) + ' ' + (by - h) + 'Z" ' + S + '/>' + circ(x + w / 2, by - h - w * 0.62 - 4, 5, T);
      else s += '<path d="M' + (x - 10) + ' ' + (by - h) + ' L' + (x + w / 2) + ' ' + (by - h - h * 0.45) + ' L' + (x + w + 10) + ' ' + (by - h) + 'Z" ' + S + '/>';
      s += '<rect x="' + (x + w / 2 - 17) + '" y="' + (by - 52) + '" width="34" height="52" ' + T + '/>';
      s += '<rect x="' + (x + 14) + '" y="' + (by - h + 22) + '" width="26" height="26" ' + T + '/><rect x="' + (x + w - 40) + '" y="' + (by - h + 22) + '" width="26" height="26" ' + T + '/>';
      return s;
    }
    g += house(96, 740, 140, 200, true) + house(284, 740, 150, 250, false) + house(478, 740, 126, 180, true);
    function tree(x, by, h) { return '<path d="M' + x + ' ' + by + ' v-' + h + '" ' + S + '/>' + circ(x, by - h - 24, 30, S) + circ(x - 22, by - h - 4, 22, T) + circ(x + 22, by - h - 4, 22, T); }
    g += tree(70, 740, 70);
    g += ground(740) + '<path d="M160 740 h44 M300 740 h44 M448 740 h44" ' + T + '/>';
    g += crescent(560, 200, 40, S) + nstar(150, 200, 22, 10, 5, -90, T) + cloud(330, 210, 22);
    g += nstar(120, 820, 18, 8, 5, -90, T) + nstar(580, 820, 18, 8, 5, -90, T) + dot(350, 840, 7);
    return g;
  });

  /* ══ 9 — The Ramadan lantern (geometric) ══ */
  add('lantern', 'فانوسُ رمضان', 'The Ramadan Lantern', function () {
    var g = frame();
    g += '<path d="M350 60 V104" ' + T + '/>' + circ(350, 116, 12, S);
    g += '<rect x="338" y="150" width="24" height="26" ' + S + '/>';                         // top knob
    g += '<path d="M296 220 L334 178 H366 L404 220 Z" ' + S + '/>';                          // cap
    g += '<path d="M286 256 L324 220 H376 L414 256 V544 L376 580 H324 L286 544 Z" ' + S + '/>'; // body
    g += '<path d="M312 260 V540 M388 260 V540" ' + T + '/>';                                // panel edges
    g += '<path d="M324 320 H376 M324 480 H376" ' + T + '/>';
    g += '<path d="M350 330 L378 400 L350 470 L322 400 Z" ' + T + '/>' + nstar(350, 400, 22, 11, 5, -90, T);
    g += '<path d="M300 580 H400 L420 616 H280 Z" ' + S + '/>';                              // base
    g += '<rect x="326" y="616" width="48" height="30" ' + S + '/>';
    g += nstar(150, 250, 24, 11, 5, -90, T) + nstar(560, 250, 24, 11, 5, -90, T) + crescent(150, 470, 34, S);
    g += nstar(580, 480, 22, 10, 5, -90, T) + dot(120, 660, 7) + dot(600, 680, 7) + nstar(350, 760, 22, 10, 5, -90, T);
    return g;
  });

  /* ══ 10 — The champion's cup (symmetric) ══ */
  add('cup', 'كأسُ الأبطال', 'The Champion’s Cup', function () {
    var g = frame();
    g += '<path d="M272 320 H428 V366 Q428 478 350 508 Q272 478 272 366 Z" ' + S + '/>';   // bowl
    g += '<path d="M272 344 Q198 348 214 414 Q220 446 262 444" ' + S + '/>';               // left handle
    g += '<path d="M428 344 Q502 348 486 414 Q480 446 438 444" ' + S + '/>';               // right handle
    g += '<rect x="340" y="508" width="20" height="62" ' + S + '/>';                       // stem
    g += '<path d="M298 600 H402 L416 632 H284 Z" ' + S + '/>' + '<rect x="312" y="570" width="76" height="30" ' + S + '/>';
    g += nstar(350, 404, 42, 20, 5, -90, S);
    // ribbon + sparkles
    g += '<path d="M298 632 q-34 60 -10 110 l30 -22 22 26 q14 -64 -8 -116" ' + T + '/>';
    g += '<path d="M402 632 q34 60 10 110 l-30 -22 -22 26 q-14 -64 8 -116" ' + T + '/>';
    g += nstar(150, 230, 24, 11, 5, -90, T) + nstar(560, 230, 24, 11, 5, -90, T) + nstar(120, 420, 16, 7, 5, -90, T) + nstar(600, 430, 16, 7, 5, -90, T);
    g += dot(180, 760, 7) + dot(540, 770, 7) + nstar(350, 820, 18, 8, 5, -90, T);
    return g;
  });

  /* ══ 11 — The mihrab arch (geometry + lamp) ══ */
  add('mihrab', 'محرابُ المسجد', 'The Mihrab Arch', function () {
    var g = frame();
    g += '<path d="M200 770 V470 Q200 300 350 300 Q500 300 500 470 V770" ' + S + '/>';
    g += '<path d="M236 770 V472 Q236 336 350 336 Q464 336 464 472 V770" ' + T + '/>';
    g += '<rect x="170" y="430" width="30" height="340" ' + S + '/><rect x="500" y="430" width="30" height="340" ' + S + '/>';
    g += circ(185, 420, 8, T) + circ(515, 420, 8, T);
    g += crescent(350, 268, 22, S);
    // hanging lamp
    g += '<path d="M350 336 V392" ' + T + '/>' + '<path d="M320 392 Q350 432 380 392 Q372 420 350 420 Q328 420 320 392 Z" ' + S + '/>' + circ(350, 400, 6, T);
    // geometric lattice inside
    g += nstar(350, 560, 64, 36, 8, -90, T) + ngon(350, 560, 32, 8, -90 + 22.5, T);
    g += '<path d="M260 660 H440 M260 700 H440" ' + T + '/>';
    var i, p = ''; for (i = 0; i < 6; i++) { var x = 272 + i * 30; p += '<path d="M' + x + ' 700 l10 -16 10 16Z" ' + T + '/>'; } g += p;
    return g;
  });

  /* ══ 12 — The night sky (stars & moon) ══ */
  add('moon', 'سماءُ الليل', 'The Night Sky', function () {
    var g = frame();
    g += crescent(420, 300, 92, S);
    var pts = [[140, 220, 18], [240, 160, 12], [560, 210, 16], [600, 330, 10], [120, 420, 14], [520, 450, 12], [180, 560, 16], [340, 540, 22], [560, 600, 12], [120, 640, 14], [450, 650, 16], [300, 720, 12], [600, 730, 14], [200, 760, 18], [480, 770, 10]];
    var sp = ''; pts.forEach(function (p) { sp += nstar(p[0], p[1], p[2], p[2] * 0.46, 5, -90, S); }); g += sp;
    g += '<path d="M140 220 L240 160 L340 230 L460 188" ' + T + '/>';
    g += cloud(160, 830, 26) + cloud(520, 830, 26) + dot(350, 860, 7);
    return g;
  });

  /* ══ 13 — Connect the dots: star ══ */
  add('dots', 'صِلِ النقاط: النجمة', 'Connect the Dots — Star (1→10)', function () {
    var g = frame(), cx = 350, cy = 460, R = 232, r = 96, pts = [], i;
    for (i = 0; i < 10; i++) { var a = -Math.PI / 2 + i * Math.PI / 5, rr = (i % 2 ? r : R); pts.push([(cx + rr * Math.cos(a)).toFixed(0) * 1, (cy + rr * Math.sin(a)).toFixed(0) * 1]); }
    g += dots(pts);
    g += cap('صِلِ النقاطَ من ١ إلى ١٠ ثمّ لوّنِ النجمة', 'Join the dots, then colour it in!');
    return g;
  });

  /* ══ 14 — Connect the dots: crescent ══ */
  add('dots', 'صِلِ النقاط: الهلال', 'Connect the Dots — Crescent (1→14)', function () {
    var g = frame();
    var pts = [[430, 250], [340, 268], [262, 318], [212, 392], [194, 470], [212, 545], [258, 612], [338, 656], [430, 668],
    [378, 596], [338, 534], [320, 470], [336, 402], [378, 332]];
    g += dots(pts);
    g += nstar(560, 250, 26, 12, 5, -90, S) + nstar(580, 470, 18, 8, 5, -90, T);
    g += cap('صِلِ النقاطَ من ١ إلى ١٤ لِترى الهلال', 'Join the dots to reveal the crescent moon!');
    return g;
  });

  /* ══ 15 — Connect the dots: house ══ */
  add('dots', 'صِلِ النقاط: البيت', 'Connect the Dots — House (1→5)', function () {
    var g = frame();
    var pts = [[230, 720], [480, 720], [480, 500], [355, 400], [230, 500]];
    g += dots(pts);
    g += '<rect x="316" y="624" width="46" height="96" ' + G + '/>' + '<rect x="270" y="540" width="40" height="40" ' + G + '/><rect x="400" y="540" width="40" height="40" ' + G + '/>';
    g += crescent(560, 230, 36, S) + nstar(150, 230, 22, 10, 5, -90, S);
    g += cap('صِلِ النقاطَ من ١ إلى ٥، ثمّ ارسمِ البابَ والنوافذ', 'Join 1→5, then add the door & windows yourself');
    return g;
  });

  /* ══ 16 — Complete the symmetry: lantern ══ */
  add('symmetry', 'أكمِلِ النصف: الفانوس', 'Finish the Other Half — Lantern', function () {
    var g = frame();
    g += '<path d="M350 200 V840" ' + DASH + '/>';
    // left silhouette only (everything x<=350)
    g += '<path d="M350 230 L330 230 L330 254 L300 296 L300 540 L330 580 L330 612 L350 612" ' + S + '/>';
    g += '<path d="M350 116 L338 116" ' + S + '/>' + '<path d="M350 150 L338 150 L338 176 L350 176" ' + T + '/>';
    g += '<path d="M312 320 H350 M312 480 H350" ' + T + '/>';
    g += '<path d="M350 340 L322 400 L350 460" ' + T + '/>';
    // little guide ticks on the right
    g += dot(385, 296, 4) + dot(400, 470, 4) + dot(385, 580, 4);
    g += nstar(150, 250, 22, 10, 5, -90, T) + nstar(560, 250, 22, 10, 5, -90, T) + crescent(560, 470, 30, S);
    g += cap('ارسمِ النصفَ الآخرَ مثلَ النصفِ الأول', 'Draw the missing half to match, then colour');
    return g;
  });

  /* ══ 17 — Complete the symmetry: mosque ══ */
  add('symmetry', 'أكمِلِ النصف: المسجد', 'Finish the Other Half — Mosque', function () {
    var g = frame();
    g += '<path d="M350 240 V820" ' + DASH + '/>';
    // left silhouette
    g += '<path d="M350 300 Q250 300 250 470 L250 720 L350 720" ' + S + '/>';
    g += circ(350, 290, 10, S) + '<path d="M350 280 v-22" ' + S + '/>';
    g += '<rect x="206" y="430" width="34" height="290" ' + S + '/><path d="M206 430 q17 -34 34 0Z" ' + S + '/>';
    g += '<path d="M350 720 V612 Q322 566 322 612" ' + T + '/>';   // half door
    g += dot(450, 470, 4) + dot(494, 560, 4) + dot(450, 720, 4);
    g += crescent(560, 220, 38, S) + nstar(150, 220, 22, 10, 5, -90, T) + ground(720);
    g += cap('أكمِلِ نصفَ المسجدِ الآخرَ ثمّ لوّنه', 'Complete the other half of the mosque');
    return g;
  });

  /* ══ 18 — Finish the pattern ══ */
  add('pattern', 'أكمِلِ الزخرفة', 'Finish the Pattern — continue each row', function () {
    var g = frame(), ys = [240, 470, 700], i, j;
    var kinds = ['diamond', 'star', 'scallop'];
    for (i = 0; i < 3; i++) {
      var y = ys[i], kind = kinds[i];
      g += '<path d="M80 ' + (y - 70) + ' h540" ' + T + '/><path d="M80 ' + (y + 70) + ' h540" ' + T + '/>';
      for (j = 0; j < 7; j++) {
        var x = 110 + j * 70, attr = j < 3 ? S : G;
        if (kind === 'diamond') g += ngon(x, y, 28, 4, -90, attr);
        else if (kind === 'star') g += nstar(x, y, 28, 15, 6, -90, attr);
        else g += '<path d="M' + (x - 30) + ' ' + y + ' a30 30 0 0 1 60 0" ' + attr + '/>';
      }
    }
    g += cap('أكمِلْ كلَّ صفٍّ بنفسِ النقشِ المنقّط', 'Trace the dotted shapes to finish each row');
    return g;
  });

  /* ══ 19 — Decorate your prayer rug ══ */
  add('draw', 'زيّن سجادتك', 'Decorate Your Prayer Rug', function () {
    var g = frame(), i, p = '';
    // fringe
    for (i = 0; i < 22; i++) { var x = 186 + i * 15.6; p += '<path d="M' + x + ' 232 v-18 M' + x + ' 788 v18" ' + T + '/>'; } g += p;
    g += '<rect x="180" y="232" width="340" height="556" ' + S + '/>';
    g += '<rect x="212" y="264" width="276" height="492" ' + T + '/>';
    // mihrab arch hint at top of field
    g += '<path d="M250 756 V470 Q250 340 350 340 Q450 340 450 470 V756" ' + G + '/>';
    // idea legend
    g += '<rect x="556" y="250" width="96" height="170" rx="10" ' + T + '/>';
    g += '<text x="604" y="276" text-anchor="middle" font-family="Nunito,sans-serif" font-size="13" font-weight="800" fill="#666">IDEAS</text>';
    g += ngon(604, 312, 18, 4, -90, T) + nstar(604, 360, 18, 9, 6, -90, T) + petals(604, 404, 0, 1, 0, 0, T) + circ(604, 404, 7, T) + petals(604, 404, 16, 6, 5, 9, T);
    g += cap('زيّنِ السجادةَ بنقوشِك أنت!', 'Fill the rug with your own patterns');
    return g;
  });

  /* ══ 20 — Draw what you love ══ */
  add('draw', 'ارسم ما تحب', 'Draw What You Love', function () {
    var g = frame();
    g += '<rect x="120" y="240" width="460" height="520" rx="18" ' + S + '/>';
    g += '<rect x="146" y="266" width="408" height="468" rx="12" ' + G + '/>';
    g += nstar(150, 270, 16, 7, 5, -90, T) + nstar(550, 270, 16, 7, 5, -90, T) + nstar(150, 730, 16, 7, 5, -90, T) + nstar(550, 730, 16, 7, 5, -90, T);
    g += crescent(610, 130, 26, S) + nstar(90, 150, 18, 8, 5, -90, T) + cloud(300, 130, 18);
    g += cap('ارسمْ أجملَ ما رأيتَ أو تعلّمتَه اليوم', 'Draw the best thing you saw or learned today');
    return g;
  });

  window.COLOR_SCENES = SC;
})();
