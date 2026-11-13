/* «سُلَّم القراءة» — the Reading Ladder (Arabic reading step by step, like a phonics path).
   Steps: 1 letters · 2 short vowels (حركات) · 3 long vowels (مدود) · 4 sukun & tanween · 5 three-letter words with a picture ·
   6 short sentences (read, then pick the picture) · 7 «ارمِ واقرأ» (roll a die and read the word aloud — a family/turn-taking game).
   A step = 8 questions; 6 right opens the next step and gives ⭐ (MKJourney 'ladder'). Free browser voice for 🔊 (no paid server). */
(function () {
  'use strict';
  var root = document.getElementById('ld'); if (!root) return;
  var LS = null; try { LS = window.localStorage; } catch (e) {}
  function jget(k, d) { try { var v = LS && LS.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function jset(k, v) { try { LS && LS.setItem(k, JSON.stringify(v)); } catch (e) {} }
  var lang = 'ar'; try { lang = (LS && LS.getItem('bunyanLang') || 'ar').indexOf('en') === 0 ? 'en' : 'ar'; } catch (e) {}
  function T(a, e) { return lang === 'ar' ? a : e; }
  function N(n) { return lang === 'ar' ? String(n).replace(/\d/g, function (d) { return '٠١٢٣٤٥٦٧٨٩'[d]; }) : String(n); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function shuffle(x) { x = x.slice(); for (var i = x.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = x[i]; x[i] = x[j]; x[j] = t; } return x; }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function $(id) { return document.getElementById(id); }
  function say(t) { try { if (!('speechSynthesis' in window)) return; speechSynthesis.cancel(); var u = new SpeechSynthesisUtterance(t), v = speechSynthesis.getVoices().filter(function (x) { return /^ar/i.test(x.lang); })[0]; u.lang = 'ar-SA'; if (v) u.voice = v; u.rate = .8; speechSynthesis.speak(u); } catch (e) {} }
  var AC = null;
  function beep(ok) { try { var o = jget('mk:a11y', null); if (o && o.sfx === 'off') return; AC = AC || new (window.AudioContext || window.webkitAudioContext)(); var t = AC.currentTime; (ok ? [[660, .09], [880, .12]] : [[220, .16]]).forEach(function (s) { var g = AC.createGain(), os = AC.createOscillator(); os.frequency.value = s[0]; os.type = 'triangle'; g.gain.setValueAtTime(.12, t); g.gain.exponentialRampToValueAtTime(.001, t + s[1]); os.connect(g); g.connect(AC.destination); os.start(t); os.stop(t + s[1]); t += s[1]; }); } catch (e) {} }

  var LET = [['ا', 'ألف'], ['ب', 'باء'], ['ت', 'تاء'], ['ث', 'ثاء'], ['ج', 'جيم'], ['ح', 'حاء'], ['خ', 'خاء'], ['د', 'دال'], ['ذ', 'ذال'], ['ر', 'راء'], ['ز', 'زاي'], ['س', 'سين'], ['ش', 'شين'], ['ص', 'صاد'], ['ض', 'ضاد'], ['ط', 'طاء'], ['ظ', 'ظاء'], ['ع', 'عين'], ['غ', 'غين'], ['ف', 'فاء'], ['ق', 'قاف'], ['ك', 'كاف'], ['ل', 'لام'], ['م', 'ميم'], ['ن', 'نون'], ['ه', 'هاء'], ['و', 'واو'], ['ي', 'ياء']];
  var CONS = LET.slice(1, 26).map(function (l) { return l[0]; });   /* ب … ه (no alif/waw/ya as the base letter) */
  var FA = 'َ', DA = 'ُ', KA = 'ِ', SU = 'ْ', TF = 'ً', TD = 'ٌ', TK = 'ٍ';
  var WORDS = [['🦁', 'أَسَد'], ['🐪', 'جَمَل'], ['🌙', 'قَمَر'], ['🐟', 'سَمَك'], ['🍯', 'عَسَل'], ['🌳', 'شَجَر'], ['🌊', 'بَحْر'], ['✏️', 'قَلَم'], ['🏠', 'بَيْت'], ['🌧️', 'مَطَر'], ['⛰️', 'جَبَل'], ['🐎', 'فَرَس'], ['❄️', 'ثَلْج'], ['🥛', 'لَبَن'], ['🍞', 'خُبْز'], ['🌹', 'وَرْد'], ['🐅', 'نَمِر'], ['🐝', 'نَحْل'], ['🐄', 'بَقَر'], ['🍇', 'عِنَب'], ['🧅', 'بَصَل'], ['🍌', 'مَوْز'], ['⭐', 'نَجْم'], ['🪨', 'حَجَر'], ['🍃', 'وَرَق'], ['🔥', 'نَار']];
  var SENT = [['🌙', 'القَمَرُ في السَّماءِ.'], ['🐪', 'الجَمَلُ في الصَّحْراءِ.'], ['🐟', 'السَّمَكُ في البَحْرِ.'], ['📖', 'الكِتابُ على الطّاوِلَةِ.'], ['🐝', 'النَّحْلَةُ تَصْنَعُ العَسَلَ.'], ['🌧️', 'المَطَرُ يَنْزِلُ مِنَ الغَيْمِ.'], ['☀️', 'الشَّمْسُ مُشْرِقَةٌ.'], ['🏠', 'البَيْتُ كَبيرٌ.'], ['🌹', 'الوَرْدَةُ حَمْراءُ.'], ['🐦', 'الطّائِرُ يَطيرُ عالِيًا.'], ['🕌', 'المَسْجِدُ قَريبٌ مِنْ بَيْتِنا.'], ['🍎', 'التُّفّاحَةُ لَذيذَةٌ.'], ['⛵', 'السَّفينَةُ تُبْحِرُ.'], ['🐱', 'القِطَّةُ تَشْرَبُ الماءَ.'], ['🌳', 'الشَّجَرَةُ عالِيَةٌ.'], ['🦁', 'الأَسَدُ قَوِيٌّ.']];

  var STEPS = [
    { id: 'letters', ic: '🔤', ar: 'الحروف', en: 'Letters', dar: 'نتعرّف على الحروف الثمانية والعشرين', den: 'Meet the 28 letters',
      make: function () { var L = pick(LET), o = shuffle(LET.filter(function (x) { return x !== L; })).slice(0, 2).concat([L]); return { big: L[0], q: T('ما اسم هذا الحرف؟', 'What is this letter called?'), opts: shuffle(o).map(function (x) { return [x[1], x === L]; }), cls: 'txt', speak: L[1] }; } },
    { id: 'harakat', ic: '◌َ', ar: 'الحركات', en: 'Short vowels', dar: 'الفتحة والضمّة والكسرة', den: 'Fatha, damma and kasra',
      make: function () { var c = pick(CONS), H = [[FA, 'فتحة', 'fatha'], [DA, 'ضمّة', 'damma'], [KA, 'كسرة', 'kasra']], t = pick(H); return { q: T('أين الحرف الذي عليه ', 'Which letter has a ') + T(t[1], t[2]) + T('؟', '?'), opts: shuffle(H).map(function (h) { return [c + h[0], h === t]; }) }; } },
    { id: 'madd', ic: 'ـا', ar: 'المدود', en: 'Long vowels', dar: 'با · بو · بي', den: 'ba · bu · bi (long)',
      make: function () { var c = pick(CONS), M = [[c + FA + 'ا', 'بالألف', 'with alif'], [c + DA + 'و', 'بالواو', 'with waw'], [c + KA + 'ي', 'بالياء', 'with ya']], t = pick(M); return { q: T('أين المدّ ', 'Which is the long vowel ') + T(t[1], t[2]) + T('؟', '?'), opts: shuffle(M).map(function (m) { return [m[0], m === t]; }) }; } },
    { id: 'tanween', ic: 'ـٌ', ar: 'السكون والتنوين', en: 'Sukun & tanween', dar: 'بْ · بٌ · بً · بٍ', den: 'b · bun · ban · bin',
      make: function () { var c = pick(CONS), A = [[SU, 'سكون', 'sukun'], [TD, 'تنوين ضمّ', 'tanween damma'], [TF, 'تنوين فتح', 'tanween fatha'], [TK, 'تنوين كسر', 'tanween kasra']], t = pick(A), o = shuffle(A.filter(function (x) { return x !== t; })).slice(0, 2).concat([t]); return { q: T('أين الحرف الذي عليه ', 'Which letter has ') + T(t[1], t[2]) + T('؟', '?'), opts: shuffle(o).map(function (a) { return [c + a[0] + (a[0] === TF ? 'ا' : ''), a === t]; }) }; } },
    { id: 'words', ic: '🐪', ar: 'كلمات من ثلاثة أحرف', en: 'Three-letter words', dar: 'انظر إلى الصورة واقرأ الكلمة', den: 'Look at the picture and read the word',
      make: function () { var w = pick(WORDS), o = shuffle(WORDS.filter(function (x) { return x !== w; })).slice(0, 2).concat([w]); return { em: w[0], q: T('ما الكلمة الصحيحة؟', 'Which word is right?'), opts: shuffle(o).map(function (x) { return [x[1], x === w]; }), speakAfter: w[1] }; } },
    { id: 'sentences', ic: '📝', ar: 'جمل قصيرة', en: 'Short sentences', dar: 'اقرأ الجملة ثم اختر صورتها', den: 'Read the sentence, then choose its picture',
      make: function () { var s = pick(SENT), o = shuffle(SENT.filter(function (x) { return x[0] !== s[0]; })).slice(0, 2).concat([s]); return { sent: s[1], q: T('اقرأ الجملة، ثم اختر الصورة المناسبة:', 'Read the sentence, then choose the matching picture:'), opts: shuffle(o).map(function (x) { return [x[0], x === s]; }), cls: 'em', speak: s[1] }; } },
    { id: 'roll', ic: '🎲', ar: 'ارمِ واقرأ', en: 'Roll & read', dar: 'لعبةٌ للعائلة: ارمِ النرد واقرأ الكلمة بصوتٍ عالٍ', den: 'A family game: roll the die and read the word aloud', roll: true }
  ];
  function prog() { return jget('ladder_done', {}) || {}; }
  function open(i) { if (i === 0) return true; var p = prog(); return !!p[STEPS[i - 1].id] || STEPS[i].roll && !!p.letters; }

  var RUN = 0;
  function home() {
    RUN++;
    if ('speechSynthesis' in window) try { speechSynthesis.cancel(); } catch (e) {}
    var p = prog();
    root.innerHTML = '<section class="rd-hero"><div style="font-size:2.6rem">🪜</div><h1>' + T('سُلَّم القراءة', 'The Reading Ladder') + '</h1><p>' + T('نصعد خطوةً خطوة: من الحروف إلى الحركات، ثم الكلمات، ثم الجمل. كلّ درجةٍ نجتازها تفتح التي بعدها.', 'We climb step by step: letters, vowels, words, then sentences. Each step we pass opens the next one.') + '</p></section>' +
      '<div class="ld-steps">' + STEPS.map(function (s, i) { var ok = open(i), done = !!p[s.id]; return '<button type="button" class="ld-step' + (done ? ' done' : '') + (ok ? '' : ' lock') + '" data-i="' + i + '"' + (ok ? '' : ' aria-disabled="true"') + '><span class="n">' + (done ? '✓' : ok ? N(i + 1) : '🔒') + '</span><span><b>' + s.ic + ' ' + T(s.ar, s.en) + '</b><small>' + T(s.dar, s.den) + '</small></span></button>'; }).join('') + '</div>' +
      '<p class="rd-src" style="text-align:center">' + T('🔊 الصوت من متصفّحك، وقد لا يتوفّر في كلّ الأجهزة — القراءة مع أحد الوالدين أجمل!', '🔊 The voice comes from your browser and may not exist on every device — reading with a parent is even better!') + '</p>';
    [].forEach.call(root.querySelectorAll('.ld-step'), function (b) { b.onclick = function () { var i = +b.dataset.i; if (!open(i)) return; STEPS[i].roll ? roll() : quiz(i); }; });
  }

  function quiz(si) {
    var s = STEPS[si], n = 0, right = 0, total = 8, my = ++RUN;
    function next() {
      if (my !== RUN) return;
      if (n >= total) return end();
      var q = s.make(), h = '<div class="qf-top" style="display:flex;justify-content:space-between;align-items:center;gap:.5rem;margin:.4rem 0"><button type="button" class="rd-btn" id="ldBack">🪜 ' + T('السُّلَّم', 'Ladder') + '</button><b>' + s.ic + ' ' + T(s.ar, s.en) + ' · ' + N(n + 1) + '/' + N(total) + '</b></div><article class="rd-art">';
      if (q.big) h += '<div class="ld-big">' + esc(q.big) + '</div>';
      if (q.em) h += '<div class="ld-em">' + q.em + '</div>';
      if (q.sent) h += '<div class="ld-big" style="font-size:clamp(1.8rem,7vw,2.6rem)">' + esc(q.sent) + '</div>';
      h += '<p class="ld-q">' + esc(q.q) + '</p><div class="ld-opts">' + q.opts.map(function (o) { return '<button type="button" class="ld-opt ' + (q.cls || '') + '" data-ok="' + (o[1] ? 1 : 0) + '">' + esc(o[0]) + '</button>'; }).join('') + '</div>' +
        (q.speak ? '<p style="text-align:center;margin:.6rem 0 0"><button type="button" class="rd-btn" id="ldSay">🔊 ' + T('اسمع', 'Listen') + '</button></p>' : '') +
        '<p class="rd-msg" id="ldMsg" role="status" style="text-align:center"></p><div class="rd-prog" style="height:10px;border-radius:99px;background:#EDE3CC;overflow:hidden"><i style="display:block;height:100%;width:' + Math.round(n / total * 100) + '%;background:linear-gradient(90deg,#2E7D5B,#C9962A)"></i></div></article>';
      root.innerHTML = h;
      $('ldBack').onclick = home;
      if ($('ldSay')) $('ldSay').onclick = function () { say(q.speak); };
      [].forEach.call(root.querySelectorAll('.ld-opt'), function (b) {
        b.onclick = function () {
          var ok = b.dataset.ok === '1', m = $('ldMsg');
          [].forEach.call(root.querySelectorAll('.ld-opt'), function (x) { x.disabled = true; if (x.dataset.ok === '1') x.classList.add('yes'); });
          if (!ok) b.classList.add('no');
          beep(ok); if (ok) right++;
          m.className = 'rd-msg' + (ok ? ' ok' : ''); m.textContent = ok ? T('أحسنت! ✔️', 'Well done! ✔️') : T('انظر إلى الجواب الصحيح باللون الأخضر 🙂', 'See the right answer in green 🙂');
          if (q.speakAfter) say(q.speakAfter);
          n++; setTimeout(next, ok ? 900 : 1700);
        };
      });
    }
    function end() {
      var pass = right >= 6, p = prog(), got = 0;
      if (pass) { p[s.id] = 1; jset('ladder_done', p); try { if (window.MKJourney && MKJourney.earn) got = MKJourney.earn('ladder', s.id, 2); } catch (e) {} }
      var nx = STEPS[si + 1];
      root.innerHTML = '<article class="rd-art" style="text-align:center"><div style="font-size:3rem">' + (pass ? '🏅' : '🌱') + '</div><h1>' + (pass ? T('اجتزتَ الدرجة! ما شاء الله', 'Step passed! Masha\'Allah') : T('اقتربتَ! جرّب مرّةً أخرى', 'So close! Try again')) + '</h1><p style="font-weight:800">' + T('إجابات صحيحة: ', 'Correct: ') + N(right) + ' / ' + N(total) + T(' — نحتاج ٦ لنصعد', ' — we need 6 to climb') + '</p>' + (got ? '<p style="color:#8A6410;font-weight:900">⭐ +' + N(got) + '</p>' : '') +
        '<div class="rd-next" style="justify-content:center"><button type="button" class="rd-btn" id="ldAgain">🔄 ' + T('مرّةً أخرى', 'Again') + '</button>' + (pass && nx ? '<button type="button" class="rd-btn green" id="ldNext">' + T('الدرجة التالية: ', 'Next step: ') + nx.ic + ' ' + T(nx.ar, nx.en) + '</button>' : '') + '<button type="button" class="rd-btn" id="ldHome">🪜 ' + T('السُّلَّم', 'Ladder') + '</button></div></article>';
      $('ldAgain').onclick = function () { quiz(si); }; $('ldHome').onclick = home;
      if ($('ldNext')) $('ldNext').onclick = function () { nx.roll ? roll() : quiz(si + 1); };
    }
    next();
  }

  /* 🎲 Roll & read: six words on the die faces; the reader taps «قرأتُها» (a parent or sibling listens) */
  function roll() {
    RUN++;
    var faces = shuffle(WORDS).slice(0, 6), count = 0;
    root.innerHTML = '<div style="display:flex;justify-content:space-between;align-items:center;margin:.4rem 0"><button type="button" class="rd-btn" id="ldBack">🪜 ' + T('السُّلَّم', 'Ladder') + '</button><b>🎲 ' + T('ارمِ واقرأ', 'Roll & read') + '</b></div><article class="rd-art" style="text-align:center">' +
      '<p style="font-weight:800;margin-top:0">' + T('ارمِ النرد واقرأ الكلمة بصوتٍ عالٍ. يستمع أحد أفراد العائلة، ثم اضغط «قرأتُها». تبادلوا الأدوار!', 'Roll the die and read the word aloud. Someone in the family listens, then tap "I read it". Take turns!') + '</p>' +
      '<div class="ld-die" id="ldDie">🎲</div><div id="ldEm" style="font-size:2.2rem;min-height:2.6rem"></div>' +
      '<div class="rd-next" style="justify-content:center"><button type="button" class="rd-btn gold" id="ldRoll">🎲 ' + T('ارمِ النرد', 'Roll the die') + '</button><button type="button" class="rd-btn green" id="ldRead" disabled>✅ ' + T('قرأتُها', 'I read it') + '</button><button type="button" class="rd-btn" id="ldHear" disabled>🔊 ' + T('تأكّد بالصوت', 'Check with the voice') + '</button></div>' +
      '<p class="rd-msg ok" id="ldCount" style="text-align:center"></p><p class="rd-src">' + T('الوجوه الستّ: ', 'The six faces: ') + faces.map(function (f) { return esc(f[1]); }).join(' · ') + '</p></article>';
    var cur = null;
    $('ldBack').onclick = home;
    $('ldRoll').onclick = function () {
      var d = $('ldDie'); d.classList.remove('roll'); void d.offsetWidth; d.classList.add('roll'); cur = pick(faces);
      d.textContent = '…'; $('ldEm').textContent = '';
      setTimeout(function () { d.textContent = cur[1]; $('ldRead').disabled = false; $('ldHear').disabled = false; }, 500);
    };
    $('ldHear').onclick = function () { if (cur) { say(cur[1]); $('ldEm').textContent = cur[0]; } };
    $('ldRead').onclick = function () {
      if (!cur) return; count++; beep(true); $('ldRead').disabled = true; $('ldEm').textContent = cur[0];
      $('ldCount').textContent = T('كلماتٌ قرأتَها: ', 'Words read: ') + N(count) + (count === 6 ? ' 🎉' : '');
      if (count === 6) { var p = prog(); p.roll = 1; jset('ladder_done', p); try { if (window.MKJourney && MKJourney.earn) MKJourney.earn('ladder', 'roll', 2, { daily: true }); } catch (e) {} }
    };
  }

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
  setLang(lang);
  window.__ld = { STEPS: STEPS, quiz: quiz, roll: roll, home: home };
})();
