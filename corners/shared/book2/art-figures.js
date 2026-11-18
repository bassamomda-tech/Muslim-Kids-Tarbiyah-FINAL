/* ═══ book2 · art-figures — faceless, modestly dressed people in prayer & daily poses ═══
   ART.fig(p, {who, pose, x, y, s, dir, c, c2, skin, hem})
   who:  boy | girl | man | woman | pilgrim | pilgrimW
   pose: stand | walk | qiyam | dua | takbir | give | wudu | hold | ruku | sujud | sit | sitread
   dir:  'l' (default, faces left — the qibla side of every scene) or 'r'.
   Returns the hand position (scene coords) so a prop can be placed in it. */
(function () {
  'use strict';
  var ART = window.ART, r1 = ART.r1;

  var STAND = {
    feet: [[-16, 0], [12, 0]],
    body: 'M-28 -148 Q-46 -80 -48 -12 Q0 0 48 -12 Q42 -80 28 -150 Q0 -166 -28 -148 Z',
    folds: ['M-10 -120 Q-18 -60 -20 -10', 'M14 -110 Q20 -60 24 -10'],
    hem: 'M-48 -16 Q0 -4 48 -16', neck: [-8, -174], head: [0, -194, 0]
  };
  var ARMS = {
    stand: { far: ['M8 -142 Q14 -100 12 -68', 12, -64], near: ['M-2 -142 Q-14 -100 -12 -66', -12, -62] },
    qiyam: { far: ['M8 -140 Q-4 -112 -26 -124', -28, -124], near: ['M-2 -140 Q-12 -108 -30 -116', -33, -117] },
    dua: { far: ['M8 -140 Q-6 -108 -34 -128', -38, -131, 'cup'], near: ['M-2 -140 Q-16 -104 -42 -122', -46, -125, 'cup'] },
    takbir: { far: ['M8 -140 Q-16 -140 -10 -178', -10, -186, 'palm'], near: ['M-2 -140 Q-30 -136 -22 -176', -22, -184, 'palm'] },
    give: { far: ['M8 -142 Q14 -100 12 -68', 12, -64], near: ['M-2 -140 Q-30 -128 -62 -126', -67, -126] },
    wudu: { far: ['M8 -140 Q-20 -114 -52 -104', -56, -104], near: ['M-2 -140 Q-30 -116 -58 -100', -62, -98] },
    hold: { far: ['M8 -140 Q-6 -110 -34 -108', -38, -108], near: ['M-2 -140 Q-16 -106 -40 -104', -44, -104] }
  };
  var POSE = {
    walk: {
      feet: [[-30, 0], [22, -2]],
      body: 'M-28 -148 Q-50 -80 -56 -14 Q0 2 50 -10 Q42 -80 28 -150 Q0 -166 -28 -148 Z',
      folds: ['M-10 -120 Q-24 -60 -30 -8', 'M12 -110 Q20 -60 26 -8'], hem: 'M-50 -18 Q0 -4 44 -14',
      neck: [-10, -174], head: [-4, -194, -4],
      far: ['M8 -142 Q22 -104 32 -76', 34, -72], near: ['M-2 -142 Q-20 -104 -30 -74', -32, -70]
    },
    ruku: {
      feet: [[-14, 0], [12, 0]],
      body: 'M-76 -128 Q-30 -142 16 -136 Q38 -130 34 -100 Q32 -60 32 -12 Q4 -2 -28 -12 Q-24 -60 -20 -94 Q-50 -90 -72 -94 Q-84 -110 -76 -128 Z',
      folds: ['M20 -116 Q-20 -124 -60 -114'], hem: 'M-28 -16 Q2 -6 32 -16',
      neck: [-84, -118, 'h'], head: [-106, -112, -90],
      far: ['M-52 -112 Q-40 -84 -22 -62', -20, -58], near: ['M-60 -110 Q-50 -84 -34 -60', -32, -56]
    },
    sujud: {
      feet: [[50, -3]],
      body: 'M62 -4 Q68 -66 32 -86 Q-6 -80 -48 -52 Q-58 -30 -42 -16 Q-18 -8 -6 -2 Q24 0 62 -4 Z',
      folds: ['M40 -10 Q44 -50 20 -72', 'M-20 -24 Q0 -50 24 -70'], hem: null,
      neck: [-56, -46, 'd'], head: [-74, -31, -118],
      far: ['M-36 -54 Q-24 -24 -40 -6', -44, -4, 'flat'], near: ['M-44 -50 Q-34 -22 -52 -6', -58, -4, 'flat']
    },
    sit: {
      feet: [[42, -4]],
      body: 'M-54 -2 Q-60 -30 -42 -44 Q-30 -118 -2 -128 Q24 -122 28 -60 Q42 -10 36 -2 Z',
      folds: ['M-30 -40 Q-6 -46 22 -40', 'M6 -110 Q12 -70 16 -46'], hem: null,
      neck: [-8, -150], head: [0, -170, 0],
      far: ['M6 -120 Q-2 -86 -24 -60', -26, -57], near: ['M-4 -120 Q-14 -84 -34 -56', -38, -53, 'point']
    },
    sitread: {
      feet: [[42, -4]], from: 'sit',
      far: ['M6 -120 Q-8 -92 -40 -90', -42, -90], near: ['M-4 -120 Q-20 -88 -46 -86', -48, -86]
    }
  };

  function pose(name) {
    if (POSE[name]) { var q = POSE[name]; if (q.from) { var b = POSE[q.from], m = {}; for (var k in b) m[k] = b[k]; for (k in q) m[k] = q[k]; return m; } return q; }
    var a = ARMS[name] || ARMS.stand, o = {}; for (var k2 in STAND) o[k2] = STAND[k2]; o.far = a.far; o.near = a.near; return o;
  }

  function hand(p, x, y, kind, skin) {
    if (kind === 'cup') return p.P('M' + (x - 10) + ' ' + (y - 3) + ' Q' + x + ' ' + (y + 10) + ' ' + (x + 10) + ' ' + (y - 3) + ' Q' + x + ' ' + (y + 2) + ' ' + (x - 10) + ' ' + (y - 3) + ' Z', skin);
    if (kind === 'palm') return p.E(x, y, 7, 11, skin);
    if (kind === 'flat') return p.E(x, y, 12, 5, skin);
    p.C(x, y, 7.5, skin);
    if (kind === 'point') p.S('M' + (x - 6) + ' ' + y + ' l-9 -2', '#D89D70', 4);
  }

  function head(p, hx, hy, rot, o) {
    p.grp('translate(' + r1(hx) + ' ' + r1(hy) + ') rotate(' + rot + ') scale(' + o.hs + ')');
    var hijab = o.who === 'girl' || o.who === 'woman' || o.who === 'pilgrimW';
    if (hijab) {
      // a wrapped hijab: soft bun at the back, fabric framing the face and falling over the shoulders and chest
      var hc = o.c2, hd = ART.dark(hc, .3), hl = ART.light(hc, .45);
      p.E(30, -16, 15, 13, p.g(hc, 'r'));
      p.P('M-8 -41 Q34 -44 44 -8 Q52 26 46 58 Q50 76 40 86 Q0 98 -42 84 Q-52 64 -44 40 Q-50 4 -40 -18 Q-30 -40 -8 -41 Z', p.g(hc));
      p.T('M36 -2 Q46 30 38 72'); p.T('M-38 52 Q-6 66 30 54'); p.T('M-40 70 Q0 84 38 70');
      p.E(-12, 3, 22, 27, p.line ? '#fff' : hd, p.line ? 'stroke-width="1.8"' : 'stroke-opacity=".35"');
      p.E(-12, 4, 18.5, 23.5, o.skinFill);
      p.add('<path d="M-31 -10 Q-13 -26 6 -12" fill="none" stroke="' + (p.line ? '#111' : hl) + '" stroke-width="' + (p.line ? 1.6 : 5) + '" stroke-linecap="round"/>');
      p.col('<ellipse cx="-22" cy="12" rx="9" ry="6" fill="' + p.fade('#E79A86', .5) + '"/>');
      p.C(-30, 26, 2.6, p.U('gold'), p.line ? 'stroke-width="1.2"' : 'stroke-opacity=".3"');
    } else {
      p.C(0, 0, 30, o.skinFill);
      p.E(9, 3, 5, 8, o.skinFill);
      p.P('M6 -26 Q34 -24 30 12 Q24 -2 12 -6 Z', p.line ? '#fff' : (o.hair || '#2B1A10'));
      if (o.who === 'pilgrim') p.P('M-30 -4 Q-30 -34 2 -34 Q34 -32 32 8 Q22 -12 -30 -4 Z', p.line ? '#fff' : (o.hair || '#2B1A10'));
      else {
        p.P('M-31 -8 Q0 -52 31 -8 Q0 -16 -31 -8 Z', p.g(o.cap || '#FFFFFF'));
        for (var i = 0; i < 7; i++) p.C(-27 + i * 9, -11 - Math.sin(i / 6 * Math.PI) * 4, 1.6, p.U('gold'), p.line ? 'stroke-width="1"' : 'stroke-opacity=".2"');
      }
      p.col('<ellipse cx="-16" cy="10" rx="11" ry="8" fill="' + p.fade('#E79A86', .45) + '"/>');
    }
    p.end();
  }

  ART.fig = function (p, q) {
    var who = q.who || 'boy', adult = /man|woman|pilgrim/.test(who) && who !== 'pilgrimW' ? true : /pilgrimW|woman/.test(who);
    var s = (q.s || 1) * (adult ? 1.26 : 1), dir = q.dir === 'r' ? -1 : 1;
    var skinFill = p.U('skin' + (q.skin || 0)), skinFlat = ART.skinColors[q.skin || 0];
    var def = { boy: ['#1A9B7B', null], girl: ['#8E44AD', '#F2C14E'], man: ['#F4F1E8', null], woman: ['#2C3E62', '#6C5B9E'], pilgrim: ['#FBFBF7', null], pilgrimW: ['#FBFBF7', '#FBFBF7'] }[who] || ['#1A9B7B'];
    var c = q.c || def[0], c2 = q.c2 || def[1];
    var o = { who: who, c: c, c2: c2, skinFill: skinFill, hs: adult ? .8 : 1, cap: q.cap, hair: q.hair };
    var P = pose(q.pose || 'stand');
    var x = q.x || 400, y = q.y || 500;
    var shadowW = q.pose === 'sujud' || q.pose === 'ruku' ? 80 : q.pose === 'sit' || q.pose === 'sitread' ? 64 : 46;
    p.shadow(x + (q.pose === 'sujud' ? 6 : 0) * dir * s, y + 2, shadowW * s, 9 * s, .3);
    p.grp('translate(' + r1(x) + ' ' + r1(y) + ') scale(' + r1(s * dir * 100) / 100 + ' ' + r1(s * 100) / 100 + ')');
    var dark = ART.dark(c, .28);
    // feet
    (P.feet || []).forEach(function (f) { p.E(f[0] - 3, f[1] - 4, 15, 6, q.shoes ? p.g(q.shoes, 'v') : skinFill); });
    // far arm (behind the body)
    if (P.far) { p.limb(P.far[0], p.line ? '#fff' : dark, 15); hand(p, P.far[1], P.far[2], P.far[3], skinFill); }
    if (P.legs) p.P(P.legs, p.g(c));
    // neck
    var nk = P.neck;
    if (nk[2] === 'h') p.R(nk[0] - 6, nk[1] - 8, 26, 16, skinFill);
    else if (nk[2] === 'd') p.P('M' + nk[0] + ' ' + nk[1] + ' l-12 10 l10 12 l14 -12 Z', skinFill);
    else p.R(nk[0], nk[1], 16, 26, skinFill);
    // body
    p.P(P.body, p.g(c));
    (P.folds || []).forEach(function (d) { p.T(d); });
    if (P.hem && q.hem !== false) p.add('<path d="' + P.hem + '" fill="none" stroke="' + (p.line ? '#111' : (q.hemC || '#D4A017')) + '" stroke-width="' + (p.line ? 1.6 : 3) + '" stroke-linecap="round"/>');
    if (who === 'pilgrim' && P.body === STAND.body) { p.T('M-24 -150 L30 -60'); p.T('M-30 -90 L36 -40'); }
    // head
    head(p, P.head[0], P.head[1], P.head[2], o);
    // near arm (in front)
    if (P.near) { p.limb(P.near[0], p.g(c), 15); hand(p, P.near[1], P.near[2], P.near[3], skinFill); }
    p.end();
    var h = P.near || P.far || [0, 0, -100];
    return [x + h[1] * s * dir, y + h[2] * s];
  };
})();
