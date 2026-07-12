/* ============================================================
   Child's Day Planner — منظّم يوم الطفل
   Parents add commitments (التزامات) + rewards (مكافآت);
   tool renders a printable daily / weekly / monthly schedule.
   Self-contained: injects its own CSS, persists to localStorage.
   ============================================================ */
(function(){
  var LS='mkDayPlanner_v1';
  function L(){ return (window.lang||'ar'); }
  function t(ar,en){ return L()==='ar'?ar:en; }

  /* ---- Arabic week starts Saturday ---- */
  var DAYS=[
    {ar:'السبت',en:'Sat',ar1:'س'},
    {ar:'الأحد',en:'Sun',ar1:'ح'},
    {ar:'الإثنين',en:'Mon',ar1:'ن'},
    {ar:'الثلاثاء',en:'Tue',ar1:'ث'},
    {ar:'الأربعاء',en:'Wed',ar1:'ر'},
    {ar:'الخميس',en:'Thu',ar1:'خ'},
    {ar:'الجمعة',en:'Fri',ar1:'ج'}
  ];
  var MONTHS_AR=['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  var MONTHS_EN=['January','February','March','April','May','June','July','August','September','October','November','December'];
  var SLOTS=[
    {id:'morning',ar:'الصباح',en:'Morning',ic:'🌅'},
    {id:'noon',ar:'الظهيرة',en:'Midday',ic:'☀️'},
    {id:'evening',ar:'المساء',en:'Evening',ic:'🌙'}
  ];
  function slotOf(id){ for(var i=0;i<SLOTS.length;i++) if(SLOTS[i].id===id) return SLOTS[i]; return SLOTS[0]; }

  /* ---- Preset activities ---- */
  var PRESETS_COMMIT=[
    {ic:'🌄',ar:'الفجر',en:'Fajr',slot:'morning',start:'05:00',dur:10,days:[0,1,2,3,4,5,6]},
    {ic:'☀️',ar:'الظهر',en:'Dhuhr',slot:'noon',start:'13:00',dur:10,days:[0,1,2,3,4,5,6]},
    {ic:'🌤️',ar:'العصر',en:'Asr',slot:'noon',start:'16:00',dur:10,days:[0,1,2,3,4,5,6]},
    {ic:'🌇',ar:'المغرب',en:'Maghrib',slot:'evening',start:'18:30',dur:10,days:[0,1,2,3,4,5,6]},
    {ic:'🌃',ar:'العشاء',en:'Isha',slot:'evening',start:'20:00',dur:10,days:[0,1,2,3,4,5,6]},
    {ic:'📖',ar:'حفظ القرآن',en:'Quran memorization',slot:'evening',dur:20,days:[0,1,2,3,4,5,6]},
    {ic:'🔁',ar:'مراجعة القرآن',en:'Quran review',slot:'morning',dur:10,days:[0,1,2,3,4,5,6]},
    {ic:'🌙',ar:'الأذكار',en:'Adhkar',slot:'morning',dur:10,days:[0,1,2,3,4,5,6]},
    {ic:'🏫',ar:'المدرسة',en:'School',slot:'morning',dur:360,days:[1,2,3,4,5]},
    {ic:'✏️',ar:'الواجبات',en:'Homework',slot:'noon',dur:45,days:[1,2,3,4,5]},
    {ic:'📚',ar:'المذاكرة',en:'Study',slot:'noon',dur:30,days:[1,2,3,4,5]},
    {ic:'📕',ar:'القراءة',en:'Reading',slot:'evening',dur:20,days:[0,1,2,3,4,5,6]},
    {ic:'⚽',ar:'الرياضة',en:'Sport',slot:'noon',dur:45,days:[0,2,4,6]},
    {ic:'🧹',ar:'مساعدة الأهل',en:'Help at home',slot:'evening',dur:15,days:[0,1,2,3,4,5,6]},
    {ic:'🛏️',ar:'النوم المبكر',en:'Early sleep',slot:'evening',dur:0,days:[0,1,2,3,4,5,6]}
  ];
  var PRESETS_REWARD=[
    {ic:'📱',ar:'التابلت',en:'Tablet',slot:'evening',dur:30,days:[0,1,2,3,4,5,6]},
    {ic:'📺',ar:'الكرتون',en:'Cartoons',slot:'evening',dur:30,days:[0,1,2,3,4,5,6]},
    {ic:'🎮',ar:'الألعاب',en:'Games',slot:'evening',dur:30,days:[6,0]},
    {ic:'🎨',ar:'الرسم والأنشطة',en:'Drawing',slot:'noon',dur:30,days:[0,1,2,3,4,5,6]},
    {ic:'🚲',ar:'اللعب خارجًا',en:'Outdoor play',slot:'noon',dur:45,days:[0,1,2,3,4,5,6]},
    {ic:'🍫',ar:'مكافأة خاصة',en:'Special treat',slot:'evening',dur:0,days:[6]}
  ];
  var ICONS=['🕌','📖','🔁','🌙','🕋','🤲','🏫','✏️','📚','📕','🔬','🧮','⚽','🏊','🚴','🧹','🍽️','🪥','🛏️','📱','📺','🎮','🎨','🚲','🍫','🎁','🧩','🎧','🌳','☀️','⭐','❤️'];

  /* ---- State ---- */
  var S=load();
  function load(){
    try{ var s=JSON.parse(localStorage.getItem(LS)); if(s&&s.items) { s.view=s.view||'week'; s.day=s.day||0; return s; } }catch(e){}
    return { child:'', items:seed(), view:'week', day:(new Date().getDay()+1)%7, mY:null, mM:null, gate:true, done:{} };
  }
  function save(){ try{ localStorage.setItem(LS,JSON.stringify(S)); }catch(e){} }
  function uid(){ return 'a'+Date.now().toString(36)+Math.floor(Math.random()*1e4).toString(36); }
  function seed(){
    // a gentle starter plan so the parent sees the idea immediately
    return [
      mk(PRESETS_COMMIT[0]), // fajr
      mk(PRESETS_COMMIT[7]), // adhkar
      mk(PRESETS_COMMIT[8]), // school
      mk(PRESETS_COMMIT[9]), // homework
      mk(PRESETS_COMMIT[5]), // quran
      mk(PRESETS_REWARD[0])  // tablet
    ];
  }
  function mk(p){ return { id:uid(), ic:p.ic, name:{ar:p.ar,en:p.en}, kind:(PRESETS_REWARD.indexOf(p)>-1?'reward':(p.kind||'commit')), slot:p.slot||'noon', start:(p.start||''), dur:(p.dur==null?20:p.dur), days:(p.days?p.days.slice():[0,1,2,3,4,5,6]), note:'' }; }

  /* ---- helpers ---- */
  function nm(it){ return (it.name && (it.name[L()]||it.name.ar)) || ''; }
  function isReward(it){ return it.kind==='reward'; }
  function itemsForDay(d){
    var arr=S.items.filter(function(it){ return it.days.indexOf(d)>-1; });
    arr.sort(function(a,b){
      var sa=timeKey(a), sb=timeKey(b);
      if(sa!==sb) return sa-sb;
      // commitments before rewards within same slot/time
      if(isReward(a)!==isReward(b)) return isReward(a)?1:-1;
      return 0;
    });
    return arr;
  }
  function timeKey(it){
    if(it.start){ var p=it.start.split(':'); return (parseInt(p[0],10)||0)*60+(parseInt(p[1],10)||0); }
    var s=it.slot; return s==='morning'?7*60 : s==='noon'?13*60 : 19*60; // slot pseudo-times
  }
  function fmtTime(hhmm){
    if(!hhmm) return '';
    var p=hhmm.split(':'), h=parseInt(p[0],10), m=p[1];
    if(L()==='ar'){ var am=h<12; var h12=h%12; if(h12===0)h12=12; return h12+':'+m+' '+(am?'ص':'م'); }
    var am2=h<12,h2=h%12; if(h2===0)h2=12; return h2+':'+m+(am2?'am':'pm');
  }
  function fmtDur(mn){
    if(!mn) return '';
    if(mn>=60){ var h=Math.floor(mn/60), r=mn%60; return L()==='ar'?(h+' س'+(r?(' '+r+' د'):'')):(h+'h'+(r?(' '+r+'m'):'')); }
    return L()==='ar'?(mn+' دقيقة'):(mn+' min');
  }
  function endTime(it){
    if(!it.start||!it.dur) return '';
    var p=it.start.split(':'), tot=(parseInt(p[0],10)||0)*60+(parseInt(p[1],10)||0)+it.dur;
    tot=tot%(24*60); var h=Math.floor(tot/60), m=tot%60; return (h<10?'0':'')+h+':'+(m<10?'0':'')+m;
  }

  /* ================= RENDER ================= */
  window.renderSchedule=function(){
    var host=document.getElementById('schedTool'); if(!host) return;
    var ar=L()==='ar';
    host.innerHTML=
      childBar(ar)+
      quickAdd(ar)+
      customForm(ar)+
      planList(ar)+
      viewControls(ar)+
      '<div id="schedPrintArea">'+printHead(ar)+'<div id="schedOut">'+output(ar)+'</div></div>';
    var ci=document.getElementById('spChild');
    if(ci) ci.oninput=function(){ S.child=ci.value; save(); var h=document.getElementById('spPrintName'); if(h) h.textContent=ci.value||(ar?'طفلي':'My child'); };
  };

  function childBar(ar){
    return '<div class="sp-childbar">'+
      '<span class="sp-cb-ic">👦</span>'+
      '<input id="spChild" class="sp-cb-in" placeholder="'+(ar?'اسم الطفل (اختياري)':'Child name (optional)')+'" value="'+esc(S.child||'')+'">'+
      '<button class="sp-btn sp-btn-ghost" onclick="SP.resetAll()">'+(ar?'↺ البدء من جديد':'↺ Start over')+'</button>'+
    '</div>';
  }

  function quickAdd(ar){
    function chips(list){
      return list.map(function(p,i){
        var grp=(list===PRESETS_REWARD)?'r':'c';
        return '<button class="sp-chip sp-chip-'+ (grp==='r'?'reward':'commit') +'" onclick="SP.addPreset(\''+grp+'\','+i+')">'+
          '<span>'+p.ic+'</span>'+(ar?p.ar:p.en)+' <b>+</b></button>';
      }).join('');
    }
    return '<div class="sp-block">'+
      '<div class="sp-qa-col">'+
        '<div class="sp-qa-h sp-commit"><span>🎯 '+(ar?'التزامات (واجبات ثابتة)':'Commitments')+'</span></div>'+
        '<div class="sp-chips">'+chips(PRESETS_COMMIT)+'</div>'+
      '</div>'+
      '<div class="sp-qa-col">'+
        '<div class="sp-qa-h sp-reward"><span>🎁 '+(ar?'مكافآت (بعد الالتزامات)':'Rewards')+'</span></div>'+
        '<div class="sp-chips">'+chips(PRESETS_REWARD)+'</div>'+
      '</div>'+
      '<p class="sp-hint">💡 '+(ar
        ? 'لا حاجة لإضافة الأساسيّات (الأكل والنوم الأساسي) — ركّز على الالتزامات والمكافآت. اضغط أيَّ عنصرٍ لإضافته، ثم عدّل أيّامه ووقته بالأسفل.'
        : 'No need to add basics (meals, sleep) — focus on commitments & rewards. Tap any item to add it, then edit its days & time below.')+'</p>'+
    '</div>';
  }

  function customForm(ar){
    var ics=ICONS.map(function(e){ return '<button type="button" class="sp-ico" onclick="SP.pickIco(this,\''+e+'\')">'+e+'</button>'; }).join('');
    return '<details class="sp-custom"><summary>➕ '+(ar?'إضافة عنصر مخصّص':'Add a custom item')+'</summary>'+
      '<div class="sp-cf">'+
        '<input id="spNewName" class="sp-in" placeholder="'+(ar?'اسم النشاط (مثال: نادي السباحة)':'Activity name (e.g. Swimming club)')+'">'+
        '<div class="sp-kindsel">'+
          '<button type="button" id="spKindC" class="sp-kind on" onclick="SP.setKind(\'commit\')">🎯 '+(ar?'التزام':'Commitment')+'</button>'+
          '<button type="button" id="spKindR" class="sp-kind" onclick="SP.setKind(\'reward\')">🎁 '+(ar?'مكافأة':'Reward')+'</button>'+
        '</div>'+
        '<div class="sp-icos">'+ics+'</div>'+
        '<button class="sp-btn sp-btn-go" onclick="SP.addCustom()">'+(ar?'أضِف إلى الخطة ←':'Add to plan →')+'</button>'+
      '</div>'+
    '</details>';
  }
  var NEW_ICO='⭐', NEW_KIND='commit';
  window.SP=window.SP||{};
  SP.pickIco=function(el,e){ NEW_ICO=e; var p=el.parentNode; [].forEach.call(p.children,function(c){c.classList.remove('on');}); el.classList.add('on'); };
  SP.setKind=function(k){ NEW_KIND=k; document.getElementById('spKindC').classList.toggle('on',k==='commit'); document.getElementById('spKindR').classList.toggle('on',k==='reward'); };
  SP.addCustom=function(){
    var i=document.getElementById('spNewName'); var v=(i.value||'').trim(); if(!v){ i.focus(); return; }
    S.items.push({ id:uid(), ic:NEW_ICO, name:{ar:v,en:v}, kind:NEW_KIND, slot:'noon', start:'', dur:30, days:[0,1,2,3,4,5,6], note:'' });
    save(); i.value=''; renderSchedule();
  };
  SP.addPreset=function(grp,i){
    var p=(grp==='r'?PRESETS_REWARD:PRESETS_COMMIT)[i];
    S.items.push(mk(p)); save(); renderSchedule();
  };

  function planList(ar){
    if(!S.items.length) return '<div class="sp-block"><p class="sp-empty">'+(ar?'لا عناصر بعد — أضِف من الأعلى ✨':'No items yet — add some above ✨')+'</p></div>';
    var rows=S.items.map(function(it){
      var dayToggles=DAYS.map(function(d,di){
        return '<button class="sp-d'+(it.days.indexOf(di)>-1?' on':'')+'" title="'+(ar?d.ar:d.en)+'" onclick="SP.toggleDay(\''+it.id+'\','+di+')">'+(ar?d.ar1:d.en[0])+'</button>';
      }).join('');
      var slotSel=SLOTS.map(function(s){ return '<option value="'+s.id+'"'+(it.slot===s.id?' selected':'')+'>'+s.ic+' '+(ar?s.ar:s.en)+'</option>'; }).join('');
      return '<div class="sp-item sp-'+(isReward(it)?'reward':'commit')+'">'+
        '<div class="sp-it-top">'+
          '<span class="sp-it-ic">'+it.ic+'</span>'+
          '<input class="sp-it-name" value="'+esc(nm(it))+'" onchange="SP.rename(\''+it.id+'\',this.value)">'+
          '<span class="sp-badge sp-badge-'+(isReward(it)?'r':'c')+'">'+(isReward(it)?(ar?'مكافأة':'Reward'):(ar?'التزام':'Commit'))+'</span>'+
          '<button class="sp-del" title="'+(ar?'حذف':'Delete')+'" onclick="SP.del(\''+it.id+'\')">🗑</button>'+
        '</div>'+
        '<div class="sp-it-days">'+dayToggles+
          '<span class="sp-daygrp">'+
            '<button onclick="SP.setDays(\''+it.id+'\',\'all\')">'+(ar?'الكل':'All')+'</button>'+
            '<button onclick="SP.setDays(\''+it.id+'\',\'study\')">'+(ar?'الدراسة':'School')+'</button>'+
            '<button onclick="SP.setDays(\''+it.id+'\',\'weekend\')">'+(ar?'العطلة':'Weekend')+'</button>'+
          '</span>'+
        '</div>'+
        '<div class="sp-it-time">'+
          '<label>🕒 '+(ar?'الوقت':'Time')+' <input type="time" value="'+(it.start||'')+'" onchange="SP.setStart(\''+it.id+'\',this.value)"></label>'+
          '<label class="sp-slotlab">'+(ar?'أو الفترة':'or slot')+' <select onchange="SP.setSlot(\''+it.id+'\',this.value)"'+(it.start?' disabled':'')+'>'+slotSel+'</select></label>'+
          '<label>⏱️ '+(ar?'المدة':'Length')+' <select onchange="SP.setDur(\''+it.id+'\',this.value)">'+durOpts(it.dur,ar)+'</select></label>'+
        '</div>'+
      '</div>';
    }).join('');
    return '<div class="sp-block"><div class="sp-list-h">📋 '+(ar?'عناصر خطة طفلي':'My child\'s items')+' <span class="sp-count">'+S.items.length+'</span></div>'+
      '<div class="sp-items">'+rows+'</div></div>';
  }
  function durOpts(cur,ar){
    var opts=[0,5,10,15,20,30,45,60,90,120,180,360];
    return opts.map(function(m){ var lab= m===0?(ar?'—':'—'):fmtDur(m); return '<option value="'+m+'"'+(m===cur?' selected':'')+'>'+lab+'</option>'; }).join('');
  }

  /* item mutations */
  SP.rename=function(id,v){ var it=byId(id); if(it){ v=(v||'').trim(); it.name={ar:v,en:v}; save(); refreshOut(); } };
  SP.del=function(id){ S.items=S.items.filter(function(x){return x.id!==id;}); save(); renderSchedule(); };
  SP.toggleDay=function(id,di){ var it=byId(id); if(!it)return; var k=it.days.indexOf(di); if(k>-1)it.days.splice(k,1); else it.days.push(di); it.days.sort(function(a,b){return a-b;}); save(); renderSchedule(); };
  SP.setDays=function(id,which){ var it=byId(id); if(!it)return; it.days= which==='all'?[0,1,2,3,4,5,6] : which==='study'?[1,2,3,4,5] : [6,0]; save(); renderSchedule(); };
  SP.setStart=function(id,v){ var it=byId(id); if(it){ it.start=v; save(); renderSchedule(); } };
  SP.setSlot=function(id,v){ var it=byId(id); if(it){ it.slot=v; save(); refreshOut(); } };
  SP.setDur=function(id,v){ var it=byId(id); if(it){ it.dur=parseInt(v,10)||0; save(); refreshOut(); } };
  SP.resetAll=function(){ if(confirm(t('هل تريد مسح الخطة والبدء من جديد؟','Clear the plan and start over?'))){ S={ child:'', items:[], view:S.view, day:0, gate:S.gate }; save(); renderSchedule(); } };
  function byId(id){ for(var i=0;i<S.items.length;i++) if(S.items[i].id===id) return S.items[i]; return null; }

  /* view controls */
  function viewControls(ar){
    function b(v,ic,lab){ return '<button class="sp-vbtn'+(S.view===v?' on':'')+'" onclick="SP.setView(\''+v+'\')">'+ic+' '+lab+'</button>'; }
    return '<div class="sp-block sp-viewbar no-print">'+
      '<div class="sp-views">'+b('day','📆',ar?'يومي':'Daily')+b('week','🗓️',ar?'أسبوعي':'Weekly')+b('month','📅',ar?'شهري':'Monthly')+'</div>'+
      '<div class="sp-vactions">'+
        '<label class="sp-gate"><input type="checkbox" '+(S.gate?'checked':'')+' onchange="SP.setGate(this.checked)"> '+(ar?'المكافأة بعد إتمام الالتزامات':'Rewards after commitments')+'</label>'+
        '<button class="sp-btn sp-btn-print" onclick="SP.print()">🖨️ '+(ar?'طباعة / PDF':'Print / PDF')+'</button>'+
      '</div>'+
    '</div>';
  }
  SP.setView=function(v){ S.view=v; save(); renderSchedule(); };
  SP.setGate=function(b){ S.gate=b; save(); refreshOut(); };

  function refreshOut(){ var o=document.getElementById('schedOut'); if(o) o.innerHTML=output(L()==='ar'); var h=document.getElementById('spPrintSub'); if(h) h.textContent=printSub(L()==='ar'); }

  /* print header (shown in print + on screen as a title) */
  function printHead(ar){
    return '<div class="sp-phead">'+
      '<div class="sp-phead-l"><span class="sp-phead-ic">🗓️</span><div><div class="sp-phead-t">'+(ar?'جدول':'Schedule')+' <span id="spPrintName">'+esc(S.child||(ar?'طفلي':'My child'))+'</span></div>'+
      '<div class="sp-phead-s" id="spPrintSub">'+printSub(ar)+'</div></div></div>'+
      '<div class="sp-phead-r">'+(ar?'تربية الطفل المسلم':'Muslim Kids’ Tarbiyah')+'</div>'+
    '</div>';
  }
  function printSub(ar){
    if(S.view==='day') return ar?('خطة يومية — '+DAYS[S.day].ar):('Daily plan — '+DAYS[S.day].en);
    if(S.view==='month'){ if(S.mY==null){var n=new Date();S.mY=n.getFullYear();S.mM=n.getMonth();} return ar?('خطة شهرية — '+MONTHS_AR[S.mM]+' '+S.mY):('Monthly plan — '+MONTHS_EN[S.mM]+' '+S.mY); }
    return ar?'خطة أسبوعية':'Weekly plan';
  }

  /* ---------- OUTPUT: day / week / month ---------- */
  /* ---- completion + daily/weekly progress ---- */
  if(!S.done) S.done={};
  function weekStart(){ var d=new Date(); d.setHours(0,0,0,0); var wd=(d.getDay()+1)%7; d.setDate(d.getDate()-wd); return d; }
  function dateForCol(di){ var s=weekStart(); s.setDate(s.getDate()+di); return s; }
  function dkey(d){ return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(); }
  function todayIdx(){ return (new Date().getDay()+1)%7; }
  function isDone(dk,id){ return !!(S.done[dk]&&S.done[dk][id]); }
  SP.toggle=function(dk,id){ if(!S.done[dk])S.done[dk]={}; if(S.done[dk][id])delete S.done[dk][id]; else S.done[dk][id]=1; save(); refreshOut(); };
  function dayProgress(di){ var dk=dkey(dateForCol(di)),arr=itemsForDay(di).filter(function(it){return !isReward(it);}),n=0; arr.forEach(function(it){ if(isDone(dk,it.id))n++; }); return {done:n,total:arr.length,pct:arr.length?Math.round(n/arr.length*100):0}; }
  function weekProgress(){ var n=0,tt=0; for(var i=0;i<7;i++){ var p=dayProgress(i); n+=p.done; tt+=p.total; } return {done:n,total:tt,pct:tt?Math.round(n/tt*100):0}; }
  function progressBanner(ar){
    var td=dayProgress(todayIdx()), wk=weekProgress();
    function ring(p,lab,dn,tt){ return '<div class="sp-ring"><div class="sp-ring-c" style="--p:'+p+'"><b>'+p+'%</b></div><div class="sp-ring-l">'+lab+'<span>'+dn+' / '+tt+' '+(ar?'مكتمل':'done')+'</span></div></div>'; }
    return '<div class="sp-prog no-print">'+ring(td.pct,(ar?'📆 اليوم':'📆 Today'),td.done,td.total)+ring(wk.pct,(ar?'🗓️ هذا الأسبوع':'🗓️ This week'),wk.done,wk.total)+'</div>';
  }

  function output(ar){
    if(!S.items.length) return '<div class="sp-out-empty">'+(ar?'أضِف عناصر لتظهر الخطة هنا 👆':'Add items to see the plan here 👆')+'</div>';
    var body = S.view==='day'?dayView(ar):S.view==='month'?monthView(ar):weekView(ar);
    return progressBanner(ar)+body;
  }

  function itemCard(it,ar,dk){
    var time = it.start? (fmtTime(it.start)+(it.dur?(' <span class="sp-c-dur">('+fmtDur(it.dur)+')</span>'):'')) : (slotOf(it.slot).ic+' '+(ar?slotOf(it.slot).ar:slotOf(it.slot).en)+(it.dur?(' · '+fmtDur(it.dur)):''));
    var dn=dk?isDone(dk,it.id):false;
    return '<div class="sp-c sp-c-'+(isReward(it)?'reward':'commit')+(dn?' sp-c-done':'')+'">'+
      (dk?'<button class="sp-ck'+(dn?' on':'')+'" onclick="SP.toggle(\''+dk+'\',\''+it.id+'\')">'+(dn?'✓':'')+'</button>':'')+
      '<span class="sp-c-ic">'+it.ic+'</span>'+
      '<span class="sp-c-mid"><span class="sp-c-name">'+esc(nm(it))+'</span><span class="sp-c-time">'+time+'</span></span>'+
      (isReward(it)?'<span class="sp-c-gift">🎁</span>':'')+
    '</div>';
  }

  function orderForDay(d){
    var arr=itemsForDay(d);
    if(S.gate){
      // keep timed order, but ensure untimed rewards sink below untimed commitments
      var timed=arr.filter(function(x){return x.start;});
      var un=arr.filter(function(x){return !x.start;});
      var unC=un.filter(function(x){return !isReward(x);});
      var unR=un.filter(function(x){return isReward(x);});
      arr=timed.concat(unC,unR);
    }
    return arr;
  }

  function dayView(ar){
    var chips=DAYS.map(function(d,i){ return '<button class="sp-daychip'+(S.day===i?' on':'')+'" onclick="SP.setDay('+i+')">'+(ar?d.ar:d.en)+'</button>'; }).join('');
    var arr=orderForDay(S.day);
    var dk=dkey(dateForCol(S.day));
    var body;
    if(!arr.length){ body='<div class="sp-out-empty">'+(ar?'لا عناصر في هذا اليوم':'Nothing on this day')+'</div>'; }
    else {
      body='<div class="sp-tl">'+arr.map(function(it){
        var time = it.start? fmtTime(it.start) : (slotOf(it.slot).ic);
        return '<div class="sp-tl-row">'+
          '<div class="sp-tl-time">'+time+'</div>'+
          '<div class="sp-tl-line"><span class="sp-tl-dot sp-dot-'+(isReward(it)?'r':'c')+'"></span></div>'+
          '<div class="sp-tl-card sp-c-'+(isReward(it)?'reward':'commit')+(isDone(dk,it.id)?' sp-c-done':'')+'">'+
            '<button class="sp-ck'+(isDone(dk,it.id)?' on':'')+'" onclick="SP.toggle(\''+dk+'\',\''+it.id+'\')">'+(isDone(dk,it.id)?'✓':'')+'</button>'+
            '<span class="sp-c-ic">'+it.ic+'</span>'+
            '<span class="sp-c-mid"><span class="sp-c-name">'+esc(nm(it))+'</span>'+
              '<span class="sp-c-time">'+(it.start?(fmtTime(it.start)+(it.dur?(' – '+fmtTime(endTime(it))):'')):(ar?slotOf(it.slot).ar:slotOf(it.slot).en))+(it.dur&&!it.start?(' · '+fmtDur(it.dur)):'')+'</span></span>'+
            (isReward(it)?'<span class="sp-c-gift">🎁</span>':'')+
          '</div>'+
        '</div>';
      }).join('')+'</div>';
    }
    return '<div class="sp-daychips no-print">'+chips+'</div>'+
      '<div class="sp-print-daychip only-print">'+ (ar?DAYS[S.day].ar:DAYS[S.day].en) +'</div>'+ body;
  }
  SP.setDay=function(i){ S.day=i; save(); refreshOut(); };

  function weekView(ar){
    var cols=DAYS.map(function(d,di){
      var arr=orderForDay(di);
      var dk=dkey(dateForCol(di));
      var cells= arr.length? arr.map(function(it){ return itemCard(it,ar,dk); }).join('') : '<div class="sp-wk-empty">—</div>';
      return '<div class="sp-wk-col">'+
        '<div class="sp-wk-day">'+(ar?d.ar:d.en)+(arr.length?'<span class="sp-wk-pct">'+dayProgress(di).pct+'%</span>':'')+'</div>'+
        '<div class="sp-wk-cells">'+cells+'</div>'+
      '</div>';
    }).join('');
    return '<div class="sp-week">'+cols+'</div>'+legend(ar);
  }

  function monthView(ar){
    var now=new Date();
    if(S.mY==null){ S.mY=now.getFullYear(); S.mM=now.getMonth(); }
    var y=S.mY, m=S.mM;
    var first=new Date(y,m,1);
    var firstIdx=(first.getDay()+1)%7; // Arabic week Sat=0
    var dim=new Date(y,m+1,0).getDate();
    var head='<div class="sp-mo-nav no-print">'+
      '<button onclick="SP.moveMonth(-1)">‹</button>'+
      '<b>'+(ar?MONTHS_AR[m]:MONTHS_EN[m])+' '+y+'</b>'+
      '<button onclick="SP.moveMonth(1)">›</button></div>';
    var dow='<div class="sp-mo-dow">'+DAYS.map(function(d){return '<div>'+(ar?d.ar:d.en)+'</div>';}).join('')+'</div>';
    var cells='';
    for(var i=0;i<firstIdx;i++) cells+='<div class="sp-mo-cell sp-mo-empty"></div>';
    for(var date=1;date<=dim;date++){
      var wd=(new Date(y,m,date).getDay()+1)%7;
      var arr=itemsForDay(wd);
      var isToday=(y===now.getFullYear()&&m===now.getMonth()&&date===now.getDate());
      var ics=arr.slice(0,8).map(function(it){ return '<span class="sp-mo-ic sp-mo-'+(isReward(it)?'r':'c')+'" title="'+esc(nm(it))+'">'+it.ic+'</span>'; }).join('');
      cells+='<div class="sp-mo-cell'+(isToday?' sp-mo-today':'')+'">'+
        '<div class="sp-mo-date">'+date+'</div>'+
        '<div class="sp-mo-ics">'+ics+(arr.length>8?'<span class="sp-mo-more">+'+(arr.length-8)+'</span>':'')+'</div>'+
      '</div>';
    }
    return head+'<div class="sp-month">'+dow+'<div class="sp-mo-grid">'+cells+'</div></div>'+legend(ar);
  }
  SP.moveMonth=function(delta){ S.mM+=delta; if(S.mM<0){S.mM=11;S.mY--;} if(S.mM>11){S.mM=0;S.mY++;} save(); refreshOut(); };

  function legend(ar){
    return '<div class="sp-legend"><span><i class="sp-lg sp-lg-c"></i> '+(ar?'التزام':'Commitment')+'</span>'+
      '<span><i class="sp-lg sp-lg-r"></i> '+(ar?'مكافأة 🎁':'Reward 🎁')+'</span></div>';
  }

  /* print — render into a hidden same-page iframe (no popup blocker), print just that frame */
  SP.print=function(){
    var area=document.getElementById('schedPrintArea'); if(!area) return;
    var ar=L()==='ar';
    var doc='<!DOCTYPE html><html lang="'+L()+'" dir="'+(ar?'rtl':'ltr')+'"><head><meta charset="utf-8">'+
      '<title>'+(ar?'جدول الطفل':'Child Schedule')+'</title>'+
      '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'+
      '<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;800;900&display=swap" rel="stylesheet">'+
      '<style>'+printCSS()+'</style></head><body>'+area.innerHTML+'</body></html>';
    var old=document.getElementById('spPrintFrame'); if(old&&old.parentNode) old.parentNode.removeChild(old);
    var ifr=document.createElement('iframe');
    ifr.id='spPrintFrame'; ifr.setAttribute('aria-hidden','true');
    ifr.style.cssText='position:fixed;left:-9999px;top:0;width:1100px;height:760px;border:0;background:#fff';
    document.body.appendChild(ifr);
    var done=false;
    var go=function(){
      if(done) return; done=true;
      try{ ifr.contentWindow.focus(); ifr.contentWindow.print(); }
      catch(e){ popupPrint(doc,ar); if(ifr.parentNode) ifr.parentNode.removeChild(ifr); }
    };
    ifr.onload=function(){ setTimeout(go, 500); };
    try{
      var d=ifr.contentWindow.document; d.open(); d.write(doc); d.close();
    }catch(e){ popupPrint(doc,ar); return; }
    setTimeout(go, 1100); // fallback if onload never fires
  };
  function popupPrint(doc,ar){
    var w=window.open('','mkSchedPrint','width=1024,height=720');
    if(!w){ alert(ar?'يتعذّر فتح نافذة الطباعة. فضلاً اسمح بالنوافذ المنبثقة ثم أعد المحاولة.':'Cannot open the print view. Please allow pop-ups and try again.'); return; }
    var d2=doc.replace('</body>', '<scr'+'ipt>window.onload=function(){setTimeout(function(){window.focus();window.print();},400);};<\/scr'+'ipt></body>');
    w.document.open(); w.document.write(d2); w.document.close();
  }
  function printCSS(){
    return [
      "*{box-sizing:border-box;margin:0;padding:0}",
      "body{font-family:'Tajawal','Segoe UI',sans-serif;color:#1b1b1b;background:#fff;padding:6mm}",
      ".no-print{display:none !important}.only-print{display:block !important}",
      ".sp-phead{display:flex;align-items:center;justify-content:space-between;gap:1rem;border-bottom:2px solid #7D3C98;padding-bottom:8px;margin-bottom:12px}",
      ".sp-phead-l{display:flex;align-items:center;gap:.6rem}.sp-phead-ic{font-size:1.9rem}",
      ".sp-phead-t{font-weight:900;font-size:1.25rem;color:#7D3C98}.sp-phead-s{font-size:.85rem;color:#555;font-weight:700}",
      ".sp-phead-r{font-size:.8rem;color:#777;font-weight:800}",
      ".sp-print-daychip{font-weight:900;font-size:1.05rem;color:#7D3C98;margin-bottom:10px;text-align:center}",
      ".sp-week{display:grid;grid-template-columns:repeat(7,1fr);gap:5px}",
      ".sp-wk-col{border:1px solid #ccc;border-radius:7px;overflow:hidden}",
      ".sp-wk-day{background:#efe3f6;color:#7D3C98;font-weight:900;text-align:center;padding:5px;font-size:.82rem}",
      ".sp-wk-cells{padding:5px;display:flex;flex-direction:column;gap:5px;min-height:44px}",
      ".sp-wk-empty{text-align:center;color:#bbb}",
      ".sp-c{display:flex;align-items:center;gap:5px;padding:5px 6px;border:1px solid #ddd;border-inline-start:3px solid var(--cc,#1FAE8C);border-radius:6px}",
      ".sp-c-commit{--cc:#1FAE8C;background:#eafaf5}.sp-c-reward{--cc:#D4A017;background:#fdf6e3}",
      ".sp-c-ic{font-size:1.1rem}.sp-c-mid{display:flex;flex-direction:column;flex:1;min-width:0}",
      ".sp-c-name{font-weight:800;font-size:.8rem}.sp-c-time{font-size:.68rem;color:#666;font-weight:700}.sp-c-dur{color:#888}.sp-c-gift{font-size:1rem}",
      ".sp-tl{display:grid;grid-template-columns:1fr 1fr;gap:2px 20px;max-width:none;margin:0}",
      ".sp-tl-row{display:grid;grid-template-columns:58px 1fr;gap:6px;align-items:center}",
      ".sp-tl-time{font-weight:800;font-size:.74rem;color:#555;text-align:end}",
      ".sp-tl-line{display:none}",
      ".sp-tl-line::before{content:'';position:absolute;top:0;bottom:0;width:2px;background:#ddd}",
      ".sp-tl-dot{width:13px;height:13px;border-radius:50%;margin-top:12px;z-index:1}",
      ".sp-dot-c{background:#1FAE8C}.sp-dot-r{background:#D4A017}",
      ".sp-tl-card{display:flex;align-items:center;gap:8px;padding:4px 8px;margin:2px 0;border:1px solid #ddd;border-inline-start:4px solid var(--cc,#1FAE8C);border-radius:8px}",
      ".sp-mo-dow{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-bottom:4px}",
      ".sp-mo-dow div{text-align:center;font-weight:800;font-size:.74rem;color:#555}",
      ".sp-mo-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:4px}",
      ".sp-mo-cell{border:1px solid #ccc;border-radius:6px;min-height:64px;padding:4px}",
      ".sp-mo-empty{border:none}.sp-mo-today{border-color:#D4A017;box-shadow:inset 0 0 0 1px #D4A017}",
      ".sp-mo-date{font-weight:800;font-size:.74rem;color:#333}",
      ".sp-mo-ics{display:flex;flex-wrap:wrap;gap:2px;margin-top:2px}.sp-mo-ic{font-size:.82rem}.sp-mo-more{font-size:.62rem;color:#777;font-weight:800}",
      ".sp-legend{display:flex;gap:18px;justify-content:center;margin-top:14px;font-size:.82rem;font-weight:700;color:#444}",
      ".sp-legend span{display:inline-flex;align-items:center;gap:5px}",
      ".sp-lg{width:13px;height:13px;border-radius:3px;display:inline-block}.sp-lg-c{background:#1FAE8C}.sp-lg-r{background:#D4A017}",
      ".sp-ck{width:16px;height:16px;border:1.5px solid #888;border-radius:4px;background:#fff;color:#1FAE8C;font-weight:900;font-size:.68rem;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto}",
      ".sp-c-done .sp-c-name{text-decoration:line-through;color:#999}",
      ".sp-wk-pct{display:block;font-size:.62rem;font-weight:800;color:#7D3C98}",
      ".sp-tl-row,.sp-tl-card,.sp-c,.sp-wk-col,.sp-mo-cell{break-inside:avoid;page-break-inside:avoid}",
      "@page{size:landscape;margin:8mm}"
    ].join('\n');
  }

  function esc(s){ return (s==null?'':(''+s)).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

  /* ================= STYLES ================= */
  var css=document.createElement('style'); css.id='sp-style';
  css.textContent=[
    "#panel-schedule .sp-block{background:var(--card);border:1px solid var(--card-bd);border-radius:1.2rem;padding:1.1rem 1.2rem;margin-bottom:1.1rem}",
    ".sp-childbar{display:flex;align-items:center;gap:.7rem;flex-wrap:wrap;background:linear-gradient(135deg,rgba(142,68,173,.22),rgba(212,160,23,.12));border:1.5px solid rgba(212,160,23,.3);border-radius:1.2rem;padding:.9rem 1.1rem;margin-bottom:1.1rem}",
    ".sp-cb-ic{font-size:1.8rem}",
    ".sp-cb-in{flex:1;min-width:160px;background:rgba(0,0,0,.2);border:1px solid var(--card-bd);color:var(--text);border-radius:.7rem;padding:.55rem .8rem;font-family:inherit;font-size:1rem;font-weight:700}",
    ".sp-btn{border:none;border-radius:.7rem;padding:.5rem 1rem;font-family:inherit;font-weight:800;cursor:pointer;font-size:.9rem}",
    ".sp-btn-ghost{background:rgba(255,255,255,.08);color:var(--text);border:1px solid var(--card-bd)}",
    ".sp-btn-ghost:hover{background:rgba(255,255,255,.15)}",
    ".sp-block .sp-qa-col{margin-bottom:.8rem}",
    ".sp-qa-h{font-weight:900;font-size:1rem;margin-bottom:.5rem;display:flex;align-items:center;gap:.4rem}",
    ".sp-qa-h.sp-commit{color:#3FD9B5}.sp-qa-h.sp-reward{color:var(--gold-lt)}",
    ".sp-chips{display:flex;flex-wrap:wrap;gap:.45rem}",
    ".sp-chip{display:inline-flex;align-items:center;gap:.35rem;border-radius:2rem;padding:.4rem .8rem;font-family:inherit;font-weight:700;font-size:.86rem;cursor:pointer;border:1.5px solid;background:transparent;color:var(--text);transition:.15s}",
    ".sp-chip b{font-weight:900;opacity:.7}",
    ".sp-chip-commit{border-color:rgba(63,217,181,.5)}.sp-chip-commit:hover{background:rgba(63,217,181,.16)}",
    ".sp-chip-reward{border-color:rgba(212,160,23,.55)}.sp-chip-reward:hover{background:rgba(212,160,23,.16)}",
    ".sp-hint{font-size:.83rem;opacity:.8;line-height:1.7;margin:.7rem 0 0}",
    ".sp-custom{background:var(--card);border:1px solid var(--card-bd);border-radius:1.2rem;padding:.3rem 1.2rem;margin-bottom:1.1rem}",
    ".sp-custom summary{cursor:pointer;font-weight:800;padding:.7rem 0;color:var(--gold-lt)}",
    ".sp-cf{display:flex;flex-direction:column;gap:.7rem;padding:.4rem 0 1rem}",
    ".sp-in{background:rgba(0,0,0,.2);border:1px solid var(--card-bd);color:var(--text);border-radius:.7rem;padding:.55rem .8rem;font-family:inherit;font-size:1rem;font-weight:700;width:100%}",
    ".sp-kindsel{display:flex;gap:.5rem}",
    ".sp-kind{flex:1;background:rgba(255,255,255,.06);border:1.5px solid var(--card-bd);color:var(--text);border-radius:.7rem;padding:.5rem;font-family:inherit;font-weight:800;cursor:pointer}",
    ".sp-kind.on{border-color:var(--gold);background:rgba(212,160,23,.16);color:var(--gold-lt)}",
    ".sp-icos{display:flex;flex-wrap:wrap;gap:.3rem}",
    ".sp-ico{width:2.1rem;height:2.1rem;border-radius:.5rem;border:1px solid var(--card-bd);background:rgba(255,255,255,.05);font-size:1.1rem;cursor:pointer;line-height:1}",
    ".sp-ico.on{border-color:var(--gold);background:rgba(212,160,23,.22);transform:scale(1.08)}",
    ".sp-btn-go{background:var(--primary);color:#fff;align-self:flex-start}",
    ".sp-btn-go:hover{background:var(--primary-dark)}",
    ".sp-list-h{font-weight:900;font-size:1.05rem;color:var(--gold-lt);margin-bottom:.8rem;display:flex;align-items:center;gap:.5rem}",
    ".sp-count{background:var(--primary);color:#fff;border-radius:2rem;font-size:.78rem;padding:.05rem .6rem}",
    ".sp-empty,.sp-out-empty{text-align:center;opacity:.7;font-weight:700;padding:1.4rem}",
    ".sp-items{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:.7rem}",
    ".sp-item{border:1px solid var(--card-bd);border-inline-start:4px solid var(--k,#8E44AD);border-radius:.9rem;padding:.7rem .8rem;background:rgba(255,255,255,.03)}",
    ".sp-item.sp-commit{--k:#1FAE8C}.sp-item.sp-reward{--k:#D4A017}",
    ".sp-it-top{display:flex;align-items:center;gap:.5rem}",
    ".sp-it-ic{font-size:1.3rem}",
    ".sp-it-name{flex:1;min-width:0;background:transparent;border:none;border-bottom:1px dashed transparent;color:var(--text);font-family:inherit;font-weight:800;font-size:.95rem;padding:.15rem 0}",
    ".sp-it-name:focus{outline:none;border-bottom-color:var(--gold)}",
    ".sp-badge{font-size:.66rem;font-weight:900;padding:.12rem .5rem;border-radius:1rem}",
    ".sp-badge-c{background:rgba(31,174,140,.2);color:#3FD9B5}.sp-badge-r{background:rgba(212,160,23,.2);color:var(--gold-lt)}",
    ".sp-del{background:transparent;border:none;cursor:pointer;font-size:1rem;opacity:.6}.sp-del:hover{opacity:1}",
    ".sp-it-days{display:flex;align-items:center;gap:.25rem;flex-wrap:wrap;margin:.55rem 0 .4rem}",
    ".sp-d{width:1.7rem;height:1.7rem;border-radius:.45rem;border:1px solid var(--card-bd);background:rgba(255,255,255,.05);color:var(--text);font-family:inherit;font-weight:800;font-size:.72rem;cursor:pointer;padding:0}",
    ".sp-d.on{background:var(--k);border-color:var(--k);color:#06231c}",
    ".sp-daygrp{display:inline-flex;gap:.2rem;margin-inline-start:.3rem}",
    ".sp-daygrp button{background:rgba(255,255,255,.06);border:1px solid var(--card-bd);color:var(--text);border-radius:1rem;font-size:.68rem;font-weight:700;padding:.1rem .5rem;cursor:pointer;font-family:inherit}",
    ".sp-daygrp button:hover{border-color:var(--gold)}",
    ".sp-it-time{display:flex;flex-wrap:wrap;gap:.5rem .8rem;font-size:.78rem;opacity:.95}",
    ".sp-it-time label{display:inline-flex;align-items:center;gap:.3rem;font-weight:700}",
    ".sp-it-time input,.sp-it-time select{background:rgba(0,0,0,.22);border:1px solid var(--card-bd);color:var(--text);border-radius:.5rem;padding:.25rem .4rem;font-family:inherit;font-size:.8rem}",
    ".sp-it-time input[type=time]:disabled,.sp-it-time select:disabled{opacity:.4}",
    /* view bar */
    ".sp-viewbar{display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap}",
    ".sp-views{display:flex;gap:.4rem}",
    ".sp-vbtn{background:rgba(255,255,255,.06);border:1.5px solid var(--card-bd);color:var(--text);border-radius:2rem;padding:.5rem 1.1rem;font-family:inherit;font-weight:800;cursor:pointer;font-size:.92rem}",
    ".sp-vbtn.on{background:var(--primary);border-color:var(--primary);color:#fff;box-shadow:0 6px 16px rgba(142,68,173,.4)}",
    ".sp-vactions{display:flex;align-items:center;gap:.9rem;flex-wrap:wrap}",
    ".sp-gate{font-size:.82rem;font-weight:700;display:inline-flex;align-items:center;gap:.4rem;opacity:.9;cursor:pointer}",
    ".sp-btn-print{background:var(--gold);color:#0A2540}",
    ".sp-btn-print:hover{filter:brightness(1.08)}",
    /* print head */
    ".sp-phead{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.4rem .2rem 1rem;border-bottom:2px solid rgba(212,160,23,.3);margin-bottom:1rem}",
    ".sp-phead-l{display:flex;align-items:center;gap:.7rem}",
    ".sp-phead-ic{font-size:2rem}",
    ".sp-phead-t{font-weight:900;font-size:1.25rem;color:var(--gold-lt)}",
    ".sp-phead-s{font-size:.85rem;opacity:.8;font-weight:700}",
    ".sp-phead-r{font-size:.82rem;opacity:.7;font-weight:800}",
    /* daily timeline */
    ".sp-daychips,.sp-daychip{}",
    ".sp-daychips{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1rem}",
    ".sp-daychip{background:rgba(255,255,255,.06);border:1.5px solid var(--card-bd);color:var(--text);border-radius:2rem;padding:.4rem .9rem;font-family:inherit;font-weight:800;cursor:pointer;font-size:.86rem}",
    ".sp-daychip.on{background:var(--primary);border-color:var(--primary);color:#fff}",
    ".sp-print-daychip{display:none}",
    ".sp-tl{display:flex;flex-direction:column;gap:.1rem}",
    ".sp-tl-row{display:grid;grid-template-columns:64px 22px 1fr;gap:.5rem;align-items:stretch}",
    ".sp-tl-time{font-weight:800;font-size:.8rem;opacity:.85;text-align:end;padding-top:.9rem}",
    ".sp-tl-line{position:relative;display:flex;justify-content:center}",
    ".sp-tl-line::before{content:'';position:absolute;top:0;bottom:0;width:2px;background:rgba(255,255,255,.14)}",
    ".sp-tl-dot{width:13px;height:13px;border-radius:50%;margin-top:.95rem;z-index:1;border:2px solid var(--bg1)}",
    ".sp-dot-c{background:#1FAE8C}.sp-dot-r{background:#D4A017}",
    ".sp-tl-card{display:flex;align-items:center;gap:.6rem;padding:.6rem .8rem;margin:.35rem 0;border-radius:.8rem;border:1px solid var(--card-bd);border-inline-start:4px solid var(--cc,#1FAE8C)}",
    ".sp-c-commit{--cc:#1FAE8C;background:rgba(31,174,140,.08)}.sp-c-reward{--cc:#D4A017;background:rgba(212,160,23,.08)}",
    ".sp-c-ic{font-size:1.4rem}",
    ".sp-c-mid{display:flex;flex-direction:column;flex:1;min-width:0}",
    ".sp-c-name{font-weight:800;font-size:.95rem}",
    ".sp-c-time{font-size:.76rem;opacity:.78;font-weight:700}",
    ".sp-c-dur{opacity:.7}",
    ".sp-c-gift{font-size:1.1rem}",
    /* week grid */
    ".sp-week{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:.5rem;overflow-x:auto}",
    ".sp-wk-col{background:rgba(255,255,255,.03);border:1px solid var(--card-bd);border-radius:.8rem;overflow:hidden;min-width:0}",
    ".sp-wk-day{background:rgba(142,68,173,.25);color:#fff;font-weight:900;text-align:center;padding:.5rem .2rem;font-size:.86rem}",
    ".sp-wk-cells{padding:.4rem;display:flex;flex-direction:column;gap:.4rem;min-height:60px}",
    ".sp-wk-empty{text-align:center;opacity:.35;padding:.5rem}",
    ".sp-c{display:flex;align-items:center;gap:.4rem;padding:.4rem .5rem;border-radius:.6rem;border:1px solid var(--card-bd);border-inline-start:3px solid var(--cc,#1FAE8C)}",
    ".sp-c .sp-c-name{font-size:.8rem;line-height:1.3}",
    ".sp-c .sp-c-time{font-size:.68rem}",
    ".sp-c .sp-c-ic{font-size:1.05rem}",
    /* month */
    ".sp-mo-nav{display:flex;align-items:center;justify-content:center;gap:1rem;margin-bottom:.8rem}",
    ".sp-mo-nav b{font-size:1.1rem;color:var(--gold-lt);min-width:9rem;text-align:center}",
    ".sp-mo-nav button{background:var(--primary);color:#fff;border:none;border-radius:.6rem;width:2rem;height:2rem;font-size:1.1rem;cursor:pointer;font-weight:900}",
    ".sp-mo-dow{display:grid;grid-template-columns:repeat(7,1fr);gap:.3rem;margin-bottom:.3rem}",
    ".sp-mo-dow div{text-align:center;font-weight:800;font-size:.76rem;opacity:.8;padding:.2rem}",
    ".sp-mo-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:.3rem}",
    ".sp-mo-cell{background:rgba(255,255,255,.03);border:1px solid var(--card-bd);border-radius:.5rem;min-height:66px;padding:.25rem}",
    ".sp-mo-empty{background:transparent;border:none}",
    ".sp-mo-today{border-color:var(--gold);box-shadow:inset 0 0 0 1px var(--gold)}",
    ".sp-mo-date{font-weight:800;font-size:.76rem;opacity:.85;margin-bottom:.15rem}",
    ".sp-mo-ics{display:flex;flex-wrap:wrap;gap:.1rem}",
    ".sp-mo-ic{font-size:.82rem;line-height:1.2}",
    ".sp-mo-more{font-size:.64rem;opacity:.7;font-weight:800}",
    ".sp-legend{display:flex;gap:1.2rem;justify-content:center;margin-top:1rem;font-size:.82rem;font-weight:700;opacity:.9}",
    ".sp-legend span{display:inline-flex;align-items:center;gap:.4rem}",
    ".sp-lg{width:14px;height:14px;border-radius:4px;display:inline-block}",
    ".sp-lg-c{background:#1FAE8C}.sp-lg-r{background:#D4A017}",
    ".only-print{display:none}",
    "@media(max-width:640px){.sp-week{grid-template-columns:repeat(7,minmax(116px,1fr))}.sp-items{grid-template-columns:1fr}}",
    /* ---- PRINT ---- */
    "@media print{",
    "  body.sp-printing *{visibility:hidden !important}",
    "  body.sp-printing #schedPrintArea,body.sp-printing #schedPrintArea *{visibility:visible !important}",
    "  body.sp-printing #schedPrintArea{position:absolute;inset:0;margin:0;padding:14px;background:#fff !important;color:#111 !important}",
    "  body.sp-printing #schedPrintArea .no-print{display:none !important}",
    "  body.sp-printing #schedPrintArea .only-print{display:block !important}",
    "  body.sp-printing .sp-phead-t,body.sp-printing .sp-phead-s,body.sp-printing .sp-wk-day{color:#7D3C98 !important}",
    "  body.sp-printing .sp-wk-day{background:#efe3f6 !important}",
    "  body.sp-printing .sp-c,body.sp-printing .sp-wk-col,body.sp-printing .sp-mo-cell,body.sp-printing .sp-tl-card{border-color:#ccc !important;background:#fff !important}",
    "  body.sp-printing .sp-c-name,body.sp-printing .sp-mo-date,body.sp-printing .sp-c-time,body.sp-printing .sp-phead-r{color:#111 !important;opacity:1 !important}",
    "  body.sp-printing .sp-c-commit,body.sp-printing .sp-tl-card.sp-c-commit{background:#eafaf5 !important}",
    "  body.sp-printing .sp-c-reward,body.sp-printing .sp-tl-card.sp-c-reward{background:#fdf6e3 !important}",
    "  @page{size:landscape;margin:10mm}",
    "}"
  ].join("\n");
  document.head.appendChild(css);
  var css2=document.createElement('style'); css2.id='sp-style2';
  css2.textContent=[
    ".sp-prog{display:flex;gap:1.4rem;justify-content:center;flex-wrap:wrap;background:linear-gradient(135deg,rgba(31,174,140,.16),rgba(212,160,23,.12));border:1.5px solid rgba(212,160,23,.3);border-radius:1.2rem;padding:1rem 1.2rem;margin-bottom:1.1rem}",
    ".sp-ring{display:flex;align-items:center;gap:.6rem}",
    ".sp-ring-c{position:relative;width:66px;height:66px;border-radius:50%;background:conic-gradient(var(--gold-lt) calc(var(--p,0)*1%),rgba(255,255,255,.14) 0);display:grid;place-items:center}",
    ".sp-ring-c::before{content:'';position:absolute;width:50px;height:50px;border-radius:50%;background:#103154}",
    ".sp-ring-c b{position:relative;font-size:1.02rem;font-weight:900;color:var(--gold-lt)}",
    ".sp-ring-l{font-weight:800;font-size:.98rem;display:flex;flex-direction:column;line-height:1.4}",
    ".sp-ring-l span{font-size:.8rem;opacity:.72;font-weight:700}",
    ".sp-ck{flex:0 0 auto;width:22px;height:22px;border-radius:6px;border:2px solid var(--cc,#1FAE8C);background:transparent;color:#fff;font-weight:900;font-size:.82rem;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;padding:0;transition:.12s}",
    ".sp-ck:hover{filter:brightness(1.15)}",
    ".sp-ck.on{background:var(--cc,#1FAE8C);border-color:var(--cc,#1FAE8C)}",
    ".sp-c-done .sp-c-name{text-decoration:line-through;opacity:.55}",
    ".sp-wk-pct{display:block;font-size:.66rem;font-weight:800;opacity:.9;margin-top:.1rem}",
    ".sp-wk-day{display:flex;flex-direction:column;align-items:center;gap:.05rem}"
  ].join('\n');
  document.head.appendChild(css2);

  // If the panel is already the active one on load, render.
  document.addEventListener('DOMContentLoaded',function(){
    var p=document.getElementById('panel-schedule');
    if(p&&p.classList.contains('active')) renderSchedule();
  });
})();
