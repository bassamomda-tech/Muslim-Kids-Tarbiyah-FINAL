/* ════════════════════════════════════════════════════════════════
   nasheed-book.js — renders a nasheed book (window.NBOOK config +
   window.ANASHEED1-style data) as printable A4 pages.
   Pictures show as labelled placeholders until the art is added
   (CFG.art: folder; a lesson picture is <art>/<id>.jpg when present).
   ════════════════════════════════════════════════════════════════ */
(function () {
  var CFG = window.NBOOK, D = CFG.data, S = window.NASHEED_SERIES;
  var Q = new URLSearchParams(location.search), DRAFT = Q.get('draft') !== '0';
  var DIG = '٠١٢٣٤٥٦٧٨٩';
  function N(n) { return String(n).replace(/\d/g, function (d) { return DIG[d]; }); }
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function strip(s) { return String(s || '').replace(/<[^>]+>/g, ''); }
  var pages = [], answers = [];
  function pg(cls, html, o) { pages.push({ cls: cls, html: html, o: o || {} }); }
  function ph(id, label, cls) {
    return '<div class="ph ' + (cls || '') + '"><div><b>🖼️ ' + esc(label || 'صورة') + '</b>' + esc(id) + '</div></div>';
  }
  var PART = {}; D.parts.forEach(function (p, i) { p.no = i + 1; PART[p.key] = p; });
  function vars(p) { return '--pc:' + p.color + ';--pcl:' + p.color + '1F'; }

  /* site lessons: pull verses, word board, summary and evidence from the series */
  D.lessons.forEach(function (L, i) {
    L.n = i + 1; L.art = CFG.prefix + 'c' + ('0' + L.n).slice(-2);
    if (!L.site || !S) return;
    var e = S.episodes[L.site - 1];
    L.v = e.verses.map(function (x) { return x.v; });
    if (e.verses.some(function (x) { return x.proposed; })) L.status = 'check';
    var w = []; e.sections.forEach(function (s) { (s.board || []).forEach(function (b) { var m = strip(b).split(/[:：]\s*/); if (w.length < 7) w.push(m.length > 1 ? [m[0], m.slice(1).join(': ')] : [m[0], '']); }); });
    L.words = L.words || w;
    L.meaning = L.meaning || (e.summary || []).map(strip);
    var isl = e.islam || {};
    if (!L.ev && isl.ayah) L.ev = { t: '﴿' + isl.ayah.text + '﴾', ref: isl.ayah.src, ayah: 1 };
    else if (!L.ev && isl.hadith) L.ev = { t: '«' + strip(isl.hadith.text) + '»', ref: isl.hadith.source };
  });

  var STAT = { ok: ['ok', '✅ النصّ جاهز'], check: ['check', '🔎 يُطابَق على مصدره'], todo: ['todo', '⏳ النصّ يُضاف لاحقًا'] };

  function versesHTML(L) {
    if (L.status === 'todo' && !L.v && !L.lines) return '<div class="todo">⏳ ' + esc(L.todo) + '</div>';
    if (L.v) return L.v.map(function (c) { return '<div class="cp"><span>' + esc(c[0]) + '</span><span>' + esc(c[1]) + '</span></div>'; }).join('');
    return L.lines.map(function (t) { return '<div class="ln">' + esc(t) + '</div>'; }).join('');
  }

  /* ── front ── */
  pg('cover', ph(CFG.prefix + 'cover', 'صورة الغلاف') + '<div class="t"><div class="k">' + esc(CFG.kicker) + '</div><h1>' + esc(CFG.title) + '</h1><div class="s">' + esc(CFG.sub) + '</div><div class="br">🌙 ' + esc(CFG.brand) + '</div></div>', { nonum: 1 });
  pg('title-pg', '<div class="bism">بِسمِ اللهِ الرَّحمٰنِ الرَّحيم</div><h1>' + esc(CFG.title) + '</h1><span class="pill">' + esc(CFG.ages) + '</span>' +
    '<div style="width:120mm;margin:4mm 0">' + ph(CFG.prefix + 'cover', 'صورة الأبطال', '') .replace('class="ph ', 'style="height:70mm" class="ph ') + '</div>' +
    '<div style="font:900 15pt Tajawal;color:#0F3B33">هذا الكتابُ مِلْكُ</div><div class="line"><span>الاسم</span><i></i></div><div class="line"><span>الصفّ</span><i></i></div>', { nonum: 1 });
  pg('prose', '<h2>إلى الوالدين والمربّين</h2>' + CFG.parents +
    (DRAFT ? '<div class="legend"><b style="font:900 12pt Tajawal">علامات نسخة المراجعة (تُحذَف من الطبعة النهائيّة):</b><span class="draft ok" style="position:static">✅ النصّ جاهز</span><span class="draft check" style="position:static">🔎 النصّ موجود ويُطابَق على مصدره قبل الطباعة</span><span class="draft todo" style="position:static">⏳ النصّ يُضاف بعد الإذن أو التوثيق</span></div>' : ''), { nonum: 1 });
  pg('toc', '<h2>المحتويات</h2><div id="tocRows"></div>', { nonum: 1 });

  /* ── parts and lessons ── */
  D.parts.forEach(function (p) {
    var ls = D.lessons.filter(function (L) { return L.part === p.key; });
    pg('opener', '<div class="ic">' + p.icon + '</div><span class="no">الجزء ' + N(p.no) + '</span><h2>' + esc(p.title) + '</h2><div class="tg">' + esc(p.tag) + '</div><ol>' +
      ls.map(function (L) { return '<li>' + esc(L.title) + '</li>'; }).join('') + '</ol>', { vars: vars(p), anchor: 'part-' + p.key });
    ls.forEach(function (L) { lesson(L, p); });
  });

  function head(L, sub) {
    return '<div class="lh"><div class="badge">' + N(L.n) + '</div><div><h2>' + esc(L.title) + '</h2><small>' + esc(sub) + '</small></div></div>';
  }
  function lesson(L, p) {
    var st = STAT[L.status || 'ok'], dr = DRAFT ? '<span class="draft ' + st[0] + '">' + st[1] + '</span>' : '';
    // 1 · the nasheed
    pg('nsh', dr + head(L, 'النشيد · احفظْه') + ph(L.art + '.jpg', 'صورة الدرس') +
      '<div class="verses' + (L.v && L.v.length > 9 ? ' two' : '') + '">' + versesHTML(L) + '</div>' +
      '<div class="who">' + esc(L.who) + '</div>' + (L.src ? '<div class="src">' + esc(L.src) + '</div>' : '') +
      '<div class="ladder"><span><i></i>قرأتُه</span><span><i></i>حفظتُ نصفَه</span><span><i></i>حفظتُه كلَّه</span><span><i></i>أنشدتُه لأهلي</span></div>',
      { vars: vars(p), anchor: 'l' + L.n, fit: 1 });
    // 2 · the meaning
    var w = (L.words || []).filter(function (x) { return x[0]; });
    pg('mng', head(L, 'ماذا يعني النشيد؟') +
      (w.length ? '<div class="sec"><b>📖 كلماتٌ جديدة</b><div class="words">' + w.map(function (x) { return '<div><b>' + esc(x[0]) + '</b>' + (x[1] ? ': ' + esc(x[1]) : '') + '</div>'; }).join('') + '</div></div>' : '') +
      '<div class="sec"><b>💡 معنى النشيد</b><ul class="mean">' + (L.meaning || []).map(function (m) { return '<li>' + esc(m) + '</li>'; }).join('') + '</ul></div>' +
      (L.ev ? '<div class="sec"><b>' + (L.ev.ayah ? '📗 من القرآن' : '📜 الدليل') + '</b><div class="ev"><div class="t">' + esc(L.ev.t) + '</div><div class="r">' + esc(L.ev.ref) + '</div></div></div>' : '') +
      (L.parents ? '<div class="sec par">👨‍👩‍👧 ' + esc(L.parents) + '</div>' : '') +
      '<div class="sec"><b>⭐ مهمّتي اليوم</b><div class="task"><i></i><span>' + esc(L.task) + '</span></div></div>' +
      '<div class="mine"><b>✍️ أحبُّ من هذا النشيدِ كلمة:</b><i></i></div>', { vars: vars(p) });
    // 3 · the activity
    pg('act', activity(L), { vars: vars(p) });
  }

  function activity(L) {
    var a = L.act || { type: 'draw', h: 'ارسمْ ما تعلّمتَه' }, h = '<h3>🎨 ' + esc(a.h || '') + '</h3>';
    if (a.type === 'color') return '<h3>🖍️ ' + esc(a.h) + '</h3><div class="hint">لوّنِ الصورةَ بالألوانِ التي تحبُّها</div>' + ph(a.src + '.png', 'رسمة التلوين', 'big');
    if (a.type === 'draw') return h + '<div class="hint">ارسمْ هنا ولوّن</div><div class="frame"></div>';
    if (a.type === 'hand') return '<h3>✋ ' + esc(a.h) + '</h3><div class="hint">عُدَّ على أصابعك واكتبْ</div><div class="hand"><div class="h">🖐️</div><ol>' + a.items.map(function () { return '<li></li>'; }).join('') + '</ol></div>';
    if (a.type === 'match') {
      answers.push([L, a.l.map(function (x, i) { return x + ' ← ' + ['أمُّه', 'مرضعتُه', 'جدُّه', 'عمُّه'][i]; }).join(' · ')]);
      return '<h3>🔗 ' + esc(a.h) + '</h3><div class="hint">ارسمْ خطًّا يصلُ كلَّ اسمٍ بمن هو</div><div class="match"><div>' + a.l.map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('') + '</div><div>' + a.r.map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('') + '</div></div>';
    }
    if (a.type === 'order') {
      answers.push([L, a.items.map(function (x, i) { return x + ' = ' + N(a.ans[i]); }).join(' · ')]);
      return '<h3>🔢 ' + esc(a.h) + '</h3><div class="hint">اكتبِ الرقمَ في المربّع</div><div class="order">' + a.items.map(function (x) { return '<div><i></i>' + esc(x) + '</div>'; }).join('') + '</div>';
    }
    if (a.type === 'fill') {
      var src = L.v ? L.v.slice(0, 4) : null, bank = [], rows;
      if (src) rows = src.map(function (c) { var w = c[1].trim().split(/\s+/), last = w.pop(); bank.push(last); return '<div class="cp"><span>' + esc(c[0]) + '</span><span>' + esc(w.join(' ')) + ' <span class="blank"></span></span></div>'; }).join('');
      else { rows = (L.lines || []).slice(0, 4).map(function (t) { var w = t.trim().split(/\s+/), last = w.pop(); bank.push(last); return '<div class="ln">' + esc(w.join(' ')) + ' <span class="blank"></span></div>'; }).join(''); }
      answers.push([L, bank.join(' · ')]);
      var sh = bank.slice().sort();
      return '<h3>✏️ أكمِلِ النشيد</h3><div class="hint">اختر الكلمةَ المناسبةَ من الصندوق واكتبْها في مكانها</div><div class="bank">' + sh.map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('') + '</div><div class="fill">' + rows + '</div><div class="frame" style="margin-top:5mm"></div>';
    }
    return h + '<div class="frame"></div>';
  }

  /* ── back ── */
  var P1 = vars(D.parts[0]);
  pg('prose', '<h2>🌟 حِكَمٌ صغيرة</h2><p style="text-align:center">أقوالٌ قصيرةٌ من الصحابةِ والتابعين، احفظْ واحدةً كلَّ أسبوع.</p>' +
    D.hikam.map(function (h) { return '<div class="hk"><div class="t">«' + esc(h[0]) + '»</div><div class="w">' + esc(h[1]) + '</div></div>'; }).join(''), { vars: P1 });
  pg('prose', '<h2>🎧 أناشيد نسمعها</h2><p style="text-align:center">أناشيدُ جميلةٌ لم نكتبْ كلماتِها لأنّها ملكُ أصحابها؛ اسمعْها مع أهلك بنسخةٍ بلا موسيقى.</p><div class="lst">' +
    D.listen.map(function (x) { return '<div>🎵 ' + esc(x[0]) + ' <small>— ' + esc(x[1]) + '</small><span class="q">رمز الاستماع</span></div>'; }).join('') + '</div>', { vars: P1 });
  pg('prose', '<h2>⭐ جدولُ الحافظ الصغير</h2><p style="text-align:center">لوّنْ نجمةً لكلِّ درجةٍ من سُلَّمِ الحفظ.</p><div class="trk">' +
    D.lessons.map(function (L) { return '<div style="' + vars(PART[L.part]) + '"><b>' + N(L.n) + '</b>' + esc(L.title.split(':')[0].split('(')[0]) + '<br><i>☆☆☆☆</i></div>'; }).join('') + '</div>', { vars: P1 });
  pg('act', '<h3>🔎 أوجِدْ ٤ فروق</h3><div class="hint">انظرْ جيّدًا إلى الصورتين، وضعْ دائرةً حول كلِّ فرق</div><div style="flex:1;display:grid;gap:5mm">' + ph(CFG.prefix + 'spotA.jpg', 'الصورة الأولى') + ph(CFG.prefix + 'spotB.jpg', 'الصورة الثانية') + '</div>', { vars: P1 });
  pg('prose ans', '<h2>الحلول</h2>' + answers.map(function (a) { return '<h3>' + N(a[0].n) + ') ' + esc(a[0].title) + '</h3><p>' + esc(a[1]) + '</p>'; }).join('') + '<h3>🔎 أوجِد الفروق</h3><p>(صورة الحلّ تُضاف مع صور الكتاب)</p>', { vars: P1 });
  [['الحافظ الصغير', 'للبطل', 'الذي أتمّ'], ['الحافظة الصغيرة', 'للبطلة', 'التي أتمّت']].forEach(function (c) {
    pg('cert', '<div class="in"><div class="bism">بِسمِ اللهِ الرَّحمٰنِ الرَّحيم</div><h2>شهادةُ ' + c[0] + '</h2><div style="font:800 13pt Tajawal">تُمنَحُ هذه الشهادةُ ' + c[1] + ':</div><div class="nm"></div><p>' + c[2] + ' حفظَ أناشيدِ «' + esc(CFG.title) + '». نسألُ اللهَ أن يجعلَ القرآنَ والذكرَ ربيعَ قلبِك، وأن يباركَ فيك.</p><div class="ft"><span>التاريخ</span><span>توقيعُ وليِّ الأمر</span></div></div>', { nonum: 1 });
  });

  /* ── render, contents, fit ── */
  var book = document.getElementById('book'), no = 0;
  book.innerHTML = pages.map(function (p) {
    if (!p.o.nonum) no++; p.no = p.o.nonum ? 0 : no;
    return '<section class="pg ' + p.cls + '"' + (p.o.vars ? ' style="' + p.o.vars + '"' : '') + (p.o.anchor ? ' id="' + p.o.anchor + '"' : '') + '>' + p.html + (p.no ? '<div class="num">' + N(p.no) + '</div>' : '') + '</section>';
  }).join('');
  function pnum(id) { var el = document.getElementById(id); if (!el) return ''; var i = Array.prototype.indexOf.call(book.children, el); return pages[i].no ? N(pages[i].no) : ''; }
  document.getElementById('tocRows').innerHTML = D.parts.map(function (p) {
    return '<div style="' + vars(p) + '"><div class="prt"><span class="d"></span>الجزء ' + N(p.no) + ': ' + esc(p.title) + '</div><div class="rows">' +
      D.lessons.filter(function (L) { return L.part === p.key; }).map(function (L) { return '<div class="r"><b>' + N(L.n) + '</b><span>' + esc(L.title) + '</span><em>' + pnum('l' + L.n) + '</em></div>'; }).join('') + '</div></div>';
  }).join('');
  function fit() {
    Array.prototype.forEach.call(document.querySelectorAll('.nsh .verses'), function (v) {
      var fs = 17, pgEl = v.closest('.pg'), imgEl = pgEl.querySelector('.ph');
      while (v.scrollHeight > v.clientHeight + 1 && fs > 11) { fs -= .5; v.style.setProperty('--fs', fs + 'pt'); if (fs < 14.5 && imgEl.offsetHeight > 240) imgEl.style.height = '62mm'; }
      v.dataset.fs = fs;
    });
  }
  var tb = document.createElement('div'); tb.className = 'tb';
  tb.innerHTML = '<button onclick="print()">🖨️ طباعة / PDF</button><button onclick="location.search=\'' + (DRAFT ? '?draft=0' : '') + '\'">' + (DRAFT ? 'إخفاء علامات المراجعة' : 'إظهار علامات المراجعة') + '</button>';
  document.body.appendChild(tb);
  var done = function () { fit(); var l = document.getElementById('loading'); if (l) l.remove(); window.BOOK_READY = true; window.BOOK_PAGES = pages.length; };
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { setTimeout(done, 50); }); else setTimeout(done, 500);
})();
