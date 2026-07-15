/* MKVoice — shared natural-Arabic voice engine (gender-aware).
   Default narrator = FEMALE. Switches to MALE when a passage reads as a boy speaking,
   or when a caller passes {gender:'male'} / window.MK_VOICE_GENDER='male'.
   API: MKVoice.speak(text,{gender,rate,lang,onend,onerror})  MKVoice.stop()
        MKVoice.bestVoice(lang,gender)  MKVoice.guessGender(text)  MKVoice.getVoices(lang)
        MKVoice.setVoice(name,gender)  MKVoice.setRate(r)  MKVoice.injectPicker(el) */
(function(){
  if(window.MKVoice) return;
  var synth=window.speechSynthesis||null;
  var LS_F='mkVoice_female', LS_M='mkVoice_male', LS_R='mkVoiceRate';
  function all(){ return synth?(synth.getVoices()||[]):[]; }
  /* known voice-name gender markers (Windows/Edge/Apple/Google Arabic + others) */
  var FEMALE=/(salma|hoda|zariyah|amany|amina|amira|laila|layla|hala|sana|mona|maryam|noura|nora|fatima|hind|reem|rana|dana|yasmin|female|woman|أنثى|هدى|سلمى|ليلى|أمل|رنا|ريم|امرأة)/i;
  var MALE=/(majed|maged|hamed|naayf|nayef|nayf|tarik|tariq|shakir|omar|fahd|moaz|hamza|khalid|male|\bman\b|ذكر|ماجد|حامد|طارق|عمر|رجل)/i;
  function genderOf(v){ var n=v.name||''; if(FEMALE.test(n))return'female'; if(MALE.test(n))return'male'; return''; }
  function score(v){ var n=(v.name||'').toLowerCase(), s=0;
    if(/online|natural|neural/.test(n)) s+=100;
    if(/microsoft/.test(n)) s+=40;
    if(/google/.test(n)) s+=30;
    if(/majed|hamed|salma|zariyah|hoda|laila|layla|tarik|amira/.test(n)) s+=25;
    if(v.localService===false) s+=10;
    return s; }
  function voicesFor(lang){ var p=(lang||'ar').slice(0,2).toLowerCase();
    return all().filter(function(v){return v.lang&&v.lang.toLowerCase().indexOf(p)===0;})
      .sort(function(a,b){return score(b)-score(a);}); }
  function bestVoice(lang,gender){
    var vs=voicesFor(lang||'ar'); if(!vs.length) return null;
    if(gender){
      var want=localStorage.getItem(gender==='male'?LS_M:LS_F);
      if(want){ for(var i=0;i<vs.length;i++) if(vs[i].name===want) return vs[i]; }
      var match=vs.filter(function(v){return genderOf(v)===gender;});
      if(match.length) return match[0];
      var opp=gender==='male'?'female':'male';       // no exact match → at least avoid the opposite gender
      var neutral=vs.filter(function(v){return genderOf(v)!==opp;});
      if(neutral.length) return neutral[0];
    }
    return vs[0];
  }
  /* heuristic: does this Arabic passage read as a BOY speaking? default = female narrator */
  var M_RX=/قال\s*(ال)?(ولد|فت[ىا]|صبي|طفل|رجل|شيخ|أب|جد|أخ|ابن)|(ال(ولد|فتى|صبي|طفل))\s*(قال|يقول|قائل|يحكي|يروي)|يا\s*بن[يى]/;
  var F_RX=/قالت|الفتاة|البنت|الطفلة|أمي|أختي|مريم|قائلة|السيدة|الأم/;
  function mode(){ return localStorage.getItem('mkVoiceMode')||'auto'; }   // 'auto' | 'female' | 'male'
  function setMode(m){ localStorage.setItem('mkVoiceMode',m); }
  function guessGender(text){
    var fm=mode(); if(fm==='male'||fm==='female') return fm;   // manual override wins over the heuristic
    try{ var t=String(text||'');
      var m=(t.match(new RegExp(M_RX.source,'g'))||[]).length;
      var f=(t.match(new RegExp(F_RX.source,'g'))||[]).length;
      return m>f ? 'male' : 'female';
    }catch(e){ return 'female'; }
  }
  function rate(){ var r=parseFloat(localStorage.getItem(LS_R)); return (r>=.5&&r<=1.4)?r:.95; }
  /* Pronunciation fixes: the story text has no tashkeel, so some words/phrases are misread.
     Map undiacritized source → correctly-diacritized reading. Extend via MKVoice.addPron({...}). */
  var PRON={
    'صلى الله عليه وسلم':'صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ',
    'رضي الله عنهما':'رَضِيَ اللَّهُ عَنْهُمَا',
    'رضي الله عنهم':'رَضِيَ اللَّهُ عَنْهُمْ',
    'رضي الله عنها':'رَضِيَ اللَّهُ عَنْهَا',
    'رضي الله عنه':'رَضِيَ اللَّهُ عَنْهُ',
    'عليهم السلام':'عَلَيْهِمُ السَّلَامُ',
    'عليها السلام':'عَلَيْهَا السَّلَامُ',
    'عليه السلام':'عَلَيْهِ السَّلَامُ',
    'سبحانه وتعالى':'سُبْحَانَهُ وَتَعَالَى',
    'تبارك وتعالى':'تَبَارَكَ وَتَعَالَى',
    'عز وجل':'عَزَّ وَجَلَّ',
    'جل جلاله':'جَلَّ جَلَالُهُ',
    'قبة الصخره':'قُبَّةُ الصَّخْرَةِ',
    'قبة الصخرة':'قُبَّةُ الصَّخْرَةِ',
    'شعره':'شَعْرَهُ',
    'ذبح':'ذَبَحَ',
    'توم':'تُوم',
    'أذان':'أَذَان',
    'الله اكبر':'اللَّهُ أَكْبَرُ',
    'الله أكبر':'اللَّهُ أَكْبَرُ',
    'لم أكن':'لَمْ أَكُنْ',
    'قصتي':'قِصَّتِي',
    'معطفه':'مِعْطَفَهُ',
    'هامسا':'هَامِسًا',
    'يؤذن':'يُؤَذِّنُ',
    'بيتنا':'بَيْتُنَا',
    'وعدته':'وَعَدْتُهُ',
    'الجد':'الجَدُّ',
    'سنن':'سُنَن',
    'الله':'اللَّه',
    'لله':'لِلَّهِ'
  };
  function fixText(text){ var t=String(text||''); try{ Object.keys(PRON).forEach(function(k){ if(t.indexOf(k)>=0) t=t.split(k).join(PRON[k]); }); }catch(e){} return t; }
  /* Set voice+lang on an utterance for the resolved gender; if the device has no real voice
     of that gender (e.g. only a female Arabic voice installed), fake it with a pitch shift. */
  function applyGender(u,text,lang,forced){
    var g=(forced && mode()==='auto') ? forced : guessGender(text);
    var v=bestVoice(lang||'ar',g);
    if(v){ u.voice=v; u.lang=v.lang; }
    if(v && genderOf(v)!==g){ u.pitch = (g==='male'?0.72:1.22); }
    try{ u.text = fixText(text); }catch(e){}
    return v;
  }
  function stop(){ try{ if(synth) synth.cancel(); }catch(e){} }
  function speak(text,opt){
    opt=opt||{};
    if(!synth){ if(opt.onerror) opt.onerror(); return null; }
    stop();
    var u=new SpeechSynthesisUtterance(text);
    var lang=opt.lang||'ar';
    var g=opt.gender||guessGender(text);
    var v=bestVoice(lang,g);
    if(v){ u.voice=v; u.lang=v.lang; } else { u.lang=lang==='en'?'en-US':'ar-SA'; }
    u.rate=opt.rate||rate(); u.pitch=opt.pitch||1;
    if(opt.onend) u.onend=opt.onend;
    if(opt.onerror) u.onerror=opt.onerror;
    synth.speak(u);
    return u;
  }
  var readyCbs=[];
  function onReady(cb){ if(all().length){cb();} else {readyCbs.push(cb);} }
  if(synth) synth.onvoiceschanged=function(){ readyCbs.splice(0).forEach(function(f){try{f();}catch(e){}}); };
  if(synth) synth.getVoices();
  /* Settings UI: separate female + male voice choice + speed, each with a preview. */
  function injectPicker(el){
    if(!el||!synth) return;
    function opts(vs,sel){ var h=''; vs.forEach(function(v){ h+='<option value="'+v.name.replace(/"/g,'&quot;')+'"'+(sel&&v.name===sel.name?' selected':'')+'>'+v.name+(genderOf(v)?(' · '+(genderOf(v)==='female'?'أنثى':'ذكر')):'')+'</option>'; }); return h; }
    function build(){
      var vs=voicesFor('ar');
      if(!vs.length){ el.innerHTML='<div style="font-size:13px;color:#8a7b66">لا توجد أصوات عربية على هذا الجهاز</div>'; return; }
      var selStyle='padding:8px 10px;border-radius:10px;border:1.5px solid #d8c9a8;font-family:inherit;font-size:14px;background:#fffdf7;width:100%';
      var tryStyle='padding:7px 12px;border-radius:10px;border:none;color:#fff;font-family:inherit;font-size:13px;cursor:pointer;margin-top:6px';
      el.innerHTML='<div style="display:flex;flex-direction:column;gap:14px;font-family:inherit">'
        +'<div><label style="font-size:13px;font-weight:800;display:block;margin-bottom:5px">👩 صوت الراوية (الافتراضي)</label>'
        +'<select id="mkv-f" style="'+selStyle+'">'+opts(vs,bestVoice("ar","female"))+'</select>'
        +'<button id="mkv-ft" type="button" style="'+tryStyle+';background:#b8558f">🔊 جرّب</button></div>'
        +'<div><label style="font-size:13px;font-weight:800;display:block;margin-bottom:5px">👦 صوت الولد (عند حديث صبي)</label>'
        +'<select id="mkv-m" style="'+selStyle+'">'+opts(vs,bestVoice("ar","male"))+'</select>'
        +'<button id="mkv-mt" type="button" style="'+tryStyle+';background:#2f6f5e">🔊 جرّب</button></div>'
        +'<div><label style="font-size:13px;font-weight:800;display:block;margin-bottom:5px">⏩ سرعة القراءة <span id="mkv-rv" style="font-weight:400">'+rate().toFixed(2)+'</span></label>'
        +'<input id="mkv-rate" type="range" min="0.6" max="1.3" step="0.05" value="'+rate()+'" style="width:100%"></div>'
        +'</div>';
      el.querySelector('#mkv-f').addEventListener('change',function(){ localStorage.setItem(LS_F,this.value); });
      el.querySelector('#mkv-m').addEventListener('change',function(){ localStorage.setItem(LS_M,this.value); });
      el.querySelector('#mkv-rate').addEventListener('input',function(){ localStorage.setItem(LS_R,this.value); el.querySelector('#mkv-rv').textContent=parseFloat(this.value).toFixed(2); });
      el.querySelector('#mkv-ft').addEventListener('click',function(){ speak('السلامُ عليكم يا أصدقاء، هيا نقرأ قصةً جميلةً معاً.',{gender:'female'}); });
      el.querySelector('#mkv-mt').addEventListener('click',function(){ speak('قال الولد: أنا أحبُّ أن أستمعَ إلى القصص كلَّ يوم.',{gender:'male'}); });
    }
    onReady(build); build();
  }
  /* Floating auto/female/male toggle — appears on every reading page so the voice can be switched any time. */
  function injectToggle(){
    if(window.MK_VOICE_TOGGLE===false || !synth || !document.body) return;
    if(document.getElementById('mkv-toggle')) return;
    var wrap=document.createElement('div'); wrap.id='mkv-toggle'; wrap.dir='rtl';
    wrap.style.cssText='position:fixed;bottom:14px;inset-inline-start:14px;z-index:99999;display:flex;gap:2px;background:rgba(24,20,14,.82);border-radius:999px;padding:3px;font-family:inherit;box-shadow:0 3px 12px rgba(0,0,0,.32);backdrop-filter:blur(4px)';
    var modes=[['auto','تلقائي'],['female','👩'],['male','👦']];
    function render(){ var cur=mode(); wrap.innerHTML='';
      modes.forEach(function(m){ var b=document.createElement('button'); b.type='button'; b.textContent=m[1];
        b.title='صوت القراءة'; b.style.cssText='border:none;cursor:pointer;font-family:inherit;font-size:12px;font-weight:800;padding:5px 11px;border-radius:999px;transition:.15s;'+(cur===m[0]?'background:#e8b530;color:#1a1200':'background:transparent;color:#fff');
        b.onclick=function(){ setMode(m[0]); render(); try{stop();}catch(e){} }; wrap.appendChild(b); }); }
    render(); document.body.appendChild(wrap);
  }
  function boot(){ try{ injectToggle(); }catch(e){} }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot); else boot();
  window.MKVoice={speak:speak,stop:stop,bestVoice:bestVoice,getVoices:voicesFor,genderOf:genderOf,guessGender:guessGender,
    mode:mode,setMode:setMode,injectToggle:injectToggle,applyGender:applyGender,fixText:fixText,
    addPron:function(obj){ if(obj) for(var k in obj) PRON[k]=obj[k]; },
    setVoice:function(n,g){localStorage.setItem(g==='male'?LS_M:LS_F,n);},
    setRate:function(r){localStorage.setItem(LS_R,String(r));},
    onReady:onReady,injectPicker:injectPicker};
})();
