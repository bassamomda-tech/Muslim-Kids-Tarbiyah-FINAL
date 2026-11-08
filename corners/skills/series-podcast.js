/* series-podcast.js — مشغّل بودكاست السلاسل داخل نافذة الحلقة، بلا ملفات صوت مسبقة.
   كل سطر يُقرأ عند الضغط بصوت Gemini السحابي عبر MKTTS (يُحفظ المقطع على الخادم بعد أوّل توليد،
   فالتكلفة بحسب الاستعمال فقط)، والآيات بتلاوة الحصري الحقيقية (MKTTS يشغّلها حين يرى ﴿…﴾)،
   ووقفات الأنشطة توقف التشغيل حتى يضغط الطفل «تابِع». وإن تعذّر الصوت السحابي يُستعمل صوت الجهاز.
   الاستعمال: SeriesPodcast.mount(el, episode, hosts) — hosts: {id: {name, g: 'male'|'female', icon}} */
(function () {
  'use strict';
  var AR = '٠١٢٣٤٥٦٧٨٩';
  function ar(n) { return String(n).replace(/\d/g, function (d) { return AR[d]; }); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var cur = null;   // المشغّل النشط الوحيد

  function speakText(txt, g, onEnd) {
    var tok = cur && cur.token;
    function done() { if (cur && cur.token === tok) onEnd(); }
    function browser() {
      if (!window.speechSynthesis) { setTimeout(done, Math.max(1500, txt.length * 60)); return; }
      var u = new SpeechSynthesisUtterance(txt.replace(/[﴿﴾]/g, ''));
      u.lang = 'ar-SA'; u.rate = 0.95; u.pitch = g === 'male' ? 0.85 : 1.15;
      try { if (window.MKVoice && MKVoice.bestVoice) { var v = MKVoice.bestVoice('ar', g); if (v) { u.voice = v; u.lang = v.lang; } } } catch (e) {}
      u.onend = u.onerror = done;
      try { speechSynthesis.cancel(); } catch (e) {}
      speechSynthesis.speak(u);
    }
    if (window.MKTTS && MKTTS.enabled && (cur.fails || 0) < 3) {
      var settled = false, guard = setTimeout(fail, 20000 + txt.length * 90);
      function fail() {
        if (settled) return; settled = true; clearTimeout(guard);
        try { MKTTS.stop(); } catch (e) {}
        if (!cur || cur.token !== tok) return;
        cur.fails = (cur.fails || 0) + 1; browser();
      }
      var prev = window.MK_NARRATOR_GENDER; window.MK_NARRATOR_GENDER = g;
      MKTTS.speak(txt, 'ar', { style: 'podcast', gender: g }).then(function () {
        if (settled) return; settled = true; clearTimeout(guard); cur.fails = 0; done();
      }, fail);
      window.MK_NARRATOR_GENDER = prev;
    } else browser();
  }

  function lineText(l) {
    if (l.s === 'quran') return '﴿' + (l.t || '') + '﴾';
    if (l.s === 'sing') return (l.verses || []).join('، ');
    return l.t || '';
  }

  function mount(el, ep, hosts) {
    var lines = (ep.podcast && ep.podcast.lines) || [];
    if (!lines.length) { el.innerHTML = ''; return; }
    var st = { i: 0, playing: false, token: 0, fails: 0, el: el, waiting: false };
    function stop() {
      st.playing = false; st.token++;
      try { if (window.MKTTS) MKTTS.stop(); } catch (e) {}
      try { window.speechSynthesis && speechSynthesis.cancel(); } catch (e) {}
    }
    function who(l) {
      if (l.s === 'quran') return { name: 'تلاوة الشيخ الحصري', icon: '📖', g: 'male' };
      if (l.s === 'sing') return { name: 'إنشاد', icon: '🎵', g: (hosts[ep.singer] || {}).g || 'male' };
      if (l.s === 'pause') return { name: 'وقت النشاط', icon: '⏸', g: 'female' };
      return hosts[l.s] || { name: '', icon: '🎙️', g: 'female' };
    }
    function play() {
      if (st.i >= lines.length) { st.playing = false; st.i = 0; draw(); return; }
      var l = lines[st.i];
      if (l.s === 'pause') { st.playing = false; st.waiting = true; draw(); return; }
      st.playing = true; st.waiting = false; draw();
      var w = who(l);
      speakText(lineText(l), w.g, function () { st.i++; play(); });
    }
    function draw() {
      var total = lines.length;
      el.innerHTML = '<div class="sp"><div class="sp-ctl">' +
        '<button class="ma-btn" data-a="play">' + (st.playing ? '⏸ إيقاف' : (st.waiting ? '▶ تابِع بعد النشاط' : (st.i ? '▶ تابِع' : '▶ استمع إلى الحلقة'))) + '</button>' +
        '<button class="ma-btn ghost" data-a="restart">↺ من البداية</button>' +
        '<span class="sp-prog">' + ar(Math.min(st.i + 1, total)) + ' / ' + ar(total) + '</span></div>' +
        (st.waiting ? '<div class="sp-pause">⏸ ' + esc(lines[st.i].label || 'وقت النشاط') + '<br><small>أوقفنا الحلقة لتجرّبوا النشاط مع المعلّم أو الأهل، ثم اضغطوا «تابِع».</small></div>' : '') +
        '<ol class="sp-lines">' + lines.map(function (l, k) {
          var w = who(l);
          var tx = l.s === 'pause' ? esc(l.label || '') : esc(lineText(l));
          return '<li class="' + (k === st.i && (st.playing || st.waiting) ? 'now' : '') + (k < st.i ? ' done' : '') + (l.s === 'quran' ? ' q' : '') + '" data-k="' + k + '"><b>' + w.icon + ' ' + esc(w.name) + '</b> ' + tx + '</li>';
        }).join('') + '</ol></div>';
      el.querySelector('[data-a="play"]').onclick = function () {
        if (cur && cur !== st) { try { cur.stop(); } catch (e) {} }
        cur = st; st.stop = stop;
        if (st.playing) { stop(); draw(); }
        else { if (st.waiting) st.i++; st.waiting = false; play(); }
      };
      el.querySelector('[data-a="restart"]').onclick = function () { stop(); cur = st; st.stop = stop; st.i = 0; st.waiting = false; play(); };
      el.querySelectorAll('.sp-lines li').forEach(function (li) {
        li.onclick = function () { stop(); cur = st; st.stop = stop; st.i = +li.dataset.k; st.waiting = false; play(); };
      });
      var now = el.querySelector('.sp-lines li.now');
      if (now && now.scrollIntoView) try { now.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) {}
    }
    draw();
  }

  /* أوقف التشغيل إذا أُغلقت النافذة */
  document.addEventListener('click', function (e) {
    if (cur && e.target && e.target.closest && e.target.closest('#trClose,#trPrev,#trNext')) {
      cur.token++; try { if (window.MKTTS) MKTTS.stop(); } catch (x) {} try { speechSynthesis.cancel(); } catch (x) {}
      cur.playing = false;
    }
  }, true);

  function stopAll() {
    if (!cur) return;
    cur.token++; cur.playing = false;
    try { if (window.MKTTS) MKTTS.stop(); } catch (x) {} try { speechSynthesis.cancel(); } catch (x) {}
  }

  /* تبويب 🎧 البودكاست: قائمة الحلقات كلّها، وتُشغَّل الحلقة المختارة في المكان نفسه (مثل بودكاست صانع المهارات) */
  function panel(S) {
    var hosts = S.podcast_hosts || {};
    return { id: 'podcast', icon: '🎧', label: { ar: 'البودكاست', en: 'Podcast' }, render: function (el, TR) {
      var eps = (S.episodes || []).filter(function (e) { return e.podcast && e.podcast.lines && e.podcast.lines.length; });
      el.innerHTML = '<p class="sp-intro">حلقات البودكاست كلّها في مكان واحد: اختر حلقة واضغط ▶، وتابِع الكلام على الشاشة. وتتوقّف الحلقة عند وقت النشاط حتى تضغط «تابِع».</p><div class="sp-one"></div>' +
        '<div class="sp-eps">' + eps.map(function (e) {
          var who = []; e.podcast.lines.forEach(function (l) { var h = hosts[l.s]; if (h && who.indexOf(h.icon + ' ' + h.name) < 0) who.push(h.icon + ' ' + h.name); });
          return '<button class="sp-ep" data-ep="' + e.n + '"><span class="n">' + ar(e.n) + '</span><span class="t"><b>' + esc(e.title) + '</b><small>' +
            esc(who.join(' · ')) + ' · ' + ar(e.podcast.lines.length) + ' مقطعًا</small></span><span class="go">🎧</span></button>';
        }).join('') + '</div>';
      var box = el.querySelector('.sp-one');
      el.querySelectorAll('.sp-ep').forEach(function (b) {
        b.onclick = function () {
          stopAll();
          el.querySelectorAll('.sp-ep').forEach(function (x) { x.classList.toggle('on', x === b); });
          var e = eps.filter(function (x) { return String(x.n) === b.dataset.ep; })[0];
          box.innerHTML = '<h3 class="sp-h">🎧 الحلقة ' + ar(e.n) + ': ' + esc(e.title) + '</h3><div></div>';
          mount(box.lastChild, e, hosts);
          try { box.scrollIntoView({ block: 'start', behavior: 'smooth' }); } catch (x) {}
          var p = box.querySelector('[data-a="play"]'); if (p) p.click();
        };
      });
    } };
  }

  var css = document.createElement('style');
  css.textContent =
    '.sp-intro{color:var(--muted);text-align:center;max-width:640px;margin:0 auto 1rem}' +
    '.sp-eps{display:grid;gap:.55rem;max-width:720px;margin:0 auto}' +
    '.sp-ep{display:flex;align-items:center;gap:.7rem;background:#fff;border:2px solid var(--line);border-radius:16px;padding:.65rem .9rem;text-align:start;font:inherit;color:var(--ink);cursor:pointer}' +
    '.sp-ep:hover,.sp-ep:focus-visible,.sp-ep.on{border-color:var(--acc);outline:none}' +
    '.sp-ep .n{flex:0 0 30px;height:30px;border-radius:50%;display:grid;place-items:center;background:var(--acc);color:#fff;font-weight:900;font-size:.85rem}' +
    '.sp-ep .t{flex:1;display:flex;flex-direction:column;line-height:1.45}.sp-ep small{color:var(--muted)}.sp-ep .go{font-size:1.3rem}' +
    '.sp-one{max-width:720px;margin:0 auto 1rem;scroll-margin-top:70px}.sp-one:empty{display:none}.sp-h{font-size:1.05rem;margin:0 0 .5rem}';
  document.head.appendChild(css);

  window.SeriesPodcast = { mount: mount, panel: panel, stop: stopAll };
})();
