/* ═══ book2 · art-props — objects and symbols for the scenes ═══
   Every prop: ART.prop.name(p, {x, y, s, ...}) — (x, y) is the point the object stands on / centres on. */
(function () {
  'use strict';
  var ART = window.ART, r1 = ART.r1, P = ART.prop;
  function G(p, q, w) { p.grp('translate(' + r1(q.x != null ? q.x : 400) + ' ' + r1(q.y != null ? q.y : 300) + ') scale(' + (q.s || 1) + ')' + (q.rot ? ' rotate(' + q.rot + ')' : '')); }
  function sparkle(p, x, y, r) { p.P('M' + x + ' ' + (y - r) + ' Q' + x + ' ' + y + ' ' + (x + r) + ' ' + y + ' Q' + x + ' ' + y + ' ' + x + ' ' + (y + r) + ' Q' + x + ' ' + y + ' ' + (x - r) + ' ' + y + ' Q' + x + ' ' + y + ' ' + x + ' ' + (y - r) + ' Z', '#FFE58A', p.line ? 'stroke-width="1.6"' : 'stroke-opacity=".25"'); }
  P.sparkles = function (p, q) { (q.at || [[300, 120], [500, 150], [420, 90]]).forEach(function (a) { sparkle(p, a[0], a[1], a[2] || 12); }); };
  P.halo = function (p, q) { p.glow(q.x, q.y, q.r || 110, q.c || '#FFF1B8', .75); if (!p.line) for (var i = 0; i < 6; i++) sparkle(p, q.x + Math.cos(i) * (q.r || 110) * .9, q.y + Math.sin(i * 1.7) * (q.r || 110) * .6, 8); };

  /* ── prayer things ── */
  P.mat = function (p, q) {
    G(p, q); var c = q.c || '#B8322A', w = q.w || 180;
    p.shadow(0, 4, w * .55, 8, .2);
    p.P('M' + (-w / 2) + ' 0 L' + (w / 2) + ' 0 L' + (w / 2 - 22) + ' -38 L' + (-w / 2 + 22) + ' -38 Z', p.g(c, 'v'));
    p.P('M' + (-w / 2 + 16) + ' -5 L' + (w / 2 - 16) + ' -5 L' + (w / 2 - 30) + ' -33 L' + (-w / 2 + 30) + ' -33 Z', p.g(ART.light(c, .15), 'v'), p.line ? 'stroke-width="1.6"' : '');
    p.T('M' + (-w / 2 + 40) + ' -8 Q' + (-w / 2 + 54) + ' -34 ' + (-w / 2 + 68) + ' -8');
    for (var i = 0; i < 5; i++) p.T('M' + (w / 2 + 2) + ' ' + (-3 - i * 5) + ' l7 0');
    p.end();
  };
  P.fountain = function (p, q) {
    G(p, q);
    p.shadow(-20, 70, 128, 20, .3);
    p.P('M-112 0 V46 Q0 90 112 46 V0', p.U('blue'));
    for (var zx = -100; zx <= 100; zx += 20) { var u = zx / 112, zy = 24 + 20 * (1 - u * u); p.P('M' + zx + ' ' + (zy - 9) + ' l7 9 l-7 9 l-7 -9 Z', (zx / 20) % 2 ? '#FBF2DF' : p.U('teal'), p.line ? 'stroke-width="1.6"' : ''); }
    p.E(0, 0, 112, 24, p.U('stone')); p.E(0, 0, 98, 17, p.U('water'));
    p.col('<ellipse cx="33" cy="-2" rx="40" ry="6" fill="none" stroke="#fff" stroke-width="1.5" opacity=".7"/><ellipse cx="-45" cy="-4" rx="30" ry="4" fill="#fff" opacity=".35"/>');
    p.P('M-15 -2 V-74 H15 V-2 Z', p.U('stone')); p.T('M-15 -54 H15'); p.T('M-15 -22 H15');
    p.P('M-21 -72 Q0 -110 21 -72 Z', p.U('teal')); p.C(0, -112, 4, p.U('gold'));
    p.P('M15 -48 h22 a4 4 0 0 1 4 4 v6 h-7 v-3 h-19 Z', p.U('gold')); p.P('M-15 -48 h-22 a4 4 0 0 0 -4 4 v6 h7 v-3 h19 Z', p.U('gold'));
    p.S('M37 -38 Q41 -26 47 -14', '#7CCBF2', 5); p.S('M-37 -38 V-4', '#7CCBF2', 5);
    p.end();
  };
  P.clock = function (p, q) {
    G(p, q);
    p.C(0, 0, 44, p.U('gold')); p.C(0, 0, 36, p.f('#FFFDF6'));
    for (var i = 0; i < 12; i++) { var a = i * Math.PI / 6; p.add('<path d="M' + r1(30 * Math.cos(a)) + ' ' + r1(30 * Math.sin(a)) + ' L' + r1(34 * Math.cos(a)) + ' ' + r1(34 * Math.sin(a)) + '" stroke="#111" stroke-width="2"/>'); }
    p.S('M0 0 L0 -24', '#2B2118', 4); p.S('M0 0 L17 8', '#2B2118', 4); p.C(0, 0, 3, '#2B2118');
    p.end();
  };
  P.times = function (p, q) { // the five prayer positions of the sun over a mosque
    G(p, q);
    p.add('<path d="M-300 120 Q0 -260 300 120" fill="none" stroke="' + (p.line ? '#111' : '#E0A82E') + '" stroke-width="3" stroke-dasharray="6 10"/>');
    var pts = [[-270, 100, '#F4A460', 'الفجر'], [0, -70, '#FFD54F', 'الظهر'], [150, -16, '#FFC107', 'العصر'], [270, 100, '#FF7043', 'المغرب'], [-140, 40, '#3949AB', 'العشاء']];
    pts.forEach(function (t, i) {
      p.glow(t[0], t[1], 30, t[2], .6);
      if (i === 4) p.P('M' + (t[0] + 8) + ' ' + (t[1] - 20) + ' a20 20 0 1 0 0 40 a16 16 0 1 1 0 -40z', '#FFF6C8'); else p.C(t[0], t[1], 22, t[2]);
      p.add('<text x="' + t[0] + '" y="' + (t[1] + 48) + '" text-anchor="middle" font-family="Tajawal" font-weight="900" font-size="20" fill="' + (p.line ? '#111' : '#2B2118') + '">' + t[3] + '</text>');
    });
    p.end();
  };
  P.compass = function (p, q) {
    G(p, q);
    p.C(0, 0, 50, p.U('gold')); p.C(0, 0, 40, p.f('#FFFDF6'));
    p.grp('rotate(-90)'); p.P('M0 -36 L9 0 L0 36 L-9 0 Z', p.f('#C0392B')); p.P('M0 0 L9 0 L0 36 L-9 0 Z', p.f('#2B2118')); p.end();
    p.add('<text x="-58" y="6" text-anchor="end" font-family="Tajawal" font-weight="900" font-size="18" fill="' + (p.line ? '#111' : '#12705C') + '">القِبلة ←</text>');
    p.end();
  };
  P.jug = function (p, q) { // ibriq for wudu + water drops
    G(p, q);
    p.shadow(0, 4, 50, 8, .25);
    p.P('M-34 0 Q-50 -50 -26 -80 L-20 -100 L20 -100 L26 -80 Q50 -50 34 0 Z', p.g('#3F82E2'));
    p.P('M-24 -100 h48 v-10 h-48 Z', p.U('gold'));
    p.P('M36 -50 Q70 -60 80 -96 L88 -92 Q78 -50 40 -34 Z', p.g('#3F82E2'));
    p.limb('M-34 -70 Q-64 -60 -36 -28', '#3F82E2', 7);
    p.T('M-30 -40 Q0 -30 30 -40'); p.T('M-34 -60 Q0 -52 34 -60');
    [[96, -80, 7], [104, -56, 6], [100, -30, 5]].forEach(function (d) { p.P('M' + d[0] + ' ' + (d[1] - d[2] * 1.6) + ' Q' + (d[0] + d[2]) + ' ' + d[1] + ' ' + d[0] + ' ' + (d[1] + d[2]) + ' Q' + (d[0] - d[2]) + ' ' + d[1] + ' ' + d[0] + ' ' + (d[1] - d[2] * 1.6) + ' Z', '#9ED8FF'); });
    p.end();
  };
  P.miswak = function (p, q) { G(p, q); p.limb('M-60 0 L60 -14', '#C9A16B', 12); p.P('M60 -20 l18 -2 l-2 14 l-16 2 Z', '#F3E3C1'); for (var i = 0; i < 4; i++) p.T('M' + (62 + i * 4) + ' -20 v12'); p.end(); };
  P.attar = function (p, q) { G(p, q); p.shadow(0, 2, 26, 6, .2); p.P('M-20 0 Q-30 -30 -10 -46 V-58 H10 V-46 Q30 -30 20 0 Z', p.g('#8E44AD', 'r')); p.P('M-12 -58 h24 l-4 -22 h-16 Z', p.U('gold')); p.col('<ellipse cx="8" cy="-26" rx="5" ry="12" fill="#fff" opacity=".4"/>'); p.end(); };
  P.lantern = function (p, q) {
    G(p, q);
    if (q.hang) p.S('M0 -150 V-92', '#8A5A14', 2.4);
    p.glow(0, -40, 70, '#FFE7A0', .75);
    p.P('M-26 -88 h52 l-10 -12 h-32 Z', p.U('gold'));
    p.P('M-28 -88 Q-36 -40 -22 0 H22 Q36 -40 28 -88 Z', p.line ? '#fff' : p.U('warm'));
    for (var i = -1; i <= 1; i++) p.T('M' + (i * 12) + ' -88 Q' + (i * 16) + ' -44 ' + (i * 10) + ' 0');
    p.P('M-26 0 h52 v8 h-52 Z', p.U('gold')); p.P('M-8 -100 Q0 -118 8 -100 Z', p.U('gold'));
    p.end();
  };
  P.quran = function (p, q) { // the Mushaf on its wooden stand (rahl)
    G(p, q);
    p.shadow(0, 2, 70, 9, .25);
    p.P('M-60 0 L0 -40 L60 0 L50 6 L0 -26 L-50 6 Z', p.U('wood'));
    p.P('M-60 -50 L0 -36 L60 -50 L60 -14 L0 0 L-60 -14 Z', p.U('wood'));
    p.P('M-54 -54 Q-26 -66 0 -44 Q26 -66 54 -54 L54 -22 Q26 -32 0 -10 Q-26 -32 -54 -22 Z', p.f('#FFFBEF'));
    p.P('M-54 -54 Q-26 -66 0 -44 L0 -10 Q-26 -32 -54 -22 Z', p.f('#FFF6E0'), p.line ? '' : 'stroke-opacity=".2"');
    for (var i = 0; i < 4; i++) { p.T('M-46 ' + (-48 + i * 7) + ' Q-24 ' + (-56 + i * 7) + ' -6 ' + (-40 + i * 7)); p.T('M6 ' + (-40 + i * 7) + ' Q24 ' + (-56 + i * 7) + ' 46 ' + (-48 + i * 7)); }
    p.glow(0, -46, 40, '#FFF6C8', .45);
    p.end();
  };
  P.book = function (p, q) { G(p, q); p.P('M-30 0 L0 -6 L30 0 L30 -40 L0 -46 L-30 -40 Z', p.f(q.c || '#1A9B7B')); p.P('M-27 -3 L0 -9 L0 -45 L-27 -39 Z', p.f('#FFFBEF')); p.P('M27 -3 L0 -9 L0 -45 L27 -39 Z', p.f('#FFFBEF')); for (var i = 0; i < 3; i++) { p.T('M-22 ' + (-34 + i * 8) + ' l17 -4'); p.T('M5 ' + (-38 + i * 8) + ' l17 4'); } p.end(); };
  P.tasbih = function (p, q) {
    G(p, q);
    for (var i = 0; i < 33; i++) { var a = i / 33 * Math.PI * 2, x = Math.cos(a) * 46, y = Math.sin(a) * 34; p.C(x, y, 5.5, p.g(q.c || '#1A9B7B', 'r'), p.line ? 'stroke-width="1.4"' : 'stroke-opacity=".3"'); }
    p.P('M-6 34 h12 l-2 22 h-8 Z', p.U('gold')); p.S('M-4 56 l-6 18 M4 56 l6 18 M0 56 v20', '#D4A017', 3);
    p.end();
  };
  P.shield = function (p, q) {
    G(p, q);
    p.glow(0, -10, 120, '#FFF1B8', .6);
    p.P('M0 -110 Q60 -90 90 -96 Q96 10 0 90 Q-96 10 -90 -96 Q-60 -90 0 -110 Z', p.U('gold'));
    p.P('M0 -92 Q50 -76 74 -80 Q78 2 0 70 Q-78 2 -74 -80 Q-50 -76 0 -92 Z', p.g(q.c || '#1A9B7B', 'r'));
    p.P('M14 -46 a26 26 0 1 0 0 44 a20 20 0 1 1 0 -44z', p.U('gold'));
    ART.star(p, 30, -30, 10, p.U('gold'));
    p.end();
  };
  P.scale = function (p, q) { // the balance (mizan) — heavy side holds a glowing pan
    G(p, q);
    p.P('M-12 120 h24 l-4 -200 h-16 Z', p.U('gold')); p.P('M-60 128 h120 v14 h-120 Z', p.U('gold'));
    p.add('<path d="M-120 -66 L120 -94" stroke="' + (p.line ? '#111' : '#A8751A') + '" stroke-width="8" stroke-linecap="round"/>');
    p.C(0, -82, 10, p.U('gold'));
    [[-120, -66, 30], [120, -94, 0]].forEach(function (k) { var x = k[0], y = k[1], d = k[2]; p.S('M' + x + ' ' + y + ' L' + (x - 40) + ' ' + (y + 70 + d) + ' M' + x + ' ' + y + ' L' + (x + 40) + ' ' + (y + 70 + d), '#A8751A', 2); p.P('M' + (x - 50) + ' ' + (y + 70 + d) + ' Q' + x + ' ' + (y + 100 + d) + ' ' + (x + 50) + ' ' + (y + 70 + d) + ' Z', p.U('gold')); });
    if (q.heavy) { p.glow(-120, -10, 40, '#FFF1B8', .9); sparkle(p, -120, -20, 14); }
    p.end();
  };
  P.tent = function (p, q) { // tent held up by its central pillar (عمود)
    G(p, q);
    p.shadow(0, 4, 170, 14, .3);
    p.P('M-170 0 L0 -150 L170 0 Z', p.g('#E8D3A8', 'v'));
    p.P('M-40 0 L0 -150 L40 0 Z', p.line ? '#fff' : '#5C3A1A');
    p.add('<path d="M0 -160 V0" stroke="' + (p.line ? '#111' : '#D4A017') + '" stroke-width="10"/>');
    p.glow(0, -150, 30, '#FFF1B8', .8);
    for (var i = -3; i <= 3; i++) if (i) p.T('M' + (i * 40) + ' 0 L0 -150');
    p.S('M-170 0 L-210 20 M170 0 L210 20', '#8A5A32', 2.4);
    p.end();
  };
  P.tracker = function (p, q) {
    G(p, q);
    p.R(-170, -70, 340, 140, p.f('#FFFDF6'), 18);
    ['الفجر', 'الظهر', 'العصر', 'المغرب', 'العشاء'].forEach(function (n, i) {
      var x = 130 - i * 65;
      p.C(x, -6, 24, p.g('#1A9B7B', 'r'));
      p.S('M' + (x - 10) + ' -6 l7 8 l14 -16', '#FFFFFF', 5);
      p.add('<text x="' + x + '" y="44" text-anchor="middle" font-family="Tajawal" font-weight="900" font-size="17" fill="' + (p.line ? '#111' : '#2B2118') + '">' + n + '</text>');
    });
    p.end();
  };
  P.greenDome = function (p, q) { // the Prophet's Mosque — shown only as its green dome and minaret
    G(p, q);
    p.shadow(0, 6, 190, 14, .3);
    p.R(-180, -70, 360, 74, p.U('wall'));
    for (var x = -160; x < 170; x += 40) p.P('M' + x + ' 4 V-30 Q' + (x + 14) + ' -50 ' + (x + 28) + ' -30 V4 Z', p.line ? '#fff' : '#C9B38A');
    p.R(-60, -110, 120, 42, p.U('wall'));
    p.P('M-56 -110 Q-56 -200 0 -216 Q56 -200 56 -110 Z', p.g('#2E9E5B', 'r'));
    p.T('M-30 -112 Q-26 -180 0 -214'); p.T('M30 -112 Q26 -180 0 -214');
    p.S('M0 -216 V-244', '#A8751A', 3); p.P('M8 -262 a12 12 0 1 0 0 18 a9 9 0 1 1 0 -18z', p.U('gold'));
    p.R(150, -220, 28, 152, p.U('mina')); p.P('M146 -220 Q164 -270 182 -220 Z', p.g('#2E9E5B', 'r')); p.R(144, -170, 40, 10, p.U('gold'));
    p.end();
  };
  P.mihrab = function (p, q) { // a quiet niche with a lantern — used for stories of the righteous
    G(p, q);
    p.P('M-130 0 V-180 Q0 -330 130 -180 V0 Z', p.U('gold'));
    p.P('M-110 0 V-176 Q0 -300 110 -176 V0 Z', p.U('teal'));
    p.P('M-90 0 V-170 Q0 -272 90 -170 V0 Z', p.line ? '#fff' : '#0E4A3C');
    for (var r = 0; r < 4; r++) p.T('M' + (-84 + r * 6) + ' ' + (-160 + r * 26) + ' Q0 ' + (-262 + r * 26) + ' ' + (84 - r * 6) + ' ' + (-160 + r * 26));
    P.lantern(p, { x: 0, y: -110, s: .8, hang: true });
    p.end();
  };
  P.door = function (p, q) { // a grand glowing gateway (Bab al-Rayyan, Jannah)
    G(p, q);
    p.glow(0, -150, 180, '#FFF1B8', .8);
    p.P('M-150 0 V-200 Q0 -380 150 -200 V0 Z', p.U('gold'));
    p.P('M-126 0 V-196 Q0 -350 126 -196 V0 Z', p.g(q.c || '#1A9B7B', 'r'));
    p.P('M-100 0 V-190 Q0 -320 100 -190 V0 Z', p.line ? '#fff' : '#FFF6D6');
    p.col('<path d="M-100 0 V-190 Q0 -320 100 -190 V0 Z" fill="' + p.fade('#FFE7A0', .7) + '"/>');
    p.P('M-100 0 V-190 Q-60 -260 -20 -290 L-30 -6 Z', p.U('wood')); p.P('M100 0 V-190 Q60 -260 20 -290 L30 -6 Z', p.U('wood'));
    [-70, -50, 50, 70].forEach(function (x) { p.T('M' + x + ' -210 V-6'); });
    for (var i = 0; i < 9; i++) { var a = Math.PI * (1 - i / 8); ART.star(p, 138 * Math.cos(a), -200 - 150 * Math.sin(a) * .9, 6, '#FFF6C8'); }
    p.R(-70, -420, 140, 46, p.f('#FFFDF6'), 23); p.add('<text x="0" y="-386" text-anchor="middle" font-family="Amiri" font-weight="700" font-size="30" fill="' + (p.line ? '#111' : '#7A4E0A') + '">' + (q.label || '') + '</text>');
    p.end();
  };
  P.gift = function (p, q) {
    G(p, q); p.glow(0, -60, 110, '#FFF1B8', .6);
    p.P('M-80 0 V-90 H80 V0 Z', p.g(q.c || '#8E44AD')); p.P('M-90 -90 V-122 H90 V-90 Z', p.g(ART.light(q.c || '#8E44AD', .1)));
    p.P('M-14 0 V-122 H14 V0 Z', p.U('gold'));
    p.P('M0 -122 Q-60 -190 -64 -140 Q-60 -118 0 -122 Z', p.U('gold')); p.P('M0 -122 Q60 -190 64 -140 Q60 -118 0 -122 Z', p.U('gold'));
    sparkle(p, -110, -140, 14); sparkle(p, 110, -100, 10);
    p.end();
  };
  P.table = function (p, q) { // a low table (sufra) with dates, water, bowl and bread
    G(p, q);
    p.shadow(0, 8, 190, 14, .3);
    p.E(0, 0, 190, 34, p.g('#B8322A', 'v'));
    p.E(0, -6, 170, 26, p.f('#F7EBD3'));
    p.E(-90, -18, 40, 12, p.U('gold')); for (var i = 0; i < 7; i++) p.E(-112 + i * 8, -24 + (i % 2) * 4, 6, 4, '#6B3415');
    p.P('M-10 -10 h40 l-4 -46 h-32 Z', p.f('#DDF1FB')); p.P('M-8 -24 h36 l-2 -22 h-32 Z', p.f('#9FD8F5'), p.line ? '' : 'stroke-opacity=".2"');
    p.E(90, -16, 44, 14, p.g('#2F6FD6', 'v')); p.E(90, -22, 36, 8, p.f('#E6A04B'));
    p.E(150, 4, 30, 10, p.f('#E9C27E')); p.T('M128 2 q22 -6 44 0');
    if (q.steam !== false) p.S('M80 -36 q-8 -14 0 -26 M100 -36 q-8 -14 0 -26', '#FFFFFF', 3, 'opacity=".8"');
    p.end();
  };
  P.heart = function (p, q) { G(p, q); p.glow(0, -10, 120, '#FFD6E0', .7); p.P('M0 70 Q-110 0 -96 -60 Q-80 -110 -30 -96 Q-10 -90 0 -64 Q10 -90 30 -96 Q80 -110 96 -60 Q110 0 0 70 Z', p.g(q.c || '#E5574A', 'r')); p.col('<ellipse cx="44" cy="-60" rx="18" ry="10" fill="#fff" opacity=".45" transform="rotate(-30 44 -60)"/>'); sparkle(p, 110, -90, 14); sparkle(p, -120, -40, 10); p.end(); };
  P.calendar = function (p, q) {
    G(p, q);
    p.R(-160, -130, 320, 250, p.f('#FFFDF6'), 16); p.R(-160, -130, 320, 50, p.g('#8E44AD', 'v'), 16);
    p.add('<text x="0" y="-96" text-anchor="middle" font-family="Tajawal" font-weight="900" font-size="22" fill="' + (p.line ? '#111' : '#fff') + '">' + (q.title || 'صيامُ التطوّع') + '</text>');
    var mark = q.mark || [1, 4];
    for (var r = 0; r < 4; r++) for (var c = 0; c < 7; c++) {
      var x = 120 - c * 40, y = -50 + r * 42, on = mark.indexOf(c) > -1;
      p.R(x - 16, y - 16, 32, 32, on ? p.g('#1A9B7B', 'r') : p.f('#F3EADB'), 8);
      if (on) p.P('M' + (x + 8) + ' ' + (y - 9) + ' a10 10 0 1 0 0 18 a8 8 0 1 1 0 -18z', '#FFF6C8', 'stroke-width="1"');
    }
    p.end();
  };
  P.wheat = function (p, q) { // one seed → seven ears, a hundred grains each
    G(p, q);
    p.P('M-40 0 Q0 -16 40 0 Z', p.f('#8B5A2B'));
    p.S('M0 -6 Q0 -140 0 -170', '#C9A23A', 4);
    for (var i = 0; i < 7; i++) {
      var a = (-90 + (i - 3) * 22) * Math.PI / 180, ex = Math.cos(a) * 180, ey = Math.sin(a) * 180 - 10;
      p.S('M0 -120 Q' + r1(ex * .4) + ' ' + r1(ey * .6) + ' ' + r1(ex * .8) + ' ' + r1(ey * .8), '#C9A23A', 3);
      for (var g = 0; g < 6; g++) { var t = .8 + g * .045, gx = ex * t, gy = ey * t; p.E(gx - 6, gy, 5, 8, p.g('#E9B949', 'r'), 'transform="rotate(' + r1(a * 180 / Math.PI + 90) + ' ' + r1(gx - 6) + ' ' + r1(gy) + ')"'); p.E(gx + 6, gy, 5, 8, p.g('#E9B949', 'r'), 'transform="rotate(' + r1(a * 180 / Math.PI + 90) + ' ' + r1(gx + 6) + ' ' + r1(gy) + ')"'); }
    }
    p.glow(0, -10, 24, '#FFF1B8', .9); p.E(0, -8, 8, 6, '#C9A23A');
    p.end();
  };
  P.coins = function (p, q) { G(p, q); for (var i = 0; i < (q.n || 6); i++) { var x = (i % 3) * 30 - 30, y = -Math.floor(i / 3) * 14; p.E(x, y, 22, 8, p.U('gold')); p.E(x, y - 4, 22, 8, p.U('gold')); } p.end(); };
  P.box = function (p, q) { // charity box
    G(p, q); p.shadow(0, 4, 70, 9, .25);
    p.P('M-60 0 V-100 H60 V0 Z', p.g(q.c || '#1A9B7B')); p.P('M-66 -100 V-116 H66 V-100 Z', p.U('gold'));
    p.R(-26, -112, 52, 6, p.f('#2B2118'), 3); p.P('M-60 -50 H60', '', 'fill="none" ' + p.TH);
    p.P('M20 -78 a14 14 0 1 0 0 22 a11 11 0 1 1 0 -22z', p.U('gold'));
    p.E(0, -150, 16, 6, p.U('gold')); p.S('M0 -136 V-118', '#A8751A', 2, 'stroke-dasharray="3 4"');
    p.end();
  };
  P.bag = function (p, q) { G(p, q); p.P('M-30 0 Q-40 -40 -20 -56 L20 -56 Q40 -40 30 0 Z', p.g(q.c || '#C9A16B')); p.S('M-22 -56 Q0 -40 22 -56', '#7A4A22', 3); p.P('M-14 -56 l-8 -14 h44 l-8 14 Z', p.g('#C9A16B')); p.T('M-10 -30 h20'); p.end(); };
  P.basket = function (p, q) {
    G(p, q); p.shadow(0, 4, 60, 8, .25);
    p.add('<path d="M-40 -40 Q0 -100 40 -40" fill="none" stroke="' + (p.line ? '#111' : '#8B5A2B') + '" stroke-width="7"/>');
    [[-24, -46, '#E5574A'], [0, -54, '#F5A623'], [24, -46, '#7CB342'], [-10, -40, '#F5CC5A'], [14, -40, '#E5574A']].forEach(function (f) { p.C(f[0], f[1], 13, p.g(f[2], 'r')); });
    p.P('M-50 -40 H50 L38 0 H-38 Z', p.g('#C08A4E', 'v'));
    for (var i = -40; i < 50; i += 12) p.T('M' + i + ' -40 l-4 40'); p.T('M-46 -26 H46'); p.T('M-42 -12 H42');
    p.end();
  };
  P.cup = function (p, q) { G(p, q); p.P('M-14 0 h28 l4 -36 h-36 Z', p.f('#DDF1FB')); p.P('M-12 -12 h24 l2 -18 h-28 Z', p.f('#9FD8F5'), p.line ? '' : 'stroke-opacity=".2"'); p.end(); };
  P.cloudShade = function (p, q) { // a cloud of shade over a small figure on the Day of Judgement (symbolic)
    G(p, q);
    p.add('<path d="M-160 -60 q-10 -60 50 -60 q20 -54 90 -36 q50 -40 100 6 q66 -6 60 56 Z" fill="' + p.f('#FFFFFF') + '" ' + p.ST + '/>');
    p.col('<ellipse cx="0" cy="190" rx="160" ry="34" fill="' + p.fade('#4A5A8A', .4) + '"/>');
    p.end();
  };
  P.wilted = function (p, q) { // a dry plant beside a healthy one
    G(p, q);
    p.P('M-150 0 h80 l-8 -50 h-64 Z', p.U('pot')); p.S('M-110 -50 Q-120 -110 -160 -120', '#8C7A4A', 4);
    [[-146, -110], [-130, -86], [-120, -70]].forEach(function (l) { p.E(l[0], l[1], 14, 6, '#B49A5C', 'transform="rotate(40 ' + l[0] + ' ' + l[1] + ')"'); });
    p.E(-100, -4, 10, 4, '#B49A5C');
    p.P('M70 0 h80 l-8 -50 h-64 Z', p.U('pot')); p.S('M110 -50 V-150', '#3E8A3A', 5);
    [[88, -90, -30], [132, -110, 30], [90, -130, -30], [130, -150, 30]].forEach(function (l) { p.E(l[0], l[1], 22, 9, p.g('#57B368'), 'transform="rotate(' + l[2] + ' ' + l[0] + ' ' + l[1] + ')"'); });
    for (var i = 0; i < 5; i++) { var a = i * Math.PI * 2 / 5; p.C(110 + 10 * Math.cos(a), -168 + 10 * Math.sin(a), 8, '#E5574A'); } p.C(110, -168, 6, '#F5CC5A');
    p.end();
  };
  P.well = function (p, q) {
    G(p, q); p.shadow(0, 6, 80, 10, .3);
    p.P('M-60 0 V-60 H60 V0 Z', p.U('stone'));
    for (var y = -48; y < 0; y += 16) for (var x = -60 + (y / 16 % 2 ? 10 : 0); x < 60; x += 24) p.T('M' + x + ' ' + y + ' h20');
    p.E(0, -60, 64, 14, p.U('stone')); p.E(0, -60, 50, 9, p.U('water'));
    p.R(-56, -150, 10, 90, p.U('wood')); p.R(46, -150, 10, 90, p.U('wood'));
    p.P('M-74 -150 L0 -186 L74 -150 Z', p.g('#B8432F', 'v')); p.S('M0 -150 V-90', '#8B5A2B', 2);
    p.P('M-12 -96 h24 l-3 18 h-18 Z', p.U('wood'));
    p.end();
  };
  P.foundation = function (p, q) { // the House's foundations: stacked stones, no people
    G(p, q);
    var rows = [[-150, 150, 0], [-130, 130, -34], [-110, 110, -68]];
    rows.forEach(function (r, i) { for (var x = r[0]; x < r[1]; x += 40) p.R(x, r[2] - 34, 38, 32, p.g(['#8C8274', '#77706A', '#9A8F80'][(x / 40 + i) & 1 ? 0 : 2], 'v'), 4); });
    p.R(60, -170, 38, 32, p.g('#9A8F80', 'v'), 4); p.R(100, -120, 38, 32, p.g('#8C8274', 'v'), 4);
    p.glow(0, -150, 80, '#FFF1B8', .6);
    p.end();
  };
  P.spring = function (p, q) { // Zamzam: water rising in the valley between two hills
    G(p, q);
    p.P('M-360 0 Q-300 -120 -200 -110 Q-150 -60 -150 0 Z', p.g('#B98B5A', 'v')); p.add('<text x="-250" y="30" text-anchor="middle" font-family="Tajawal" font-weight="900" font-size="20" fill="' + (p.line ? '#111' : '#6B4224') + '">الصَّفا</text>');
    p.P('M360 0 Q300 -120 200 -110 Q150 -60 150 0 Z', p.g('#B98B5A', 'v')); p.add('<text x="250" y="30" text-anchor="middle" font-family="Tajawal" font-weight="900" font-size="20" fill="' + (p.line ? '#111' : '#6B4224') + '">المَروة</text>');
    p.E(0, 0, 90, 22, p.U('water')); p.glow(0, -20, 60, '#DDF6FF', .8);
    p.S('M-10 -6 Q-4 -40 -16 -70 M10 -6 Q16 -44 6 -76 M0 -6 V-90', '#7CCBF2', 5);
    [[-30, -90], [24, -100], [0, -112]].forEach(function (d) { p.E(d[0], d[1], 5, 7, '#BDE9FF'); });
    p.end();
  };
  P.pebbles = function (p, q) { G(p, q); for (var i = 0; i < 7; i++) p.E((i % 4) * 22 - 33, -Math.floor(i / 4) * 14, 10, 8, p.g(['#9A8F80', '#7E776D', '#B4A994'][i % 3], 'r')); p.end(); };
  P.sheep = function (p, q) {
    G(p, q); p.shadow(0, 4, 70, 8, .25);
    [[-30, -2], [-10, 0], [20, -2], [36, 0]].forEach(function (l) { p.R(l[0] - 5, -36, 10, 36 + l[1], p.f('#4A3B32'), 4); });
    var d = ''; for (var i = 0; i < 14; i++) { var a = i / 14 * Math.PI * 2, r = 46 + (i % 2) * 7; d += (i ? 'L' : 'M') + r1(Math.cos(a) * r * 1.1) + ' ' + r1(Math.sin(a) * r * .62 - 60); }
    p.P(d + 'Z', p.g('#FBF7EE', 'r'));
    p.E(-60, -78, 18, 22, p.f('#4A3B32')); p.E(-52, -96, 10, 5, p.f('#4A3B32'), 'transform="rotate(-30 -52 -96)"');
    p.P('M-44 -96 q12 -8 14 6 q-8 6 -14 -6 Z', p.f('#E9DCC8'));
    p.end();
  };
  P.rain = function (p, q) {
    G(p, q);
    [[-120, 0, 1.1], [60, -20, 1.3]].forEach(function (c) { ART.bg.cloud(p, c[0], c[1], c[2]); });
    var R = ART.rng(5); for (var i = 0; i < 26; i++) { var x = -140 + R() * 300, y = 20 + R() * 180; p.S('M' + r1(x) + ' ' + r1(y) + ' l-6 16', '#5EB6EA', 3); }
    p.end();
  };
  P.rainbow = function (p, q) { G(p, q); ['#E5574A', '#F5A623', '#F5CC5A', '#57B368', '#2F6FD6', '#8E44AD'].forEach(function (c, i) { p.add('<path d="M' + (-300 + i * 14) + ' 0 A' + (300 - i * 14) + ' ' + (220 - i * 12) + ' 0 0 1 ' + (300 - i * 14) + ' 0" fill="none" stroke="' + (p.line ? '#111' : c) + '" stroke-width="' + (p.line ? 1.6 : 14) + '" opacity="' + (p.line ? 1 : .75) + '"/>'); }); p.end(); };
  P.key = function (p, q) {
    G(p, q); p.glow(0, 0, 130, '#FFF1B8', .7);
    p.C(-90, 0, 58, p.U('gold')); p.C(-90, 0, 30, p.f(ART.light(q.bgc || '#1A9B7B', .8)));
    ART.star(p, -90, 0, 18, p.U('gold'));
    p.P('M-34 -14 H140 V14 H-34 Z', p.U('gold'));
    p.P('M90 14 v34 h18 v-34 Z', p.U('gold')); p.P('M120 14 v24 h16 v-24 Z', p.U('gold'));
    p.end();
  };
  P.sea = function (p, q) {
    G(p, q);
    for (var r = 0; r < 4; r++) p.P('M-400 ' + (r * 40) + ' Q-350 ' + (r * 40 - 26) + ' -300 ' + (r * 40) + ' T-200 ' + (r * 40) + ' T-100 ' + (r * 40) + ' T0 ' + (r * 40) + ' T100 ' + (r * 40) + ' T200 ' + (r * 40) + ' T300 ' + (r * 40) + ' T400 ' + (r * 40) + ' V300 H-400 Z', p.g(['#5EB6EA', '#3F92D4', '#2E78BC', '#1F5E9E'][r], 'v'));
    var R = ART.rng(9); for (var i = 0; i < 30; i++) p.col('<circle cx="' + r1(-380 + R() * 760) + '" cy="' + r1(-6 + R() * 20) + '" r="' + r1(3 + R() * 5) + '" fill="#fff" opacity=".85"/>');
    p.end();
  };
  P.chest = function (p, q) { // a treasure chest — «كنزٌ من كنوز الجنّة»
    G(p, q); p.glow(0, -90, 140, '#FFE58A', .8);
    p.P('M-100 0 V-80 H100 V0 Z', p.U('wood')); p.P('M-100 -80 Q0 -150 100 -80 L110 -100 Q0 -190 -110 -100 Z', p.U('wood'));
    p.P('M-104 -84 H104 v10 H-104 Z', p.U('gold')); p.R(-14, -60, 28, 34, p.U('gold'), 4);
    [-60, 60].forEach(function (x) { p.R(x - 8, -80, 16, 80, p.U('gold')); });
    for (var i = 0; i < 9; i++) p.E(-60 + i * 15, -100 - (i % 3) * 6, 12, 5, p.U('gold'));
    sparkle(p, -70, -150, 14); sparkle(p, 80, -140, 12); sparkle(p, 0, -190, 16);
    p.end();
  };
  P.bed = function (p, q) { // a child asleep — only the blanket and the top of the head show
    G(p, q);
    p.shadow(0, 6, 210, 12, .3);
    p.R(-200, -60, 400, 60, p.U('wood'), 8); p.R(-220, -130, 26, 130, p.U('wood'), 6); p.R(194, -100, 26, 100, p.U('wood'), 6);
    p.R(-196, -86, 392, 30, p.f('#FFFFFF'), 10);
    p.E(-150, -94, 46, 18, p.f('#FDF8EE'));
    p.C(-140, -112, 26, p.U('skin0'));
    p.P('M-166 -118 Q-150 -146 -116 -128 Q-130 -138 -150 -132 Z', p.f(q.hair || '#2B1A10'));
    p.P('M-120 -100 Q-60 -140 60 -120 Q160 -110 190 -84 L190 -70 L-120 -70 Z', p.g(q.c || '#5B7FC8', 'v'));
    p.T('M-60 -120 Q-40 -96 -50 -74'); p.T('M40 -118 Q60 -96 52 -74');
    p.add('<text x="-60" y="-170" font-family="Nunito" font-weight="900" font-size="26" fill="' + (p.line ? '#111' : '#7A8BC0') + '">z z z</text>');
    p.end();
  };
  P.river = function (p, q) { // a stream running past a house (the five daily washings)
    G(p, q);
    p.P('M-420 60 Q-200 -20 0 40 T420 20 L420 120 Q200 60 0 140 T-420 140 Z', p.U('water'));
    for (var i = 0; i < 5; i++) p.col('<path d="M' + (-340 + i * 160) + ' ' + (70 + (i % 2) * 20) + ' q30 -10 60 0" stroke="#fff" stroke-width="3" fill="none" opacity=".75"/>');
    p.end();
  };
  P.house = function (p, q) {
    G(p, q); p.shadow(0, 4, 110, 10, .25);
    p.R(-90, -110, 180, 110, p.g('#F2DDB8'));
    p.P('M-100 -110 L0 -170 L100 -110 Z', p.g('#B8432F', 'v'));
    p.P('M-18 0 V-50 Q0 -70 18 -50 V0 Z', p.U('wood'));
    p.R(-70, -84, 34, 30, p.f('#9DCBEB'), 4); p.R(36, -84, 34, 30, p.f('#9DCBEB'), 4);
    p.end();
  };
  P.sunrise = function (p, q) { G(p, q); p.glow(0, 0, 160, '#FFD27A', .8); p.C(0, 0, 70, p.g('#FFC94A', 'r')); for (var i = 0; i < 12; i++) { var a = Math.PI + i * Math.PI / 11; p.S('M' + r1(Math.cos(a) * 90) + ' ' + r1(Math.sin(a) * 90) + ' L' + r1(Math.cos(a) * 130) + ' ' + r1(Math.sin(a) * 130), '#F5A623', 6); } p.end(); };
  P.label = function (p, q) { p.add('<text x="' + q.x + '" y="' + q.y + '" text-anchor="middle" font-family="' + (q.font || 'Amiri') + '" font-weight="700" font-size="' + (q.size || 36) + '" fill="' + (p.line ? '#111' : (q.c || '#7A4E0A')) + '">' + q.text + '</text>'); };
})();
