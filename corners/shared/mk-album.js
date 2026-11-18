/* ════════════════════════════════════════════════════════════════
   mk-album.js — «أوسمتي وملصقاتي» : the child's whole collection in the bag.
   Gathers EVERY medal and sticker the active child earned across the site:
     • حصن الأبطال  — station medals (hisn-save) + each station's stickers
     • the journeys (Faith Minaret, Worship Oasis, Sports, Quds, Fortress halls…)
       — snapshots the journey pages save as bag:album:<id>
     • بيوت الحيّ / السور / قصص القرآن / الأربعون — <prefix>stickers:<slug>
     • أوسمة الحفظ (qg_badges) and Anos section medals (anos_medals)
   Reads only — it never changes the child's progress.
   Usage: MKAlbum.render(hostElement, lang)  → Promise
   ════════════════════════════════════════════════════════════════ */
(function () {
  var LS = window.localStorage;
  function jget(k, d) { try { var v = JSON.parse(LS.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function tx(o, lang) { if (o == null) return ''; if (typeof o === 'string') return o; return o[lang] || o.ar || o.en || ''; }
  /* corners/<path> → a link relative to corners/shared/ */
  function href(p) { return p ? '../' + String(p).replace(/^\/?(corners\/)?/, '') : ''; }

  var loaded = {};
  function load(src) {
    if (loaded[src]) return loaded[src];
    loaded[src] = new Promise(function (res) {
      var s = document.createElement('script'); s.src = src; s.async = true;
      s.onload = function () { res(true); }; s.onerror = function () { res(false); };
      document.head.appendChild(s);
    });
    return loaded[src];
  }
  function keysWith(prefix) {
    var out = [];
    for (var i = 0; i < LS.length; i++) { var k = LS.key(i); if (k && k.indexOf(prefix) === 0) out.push(k); }
    return out;
  }
  function earnedIdx(key) { return (LS.getItem(key) || '').split(',').filter(Boolean); }

  /* ───────── sources ───────── */
  // 1) Heroes Fortress medals (+ their stickers from the station file)
  function fortress() {
    var save = jget('hisn-save', {}) || {}, medals = save.medals || [];
    if (!medals.length) return Promise.resolve([]);
    window.HISN = window.HISN || {}; HISN.chapters = HISN.chapters || {};
    var base = '../heroes-fortress/';
    return load(base + 'engine/icons.js').then(function () {
      return Promise.all(medals.map(function (m) {
        var id = m.id || '';
        var p = id ? load(base + 'data/chapters/' + id + '.js') : Promise.resolve(false);
        return p.then(function () {
          var C = (HISN.chapters || {})[id] || {};
          var st = (C.treasures && C.treasures.stickers) || [];
          var heart = m.era === 'heart';
          return {
            kind: 'medal', corner: heart ? { ar: 'القلب السليم', en: 'Pure Heart' } : { ar: 'حصن الأبطال', en: 'Heroes Fortress' },
            medal: { svg: (window.ICONS && ICONS[m.icon]) || '', title: m.title, color: C.accent || '#D4A017' },
            name: C.name || m.title, link: id ? base + 'chapter.html?id=' + encodeURIComponent(id) : '',
            items: st.map(function (s) { return { svg: (window.ICONS && ICONS[s.icon]) || '', t: s.title, c: s.color }; })
          };
        });
      }));
    });
  }

  // 2) journey snapshots saved by the journey pages
  function journeys() {
    var J = window.MK_JOURNEYS || [];
    var groups = keysWith('bag:album:').map(function (k) {
      var a = jget(k, null); if (!a || !a.items || !a.items.length) return null;
      var page = 'corners/' + (a.h || ''), j = J.filter(function (x) { return x.page === page || page.indexOf(x.page) === 0; })[0];
      return { kind: 'journey', icon: j ? j.icon : '🎖️', name: j ? j.name : a.n, link: href(a.h),
        items: a.items.map(function (s) { return { i: s.i, t: s.t, c: s.c }; }), _page: page };
    }).filter(Boolean);
    // journeys with finished stations but no snapshot yet (finished before the album existed)
    var have = groups.map(function (g) { return g._page; });
    J.forEach(function (j) {
      if (!j.doneKey || /^tr:/.test(j.doneKey) || j.flagPrefix || j.ldKey) return;
      if (have.some(function (p) { return p === 'corners/' + j.page.replace(/^corners\//, '') || p.indexOf(j.page) === 0; })) return;
      var n = 0; try { n = window.MK_J ? MK_J.completedOf(j) : 0; } catch (e) {}
      if (n > 0) groups.push({ kind: 'journey', icon: j.icon, name: j.name, link: href(j.page), pending: n, items: [] });
    });
    return Promise.resolve(groups);
  }

  // 3) per-page treasures (houses, surahs, Quran stories, the Forty)
  var TREASURE_SETS = [
    { pfx: 'ld:stickers:', idx: '../little-district/pages/data/_index.js', idxVar: 'HOUSE_INDEX', data: '../little-district/pages/data/', glob: 'HOUSES',
      page: '../little-district/pages/social.html', icon: '🏘️', label: { ar: 'بيت', en: 'House' } },
    { pfx: 'qg:stickers:', idx: '../little-district/pages/quran-data/index_data.js', idxVar: 'SURAH_INDEX', data: '../little-district/pages/quran-data/', glob: 'SURAHS',
      page: '../little-district/pages/quran-surahs.html', icon: '📜', label: { ar: 'سورة', en: 'Surah' } },
    { pfx: 'qs:stickers:', idx: '../little-district/pages/qstories-data/_index.js', idxVar: 'QS_INDEX', data: '../little-district/pages/qstories-data/', glob: 'QSTORIES',
      page: '../little-district/pages/quran-stories.html', icon: '🏛️', label: { ar: 'قصة', en: 'Story' } },
    { pfx: 'hd:stickers:', idx: '../little-district/pages/hadith-data/_index.js', idxVar: 'HADITH_INDEX', data: '../little-district/pages/hadith-data/', glob: 'HADITHS',
      page: '../little-district/pages/hadith.html', icon: '🕌', label: { ar: 'حديث', en: 'Hadith' } }
  ];
  function treasureSets() {
    return Promise.all(TREASURE_SETS.map(function (T) {
      var keys = keysWith(T.pfx).filter(function (k) { return earnedIdx(k).length; });
      if (!keys.length) return [];
      window[T.glob] = window[T.glob] || {};
      return load(T.idx).then(function () {
        var IDX = window[T.idxVar] || [];
        return Promise.all(keys.map(function (k) {
          var slug = k.slice(T.pfx.length), got = earnedIdx(k);
          return load(T.data + slug + '.js').then(function () {
            var D = window[T.glob][slug] || {}, tr = D.treasures || [];
            var row = IDX.filter(function (r) { return r.slug === slug; })[0] || {};
            var name = { ar: row.nameAr || row.titleAr || slug, en: row.nameEn || row.titleEn || slug };
            var items = tr.length
              ? tr.filter(function (t, i) { return got.indexOf(String(i)) >= 0; }).map(function (t) { return { i: t.icon, t: t.title, c: t.color || row.color }; })
              : got.map(function () { return { i: '🏷️', t: '', c: row.color }; });
            return { kind: 'set', icon: row.emoji || T.icon, name: name, sub: T.label, link: T.page, items: items };
          });
        }));
      });
    })).then(function (arr) { return [].concat.apply([], arr); });
  }

  // 4) Quran-Garden hifz badges + Anos section medals
  function extras() {
    var out = [];
    var qb = jget('qg_badges', []);
    if (Array.isArray(qb) && qb.length) out.push({ kind: 'journey', icon: '🌱', name: { ar: 'أوسمة حُفّاظ القرآن', en: 'Quran memorizer badges' }, link: '../quran-hifz/index.html',
      items: qb.map(function () { return { i: '🎖️', t: '', c: '#1A9B7B' }; }) });
    var am = jget('anos_medals', []);
    if (Array.isArray(am) && am.length) out.push({ kind: 'journey', icon: '🧩', name: { ar: 'أوسمة أقسام أنوس', en: "Anos' section medals" }, link: '../activities/dashboard.html',
      items: am.map(function (m) { return { i: '🏅', t: { ar: m.ar, en: m.en }, c: '#7A3FB0' }; }) });
    return Promise.resolve(out);
  }

  /* ───────── render ───────── */
  function chip(s, lang) {
    var face = s.svg ? '<span class="al-svg">' + s.svg + '</span>' : '<span class="al-em">' + esc(s.i || '🏷️') + '</span>';
    return '<div class="al-stk" style="--sc:' + esc(s.c || '#D4A017') + '">' + face + (s.t ? '<small>' + esc(tx(s.t, lang)) + '</small>' : '') + '</div>';
  }
  function group(g, lang) {
    var ar = lang === 'ar';
    var cnt = g.pending ? (ar ? (g.pending + ' وسام') : (g.pending + ' badges')) : (ar ? (g.items.length + ' ملصق') : (g.items.length + ' stickers'));
    var head = g.kind === 'medal'
      ? '<div class="al-medal" style="--mc:' + esc(g.medal.color) + '">' + (g.medal.svg || '🏅') + '</div><div class="al-hd"><b>🏅 ' + esc(tx(g.medal.title, lang)) + '</b><span>' + esc(tx(g.corner, lang)) + ' · ' + esc(tx(g.name, lang)) + ' · ' + cnt + '</span></div>'
      : '<div class="al-ic">' + esc(g.icon || '🎖️') + '</div><div class="al-hd"><b>' + esc(tx(g.name, lang)) + '</b><span>' + (g.sub ? esc(tx(g.sub, lang)) + ' · ' : '') + cnt + '</span></div>';
    var body = g.pending
      ? '<p class="al-pend">' + (ar ? '✨ افتح الرحلة مرّةً لتظهر صورُ أوسمتك هنا.' : '✨ Open the journey once and your badge pictures will appear here.') + '</p>'
      : '<div class="al-grid">' + g.items.map(function (s) { return chip(s, lang); }).join('') + '</div>';
    return '<div class="al-group">' + (g.link ? '<a class="al-top" href="' + esc(g.link) + '">' : '<div class="al-top">') + head + (g.link ? '<span class="al-go">›</span></a>' : '</div>') + body + '</div>';
  }
  var CSS = '.al-group{background:var(--card,#fff);border:1px solid var(--line,rgba(0,0,0,.08));border-radius:16px;padding:.7rem .75rem;margin:.6rem 0;box-shadow:0 2px 10px rgba(0,0,0,.05)}' +
    '.al-top{display:flex;align-items:center;gap:.6rem;text-decoration:none;color:inherit}' +
    '.al-ic{font-size:1.7rem;width:2.6rem;height:2.6rem;display:grid;place-items:center;border-radius:12px;background:rgba(212,160,23,.12);flex:none}' +
    '.al-medal{width:3.1rem;height:3.1rem;border-radius:50%;display:grid;place-items:center;flex:none;background:radial-gradient(circle at 35% 30%,#FFF3C8,#E2B04A 60%,#B07A12);border:3px solid var(--mc);box-shadow:0 3px 10px rgba(176,122,18,.35);color:#5A3A06;font-size:1.5rem}' +
    '.al-medal svg{width:1.9rem;height:1.9rem}' +
    '.al-hd{flex:1;min-width:0;display:flex;flex-direction:column;gap:.1rem}.al-hd b{font-size:.98rem;line-height:1.4}.al-hd span{font-size:.78rem;opacity:.75;line-height:1.5}' +
    '.al-go{font-size:1.4rem;opacity:.5;flex:none}' +
    '.al-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(84px,1fr));gap:.45rem;margin-top:.6rem}' +
    '.al-stk{border-radius:12px;padding:.5rem .3rem .45rem;text-align:center;background:color-mix(in srgb,var(--sc) 14%,#fff);border:2px solid color-mix(in srgb,var(--sc) 55%,#fff);color:#2a2a2a;display:flex;flex-direction:column;align-items:center;gap:.2rem;min-width:0}' +
    '.al-em{font-size:1.6rem;line-height:1.1}.al-svg svg{width:1.8rem;height:1.8rem;color:var(--sc)}' +
    '.al-stk small{font-size:.68rem;font-weight:800;line-height:1.35;overflow-wrap:anywhere}' +
    '.al-pend{margin:.5rem 0 0;font-size:.82rem;opacity:.8}' +
    '.al-sum{display:flex;flex-wrap:wrap;gap:.4rem;margin:.2rem 0 .4rem}.al-sum span{background:rgba(212,160,23,.14);border-radius:999px;padding:.25rem .7rem;font-weight:800;font-size:.82rem}';

  function render(host, lang) {
    if (!host) return Promise.resolve();
    if (!document.getElementById('mkAlbumCss')) { var st = document.createElement('style'); st.id = 'mkAlbumCss'; st.textContent = CSS; document.head.appendChild(st); }
    var ar = lang === 'ar';
    host.innerHTML = '<p class="al-pend">' + (ar ? '⏳ نجمع كنوزك…' : '⏳ Gathering your treasures…') + '</p>';
    return Promise.all([fortress(), journeys(), treasureSets(), extras()]).then(function (r) {
      var medals = r[0], all = r[0].concat(r[1], r[2], r[3]);
      var stickers = all.reduce(function (a, g) { return a + (g.kind === 'medal' ? g.items.length : (g.pending || g.items.length)); }, 0);
      if (!all.length) {
        host.innerHTML = '<div class="empty">' + (ar ? 'لا توجد أوسمة أو ملصقات بعد — أكمِل محطةً في أيّ ركن وستظهر هنا فورًا. ✨' : 'No medals or stickers yet — finish a station in any corner and they will appear here. ✨') + '</div>';
        return { medals: 0, stickers: 0 };
      }
      host.innerHTML = '<div class="al-sum"><span>🏅 ' + medals.length + (ar ? ' وسام' : ' medals') + '</span><span>🏷️ ' + stickers + (ar ? ' ملصق ووسام محطة' : ' stickers & station badges') + '</span></div>' +
        all.map(function (g) { return group(g, lang); }).join('');
      return { medals: medals.length, stickers: stickers };
    }).catch(function () { host.innerHTML = ''; return { medals: 0, stickers: 0 }; });
  }
  /* Heroes-Fortress era certificates: earned when every station of an era is complete.
     The certificate itself (named, printable) lives on the era page. */
  function fortressCerts() {
    var save = jget('hisn-save', {}) || {}, comp = save.completed || {};
    if (!Object.keys(comp).length) return Promise.resolve([]);
    window.HISN = window.HISN || {};
    var base = '../heroes-fortress/data/';
    return load(base + 'index.js').then(function () {
      return Promise.all(['prophets', 'seerah', 'heroes', 'battles', 'creativity', 'heart'].map(function (f) { return load(base + f + '.js'); }));
    }).then(function () {
      var E = (window.HISN && HISN.eras) || {}, out = [];
      Object.keys(E).forEach(function (id) {
        var era = E[id]; if (!era || !era.certificate) return;
        var nodes = era.nodes || [];
        if ((!nodes || !nodes.length) && era.categories) nodes = era.categories.reduce(function (a, c) { return a.concat(c.heroes || []); }, []);
        if (!nodes.length || !nodes.every(function (n) { return n && comp[n.id]; })) return;
        var page = id === 'creativity' ? 'academy.html' : id === 'heart' ? 'heart.html' : 'era.html?era=' + id;
        out.push({ id: id, title: era.title || { ar: id, en: id }, n: nodes.length, link: '../heroes-fortress/' + page + '#eraCert' });
      });
      return out;
    }).catch(function () { return []; });
  }
  window.MKAlbum = { render: render, fortressCerts: fortressCerts };
})();
