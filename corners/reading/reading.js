/* «نادي القراءة» — Reading Club engine.
   Articles come from data/*.js → window.READ = [{ id, f, lv, ic, t:{ar,en}, en, body:[…], poem?, words:[[w,meaning]], q:[{q,o:[right,…]}], lead, act, src }].
   Hub (#) : passport of fields, article of the day, filters by age and field, cards.
   Article (#id): tap a dotted word for its meaning, read-aloud with the browser's free Arabic voice, bigger/smaller text,
   hide the second half of each verse to memorise, 3 questions → ⭐ stars (MKJourney 'read'), «فكّر كقائد» + activity.
   The articles are in Arabic on purpose (the club strengthens Arabic); English mode shows the interface and an English summary. */
(function () {
  'use strict';
  var root = document.getElementById('rd'); if (!root) return;
  var LS = null; try { LS = window.localStorage; } catch (e) {}
  function jget(k, d) { try { var v = LS && LS.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function jset(k, v) { try { LS && LS.setItem(k, JSON.stringify(v)); } catch (e) {} }
  var lang = 'ar'; try { lang = (LS && LS.getItem('bunyanLang') || 'ar').indexOf('en') === 0 ? 'en' : 'ar'; } catch (e) {}
  function T(a, e) { return lang === 'ar' ? a : e; }
  function N(n) { return lang === 'ar' ? String(n).replace(/\d/g, function (d) { return '٠١٢٣٤٥٦٧٨٩'[d]; }) : String(n); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function calm() { try { return document.documentElement.classList.contains('calm') || matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }

  var FIELDS = [
    ['poetry', '📜', '#9A6B12', 'شعر وحكمة', 'Poetry & wisdom'],
    ['arabic', '🔤', '#7A3FB0', 'لغتنا الجميلة', 'Our beautiful Arabic'],
    ['glory', '🏰', '#6B2E2E', 'أمجادنا ودروس التاريخ', 'Our glories & lessons of history'],
    ['history', '🏛️', '#8A3B3B', 'تاريخ وحضارة', 'History & civilisation'],
    ['scholars', '🔭', '#1F6F8B', 'علماء ومخترعون', 'Scholars & inventors'],
    ['science', '🐝', '#2E7D5B', 'علوم وعجائب الخلق', 'Science & wonders of creation'],
    ['space', '🌙', '#1F3A5F', 'الفضاء والأرض', 'Space & Earth'],
    ['geo', '🗺️', '#B5562A', 'بلدان وجغرافيا', 'Countries & geography'],
    ['lead', '🧭', '#2E5C8A', 'القيادة والتفكير', 'Leadership & thinking'],
    ['money', '🪙', '#8A6410', 'المال والاقتصاد', 'Money & economy'],
    ['health', '💪', '#C0503A', 'صحّتي وجسمي', 'My health & body']
  ];
  function F(id) { for (var i = 0; i < FIELDS.length; i++) if (FIELDS[i][0] === id) return FIELDS[i]; return ['x', '📄', '#C9962A', id, id]; }
  var ORD = {}; FIELDS.forEach(function (f, i) { ORD[f[0]] = i; });
  var ALL = (window.READ || []).filter(function (a) { return a && a.id && a.body && a.body.length; })
    .sort(function (a, b) { return (ORD[a.f] - ORD[b.f]) || (a.lv - b.lv); });
  function byId(id) { for (var i = 0; i < ALL.length; i++) if (ALL[i].id === id) return ALL[i]; return null; }
  function words(a) { return a.body.join(' ').split(/\s+/).length + (a.poem ? a.poem.v.length * 8 : 0); }
  function mins(a) { return Math.max(1, Math.round(words(a) / 90)); }
  function done() { return jget('read_done', []) || []; }
  function dayKey() { return window.MKJourney && MKJourney.dayKey ? MKJourney.dayKey() : new Date().toISOString().slice(0, 10); }
  function today() { if (!ALL.length) return null; var k = dayKey(), h = 0; for (var i = 0; i < k.length; i++) h = (h * 31 + k.charCodeAt(i)) >>> 0; var d = done(), left = ALL.filter(function (a) { return d.indexOf(a.id) < 0; }), pool = left.length ? left : ALL; return pool[h % pool.length]; }
  var flt = jget('read_flt', { lv: 0, f: '' }) || { lv: 0, f: '' };

  /* ── speech (free browser voice) ── */
  var speaking = false;
  function stopSpeak() { speaking = false; try { speechSynthesis.cancel(); } catch (e) {} [].forEach.call(document.querySelectorAll('.rd-body p.speaking'), function (p) { p.classList.remove('speaking'); }); var b = document.getElementById('rdSpeak'); if (b) { b.setAttribute('aria-pressed', 'false'); b.textContent = '🔊 ' + T('اقرأ لي', 'Read to me'); } }
  function speakAll(parts, els) {
    if (!('speechSynthesis' in window)) return false;
    stopSpeak(); speaking = true;
    var vs = speechSynthesis.getVoices(), v = vs.filter(function (x) { return /^ar/i.test(x.lang); })[0];
    var i = 0;
    (function next() {
      if (!speaking || i >= parts.length) { stopSpeak(); return; }
      [].forEach.call(document.querySelectorAll('.rd-body p.speaking'), function (p) { p.classList.remove('speaking'); });
      if (els[i]) els[i].classList.add('speaking');
      var u = new SpeechSynthesisUtterance(parts[i]); u.lang = 'ar-SA'; if (v) u.voice = v; u.rate = 0.88;
      u.onend = function () { i++; next(); }; u.onerror = function () { i++; next(); };
      speechSynthesis.speak(u);
    })();
    return true;
  }

  /* ════════ hub ════════ */
  function hub() {
    stopSpeak();
    document.title = T('نادي القراءة | كوكب الإبداع', 'Reading Club | Planet of Creativity');
    var d = done(), stars = 0;
    ALL.forEach(function (a) { var e = window.MKJourney && MKJourney.earned ? MKJourney.earned('read', a.id) : null; if (e) stars += e.stars || 0; });
    var td = today();
    var h = '<section class="rd-hero"><div style="font-size:2.6rem">📚</div><h1>' + T('نادي القراءة', 'The Reading Club') + '</h1>' +
      '<p>' + T('مقالاتٌ قصيرة في الشعر والتاريخ والعلوم والفضاء والبلدان ولغتنا العربية والقيادة والمال والصحّة. نقرأ لنفهم، ونفكّر لنقود، ونعمل بما نتعلّم.', 'Short Arabic articles on poetry, history, science, space, countries, our Arabic language, leadership, money and health. We read to understand, think to lead, and act on what we learn.') + '</p>' +
      (lang === 'en' ? '<p style="font-size:.9rem">' + 'The articles are in Arabic to build strong Arabic reading — each one has an English summary.' + '</p>' : '') + '</section>' +
      '<div class="rd-stats"><span class="rd-stat">📖 ' + T('قرأتُ', 'Read') + ' <b>' + N(d.filter(byId).length) + '</b> / ' + N(ALL.length) + '</span><span class="rd-stat">⭐ ' + T('نجوم النادي', 'Club stars') + ' <b>' + N(stars) + '</b></span></div>' +
      '<div class="rd-filters" style="justify-content:center"><a class="rd-btn gold" href="ladder.html">🪜 ' + T('سُلَّم القراءة للصغار: من الحروف إلى الجمل', 'Reading Ladder for little ones: letters to sentences') + '</a><a class="rd-btn" href="../qfactory/index.html">🏭 ' + T('العب بأسئلة النادي في مصنع الأسئلة', 'Play the club questions in the Question Factory') + '</a></div>';
    h += '<section class="rd-pass" aria-label="' + T('جواز القارئ', 'Reader passport') + '"><h2>🛂 ' + T('جواز القارئ — اجمع ختمًا من كلّ مجال', 'Reader passport — collect a stamp from every field') + '</h2><div class="rd-stamps">' +
      FIELDS.map(function (f) { var list = ALL.filter(function (a) { return a.f === f[0]; }); if (!list.length) return ''; var n = list.filter(function (a) { return d.indexOf(a.id) >= 0; }).length; return '<button type="button" class="rd-stamp' + (n ? ' on' : '') + (n && n === list.length ? ' full' : '') + '" data-f="' + f[0] + '" style="cursor:pointer;background:none"><span class="i">' + f[1] + '</span>' + esc(T(f[3], f[4])) + '<span>' + N(n) + '/' + N(list.length) + '</span></button>'; }).join('') + '</div></section>';
    var RT = (jget('qf_tasks', []) || []).filter(function (t) { return t.kind === 'read' && byId(t.ref) && d.indexOf(t.ref) < 0; });
    if (RT.length) h += '<section class="rd-pass" style="border-color:#BFE3CB;background:#F3FBF5"><h2>📋 ' + T('واجباتي في القراءة', 'My reading tasks') + '</h2>' + RT.map(function (t) { var a = byId(t.ref); return '<a class="rd-btn" style="margin:.2rem" href="#' + a.id + '">' + a.ic + ' ' + esc(a.t.ar) + '</a>'; }).join('') + '</section>';
    if (td) h += '<a class="rd-today" href="#' + td.id + '"><span class="i">' + td.ic + '</span><span><small>☀️ ' + T('مقال اليوم', "Today's article") + ' · ' + esc(T(F(td.f)[3], F(td.f)[4])) + '</small><b>' + esc(T(td.t.ar, td.t.en)) + '</b></span></a>';
    h += '<div class="rd-filters" role="group" aria-label="' + T('العمر', 'Age') + '">' + [[0, 'كلّ الأعمار', 'All ages'], [1, '٧–٩ سنوات', 'Ages 7–9'], [2, '١٠–١٢ سنة', 'Ages 10–12']].map(function (x) { return '<button type="button" class="rd-chip" data-lv="' + x[0] + '" aria-pressed="' + (flt.lv === x[0]) + '">' + T(x[1], x[2]) + '</button>'; }).join('') + '</div>';
    h += '<div class="rd-filters" role="group" aria-label="' + T('المجال', 'Field') + '"><button type="button" class="rd-chip" data-f="" aria-pressed="' + (!flt.f) + '">' + T('كلّ المجالات', 'All fields') + '</button>' + FIELDS.filter(function (f) { return ALL.some(function (a) { return a.f === f[0]; }); }).map(function (f) { return '<button type="button" class="rd-chip" data-f="' + f[0] + '" aria-pressed="' + (flt.f === f[0]) + '">' + f[1] + ' ' + esc(T(f[3], f[4])) + '</button>'; }).join('') + '</div>';
    var list = ALL.filter(function (a) { return (!flt.lv || a.lv === flt.lv) && (!flt.f || a.f === flt.f); });
    h += list.length ? '<div class="rd-grid">' + list.map(function (a) { var f = F(a.f); return '<a class="rd-card" href="#' + a.id + '" style="--c:' + f[2] + '">' + (d.indexOf(a.id) >= 0 ? '<span class="done" aria-label="' + T('قرأتُه', 'Read') + '">✅</span>' : '') + '<span class="top"><span class="i">' + a.ic + '</span><span><span class="fld">' + esc(T(f[3], f[4])) + '</span><br><b>' + esc(T(a.t.ar, a.t.en)) + '</b></span></span><span class="meta">' + (a.lv === 1 ? T('٧–٩ سنوات', 'Ages 7–9') : T('١٠–١٢ سنة', 'Ages 10–12')) + ' · ⏱️ ' + N(mins(a)) + ' ' + T('دقائق', 'min') + '</span></a>'; }).join('') + '</div>' : '<p class="rd-empty">' + T('لا مقالات هنا بعد.', 'No articles here yet.') + '</p>';
    root.innerHTML = h;
    [].forEach.call(root.querySelectorAll('[data-lv]'), function (b) { b.onclick = function () { flt.lv = +b.dataset.lv; jset('read_flt', flt); hub(); }; });
    [].forEach.call(root.querySelectorAll('.rd-filters [data-f], .rd-stamp[data-f]'), function (b) { b.onclick = function () { flt.f = b.dataset.f; jset('read_flt', flt); hub(); var g = root.querySelector('.rd-grid'); if (g && b.classList.contains('rd-stamp')) g.scrollIntoView({ block: 'start' }); }; });
  }

  /* ════════ article ════════ */
  function marked(text, a, used) {
    var s = esc(text), slots = [];
    a.words.forEach(function (w, i) {
      if (used[i]) return; var k = esc(w[0]), at = s.indexOf(k); if (at < 0) return;
      used[i] = 1; slots.push('<button type="button" class="rd-w" data-w="' + i + '">' + k + '</button>');
      s = s.slice(0, at) + '\u0001' + (slots.length - 1) + '\u0002' + s.slice(at + k.length);
    });
    return s.replace(/\u0001(\d+)\u0002/g, function (m, n) { return slots[+n]; });
  }
  function shuffle(x) { x = x.slice(); for (var i = x.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = x[i]; x[i] = x[j]; x[j] = t; } return x; }
  function article(a) {
    stopSpeak();
    var f = F(a.f), d = done(), used = {}, fs = jget('read_fs', 1.18) || 1.18;
    document.documentElement.style.setProperty('--fs', fs + 'rem');
    document.title = T(a.t.ar, a.t.en) + ' | ' + T('نادي القراءة', 'Reading Club');
    var h = '<a class="rd-btn" href="#" id="rdHub">📚 ' + T('كلّ المقالات', 'All articles') + '</a>' +
      '<article class="rd-art" style="--c:' + f[2] + '" lang="ar" dir="rtl"><div class="rd-crumb"><span class="f">' + f[1] + ' ' + esc(T(f[3], f[4])) + '</span><span>·</span><span>' + (a.lv === 1 ? T('٧–٩ سنوات', 'Ages 7–9') : T('١٠–١٢ سنة', 'Ages 10–12')) + '</span><span>·</span><span>⏱️ ' + N(mins(a)) + ' ' + T('دقائق', 'min') + '</span>' + (d.indexOf(a.id) >= 0 ? '<span>· ✅</span>' : '') + '</div>' +
      '<h1>' + a.ic + ' ' + esc(a.t.ar) + '</h1>' +
      '<div class="rd-tools"><button type="button" class="rd-btn gold" id="rdSpeak" aria-pressed="false">🔊 ' + T('اقرأ لي', 'Read to me') + '</button><button type="button" class="rd-btn" id="rdBig" aria-label="' + T('كبّر الخطّ', 'Bigger text') + '">A+</button><button type="button" class="rd-btn" id="rdSmall" aria-label="' + T('صغّر الخطّ', 'Smaller text') + '">A−</button>' + (a.poem ? '<button type="button" class="rd-btn" id="rdHide" aria-pressed="false">🙈 ' + T('أخفِ الشطر الثاني لأحفظ', 'Hide 2nd half to memorise') + '</button>' : '') + '<button type="button" class="rd-btn" id="rdAssign">📋 ' + T('اجعله واجبًا', 'Make it a task') + '</button></div>' +
      (lang === 'en' ? '<div class="rd-en"><small>English summary · ' + esc(a.t.en) + '</small>' + esc(a.en) + '</div>' : '') +
      '<div class="rd-body" id="rdBody">';
    if (a.poem) h += '<div class="rd-poem" id="rdPoem"><div class="by">✒️ ' + esc(a.poem.by.ar) + '</div>' + a.poem.v.map(function (v) { return '<div class="rd-verse"><span>' + marked(v[0], a, used) + '</span><span>' + marked(v[1], a, used) + '</span></div>'; }).join('') + '</div>';
    h += a.body.map(function (p) { return '<p>' + marked(p, a, used) + '</p>'; }).join('') + '</div><div class="rd-mean" id="rdMean" hidden></div>';
    h += '<section class="rd-box rd-words"><h2>📖 ' + T('كلماتٌ جديدة', 'New words') + '</h2><ul>' + a.words.map(function (w) { return '<li><b>' + esc(w[0]) + '</b>: ' + esc(w[1]) + '</li>'; }).join('') + '</ul></section>';
    h += '<section class="rd-box rd-quiz"><h2>❓ ' + T('هل فهمنا؟ أجب عن الأسئلة لتربح النجوم', 'Did we understand? Answer to earn stars') + '</h2>' + a.q.map(function (q, qi) { var o = shuffle(q.o.map(function (t, i) { return [t, i]; })); return '<div class="rd-q" data-q="' + qi + '"><p>' + N(qi + 1) + '. ' + esc(q.q) + '</p><div class="rd-opts">' + o.map(function (x) { return '<button type="button" class="rd-opt" data-ok="' + (x[1] === 0 ? 1 : 0) + '">' + esc(x[0]) + '</button>'; }).join('') + '</div></div>'; }).join('') + '<div class="rd-msg" id="rdMsg" role="status"></div></section>';
    h += '<section class="rd-box rd-lead"><h2>🧭 ' + T('فكّر كقائد', 'Think like a leader') + '</h2><p style="margin:0">' + esc(a.lead) + '</p><p style="margin:.4rem 0 0;font-size:.88rem;color:var(--muted)">' + T('ناقشْ هذا السؤال مع أهلك أو أصدقائك.', 'Talk about it with your family or friends.') + '</p></section>';
    if (a.act) h += '<section class="rd-box rd-act"><h2>🛠️ ' + T('نشاط', 'Activity') + '</h2><p style="margin:0">' + esc(a.act) + '</p></section>';
    var MORE = { 'glory-saladin-quds': 'hattin', 'glory-ain-jalut': 'aynjalut' }[a.id];
    if (MORE) h += '<a class="rd-btn gold" style="margin-top:1rem" href="../heroes-fortress/battles.html#' + MORE + '">🗺️ ' + T('شاهد المعركة على الخريطة في «خُطَط القادة»', 'See the battle on the map in "The Commanders\' Plans"') + '</a>';
    if (a.src) h += '<p class="rd-src">📚 ' + T('المصدر: ', 'Source: ') + esc(a.src) + '</p>';
    var i = ALL.indexOf(a), same = ALL.filter(function (x) { return x.f === a.f && x !== a && done().indexOf(x.id) < 0; })[0], nx = same || ALL[(i + 1) % ALL.length];
    h += '</article><div class="rd-next"><a class="rd-btn" href="#">📚 ' + T('كلّ المقالات', 'All articles') + '</a><a class="rd-btn green" href="#' + nx.id + '">' + T('المقال التالي: ', 'Next: ') + esc(T(nx.t.ar, nx.t.en)) + ' ' + T('←', '→') + '</a></div>';
    root.innerHTML = h;
    var mean = document.getElementById('rdMean');
    [].forEach.call(root.querySelectorAll('.rd-w'), function (b) { b.onclick = function () { var w = a.words[+b.dataset.w]; mean.hidden = false; mean.innerHTML = '📖 <b>' + esc(w[0]) + '</b>: ' + esc(w[1]); }; });
    document.getElementById('rdBig').onclick = function () { fs = Math.min(1.7, +(fs + 0.1).toFixed(2)); jset('read_fs', fs); document.documentElement.style.setProperty('--fs', fs + 'rem'); };
    document.getElementById('rdSmall').onclick = function () { fs = Math.max(0.95, +(fs - 0.1).toFixed(2)); jset('read_fs', fs); document.documentElement.style.setProperty('--fs', fs + 'rem'); };
    document.getElementById('rdAssign').onclick = function () {
      var b = this, go = function () {
        var L = jget('qf_tasks', []) || []; if (!L.some(function (t) { return t.kind === 'read' && t.ref === a.id && done().indexOf(a.id) < 0; })) { L.push({ id: 't' + Date.now().toString(36), kind: 'read', ref: a.id, note: '', due: '', made: new Date().toISOString().slice(0, 10) }); jset('qf_tasks', L); }
        b.textContent = '✅ ' + T('أُضيف إلى واجبات الطفل', 'Added to the child\'s tasks'); b.disabled = true;
      };
      if (window.MKGate && MKGate.ask) MKGate.ask(go, T('الواجبات يضعها أحد الوالدين أو المعلّم', 'A parent or teacher sets tasks')); else go();
    };
    var hide = document.getElementById('rdHide'); if (hide) hide.onclick = function () { var p = document.getElementById('rdPoem'), on = !p.classList.contains('hide'); p.classList.toggle('hide', on); hide.setAttribute('aria-pressed', String(on)); };
    var sp = document.getElementById('rdSpeak');
    sp.onclick = function () {
      if (speaking) return stopSpeak();
      var parts = [], els = [];
      if (a.poem) { parts.push(a.poem.v.map(function (v) { return v[0] + '، ' + v[1]; }).join('. ')); els.push(null); }
      var ps = document.querySelectorAll('#rdBody > p'); a.body.forEach(function (p, k) { parts.push(p); els.push(ps[k]); });
      if (speakAll(parts, els)) { sp.setAttribute('aria-pressed', 'true'); sp.textContent = '⏹ ' + T('أوقِف القراءة', 'Stop reading'); }
      else { sp.disabled = true; sp.textContent = T('القراءة الصوتيّة غير متاحة في هذا المتصفّح', 'Read-aloud is not available in this browser'); }
    };
    var right = {}, wrong = 0;
    [].forEach.call(root.querySelectorAll('.rd-opt'), function (b) {
      b.onclick = function () {
        var q = b.closest('.rd-q'), qi = q.dataset.q; if (right[qi]) return;
        if (b.dataset.ok === '1') { b.classList.add('yes'); right[qi] = 1; [].forEach.call(q.querySelectorAll('.rd-opt'), function (x) { x.disabled = true; }); }
        else { b.classList.add('no'); b.disabled = true; wrong++; }
        var n = Object.keys(right).length, msg = document.getElementById('rdMsg');
        if (n < a.q.length) { msg.className = 'rd-msg'; msg.textContent = b.dataset.ok === '1' ? T('أحسنت! ✔️', 'Well done! ✔️') : T('ارجع إلى النصّ وابحث عن الجواب 🔍', 'Look back at the text and find the answer 🔍'); return; }
        var dd = done(); if (dd.indexOf(a.id) < 0) { dd.push(a.id); jset('read_done', dd); }
        var got = 0; try { if (window.MKJourney && MKJourney.earn) got = MKJourney.earn('read', a.id, wrong ? 1 : 2); } catch (e) {}
        msg.className = 'rd-msg ok'; msg.textContent = '🎉 ' + T('ما شاء الله! فهمتَ المقال', 'Masha\'Allah! You understood the article') + (got ? ' · +' + N(got) + ' ⭐' : ' · ' + T('أُضيف إلى جواز القارئ ✅', 'added to your reader passport ✅'));
      };
    });
    document.getElementById('rdHub').onclick = function (e) { e.preventDefault(); go(''); };
  }

  function go(id) { if (id) location.hash = id; else { try { history.pushState(null, '', location.pathname + location.search); } catch (e) { location.hash = ''; } route(); } }
  function route() { var id = (location.hash || '').replace('#', ''), a = id && byId(id); if (a) article(a); else hub(); try { window.scrollTo(0, 0); } catch (e) {} }
  function setLang(l) {
    lang = l === 'en' ? 'en' : 'ar'; try { LS && LS.setItem('bunyanLang', lang); } catch (e) {}
    document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    [].forEach.call(document.querySelectorAll('.lng-ar'), function (e) { e.style.display = lang === 'ar' ? '' : 'none'; });
    [].forEach.call(document.querySelectorAll('.lng-en'), function (e) { e.style.display = lang === 'en' ? '' : 'none'; });
    [].forEach.call(document.querySelectorAll('.lang button'), function (b) { b.classList.toggle('active', b.getAttribute('data-lang') === lang); });
    var y = window.pageYOffset; route(); try { window.scrollTo(0, y); } catch (e) {}
  }
  [].forEach.call(document.querySelectorAll('.lang button'), function (b) { b.onclick = function () { setLang(b.getAttribute('data-lang')); }; });
  window.setLang = setLang;
  window.addEventListener('hashchange', route);
  window.addEventListener('pagehide', stopSpeak);
  setLang(lang);
  window.__read = { ALL: ALL, done: done };
})();
