/* «مصنع الأسئلة» — Question Factory (idea inspired by "one question set, many games").
   1) pick a question set: from the Reading Club (multiple choice), from the Competitions bank (flash cards: think → show the answer → «I knew it / not yet»),
      quick-maths generators, or a family's own set (made in the editor, kept on this device, shareable as a link — no server).
   2) pick a game skin: ⛵ boat race · 🏗️ crane builds a mosque · 🌱 garden drops · 🌊 sea treasure · 🎡 points wheel · 🃏 flash cards.
   Every skin runs the same round of up to 8 questions; ⭐ via MKJourney.earn('qf', skin, n, {daily:true}). */
(function () {
  'use strict';
  var root = document.getElementById('qf'); if (!root) return;
  var LS = null; try { LS = window.localStorage; } catch (e) {}
  function jget(k, d) { try { var v = LS && LS.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function jset(k, v) { try { LS && LS.setItem(k, JSON.stringify(v)); } catch (e) {} }
  var lang = 'ar'; try { lang = (LS && LS.getItem('bunyanLang') || 'ar').indexOf('en') === 0 ? 'en' : 'ar'; } catch (e) {}
  function T(a, e) { return lang === 'ar' ? a : e; }
  function N(n) { return lang === 'ar' ? String(n).replace(/\d/g, function (d) { return '٠١٢٣٤٥٦٧٨٩'[d]; }) : String(n); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function calm() { try { return document.documentElement.classList.contains('calm') || matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  function shuffle(x) { x = x.slice(); for (var i = x.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = x[i]; x[i] = x[j]; x[j] = t; } return x; }
  function $(id) { return document.getElementById(id); }
  /* ── sound: a small synthesiser (free, no files) — chimes, splashes, whooshes, clanks, bubbles ── */
  var AC = null, MASTER = null;
  function sfxOn() { try { var o = jget('mk:a11y', null); return !(o && o.sfx === 'off'); } catch (e) { return true; } }
  function ac() { if (!AC) { AC = new (window.AudioContext || window.webkitAudioContext)(); MASTER = AC.createGain(); MASTER.gain.value = 0.55; MASTER.connect(AC.destination); } if (AC.state !== 'running') try { AC.resume(); } catch (e) {} return AC; }
  function tone(f, t0, dur, type, vol, f2) {
    var a = ac(), o = a.createOscillator(), g = a.createGain(), t = a.currentTime + t0;
    o.type = type || 'sine'; o.frequency.setValueAtTime(f, t); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol || 0.2, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(MASTER); o.start(t); o.stop(t + dur + 0.02);
  }
  var NB = null;
  function noise(t0, dur, ftype, f1, f2, vol) {
    var a = ac(); if (!NB) { NB = a.createBuffer(1, a.sampleRate, a.sampleRate); var d = NB.getChannelData(0); for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }
    var s = a.createBufferSource(), fl = a.createBiquadFilter(), g = a.createGain(), t = a.currentTime + t0;
    s.buffer = NB; fl.type = ftype; fl.frequency.setValueAtTime(f1, t); if (f2) fl.frequency.exponentialRampToValueAtTime(f2, t + dur); fl.Q.value = ftype === 'bandpass' ? 1.2 : 0.7;
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol || 0.25, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(fl); fl.connect(g); g.connect(MASTER); s.start(t); s.stop(t + dur + 0.05);
  }
  var SFX = {
    ok: function () { tone(1046.5, 0, .5, 'sine', .22); tone(1318.5, .07, .55, 'sine', .2); tone(2093, .07, .35, 'triangle', .06); tone(2637, .14, .3, 'sine', .05); },
    no: function () { tone(330, 0, .32, 'sine', .16, 220); tone(165, 0, .32, 'triangle', .06, 110); },
    win: function () { [523.3, 659.3, 784, 1046.5].forEach(function (f, i) { tone(f, i * .11, .35, 'triangle', .16); tone(f * 2, i * .11, .25, 'sine', .04); }); [523.3, 659.3, 784, 1046.5].forEach(function (f) { tone(f, .5, 1.1, 'sine', .09); }); noise(.48, .9, 'highpass', 6000, 9000, .05); },
    tick: function () { noise(0, .04, 'highpass', 3000, 0, .12); },
    pop: function () { tone(520, 0, .1, 'sine', .18, 980); },
    splash: function () { noise(0, .45, 'lowpass', 1800, 300, .3); noise(.05, .3, 'bandpass', 900, 2500, .08); },
    whoosh: function () { noise(0, .35, 'bandpass', 400, 2200, .22); },
    clank: function () { tone(190, 0, .12, 'square', .07, 150); noise(0, .12, 'bandpass', 2500, 1500, .12); tone(95, .02, .2, 'sine', .14); },
    bubble: function () { tone(420, 0, .12, 'sine', .14, 1100); tone(600, .08, .1, 'sine', .08, 1400); },
    drip: function () { tone(1400, 0, .09, 'sine', .14, 500); },
    flip: function () { noise(0, .12, 'bandpass', 1800, 4200, .16); },
    grow: function () { tone(392, 0, .5, 'sine', .08, 784); tone(587, .05, .5, 'triangle', .04, 1175); }
  };
  function beep(kind) { if (!sfxOn()) return; try { (SFX[kind] || SFX.tick)(); } catch (e) {} }

  /* ── effects: star bursts and confetti on a canvas over the page ── */
  var FX = { cv: null, x: null, parts: [], raf: 0 };
  function fxCanvas() {
    if (FX.cv && document.body.contains(FX.cv)) return FX.cv;
    var c = document.createElement('canvas'); c.style.cssText = 'position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:60'; c.setAttribute('aria-hidden', 'true'); document.body.appendChild(c); FX.cv = c; FX.x = c.getContext('2d'); return c;
  }
  function burst(el, n, kind) {
    if (calm() || !el) return; var c = fxCanvas(), r = el.getBoundingClientRect(), dpr = Math.min(2, devicePixelRatio || 1);
    c.width = innerWidth * dpr; c.height = innerHeight * dpr; FX.x.setTransform(dpr, 0, 0, dpr, 0, 0);
    var cols = ['#FFD54A', '#FF8A3D', '#3BB36D', '#2F6FD6', '#E5574A', '#C77DFF', '#37B8C4'];
    for (var i = 0; i < n; i++) {
      var conf = kind === 'confetti', a = Math.random() * Math.PI * 2, sp = conf ? 2 + Math.random() * 5 : 1.5 + Math.random() * 4;
      FX.parts.push({ x: conf ? Math.random() * innerWidth : r.left + r.width / 2, y: conf ? -10 - Math.random() * 80 : r.top + r.height / 2, vx: conf ? (Math.random() - .5) * 3 : Math.cos(a) * sp, vy: conf ? 1.5 + Math.random() * 3 : Math.sin(a) * sp - 1.5, g: conf ? .05 : .12, life: conf ? 220 : 55 + Math.random() * 25, s: conf ? 5 + Math.random() * 5 : 4 + Math.random() * 5, c: cols[i % cols.length], rot: Math.random() * 6, vr: (Math.random() - .5) * .3, star: !conf });
    }
    if (!FX.raf) FX.raf = requestAnimationFrame(fxLoop);
  }
  function starPath(x, s) { x.beginPath(); for (var i = 0; i < 10; i++) { var r = i % 2 ? s * .45 : s, a = i * Math.PI / 5 - Math.PI / 2; x.lineTo(Math.cos(a) * r, Math.sin(a) * r); } x.closePath(); }
  function fxLoop() {
    var x = FX.x; x.clearRect(0, 0, innerWidth, innerHeight);
    FX.parts = FX.parts.filter(function (p) { return p.life > 0; });
    FX.parts.forEach(function (p) { p.life--; p.vy += p.g; p.x += p.vx; p.y += p.vy; p.rot += p.vr; x.save(); x.globalAlpha = Math.min(1, p.life / 30); x.translate(p.x, p.y); x.rotate(p.rot); x.fillStyle = p.c; if (p.star) { starPath(x, p.s); x.fill(); } else x.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); x.restore(); });
    FX.raf = FX.parts.length ? requestAnimationFrame(fxLoop) : 0; if (!FX.raf) x.clearRect(0, 0, innerWidth, innerHeight);
  }

  /* ── «بلبل» the mascot bird: reacts to answers (an animal, never a person) ── */
  var BUL = '<svg viewBox="0 0 80 80" aria-hidden="true"><ellipse cx="40" cy="74" rx="20" ry="3.5" fill="rgba(0,0,0,.12)"/><g class="bul-body"><path d="M18 50 q-10 -2 -12 8 q10 2 16 -3z" fill="#5B6F8F"/><ellipse cx="40" cy="48" rx="22" ry="20" fill="#7A8FB0"/><ellipse cx="44" cy="54" rx="13" ry="12" fill="#F3E6C8"/><path d="M27 44 q8 -4 12 6 q-10 6 -16 0z" fill="#5B6F8F" class="bul-wing"/><circle cx="46" cy="31" r="14" fill="#3E4D66"/><path d="M40 17 q4 -9 10 -4 q-3 3 -4 7z" fill="#3E4D66"/><circle cx="51" cy="29" r="3.4" fill="#fff"/><circle cx="52" cy="29" r="1.8" fill="#1d2b44"/><path d="M58 33 l9 2 -9 3z" fill="#F0A33A"/><circle cx="50" cy="38" r="3.5" fill="#E5574A" opacity=".85"/><path d="M34 66 v6 m10 -6 v6" stroke="#C9822A" stroke-width="2.5" stroke-linecap="round"/></g></svg>';
  var PRAISE = [['أحسنت!', 'Well done!'], ['ما شاء الله!', 'Masha\'Allah!'], ['رائع!', 'Great!'], ['بارك الله فيك!', 'Barakallahu feek!'], ['ممتاز!', 'Excellent!']];
  var CHEER = [['لا بأس، نتعلّم!', 'That\'s okay, we learn!'], ['حاول مرّةً أخرى!', 'Try again!'], ['ركّز معي!', 'Focus with me!']];
  function mascot(state, txt) {
    var m = $('qfBul'); if (!m) return;
    m.className = 'qf-bul ' + state; void m.offsetWidth; m.classList.add('go');
    var b = $('qfBulSay'); if (b) { b.textContent = txt || ''; b.style.opacity = txt ? '1' : '0'; }
  }

  /* ════════ question sources ════════ */
  var RF = { poetry: ['📜', 'شعر وحكمة', 'Poetry'], arabic: ['🔤', 'لغتنا الجميلة', 'Arabic'], glory: ['🏰', 'أمجادنا ودروس التاريخ', 'Our glories'], history: ['🏛️', 'تاريخ وحضارة', 'History'], scholars: ['🔭', 'علماء ومخترعون', 'Scholars'], science: ['🐝', 'علوم وعجائب الخلق', 'Science'], space: ['🌙', 'الفضاء والأرض', 'Space'], geo: ['🗺️', 'بلدان وجغرافيا', 'Geography'], lead: ['🧭', 'القيادة والتفكير', 'Leadership'], money: ['🪙', 'المال والاقتصاد', 'Money'], health: ['💪', 'صحّتي وجسمي', 'Health'] };
  function readingSets() {
    var by = {}; (window.READ || []).forEach(function (a) { (by[a.f] = by[a.f] || []).push(a); });
    return Object.keys(RF).filter(function (f) { return by[f]; }).map(function (f) {
      var qs = []; by[f].forEach(function (a) { a.q.forEach(function (q) { qs.push({ type: 'mcq', q: q.q, em: a.ic, a: q.o[0], w: q.o.slice(1) }); }); });
      return { id: 'read-' + f, ic: RF[f][0], name: { ar: RF[f][1], en: RF[f][2] }, sub: { ar: 'من نادي القراءة', en: 'From the Reading Club' }, qs: qs };
    });
  }
  function mathSet(id) {
    var qs = [], R = function (a, b) { return a + Math.floor(Math.random() * (b - a + 1)); };
    for (var i = 0; i < 12; i++) {
      var x, y, ans, q;
      if (id === 'm-add10') { x = R(1, 9); y = R(1, 10 - x); ans = x + y; q = N(x) + ' + ' + N(y) + ' = ؟'; }
      else if (id === 'm-100') { if (Math.random() < .5) { x = R(10, 80); y = R(5, 99 - x); ans = x + y; q = N(x) + ' + ' + N(y) + ' = ؟'; } else { x = R(20, 99); y = R(5, x - 1); ans = x - y; q = N(x) + ' − ' + N(y) + ' = ؟'; } }
      else { x = R(2, 10); y = R(2, 10); ans = x * y; q = N(x) + ' × ' + N(y) + ' = ؟'; }
      var w = []; [1, -1, 2, -2, 10, -10, x, -y].forEach(function (d) { var v = ans + d; if (v > 0 && v !== ans && w.indexOf(v) < 0 && w.length < 3) w.push(v); });
      qs.push({ type: 'mcq', q: q, em: '🧮', a: N(ans), w: w.map(N) });
    }
    return qs;
  }
  var MATH = [['m-add10', '➕', 'الجمع حتى ١٠', 'Adding to 10', '٧–٨ سنوات', 'Ages 7–8'], ['m-100', '🔢', 'الجمع والطرح حتى ١٠٠', 'Add & subtract to 100', '٨–٩ سنوات', 'Ages 8–9'], ['m-times', '✖️', 'جدول الضرب', 'Times tables', '٨–١٢ سنة', 'Ages 8–12']];
  var bankReady = false, bankLoading = false;
  function loadBank(cb) {
    if (bankReady) return cb();
    if (bankLoading) return; bankLoading = true;
    var files = ['../competitions/bank.js', '../competitions/bank-puzzles.js', '../competitions/bank-whoami.js'], i = 0;
    (function next() {
      if (i >= files.length) { bankReady = true; bankLoading = false; return cb(); }
      var s = document.createElement('script'); s.src = files[i++]; s.onload = next; s.onerror = next; document.head.appendChild(s);
    })();
  }
  function bankSets() {
    var B = window.COMP_BANK; if (!B) return [];
    return B.topics.map(function (t) {
      var qs = B.questions.filter(function (q) { return q.topic === t.id && q.q && q.answer; }).map(function (q) { return { type: 'flash', q: String(q.q).replace(/^\(س\s*[٠-٩0-9]+\)\s*/, ''), em: t.icon, a: q.answer }; });
      return { id: 'bank-' + t.id, ic: t.icon, name: t.name, sub: { ar: 'بطاقات: فكّر ثم اكشف الجواب', en: 'Flash: think, then reveal' }, qs: qs };
    }).filter(function (s) { return s.qs.length; });
  }
  function mySets() { return jget('qf_sets', []) || []; }
  function saveMine(list) { jset('qf_sets', list); }

  /* ════════ the six game skins ════════ */
  var SKINS = [
    { id: 'boat', ic: '⛵', ar: 'سباق المراكب', en: 'Boat race', dar: 'كلّ إجابةٍ صحيحة تدفع مركبك', den: 'Each right answer moves your boat' },
    { id: 'crane', ic: '🏗️', ar: 'رافعة البنّاء', en: 'Builder crane', dar: 'ابنِ المسجد حجرًا حجرًا', den: 'Build the mosque block by block' },
    { id: 'garden', ic: '🌱', ar: 'حديقة القطرات', en: 'Drop garden', dar: 'اسقِ النبتة حتى تُزهر', den: 'Water the plant until it blooms' },
    { id: 'dive', ic: '🌊', ar: 'كنز البحر', en: 'Sea treasure', dar: 'انزل بالغوّاصة إلى الكنز', den: 'Take the submarine down to the treasure' },
    { id: 'wheel', ic: '🎡', ar: 'عجلة النقاط', en: 'Points wheel', dar: 'أدِر العجلة ثم أجب', den: 'Spin, then answer' },
    { id: 'cards', ic: '🃏', ar: 'البطاقات', en: 'Flash cards', dar: 'اقلب البطاقة وراجع', den: 'Flip and review' }
  ];
  var SC = {};   /* per-skin scenes: init(el, g), right(nRight, g), wrong(nWrong, g), end(win, g) — rich SVG, moved with CSS transforms */
  function svg(inner) { return '<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' + inner + '</svg>'; }
  function mv(id, x, y, extra) { var e = $(id); if (e) e.style.transform = 'translate(' + (x || 0) + 'px,' + (y || 0) + 'px)' + (extra || ''); }
  function pulse(id, cls) { var e = $(id); if (!e) return; e.classList.remove(cls); void e.getBoundingClientRect(); e.classList.add(cls); }
  function clouds(n, y0) { var h = ''; for (var i = 0; i < n; i++) { var y = y0 + i * 13, s = .7 + (i % 3) * .25; h += '<g class="qf-cloud" style="animation-duration:' + (38 + i * 11) + 's;animation-delay:-' + (i * 13) + 's"><g transform="translate(0,' + y + ') scale(' + s + ')"><ellipse cx="0" cy="0" rx="18" ry="8" fill="#fff" opacity=".95"/><ellipse cx="12" cy="-5" rx="12" ry="9" fill="#fff"/><ellipse cx="-10" cy="-3" rx="9" ry="7" fill="#fff"/></g></g>'; } return h; }
  function sun(x, y, r) { return '<g transform="translate(' + x + ',' + y + ')"><g class="qf-rays">' + [0, 30, 60, 90, 120, 150].map(function (a) { return '<rect x="-1.6" y="' + (-r - 12) + '" width="3.2" height="' + (r * 2 + 24) + '" rx="1.6" fill="#FFE07A" opacity=".55" transform="rotate(' + a + ')"/>'; }).join('') + '</g><circle r="' + (r + 4) + '" fill="#FFE9A0" opacity=".6"/><circle r="' + r + '" fill="#FFD23F"/></g>'; }
  function boat(id, hull, sail, flag, label) {
    return '<g id="' + id + '" class="mv"><g class="qf-bob">' + (label ? '<g transform="translate(22,-34)"><rect x="-22" y="-8" width="44" height="13" rx="6.5" fill="rgba(255,255,255,.92)"/><text y="1.5" text-anchor="middle" font-family="Tajawal,sans-serif" font-weight="900" font-size="8" fill="#1D2B44">' + label + '</text></g>' : '') +
      '<ellipse cx="22" cy="31" rx="30" ry="3" fill="#fff" opacity=".35" class="qf-wake"/>' +
      '<path d="M-6 18 h56 q-4 14 -14 15 h-30 q-9 -1 -12 -15z" fill="' + hull + '"/><path d="M-6 18 h56 l-1.5 4 h-53z" fill="#fff" opacity=".35"/>' +
      '<circle cx="10" cy="24" r="2" fill="#fff" opacity=".8"/><circle cx="22" cy="24" r="2" fill="#fff" opacity=".8"/><circle cx="34" cy="24" r="2" fill="#fff" opacity=".8"/>' +
      '<rect x="21" y="-22" width="2.6" height="40" fill="#5A3A22"/><path d="M24 -20 q20 14 2 34 h-2z" fill="' + sail + '"/><path d="M20 -16 q-14 12 -2 28 h2z" fill="' + sail + '" opacity=".85"/>' +
      '<path d="M23 -22 l12 4 -12 4z" fill="' + flag + '"/></g></g>';
  }
  SC.boat = {
    init: function (el, g) {
      el.innerHTML = svg('<defs><linearGradient id="bSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7EC8FF"/><stop offset="1" stop-color="#DDF2FF"/></linearGradient><linearGradient id="bSea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2F8BD6"/><stop offset="1" stop-color="#0F4F8F"/></linearGradient></defs>' +
        '<rect width="320" height="180" fill="url(#bSky)"/>' + sun(268, 30, 13) + clouds(3, 18) +
        '<path d="M232 82 q20 -16 48 -6 q16 4 40 0 v8 h-88z" fill="#5FAF6A"/><g transform="translate(268,72)"><path d="M0 0 q2 -14 6 -22" stroke="#7A4B2A" stroke-width="2.4" fill="none"/><path d="M6 -22 q-10 -4 -16 2 M6 -22 q10 -5 16 1 M6 -22 q-4 -9 -12 -10 M6 -22 q5 -9 13 -9" stroke="#2E9E5B" stroke-width="3" fill="none" stroke-linecap="round"/></g>' +
        '<g transform="translate(120,30)"><path class="qf-gull" d="M0 0 q5 -5 9 0 q4 -5 9 0" stroke="#3E4D66" stroke-width="1.6" fill="none"/></g><g transform="translate(150,44)"><path class="qf-gull" style="animation-delay:-.4s" d="M0 0 q4 -4 7 0 q3 -4 7 0" stroke="#3E4D66" stroke-width="1.4" fill="none"/></g>' +
        '<rect y="82" width="320" height="98" fill="url(#bSea)"/>' +
        '<g class="qf-wave"><path d="M-40 92 q10 -5 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" stroke="#8FD0FF" stroke-width="2" fill="none" opacity=".7"/></g>' +
        '<g class="qf-wave" style="animation-duration:9s"><path d="M-40 128 q12 -5 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0" stroke="#6CB8F0" stroke-width="2" fill="none" opacity=".55"/></g>' +
        '<g class="qf-wave" style="animation-duration:7s"><path d="M-40 168 q10 -4 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" stroke="#4E9FDF" stroke-width="2" fill="none" opacity=".6"/></g>' +
        '<g transform="translate(292,84)"><rect x="-1" width="2.4" height="92" fill="#fff"/>' + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (i) { return '<rect x="' + (i % 2 ? 1.4 : -1) + '" y="' + (i * 7.5) + '" width="2.4" height="7.5" fill="#1D2B44"/>'; }).join('') + '<path d="M1 -14 h16 v10 h-16z" fill="#fff" stroke="#1D2B44" stroke-width=".8"/><path d="M1 -14 h4 v5 h-4z M9 -14 h4 v5 h-4z M5 -9 h4 v5 h-4z M13 -9 h4 v5 h-4z" fill="#1D2B44"/><rect x="0" y="-16" width="1.6" height="22" fill="#5A3A22"/></g>' +
        '<g transform="translate(286,112)"><circle r="5" fill="#E5574A"/><rect x="-5" y="-1" width="10" height="2" fill="#fff"/></g><g transform="translate(286,160)"><circle r="5" fill="#E5574A"/><rect x="-5" y="-1" width="10" height="2" fill="#fff"/></g>' +
        '<g transform="translate(16,82)">' + boat('sbR', '#6B7280', '#E8E8EE', '#9AA3AD', T('الريح', 'Wind')) + '</g>' +
        '<g transform="translate(16,128)">' + boat('sbY', '#B5562A', '#FFFFFF', '#2E9E5B', T('مركبي ⭐', 'My boat ⭐')) + '</g>' +
        '');
    },
    right: function (n, g) { mv('sbY', Math.min(1, n / g.need) * 236, 0); beep('splash'); burst($('sbY'), 14); },
    wrong: function (n, g) { mv('sbR', Math.min(1, n / g.lose) * 236, 0); beep('whoosh'); },
    end: function (win) { if (win) pulse('sbY', 'qf-hop'); }
  };
  SC.crane = {
    init: function (el, g) {
      var blocks = ''; for (var i = 0; i < 8; i++) { var c = i % 4, r = Math.floor(i / 4), x = 136 + c * 24, y = 146 - r * 22;
        blocks += '<g id="cb' + i + '" class="qf-blk" style="opacity:0;transform:translate(0px,-40px)"><rect x="' + x + '" y="' + y + '" width="23.4" height="21.4" rx="1.5" fill="url(#cStone)" stroke="#B89A62" stroke-width=".8"/><path d="M' + x + ' ' + (y + 10.7) + ' h23.4 M' + (x + 11.7) + ' ' + y + ' v10.7 M' + (x + 6) + ' ' + (y + 10.7) + ' v10.7 M' + (x + 17.5) + ' ' + (y + 10.7) + ' v10.7" stroke="#C9AE77" stroke-width=".7"/>' + (r === 0 && (c === 1 || c === 2) ? '<path d="M' + (x + 7) + ' ' + (y + 21.4) + ' v-9 a4.7 4.7 0 0 1 9.4 0 v9z" fill="#5A3A22"/>' : r === 1 ? '<path d="M' + (x + 8.5) + ' ' + (y + 15) + ' v-5 a3.2 3.2 0 0 1 6.4 0 v5z" fill="#2F6FD6" opacity=".8"/>' : '') + '</g>';
        blocks += '<rect x="' + x + '" y="' + y + '" width="23.4" height="21.4" rx="1.5" fill="none" stroke="#9FB7D6" stroke-dasharray="2 2" stroke-width=".8"/>'; }
      var truss = ''; for (var k = 0; k < 9; k++) truss += '<path d="M44 ' + (164 - k * 16) + ' l8 -16 M52 ' + (164 - k * 16) + ' l-8 -16" stroke="#C88A1A" stroke-width="1"/>';
      var jib = ''; for (var j = 0; j < 12; j++) jib += '<path d="M' + (48 + j * 16) + ' 22 l8 8 l8 -8" stroke="#C88A1A" stroke-width="1" fill="none"/>';
      el.innerHTML = svg('<defs><linearGradient id="cSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9FD5FF"/><stop offset="1" stop-color="#FFF1D2"/></linearGradient><linearGradient id="cStone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FBF3DC"/><stop offset="1" stop-color="#E8D6A8"/></linearGradient><linearGradient id="cDomeG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5FD39A"/><stop offset="1" stop-color="#1F7A4C"/></linearGradient></defs>' +
        '<rect width="320" height="180" fill="url(#cSky)"/>' + sun(286, 26, 11) + clouds(2, 22) +
        '<g fill="#B9CCE3" opacity=".8"><path d="M0 150 v-26 h18 v26z M22 150 v-14 a9 9 0 0 1 18 0 v14z M60 150 v-34 l3 -6 3 6 v34z M246 150 v-20 a12 12 0 0 1 24 0 v20z M276 150 v-40 l3 -7 3 7 v40z M290 150 v-18 h30 v18z"/></g>' +
        '<rect y="166" width="320" height="14" fill="#C9A86A"/><rect y="166" width="320" height="3" fill="#B08D50"/>' +
        '<rect x="128" y="164" width="108" height="5" fill="#9E8556"/>' + blocks +
        '<g id="cDome" style="opacity:0" class="fade"><g transform="translate(5,22)"><path d="M150 102 a28 26 0 0 1 56 0z" fill="url(#cDomeG)"/><path d="M158 96 a20 18 0 0 1 14 -14" stroke="#fff" stroke-width="2" opacity=".5" fill="none"/><rect x="149" y="100" width="58" height="4" rx="1" fill="#E8D6A8"/><rect x="176.6" y="66" width="2.8" height="12" fill="#E3B23C"/><path d="M178 58 a5 5 0 1 0 4 8 a4 4 0 1 1 -4 -8z" fill="#E3B23C"/></g>' +
        '<rect x="242" y="70" width="12" height="96" fill="url(#cStone)" stroke="#B89A62" stroke-width=".8"/><rect x="239" y="96" width="18" height="4" rx="1" fill="#E8D6A8" stroke="#B89A62" stroke-width=".6"/><path d="M241 70 l7 -18 7 18z" fill="url(#cDomeG)"/><rect x="247.3" y="44" width="1.6" height="8" fill="#E3B23C"/></g>' +
        '<rect x="44" y="20" width="8" height="146" fill="none" stroke="#E3A72F" stroke-width="2"/>' + truss +
        '<rect x="44" y="18" width="196" height="12" fill="none" stroke="#E3A72F" stroke-width="2"/>' + jib +
        '<rect x="14" y="18" width="34" height="12" fill="#E3A72F"/><rect x="16" y="30" width="18" height="14" fill="#6B6B6B"/><rect x="50" y="30" width="16" height="13" rx="2" fill="#F5B731"/><rect x="53" y="33" width="10" height="6" fill="#BFE6FF"/>' +
        '<rect x="170" y="29" width="16" height="5" fill="#555"/>' +
        '<g id="cHook" class="mv"><rect x="177.4" y="34" width="1.2" height="26" fill="#333"/><path d="M174 60 h8 l-1 4 h-6z" fill="#444"/><g id="cBlk"><rect x="166.3" y="64" width="23.4" height="18" rx="1.5" fill="url(#cStone)" stroke="#B89A62" stroke-width=".8"/><path d="M166.3 73 h23.4 M178 64 v9" stroke="#C9AE77" stroke-width=".7"/></g></g>');
      g.slot = 0;
    },
    right: function (n, g) {
      var i = Math.min(7, Math.round(n * 8 / g.total) - 1); if (i < g.slot) i = g.slot;
      mv('cHook', 0, 34); beep('whoosh');
      setTimeout(function () {
        if (!$('cHook')) return;
        for (var k = g.slot; k <= i; k++) { var b = $('cb' + k); if (b) { b.style.opacity = '1'; b.style.transform = 'translate(0px,0px)'; } }
        g.slot = i + 1; beep('clank'); burst($('cb' + i), 8); mv('cHook', 0, 0);
      }, calm() ? 0 : 520);
    },
    wrong: function () { pulse('cHook', 'qf-shake'); beep('no'); },
    end: function (win) { if (win) { for (var k = 0; k < 8; k++) { var b = $('cb' + k); b.style.opacity = '1'; b.style.transform = 'translate(0px,0px)'; } $('cDome').style.opacity = '1'; $('cBlk').style.opacity = '0'; burst($('cDome'), 24); } }
  };
  SC.garden = {
    init: function (el) {
      var pick = ''; for (var i = 0; i < 17; i++) pick += '<path d="M' + (i * 20) + ' 128 v-22 l5 -6 5 6 v22z" fill="#F1DDB2" stroke="#D4B987" stroke-width=".8"/>';
      var leaves = [[96, -1], [78, 1], [60, -1], [44, 1]].map(function (l, i) { return '<g id="gL' + i + '" class="qf-leaf" style="opacity:0"><path d="M160 ' + l[0] + ' q' + (l[1] * 28) + ' -4 ' + (l[1] * 34) + ' -20 q' + (l[1] * -24) + ' 0 ' + (l[1] * -34) + ' 18z" fill="#3BB36D"/><path d="M160 ' + l[0] + ' q' + (l[1] * 18) + ' -6 ' + (l[1] * 30) + ' -18" stroke="#2A8A50" stroke-width="1" fill="none"/></g>'; }).join('');
      var fl = [[160, 30, '#E5574A', 1.15], [132, 56, '#F5CC5A', .9], [188, 46, '#C77DFF', .95]].map(function (f, i) { return '<g id="gF' + i + '" class="qf-bloom" style="transform-origin:' + f[0] + 'px ' + f[1] + 'px;transform:scale(0)"><g transform="translate(' + f[0] + ',' + f[1] + ') scale(' + f[3] + ')">' + [0, 60, 120, 180, 240, 300].map(function (a) { return '<ellipse rx="5.5" ry="10" fill="' + f[2] + '" transform="rotate(' + a + ') translate(0,-8)"/>'; }).join('') + '<circle r="5.5" fill="#FFE07A"/><circle r="2.5" fill="#F0A33A"/></g></g>'; }).join('');
      el.innerHTML = svg('<defs><linearGradient id="gSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#A6DBFF"/><stop offset="1" stop-color="#F2FBFF"/></linearGradient><linearGradient id="gPot" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#A9562A"/><stop offset=".45" stop-color="#D9773F"/><stop offset="1" stop-color="#9C4C24"/></linearGradient></defs>' +
        '<rect width="320" height="180" fill="url(#gSky)"/>' + sun(40, 30, 12) + clouds(2, 20) + pick +
        '<path d="M0 132 q80 -14 160 0 t160 0 v48 h-320z" fill="#7BC86A"/><path d="M0 146 q80 -10 160 0 t160 0 v34 h-320z" fill="#5FB052"/>' +
        [[30, 150, '#F5CC5A'], [62, 160, '#E5574A'], [270, 152, '#C77DFF'], [298, 164, '#F5CC5A'], [244, 166, '#fff']].map(function (f) { return '<g transform="translate(' + f[0] + ',' + f[1] + ')"><rect x="-.6" y="0" width="1.2" height="8" fill="#2E9E5B"/>' + [0, 72, 144, 216, 288].map(function (a) { return '<circle r="2.2" fill="' + f[2] + '" transform="rotate(' + a + ') translate(0,-2.6)"/>'; }).join('') + '<circle r="1.4" fill="#FFE07A"/></g>'; }).join('') +
        '<g id="gStem" style="transform-box:fill-box;transform-origin:50% 100%;transform:scaleY(.06);transition:transform .8s cubic-bezier(.3,1.4,.5,1)"><path d="M160 124 q-4 -40 0 -96" stroke="#2E9E5B" stroke-width="5" fill="none" stroke-linecap="round"/></g>' + leaves + fl +
        '<path d="M118 126 h84 l-9 38 h-66z" fill="url(#gPot)"/><rect x="113" y="118" width="94" height="11" rx="3" fill="#C8663A"/><rect x="113" y="118" width="94" height="3" rx="1.5" fill="#E38A57"/><ellipse cx="160" cy="121" rx="40" ry="3" fill="#5A3A22"/>' +
        '<g id="gFl" style="opacity:0" class="fade">' + [[118, 40, '#F0963C'], [206, 30, '#37B8C4']].map(function (b, i) { return '<g class="qf-fly" style="animation-delay:-' + i * 1.3 + 's"><g transform="translate(' + b[0] + ',' + b[1] + ')"><ellipse class="qf-wing" cx="-5" cy="0" rx="6" ry="8" fill="' + b[2] + '"/><ellipse class="qf-wing" cx="5" cy="0" rx="6" ry="8" fill="' + b[2] + '"/><rect x="-1" y="-6" width="2" height="12" rx="1" fill="#3E2A1A"/></g></g>'; }).join('') + '</g>' +
        '<g id="gCan" style="transform-box:fill-box;transform-origin:20% 60%;transition:transform .35s"><g transform="translate(228,44)"><path d="M0 0 h34 v26 q0 5 -5 5 h-24 q-5 0 -5 -5z" fill="#4AA3E8"/><path d="M4 0 q13 -14 26 0" stroke="#2F7FC0" stroke-width="3.5" fill="none"/><path d="M0 8 l-26 -12 -2 5 26 14z" fill="#3A8FD6"/><ellipse cx="-27" cy="-5" rx="4" ry="6" fill="#2F7FC0" transform="rotate(-30 -27 -5)"/><rect x="4" y="6" width="26" height="4" fill="#fff" opacity=".35"/></g></g>' +
        '<g id="gDrops" style="opacity:0">' + [0, 1, 2, 3].map(function (i) { return '<path class="qf-drop" style="animation-delay:' + (i * .12) + 's" d="M' + (196 - i * 4) + ' 40 q3 5 0 8 q-3 -3 0 -8z" fill="#2F8FE0"/>'; }).join('') + '</g>' +
        '<circle id="gDrop" cx="245" cy="70" r="0" fill="none"/>');
    },
    right: function (n, g) {
      var c = $('gCan'), d = $('gDrops'); c.style.transform = 'rotate(-28deg)'; d.style.opacity = '1'; beep('drip'); setTimeout(function () { beep('drip'); }, 160);
      setTimeout(function () {
        if (!$('gStem')) return;
        c.style.transform = ''; d.style.opacity = '0';
        var f = Math.max(0.06, Math.min(1, n / g.need)); $('gStem').style.transform = 'scaleY(' + f + ')'; beep('grow');
        for (var i = 0; i < 4; i++) { var L = $('gL' + i); if (L) L.style.opacity = f >= (i + 1) / 4.6 ? '1' : '0'; }
        if (n >= g.need) { for (var k = 0; k < 3; k++) $('gF' + k).style.transform = 'scale(1)'; $('gFl').style.opacity = '1'; burst($('gF0'), 16); }
      }, calm() ? 0 : 650);
    },
    wrong: function () { pulse('gCan', 'qf-shake'); beep('no'); },
    end: function (win) { if (win) { for (var k = 0; k < 3; k++) $('gF' + k).style.transform = 'scale(1)'; $('gFl').style.opacity = '1'; } }
  };
  SC.dive = {
    init: function (el) {
      var bubbles = ''; for (var i = 0; i < 9; i++) bubbles += '<circle class="qf-bubble" style="animation-delay:-' + (i * .7) + 's;animation-duration:' + (4 + (i % 3)) + 's" cx="' + (20 + i * 34) + '" cy="178" r="' + (1.5 + (i % 3)) + '" fill="none" stroke="#CDEBFF" stroke-width="1"/>';
      var weed = [[24, '#2E9E5B'], [40, '#3BB36D'], [266, '#2E9E5B'], [284, '#45C07A'], [300, '#2E9E5B']].map(function (w, i) { return '<path class="qf-sway" style="animation-delay:-' + i * .6 + 's" d="M' + w[0] + ' 176 q-8 -16 0 -30 q8 -14 0 -30" stroke="' + w[1] + '" stroke-width="4" fill="none" stroke-linecap="round"/>'; }).join('');
      var fish = [[34, '#F5CC5A', 1, 16], [92, '#E5574A', -1, 22], [128, '#C77DFF', 1, 19], [62, '#37B8C4', -1, 26]].map(function (f, i) { return '<g class="qf-swim' + (f[2] < 0 ? ' back' : '') + '" style="animation-duration:' + f[3] + 's;animation-delay:-' + i * 5 + 's"><g transform="translate(0,' + f[0] + ') scale(' + f[2] + ',1)"><ellipse rx="10" ry="6" fill="' + f[1] + '"/><path d="M8 0 l9 -7 v14z" fill="' + f[1] + '"/><path d="M-2 -6 q3 -5 7 -2z" fill="' + f[1] + '"/><circle cx="-5" cy="-1.5" r="1.6" fill="#1D2B44"/><path d="M-1 -4 q2 4 0 8" stroke="#fff" stroke-width=".8" fill="none" opacity=".6"/></g></g>'; }).join('');
      el.innerHTML = svg('<defs><linearGradient id="dg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5CC0F2"/><stop offset=".55" stop-color="#1F6FB0"/><stop offset="1" stop-color="#0B2E57"/></linearGradient><linearGradient id="dSubG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFD24A"/><stop offset="1" stop-color="#E39A12"/></linearGradient><radialGradient id="dGlow"><stop offset="0" stop-color="#FFF3B0" stop-opacity=".95"/><stop offset="1" stop-color="#FFF3B0" stop-opacity="0"/></radialGradient></defs>' +
        '<rect width="320" height="180" fill="url(#dg)"/>' +
        '<g class="qf-shine" fill="#fff">' + [[60, 24], [130, 30], [210, 22]].map(function (r) { return '<path d="M' + r[0] + ' 0 h' + r[1] + ' l30 180 h-' + (r[1] + 30) + 'z" opacity=".07"/>'; }).join('') + '</g>' +
        fish + bubbles + weed +
        '<path d="M0 170 q30 -10 60 -2 t70 -2 t80 2 t110 -4 v18 h-320z" fill="#E1C98F"/><path d="M0 176 q40 -6 90 0 t110 -2 t120 2 v4 h-320z" fill="#CDB273"/>' +
        '<g transform="translate(70,166)"><path d="M0 0 q-6 -14 2 -18 q2 8 6 6 q-2 -10 6 -12 q2 10 -2 24z" fill="#F07C8E"/></g><g transform="translate(236,168)"><path d="M0 0 q-4 -12 4 -14 q1 6 5 4 q1 -8 7 -8 q0 10 -6 18z" fill="#FF9F6B"/></g>' +
        '<g transform="translate(198,146)"><circle id="dGlowC" cx="17" cy="4" r="0" fill="url(#dGlow)" class="fade"/><rect width="36" height="22" rx="3" fill="#8A5A2B"/><rect x="0" y="9" width="36" height="3" fill="#E3B23C"/><rect x="15" y="7" width="6" height="8" rx="1" fill="#E3B23C"/>' +
        '<g id="dGold" style="opacity:0" class="fade"><circle cx="8" cy="-6" r="3.2" fill="#FFE07A"/><circle cx="17" cy="-9" r="3.6" fill="#fff"/><circle cx="26" cy="-6" r="3.2" fill="#FFE07A"/><circle cx="12" cy="-12" r="2.4" fill="#F7F3EA"/></g>' +
        '<g id="dLid" style="transform-box:fill-box;transform-origin:0% 100%;transition:transform .6s"><rect y="-6" width="36" height="9" rx="3" fill="#A06A35"/><rect y="-3" width="36" height="2.5" fill="#E3B23C"/></g></g>' +
        '<g transform="translate(10,40)" font-family="Tajawal,sans-serif" font-size="7" fill="#DDF2FF"><rect x="0" y="0" width="3" height="120" rx="1.5" fill="#fff" opacity=".35"/>' + [0, 1, 2, 3, 4].map(function (i) { return '<rect x="0" y="' + (i * 30) + '" width="7" height="1.4" fill="#fff" opacity=".6"/>'; }).join('') + '<circle id="dDepth" class="mv" cx="1.5" cy="0" r="3.4" fill="#FFD24A"/></g>' +
        '<g id="dSub" class="mv"><g transform="translate(150,10)"><g class="qf-bob"><ellipse cx="0" cy="12" rx="26" ry="12" fill="url(#dSubG)"/><path d="M-22 8 q22 -10 44 0" stroke="#fff" stroke-width="2" opacity=".35" fill="none"/><rect x="-8" y="-4" width="14" height="9" rx="3" fill="#F5B731"/><rect x="-3" y="-11" width="2.4" height="8" fill="#B07A10"/><rect x="-3" y="-12" width="7" height="2.4" fill="#B07A10"/>' +
        '<circle cx="-11" cy="12" r="4.6" fill="#BFE6FF" stroke="#8A5A10" stroke-width="1.5"/><circle cx="2" cy="12" r="4.6" fill="#BFE6FF" stroke="#8A5A10" stroke-width="1.5"/><circle cx="-12.5" cy="10.5" r="1.4" fill="#fff"/><circle cx=".5" cy="10.5" r="1.4" fill="#fff"/>' +
        '<path d="M25 12 l6 -6 v12z" fill="#D99A1C"/><ellipse class="qf-prop" cx="32" cy="12" rx="1.6" ry="7" fill="#7A5A10"/></g></g></g>');
    },
    right: function (n, g) { var f = Math.min(1, n / g.need); mv('dSub', f * 46, f * 124); mv('dDepth', 0, f * 120); beep('bubble'); burst($('dSub'), 8); },
    wrong: function () { pulse('dSub', 'qf-shake'); beep('no'); },
    end: function (win) { if (win) { $('dGold').style.opacity = '1'; $('dLid').style.transform = 'rotate(-35deg)'; $('dGlowC').setAttribute('r', '30'); burst($('dGold'), 20); } }
  };
  var WV = [10, 20, 30, 50, 20, 10, 40, 100];
  SC.wheel = {
    init: function (el, g) {
      var cols = [['#FF7A6B', '#D9473A'], ['#FFD66B', '#E0A82A'], ['#5FD08A', '#2E9E5B'], ['#6BA3FF', '#2F6FD6'], ['#D59BFF', '#9A4FD6'], ['#FFB06B', '#E07A2A'], ['#6BDCE6', '#2AA5B3'], ['#FFE08A', '#D9A21F']], segs = '', defs = '', pegs = '';
      WV.forEach(function (v, i) {
        defs += '<linearGradient id="wg' + i + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + cols[i][0] + '"/><stop offset="1" stop-color="' + cols[i][1] + '"/></linearGradient>';
        var a0 = i * 45 - 90 - 22.5, a1 = a0 + 45, r = 66, p = function (a, rr) { return [160 + rr * Math.cos(a * Math.PI / 180), 92 + rr * Math.sin(a * Math.PI / 180)]; }, s = p(a0, r), e = p(a1, r), m = (a0 + a1) / 2, tp = p(m, 44), pg = p(a0, r - 3);
        segs += '<path d="M160 92 L' + s[0].toFixed(1) + ' ' + s[1].toFixed(1) + ' A66 66 0 0 1 ' + e[0].toFixed(1) + ' ' + e[1].toFixed(1) + 'z" fill="url(#wg' + i + ')" stroke="#fff" stroke-width="2"/><text x="' + tp[0].toFixed(1) + '" y="' + (tp[1] + 4.5).toFixed(1) + '" font-family="Tajawal,Nunito,sans-serif" font-size="' + (v === 100 ? 14 : 16) + '" font-weight="900" text-anchor="middle" fill="#1D2B44" stroke="#fff" stroke-width="3" paint-order="stroke" transform="rotate(' + (m + 90) + ' ' + tp[0].toFixed(1) + ' ' + tp[1].toFixed(1) + ')">' + N(v) + '</text>';
        pegs += '<circle cx="' + pg[0].toFixed(1) + '" cy="' + pg[1].toFixed(1) + '" r="2.2" fill="#fff" stroke="#C88A1A" stroke-width=".8"/>';
      });
      var flags = ''; for (var k = 0; k < 14; k++) flags += '<path d="M' + (k * 24 - 4) + ' ' + (10 + Math.sin(k) * 2) + ' l11 18 l11 -18z" fill="' + cols[k % 8][0] + '"/>';
      el.innerHTML = svg('<defs>' + defs + '<radialGradient id="wBg" cx="50%" cy="45%" r="70%"><stop offset="0" stop-color="#FFF8E6"/><stop offset="1" stop-color="#FFD9A0"/></radialGradient><linearGradient id="wGl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".45"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>' +
        '<rect width="320" height="180" fill="url(#wBg)"/><path d="M-10 8 q170 22 340 0" stroke="#B5562A" stroke-width="1.2" fill="none"/>' + flags +
        '<path d="M132 176 l18 -40 h20 l18 40z" fill="#9C6B3E"/><rect x="122" y="172" width="76" height="6" rx="2" fill="#7A4B2A"/>' +
        '<circle cx="160" cy="92" r="72" fill="#C88A1A"/><circle cx="160" cy="92" r="69" fill="#E3B23C"/>' +
        '<g id="wW" class="qf-spin" style="transform-box:view-box;transform-origin:160px 92px">' + segs + pegs + '</g><circle cx="160" cy="92" r="66" fill="url(#wGl)"/>' +
        '<g transform="translate(160,92)"><circle r="13" fill="#1F3A5F"/><path d="M0 -10 L3 -3 10 0 3 3 0 10 -3 3 -10 0 -3 -3z" fill="#E3B23C"/><path d="M0 -10 L3 -3 10 0 3 3 0 10 -3 3 -10 0 -3 -3z" fill="#E3B23C" transform="rotate(45)"/><circle r="3" fill="#fff"/></g>' +
        '<g id="wPtr" style="transform-box:fill-box;transform-origin:50% 0%"><path d="M160 30 l-10 -20 h20z" fill="#1F3A5F"/><circle cx="160" cy="12" r="4" fill="#E5574A"/></g>') + '<div class="qf-score" id="wPts">⭐ ' + N(0) + '</div>';
      g.rot = 0; g.pts = 0;
    },
    before: function (g, done) {
      var qb = $('qfQ'); qb.innerHTML = '<div style="text-align:center;padding:.6rem 0"><button type="button" class="qf-btn blue qf-pulse" id="wSpin" style="font-size:1.2rem;min-height:60px;padding:0 1.6rem">🎡 ' + T('أدِر العجلة', 'Spin the wheel') + '</button></div>';
      $('wSpin').onclick = function () {
        this.disabled = true; var k = Math.floor(Math.random() * WV.length), dur = calm() ? 60 : 2600; g.val = WV[k];
        g.rot += 1080 + ((360 - k * 45) - (g.rot % 360) + 360) % 360; $('wW').style.transform = 'rotate(' + g.rot + 'deg)';
        if (!calm()) { var t0 = performance.now(); (function tk() { var p = (performance.now() - t0) / dur; if (p >= 1) return; beep('tick'); pulse('wPtr', 'qf-flap'); setTimeout(tk, 40 + p * p * 260); })(); }
        setTimeout(function () { beep('pop'); burst($('wPts'), 10); done(T('هذا السؤال بـ ', 'This question is worth ') + N(g.val) + T(' نقطة', ' points')); }, dur + 100);
      };
    },
    right: function (n, g) { g.pts += g.val || 10; var p = $('wPts'); p.textContent = '⭐ ' + N(g.pts); pulse('wPts', 'qf-hop'); burst(p, 12); },
    wrong: function () { beep('no'); },
    end: function () {}
  };

  /* ════════ screens ════════ */
  var state = { tab: 'read', set: null, skin: null, task: null };
  function allSetsOfTab(tab) {
    if (tab === 'read') return readingSets();
    if (tab === 'math') return MATH.map(function (m) { return { id: m[0], ic: m[1], name: { ar: m[2], en: m[3] }, sub: { ar: m[4], en: m[5] }, gen: true }; });
    if (tab === 'bank') return bankSets();
    return mySets().map(function (s) { return { id: s.id, ic: s.ic || '✏️', name: { ar: s.name, en: s.name }, sub: { ar: N(s.qs.length) + ' أسئلة', en: s.qs.length + ' questions' }, qs: s.qs, mine: true }; });
  }
  function findSet(id) {
    if (!id) return null;
    if (/^m-/.test(id)) { var m = MATH.filter(function (x) { return x[0] === id; })[0]; return m ? { id: id, ic: m[1], name: { ar: m[2], en: m[3] }, gen: true } : null; }
    var pools = [readingSets(), bankSets(), allSetsOfTab('mine')];
    for (var i = 0; i < pools.length; i++) for (var j = 0; j < pools[i].length; j++) if (pools[i][j].id === id) return pools[i][j];
    return null;
  }
  var RUN = 0;   /* bumped whenever a screen changes, so timers of a round that was left stop quietly */
  function home() {
    RUN++;
    if (!bankReady && pending().some(function (t) { return t.set && t.set.indexOf('bank-') === 0; })) loadBank(function () { if ($('qfParent')) home(); });
    document.title = T('مصنع الأسئلة | كوكب الإبداع', 'Question Factory | Planet of Creativity');
    var TABS = [['read', '📚', 'نادي القراءة', 'Reading Club'], ['bank', '🏆', 'بنك المسابقات', 'Quiz bank'], ['math', '🧮', 'حساب سريع', 'Quick maths'], ['mine', '✏️', 'مجموعاتي', 'My sets']];
    var h = '<section class="qf-hero"><div style="font-size:2.4rem">🏭</div><h1>' + T('مصنع الأسئلة', 'The Question Factory') + '</h1><p>' + T('اختر مجموعةَ أسئلة، ثم العب بها بالطريقة التي تحبّ — أو اصنع مجموعتك بنفسك وشاركها مع إخوتك وأصدقائك.', 'Pick a question set and play it the way you like — or make your own set and share it with siblings and friends.') + '</p></section>';
    h += taskBanner() + '<div class="qf-row" style="justify-content:center;margin:.3rem 0"><button type="button" class="qf-btn" id="qfParent">🔐 ' + T('للوالدين والمعلّمين: الواجبات والنتائج', 'Parents & teachers: tasks and results') + '</button></div>';
    h += '<div class="qf-step"><i>١</i>' + T('اختر مجموعة الأسئلة', 'Choose a question set') + '</div><div class="qf-tabs" role="group">' + TABS.map(function (t) { return '<button type="button" class="qf-tab" data-tab="' + t[0] + '" aria-pressed="' + (state.tab === t[0]) + '">' + t[1] + ' ' + T(t[2], t[3]) + '</button>'; }).join('') + '</div><div id="qfSets" class="qf-sets"></div>';
    h += '<div class="qf-step"><i>٢</i>' + T('اختر اللعبة', 'Choose the game') + '</div><div class="qf-games">' + SKINS.map(function (s) { return '<button type="button" class="qf-game" data-skin="' + s.id + '"><span class="i">' + s.ic + '</span>' + T(s.ar, s.en) + '<small>' + T(s.dar, s.den) + '</small></button>'; }).join('') + '<button type="button" class="qf-game qf-teams" data-skin="teams"><span class="i">👥</span>' + T('مسابقة الفِرَق', 'Team quiz') + '<small>' + T('للفصل والعائلة على شاشةٍ واحدة', 'For a class or family on one screen') + '</small></button></div>';
    h += '<p class="qf-note" id="qfPick" style="margin-top:.8rem"></p>';
    root.innerHTML = h;
    [].forEach.call(root.querySelectorAll('[data-tab]'), function (b) { b.onclick = function () { state.tab = b.dataset.tab; state.set = null; home(); }; });
    $('qfParent').onclick = function () { gated(parentPanel, T('هذه اللوحة للوالدين والمعلّمين', 'This panel is for parents and teachers')); };
    [].forEach.call(root.querySelectorAll('[data-task]'), function (b) { b.onclick = function () { var t = tasks().filter(function (x) { return x.id === b.dataset.task; })[0]; if (!t) return; if (t.set.indexOf('bank-') === 0 && !bankReady) return loadBank(function () { state.task = t.id; play(t.set, t.skin); }); state.task = t.id; play(t.set, t.skin); }; });
    [].forEach.call(root.querySelectorAll('[data-skin]'), function (b) { b.onclick = function () { state.task = null; if (!state.set) { $('qfPick').textContent = '👆 ' + T('اختر مجموعة أسئلة أوّلًا.', 'Choose a question set first.'); beep('no'); return; } if (b.dataset.skin === 'teams') return teams(state.set); play(state.set, b.dataset.skin); }; });
    drawSets();
  }
  function drawSets() {
    var el = $('qfSets'); if (!el) return;
    if (state.tab === 'bank' && !bankReady) { el.innerHTML = '<p class="qf-note">⏳ ' + T('جارٍ تحميل بنك الأسئلة…', 'Loading the question bank…') + '</p>'; loadBank(drawSets); return; }
    var list = allSetsOfTab(state.tab), h = list.map(function (s) { return '<button type="button" class="qf-set" data-set="' + esc(s.id) + '" aria-pressed="' + (state.set === s.id) + '"><span class="i">' + esc(s.ic) + '</span><span>' + esc(T(s.name.ar, s.name.en)) + '<small>' + esc(T(s.sub.ar, s.sub.en)) + '</small></span></button>'; }).join('');
    if (state.tab === 'mine') h += '<button type="button" class="qf-set" id="qfNew" style="border-style:dashed;justify-content:center">➕ ' + T('أنشئ مجموعة جديدة', 'Create a new set') + '</button>';
    el.innerHTML = h || '<p class="qf-note">' + T('لا مجموعات هنا بعد.', 'No sets here yet.') + '</p>';
    [].forEach.call(el.querySelectorAll('[data-set]'), function (b) { b.onclick = function () { state.set = b.dataset.set; beep('tick'); drawSets(); var p = $('qfPick'); if (p) { var s = findSet(state.set); p.innerHTML = '✅ ' + esc(T(s.name.ar, s.name.en)) + ' — ' + T('الآن اختر اللعبة 👇', 'now choose the game 👇') + (s.mine ? ' · <button type="button" class="qf-btn" id="qfEdit">✏️ ' + T('عدّل', 'Edit') + '</button>' : '') + ' · <button type="button" class="qf-btn" id="qfAssign">📋 ' + T('اجعلها واجبًا', 'Make it a task') + '</button>'; var e = $('qfEdit'); if (e) e.onclick = function () { editor(s.id); }; $('qfAssign').onclick = function () { gated(function () { newTask(s.id); }, T('الواجبات يضعها أحد الوالدين أو المعلّم', 'A parent or teacher sets tasks')); }; } }; });
    var nw = $('qfNew'); if (nw) nw.onclick = function () { editor(null); };
  }

  /* ════════ a round ════════ */
  function play(setId, skinId) {
    var set = findSet(setId), skin = SKINS.filter(function (s) { return s.id === skinId; })[0]; if (!set || !skin) return home();
    var pool = set.gen ? mathSet(set.id) : set.qs, qs = shuffle(pool).slice(0, 8);
    if (!qs.length) return home();
    if (skinId === 'cards') return cards(set, qs);
    var g = { total: qs.length, need: Math.ceil(qs.length * 0.6), right: 0, wrong: 0, i: 0 }; g.lose = g.total - g.need + 1; var my = ++RUN;
    root.innerHTML = '<div class="qf-top"><button type="button" class="qf-btn" id="qfBack">↩️ ' + T('المصنع', 'Factory') + '</button><b>' + skin.ic + ' ' + T(skin.ar, skin.en) + ' · ' + esc(set.ic) + ' ' + esc(T(set.name.ar, set.name.en)) + '</b></div>' +
      '<div class="qf-scene" id="qfScene"></div><div class="qf-prog"><i id="qfBar"></i></div><div class="qf-qbox" id="qfQ"></div>';
    $('qfBack').onclick = home;
    var sc = SC[skinId]; sc.init($('qfScene'), g);
    function ask() {
      if (my !== RUN || !$('qfBar')) return;
      $('qfBar').style.width = Math.round(g.i / g.total * 100) + '%';
      if (g.i >= g.total || g.right >= g.need && skinId === 'boat' || g.wrong >= g.lose && skinId === 'boat') return finish();
      if (sc.before) sc.before(g, function (note) { show(note); }); else show('');
    }
    function show(note) {
      if (my !== RUN || !$('qfQ')) return;
      var q = qs[g.i], h = '<div class="qf-in"><div class="qf-bulrow"><div id="qfBul" class="qf-bul">' + BUL + '</div><div class="qf-say" id="qfBulSay" style="opacity:0"></div></div>' + (note ? '<p class="qf-note qf-chip">🎯 ' + esc(note) + '</p>' : '') + (q.em ? '<div class="em">' + esc(q.em) + '</div>' : '') + '<p class="qf-q">' + N(g.i + 1) + '/' + N(g.total) + ' — ' + esc(q.q) + '</p>';
      if (q.type === 'mcq') h += '<div class="qf-opts">' + shuffle([[q.a, 1]].concat((q.w || []).map(function (w) { return [w, 0]; }))).map(function (o, k) { return '<button type="button" class="qf-opt" data-ok="' + o[1] + '"><i>' + (lang === 'ar' ? 'أبجد' : 'ABCD').charAt(k) + '</i><span>' + esc(o[0]) + '</span></button>'; }).join('') + '</div>';
      else h += '<div id="qfFl"><button type="button" class="qf-btn blue" id="qfShow">👀 ' + T('فكّرتُ — أظهر الجواب', 'I thought — show the answer') + '</button></div>';
      h += '<div class="qf-fb" id="qfFb" role="status"></div></div>';
      $('qfQ').innerHTML = h; beep('pop');
      if (q.type === 'mcq') [].forEach.call($('qfQ').querySelectorAll('.qf-opt'), function (b) { b.onclick = function () { answer(b.dataset.ok === '1', b); }; });
      else $('qfShow').onclick = function () {
        beep('flip'); $('qfFl').innerHTML = '<div class="qf-ans qf-in">' + esc(q.a) + '</div><div class="qf-row"><button type="button" class="qf-btn green" id="qfKnew">✅ ' + T('عرفتُها', 'I knew it') + '</button><button type="button" class="qf-btn red" id="qfNot">🔁 ' + T('لم أعرفها', 'Not yet') + '</button></div>';
        $('qfKnew').onclick = function () { answer(true); }; $('qfNot').onclick = function () { answer(false); };
      };
    }
    function answer(ok, btn) {
      [].forEach.call($('qfQ').querySelectorAll('button'), function (b) { b.disabled = true; });
      var fb = $('qfFb');
      if (btn) { btn.classList.add(ok ? 'yes' : 'no'); if (!ok) { var r = $('qfQ').querySelector('.qf-opt[data-ok="1"]'); if (r) r.classList.add('yes'); } }
      if (ok) { g.right++; beep('ok'); var pr = PRAISE[Math.floor(Math.random() * PRAISE.length)]; mascot('happy', T(pr[0], pr[1])); burst(btn || $('qfFb'), 12); fb.className = 'qf-fb ok'; fb.textContent = '✔️'; sc.right(g.right, g); }
      else { g.wrong++; var ch = CHEER[Math.floor(Math.random() * CHEER.length)]; mascot('sad', T(ch[0], ch[1])); fb.className = 'qf-fb no'; fb.textContent = T('الجواب الصحيح باللون الأخضر 🙂', 'The right answer is in green 🙂'); sc.wrong(g.wrong, g); }
      g.i++; setTimeout(ask, ok ? 1200 : 1800);
    }
    function finish() {
      $('qfBar').style.width = '100%';
      var win = g.right >= g.need; if (sc.end) sc.end(win);
      if (state.task) { recordTask(state.task, g.right, g.i, win); state.task = null; }
      var stars = win ? 2 : 1, got = 0; try { if (window.MKJourney && MKJourney.earn) got = MKJourney.earn('qf', skinId, stars, { daily: true }); } catch (e) {}
      beep(win ? 'win' : 'grow'); if (win) { burst(document.body, 120, 'confetti'); }
      var msg = { boat: [win ? 'وصل مركبك أوّلًا!' : 'سبقتك الريح هذه المرّة.', win ? 'Your boat finished first!' : 'The wind won this time.'], crane: [win ? 'اكتمل المسجد بقبّته ومئذنته!' : 'بنيتَ جزءًا من المسجد — أكمله في المرّة القادمة.', win ? 'The mosque is complete with its dome and minaret!' : 'You built part of the mosque — finish it next time.'], garden: [win ? 'أزهرت حديقتك!' : 'نبتتك تكبر — اسقها مرّة أخرى.', win ? 'Your garden bloomed!' : 'Your plant is growing — water it again.'], dive: [win ? 'وجدتَ الكنز في قاع البحر!' : 'اقتربتَ من الكنز — جرّب مرّةً أخرى.', win ? 'You found the treasure!' : 'You came close — try again.'], wheel: ['جمعتَ ' + N(g.pts || 0) + ' نقطة!', 'You collected ' + (g.pts || 0) + ' points!'] }[skinId];
      $('qfQ').innerHTML = '<div class="qf-end qf-in" style="box-shadow:none;margin:0;padding:.4rem"><div class="qf-trophy' + (win ? ' win' : '') + '"><span>' + (win ? '🏆' : '🌱') + '</span></div><div class="qf-stars">' + [0, 1, 2].map(function (i) { return '<span class="' + (i < (win ? (g.right === g.i ? 3 : 2) : 1) ? 'on' : '') + '" style="animation-delay:' + (.2 + i * .25) + 's">★</span>'; }).join('') + '</div><h2>' + esc(T(msg[0], msg[1])) + '</h2><p style="font-weight:800">' + T('إجابات صحيحة: ', 'Correct answers: ') + N(g.right) + ' / ' + N(g.i) + '</p>' + (got ? '<p style="color:#B07A00;font-weight:900">⭐ +' + N(got) + '</p>' : '<p class="qf-note">' + T('أخذتَ نجوم هذه اللعبة اليوم — عُد غدًا.', 'You already earned today\'s stars for this game — come back tomorrow.') + '</p>') +
        '<div class="qf-row" style="justify-content:center"><button type="button" class="qf-btn blue" id="qfAgain">🔄 ' + T('العب مرّةً أخرى', 'Play again') + '</button><button type="button" class="qf-btn" id="qfOther">🎮 ' + T('لعبة أخرى بالأسئلة نفسها', 'Another game, same questions') + '</button><button type="button" class="qf-btn" id="qfHome">🏭 ' + T('المصنع', 'Factory') + '</button></div></div>';
      $('qfAgain').onclick = function () { play(setId, skinId); }; $('qfOther').onclick = function () { state.set = setId; home(); var gm = root.querySelector('.qf-games'); if (gm) gm.scrollIntoView({ block: 'center' }); }; $('qfHome').onclick = home;
    }
    ask();
  }

  /* flash cards: flip, «I knew it» removes the card, «again» sends it to the back (max 3 passes) */
  function cards(set, qs) {
    var deck = qs.map(function (q, i) { return { q: q, n: 0, i: i }; }), known = 0, first = 0, total = qs.length;
    var my = ++RUN;
    function draw() {
      if (my !== RUN) return;
      if (!deck.length) {
        burst(document.body, 100, 'confetti'); if (state.task) { recordTask(state.task, first, total, first >= Math.ceil(total * 0.6)); state.task = null; } var got = 0; try { if (window.MKJourney && MKJourney.earn) got = MKJourney.earn('qf', 'cards', first >= Math.ceil(total * 0.6) ? 2 : 1, { daily: true }); } catch (e) {} beep('win');
        root.innerHTML = '<div class="qf-end"><div class="big">🃏</div><h2>' + T('راجعتَ كلّ البطاقات!', 'You reviewed every card!') + '</h2><p style="font-weight:800">' + T('عرفتَها من أوّل مرّة: ', 'Known the first time: ') + N(first) + ' / ' + N(total) + '</p>' + (got ? '<p style="color:#B07A00;font-weight:900">⭐ +' + N(got) + '</p>' : '') + '<div class="qf-row" style="justify-content:center"><button type="button" class="qf-btn blue" id="qfAgain">🔄 ' + T('بطاقاتٌ جديدة', 'New cards') + '</button><button type="button" class="qf-btn" id="qfHome">🏭 ' + T('المصنع', 'Factory') + '</button></div></div>';
        $('qfAgain').onclick = function () { play(set.id, 'cards'); }; $('qfHome').onclick = home; return;
      }
      var c = deck[0];
      root.innerHTML = '<div class="qf-top"><button type="button" class="qf-btn" id="qfBack">↩️ ' + T('المصنع', 'Factory') + '</button><b>🃏 ' + esc(T(set.name.ar, set.name.en)) + ' · ' + T('باقي ', 'left ') + N(deck.length) + '</b></div>' +
        '<div class="qf-deck"><div class="qf-card" id="qfCard" role="button" tabindex="0" aria-label="' + T('اقلب البطاقة', 'Flip the card') + '"><div class="in"><div class="f">' + (c.q.em ? '<div style="font-size:2.4rem">' + esc(c.q.em) + '</div>' : '') + esc(c.q.q) + '<small style="margin-top:.6rem;opacity:.85;font-size:.85rem">' + T('👆 اضغط لتقلب البطاقة', '👆 Tap to flip') + '</small></div><div class="b">' + esc(c.q.a) + '</div></div></div></div>' +
        '<div class="qf-row" style="justify-content:center;margin-top:.8rem"><button type="button" class="qf-btn green" id="qfKnew" disabled>✅ ' + T('عرفتُها', 'I knew it') + '</button><button type="button" class="qf-btn red" id="qfNot" disabled>🔁 ' + T('أعدها لي لاحقًا', 'Again later') + '</button></div><div class="qf-prog"><i style="width:' + Math.round(known / total * 100) + '%"></i></div>';
      $('qfBack').onclick = home;
      var card = $('qfCard'), flip = function () { card.classList.toggle('flip'); $('qfKnew').disabled = false; $('qfNot').disabled = false; beep('flip'); };
      var out = function (cls, fn) { card.classList.add(cls); setTimeout(fn, calm() ? 0 : 280); };
      card.onclick = flip; card.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } };
      $('qfKnew').onclick = function () { deck.shift(); known++; if (!c.n) first++; beep('ok'); burst(this, 10); out('out-k', draw); };
      $('qfNot').onclick = function () { deck.shift(); c.n++; if (c.n < 3) deck.push(c); else known++; beep('whoosh'); out('out-a', draw); };
    }
    draw();
  }

  /* ════════ editor (family / teacher sets, kept on this device) ════════ */
  function editor(id) {
    RUN++;
    var list = mySets(), s = id ? list.filter(function (x) { return x.id === id; })[0] : null;
    s = s ? JSON.parse(JSON.stringify(s)) : { id: 'my-' + Date.now().toString(36), name: '', ic: '✏️', qs: [{ type: 'mcq', em: '', q: '', a: '', w: ['', ''] }] };
    function qHtml(q, i) {
      return '<div class="qf-eq" data-i="' + i + '"><button type="button" class="qf-btn red del" data-del="' + i + '" aria-label="' + T('احذف السؤال', 'Delete question') + '">🗑️</button><b>' + T('السؤال ', 'Question ') + N(i + 1) + '</b>' +
        '<label>' + T('النوع', 'Type') + '</label><select data-k="type"><option value="mcq"' + (q.type === 'mcq' ? ' selected' : '') + '>' + T('اختيار من متعدّد', 'Multiple choice') + '</option><option value="flash"' + (q.type === 'flash' ? ' selected' : '') + '>' + T('بطاقة: سؤال وجواب', 'Flash card: question & answer') + '</option></select>' +
        '<div class="two"><div><label>' + T('رمز', 'Emoji') + '</label><input data-k="em" maxlength="4" value="' + esc(q.em) + '" placeholder="🐪"></div><div><label>' + T('السؤال', 'Question') + '</label><input data-k="q" value="' + esc(q.q) + '"></div></div>' +
        '<label>' + T('الجواب الصحيح', 'Right answer') + '</label><input data-k="a" value="' + esc(q.a) + '">' +
        (q.type === 'mcq' ? '<label>' + T('إجابات خاطئة (واحدة على الأقلّ)', 'Wrong answers (at least one)') + '</label>' + [0, 1, 2].map(function (k) { return '<input data-w="' + k + '" value="' + esc((q.w || [])[k] || '') + '" style="margin-bottom:.3rem">'; }).join('') : '') + '</div>';
    }
    function read() {
      s.name = $('edName').value.trim(); s.ic = $('edIc').value.trim() || '✏️';
      [].forEach.call(root.querySelectorAll('.qf-eq'), function (box) { var q = s.qs[+box.dataset.i]; [].forEach.call(box.querySelectorAll('[data-k]'), function (inp) { q[inp.dataset.k] = inp.value.trim(); }); var w = []; [].forEach.call(box.querySelectorAll('[data-w]'), function (inp) { w.push(inp.value.trim()); }); if (w.length) q.w = w; });
    }
    function draw(msg) {
      root.innerHTML = '<div class="qf-top"><button type="button" class="qf-btn" id="qfBack">↩️ ' + T('المصنع', 'Factory') + '</button><b>✏️ ' + T('صانع المجموعة', 'Set maker') + '</b></div>' +
        '<div class="qf-ed"><p class="qf-note" style="margin-top:0">' + T('للوالدين والمعلّمين: اكتبوا أسئلتكم (حفظ سورة، كلمات إنجليزيّة، درس اليوم…) ثم العبوا بها بأيّ لعبة. تُحفظ على هذا الجهاز، ويمكن مشاركتها برابط.', 'For parents and teachers: write your questions (a surah, English words, today\'s lesson…) then play them with any game. Saved on this device and shareable as a link.') + '</p>' +
        '<div class="two" style="display:grid;grid-template-columns:90px 1fr;gap:.5rem"><div><label>' + T('رمز', 'Emoji') + '</label><input id="edIc" maxlength="4" value="' + esc(s.ic) + '"></div><div><label>' + T('اسم المجموعة', 'Set name') + '</label><input id="edName" value="' + esc(s.name) + '" placeholder="' + T('مثال: سورة الفيل', 'e.g. Surat al-Fil') + '"></div></div>' +
        s.qs.map(qHtml).join('') +
        '<div class="qf-row"><button type="button" class="qf-btn" id="edAdd">➕ ' + T('أضف سؤالًا', 'Add a question') + '</button></div><p class="qf-fb no" id="edMsg">' + esc(msg || '') + '</p>' +
        '<div class="qf-row"><button type="button" class="qf-btn green" id="edSave">💾 ' + T('احفظ', 'Save') + '</button>' + (id ? '<button type="button" class="qf-btn" id="edShare">🔗 ' + T('انسخ رابط المشاركة', 'Copy share link') + '</button><button type="button" class="qf-btn red" id="edDel">🗑️ ' + T('احذف المجموعة', 'Delete set') + '</button>' : '') + '</div></div>';
      $('qfBack').onclick = home;
      [].forEach.call(root.querySelectorAll('[data-k="type"]'), function (sel) { sel.onchange = function () { read(); draw(); }; });
      [].forEach.call(root.querySelectorAll('[data-del]'), function (b) { b.onclick = function () { read(); if (s.qs.length > 1) s.qs.splice(+b.dataset.del, 1); draw(); }; });
      $('edAdd').onclick = function () { read(); s.qs.push({ type: 'mcq', em: '', q: '', a: '', w: ['', ''] }); draw(); var all = root.querySelectorAll('.qf-eq'); all[all.length - 1].scrollIntoView({ block: 'center' }); };
      $('edSave').onclick = function () {
        read();
        var qs = s.qs.filter(function (q) { return q.q && q.a; }).map(function (q) { return q.type === 'mcq' ? { type: 'mcq', em: q.em, q: q.q, a: q.a, w: (q.w || []).filter(Boolean) } : { type: 'flash', em: q.em, q: q.q, a: q.a }; });
        if (!s.name) return draw(T('اكتب اسمًا للمجموعة.', 'Give the set a name.'));
        if (qs.length < 2) return draw(T('نحتاج سؤالين على الأقلّ، لكلٍّ منهما جواب.', 'We need at least two questions, each with an answer.'));
        if (qs.some(function (q) { return q.type === 'mcq' && !q.w.length; })) return draw(T('كلّ سؤال اختيار يحتاج إجابةً خاطئة واحدة على الأقلّ.', 'Every multiple-choice question needs at least one wrong answer.'));
        var L = mySets().filter(function (x) { return x.id !== s.id; }); L.push({ id: s.id, name: s.name, ic: s.ic, qs: qs }); saveMine(L);
        state.tab = 'mine'; state.set = s.id; beep('ok'); home();
      };
      var sh = $('edShare'); if (sh) sh.onclick = function () {
        read(); var url = location.href.split('#')[0] + '#s=' + enc({ name: s.name, ic: s.ic, qs: s.qs });
        var done = function () { $('edMsg').className = 'qf-fb ok'; $('edMsg').textContent = T('نُسخ الرابط ✔️ أرسله لمن تحبّ.', 'Link copied ✔️ Send it to anyone.'); };
        try { navigator.clipboard.writeText(url).then(done, function () { prompt(T('انسخ هذا الرابط:', 'Copy this link:'), url); }); } catch (e) { prompt(T('انسخ هذا الرابط:', 'Copy this link:'), url); }
      };
      var dl = $('edDel'); if (dl) dl.onclick = function () { if (!confirm(T('نحذف هذه المجموعة؟', 'Delete this set?'))) return; saveMine(mySets().filter(function (x) { return x.id !== s.id; })); state.set = null; home(); };
    }
    draw();
  }
  function enc(o) { var b = new TextEncoder().encode(JSON.stringify(o)), s = ''; b.forEach(function (c) { s += String.fromCharCode(c); }); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
  function dec(t) { var s = atob(t.replace(/-/g, '+').replace(/_/g, '/')), b = new Uint8Array(s.length); for (var i = 0; i < s.length; i++) b[i] = s.charCodeAt(i); return JSON.parse(new TextDecoder().decode(b)); }
  function sharedLink() {
    var m = (location.hash || '').match(/^#s=([A-Za-z0-9_-]+)$/); if (!m) return false;
    var o; try { o = dec(m[1]); } catch (e) { return false; }
    if (!o || !o.name || !Array.isArray(o.qs)) return false;
    var qs = o.qs.filter(function (q) { return q && q.q && q.a; }).slice(0, 60).map(function (q) { return { type: q.type === 'flash' ? 'flash' : 'mcq', em: String(q.em || '').slice(0, 4), q: String(q.q).slice(0, 300), a: String(q.a).slice(0, 600), w: (q.w || []).map(String).filter(Boolean).slice(0, 3) }; }).filter(function (q) { return q.type === 'flash' || q.w.length; });
    if (qs.length < 2) return false;
    root.innerHTML = '<div class="qf-end"><div class="big">' + esc(o.ic || '✏️') + '</div><h2>' + T('وصلتك مجموعة أسئلة: ', 'You received a question set: ') + esc(o.name) + '</h2><p class="qf-note">' + N(qs.length) + T(' أسئلة', ' questions') + '</p><div class="qf-row" style="justify-content:center"><button type="button" class="qf-btn green" id="shSave">💾 ' + T('احفظها في مجموعاتي', 'Save to my sets') + '</button><button type="button" class="qf-btn" id="shNo">' + T('لا، شكرًا', 'No thanks') + '</button></div></div>';
    $('shSave').onclick = function () { var L = mySets(), nid = 'my-' + Date.now().toString(36); L.push({ id: nid, name: String(o.name).slice(0, 60), ic: String(o.ic || '✏️').slice(0, 4), qs: qs }); saveMine(L); state.tab = 'mine'; state.set = nid; try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {} home(); };
    $('shNo').onclick = function () { try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {} home(); };
    return true;
  }

  /* ════════ 👥 team / classroom mode — one screen (a projector or a tablet), 2–4 teams take turns ════════ */
  var TEAMS = [['🌴', 'فريق النخلة', 'Palm team', '#2E9E5B'], ['🌙', 'فريق الهلال', 'Crescent team', '#2F6FD6'], ['⭐', 'فريق النجمة', 'Star team', '#E3A72F'], ['🐪', 'فريق الجمل', 'Camel team', '#B5562A']];
  function teams(setId) {
    var set = findSet(setId); if (!set) return home();
    var cfg = jget('qf_teamcfg', { n: 2, t: 30, q: 8, names: [] }) || { n: 2, t: 30, q: 8, names: [] };
    function setup() {
      RUN++;
      root.innerHTML = '<div class="qf-top"><button type="button" class="qf-btn" id="qfBack">↩️ ' + T('المصنع', 'Factory') + '</button><b>👥 ' + T('مسابقة الفِرَق', 'Team quiz') + ' · ' + esc(set.ic) + ' ' + esc(T(set.name.ar, set.name.en)) + '</b></div>' +
        '<div class="qf-ed qf-in"><p class="qf-note" style="margin-top:0">' + T('للفصل أو للعائلة: شاشةٌ واحدة، والفِرَق تتناوب على الأسئلة. اعرضها على شاشةٍ كبيرة إن استطعت.', 'For a class or a family: one screen, teams take turns. Show it on a big screen if you can.') + '</p>' +
        '<label>' + T('عدد الفِرَق', 'Number of teams') + '</label><div class="qf-row" id="tN">' + [2, 3, 4].map(function (n) { return '<button type="button" class="qf-tab" data-n="' + n + '" aria-pressed="' + (cfg.n === n) + '">' + N(n) + '</button>'; }).join('') + '</div>' +
        '<label>' + T('أسماء الفِرَق', 'Team names') + '</label><div id="tNames">' + TEAMS.slice(0, cfg.n).map(function (t, i) { return '<div class="qf-row" style="margin-bottom:.35rem"><span style="font-size:1.6rem">' + t[0] + '</span><input data-tn="' + i + '" value="' + esc(cfg.names[i] || T(t[1], t[2])) + '" style="flex:1"></div>'; }).join('') + '</div>' +
        '<label>' + T('وقت كلّ سؤال', 'Time per question') + '</label><div class="qf-row" id="tT">' + [[0, 'بلا وقت', 'No timer'], [20, '٢٠ ثانية', '20 s'], [30, '٣٠ ثانية', '30 s'], [45, '٤٥ ثانية', '45 s']].map(function (x) { return '<button type="button" class="qf-tab" data-t="' + x[0] + '" aria-pressed="' + (cfg.t === x[0]) + '">' + T(x[1], x[2]) + '</button>'; }).join('') + '</div>' +
        '<label>' + T('عدد الأسئلة', 'Number of questions') + '</label><div class="qf-row" id="tQ">' + [8, 12, 16].map(function (n) { return '<button type="button" class="qf-tab" data-q="' + n + '" aria-pressed="' + (cfg.q === n) + '">' + N(n) + '</button>'; }).join('') + '</div>' +
        '<p class="qf-note">' + T('الإجابة الصحيحة = ١٠ نقاط، والسريعة (في النصف الأوّل من الوقت) = ١٥.', 'A right answer = 10 points; a quick one (first half of the time) = 15.') + '</p>' +
        '<div class="qf-row"><button type="button" class="qf-btn green" id="tGo" style="font-size:1.1rem;min-height:54px">🏁 ' + T('ابدأ المسابقة', 'Start the quiz') + '</button></div></div>';
      $('qfBack').onclick = home;
      function keepNames() { [].forEach.call(root.querySelectorAll('[data-tn]'), function (inp) { cfg.names[+inp.dataset.tn] = inp.value.trim(); }); }
      [].forEach.call(root.querySelectorAll('[data-n]'), function (b) { b.onclick = function () { keepNames(); cfg.n = +b.dataset.n; setup(); }; });
      [].forEach.call(root.querySelectorAll('[data-t]'), function (b) { b.onclick = function () { keepNames(); cfg.t = +b.dataset.t; setup(); }; });
      [].forEach.call(root.querySelectorAll('[data-q]'), function (b) { b.onclick = function () { keepNames(); cfg.q = +b.dataset.q; setup(); }; });
      $('tGo').onclick = function () { keepNames(); jset('qf_teamcfg', cfg); start(); };
    }
    function start() {
      var pool = set.gen ? mathSet(set.id).concat(mathSet(set.id)) : set.qs, qs = shuffle(pool).slice(0, cfg.q);
      var tm = TEAMS.slice(0, cfg.n).map(function (t, i) { return { ic: t[0], name: cfg.names[i] || T(t[1], t[2]), c: t[3], pts: 0, ok: 0 }; });
      var i = 0, timer = 0, left = 0, my = ++RUN;
      function board() {
        var top = Math.max(30, Math.max.apply(null, tm.map(function (t) { return t.pts; })));
        return '<div class="qf-board">' + tm.map(function (t, k) { return '<div class="qf-lane' + (k === i % tm.length && i < qs.length ? ' now' : '') + '" style="--c:' + t.c + '"><span class="nm">' + esc(t.name) + '</span><span class="tr"><span class="tok" style="inset-inline-start:calc(' + Math.round(t.pts / top * 88) + '% )">' + t.ic + '</span></span><b>' + N(t.pts) + '</b></div>'; }).join('') + '</div>';
      }
      function ask() {
        clearInterval(timer);
        if (my !== RUN) return;
        if (i >= qs.length) return podium();
        var t = tm[i % tm.length], q = qs[i];
        root.innerHTML = '<div class="qf-top"><button type="button" class="qf-btn" id="qfBack">⏹ ' + T('إنهاء', 'End') + '</button><b>👥 ' + N(i + 1) + '/' + N(qs.length) + '</b></div>' + board() +
          '<div class="qf-qbox qf-big qf-in" style="--c:' + t.c + '"><div class="qf-turn">' + t.ic + ' ' + T('دور ', 'Turn: ') + esc(t.name) + '</div>' + (cfg.t ? '<div class="qf-timer"><i id="tBar"></i></div>' : '') +
          (q.em ? '<div class="em">' + esc(q.em) + '</div>' : '') + '<p class="qf-q">' + esc(q.q) + '</p>' +
          (q.type === 'mcq' ? '<div class="qf-opts">' + shuffle([[q.a, 1]].concat((q.w || []).map(function (w) { return [w, 0]; }))).map(function (o, k) { return '<button type="button" class="qf-opt" data-ok="' + o[1] + '"><i>' + (lang === 'ar' ? 'أبجد' : 'ABCD').charAt(k) + '</i><span>' + esc(o[0]) + '</span></button>'; }).join('') + '</div>'
            : '<div id="tFl"><button type="button" class="qf-btn blue" id="tShow">👀 ' + T('أظهر الجواب', 'Show the answer') + '</button></div>') +
          '<div class="qf-fb" id="tFb" role="status"></div></div>';
        $('qfBack').onclick = function () { clearInterval(timer); podium(); };
        beep('pop');
        if (q.type === 'mcq') [].forEach.call(root.querySelectorAll('.qf-opt'), function (b) { b.onclick = function () { mark(b.dataset.ok === '1', b); }; });
        else $('tShow').onclick = function () { beep('flip'); $('tFl').innerHTML = '<div class="qf-ans">' + esc(q.a) + '</div><p class="qf-note">' + T('هل كانت إجابة الفريق صحيحة؟', 'Was the team\'s answer right?') + '</p><div class="qf-row"><button type="button" class="qf-btn green" id="tY">✅ ' + T('صحيحة', 'Right') + '</button><button type="button" class="qf-btn red" id="tN2">❌ ' + T('خاطئة', 'Wrong') + '</button></div>'; $('tY').onclick = function () { mark(true); }; $('tN2').onclick = function () { mark(false); }; };
        if (cfg.t) {
          left = cfg.t * 10; var bar = $('tBar');
          timer = setInterval(function () { if (my !== RUN) return clearInterval(timer); left--; if (bar) bar.style.width = (left / (cfg.t * 10) * 100) + '%'; if (left > 0 && left <= 50 && left % 10 === 0) beep('tick'); if (left <= 0) { clearInterval(timer); mark(false, null, true); } }, 100);
        }
      }
      function mark(ok, btn, late) {
        clearInterval(timer);
        [].forEach.call(root.querySelectorAll('.qf-qbox button'), function (b) { b.disabled = true; });
        var t = tm[i % tm.length], fb = $('tFb'), fast = cfg.t && left > cfg.t * 5, gain = ok ? (fast ? 15 : 10) : 0;
        if (btn) btn.classList.add(ok ? 'yes' : 'no');
        if (!ok) { var r = root.querySelector('.qf-opt[data-ok="1"]'); if (r) r.classList.add('yes'); }
        if (ok) { t.pts += gain; t.ok++; beep('ok'); burst(btn || fb, 16); fb.className = 'qf-fb ok'; fb.textContent = '✔️ +' + N(gain) + (fast ? ' ⚡' + T(' سريع!', ' fast!') : ''); }
        else { beep('no'); fb.className = 'qf-fb no'; fb.textContent = late ? T('⏰ انتهى الوقت!', '⏰ Time\'s up!') : T('لا نقاط هذه المرّة 🙂', 'No points this time 🙂'); }
        i++;
        setTimeout(function () { var bd = root.querySelector('.qf-board'); if (bd) bd.outerHTML = board(); }, 250);
        setTimeout(ask, ok ? 1500 : 2200);
      }
      function podium() {
        clearInterval(timer);
        var rank = tm.slice().sort(function (a, b) { return b.pts - a.pts; }), H = [70, 52, 40, 30], order = rank.length >= 3 ? [1, 0, 2].concat(rank.length > 3 ? [3] : []) : [0, 1];
        beep('win'); burst(document.body, 140, 'confetti');
        var tie = rank.length > 1 && rank[0].pts === rank[1].pts;
        root.innerHTML = '<div class="qf-end qf-in"><div class="qf-trophy win"><span>🏆</span></div><h2>' + (tie ? T('تعادل! ما شاء الله على الجميع', 'A tie! Well done everyone') : T('الفائز: ', 'Winner: ') + esc(rank[0].ic + ' ' + rank[0].name)) + '</h2>' +
          '<div class="qf-podium">' + order.filter(function (k) { return rank[k]; }).map(function (k) { var t = rank[k]; return '<div class="col" style="--c:' + t.c + '"><div class="tk">' + t.ic + '</div><div class="nm">' + esc(t.name) + '</div><div class="bar" style="height:' + H[k] + 'px"><b>' + N(k + 1) + '</b></div><div class="pt">' + N(t.pts) + ' ' + T('نقطة', 'pts') + '</div></div>'; }).join('') + '</div>' +
          '<p class="qf-note">' + T('الفوز الحقيقيّ أن نتعلّم معًا ونفرح لإخوتنا. 🤝', 'The real win is learning together and being happy for each other. 🤝') + '</p>' +
          '<div class="qf-row" style="justify-content:center"><button type="button" class="qf-btn blue" id="tAgain">🔄 ' + T('مسابقة جديدة', 'New quiz') + '</button><button type="button" class="qf-btn" id="qfHome">🏭 ' + T('المصنع', 'Factory') + '</button></div></div>';
        $('tAgain').onclick = setup; $('qfHome').onclick = home;
      }
      ask();
    }
    setup();
  }

  /* ════════ 📋 assignments — a parent sets work, the child sees it, the parent sees the results (on this device, per child) ════════ */
  function tasks() { return jget('qf_tasks', []) || []; }
  function saveTasks(L) { jset('qf_tasks', L); }
  function readDone() { return jget('read_done', []) || []; }
  function taskTitle(t) {
    if (t.kind === 'read') { var a = (window.READ || []).filter(function (x) { return x.id === t.ref; })[0]; return '📰 ' + (a ? a.t.ar : t.ref); }
    var s = findSet(t.set), k = SKINS.filter(function (x) { return x.id === t.skin; })[0];
    return (k ? k.ic + ' ' + T(k.ar, k.en) : '') + ' · ' + (s ? s.ic + ' ' + T(s.name.ar, s.name.en) : t.set);
  }
  function taskDone(t) { return t.kind === 'read' ? readDone().indexOf(t.ref) >= 0 : !!(t.res && t.res.length); }
  function pending() { return tasks().filter(function (t) { return !taskDone(t); }); }
  function recordTask(id, right, total, win) {
    var L = tasks(), t = L.filter(function (x) { return x.id === id; })[0]; if (!t) return;
    (t.res = t.res || []).push({ d: new Date().toISOString().slice(0, 10), r: right, n: total, w: !!win }); saveTasks(L);
  }
  function taskBanner() {
    var P = pending(); if (!P.length) return '';
    return '<section class="qf-tasks qf-in"><h3>📋 ' + T('واجباتي', 'My tasks') + ' <span>' + N(P.length) + '</span></h3>' + P.map(function (t) {
      return '<div class="qf-task"><span>' + esc(taskTitle(t)) + (t.note ? '<small>💬 ' + esc(t.note) + '</small>' : '') + (t.due ? '<small>📅 ' + N(t.due) + '</small>' : '') + '</span>' +
        (t.kind === 'read' ? '<a class="qf-btn blue" href="../reading/index.html#' + esc(t.ref) + '">' + T('اقرأ', 'Read') + '</a>' : '<button type="button" class="qf-btn blue" data-task="' + esc(t.id) + '">' + T('ابدأ', 'Start') + '</button>') + '</div>';
    }).join('') + '</section>';
  }
  function parentPanel() {
    RUN++;
    var L = tasks();
    root.innerHTML = '<div class="qf-top"><button type="button" class="qf-btn" id="qfBack">↩️ ' + T('المصنع', 'Factory') + '</button><b>🔐 ' + T('لوحة الوالدين والمعلّمين', 'Parents & teachers') + '</b></div>' +
      '<div class="qf-ed qf-in"><h3 style="margin-top:0">📋 ' + T('الواجبات ونتائجها', 'Tasks and results') + '</h3>' +
      (L.length ? L.map(function (t) {
        var done = taskDone(t), last = t.res && t.res[t.res.length - 1];
        return '<div class="qf-task' + (done ? ' done' : '') + '"><span>' + esc(taskTitle(t)) + (t.note ? '<small>💬 ' + esc(t.note) + '</small>' : '') + '<small>' + (done ? '✅ ' + (last ? T('أنجزه في ', 'Done on ') + N(last.d) + ' — ' + N(last.r) + '/' + N(last.n) + (t.res.length > 1 ? T(' (محاولات: ', ' (tries: ') + N(t.res.length) + ')' : '') : T('قُرئ المقال وأُجيب عن أسئلته', 'The article was read and its questions answered')) : '⏳ ' + T('لم يُنجَز بعد', 'Not done yet')) + (t.due ? ' · 📅 ' + N(t.due) : '') + '</small></span><button type="button" class="qf-btn red" data-del="' + esc(t.id) + '" aria-label="' + T('احذف', 'Delete') + '">🗑️</button></div>';
      }).join('') : '<p class="qf-note">' + T('لا واجبات بعد.', 'No tasks yet.') + '</p>') +
      '<h3>➕ ' + T('واجبٌ جديد', 'New task') + '</h3><p class="qf-note">' + T('للعبة: اختر مجموعة الأسئلة في المصنع، ثم اضغط «📋 اجعلها واجبًا». لمقال: افتح المقال في نادي القراءة واضغط «📋 اجعله واجبًا».', 'For a game: choose a question set in the factory, then press "📋 Make it a task". For an article: open it in the Reading Club and press "📋 Make it a task".') + '</p>' +
      '<div class="qf-row"><button type="button" class="qf-btn" id="pClear">🧹 ' + T('احذف الواجبات المنجزة', 'Remove finished tasks') + '</button></div></div>';
    $('qfBack').onclick = home;
    [].forEach.call(root.querySelectorAll('[data-del]'), function (b) { b.onclick = function () { saveTasks(tasks().filter(function (t) { return t.id !== b.dataset.del; })); parentPanel(); }; });
    $('pClear').onclick = function () { saveTasks(tasks().filter(function (t) { return !taskDone(t); })); parentPanel(); };
  }
  function newTask(setId) {
    RUN++;
    var s = findSet(setId); if (!s) return;
    root.innerHTML = '<div class="qf-top"><button type="button" class="qf-btn" id="qfBack">↩️ ' + T('المصنع', 'Factory') + '</button><b>📋 ' + T('واجبٌ جديد', 'New task') + '</b></div><div class="qf-ed qf-in">' +
      '<p style="font-weight:900;margin-top:0">' + esc(s.ic) + ' ' + esc(T(s.name.ar, s.name.en)) + '</p><label>' + T('اللعبة', 'Game') + '</label><div class="qf-row" id="nSkin">' + SKINS.map(function (k, i) { return '<button type="button" class="qf-tab" data-k="' + k.id + '" aria-pressed="' + (i === 0) + '">' + k.ic + ' ' + T(k.ar, k.en) + '</button>'; }).join('') + '</div>' +
      '<label>' + T('رسالة للطفل (اختياري)', 'A note for the child (optional)') + '</label><input id="nNote" maxlength="120" placeholder="' + T('مثال: راجع درس اليوم قبل المغرب 🌙', 'e.g. Review today\'s lesson before Maghrib 🌙') + '">' +
      '<label>' + T('الموعد (اختياري)', 'Due date (optional)') + '</label><input id="nDue" type="date">' +
      '<div class="qf-row" style="margin-top:.8rem"><button type="button" class="qf-btn green" id="nSave">💾 ' + T('احفظ الواجب', 'Save the task') + '</button></div></div>';
    var skin = SKINS[0].id;
    $('qfBack').onclick = home;
    [].forEach.call(root.querySelectorAll('[data-k]'), function (b) { b.onclick = function () { skin = b.dataset.k; [].forEach.call(root.querySelectorAll('[data-k]'), function (x) { x.setAttribute('aria-pressed', String(x === b)); }); }; });
    $('nSave').onclick = function () { var L = tasks(); L.push({ id: 't' + Date.now().toString(36), kind: 'game', set: s.id, skin: skin, note: $('nNote').value.trim(), due: $('nDue').value, made: new Date().toISOString().slice(0, 10) }); saveTasks(L); beep('ok'); parentPanel(); };
  }
  function gated(fn, title) { if (window.MKGate && MKGate.ask) MKGate.ask(fn, title); else fn(); }

  function setLang(l) {
    lang = l === 'en' ? 'en' : 'ar'; try { LS && LS.setItem('bunyanLang', lang); } catch (e) {}
    document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    [].forEach.call(document.querySelectorAll('.lng-ar'), function (e) { e.style.display = lang === 'ar' ? '' : 'none'; });
    [].forEach.call(document.querySelectorAll('.lng-en'), function (e) { e.style.display = lang === 'en' ? '' : 'none'; });
    [].forEach.call(document.querySelectorAll('.lang button'), function (b) { b.classList.toggle('active', b.getAttribute('data-lang') === lang); });
    home();
  }
  [].forEach.call(document.querySelectorAll('.lang button'), function (b) { b.onclick = function () { setLang(b.getAttribute('data-lang')); }; });
  window.setLang = setLang;
  document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  if (!sharedLink()) setLang(lang);
  window.__qf = { play: play, home: home, state: state, findSet: findSet, enc: enc, mySets: mySets, tasks: tasks, teams: teams };
})();
