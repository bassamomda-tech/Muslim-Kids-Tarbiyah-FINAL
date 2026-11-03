/* ════════════════════════════════════════════════════════════════
   skill-page.js — «صانع المهارات»: turns one skill data file
   (data/<id>.js → window.SKILLS[<id>]) into a calm journey page on the
   shared card/story engine (../treasures/tr.js), plus a 🎧 podcast tab.

   Each station = a story read page by page → key idea → Islamic link →
   a real mission at home → one question → ⭐ «تعلّمتُها». Stars are saved
   in tr:skill-<id> (per child, cloud-backed) and count as journey
   stations in the bag (mk-journeys.js).

   Podcast: every station has a short two-voice episode (host + child).
   Lines play one after another with the site's cloud voice (male/female)
   or the browser voices; the script can also be printed.

   Page usage:
     <script>window.SKILL_ID='merchant';</script>
     <script src="data/merchant.js"></script>
     <script src="skill-page.js"></script>
     <script src="../treasures/tr.js"></script>
   ════════════════════════════════════════════════════════════════ */
(function () {
  var S = (window.SKILLS || {})[window.SKILL_ID];
  if (!S) { document.body.insertAdjacentHTML('afterbegin', '<p style="padding:2rem">Skill not found</p>'); return; }
  function B(a, e) { return { ar: a, en: e }; }
  function P(x) { return x ? B(x[0], x[1]) : null; }          // ['ar','en'] → {ar,en}
  var CAST = S.cast || { h: { icon: '🎙️', name: ['المُضيف', 'Host'], g: 'male' }, k: { icon: '🧒', name: ['الضيف الصغير', 'Young guest'], g: 'female' } };

  /* ── stations → engine items ── */
  var items = S.stations.map(function (st, i) {
    var secs = [];
    if (st.learn) secs.push({ icon: '💡', h: B('الفكرة المهمّة', 'The big idea'), html: P(st.learn) });
    if (st.islam) secs.push({ icon: '🌙', h: B('في ديننا', 'In our deen'), html: st.src ? B(st.islam[0] + '<div class="tr-src">📚 ' + st.src[0] + '</div>', st.islam[1] + '<div class="tr-src">📚 ' + st.src[1] + '</div>') : P(st.islam) });
    if (st.mission) secs.push({ icon: '🎯', h: B('مهمّتك الحقيقية', 'Your real mission'), html: P(st.mission) });
    if (st.podcast) secs.push({ icon: '🎧', h: B('حلقة البودكاست', 'Podcast episode'), html: B(
      '<button class="sk-pod-open tr-btn ghost" data-ep="' + i + '">▶ ' + st.podcast.title[0] + '</button>',
      '<button class="sk-pod-open tr-btn ghost" data-ep="' + i + '">▶ ' + st.podcast.title[1] + '</button>') });
    var q = st.q ? { q: P(st.q), opts: (st.o || []).map(function (o) { return { t: B(o[0], o[1]), ok: !!o[2] }; }), fb: P(st.fb) } : null;
    return {
      id: st.id, icon: st.icon, tag: st.tag || 'all',
      title: P(st.t), sub: P(st.sub),
      pages: (st.pg || []).map(function (p) { return { scene: p[0], text: B(p[1], p[2]) }; }),
      sections: secs, quiz: q
    };
  });

  /* ── 🎧 podcast player (two voices, line by line) ── */
  var pod = { ep: -1, line: 0, playing: false, token: 0 };
  function lineText(l, ar) { return String(ar ? l[1] : l[2]).replace(/<[^>]+>/g, ''); }
  function stopPod() {
    pod.playing = false; pod.token++;
    try { if (window.MKTTS) MKTTS.stop(); } catch (e) {}
    try { window.speechSynthesis && speechSynthesis.cancel(); } catch (e) {}
  }
  function sayLine(l, ar, done) {
    var who = CAST[l[0]] || CAST.h, txt = lineText(l, ar), tok = pod.token, lang = ar ? 'ar' : 'en';
    function next() { if (tok === pod.token) done(); }
    var prevG = window.MK_NARRATOR_GENDER; window.MK_NARRATOR_GENDER = who.g || 'female';
    function browser() {
      if (!window.speechSynthesis) { setTimeout(next, Math.max(1500, txt.length * 60)); return; }
      var u = new SpeechSynthesisUtterance(window.MKVoice && MKVoice.fixText ? MKVoice.fixText(txt) : txt);
      u.lang = ar ? 'ar-SA' : 'en-US'; u.rate = 0.95;
      try {
        if (window.MKVoice && MKVoice.bestVoice) {
          var v = MKVoice.bestVoice(lang, who.g); if (v) { u.voice = v; u.lang = v.lang; }
          if (v && MKVoice.genderOf && MKVoice.genderOf(v) !== who.g) u.pitch = who.g === 'male' ? 0.75 : 1.2;
        } else u.pitch = who.g === 'male' ? 0.8 : 1.15;
      } catch (e) {}
      u.onend = u.onerror = next;
      try { speechSynthesis.cancel(); } catch (e) {}
      speechSynthesis.speak(u);
    }
    /* natural cloud voice first; if it fails or hangs, switch to the device voices for the rest of the visit */
    if (window.MKTTS && MKTTS.enabled && !pod.cloudBad) {
      var settled = false, guard = setTimeout(function () {
        if (settled) return; settled = true; pod.cloudBad = true;
        try { MKTTS.stop(); } catch (e) {}
        if (tok === pod.token) browser();
      }, 6000 + txt.length * 110);
      MKTTS.speak(txt, lang).then(function () { if (settled) return; settled = true; clearTimeout(guard); next(); },
        function () { if (settled) return; settled = true; clearTimeout(guard); pod.cloudBad = true; if (tok === pod.token) browser(); });
    } else browser();
    window.MK_NARRATOR_GENDER = prevG;
  }
  function playFrom(TR) {
    var ep = S.stations[pod.ep].podcast; if (!ep) return;
    if (pod.line >= ep.lines.length) { pod.playing = false; drawPod(TR); return; }
    pod.playing = true; drawPod(TR);
    sayLine(ep.lines[pod.line], TR.ar(), function () { pod.line++; playFrom(TR); });
  }
  function drawPod(TR) {
    var box = document.getElementById('skPod'); if (!box) return;
    var ar = TR.ar();
    if (pod.ep < 0) { box.innerHTML = ''; return; }
    var st = S.stations[pod.ep], ep = st.podcast;
    box.innerHTML = '<div class="sk-player">' +
      '<div class="sk-pl-hd"><span class="sk-pl-ic">' + st.icon + '</span><div><b>' + TR.esc(ar ? ep.title[0] : ep.title[1]) + '</b><small>' +
        TR.tx('الحلقة', 'Episode') + ' ' + (pod.ep + 1) + ' · ' + CAST.h.icon + ' ' + TR.esc(ar ? CAST.h.name[0] : CAST.h.name[1]) + ' · ' + CAST.k.icon + ' ' + TR.esc(ar ? CAST.k.name[0] : CAST.k.name[1]) + '</small></div></div>' +
      '<div class="sk-pl-ctl">' +
        '<button class="tr-btn" id="skPlay">' + (pod.playing ? '⏸ ' + TR.tx('إيقاف', 'Pause') : '▶ ' + TR.tx(pod.line ? 'تابِع' : 'استمِع للحلقة', pod.line ? 'Resume' : 'Play episode')) + '</button>' +
        '<button class="tr-btn ghost" id="skRestart">↺ ' + TR.tx('من البداية', 'From the start') + '</button>' +
        '<button class="tr-btn ghost" id="skPrint">🖨️ ' + TR.tx('اطبع النصّ', 'Print script') + '</button>' +
      '</div>' +
      '<ol class="sk-lines">' + ep.lines.map(function (l, k) {
        var who = CAST[l[0]] || CAST.h;
        return '<li class="sk-line ' + l[0] + (k === pod.line && pod.playing ? ' now' : '') + (k < pod.line ? ' done' : '') + '" data-k="' + k + '"><span class="who">' + who.icon + ' ' + TR.esc(ar ? who.name[0] : who.name[1]) + '</span><span class="tx">' + (ar ? l[1] : l[2]) + '</span></li>';
      }).join('') + '</ol></div>';
    document.getElementById('skPlay').onclick = function () { if (pod.playing) { stopPod(); drawPod(TR); } else playFrom(TR); };
    document.getElementById('skRestart').onclick = function () { stopPod(); pod.line = 0; playFrom(TR); };
    document.getElementById('skPrint').onclick = function () { printScript(TR, st); };
    box.querySelectorAll('.sk-line').forEach(function (li) { li.onclick = function () { stopPod(); pod.line = +li.dataset.k; playFrom(TR); }; });
    var now = box.querySelector('.sk-line.now'); if (now && now.scrollIntoView) try { now.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) {}
  }
  function printScript(TR, st) {
    var ar = TR.ar(), ep = st.podcast, w = window.open('', '_blank'); if (!w) return;
    w.document.write('<!doctype html><html dir="' + (ar ? 'rtl' : 'ltr') + '"><meta charset="utf-8"><title>' + (ar ? ep.title[0] : ep.title[1]) + '</title><style>body{font-family:Tajawal,Tahoma,Arial,sans-serif;max-width:720px;margin:2rem auto;line-height:1.9;padding:0 1rem}b{color:#7A3FB0}li{margin:.5rem 0}</style>' +
      '<h2>🎧 ' + (ar ? ep.title[0] : ep.title[1]) + '</h2><p>' + (ar ? S.title[0] : S.title[1]) + ' — ' + (ar ? st.t[0] : st.t[1]) + '</p><ol>' +
      ep.lines.map(function (l) { var who = CAST[l[0]] || CAST.h; return '<li><b>' + (ar ? who.name[0] : who.name[1]) + ':</b> ' + (ar ? l[1] : l[2]) + '</li>'; }).join('') + '</ol><script>print()<\/script>');
    w.document.close();
  }
  function openEpisode(TR, i) {
    stopPod(); pod.ep = i; pod.line = 0;
    if (TR.closeView) TR.closeView();
    var tab = document.querySelector('.tr-tab[data-tab="podcast"]'); if (tab) tab.click();
    drawPod(TR);
    var box = document.getElementById('skPod'); if (box && box.scrollIntoView) box.scrollIntoView({ block: 'start' });
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.sk-pod-open'); if (!b || !window.TR) return;
    e.preventDefault(); openEpisode(window.TR, +b.dataset.ep);
  });
  window.addEventListener('pagehide', stopPod);

  /* ── the page ── */
  var goalsHtml = function (ar) {
    var g = S.goals ? (ar ? S.goals[0] : S.goals[1]) : [];
    return g.length ? '<h3>' + (ar ? '🎯 أهداف الرحلة' : '🎯 Journey goals') + '</h3><ol class="sk-goals">' + g.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ol>' : '';
  };
  window.TR_PAGE = {
    id: 'skill-' + S.id, icon: S.icon, color: S.color, kind: 'stories',
    back: { href: 'index.html', label: B('صانع المهارات', 'Skills Maker') },
    title: P(S.title), intro: P(S.intro),
    guide: S.mentor ? { icon: S.mentor.icon, name: P(S.mentor.name), say: P(S.mentor.say) } : null,
    filters: S.filters ? S.filters.map(function (f) { return { id: f[0], label: B(f[1], f[2]) }; }) : null,
    items: items,
    next: S.next ? { href: S.next[0], icon: S.next[1], title: B(S.next[2], S.next[3]), why: B(S.next[4], S.next[5]) } : null,
    parents: { ar: goalsHtml(true) + (S.parents ? S.parents[0] : ''), en: goalsHtml(false) + (S.parents ? S.parents[1] : '') },
    worksheet: S.worksheet ? P(S.worksheet) : null,
    panels: [{ id: 'podcast', icon: '🎧', label: B('البودكاست', 'Podcast'), render: function (el, TR) {
      var ar = TR.ar();
      el.innerHTML = '<p class="sk-pod-intro">' + TR.tx('حلقاتٌ قصيرة نسمعها معًا — حلقة لكلّ محطّة. اختر حلقة، واضغط ▶ ، وتابِع الكلام على الشاشة.', 'Short episodes to listen to together — one per station. Pick one, press ▶ and follow along on screen.') + '</p>' +
        '<div class="sk-eps">' + S.stations.map(function (st, i) {
          if (!st.podcast) return '';
          return '<button class="sk-ep" data-ep="' + i + '"><span class="n">' + (i + 1) + '</span><span class="ic">' + st.icon + '</span><span class="t"><b>' + TR.esc(ar ? st.podcast.title[0] : st.podcast.title[1]) + '</b><small>' + TR.esc(ar ? st.t[0] : st.t[1]) + ' · ' + (st.podcast.lines.length) + ' ' + TR.tx('مقطعًا', 'lines') + '</small></span><span class="go">🎧</span></button>';
        }).join('') + '</div><div id="skPod"></div>';
      el.querySelectorAll('.sk-ep').forEach(function (b) { b.onclick = function () { openEpisode(TR, +b.dataset.ep); }; });
      drawPod(TR);
    } }],
    onTab: function (id) { if (id !== 'podcast') stopPod(); }
  };

  var css = document.createElement('style');
  css.textContent =
    '.sk-pod-intro{color:var(--muted);text-align:center;max-width:640px;margin:0 auto 1rem}' +
    '.sk-eps{display:grid;gap:.6rem;max-width:720px;margin:0 auto}' +
    '.sk-ep{display:flex;align-items:center;gap:.7rem;background:#fff;border:2px solid var(--line);border-radius:16px;padding:.7rem .9rem;text-align:start;font:inherit;color:var(--ink);cursor:pointer}' +
    '.sk-ep:hover,.sk-ep:focus-visible{border-color:var(--acc);outline:none}' +
    '.sk-ep .n{flex:0 0 28px;height:28px;border-radius:50%;display:grid;place-items:center;background:var(--acc);color:#fff;font-weight:900;font-size:.85rem}' +
    '.sk-ep .ic{font-size:1.5rem}.sk-ep .t{flex:1;display:flex;flex-direction:column;line-height:1.4}.sk-ep small{color:var(--muted)}.sk-ep .go{font-size:1.3rem}' +
    '.sk-player{max-width:720px;margin:1.2rem auto 0;background:#fff;border:2px solid var(--acc);border-radius:20px;padding:1rem;box-shadow:var(--shadow)}' +
    '.sk-pl-hd{display:flex;align-items:center;gap:.7rem}.sk-pl-ic{font-size:2rem}.sk-pl-hd b{display:block;font-size:1.08rem}.sk-pl-hd small{color:var(--muted)}' +
    '.sk-pl-ctl{display:flex;flex-wrap:wrap;gap:.5rem;margin:.8rem 0}' +
    '.sk-lines{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:.45rem;max-height:420px;overflow:auto}' +
    '.sk-line{display:flex;flex-direction:column;gap:.1rem;padding:.55rem .75rem;border-radius:14px;background:var(--paper2,#f5efe3);cursor:pointer;line-height:1.7}' +
    '.sk-line.k{background:color-mix(in srgb,var(--acc) 10%,#fff)}' +
    '.sk-line .who{font-size:.78rem;font-weight:800;color:var(--acc)}' +
    '.sk-line.now{outline:2.5px solid var(--acc)}.sk-line.done{opacity:.6}' +
    '.sk-goals{columns:2;column-gap:2rem}@media(max-width:560px){.sk-goals{columns:1}}';
  document.head.appendChild(css);
})();
