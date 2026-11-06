/* guide.js — دليل الأهل الشامل · Unified Parents' Guide
   ─────────────────────────────────────────────────────────────────
   One place for everything the Parents Corner used to spread over many
   separate files. Content is NOT copied — it is read from the original
   data files (single source of truth) and merged BY TOPIC so nothing
   repeats:

     BEHAVIOR          ← Books/Published/Parent Plans/behavior/*.js   («مفاتيح السلوك»)
     PARENTS_PROGRAMS  ← corners/little-district/pages/parents-programs.js (برامج ٤ أسابيع)
     PARENTS_DATA      ← corners/little-district/pages/parents-data.js     (المقالات)
     MURABBI_A/B/C     ← murabbi/content-*.js                              (مرجع المربي)
     PG_APPLIED        ← parents-guide/applied-data.js  (الخطط الثماني + دليل الرحلات)

   Routes:  #  ·  #p/<topic>  ·  #g/<goal>  ·  #m/<section>  ·  #s/<query>
            #print/p | #print/g | #print/m   (a whole part, ready to save as PDF) */
(function(){
  'use strict';
  var lang='ar';
  try{ var q=new URLSearchParams(location.search).get('lang'); lang=q||localStorage.getItem('bunyanLang')||'ar'; }catch(e){}
  if(lang!=='en') lang='ar';
  var AR=function(){ return lang==='ar'; };
  function t(o){ if(o==null) return ''; if(typeof o==='string') return o; return o[lang]||o.ar||''; }
  function L(ar,en){ return AR()?ar:en; }
  function esc(s){ return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
  function store(k,v){ try{ if(v===undefined) return JSON.parse(localStorage.getItem(k)||'null'); localStorage.setItem(k,JSON.stringify(v)); }catch(e){ return null; } }
  var NUM=function(n){ return AR()?String(n).replace(/[0-9]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'[+d];}):String(n); };

  /* ── sources ───────────────────────────────────────── */
  var BH=window.BEHAVIOR||{problems:[]};
  var PR=window.PARENTS_PROGRAMS||[];
  var ART=(window.PARENTS_DATA||{}).articles||[];
  var MU=[].concat(window.MURABBI_A||[],window.MURABBI_B||[],window.MURABBI_C||[]);
  var AP=window.PG_APPLIED||{intro:{},goals:[]};
  function bp(id){ return BH.problems.filter(function(x){return x.id===id;})[0]; }
  function pp(id){ return PR.filter(function(x){return x.id===id;})[0]; }
  function msec(id){ return MU.filter(function(x){return x.id===id;})[0]; }
  function cleanTitle(s){ return String(s||'').replace(/^[٠-٩0-9]+\s*·\s*/,''); }
  /* the Murabbi «anger & jealousy» chapter is split so each half lives with its own problem */
  var SPLIT='<h3>الغيرة = غضب خفي</h3>';
  function murabbiHTML(ref){
    var parts=ref.split('#'), s=msec(parts[0]); if(!s) return '';
    var h=s.html;
    if(parts[1]){ var i=h.indexOf(SPLIT); if(i>-1) h = parts[1]==='1' ? h.slice(0,i) : h.slice(i); }
    return murabbiLinks(h);
  }
  /* cross-references «القسم ٥» → live links inside the guide */
  var SEC_REF={'٤':'#m/khutta','٥':'#m/insihab','٦':'#p/start','٧':'#p/stubborn','٨':'#p/anger','٩':'#p/fear','١٠':'#p/sleep','١١':'#p/study','١٢':'#m/halat','١٣':'#m/barnamaj','١٤':'#m/jadawil'};
  function murabbiLinks(h){
    return h.replace(/القسم (١٤|١٣|١٢|١١|١٠|[٤-٩])/g,function(m,n){ return SEC_REF[n]?'<a href="'+SEC_REF[n]+'">'+m+'</a>':m; });
  }

  /* ── the three parts ───────────────────────────────── */
  var TOPICS=[
    {id:'start',icon:'🧭',c:'#0A2540',t:{ar:'قبل أن تبدأ: متى يكون السلوك مشكلة؟',en:'Before you start: when is it a problem?'},
      sub:{ar:'المنهج العام لعلاج أيِّ سلوك',en:'The general method for any behaviour'},special:'start',m:'mushkilat',a:2},
    {id:'lying',icon:'🤥',c:'#2A6FDB',t:{ar:'الكذب',en:'Lying'},b:'p1',p:'lying'},
    {id:'fear',icon:'😨',c:'#2980B9',t:{ar:'الخوف والخجل',en:'Fear & shyness'},b:'p2',p:'fear',m:'khawf'},
    {id:'anger',icon:'🌋',c:'#E67E22',t:{ar:'الغضب ونوبات الغضب',en:'Anger & tantrums'},b:'p3',p:'anger',m:'ghadab#1'},
    {id:'stubborn',icon:'🦬',c:'#C0392B',t:{ar:'العناد وعدم سماع الكلام',en:'Stubbornness & not listening'},b:'p7',p:'stubborn',m:'inad'},
    {id:'jealousy',icon:'🤝',c:'#D35400',t:{ar:'الغيرة بين الإخوة',en:'Sibling jealousy'},b:'p6',a:6,m:'ghadab#2'},
    {id:'badwords',icon:'🗯️',c:'#8E2C48',t:{ar:'الألفاظ السيئة والتنمّر',en:'Bad words & bullying'},b:'p4',a:11},
    {id:'study',icon:'🎯',c:'#0984E3',t:{ar:'التشتّت والواجبات والتعليم',en:'Focus, homework & schooling'},b:'p5',p:'focus',m:'taaleem'},
    {id:'responsibility',icon:'🧹',c:'#1F8B6E',t:{ar:'الكسل وعدم تحمّل المسؤولية',en:'Laziness & responsibility'},b:'p8',a:7},
    {id:'prayer',icon:'🕌',c:'#8E44AD',t:{ar:'التهاون في الصلاة',en:'Neglecting prayer'},p:'prayer',a:4,goal:'salah'},
    {id:'sleep',icon:'🛏️',c:'#34495E',t:{ar:'النوم والأرق والتبوّل الليلي',en:'Sleep, insomnia & bed-wetting'},m:'nawm'},
    {id:'adab',icon:'🙇',c:'#7D3C98',t:{ar:'قلّة الأدب مع الكبار',en:'Disrespect toward elders'},a:8,goal:'akhlaq'},
    {id:'gratitude',icon:'🛍️',c:'#D4A017',t:{ar:'«اشترِ لي!» — الطمع والاستهلاك',en:'"Buy me!" — greed & consumerism'},a:9},
    {id:'friends',icon:'🫂',c:'#2B8C7E',t:{ar:'الصحبة واختيار الأصدقاء',en:'Friends & good company'},a:10},
    {id:'screens',icon:'📱',c:'#E67E22',t:{ar:'إدمان الشاشات',en:'Screen addiction'},a:1}
  ];
  /* articles that belong to a positive goal rather than a problem */
  var GOAL_ART={allah:[0],leader:[3,5]};
  var MURABBI_KEEP=['mafhoom','nafs','marad','khutta','insihab','halat','barnamaj','jadawil'];

  var PARTS={
    p:{ic:'🧩',c:'#A33529',t:{ar:'المشكلات وحلولها',en:'Problems & solutions'},
       d:{ar:'كلُّ مشكلةٍ في صفحةٍ واحدة: الفهم، الأسباب، الرؤى الأربع، الأدلة، مواقف عملية، خطة العلاج، وقائمة متابعة.',en:'Each problem on one page: understanding, causes, four lenses, evidence, worked examples, the plan & a checklist.'},
       items:function(){ return TOPICS.map(function(x){ return {id:x.id,icon:x.icon,c:x.c,title:t(x.t)}; }); }},
    g:{ic:'🎯',c:'#0D6B54',t:{ar:'خطط الأهداف العملية',en:'Practical goal plans'},
       d:{ar:'الخطط الثماني لأهداف الأركان (الصلاة، حب الله، حب الرسول ﷺ…) مع دوركم في رحلة الطفل المقابلة.',en:'The eight goal plans (prayer, love of Allah, love of the Prophet ﷺ…) with your role in each child journey.'},
       items:function(){ return [{id:'intro',icon:'🌟',c:'#0D6B54',title:L('قواعد ذهبية لكل الرحلات','Golden rules for all journeys')}].concat(AP.goals.map(function(g){ return {id:g.id,icon:g.icon,c:g.color,title:g.title}; })); }},
    m:{ic:'🧭',c:'#A07810',t:{ar:'مرجع المربي',en:'The Murabbi reference'},
       d:{ar:'خلاصات «ألف باء التربية»: مفهوم التربية، إصلاح المربي، خطة اليوم والليلة، الانسحاب التربوي، وبرنامج ٣٠/٩٠ يومًا.',en:'“Alif Ba of Tarbiyah” digests: the concept, fixing the parent, the day-and-night plan, educational withdrawal & a 30/90-day program.'},
       items:function(){ return MURABBI_KEEP.map(function(id){ var s=msec(id); return s?{id:id,icon:s.icon,c:'#A07810',title:cleanTitle(s.title)}:null; }).filter(Boolean); }}
  };

  /* ── small renderers ───────────────────────────────── */
  function paras(o){ return t(o).split('\n\n').map(function(p){ return '<p>'+p+'</p>'; }).join(''); }
  function arBlock(html){
    return (AR()?'':'<div class="ar-only-note">⟵ Available in Arabic</div>')+'<div dir="rtl" class="ar-block" lang="ar">'+html+'</div>';
  }
  function blk(id,ic,title,body,from){
    if(!body) return '';
    return '<section class="blk" id="'+id+'"><h2><span>'+ic+'</span><span>'+title+'</span>'+(from?'<span class="from">'+from+'</span>':'')+'</h2>'+body+'</section>';
  }
  var SRC={
    b:function(){ return L('مفاتيح السلوك','Keys to Behaviour'); },
    p:function(){ return L('برامج العلاج','Programs'); },
    m:function(){ return L('مرجع المربي','Murabbi reference'); },
    a:function(){ return L('القسم التربوي','Articles'); }
  };
  function checklist(key,items){
    var saved=store(key)||{};
    return '<ul class="cl" data-key="'+key+'">'+items.map(function(x,i){ return '<li class="'+(saved[i]?'done':'')+'" data-i="'+i+'"><span class="box">✓</span><span class="txt">'+t(x)+'</span></li>'; }).join('')+'</ul>';
  }

  /* ── problem topic page ────────────────────────────── */
  function topicHTML(T){
    var B=T.b?bp(T.b):null, P=T.p?pp(T.p):null, A=(T.a!=null)?ART[T.a]:null, M=T.m?murabbiHTML(T.m):'';
    var used=[]; if(B)used.push(SRC.b()); if(P)used.push(SRC.p()); if(M)used.push(SRC.m()); if(A)used.push(SRC.a());
    var intro=B?t(B.intro):(P?t(P.blurb):'');
    var h='<div class="ihero" style="--acc:'+T.c+'"><span class="big">'+T.icon+'</span><div>'
      +'<div class="kicker">'+t(PARTS.p.t)+'</div><h1>'+t(T.t)+'</h1>'
      +(B?'<div class="sub">'+t(B.sub)+'</div>':(T.sub?'<div class="sub">'+t(T.sub)+'</div>':''))
      +(intro&&T.special!=='start'?'<p>'+intro+'</p>':'')
      +'<div class="srcs">'+used.map(function(s){return '<span class="src">📎 '+s+'</span>';}).join('')+'</div></div></div>';
    if(B&&B.glance) h+='<div class="glance">'+B.glance.map(function(g){ return '<div class="gl"><div class="k">'+g.ic+' '+t(g.k)+'</div><div class="v">'+t(g.v)+'</div></div>'; }).join('')+'</div>';

    var S=[];   /* [id, icon, title, body, from] */
    if(T.special==='start'){
      S.push(['method','🛠️',L('ستُّ قواعدَ لعلاجِ أيِّ سلوك','Six rules for treating any behaviour'),
        '<p class="lead">'+t(BH.method&&BH.method.intro)+'</p><div class="steps">'+((BH.method&&BH.method.steps)||[]).map(function(s){ return '<div class="st"><span class="sn">'+s.n+'</span><div><div class="stt">'+t(s.t)+'</div><div class="std">'+t(s.d)+'</div></div></div>'; }).join('')+'</div>'
        +(BH.method&&BH.method.warn?'<div class="flag">⚠ '+t(BH.method.warn)+'</div>':''),SRC.b()]);
      if(BH.normalIntro) S.push(['normal','⚖️',L('الطبيعيُّ… ومتى نقلق؟','The natural — and when to worry'),
        '<p class="lead">'+t(BH.normalIntro.intro)+'</p><div class="lgrid">'+BH.normalIntro.flags.map(function(f){ return '<div class="lcard flag"><div class="t">'+f.ic+' '+t(f.t)+'</div><div class="d">'+t(f.d)+'</div></div>'; }).join('')+'</div>'
        +(BH.normalIntro.note?'<div class="qbox">'+t(BH.normalIntro.note)+'</div>':''),SRC.b()]);
      if(M) S.push(['murabbi','📘',L('فهم المشكلات — من مجالس «ألف باء التربية»','Understanding problems — from “Alif Ba of Tarbiyah”'),arBlock(M),SRC.m()]);
      if(BH.lenses) S.push(['lenses','🔭',L('الرؤى الأربع التي نعالج بها كلَّ مشكلة','The four lenses used for every problem'),
        '<div class="lgrid">'+BH.lenses.map(function(l){ return '<div class="lcard"><div class="t">'+l.ic+' '+t(l.n)+'</div><div class="d">'+t(l.d)+'</div></div>'; }).join('')+'</div>',SRC.b()]);
      if(A) S.push(['article','💬',t(A.title),'<div class="article">'+(A.body[lang]||A.body.ar).map(function(p){return '<p>'+p+'</p>';}).join('')+'</div>',SRC.a()]);
      if(BH.principles) S.push(['principles','💎',L('مبادئُ تصلح لكلِّ مشكلة','Principles for every problem'),
        '<div class="lgrid">'+BH.principles.map(function(g){ return '<div class="lcard"><div class="t">'+g[0]+' '+t(g[1])+'</div><div class="d">'+t(g[2])+'</div></div>'; }).join('')+'</div>',SRC.b()]);
    } else {
      /* 1 understand */
      var und='';
      if(P) und+='<p class="lead">'+t(P.understand)+'</p>';
      if(B){
        und+='<p>'+t(B.normal.intro)+'</p><div class="tbl-wrap"><table><thead><tr><th>'+t(B.normal.col||{ar:'الجانب',en:'Aspect'})+'</th><th class="nat">✅ '+L('طبيعيّ','Natural')+'</th><th class="abn">⚠ '+L('يستدعي الانتباه','Concerning')+'</th></tr></thead><tbody>'
          +B.normal.rows.map(function(r){ return '<tr><td class="asp">'+t(r.k)+'</td><td>'+t(r.nat)+'</td><td>'+t(r.abn)+'</td></tr>'; }).join('')+'</tbody></table></div>';
      }
      if(und) S.push(['understand','🧠',L('افهم المشكلة: الطبيعيُّ وغيرُ الطبيعيّ','Understand it: natural vs concerning'),und]);
      /* 2 causes */
      if(B&&B.causes) S.push(['causes','🔍',L('الأسبابُ خلف السلوك','The causes behind it'),
        '<div class="causes">'+B.causes.map(function(c){ return '<div class="cause"><span class="ci">'+(c.ic||'•')+'</span><span>'+t(c.t||c)+'</span></div>'; }).join('')+'</div>',SRC.b()]);
      /* 3 four lenses */
      if(B) S.push(['lenses','🔭',L('أربعُ رؤى: شرعيّة · تربويّة · نفسيّة · طبّيّة','Four lenses: religious · educational · psychological · medical'),
        '<div class="lenses">'
        +[['religious','📿','#0D6B54',{ar:'الرؤية الشرعيّة',en:'Religious'}],['educational','🌱','#1E7A4F',{ar:'الرؤية التربويّة',en:'Educational'}],['psych','🧠','#6C4A9E',{ar:'الرؤية النفسيّة',en:'Psychological'}],['medical','🩺','#2A6FDB',{ar:'الرؤية الطبّيّة',en:'Medical'}]]
          .map(function(x){ return B[x[0]]?'<div class="lens" style="--lc:'+x[2]+'"><h4>'+x[1]+' '+t(x[3])+'</h4>'+paras(B[x[0]])+'</div>':''; }).join('')+'</div>',SRC.b()]);
      /* 4 evidence (Qur'an · Sunnah · science) */
      var ev='';
      if(P&&P.rooted) ev+=P.rooted.map(function(r){ return '<div class="ev"><div class="x">'+r.icon+' '+t(r)+'</div></div>'; }).join('');
      if(B&&B.evidences) ev+=B.evidences.map(function(e){ var lbl=e.type==='ayah'?L('قرآن','Qur’an'):e.type==='hadith'?L('حديث','Hadith'):L('أثر','Report'); return '<div class="ev"><div class="h">'+lbl+'<span class="tag">'+t(e.ref)+'</span></div><div class="x">'+t(e.text)+'</div>'+(e.note?'<div class="note">'+t(e.note)+'</div>':'')+'</div>'; }).join('');
      if(ev) S.push(['evidence','📜',L('من هَدي الكتاب والسنّة والعلم','From the Qur’an, Sunnah & science'),ev]);
      /* 5 Murabbi digest */
      if(M) S.push(['murabbi','📘',L('من مجالس «ألف باء التربية»','From the “Alif Ba of Tarbiyah” sessions'),arBlock(M),SRC.m()]);
      /* 6 article */
      if(A) S.push(['article','💬',t(A.title),'<div class="article">'+(A.body[lang]||A.body.ar).map(function(p){return '<p>'+p+'</p>';}).join('')+'</div>',SRC.a()]);
      /* 7 worked examples */
      if(B&&B.examples) S.push(['examples','💡',L('مواقف عملية: افعل / تجنّب','Worked examples: do / avoid'),
        '<div class="exs">'+B.examples.map(function(e){ return '<div class="ex"><div class="eh">'+t(e.title)+'</div><div class="scene">'+t(e.scene)+'</div><div class="eg"><div class="do"><b>✅ '+L('افعل','Do')+'</b>'+t(e.do)+'</div><div class="dont"><b>🚫 '+L('تجنّب','Avoid')+'</b>'+t(e.dont)+'</div></div>'+(e.root?'<div class="root">🌱 '+t(e.root)+'</div>':'')+'</div>'; }).join('')+'</div>',SRC.b()]);
      /* 8 the plan — quick program + 4-week program */
      var plan='';
      if(B&&B.program){
        plan+='<h3>📋 '+t(B.program.name)+'</h3><p>'+t(B.program.intro)+'</p><div class="steps">'
          +B.program.steps.map(function(s){ return '<div class="st"><span class="sn">'+s.n+'</span><div><div class="stt">'+t(s.t)+'</div><div class="std">'+t(s.d)+'</div></div></div>'; }).join('')+'</div>'
          +(B.program.tip?'<div class="tip">'+t(B.program.tip)+'</div>':'');
      }
      if(P&&P.weeks){
        var dn=store('pp:'+P.id)||[], pct=Math.round(dn.length/P.weeks.length*100);
        plan+='<h3>🗓️ '+L('برنامج الأسابيع الأربعة','The four-week program')+'</h3>'
          +'<div class="bar"><i style="width:'+pct+'%"></i></div>'
          +'<div class="weeks" data-prog="'+P.id+'">'+P.weeks.map(function(w,i){ var d=dn.indexOf(i)>-1; return '<div class="wk'+(d?' done':'')+'"><div class="wh"><span class="wn">'+NUM(i+1)+'</span><b>'+t(w.t)+'</b><button class="wbtn" data-prog="'+P.id+'" data-w="'+i+'">'+(d?L('✓ تم','✓ Done'):L('أنهيتُه','Mark done'))+'</button></div><div class="wg">🎯 '+t(w.goal)+'</div><ul>'+w.steps.map(function(s){return '<li>'+t(s)+'</li>';}).join('')+'</ul></div>'; }).join('')+'</div>';
      }
      if(plan) S.push(['plan','🗓️',L('خطة العلاج','The treatment plan'),plan]);
      /* 9 checklist */
      if(B&&B.checklist) S.push(['checklist','✅',L('قائمة متابعة الأهل','Parent follow-up checklist'),checklist('pg-ck-'+T.id,B.checklist)+'<div class="ck-tools"><button data-reset="pg-ck-'+T.id+'">'+L('إعادة تصفير القائمة','Reset list')+'</button></div>',SRC.b()]);
      /* 10 red flags — merged from both sources */
      var fl=[]; if(B&&B.normal&&B.normal.specialist) fl=fl.concat(B.normal.specialist.map(t)); if(P&&P.redflags) fl.push(t(P.redflags));
      if(fl.length) S.push(['specialist','🩺',L('متى تستشير مختصًّا؟','When to consult a specialist'),'<div class="flag"><ul>'+fl.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul></div>']);
    }
    /* related */
    var rel='';
    if(T.goal){ var g=AP.goals.filter(function(x){return x.id===T.goal;})[0]; if(g) rel+='<a href="#g/'+g.id+'">'+g.icon+' '+L('الخطة الإيجابية: ','Positive plan: ')+g.title+'</a>'; }
    if(rel) S.push(['related','🔗',L('اقرأ أيضًا','See also'),'<div class="related">'+rel+'</div>']);

    if(S.length>3) h+='<nav class="jump">'+S.map(function(s){ return '<a href="#" data-jump="'+s[0]+'">'+s[1]+' '+s[2].replace(/<[^>]+>/g,'').split(':')[0]+'</a>'; }).join('')+'</nav>';
    h+=S.map(function(s){ return blk(s[0],s[1],s[2],s[3],s[4]); }).join('');
    return '<div style="--acc:'+T.c+'">'+h+'</div>';
  }

  /* ── goal plan page ────────────────────────────────── */
  function goalHTML(id){
    if(id==='intro'){
      return '<div class="ihero" style="--acc:#0D6B54"><span class="big">🌟</span><div><div class="kicker">'+t(PARTS.g.t)+'</div><h1>'+L('قواعد ذهبية لكل الرحلات','Golden rules for all journeys')+'</h1>'
        +'<p>'+L('كل رحلة «لعبة» في يد الطفل… وهدف تربوي في يدكم. لكل هدف هنا: خطة حسب العمر، برنامج ٩٠ يومًا، جدول متابعة ٣٠ يومًا، أخطاء شائعة، ودوركم في رحلة الطفل.','Each journey is a game in the child’s hands… and a tarbiyah goal in yours.')+'</p></div></div>'
        +blk('rules','🌟',L('القواعد الذهبية','The golden rules'),arBlock(AP.intro.principles||''))
        +(AP.intro.note?blk('note','📝',L('ملاحظة','Note'),arBlock(AP.intro.note)):'')
        +blk('goals','🎯',L('الأهداف الثمانية','The eight goals'),'<div class="tgrid">'+AP.goals.map(function(g){ return '<a class="tcard" style="--tc:'+g.color+'" href="#g/'+g.id+'"><span class="ti">'+g.icon+'</span><span>'+g.title+'</span></a>'; }).join('')+'</div>');
    }
    var g=AP.goals.filter(function(x){return x.id===id;})[0]; if(!g) return null;
    var h='<div class="ihero" style="--acc:'+g.color+'"><span class="big">'+g.icon+'</span><div><div class="kicker">'+t(PARTS.g.t)+'</div><h1>'+g.title+'</h1>'
      +(g.lead?'<p>'+g.lead+'</p>':'')+'<div class="related"><a href="'+g.journey+'">🎠 '+L('رحلة الطفل التفاعلية','The child’s interactive journey')+' ←</a></div></div></div>';
    h+='<div class="plan">'+arBlock(g.html)+'</div>';
    if(g.role) h+=blk('role','🏡',L('دوركم في رحلة الطفل','Your role in the child’s journey'),'<div class="role" style="--acc:'+g.color+'">'+arBlock(g.role)+'</div>');
    (GOAL_ART[g.id]||[]).forEach(function(i){ var A=ART[i]; if(A) h+=blk('art'+i,'💬',t(A.title),'<div class="article">'+(A.body[lang]||A.body.ar).map(function(p){return '<p>'+p+'</p>';}).join('')+'</div>',SRC.a()); });
    var probs=TOPICS.filter(function(x){return x.goal===g.id;});
    if(probs.length) h+=blk('rel','🔗',L('مشكلات مرتبطة','Related problems'),'<div class="related">'+probs.map(function(x){ return '<a class="ghost" href="#p/'+x.id+'">'+x.icon+' '+t(x.t)+'</a>'; }).join('')+'</div>');
    return '<div style="--acc:'+g.color+'">'+h+'</div>';
  }

  /* ── Murabbi section page ──────────────────────────── */
  function murabbiPage(id){
    var s=msec(id); if(!s||MURABBI_KEEP.indexOf(id)<0) return null;
    return '<div class="ihero" style="--acc:#A07810"><span class="big">'+s.icon+'</span><div><div class="kicker">'+t(PARTS.m.t)+' · '+L('خلاصات «ألف باء التربية» للشيخ عبدالرحمن ذاكر الهاشمي','“Alif Ba of Tarbiyah” digests')+'</div><h1>'+cleanTitle(s.title)+'</h1></div></div>'
      +'<section class="blk">'+arBlock(murabbiLinks(s.html))+'</section>';
  }

  /* ── home ──────────────────────────────────────────── */
  function homeHTML(){
    var h='<div class="hero"><div class="kicker">'+L('ركن الأهل · كلُّ شيءٍ في مكانٍ واحد','Parents Corner · everything in one place')+'</div>'
      +'<h1>'+L('دليل الأهل الشامل','The Complete Parents’ Guide')+'</h1>'
      +'<p>'+L('جمعنا هنا كلَّ ما كان متفرّقًا في ركن الأهل — كتاب «مفاتيح السلوك»، وبرامج العلاج بالأسابيع، و«مرجع المربي»، والتطبيقات العملية الثمانية، ودليل الرحلات، ومقالات القسم التربوي — في دليلٍ واحدٍ مرتّبٍ حسب الموضوع، بلا تكرار، وقابلٍ للطباعة أو الحفظ PDF.',
        'Everything that was spread across the Parents Corner — the “Keys to Behaviour” book, the week-by-week programs, the Murabbi reference, the eight practical plans, the journeys guide and the articles — merged into one guide organised by topic, without repetition, printable or savable as PDF.')+'</p></div>';
    h+='<div class="parts">'+['p','g','m'].map(function(k){ var P=PARTS[k]; return '<a class="part-card" style="--pc:'+P.c+'" href="#'+k+'/'+P.items()[0].id+'"><span class="pi">'+P.ic+'</span><b>'+t(P.t)+'</b><span>'+t(P.d)+'</span><span class="cnt">'+NUM(P.items().length)+' '+L('صفحة','pages')+' ←</span></a>'; }).join('')+'</div>';
    h+='<div class="h-sec">🧩 '+L('ما المشكلة التي تواجهك الآن؟','Which problem are you facing now?')+'</div><div class="tgrid">'
      +TOPICS.map(function(x){ return '<a class="tcard" style="--tc:'+x.c+'" href="#p/'+x.id+'"><span class="ti">'+x.icon+'</span><span>'+t(x.t)+'</span></a>'; }).join('')+'</div>';
    h+='<div class="h-sec">🎯 '+L('أهداف تريد بناءها','Goals you want to build')+'</div><div class="tgrid">'
      +AP.goals.map(function(g){ return '<a class="tcard" style="--tc:'+g.color+'" href="#g/'+g.id+'"><span class="ti">'+g.icon+'</span><span>'+g.title+'</span></a>'; }).join('')+'</div>';
    h+='<div class="merge-note">'+L(
      '<b>🧾 كيف دُمِجت الملفات؟</b> كلُّ موضوعٍ صار صفحةً واحدة تجمع ما قيل عنه في كل المصادر: مثلًا صفحة «العناد» تضم فصل الكتاب، وبرنامج الأسابيع الأربعة، وقسم «مرجع المربي» — بدل ثلاثة ملفات منفصلة. وفصل «الغضب والغيرة» قُسِم ليذهب كلُّ نصفٍ إلى موضوعه. الأقسام المشتركة («متى تكون مشكلة؟»، «الرؤى الأربع»، «المبادئ») جُمعت مرّةً واحدة في «قبل أن تبدأ». تقدّم البرامج وقوائم المتابعة وجداول الثلاثين يومًا محفوظٌ على جهازك.',
      '<b>🧾 How were the files merged?</b> Every topic is now one page gathering what all sources said about it — e.g. “Stubbornness” combines the book chapter, the 4-week program and the Murabbi section instead of three separate files. Shared sections (“when is it a problem?”, the four lenses, principles) appear once under “Before you start”. Your program progress, checklists and 30-day trackers are saved on this device.')+'</div>';
    var PDF={p:'المشكلات وحلولها.pdf',g:'خطط الأهداف العملية.pdf',m:'مرجع المربي.pdf'};
    h+='<div class="h-sec">🖨️ '+L('ثلاثة ملفات PDF موحّدة','Three unified PDF files')+'</div>'
      +'<div class="parts">'+['p','g','m'].map(function(k){ var P=PARTS[k]; return '<div class="part-card" style="--pc:'+P.c+'"><span class="pi">📄</span><b>'+t(P.t)+'</b>'
        +'<span>'+L('ملفٌّ واحدٌ مرتّب يضمّ كلَّ صفحات هذا القسم.','One tidy file containing every page of this part.')+'</span>'
        +'<div class="related"><a href="pdf/'+encodeURIComponent(PDF[k])+'" download>⬇ PDF</a><a class="ghost" href="#print/'+k+'">🖨️ '+L('معاينة وطباعة','Preview & print')+'</a></div></div>'; }).join('')+'</div>';
    return h;
  }

  /* ── search ────────────────────────────────────────── */
  var INDEX=null;
  function plain(h){ var d=document.createElement('div'); d.innerHTML=h; return (d.textContent||'').replace(/\s+/g,' '); }
  function buildIndex(){
    INDEX=[];
    TOPICS.forEach(function(x){ INDEX.push({r:'p/'+x.id,icon:x.icon,title:t(x.t),part:t(PARTS.p.t),txt:plain(topicHTML(x))}); });
    PARTS.g.items().forEach(function(x){ INDEX.push({r:'g/'+x.id,icon:x.icon,title:x.title,part:t(PARTS.g.t),txt:plain(goalHTML(x.id)||'')}); });
    PARTS.m.items().forEach(function(x){ INDEX.push({r:'m/'+x.id,icon:x.icon,title:x.title,part:t(PARTS.m.t),txt:plain(murabbiPage(x.id)||'')}); });
  }
  function norm(s){ return s.replace(/[ً-ْـ]/g,'').replace(/[أإآ]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي').toLowerCase(); }
  function searchHTML(q){
    if(!INDEX) buildIndex();
    var nq=norm(q.trim()); if(!nq) return homeHTML();
    var hits=INDEX.map(function(it){ var n=norm(it.txt), i=n.indexOf(nq); return i<0?null:{it:it,i:i,count:n.split(nq).length-1}; }).filter(Boolean).sort(function(a,b){return b.count-a.count;});
    var h='<div class="hero"><div class="kicker">'+L('نتائج البحث','Search results')+'</div><h1>«'+esc(q)+'»</h1><p>'+NUM(hits.length)+' '+L('صفحة','pages')+'</p></div>';
    if(!hits.length) return h+'<p>'+L('لا نتائج مطابقة — جرّب كلمة أخرى (عناد، نوم، صلاة…).','No matches — try another word.')+'</p>';
    return h+hits.map(function(x){ var s=Math.max(0,x.i-70), snip=x.it.txt.substr(s,200); return '<a class="res" href="#'+x.it.r+'"><b>'+x.it.icon+' '+x.it.title+'</b><span class="pt">'+x.it.part+' · '+NUM(x.count)+'×</span><span class="snip">…'+esc(snip)+'…</span></a>'; }).join('');
  }

  /* ── print a whole part ────────────────────────────── */
  function printPartHTML(k){
    var P=PARTS[k]; if(!P) return null;
    var head='<div class="ihero" style="--acc:'+P.c+'"><span class="big">'+P.ic+'</span><div><div class="kicker">'+L('دليل الأهل الشامل · ملف موحّد','The Complete Parents’ Guide · unified file')+'</div><h1>'+t(P.t)+'</h1><p>'+t(P.d)+'</p>'
      +'<ol style="margin-top:.6rem">'+P.items().map(function(x){ return '<li>'+x.icon+' '+x.title+'</li>'; }).join('')+'</ol>'
      +'<div class="related no-print"><a href="#" data-print="1">🖨️ '+L('اطبع / احفظ PDF','Print / Save PDF')+'</a></div></div></div>';
    return head+P.items().map(function(x){
      var body = k==='p' ? topicHTML(TOPICS.filter(function(y){return y.id===x.id;})[0]) : k==='g' ? goalHTML(x.id) : murabbiPage(x.id);
      return '<div class="part-break">'+body+'</div>';
    }).join('');
  }

  /* ── router ────────────────────────────────────────── */
  var $=function(id){ return document.getElementById(id); };
  var FLAT=[]; function flat(){ FLAT=[]; ['p','g','m'].forEach(function(k){ PARTS[k].items().forEach(function(x){ FLAT.push({r:k+'/'+x.id,icon:x.icon,title:x.title,k:k}); }); }); }
  function route(){
    var hash=decodeURIComponent(location.hash.replace(/^#/,'')), seg=hash.split('/'), k=seg[0], id=seg.slice(1).join('/');
    var html=null, crumb=L('دليل الأهل الشامل','Parents’ Guide');
    if(k==='p'){ var T=TOPICS.filter(function(x){return x.id===id;})[0]; if(T){ html=topicHTML(T); crumb=t(PARTS.p.t)+' › '+t(T.t); } }
    else if(k==='g'){ html=goalHTML(id); if(html) crumb=t(PARTS.g.t); }
    else if(k==='m'){ html=murabbiPage(id); if(html) crumb=t(PARTS.m.t); }
    else if(k==='s'){ html=searchHTML(id); crumb=L('بحث','Search'); }
    else if(k==='print'){ html=printPartHTML(id); if(html) crumb=L('ملف موحّد للطباعة','Unified printable file'); }
    if(!html){ html=homeHTML(); k=''; }
    /* pager */
    var idx=-1; FLAT.forEach(function(f,i){ if(f.r===hash) idx=i; });
    if(idx>-1){
      var pv=FLAT[idx-1], nx=FLAT[idx+1];
      html+='<div class="pager">'+(pv?'<a href="#'+pv.r+'">'+(AR()?'→ ':'← ')+pv.icon+' '+pv.title+'</a>':'<span></span>')+(nx?'<a href="#'+nx.r+'">'+nx.icon+' '+nx.title+(AR()?' ←':' →')+'</a>':'')+'</div>';
    }
    html='<div class="print-head">'+L('دليل الأهل الشامل — تربية الطفل المسلم · ركن الأهل','The Complete Parents’ Guide — Muslim Kids’ Tarbiyah')+'</div>'+html;
    if(k&&k!=='s'&&k!=='print') html+='<p class="disclaimer">'+t(BH.disclaimer||{ar:'',en:''})+'</p>';
    $('main').innerHTML=html; $('crumb').textContent=crumb;
    document.title=(crumb===L('دليل الأهل الشامل','Parents’ Guide')?'':crumb.split(' › ').pop()+' — ')+L('دليل الأهل الشامل','The Complete Parents’ Guide');
    wire(); markNav(hash);
    if(k!=='s'){ window.scrollTo(0,0); closeMenu(); }
  }

  /* ── nav ───────────────────────────────────────────── */
  function renderNav(){
    flat();
    var closed=store('pg-nav-closed')||{};
    $('nav').innerHTML=['p','g','m'].map(function(k){ var P=PARTS[k], its=P.items();
      return '<div class="nav-part'+(closed[k]?' closed':'')+'" data-k="'+k+'"><button type="button"><span>'+P.ic+'</span><span>'+t(P.t)+'</span><span class="n">'+NUM(its.length)+'</span><span class="car">▾</span></button>'
        +'<div class="nav-list">'+its.map(function(x){ return '<a href="#'+k+'/'+x.id+'" data-r="'+k+'/'+x.id+'"><span class="ic">'+x.icon+'</span><span>'+x.title+'</span></a>'; }).join('')+'</div></div>'; }).join('');
    Array.prototype.forEach.call(document.querySelectorAll('.nav-part>button'),function(b){ b.onclick=function(){ var p=b.parentNode; p.classList.toggle('closed'); var c=store('pg-nav-closed')||{}; c[p.dataset.k]=p.classList.contains('closed'); store('pg-nav-closed',c); }; });
  }
  function markNav(r){ Array.prototype.forEach.call(document.querySelectorAll('.nav-list a'),function(a){ a.classList.toggle('on',a.dataset.r===r); }); }

  /* ── interactive bits inside content ───────────────── */
  function wire(){
    var main=$('main');
    /* jump chips */
    Array.prototype.forEach.call(main.querySelectorAll('[data-jump]'),function(a){ a.onclick=function(e){ e.preventDefault(); var el=document.getElementById(a.dataset.jump); if(el) el.scrollIntoView({behavior:'smooth',block:'start'}); }; });
    Array.prototype.forEach.call(main.querySelectorAll('[data-print]'),function(a){ a.onclick=function(e){ e.preventDefault(); window.print(); }; });
    /* program weeks (same storage key as the Parents Corner → progress stays in sync) */
    Array.prototype.forEach.call(main.querySelectorAll('.wbtn'),function(b){ b.onclick=function(){ var k='pp:'+b.dataset.prog, d=store(k)||[], i=+b.dataset.w, j=d.indexOf(i); if(j>-1)d.splice(j,1); else d.push(i); store(k,d); var y=window.scrollY; route(); window.scrollTo(0,y); }; });
    /* our checklists */
    Array.prototype.forEach.call(main.querySelectorAll('ul.cl'),function(ul){ var key=ul.dataset.key; Array.prototype.forEach.call(ul.children,function(li){ li.onclick=function(){ var s=store(key)||{}; li.classList.toggle('done'); s[li.dataset.i]=li.classList.contains('done'); store(key,s); }; }); });
    Array.prototype.forEach.call(main.querySelectorAll('[data-reset]'),function(b){ b.onclick=function(){ store(b.dataset.reset,{}); Array.prototype.forEach.call(main.querySelectorAll('ul.cl[data-key="'+b.dataset.reset+'"] li'),function(li){li.classList.remove('done');}); }; });
    /* Murabbi checklists (original keys kept) */
    Array.prototype.forEach.call(main.querySelectorAll('ul.checklist'),function(ul){
      if(ul.dataset.wired) return; ul.dataset.wired='1';
      var key='murabbi-ck-'+ul.dataset.ck, saved=store(key)||{};
      var items=Array.prototype.slice.call(ul.querySelectorAll('li'));
      items.forEach(function(li,i){ li.innerHTML='<span class="box">✓</span><span class="txt">'+li.innerHTML+'</span>'; if(saved[i]) li.classList.add('done');
        li.onclick=function(){ li.classList.toggle('done'); saved[i]=li.classList.contains('done'); store(key,saved); }; });
      var tools=document.createElement('div'); tools.className='ck-tools'; var btn=document.createElement('button'); btn.textContent=L('إعادة تصفير القائمة','Reset list');
      btn.onclick=function(){ saved={}; store(key,{}); items.forEach(function(li){li.classList.remove('done');}); }; tools.appendChild(btn); ul.parentNode.insertBefore(tools,ul.nextSibling);
    });
    /* 30-day trackers of the goal plans (original keys kept where they existed) */
    var LEGACY={pract_salah:'pract_salah_tracker',pract_allah:'pract_hubbAllah_tracker'};
    Array.prototype.forEach.call(main.querySelectorAll('.trk'),function(box){
      var key=LEGACY[box.dataset.key]||(box.dataset.key+'_tracker'), saved=store(key)||{};
      var scope=box.closest('section.chapter')||box.parentNode, counters=scope.querySelectorAll('.trk-count');
      function upd(){ var n=Object.keys(saved).filter(function(k){return saved[k];}).length; Array.prototype.forEach.call(counters,function(c){ c.textContent= c.tagName==='SPAN' ? NUM(n) : (n?(L('أُنجز ','Done: ')+NUM(n)+L(' من ٣٠ يومًا',' of 30 days')+(n>=30?L(' — ما شاء الله! اكتمل','  — complete!'):'')):''); }); }
      var h=''; for(var d=1; d<=30; d++) h+='<button type="button" data-d="'+d+'" class="'+(saved[d]?'done':'')+'">'+NUM(d)+'</button>';
      box.innerHTML=h;
      Array.prototype.forEach.call(box.children,function(b){ b.onclick=function(){ var d=b.dataset.d; saved[d]=!saved[d]; if(!saved[d]) delete saved[d]; b.classList.toggle('done'); store(key,saved); upd(); }; });
      upd();
    });
  }

  /* ── chrome: language, menu, search, print ─────────── */
  function applyLang(){
    document.documentElement.lang=lang; document.documentElement.dir=AR()?'rtl':'ltr';
    try{ localStorage.setItem('bunyanLang',lang); }catch(e){}
    $('langBtn').textContent=AR()?'EN':'عربي';
    $('backLink').href='../corners/little-district/pages/parents.html?lang='+lang;
    $('backLink').querySelector('.lbl').textContent=L('ركن الأهل','Parents Corner');
    $('printLbl').textContent=L('طباعة / PDF','Print / PDF');
    $('brandTitle').textContent=L('دليل الأهل الشامل','The Complete Parents’ Guide');
    $('brandSub').textContent=L('المشكلات وحلولها · خطط الأهداف · مرجع المربي — في مكانٍ واحد','Problems & solutions · goal plans · Murabbi reference — in one place');
    $('q').placeholder=L('ابحث في الدليل كله… (عناد، نوم، صلاة)','Search the whole guide… (stubborn, sleep)');
    $('footBooks').textContent=L('📚 الكتب المطبوعة للأهل (المكتبة المجانية)','📚 Printed parent books (free library)');
    $('footCompass').textContent=L('🧭 بوصلة التربية — دليل المراحل العمرية','🧭 Tarbiyah Compass — age stages');
    $('footHome').textContent=L('🏠 العودة للمدينة','🏠 Back to the city');
    $('footBooks').href='../corners/shared/store.html?lang='+lang+'#books';
    INDEX=null; renderNav(); route();
  }
  function closeMenu(){ $('side').classList.remove('open'); $('scrim').classList.remove('on'); }
  document.addEventListener('DOMContentLoaded',function(){
    $('langBtn').onclick=function(){ lang=AR()?'en':'ar'; applyLang(); };
    $('menuBtn').onclick=function(){ $('side').classList.add('open'); $('scrim').classList.add('on'); };
    $('scrim').onclick=closeMenu;
    $('printBtn').onclick=function(){ window.print(); };
    var tm; $('q').oninput=function(){ var v=this.value; clearTimeout(tm); tm=setTimeout(function(){ if(v.trim()) location.hash='s/'+encodeURIComponent(v.trim()); else location.hash=''; },250); };
    window.addEventListener('hashchange',route);
    applyLang();
    if(/^#print\//.test(location.hash) && /autoprint/.test(location.search)) setTimeout(function(){ window.print(); },600);
  });
})();
