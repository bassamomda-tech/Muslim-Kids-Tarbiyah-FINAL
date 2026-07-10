/* ════════════════════════════════════════════════════════════════
   اختبارات الأركان — Corner Quizzes · GENERATORS
   Builds 3 levels × 3 activities (match · MCQ · maze) for a journey
   STRICTLY from its already-vetted station data — no new content is
   invented, so every question is grounded in the journey itself.
   Accessors try several station shapes so the same generators work
   across corners (faith-minaret today; ibada/sport/quds later).
   ════════════════════════════════════════════════════════════════ */
(function () {
  /* ── small utils ── */
  const shuffle = a => a.map(x => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map(x => x[1]);
  const pick = (a, n) => shuffle(a).slice(0, n);
  const has = o => o !== undefined && o !== null;
  const stripMarkup = s => (typeof s !== 'string') ? s : s
    .replace(/<[^>]*>/g, '')          /* drop <b> etc. — bold was revealing the answer */
    .replace(/[\u00AB\u00BB\u201C\u201D\u201E\u275D\u275E\"]/g, '') /* drop quote marks — wrong options were the quoted ones */
    .replace(/^\s*\u0628\u0644\s+/, '')   /* drop a leading بل ("rather") that marked the correction */
    .replace(/\s+/g, ' ').trim();
  const L = o => { if (!has(o)) return null; if (typeof o === 'string') return { ar: stripMarkup(o), en: stripMarkup(o) };
    return Object.assign({}, o, { ar: stripMarkup(o.ar), en: stripMarkup(o.en !== undefined ? o.en : o.ar) }); };

  /* short ayah snippet for matching (strip brackets, first ~5 words + …) */
  function ayahSnippet(s) {
    if (!s) return '';
    const clean = String(s).replace(/[﴿﴾«»"]/g, '').replace(/[ۚۖۗ۟ۛ]/g, '').trim();
    const w = clean.split(/\s+/);
    return w.slice(0, 5).join(' ') + (w.length > 5 ? ' …' : '');
  }

  /* ── field accessors (multi-shape) ── */
  const A = {
    title: st => L(st.title || st.name),
    icon: st => st.icon || st.emoji || '🌟',
    /* a statement that is TRUE in creed */
    truth: st => L((st.myth && st.myth.bust) || (st.flip && st.flip.bust)),
    /* a statement that is FALSE / a misconception */
    falsehood: st => L((st.myth && st.myth.claim) || (st.flip && st.flip.claim)),
    /* the station's one-line key */
    key: st => L(st.proof || st.key || st.logicKey || st.hook || st.tag),
    /* card / name of Allah */
    cardName: st => { const c = st.card || st.nameOfAllah; return c && c.name ? L(c.name) : null; },
    cardMeaning: st => { const c = st.card || st.nameOfAllah; return c && c.meaning ? L(c.meaning) : null; },
    /* ayah + reference */
    ayah: st => (st.reflection && st.reflection.ayah) ? st.reflection.ayah
      : (st.evidence && st.evidence.kind === 'ayah' ? st.evidence.text : null),
    ref: st => (st.reflection && st.reflection.ref) ? L(st.reflection.ref)
      : (st.evidence && st.evidence.ref ? L(st.evidence.ref) : null),
    /* built-in match pairs */
    pairs: st => (st.match && Array.isArray(st.match.pairs)) ? st.match.pairs : null,
  };

  /* ── pools across the journey (for plausible, on-topic distractors) ── */
  function pools(S) {
    return {
      truths: S.map(A.truth).filter(Boolean),
      falsehoods: S.map(A.falsehood).filter(Boolean),
      keys: S.map(A.key).filter(Boolean),
      meanings: S.map(A.cardMeaning).filter(Boolean),
      refs: S.map(A.ref).filter(Boolean),
    };
  }

  /* build one MCQ: correct + (n-1) distractors, shuffled */
  function mcq(qText, correct, distractorPool, n) {
    const ds = pick(distractorPool.filter(d => d && d.ar !== correct.ar), n - 1);
    if (ds.length < n - 1) return null;
    const opts = shuffle([correct, ...ds]);
    return { q: qText, options: opts, correct: opts.findIndex(o => o.ar === correct.ar) };
  }

  /* ════════ ACTIVITY BUILDERS ════════ */

  /* MATCH: name ↔ meaning */
  function matchNameMeaning(S) {
    const items = S.filter(st => A.cardName(st) && A.cardMeaning(st));
    if (items.length < 3) return null;
    const chosen = pick(items, Math.min(4, items.length));
    return {
      type: 'match', icon: '🃏',
      title: { ar: 'صِل البطاقة بمعناها', en: 'Match the card to its meaning' },
      prompt: { ar: 'صِل كلَّ بطاقةٍ بالمعنى الصحيح', en: 'Connect each card with its correct meaning' },
      pairs: chosen.map(st => ({ a: A.cardName(st), b: A.cardMeaning(st) })),
    };
  }

  /* MATCH: title ↔ key */
  function matchTitleKey(S) {
    const items = S.filter(st => A.title(st) && A.key(st));
    if (items.length < 3) return null;
    const chosen = pick(items, Math.min(4, items.length));
    return {
      type: 'match', icon: '🔑',
      title: { ar: 'صِل المحطة بمفتاحها', en: 'Match the station to its key' },
      prompt: { ar: 'صِل كلَّ محطةٍ بالمفتاح الذي تعلَّمناه فيها', en: 'Connect each station with the key we learned in it' },
      pairs: chosen.map(st => ({ a: A.title(st), b: A.key(st) })),
    };
  }

  /* MATCH: ayah snippet ↔ surah ref */
  function matchAyahRef(S) {
    const items = S.filter(st => A.ayah(st) && A.ref(st));
    if (items.length < 3) return matchTitleKey(S);
    const chosen = pick(items, Math.min(4, items.length));
    return {
      type: 'match', icon: '🌟',
      title: { ar: 'صِل الآية بسورتها', en: 'Match the ayah to its surah' },
      prompt: { ar: 'صِل كلَّ آيةٍ بالسورة التي وردت فيها', en: 'Connect each ayah with the surah it is from' },
      pairs: chosen.map(st => ({ a: { ar: ayahSnippet(A.ayah(st)), en: ayahSnippet(A.ayah(st)) }, b: A.ref(st) })),
    };
  }

  /* MCQ set: pick the TRUE statement */
  function mcqTruth(S, n, optCount) {
    const P = pools(S);
    const items = S.filter(st => A.truth(st));
    const qs = [];
    for (const st of pick(items, Math.min(n, items.length))) {
      const t = A.title(st);
      const stem = t ? { ar: 'في درسِ «' + t.ar + '»: أيُّ عبارةٍ صحيحة؟', en: 'In “' + t.en + '”: which statement is correct?' }
                     : { ar: 'أيُّ العبارةِ صحيحة؟', en: 'Which statement is correct?' };
      const q = mcq(stem, A.truth(st), P.falsehoods, optCount || 4);
      if (q) qs.push(q);
    }
    return qs.length ? { type: 'mcq', icon: '✅', title: { ar: 'اختَر الصحيحة', en: 'Pick the correct one' }, prompt: { ar: 'في كلِّ سؤالٍ اختَر العبارةَ الصحيحة', en: 'In each question pick the correct statement' }, questions: qs } : null;
  }

  /* MCQ set: which key belongs to this station */
  function mcqKey(S, n) {
    const P = pools(S);
    const items = S.filter(st => A.title(st) && A.key(st));
    const qs = [];
    for (const st of pick(items, Math.min(n, items.length))) {
      const t = A.title(st);
      const q = mcq({ ar: 'ما مِفتاحُ محطّةِ «' + t.ar + '»؟', en: 'What is the key of “' + t.en + '”?' }, A.key(st), P.keys, 4);
      if (q) qs.push(q);
    }
    return qs.length ? { type: 'mcq', icon: '🗝️', title: { ar: 'مفاتيح المحطّات', en: 'Station keys' }, prompt: { ar: 'اختَر المفتاحَ الصحيحَ لكلِّ محطّة', en: 'Choose the correct key for each station' }, questions: qs } : null;
  }

  /* MCQ set (harder): choose the correct statement; distractors are misconceptions */
  function mcqCreed(S, n) {
    const P = pools(S);
    const items = S.filter(st => A.truth(st));
    const qs = [];
    for (const st of pick(items, Math.min(n, items.length))) {
      const t = A.title(st);
      const stem = t ? { ar: 'في درسِ «' + t.ar + '»: اختَرِ العبارةَ الصحيحة', en: 'In “' + t.en + '”: choose the correct statement' }
                     : { ar: 'ميِّز العبارةَ الصحيحةَ من الأفكارِ الخاطئة:', en: 'Tell the correct statement from the wrong ideas:' };
      const q = mcq(stem, A.truth(st), P.falsehoods, 4);
      if (q) qs.push(q);
    }
    return qs.length ? { type: 'mcq', icon: '🛡️', title: { ar: 'الإجابة الصحيحة', en: 'The correct answer' }, prompt: { ar: 'ميِّز العبارةَ الصحيحةَ من الأفكارِ الخاطئة', en: 'Tell the correct statement from the wrong ideas' }, questions: qs } : null;
  }

  /* MAZE: a winding path of "doors"; each door is an MCQ — built from a question source */
  function maze(S, n, source, meta) {
    const built = source(S, n);
    if (!built || !built.questions || !built.questions.length) return null;
    return {
      type: 'maze', icon: '🌀',
      title: meta.title, prompt: meta.prompt,
      questions: built.questions.slice(0, n).map(q => {
        const correctOpt = q.options[q.correct];
        const others = q.options.filter((_, i) => i !== q.correct);
        const three = shuffle([correctOpt, ...pick(others, 2)]);
        return { q: q.q, options: three, correct: three.indexOf(correctOpt) };
      }),
    };
  }

  /* ════════ LEVEL ASSEMBLY ════════ */
  function buildLevel(S, level, qCount) {
    const n = qCount || 5;
    let acts = [];
    if (level === 'beginner') {
      /* EASY for little kids: matching + true/false + one short 3-option MCQ. No maze, minimal reading. */
      acts = [
        matchNameMeaning(S) || matchTitleKey(S),
        trueFalse(S, 4) || mcqTruth(S, 3, 3),
        mcqTruth(S, 3, 3) || matchTitleKey(S),
      ];
    } else if (level === 'intermediate') {
      acts = [
        matchTitleKey(S) || matchNameMeaning(S),
        mcqTruth(S, 4, 4) || mcqKey(S, 4),
        maze(S, 4, mcqTruth, { title: { ar: 'متاهة العبارات', en: 'Statements Maze' }, prompt: { ar: 'اعبُر المتاهةَ باختيار العبارة الصحيحة عند كل باب', en: 'Cross the maze by choosing the correct statement at each door' } }),
      ];
    } else { /* advanced */
      acts = [
        matchAyahRef(S),
        mcqCreed(S, n),
        maze(S, n, mcqCreed, { title: { ar: 'متاهة الإتقان', en: 'Mastery Maze' }, prompt: { ar: 'اعبُر المتاهةَ بتمييزِ العبارةِ الصحيحةِ عند كلِّ باب', en: 'Cross the maze by identifying the correct statement at each door' } }),
      ];
    }
    let out = acts.filter(Boolean);
    /* Guarantee a complete level (3 activities). Chapter-meta stations only carry
       title + key (name + hook), so truth/ayah/toolJob-based games yield null and
       a level can come up short. Pad with key-based mechanics that ALWAYS work on
       title+key data, so every corner's exam is complete per level. */
    if (out.length < 3) {
      const fillers = [
        matchTitleKey(S),
        mcqKey(S, n),
        maze(S, n, mcqKey, { title: { ar: 'متاهة المفاتيح', en: 'Keys Maze' }, prompt: { ar: 'اعبُر المتاهةَ باختيارِ المفتاحِ الصحيحِ عند كلِّ باب', en: 'Cross the maze by choosing the correct key at each door' } }),
        matchNameMeaning(S),
        mcqTruth(S, n),
      ];
      for (const f of fillers) { if (out.length >= 3) break; if (f) out.push(f); }
    }
    return out;
  }

  /* ════════════════════════════════════════════════════════════════
     ACADEMY · richer, journey-tailored activity set (kids 8–12)
     9 activities / journey, difficulty-graded across 3 levels:
       beginner (تعرّف):     memory · true-false · catch
       intermediate (فهم):   sort · match · fill-the-blank
       advanced (تطبيق/تمييز): order · MCQ-creed · maze
     Every item is generated from the journey's own vetted stations.
     ════════════════════════════════════════════════════════════════ */

  /* academy match pairs come as {tool, job} → normalise to {a,b} */
  A.toolJob = st => (st.match && Array.isArray(st.match.pairs))
    ? st.match.pairs.map(p => ({ a: L(p.tool), b: L(p.job) })).filter(p => p.a && p.b) : null;
  A.num = st => st.num || 0;

  /* MEMORY: flip & match a short card to its meaning (3 pairs / 6 tiles) */
  function memCards(S) {
    const all = [];
    S.forEach(st => { const tj = A.toolJob(st); if (tj) tj.forEach(p => all.push(p)); });
    const short = all.filter(p => p.a.ar.length <= 24 && p.b.ar.length <= 40);
    const poolP = short.length >= 3 ? short : all;
    if (poolP.length < 3) return null;
    return {
      type: 'memory', icon: '🃏',
      title: { ar: 'ذاكرةُ البِطاقات', en: 'Card Memory' },
      prompt: { ar: 'اقلِبِ البِطاقتَينِ وابحَث عنِ البِطاقةِ ومَعناها', en: 'Flip two tiles and find each card with its meaning' },
      pairs: pick(poolP, 3),
    };
  }

  /* TRUE / FALSE: bust = true · claim = false (up to 6 statements) */
  function trueFalse(S, max) {
    const items = [];
    S.forEach(st => {
      if (A.truth(st)) items.push({ text: A.truth(st), answer: true });
      if (A.falsehood(st)) items.push({ text: A.falsehood(st), answer: false });
    });
    if (items.length < 4) return null;
    return {
      type: 'truefalse', icon: '⚖️',
      title: { ar: 'صحٌّ أم خطأ؟', en: 'True or False?' },
      prompt: { ar: 'اقرأِ العِبارةَ ثُمَّ قَرِّر: صحٌّ أم خطأ؟', en: 'Read the statement, then decide: true or false?' },
      items: pick(items, Math.min(max || 6, items.length)),
    };
  }

  /* CATCH: catch the right surah for a flashing ayah (timed · up to 5 rounds) */
  function catchGame(S) {
    const items = S.filter(st => A.ayah(st) && A.ref(st));
    if (items.length < 3) return null;
    const refs = items.map(A.ref);
    const rounds = [];
    pick(items, Math.min(5, items.length)).forEach(st => {
      const correct = A.ref(st);
      const ds = pick(refs.filter(r => r && r.ar !== correct.ar), 3);
      if (ds.length < 2) return;
      rounds.push({ clue: { ar: ayahSnippet(A.ayah(st)), en: ayahSnippet(A.ayah(st)) }, ayah: true, options: shuffle([correct, ...ds.slice(0, 3)]), correct });
    });
    if (!rounds.length) return null;
    return {
      type: 'catch', icon: '🎯',
      title: { ar: 'اصطَدِ السُّورة', en: 'Catch the Surah' },
      prompt: { ar: 'اصطَدِ السُّورةَ الصحيحةَ لِلآيةِ قَبلَ نَفادِ الوَقت!', en: 'Catch the right surah for the ayah before time runs out!' },
      rounds,
    };
  }

  /* MCQ (easy, untimed): which surah is this ayah from? — replaces the timed Catch game */
  function mcqAyahSurah(S, n) {
    const items = S.filter(st => A.ayah(st) && A.ref(st));
    if (items.length < 3) return null;
    const refs = items.map(A.ref).filter(Boolean);
    const qs = [];
    for (const st of pick(items, Math.min(n || 5, items.length))) {
      const snip = ayahSnippet(A.ayah(st));
      const stem = { ar: 'مِن أيِّ سورةٍ هذِهِ الآية؟ ﴿' + snip + '﴾', en: 'Which surah is this ayah from? “' + snip + '”' };
      const q = mcq(stem, A.ref(st), refs, 4);
      if (q) qs.push(q);
    }
    return qs.length ? { type: 'mcq', icon: '🌟', title: { ar: 'آيةٌ وسورتُها', en: 'Ayah & its Surah' }, prompt: { ar: 'اختَرِ السورةَ الصحيحةَ لِكُلِّ آية', en: 'Choose the correct surah for each ayah' }, questions: qs } : null;
  }

  /* SORT: drop each card into «حقيقة» or «فكرة خاطئة» (≈6 cards, balanced) */
  function sortGame(S) {
    const T = [], F = [];
    S.forEach(st => { if (A.truth(st)) T.push({ text: A.truth(st), basket: 'true' }); if (A.falsehood(st)) F.push({ text: A.falsehood(st), basket: 'false' }); });
    if (T.length < 2 || F.length < 2) return null;
    const cards = shuffle([...pick(T, 3), ...pick(F, 3)]);
    return {
      type: 'sort', icon: '🧺',
      title: { ar: 'فَرِّز في السِّلال', en: 'Sort into Baskets' },
      prompt: { ar: 'ضَع كُلَّ بِطاقةٍ في سَلَّتِها: حَقيقةٌ أم فِكرةٌ خاطئة؟', en: 'Put each card in its basket: a truth or a wrong idea?' },
      baskets: [{ id: 'true', label: { ar: '✅ حَقيقة', en: '✅ Truth' } }, { id: 'false', label: { ar: '❌ فِكرةٌ خاطئة', en: '❌ Wrong idea' } }],
      cards,
    };
  }

  /* FILL: complete the missing word in a station's key sentence (tap an option) */
  const AR_STOP = new Set(['من', 'في', 'عن', 'إلى', 'على', 'أن', 'إن', 'الذي', 'التي', 'هو', 'هي', 'هذا', 'هذه', 'مع', 'لا', 'ما', 'كل', 'أو', 'بل', 'قد', 'كان', 'به', 'بها', 'لك', 'لكن', 'بلا', 'أنا', 'لِي', 'كُلّ']);
  const stripDia = s => String(s).replace(/[\u064B-\u0652\u0670\u0640]/g, '');
  function blankWord(text) {
    const raw = String(text).replace(/[«»﴿﴾.،,:؛!؟]/g, ' ').split(/\s+/).filter(Boolean);
    let best = null, bestLen = 0;
    raw.forEach(w => { const c = stripDia(w); if (c.length > bestLen && c.length >= 4 && !AR_STOP.has(c)) { best = w; bestLen = c.length; } });
    return best;
  }
  function fillGame(S) {
    const items = S.filter(st => A.key(st));
    if (items.length < 3) return null;
    const poolAr = [], poolEn = [];
    items.forEach(st => { const a = blankWord(A.key(st).ar); const e = blankWord(A.key(st).en); if (a) poolAr.push(a); if (e) poolEn.push(e); });
    const qs = [];
    pick(items, Math.min(5, items.length)).forEach(st => {
      const k = A.key(st), bAr = blankWord(k.ar), bEn = blankWord(k.en);
      if (!bAr) return;
      const ansAr = bAr, ansEn = bEn || bAr;
      const dAr = pick(poolAr.filter(w => w !== ansAr), 3);
      const dEn = pick(poolEn.filter(w => w !== ansEn), 3);
      if (dAr.length < 2) return;
      const opts = [{ ar: ansAr, en: ansEn }];
      for (let i = 0; i < Math.min(3, dAr.length); i++) opts.push({ ar: dAr[i], en: dEn[i] || dEn[0] || ansEn });
      const sh = shuffle(opts);
      qs.push({ q: { ar: k.ar.replace(ansAr, '▦▦▦'), en: (bEn ? k.en.replace(ansEn, '▦▦▦') : k.en) }, options: sh, correct: sh.findIndex(o => o.ar === ansAr) });
    });
    if (qs.length < 2) return null;
    return {
      type: 'fill', icon: '✍️',
      title: { ar: 'أكمِلِ الفَراغ', en: 'Fill the Blank' },
      prompt: { ar: 'اختَرِ الكَلِمةَ المُناسِبةَ لِلفَراغ', en: 'Choose the right word for the blank' },
      questions: qs,
    };
  }

  /* ORDER: arrange 4 consecutive stations in journey sequence */
  function orderGame(S) {
    const items = S.filter(st => A.title(st) && A.num(st));
    if (items.length < 4) return null;
    const sorted = items.slice().sort((a, b) => A.num(a) - A.num(b));
    const start = Math.floor(Math.random() * Math.max(1, sorted.length - 4 + 1));
    const seq = sorted.slice(start, start + 4);
    return {
      type: 'order', icon: '🔢',
      title: { ar: 'رَتِّبِ المَحطّات', en: 'Order the Stations' },
      prompt: { ar: 'رَتِّب هذِهِ المَحطّاتِ بِحَسَبِ تَسَلسُلِها في الرِّحلة', en: 'Arrange these stations in their journey order' },
      items: seq.map((st, k) => ({ text: A.title(st), pos: k })),
    };
  }

  /* assemble one academy level (always 3 distinct mechanics, fixed order) */
  function buildAcademyLevel(S, level) {
    let acts;
    if (level === 'beginner') acts = [memCards(S), trueFalse(S), mcqAyahSurah(S, 5) || matchAyahRef(S)];
    else if (level === 'intermediate') acts = [sortGame(S), matchTitleKey(S), fillGame(S)];
    else acts = [orderGame(S), mcqCreed(S, 5), maze(S, 5, mcqCreed, { title: { ar: 'متاهةُ الإتقان', en: 'Mastery Maze' }, prompt: { ar: 'اعبُرِ المتاهةَ بِتَمييزِ العِبارةِ الصحيحةِ عِندَ كُلِّ باب', en: 'Cross the maze by identifying the correct statement at each door' } })];
    return acts.map(a => a || mcqTruth(S, 5) || matchTitleKey(S)).filter(Boolean);
  }

  window.QUIZ_GEN = { buildLevel, buildAcademyLevel };
})();
