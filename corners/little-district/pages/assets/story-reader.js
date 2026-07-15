/* mkvoice-loader */(function(){try{var cs=document.currentScript,src=(cs&&cs.src)||"";var m=src.match(/^(.*\/corners\/)/);var base=m?m[1]:"";if(base&&!window.MKVoice&&!document.querySelector("script[data-mkvoice]")){var s=document.createElement("script");s.src=base+"shared/voice-engine.js";s.setAttribute("data-mkvoice","1");document.head.appendChild(s);}}catch(e){}})();
/* ═══════════════════════════════════════════════════════════════
   STORY READER — paginated, interactive, with end-of-story quiz.
   Public: StoryReader.open(story, hc, lang, onFinish)
   ─────────────────────────────────────────────────────────────── */

window.StoryReader = (function () {

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

  /* Scene decoration SVG per scene type — placed in .sr-scene */
  function sceneSVG(name) {
    const scenes = {
      desert: `
        <svg viewBox="0 0 400 170" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <circle cx="320" cy="40" r="22" fill="#FFE082"/>
          <path d="M0,110 Q70,80 140,110 Q210,75 280,110 Q350,80 400,110 L400,170 L0,170 Z" fill="#FFB74D" opacity=".85"/>
          <path d="M0,140 Q100,120 200,140 Q300,118 400,140 L400,170 L0,170 Z" fill="#D4A574"/>
          <g transform="translate(60,118)">
            <rect x="6" y="20" width="3" height="20" fill="#5D4037"/>
            <path d="M0,18 Q-4,8 8,12 Q5,18 0,18 Z" fill="#2E7D32"/>
            <path d="M16,18 Q22,8 8,12 Q12,18 16,18 Z" fill="#388E3C"/>
            <path d="M-2,10 Q5,0 12,8 Q5,12 -2,10 Z" fill="#43A047"/>
          </g>
        </svg>`,
      madinah: `
        <svg viewBox="0 0 400 170" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="38" r="20" fill="#FFD54F"/>
          <!-- skyline -->
          <rect x="40" y="80" width="40" height="60" fill="#A78863"/>
          <rect x="85" y="65" width="50" height="75" fill="#8C6E4C"/>
          <rect x="50" y="60" width="6" height="22" fill="#8C6E4C"/>
          <path d="M180,60 Q200,30 220,60 z" fill="#A78863"/>
          <rect x="170" y="60" width="60" height="80" fill="#A78863"/>
          <path d="M195,30 L200,38 L205,30 z" fill="#FFD54F"/>
          <rect x="240" y="78" width="48" height="62" fill="#8C6E4C"/>
          <rect x="295" y="68" width="50" height="72" fill="#A78863"/>
          <rect x="350" y="80" width="50" height="60" fill="#8C6E4C"/>
          <!-- ground -->
          <rect x="0" y="140" width="400" height="30" fill="#7A5928"/>
        </svg>`,
      night: `
        <svg viewBox="0 0 400 170" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="170" fill="#1A237E"/>
          <circle cx="320" cy="36" r="20" fill="#FFF59D"/>
          <circle cx="330" cy="32" r="16" fill="#1A237E"/>
          <circle cx="40" cy="22" r="1.4" fill="#fff"/>
          <circle cx="90" cy="40" r="1.2" fill="#fff"/>
          <circle cx="150" cy="20" r="1.5" fill="#fff"/>
          <circle cx="220" cy="32" r="1.2" fill="#fff"/>
          <circle cx="270" cy="18" r="1.4" fill="#fff"/>
          <circle cx="380" cy="56" r="1.2" fill="#fff"/>
          <!-- silhouettes -->
          <path d="M0,140 Q60,100 120,140 Q180,105 240,140 Q300,108 360,140 L400,140 L400,170 L0,170 Z" fill="#0D1845"/>
        </svg>`,
      garden: `
        <svg viewBox="0 0 400 170" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <circle cx="320" cy="36" r="22" fill="#FFE082"/>
          <path d="M0,140 L400,140 L400,170 L0,170 Z" fill="#66BB6A"/>
          <!-- flowers -->
          <g transform="translate(40,140)"><line x1="0" y1="0" x2="0" y2="-20" stroke="#2E7D32" stroke-width="2"/><circle cx="0" cy="-22" r="6" fill="#EC407A"/><circle cx="0" cy="-22" r="2.5" fill="#FFEB3B"/></g>
          <g transform="translate(100,140)"><line x1="0" y1="0" x2="0" y2="-26" stroke="#2E7D32" stroke-width="2"/><circle cx="0" cy="-28" r="7" fill="#FFD54F"/><circle cx="0" cy="-28" r="3" fill="#F57F17"/></g>
          <g transform="translate(160,140)"><line x1="0" y1="0" x2="0" y2="-18" stroke="#2E7D32" stroke-width="2"/><circle cx="0" cy="-20" r="5" fill="#CE93D8"/></g>
          <g transform="translate(220,140)"><line x1="0" y1="0" x2="0" y2="-24" stroke="#2E7D32" stroke-width="2"/><circle cx="0" cy="-26" r="6" fill="#FF8A65"/></g>
          <!-- tree -->
          <rect x="358" y="100" width="8" height="40" fill="#5D4037"/>
          <circle cx="362" cy="100" r="22" fill="#2E7D32"/>
          <circle cx="350" cy="95" r="14" fill="#388E3C"/>
          <circle cx="372" cy="95" r="14" fill="#43A047"/>
        </svg>`,
      mosque: `
        <svg viewBox="0 0 400 170" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="170" fill="url(#mskGrad)"/>
          <defs><linearGradient id="mskGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#E8EAF6"/><stop offset="1" stop-color="#7986CB"/>
          </linearGradient></defs>
          <!-- minarets -->
          <rect x="40" y="60" width="14" height="80" fill="#3949AB"/>
          <path d="M37,60 L47,42 L57,60 Z" fill="#283593"/>
          <rect x="346" y="60" width="14" height="80" fill="#3949AB"/>
          <path d="M343,60 L353,42 L363,60 Z" fill="#283593"/>
          <!-- main dome -->
          <path d="M140,90 Q200,30 260,90 Z" fill="#3949AB"/>
          <rect x="142" y="90" width="116" height="50" fill="#5C6BC0"/>
          <rect x="195" y="22" width="10" height="14" fill="#283593"/>
          <path d="M200,16 Q204,20 200,24 Q196,20 200,16 Z" fill="#FFE082"/>
          <rect x="0" y="140" width="400" height="30" fill="#5D4037"/>
        </svg>`,
    };
    return scenes[name] || scenes.madinah;
  }

  /* ───── State (per open) ───── */
  let state = null;

  function close() {
    document.getElementById('storyReader').classList.remove('open');
    stopNarrate();
    state = null;
  }

  /* ───── Text-to-speech ───── */
  let utterance = null;
  function stopNarrate() {
    if (typeof speechSynthesis !== 'undefined' && speechSynthesis.speaking) speechSynthesis.cancel();
    try { if (window.MKTTS) MKTTS.stop(); } catch (e) {}
    document.querySelectorAll('.sr-narrate.playing').forEach(b => b.classList.remove('playing'));
    utterance = null;
  }
  function browserNarrate(text, btn, done) {
    if (typeof speechSynthesis === 'undefined') { done && done(); return; }
    const u = new SpeechSynthesisUtterance(text);
    u.lang = state.lang === 'ar' ? 'ar-SA' : 'en-US';
    u.rate = 0.92;
    if(state.lang==='ar'&&window.MKVoice){ MKVoice.applyGender(u, text, 'ar'); }
    u.onend = done; u.onerror = done;
    utterance = u;
    try { speechSynthesis.speak(u); } catch (e) { done && done(); }
  }
  function narrate(text, btn) {
    if (utterance && ((typeof speechSynthesis !== 'undefined' && speechSynthesis.speaking) || utterance === true)) { stopNarrate(); return; }
    stopNarrate();
    btn && btn.classList.add('playing');
    const done = () => { btn && btn.classList.remove('playing'); utterance = null; };
    // Prefer the natural cloud voice (same as every other corner); fall back to the browser voice.
    if (window.MKTTS && MKTTS.enabled) {
      utterance = true;
      MKTTS.speak(text, state.lang).then(done).catch(() => browserNarrate(text, btn, done));
      return;
    }
    browserNarrate(text, btn, done);
  }

  /* ───── Open ───── */
  function open(story, hc, lang, onFinish) {
    state = {
      story, hc, lang, onFinish,
      idx: 0, total: 0, choicesDone: {}, quizOk: false,
    };
    const reader = document.getElementById('storyReader');
    reader.querySelector('.sr-box').style.setProperty('--hc', hc);
    const pages = story.pages || [];
    state.total = pages.length + (story.quiz && story.quiz.length ? 1 : 0) + 1; // +end
    reader.classList.add('open');
    render();
  }

  function render() {
    const { story, idx, total, lang, hc } = state;
    const pages = story.pages || [];
    const hasQuiz = story.quiz && story.quiz.length;
    const quizIdx = pages.length;
    const endIdx = pages.length + (hasQuiz ? 1 : 0);

    // Progress dots
    const dots = document.getElementById('srProgress');
    dots.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const d = el('div', 'sr-dot' + (i < idx ? ' done' : '') + (i === idx ? ' current' : ''));
      dots.appendChild(d);
    }

    if (idx < pages.length) renderPage(pages[idx]);
    else if (hasQuiz && idx === quizIdx) renderQuiz();
    else renderEnd();

    // Scroll modal content to top
    document.querySelector('.sr-box').scrollTop = 0;
  }

  function renderPage(page) {
    // Scene
    const scene = document.getElementById('srScene');
    scene.className = 'sr-scene' + (page.scene ? ' scene-' + page.scene : '');
    scene.innerHTML = sceneSVG(page.scene || state.story.scene || 'madinah') +
      (page.character ? `<div class="sr-character">${page.character}</div>` : '');

    // Page body
    const body = document.getElementById('srPage');
    body.innerHTML = '';
    const pageNum = el('div', 'sr-page-num', `📖 ${state.lang==='ar'?'صفحة':'page'} ${state.idx+1} / ${state.story.pages.length}`);
    body.appendChild(pageNum);
    if (state.idx === 0 && state.story.title) {
      const ttl = el('div');
      ttl.style.cssText = 'font-size:1.2rem;font-weight:900;color:var(--hc);line-height:1.3;margin-bottom:.55rem';
      ttl.innerHTML = (state.story.icon || '📖') + ' ' + arEn(state.story.title, state.lang);
      body.appendChild(ttl);
    }
    const narrateBtn = el('button', 'sr-narrate', '🎧 ' + (state.lang==='ar' ? 'استمع للقصة' : 'Listen'));
    body.appendChild(narrateBtn);

    const text = el('div', 'sr-page-text', arEn(page.text, state.lang));
    body.appendChild(text);
    narrateBtn.addEventListener('click', () => narrate(text.textContent, narrateBtn));

    // Inline choice
    if (page.choice) {
      const c = el('div', 'sr-choice');
      const q = el('div', 'q', `🤔 ${arEn(page.choice.q, state.lang)}`);
      c.appendChild(q);
      page.choice.opts.forEach((opt) => {
        const b = el('button', 'opt', arEn(opt.t, state.lang));
        b.addEventListener('click', () => {
          if (b.disabled) return;
          if (opt.c) {
            b.classList.add('ok');
            state.choicesDone[state.idx] = 1;
            [...c.querySelectorAll('.opt')].forEach(x => x.disabled = true);
            // Reveal explanation
            if (opt.exp) {
              const e = el('div', '', `<b>✨</b> ${arEn(opt.exp, state.lang)}`);
              e.style.cssText = 'margin-top:.4rem;font-size:.82rem;color:#1B5E20;font-weight:700;line-height:1.7';
              c.appendChild(e);
            }
            // Award small point
            if (state.onFinish) state.onFinish('choice', 5);
          } else {
            b.classList.add('bad');
            b.disabled = true;
            if (opt.exp) {
              const e = el('div', '', `<b>✗</b> ${arEn(opt.exp, state.lang)}`);
              e.style.cssText = 'margin-top:.3rem;font-size:.78rem;color:#C62828;font-weight:700';
              c.appendChild(e);
            }
          }
        });
        c.appendChild(b);
      });
      body.appendChild(c);
    }

    renderFoot();
  }

  function renderFoot() {
    const foot = document.getElementById('srFoot');
    foot.innerHTML = '';
    const { lang, idx, total, story } = state;
    const last = idx === total - 1;
    const prevB = el('button', '', '‹ ' + (lang==='ar' ? 'السابقة' : 'Prev'));
    prevB.disabled = idx === 0;
    prevB.addEventListener('click', () => { if (state.idx > 0) { stopNarrate(); state.idx--; render(); } });

    const center = el('div', 'grow', `${idx+1} / ${total}`);

    const nextB = el('button', 'primary', last ? (lang==='ar'?'🏁 إنهاء':'🏁 Finish') : ((lang==='ar'?'التالية':'Next') + ' ›'));
    nextB.addEventListener('click', () => {
      stopNarrate();
      if (last) close();
      else { state.idx++; render(); }
    });
    foot.appendChild(prevB);
    foot.appendChild(center);
    foot.appendChild(nextB);
  }

  function renderQuiz() {
    const scene = document.getElementById('srScene');
    scene.className = 'sr-scene scene-garden';
    scene.innerHTML = sceneSVG('garden') + `<div class="sr-character">🏆</div>`;

    const body = document.getElementById('srPage');
    body.innerHTML = '';
    body.appendChild(el('div', 'sr-page-num', `🏅 ${state.lang==='ar'?'اختبار القصة':'Story quiz'}`));
    const quiz = el('div', 'sr-quiz');
    quiz.appendChild(el('div', 'q-hdr', `🤓 ${state.lang==='ar'?'هل فهمت القصة؟ أجب على الأسئلة!':'Did you get it? Answer the questions!'}`));
    let answered = 0, correct = 0;
    state.story.quiz.forEach((q, i) => {
      const row = el('div', 'q-row');
      row.appendChild(el('div', 'q', (i+1) + '. ' + arEn(q.q, state.lang)));
      const letters = ['أ','ب','ج','د'];
      q.opts.forEach((opt, j) => {
        const b = el('button', 'opt-btn');
        b.innerHTML = `<span class="opt-letter">${letters[j]}</span><span>${arEn(opt.t, state.lang)}</span>`;
        b.addEventListener('click', () => {
          if (row.dataset.done) return;
          if (opt.c) {
            b.classList.add('ok'); row.dataset.done='1'; correct++;
            answered++;
            if (state.onFinish) state.onFinish('quiz', 8);
          } else {
            b.classList.add('bad'); b.disabled = true;
          }
          if (answered >= state.story.quiz.length) state.quizOk = true;
        });
        row.appendChild(b);
      });
      quiz.appendChild(row);
    });
    body.appendChild(quiz);
    renderFoot();
  }

  function renderEnd() {
    document.getElementById('srScene').className = 'sr-scene scene-garden';
    document.getElementById('srScene').innerHTML = sceneSVG('garden') + `<div class="sr-character">${state.story.endCharacter || '🎉'}</div>`;

    const body = document.getElementById('srPage');
    body.innerHTML = '';
    const end = el('div', 'sr-end');
    end.innerHTML = `<span class="em">🏆</span>
      <h4>${state.lang==='ar'?'أَتممتَ القصة!':'You finished the story!'}</h4>
      ${state.story.moral ? `<div class="moral">💡 ${arEn(state.story.moral, state.lang)}</div>` : ''}
      ${state.story.badge ? `<div class="badge">${state.story.badge.icon || '🏅'} ${arEn(state.story.badge.title, state.lang)}</div>` : ''}`;
    body.appendChild(end);

    // Optional reflect / didYouKnow tucked at bottom
    if (state.story.reflect && state.story.reflect.length) {
      const r = el('div');
      r.style.cssText = 'background:#E3F2FD;border:2px solid #90CAF9;border-radius:1rem;padding:.75rem .9rem;margin:.6rem 0;font-size:.86rem;color:#0D47A1;line-height:1.7';
      r.innerHTML = `<div style="font-weight:900;margin-bottom:.3rem">💭 ${state.lang==='ar'?'توقَّف وتدبَّر':'Reflect'}</div>` +
        state.story.reflect.map(x => `<div>• ${arEn(x, state.lang)}</div>`).join('');
      body.appendChild(r);
    }
    if (state.story.didYouKnow && state.story.didYouKnow.length) {
      const f = el('div');
      f.style.cssText = 'background:#FFF9C4;border:2px solid #F9A825;border-radius:1rem;padding:.75rem .9rem;margin:.6rem 0;font-size:.84rem;color:#5D4037;line-height:1.7';
      f.innerHTML = `<div style="font-weight:900;color:#E67E22;margin-bottom:.3rem">🌟 ${state.lang==='ar'?'هل تعلم؟':'Did you know?'}</div>` +
        state.story.didYouKnow.map(x => `<div>• ${arEn(x, state.lang)}</div>`).join('');
      body.appendChild(f);
    }

    // Narrative-style disclaimer
    const note = el('div');
    note.style.cssText = 'border-top:1px dashed #BCAAA4;margin:.7rem 0 0;padding:.55rem .2rem 0;font-size:.74rem;color:#8D6E63;line-height:1.6;text-align:center';
    note.textContent = state.lang==='ar'
      ? '✱ القصة معروضة بأسلوب سردي مبسّط بتصرّف يناسب الأطفال، مع الحفاظ على أصل الحادثة الثابت ومصادرها.'
      : '✱ This story is retold in a simplified narrative style for children, while preserving the authentic core of the event and its sources.';
    body.appendChild(note);

    // Footer: only close
    const foot = document.getElementById('srFoot');
    foot.innerHTML = '';
    const home = el('button', 'primary', '🏠 ' + (state.lang==='ar'?'العودة لقائمة القصص':'Back to stories'));
    home.style.flex = '1';
    home.addEventListener('click', close);
    foot.appendChild(home);

    // Award completion-bonus once per story
    if (state.onFinish) state.onFinish('complete', 10);
  }

  return { open, close };
})();
