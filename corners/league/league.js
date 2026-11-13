/* «مسابقة الأسبوع» — the weekly contest between the site's children.
   • A new week starts every Friday (local date). Everyone in the same age group gets the SAME 10 questions (seeded by the week).
   • Two groups: 7–9 (easier articles + adding) and 10–12 (harder articles + times tables). 20 seconds a question:
     right = 100 + 5 × seconds left (max 200) → max 2000 for the week.
   • One official try per child per week (Firestore: league/{week}_{group}/scores/{uid_childId}, create-only in the rules);
     replays afterwards are practice and are not sent.
   • Names: a nickname the parent types (behind the parent question) → nicknames/{uid_childId} status 'pending';
     the admin approves it on this page; until then the board shows «متسابق مجتهد ⭐». No real names, no photos.
   • Top 10 of the last finished week → a printable certificate. Needs the family to be signed in (login.html). */
(function () {
  'use strict';
  var root = document.getElementById('lg'); if (!root) return;
  var LS = null; try { LS = window.localStorage; } catch (e) {}
  function jget(k, d) { try { var v = LS && LS.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function jset(k, v) { try { LS && LS.setItem(k, JSON.stringify(v)); } catch (e) {} }
  var lang = 'ar'; try { lang = (LS && LS.getItem('bunyanLang') || 'ar').indexOf('en') === 0 ? 'en' : 'ar'; } catch (e) {}
  function T(a, e) { return lang === 'ar' ? a : e; }
  function N(n) { return lang === 'ar' ? String(n).replace(/\d/g, function (d) { return '٠١٢٣٤٥٦٧٨٩'[d]; }) : String(n); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function $(id) { return document.getElementById(id); }
  function calm() { try { return document.documentElement.classList.contains('calm') || matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  var ADMIN = 'bassamomda91@gmail.com', MAXQ = 10, SECS = 20;

  /* ── tiny sounds + confetti (same feel as the Question Factory) ── */
  var AC = null;
  function tone(f, t0, d, v) { try { AC = AC || new (window.AudioContext || window.webkitAudioContext)(); var o = AC.createOscillator(), g = AC.createGain(), t = AC.currentTime + t0; o.frequency.value = f; o.type = 'sine'; g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(v || .18, t + .01); g.gain.exponentialRampToValueAtTime(.0001, t + d); o.connect(g); g.connect(AC.destination); o.start(t); o.stop(t + d + .02); } catch (e) {} }
  function sfx(k) { var o = jget('mk:a11y', null); if (o && o.sfx === 'off') return; if (k === 'ok') { tone(1046, 0, .4); tone(1318, .07, .45); } else if (k === 'no') tone(300, 0, .3, .12); else if (k === 'win') [523, 659, 784, 1046].forEach(function (f, i) { tone(f, i * .1, .4, .14); }); else tone(900, 0, .04, .06); }
  function confetti() {
    if (calm()) return; var c = document.createElement('canvas'), x = c.getContext('2d'), P = [], cols = ['#FFD54A', '#3BB36D', '#2F6FD6', '#E5574A', '#C77DFF'];
    c.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:60'; c.width = innerWidth; c.height = innerHeight; document.body.appendChild(c);
    for (var i = 0; i < 140; i++) P.push({ x: Math.random() * innerWidth, y: -Math.random() * 200, vx: (Math.random() - .5) * 3, vy: 2 + Math.random() * 3, s: 5 + Math.random() * 5, r: Math.random() * 6, c: cols[i % 5] });
    var n = 0; (function f() { x.clearRect(0, 0, c.width, c.height); P.forEach(function (p) { p.x += p.vx; p.y += p.vy; p.r += .1; x.save(); x.translate(p.x, p.y); x.rotate(p.r); x.fillStyle = p.c; x.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); x.restore(); }); if (++n < 220) requestAnimationFrame(f); else c.remove(); })();
  }

  /* ── the week, and the same questions for everyone ── */
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function fri(d) { d = new Date(d.getFullYear(), d.getMonth(), d.getDate()); d.setDate(d.getDate() - ((d.getDay() + 2) % 7)); return d; }   /* Friday on or before */
  function wid(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  var THIS = fri(new Date()), WEEK = wid(THIS), LAST = wid(new Date(THIS.getFullYear(), THIS.getMonth(), THIS.getDate() - 7));
  function fmt(w) { var p = w.split('-'), d = new Date(+p[0], +p[1] - 1, +p[2]); try { return d.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' }); } catch (e) { return N(w); } }
  function nextFri() { var d = new Date(THIS); d.setDate(d.getDate() + 7); return d; }
  function rng(seed) { var h = 1779033703 ^ seed.length; for (var i = 0; i < seed.length; i++) { h = Math.imul(h ^ seed.charCodeAt(i), 3432918353); h = h << 13 | h >>> 19; } return function () { h = Math.imul(h ^ h >>> 16, 2246822507); h = Math.imul(h ^ h >>> 13, 3266489909); h ^= h >>> 16; return (h >>> 0) / 4294967296; }; }
  function sshuffle(a, R) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(R() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function weekQuestions(week, div) {
    var R = rng(week + '|' + div), lv = div === 'big' ? 2 : 1, pool = [];
    (window.READ || []).filter(function (a) { return a.lv === lv; }).sort(function (a, b) { return a.id < b.id ? -1 : 1; }).forEach(function (a) { a.q.forEach(function (q) { pool.push({ q: q.q, em: a.ic, a: q.o[0], w: q.o.slice(1) }); }); });
    var qs = sshuffle(pool, R).slice(0, MAXQ - 2);
    for (var k = 0; k < 2; k++) {
      var x, y, ans, q;
      if (div === 'big') { x = 3 + Math.floor(R() * 8); y = 3 + Math.floor(R() * 8); ans = x * y; q = N(x) + ' × ' + N(y) + ' = ؟'; }
      else { x = 2 + Math.floor(R() * 8); y = 1 + Math.floor(R() * 9); ans = x + y; q = N(x) + ' + ' + N(y) + ' = ؟'; }
      qs.push({ q: q, em: '🧮', a: N(ans), w: [N(ans + 1), N(ans > 2 ? ans - 2 : ans + 3)] });
    }
    return sshuffle(qs, R).map(function (q) { return { q: q.q, em: q.em, a: q.a, o: sshuffle([q.a].concat(q.w), R) }; });
  }

  /* ── Firebase (the page loads the SDK + config + mk-cloud) ── */
  var db = null, auth = null, user = null;
  try { if (window.firebase && window.firebaseConfig) { if (!firebase.apps.length) firebase.initializeApp(window.firebaseConfig); auth = firebase.auth(); db = firebase.firestore(); } } catch (e) {}
  function childId() { try { return (window.MK && MK.activeId && MK.activeId()) || 'main'; } catch (e) { return 'main'; } }
  function childName() { try { var p = window.MK && MK.activeProfile && MK.activeProfile(); return p ? p.avatar + ' ' + p.name : ''; } catch (e) { return ''; } }
  function key() { return user.uid + '_' + childId(); }
  function divNow() { var d = jget('lg_div', null); if (d) return d; var a = window.MKJourney && MKJourney.age ? MKJourney.age() : ''; return /o/.test(a) ? 'big' : 'small'; }
  function col(week, div) { return db.collection('league').doc(week + '_' + div).collection('scores'); }
  var nickCache = {};
  function nickOf(id) {
    if (nickCache[id] !== undefined) return Promise.resolve(nickCache[id]);
    return db.collection('nicknames').doc(id).get().then(function (s) { var d = s.exists ? s.data() : null; nickCache[id] = d && d.status === 'approved' ? d.name : null; return nickCache[id]; }, function () { nickCache[id] = null; return null; });
  }

  /* ════════ screens ════════ */
  function frame(inner) {
    root.innerHTML = '<section class="qf-hero"><div style="font-size:2.4rem">🏅</div><h1>' + T('مسابقة الأسبوع', 'The Weekly Contest') + '</h1><p>' + T('كلّ جمعة عشرةُ أسئلةٍ جديدة لكلّ أطفال الموقع. محاولةٌ واحدة رسميّة في الأسبوع، والعشرة الأوائل ينالون شهادة تميّز. نتسابق في الخير، ونفرح لإخوتنا!', 'Every Friday ten new questions for all the site\'s children. One official try a week; the top ten get a certificate. We race in goodness and are happy for each other!') + '</p></section>' + inner;
  }
  function needLogin() {
    frame('<div class="qf-end"><div class="big">🔐</div><h2>' + T('سجِّل دخول العائلة أوّلًا', 'Sign the family in first') + '</h2><p class="qf-note">' + T('حتى تُحفظ نتيجة طفلك في لوحة الشرف، يحتاج أحد الوالدين أن يسجّل الدخول. لا نعرض اسم الطفل الحقيقيّ أبدًا.', 'So your child\'s score is saved on the board, a parent needs to sign in. We never show a child\'s real name.') + '</p><div class="qf-row" style="justify-content:center"><a class="qf-btn blue" href="../shared/login.html">🔑 ' + T('تسجيل الدخول', 'Sign in') + '</a><button type="button" class="qf-btn" id="lgPractice">🎯 ' + T('تدرّب دون تسجيل', 'Practise without signing in') + '</button></div></div>');
    $('lgPractice').onclick = function () { play(divNow(), true); };
  }
  function noCloud() {
    frame('<div class="qf-end"><div class="big">📡</div><h2>' + T('لا اتّصال بالخادم الآن', 'No connection to the server right now') + '</h2><p class="qf-note">' + T('يمكنك التدرّب، وستُحفظ النتائج الرسميّة حين يعود الاتّصال.', 'You can practise; official scores need the connection.') + '</p><button type="button" class="qf-btn blue" id="lgPractice">🎯 ' + T('تدرّب', 'Practise') + '</button></div>');
    $('lgPractice').onclick = function () { play(divNow(), true); };
  }
  var RUN = 0;
  function home() {
    RUN++;
    if (!db || !auth) return noCloud();
    if (!user) return needLogin();
    var div = divNow(), me = key();
    frame('<div class="lg-week"><div><b>📅 ' + T('أسبوع الجمعة ', 'Week of Friday ') + fmt(WEEK) + '</b><small>' + T('ينتهي مساء الخميس — المسابقة الجديدة يوم الجمعة ', 'Ends Thursday night — the next contest on Friday ') + fmt(wid(nextFri())) + '</small></div><div class="qf-row" role="group">' + [['small', '٧–٩ سنوات', 'Ages 7–9'], ['big', '١٠–١٢ سنة', 'Ages 10–12']].map(function (d) { return '<button type="button" class="qf-tab" data-div="' + d[0] + '" aria-pressed="' + (div === d[0]) + '">' + T(d[1], d[2]) + '</button>'; }).join('') + '</div></div>' +
      '<div class="lg-me" id="lgMe">⏳ ' + T('جارٍ التحميل…', 'Loading…') + '</div>' +
      '<div class="qf-tabs" role="group" style="margin-top:1rem"><button type="button" class="qf-tab" data-board="now" aria-pressed="true">🏆 ' + T('لوحة هذا الأسبوع', 'This week\'s board') + '</button><button type="button" class="qf-tab" data-board="last" aria-pressed="false">📜 ' + T('نتائج الأسبوع الماضي', 'Last week\'s results') + '</button></div><div id="lgBoard" class="lg-board"></div>' +
      (user.email === ADMIN ? '<div class="qf-ed" style="margin-top:1rem"><h3 style="margin-top:0">🛡️ ' + T('المشرف: أسماء تنتظر الموافقة', 'Admin: nicknames waiting for approval') + '</h3><div id="lgAdmin">⏳</div></div>' : ''));
    [].forEach.call(root.querySelectorAll('[data-div]'), function (b) { b.onclick = function () { jset('lg_div', b.dataset.div); home(); }; });
    [].forEach.call(root.querySelectorAll('[data-board]'), function (b) { b.onclick = function () { [].forEach.call(root.querySelectorAll('[data-board]'), function (x) { x.setAttribute('aria-pressed', String(x === b)); }); board(b.dataset.board === 'last' ? LAST : WEEK, div); }; });
    Promise.all([col(WEEK, div).doc(me).get(), db.collection('nicknames').doc(me).get()]).then(function (r) {
      var mine = r[0].exists ? r[0].data() : null, nk = r[1].exists ? r[1].data() : null;
      var nickLine = nk ? (nk.status === 'approved' ? '✅ ' + T('اسم المتسابق: ', 'Contest name: ') + '<b>' + esc(nk.name) + '</b>' : nk.status === 'pending' ? '⏳ ' + T('الاسم «', 'The name "') + esc(nk.name) + T('» ينتظر موافقة المشرف', '" is waiting for approval') : '❌ ' + T('لم يُقبل الاسم — اختاروا اسمًا آخر', 'The name was not accepted — choose another')) : '✏️ ' + T('لم يُختر اسمٌ بعد — سيظهر «متسابق مجتهد ⭐» حتى يختار أحد الوالدين اسمًا', 'No name yet — you will show as "Hard-working player ⭐" until a parent picks one');
      $('lgMe').innerHTML = '<div class="lg-who">' + esc(childName()) + '</div><p style="margin:.2rem 0">' + nickLine + ' <button type="button" class="qf-btn" id="lgNick" style="min-height:38px">✏️ ' + T('اسم المتسابق', 'Contest name') + '</button></p>' +
        (mine ? '<p class="lg-done">🎯 ' + T('شاركتَ هذا الأسبوع: ', 'You played this week: ') + '<b>' + N(mine.score) + '</b> ' + T('نقطة', 'points') + ' (' + N(mine.right) + '/' + N(MAXQ) + ')</p><button type="button" class="qf-btn" id="lgGo">🎯 ' + T('العب للتدريب (لا تُحسب)', 'Play for practice (not counted)') + '</button>'
          : '<button type="button" class="qf-btn green lg-start" id="lgGo">🏁 ' + T('ابدأ مسابقة هذا الأسبوع', 'Start this week\'s contest') + '</button><p class="qf-note">' + T('محاولةٌ واحدة فقط تُحسب — استعدّ واجلس في مكانٍ هادئ 🙂', 'Only one try counts — get ready and sit somewhere quiet 🙂') + '</p>');
      $('lgGo').onclick = function () { play(div, !!mine); };
      $('lgNick').onclick = function () { var go = function () { nickForm(nk); }; if (window.MKGate && MKGate.ask) MKGate.ask(go, T('اسم المتسابق يختاره أحد الوالدين', 'A parent chooses the contest name')); else go(); };
    }, function () { $('lgMe').innerHTML = '<p class="qf-fb no">' + T('تعذّر الاتّصال بالخادم. حاول لاحقًا.', 'Could not reach the server. Try later.') + '</p>'; });
    board(WEEK, div);
    if (user.email === ADMIN) adminList();
  }
  function board(week, div) {
    var el = $('lgBoard'), me = key(); el.innerHTML = '⏳';
    col(week, div).orderBy('score', 'desc').limit(50).get().then(function (snap) {
      var rows = []; snap.forEach(function (d) { rows.push({ id: d.id, s: d.data() }); });
      if (!rows.length) { el.innerHTML = '<p class="qf-note" style="text-align:center">' + (week === WEEK ? T('لم يشارك أحدٌ بعد — كن الأوّل! 🌟', 'Nobody has played yet — be the first! 🌟') : T('لا نتائج للأسبوع الماضي.', 'No results for last week.')) + '</p>'; return; }
      return Promise.all(rows.map(function (r) { return nickOf(r.id); })).then(function (names) {
        var myRank = 0;
        el.innerHTML = '<ol class="lg-list">' + rows.map(function (r, i) {
          if (r.id === me) myRank = i + 1;
          var medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : N(i + 1);
          return '<li class="' + (r.id === me ? 'me' : '') + (i < 10 ? ' top' : '') + '"><span class="rk">' + medal + '</span><span class="nm">' + esc(names[i] || T('متسابق مجتهد ⭐', 'Hard-working player ⭐')) + (r.id === me ? ' <small>(' + T('أنت', 'you') + ')</small>' : '') + '</span><span class="sc">' + N(r.s.score) + '</span></li>';
        }).join('') + '</ol>';
        if (week === LAST && myRank && myRank <= 10) {
          el.insertAdjacentHTML('afterbegin', '<div class="lg-cert-cta">🏅 ' + T('ما شاء الله! كنتَ من العشرة الأوائل الأسبوع الماضي.', 'Masha\'Allah! You were in last week\'s top ten.') + ' <button type="button" class="qf-btn blue" id="lgCert">🖨️ ' + T('اطبع شهادتك', 'Print your certificate') + '</button></div>');
          var me2 = rows[myRank - 1]; $('lgCert').onclick = function () { certificate(names[myRank - 1], myRank, me2.s.score, div); };
        }
      });
    }, function () { el.innerHTML = '<p class="qf-fb no">' + T('تعذّر تحميل اللوحة.', 'Could not load the board.') + '</p>'; });
  }

  /* nickname chosen by a parent → waits for the admin */
  function nickForm(nk) {
    RUN++;
    frame('<div class="qf-ed qf-in"><h3 style="margin-top:0">✏️ ' + T('اسم المتسابق في لوحة الشرف', 'Contest name on the board') + '</h3><p class="qf-note">' + T('اختاروا اسمًا مستعارًا لطيفًا (لا الاسم الحقيقيّ الكامل، ولا رقم هاتف، ولا عنوان). يظهر بعد موافقة المشرف.', 'Choose a kind nickname (not the full real name, no phone number, no address). It appears after the admin approves it.') + '</p>' +
      '<input id="lgNickIn" maxlength="20" value="' + esc(nk ? nk.name : '') + '" placeholder="' + T('مثال: نخلة مجتهدة', 'e.g. Hard-working Palm') + '"><div class="qf-row" style="margin:.4rem 0;flex-wrap:wrap">' + ['نخلة', 'هلال', 'نجمة', 'صقر', 'غيمة', 'قمر'].map(function (w) { return '<button type="button" class="qf-tab" data-sug="' + w + '">' + w + '</button>'; }).join('') + '</div><p class="qf-fb no" id="lgNickEr"></p>' +
      '<div class="qf-row"><button type="button" class="qf-btn green" id="lgNickSave">💾 ' + T('أرسل للموافقة', 'Send for approval') + '</button><button type="button" class="qf-btn" id="lgNickBack">↩️ ' + T('رجوع', 'Back') + '</button></div></div>');
    [].forEach.call(root.querySelectorAll('[data-sug]'), function (b) { b.onclick = function () { $('lgNickIn').value = b.dataset.sug + ' ' + ['المجتهد', 'الذكيّ', 'الشجاع', 'المبدع'][Math.floor(Math.random() * 4)]; }; });
    $('lgNickBack').onclick = home;
    $('lgNickSave').onclick = function () {
      var v = $('lgNickIn').value.replace(/\s+/g, ' ').trim();
      if (v.length < 3 || v.length > 20 || !/^[؀-ۿa-zA-Z0-9 ]+$/.test(v) || /\d{5,}/.test(v)) { $('lgNickEr').textContent = T('اكتبوا ٣–٢٠ حرفًا، حروفًا وأرقامًا فقط، دون أرقام هواتف.', 'Use 3–20 letters and numbers only, no phone numbers.'); return; }
      db.collection('nicknames').doc(key()).set({ uid: user.uid, name: v, status: 'pending', at: firebase.firestore.FieldValue.serverTimestamp() }).then(function () { nickCache[key()] = undefined; home(); }, function () { $('lgNickEr').textContent = T('تعذّر الحفظ. حاول لاحقًا.', 'Could not save. Try later.'); });
    };
  }
  function adminList() {
    db.collection('nicknames').where('status', '==', 'pending').limit(50).get().then(function (snap) {
      var el = $('lgAdmin'); if (!el) return; var rows = []; snap.forEach(function (d) { rows.push({ id: d.id, n: d.data().name }); });
      el.innerHTML = rows.length ? rows.map(function (r) { return '<div class="qf-task"><span>' + esc(r.n) + '</span><span class="qf-row"><button type="button" class="qf-btn green" data-ok="' + esc(r.id) + '">✅</button><button type="button" class="qf-btn red" data-no="' + esc(r.id) + '">❌</button></span></div>'; }).join('') : '<p class="qf-note">' + T('لا أسماء تنتظر.', 'Nothing waiting.') + '</p>';
      [].forEach.call(el.querySelectorAll('[data-ok],[data-no]'), function (b) { b.onclick = function () { var id = b.dataset.ok || b.dataset.no; db.collection('nicknames').doc(id).update({ status: b.dataset.ok ? 'approved' : 'rejected' }).then(adminList); }; });
    }, function () { var el = $('lgAdmin'); if (el) el.textContent = T('تعذّر التحميل (هل نُشرت قواعد Firestore الجديدة؟)', 'Could not load (were the new Firestore rules deployed?)'); });
  }

  /* ════════ the round ════════ */
  function play(div, practice) {
    var qs = weekQuestions(WEEK, div), i = 0, right = 0, score = 0, timer = 0, left = 0, my = ++RUN;
    function ask() {
      clearInterval(timer);
      if (my !== RUN) return;
      if (i >= qs.length) return end();
      var q = qs[i];
      root.innerHTML = '<div class="qf-top"><b>🏅 ' + (practice ? T('تدريب', 'Practice') : T('المسابقة الرسميّة', 'Official contest')) + ' · ' + N(i + 1) + '/' + N(qs.length) + '</b><b class="lg-score">⭐ ' + N(score) + '</b></div>' +
        '<div class="qf-qbox qf-in"><div class="qf-timer"><i id="lgBar"></i></div>' + (q.em ? '<div class="em">' + esc(q.em) + '</div>' : '') + '<p class="qf-q">' + esc(q.q) + '</p><div class="qf-opts">' +
        q.o.map(function (o, k) { return '<button type="button" class="qf-opt" data-ok="' + (o === q.a ? 1 : 0) + '"><i>' + (lang === 'ar' ? 'أبجد' : 'ABCD').charAt(k) + '</i><span>' + esc(o) + '</span></button>'; }).join('') + '</div><div class="qf-fb" id="lgFb" role="status"></div></div>';
      [].forEach.call(root.querySelectorAll('.qf-opt'), function (b) { b.onclick = function () { mark(b.dataset.ok === '1', b); }; });
      left = SECS * 10; var bar = $('lgBar');
      timer = setInterval(function () { if (my !== RUN) return clearInterval(timer); left--; if (bar) bar.style.width = (left / (SECS * 10) * 100) + '%'; if (left > 0 && left <= 50 && left % 10 === 0) sfx('tick'); if (left <= 0) { clearInterval(timer); mark(false, null, true); } }, 100);
    }
    function mark(ok, btn, late) {
      clearInterval(timer); [].forEach.call(root.querySelectorAll('.qf-opt'), function (b) { b.disabled = true; });
      var gain = ok ? 100 + Math.round(Math.max(0, left) / 10) * 5 : 0, fb = $('lgFb');
      if (btn) btn.classList.add(ok ? 'yes' : 'no'); if (!ok) { var r = root.querySelector('.qf-opt[data-ok="1"]'); if (r) r.classList.add('yes'); }
      if (ok) { right++; score += gain; sfx('ok'); fb.className = 'qf-fb ok'; fb.textContent = '✔️ +' + N(gain); } else { sfx('no'); fb.className = 'qf-fb no'; fb.textContent = late ? T('⏰ انتهى الوقت', '⏰ Time\'s up') : T('الجواب الصحيح باللون الأخضر', 'The right answer is in green'); }
      i++; setTimeout(ask, ok ? 1100 : 1700);
    }
    function end() {
      sfx('win'); if (right >= 5) confetti();
      var h = '<div class="qf-end qf-in"><div class="qf-trophy win"><span>🏅</span></div><h2>' + N(score) + ' ' + T('نقطة', 'points') + '</h2><p style="font-weight:800">' + T('إجابات صحيحة: ', 'Correct answers: ') + N(right) + ' / ' + N(qs.length) + '</p><p class="qf-note" id="lgSave">' + (practice ? T('هذه جولة تدريب ولا تُحسب في اللوحة.', 'This was practice and is not counted.') : '⏳ ' + T('نحفظ نتيجتك…', 'Saving your score…')) + '</p><div class="qf-row" style="justify-content:center"><button type="button" class="qf-btn blue" id="lgBack">🏆 ' + T('لوحة الشرف', 'The board') + '</button></div></div>';
      root.innerHTML = h; $('lgBack').onclick = home;
      try { if (window.MKJourney && MKJourney.earn && !practice) MKJourney.earn('league', WEEK, right >= 7 ? 3 : 2); } catch (e) {}
      if (practice || !user || !db) return;
      col(WEEK, div).doc(key()).set({ uid: user.uid, div: div, score: score, right: right, at: firebase.firestore.FieldValue.serverTimestamp() })
        .then(function () { $('lgSave').textContent = '✅ ' + T('حُفظت نتيجتك في لوحة هذا الأسبوع!', 'Your score is on this week\'s board!'); },
          function () { $('lgSave').textContent = T('لم تُحفظ النتيجة (ربّما شاركتَ هذا الأسبوع من قبل، أو لا يوجد اتّصال).', 'The score was not saved (maybe you already played this week, or there is no connection).'); });
    }
    ask();
  }

  /* ════════ printable certificate ════════ */
  function certificate(nick, rank, score, div) {
    var w = window.open('', '_blank'); if (!w) return;
    var name = nick || T('متسابق مجتهد', 'Hard-working player');
    w.document.write('<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>' + T('شهادة تميّز', 'Certificate') + '</title><link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@500;800;900&family=Amiri:wght@700&display=swap" rel="stylesheet"><style>@page{size:A4 landscape;margin:0}body{margin:0;font-family:Tajawal,sans-serif;background:#fff}.c{width:277mm;height:190mm;margin:10mm auto;border:10px double #C9962A;border-radius:18px;padding:16mm;box-sizing:border-box;text-align:center;position:relative;background:radial-gradient(circle at 50% 0,#FFF8E6,#fff 60%)}h1{font-family:Amiri,serif;font-size:42pt;color:#1F3A5F;margin:4mm 0}.n{font-size:30pt;font-weight:900;color:#8A6410;margin:6mm 0}.r{font-size:16pt;line-height:1.9}.s{display:flex;justify-content:space-between;margin-top:14mm;font-size:12pt;color:#555}.s span{border-top:1px solid #999;padding-top:2mm;min-width:60mm}.st{font-size:34pt}</style></head><body><div class="c"><div class="st">🏅</div><h1>' + T('شهادة تميّز', 'Certificate of Excellence') + '</h1><div class="r">' + T('تُمنح هذه الشهادة إلى', 'Awarded to') + '</div><div class="n">' + esc(name) + '</div><div class="r">' + T('تقديرًا للتميّز والحصول على المركز ', 'for excellence and achieving place ') + '<b>' + N(rank) + '</b>' + T(' في «مسابقة الأسبوع» — فئة ', ' in the Weekly Contest — group ') + (div === 'big' ? T('١٠–١٢ سنة', '10–12') : T('٧–٩ سنوات', '7–9')) + '<br>' + T('أسبوع الجمعة ', 'week of Friday ') + fmt(LAST) + ' · ' + N(score) + T(' نقطة', ' points') + '<br>' + T('بارك الله في هذا الجهد، وزادنا جميعًا علمًا وخيرًا ✨', 'May Allah bless this effort and increase us all in knowledge and goodness ✨') + '</div><div class="s"><span>' + T('تربية الطفل المسلم', 'Muslim Kids\' Tarbiyah') + '</span><span>' + T('توقيع وليّ الأمر', 'Parent\'s signature') + '</span></div></div><script>setTimeout(function(){print()},600)<\/script></body></html>');
    w.document.close();
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
  document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  root.innerHTML = '<p class="qf-note" style="text-align:center;padding:2rem">⏳</p>';
  if (auth) auth.onAuthStateChanged(function (u) { user = u; home(); }); else home();
  window.__lg = { weekQuestions: weekQuestions, WEEK: WEEK, LAST: LAST, fri: fri, wid: wid };
})();
