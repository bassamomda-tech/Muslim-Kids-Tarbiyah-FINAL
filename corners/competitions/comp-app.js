/* ════════════════════════════════════════════════════════════════
   ركن المسابقات — منطق التطبيق  ·  COMPETITIONS APP
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var BANK = window.COMP_BANK || { topics: [], questions: [] };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function lang() { return document.documentElement.dir === 'ltr' ? 'en' : 'ar'; }
  function L(o) { return o ? (o[lang()] || o.ar || o.en || '') : ''; }
  function toArNum(n) { return lang() === 'en' ? String(n) : String(n).replace(/[0-9]/g, function (d) { return '٠١٢٣٤٥٦٧٨٩'[+d]; }); }

  var TYPE_LBL = {
    mcq:   { ar: 'اختيار من متعدد', en: 'Multiple choice' },
    tf:    { ar: 'صح / خطأ',        en: 'True / False' },
    flash: { ar: 'بطاقة كشف',      en: 'Flashcard' },
  };
  var LVL_LBL = {
    1: { ar: 'سهل',   en: 'Easy' },
    2: { ar: 'متوسط', en: 'Medium' },
    3: { ar: 'صعب',   en: 'Hard' },
  };

  // ── builder state ──
  var sel = { topics: [], levels: [], types: [], count: 10, timer: true, shuffle: true };

  // ── helpers ──
  function topicById(id) { return BANK.topics.filter(function (t) { return t.id === id; })[0]; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  function matching() {
    return BANK.questions.filter(function (q) {
      if (sel.topics.length && sel.topics.indexOf(q.topic) < 0) return false;
      if (sel.levels.length && sel.levels.indexOf(q.level) < 0) return false;
      if (sel.types.length && sel.types.indexOf(q.type) < 0) return false;
      return true;
    });
  }

  function toast(msg) {
    var t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(t._t); t._t = setTimeout(function () { t.classList.remove('show'); }, 2600);
  }

  /* ─────────── BUILDER UI ─────────── */
  function buildChips() {
    // topics — with "All"
    var tc = $('#topicChips'); tc.innerHTML = '';
    var all = document.createElement('button');
    all.className = 'chip' + (sel.topics.length === 0 ? ' active' : '');
    all.innerHTML = '🌟 ' + (lang() === 'en' ? 'All' : 'الكل');
    all.onclick = function () { sel.topics = []; syncBuilder(); };
    tc.appendChild(all);
    BANK.topics.forEach(function (t) {
      var b = document.createElement('button');
      b.className = 'chip' + (sel.topics.indexOf(t.id) >= 0 ? ' active' : '');
      b.style.borderColor = sel.topics.indexOf(t.id) >= 0 ? t.color : '';
      var n = BANK.questions.filter(function (q) { return q.topic === t.id; }).length;
      b.innerHTML = t.icon + ' ' + L(t.name) + ' <span class="ct">' + toArNum(n) + '</span>';
      b.onclick = function () {
        var i = sel.topics.indexOf(t.id);
        if (i >= 0) sel.topics.splice(i, 1); else sel.topics.push(t.id);
        syncBuilder();
      };
      tc.appendChild(b);
    });

    // levels
    var lc = $('#levelChips'); lc.innerHTML = '';
    var allL = document.createElement('button');
    allL.className = 'chip' + (sel.levels.length === 0 ? ' active' : '');
    allL.innerHTML = (lang() === 'en' ? 'All levels' : 'كل المستويات');
    allL.onclick = function () { sel.levels = []; syncBuilder(); };
    lc.appendChild(allL);
    [1, 2, 3].forEach(function (lv) {
      var b = document.createElement('button');
      b.className = 'chip' + (sel.levels.indexOf(lv) >= 0 ? ' active' : '');
      b.innerHTML = ['', '🟢', '🟡', '🔴'][lv] + ' ' + L(LVL_LBL[lv]);
      b.onclick = function () { var i = sel.levels.indexOf(lv); if (i >= 0) sel.levels.splice(i, 1); else sel.levels.push(lv); syncBuilder(); };
      lc.appendChild(b);
    });

    // types
    var yc = $('#typeChips'); yc.innerHTML = '';
    var allY = document.createElement('button');
    allY.className = 'chip' + (sel.types.length === 0 ? ' active' : '');
    allY.innerHTML = (lang() === 'en' ? 'All types' : 'كل الأنواع');
    allY.onclick = function () { sel.types = []; syncBuilder(); };
    yc.appendChild(allY);
    ['mcq', 'tf', 'flash'].forEach(function (ty) {
      var b = document.createElement('button');
      b.className = 'chip' + (sel.types.indexOf(ty) >= 0 ? ' active' : '');
      b.innerHTML = ({ mcq: '🔘', tf: '⚖️', flash: '🃏' })[ty] + ' ' + L(TYPE_LBL[ty]);
      b.onclick = function () { var i = sel.types.indexOf(ty); if (i >= 0) sel.types.splice(i, 1); else sel.types.push(ty); syncBuilder(); };
      yc.appendChild(b);
    });
  }

  function syncBuilder() {
    buildChips();
    var avail = matching().length;
    var range = $('#countRange');
    var max = Math.max(5, Math.min(30, avail));
    range.max = Math.max(5, avail);
    if (sel.count > avail) sel.count = avail;
    if (sel.count < 5 && avail >= 5) sel.count = Math.min(5, avail);
    if (avail < 5) sel.count = avail;
    range.value = sel.count;
    $('#countVal').textContent = toArNum(sel.count);
    $('#availTxt').innerHTML = lang() === 'en'
      ? 'Available: <b>' + avail + '</b> questions'
      : 'المتاح: <b>' + toArNum(avail) + '</b> سؤالًا';
    $('#startBtn').disabled = avail < 1;
  }

  /* ─────────── EXAM ENGINE ─────────── */
  var ex = null;

  function startExam(questions, opts) {
    ex = {
      qs: questions, i: 0, correct: 0, points: 0, timer: opts.timer,
      perTime: 20, answered: false, tval: 20, tick: null, streak: 0, maxStreak: 0,
    };
    $('#homeView').style.display = 'none';
    $('#builderView').style.display = 'none';
    $('#resultView').classList.remove('show');
    $('#exam').classList.add('show');
    document.body.style.overflow = 'hidden';
    renderQ();
  }

  function clearTick() { if (ex && ex.tick) { clearInterval(ex.tick); ex.tick = null; } }

  function startTimer() {
    var el = $('#examTimer');
    if (!ex.timer) { el.style.display = 'none'; return; }
    el.style.display = '';
    ex.tval = ex.perTime; el.classList.remove('low');
    el.textContent = '⏱️ ' + toArNum(ex.tval);
    clearTick();
    ex.tick = setInterval(function () {
      ex.tval--;
      el.textContent = '⏱️ ' + toArNum(Math.max(0, ex.tval));
      if (ex.tval <= 5) el.classList.add('low');
      if (ex.tval <= 0) { clearTick(); timeUp(); }
    }, 1000);
  }

  function renderQ() {
    var q = ex.qs[ex.i];
    ex.answered = false;
    $('#examCount').textContent = toArNum(ex.i + 1) + ' / ' + toArNum(ex.qs.length);
    $('#examProg').style.width = (ex.i / ex.qs.length * 100) + '%';
    var t = topicById(q.topic) || { color: '#888', icon: '❓', name: { ar: '', en: '' } };
    var w = $('#qwrap');
    var html = '<span class="q-topic" style="background:' + hexA(t.color, .18) + ';color:' + t.color + '">' + t.icon + ' ' + L(t.name) +
      '</span><span class="q-lvl">' + ['', '🟢', '🟡', '🔴'][q.level] + ' ' + L(LVL_LBL[q.level]) + '</span>' +
      '<div class="q-text">' + q.q + '</div>';

    if (q.type === 'mcq') {
      var order = ex.shuffle ? shuffle(q.choices.map(function (_, i) { return i; })) : q.choices.map(function (_, i) { return i; });
      html += '<div class="choices" id="choices">';
      order.forEach(function (ci, k) {
        html += '<button class="choice" data-ci="' + ci + '"><span class="ch-key">' + 'ABCD'[k] + '</span><span>' + q.choices[ci] + '</span></button>';
      });
      html += '</div>';
    } else if (q.type === 'tf') {
      html += '<div class="tf-row" id="tfRow">' +
        '<button class="tf-btn" data-v="true"><span class="tf-ic">✔️</span>' + (lang() === 'en' ? 'True' : 'صحيح') + '</button>' +
        '<button class="tf-btn" data-v="false"><span class="tf-ic">✖️</span>' + (lang() === 'en' ? 'False' : 'خطأ') + '</button></div>';
    } else { // flash
      html += '<div class="flash-answer" id="flashAns"><span class="flash-lbl">' + (lang() === 'en' ? 'Answer' : 'الإجابة') + '</span>' + q.answer + '</div>' +
        '<button class="reveal-btn" id="revealBtn">👁️ ' + (lang() === 'en' ? 'Show the answer' : 'أظهِرِ الإجابة') + '</button>' +
        '<div class="selfmark" id="selfmark">' +
        '<button class="sm-btn no" data-ok="0">✖️ ' + (lang() === 'en' ? 'I missed it' : 'لم أعرفها') + '</button>' +
        '<button class="sm-btn ok" data-ok="1">✔️ ' + (lang() === 'en' ? 'I knew it' : 'عرفتُها') + '</button></div>';
    }
    html += '<div class="explain" id="explain"></div><button class="next-btn" id="nextBtn">' +
      (ex.i + 1 < ex.qs.length ? (lang() === 'en' ? 'Next question →' : 'السؤال التالي →') : (lang() === 'en' ? 'See result 🏁' : 'شاهِدِ النتيجة 🏁')) + '</button>';
    w.innerHTML = html;
    w.scrollTop = 0; $('#exam').scrollTop = 0;

    if (q.type === 'mcq') { $$('#choices .choice').forEach(function (b) { b.onclick = function () { answerMCQ(+b.dataset.ci, b); }; }); }
    else if (q.type === 'tf') { $$('#tfRow .tf-btn').forEach(function (b) { b.onclick = function () { answerTF(b.dataset.v === 'true', b); }; }); }
    else { $('#revealBtn').onclick = revealFlash; }
    $('#nextBtn').onclick = nextQ;
    startTimer();
  }

  function afterAnswer(correct) {
    ex.answered = true; clearTick();
    if (correct) {
      ex.correct++;
      var base = 100, speed = ex.timer ? Math.max(0, ex.tval) * 5 : 0, lvlB = (ex.qs[ex.i].level - 1) * 20;
      ex.streak++; ex.maxStreak = Math.max(ex.maxStreak, ex.streak);
      var streakB = ex.streak >= 3 ? 30 : 0;
      ex.points += base + speed + lvlB + streakB;
      if (ex.streak >= 3) toast((lang() === 'en' ? '🔥 Streak ×' : '🔥 متتالية ×') + toArNum(ex.streak));
    } else { ex.streak = 0; }
    var q = ex.qs[ex.i];
    if (q.explain) { var e = $('#explain'); e.innerHTML = (correct ? '' : (lang() === 'en' ? '<b>Correct answer.</b> ' : '<b>الإجابة الصحيحة.</b> ')) + q.explain; e.classList.add('show'); }
    $('#nextBtn').classList.add('show');
  }

  function answerMCQ(ci, btn) {
    if (ex.answered) return;
    var q = ex.qs[ex.i], correct = ci === q.answer;
    $$('#choices .choice').forEach(function (b) {
      b.classList.add('locked');
      var bci = +b.dataset.ci;
      if (bci === q.answer) b.classList.add('correct');
      else if (b === btn) b.classList.add('wrong');
      else b.classList.add('dim');
    });
    try { if (!correct && navigator.vibrate) navigator.vibrate(80); } catch (e) {}
    afterAnswer(correct);
  }

  function answerTF(v, btn) {
    if (ex.answered) return;
    var q = ex.qs[ex.i], correct = v === q.answer;
    $$('#tfRow .tf-btn').forEach(function (b) {
      b.classList.add('locked');
      var bv = b.dataset.v === 'true';
      if (bv === q.answer) b.classList.add('correct');
      else if (b === btn) b.classList.add('wrong');
      else b.classList.add('dim');
    });
    try { if (!correct && navigator.vibrate) navigator.vibrate(80); } catch (e) {}
    afterAnswer(correct);
  }

  function revealFlash() {
    clearTick();
    $('#flashAns').classList.add('show');
    $('#revealBtn').style.display = 'none';
    $('#selfmark').classList.add('show');
    $$('#selfmark .sm-btn').forEach(function (b) { b.onclick = function () { if (ex.answered) return; afterAnswer(b.dataset.ok === '1'); $$('#selfmark .sm-btn').forEach(function (x) { x.style.pointerEvents = 'none'; if (x !== b) x.style.opacity = '.4'; }); }; });
  }

  function timeUp() {
    if (ex.answered) return;
    var q = ex.qs[ex.i];
    if (q.type === 'mcq') { $$('#choices .choice').forEach(function (b) { b.classList.add('locked'); if (+b.dataset.ci === q.answer) b.classList.add('correct'); else b.classList.add('dim'); }); }
    else if (q.type === 'tf') { $$('#tfRow .tf-btn').forEach(function (b) { b.classList.add('locked'); if ((b.dataset.v === 'true') === q.answer) b.classList.add('correct'); else b.classList.add('dim'); }); }
    else { revealFlash(); $$('#selfmark .sm-btn').forEach(function (x) { x.style.pointerEvents = 'none'; }); }
    toast(lang() === 'en' ? '⏱️ Time up!' : '⏱️ انتهى الوقت!');
    afterAnswer(false);
  }

  function nextQ() {
    if (ex.i + 1 < ex.qs.length) { ex.i++; renderQ(); }
    else finishExam();
  }

  /* ─────────── RESULTS ─────────── */
  function finishExam() {
    clearTick();
    $('#exam').classList.remove('show');
    var total = ex.qs.length, pct = Math.round(ex.correct / total * 100);
    var stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0;
    var msg = pct >= 90 ? { ar: 'بطلٌ رائع! 🌟', en: 'Amazing champion! 🌟' }
      : pct >= 70 ? { ar: 'أحسنتَ! نتيجةٌ ممتازة', en: 'Well done! Great score' }
      : pct >= 50 ? { ar: 'جيّد! واصِلِ التدرُّب', en: 'Good! Keep practicing' }
      : { ar: 'لا بأسَ — أعِدِ المحاولةَ وستتحسّن', en: 'No worries — try again and improve' };

    saveScore(ex.points, ex.correct, total, pct);

    var name = childName();
    var b = $('#resultBody');
    b.innerHTML =
      '<div class="result-trophy">' + (pct >= 90 ? '🏆' : pct >= 70 ? '🥇' : pct >= 50 ? '🎖️' : '💪') + '</div>' +
      '<div class="result-stars">' + '⭐'.repeat(stars) + '<span style="opacity:.25">' + '☆'.repeat(3 - stars) + '</span></div>' +
      '<div class="result-score">' + toArNum(pct) + '%</div>' +
      '<div class="result-msg">' + L(msg) + '</div>' +
      '<div class="result-sub">' + (lang() === 'en' ? 'You earned' : 'حصلتَ على') + ' <b style="color:var(--gold-soft)">' + toArNum(ex.points) + '</b> ' + (lang() === 'en' ? 'points' : 'نقطة') + '</div>' +
      '<div class="result-stats">' +
        '<div class="rstat"><b>' + toArNum(ex.correct) + '/' + toArNum(total) + '</b><span>' + (lang() === 'en' ? 'Correct' : 'صحيحة') + '</span></div>' +
        '<div class="rstat"><b>' + toArNum(ex.maxStreak) + '</b><span>' + (lang() === 'en' ? 'Best streak' : 'أطول متتالية') + '</span></div>' +
        '<div class="rstat"><b>' + toArNum(ex.points) + '</b><span>' + (lang() === 'en' ? 'Points' : 'النقاط') + '</span></div>' +
      '</div>' +
      '<div class="result-acts">' +
        (stars >= 2 ? '<button class="ra-btn gold" id="certBtn">🏅 ' + (lang() === 'en' ? 'Certificate' : 'شهادة تميّز') + '</button>' : '') +
        '<button class="ra-btn ghost" id="retryBtn">🔁 ' + (lang() === 'en' ? 'Play again' : 'إعادة') + '</button>' +
        '<button class="ra-btn ghost" id="doneBtn">🏠 ' + (lang() === 'en' ? 'Arena' : 'الساحة') + '</button>' +
      '</div>';
    $('#resultView').classList.add('show');
    document.body.style.overflow = 'hidden';

    if ($('#certBtn')) $('#certBtn').onclick = function () { showCert(pct, stars); };
    $('#retryBtn').onclick = function () { $('#resultView').classList.remove('show'); startExam(ex.shuffle ? shuffle(ex.qs) : ex.qs, { timer: ex.timer }); ex.shuffle = true; };
    $('#doneBtn').onclick = goHome;
    if (stars >= 2) burst();
  }

  function childName() {
    try { if (window.MK && MK.activeProfile && MK.activeProfile()) return MK.activeProfile().name; } catch (e) {}
    return lang() === 'en' ? 'Champion' : 'البطل';
  }

  /* ─────────── LEADERBOARD ─────────── */
  function lbKey() { return 'comp_lb'; }
  function saveScore(points, correct, total, pct) {
    try {
      var list = JSON.parse(localStorage.getItem(lbKey()) || '[]');
      list.push({ name: childName(), points: points, pct: pct, correct: correct, total: total, at: Date.now() });
      list.sort(function (a, b) { return b.points - a.points; });
      list = list.slice(0, 20);
      localStorage.setItem(lbKey(), JSON.stringify(list));
    } catch (e) {}
  }
  function renderLeaderboard() {
    var lb = $('#leaderboard'); if (!lb) return;
    var list = [];
    try { list = JSON.parse(localStorage.getItem(lbKey()) || '[]'); } catch (e) {}
    if (!list.length) { lb.innerHTML = '<div class="lb-empty">' + (lang() === 'en' ? 'No scores yet — play a match to top the board! 🏅' : 'لا نتائجَ بعد — العبْ مسابقةً لتتصدَّرَ اللوحة! 🏅') + '</div>'; return; }
    lb.innerHTML = list.slice(0, 10).map(function (r, i) {
      return '<div class="lb-row ' + (i < 3 ? 'top' + (i + 1) : '') + '">' +
        '<div class="lb-rank">' + (i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : toArNum(i + 1)) + '</div>' +
        '<div class="lb-name">' + esc(r.name) + '<div class="lb-meta">' + toArNum(r.correct) + '/' + toArNum(r.total) + ' · ' + toArNum(r.pct) + '%</div></div>' +
        '<div class="lb-score">' + toArNum(r.points) + '</div></div>';
    }).join('');
  }

  /* ─────────── CERTIFICATE ─────────── */
  function showCert(pct, stars) {
    $('#certName').textContent = childName();
    $('#certBody').innerHTML = lang() === 'en'
      ? 'has excelled in the <b>Competitions Arena</b>, scoring <b>' + pct + '%</b> ' + '★'.repeat(stars) + '<br>May Allah bless your knowledge and raise your rank. 🤲'
      : 'قد تميَّزَ في <b>ساحةِ المسابقات</b>، وحصلَ على <b>' + toArNum(pct) + '٪</b> ' + '★'.repeat(stars) + '<br>باركَ اللهُ في علمِه، ورفعَ قدرَه. 🤲';
    var d = new Date();
    $('#certDate').textContent = (lang() === 'en' ? 'Date: ' : 'التاريخ: ') + toArNum(d.getFullYear()) + '/' + toArNum(d.getMonth() + 1) + '/' + toArNum(d.getDate());
    $('#certModal').classList.add('show');
  }

  /* ─────────── STUDY / BROWSE ─────────── */
  var studySec = 'all';
  function studySections() {
    // section = topic (grouping is 'by topic', matching the book's sections).
    // only topics that actually have questions.
    return BANK.topics.filter(function (t) { return BANK.questions.some(function (q) { return q.topic === t.id; }); });
  }
  function openStudy() {
    $('#homeView').style.display = 'none';
    $('#studyView').classList.add('show');
    document.body.style.overflow = 'hidden';
    document.body.classList.remove('hide-answers');
    studySec = 'all';
    renderStudy();
    window.scrollTo(0, 0);
  }
  function renderStudy() {
    var secs = studySections();
    // section bar
    var bar = $('#studySecbar'); bar.innerHTML = '';
    var allC = document.createElement('button');
    allC.className = 'sec-chip' + (studySec === 'all' ? ' active' : '');
    allC.innerHTML = '🌟 ' + (lang() === 'en' ? 'All' : 'الكل') + ' <span class="ct">' + toArNum(BANK.questions.length) + '</span>';
    allC.onclick = function () { studySec = 'all'; renderStudy(); };
    bar.appendChild(allC);
    secs.forEach(function (t) {
      var n = BANK.questions.filter(function (q) { return q.topic === t.id; }).length;
      var c = document.createElement('button');
      c.className = 'sec-chip' + (studySec === t.id ? ' active' : '');
      c.innerHTML = t.icon + ' ' + L(t.name) + ' <span class="ct">' + toArNum(n) + '</span>';
      c.onclick = function () { studySec = t.id; renderStudy(); $('#studyView').scrollTop = 0; };
      bar.appendChild(c);
    });
    // body
    var body = $('#studyBody');
    var showSecs = studySec === 'all' ? secs : secs.filter(function (t) { return t.id === studySec; });
    if (!showSecs.length) { body.innerHTML = '<div class="study-empty">' + (lang() === 'en' ? 'No questions yet.' : 'لا أسئلةَ بعد.') + '</div>'; return; }
    var html = '<div class="print-hint"><button onclick="window.print()">🖨️ ' + (lang() === 'en' ? 'Print / Save PDF' : 'اطبعْ / احفظْ PDF') + '</button></div>';
    showSecs.forEach(function (t) {
      var qs = BANK.questions.filter(function (q) { return q.topic === t.id; });
      html += '<div class="sec-head"><div class="sec-head-ic" style="color:' + t.color + '">' + t.icon + '</div>' +
        '<div><div class="sec-head-t" style="color:' + t.color + '">' + L(t.name) + '</div>' +
        '<div class="sec-head-n">' + (t.book ? '📖 ' + L(t.book) + ' · ' : '') + toArNum(qs.length) + ' ' + (lang() === 'en' ? 'questions' : 'سؤالًا') + '</div></div></div>';
      qs.forEach(function (q, i) {
        html += studyCard(q, i + 1, t.color);
      });
    });
    body.innerHTML = html;
  }
  function studyCard(q, num, color) {
    var tag = ({ mcq: '🔘', tf: '⚖️', flash: '🃏' })[q.type] + ' ' + L(TYPE_LBL[q.type]);
    var h = '<div class="qa"><div class="qa-q"><span class="qa-num">' + toArNum(num) + '</span><span>' + q.q +
      '<span class="qa-tag" style="background:' + hexA(color, .2) + ';color:' + color + '">' + tag + '</span></span></div>';
    h += '<div class="qa-a"><span class="qa-a-lbl">' + (lang() === 'en' ? 'Answer:' : 'الإجابة:') + '</span>';
    if (q.type === 'mcq') {
      h += q.choices.map(function (c, ci) { return '<span class="opt' + (ci === q.answer ? ' right' : '') + '">' + (ci === q.answer ? '✔ ' : '• ') + c + '</span>'; }).join('');
    } else if (q.type === 'tf') {
      h += '<span class="opt right">✔ ' + (q.answer ? (lang() === 'en' ? 'True' : 'صحيح') : (lang() === 'en' ? 'False' : 'خطأ')) + '</span>';
    } else {
      h += q.answer;
    }
    if (q.explain && q.type !== 'flash') h += '<span class="opt" style="margin-top:.4rem">💡 ' + q.explain + '</span>';
    if (q.src) h += '<span class="qa-src">📄 ' + esc(q.src) + '</span>';
    h += '</div></div>';
    return h;
  }

  /* ─────────── nav ─────────── */
  function goHome() {
    clearTick();
    $('#exam').classList.remove('show');
    $('#resultView').classList.remove('show');
    $('#studyView').classList.remove('show');
    $('#builderView').style.display = 'none';
    document.body.classList.remove('hide-answers');
    $('#homeView').style.display = '';
    document.body.style.overflow = '';
    renderLeaderboard();
    window.scrollTo(0, 0);
  }

  function launch(questions, opts) {
    if (!questions.length) { toast(lang() === 'en' ? 'No matching questions' : 'لا توجد أسئلة مطابقة'); return; }
    ex_shuffle_pref = opts.shuffle;
    var qs = opts.shuffle ? shuffle(questions) : questions;
    startExam(qs, opts);
    ex.shuffle = opts.shuffle;
  }
  var ex_shuffle_pref = true;

  /* ─────────── utils ─────────── */
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); }
  function hexA(hex, a) {
    var h = hex.replace('#', ''); if (h.length === 3) h = h.split('').map(function (c) { return c + c; }).join('');
    var r = parseInt(h.substr(0, 2), 16), g = parseInt(h.substr(2, 2), 16), b = parseInt(h.substr(4, 2), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  }
  function burst() {
    var n = 26, box = document.createElement('div');
    box.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:90;overflow:hidden';
    for (var i = 0; i < n; i++) {
      var s = document.createElement('div');
      var c = ['#E8B530', '#F5CC5A', '#9B5FCF', '#3FB07A', '#fff'][i % 5];
      s.style.cssText = 'position:absolute;top:-20px;left:' + (Math.random() * 100) + '%;width:10px;height:14px;background:' + c + ';opacity:.95;border-radius:2px;transform:rotate(' + (Math.random() * 360) + 'deg);animation:confFall ' + (1.6 + Math.random() * 1.4) + 's linear ' + (Math.random() * .3) + 's forwards';
      box.appendChild(s);
    }
    document.body.appendChild(box);
    setTimeout(function () { box.remove(); }, 3600);
  }
  var st = document.createElement('style');
  st.textContent = '@keyframes confFall{to{transform:translateY(105vh) rotate(720deg);opacity:0}}';
  document.head.appendChild(st);

  /* ─────────── wire up ─────────── */
  function initLangButtons() {
    $$('.lang button').forEach(function (b) {
      b.onclick = function () {
        var l = b.dataset.lang, h = document.documentElement;
        if (l === 'en') { h.dir = 'ltr'; h.lang = 'en'; } else { h.dir = 'rtl'; h.lang = 'ar'; }
        try { localStorage.setItem('bunyanLang', l); } catch (e) {}
        $$('.lang button').forEach(function (x) { x.classList.toggle('active', x === b); });
        syncBuilder(); renderLeaderboard();
        if ($('#studyView').classList.contains('show')) renderStudy();
      };
      b.classList.toggle('active', (b.dataset.lang === lang()));
    });
  }

  function init() {
    if (!BANK.questions.length) { toast('بنك الأسئلة فارغ'); }
    initLangButtons();
    syncBuilder();
    renderLeaderboard();

    $('#quickMode').onclick = function () {
      var pool = BANK.questions;
      launch(shuffle(pool).slice(0, Math.min(10, pool.length)), { timer: true, shuffle: true });
    };
    $('#buildMode').onclick = function () {
      $('#homeView').style.display = 'none';
      $('#builderView').style.display = '';
      syncBuilder(); window.scrollTo(0, 0);
    };
    $('#studyMode').onclick = openStudy;
    $('#studyHome').onclick = goHome;
    $('#studyToggle').onclick = function () {
      document.body.classList.toggle('hide-answers');
      var hidden = document.body.classList.contains('hide-answers');
      $$('#studyToggle .lng-ar')[0].textContent = hidden ? '🙈 أظهِرِ الإجابات' : '👁️ الإجابات';
      $$('#studyToggle .lng-en')[0].textContent = hidden ? '🙈 Show answers' : '👁️ Answers';
    };
    $('#backHome').onclick = goHome;

    $('#countRange').oninput = function () { sel.count = +this.value; $('#countVal').textContent = toArNum(sel.count); };
    $('#timerTog').onchange = function () { sel.timer = this.checked; };
    $('#shuffleTog').onchange = function () { sel.shuffle = this.checked; };

    $('#startBtn').onclick = function () {
      var pool = matching();
      var qs = (sel.shuffle ? shuffle(pool) : pool).slice(0, sel.count);
      launch(qs, { timer: sel.timer, shuffle: sel.shuffle });
    };

    $('#examQuit').onclick = function () { if (confirm(lang() === 'en' ? 'Quit the exam?' : 'إنهاء الاختبار؟')) goHome(); };
    $('#resHome').onclick = goHome;
    $('#certClose').onclick = function () { $('#certModal').classList.remove('show'); };
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
