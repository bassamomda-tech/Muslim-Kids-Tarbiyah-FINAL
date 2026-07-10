/* ════ رحلة اليقين — Journey of Certainty · engine ════ */
(function(){
  const S = window.YAQEEN_STATIONS || [];
  const K = { done:'yaqeenDone', journal:'yaqeenJournal', name:'yaqeenName', acts:'yaqeenActs', lang:'bunyanLang' };
  let lang = localStorage.getItem(K.lang) || 'ar';
  let done = new Set(JSON.parse(localStorage.getItem(K.done)||'[]'));
  let journal = JSON.parse(localStorage.getItem(K.journal)||'{}');
  let acts = JSON.parse(localStorage.getItem(K.acts)||'{}');
  let cur = 0;
  const $ = s => document.querySelector(s);
  const isAr = () => lang==='ar';
  const t = (a,e) => isAr()?a:e;

  /* ───────── LANG ───────── */
  function applyLang(){
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr()?'rtl':'ltr';
    document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
    localStorage.setItem(K.lang,lang);
    renderMap(); renderCollections();
    if($('#reader').classList.contains('open')) openStation(cur);
  }
  document.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;applyLang();});

  /* ───────── MAP ───────── */
  function renderMap(){
    const map=$('#map');
    map.querySelectorAll('.station,.finish').forEach(e=>e.remove());
    S.forEach((st,i)=>{
      const side = i%2===0?'r':'l';
      const d=done.has(st.id), locked=!!st.locked;
      const _pr=actProg(st); const _pt=_pr.total; const _pd=d?_pt:_pr.done; const _pp=_pt?Math.round(_pd/_pt*100):0;
      const el=document.createElement('div');
      el.className='station '+side+(locked?' locked':'');
      el.innerHTML=`
        <div class="node ${d?'done':''} ${locked?'locked':''}" style="--nc:${st.color}" data-i="${i}">
          ${locked?'<span class="lock">🔒</span>':`<span class="face">${st.icon}</span>`}
          <span class="num">${st.num}</span>
        </div>
        <div class="s-label">
          <div class="t">${st.title[lang]}<span class="em">${st.emoji}</span></div>
          <span class="go">${locked?t('قريباً ✨','Coming soon ✨')
            :(d?t('مَختومة ✓ — أعِد الزِّيارة','Stamped ✓ — revisit'):t('اكتَشِف ←','Explore →'))}</span>
          ${locked?'':`<div class="s-prog" style="height:6px;background:rgba(127,127,127,.22);border-radius:5px;overflow:hidden;margin-top:.45rem;max-width:220px"><i style="display:block;height:100%;width:${_pp}%;background:${st.color};border-radius:5px;transition:width .45s"></i></div><div class="s-prog-txt" style="font-size:.7rem;font-weight:800;opacity:.65;margin-top:.25rem">${_pd}/${_pt} ${lang==='ar'?'أنشطة':'activities'}</div>`}
        </div>`;
      map.appendChild(el);
      if(!locked){ el.style.cursor='pointer'; el.onclick=()=>openStation(i); }
    });
    const fin=document.createElement('div');
    fin.className='finish';
    fin.innerHTML=`<div class="cup" id="cupBtn">🏆</div><div class="ft">${t('وِسامُ المُستَكشِفِ المُوقِن','Certain Explorer Medal')}</div>`;
    map.appendChild(fin);
    fin.querySelector('#cupBtn').onclick=openCertificate;
    updateMeter();
  }

  const activeCount = () => S.filter(s=>!s.locked).length;
  const doneActive = () => S.filter(s=>!s.locked && done.has(s.id)).length;

  function updateMeter(){
    const tot=S.length, n=S.filter(s=>done.has(s.id)).length;
    $('#pCount').textContent=`${n} / ${tot}`;
    $('#pFill').style.width=(n/tot*100)+'%';
    const da=doneActive(), ac=activeCount();
    let lbl;
    if(da===0) lbl=t('ابدأ رِحلَتَك… اليقينُ يَنتَظِر','Begin your journey… certainty awaits');
    else if(da<ac) lbl=t(`يَقينُك يَزدادُ! ${da} مِن ${ac} مَحطّاتٍ مَفتوحة`,`Your certainty is growing! ${da} of ${ac} open stations`);
    else lbl=t('🎉 أكمَلتَ كُلَّ المَحطّاتِ المُتاحة!','🎉 You finished every open station!');
    $('#meterLabel').textContent=lbl;
  }

  /* ───────── COLLECTIONS BAR ───────── */
  function renderCollections(){
    const stickers=doneActive();
    $('#collStickers').innerHTML=`<div class="ci">🎟️</div><div class="ct">${t('ألبومُ الأوسِمة','Sticker Album')}</div><div class="cn">${stickers} ${t('وِسام','badges')}</div>`;
    const names=S.filter(s=>!s.locked&&done.has(s.id)).length;
    $('#collNames').innerHTML=`<div class="ci">🕋</div><div class="ct">${t('جِدارُ الأسماء','Names Wall')}</div><div class="cn">${names} ${t('اسم','names')}</div>`;
    const totalActive=S.filter(s=>!s.locked).length;
    $('#collKeys').innerHTML=`<div class="ci">🔑</div><div class="ct">${t('مَفاتيحُ اليقين','Keys of Certainty')}</div><div class="cn">${names} / ${totalActive}</div>`;
    $('#collCert').innerHTML=`<div class="ci">📜</div><div class="ct">${t('شَهادةُ المُستَكشِف','Explorer Certificate')}</div><div class="cn">${t('اطبَع شَهادَتَك ←','Print yours →')}</div>`;
  }

  /* ───────── READER ───────── */
  function nextExists(i){ for(let k=i+1;k<S.length;k++) if(!S[k].locked) return true; return false; }
  function gotoNext(i){ for(let k=i+1;k<S.length;k++) if(!S[k].locked){openStation(k);return;} }
  function gotoPrev(i){ for(let k=i-1;k>=0;k--) if(!S[k].locked){openStation(k);return;} }

  function openStation(i){
    cur=i; const st=S[i]; if(st.locked) return;
    const L=lang, d=done.has(st.id);
    const H={
      kick: t(`المَحطّة ${st.num} مِن ٢٠`,`Station ${st.num} of 20`),
      wow:  t('التَّعقيدُ المُذهِل','The Mind-Blowing Complexity'),
      chance:t('هل خُلِقَ نَفسَهُ صُدفة؟!','Made Itself… By Chance?!'),
      myth: t('بَطاقةُ هَدمِ الخُرافة','Myth-Buster Card'),
      machine:t('آلةُ الصُّدفة','The Chance Machine'),
      match:t('لُعبةُ الوَصل','Match-Up Game'),
      wahy: t('إشراقةُ الوَحي','Light of Revelation'),
      name: t('اسمٌ مِن أسماءِ الله','A Name of Allah'),
      key:  t('مِفتاحُ اليقين','Key of Certainty'),
      dua:  t('دُعاءٌ تَحفَظُه','A Dua to Memorize'),
      exp:  t('جَرِّب في البَيت','Try It at Home'),
      fam:  t('سُؤالُ العائِلة','Family Question'),
      journal:t('دَفترُ المُستَكشِف','Explorer Journal'),
      mc: t('أبو صُدفة يَقول:','Mr. Chance says:'),
      rebut:t('وردُّنا عليه ↓','Our reply ↓'),
    };
    function splitP(h){h=(h==null?'':''+h);var a=h.replace(/([.!?\u061F\u2026])\s+/g,'$1\u0001').split('\u0001').map(function(s){return s.trim();}).filter(function(s){return s.length;});return a.length<2?h:a.map(function(s){return '<span class="st-line" style="display:block;margin-bottom:.6rem;padding-inline-start:.8rem;border-inline-start:3px solid rgba(255,255,255,.16)">'+s+' </span>';}).join('');}
    $('#rBody').innerHTML=`
      <div class="s-hero" style="--accent:${st.color}">
        <div class="ring">${st.icon}</div>
        <div class="kick">${H.kick}</div>
        <h2>${st.title[L]} <span>${st.emoji}</span></h2>
      </div>
      <div class="blocks">

        <div class="block wow">
          <h3><span class="bi">🤯</span>${H.wow}</h3>
          <p>${splitP(st.complexity[L])}</p>
        </div>

        <div class="block chance">
          <h3><span class="bi">🎲</span>${H.chance}</h3>
          <div class="mrchance">
            <div class="mc-face">😼</div>
            <div class="mc-body"><div class="mc-name">${H.mc}</div><div class="mc-say">${st.mrChance[L]}</div></div>
          </div>
          <div class="rebut-tag">🛡️ ${H.rebut}</div>
          <p>${splitP(st.chance[L])}</p>
        </div>

        <div class="block myth">
          <h3><span class="bi">🃏</span>${H.myth}</h3>
          <div class="flip" id="flipCard">
            <div class="flip-inner">
              <div class="flip-face flip-front"><div class="ft-tag">${t('الخُرافة','The Myth')}</div><div>${st.myth.claim[L]}</div></div>
              <div class="flip-face flip-back"><div class="ft-tag">${t('الحَقيقة','The Truth')}</div><div>${st.myth.bust[L]}</div></div>
            </div>
          </div>
          <div class="flip-hint">${t('انقُر البِطاقةَ لِتَقلِبَها 🔄','Tap the card to flip it 🔄')}</div>
        </div>

        <div class="block machine">
          <h3><span class="bi">🤖</span>${H.machine}</h3>
          <p style="margin-bottom:.8rem;font-size:.95rem">${t('هل تَبني الصُّدفةُ كَلِمةً مُرَتَّبة؟ اضغَط «هُزَّ الصُّندوق» وراقِب!','Can chance build an ordered word? Press “Shake the box” and watch!')}</p>
          <div class="cm-stage">
            <div class="cm-tiles" id="cmTiles"></div>
            <div class="cm-row">
              <button class="cm-btn" id="cmShake">🎲 ${t('هُزَّ الصُّندوق','Shake the box')}</button>
              <button class="cm-btn solve" id="cmSolve">🧠 ${t('رَتِّبها بِعَقل','Arrange with a mind')}</button>
              <span class="cm-count" id="cmCount"></span>
            </div>
            <div class="cm-verdict" id="cmVerdict"></div>
          </div>
        </div>

        <div class="block matchb">
          <h3><span class="bi">🧩</span>${H.match}</h3>
          <p style="margin-bottom:.8rem;font-size:.95rem">${st.match.title[L]}</p>
          <div class="match-cols">
            <div class="match-col" id="matchL"></div>
            <div class="match-col" id="matchR"></div>
          </div>
          <div class="match-done" id="matchDone"></div>
        </div>

        <div class="block wahy">
          <h3><span class="bi">🌟</span>${H.wahy}</h3>
          <div class="ayah">${st.reflection.ayah}</div>
          <div class="ayah-ref">${st.reflection.ref[L]}</div>
          <div class="explain">${st.reflection.explain[L]}</div>
        </div>

        <div class="block name">
          <h3><span class="bi">🕋</span>${H.name}</h3>
          <div class="name-card">
            <div class="name-ar">${st.nameOfAllah.name.ar}</div>
            <div class="name-en">${st.nameOfAllah.name.en}</div>
            <div class="name-mean">${st.nameOfAllah.meaning[L]}</div>
          </div>
        </div>

        <div class="block key">
          <h3><span class="bi">🔑</span>${H.key}</h3>
          <div class="key-card"><span class="ki">🗝️</span><span class="kt">«${st.logicKey[L]}»</span></div>
        </div>

        <div class="block dua">
          <h3><span class="bi">🤲</span>${H.dua}</h3>
          <div class="dua-text">${st.dua[L]}</div>
        </div>

        <div class="block exp">
          <h3><span class="bi">🧪</span>${H.exp}</h3>
          <p>${st.experiment[L]}</p>
        </div>

        <div class="block fam">
          <h3><span class="bi">👨‍👩‍👧</span>${H.fam}</h3>
          <p>${st.familyQ[L]}</p>
        </div>

        <div class="block journal">
          <h3><span class="bi">✍️</span>${H.journal}</h3>
          <div class="journal">
            <textarea id="journalBox" placeholder="${t('اكتُب أو ارسُم آيةً مِن آياتِ اللهِ رأيتَها اليوم…','Write or draw a sign of Allah you saw today…')}">${(journal[st.id]||'').replace(/</g,'&lt;')}</textarea>
            <div class="saved" id="journalSaved"></div>
          </div>
        </div>
      </div>

      <div class="r-foot">
        <button class="stampbtn ${d?'done':''}" id="stampBtn">
          ${d?t('✓ مَحطّةٌ مَختومة','✓ Station stamped'):t('🎖️ اختِم هذه المَحطّة','🎖️ Stamp this station')}
        </button>
        ${nextExists(i)?`<div class="r-next-hint">${t('جاهِزٌ لِلتّالية؟','Ready for the next?')} <button id="nextBtn">${t('المَحطّةُ التّالية ←','Next station →')}</button></div>`:''}
      </div>`;

    $('#rCount').textContent=`${st.num} / ${S.length}`;
    $('#rPrev').disabled=i<=0;
    $('#rNext').disabled=!nextExists(i);

    // wire interactive widgets
    $('#flipCard').onclick=function(){ this.classList.toggle('flipped'); markAct(st,'flip'); };
    setupMachine(st);
    setupMatch(st);
    setupJournal(st);
    const stamp=$('#stampBtn');
    stamp.onclick=()=>{ if(!done.has(st.id)){ markDone(st); celebrate(); openStation(i);} };
    const nb=$('#nextBtn'); if(nb) nb.onclick=()=>gotoNext(i);

    $('#reader').classList.add('open');
    $('#reader').scrollTop=0;
    const sh=document.querySelector('.sheet'); if(sh) sh.scrollTop=0;
  }

  /* ───────── CHANCE MACHINE ───────── */
  function stripTashkeel(s){ return s.replace(/[\u064B-\u0652\u0670\u0640]/g,''); }
  function setupMachine(st){
    const word = stripTashkeel(st.chanceWord[lang]);
    const correct = [...word];
    let tries=0, solved=false;
    const tilesEl=$('#cmTiles'), countEl=$('#cmCount'), verdictEl=$('#cmVerdict');
    function paint(arr,win){
      tilesEl.innerHTML=arr.map(ch=>`<div class="cm-tile ${win?'win':''}">${ch}</div>`).join('');
    }
    function scramble(){
      let a;
      do{ a=[...correct].sort(()=>Math.random()-0.5); }
      while(correct.length>1 && a.join('')===correct.join(''));
      return a;
    }
    paint(scramble(),false);
    countEl.textContent='';
    $('#cmShake').onclick=()=>{
      if(solved){ solved=false; verdictEl.classList.remove('solved'); }
      tries++;
      paint(scramble(),false);
      countEl.textContent=t(`مُحاوَلة ${tries}`,`Try ${tries}`);
      if(tries===5) verdictEl.textContent=t('٥ محاولات… ولا شَيء! 🤷','5 tries… and nothing! 🤷');
      else if(tries===12) verdictEl.textContent=t('١٢ محاولة وما زالَت فَوضى! الصُّدفةُ لا تَبني.','12 tries and still chaos! Chance doesn\'t build.');
      else if(tries>=20) verdictEl.textContent=t('٢٠ محاولة! الصُّدفةُ عاجِزة. جَرِّب «رَتِّبها بِعَقل».','20 tries! Chance is helpless. Try “Arrange with a mind”.');
      else verdictEl.textContent='';
      verdictEl.classList.remove('solved');
    };
    $('#cmSolve').onclick=()=>{
      solved=true;
      paint(correct,true);
      verdictEl.textContent=t('✨ بِعَقلٍ واحِد… تَرَتَّبَت فَوراً! كذلك خَلقُ الله.','✨ With one mind… ordered instantly! So is Allah\'s creation.');
      verdictEl.classList.add('solved');
    };
  }

  /* ───────── MATCH GAME ───────── */
  function setupMatch(st){
    const pairs=st.match.pairs;
    const left=pairs.map((p,i)=>({txt:p.tool[lang],pair:i,side:'L'}));
    const right=pairs.map((p,i)=>({txt:p.job[lang],pair:i,side:'R'}));
    const shuf=a=>a.map(x=>[Math.random(),x]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);
    const Lc=$('#matchL'), Rc=$('#matchR'), doneEl=$('#matchDone');
    function render(col,arr){ col.innerHTML=arr.map(it=>`<div class="match-item" data-pair="${it.pair}" data-side="${it.side}">${it.txt}</div>`).join(''); }
    render(Lc,shuf(left)); render(Rc,shuf(right));
    let sel=null, matched=0;
    function items(){ return [...Lc.children,...Rc.children]; }
    items().forEach(el=>{
      el.onclick=()=>{
        if(el.classList.contains('matched')) return;
        if(!sel){ sel=el; el.classList.add('sel'); return; }
        if(sel===el){ sel.classList.remove('sel'); sel=null; return; }
        if(sel.dataset.side===el.dataset.side){ sel.classList.remove('sel'); sel=el; el.classList.add('sel'); return; }
        // different sides — check
        if(sel.dataset.pair===el.dataset.pair){
          sel.classList.remove('sel'); sel.classList.add('matched'); el.classList.add('matched');
          sel=null; matched++;
          if(matched===pairs.length) markAct(st,'match');
          if(matched===pairs.length){ doneEl.textContent=t('🎉 أحسَنت! كُلُّ أداةٍ في مَكانِها — هذا تَصميم، لا صُدفة.','🎉 Brilliant! Every tool in its place — that\'s design, not chance.'); }
        } else {
          const a=sel, b=el; a.classList.add('wrong'); b.classList.add('wrong');
          setTimeout(()=>{a.classList.remove('wrong','sel');b.classList.remove('wrong');},360);
          sel=null;
        }
      };
    });
  }

  /* ───────── JOURNAL ───────── */
  let jTimer;
  function setupJournal(st){
    const box=$('#journalBox'), saved=$('#journalSaved');
    box.oninput=()=>{
      journal[st.id]=box.value;
      if(box.value.trim()) markAct(st,'journal');
      clearTimeout(jTimer);
      jTimer=setTimeout(()=>{
        localStorage.setItem(K.journal,JSON.stringify(journal));
        saved.textContent=t('حُفِظَ ✓','Saved ✓');
        setTimeout(()=>saved.textContent='',1400);
      },350);
    };
  }

  /* ───────── PROGRESS / STAMP ───────── */
  /* activity progress */
  function actsAvail(st){ var a=['journal']; if(st.myth) a.unshift('flip'); if(st.match&&st.match.pairs&&st.match.pairs.length) a.push('match'); return a; }
  function actProg(st){ var av=actsAvail(st); var rec=acts[st.id]||{}; var dn=av.filter(function(k){return rec[k];}).length; return {done:dn,total:av.length}; }
  function markAct(st,key){ if(!st) return; var id=st.id; if(!acts[id]) acts[id]={}; if(acts[id][key]) return; acts[id][key]=1; localStorage.setItem(K.acts,JSON.stringify(acts)); renderMap(); }
  function markDone(st){
    done.add(st.id);
    localStorage.setItem(K.done,JSON.stringify([...done]));
    renderMap(); renderCollections();
    toast(t(`🎖️ أحسَنت! حَصَلتَ على وِسام «${st.badge.title.ar}»`,`🎖️ Great! You earned the “${st.badge.title.en}” badge`));
  }

  /* ───────── COLLECTIONS DRAWER ───────── */
  function openDrawer(kind){
    const dw=$('#drawer'), title=$('#dwTitle'), body=$('#dwBody');
    if(kind==='stickers'){
      title.textContent=t('🎟️ ألبومُ الأوسِمة','🎟️ Sticker Album');
      body.innerHTML=`<div class="sticker-grid">`+S.filter(s=>!s.locked).map(s=>{
        const d=done.has(s.id);
        return `<div class="sticker ${d?'':'locked'}" style="--sc:${s.badge.color}">
          <div class="si">${d?s.badge.icon:'🔒'}</div>
          <div class="st">${d?s.badge.title[lang]:t('مُقفَل','Locked')}</div></div>`;
      }).join('')+`</div>`;
    } else if(kind==='names'){
      title.textContent=t('🕋 جِدارُ أسماءِ الله','🕋 Wall of Allah\'s Names');
      body.innerHTML=S.filter(s=>!s.locked).map(s=>{
        const d=done.has(s.id);
        return `<div class="list-card ${d?'':'locked'}"><div class="lci">${d?'🕋':'🔒'}</div><div>
          <div class="lct"><span class="lc-name">${d?s.nameOfAllah.name.ar:'• • •'}</span> ${d?'· '+s.nameOfAllah.name.en:''}</div>
          <div class="lcs">${d?s.nameOfAllah.meaning[lang]:t('أكمِل المَحطّةَ لِتَكشِفَ الاسم','Complete the station to reveal the name')}</div></div></div>`;
      }).join('');
    } else if(kind==='keys'){
      title.textContent=t('🔑 مَفاتيحُ اليقين','🔑 Keys of Certainty');
      body.innerHTML=S.filter(s=>!s.locked).map(s=>{
        const d=done.has(s.id);
        return `<div class="list-card ${d?'':'locked'}"><div class="lci">${d?'🗝️':'🔒'}</div><div>
          <div class="lct">${d?'«'+s.logicKey[lang]+'»':t('مِفتاحٌ مُقفَل','Locked key')}</div>
          <div class="lcs">${d?t('مِن مَحطّة: ','From: ')+s.title[lang]:t('أكمِل المَحطّةَ لِتَنالَ المِفتاح','Complete the station to earn the key')}</div></div></div>`;
      }).join('');
    }
    dw.classList.add('open');
  }
  $('#collStickers').onclick=()=>openDrawer('stickers');
  $('#collNames').onclick=()=>openDrawer('names');
  $('#collKeys').onclick=()=>openDrawer('keys');
  $('#dwClose').onclick=()=>$('#drawer').classList.remove('open');
  $('#drawer').addEventListener('click',e=>{ if(e.target.id==='drawer') $('#drawer').classList.remove('open'); });

  /* ───────── CERTIFICATE ───────── */
  function openCertificate(){
    const ov=$('#certOverlay');
    const doneStations=S.filter(s=>!s.locked&&done.has(s.id));
    const nm=localStorage.getItem(K.name)||'';
    const creatures = doneStations.map(s=>s.title[lang].split('—').pop().trim()).join(t('، ',', '));
    const total=activeCount();
    let statement;
    if(doneStations.length===0){
      statement=t('ابدأ رِحلَتَك بِخَتمِ أوّلِ مَحطّة، وسَتَظهَرُ هُنا آياتُ اللهِ التي اكتَشَفتَها.',
                  'Begin by stamping your first station, and the signs of Allah you discover will appear here.');
    } else {
      statement=t(
        `أتَمَّ هذا المُستَكشِفُ <b>${doneStations.length}</b> مِن ${total} مَحطّاتٍ في رِحلةِ اليقين، فَتَأمَّلَ في ${creatures}، وأدرَكَ بِعَقلِهِ أنَّ هذا الإتقانَ لا يَكونُ صُدفة، بَل صَنعةُ اللهِ الحَكيمِ العَليم.`,
        `This explorer completed <b>${doneStations.length}</b> of ${total} stations in the Journey of Certainty, reflecting on ${creatures}, and understood with their own mind that such mastery is never chance — it is the work of Allah, the All-Wise, All-Knowing.`);
    }
    const keysHTML = doneStations.map(s=>`<span class="ck">🗝️ ${s.logicKey[lang]}</span>`).join('');
    $('#certBox').innerHTML=`
      <div class="cert-seal">🏅</div>
      <div class="cert-kick">${t('رِحلةُ اليقين · منارةُ العقيدة','Journey of Certainty · Faith Minaret')}</div>
      <div class="cert-title">${t('شَهادةُ المُستَكشِفِ المُوقِن','Certified Certainty Explorer')}</div>
      <div class="cert-name">${nm||t('✦ اكتُب اسمَك ✦','✦ Your name ✦')}</div>
      <div class="cert-statement">${statement}</div>
      ${keysHTML?`<div class="cert-keys">${keysHTML}</div>`:''}
      <div class="cert-foot">${t('عَدَدُ الأوسِمة: ','Badges earned: ')}${doneStations.length} 🎖️</div>`;
    const nameInput=$('#certName'); nameInput.value=nm;
    nameInput.oninput=()=>{
      localStorage.setItem(K.name,nameInput.value);
      $('#certBox .cert-name').textContent=nameInput.value||t('✦ اكتُب اسمَك ✦','✦ Your name ✦');
    };
    ov.classList.add('open');
  }
  $('#certClose').onclick=()=>$('#certOverlay').classList.remove('open');
  $('#certPrint').onclick=()=>window.print();
  $('#certOverlay').addEventListener('click',e=>{ if(e.target.id==='certOverlay') $('#certOverlay').classList.remove('open'); });

  /* ───────── READER CHROME ───────── */
  $('#rClose').onclick=()=>$('#reader').classList.remove('open');
  $('#rPrev').onclick=()=>gotoPrev(cur);
  $('#rNext').onclick=()=>gotoNext(cur);
  $('#reader').addEventListener('click',e=>{ if(e.target.id==='reader') $('#reader').classList.remove('open'); });
  document.addEventListener('keydown',e=>{
    if($('#reader').classList.contains('open')){
      if(e.key==='Escape') $('#reader').classList.remove('open');
      if(e.target.tagName==='TEXTAREA') return;
      if(e.key==='ArrowLeft') isAr()?gotoNext(cur):gotoPrev(cur);
      if(e.key==='ArrowRight') isAr()?gotoPrev(cur):gotoNext(cur);
    }
    if(e.key==='Escape'){ $('#drawer').classList.remove('open'); $('#certOverlay').classList.remove('open'); }
  });

  /* ───────── FX ───────── */
  function celebrate(){
    const c=$('#confetti'), cols=['#E8B530','#C0392B','#27AE60','#2980B9','#F5CC5A','#9B59B6'];
    for(let k=0;k<60;k++){
      const d=document.createElement('div'); d.className='cf';
      d.style.left=Math.random()*100+'%';
      d.style.background=cols[k%cols.length];
      d.style.animationDuration=(1.6+Math.random()*1.4)+'s';
      d.style.animationDelay=(Math.random()*.3)+'s';
      d.style.borderRadius=Math.random()>.5?'50%':'2px';
      c.appendChild(d); setTimeout(()=>d.remove(),3400);
    }
  }
  let tt;
  function toast(msg){ const el=$('#toast'); el.textContent=msg; el.classList.add('show'); clearTimeout(tt); tt=setTimeout(()=>el.classList.remove('show'),2400); }

  applyLang();
})();
