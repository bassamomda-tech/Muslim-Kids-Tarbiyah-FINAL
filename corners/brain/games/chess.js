/* الشطرنج — Chess: full legal rules (castling, en passant, promotion, check / checkmate / stalemate,
   50-move, repetition, bare kings), tap-to-move with legal-move dots, vs computer (3 levels) or two players,
   and a «تعرَّف على القطع» mini-tutorial. Pieces are plain original SVG shapes (no crosses, no faces). */
(function () {
  'use strict';
  Brain.css(
    '.ch{display:grid;grid-template-columns:repeat(8,1fr);width:min(100%,520px);aspect-ratio:1;border-radius:10px;overflow:hidden;box-shadow:0 0 0 4px #5b3d17,0 10px 26px rgba(0,0,0,.4)}' +
    '.ch button{position:relative;border:none;padding:0;margin:0;cursor:pointer;display:grid;place-items:center;min-width:0;min-height:0;background:#F1DFB6;aspect-ratio:1}' +
    '.ch button.dk{background:#B98B4E}.ch button.last{background:#E9D36A}.ch button.dk.last{background:#C9A93D}' +
    '.ch button.sel{background:#7FD2A0!important}.ch button.chk{background:#F08A7A!important}' +
    '.ch button.dot::after{content:"";position:absolute;width:30%;height:30%;border-radius:50%;background:rgba(20,90,50,.55)}' +
    '.ch button.cap::after{content:"";position:absolute;inset:6%;border-radius:50%;border:4px solid rgba(190,40,30,.75)}' +
    '.pc{width:88%;height:88%;display:block;pointer-events:none}.pc *{stroke-width:1.7;stroke-linejoin:round;stroke-linecap:round}' +
    '.pc.w *{fill:#FFF8E4;stroke:#2a1f0d}.pc.b *{fill:#2B2E48;stroke:#0b0c16}.pc .ln{fill:none}.pc.b .ln{stroke:#9aa0c8}' +
    '.chpromo{position:absolute;inset:0;background:rgba(4,14,26,.72);display:flex;align-items:center;justify-content:center;gap:8px;z-index:3;flex-wrap:wrap;padding:8px}' +
    '.chpromo button{width:68px;height:68px;border-radius:14px;border:2px solid #E8B530;background:#F1DFB6;cursor:pointer;padding:0;display:grid;place-items:center}' +
    '.chwrap{position:relative;width:min(100%,520px);margin:0 auto}' +
    '.chtut .pcs{display:grid;grid-template-columns:repeat(3,1fr);gap:.4rem;margin:.4rem 0}' +
    '.chtut .pcs button{min-height:56px;border-radius:12px;border:1.5px solid var(--line);background:rgba(255,255,255,.07);color:var(--ink);font-weight:800;font-size:.92rem;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:.2rem;padding:.2rem}' +
    '.chtut .pcs button.on{background:var(--gold);color:#10243d}.chtut .pcs .pc{width:34px;height:34px;flex:0 0 34px}' +
    '.chtut .ch{width:min(100%,304px);margin:.5rem auto 0;box-shadow:0 0 0 3px #5b3d17}.chtut .ch span{position:relative;display:grid;place-items:center;background:#F1DFB6;aspect-ratio:1}.chtut .ch span.dk{background:#B98B4E}' +
    '.chtut .ch span.dot::after{content:"";position:absolute;width:34%;height:34%;border-radius:50%;background:rgba(20,90,50,.6)}.chtut .ch span.cap::after{content:"";position:absolute;inset:6%;border-radius:50%;border:3px solid rgba(190,40,30,.8)}');

  /* ───────── pieces (viewBox 45×45) ───────── */
  var BASE = '<path d="M10 39.5h25v-4.5H10z"/>';
  var SH = {
    P: '<circle cx="22.5" cy="13" r="5.6"/><path d="M22.5 18.6c-5.5 3.4-8 9-8.5 16.4h17c-.5-7.4-3-13-8.5-16.4z"/>' + BASE,
    R: '<path d="M12 8h5v4h3.5V8h4v4H28V8h5v9l-3.5 3v11l3.5 4H12l3.5-4V20L12 17z"/>' + BASE,
    N: '<path d="M13.5 35c.5-9 3.500-14 9-17.500l-7.500-1 2.500-8c9.500-1.500 16 4 16 13.500V35z"/>' + BASE,
    B: '<circle cx="22.5" cy="6.8" r="2.7"/><path d="M22.5 9.5c5.5 5 8 9 8 13.500 0 4-3 6-3.500 12h-9c-.5-6-3.500-8-3.500-12 0-4.500 2.500-8.500 8-13.500z"/>' + BASE,
    Q: '<path d="M8 15l5 11 4-14 5.500 13 5.500-13 4 14 5-11-3 20H11z"/><circle cx="8" cy="13.500" r="2.300"/><circle cx="17" cy="10.500" r="2.300"/><circle cx="28" cy="10.500" r="2.300"/><circle cx="37" cy="13.500" r="2.300"/>' + BASE,
    K: '<circle cx="22.5" cy="7" r="3.200"/><path d="M9.500 16l7.500 8 5.500-13.500L28 24l7.500-8-2.500 19H12z"/><path class="ln" d="M13 30h19"/>' + BASE
  };
  function svg(p) { return '<svg class="pc ' + (isW(p) ? 'w' : 'b') + '" viewBox="0 0 45 45" aria-hidden="true">' + SH[p.toUpperCase()] + '</svg>'; }
  var NAMES = { K: ['الملك', 'King'], Q: ['الوزير', 'Queen'], R: ['الرُّخّ', 'Rook'], B: ['الفيل', 'Bishop'], N: ['الحصان', 'Knight'], P: ['البيدق', 'Pawn'] };

  /* ───────── engine ───────── */
  function isW(p) { return p >= 'A' && p <= 'Z'; }
  function fromFEN(f) {
    var a = f.trim().split(/\s+/), b = [], s;
    a[0].split('/').forEach(function (row) { row.split('').forEach(function (ch) { if (ch >= '1' && ch <= '8') for (var i = 0; i < +ch; i++) b.push(''); else b.push(ch); }); });
    s = { b: b, t: a[1] === 'b' ? 'b' : 'w', c: !a[2] || a[2] === '-' ? '' : a[2], ep: -1, h: +a[4] || 0, n: +a[5] || 1 };
    if (a[3] && a[3] !== '-') s.ep = (8 - +a[3][1]) * 8 + (a[3].charCodeAt(0) - 97);
    s.kw = b.indexOf('K'); s.kb = b.indexOf('k');
    return s;
  }
  function sqName(i) { return 'abcdefgh'[i & 7] + (8 - (i >> 3)); }
  function toFEN(s) {
    var o = '';
    for (var r = 0; r < 8; r++) { var e = 0; for (var c = 0; c < 8; c++) { var p = s.b[r * 8 + c]; if (!p) e++; else { if (e) { o += e; e = 0; } o += p; } } if (e) o += e; if (r < 7) o += '/'; }
    return o + ' ' + s.t + ' ' + (s.c || '-') + ' ' + (s.ep >= 0 ? sqName(s.ep) : '-') + ' ' + s.h + ' ' + s.n;
  }
  var START = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  var ND = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
  var KD = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  var RD = [[-1, 0], [1, 0], [0, -1], [0, 1]], BD = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
  function attacked(b, sq, byW) {
    var r = sq >> 3, c = sq & 7, i, k, x, y, p;
    var pr = byW ? r + 1 : r - 1, P = byW ? 'P' : 'p';
    if (pr >= 0 && pr < 8) { if (c > 0 && b[pr * 8 + c - 1] === P) return true; if (c < 7 && b[pr * 8 + c + 1] === P) return true; }
    var Nn = byW ? 'N' : 'n', Kk = byW ? 'K' : 'k', Rr = byW ? 'R' : 'r', Bb = byW ? 'B' : 'b', Qq = byW ? 'Q' : 'q';
    for (i = 0; i < 8; i++) {
      y = r + ND[i][0]; x = c + ND[i][1]; if (y >= 0 && y < 8 && x >= 0 && x < 8 && b[y * 8 + x] === Nn) return true;
      y = r + KD[i][0]; x = c + KD[i][1]; if (y >= 0 && y < 8 && x >= 0 && x < 8 && b[y * 8 + x] === Kk) return true;
    }
    for (i = 0; i < 4; i++) {
      for (k = 1; k < 8; k++) { y = r + RD[i][0] * k; x = c + RD[i][1] * k; if (y < 0 || y > 7 || x < 0 || x > 7) break; p = b[y * 8 + x]; if (p) { if (p === Rr || p === Qq) return true; break; } }
      for (k = 1; k < 8; k++) { y = r + BD[i][0] * k; x = c + BD[i][1] * k; if (y < 0 || y > 7 || x < 0 || x > 7) break; p = b[y * 8 + x]; if (p) { if (p === Bb || p === Qq) return true; break; } }
    }
    return false;
  }
  /* pseudo-legal moves: {f,t,p,x(captured),pr,ep,dp,cs} */
  function gen(s, capsOnly) {
    var b = s.b, w = s.t === 'w', out = [], i, r, c, p, u, k, d, x, y, t, q;
    function slide(dirs) {
      for (d = 0; d < dirs.length; d++) for (k = 1; k < 8; k++) {
        y = r + dirs[d][0] * k; x = c + dirs[d][1] * k; if (y < 0 || y > 7 || x < 0 || x > 7) break;
        t = y * 8 + x; q = b[t];
        if (!q) { if (!capsOnly) out.push({ f: i, t: t, p: p, x: '' }); } else { if (isW(q) !== w) out.push({ f: i, t: t, p: p, x: q }); break; }
      }
    }
    function step(dirs) {
      for (d = 0; d < 8; d++) {
        y = r + dirs[d][0]; x = c + dirs[d][1]; if (y < 0 || y > 7 || x < 0 || x > 7) continue;
        t = y * 8 + x; q = b[t];
        if (!q) { if (!capsOnly) out.push({ f: i, t: t, p: p, x: '' }); } else if (isW(q) !== w) out.push({ f: i, t: t, p: p, x: q });
      }
    }
    function pawnTo(to, cap, ep) {
      if ((to >> 3) === (w ? 0 : 7)) ['Q', 'R', 'B', 'N'].forEach(function (pp) { out.push({ f: i, t: to, p: p, x: cap, pr: pp }); });
      else out.push({ f: i, t: to, p: p, x: cap, ep: ep });
    }
    for (i = 0; i < 64; i++) {
      p = b[i]; if (!p || isW(p) !== w) continue;
      r = i >> 3; c = i & 7; u = p.toUpperCase();
      if (u === 'P') {
        var dir = w ? -1 : 1, nr = r + dir; if (nr < 0 || nr > 7) continue;
        if (!b[nr * 8 + c] && (!capsOnly || nr === (w ? 0 : 7))) {
          pawnTo(nr * 8 + c, '', 0);
          if (r === (w ? 6 : 1) && !b[(r + 2 * dir) * 8 + c]) out.push({ f: i, t: (r + 2 * dir) * 8 + c, p: p, x: '', dp: 1 });
        }
        for (d = -1; d <= 1; d += 2) {
          x = c + d; if (x < 0 || x > 7) continue; t = nr * 8 + x; q = b[t];
          if (q) { if (isW(q) !== w) pawnTo(t, q, 0); } else if (t === s.ep) pawnTo(t, w ? 'p' : 'P', 1);
        }
      } else if (u === 'N') step(ND);
      else if (u === 'B') slide(BD);
      else if (u === 'R') slide(RD);
      else if (u === 'Q') { slide(RD); slide(BD); }
      else if (u === 'K') {
        step(KD);
        if (!capsOnly) {
          var home = w ? 60 : 4;
          if (i === home && !attacked(b, home, !w)) {
            if (s.c.indexOf(w ? 'K' : 'k') >= 0 && b[home + 3] === (w ? 'R' : 'r') && !b[home + 1] && !b[home + 2] && !attacked(b, home + 1, !w) && !attacked(b, home + 2, !w)) out.push({ f: i, t: home + 2, p: p, x: '', cs: 'k' });
            if (s.c.indexOf(w ? 'Q' : 'q') >= 0 && b[home - 4] === (w ? 'R' : 'r') && !b[home - 1] && !b[home - 2] && !b[home - 3] && !attacked(b, home - 1, !w) && !attacked(b, home - 2, !w)) out.push({ f: i, t: home - 2, p: p, x: '', cs: 'q' });
          }
        }
      }
    }
    return out;
  }
  function make(s, m) {
    var b = s.b.slice(), w = s.t === 'w', c = s.c;
    b[m.f] = ''; b[m.t] = m.pr ? (w ? m.pr : m.pr.toLowerCase()) : m.p;
    if (m.ep) b[m.t + (w ? 8 : -8)] = '';
    if (m.cs === 'k') { b[m.t + 1] = ''; b[m.t - 1] = w ? 'R' : 'r'; }
    if (m.cs === 'q') { b[m.t - 2] = ''; b[m.t + 1] = w ? 'R' : 'r'; }
    if (c) {
      if (m.p === 'K') c = c.replace(/[KQ]/g, ''); else if (m.p === 'k') c = c.replace(/[kq]/g, '');
      if (m.f === 63 || m.t === 63) c = c.replace('K', ''); if (m.f === 56 || m.t === 56) c = c.replace('Q', '');
      if (m.f === 7 || m.t === 7) c = c.replace('k', ''); if (m.f === 0 || m.t === 0) c = c.replace('q', '');
    }
    return { b: b, t: w ? 'b' : 'w', c: c, ep: m.dp ? (m.f + m.t) >> 1 : -1, h: (m.x || m.p === 'P' || m.p === 'p') ? 0 : s.h + 1, n: s.n + (w ? 0 : 1),
      kw: m.p === 'K' ? m.t : s.kw, kb: m.p === 'k' ? m.t : s.kb };
  }
  function inCheck(s) { return attacked(s.b, s.t === 'w' ? s.kw : s.kb, s.t !== 'w'); }
  function legal(s) {
    var w = s.t === 'w';
    return gen(s).filter(function (m) { var n = make(s, m); return !attacked(n.b, w ? n.kw : n.kb, !w); });
  }
  function bare(s) {
    var minor = 0;
    for (var i = 0; i < 64; i++) { var p = s.b[i].toUpperCase(); if (!p || p === 'K') continue; if (p === 'N' || p === 'B') minor++; else return false; }
    return minor <= 1;
  }
  function key(s) { return s.b.join(',') + s.t + s.c + s.ep; }
  /* 'play' | 'mate' | 'stale' | 'fifty' | 'rep' | 'bare' */
  function verdict(s, hist) {
    var ms = legal(s);
    if (!ms.length) return inCheck(s) ? 'mate' : 'stale';
    if (bare(s)) return 'bare';
    if (s.h >= 100) return 'fifty';
    if (hist) { var k = key(s), n = 0; for (var i = 0; i < hist.length; i++) if (key(hist[i]) === k) n++; if (n >= 3) return 'rep'; }
    return 'play';
  }
  /* evaluation, from the side to move */
  var VAL = { P: 100, N: 320, B: 330, R: 500, Q: 900, K: 0 };
  function evalW(s) {
    var b = s.b, sc = 0, heavy = 0, i, p, u, r, c, w, ctr, v;
    for (i = 0; i < 64; i++) { u = b[i].toUpperCase(); if (u === 'Q') heavy += 9; else if (u === 'R') heavy += 5; else if (u === 'N' || u === 'B') heavy += 3; }
    var endgame = heavy <= 14;
    for (i = 0; i < 64; i++) {
      p = b[i]; if (!p) continue; w = isW(p); u = p.toUpperCase(); r = i >> 3; c = i & 7;
      ctr = 3.5 - Math.max(Math.abs(r - 3.5), Math.abs(c - 3.5));       // 0 (edge) … 3 (centre)
      v = VAL[u];
      if (u === 'P') { var adv = w ? 6 - r : r - 1; v += adv * (endgame ? 12 : 5) + ((c === 3 || c === 4) && adv >= 2 ? 14 : 0); }
      else if (u === 'N') v += ctr * 11 - 12;
      else if (u === 'B') v += ctr * 6;
      else if (u === 'R') v += (w ? r === 1 : r === 6) ? 15 : 0;
      else if (u === 'Q') v += ctr * 2;
      else v += endgame ? ctr * 12 : -ctr * 14 + ((w ? r === 7 : r === 0) ? 12 : 0);
      sc += w ? v : -v;
    }
    return sc;
  }
  function evalSide(s) { var e = evalW(s); return s.t === 'w' ? e : -e; }
  function order(ms) {
    for (var i = 0; i < ms.length; i++) { var m = ms[i]; m.o = (m.x ? 1000 + VAL[m.x.toUpperCase()] * 10 - VAL[m.p.toUpperCase()] : 0) + (m.pr ? 800 : 0) + Math.random(); }
    return ms.sort(function (a, b) { return b.o - a.o; });
  }
  var deadline = 0, nodes = 0, TIMEOUT = {};
  function quiesce(s, a, b, d) {
    var stand = evalSide(s);
    if (stand >= b) return b; if (stand > a) a = stand; if (d >= 4) return a;
    var ms = order(gen(s, true)), w = s.t === 'w';
    for (var i = 0; i < ms.length; i++) {
      var n = make(s, ms[i]); if (attacked(n.b, w ? n.kw : n.kb, !w)) continue;
      var sc = -quiesce(n, -b, -a, d + 1);
      if (sc >= b) return b; if (sc > a) a = sc;
    }
    return a;
  }
  function search(s, depth, a, b, ply) {
    if ((++nodes & 255) === 0 && Date.now() > deadline) throw TIMEOUT;
    if (depth <= 0) return quiesce(s, a, b, 0);
    var ms = order(gen(s)), w = s.t === 'w', any = false;
    for (var i = 0; i < ms.length; i++) {
      var n = make(s, ms[i]); if (attacked(n.b, w ? n.kw : n.kb, !w)) continue;
      any = true;
      var sc = -search(n, depth - 1, -b, -a, ply + 1);
      if (sc > a) { a = sc; if (a >= b) break; }
    }
    if (!any) return inCheck(s) ? -100000 + ply : 0;
    return a;
  }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function think(s, level) {
    var ms = legal(s), best = null, i, sc;
    if (!ms.length) return null;
    if (level === 'easy') { var caps = ms.filter(function (m) { return m.x; }); return caps.length && Math.random() < 0.4 ? pick(caps) : pick(ms); }
    if (level === 'medium') {
      deadline = Date.now() + 700; nodes = 0; var top = -1e9;
      for (i = 0; i < ms.length; i++) {
        var n = make(s, ms[i]);
        try { sc = legal(n).length ? -quiesce(n, -1e9, 1e9, 2) : (inCheck(n) ? 99999 : 0); } catch (e) { sc = -evalSide(n); }
        sc += Math.random() * 24;
        if (sc > top) { top = sc; best = ms[i]; }
      }
      return best;
    }
    deadline = Date.now() + 700; nodes = 0; order(ms); best = ms[0];
    for (var depth = 1; depth <= 4; depth++) {
      try {
        var a = -1e9, cur = null;
        for (i = 0; i < ms.length; i++) { sc = -search(make(s, ms[i]), depth - 1, -1e9, -a, 1); if (sc > a) { a = sc; cur = ms[i]; } }
        best = cur || best;
        ms.sort(function (x, y) { return (y === best) - (x === best); });           // best first for the next depth
        if (a > 90000) break;
      } catch (e) { if (e !== TIMEOUT) throw e; break; }
    }
    return best;
  }

  /* ───────── the game ───────── */
  var B, hist = [], S, sel = -1, moves = [], last = null, busy = false, timer = null, promo = null, tutOpen = false, tutPiece = 'N';
  function pname(p) { var n = NAMES[p.toUpperCase()]; return B.T(n[0], n[1]); }
  function side(w) { return w ? B.T('الأبيض', 'White') : B.T('الأسود', 'Black'); }
  function status() {
    if (B.over) return;
    var chk = inCheck(S) ? ' — ' + B.T('كِشّ! الملكُ في خطر', 'Check! The king is in danger') : '';
    if (B.mode === 'two') B.status(B.T('دورُ ', 'Turn: ') + side(S.t === 'w') + chk);
    else B.status(S.t === 'w' ? B.T('دورك (الأبيض)', 'Your turn (White)') + chk : B.T('الحاسوب يفكّر…', 'The computer is thinking…'));
  }
  function render() {
    var bs = B.stage.querySelectorAll('.ch > button'), chk = inCheck(S) ? (S.t === 'w' ? S.kw : S.kb) : -1, tg = {};
    if (sel >= 0) moves.forEach(function (m) { if (m.f === sel) tg[m.t] = m.x ? 'cap' : 'dot'; });
    for (var i = 0; i < 64; i++) {
      var p = S.b[i], cl = ((i >> 3) + (i & 7)) % 2 ? 'dk' : '';
      if (last && (last.f === i || last.t === i)) cl += ' last';
      if (i === sel) cl += ' sel'; if (i === chk) cl += ' chk'; if (tg[i]) cl += ' ' + tg[i];
      bs[i].className = cl; bs[i].innerHTML = p ? svg(p) : '';
      bs[i].setAttribute('aria-label', sqName(i) + (p ? ' ' + pname(p) + ' ' + side(isW(p)) : ''));
    }
    var pb = B.stage.querySelector('.chpromo'); if (pb) pb.remove();
    if (promo) {
      var d = document.createElement('div'); d.className = 'chpromo';
      d.innerHTML = ['Q', 'R', 'B', 'N'].map(function (x) { var pc = S.t === 'w' ? x : x.toLowerCase(); return '<button type="button" data-p="' + x + '" aria-label="' + pname(x) + '">' + svg(pc) + '</button>'; }).join('');
      B.stage.querySelector('.chwrap').appendChild(d);
      d.querySelectorAll('button').forEach(function (x) { x.onclick = function () { var m = promo.filter(function (q) { return q.pr === x.dataset.p; })[0]; promo = null; doMove(m); }; });
    }
    var u = document.getElementById('chUndo'); if (u) u.disabled = hist.length < 2 || busy;
    status();
  }
  function persist() { B.save({ fen: toFEN(S), last: last }); }
  function ending() {
    var v = verdict(S, hist); if (v === 'play') return false;
    B.over = true; render();
    var whiteWon = S.t === 'b';
    timer = setTimeout(function () {
      if (v === 'mate') {
        if (B.mode === 'two') B.win({ stars: 1, title: B.T('كِشّ مات!', 'Checkmate!'), msg: B.T('فاز ' + side(whiteWon) + ' — وأحسنَ اللاعبُ الآخر أيضًا!', side(whiteWon) + ' won — and well played to the other player too!') });
        else if (whiteWon) B.win({ title: B.T('كِشّ مات! أحسنت', 'Checkmate! Well done'), msg: B.T('حاصرتَ ملكَ الحاسوب فلم يجد مهربًا.', 'You trapped the computer\'s king with no escape.') });
        else B.lose(B.T('كِشّ مات — حاصر الحاسوبُ ملكَك هذه المرّة.', 'Checkmate — the computer trapped your king this time.'));
      } else B.draw({
        stale: B.T('تعادل: لا توجد حركةٌ مسموحة، والملكُ ليس في خطر.', 'Stalemate: no legal move, and the king is not in check.'),
        fifty: B.T('تعادل: خمسون حركةً بلا أسرٍ ولا تحريك بيدق.', 'Draw: fifty moves with no capture and no pawn move.'),
        rep: B.T('تعادل: تكرّر الوضعُ نفسه ثلاثَ مرّات.', 'Draw: the same position came up three times.'),
        bare: B.T('تعادل: لم تبقَ قطعٌ تكفي للفوز.', 'Draw: not enough pieces left to win.')
      }[v]);
    }, 700);
    return true;
  }
  function doMove(m) {
    S = make(S, m); hist.push(S); last = { f: m.f, t: m.t }; sel = -1; moves = legal(S);
    B.beep(m.x ? 'good' : 'tap'); persist(); render();
    if (ending()) return;
    if (B.mode === 'cpu' && S.t === 'b') cpuTurn();
  }
  function cpuTurn() {
    busy = true; render();
    timer = setTimeout(function () {
      var m = think(S, B.level); busy = false;
      if (m) { if (m.pr) m = legal(S).filter(function (q) { return q.f === m.f && q.t === m.t && q.pr === 'Q'; })[0] || m; doMove(m); }
    }, 260);
  }
  function tap(i) {
    if (B.over || busy || promo) return;
    var p = S.b[i], mine = p && isW(p) === (S.t === 'w');
    if (sel >= 0) {
      var ms = moves.filter(function (m) { return m.f === sel && m.t === i; });
      if (ms.length > 1) { promo = ms; render(); return; }
      if (ms.length === 1) { doMove(ms[0]); return; }
    }
    sel = mine && i !== sel ? i : -1; if (mine) B.beep('move'); render();
  }
  function undo() {
    if (busy || hist.length < 2) return;
    hist.pop(); if (B.mode === 'cpu' && hist.length > 1 && hist[hist.length - 1].t === 'b') hist.pop();
    S = hist[hist.length - 1]; last = null; sel = -1; promo = null; moves = legal(S); B.over = false; persist(); render();
  }
  function load(fen, lastMove) { clearTimeout(timer); busy = false; promo = null; S = fromFEN(fen); hist = [S]; sel = -1; last = lastMove || null; moves = legal(S); B.over = false; render(); }

  /* ───────── «تعرَّف على القطع» ───────── */
  var TUT = {
    K: ['يتحرّك الملكُ مربّعًا واحدًا في أيّ اتّجاه. هو أهمُّ قطعة، فاحمِه دائمًا!', 'The king moves one square in any direction. It is the most important piece — always keep it safe!'],
    Q: ['يتحرّك الوزيرُ أيَّ عددٍ من المربّعات: في خطٍّ مستقيمٍ أو مائل. هو أقوى القطع.', 'The queen moves any number of squares, straight or diagonally. It is the strongest piece.'],
    R: ['يتحرّك الرُّخُّ (القلعة) في خطٍّ مستقيم: إلى الأمام والخلف واليمين واليسار.', 'The rook moves in straight lines: forward, backward, left and right.'],
    B: ['يتحرّك الفيلُ في خطٍّ مائلٍ فقط، ويبقى دائمًا على لون مربّعه.', 'The bishop moves diagonally only, and always stays on its own colour of square.'],
    N: ['يقفز الحصانُ على شكل حرف L: مربّعين ثمّ مربّعًا إلى الجانب. هو الوحيد الذي يقفز فوق القطع.', 'The knight jumps in an L shape: two squares, then one to the side. It is the only piece that can jump over others.'],
    P: ['يتقدّم البيدقُ مربّعًا واحدًا إلى الأمام (أو مربّعين في أوّل حركةٍ له)، ويأسِر بشكلٍ مائل (الدوائر الحمراء). إذا وصل آخرَ اللوحة صار وزيرًا!', 'The pawn moves one square forward (or two on its first move) and captures diagonally (the red rings). When it reaches the far end it becomes a queen!']
  };
  function tutDraw() {
    var box = document.getElementById('chTut'); box.hidden = !tutOpen; if (!tutOpen) return;
    var b = new Array(64).fill(''), at = tutPiece === 'P' ? 51 : 35;
    b[at] = tutPiece; if (tutPiece === 'P') { b[42] = 'p'; b[44] = 'p'; }
    var ms = gen({ b: b, t: 'w', c: '', ep: -1 }), mark = {};
    ms.forEach(function (m) { if (m.f === at) mark[m.t] = m.x ? 'cap' : 'dot'; });
    var h = '<h2>🎓 ' + B.T('تعرَّف على القطع', 'Learn the pieces') + '</h2><div class="pcs">' + ['K', 'Q', 'R', 'B', 'N', 'P'].map(function (p) {
      return '<button type="button" data-p="' + p + '" class="' + (p === tutPiece ? 'on' : '') + '">' + svg(p) + '<span>' + pname(p) + '</span></button>';
    }).join('') + '</div><p>' + B.esc(B.T(TUT[tutPiece][0], TUT[tutPiece][1])) + '</p><div class="bd ch" aria-hidden="true">';
    for (var i = 0; i < 64; i++) h += '<span class="' + (((i >> 3) + (i & 7)) % 2 ? 'dk' : '') + (mark[i] ? ' ' + mark[i] : '') + '">' + (b[i] ? svg(b[i]) : '') + '</span>';
    box.innerHTML = h + '</div><div class="bbar"><button class="bbtn" type="button" id="chTutRead">' + B.T('🔊 اقرأ لي', '🔊 Read to me') + '</button></div>';
    box.querySelectorAll('.pcs button').forEach(function (x) { x.onclick = function () { tutPiece = x.dataset.p; tutDraw(); }; });
    document.getElementById('chTutRead').onclick = function () { Brain.speak(B.T(TUT[tutPiece][0], TUT[tutPiece][1])); };
  }
  function extra() {
    B.extra.innerHTML = '<button class="bbtn" id="chUndo" type="button">' + B.T('↩ تراجع عن حركة', '↩ Undo a move') + '</button><button class="bbtn" id="chLearn" type="button" aria-expanded="' + tutOpen + '">' + B.T('🎓 تعرَّف على القطع', '🎓 Learn the pieces') + '</button>';
    document.getElementById('chUndo').onclick = undo;
    document.getElementById('chLearn').onclick = function () { tutOpen = !tutOpen; this.setAttribute('aria-expanded', String(tutOpen)); tutDraw(); if (tutOpen) document.getElementById('chTut').scrollIntoView({ block: 'nearest', behavior: B.calm() ? 'auto' : 'smooth' }); };
  }
  Brain.game({
    id: 'chess',
    modes: [{ id: 'cpu', ar: 'ضدّ الحاسوب', en: 'vs Computer' }, { id: 'two', ar: 'لاعبان', en: 'Two players' }],
    how: {
      ar: ['اضغط قطعتَك فتظهر نقاطٌ على المربّعات التي تستطيع الذهابَ إليها، ثمّ اضغط أحدَها.', 'الهدف: أن تحاصر ملكَ الخصم فلا يجد مهربًا — وهذا هو «كِشّ مات».', 'لا تعرف حركةَ قطعة؟ اضغط «تعرَّف على القطع» أسفلَ اللوحة.'],
      en: ['Tap your piece: dots show the squares it can go to. Then tap one of them.', 'The goal: trap the other king so it cannot escape — that is "checkmate".', 'Not sure how a piece moves? Tap "Learn the pieces" under the board.']
    },
    init: function (b) {
      B = b; var h = '<div class="chwrap"><div class="bd ch">'; for (var i = 0; i < 64; i++) h += '<button type="button" data-i="' + i + '"></button>';
      B.stage.innerHTML = h + '</div></div>';
      B.stage.querySelectorAll('.ch > button').forEach(function (x) { x.onclick = function () { tap(+x.dataset.i); }; });
      var t = document.createElement('section'); t.className = 'bpanel chtut'; t.id = 'chTut'; t.hidden = true; B.extra.parentNode.appendChild(t);
      extra();
      B.api = {
        state: function () { return S; }, fen: function () { return toFEN(S); }, load: load, legal: function () { return legal(S).map(function (m) { return { f: m.f, t: m.t, pr: m.pr || '', x: m.x, ep: !!m.ep, cs: m.cs || '', from: sqName(m.f), to: sqName(m.t) }; }); },
        move: function (from, to, pr) { var m = legal(S).filter(function (q) { return sqName(q.f) === from && sqName(q.t) === to && (!q.pr || q.pr === (pr || 'Q')); })[0]; if (!m || B.over || busy) return false; doMove(m); return true; },
        verdict: function () { return verdict(S, hist); }, inCheck: function () { return inCheck(S); }, busy: function () { return busy; }, tap: tap,
        perft: function (fen, d) { function pf(st, k) { var ms = legal(st); if (k <= 1) return ms.length; var n = 0; for (var i = 0; i < ms.length; i++) n += pf(make(st, ms[i]), k - 1); return n; } return pf(fromFEN(fen), d); },
        sane: function () { return S.b.filter(function (p) { return p === 'K'; }).length === 1 && S.b.filter(function (p) { return p === 'k'; }).length === 1 && S.b.indexOf('K') === S.kw && S.b.indexOf('k') === S.kb && !attacked(S.b, S.t === 'w' ? S.kb : S.kw, S.t === 'w'); },
        think: function (lv) { var t0 = Date.now(), m = think(S, lv); return { ms: Date.now() - t0, from: m && sqName(m.f), to: m && sqName(m.t) }; }
      };
    },
    newGame: function () { load(START); },
    restore: function (b, s) { if (!s || !s.fen) return false; load(s.fen, s.last); if (verdict(S) !== 'play') return false; if (B.mode === 'cpu' && S.t === 'b') cpuTurn(); },
    relang: function () { extra(); render(); tutDraw(); }
  });
})();
