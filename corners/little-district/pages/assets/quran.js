/* mkvoice-loader */(function(){try{var cs=document.currentScript,src=(cs&&cs.src)||"";var m=src.match(/^(.*\/corners\/)/);var base=m?m[1]:"";if(base&&!window.MKVoice&&!document.querySelector("script[data-mkvoice]")){var s=document.createElement("script");s.src=base+"shared/voice-engine.js";s.setAttribute("data-mkvoice","1");document.head.appendChild(s);}}catch(e){}})();
/* ═══════════════════════════════════════════════════════════════
   QURAN GARDEN — engine: garden shelf, page-flip book reader,
   tap-word meanings, tabs, story pager, mini-game, memorize, i18n.
   ─────────────────────────────────────────────────────────────── */
window.QStore = (function(){
  const P='qg:';
  return{ get(k){try{return localStorage.getItem(P+k)}catch(e){return null}},
    set(k,v){try{localStorage.setItem(P+k,v)}catch(e){}} };
})();

window.QApp = (function(){
  let lang = QStore.get('lang')||'ar';
  let cur = null; // current surah slug

  /* ───── recitation (tilawa) ───── */
  const RECITERS=[
    {id:'kids_husary', ar:'🧒 الحُصري مع الأطفال (ترديد)', en:'🧒 Al-Husary with Kids (repeat)', full:'https://archive.org/download/Quran--alhosary--teacher-repeat-kids-high-quality/'},
    {id:'Husary_Muallim_128kbps',      ar:'الحُصري (المُعلِّم)', en:'Al-Husary (Teacher)'},
    {id:'Husary_128kbps',              ar:'الحُصري (مُرتَّل)',   en:'Al-Husary'},
    {id:'Minshawy_Murattal_128kbps',   ar:'المِنشاوي',          en:'Al-Minshawi'},
    {id:'Abdul_Basit_Murattal_192kbps',ar:'عبد الباسط',        en:'Abdul Basit'},
    {id:'Alafasy_128kbps',             ar:'مشاري العفاسي',      en:'Mishary Alafasy'},
  ];
  let _audio=null, _stopPlayer=null, _togglePlay=null, _playFrom=null, _curHi=-1, _stopStory=null;
  function reciterId(){ return QStore.get('reciter')||'Husary_Muallim_128kbps'; }
  function pad3(n){ return String(n).padStart(3,'0'); }
  function verseUrl(surahNum,ayah){ return 'https://everyayah.com/data/'+reciterId()+'/'+pad3(surahNum)+pad3(ayah)+'.mp3'; }
  function curReciter(){ return RECITERS.find(r=>r.id===reciterId())||RECITERS[0]; }
  function isFull(){ return !!curReciter().full; }            // full-surah recording (Husary + kids)
  function surahFullUrl(surahNum){ return curReciter().full + pad3(surahNum) + '.mp3'; }
  function getAudio(){ if(!_audio){_audio=new Audio();_audio.preload='auto';} return _audio; }

  function tr(d){ if(d==null)return''; if(typeof d==='string')return d; return d[lang]||d.ar||d.en||''; }
  function el(t,c,h){const n=document.createElement(t);if(c)n.className=c;if(h!=null)n.innerHTML=h;return n;}

  /* ───── language ───── */
  function setLang(l){
    lang=l; QStore.set('lang',l);
    document.documentElement.lang=l;
    document.documentElement.dir = l==='ar'?'rtl':'ltr';
    document.querySelectorAll('.q-lang button, .r-lang button').forEach(b=>b.classList.toggle('active',b.dataset.lang===l));
    buildGarden();
    if(cur){
      // keep the reader on the same tab after switching language
      const activeTab=document.querySelector('.b-tab.active')?.dataset.tabid;
      openSurah(cur);
      if(activeTab){ const t=document.querySelector('.b-tab[data-tabid="'+activeTab+'"]'); if(t)t.click(); }
    }
  }

  /* ───── GARDEN ───── */
  function buildGarden(){
    const root=document.getElementById('shelfGrid');
    if(!root)return; root.innerHTML='';
    window.SURAH_INDEX.forEach(s=>{
      const data=window.SURAHS[s.slug];
      const done=QStore.get('done:'+s.slug)==='1';
      const memDone=(QStore.get('mem:'+s.slug)||'').split('').filter(x=>x==='1').length;
      const memTot=data?data.verses.length:1;
      const pct=Math.min(100,Math.round(memDone/memTot*100));
      const c=el('button','surah-fruit'+(done?' done':''));
      c.innerHTML=`<span class="num-badge">${s.num}</span>
        <span class="seal">⭐</span>
        <div class="emblem">${s.emoji}</div>
        <div class="s-name quran-ar">${lang==='ar'?s.nameAr:s.nameEn}</div>
        <div class="s-meta">${(lang==='ar'?s.metaAr:s.metaEn)}</div>
        <div class="s-prog"><div class="bar"><div class="fill" style="width:${pct}%"></div></div><span>${pct}%</span></div>`;
      c.addEventListener('click',()=>openSurah(s.slug));
      root.appendChild(c);
    });
    // progress garden
    const row=document.getElementById('gpRow');
    if(row){ row.innerHTML='';
      window.SURAH_INDEX.forEach(s=>{
        const grown=QStore.get('done:'+s.slug)==='1';
        const p=el('div','gp-plant'+(grown?' grown':''),grown?(s.tree||'🌳'):'🌱');
        p.title=lang==='ar'?s.nameAr:s.nameEn;
        p.style.cursor='pointer'; p.addEventListener('click',()=>openSurah(s.slug));
        row.appendChild(p);
      });
    }
    const doneCount=window.SURAH_INDEX.filter(s=>QStore.get('done:'+s.slug)==='1').length;
    const gp=document.getElementById('gpCount');
    if(gp)gp.textContent = lang==='ar'
      ? `أتممتَ ${doneCount} من ${window.SURAH_INDEX.length} سور — كل سورة تزرع شجرة!`
      : `You finished ${doneCount}/${window.SURAH_INDEX.length} surahs — each grows a tree!`;
  }

  /* ───── confetti / toast ───── */
  function confetti(){const r=document.getElementById('confetti');if(!r)return;
    const cols=['#1A9B7B','#E8A82F','#EC6A8C','#5BB8E8','#FFD56B','#7CC576'];
    for(let i=0;i<54;i++){const p=el('div','cf-piece');p.style.left=Math.random()*100+'%';
      p.style.background=cols[Math.floor(Math.random()*cols.length)];
      p.style.animationDelay=(Math.random()*.6)+'s';p.style.animationDuration=(1.7+Math.random()*1.4)+'s';
      p.style.width=(6+Math.random()*8)+'px';p.style.height=(10+Math.random()*9)+'px';
      r.appendChild(p);setTimeout(()=>p.remove(),3600);}}
  let tT;
  function toast(m,t){const e=document.getElementById('toast');if(!e)return;e.textContent=m;
    e.className='toast show '+(t||'');clearTimeout(tT);tT=setTimeout(()=>e.classList.remove('show'),2400);}

  /* ───── OPEN SURAH (book) ───── */
  function openSurah(slug,inReaderNav){
    const wasReading=document.body.classList.contains('reading');
    cur=slug;
    const s=window.SURAH_INDEX.find(x=>x.slug===slug);
    const d=window.SURAHS[slug];
    document.body.classList.add('reading');
    location.hash='#'+slug;
    const book=document.getElementById('book');
    document.getElementById('rNm').textContent = lang==='ar'?s.nameAr:s.nameEn;
    document.getElementById('rMt').textContent = lang==='ar'?s.metaAr:s.metaEn;
    if(inReaderNav && wasReading){
      // surah→surah: swap like house→house — header/tabs change instantly,
      // the active pane rises in with the same fadeUp the house rooms use.
      book.style.animation='none';        // no 3D flip; content fade handles the motion
      renderBook(s,d);
    } else {
      // fresh entry from the garden keeps the book's flip-in entrance
      book.style.animation='none'; void book.offsetWidth; book.style.animation='';
      renderBook(s,d);
    }
    window.scrollTo({top:0});
  }
  function closeSurah(){if(_stopStory)_stopStory();cur=null;document.body.classList.remove('reading');location.hash='';}
  function navSurah(dir){const list=window.SURAH_INDEX;let i=list.findIndex(x=>x.slug===cur);
    if(i<0)return;i=(i+dir+list.length)%list.length;openSurah(list[i].slug,true);}

  /* ───── RENDER BOOK ───── */
  function renderBook(s,d){
    if(_stopPlayer)_stopPlayer();
    if(_stopStory)_stopStory();
    const book=document.getElementById('book');
    book.innerHTML='';
    // scene header
    const scene=el('div','b-scene');
    scene.innerHTML=`<div class="s-sun"></div>
      <div class="s-tree" style="inset-inline-start:14px">🌳</div>
      <div class="s-tree" style="inset-inline-end:16px;font-size:1.2rem">🌴</div>
      <div class="s-emoji">${s.emoji}</div><div class="s-hill"></div>
      <button class="b-listen" title="${lang==='ar'?'استمع للتلاوة':'Listen'}">▶</button>
      <span class="b-pg">${lang==='ar'?'سورة':'#'} ${s.num}</span>`;
    scene.querySelector('.b-listen').addEventListener('click',()=>{
      // make sure the Verses tab is active, then toggle play
      const vt=document.querySelectorAll('.b-tab')[0]; if(vt)vt.click();
      if(_togglePlay)_togglePlay(); else toast(lang==='ar'?'افتح تبويب الآيات':'Open the Verses tab','');
    });
    book.appendChild(scene);
    // crest
    const crest=el('div','b-crest');
    crest.innerHTML=`<div class="arch quran-ar">${lang==='ar'?s.nameAr:s.nameEn}</div>
      <div class="mt">${lang==='ar'?s.metaAr:s.metaEn}${d&&d.tagline?' · '+tr(d.tagline):''}</div>`;
    book.appendChild(crest);
    if(!d){ book.appendChild(el('div','b-body','<div style="text-align:center;padding:2rem;color:#9A8B6C">قريباً</div>')); return; }

    // tabs — built conditionally so empty rooms never show
    const TABS=[{id:'verses', em:'📖', ar:'الآيات', en:'Verses'}];
    if(d.about) TABS.push({id:'about', em:'⭐', ar:'بِطاقةُ السُّورة', en:'Surah Card'});
    if((d.tafsir&&d.tafsir.length)||(d.tadabbur&&d.tadabbur.length))
      TABS.push({id:'tafsir', em:'🌱', ar:'التَّفسيرُ والتَّدبُّر', en:'Tafsir & Reflect'});
    if(d.story) TABS.push({id:'story', em:'📜', ar:'قصةُ السُّورة', en:'The Story'});
    TABS.push({id:'practice', em:'🎒', ar:'كُنوزُ السُّورة', en:'Treasures of the Surah'});
    if(d.game) TABS.push({id:'game', em:'🦸', ar:'ميدانُ الأبطال', en:'Heroes\u2019 Arena'});

    const PANE={
      verses:()=>paneVerses(s,d),
      about:()=>paneAbout(d),
      tafsir:()=>paneTafsirReflect(d),
      story:()=>paneStory(d),
      practice:()=>panePractice(s,d),
      game:()=>paneGame(s,d),
    };

    const tabs=el('div','b-tabs');
    const body=el('div','b-body');
    TABS.forEach((t,i)=>{
      const b=el('button','b-tab'+(i===0?' active':''));
      b.dataset.tabid=t.id;
      b.innerHTML=`<span>${t.em}</span><span>${lang==='ar'?t.ar:t.en}</span>`;
      b.addEventListener('click',()=>{
        tabs.querySelectorAll('.b-tab').forEach(x=>x.classList.remove('active'));
        b.classList.add('active');
        body.querySelectorAll('.b-pane').forEach(p=>p.classList.remove('active'));
        body.querySelector('#pane-'+t.id).classList.add('active');
      });
      tabs.appendChild(b);
    });
    book.appendChild(tabs); book.appendChild(body);
    TABS.forEach((t,i)=>{ const p=PANE[t.id](); p.classList.toggle('active',i===0); body.appendChild(p); });
  }

  /* ── verses pane ── */
  function paneVerses(s,d){
    const pane=el('div','b-pane active'); pane.id='pane-verses';
    const frame=el('div','v-frame');
    frame.innerHTML='<span class="v-corner tl"></span><span class="v-corner tr"></span><span class="v-corner bl"></span><span class="v-corner br"></span>';
    const cloud=el('div','word-cloud'); cloud.style.display='none';
    let _cloudT=null;
    function showCloud(anchor,word,meaning){
      cloud.innerHTML=`<span class="wc-x" aria-hidden="true">×</span>`+
        `<b class="wc-word quran-ar">${word}</b><span class="wc-eq">=</span><span class="wc-mean">${meaning}</span>`;
      cloud.style.display='';
      cloud.classList.remove('pop'); void cloud.offsetWidth; cloud.classList.add('pop');
      const fr=frame.getBoundingClientRect(), r=anchor.getBoundingClientRect();
      const cw=cloud.offsetWidth, ch=cloud.offsetHeight;
      let left=r.left-fr.left+r.width/2-cw/2;
      left=Math.max(8,Math.min(left,fr.width-cw-8));
      let top=r.top-fr.top-ch-12;
      let below=false;
      if(top<4){ top=r.bottom-fr.top+12; below=true; }
      cloud.style.left=left+'px'; cloud.style.top=top+'px';
      cloud.classList.toggle('below',below);
      const tip=Math.max(14,Math.min(r.left-fr.left+r.width/2-left,cw-14));
      cloud.style.setProperty('--tip',tip+'px');
      clearTimeout(_cloudT); _cloudT=setTimeout(hideCloud,4200);
    }
    function hideCloud(){ cloud.style.display='none'; frame.querySelectorAll('.w.lit').forEach(x=>x.classList.remove('lit')); }
    cloud.addEventListener('click',hideCloud);
    let tajweedOn = QStore.get('tajweed')==='1';

    // ── recitation player bar ──
    const player=el('div','v-player');
    const repN=parseInt(QStore.get('repeat')||'1',10);
    const loopOn=QStore.get('loopsurah')==='1';
    player.innerHTML=
      `<div class="vp-row vp-main">`+
        `<button class="vp-btn vp-play" aria-label="play">▶</button>`+
        `<button class="vp-btn vp-prev" aria-label="prev">⏮</button>`+
        `<button class="vp-btn vp-next" aria-label="next">⏭</button>`+
        `<span class="vp-now">${lang==='ar'?'اضغط ▶ أو آيةً للاستماع':'Tap ▶ or any verse'}</span>`+
      `</div>`+
      `<div class="vp-row vp-opts">`+
        `<label class="vp-lab">🎙️<select class="vp-reciter">`+
          RECITERS.map(r=>`<option value="${r.id}"${r.id===reciterId()?' selected':''}>${lang==='ar'?r.ar:r.en}</option>`).join('')+
        `</select></label>`+
        `<label class="vp-lab">🔁<select class="vp-rep">`+
          [1,2,3,5,7].map(n=>`<option value="${n}"${n===repN?' selected':''}>${lang==='ar'?('كرّر ×'+n):('repeat ×'+n)}</option>`).join('')+
        `</select></label>`+
        `<button class="vp-loop${loopOn?' on':''}">🔂 ${lang==='ar'?'كرّر السورة':'Loop surah'}</button>`+
      `</div>`;
    pane.appendChild(player);

    // ── tajweed colour toggle ──
    const ctrl=el('div','v-controls');
    const tjBtn=el('button','tj-toggle'+(tajweedOn?' on':''));
    tjBtn.innerHTML = '🎨 '+(lang==='ar'?'تلوين التجويد':'Tajweed colours');
    ctrl.appendChild(tjBtn);
    pane.appendChild(ctrl);

    // ── player state + logic ──
    const playBtn=player.querySelector('.vp-play');
    const nowLbl=player.querySelector('.vp-now');
    const audio=getAudio();
    let repeatEach=repN, repeatLeft=repN, loopSurah=loopOn;
    let playing=false, idx=-1, started=false;
    let cyclesLeft=1, ending=false;     // full-surah repeat tracking (manual, no native loop)
    const nVerses=d.verses.length;
    // ── full-surah mode (Sheikh recites, children repeat) ──
    function setNowFull(){
      const tag = loopSurah ? (lang==='ar'?' · تكرار مستمر 🔂':' · loop 🔂')
                : (repeatEach>1 ? (lang==='ar'?(' · كرّر '+repeatEach+'×'):(' · ×'+repeatEach)) : '');
      nowLbl.textContent = (lang==='ar'
        ? '🧒 الشيخ الحُصري يقرأ والأطفال يُرَدِّدون'
        : '🧒 The Sheikh recites, the children repeat') + tag;
    }
    function playFull(){
      idx=0; started=true; ending=false; highlight(-1);
      cyclesLeft = loopSurah ? Infinity : Math.max(1,repeatEach);
      setNowFull();
      audio.loop=false;                  // drive repeat manually so playback can't get stuck on a non-seekable stream
      audio.src=surahFullUrl(s.num);
      audio.play().then(()=>{playing=true;playBtn.textContent='⏸';})
        .catch(()=>{ nowLbl.textContent=lang==='ar'?'تعذّر تحميل الصوت':'Audio unavailable'; });
    }
    // restart the surah from the top for the next repeat
    function replayFull(){
      audio.loop=false;
      audio.src=surahFullUrl(s.num);
      audio.play().then(()=>{playing=true;playBtn.textContent='⏸'; ending=false;})
        .catch(()=>{ ending=false; });
    }
    // one full pass finished — repeat, loop, or stop (debounced so timeupdate near-end fires once)
    function cycleEnd(){
      if(!isFull()||ending) return; ending=true;
      if(loopSurah){ replayFull(); return; }
      if(cyclesLeft>1){ cyclesLeft--; setNowFull(); replayFull(); return; }
      stop(); toast(lang==='ar'?'✓ أحسنت! أتممتَ السورة مع الأطفال':'✓ Well done — surah finished!','success');
    }
    if(isFull()) nowLbl.textContent = lang==='ar'?'🧒 اضغط ▶ لتقرأ مع الشيخ والأطفال':'🧒 Tap ▶ to recite with the Sheikh & children';

    function highlight(i){
      _curHi=i;
      frame.querySelectorAll('.ayah-grp.playing').forEach(g=>g.classList.remove('playing'));
      if(i>=0){
        const g=frame.querySelector('.ayah-grp[data-ayah="'+i+'"]');
        if(g){ g.classList.add('playing');
          const ae=g.querySelector('.ayah-end');
          (ae||g).scrollIntoView({block:'center',behavior:'smooth'}); }
      }
    }
    function setNow(i){
      const num=String(i+1).replace(/[0-9]/g,c=>'٠١٢٣٤٥٦٧٨٩'[c]);
      nowLbl.textContent=(lang==='ar'?('الآية '+num+(repeatEach>1?(' · كرّر '+repeatEach+'×'):'')):('Verse '+(i+1)+(repeatEach>1?(' · ×'+repeatEach):'')));
    }
    function load(i){ audio.src=verseUrl(s.num,i+1); }
    function playVerse(i){
      audio.loop=false;
      idx=i; highlight(i); setNow(i); load(i);
      audio.play().then(()=>{playing=true;playBtn.textContent='⏸';})
        .catch(()=>{ nowLbl.textContent=lang==='ar'?'تعذّر تحميل الصوت':'Audio unavailable'; });
    }
    function stop(){
      playing=false; audio.pause(); audio.loop=false; ending=false;
      try{audio.currentTime=0;}catch(e){}
      playBtn.textContent='▶'; highlight(-1); _curHi=-1; started=false;
      nowLbl.textContent = isFull()
        ? (lang==='ar'?'🧒 اضغط ▶ لتقرأ مع الشيخ والأطفال':'🧒 Tap ▶ to recite with the Sheikh & children')
        : (lang==='ar'?'اضغط ▶ أو آيةً للاستماع':'Tap ▶ or any verse');
    }
    function playFrom(i){ repeatLeft=repeatEach; playVerse(i); }
    function toggle(){
      if(isFull()){
        if(playing){ playing=false; audio.pause(); playBtn.textContent='▶'; }
        else if(started){ audio.play().then(()=>{playing=true;playBtn.textContent='⏸';}).catch(()=>{}); }
        else { repeatLeft=repeatEach; playFull(); }
        return;
      }
      if(playing){ playing=false; audio.pause(); playBtn.textContent='▶'; }
      else if(idx>=0){ audio.play().then(()=>{playing=true;playBtn.textContent='⏸';}).catch(()=>{}); }
      else { playFrom(0); }
    }
    audio.onerror=()=>{
      if(!isFull())return;
      playing=false; playBtn.textContent='▶';
      nowLbl.textContent=lang==='ar'?'تعذّر تحميل الصوت — تأكّد من الاتصال وجرّب ثانية':'Couldn’t load audio — check your connection and try again';
    };
    // full-surah repeat counter: detect when native loop wraps the audio back to the start
    // detect end via timeupdate (fires reliably during playback even when 'ended' is flaky on long streams)
    audio.ontimeupdate=()=>{
      if(!isFull()||!playing) return;
      const t=audio.currentTime, dur=audio.duration||0;
      if(dur>1 && t>=dur-0.4 && (loopSurah||cyclesLeft>1)) cycleEnd();
    };
    audio.onended=()=>{
      if(isFull()){ cycleEnd(); return; }
      if(repeatLeft>1){ repeatLeft--; setNow(idx); audio.currentTime=0; audio.play().catch(()=>{}); return; }
      if(idx<nVerses-1){ repeatLeft=repeatEach; playVerse(idx+1); }
      else if(loopSurah){ repeatLeft=repeatEach; playVerse(0); }
      else { stop(); toast(lang==='ar'?'✓ تمت التلاوة':'✓ Recitation complete','success'); }
    };
    playBtn.addEventListener('click',toggle);
    player.querySelector('.vp-prev').addEventListener('click',()=>{
      if(isFull()){ try{audio.currentTime=Math.max(0,audio.currentTime-10);}catch(e){} return; }
      if(idx>0)playFrom(idx-1); else playFrom(0);
    });
    player.querySelector('.vp-next').addEventListener('click',()=>{
      if(isFull()){ try{ if(isFinite(audio.duration)) audio.currentTime=Math.min(audio.duration-0.3,audio.currentTime+10); }catch(e){} return; }
      if(idx<nVerses-1)playFrom(idx+1);
    });
    player.querySelector('.vp-reciter').addEventListener('change',e=>{
      QStore.set('reciter',e.target.value);
      stop();   // reset cleanly when switching between per-ayah and full-surah reciters
    });
    player.querySelector('.vp-rep').addEventListener('change',e=>{
      repeatEach=parseInt(e.target.value,10); repeatLeft=repeatEach;
      QStore.set('repeat',String(repeatEach));
      if(isFull()){
        if(!loopSurah) cyclesLeft=Math.max(1,repeatEach);
        if(started)setNowFull();
      }
      else if(idx>=0)setNow(idx);
    });
    const loopBtn=player.querySelector('.vp-loop');
    loopBtn.addEventListener('click',()=>{
      loopSurah=!loopSurah; loopBtn.classList.toggle('on',loopSurah); QStore.set('loopsurah',loopSurah?'1':'0');
      if(isFull()){
        cyclesLeft = loopSurah ? Infinity : Math.max(1,repeatEach);
        if(started)setNowFull();
      }
    });
    _togglePlay=toggle; _playFrom=playFrom; _stopPlayer=stop;

    function buildFlow(){
      [...frame.querySelectorAll('.ayah-flow,.basmalah,.bism-trans')].forEach(x=>x.remove());
      const showTrans = (lang==='en');
      if(d.bismillah!==false){
        const b=el('div','ayah quran-ar basmalah');
        b.innerHTML = tajweedOn ? tajweedHTML('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ') : 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ';
        frame.appendChild(b);
        if(showTrans){
          const bt=el('div','bism-trans','In the name of Allah, the Most Gracious, the Most Merciful.');
          frame.appendChild(bt);
        }
      }
      const flow=el('div','ayah-flow quran-ar'+(showTrans?' flow-trans':''));
      d.verses.forEach((v,vi)=>{
        const grp=el('span','ayah-grp'); grp.dataset.ayah=vi;
        const tokens=v.ar.split(' ');
        const wordMap={};
        (v.words||[]).forEach(w=>{ wordMap[w.w]={m:w.m,c:w.c}; });
        tokens.forEach((tok)=>{
          const clean=tok;
          const info=wordMap[clean];
          const span=el('span','w'+(info?' has':''));
          if(tajweedOn) span.innerHTML=tajweedHTML(clean); else span.textContent=clean;
          if(info){
            if(info.c) span.style.setProperty('--wc', info.c), span.classList.add('coloured');
            span.addEventListener('click',(ev)=>{
              ev.stopPropagation();
              frame.querySelectorAll('.w.lit').forEach(x=>x.classList.remove('lit'));
              span.classList.add('lit');
              showCloud(span,clean,tr(info.m));
              const r=span.getBoundingClientRect(),fr=frame.getBoundingClientRect();
              ['✨','⭐'].forEach((sp,k)=>{const e=el('span','k-sparkle',sp);
                e.style.left=(r.left-fr.left+r.width/2)+'px';e.style.top=(r.top-fr.top)+'px';
                e.style.setProperty('--dx',(k?22:-22)+'px');e.style.setProperty('--dy','-26px');
                frame.appendChild(e);setTimeout(()=>e.remove(),800);});
            });
          }
          grp.appendChild(span);
          grp.appendChild(document.createTextNode(' '));
        });
        const num=el('span','ayah-end'); num.innerHTML=ayahRosette(vi+1);
        num.title=lang==='ar'?'▶ استمع لهذه الآية':'▶ Play this verse';
        grp.appendChild(num);
        // tap a verse (rosette or empty area) to play from it
        grp.addEventListener('click',()=>{
          if(isFull()){ if(!playing && _togglePlay)_togglePlay(); return; }
          if(_playFrom)_playFrom(vi);
        });
        flow.appendChild(grp);
        // English mode: show the translation beneath each Arabic verse
        if(showTrans && (v.std || v.trans)){
          const formal = v.std ? tr(v.std) : tr(v.trans);            // C: recognized translation
          const simple = (v.std && v.trans) ? tr(v.trans) : '';      // A: kid-friendly meaning
          const tdiv=el('div','ayah-trans');
          tdiv.innerHTML=`<span class="at-n">${vi+1}</span>`+
            `<span class="at-body"><span class="at-tx">${formal}</span>`+
            (simple?`<span class="at-simple">👧 <b>In simple words:</b> ${simple}</span>`:'')+
            `</span>`;
          flow.appendChild(tdiv);
        }
        flow.appendChild(document.createTextNode(' '));
      });
      frame.appendChild(flow);
    }
    buildFlow();
    pane.appendChild(frame);
    pane.appendChild(cloud);
    if(_curHi>=0) highlight(_curHi);

    // ── tajweed legend ──
    const legend=el('div','tj-legend');
    legend.style.display = tajweedOn?'':'none';
    legend.innerHTML =
      `<span class="tj-chip tj-ghunnah">${lang==='ar'?'غُنَّة':'Ghunnah'}</span>`+
      `<span class="tj-chip tj-qalqalah">${lang==='ar'?'قَلْقَلة':'Qalqalah'}</span>`+
      `<span class="tj-chip tj-madd">${lang==='ar'?'مَدّ':'Madd'}</span>`;
    pane.appendChild(legend);

    tjBtn.addEventListener('click',()=>{
      tajweedOn=!tajweedOn; QStore.set('tajweed',tajweedOn?'1':'0');
      tjBtn.classList.toggle('on',tajweedOn);
      legend.style.display = tajweedOn?'':'none';
      buildFlow();
    });

    pane.appendChild(el('div','v-hint','👆 '+(lang==='ar'?'اضغط الكلمات المُلوَّنة ليظهر معناها':'Tap the coloured words to see their meaning')));
    return pane;
  }

  /* ── traditional ayah-end rosette (gold flower medallion) ── */
  function ayahRosette(n){
    const num=String(n).replace(/[0-9]/g,c=>'٠١٢٣٤٥٦٧٨٩'[c]);
    let petals='';
    for(let k=0;k<16;k++){const a=k/16*2*Math.PI;
      petals+=`<circle cx="${(22+Math.cos(a)*15.5).toFixed(1)}" cy="${(22+Math.sin(a)*15.5).toFixed(1)}" r="2.2"/>`;}
    return `<svg viewBox="0 0 44 44" aria-hidden="true">`+
      `<g fill="#E3B53A">${petals}</g>`+
      `<circle cx="22" cy="22" r="13.5" fill="#FBF1CF" stroke="#C9A227" stroke-width="1.1"/>`+
      `<circle cx="22" cy="22" r="10" fill="#FCF8EA" stroke="#D9B84A" stroke-width=".8"/>`+
      `</svg><span class="ae-num">${num}</span>`;
  }

  /* ── tajweed colouriser (3 clear, reliably-detectable rules) ── */
  function tajweedHTML(text){
    const SH='\u0651', SK='\u0652', MD='\u0653', DG='\u0670'; // shadda, sukoon, maddah, dagger-alef
    const isMark=ch=>{const c=ch.codePointAt(0);return (c>=0x064B&&c<=0x065F)||c===0x0670||c===0x0640;};
    let i=0,out='';
    while(i<text.length){
      const base=text[i]; i++;
      if(base===' '){out+=' ';continue;}
      let marks='';
      while(i<text.length&&isMark(text[i])){marks+=text[i];i++;}
      const has=ch=>marks.indexOf(ch)>=0;
      let cls='';
      if((base==='ن'||base==='م')&&has(SH)) cls='tj-ghunnah';            // نّ مّ → غنة
      else if('قطبجد'.indexOf(base)>=0&&has(SK)) cls='tj-qalqalah';       // ق ط ب ج د ساكنة → قلقلة
      else if(has(MD)||has(DG)||base==='آ') cls='tj-madd';                // مدّ
      const seg=(base+marks).replace(/&/g,'&amp;').replace(/</g,'&lt;');
      out += cls?`<span class="${cls}">${seg}</span>`:seg;
    }
    return out;
  }

  function memMeter(s,d){
    const wrap=el('div','mem-meter');
    const saved=(QStore.get('mem:'+s.slug)||'').split('');
    wrap.innerHTML=`<div class="mm-top"><b>📖 ${lang==='ar'?'عدّاد الحفظ':'Memorize meter'}</b><span id="memN">0/${d.verses.length}</span></div>`;
    d.verses.forEach((v,i)=>{
      const id='mem-'+s.slug+'-'+i;
      const row=el('label','mem-check');
      row.innerHTML=`<input type="checkbox" id="${id}"> ${lang==='ar'?'آية':'Ayah'} ${toArabicNum(i+1)}`;
      const cb=row.querySelector('input');
      if(saved[i]==='1')cb.checked=true;
      cb.addEventListener('change',()=>{
        const arr=d.verses.map((_,j)=>wrap.querySelectorAll('input')[j].checked?'1':'0');
        QStore.set('mem:'+s.slug,arr.join(''));
        wrap.querySelector('#memN').textContent=arr.filter(x=>x==='1').length+'/'+d.verses.length;
        buildGarden();
      });
      wrap.appendChild(row);
    });
    setTimeout(()=>{const n=saved.filter(x=>x==='1').length;const e=wrap.querySelector('#memN');if(e)e.textContent=n+'/'+d.verses.length;},0);
    return wrap;
  }

  /* ── merged tafsir + tadabbur pane ── */
  function paneTafsirReflect(d){
    const pane=el('div','b-pane'); pane.id='pane-tafsir';
    if(d.tafsir&&d.tafsir.length){
      pane.appendChild(qDivider('🌱', lang==='ar'?'تفسيرُ الصِّغار':'Kids Tafsir', lang==='ar'?'معاني الآياتِ ببساطة':'The verses made simple'));
      (d.tafsir||[]).forEach((t,i)=>{
        const c=el('div','tafsir-card');
        c.innerHTML=`<span class="tc-step">${toAr(i+1)}</span>`+
          `<div class="tc-body">${t.ayah?`<span class="tc-num">${lang==='ar'?'آية':'Ayah'} ${tr(t.ayah)}</span>`:''}<p>${tr(t)}</p></div>`;
        pane.appendChild(c);
      });
    }
    if(d.tadabbur&&d.tadabbur.length){
      pane.appendChild(qDivider('🏮', lang==='ar'?'وقفاتُ تدبُّر':'Reflections', lang==='ar'?'اضغطِ الفانوس لتُضيءَ المعنى':'Tap the lantern to light the meaning'));
      (d.tadabbur||[]).forEach(t=>{
        const c=el('div','tad-card');
        c.innerHTML=`<div class="tad-q"><span class="lamp">🏮</span><span>${tr(t.q)}</span></div><div class="tad-a">${tr(t.a)}</div>`;
        c.addEventListener('click',()=>c.classList.toggle('lit'));
        pane.appendChild(c);
      });
    }
    return pane;
  }
  function toAr(n){ return lang==='ar' ? String(n).replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]) : String(n); }

  /* playful emoji-circle section divider (matches the Little District houses) */
  function qDivider(emoji,title,sub){
    const d=el('div','q-div');
    d.innerHTML=`<span class="q-div-ic">${emoji}</span>`+
      `<span class="q-div-t">${title}${sub?`<small>${sub}</small>`:''}</span>`;
    return d;
  }

  /* ── about / surah-card pane (names · virtue · themes) ── */
  function paneAbout(d){
    const pane=el('div','b-pane'); pane.id='pane-about';
    const a=d.about||{};
    // intro → mascot speech-bubble banner
    if(a.intro){
      const b=el('div','q-banner');
      b.innerHTML=`<div class="q-mascot">📖</div>`+
        `<div class="q-bubble">${tr(a.intro)}</div>`+
        `<div class="q-banner-tag">${lang==='ar'?'تعرَّفْ على سُورتِك':'Meet your surah'}</div>`;
      pane.appendChild(b);
    }
    // names → tap-to-flip cards
    if(a.names&&a.names.length){
      pane.appendChild(qDivider('🏷️', lang==='ar'?'أسماؤها':'Its Names', lang==='ar'?'اضغطِ البِطاقة لتعرفَ لِماذا':'Tap a card to see why'));
      const grid=el('div','q-flipgrid');
      a.names.forEach((n,i)=>{
        const card=el('div','q-flipcard'); card.style.setProperty('--fc', NAME_COLORS[i%NAME_COLORS.length]);
        card.innerHTML=
          `<div class="q-flip-inner">`+
            `<div class="q-flip-face q-flip-front">`+
              `<span class="q-flip-em">⭐</span>`+
              `<span class="q-flip-nm quran-ar">${tr(n.name)}</span>`+
              (n.why?`<span class="q-flip-hint">${lang==='ar'?'لِماذا؟ 👆':'why? 👆'}</span>`:'')+
            `</div>`+
            `<div class="q-flip-face q-flip-back"><span>${n.why?tr(n.why):tr(n.name)}</span></div>`+
          `</div>`;
        if(n.why) card.addEventListener('click',()=>card.classList.toggle('flipped'));
        grid.appendChild(card);
      });
      pane.appendChild(grid);
    }
    // virtues → glowing star cards
    if(a.virtues&&a.virtues.length){
      pane.appendChild(qDivider('✨', lang==='ar'?'فضلُها':'Its Virtue', lang==='ar'?'كنوزُ هذه السُّورة':'Treasures of this surah'));
      a.virtues.forEach(v=>{
        const c=el('div','q-virtue');
        c.innerHTML=`<span class="q-virtue-star">🌟</span><div class="q-virtue-body"><p>${tr(v.text||v)}</p>`+
          `${v.source?`<span class="q-virtue-src">📜 ${tr(v.source)}</span>`:''}</div>`;
        pane.appendChild(c);
      });
    }
    // traits → power-up chips
    if(a.traits&&a.traits.length){
      pane.appendChild(qDivider('🧭', lang==='ar'?'خصائصُها وموضوعُها':'Themes & Features'));
      const grid=el('div','q-powerups');
      a.traits.forEach((t,i)=>{
        const p=el('div','q-power'); p.style.setProperty('--pc', NAME_COLORS[i%NAME_COLORS.length]);
        p.innerHTML=`<span class="q-power-em">${TRAIT_EMOJI[i%TRAIT_EMOJI.length]}</span><span class="q-power-tx">${tr(t)}</span>`;
        grid.appendChild(p);
      });
      pane.appendChild(grid);
    }
    return pane;
  }
  const NAME_COLORS=['#27AE60','#2980B9','#E67E22','#8E44AD','#16A085','#C0392B'];
  const TRAIT_EMOJI=['🌙','📿','💎','🕊️','🌿','⭐','🔑','🏆'];

  /* ── story pane (whole story on one page + read-aloud) ── */
  function paneStory(d){
    const pane=el('div','b-pane story-pane'); pane.id='pane-story';
    const st=d.story||{pages:[]};
    if(st.title){ pane.appendChild(el('div','game-q','📜 '+tr(st.title))); }
    pane.appendChild(el('div','sp-scene','<span class="big">'+(st.emoji||'📜')+'</span>'));

    // read-aloud control
    const bar=el('div','sp-readbar');
    const btn=el('button','sp-read-btn');
    const label=p=> btn.innerHTML = p ? '⏹ <span>'+(lang==='ar'?'إيقاف القراءة':'Stop')+'</span>'
                                       : '🔊 <span>'+(lang==='ar'?'اقرأ لي القصّة':'Read to me')+'</span>';
    label(false);
    bar.appendChild(btn);
    pane.appendChild(bar);

    // all story beats stacked on one page
    const beats=[];
    st.pages.forEach(p=>{
      const beat=el('div','sp-beat');
      beat.appendChild(el('div','sp-beat-ic', p.emoji||st.emoji||'📖'));
      const tx=el('div','sp-beat-text'); tx.innerHTML=tr(p.text);
      beat.appendChild(tx);
      pane.appendChild(beat);
      beats.push(beat);
    });

    // ── read-aloud via Web Speech API ──
    let playing=false;
    function clearHi(){ beats.forEach(b=>b.classList.remove('reading')); }
    function stop(){ playing=false; try{ if(window.speechSynthesis) speechSynthesis.cancel(); }catch(e){} clearHi(); label(false); }
    function play(){
      if(!('speechSynthesis' in window)){ toast(lang==='ar'?'القراءة الصوتية غير متاحة على هذا الجهاز':'Read-aloud is not available on this device'); return; }
      speechSynthesis.cancel();
      playing=true; label(true);
      let i=0;
      (function speakNext(){
        if(!playing||i>=st.pages.length){ stop(); return; }
        clearHi();
        const beat=beats[i]; beat.classList.add('reading');
        try{ beat.scrollIntoView({block:'nearest',behavior:'smooth'}); }catch(e){}
        const raw=tr(st.pages[i].text).replace(/<[^>]+>/g,'').trim();
        const u=new SpeechSynthesisUtterance(window.MKVoice?MKVoice.fixText(raw):raw);
        u.lang = lang==='ar' ? 'ar-SA' : 'en-US';
        u.rate = 0.92;
        var __bv=(window.MKVoice&&MKVoice.bestVoice(lang))||null; if(__bv){u.voice=__bv;u.lang=__bv.lang;}
        u.onend=()=>{ i++; speakNext(); };
        u.onerror=()=>{ i++; speakNext(); };
        speechSynthesis.speak(u);
      })();
    }
    btn.addEventListener('click',()=>{ playing ? stop() : play(); });
    _stopStory=stop;
    return pane;
  }

  /* ── game pane ── */
  function paneGame(s,d){
    const pane=el('div','b-pane'); pane.id='pane-game';
    const g=d.game;
    if(!g){pane.innerHTML='<div style="text-align:center;color:#9A8B6C;padding:1rem">قريباً</div>';return pane;}
    if(g.kind==='order') gameOrder(pane,s,g);
    else if(g.kind==='mcq') gameMcq(pane,s,g);
    return pane;
  }
  function fb(host,m,ok){let f=host.querySelector('.game-fb');if(!f){f=el('div','game-fb');host.appendChild(f);}
    f.style.color=ok?'#137a60':'#C62828';f.textContent=m;}
  function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}

  function gameOrder(pane,s,g){
    pane.appendChild(el('div','game-q','🧩 '+tr(g.prompt||{ar:'رتّب كلمات الآية',en:'Put the verse in order'})));
    const target=(g.words||[]);
    const built=el('div','order-built');
    const tray=el('div','order-tray');
    const placed=[];
    let order=shuffle(target.map((w,i)=>({w,i})));
    if(target.length>1 && order.map(o=>o.i).join()===target.map((_,i)=>i).join())order=shuffle(order);
    function refresh(){built.innerHTML='';placed.forEach(p=>{const t=el('span','order-tile quran-ar',p.w);built.appendChild(t);});built.classList.toggle('filled',placed.length>0);}
    function check(){if(placed.length!==target.length)return;
      const ok=placed.every((p,i)=>p.w===target[i]);
      if(ok){tray.querySelectorAll('button').forEach(b=>b.disabled=true);
        if(QStore.get('game:'+s.slug)!=='1'){QStore.set('game:'+s.slug,'1');}
        fb(pane,lang==='ar'?'✓ أحسنت! ترتيب صحيح':'✓ Correct order!',true);maybeComplete(s);}
      else{fb(pane,lang==='ar'?'✗ ليس بعد — اضغط كلمة لإزالتها':'✗ Not yet — tap to remove',false);}}
    order.forEach(o=>{const b=el('button','order-tile quran-ar',o.w);
      b.addEventListener('click',()=>{if(b.disabled)return;b.disabled=true;b.classList.add('used');placed.push(o);refresh();check();});
      tray.appendChild(b);});
    built.addEventListener('click',()=>{if(!placed.length)return;const last=placed.pop();
      [...tray.children].find(c=>c.textContent===last.w&&c.disabled).disabled=false;
      [...tray.children].find(c=>c.classList.contains('used')&&c.textContent===last.w)?.classList.remove('used');refresh();});
    const reset=el('button','order-reset',lang==='ar'?'🔄 إعادة':'🔄 Reset');
    reset.addEventListener('click',()=>{placed.length=0;tray.querySelectorAll('button').forEach(b=>{b.disabled=false;b.classList.remove('used');});refresh();fb(pane,'',true);});
    pane.appendChild(built);pane.appendChild(tray);pane.appendChild(reset);
    refresh();
  }
  function gameMcq(pane,s,g){
    (g.items||[]).forEach((it,qi)=>{
      const m=el('div','q-mcq');
      m.appendChild(el('div','game-q','🎯 '+tr(it.q)));
      const letters=lang==='ar'?['أ','ب','ج','د']:['A','B','C','D'];
      it.opts.forEach((o,j)=>{
        const b=el('button','q-opt');
        b.innerHTML=`<span class="lt">${letters[j]}</span><span>${tr(o.t)}</span>`;
        b.addEventListener('click',()=>{if(m.dataset.done)return;
          if(o.c){b.classList.add('ok');m.dataset.done='1';[...m.querySelectorAll('.q-opt')].forEach(x=>x.disabled=true);
            fb(pane,lang==='ar'?'✓ صحيح!':'✓ Correct!',true);
            if([...pane.querySelectorAll('.q-mcq')].every(x=>x.dataset.done)){QStore.set('game:'+s.slug,'1');maybeComplete(s);}}
          else{b.classList.add('bad');b.disabled=true;fb(pane,lang==='ar'?'✗ حاول ثانية':'✗ Try again',false);}});
        m.appendChild(b);
      });
      pane.appendChild(m);
    });
  }

  /* ── practice / living-it pane (lesson + action steps + completion) ── */
  function panePractice(s,d){
    const pane=el('div','b-pane'); pane.id='pane-practice';
    if(d.lesson){
      const c=el('div','lesson-card');
      c.innerHTML=`<div class="lc-h">${lang==='ar'?'درسٌ أعيشُه اليوم':'A lesson I live today'}</div><div class="lc-t">${tr(d.lesson)}</div>`;
      pane.appendChild(c);
    }
    if(d.practice&&d.practice.length){
      pane.appendChild(qDivider('✅', lang==='ar'?'كيف أعملُ بها؟':'How do I live it?', lang==='ar'?'خطواتٌ أفعلُها اليوم':'Steps I do today'));
      d.practice.forEach((p,i)=>{
        const c=el('div','practice-step');
        c.innerHTML=`<span class="ps-ic">${p.icon||'✅'}</span><div class="ps-tx"><b>${tr(p.title)}</b>${p.body?`<span>${tr(p.body)}</span>`:''}</div><span class="ps-no">${toAr(i+1)}</span>`;
        pane.appendChild(c);
      });
    }
    if(d.action){pane.appendChild(el('div','lesson-do','🌟 '+tr(d.action)));}

    const done=QStore.get('done:'+s.slug)==='1';
    const treasures=(d.treasures)||[];

    /* ── COLORFUL STICKERS ── */
    if(treasures.length){
      pane.appendChild(qDivider('🎒', lang==='ar'?'كُنوزُ السُّورة':'Surah Treasures',
        lang==='ar'?'ملصقاتٌ مُلوَّنة وشهادةٌ باسمِك ✨':'Colorful stickers & a certificate with your name ✨'));
      const head=el('div','q-stk-head');
      const earned=(QStore.get('stickers:'+s.slug)||'').split(',').filter(Boolean);
      head.innerHTML=`<span class="q-stk-t">🏷️ ${lang==='ar'?'ملصقاتُ السُّورة':'Surah stickers'}</span>`+
        `<span class="q-stk-n">${earned.length} / ${treasures.length}</span>`;
      pane.appendChild(head);
      const grid=el('div','stickers');
      treasures.forEach((t,i)=>{
        const isE=earned.includes(String(i));
        const st=el('div','sticker'+(isE?' earned':''));
        st.style.setProperty('--st-color', t.color||'#E8A82F');
        st.innerHTML=`<div class="em">${t.icon}</div><div class="ttl">${tr(t.title)}</div>`;
        grid.appendChild(st);
      });
      pane.appendChild(grid);
    }

    /* ── CERTIFICATE ── */
    const certText=d.certificate||{};
    const surName=lang==='ar'?s.nameAr:s.nameEn;
    const seal=d.icon||s.emoji||'🌟';
    const cert=el('div','q-cert');
    if(done){
      cert.innerHTML=`<div class="cert-card" id="qCertCard">
        <div class="cert-ribbon">🎖️ ${lang==='ar'?'وِسامُ الحافِظ':'Memory Medal'}</div>
        <div class="cert-h">${lang==='ar'?'شهادةُ إتمام':'Certificate of Completion'}</div>
        <div class="cert-h cert-h2 quran-ar">${lang==='ar'?('سُورةُ '+surName):('Surah '+surName)}</div>
        <div class="cert-sub">${tr(certText.subtitle)||(lang==='ar'?'تُمنَحُ لِمَن أتمَّ رِحلةَ هذه السُّورةِ المُباركة':'Awarded to the one who completed this blessed surah')}</div>
        <div class="cert-name-row">
          <span>${lang==='ar'?'تُمنَحُ لـ:':'Awarded to:'}</span>
          <span class="cert-name" contenteditable="true" id="qCertName">${QStore.get('name:'+s.slug)||QStore.get('childName')||''}</span>
        </div>
        <div class="cert-statement">${tr(certText.statement)||(lang==='ar'?`لِتدبُّرِه/تدبُّرِها <b>سُورةَ ${surName}</b> وحِفظِها والعملِ بها — تِلاوةً وفهماً وخُلُقاً.`:`For reflecting on, memorizing, and living <b>Surah ${surName}</b> — in recitation, understanding, and character.`)}</div>
        <div class="cert-seal" aria-hidden="true">
          <span class="em">${seal}</span>
          <span>${lang==='ar'?'ختمُ البستان':'Garden Seal'}</span>
        </div>
        <div class="cert-sig">
          <div><div class="line"></div>${lang==='ar'?'توقيعي':'Signature'}</div>
          <div><div class="line"></div><span>${new Date().toLocaleDateString(lang==='ar'?'ar-EG':'en-US')}</span></div>
        </div>
        <div class="cert-actions">
          <button class="primary" id="qCertPrint">🖨️ ${lang==='ar'?'طباعةُ الشهادة':'Print certificate'}</button>
          <button id="qCertSave">📤 ${lang==='ar'?'حفظُ الاسم':'Save name'}</button>
        </div>
      </div>`;
    } else {
      const earnedCount=(QStore.get('stickers:'+s.slug)||'').split(',').filter(Boolean).length;
      cert.innerHTML=`<div class="cert-locked">🔒 ${lang==='ar'?'أتمَّ السُّورةَ لِتفتحَ شهادتَك!':'Complete the surah to unlock your certificate!'}<br>
        <span class="cl-sub">${earnedCount}/${treasures.length} ${lang==='ar'?'ملصق · أتمَّ الخطواتِ ثُمَّ اضغطْ زِرَّ الإتمامِ أدناه':'stickers · finish the steps then tap the complete button below'}</span></div>`;
    }
    pane.appendChild(cert);
    // wire certificate (nodes are detached here, so query within `cert`)
    const certName=cert.querySelector('#qCertName');
    if(certName){
      certName.addEventListener('input',()=>{ const v=certName.textContent.trim(); QStore.set('name:'+s.slug,v); QStore.set('childName',v); });
    }
    const certPrint=cert.querySelector('#qCertPrint');
    if(certPrint){
      certPrint.addEventListener('click',()=>{
        const card=cert.querySelector('#qCertCard'); if(!card)return;
        const print=document.getElementById('qPrintArea'); if(!print)return;
        print.style.display='block'; print.innerHTML='';
        const clone=card.cloneNode(true);
        clone.querySelectorAll('.cert-actions').forEach(n=>n.remove());
        print.appendChild(clone);
        setTimeout(()=>{ window.print(); setTimeout(()=>{print.style.display='none';print.innerHTML='';},500); },100);
      });
    }
    const certSave=cert.querySelector('#qCertSave');
    if(certSave){
      certSave.addEventListener('click',()=>{ if(certName){const v=certName.textContent.trim();QStore.set('name:'+s.slug,v);QStore.set('childName',v);} toast(lang==='ar'?'✓ تم حفظ الاسم':'✓ Name saved','success'); });
    }

    const cta=el('button','complete-cta'+(done?' done':''));
    cta.textContent=done?(lang==='ar'?'✓ أتممتَ هذه السورة — أحسنت!':'✓ Surah completed — well done!')
      :(lang==='ar'?'🎒 أتمِمِ السُّورةَ واحصُلْ على شهادتِك وملصقاتِك':'🎒 Complete the surah & claim your certificate');
    cta.addEventListener('click',()=>{if(done)return;
      if(treasures.length)QStore.set('stickers:'+s.slug,[...Array(treasures.length).keys()].map(String).join(','));
      QStore.set('done:'+s.slug,'1');confetti();
      toast(lang==='ar'?'🎉 مبارك! نمت شجرة جديدة في بستانك':'🎉 A new tree grew in your garden!','success');
      buildGarden();renderBook(s,d);
      // stay on this tab after the rebuild
      setTimeout(()=>{document.querySelector('.b-tab[data-tabid="practice"]')?.click();},20);});
    pane.appendChild(cta);
    // footer nav
    const nav=el('div','sp-nav');nav.style.marginTop='1rem';
    const prev=el('button','',lang==='ar'?'← السابقة':'← Prev');
    const next=el('button','primary',lang==='ar'?'التالية →':'Next →');
    prev.addEventListener('click',()=>navSurah(-1));next.addEventListener('click',()=>navSurah(1));
    nav.appendChild(prev);nav.appendChild(next);pane.appendChild(nav);
    return pane;
  }

  function maybeComplete(s){ /* hook for future auto-complete logic */ }

  /* helpers */
  function toArabicNum(n){ if(lang!=='ar')return String(n);
    return String(n).replace(/[0-9]/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]); }

  /* ───── init ───── */
  function init(){
    document.querySelectorAll('.q-lang button, .r-lang button').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
    setLang(lang);
    document.getElementById('rBack').addEventListener('click',closeSurah);
    document.getElementById('rPrev').addEventListener('click',()=>navSurah(-1));
    document.getElementById('rNext').addEventListener('click',()=>navSurah(1));
    const h=(location.hash||'').replace('#','');
    if(h&&window.SURAHS[h])openSurah(h);
    window.addEventListener('keydown',e=>{
      if(!cur)return;
      if(e.target&&/^(INPUT|TEXTAREA)$/.test(e.target.tagName))return;
      if(e.key==='Escape')closeSurah();
      if(e.key==='ArrowLeft')navSurah(lang==='ar'?1:-1);
      if(e.key==='ArrowRight')navSurah(lang==='ar'?-1:1);
    });
  }
  return{init,setLang,openSurah,closeSurah,navSurah,buildGarden,confetti,toast};
})();
document.addEventListener('DOMContentLoaded',()=>QApp.init());
