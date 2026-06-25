/* engine/chapter.js — one station's lesson. Loads data/chapters/<id>.js dynamically.
   Rooms: Knowledge · Story · Memorize · Activities · Treasures
   Activity kinds: quiz · order · match · trueFalse · whoAmI (chapter picks any 2–4) */
(function(){
  const $ = s => document.querySelector(s);
  const params = new URLSearchParams(location.search);
  const chId = params.get('id') || 'nuh';
  let C = null, lang = Progress.lang(), room='knowledge', page=0, epIdx=0;
  let actIdx = 0, solved = {};            // activities state
  const orderState = {};                   // per-order-activity shuffle
  const PTS = 10;                          // points per question (like the Little District house)
  let scoreKeys = {};                      // keys already awarded this session
  function scoreStore(){ return 'hisn-score-'+chId; }
  /* Universal icon resolver — never render an empty sticker/emblem.
     Order: known SVG in window.ICONS → raw emoji/glyph as-is → default 🏷️. */
  function ICO(key, dflt){
    if(key && window.ICONS && window.ICONS[key]) return window.ICONS[key];
    if(key && !/^[a-z0-9_]+$/i.test(key)) return key;   // already an emoji/glyph
    return dflt || '🏷️';
  }
  window.__ICO = ICO;
  function loadScore(){ try{ const o=JSON.parse(localStorage.getItem(scoreStore()))||{}; scoreKeys=o.k||{}; return o.t||0; }catch(e){ scoreKeys={}; return 0; } }
  function saveScore(t){ localStorage.setItem(scoreStore(), JSON.stringify({t:t,k:scoreKeys})); }
  function award(key){
    if(scoreKeys[key]) return;            // never double-count the same question
    scoreKeys[key]=1; let t=loadScoreTotal()+PTS; saveScore(t); updateScoreUI(t);
    try{ Progress.addPoints((C&&C.era)||'prophets', 'ch:'+chId+':'+key, PTS); }catch(e){}
  }
  function loadScoreTotal(){ try{ return (JSON.parse(localStorage.getItem(scoreStore()))||{}).t||0; }catch(e){ return 0; } }
  function scoreMax(){ const a=C.activities||[]; let n=0; a.forEach(act=>{ if(act.type==='quiz')n+=act.questions.length; else if(act.type==='trueFalse')n+=act.items.length; else if(act.type==='match')n+=act.pairs.length; else n+=1; }); return n*PTS; }
  function updateScoreUI(t){ const e=$('#actScore'); if(e) e.textContent=t; const mx=$('#actScoreMax'); if(mx) mx.textContent=scoreMax(); }

  const ROOMS = [
    { id:'knowledge', ic:'📖', label:{ar:'المعرفة',en:'Knowledge'} },
    { id:'story',     ic:'📜', label:{ar:'القصة',en:'Story'} },
    { id:'lessons',   ic:'💎', label:{ar:'الدروس',en:'Lessons'} },
    { id:'memorize',  ic:'🧠', label:{ar:'الحفظ',en:'Memorize'} },
    { id:'activities',ic:'🎯', label:{ar:'الأنشطة',en:'Activities'} },
    { id:'treasures', ic:'🏅', label:{ar:'الكنوز',en:'Treasures'} },
  ];
  // Prophets era uses evocative, child-friendly "gate" names (like the Little District houses)
  const PROPHET_LABELS = {
    knowledge: {ar:'بوابةُ المعرفة', en:'Knowledge Gate'},
    story:     {ar:'كان يا ما كان', en:'Stories'},
    lessons:   {ar:'دروسٌ وعِبَر',  en:'Lessons'},
    memorize:  {ar:'كلماتٌ من نور', en:'Words of Light'},
    activities:{ar:'ميدانُ الأبطال', en:'Heroes\u2019 Arena'},
    treasures: {ar:'حقيبةُ الكنوز', en:'Treasure Bag'},
  };
  const ACT_META = {
    quiz:     { ic:'❓', label:{ar:'اختبار',en:'Quiz'} },
    order:    { ic:'🔢', label:{ar:'ترتيب',en:'Order'} },
    match:    { ic:'🔗', label:{ar:'توصيل',en:'Match'} },
    trueFalse:{ ic:'⚖️', label:{ar:'صح أم خطأ',en:'True / False'} },
    whoAmI:   { ic:'🕵️', label:{ar:'من أنا؟',en:'Who am I?'} },
  };
  const T = o => (o && (o[lang]!==undefined?o[lang]:o.ar)) ?? '';
  const titleBar = t => `<div class="room-title"><span class="bar"></span>${t}</div>`;
  // Optional per-chapter ROOM WHITELIST (lighter chapters, e.g. the Beautiful-Names
  // series). Defaults to ALL rooms when C.rooms is not an array — existing chapters
  // are completely unaffected. nextRoomId walks only the active set so the in-room
  // “next” buttons skip any room that was dropped.
  function activeRooms(){ const w = C && Array.isArray(C.rooms) ? C.rooms : null; return w ? ROOMS.filter(r=>w.includes(r.id)) : ROOMS; }
  function nextRoomId(cur){ const a=activeRooms().map(r=>r.id), i=a.indexOf(cur); return (i>=0 && i<a.length-1) ? a[i+1] : null; }
  // A “Name of Allah” station (الأسماء والصفات) — its Story room becomes the
  // “Signs of the Name” room with two switchable presentations (journey / wonder-wall).
  function isName(){ return !!(C && C.kind==='name'); }
  // A storytelling “lesson” station (e.g. برّ الوالدين) — reuses the dual-mode story
  // room and the warm room labels, but with lesson-appropriate titles & a hadith card.
  function isLesson(){ return !!(C && C.kind==='lesson'); }
  function isStory(){ return isName() || isLesson(); }
  function nameStoryMode(){ try{ return localStorage.getItem('hisn-namestory-mode')||'journey'; }catch(e){ return 'journey'; } }
  // Prophets AND Seerah use the warm, evocative "gate" presentation (rich tab
  // headings, Words-of-Light gem cards, earned stickers). Heroes keeps its own.
  function richEra(){ const e = C && (C.era||'prophets'); return e==='prophets' || e==='seerah'; }
  // A Seerah chronological *event station* (birth → farewell) — NOT the
  // "getting to know the Prophet" aspects. These merge the old Knowledge Gate
  // and the Story into ONE story-led room: "الرِّحلة / The Journey". The immersive
  // story is the spine, the Did-You-Know hook is woven in at the start, and the
  // duplicated who-paragraph / facts / timeline are dropped.
  function isSeerahStation(){
    if(!C || (C.era||'')!=='seerah') return false;
    const era = (window.HISN && HISN.eras && HISN.eras.seerah) || {};
    return Array.isArray(era.nodes) && era.nodes.some(n=>n.id===chId);
  }
  // A Seerah "getting to know the Prophet" *aspect* (whoami, khasais, shamail …)
  // The 7 "get to know the Prophet ﷺ" profile stations. They now live in the Pure
  // Heart corner (حبّ الرسول), but they keep era:'seerah' in their data — so detect
  // them by id, independent of which era page hosts them. (manzuma is separate → audio.)
  const PROPHET_ASPECTS = ['whoami','khasais','shamail','dalail','khuluq_nas','khuluq_khalq','khuluq_rabb'];
  function isSeerahAspect(){ return !!(C && PROPHET_ASPECTS.includes(chId)); }
  // The audio "المنظومة المنيرة" station — a single-room listen-&-repeat poem.
  function isManzuma(){ return !!(C && C.manzuma); }
  let profileChoice = null;   // the aspect "think with me" choice, set while rendering

  /* ───────────── room tabs ───────────── */
  function tabs(){
    const isProph = richEra();
    const seerahStn = isSeerahStation();
    const seerahAsp = isSeerahAspect();
    // The audio poem station is a single room — just one tab.
    if(isManzuma()){
      $('#chTabs').innerHTML = `<button class="ch-tab on" data-room="knowledge"><span class="ic">🎵</span><span>${lang==='ar'?'المنظومة المنيرة':'The Poem'}</span></button>`;
      const b=$('#chTabs').querySelector('.ch-tab'); if(b) b.onclick=()=>go('knowledge');
      return;
    }
    // Seerah event stations merge Knowledge → Story (drop Knowledge tab).
    // Seerah aspects merge Story → Knowledge (drop Story tab; relabel Knowledge).
    let rooms = activeRooms();
    if(seerahStn) rooms = ROOMS.filter(r=>r.id!=='knowledge');
    else if(seerahAsp) rooms = ROOMS.filter(r=>r.id!=='story');
    $('#chTabs').innerHTML = rooms.map(r=>{
      let lbl = (isProph&&PROPHET_LABELS[r.id])||r.label;
      let ic = r.ic;
      if(seerahStn && r.id==='story'){ lbl = {ar:'الرِّحلة', en:'The Journey'}; ic='🗺️'; }
      if(seerahAsp && r.id==='knowledge'){ lbl = {ar:'تعرّفْ إليه ﷺ', en:'Get to Know Him'}; ic='✨'; }
      if(isStory() && r.id==='memorize'){ lbl = {ar:'كلماتٌ من نور', en:'Words of Light'}; ic='🌟'; }
      if(isStory() && r.id==='activities'){ lbl = {ar:'ميدانُ الأبطال', en:"Heroes' Arena"}; }
      if(isLesson() && r.id==='knowledge'){ lbl = {ar:'لماذا وكيف؟', en:'Why & How?'}; ic='💡'; }
      if(isLesson() && r.id==='story'){ lbl = {ar:'حكايات', en:'Tales'}; ic='📖'; }
      return `<button class="ch-tab ${r.id===room?'on':''}" data-room="${r.id}"><span class="ic">${ic}</span><span>${T(lbl)}</span></button>`; }).join('');
    $('#chTabs').querySelectorAll('.ch-tab').forEach(b=>b.onclick=()=>go(b.dataset.room));
  }
  function render(){
    $('#chBody').innerHTML = ({knowledge:roomKnowledge,story:roomStory,lessons:roomLessons,memorize:roomMemorize,activities:roomActivities,treasures:roomTreasures}[room])();
    tabs();
    if(room==='knowledge'){ if(isManzuma()) bindManzuma(); else if(isSeerahAspect()) bindProfile(); }
    if(room==='story') bindStory();
    if(room==='memorize') bindPledge();
    if(room==='activities') bindActChips();
    if(room==='treasures') bindTreasure();
    stationNav();
    heroNav();
  }

  /* ─── top hero prev/next ICONS — quick jump between stations (الجانب العلوي) ───
     Shown for the Immortal Days (battles) AND Heroes of Islam eras, at the top
     corners of the hero, so kids can hop hero→hero / battle→battle without scrolling. */
  function heroNav(){
    const nav = $('#chHeroNav'); if(!nav) return;
    const {list,i,prev,next,eraId} = siblings();
    if((eraId!=='battles' && eraId!=='heroes') || i<0){ nav.hidden = true; nav.innerHTML=''; return; }
    nav.hidden = false;
    const chev = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;
    const right = chev('M9 5l7 7-7 7');   // ▶ points to the inline-start side (back, in RTL)
    const left  = chev('M15 5l-7 7 7 7'); // ◀ points to the inline-end side (forward, in RTL)
    const nm = n => (n.name && (n.name[lang]||n.name.ar)) || '';
    const isB = eraId==='battles';
    const prevLbl = isB ? (lang==='ar'?'المعركةُ السابقة':'Previous battle') : (lang==='ar'?'البطلُ السابق':'Previous hero');
    const nextLbl = isB ? (lang==='ar'?'المعركةُ التالية':'Next battle') : (lang==='ar'?'البطلُ التالي':'Next hero');
    const prevBtn = prev
      ? `<a class="hnav-btn" href="chapter.html?id=${prev.id}" title="${prevLbl}: ${nm(prev)}" aria-label="${prevLbl+': '+nm(prev)}">${right}</a>`
      : `<span class="hnav-btn disabled" aria-hidden="true">${right}</span>`;
    const nextBtn = next
      ? `<a class="hnav-btn" href="chapter.html?id=${next.id}" title="${nextLbl}: ${nm(next)}" aria-label="${nextLbl+': '+nm(next)}">${left}</a>`
      : `<span class="hnav-btn disabled" aria-hidden="true">${left}</span>`;
    nav.innerHTML = `${prevBtn}${nextBtn}`;
  }

  /* ─── prev / next STATION navigation (arrows between stations, like a journey) ───
     Finds this chapter in its era's ordered list and links to the neighbours.
     Stations live in era.nodes; the Seerah "aspect" chapters live in era.aspects —
     each set navigates within itself. */
  function siblings(){
    const eras = (window.HISN && HISN.eras) || {};
    const find = e => {
      if(!e) return null;
      if(Array.isArray(e.nodes)){ const i=e.nodes.findIndex(n=>n.id===chId); if(i>=0) return {list:e.nodes, i, eraId:e.id}; }
      if(Array.isArray(e.aspects)){ const i=e.aspects.findIndex(n=>n.id===chId); if(i>=0) return {list:e.aspects, i, eraId:e.id}; }
      return null;
    };
    // Prefer the chapter's declared era, then scan the rest (battles live in their
    // own era even though battle chapters still carry era:'heroes').
    let r = find(eras[C.era||'prophets']);
    if(!r){ for(const k in eras){ r = find(eras[k]); if(r) break; } }
    if(!r) return { list:[], i:-1, prev:null, next:null, eraId:null };
    const {list,i,eraId} = r;
    return { list, i, eraId, prev: i>0?list[i-1]:null, next:(i>=0&&i<list.length-1)?list[i+1]:null };
  }
  // The era a station truly belongs to (battle chapters keep era:'heroes' but
  // live in the battles era's node list).
  function homeEra(){ return siblings().eraId || (C && C.era) || 'prophets'; }
  function isBattle(){ return homeEra()==='battles'; }

  function stationNav(){
    const nav = $('#chStationNav'); if(!nav) return;
    const {list,i,prev,next} = siblings();
    if(i<0){ nav.innerHTML=''; return; }              // not part of an ordered set
    const nm = n => (n.name && (n.name[lang]||n.name.ar)) || '';
    // RTL convention used across this app: ← means "forward / next", → means "back".
    const prevBtn = prev
      ? `<a class="stn-btn" href="chapter.html?id=${prev.id}"><span class="stn-arr">→</span><span class="stn-txt"><small>${lang==='ar'?'المحطّةُ السابقة':'Previous'}</small><b>${nm(prev)}</b></span></a>`
      : `<span class="stn-btn ghost" aria-hidden="true"></span>`;
    const nextBtn = next
      ? `<a class="stn-btn next" href="chapter.html?id=${next.id}"><span class="stn-txt"><small>${lang==='ar'?'المحطّةُ التالية':'Next station'}</small><b>${nm(next)}</b></span><span class="stn-arr">←</span></a>`
      : `<span class="stn-btn ghost" aria-hidden="true"></span>`;
    nav.innerHTML = `${prevBtn}<span class="stn-pos">${i+1} / ${list.length}</span>${nextBtn}`;
  }

  /* ───────────── KNOWLEDGE ───────────── */
  function roomKnowledge(){
    if(isManzuma()) return roomManzuma();
    if(isSeerahAspect()) return roomProfile();
    const k=C.knowledge;
    const battle = isBattle();
    // Battles drop the "life journey" timeline; everyone else keeps it.
    const tl = (!battle && k.timeline&&k.timeline.length) ? `<div class="timeline-mini">${k.timeline.map((t,i)=>`<div class="tl-row"><span class="tl-dot">${i+1}</span><div class="tl-body"><b>${T(t.when)}</b><p>${T(t.what)}</p></div></div>`).join('')}</div>` : '';
    // Battles add a "commander of the battle" highlight card.
    const cm = k.commander;
    const cmdr = cm ? `<div class="room-title" style="font-size:.98rem"><span class="bar"></span>${lang==='ar'?'قائدُ المعركة':'The Commander'}</div>
      <div class="cmdr-card"><div class="cmdr-emblem">${window.ICONS[cm.icon||C.icon]||window.ICONS[C.icon]||''}</div>
        <div class="cmdr-body"><b class="cmdr-name">${T(cm.name)}</b>${cm.role?`<span class="cmdr-role">${T(cm.role)}</span>`:''}<p>${T(cm.bio)}</p></div></div>` : '';
    const roomTtl = isName() ? (lang==='ar'?'تعرّفْ على الاسم':'Meet the Name') : isLesson() ? (C.knowledgeTitle?T(C.knowledgeTitle):(lang==='ar'?'هيّا نفهم':'Let’s understand')) : battle ? (lang==='ar'?'بوابةُ المعرفة':'Knowledge Gate') : (lang==='ar'?'مَن هو؟':'Who is this?');
    const startLbl = isName() ? (lang==='ar'?'لنبدأ الرحلة ←':'Start the journey →') : isLesson() ? (lang==='ar'?'إلى الحكايات ←':'To the tales →') : battle ? (lang==='ar'?'إلى قصص المعركة ←':'To the battle stories →') : (lang==='ar'?'لنبدأ القصة ←':'Start the story →');
    return `<div class="room">${titleBar(roomTtl)}
      <div class="dyk"><span class="dyk-ic">💡</span><div><b>${lang==='ar'?'هل تعلم؟':'Did you know?'}</b><p>${T(k.didYouKnow)}</p></div></div>
      <div class="card"><p class="who">${T(k.who)}</p></div>
      <ul class="facts">${k.facts.map((f,i)=>`<li><span class="n">${i+1}</span><p>${T(f)}</p></li>`).join('')}</ul>
      ${cmdr}
      ${tl?`<div class="room-title" style="font-size:.98rem"><span class="bar"></span>${lang==='ar'?'رحلةُ حياته':'His life journey'}</div>${tl}`:''}
      <div class="ayah-card"><div class="ayah">${k.ayah.ar}</div><div class="ayah-ref">${T(k.ayah.ref)}</div></div>
      <button class="btn btn-primary" style="width:100%;margin-top:.3rem" data-go="story">${startLbl}</button></div>`;
  }

  /* ───────────── SEERAH ASPECT · PROFILE — the warm, kid-friendly "Get to know him ﷺ" ─────────────
     Story + Knowledge merged into one playful spread that helps children LOVE the
     Prophet ﷺ as a teacher of children. The journey companion (بَطَل, featureless,
     per adab) narrates warmly; facts become tap-to-flip cards; the story becomes
     bright illustrated panels; a recurring "why we love him" heart-section ties his
     character back to the child; then the think-with-me question and closing ayah. */
  const KIDS_WARM   = ['#F2A23E','#EC7A45','#4CA86B','#2FA59A','#9A72CF','#E0689A'];
  const FLIP_GLYPH  = ['✨','🌟','💫','⭐','🌙','🌸'];
  // Universal, authentic "the Prophet ﷺ and children" cards (smile & salam · play &
  // carry · respect feelings & honest joking · gentleness, never harsh).
  const KIDS_LOVE = [
    { ic:'😊', c:'#F2A23E', t:{ar:'يَبتسمُ ويُسلِّمُ علينا',en:'He smiled & greeted us'},
      d:{ar:'كان ﷺ يبتسمُ في وجهِ كلِّ طفل، ويبدأُ الصِّغارَ بالسلامِ قبلَهم. كان لقاؤه فرحاً!',en:'He ﷺ smiled at every child and greeted the little ones first. Meeting him was a joy!'} },
    { ic:'🤗', c:'#EC7A45', t:{ar:'يَحملُنا ويُلاعبُنا',en:'He carried & played with us'},
      d:{ar:'كان يحملُ الأطفالَ ويُقبِّلُهم، حتى حملَ الحسنَ والحسينَ على ظهرِه وهو يُصلّي ويلعبُ معهما.',en:'He carried children and kissed them — Al-Hasan & Al-Husayn even rode on his back while he prayed and played with them.'} },
    { ic:'🐦', c:'#4CA86B', t:{ar:'يَحترمُ مشاعرَنا',en:'He respected our feelings'},
      d:{ar:'كان يُمازحُ الأطفالَ بصدقٍ ولا يقولُ إلا الحقّ. حزِنَ طفلٌ على عصفورِه فواساه: «يا أبا عُمَير، ما فعلَ النُّغَير؟».',en:'He joked truthfully with children. When a boy grieved for his little bird, he comforted him: "O Abu Umayr, what happened to the little bird?"'} },
    { ic:'🕊️', c:'#2FA59A', t:{ar:'رفيقٌ لا يَصرخُ ولا يَضرب',en:'Gentle — never shouts or hits'},
      d:{ar:'كان رفيقاً رحيماً، ما ضربَ طفلاً قطّ ولا صرخَ في وجهِه، وقال: «مَن لا يَرحَمْ لا يُرحَم».',en:'He was gentle and merciful — he never hit a child nor shouted at one, and said: "Whoever shows no mercy will not be shown mercy."'} },
  ];
  function kguide(text, end){
    return `<div class="kguide ${end?'kguide-end':''}">
      <div class="kguide-av">${window.HISN_SVG.guide}<span class="kguide-lantern">🏮</span></div>
      <div class="kguide-bubble"><span class="kguide-name">${T(HISN.guide.name)}</span><p>${text}</p></div></div>`;
  }
  function roomProfile(){
    const k=C.knowledge||{};
    profileChoice = null;
    const intro = lang==='ar'
      ? `هيّا يا صديقي الصغير 🌟 تخيّلْ لو رأيتَ حبيبَنا محمداً ﷺ! دعني أحكي لك عنه حتى تُحبَّه كما أحبَّه أصحابُه.`
      : `Come, little friend 🌟 imagine if you saw our beloved Muhammad ﷺ! Let me tell you about him, so you love him as his companions did.`;
    const guide = kguide(intro);
    const hook = k.didYouKnow ? `<div class="dyk kids-dyk"><span class="dyk-ic">💡</span><div><b>${lang==='ar'?'هل تعلم؟':'Did you know?'}</b><p>${T(k.didYouKnow)}</p></div></div>` : '';
    const hero = k.who ? `<div class="profile-hero kids-hero"><div class="profile-emblem">${window.ICONS[C.icon]||''}</div><div class="profile-who"><p class="who">${T(k.who)}</p></div></div>` : '';
    // Facts → tap-to-flip cards
    const facts = (k.facts||[]);
    const flips = facts.map((f,i)=>`<button class="flip" data-i="${i}" style="--fc:${KIDS_WARM[i%KIDS_WARM.length]};animation-delay:${.05+i*.05}s">
        <span class="flip-inner">
          <span class="flip-face flip-front"><span class="flip-glyph">${FLIP_GLYPH[i%FLIP_GLYPH.length]}</span><span class="flip-cta">${lang==='ar'?'اضغطْ لتكتشف':'Tap to discover'}</span></span>
          <span class="flip-face flip-back"><span class="flip-n">${i+1}</span><span class="flip-txt">${T(f)}</span></span>
        </span></button>`).join('');
    const factsSec = flips ? `<div class="profile-sec">${lang==='ar'?'اضغطْ لتكتشف ✨':'Tap to discover ✨'}</div><div class="flip-grid">${flips}</div>` : '';
    // Story → bright illustrated panels (all at once)
    const pages = Array.isArray(C.story)?C.story:[];
    const panels = pages.map((p,i)=>{
      if(p.choice && !profileChoice) profileChoice = p.choice;
      const art = (window.HISN_SCENES[p.scene])||window.HISN_SCENES.idols;
      return `<div class="vpanel kids-panel ${i%2?'rev':''}" style="--pc:${KIDS_WARM[i%KIDS_WARM.length]};animation-delay:${.05+i*.06}s"><div class="vpanel-art">${art}</div><div class="vpanel-body"><p>${T(p.text)}</p></div></div>`;
    }).join('');
    const panelsSec = panels ? `<div class="profile-sec">${lang==='ar'?'هيّا نتأمّلُ معاً':'Let’s look closer'}</div><div class="vpanels">${panels}</div>` : '';
    // Why we love him — the heart of the "teacher of children" message
    const loveCards = KIDS_LOVE.map((c,i)=>`<div class="love-card" style="--lc:${c.c};animation-delay:${.05+i*.06}s"><span class="love-ic">${c.ic}</span><div class="love-body"><b>${T(c.t)}</b><p>${T(c.d)}</p></div></div>`).join('');
    const loveSec = `<div class="profile-sec heart">${lang==='ar'?'لماذا نُحبُّه؟ 💛':'Why we love him 💛'}</div><div class="love-grid">${loveCards}</div>`;
    const choiceSec = profileChoice ? `<div class="profile-sec">${lang==='ar'?'فكّرْ معي':'Think with me'}</div>
      <div class="story-choice profile-choice" data-answered="0">
        <div class="sc-q"><span>🤔</span><div>${T(profileChoice.q)}</div></div>
        <div class="sc-opts">${profileChoice.opts.map((o,j)=>`<button class="sc-opt" data-i="${j}" data-c="${o.c?1:0}">${T(o.t)}</button>`).join('')}</div>
        <div class="sc-exp"></div></div>` : '';
    const ayah = k.ayah ? `<div class="ayah-card kids-ayah"><div class="ayah">${k.ayah.ar}</div><div class="ayah-ref">${T(k.ayah.ref)}</div></div>` : '';
    const outro = kguide(lang==='ar'
      ? `أحبَبتَه؟ أنا أيضاً أُحبُّه ﷺ! هيّا نأخذْ منه أجملَ الدروس ونكونُ مثلَه 💫`
      : `Do you love him now? I love him too ﷺ! Let’s take his beautiful lessons and be like him 💫`, true);
    return `<div class="room profile-room kids">${titleBar(lang==='ar'?'تعرّفْ إليه ﷺ':'Get to Know Him ﷺ')}
      ${guide}${hook}${hero}${factsSec}${panelsSec}${loveSec}${choiceSec}${ayah}${outro}
      <button class="btn btn-primary kids-cta" data-go="lessons">${lang==='ar'?'إلى الدروس ←':'To Lessons →'}</button></div>`;
  }
  function bindProfile(){
    document.querySelectorAll('.profile-room.kids .flip').forEach(c=>c.onclick=()=>c.classList.toggle('on'));
    const box=document.querySelector('.profile-choice');
    if(!box || !profileChoice) return;
    box.querySelectorAll('.sc-opt').forEach(b=>b.onclick=()=>{
      if(box.dataset.answered==='1') return; box.dataset.answered='1';
      box.querySelectorAll('.sc-opt').forEach(o=>o.disabled=true);
      const opt=profileChoice.opts[+b.dataset.i];
      b.classList.add(opt.c?'correct':'wrong');
      if(!opt.c){ const right=box.querySelector('.sc-opt[data-c="1"]'); right&&right.classList.add('correct'); }
      const exp=box.querySelector('.sc-exp'); exp.textContent=T(opt.exp||(profileChoice.opts.find(o=>o.c)||{}).exp||{}); exp.classList.add('show');
    });
  }

  /* ───────────── SEERAH · المنظومة المنيرة (audio listen-&-repeat poem) ─────────────
     A single warm room: Batal's intro · an audio player with slow/normal speed for
     memorizing · the verses as karaoke lines that light up in time with the audio
     (tap a verse to jump there) · tap-a-word glossary for hard words. Gracefully
     shows a "audio coming soon" note if the recording isn't in place yet. */
  function mzFmt(s){ s=Math.max(0,Math.floor(s||0)); const m=Math.floor(s/60), ss=s%60; return m+':'+(ss<10?'0':'')+ss; }
  function roomManzuma(){
    const m=C.manzuma||{}, verses=m.verses||[];
    const guide = kguide(m.intro?T(m.intro):'');
    const banner = m.audioPending ? `<div class="mz-banner">🎙️ <p>${lang==='ar'
        ? 'الأبياتُ جاهزةٌ للقراءة! ما إنْ يُضافُ التسجيلُ الصوتيُّ (assets/manzuma.mp3) حتى يُضيءَ كلُّ بيتٍ في وقتِه أثناءَ السماع — والتوقيتُ يُضبَطُ بسهولة.'
        : 'The verses are ready to read! Once the recording (assets/manzuma.mp3) is added, each verse will light up on cue while you listen — timings are easy to tune.'}</p></div>` : '';
    const reciter = (m.reciter && T(m.reciter)) ? `<span class="mz-reciter">🎙️ ${T(m.reciter)}</span>` : '';
    const player = `<div class="mz-player" id="mzPlayer" style="--ec:${C.accent};--ec2:${C.accent2}">
      <audio id="mzAudio" preload="metadata" src="${m.audio||''}"></audio>
      <button class="mz-play" id="mzPlay" aria-label="play">▶</button>
      <div class="mz-mid">
        <div class="mz-top"><span class="mz-label">🎵 ${lang==='ar'?'المنظومة المنيرة':'The Luminous Poem'}</span>${reciter}</div>
        <input type="range" class="mz-seek" id="mzSeek" min="0" max="1000" value="0" aria-label="seek">
        <div class="mz-time"><span id="mzCur">0:00</span><span id="mzDur">0:00</span></div>
      </div></div>
      <div class="mz-speed"><span class="mz-sp-lbl">${lang==='ar'?'سرعةُ الترديد':'Repeat speed'}</span>
        <button class="mz-rate" data-r="0.75">🐢 ${lang==='ar'?'بطيء':'Slow'}</button>
        <button class="mz-rate on" data-r="1">🎵 ${lang==='ar'?'عادي':'Normal'}</button></div>`;
    const list = `<div class="mz-verses" id="mzVerses">${verses.map((v,i)=>{
      const gloss = (v.gloss&&v.gloss.length) ? `<div class="mz-gloss">${v.gloss.map((g,j)=>`<button class="mz-word" data-i="${i}" data-g="${j}"><span class="mw-w">${T(g.w)}</span><span class="mw-m">${T(g.m)}</span></button>`).join('')}</div>` : '';
      const parts = T(v).split('❁');
      const text = parts.length===2
        ? `<p class="mz-vtext bayt"><span class="sadr">${parts[0].trim()}</span><span class="sep">❁</span><span class="ajz">${parts[1].trim()}</span></p>`
        : `<p class="mz-vtext">${T(v)}</p>`;
      return `<div class="mz-verse" data-i="${i}" data-t="${v.t||0}">
          <span class="mz-vn">${i+1}</span>
          <div class="mz-vbody">${text}${gloss}</div>
          <span class="mz-vplay" aria-hidden="true">▶</span></div>`;
    }).join('')}</div>`;
    const tip = `<p class="mz-tip">💡 ${lang==='ar'?'اضغطْ على أيِّ بيتٍ لِتسمعَه، وعلى أيِّ كلمةٍ صعبةٍ لِتعرفَ معناها.':'Tap any verse to hear it, and any hard word to learn its meaning.'}</p>`;
    const done = Progress.isDone(C.id);
    const cta = `<button class="btn btn-primary mz-done ${done?'done':''}" id="mzDone" style="width:100%;margin-top:1.1rem">${done?(lang==='ar'?'✓ أتممتُ الاستماع — أحسنت!':'✓ Listened — well done!'):(lang==='ar'?'أتممتُ الاستماعَ والترديد 🎵':'I listened & repeated 🎵')}</button>`;
    return `<div class="room mz-room">${titleBar(lang==='ar'?'المنظومة المنيرة':'The Luminous Poem')}
      ${guide}${banner}${player}${tip}${list}${cta}</div>`;
  }
  function bindManzuma(){
    const a=$('#mzAudio'); if(!a) return;
    const play=$('#mzPlay'), seek=$('#mzSeek'), cur=$('#mzCur'), dur=$('#mzDur');
    const TKEY='hisn-mz-time-'+C.id, RKEY='hisn-mz-rate';
    let rate=parseFloat(localStorage.getItem(RKEY))||1; a.playbackRate=rate;
    document.querySelectorAll('.mz-rate').forEach(b=>{
      b.classList.toggle('on', parseFloat(b.dataset.r)===rate);
      b.onclick=()=>{ rate=parseFloat(b.dataset.r); a.playbackRate=rate; localStorage.setItem(RKEY,rate);
        document.querySelectorAll('.mz-rate').forEach(x=>x.classList.toggle('on',x===b)); };
    });
    const saved=parseFloat(localStorage.getItem(TKEY))||0;
    a.addEventListener('loadedmetadata',()=>{ dur.textContent=mzFmt(a.duration); if(saved>0&&saved<a.duration){ a.currentTime=saved; } });
    play.onclick=()=>{ if(a.paused) a.play().catch(()=>{}); else a.pause(); };
    a.addEventListener('play',()=>{ play.textContent='⏸'; play.classList.add('on'); });
    a.addEventListener('pause',()=>{ play.textContent='▶'; play.classList.remove('on'); });
    a.addEventListener('ended',()=>{ play.textContent='▶'; play.classList.remove('on'); });
    seek.oninput=()=>{ if(a.duration) a.currentTime=(seek.value/1000)*a.duration; };
    const verses=[...document.querySelectorAll('.mz-verse')];
    a.addEventListener('timeupdate',()=>{
      if(a.duration){ seek.value=(a.currentTime/a.duration)*1000; }
      cur.textContent=mzFmt(a.currentTime);
      localStorage.setItem(TKEY, a.currentTime);
      let idx=-1; for(let i=0;i<verses.length;i++){ if(parseFloat(verses[i].dataset.t||0)<=a.currentTime+0.04) idx=i; else break; }
      verses.forEach((v,i)=>v.classList.toggle('on', i===idx));
      if(idx>=0) mzScrollIntoView(verses[idx]);
    });
    verses.forEach(v=>{ const body=v.querySelector('.mz-vbody'), pl=v.querySelector('.mz-vplay');
      const jump=(e)=>{ if(e.target.closest('.mz-word')) return; const t=parseFloat(v.dataset.t)||0; a.currentTime=t; a.play().catch(()=>{}); };
      body.onclick=jump; if(pl) pl.onclick=jump; });
    document.querySelectorAll('.mz-word').forEach(w=>w.onclick=(e)=>{ e.stopPropagation(); w.classList.toggle('show'); });
    a.addEventListener('error',()=>{
      const pl=$('#mzPlayer'); if(pl && !pl.querySelector('.mz-err')){ const d=document.createElement('div');
        d.className='mz-err'; d.textContent=lang==='ar'?'🔇 سيُضاف التسجيلُ الصوتيُّ قريباً — يمكنك قراءةُ الأبياتِ الآن.':'🔇 Audio coming soon — you can read the verses now.';
        pl.appendChild(d); }
    });
    const cb=$('#mzDone');
    if(cb) cb.onclick=()=>{ if(Progress.isDone(C.id)) return;
      Progress.grant(C.id,{ stars:3, medal:{icon:C.icon, title:C.name} }); confetti(); xpBurst(); header();
      cb.classList.add('done'); cb.textContent=lang==='ar'?'✓ أتممتُ الاستماع — أحسنت!':'✓ Listened — well done!'; };
  }
  function mzScrollIntoView(v){ const c=$('#mzVerses'); if(!c) return;
    const cr=c.getBoundingClientRect(), vr=v.getBoundingClientRect();
    if(vr.top<cr.top+24 || vr.bottom>cr.bottom-24){ c.scrollTop += (vr.top-cr.top) - c.clientHeight/2 + v.offsetHeight/2; }
  }

  /* ───────────── STORY (multi-episode journey) ───────────── */
  function episodes(){
    // Prefer the prophet's full multi-story set (data/stories/<id>.js) when present
    // so the Story tab shows EVERY story as a journey stop. Falls back to the
    // chapter's own `story` (episodic if it has `pages`, else a single flat episode).
    const set = window.HISN_STORIES && HISN_STORIES[C.id];
    if(Array.isArray(set) && set.length && set[0] && set[0].pages) return set;
    if(Array.isArray(C.story) && C.story[0] && C.story[0].pages) return C.story;
    return [{ title:null, pages:C.story }];
  }
  // A prophet with a rich data/stories/<id>.js set shows its Story room as a
  // grid of POPPING cards (each opens the StoryReader modal) instead of inline.
  function storySet(){ const set=window.HISN_STORIES&&HISN_STORIES[C.id]; return (Array.isArray(set)&&set.length&&set[0]&&set[0].pages)?set:null; }
  const CHST_KEY = ()=> 'hisn-chst-'+C.id;
  function chstDone(){ try{ return JSON.parse(localStorage.getItem(CHST_KEY()))||{}; }catch(e){ return {}; } }
  function roomStory(){
    if(isStory()) return roomNameStory();
    const seerahStn = isSeerahStation();
    const set = storySet();
    // Seerah stations read inline (consistent across all of them) even when a rich
    // story set exists — they never show the tappable card grid.
    if(set && !seerahStn) return roomStoryGrid(set);
    const eps=episodes(), ep=eps[epIdx], s=ep.pages, sc=s[page], multi=eps.length>1;
    const choice = sc.choice ? `<div class="story-choice" data-answered="0">
        <div class="sc-q"><span>🤔</span><div>${T(sc.choice.q)}</div></div>
        <div class="sc-opts">${sc.choice.opts.map((o,i)=>`<button class="sc-opt" data-i="${i}" data-c="${o.c?1:0}">${T(o.t)}</button>`).join('')}</div>
        <div class="sc-exp"></div></div>` : '';
    const picker = multi ? `<div class="ep-label">${lang==='ar'?'محطّاتُ الرحلة':'Journey stops'}</div>
      <div class="ep-picker">${eps.map((e,i)=>`<button class="ep-chip ${i===epIdx?'on':''} ${epIdx>i?'seen':''}" data-ep="${i}"><span class="ep-n">${i+1}</span>${T(e.title)}</button>`).join('')}</div>` : '';
    const epTitle = ep.title ? `<div class="ep-title"><span>${epIdx+1}</span><h4>${T(ep.title)}</h4></div>` : '';
    const lastEp = epIdx>=eps.length-1, lastPg = page>=s.length-1;
    const nextLabel = lastPg ? (lastEp ? (lang==='ar'?'إلى الدروس ←':'To Lessons →') : (lang==='ar'?'المحطّةُ التالية ←':'Next stop →')) : (lang==='ar'?'التالي':'Next');
    const prevDisabled = (page===0 && epIdx===0);
    // The Journey (Seerah): weave the "Did you know?" hook above the very first
    // page so the room opens with a spark of knowledge, then flows into the story.
    const hook = (seerahStn && epIdx===0 && page===0 && C.knowledge && C.knowledge.didYouKnow)
      ? `<div class="dyk journey-hook"><span class="dyk-ic">💡</span><div><b>${lang==='ar'?'هل تعلم؟':'Did you know?'}</b><p>${T(C.knowledge.didYouKnow)}</p></div></div>`
      : '';
    const roomTtl = seerahStn ? (lang==='ar'?'الرِّحلة':'The Journey') : (lang==='ar'?'رحلةُ القصّة':'The Story Journey');
    return `<div class="room">${titleBar(roomTtl)}
      <div class="reader-row"><button class="btn-reader" id="openReader">📖 ${lang==='ar'?'وضع القراءة (مع التشكيل)':'Reading mode (with tashkeel)'}</button></div>
      ${picker}${epTitle}${hook}
      <div class="story-card"><div class="story-scene">${(window.HISN_SCENES[sc.scene])||window.HISN_SCENES.idols}</div><p>${T(sc.text)}</p></div>
      ${choice}
      <div class="story-dots">${s.map((_,i)=>`<span class="${i===page?'on':''}"></span>`).join('')}</div>
      <div class="story-nav"><button class="btn btn-ghost" id="sPrev" ${prevDisabled?'disabled':''}>${lang==='ar'?'السابق':'Back'}</button>
        <button class="btn btn-primary" id="sNext">${nextLabel}</button></div></div>`;
  }
  function roomStoryGrid(set){
    const dn = chstDone(), total=set.length, n=set.filter((_,i)=>dn[i]).length;
    const cards = set.map((s,i)=>{
      const isDone=!!dn[i], qn=(s.quiz&&s.quiz.length)||0, pn=(s.pages&&s.pages.length)||0;
      return `<button class="psc ${isDone?'done':''}" data-i="${i}" style="animation-delay:${.04+i*.05}s">
        <span class="psc-ic">${s.icon||'📖'}</span>
        <span class="psc-body"><span class="psc-title">${T(s.title)}</span>
          <span class="psc-meta"><span class="psc-chip">📄 ${pn} ${lang==='ar'?'صفحة':'pages'}</span>${qn?`<span class="psc-chip">🏅 ${qn}</span>`:''}${isDone?`<span class="psc-chip" style="color:#2E9E5B">✓ ${lang==='ar'?'تمّت':'done'}</span>`:''}</span></span>
        <span class="psc-go">›</span></button>`;
    }).join('');
    return `<div class="room">${titleBar(lang==='ar'?'القصص':'Stories')}
      <p class="lessons-intro">${lang==='ar'?'اضغطْ على أيِّ قصّةٍ لتُفتَحَ أمامك 📖✨':'Tap any story to open it 📖✨'}</p>
      <div class="psg-track"><span>${lang==='ar'?'تقدّمك':'Progress'}</span><span>${n}/${total}</span></div>
      <div class="psg-bar"><i style="width:${total?n/total*100:0}%"></i></div>
      <div class="psg">${cards}</div>
      <button class="btn btn-primary" style="width:100%;margin-top:1.1rem" data-go="lessons">${lang==='ar'?'إلى الدروس ←':'To Lessons →'}</button></div>`;
  }
  function bindStoryGrid(set){
    document.querySelectorAll('.psc').forEach(btn=>btn.onclick=()=>{
      StoryReader.open(set[+btn.dataset.i], C.accent||'#E67E22', lang, (type)=>{
        if(type==='complete'){ const d=chstDone(); d[+btn.dataset.i]=1; localStorage.setItem(CHST_KEY(),JSON.stringify(d)); render(); }
      });
    });
  }
  function bindStory(){
    if(isStory()){ bindNameStory(); return; }
    if(storySet() && !isSeerahStation()){ bindStoryGrid(storySet()); return; }
    const eps=episodes(), s=eps[epIdx].pages;
    $('#sPrev').onclick=()=>{ if(page>0){page--;render();} else if(epIdx>0){epIdx--;page=eps[epIdx].pages.length-1;render();} };
    $('#sNext').onclick=()=>{ if(page<s.length-1){page++;render();} else if(epIdx<eps.length-1){epIdx++;page=0;render();} else {epIdx=0;page=0;go('lessons');} };
    document.querySelectorAll('.ep-chip').forEach(c=>c.onclick=()=>{ epIdx=+c.dataset.ep; page=0; render(); });
    const ob=$('#openReader'); if(ob) ob.onclick=openReader;
    const box=document.querySelector('.story-choice');
    if(box) box.querySelectorAll('.sc-opt').forEach(b=>b.onclick=()=>{
      if(box.dataset.answered==='1') return; box.dataset.answered='1';
      const sc=eps[epIdx].pages[page], opt=sc.choice.opts[+b.dataset.i];
      box.querySelectorAll('.sc-opt').forEach(o=>o.disabled=true);
      b.classList.add(opt.c?'correct':'wrong');
      if(!opt.c){ const right=box.querySelector('.sc-opt[data-c="1"]'); right&&right.classList.add('correct'); }
      const exp=box.querySelector('.sc-exp'); exp.textContent=T(opt.exp||(sc.choice.opts.find(o=>o.c)||{}).exp||{}); exp.classList.add('show');
    });
  }

  /* ─────────── NAME-OF-ALLAH STORY ROOM (آثارُ الاسم) ──────────
     The Name's meaning through symbolic signs in creation, daily life & the
     prophets' stories. TWO switchable presentations (a built-in design choice):
       • journey — calm paginated scenes, one sign at a time.
       • wonder  — a tap-to-reveal “wall of wonders”, explored in any order.
     The choice is persisted in localStorage so it survives reloads. */
  function ctaToNext(){
    const nr=nextRoomId('story');
    const L={knowledge:{ar:'المعرفة',en:'Knowledge'},memorize:{ar:'الحفظ',en:'Memorize'},activities:{ar:'الأنشطة',en:'Activities'},lessons:{ar:'الدروس',en:'Lessons'},treasures:{ar:'الكنوز',en:'Treasures'}}[nr]||{ar:'المتابعة',en:'Continue'};
    return lang==='ar'?`إلى ${L.ar} ←`:`To ${L.en} →`;
  }
  function nameChoiceHTML(){
    const ch=C.storyChoice; if(!ch) return '';
    return `<div class="profile-sec name-think">${lang==='ar'?'فكّرْ معي 🤔':'Think with me 🤔'}</div>
      <div class="story-choice name-choice" data-answered="0">
        <div class="sc-q"><span>🤔</span><div>${T(ch.q)}</div></div>
        <div class="sc-opts">${ch.opts.map((o,i)=>`<button class="sc-opt" data-i="${i}" data-c="${o.c?1:0}">${T(o.t)}</button>`).join('')}</div>
        <div class="sc-exp"></div></div>`;
  }
  function nameJourney(pages){
    if(!pages.length) return '';
    if(page>=pages.length) page=pages.length-1;
    const sc=pages[page], art=(window.HISN_SCENES[sc.scene])||window.HISN_SCENES.garden;
    const tag = sc.tag?`<span class="nsc-tag">✨ ${T(sc.tag)}</span>`:'';
    const title = sc.title?`<h4 class="nsc-title">${T(sc.title)}</h4>`:'';
    const last = page>=pages.length-1;
    const choice = last ? nameChoiceHTML() : '';
    const nextLbl = last ? ctaToNext() : (lang==='ar'?'التالي':'Next');
    return `<div class="story-card name-card"><div class="story-scene">${art}</div>${tag}${title}<p>${T(sc.text)}</p></div>
      ${choice}
      <div class="story-dots">${pages.map((_,i)=>`<span class="${i===page?'on':''}"></span>`).join('')}</div>
      <div class="story-nav"><button class="btn btn-ghost" id="nPrev" ${page===0?'disabled':''}>${lang==='ar'?'السابق':'Back'}</button>
        <button class="btn btn-primary" id="nNext">${nextLbl}</button></div>`;
  }
  function nameWonder(pages){
    const cards = pages.map((p,i)=>{
      const art=(window.HISN_SCENES[p.scene])||window.HISN_SCENES.garden;
      return `<button class="nstory-card" data-i="${i}" style="animation-delay:${.04+i*.05}s">
        <span class="nsc-art">${art}</span>
        <span class="nsc-head">${p.title?T(p.title):''}</span>
        <span class="nsc-reveal"><span class="nsc-reveal-in">${T(p.text)}</span></span>
        <span class="nsc-cta">${lang==='ar'?'اضغطْ لتكتشف ✨':'Tap to discover ✨'}</span>
      </button>`;
    }).join('');
    return `<div class="nstory-wall">${cards}</div>${nameChoiceHTML()}
      <div class="story-nav single"><button class="btn btn-primary" id="nNext">${ctaToNext()}</button></div>`;
  }
  function roomNameStory(){
    const pages = Array.isArray(C.story)?C.story:[];
    const mode = nameStoryMode();
    const intro = C.storyIntro ? `<p class="lessons-intro nstory-intro">${T(C.storyIntro)}</p>` : '';
    const toggle = `<div class="nstory-toggle" role="tablist" aria-label="${lang==='ar'?'طريقة العرض':'View'}">
        <button class="nstory-seg ${mode==='journey'?'on':''}" data-mode="journey">🗺️ ${lang==='ar'?'رحلةُ المشاهد':'Scene journey'}</button>
        <button class="nstory-seg ${mode==='wonder'?'on':''}" data-mode="wonder">✨ ${lang==='ar'?'لوحةُ العجائب':'Wonder wall'}</button>
      </div>`;
    const body = mode==='wonder' ? nameWonder(pages) : nameJourney(pages);
    const storyTtl = C.storyTitle ? T(C.storyTitle) : (isName()?(lang==='ar'?'آثارُ الاسم':'Signs of the Name'):(lang==='ar'?'حكاياتٌ وعِبَر':'Tales & Lessons'));
    return `<div class="room name-story">${titleBar(storyTtl)}
      ${intro}${toggle}${body}</div>`;
  }
  function bindNameChoice(){
    const box=document.querySelector('.name-story .name-choice'), ch=C.storyChoice;
    if(!box||!ch) return;
    box.querySelectorAll('.sc-opt').forEach(b=>b.onclick=()=>{
      if(box.dataset.answered==='1')return; box.dataset.answered='1';
      box.querySelectorAll('.sc-opt').forEach(o=>o.disabled=true);
      const opt=ch.opts[+b.dataset.i]; b.classList.add(opt.c?'correct':'wrong');
      if(!opt.c){ const r=box.querySelector('.sc-opt[data-c="1"]'); r&&r.classList.add('correct'); }
      const exp=box.querySelector('.sc-exp'); exp.textContent=T(opt.exp||(ch.opts.find(o=>o.c)||{}).exp||{}); exp.classList.add('show');
    });
  }
  function bindNameStory(){
    document.querySelectorAll('.nstory-seg').forEach(b=>b.onclick=()=>{ try{localStorage.setItem('hisn-namestory-mode',b.dataset.mode);}catch(e){} page=0; render(); });
    document.querySelectorAll('.nstory-card').forEach(c=>c.onclick=()=>c.classList.toggle('on'));
    const pages=Array.isArray(C.story)?C.story:[];
    const prev=$('#nPrev'), next=$('#nNext');
    if(prev) prev.onclick=()=>{ if(page>0){page--;render();} };
    if(next) next.onclick=()=>{ if(nameStoryMode()==='journey' && page<pages.length-1){page++;render();} else { const nr=nextRoomId('story')||'memorize'; page=0; go(nr); } };
    bindNameChoice();
  }

  /* ───────────── READING MODE (وضع القراءة) ───────────── */
  function openReader(){
    let fs = parseFloat(localStorage.getItem('hisn-reader-fs')) || 1.5;
    const eps=episodes();
    const readerHTML = eps.map((ep,ei)=>{
      const head = ep.title ? `<div class="reader-ep"><span>${ei+1}</span>${T(ep.title)}</div>` : '';
      const pgs = ep.pages.map(p=>{
        const scene = window.HISN_SCENES[p.scene] ? `<div class="reader-scene">${window.HISN_SCENES[p.scene]}</div>` : '';
        return `${scene}<p class="reader-page">${T(p.text)}</p>`;
      }).join('');
      const sep = ei<eps.length-1 ? `<div class="reader-sep">۞</div>` : '';
      return head + pgs + sep;
    }).join('');
    const ov = document.createElement('div');
    ov.className='reader-overlay'; ov.id='readerOv';
    ov.innerHTML = `<div class="reader-sheet" style="--ec:${C.accent};--ec2:${C.accent2}">
      <div class="reader-controls">
        <button id="rdMinus" aria-label="smaller">A−</button>
        <button id="rdPlus" aria-label="larger">A+</button>
        <button class="rd-x" id="rdClose" aria-label="close">✕</button>
      </div>
      <div class="reader-head">
        <div class="reader-emblem">${window.ICONS[C.icon]||''}</div>
        <h2>${C.name[lang]}</h2><p>${C.tag[lang]}</p>
        <div class="reader-rule">۝</div>
      </div>
      <div class="reader-body" id="readerBody" style="--rfs:${fs}rem">${readerHTML}</div>
      <div class="reader-end">۞ تَمَّتِ القِصَّة ۞</div>
      <div class="reader-tip">${lang==='ar'?'اقرأِ القصةَ بصوتٍ جميلٍ وتأمّلْ معانيها':'Read the story aloud and reflect on its meaning'}</div>
      <div class="reader-tip" style="font-size:.74rem;opacity:.75">${lang==='ar'?'✱ سردٌ مبسّطٌ بتصرّفٍ يناسبُ الأطفال، مع الحفاظِ على أصلِ الحادثةِ الثابتِ ومصادرِها.':'✱ A simplified retelling for children, preserving the authentic core of the event and its sources.'}</div>
    </div>`;
    document.body.appendChild(ov);
    document.body.style.overflow='hidden';
    const close=()=>{ ov.style.animation='fadeIn .2s reverse forwards'; setTimeout(()=>{ ov.remove(); document.body.style.overflow=''; },180); };
    ov.querySelector('#rdClose').onclick=close;
    ov.onclick=(e)=>{ if(e.target===ov) close(); };
    const body=ov.querySelector('#readerBody');
    const setFs=(v)=>{ fs=Math.min(2.6,Math.max(1.1,v)); body.style.setProperty('--rfs',fs+'rem'); localStorage.setItem('hisn-reader-fs',fs); };
    ov.querySelector('#rdPlus').onclick=()=>setFs(fs+0.15);
    ov.querySelector('#rdMinus').onclick=()=>setFs(fs-0.15);
    document.addEventListener('keydown', function esc(e){ if(e.key==='Escape'){ close(); document.removeEventListener('keydown',esc);} });
  }

  /* ───────────── LESSONS (الدروس) ───────────── */
  function roomLessons(){
    const L=C.lessons||[];
    const traits=C.traits||[];
    const strip = traits.length ? `<div class="char-strip">${traits.map(t=>`<span class="char-chip">⭐ ${T(t)}</span>`).join('')}</div>` : '';
    const isSeerah = C && C.era==='seerah';
    const intro = isSeerah
      ? (lang==='ar'
          ? `ماذا نتعلّمُ مِن هذه المحطّة؟ في سيرةِ النبيِّ ﷺ دروسٌ وعِبَرٌ لكلِّ بطل.`
          : `What do we learn here? The life of the Prophet ﷺ is full of lessons for every hero.`)
      : (lang==='ar'
          ? `ماذا نتعلّمُ مِن ${C.name.ar.split(' ')[0]}؟ كلُّ نبيٍّ قدوةٌ لنا في أخلاقِه وأفعالِه.`
          : `What do we learn from ${C.name.en}? Every prophet is a role model in character and deeds.`);
    return `<div class="room">${titleBar(lang==='ar'?'دروسٌ مِن حياته':'Lessons from his life')}
      <p class="lessons-intro">${intro}</p>
      ${strip}
      <div class="lesson-list">${L.map((l,i)=>`<div class="lesson-card" style="animation-delay:${i*.06}s">
        <div class="lesson-ic" style="--lc:${l.color||'#E67E22'};--lc2:${shade(l.color||'#E67E22')}">${l.icon||'🌟'}</div>
        <div class="lesson-body"><h5>${T(l.title)}</h5><p>${T(l.body)}</p>
          ${l.apply?`<div class="lesson-apply"><span class="la-lbl">${lang==='ar'?'أعيشُها':'Live it'}</span><p>${T(l.apply)}</p></div>`:''}</div>
      </div>`).join('')}</div>
      <button class="btn btn-primary" style="width:100%;margin-top:1rem" data-go="memorize">${lang==='ar'?'إلى الحفظ ←':'To Memorize →'}</button></div>`;
  }

  /* ───────────── MEMORIZE ───────────── */
  function roomMemorize(){
    const m=C.memorize;
    if(richEra()) return roomMemGems(m);
    const hads = m.hadiths || (m.hadith?[m.hadith]:[]);
    const hadCards = hads.map(h=>`<div class="mem-card hadith-card"><div class="lbl">${lang==='ar'?'حديث':'Hadith'}</div><div class="txt">${h.ar}</div><div class="ref">${T(h.ref)}</div></div>`).join('');
    const ayahCard = m.ayah?`<div class="mem-card"><div class="lbl">${lang==='ar'?'آية':'Verse'}</div><div class="txt">${m.ayah.ar}</div><div class="ref">${T(m.ayah.ref)}</div></div>`:'';
    const duaCard = m.dua?`<div class="mem-card"><div class="lbl">${lang==='ar'?'دعاء':"Du'a"}</div><div class="txt">${m.dua.ar}</div><div class="ref">${T(m.dua.ref)}</div></div>`:'';
    return `<div class="room">${titleBar(isStory()?(lang==='ar'?'كلماتٌ من نور':'Words of Light'):(lang==='ar'?'احفظ معي':'Memorize with me'))}
      ${ayahCard}${hadCards}${duaCard}
      <div class="pledge"><h4>🛡️ ${T(m.pledge.title)}</h4>${m.pledge.lines.map((l,i)=>`<div class="pledge-line" data-i="${i}"><span class="box">✓</span><p>${T(l)}</p></div>`).join('')}</div>
      <button class="btn btn-primary" style="width:100%;margin-top:.9rem" data-go="activities">${lang==='ar'?'إلى الأنشطة ←':'To Activities →'}</button></div>`;
  }
  // Prophets "Words of Light": checkable gem cards + memorized counter (like the Little District house)
  function memKey(){ return 'hisn-mem-'+C.id; }
  function memDone(){ try{ return JSON.parse(localStorage.getItem(memKey()))||{}; }catch(e){ return {}; } }
  function roomMemGems(m){
    const dn=memDone();
    const gems=[{c:'verse',h:lang==='ar'?'🌿 آيةٌ كريمة':'🌿 A noble verse',t:m.ayah.ar,r:T(m.ayah.ref)}];
    const hads = m.hadiths || (m.hadith?[m.hadith]:[]);
    hads.forEach(h=>gems.push({c:'hadith',h:lang==='ar'?'🕊️ حديثٌ شريف':'🕊️ A noble hadith',t:h.ar,r:T(h.ref)}));
    gems.push({c:'dua',h:lang==='ar'?'🤲 دعاء':"🤲 A du'a",t:m.dua.ar,r:T(m.dua.ref)});
    const rows=gems.map((g,i)=>`<label class="mem-item ${g.c} ${dn[i]?'checked':''}" data-i="${i}">
        <input type="checkbox" ${dn[i]?'checked':''}>
        <span class="mem-c"><span class="mem-head">${g.h}</span><span class="text">${g.t}</span><span class="ref">${g.r}</span></span></label>`).join('');
    const n=gems.filter((_,i)=>dn[i]).length;
    const pledge=`<div class="pledge"><h4>🛡️ ${T(m.pledge.title)}</h4>${m.pledge.lines.map((l,i)=>`<div class="pledge-line" data-i="${i}"><span class="box">✓</span><p>${T(l)}</p></div>`).join('')}</div>`;
    return `<div class="room">${titleBar(lang==='ar'?'كلماتٌ من نور':'Words of Light')}
      <div class="mem-box"><h4>✨ ${lang==='ar'?'احفظْ هذه الدُّرر':'Memorize these gems'}</h4>
        <div class="mem-list">${rows}</div>
        <div class="mem-score">📖 ${n} / ${gems.length} ${lang==='ar'?'محفوظة':'memorized'}</div></div>
      ${pledge}
      <button class="btn btn-primary" style="width:100%;margin-top:.9rem" data-go="activities">${lang==='ar'?'إلى الأنشطة ←':'To Activities →'}</button></div>`;
  }
  function bindPledge(){
    const box=document.querySelector('.mem-box');
    if(box) box.querySelectorAll('.mem-item').forEach(it=>{ const cb=it.querySelector('input');
      cb.onchange=()=>{ it.classList.toggle('checked',cb.checked); const d=memDone(); d[+it.dataset.i]=cb.checked?1:0; localStorage.setItem(memKey(),JSON.stringify(d));
        const n=box.querySelectorAll('.mem-item input:checked').length, tot=box.querySelectorAll('.mem-item').length;
        const sc=box.querySelector('.mem-score'); if(sc) sc.innerHTML=`📖 ${n} / ${tot} ${lang==='ar'?'محفوظة':'memorized'}`; }; });
    document.querySelectorAll('.pledge-line').forEach(l=>l.onclick=()=>l.classList.toggle('on'));
  }

  /* ───────────── ACTIVITIES (picker + stage) ───────────── */
  function roomActivities(){
    loadScore();
    try{ Progress.registerMax((C&&C.era)||'prophets', 'chmax:'+chId, scoreMax()); }catch(e){}
    const acts=C.activities;
    const chips=acts.map((a,i)=>`<button class="act-chip ${i===actIdx?'on':''} ${solved[i]?'solved':''}" data-i="${i}"><span class="ai">${ACT_META[a.type].ic}</span>${T(ACT_META[a.type].label)}</button>`).join('');
    const count=acts.filter((_,i)=>solved[i]).length;
    return `<div class="room">${titleBar(isStory()?(lang==='ar'?'ميدانُ الأبطال':"Heroes' Arena"):(lang==='ar'?'الأنشطة':'Activities'))}
      <p class="act-hint">${lang==='ar'?`أكملِ الألعاب لتجمعَ كنزك (${count}/${acts.length})`:`Finish the games to earn your treasure (${count}/${acts.length})`}</p>
      <div class="act-score">⭐ ${lang==='ar'?'نقاطك':'Your score'}: <b><span id="actScore">${loadScoreTotal()}</span></b> / <span id="actScoreMax">${scoreMax()}</span> ${lang==='ar'?`(${PTS} لكلِّ سؤال)`:`(${PTS} per question)`}</div>
      <div class="act-tabs">${chips}</div>
      <div class="act-stage" id="actStage">${renderAct(acts[actIdx],actIdx)}</div>
      <div class="act-done-msg" id="actMsg"></div>
      <button class="btn btn-primary" style="width:100%;margin-top:1rem" data-go="treasures">${lang==='ar'?'إلى الكنوز ←':'To Treasures →'}</button></div>`;
  }
  function bindActChips(){
    document.querySelectorAll('.act-chip').forEach(c=>c.onclick=()=>{ actIdx=+c.dataset.i; render(); });
    bindActStage();
  }
  function renderAct(a,idx){
    return ({quiz:actQuiz,order:actOrder,match:actMatch,trueFalse:actTF,whoAmI:actWho}[a.type])(a,idx);
  }
  function bindActStage(){
    const a=C.activities[actIdx];
    ({quiz:bindQuiz,order:bindOrder,match:bindMatch,trueFalse:bindTF,whoAmI:bindWho}[a.type])(a,actIdx);
  }
  function markSolved(idx){
    if(solved[idx]) return; solved[idx]=true;
    const chip=document.querySelector(`.act-chip[data-i="${idx}"]`); chip&&chip.classList.add('solved');
    const a=C.activities, count=a.filter((_,i)=>solved[i]).length;
    const msg=$('#actMsg'); if(msg) msg.textContent = count>=a.length ? (lang==='ar'?'🎉 أكملتَ كلَّ الألعاب! اذهبْ للكنوز':'🎉 All games done! Head to Treasures') : (lang==='ar'?'أحسنت! ✓':'Well done! ✓');
    const hint=document.querySelector('.act-hint'); if(hint) hint.textContent = lang==='ar'?`أكملِ الألعاب لتجمعَ كنزك (${count}/${a.length})`:`Finish the games to earn your treasure (${count}/${a.length})`;
  }

  // quiz
  function actQuiz(a){
    return `<div id="quizWrap"><p class="act-hint" style="margin-bottom:.7rem">${T(a.title)}</p>${a.questions.map((q,qi)=>`<div class="q"><div class="q-text">${qi+1}. ${T(q.q)}</div>
      <div class="q-opts">${q.options.map((o,oi)=>`<button class="q-opt" data-q="${qi}" data-o="${oi}">${T(o)}</button>`).join('')}</div></div>`).join('')}</div>`;
  }
  function bindQuiz(a,idx){
    let answered=0;
    document.querySelectorAll('.q-opt').forEach(btn=>btn.onclick=()=>{
      const qi=+btn.dataset.q, oi=+btn.dataset.o, wrap=btn.closest('.q'); if(wrap.dataset.done) return; wrap.dataset.done='1';
      wrap.querySelectorAll('.q-opt').forEach(o=>o.disabled=true);
      if(oi===a.questions[qi].answer){ btn.classList.add('correct'); award('q'+idx+'-'+qi); }
      else { btn.classList.add('wrong'); wrap.querySelector(`.q-opt[data-o="${a.questions[qi].answer}"]`).classList.add('correct'); }
      if(++answered>=a.questions.length) markSolved(idx);
    });
  }

  // order
  function actOrder(a,idx){
    if(!orderState[idx]) orderState[idx]=shuffle(a.items.map((_,i)=>i));
    return `<p class="act-hint" style="margin-bottom:.7rem">${T(a.title)}</p><div class="seq" id="seq">${orderRows(a,idx)}</div>
      <button class="btn btn-primary" id="seqCheck" style="width:100%">${lang==='ar'?'تحقّق':'Check order'}</button><div class="seq-result" id="seqRes"></div>`;
  }
  function orderRows(a,idx){
    return orderState[idx].map((it,pos)=>`<div class="seq-item"><span class="grip">${pos+1}</span><p>${T(a.items[it])}</p>
      <span class="moves"><button data-dir="-1" data-pos="${pos}" ${pos===0?'disabled':''}>↑</button><button data-dir="1" data-pos="${pos}" ${pos===orderState[idx].length-1?'disabled':''}>↓</button></span></div>`).join('');
  }
  function bindOrder(a,idx){
    document.querySelectorAll('#seq .moves button').forEach(b=>b.onclick=()=>{
      const pos=+b.dataset.pos, np=pos+ +b.dataset.dir, arr=orderState[idx]; if(np<0||np>=arr.length) return;
      [arr[pos],arr[np]]=[arr[np],arr[pos]]; $('#seq').innerHTML=orderRows(a,idx); bindOrder(a,idx);
    });
    const chk=$('#seqCheck'); if(chk) chk.onclick=()=>{
      const ok=orderState[idx].every((v,i)=>v===i), res=$('#seqRes');
      res.textContent=ok?(lang==='ar'?'أحسنت! ترتيب صحيح ✓':'Perfect order! ✓'):(lang==='ar'?'حاول مرة أخرى ✗':'Try again ✗');
      res.className='seq-result '+(ok?'ok':'no'); if(ok){ award('o'+idx); markSolved(idx); }
    };
  }

  // match
  function actMatch(a,idx){
    if(!orderState['m'+idx]) orderState['m'+idx]=shuffle(a.pairs.map((_,i)=>i));
    const right=orderState['m'+idx];
    return `<p class="act-hint" style="margin-bottom:.7rem">${T(a.title)}</p>
      <div class="match-grid"><div class="match-col" id="mtL">${a.pairs.map((p,i)=>`<div class="mt-item" data-side="L" data-i="${i}">${T(p.a)}</div>`).join('')}</div>
      <div class="match-col" id="mtR">${right.map(i=>`<div class="mt-item" data-side="R" data-i="${i}">${T(a.pairs[i].b)}</div>`).join('')}</div></div>`;
  }
  function bindMatch(a,idx){
    let sel=null, done=0;
    document.querySelectorAll('#actStage .mt-item').forEach(el=>el.onclick=()=>{
      if(el.classList.contains('locked')) return;
      if(!sel){ sel=el; el.classList.add('sel'); return; }
      if(sel===el){ el.classList.remove('sel'); sel=null; return; }
      if(sel.dataset.side===el.dataset.side){ sel.classList.remove('sel'); sel=el; el.classList.add('sel'); return; }
      // one L one R
      if(sel.dataset.i===el.dataset.i){ sel.classList.remove('sel'); sel.classList.add('locked'); el.classList.add('locked'); award('m'+idx+'-'+el.dataset.i); sel=null;
        if(++done>=a.pairs.length) markSolved(idx);
      } else { const a1=sel,a2=el; a1.classList.add('flash'); a2.classList.add('flash'); setTimeout(()=>{a1.classList.remove('flash','sel');a2.classList.remove('flash');},420); sel=null; }
    });
  }

  // true/false
  function actTF(a){
    return `<p class="act-hint" style="margin-bottom:.7rem">${T(a.title)}</p>${a.items.map((it,i)=>`<div class="tf-item" data-i="${i}" data-t="${it.t?1:0}">
      <div class="tf-q">${T(it.statement)}</div><div class="tf-btns"><button data-v="1">${lang==='ar'?'صح ✓':'True ✓'}</button><button data-v="0">${lang==='ar'?'خطأ ✗':'False ✗'}</button></div></div>`).join('')}`;
  }
  function bindTF(a,idx){
    let answered=0;
    document.querySelectorAll('.tf-item').forEach(item=>item.querySelectorAll('.tf-btns button').forEach(btn=>btn.onclick=()=>{
      if(item.dataset.done) return; item.dataset.done='1';
      const correct=item.dataset.t==='1', picked=btn.dataset.v==='1';
      item.querySelectorAll('button').forEach(b=>b.disabled=true);
      btn.classList.add(picked===correct?'pick-ok':'pick-no');
      if(picked===correct) award('t'+idx+'-'+item.dataset.i);
      else { const rb=item.querySelector(`button[data-v="${correct?1:0}"]`); rb&&rb.classList.add('pick-ok'); }
      if(++answered>=a.items.length) markSolved(idx);
    }));
  }

  // who am I?
  function actWho(a,idx){
    const shown = (orderState['w'+idx]||1);
    const clues = a.clues.slice(0,shown).map((c,i)=>`<div class="wa-clue" style="animation-delay:${i*.05}s"><span class="qn">${i+1}</span><p>${T(c)}</p></div>`).join('');
    const more = shown<a.clues.length ? `<button class="wa-reveal" id="waMore">${lang==='ar'?'دليلٌ آخر +':'Another clue +'}</button>` : '';
    return `<p class="act-hint" style="margin-bottom:.7rem">${T(a.title)}</p><div class="wa-clues">${clues}</div>${more}
      <div class="wa-opts">${a.options.map((o,i)=>`<button class="wa-opt" data-i="${i}">${T(o)}</button>`).join('')}</div>`;
  }
  function bindWho(a,idx){
    const more=$('#waMore'); if(more) more.onclick=()=>{ orderState['w'+idx]=(orderState['w'+idx]||1)+1; $('#actStage').innerHTML=renderAct(a,idx); bindWho(a,idx); };
    document.querySelectorAll('.wa-opt').forEach(b=>b.onclick=()=>{
      if(b.disabled) return; const ok=+b.dataset.i===a.answer;
      if(ok){ document.querySelectorAll('.wa-opt').forEach(o=>o.disabled=true); b.classList.add('correct'); award('w'+idx); markSolved(idx); }
      else { b.classList.add('wrong'); b.disabled=true; }
    });
  }

  /* ───────────── TREASURES ───────────── */
  function roomTreasures(){
    const t=C.treasures, won=Progress.isDone(C.id);
    const reflect = (t.reflect&&t.reflect.length)?`<div class="room-title" style="font-size:.98rem;justify-content:center"><span class="bar"></span>${lang==='ar'?'فكّرْ معي':'Reflect'}</div><div class="reflect">${t.reflect.map(r=>`<div class="reflect-item"><span class="ri">💭</span><span>${T(r)}</span></div>`).join('')}</div>`:'';
    const bagIntro = `<div class="treasures-intro"><div class="em">🎒</div><div><h4>${lang==='ar'?'حقيبةُ الكنوز':'Treasure Bag'}</h4><p>${lang==='ar'?'وسامُك + ملصقاتٌ ملوّنة + حكمةٌ تبقى معك ✨':'Your medal + colorful stickers + a wisdom that stays with you ✨'}</p></div></div>`;
    const stkCount = won ? t.stickers.length : 0;
    const stkHead = `<div class="stk-head"><span>🏷️ ${lang==='ar'?'ملصقاتك':'Your stickers'}</span><span class="stk-cnt">${stkCount} / ${t.stickers.length}</span></div>`;
    // “الخلطة السحرية” — a playful recipe-card showing how to LIVE this name in daily life.
    const recipe = (t.recipe && t.recipe.steps && t.recipe.steps.length) ? `<div class="magic-mix">
      <div class="mix-head"><span class="mix-em">🪄</span><div><h4>${t.recipe.title?T(t.recipe.title):(lang==='ar'?'الخلطةُ السحرية':'The Magic Mix')}</h4><p>${t.recipe.intro?T(t.recipe.intro):(lang==='ar'?'امزجْ هذه في يومِك — فتعيشَ الاسمَ لا تحفظُه فقط!':'Mix these into your day — so you live the name, not just memorize it!')}</p></div></div>
      <ul class="mix-list">${t.recipe.steps.map((s,i)=>`<li style="--i:${i}"><span class="mix-ic">${s.icon||'✨'}</span><p>${T(s)}</p></li>`).join('')}</ul>
      ${t.recipe.result?`<div class="mix-result"><span class="mix-eq">=</span><p>${T(t.recipe.result)}</p></div>`:''}
    </div>` : '';
    return `<div class="room treasure">${titleBar(lang==='ar'?'كنوزك':'Your Treasures')}
      ${bagIntro}
      <div class="medal-reveal ${won?'earned':''}">${ICO(C.icon, window.ICONS.star)}</div><div class="medal-name">${T(t.medal)}</div>
      ${recipe}
      ${stkHead}
      <div class="sticker-grid">${t.stickers.map(st=>{
        if(richEra()) return `<div class="sticker ${won?'earned':''}" style="--sc:${st.color}">${ICO(st.icon)}<small>${T(st.title)}</small></div>`;
        return `<div class="sticker" style="background:linear-gradient(150deg,${st.color},${shade(st.color)})">${ICO(st.icon)}<small>${T(st.title)}</small></div>`;
      }).join('')}</div>
      <div class="moral">🌿 ${T(t.moral)}</div>
      ${reflect}
      <button class="complete-btn ${won?'done':''}" id="completeBtn">${won?(lang==='ar'?'✓ أكملتَ هذه المحطة — عُد للمرحلة':'✓ Complete — back to era'):(lang==='ar'?'أكملِ المحطة واجمعِ الوسام 🏅':'Complete & collect medal 🏅')}</button></div>`;
  }
  function bindTreasure(){
    const btn=$('#completeBtn');
    const nx = siblings().next;
    const nextHref = nx ? ('chapter.html?id='+nx.id) : null;
    const goOn = ()=>{ if(nextHref) location.href=nextHref; else back(); };
    const nextLbl = lang==='ar'?'المحطّةُ التالية ←':'Next station →';
    if(Progress.isDone(C.id)){
      if(nextHref){ btn.textContent=nextLbl; btn.onclick=goOn; }
      else btn.onclick=back;
      return;
    }
    btn.onclick=()=>{
      Progress.grant(C.id,{ stars:3, medal:{icon:C.icon, title:C.treasures.medal} });
      confetti(); xpBurst(); header();
      btn.classList.add('done');
      btn.textContent = nextHref ? nextLbl : (lang==='ar'?'✓ أُكمِلت — عُد إلى المرحلة':'✓ Done — back to era');
      btn.onclick = goOn;
    };
  }
  // Standalone corners have their own page; eras use era.html?era=ID.
  function eraHref(h){ return h==='creativity' ? 'academy.html' : h==='heart' ? 'heart.html' : 'era.html?era='+h; }
  function back(){ location.href = eraHref(homeEra()); }

  /* ───────────── helpers ───────────── */
  function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} if(a.length>1&&a.every((v,i)=>v===i))[a[0],a[1]]=[a[1],a[0]]; return a; }
  function shade(hex){ const n=parseInt(hex.slice(1),16); let r=Math.max(0,(n>>16)-30),g=Math.max(0,((n>>8)&255)-30),b=Math.max(0,(n&255)-30); return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1); }
  function xpBurst(){ const e=document.createElement('div'); e.className='xp-burst'; e.textContent='+50 XP'; document.body.appendChild(e); void e.offsetWidth; e.classList.add('go'); setTimeout(()=>e.remove(),1500); }
  function confetti(){ const cols=['#F5CC5A','#E67E22','#2A87B0','#7DB344','#E06898']; for(let i=0;i<60;i++){ const c=document.createElement('div'); c.className='confetti'; c.style.left=Math.random()*100+'vw'; c.style.background=cols[i%cols.length]; document.body.appendChild(c); c.animate([{transform:'translateY(0) rotate(0)',opacity:1},{transform:`translateY(${60+Math.random()*40}vh) rotate(${360+Math.random()*360}deg)`,opacity:.4}],{duration:1600+Math.random()*900,easing:'cubic-bezier(.2,.6,.4,1)'}).onfinish=()=>c.remove(); } }

  function go(r){ room=r; if(r==='story'){page=0;epIdx=0;} render(); window.scrollTo({top:document.querySelector('.ch-tabs').offsetTop-60,behavior:'smooth'}); }
  document.addEventListener('click',e=>{ const g=e.target.closest('[data-go]'); if(g) go(g.dataset.go); });
  function header(){ $('#lvl') && ($('#lvl').textContent='LVL '+Progress.level()); }

  function setLang(l){
    lang=l; Progress.setLang(l); document.documentElement.lang=l; document.documentElement.dir=l==='ar'?'rtl':'ltr';
    $('#langAr').classList.toggle('on',l==='ar'); $('#langEn').classList.toggle('on',l==='en');
    $('#backTxt').textContent = homeEra()==='creativity'
      ? (l==='ar'?'الأكاديمية':'Academy')
      : homeEra()==='heart'
      ? (l==='ar'?'الركن':'Corner')
      : (l==='ar'?'المرحلة':'Era');
    var _era = (window.HISN&&HISN.eras&&HISN.eras[homeEra()]);
    if(_era){
      if(_era.standalone){
        // A standalone corner (Academy) — show its name, not a "Stage N" label.
        if($('#brandSubAr')) $('#brandSubAr').textContent=_era.title.ar;
        if($('#brandSubEn')) $('#brandSubEn').textContent=_era.title.en;
      } else {
        var _o={1:{ar:'الأولى',en:'I'},2:{ar:'الثانية',en:'II'},3:{ar:'الثالثة',en:'III'},4:{ar:'الرابعة',en:'IV'},5:{ar:'الخامسة',en:'V'}}[_era.order]||{ar:'',en:''};
        if($('#brandSubAr')) $('#brandSubAr').textContent='المرحلة '+_o.ar+' · '+_era.title.ar;
        if($('#brandSubEn')) $('#brandSubEn').textContent='Era '+_o.en+' · '+_era.title.en;
      } }
    $('#chName').innerHTML=`${C.name[l]} <span class="ch-en">${l==='ar'?C.name.en:C.name.ar}</span>`;
    $('#chTag').textContent=C.tag[l];
    render();
  }
  window.setLang=setLang;
  window.tuckGuide=()=>$('#guide').classList.toggle('tuck');

  function init(){
    C = (HISN.chapters||{})[chId];
    if(!C){ document.body.innerHTML='<p style="padding:2rem;text-align:center">Chapter not found.</p>'; return; }
    // Seerah event stations have no Knowledge tab — open straight on The Journey.
    if(isSeerahStation() && room==='knowledge') room='story';
    document.documentElement.style.setProperty('--ec', C.accent2);
    document.documentElement.style.setProperty('--ec2', C.accent);
    const root=$('#station'); root.style.setProperty('--ec',C.accent); root.style.setProperty('--ec2',C.accent2);
    root.setAttribute('data-era', homeEra());
    $('#chHero').style.setProperty('--ec',C.accent); $('#chHero').style.setProperty('--ec2',C.accent2);
    $('#backLink').href = eraHref(homeEra());
    $('#brandBadge').innerHTML=HISN_SVG.badge;
    $('#chEmblem').innerHTML=ICO(C.icon,'');
    $('#chWave').innerHTML=`<path d="M0,26 L0,12 Q150,0 300,12 T600,12 L600,26 Z" fill="var(--bg2)"/>`;
    $('#guideAvatar').innerHTML=HISN_SVG.guide;
    let s=''; for(let i=0;i<40;i++){ s+=`<i style="left:${Math.random()*100}%;top:${Math.random()*70}%;--d:${2+Math.random()*3}s;--dl:${-Math.random()*4}s"></i>`; }
    $('#stars').innerHTML=s;
    setLang(lang);
    $('#guideLine').textContent=C.greeting?C.greeting[lang]:''; $('#guideName').textContent=HISN.guide.name[lang];
  }

  function boot(){
    // dynamically load this chapter's data file, then its (optional) multi-story
    // set, then init. The story set — when it exists — becomes the Story journey.
    const sc=document.createElement('script');
    sc.src='data/chapters/'+chId+'.js';
    sc.onload=()=>{
      // Only fetch the optional multi-story set when this chapter actually has one
      // (listed in HISN.hasStories) — avoids a 404 probe for chapters without it.
      if(window.HISN && Array.isArray(HISN.hasStories) && HISN.hasStories.indexOf(chId)>=0){
        const ss=document.createElement('script');
        ss.src='data/stories/'+chId+'.js';
        ss.onload=init; ss.onerror=init;   // story set is optional
        document.body.appendChild(ss);
      } else { init(); }
    };
    sc.onerror=()=>{ document.body.innerHTML='<p style="padding:2rem;text-align:center">Could not load chapter “'+chId+'”.</p>'; };
    document.body.appendChild(sc);
  }
  document.addEventListener('DOMContentLoaded', boot);
})();
