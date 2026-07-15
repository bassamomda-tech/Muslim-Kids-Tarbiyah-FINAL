/* mkvoice-loader */(function(){try{var cs=document.currentScript,src=(cs&&cs.src)||"";var m=src.match(/^(.*\/corners\/)/);var base=m?m[1]:"";if(base&&!window.MKVoice&&!document.querySelector("script[data-mkvoice]")){var s=document.createElement("script");s.src=base+"shared/voice-engine.js";s.setAttribute("data-mkvoice","1");document.head.appendChild(s);}}catch(e){}})();
/* ═══════════════════════════════════════════════════════════════
   AL-ARBA'IN AN-NAWAWIYYAH — reader engine
   Gallery of hadith cards → reader with tabs (matn, explain,
   benefits, apply, quiz), progress + memorize seal. Bilingual.
   ─────────────────────────────────────────────────────────────── */
window.HApp = (function(){
  const P='hd:';
  const store={
    get(k){try{return localStorage.getItem(P+k)}catch(e){return null}},
    set(k,v){try{localStorage.setItem(P+k,v)}catch(e){}}
  };
  let lang = store.get('lang')||'ar';
  let cur=null;
  const tr=o=>!o?'':(lang==='ar'?o.ar:o.en);
  // bilingual: render BOTH languages; active language leads, the other follows muted
  function bi(o){
    if(!o)return'';
    const a=`<span class="bi-line bi-ar" dir="rtl">${o.ar||''}</span>`;
    const e=`<span class="bi-line bi-en" dir="ltr">${o.en||''}</span>`;
    return `<span class="bi">${lang==='ar'?(a+e):(e+a)}</span>`;
  }
  function el(t,c,h){const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e;}

  /* ───── audio: real reciter (recorded matn) + device-voice fallback ─────
     Reciter audio: متن الأربعون النووية — 42 recorded files نواوي01..42
     hosted on the Internet Archive, mapped 1:1 to hadith number.        */
  const SS = (typeof speechSynthesis!=='undefined') ? speechSynthesis : null;
  // Two recorded reciters of the 40 Nawawi matn, each split 1:1 per hadith (numbers 1..42)
  const RECITERS={
    a:{ id:'a', ar:'القارئ ١', en:'Reciter 1',
        url:n=>'https://archive.org/download/nawawi_Book-audio-mp3/nawawi'+String(n).padStart(2,'0')+'.mp3' },
    b:{ id:'b', ar:'القارئ ٢', en:'Reciter 2',
        url:n=>'https://archive.org/download/Arba3een_Nawaweya/'+RB_FILES[n] },
  };
  // encoded per-hadith filenames for Reciter 2 (Arba3een_Nawaweya)
  const RB_FILES={
1:'%D9%A1.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%A7%D9%94%D9%88%D9%84.mp3',2:'%D9%A2.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A.mp3',3:'%D9%A3.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB.mp3',4:'%D9%A4.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9.mp3',5:'%D9%A5.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3.mp3',6:'%D9%A6.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3.mp3',7:'%D9%A7.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%B9.mp3',8:'%D9%A8.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D8%B9.mp3',9:'%D9%A9.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D8%B9.mp3',10:'%D9%A1%D9%A0.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%B9%D8%A7%D8%B4%D8%B1.mp3',11:'%D9%A1%D9%A1.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AD%D8%A7%D8%AF%D9%8A%20%D8%B9%D8%B4%D8%B1.mp3',12:'%D9%A1%D9%A2.%20%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%B9%D8%B4%D8%B1.mp3',13:'%D9%A1%D9%A3.%20%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%B9%D8%B4%D8%B1.mp3',14:'%D9%A1%D9%A4.%20%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D8%B9%D8%B4%D8%B1.mp3',15:'%D9%A1%D9%A5.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D8%B9%D8%B4%D8%B1.mp3',16:'%D9%A1%D9%A6.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D8%B9%D8%B4%D8%B1.mp3',17:'%D9%A1%D9%A7.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%B9%20%D8%B9%D8%B4%D8%B1.mp3',18:'%D9%A1%D9%A8.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AB%D8%A7%D9%85%D9%86%20%D8%B9%D8%B4%D8%B1.mp3',19:'%D9%A1%D9%A9.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D8%B9%20%D8%B9%D8%B4%D8%B1.mp3',20:'%D9%A2%D9%A0.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D9%88%D9%86.mp3',21:'%D9%A2%D9%A1.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AD%D8%A7%D8%AF%D9%8A%20%D9%88%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D9%88%D9%86.mp3',22:'%D9%A2%D9%A2.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D9%88%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D9%88%D9%86.mp3',23:'%D9%A2%D9%A3.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D9%88%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D9%88%D9%86.mp3',24:'%D9%A2%D9%A4.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D9%88%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D9%88%D9%86.mp3',25:'%D9%A2%D9%A5.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D9%88%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D9%88%D9%86.mp3',26:'%D9%A2%D9%A6.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D9%88%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D9%88%D9%86.mp3',27:'%D9%A2%D9%A7.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%B9%20%D9%88%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D9%88%D9%86.mp3',28:'%D9%A2%D9%A8.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AB%D8%A7%D9%85%D9%86%20%D9%88%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D9%88%D9%86.mp3',29:'%D9%A2%D9%A9.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D8%B9%20%D9%88%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D9%88%D9%86.mp3',30:'%D9%A3%D9%A0.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D9%88%D9%86.mp3',31:'%D9%A3%D9%A1.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AD%D8%A7%D8%AF%D9%8A%20%D9%88%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D9%88%D9%86.mp3',32:'%D9%A3%D9%A2.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D9%88%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D9%88%D9%86.mp3',33:'%D9%A3%D9%A3.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D9%88%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D9%88%D9%86.mp3',34:'%D9%A3%D9%A4.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20%D9%88%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D9%88%D9%86.mp3',35:'%D9%A3%D9%A5.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%20%D9%88%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D9%88%D9%86.mp3',36:'%D9%A3%D9%A6.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%20%D9%88%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D9%88%D9%86.mp3',37:'%D9%A3%D9%A7.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%B9%20%D9%88%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D9%88%D9%86.mp3',38:'%D9%A3%D9%A8.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AB%D8%A7%D9%85%D9%86%20%D9%88%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D9%88%D9%86.mp3',39:'%D9%A3%D9%A9.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D8%B9%20%D9%88%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D9%88%D9%86.mp3',40:'%D9%A4%D9%A0.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%A7%D9%94%D8%B1%D8%A8%D8%B9%D9%88%D9%86.mp3',41:'%D9%A4%D9%A1.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AD%D8%A7%D8%AF%D9%8A%20%D9%88%D8%A7%D9%84%D8%A7%D9%94%D8%B1%D8%A8%D8%B9%D9%88%D9%86.mp3',42:'%D9%A4%D9%A2.%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D9%88%D8%A7%D9%84%D8%A7%D9%94%D8%B1%D8%A8%D8%B9%D9%88%D9%86.mp3'
  };
  let _voices=[], _spTokens=[], _spPlaying=false, _spTimer=null, _uiCb=null, _mp3=null, _mpActive=false;
  let _finishCb=null, _pendingAutoplay=false;
  const SPEEDS=[0.75,1,1.25];
  let _spRate=parseFloat(store.get('rate'))||1; if(!SPEEDS.includes(_spRate)){_spRate=_spRate<0.88?0.75:(_spRate>1.12?1.25:1);}
  let reciter=store.get('reciter')||'sheikh';   // 'sheikh'=recorded Arabic reciter · 'meaning'=English TTS
  if(reciter==='device')reciter='sheikh';        // device Arabic is now only a fallback, not a chosen mode
  let qari=store.get('qari')||'a';                // which recorded reciter: 'a' or 'b'
  if(!RECITERS[qari])qari='a';
  let _repeat=store.get('rep')||'1';             // '1' | '3' | 'inf'
  let _auto=store.get('auto')==='1';             // auto-advance to next hadith
  function _loadVoices(){ try{_voices=SS.getVoices()||[];}catch(e){_voices=[];} }
  function _arVoice(){
    if(window.MKVoice){var __b=MKVoice.bestVoice("ar"); if(__b) return __b;}
    const ar=_voices.filter(v=>/(^|[-_ ])ar([-_ ]|$)/i.test(v.lang)||/arab/i.test(v.name));
    const nat=ar.find(v=>/(natural|neural|online|premium|enhanced)/i.test(v.name)); // prefer high-quality voices
    if(nat)return nat;
    const pref=['Majed','Maged','Tarik','Naayf','Laila','Hala','Amira','Mariam','Salim'];
    for(const n of pref){const m=ar.find(v=>v.name&&v.name.toLowerCase().includes(n.toLowerCase()));if(m)return m;}
    return ar.find(v=>/ar[-_]?sa/i.test(v.lang))||ar.find(v=>/ar[-_]?eg/i.test(v.lang))||ar[0]||null;
  }
  function _enVoice(){
    const en=_voices.filter(v=>/^en/i.test(v.lang));
    return en.find(v=>/(natural|neural|online|premium|enhanced)/i.test(v.name))||en.find(v=>/en[-_]?us/i.test(v.lang))||en.find(v=>/en[-_]?gb/i.test(v.lang))||en[0]||null;
  }
  function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
  function _tokenize(text){const t=[];const re=/\S+/g;let m;while((m=re.exec(text)))t.push({w:m[0],start:m.index,end:m.index+m[0].length,el:null});return t;}
  function _clearHi(){_spTokens.forEach(tk=>{if(tk.el){tk.el.classList.remove('active');tk.el.classList.remove('spoken');}});}
  function _hi(ci){
    let idx=-1;
    for(let i=0;i<_spTokens.length;i++){ if(_spTokens[i].start<=ci) idx=i; else break; }
    if(idx<0)return;
    _spTokens.forEach((tk,i)=>{ if(!tk.el)return; tk.el.classList.toggle('active',i===idx); tk.el.classList.toggle('spoken',i<idx); });
  }
  function reciterUrl(num){ return RECITERS[qari].url(num); }
  function getMp3(){ if(!_mp3){_mp3=new Audio();_mp3.preload='auto';} return _mp3; }
  function audioPlaying(){ return _spPlaying || _mpActive; }
  function _natEnd(){ const cb=_finishCb; if(cb)cb(); }   // fires only on natural completion
  function audioStop(){
    if(SS){try{SS.cancel();}catch(e){}}
    if(_spTimer){clearInterval(_spTimer);_spTimer=null;}
    if(_mp3){try{_mp3.pause();}catch(e){} _mp3.onended=null; _mp3.onerror=null; }
    _mpActive=false; _spPlaying=false; _clearHi();
    if(_uiCb){const cb=_uiCb; cb(false);}
  }
  // recorded recitation from `url`; calls fallback() if it can't load
  function audioSheikh(url,ui,fallback){
    audioStop(); _uiCb=ui; _mpActive=true;
    const a=getMp3();
    a.src=url; a.playbackRate=_spRate;
    ui(true);
    a.onended=()=>{ _mpActive=false; if(_uiCb)_uiCb(false); _natEnd(); };
    a.onerror=()=>{ if(!_mpActive)return; _mpActive=false; if(fallback)fallback(); };
    a.play().then(()=>{}).catch(()=>{ if(!_mpActive)return; _mpActive=false; if(fallback)fallback(); });
  }
  // device speech engine; voiceLang 'ar' (with word highlighting) or 'en' (reads the meaning)
  function audioTTS(text,tokens,ui,voiceLang){
    if(!SS){toast(lang==='ar'?'الصوت غير مدعوم في هذا المتصفح':'Audio not supported here');return;}
    audioStop();
    _spTokens=tokens||[]; _uiCb=ui;
    const u=new SpeechSynthesisUtterance(text);
    const v=(voiceLang==='en')?_enVoice():_arVoice(); if(v)u.voice=v;
    u.lang=(v&&v.lang)||(voiceLang==='en'?'en-US':'ar-SA');
    u.rate=Math.max(0.6,_spRate*0.95); u.pitch=1;
    u.onboundary=e=>{ if(e&&e.charIndex!=null)_hi(e.charIndex); };
    u.onend=()=>{ _clearHi(); _spPlaying=false; if(_spTimer){clearInterval(_spTimer);_spTimer=null;} if(_uiCb)_uiCb(false); _natEnd(); };
    u.onerror=()=>{ _clearHi(); _spPlaying=false; if(_spTimer){clearInterval(_spTimer);_spTimer=null;} if(_uiCb)_uiCb(false); };
    _spPlaying=true; if(ui)ui(true);
    try{SS.speak(u);}catch(e){_spPlaying=false; if(ui)ui(false); return;}
    _spTimer=setInterval(()=>{ if(!SS.speaking){clearInterval(_spTimer);_spTimer=null;return;} try{SS.pause();SS.resume();}catch(e){} },9000);
  }

  function setLang(l){
    lang=l; store.set('lang',l);
    document.documentElement.lang=l;
    document.documentElement.dir=l==='ar'?'rtl':'ltr';
    document.querySelectorAll('.hd-lang button').forEach(b=>b.classList.toggle('active',b.dataset.lang===l));
    buildGrid();
    if(cur) openHadith(cur);
  }

  function stars(){
    const w=document.getElementById('mjStars'); if(!w)return;
    const gl=['✦','✧','⭐','✩','·'];
    for(let i=0;i<26;i++){const s=el('span','',gl[i%gl.length]);
      s.style.left=Math.random()*100+'%';s.style.top=Math.random()*70+'%';
      s.style.fontSize=(8+Math.random()*14)+'px';s.style.animationDelay=(Math.random()*3)+'s';
      w.appendChild(s);}
  }

  function buildGrid(){
    const grid=document.getElementById('hdGrid'); if(!grid)return;
    grid.innerHTML='';
    let done=0;
    (window.HADITH_INDEX||[]).forEach((h,i)=>{
      const isDone=store.get('done:'+h.slug)==='1'; if(isDone)done++;
      const c=el('div','hd-card'+(isDone?' done':''));
      c.style.animationDelay=(i*0.03)+'s';
      c.innerHTML=`<span class="hc-num">${lang==='ar'?toAr(h.num):h.num}</span>`+
        `<span class="hc-seal">🏅</span>`+
        `<div class="hc-emoji">${h.emoji}</div>`+
        `<div class="hc-title">${lang==='ar'?h.titleAr:h.titleEn}</div>`+
        `<div class="hc-theme">${lang==='ar'?h.themeAr:h.themeEn}</div>`;
      c.addEventListener('click',()=>openHadith(h.slug));
      grid.appendChild(c);
    });
    const total=(window.HADITH_INDEX||[]).length;
    const pct=total?Math.round(done/total*100):0;
    const f=document.getElementById('hdProgFill'); if(f)f.style.width=pct+'%';
    const t=document.getElementById('hdProgTxt'); if(t)t.textContent=(lang==='ar'?(toAr(done)+' من '+toAr(total)):(done+' of '+total));
  }
  function toAr(n){return String(n).replace(/[0-9]/g,c=>'٠١٢٣٤٥٦٧٨٩'[c]);}

  function openHadith(slug){
    _finishCb=null; audioStop();
    cur=slug;
    const h=(window.HADITH_INDEX||[]).find(x=>x.slug===slug);
    const d=(window.HADITHS||{})[slug];
    document.getElementById('hrNm').textContent=lang==='ar'?('الحديث '+toAr(h.num)):('Hadith '+h.num);
    document.getElementById('hrMt').textContent=lang==='ar'?h.themeAr:h.themeEn;
    document.body.classList.add('reading-hd');
    location.hash=slug;
    renderBook(h,d);
    document.querySelector('.hr-stage').scrollTop=0;
  }
  function close(){_finishCb=null;audioStop();cur=null;document.body.classList.remove('reading-hd');location.hash='';}
  function nav(dir){const L=window.HADITH_INDEX;let i=L.findIndex(x=>x.slug===cur);if(i<0)return;
    i=(i+dir+L.length)%L.length;openHadith(L[i].slug);}

  function renderBook(h,d){
    const book=document.getElementById('hrBook'); book.innerHTML='';
    const scene=el('div','hr-scene',`<span class="num">${lang==='ar'?('حديث '+toAr(h.num)):('# '+h.num)}</span><div class="dome">${h.emoji}</div>`);
    book.appendChild(scene);
    book.appendChild(el('div','hr-crest',`<div class="arch">${lang==='ar'?h.titleAr:h.titleEn}</div><div class="mt">${lang==='ar'?h.themeAr:h.themeEn}</div>`));
    if(!d){book.appendChild(el('div','exp-card',lang==='ar'?'قريباً بإذن الله':'Coming soon'));return;}

    const TABS=[
      {id:'matn',em:'📜',ar:'الحديث',en:'Hadith'},
      {id:'explain',em:'💡',ar:'الشرحُ والتَّدبُّر',en:'Explain & Reflect'},
      {id:'quiz',em:'🦸',ar:'ميدانُ الأبطال',en:'Heroes\u2019 Arena'},
      {id:'treasures',em:'🎒',ar:'كُنوزُ الحديث',en:'Treasures of the Hadith'},
    ];
    const tabs=el('div','hr-tabs'); const body=el('div');
    TABS.forEach((t,i)=>{
      const b=el('button','hr-tab'+(i===0?' active':''),`<span>${t.em}</span><span>${lang==='ar'?t.ar:t.en}</span>`);
      b.addEventListener('click',()=>{
        _finishCb=null; audioStop();
        tabs.querySelectorAll('.hr-tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');
        body.querySelectorAll('.hr-pane').forEach(p=>p.classList.remove('active'));
        body.querySelector('#hp-'+t.id).classList.add('active');
        document.querySelector('.hr-stage').scrollTop=0;
      });
      tabs.appendChild(b);
    });
    book.appendChild(tabs);book.appendChild(body);
    body.appendChild(paneMatn(h,d));
    body.appendChild(paneExplain(d));   // merged: explanation + lessons/reflection
    body.appendChild(paneQuiz(h,d));
    body.appendChild(paneTreasures(h,d)); // merged: living-it (apply) + stickers + certificate
  }

  function paneMatn(h,d){
    const p=el('div','hr-pane active');p.id='hp-matn';

    // ── audio player (recorded recitation + device voice) ──
    const player=el('div','hr-audio');
    player.innerHTML=
      `<button class="ha-play" aria-label="play">▶</button>`+
      `<div class="ha-mid"><div class="ha-now">${lang==='ar'?'🔊 استمِع للحديث':'🔊 Listen to the hadith'}</div>`+
        `<div class="ha-sub">${lang==='ar'?'تِلاوة مُسجَّلة — أو المس أيّ كلمة':'Recorded recitation — or tap any word'}</div></div>`;
    p.appendChild(player);

    const ctrl=el('div','ha-ctrl');
    const _a=lang==='ar';
    ctrl.innerHTML=
      `<div class="ha-seg ha-reciter">`+
        `<button data-mode="sheikh">🎙️ ${_a?'عربي (تِلاوة)':'Arabic (reciter)'}</button>`+
        `<button data-mode="meaning">🌐 ${_a?'المعنى':'Meaning'}</button>`+
      `</div>`+
      `<div class="ha-seg ha-qari" title="${_a?'اختر القارئ':'Choose reciter'}">`+
        `<button data-qari="a">👳 ${RECITERS.a[_a?'ar':'en']}</button>`+
        `<button data-qari="b">🧔 ${RECITERS.b[_a?'ar':'en']}</button>`+
      `</div>`+
      `<div class="ha-seg ha-speed">`+
        `<button data-r="0.75">${_a?'بطيء':'Slow'}</button>`+
        `<button data-r="1">${_a?'عادي':'Normal'}</button>`+
        `<button data-r="1.25">${_a?'سريع':'Fast'}</button>`+
      `</div>`+
      `<div class="ha-seg ha-rep" title="${_a?'تكرار للحفظ':'Repeat to memorize'}">`+
        `<button data-rep="1">🔁 ${_a?'مرّة':'×1'}</button>`+
        `<button data-rep="3">${_a?'٣':'×3'}</button>`+
        `<button data-rep="inf">∞</button>`+
      `</div>`+
      `<div class="ha-seg ha-auto">`+
        `<button data-auto="1">⏭️ ${_a?'تتابُع':'Auto'}</button>`+
      `</div>`;
    p.appendChild(ctrl);

    const f=el('div','matn-frame');
    const toks=_tokenize(d.matn.ar);
    const arHtml=toks.map((x,i)=>`<span class="mw" data-i="${i}">${_esc(x.w)}</span>`).join(' ');
    f.innerHTML=`<div class="matn-ar">${arHtml}</div><div class="matn-en"></div>`;
    f.querySelector('.matn-en').textContent=d.matn.en;
    const spans=f.querySelectorAll('.matn-ar .mw');
    toks.forEach((tk,i)=>tk.el=spans[i]);
    p.appendChild(f);

    const src=el('div','matn-src');
    if(d.narrator)src.appendChild(el('span','matn-chip',`<b>${lang==='ar'?'الراوي: ':'Narrator: '}</b>${tr(d.narrator)}`));
    if(d.source)src.appendChild(el('span','matn-chip',`<b>${lang==='ar'?'التخريج: ':'Source: '}</b>${tr(d.source)}`));
    p.appendChild(src);

    // ── wire player ──
    const playBtn=player.querySelector('.ha-play');
    const nowLbl=player.querySelector('.ha-now');
    function setUI(on){
      playBtn.textContent=on?'⏸':'▶'; playBtn.classList.toggle('playing',on);
      nowLbl.textContent=on
        ?(reciter==='sheikh'?(lang==='ar'?'🎙️ تِلاوة الحديث…':'🎙️ Reciting…')
          :reciter==='meaning'?(lang==='ar'?'🌐 يقرأ المعنى…':'🌐 Reading meaning…')
          :(lang==='ar'?'🔊 يقرأ الآن…':'🔊 Reading…'))
        :(lang==='ar'?'🔊 استمِع للحديث':'🔊 Listen to the hadith');
      f.classList.toggle('reciting',on);
      if(!on)_clearHi();
    }
    let fellBack=false, repeatLeft=0;
    function playOnce(){
      fellBack=false;
      if(reciter==='sheikh'){
        audioSheikh(RECITERS[qari].url(h.num),setUI,()=>{ if(fellBack)return; fellBack=true;
          const other=qari==='a'?'b':'a';
          audioSheikh(RECITERS[other].url(h.num),setUI,()=>{
            toast(lang==='ar'?'تعذّر تحميل التِّلاوة — صوت الجهاز':'Recitation unavailable — device voice');
            audioTTS(d.matn.ar,toks,setUI,'ar');
          });
        });
      } else if(reciter==='meaning'){
        audioTTS(d.matn.en,[],setUI,'en');
      } else { audioTTS(d.matn.ar,toks,setUI,'ar'); }
    }
    function handleEnd(){
      if(_repeat==='inf'){ playOnce(); return; }
      if(repeatLeft>0){ repeatLeft--; playOnce(); return; }
      if(_auto){ _pendingAutoplay=true; _finishCb=null; nav(1); }
    }
    function startPlay(){
      repeatLeft=(_repeat==='3')?2:0;
      _finishCb=handleEnd;
      playOnce();
    }
    playBtn.addEventListener('click',()=>{ if(audioPlaying()){_finishCb=null;audioStop();} else startPlay(); });
    // tap any word → device voice reads from there (one-off, no repeat)
    spans.forEach((sp,i)=>sp.addEventListener('click',()=>{
      const off=toks[i].start;
      const sub=d.matn.ar.slice(off);
      const subToks=toks.slice(i).map(t=>({w:t.w,start:t.start-off,end:t.end-off,el:t.el}));
      _finishCb=null; audioTTS(sub,subToks,setUI,'ar');
    }));
    // voice mode
    const qSeg=ctrl.querySelector('.ha-qari');
    function syncQariVis(){ qSeg.style.display = (reciter==='sheikh')?'' : 'none'; }
    const rc=ctrl.querySelectorAll('.ha-reciter button');
    rc.forEach(b=>{ if(b.dataset.mode===reciter)b.classList.add('on');
      b.addEventListener('click',()=>{
        reciter=b.dataset.mode; store.set('reciter',reciter);
        rc.forEach(x=>x.classList.toggle('on',x===b));
        syncQariVis();
        const was=audioPlaying(); audioStop(); if(was)startPlay();
      });
    });
    // recorded-reciter choice (Reciter 1 / Reciter 2)
    const qb=ctrl.querySelectorAll('.ha-qari button');
    qb.forEach(b=>{ if(b.dataset.qari===qari)b.classList.add('on');
      b.addEventListener('click',()=>{
        qari=b.dataset.qari; store.set('qari',qari);
        qb.forEach(x=>x.classList.toggle('on',x===b));
        const was=audioPlaying(); audioStop(); if(was)startPlay();
      });
    });
    syncQariVis();
    // speed
    const sp=ctrl.querySelectorAll('.ha-speed button');
    sp.forEach(b=>{ if(Math.abs(parseFloat(b.dataset.r)-_spRate)<0.01)b.classList.add('on');
      b.addEventListener('click',()=>{
        _spRate=parseFloat(b.dataset.r); store.set('rate',b.dataset.r);
        sp.forEach(x=>x.classList.toggle('on',x===b));
        if(_mp3)_mp3.playbackRate=_spRate;
        const was=audioPlaying(); if(was){audioStop();startPlay();}
      });
    });
    // repeat (for memorization)
    const rp=ctrl.querySelectorAll('.ha-rep button');
    rp.forEach(b=>{ if(b.dataset.rep===_repeat)b.classList.add('on');
      b.addEventListener('click',()=>{
        _repeat=b.dataset.rep; store.set('rep',_repeat);
        rp.forEach(x=>x.classList.toggle('on',x===b));
        repeatLeft=(_repeat==='3')?2:0;          // honor change mid-play
        if(audioPlaying())_finishCb=handleEnd;
      });
    });
    // auto-advance
    const au=ctrl.querySelector('.ha-auto button');
    au.classList.toggle('on',_auto);
    au.addEventListener('click',()=>{ _auto=!_auto; store.set('auto',_auto?'1':'0'); au.classList.toggle('on',_auto); });

    // auto-play when arrived here via auto-advance
    if(_pendingAutoplay){ _pendingAutoplay=false; setTimeout(()=>{ if(cur===h.slug)startPlay(); },450); }
    return p;
  }
  // merged pane: explanation cards + lessons/reflection (الشرح + التَّفسير والتَّدبُّر)
  function paneExplain(d){
    const p=el('div','hr-pane');p.id='hp-explain';
    p.appendChild(el('div','hr-hint','💡 '+(lang==='ar'?'ماذا يعني هذا الحديث؟':'What does this hadith mean?')));
    (d.explain||[]).forEach(x=>p.appendChild(el('div','exp-card',bi(x))));
    if(d.benefits&&d.benefits.length){
      const bh=el('div','hr-hint','🌸 '+(lang==='ar'?'الفوائدُ والتَّدبُّر — ماذا نتعلّم؟':'Lessons & Reflection — what do we learn?'));
      bh.style.marginTop='1.1rem';
      p.appendChild(bh);
      d.benefits.forEach((x,i)=>{
        const it=el('div','ben-item');
        it.innerHTML=`<span class="b-ic">${['🌸','🌟','💎','🛡️','🕊️','📿'][i%6]}</span><span class="ben-tx">${bi(x)}</span>`;
        p.appendChild(it);
      });
    }
    return p;
  }
  function paneApply(d){
    const p=el('div','hr-pane');p.id='hp-apply';
    const box=el('div','apply-box');
    box.innerHTML=`<div class="ttl">🌱 ${lang==='ar'?'كيف أعمل بهذا الحديث اليوم؟':'How do I live it today?'}</div>${bi(d.apply)}`;
    p.appendChild(box);
    return p;
  }
  function paneQuiz(h,d){
    const p=el('div','hr-pane');p.id='hp-quiz';
    (d.quiz||[]).forEach((q,qi)=>{
      const card=el('div','quiz-card');
      card.appendChild(el('div','quiz-q','❓ '+bi(q.q)));
      const fb=el('div','q-fb');
      const L=['أ','ب','ج','د'],Le=['A','B','C','D'];
      q.opts.forEach((o,j)=>{
        const b=el('button','quiz-opt',`<span class="lt">${lang==='ar'?L[j]:Le[j]}</span><span class="opt-tx">${bi(o.t)}</span>`);
        b.addEventListener('click',()=>{
          if(card.dataset.done)return;
          if(o.c){b.classList.add('ok');card.dataset.done='1';
            fb.textContent=lang==='ar'?'✓ أحسنت!':'✓ Correct!';fb.style.color='#3FA66F';
            card.querySelectorAll('.quiz-opt').forEach(x=>x.disabled=true);}
          else{b.classList.add('no');
            fb.textContent=lang==='ar'?'حاول مرة أخرى':'Try again';fb.style.color='#D9534F';}
        });
        card.appendChild(b);
      });
      card.appendChild(fb);
      p.appendChild(card);
    });
    const hint=el('div','hr-hint',(lang==='ar'?'🎒 انتقِل إلى «كنوزُ الحديث» لِتجمعَ ملصقاتِك وشهادتَك!':'🎒 Head to "Treasures" to collect your stickers & certificate!'));
    hint.style.marginTop='.4rem';
    p.appendChild(hint);
    return p;
  }

  /* ───── ROOM 6: TREASURES (stickers + certificate) ───── */
  function paneTreasures(h,d){
    const p=el('div','hr-pane');p.id='hp-treasures';
    const done=store.get('done:'+h.slug)==='1';
    const treasures=(d&&d.treasures)||[];

    // ── قصةُ الحديث / العملُ بالحديث (living it) ──
    if(d&&d.apply){
      p.appendChild(el('div','hr-hint','📖 '+(lang==='ar'?'قصةُ الحديث — العملُ بالحديث':'The Story — Living the Hadith')));
      const box=el('div','apply-box');
      box.innerHTML=`<div class="ttl">🌱 ${lang==='ar'?'كيف أعمل بهذا الحديث اليوم؟':'How do I live it today?'}</div>${bi(d.apply)}`;
      box.style.marginBottom='1.1rem';
      p.appendChild(box);
    }

    // ── colorful stickers ──
    if(treasures.length){
      p.appendChild(el('div','hr-hint','🎒 '+(lang==='ar'?'كُنوزُ الحديث — ملصقاتٌ مُلوَّنة وشهادةٌ باسمِك ✨':'Hadith Treasures — colorful stickers & a certificate with your name ✨')));
      const earned=(store.get('stickers:'+h.slug)||'').split(',').filter(Boolean);
      const head=el('div','hd-stk-head');
      head.innerHTML=`<span class="hd-stk-t">🏷️ ${lang==='ar'?'ملصقاتُ الحديث':'Hadith stickers'}</span>`+
        `<span class="hd-stk-n">${lang==='ar'?(toAr(earned.length)+' / '+toAr(treasures.length)):(earned.length+' / '+treasures.length)}</span>`;
      p.appendChild(head);
      const grid=el('div','hd-stickers');
      treasures.forEach((t,i)=>{
        const isE=earned.includes(String(i));
        const st=el('div','hd-sticker'+(isE?' earned':''));
        st.style.setProperty('--st-color', t.color||'#7E6BD4');
        st.innerHTML=`<div class="em">${t.icon}</div><div class="ttl">${tr(t.title)}</div>`;
        grid.appendChild(st);
      });
      p.appendChild(grid);
    }

    // ── certificate ──
    const certText=(d&&d.certificate)||{};
    const hadName=lang==='ar'?h.titleAr:h.titleEn;
    const seal=(d&&d.icon)||h.emoji||'🏅';
    const cert=el('div','hd-cert');
    if(done){
      const numTxt=lang==='ar'?('الحديث '+toAr(h.num)):('Hadith '+h.num);
      cert.innerHTML=`<div class="hd-cert-card" id="hdCertCard">
        <div class="hd-cert-ribbon">🎖️ ${lang==='ar'?'وِسامُ الحافِظ':'Memory Medal'}</div>
        <div class="hd-cert-h">${lang==='ar'?'شهادةُ إتمام':'Certificate of Completion'}</div>
        <div class="hd-cert-h hd-cert-h2">${numTxt} — ${hadName}</div>
        <div class="hd-cert-sub">${tr(certText.subtitle)||(lang==='ar'?'تُمنَحُ لِمَن أتمَّ هذا الحديثَ الشَّريف':'Awarded to the one who completed this noble hadith')}</div>
        <div class="hd-cert-name-row">
          <span>${lang==='ar'?'تُمنَحُ لـ:':'Awarded to:'}</span>
          <span class="hd-cert-name" contenteditable="true" id="hdCertName">${store.get('name:'+h.slug)||store.get('childName')||''}</span>
        </div>
        <div class="hd-cert-statement">${tr(certText.statement)||(lang==='ar'?`لِحِفظِه/حِفظِها <b>${hadName}</b> وفَهمِها والعملِ بها.`:`For memorizing, understanding, and living by <b>${hadName}</b>.`)}</div>
        <div class="hd-cert-seal" aria-hidden="true">
          <span class="em">${seal}</span>
          <span>${lang==='ar'?'ختمُ المسجد':'Masjid Seal'}</span>
        </div>
        <div class="hd-cert-sig">
          <div><div class="line"></div>${lang==='ar'?'توقيعي':'Signature'}</div>
          <div><div class="line"></div><span>${new Date().toLocaleDateString(lang==='ar'?'ar-EG':'en-US')}</span></div>
        </div>
        <div class="hd-cert-actions">
          <button class="primary" id="hdCertPrint">🖨️ ${lang==='ar'?'طباعةُ الشهادة':'Print certificate'}</button>
          <button id="hdCertSave">📤 ${lang==='ar'?'حفظُ الاسم':'Save name'}</button>
        </div>
      </div>`;
    } else {
      const earnedCount=(store.get('stickers:'+h.slug)||'').split(',').filter(Boolean).length;
      cert.innerHTML=`<div class="hd-cert-locked">🔒 ${lang==='ar'?'أتمِمِ الحديثَ لِتفتحَ شهادتَك!':'Complete the hadith to unlock your certificate!'}<br>
        <span class="cl-sub">${lang==='ar'?(toAr(earnedCount)+' / '+toAr(treasures.length)+' ملصق · اضغطْ زِرَّ الإتمامِ أدناه'):(earnedCount+' / '+treasures.length+' stickers · tap the complete button below')}</span></div>`;
    }
    p.appendChild(cert);

    const certName=cert.querySelector('#hdCertName');
    if(certName){
      certName.addEventListener('input',()=>{const v=certName.textContent.trim();store.set('name:'+h.slug,v);store.set('childName',v);});
    }
    const certPrint=cert.querySelector('#hdCertPrint');
    if(certPrint){
      certPrint.addEventListener('click',()=>{
        const card=cert.querySelector('#hdCertCard'); if(!card)return;
        const area=document.getElementById('hdPrintArea'); if(!area)return;
        area.style.display='block'; area.innerHTML='';
        const clone=card.cloneNode(true);
        clone.querySelectorAll('.hd-cert-actions').forEach(n=>n.remove());
        area.appendChild(clone);
        setTimeout(()=>{window.print();setTimeout(()=>{area.style.display='none';area.innerHTML='';},500);},100);
      });
    }
    const certSave=cert.querySelector('#hdCertSave');
    if(certSave){
      certSave.addEventListener('click',()=>{if(certName){const v=certName.textContent.trim();store.set('name:'+h.slug,v);store.set('childName',v);}toast(lang==='ar'?'✓ تم حفظ الاسم':'✓ Name saved');});
    }

    const cta=el('button','hr-cta'+(done?' done':''));
    cta.textContent=done?(lang==='ar'?'✓ حفظتَ هذا الحديث — أحسنت!':'✓ Memorized — well done!')
      :(lang==='ar'?'🎒 أتمِمِ الحديثَ واحصُلْ على شهادتِك وملصقاتِك':'🎒 Complete the hadith & claim your treasures');
    cta.addEventListener('click',()=>{
      if(store.get('done:'+h.slug)==='1')return;
      if(treasures.length)store.set('stickers:'+h.slug,[...Array(treasures.length).keys()].map(String).join(','));
      store.set('done:'+h.slug,'1');confetti();
      toast(lang==='ar'?'🎉 مبارك! أضأتَ مصباحًا جديدًا':'🎉 A new lantern lit!');
      buildGrid();renderBook(h,d);
      setTimeout(()=>document.querySelectorAll('.hr-tab')[3]?.click(),40);
    });
    p.appendChild(cta);

    const foot=el('div','hr-foot');
    const prev=el('button','',lang==='ar'?'← السابق':'← Prev');
    const next=el('button','primary',lang==='ar'?'التالي →':'Next →');
    prev.addEventListener('click',()=>nav(-1));next.addEventListener('click',()=>nav(1));
    foot.appendChild(prev);foot.appendChild(next);p.appendChild(foot);
    return p;
  }

  function toast(msg){const t=document.getElementById('hdToast');t.textContent=msg;t.classList.add('show');
    clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),2600);}
  function confetti(){
    const em=['🎉','✨','🏅','💜','⭐','🕌'];
    for(let i=0;i<26;i++){const s=el('span','',em[i%em.length]);
      s.style.cssText=`position:fixed;z-index:95;left:${Math.random()*100}vw;top:-30px;font-size:${14+Math.random()*16}px;pointer-events:none;transition:transform 1.4s ease-in,opacity 1.4s`;
      document.body.appendChild(s);
      requestAnimationFrame(()=>{s.style.transform=`translateY(${100+Math.random()*30}vh) rotate(${Math.random()*720}deg)`;s.style.opacity='0';});
      setTimeout(()=>s.remove(),1500);}
  }

  function init(){
    stars();
    if(SS){ _loadVoices(); SS.onvoiceschanged=_loadVoices; }
    document.querySelectorAll('.hd-lang button').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
    setLang(lang);
    document.getElementById('hrBack').addEventListener('click',close);
    document.getElementById('hrPrev').addEventListener('click',()=>nav(-1));
    document.getElementById('hrNext').addEventListener('click',()=>nav(1));
    const hh=(location.hash||'').replace('#','');
    if(hh&&(window.HADITHS||{})[hh])openHadith(hh);
    window.addEventListener('keydown',e=>{
      if(!cur)return;
      if(e.key==='Escape')close();
      if(e.key==='ArrowRight')nav(lang==='ar'?-1:1);
      if(e.key==='ArrowLeft')nav(lang==='ar'?1:-1);
    });
  }
  return{init,setLang,openHadith,close,nav,buildGrid,toast,confetti};
})();
document.addEventListener('DOMContentLoaded',()=>HApp.init());
