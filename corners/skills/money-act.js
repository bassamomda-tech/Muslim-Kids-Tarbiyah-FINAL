/* money-act.js — محرّك الأنشطة التفاعلية لمسلسل «رائد الأعمال الصغير».
   كل حلقة في data/money-series.js لها online.steps، وكل خطوة نوعها واحد من:
     sort      صنّف: items[{t,icon,bin,why}] في bins[]
     match     صِل: pairs[[يمين, يسار]]
     quiz      اختيار من متعدّد: items[{q,o[],a,why?}]
     order     رتّب: items[] بالترتيب الصحيح (تُعرض مخلوطة)
     decision  مختبر القرار: scenario, options[{t,result,best}]
     budget    قسّم المبلغ: total, step, cats[{t,icon,min,max,why}]
     calc      احسب: items[{q,answer,unit?,hint?,why?}]
   كل شيء يعمل دون إنترنت بعد التحميل، بلا مؤقّتات تضغط على الطفل. */
(function () {
  'use strict';
  var AR = '٠١٢٣٤٥٦٧٨٩';
  function ar(n) { return String(n).replace(/\d/g, function (d) { return AR[d]; }); }
  function en(s) { return String(s).replace(/[٠-٩]/g, function (d) { return AR.indexOf(d); }).replace(/[٫,]/g, '.'); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function shuffle(a, seed) {
    var r = seed || 7, out = a.slice();
    for (var i = out.length - 1; i > 0; i--) { r = (r * 9301 + 49297) % 233280; var j = Math.floor(r / 233280 * (i + 1)); var t = out[i]; out[i] = out[j]; out[j] = t; }
    return out;
  }
  function done(key) { try { var s = JSON.parse(localStorage.getItem('tr:money-act') || '[]'); if (s.indexOf(key) < 0) { s.push(key); localStorage.setItem('tr:money-act', JSON.stringify(s)); } } catch (e) {} }

  var R = {};

  R.sort = function (box, st, ok) {
    var left = st.items.length, sel = null, tries = {};
    box.innerHTML = '<p class="ma-p">' + esc(st.prompt || 'اضغط على البطاقة ثم اختر مكانها.') + '</p>' +
      '<div class="ma-chips">' + shuffle(st.items.map(function (x, i) { return i; }), st.items.length * 13).map(function (i) {
        var x = st.items[i]; return '<button class="ma-chip" data-i="' + i + '">' + (x.icon ? x.icon + ' ' : '') + esc(x.t) + '</button>';
      }).join('') + '</div><div class="ma-bins">' + st.bins.map(function (b, k) {
        return '<div class="ma-bin" data-b="' + k + '"><b>' + esc(b) + '</b><div class="ma-in"></div></div>';
      }).join('') + '</div><div class="ma-fb" aria-live="polite"></div>';
    var fb = box.querySelector('.ma-fb');
    box.querySelectorAll('.ma-chip').forEach(function (c) {
      c.onclick = function () { box.querySelectorAll('.ma-chip').forEach(function (x) { x.classList.remove('sel'); }); c.classList.add('sel'); sel = c; fb.textContent = 'الآن اختر المكان المناسب ⬇️'; };
    });
    box.querySelectorAll('.ma-bin').forEach(function (b) {
      b.onclick = function () {
        if (!sel) { fb.textContent = 'اختر بطاقة أولًا 👆'; return; }
        var i = +sel.dataset.i, x = st.items[i], k = +b.dataset.b;
        if (x.bin === k) {
          sel.classList.remove('sel'); sel.classList.add('ok'); sel.disabled = true; b.querySelector('.ma-in').appendChild(sel);
          fb.innerHTML = '✅ ' + esc(x.why || 'أحسنت!'); sel = null;
          if (--left === 0) ok();
        } else {
          tries[i] = (tries[i] || 0) + 1; sel.classList.add('no'); var s = sel; setTimeout(function () { s.classList.remove('no'); }, 500);
          fb.innerHTML = tries[i] > 1 ? '💡 ' + esc(x.why || 'فكّر مرة أخرى') : '🤔 فكّر مرة أخرى…';
        }
      };
    });
  };

  R.match = function (box, st, ok) {
    var left = st.pairs.length, sel = null;
    var rights = shuffle(st.pairs.map(function (p, i) { return i; }), st.pairs.length * 31 + 3);
    box.innerHTML = '<p class="ma-p">' + esc(st.prompt || 'اختر من العمود الأول، ثم ما يناسبه من الثاني.') + '</p><div class="ma-match"><div>' +
      st.pairs.map(function (p, i) { return '<button class="ma-chip l" data-i="' + i + '">' + esc(p[0]) + '</button>'; }).join('') + '</div><div>' +
      rights.map(function (i) { return '<button class="ma-chip r" data-i="' + i + '">' + esc(st.pairs[i][1]) + '</button>'; }).join('') +
      '</div></div><div class="ma-fb" aria-live="polite"></div>';
    var fb = box.querySelector('.ma-fb');
    box.querySelectorAll('.ma-chip.l').forEach(function (c) { c.onclick = function () { box.querySelectorAll('.ma-chip.l').forEach(function (x) { x.classList.remove('sel'); }); c.classList.add('sel'); sel = c; }; });
    box.querySelectorAll('.ma-chip.r').forEach(function (c) {
      c.onclick = function () {
        if (!sel) { fb.textContent = 'اختر من العمود الأول أولًا 👉'; return; }
        if (sel.dataset.i === c.dataset.i) {
          [sel, c].forEach(function (x) { x.classList.remove('sel'); x.classList.add('ok'); x.disabled = true; }); sel = null; fb.textContent = '✅ صحيح!';
          if (--left === 0) ok();
        } else { c.classList.add('no'); setTimeout(function () { c.classList.remove('no'); }, 500); fb.textContent = '🤔 ليس هذا… حاول مرة أخرى'; }
      };
    });
  };

  R.quiz = function (box, st, ok) {
    var k = 0;
    function draw() {
      var q = st.items[k];
      box.innerHTML = '<p class="ma-p"><b>' + ar(k + 1) + '/' + ar(st.items.length) + '</b> · ' + esc(q.q) + '</p><div class="ma-opts">' +
        q.o.map(function (o, i) { return '<button class="ma-opt" data-i="' + i + '">' + esc(o) + '</button>'; }).join('') + '</div><div class="ma-fb" aria-live="polite"></div>';
      var fb = box.querySelector('.ma-fb');
      box.querySelectorAll('.ma-opt').forEach(function (b) {
        b.onclick = function () {
          if (+b.dataset.i === q.a) {
            b.classList.add('ok'); box.querySelectorAll('.ma-opt').forEach(function (x) { x.disabled = true; });
            fb.innerHTML = '✅ ' + esc(q.why || 'أحسنت!') + (k < st.items.length - 1 ? ' <button class="ma-next">التالي ←</button>' : '');
            var nx = fb.querySelector('.ma-next'); if (nx) nx.onclick = function () { k++; draw(); }; else ok();
          } else { b.classList.add('no'); b.disabled = true; fb.textContent = '🤔 فكّر مرة أخرى…'; }
        };
      });
    }
    draw();
  };

  R.order = function (box, st, ok) {
    var cur = shuffle(st.items.map(function (x, i) { return i; }), st.items.length * 17 + 5);
    if (cur.every(function (v, i) { return v === i; })) cur.reverse();
    function draw(check) {
      box.innerHTML = '<p class="ma-p">' + esc(st.prompt || 'رتّب البطاقات بالترتيب الصحيح باستعمال الأسهم.') + '</p><ol class="ma-order">' +
        cur.map(function (i, p) {
          var cls = check ? (i === p ? 'ok' : 'no') : '';
          return '<li class="' + cls + '"><span>' + esc(st.items[i]) + '</span><span class="ma-arrows"><button data-p="' + p + '" data-d="-1" aria-label="أعلى">▲</button><button data-p="' + p + '" data-d="1" aria-label="أسفل">▼</button></span></li>';
        }).join('') + '</ol><button class="ma-btn" id="maChk">تحقّق ✔</button><div class="ma-fb" aria-live="polite"></div>';
      box.querySelectorAll('.ma-arrows button').forEach(function (b) {
        b.onclick = function () { var p = +b.dataset.p, q = p + +b.dataset.d; if (q < 0 || q >= cur.length) return; var t = cur[p]; cur[p] = cur[q]; cur[q] = t; draw(); };
      });
      box.querySelector('#maChk').onclick = function () {
        var right = cur.filter(function (v, i) { return v === i; }).length;
        draw(true);
        var fb = box.querySelector('.ma-fb');
        if (right === cur.length) { fb.innerHTML = '✅ ' + esc(st.why || 'ترتيب صحيح!'); box.querySelector('#maChk').disabled = true; ok(); }
        else fb.textContent = '🟢 ' + ar(right) + ' في مكانها الصحيح. حرّك الباقي وحاول مرة أخرى.';
      };
    }
    draw();
  };

  R.decision = function (box, st, ok) {
    box.innerHTML = '<div class="ma-scn">🕵️ ' + esc(st.scenario) + '</div><div class="ma-opts">' +
      st.options.map(function (o, i) { return '<button class="ma-opt" data-i="' + i + '"><b>' + 'أبجد'[i] + ')</b> ' + esc(o.t) + '</button>'; }).join('') +
      '</div><div class="ma-fb" aria-live="polite"></div>';
    var fb = box.querySelector('.ma-fb'), seen = false;
    box.querySelectorAll('.ma-opt').forEach(function (b) {
      b.onclick = function () {
        var o = st.options[+b.dataset.i];
        box.querySelectorAll('.ma-opt').forEach(function (x) { x.classList.remove('pick'); }); b.classList.add('pick', o.best ? 'ok' : 'meh');
        fb.innerHTML = (o.best ? '🌟 ' : '🔎 ') + '<b>النتيجة:</b> ' + esc(o.result) + (o.best ? '' : '<br><small>جرّب قرارًا آخر لترى نتيجته.</small>');
        if (o.best && !seen) { seen = true; ok(); }
      };
    });
  };

  R.budget = function (box, st, ok) {
    var v = st.cats.map(function () { return 0; }), stp = st.step || 1;
    function sum() { return v.reduce(function (a, b) { return a + b; }, 0); }
    function draw(msg) {
      box.innerHTML = '<p class="ma-p">' + esc(st.prompt || '') + '</p><div class="ma-total">المبلغ: <b>' + ar(st.total) + '</b> ' + esc(st.unit || 'دينارًا') +
        ' · المتبقّي: <b>' + ar(st.total - sum()) + '</b></div><div class="ma-cats">' + st.cats.map(function (c, i) {
          return '<div class="ma-cat"><span>' + (c.icon || '🫙') + ' ' + esc(c.t) + '</span><span class="ma-ctl"><button data-i="' + i + '" data-d="-1">−</button><b>' + ar(v[i]) + '</b><button data-i="' + i + '" data-d="1">+</button></span></div>';
        }).join('') + '</div><button class="ma-btn" id="maChk">تحقّق ✔</button><div class="ma-fb" aria-live="polite">' + (msg || '') + '</div>';
      box.querySelectorAll('.ma-ctl button').forEach(function (b) {
        b.onclick = function () { var i = +b.dataset.i, d = +b.dataset.d * stp; if (v[i] + d < 0 || sum() + d > st.total) return; v[i] += d; draw(); };
      });
      box.querySelector('#maChk').onclick = function () {
        if (sum() !== st.total) { draw('🤔 وزّع المبلغ كله أولًا (المتبقّي ' + ar(st.total - sum()) + ').'); return; }
        var bad = st.cats.filter(function (c, i) { return (c.min != null && v[i] < c.min) || (c.max != null && v[i] > c.max); });
        if (!bad.length) { draw('✅ ' + esc(st.why || 'تقسيم حكيم!')); box.querySelector('#maChk').disabled = true; ok(); }
        else draw(bad.map(function (c) { return '💡 ' + esc(c.why || ('راجع: ' + c.t)); }).join('<br>'));
      };
    }
    draw();
  };

  R.calc = function (box, st, ok) {
    var k = 0;
    function draw() {
      var q = st.items[k];
      box.innerHTML = '<p class="ma-p"><b>' + ar(k + 1) + '/' + ar(st.items.length) + '</b> · ' + esc(q.q) + '</p><div class="ma-calc"><input inputmode="decimal" aria-label="الإجابة"> <span>' +
        esc(q.unit || '') + '</span> <button class="ma-btn">تحقّق ✔</button></div><div class="ma-fb" aria-live="polite"></div>';
      var inp = box.querySelector('input'), fb = box.querySelector('.ma-fb'), tries = 0;
      function check() {
        var x = parseFloat(en(inp.value));
        if (isNaN(x)) { fb.textContent = 'اكتب رقمًا ✍️'; return; }
        if (Math.abs(x - q.answer) < 0.011) {
          fb.innerHTML = '✅ ' + esc(q.why || 'إجابة صحيحة!') + (k < st.items.length - 1 ? ' <button class="ma-next">التالي ←</button>' : '');
          inp.disabled = true; var nx = fb.querySelector('.ma-next'); if (nx) nx.onclick = function () { k++; draw(); }; else ok();
        } else { tries++; fb.innerHTML = tries > 1 && q.hint ? '💡 ' + esc(q.hint) : '🤔 راجع الحساب مرة أخرى.'; }
      }
      box.querySelector('.ma-btn').onclick = check;
      inp.onkeydown = function (e) { if (e.key === 'Enter') check(); };
    }
    draw();
  };

  function mount(el, ep) {
    var on = ep.online, i = 0;
    function step() {
      var st = on.steps[i];
      el.innerHTML = '<div class="ma"><div class="ma-hd"><span>🎮 ' + esc(on.title) + '</span><span class="ma-prog">' +
        on.steps.map(function (_, k) { return '<i class="' + (k < i ? 'd' : k === i ? 'c' : '') + '"></i>'; }).join('') + '</span></div>' +
        '<h5>' + esc(st.title || '') + '</h5><div class="ma-box"></div><div class="ma-nav"></div></div>';
      var box = el.querySelector('.ma-box'), nav = el.querySelector('.ma-nav');
      (R[st.type] || R.quiz)(box, st, function () {
        if (i < on.steps.length - 1) {
          nav.innerHTML = '<button class="ma-btn go">الخطوة التالية ←</button>';
          nav.querySelector('button').onclick = function () { i++; step(); };
        } else {
          done('ep' + ep.n);
          nav.innerHTML = '<div class="ma-win">🏅 أحسنت ' + (window.MA_HERO || 'يا بطل') + '! أنهيت نشاط الحلقة ' + ar(ep.n) + '.<br><button class="ma-btn ghost">العب مرة أخرى ↺</button></div>';
          nav.querySelector('button').onclick = function () { i = 0; step(); };
        }
      });
    }
    if (on && on.steps && on.steps.length) step(); else el.innerHTML = '';
  }

  window.MoneyAct = { mount: mount, types: Object.keys(R) };
})();
