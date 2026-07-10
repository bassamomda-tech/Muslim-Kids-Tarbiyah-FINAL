/* ═══════════════════════════════════════════════════════════════
   RENDER — Hydrates each of the 5 rooms from a house data object.
   Public API: Render.house(slug) — clears panel + renders everything
   ─────────────────────────────────────────────────────────────── */

window.Render = (function () {

  function arEn(d, lang) {
    if (d == null) return '';
    if (typeof d === 'string') return d;
    return d[lang] || d.ar || d.en || '';
  }
  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  /* ───── ROOM 1: Knowledge (kid-friendly redesign) ───── */
  function renderKnowledge(host, k, hc, lang) {
    host.innerHTML = '';
    if (!k) return;

    /* 1. Hero banner with mascot speech */
    if (k.didYouKnow) {
      const banner = el('div', 'k-banner');
      banner.innerHTML = `
        <div class="k-mascot">🧒</div>
        <div class="k-bubble">💡 <b>${arEn(k.didYouKnow.title, lang)}</b></div>
        ${k.didYouKnow.sub ? `<div class="k-sub">✨ ${arEn(k.didYouKnow.sub, lang)}</div>` : ''}`;
      host.appendChild(banner);
    }

    /* 2. Definition as comic strip — 3 panels */
    if (k.definition) {
      const sec = el('section', 'k-section');
      sec.appendChild(divider('📜', lang==='ar'?'ما هو هذا الخُلق؟':'What is this character?',
        lang==='ar'?'لغةً واصطلاحاً وتشبيهاً جميلاً':'Linguistic · Definition · Beautiful simile', hc));
      const comic = el('div', 'k-comic');
      comic.innerHTML = `
        <div class="k-panel">
          <div class="k-panel-em">📚</div>
          <div class="k-panel-label">${lang==='ar'?'لغةً':'Linguistic'}</div>
          <div class="k-panel-text">${arEn(k.definition.linguistic, lang)}</div>
        </div>
        <div class="k-panel">
          <div class="k-panel-em">⚖️</div>
          <div class="k-panel-label">${lang==='ar'?'اصطلاحاً':'Definition'}</div>
          <div class="k-panel-text">${arEn(k.definition.terminology, lang)}</div>
        </div>
        ${k.definition.simile ? `<div class="k-panel">
          <div class="k-panel-em">🌳</div>
          <div class="k-panel-label">${lang==='ar'?'تَخَيَّل':'Imagine'}</div>
          <div class="k-panel-text">${arEn(k.definition.simile, lang)}</div>
        </div>` : ''}`;
      sec.appendChild(comic);
      host.appendChild(sec);
    }

    /* 3. Forms — flip cards (tap to reveal) */
    if (k.forms && k.forms.length) {
      const sec = el('section', 'k-section');
      sec.appendChild(divider('🎴',
        lang==='ar'?'اقلب البطاقات واكتشف!':'Flip cards & discover!',
        lang==='ar'?'كل بطاقة تكشف صورة من صور هذا الخُلق':'Each card reveals a form of this character', hc));
      const grid = el('div', 'k-flipgrid');
      k.forms.forEach(f => {
        const fcol = f.color || hc;
        const c = el('div', 'k-flipcard');
        c.style.setProperty('--fcol', fcol);
        c.innerHTML = `<div class="k-flipcard-inner">
          <div class="k-flipface k-flipfront">
            <div class="em">${f.icon || '🌿'}</div>
            <div class="ttl">${arEn(f.title, lang)}</div>
            <div class="tap-hint">${lang==='ar'?'👆 اقلبني':'👆 Flip me'}</div>
          </div>
          <div class="k-flipface k-flipback">${arEn(f.body, lang)}</div>
        </div>`;
        c.addEventListener('click', () => {
          c.classList.toggle('flipped');
          // sparkle burst on first flip
          if (c.classList.contains('flipped') && !c.dataset.sparkled) {
            c.dataset.sparkled = '1';
            ['✨','⭐','🌟'].forEach((s, i) => {
              const sp = document.createElement('span');
              sp.className = 'k-sparkle';
              const angle = (i + Math.random()) * 120 * Math.PI / 180;
              sp.style.setProperty('--dx', Math.cos(angle) * 60 + 'px');
              sp.style.setProperty('--dy', Math.sin(angle) * 60 + 'px');
              sp.style.top = '50%'; sp.style.left = '50%';
              sp.textContent = s;
              c.appendChild(sp);
              setTimeout(() => sp.remove(), 800);
            });
          }
        });
        grid.appendChild(c);
      });
      sec.appendChild(grid);
      host.appendChild(sec);
    }

    /* 4. Ranking — ladder */
    if (k.ranking && k.ranking.length) {
      const sec = el('section', 'k-section');
      sec.appendChild(divider('🪜',
        lang==='ar'?'سُلَّم المراتب':'Ladder of ranks',
        lang==='ar'?'تسلَّق من الأعلى إلى الأدنى':'Climb from highest to lowest', hc));
      const lad = el('div', 'k-ladder');
      k.ranking.forEach((r, i) => {
        const rcol = r.color || hc;
        const rung = el('div', 'k-rung');
        rung.style.setProperty('--rcol', rcol);
        rung.innerHTML = `<div class="k-rung-n">${i+1}</div>
          <div class="k-rung-text">
            <b>${arEn(r.title, lang)}</b>
            ${arEn(r.body, lang)}
          </div>`;
        lad.appendChild(rung);
      });
      sec.appendChild(lad);
      host.appendChild(sec);
    }

    /* 5. Verses */
    if (k.verses && k.verses.length) {
      const sec = el('section', 'k-section');
      sec.appendChild(divider('📖',
        lang==='ar'?'كنوز من القرآن':'Treasures from the Quran',
        lang==='ar'?'كلام الله المبارك':'Allah\u2019s blessed words', hc));
      k.verses.forEach(v => {
        const c = el('div', 'verse-card');
        c.innerHTML = `<div class="head">✨ ${lang==='ar'?'آية كريمة':'A noble verse'}</div>
          <div class="body">${arEn(v.text, lang)}</div>
          <div class="ref">${arEn(v.ref, lang)}</div>`;
        sec.appendChild(c);
      });
      host.appendChild(sec);
    }

    /* 6. Hadiths */
    if (k.hadiths && k.hadiths.length) {
      const sec = el('section', 'k-section');
      sec.appendChild(divider('💎',
        lang==='ar'?'كلام النبي ﷺ الذهبي':'The Prophet\u2019s ﷺ golden words',
        lang==='ar'?'احفظها بقلبك':'Keep them in your heart', hc));
      k.hadiths.forEach(h => {
        const c = el('div', 'hadith-card');
        c.innerHTML = `<div class="head">💎 ${lang==='ar'?'حديث ذهبي':'Golden hadith'}</div>
          <div class="body">${arEn(h.text, lang)}</div>
          <div class="ref">${arEn(h.source, lang)}</div>`;
        sec.appendChild(c);
      });
      host.appendChild(sec);
    }

    /* 7. Benefits — power-up grid */
    if (k.benefits && k.benefits.length) {
      const sec = el('section', 'k-section');
      sec.appendChild(divider('⚡',
        lang==='ar'?'قواك الخارقة!':'Your super powers!',
        lang==='ar'?'كل فائدة قوة جديدة تكتسبها':'Each benefit is a new power', hc));
      const grid = el('div', 'k-powerups');
      k.benefits.forEach((b, i) => {
        const txt = arEn(b, lang);
        // Try to extract leading emoji
        const m = txt.match(/^(\p{Extended_Pictographic}\uFE0F?)\s*/u);
        const em = m ? m[1] : '⚡';
        const clean = m ? txt.slice(m[0].length) : txt;
        const cell = el('div', 'k-power');
        cell.style.animationDelay = (i * .05) + 's';
        cell.innerHTML = `<div class="em">${em}</div><div class="txt">${clean}</div>`;
        grid.appendChild(cell);
      });
      sec.appendChild(grid);
      host.appendChild(sec);
    }

    /* 8. Obstacles vs Means — Heroes vs Villains */
    if (k.obstacles || k.acquireMeans) {
      const sec = el('section', 'k-section');
      sec.appendChild(divider('⚔️',
        lang==='ar'?'معركة الأخلاق!':'Battle of character!',
        lang==='ar'?'مَن سيفوز: الأبطال أم الأعداء؟':'Heroes vs Villains — who wins?', hc));
      const vs = el('div', 'k-versus');
      if (k.acquireMeans) {
        const h = el('div', 'k-team heroes');
        h.innerHTML = `<div class="k-team-hdr">
            <span class="k-team-em">🦸</span>
            <span class="k-team-name">${lang==='ar'?'الأبطال — وسائل الاكتساب':'Heroes — How to gain it'}</span>
          </div>
          <ul>${k.acquireMeans.map(b => `<li><span class="li-em">✅</span><span>${arEn(b, lang)}</span></li>`).join('')}</ul>`;
        vs.appendChild(h);
      }
      if (k.obstacles) {
        const v = el('div', 'k-team villains');
        v.innerHTML = `<div class="k-team-hdr">
            <span class="k-team-em">😈</span>
            <span class="k-team-name">${lang==='ar'?'الأعداء — موانع':'Villains — Obstacles'}</span>
          </div>
          <ul>${k.obstacles.map(b => `<li><span class="li-em">❌</span><span>${arEn(b, lang)}</span></li>`).join('')}</ul>`;
        vs.appendChild(v);
      }
      sec.appendChild(vs);
      host.appendChild(sec);
    }
  }

  /* Helper: section divider element */
  function divider(emoji, title, subtitle, hc) {
    const d = el('div', 'k-divider');
    d.style.setProperty('--hc', hc);
    d.innerHTML = `<div class="k-ico">${emoji}</div>
      <div class="k-title">${title}${subtitle ? `<small>${subtitle}</small>` : ''}</div>`;
    return d;
  }

  /* ───── ROOM 2: Stories ───── */
  function renderStories(host, stories, hc, lang, slug) {
    host.innerHTML = '';
    if (!stories || !stories.length) {
      host.innerHTML = `<div class="bp-empty">${lang==='ar'?'لا توجد قصص بعد':'No stories yet'}</div>`;
      return;
    }
    const intro = el('div', 'stories-intro');
    intro.innerHTML = `<div class="em">📖</div>
      <div><h4>${lang==='ar'?'كان يا ما كان…':'Once upon a time…'}</h4>
      <p>${lang==='ar'?'اختر قصةً تفاعلية وانطلق في رحلةٍ مع الصالحين':'Choose an interactive story and walk with the righteous'}</p></div>`;
    host.appendChild(intro);

    const list = el('div', 'story-list');
    stories.forEach((s, i) => {
      const card = el('div', 'story-card');
      const pageCount = (s.pages && s.pages.length) || 1;
      const hasQuiz   = s.quiz && s.quiz.length;
      card.innerHTML = `
        <div class="sc-thumb ${s.scene ? 'scene-' + s.scene : ''}">
          <span class="num">${lang==='ar'?'قصة':'#'} ${i+1}</span>
          <span>${s.icon || '📖'}</span>
        </div>
        <div class="sc-body">
          <div class="sc-title">${arEn(s.title, lang)}</div>
          <div class="sc-meta">📄 ${pageCount} ${lang==='ar'?'صفحات':'pages'}${hasQuiz?(lang==='ar'?' · 🏅 اختبار':' · 🏅 quiz'):''} · ${lang==='ar'?'اضغط لتبدأ':'tap to start'}</div>
        </div>`;
      card.addEventListener('click', () => openStory(s, hc, lang, slug));
      list.appendChild(card);
    });
    host.appendChild(list);
  }

  function openStory(s, hc, lang, slug) {
    // Use new paginated reader if pages exist; else fall back to legacy single-page modal.
    if (s.pages && s.pages.length && window.StoryReader) {
      StoryReader.open(s, hc, lang, (kind, pts) => {
        // award small points for choices/quiz/completion
        const k = `pts:${slug}`;
        const cur = parseInt(Store.get(k) || 0, 10);
        Store.set(k, cur + pts);
        const t = document.getElementById('actsTotal');
        if (t) t.textContent = (cur + pts);
        const hpScore = document.getElementById('hpScoreN');
        if (hpScore) hpScore.textContent = (cur + pts);
        App.updateProgress();
      });
      return;
    }
    // Legacy single-page fallback (kept for backward compatibility)
    const r = document.getElementById('storyReader');
    const box = r.querySelector('.sr-box');
    box.style.setProperty('--hc', hc);
    box.innerHTML = `<button class="sr-close" id="srClose">✕</button>
      <div class="sr-scene scene-${s.scene||'madinah'}"></div>
      <div class="sr-page">
        <div style="font-size:1.2rem;font-weight:900;color:${hc};margin-bottom:.5rem">${s.icon||'📖'} ${arEn(s.title,lang)}</div>
        <div class="sr-page-text">${arEn(s.body,lang)}</div>
        ${s.moral ? `<div class="sr-moral" style="margin:.6rem 0">💡 ${arEn(s.moral,lang)}</div>` : ''}
      </div>`;
    box.querySelector('#srClose').addEventListener('click', () => r.classList.remove('open'));
    r.classList.add('open');
  }

  /* ───── ROOM 3: Memorize ───── */
  function renderMemorize(host, mem, hc, lang, slug) {
    host.innerHTML = '';
    if (!mem) {
      host.innerHTML = `<div class="bp-empty">${lang==='ar'?'لا يوجد محتوى':'No content yet'}</div>`;
      return;
    }

    const box = el('div', 'mem-box');
    box.innerHTML = `<h4>✨ ${lang==='ar'?'احفظ هذه الدُّرر':'Memorize these gems'}</h4>`;
    let total = 0, all = 0;
    const recompute = () => {
      const cks = box.querySelectorAll('input[type="checkbox"]');
      let n = 0; cks.forEach(c => c.checked && n++);
      const sc = box.querySelector('.mem-score');
      sc.innerHTML = `<span style="font-size:1.2rem">📖</span> ${n} / ${cks.length} ${lang==='ar'?'محفوظة':'memorized'}`;
      Store.set(`mem:${slug}`, [...cks].map(c => c.checked ? 1 : 0).join(''));
    };
    function listFor(title, arr, cls) {
      if (!arr || !arr.length) return;
      box.appendChild(el('div', 'mem-section-title', title));
      const list = el('div', 'mem-list');
      arr.forEach((it, i) => {
        const id = `mem-${slug}-${cls}-${i}`;
        const row = el('label', 'mem-item ' + cls);
        row.htmlFor = id;
        row.innerHTML = `<input type="checkbox" id="${id}">
          <div><div class="text">${arEn(it.text, lang)}</div>
          ${it.ref ? `<div class="ref">${arEn(it.ref, lang)}</div>` : ''}</div>`;
        const cb = row.querySelector('input');
        cb.addEventListener('change', () => {
          row.classList.toggle('checked', cb.checked);
          recompute();
        });
        list.appendChild(row);
      });
      box.appendChild(list);
    }
    listFor((lang==='ar'?'🌿 الآيات الكريمة':'🌿 Quranic verses'), mem.verses, 'verse');
    listFor((lang==='ar'?'☀️ الأحاديث':'☀️ Hadiths'), mem.hadiths, 'hadith');
    box.appendChild(el('div', 'mem-score', '— / —'));
    host.appendChild(box);

    // restore state
    const saved = Store.get(`mem:${slug}`);
    if (saved) {
      const cks = box.querySelectorAll('input[type="checkbox"]');
      [...saved].forEach((v, i) => {
        if (cks[i] && v === '1') {
          cks[i].checked = true;
          cks[i].closest('.mem-item').classList.add('checked');
        }
      });
    }
    recompute();

    // pledge
    if (mem.pledge) {
      const p = el('div', 'pledge');
      p.innerHTML = `<h4>🎖️ ${arEn(mem.pledge.title, lang) || (lang==='ar'?'تَعَهُّدي':'My Pledge')}</h4>
        <div class="pledge-body">
          <div>${lang==='ar'?'بسم الله الرحمن الرحيم':'In the name of Allah'}</div>
          <div>${lang==='ar'?'أنا:':'I am:'} <span class="name" contenteditable="true"></span></div>
          ${mem.pledge.lines.map(l => `<div>☑️ ${arEn(l, lang)}</div>`).join('')}
          ${mem.pledge.dua ? `<div style="margin-top:.45rem;font-weight:800">${arEn(mem.pledge.dua, lang)}</div>` : ''}
        </div>
        <div class="pledge-sig">
          <div><div class="line"></div>${lang==='ar'?'توقيعي':'Signature'}</div>
          <div><div class="line"></div>${lang==='ar'?'التاريخ':'Date'}</div>
        </div>`;
      host.appendChild(p);
    }
  }

  /* ───── ROOM 4: Activities ───── */
  function renderActivities(host, acts, hc, lang, slug, houseId) {
    host.innerHTML = '';
    if (!acts) {
      host.innerHTML = `<div class="bp-empty">${lang==='ar'?'لا توجد ألعاب':'No games yet'}</div>`;
      return;
    }
    const totalPts = acts.totalPoints || 180;
    const hdr = el('div', 'acts-hdr');
    hdr.innerHTML = `<span>🏅 ${lang==='ar'?'ميدان الأبطال':'Champions Arena'}</span>
      <span class="pts"><span id="actsTotal">0</span> / ${totalPts}</span>`;
    host.appendChild(hdr);

    const ICONS = { fill:'📝', tf:'✓✗', mcq:'🎯', flip:'🎴', match:'🔗', sort:'🗂️', cipher:'🔑', maze:'🗺️' };
    const tabs = el('div', 'acts-tabs');
    acts.list.forEach((a, i) => {
      const t = el('button', 'act-tab' + (i === 0 ? ' active' : ''));
      t.innerHTML = `<span class="em">${a.icon || ICONS[a.kind] || '🎮'}</span><span>${arEn(a.title, lang)}</span>`;
      t.dataset.idx = i;
      tabs.appendChild(t);
    });
    host.appendChild(tabs);

    const board = el('div');
    host.appendChild(board);

    const ctx = {
      houseId, lang,
      onScore: (pts) => {
        const k = `pts:${slug}`;
        const cur = parseInt(Store.get(k) || 0, 10);
        Store.set(k, cur + pts);
        const t = document.getElementById('actsTotal');
        if (t) t.textContent = (cur + pts);
        const hpScore = document.getElementById('hpScoreN');
        if (hpScore) hpScore.textContent = (cur + pts);
        // confetti for milestones
        if ((cur + pts) >= totalPts && cur < totalPts) App.confetti();
        App.updateProgress();
      }
    };

    function renderAct(i) {
      const a = acts.list[i];
      board.innerHTML = '';
      const lvlBar = el('div', 'lvl-bar');
      const labels = lang==='ar'
        ? ['🌱 مبتدئ', '🌿 متوسط', '🌳 متقدم']
        : ['🌱 Beginner', '🌿 Intermediate', '🌳 Advanced'];
      a.levels.forEach((lv, j) => {
        const b = el('button', j === 0 ? 'active' : '', labels[j]);
        b.dataset.idx = j;
        lvlBar.appendChild(b);
      });
      const pts = el('span', 'lvl-pts', `${arEn(a.title,lang)}`);
      lvlBar.appendChild(pts);
      board.appendChild(lvlBar);
      const panels = el('div');
      a.levels.forEach((lv, j) => {
        const p = el('div', 'lvl-panel' + (j === 0 ? ' active' : ''));
        p.dataset.idx = j;
        panels.appendChild(p);
        renderLevel(p, a, j);
      });
      board.appendChild(panels);
      lvlBar.querySelectorAll('button').forEach((b, j) => {
        b.addEventListener('click', () => {
          lvlBar.querySelectorAll('button').forEach(x => x.classList.remove('active'));
          b.classList.add('active');
          panels.querySelectorAll('.lvl-panel').forEach(p => p.classList.remove('active'));
          panels.children[j].classList.add('active');
        });
      });
    }
    function renderLevel(p, a, j) {
      const lv = a.levels[j];
      if (!lv) { p.innerHTML = `<div class="bp-empty">${lang==='ar'?'قريباً…':'Soon…'}</div>`; return; }
      const ac = { ...ctx, actId: a.id || a.kind, levelId: j, maxScore: lv.points || 30 };
      const fn = Activities[lv.kind || a.kind];
      if (!fn) { p.textContent = '???'; return; }
      fn(p, lv, ac);
    }

    tabs.querySelectorAll('button').forEach((t, i) => {
      t.addEventListener('click', () => {
        tabs.querySelectorAll('button').forEach(x => x.classList.remove('active'));
        t.classList.add('active');
        renderAct(i);
      });
    });
    renderAct(0);

    // init total display
    const t = document.getElementById('actsTotal');
    if (t) t.textContent = parseInt(Store.get(`pts:${slug}`) || 0, 10);
  }

  /* ───── ROOM 5: Treasures ───── */
  function renderTreasures(host, data, hc, lang, slug) {
    host.innerHTML = '';
    const treasures = (data && data.treasures) || [];
    const idx = window.HOUSE_BY_SLUG[slug];
    const houseName = lang==='ar' ? idx.nameAr : idx.nameEn;
    const houseShort = lang==='ar' ? idx.shortAr : idx.shortEn;

    /* Intro */
    const intro = el('div', 'treasures-intro');
    intro.innerHTML = `<div class="em">🎒</div>
      <div><h4>${lang==='ar'?'حقيبة الكنوز':'Treasure Backpack'}</h4>
      <p>${lang==='ar'?'الخلطة السحرية + ملصقات ملوّنة + شهادة باسمك ✨':'Magic recipe + colorful stickers + certificate with your name ✨'}</p></div>`;
    host.appendChild(intro);

    /* ── MAGIC MIX ── */
    if (data && data.magicMix && data.magicMix.length) {
      const mm = el('div', 'magic-mix');
      mm.innerHTML = `<div class="mm-hdr">
        <span class="em">⚗️</span>
        <div><h4>${lang==='ar'?'الخلطة السحرية':'The Magic Recipe'}</h4>
        <p>${arEn(data.magicMixTitle, lang) || (lang==='ar'?`كيف تُطبِّق ${houseShort} كل يوم؟`:`How to live ${houseShort} every day?`)}</p></div>
      </div>`;
      const recipe = el('div', 'mm-recipe');
      data.magicMix.forEach((step, i) => {
        const ing = el('div', 'mm-ingredient');
        ing.innerHTML = `<div class="num">${i+1}</div>
          <div class="em">${step.icon || '✨'}</div>
          <div class="txt"><b>${arEn(step.title, lang)}:</b> ${arEn(step.body, lang)}</div>`;
        recipe.appendChild(ing);
      });
      mm.appendChild(recipe);
      const formula = el('div', 'mm-formula');
      formula.innerHTML = `<span>${lang==='ar'?'وصفتك السرية':'Your secret formula'}</span>
        <span class="eq">${arEn(data.formulaEq, lang) || `${data.magicMix.map(()=>'✨').join(' + ')} = ${houseShort} 🏆`}</span>`;
      mm.appendChild(formula);
      host.appendChild(mm);
    }

    /* ── COLORFUL STICKERS ── */
    if (treasures.length) {
      const head = el('div');
      head.style.cssText = 'display:flex;align-items:center;justify-content:space-between;margin:.8rem 0 .35rem';
      head.innerHTML = `<div style="font-weight:900;color:${hc};font-size:.95rem;display:flex;align-items:center;gap:.3rem">🏷️ ${lang==='ar'?`ملصقات ${houseShort}`:`${houseShort} stickers`}</div>
        <div style="font-size:.74rem;color:var(--ink-3);font-weight:800" id="stkCnt"></div>`;
      host.appendChild(head);

      const earned = (Store.get(`stickers:${slug}`) || '').split(',').filter(Boolean);
      const grid = el('div', 'stickers');
      treasures.forEach((t, i) => {
        const isEarned = earned.includes(String(i));
        const s = el('div', 'sticker' + (isEarned ? ' earned' : ''));
        s.style.setProperty('--st-color', t.color || hc);
        s.innerHTML = `<div class="em">${t.icon}</div><div class="ttl">${arEn(t.title, lang)}</div>`;
        grid.appendChild(s);
      });
      host.appendChild(grid);
      const cnt = document.getElementById('stkCnt');
      if (cnt) cnt.textContent = `${earned.length} / ${treasures.length}`;
    }

    /* ── CERTIFICATE ── */
    const isComplete = Store.get(`done:${slug}`) === '1';
    const earnedCount = (Store.get(`stickers:${slug}`) || '').split(',').filter(Boolean).length;
    const cert = el('div');
    const certText = data && data.certificate || {};
    if (isComplete) {
      cert.innerHTML = `<div class="cert-card" id="certCard">
        <div class="cert-ribbon">🎖️ ${lang==='ar'?'وسام التميز':'Excellence Medal'}</div>
        <div class="cert-h">${lang==='ar'?'شهادة إتمام':'Certificate of Completion'}</div>
        <div class="cert-h" style="font-size:1.55rem;margin-top:.1rem">${houseName}</div>
        <div class="cert-sub">${arEn(certText.subtitle, lang) || (lang==='ar'?'تُمنح للبطل/البطلة الذي أكمل رحلة هذا البيت':'Awarded to the hero who completed this house')}</div>
        <div class="cert-name-row">
          <span>${lang==='ar'?'تُمنح لـ:':'Awarded to:'}</span>
          <span class="cert-name" contenteditable="true" id="certName">${Store.get(`name:${slug}`) || Store.get('childName') || ''}</span>
        </div>
        <div class="cert-statement">${arEn(certText.statement, lang) || (lang==='ar'?`لإتقانه/إتقانها <b>${houseShort}</b> — قولاً وعملاً وقدوةً — وفقاً لما جاء في القرآن الكريم والسنة المطهرة.`:`For mastering <b>${houseShort}</b> in word, deed, and example — by the Book and the Sunnah.`)}</div>
        <div class="cert-seal" aria-hidden="true">
          <span class="em">${(data.icon || '🏅')}</span>
          <span>${lang==='ar'?'ختم البطولة':'Hero Seal'}</span>
        </div>
        <div class="cert-sig">
          <div><div class="line"></div>${lang==='ar'?'توقيعي':'Signature'}</div>
          <div><div class="line"></div><span id="certDate">${new Date().toLocaleDateString(lang==='ar'?'ar-EG':'en-US')}</span></div>
        </div>
        <div class="cert-actions">
          <button class="primary" id="certPrint">🖨️ ${lang==='ar'?'طباعة الشهادة':'Print certificate'}</button>
          <button id="certShare">📤 ${lang==='ar'?'حفظ الاسم':'Save name'}</button>
        </div>
      </div>`;
    } else {
      cert.innerHTML = `<div class="cert-locked">🔒 ${lang==='ar'?'أكمل البيت لتفتح الشهادة!':'Complete the house to unlock the certificate!'}<br>
        <span style="font-size:.74rem;color:#7A5928">${earnedCount}/${treasures.length} ${lang==='ar'?'ملصق · أكمل جميع الأنشطة ثم اضغط زر الإكمال أدناه':'stickers · finish all activities then tap the complete button below'}</span>
      </div>`;
    }
    host.appendChild(cert);

    /* Wire certificate buttons */
    const certName = document.getElementById('certName');
    if (certName) {
      certName.addEventListener('input', () => {
        Store.set(`name:${slug}`, certName.textContent.trim());
        Store.set('childName', certName.textContent.trim());
      });
      certName.addEventListener('focus', () => {
        if (certName.textContent.trim() === '') certName.textContent = '';
      });
    }
    const certPrint = document.getElementById('certPrint');
    if (certPrint) {
      certPrint.addEventListener('click', () => {
        const card = document.getElementById('certCard');
        if (!card) return;
        const print = document.getElementById('printArea');
        print.style.display = 'block';
        print.innerHTML = '';
        print.appendChild(card.cloneNode(true));
        // remove buttons from clone
        print.querySelectorAll('.cert-actions').forEach(n => n.remove());
        setTimeout(() => {
          window.print();
          setTimeout(() => { print.style.display = 'none'; print.innerHTML = ''; }, 500);
        }, 100);
      });
    }
    const certShare = document.getElementById('certShare');
    if (certShare) {
      certShare.addEventListener('click', () => {
        if (certName) {
          Store.set(`name:${slug}`, certName.textContent.trim());
          Store.set('childName', certName.textContent.trim());
        }
        App.toast(lang==='ar'?'✓ تم حفظ الاسم':'✓ Name saved', 'success');
      });
    }

    /* ── COMPLETE CTA ── */
    const cta = el('button', 'complete-cta');
    cta.classList.toggle('done', isComplete);
    cta.textContent = isComplete
      ? (lang==='ar' ? '✓ تم إكمال هذا البيت — أحسنت!' : '✓ House completed — well done!')
      : (lang==='ar' ? '🎖️ أكمل البيت واحصل على شهادتك ومُلصقاتك' : '🎖️ Complete the house & claim your certificate');
    cta.addEventListener('click', () => {
      if (isComplete) return;
      Store.set(`stickers:${slug}`, [...Array(treasures.length).keys()].map(String).join(','));
      Store.set(`done:${slug}`, '1');
      App.confetti();
      App.toast(lang==='ar'?'🎉 مبارك! حصلت على وسام البيت':'🎉 Congrats! House medal earned', 'success');
      App.updateProgress();
      renderTreasures(host, data, hc, lang, slug);
    });
    host.appendChild(cta);

    /* Footer nav */
    const nav = el('div', 'house-footer-nav');
    const prev = el('button', '', `← ${lang==='ar'?'السابق':'Prev'}`);
    const home = el('button', 'home', '🏘️');
    const next = el('button', '', `${lang==='ar'?'التالي':'Next'} →`);
    prev.addEventListener('click', () => App.navHouse(-1));
    next.addEventListener('click', () => App.navHouse(1));
    home.addEventListener('click', () => App.closeHouse());
    nav.appendChild(prev); nav.appendChild(home); nav.appendChild(next);
    host.appendChild(nav);
  }

  /* ───── PUBLIC: render house panel ───── */
  function house(slug) {
    const idx = window.HOUSE_BY_SLUG[slug];
    const data = window.HOUSES[slug];
    if (!idx) return;
    const lang = document.documentElement.lang === 'en' ? 'en' : 'ar';
    const hc = idx.color;

    document.documentElement.style.setProperty('--hc', hc);

    // House nav
    document.getElementById('hnName').textContent = lang==='ar' ? idx.nameAr : idx.nameEn;
    document.getElementById('hnSub').textContent  = lang==='ar' ? idx.shortAr : idx.shortEn;

    // Hero
    document.getElementById('hpArt').innerHTML = HouseArt.render(idx.art, hc);
    document.getElementById('hpName').textContent = lang==='ar' ? idx.nameAr : idx.nameEn;
    document.getElementById('hpDesc').textContent = data
      ? arEn(data.tagline, lang)
      : (lang==='ar' ? 'قريباً…' : 'Coming soon…');
    const ptsCur = parseInt(Store.get(`pts:${slug}`) || 0, 10);
    const ptsMax = (data && data.activities && data.activities.totalPoints) || 180;
    document.getElementById('hpScoreN').textContent = ptsCur;
    document.getElementById('hpScoreMax').textContent = ptsMax;

    // Build room nav
    const rb = document.getElementById('roomsBar');
    rb.innerHTML = '';
    const ROOMS = [
      { id:'r1', em:'🏛️', titleAr:'بوابة المعرفة', titleEn:'Knowledge' },
      { id:'r2', em:'📖', titleAr:'كان يا ما كان', titleEn:'Stories' },
      { id:'r3', em:'✨', titleAr:'كلمات من نور',  titleEn:'Memorize' },
      { id:'r4', em:'🏅', titleAr:'ميدان الأبطال', titleEn:'Activities' },
      { id:'r5', em:'🎒', titleAr:'حقيبة الكنوز',  titleEn:'Treasures' },
    ];
    ROOMS.forEach((r, i) => {
      const b = document.createElement('button');
      b.className = 'room-tab' + (i === 0 ? ' active' : '');
      b.innerHTML = `<span class="em">${r.em}</span><span>${lang==='ar'?r.titleAr:r.titleEn}</span>`;
      b.addEventListener('click', () => {
        rb.querySelectorAll('.room-tab').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        document.querySelectorAll('.room').forEach(p => p.classList.remove('active'));
        document.getElementById(r.id).classList.add('active');
      });
      rb.appendChild(b);
    });

    // Render rooms
    if (!data) {
      document.getElementById('r1').innerHTML = '';
      document.getElementById('r2').innerHTML = '';
      document.getElementById('r3').innerHTML = '';
      document.getElementById('r4').innerHTML = '';
      document.getElementById('r5').innerHTML = '';
      const ph = `<div class="bp-empty" style="padding:3rem 1rem">
        <div style="font-size:3rem;margin-bottom:.5rem">🚧</div>
        <div style="font-weight:900;color:${hc};font-size:1.1rem">${lang==='ar'?'هذا البيت قيد البناء':'House under construction'}</div>
        <div style="margin-top:.5rem">${lang==='ar'?'سيُفتح قريباً بإذن الله':'Coming soon, in shā\u02beAllāh'}</div>
      </div>`;
      document.getElementById('r1').innerHTML = ph;
      return;
    }
    renderKnowledge(document.getElementById('r1'), data.knowledge, hc, lang);
    renderStories  (document.getElementById('r2'), data.stories,   hc, lang, slug);
    renderMemorize (document.getElementById('r3'), data.memorize,  hc, lang, slug);
    renderActivities(document.getElementById('r4'), data.activities, hc, lang, slug, idx.id);
    renderTreasures(document.getElementById('r5'), data, hc, lang, slug);

    // reset scroll
    document.getElementById('r1').classList.add('active');
    ['r2','r3','r4','r5'].forEach(id => document.getElementById(id).classList.remove('active'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return { house };
})();
