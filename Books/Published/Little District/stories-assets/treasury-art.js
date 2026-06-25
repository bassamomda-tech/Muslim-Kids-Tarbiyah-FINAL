/* ════════════════════════════════════════════════════════════════
   treasury-art.js — publish-ready generated art for the Story Treasury.

   Replaces the old "description" placeholders (which only TOLD an artist
   what to draw) with finished, printable pieces generated in pure SVG:

     • TreasuryArt.headerPanel(opts) → a decorative Islamic-geometric
       medallion header (a filled "headpiece" for the start of a story).
     • TreasuryArt.coloringPanel(opts) → a real black-line geometric
       coloring page (an activity the child colours in).

   Both are deterministic from `seed`, so every story gets its own
   distinct pattern, and both are abstract geometric art (no figures) —
   safe, beautiful, and ready to publish as-is.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ---- tiny deterministic hash (FNV-1a) ---- */
  function hash(str) {
    var h = 2166136261;
    str = String(str || '');
    for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return (h >>> 0);
  }

  /* ---- #rgb / #rrggbb → rgba() ---- */
  function rgba(hex, a) {
    hex = String(hex || '#D4A017').replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(function (c) { return c + c; }).join('');
    var n = parseInt(hex, 16);
    return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')';
  }

  /* ---- geometry helpers ---- */
  function poly(pts, fill, stroke, sw) {
    return '<polygon points="' + pts.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ') +
      '" fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + sw + '" stroke-linejoin="round"/>';
  }
  function squareAt(cx, cy, R, rot, fill, stroke, sw) {
    var p = [];
    for (var k = 0; k < 4; k++) { var a = rot + k * Math.PI / 2; p.push([cx + R * Math.cos(a), cy + R * Math.sin(a)]); }
    return poly(p, fill, stroke, sw);
  }
  /* classic 8-point star (rub-el-hizb): two overlapping squares */
  function star8(cx, cy, R, fill, stroke, sw) {
    return squareAt(cx, cy, R, 0, fill, stroke, sw) + squareAt(cx, cy, R, Math.PI / 4, fill, stroke, sw);
  }
  /* n-point star polygon (single outline), outer radius R, inner ratio k */
  function starN(cx, cy, R, n, k, fill, stroke, sw, rot) {
    var p = [], i, a;
    rot = rot || 0;
    for (i = 0; i < n * 2; i++) {
      a = rot + i * Math.PI / n;
      var r = (i % 2 === 0) ? R : R * k;
      p.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
    }
    return poly(p, fill, stroke, sw);
  }
  function circle(cx, cy, r, fill, stroke, sw) {
    return '<circle cx="' + cx.toFixed(1) + '" cy="' + cy.toFixed(1) + '" r="' + r.toFixed(1) +
      '" fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + sw + '"/>';
  }

  /* ---- all-over 8-star lattice ---- */
  function lattice(W, H, opts) {
    var cell = opts.cell, mode = opts.mode, accent = opts.accent, seed = opts.seed || 0;
    var stroke = mode === 'outline' ? '#13243b' : accent;
    var sw = mode === 'outline' ? 2.1 : 1.5;
    var starFill = mode === 'outline' ? 'none' : rgba(accent, 0.13);
    var centreStar = (seed % 2 === 0);
    var g = '', i, j, cx, cy;
    var cols = Math.ceil(W / cell) + 1, rows = Math.ceil(H / cell) + 1;
    /* stars on the grid nodes */
    for (j = -1; j <= rows; j++) {
      for (i = -1; i <= cols; i++) {
        cx = i * cell; cy = j * cell;
        g += star8(cx, cy, cell * 0.5, starFill, stroke, sw);
      }
    }
    /* interstitial motif at each cell centre */
    for (j = -1; j < rows; j++) {
      for (i = -1; i < cols; i++) {
        cx = (i + 0.5) * cell; cy = (j + 0.5) * cell;
        if (centreStar) g += starN(cx, cy, cell * 0.22, 8, 0.5, 'none', stroke, sw);
        else g += squareAt(cx, cy, cell * 0.2, Math.PI / 4, 'none', stroke, sw);
      }
    }
    return g;
  }

  /* ---- central radial rosette (medallion) ---- */
  function rosette(cx, cy, R, opts) {
    var accent = opts.accent, mode = opts.mode, n = opts.points || 8;
    var stroke = mode === 'outline' ? '#13243b' : accent;
    var sw = mode === 'outline' ? 2.2 : 1.6;
    var fillA = mode === 'outline' ? 'none' : rgba(accent, 0.16);
    var fillB = mode === 'outline' ? 'none' : rgba(accent, 0.28);
    var g = '';
    g += circle(cx, cy, R, mode === 'outline' ? 'none' : rgba(accent, 0.06), stroke, sw);
    /* petal ring: kite petals between outer points */
    var i, a, tip, b1, b2, baseR = R * 0.52, tipR = R * 0.96, innerR = R * 0.28;
    for (i = 0; i < n; i++) {
      a = i * 2 * Math.PI / n - Math.PI / 2;
      tip = [cx + tipR * Math.cos(a), cy + tipR * Math.sin(a)];
      b1 = [cx + baseR * Math.cos(a - Math.PI / n), cy + baseR * Math.sin(a - Math.PI / n)];
      b2 = [cx + baseR * Math.cos(a + Math.PI / n), cy + baseR * Math.sin(a + Math.PI / n)];
      var mid = [cx + innerR * Math.cos(a), cy + innerR * Math.sin(a)];
      g += poly([mid, b1, tip, b2], fillA, stroke, sw);
    }
    /* inner star + hub */
    g += starN(cx, cy, R * 0.46, n, 0.46, fillB, stroke, sw, -Math.PI / 2);
    g += circle(cx, cy, R * 0.17, mode === 'outline' ? 'none' : rgba(accent, 0.4), stroke, sw);
    return g;
  }

  function svgWrap(W, H, inner, extra) {
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid slice" ' +
      'xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%;display:block">' +
      (extra || '') + inner + '</svg>';
  }

  function injectCSS() {
    if (document.getElementById('ta-css')) return;
    var s = document.createElement('style'); s.id = 'ta-css';
    s.textContent =
      '.ta-art{position:relative;overflow:hidden;border-radius:14px;margin:.2rem 0 .1rem;' +
      'print-color-adjust:exact;-webkit-print-color-adjust:exact}' +
      '.ta-header{border:2px solid var(--acc)}' +
      '.ta-cartouche{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;text-align:center}' +
      '.tac-inner{background:rgba(254,245,220,.94);border:2.5px solid var(--acc);border-radius:16px;' +
      'padding:.6rem 1.4rem;box-shadow:0 6px 20px rgba(10,37,64,.14)}' +
      '.tac-ic{font-size:2.7rem;line-height:1}' +
      '.tac-cap{font-weight:900;color:#10243d;font-size:1.12rem;margin-top:.15rem}' +
      '.tac-cap .en{display:block;font-size:.7rem;color:#5a6b7d;font-weight:800;letter-spacing:.04em;text-transform:uppercase}' +
      '.tac-inner.tac-wide{max-width:76%;padding:.7rem 1.5rem}' +
      '.tac-ttl{font-weight:900;color:#10243d;font-size:1.3rem;line-height:1.3;margin-top:.2rem}' +
      '.tac-ttl-en{font-family:Nunito,sans-serif;font-size:.74rem;color:#5a6b7d;font-weight:800;margin-top:.18rem;direction:ltr}' +
      '.tac-tag{font-size:.82rem;color:#3a4a5a;font-weight:700;line-height:1.5;margin-top:.45rem;border-top:1px solid rgba(180,150,80,.35);padding-top:.4rem}' +
      '.ta-color{background:#fff;border:2px solid #13243b}' +
      '.ta-frame{position:absolute;inset:9px;border:1.5px dashed rgba(19,36,59,.45);border-radius:9px;pointer-events:none}' +
      '.ta-clbl{position:absolute;top:0;inset-inline-start:14px;transform:translateY(-50%);background:#fff;' +
      'border:1.5px solid #13243b;border-radius:1rem;padding:.12rem .7rem;font-weight:900;font-size:.72rem;color:#13243b}' +
      '.ta-clbl .en{color:#5a6b7d;font-weight:700}' +
      '.ta-badge{position:absolute;bottom:10px;inset-inline-end:12px;width:54px;height:54px;border:2px solid #13243b;' +
      'border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.7rem;background:#fff;' +
      'filter:grayscale(1);opacity:.85}';
    document.head.appendChild(s);
  }

  window.TreasuryArt = {
    /* decorative geometric headpiece with a central cartouche */
    headerPanel: function (o) {
      injectCSS();
      var W = o.w || 620, H = o.h || 300, seed = hash(o.seed);
      var n = [8, 8, 12, 10][seed % 4];
      var cell = [60, 70, 80][seed % 3];
      var bg = svgWrap(W, H,
        lattice(W, H, { cell: cell, mode: 'filled', accent: o.accent, seed: seed }) +
        rosette(W / 2, H / 2, Math.min(W, H) * 0.42, { accent: o.accent, mode: 'filled', points: n }),
        '<rect width="' + W + '" height="' + H + '" fill="' + rgba(o.accent, 0.05) + '"/>');
      var cap = o.captionAr
        ? '<div class="tac-cap">' + o.captionAr + (o.captionEn ? '<span class="en">' + o.captionEn + '</span>' : '') + '</div>'
        : '';
      /* central title-plate: story icon + title (+ optional one-line hook) */
      var titleAr = o.titleAr ? '<div class="tac-ttl">' + o.titleAr + '</div>' : '';
      var titleEn = o.titleEn ? '<div class="tac-ttl-en">' + o.titleEn + '</div>' : '';
      var tag = o.taglineAr ? '<div class="tac-tag">' + o.taglineAr + '</div>' : '';
      var inner = o.titleAr ? (titleAr + titleEn + tag) : cap;
      var cart = '<div class="ta-cartouche"><div class="tac-inner' + (o.titleAr ? ' tac-wide' : '') + '">' +
        '<div class="tac-ic">' + (o.icon || '📖') + '</div>' + inner + '</div></div>';
      return '<div class="ta-art ta-header" style="--acc:' + o.accent + ';height:' + H + 'px">' + bg + cart + '</div>';
    },

    /* real black-line coloring page (geometric) */
    coloringPanel: function (o) {
      injectCSS();
      var W = o.w || 620, H = o.h || 260, seed = hash(o.seed);
      var cell = [58, 66, 74][seed % 3];
      var big = (seed % 2 === 0);
      var inner = big
        ? lattice(W, H, { cell: cell, mode: 'outline', accent: o.accent, seed: seed }) +
          rosette(W / 2, H / 2, Math.min(W, H) * 0.4, { accent: o.accent, mode: 'outline', points: [8, 12, 10][seed % 3] })
        : lattice(W, H, { cell: cell, mode: 'outline', accent: o.accent, seed: seed });
      var lbl = '<div class="ta-clbl">🖍️ ' + (o.labelAr || 'لوِّن الزخرفة') +
        '<span class="en"> · ' + (o.labelEn || 'Colour the pattern') + '</span></div>';
      var badge = o.badgeIcon ? '<div class="ta-badge">' + o.badgeIcon + '</div>' : '';
      return '<div class="ta-art ta-color" style="height:' + H + 'px">' + svgWrap(W, H, inner) + lbl + badge + '</div>';
    }
  };
})();
