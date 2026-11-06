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

  /* ══════════════════════════════════════════════════════════════
     THE PUBLISHED PARENT BOOKS (from the free library) — read LIVE from
     their own files and shown page-by-page inside the guide (nothing is
     copied). Each book is cut into chapters, and every chapter is placed
     in the part of the book where it logically belongs.
     ══════════════════════════════════════════════════════════════ */
  var PPB='../Books/Published/Parent%20Plans/';
  var BOOKSRC={
    pp :{url:PPB+'Prophetic%20Tarbiyah%20Plan%20Book.html', sel:'.sheet', arOnly:true, name:{ar:'خطة التربية النبوية الشاملة',en:'The Comprehensive Prophetic Tarbiyah Plan'}},
    cmp:{url:PPB+'Tarbiyah%20Compass%20Guide%20Book.html',  sel:'.sheet', name:{ar:'بوصلة التربية — دليل المراحل العمرية',en:'The Tarbiyah Compass — age stages'}},
    rm :{url:PPB+'Parent%20Roadmap%20Book.html',            sel:'.sheet', name:{ar:'خارطة طريق المربّي',en:'The Parent Roadmap'}},
    qp :{url:PPB+'Quran%20Memorization%20Plan%20Book.html', sel:'.sheet', name:{ar:'خطة حفظ القرآن',en:'The Quran Memorization Plan'}},
    hp :{url:PPB+'Home%20Posters%20Book.html',              sel:'.poster', name:{ar:'بوسترات البيت المسلم',en:'Muslim Home Posters'}}
  };
  var CMP_ST=[['🍼','٠–٣','0–3','الحضنُ والأمان','Bonding & security'],['🧸','٣–٦','3–6','اللعبُ والتلقين','Play & first teaching'],['📿','٦–٩','6–9','التعليمُ والتأديب','Teaching & discipline'],
    ['🧭','٩–١٢','9–12','الحياءُ والاستعداد','Modesty & readiness'],['🤝','١٢–١٥','12–15','الصداقةُ والتكليف','Friendship & accountability'],['🦅','١٥–١٨','15–18','الرسالةُ والاستقلال','Mission & independence'],['🌳','+١٨','18+','الرشدُ والإطلاق','Maturity & release']];
  /* id → {bk, from, to, skip, icon, t} — page ranges of each source book */
  var CH={
    'pp-why':     {bk:'pp',from:0,  to:6,  icon:'🌟',t:{ar:'لماذا نربّي على المنهج النبوي؟',en:'Why raise by the Prophetic method?'}},
    'pp-pillars': {bk:'pp',from:7,  to:12, icon:'🏛️',t:{ar:'ركائز التربية النبوية السبع والعشرون',en:'The 27 pillars of Prophetic tarbiyah'}},
    'pp-methods': {bk:'pp',from:13, to:17, icon:'🧰',t:{ar:'أساليب التربية العشرة: أيُّها متى؟',en:'The ten methods — which one when?'}},
    'pp-spoilers':{bk:'pp',from:18, to:23, icon:'⚠️',t:{ar:'مفسدات التربية من ناحية الآباء',en:'What parents do that spoils tarbiyah'}},
    'pp-nine':    {bk:'pp',from:24, to:34, icon:'🏗️',t:{ar:'الأبنية التسعة للشخصية المسلمة',en:'The nine buildings of a Muslim personality'}},
    'pp-frame':   {bk:'pp',from:35, to:39, icon:'🗝️',t:{ar:'مقاصد المراحل وكلمات السرّ الأربع',en:'The aims of each stage & the four keys'}},
    'pp-strong':  {bk:'pp',from:40, to:46, icon:'💪',t:{ar:'بناء الشخصية القوية',en:'Building a strong personality'}},
    'pp-leader':  {bk:'pp',from:47, to:53, icon:'🚩',t:{ar:'بناء الشخصية القيادية',en:'Building a leader'}},
    'pp-speaker': {bk:'pp',from:54, to:64, icon:'🎤',t:{ar:'مشروع «المتحدّث البارع»',en:'Project: the skilled speaker'}},
    'pp-resp':    {bk:'pp',from:65, to:70, icon:'🧹',t:{ar:'بناء تحمّل المسؤولية',en:'Building responsibility'}},
    'pp-games':   {bk:'pp',from:71, to:78, icon:'🎲',t:{ar:'خزانة الألعاب والأنشطة',en:'The games & activities cupboard'}},
    'pp-stories': {bk:'pp',from:79, to:84, icon:'📚',t:{ar:'أطلس القصص حسب المرحلة والأركان',en:'Story atlas by stage & corner'}},
    'pp-acts':    {bk:'pp',from:85, to:90, icon:'🧩',t:{ar:'أطلس الأنشطة حسب المرحلة والأركان',en:'Activity atlas by stage & corner'}},
    'pp-st1':     {bk:'pp',from:91, to:146,icon:'🍼',t:{ar:'الخطة التفصيلية للمهد (٠–٣): الأهداف والمنهج الشهري وعيادة المشكلات',en:'Detailed plan 0–3: goals, monthly syllabus & problem clinic'}},
    'pp-st2':     {bk:'pp',from:147,to:200,icon:'🧸',t:{ar:'الخطة التفصيلية للطفولة المبكرة (٣–٦)',en:'Detailed plan 3–6'}},
    'pp-st3':     {bk:'pp',from:201,to:254,icon:'📿',t:{ar:'الخطة التفصيلية لمرحلة التمييز (٧–١١)',en:'Detailed plan 7–11'}},
    'pp-st4':     {bk:'pp',from:255,to:308,icon:'🦅',t:{ar:'الخطة التفصيلية للبلوغ والمراهقة (١٢+)',en:'Detailed plan 12+'}},
    'pp-posters': {bk:'pp',from:309,to:315,skip:[310],pages:true,icon:'🖼️',t:{ar:'لوحات البيت: الأذكار والصلاة والمسؤوليات والشاشات',en:'Home charts: adhkar, prayer, chores & screens'}},
    'cmp-base':   {bk:'cmp',from:1, to:3,  icon:'⚓',t:{ar:'ثوابتُ لا تتغيّر مع العمر، والوقتُ مع الأبناء',en:'What never changes with age — and time with children'}},
    'cmp-map':    {bk:'cmp',from:5, to:5,  icon:'🗺️',t:{ar:'مراحل العمر السبع في لمحة',en:'The seven life stages at a glance'}},
    'cmp-src':    {bk:'cmp',from:91,to:91, icon:'📜',t:{ar:'المصادر والمراجع',en:'Sources & references'}},
    'rm-intro':   {bk:'rm',from:1,  to:4,  icon:'🧭',t:{ar:'أهداف المدينة العشرة واختيار مسار طفلك',en:'The city’s ten goals & choosing your child’s track'}},
    'rm-t1':      {bk:'rm',from:5,  to:7,  icon:'🌱',t:{ar:'مسار البراعم (٤–٦): خطة سنة وسنتين',en:'Little Sprouts (4–6): 1- & 2-year plans'}},
    'rm-t2':      {bk:'rm',from:8,  to:10, icon:'🧱',t:{ar:'مسار البُناة (٧–٩): خطة سنة وسنتين',en:'Young Builders (7–9): 1- & 2-year plans'}},
    'rm-t3':      {bk:'rm',from:11, to:13, icon:'🛡️',t:{ar:'مسار الفرسان (١٠–١٢): خطة سنة وسنتين',en:'Knights (10–12): 1- & 2-year plans'}},
    'rm-follow':  {bk:'rm',from:14, to:15, icon:'🎓',t:{ar:'لوحة متابعة الأركان العشرة وشهادة خرّيج المدينة',en:'The ten-corner tracking sheet & the graduate certificate'}},
    'qp-method':  {bk:'qp',from:1,  to:6,  icon:'📖',t:{ar:'خطة حفظ القرآن: الطريقة والخطط الخمس',en:'Quran memorization: the method & five plans'}},
    'qp-order':   {bk:'qp',from:7,  to:10, icon:'🔢',t:{ar:'ترتيب الحفظ وجدول المراجعة الثلاثي',en:'Memorization order & the 3-tier revision table'}},
    'qp-fix':     {bk:'qp',from:11, to:14, icon:'🩺',t:{ar:'مشكلات الحفظ وآدابه وشهادة الحافظ',en:'Hifdh problems, etiquette & certificate'}},
    'hp':         {bk:'hp',from:0,  to:99, pages:true, icon:'🏠',t:{ar:'بوسترات البيت المسلم — جاهزة للطباعة',en:'Muslim home posters — print-ready'}}
  };
  CMP_ST.forEach(function(s,i){ CH['cmp-s'+(i+1)]={bk:'cmp',from:6+12*i,to:17+12*i,icon:s[0],t:{ar:'بوصلة المرحلة '+s[1]+': '+s[3],en:'Compass, stage '+s[2]+': '+s[4]}}; });

  /* special pages */
  var XP={
    annual:    {icon:'🗺️',t:{ar:'الخطة السنوية لاستخدام الموقع',en:'The annual plan for using the site'}},
    printables:{icon:'🖨️',t:{ar:'المطبوعات التربوية — ٥ حزم للطباعة',en:'Printable packs — 5 sets'}},
    articles:  {icon:'💬',t:{ar:'فهرس مقالات القسم التربوي',en:'Index of the parenting articles'}},
    library:   {icon:'📚',t:{ar:'مكتبة الأهل للاستزادة (٣٢ كتابًا)',en:'Further reading — the parents’ library (32 books)'}}
  };

  /* ══ THE BOOK — eight parts, every page in its logical place ══ */
  var BOOK=[
    {key:'b1',ic:'🧭',c:'#A07810',t:{ar:'الباب الأول: أصولُ التربية — الفهمُ قبل العمل',en:'Part 1: Foundations — understanding before action'},
      d:{ar:'ما التربية؟ ولماذا المنهج النبوي؟ ركائزه وأساليبه، وما يُفسده الآباء، وإصلاح المربّي نفسه أولًا.',en:'What tarbiyah is, why the Prophetic method, its pillars & methods, what parents spoil — and fixing ourselves first.'},
      items:[['m','mafhoom'],['b','pp-why'],['b','pp-pillars'],['b','pp-methods'],['b','pp-spoilers'],['m','nafs'],['m','marad'],['c','base']]},
    {key:'b2',ic:'🌱',c:'#1A9B7B',t:{ar:'الباب الثاني: مراحلُ العمر — ماذا يحتاج طفلي الآن؟',en:'Part 2: Life stages — what does my child need now?'},
      d:{ar:'من المهد إلى الرشد: لكل مرحلةٍ بوصلتُها (العلماء، علم النفس، الاحتياجات، الجدول اليومي) ثم خطّتُها النبوية التفصيلية.',en:'From the cradle to maturity: each stage’s compass (scholars, psychology, needs, daily plan) followed by its detailed Prophetic plan.'},
      items:[['c','map'],['b','pp-frame'],['c','s1'],['b','pp-st1'],['c','s2'],['b','pp-st2'],['c','s3'],['c','s4'],['b','pp-st3'],['c','s5'],['c','s6'],['b','pp-st4'],['c','s7']]},
    {key:'b3',ic:'🏗️',c:'#2B5FA8',t:{ar:'الباب الثالث: بناءُ الشخصية المسلمة',en:'Part 3: Building the Muslim personality'},
      d:{ar:'الأبنية التسعة، والشخصية القوية، والقيادية، والمتحدّث البارع، وتحمّل المسؤولية.',en:'The nine buildings, a strong personality, leadership, public speaking and responsibility.'},
      items:[['b','pp-nine'],['b','pp-strong'],['b','pp-leader'],['b','pp-speaker'],['b','pp-resp']]},
    {key:'b4',ic:'🎯',c:'#0D6B54',t:{ar:'الباب الرابع: خططُ الأهداف — الإيمان والعبادة والأخلاق',en:'Part 4: Goal plans — faith, worship & character'},
      d:{ar:'الخطط العملية الثماني (الصلاة، حب الله، حب الرسول ﷺ…) ومعها خطة حفظ القرآن كاملة.',en:'The eight practical plans (prayer, love of Allah, love of the Prophet ﷺ…) plus the full Quran memorization plan.'},
      items:[['g','intro'],['g','salah'],['g','allah'],['g','rasul'],['g','hafiz'],['b','qp-method'],['b','qp-order'],['b','qp-fix'],['g','leader'],['g','adhkar'],['g','qudwa'],['g','akhlaq']]},
    {key:'b5',ic:'🗺️',c:'#6C3483',t:{ar:'الباب الخامس: خارطةُ الطريق والبرنامج اليومي',en:'Part 5: The roadmap & the daily program'},
      d:{ar:'الخطة السنوية لاستخدام الموقع شهرًا بشهر لفئتي ٥–٧ و٨+، وخطة اليوم والليلة، وبرنامج ٣٠/٩٠ يومًا، وقوائم المتابعة.',en:'Your child’s 1- or 2-year track through the city, the day-and-night plan, the 30/90-day program and checklists.'},
      items:[['x','annual'],['m','khutta'],['m','barnamaj'],['b','rm-follow'],['m','jadawil']]},
    {key:'b6',ic:'🧩',c:'#A33529',t:{ar:'الباب السادس: المشكلاتُ وحلولُها',en:'Part 6: Problems & solutions'},
      d:{ar:'كلُّ مشكلةٍ في صفحةٍ واحدة: الفهم، الأسباب، الرؤى الأربع، الأدلة، مواقف عملية، خطة العلاج، وقائمة متابعة.',en:'Each problem on one page: understanding, causes, four lenses, evidence, worked examples, the plan & a checklist.'},
      items:TOPICS.map(function(x){ return ['p',x.id]; }).concat([['m','insihab'],['m','halat']])},
    {key:'b7',ic:'🧰',c:'#C27C0E',t:{ar:'الباب السابع: أدواتُ البيت — ألعابٌ وقصصٌ ولوحاتٌ ومطبوعات',en:'Part 7: Home tools — games, stories, charts & printables'},
      d:{ar:'خزانة الألعاب، وأطلسا القصص والأنشطة، وبوسترات البيت ولوحاته، والمطبوعات الجاهزة.',en:'The games cupboard, story & activity atlases, home posters & charts, and ready printables.'},
      items:[['b','pp-games'],['b','pp-stories'],['b','pp-acts'],['b','hp'],['b','pp-posters'],['x','printables']]},
    {key:'b8',ic:'📎',c:'#5A6673',t:{ar:'الملاحق',en:'Appendices'},
      d:{ar:'فهرس مقالات القسم التربوي، ومكتبة الأهل للاستزادة، والمصادر والمراجع.',en:'Index of the articles, further reading, sources & references.'},
      items:[['x','articles'],['x','library'],['c','src']]}
  ];
  /* resolve an item [kind,id] → {r,icon,title,c} */
  function itemInfo(k,id){
    if(k==='p'){ var T=TOPICS.filter(function(x){return x.id===id;})[0]; return T&&{r:'p/'+id,icon:T.icon,title:t(T.t)}; }
    if(k==='g'){ if(id==='intro') return {r:'g/intro',icon:'🌟',title:L('قواعد ذهبية لكل الرحلات','Golden rules for all journeys')};
      var g=AP.goals.filter(function(x){return x.id===id;})[0]; return g&&{r:'g/'+id,icon:g.icon,title:g.title}; }
    if(k==='m'){ var s=msec(id); return s&&{r:'m/'+id,icon:s.icon,title:cleanTitle(s.title)}; }
    if(k==='b'){ var c=CH[id]; return c&&{r:'b/'+id,icon:c.icon,title:t(c.t)}; }
    if(k==='x'){ var x=XP[id]; return x&&{r:'x/'+id,icon:x.icon,title:t(x.t)}; }
    if(k==='c'){ var cp=CPAGES[id]; return cp&&{r:'c/'+id,icon:cp.icon,title:t(cp.t)}; }
  }
  function partItems(P){ return P.items.map(function(it){ return itemInfo(it[0],it[1]); }).filter(Boolean); }
  function partOf(r){ for(var i=0;i<BOOK.length;i++){ if(partItems(BOOK[i]).some(function(x){return x.r===r;})) return BOOK[i]; } return null; }
  function chapNo(r){ var P=partOf(r); if(!P) return ''; var its=partItems(P), i=its.map(function(x){return x.r;}).indexOf(r); return NUM(BOOK.indexOf(P)+1)+'.'+NUM(i+1); }

  /* ── live book loader: hidden same-origin iframe → pages + scoped CSS ── */
  var BKCACHE={};
  function mapSel(s){ return s.split(',').map(function(x){ return x.replace(/:root\b/g,':host').replace(/(^|[\s>+~(])html\b/g,'$1.bk-html').replace(/(^|[\s>+~(])body\b/g,'$1.bk-body').replace(/^html\b/,'.bk-html').replace(/^body\b/,'.bk-body'); }).join(','); }
  function ruleText(r){
    if(r.type===1) return mapSel(r.selectorText)+'{'+r.style.cssText+'}';
    if(r.type===4) return '@media '+r.media.mediaText+'{'+Array.prototype.map.call(r.cssRules,ruleText).join('')+'}';
    if(r.type===12) return '@supports '+r.conditionText+'{'+Array.prototype.map.call(r.cssRules,ruleText).join('')+'}';
    if(r.type===5||r.type===6||r.type===3) return '';
    return r.cssText||'';
  }
  function loadBook(bk){
    var key=bk+'|'+lang; if(BKCACHE[key]) return BKCACHE[key];
    var B=BOOKSRC[bk];
    BKCACHE[key]=new Promise(function(res,rej){
      var f=document.createElement('iframe'); f.setAttribute('aria-hidden','true'); f.tabIndex=-1;
      f.style.cssText='position:fixed;left:-9999px;top:0;width:1100px;height:900px;border:0;visibility:hidden';
      f.src=B.url+(B.url.indexOf('?')<0?'?':'&')+'lang='+lang;
      var tries=0,last=-1,stable=0;
      f.onload=function(){
        (function poll(){
          var d; try{ d=f.contentDocument; }catch(e){ return rej(e); }
          var n=d?d.querySelectorAll(B.sel).length:0;
          if(n>0&&n===last){ stable++; } else stable=0; last=n;
          if((stable>=2||tries>60)&&n>0){
            var css=''; Array.prototype.forEach.call(d.styleSheets,function(ss){ try{ css+=Array.prototype.map.call(ss.cssRules,ruleText).join('\n'); }catch(e){} });
            var nodes=Array.prototype.filter.call(d.querySelectorAll(B.sel),function(x){ return !x.parentElement.closest(B.sel); }).map(function(x){ return x.outerHTML; });
            f.remove(); res({css:css,nodes:nodes});
          } else if(tries++>80){ f.remove(); rej(new Error('book did not render')); }
          else setTimeout(poll,150);
        })();
      };
      document.body.appendChild(f);
    });
    BKCACHE[key].catch(function(){ delete BKCACHE[key]; });
    return BKCACHE[key];
  }
  var SHADOW_EXTRA='.bk-body{background:transparent!important;margin:0!important;padding:0!important;min-height:0!important;display:block!important;overflow:visible!important}'
    +'.toolbar,.no-print,.seg{display:none!important}.bk-zoom{transform-origin:top center}'
    +'.sheet,.poster{margin:0 auto 1.4rem!important}'
    +'@media print{.bk-zoom{zoom:1!important}.sheet,.poster{margin:0!important}}';
  /* «flow» mode: the chapter reads as continuous sections of THIS book — no A4 frames, page
     headers/footers, covers or dividers, and the guide's own typography (posters keep their pages) */
  var FLOW_CSS='.bk-body{font-family:"Noto Naskh Arabic","Tajawal",serif!important;color:#22303E!important;font-size:16px!important;line-height:1.95!important}'
    +'.bk-html[dir=ltr] .bk-body{font-family:"Nunito","Tajawal",sans-serif!important}'
    +'.sheet{width:auto!important;max-width:none!important;min-height:0!important;height:auto!important;margin:0 0 1.4rem!important;padding:1.2rem 1.4rem!important;box-shadow:none!important;background:#FFFDF7!important;border:1px solid #E7DCC4!important;border-radius:1rem!important;overflow:visible!important}'
    +'.sheet::before,.sheet::after{display:none!important}'
    +'.flow,.sheet-body{padding:0!important;margin:0!important;min-height:0!important;height:auto!important;display:block!important}'
    +'.pfoot,.ph-n,.ph-k,.ph-ic,.crest,.cname{display:none!important}'
    +'.ph{display:block!important;background:none!important;border:none!important;border-bottom:2px solid #E7DCC4!important;padding:0 0 .45rem!important;margin:0 0 .9rem!important;color:#0A2540!important;box-shadow:none!important}'
    +'.ph h2,.ph-tx h2{font-family:"Tajawal",sans-serif!important;font-weight:900!important;font-size:1.3rem!important;color:#0A2540!important;margin:0!important}'
    +'.sheet.cover{display:none!important}'
    +'.sheet.divider{background:linear-gradient(160deg,#0A2540,#12375A)!important;color:#FEF5DC!important;border:none!important;text-align:start!important}'
    +'.sheet.divider *{color:#FEF5DC!important}.sheet.divider .d-k{display:none!important}.sheet.divider .d-ic{font-size:2rem!important;margin:0 0 .3rem!important}'
    +'.sheet.divider h2{font-family:"Tajawal",sans-serif!important;color:#F5CC5A!important;font-size:1.35rem!important;margin:0 0 .4rem!important}'
    +'.sheet.divider .flow{display:block!important;min-height:0!important}'
    +'@media print{.sheet{border:none!important;padding:0!important;margin:0 0 1rem!important;break-inside:auto}.sheet.divider{background:none!important}.sheet.divider *{color:#0A2540!important}}';
  function fitShadow(host){
    var sr=host.shadowRoot; if(!sr) return; var z=sr.querySelector('.bk-zoom'); if(!z) return;
    z.style.zoom=1; var w=host.clientWidth, mx=0;
    Array.prototype.forEach.call(z.children,function(c){ if(c.offsetWidth>mx) mx=c.offsetWidth; });
    if(mx>w&&w>0) z.style.zoom=(w/mx).toFixed(3);
  }
  function fillSlots(root){
    var slots=(root||document).querySelectorAll('.bk-slot:not([data-done])'); var jobs=[];
    Array.prototype.forEach.call(slots,function(slot){
      slot.setAttribute('data-done','1');
      var C=CH[slot.dataset.ch]; if(!C) return; var B=BOOKSRC[C.bk];
      jobs.push(loadBook(C.bk).then(function(bk){
        var skip=C.skip||[], pages=bk.nodes.slice(C.from,C.to+1).filter(function(_,i){ return skip.indexOf(C.from+i)<0; });
        var sr=slot.shadowRoot||slot.attachShadow({mode:'open'});
        var dir=(B.arOnly||AR())?'rtl':'ltr';
        sr.innerHTML='<style>'+bk.css+'\n'+SHADOW_EXTRA+(C.pages?'':FLOW_CSS)+'</style><div class="bk-html" dir="'+dir+'" lang="'+(B.arOnly?'ar':lang)+'"><div class="bk-body"><div class="bk-zoom">'+pages.join('')+'</div></div></div>';
        /* the Prophetic Plan's own «الباب …» labels follow the old book order → relabel them with this guide's part & chapter */
        if(C.bk==='pp'){ var P=partOf('b/'+slot.dataset.ch), pn=P?P.t.ar.split(':')[0]:'', no=chapNo('b/'+slot.dataset.ch).replace(/[0-9.]/g,function(d){ return d==='.'?'.':'٠١٢٣٤٥٦٧٨٩'[+d]; });
          Array.prototype.forEach.call(sr.querySelectorAll('.d-k,.ph-k'),function(e){ e.textContent=pn+' — '+no; });
          Array.prototype.forEach.call(sr.querySelectorAll('.pfoot>span:first-child'),function(e){ e.textContent=pn+' — '+C.t.ar; });
          Array.prototype.forEach.call(sr.querySelectorAll('.pfoot .brand'),function(e){ e.textContent='دليل الأهل الشامل'; });
          Array.prototype.forEach.call(sr.querySelectorAll('.ph-n'),function(e){ e.style.display='none'; }); }
        slot.classList.add('ready'); fitShadow(slot);
      },function(){ slot.innerHTML='<p class="bk-err">'+L('تعذّر تحميل صفحات الكتاب الآن — ','Could not load the book pages — ')+'<a href="'+B.url+'" target="_blank" rel="noopener">'+L('افتحه مستقلًا','open it on its own')+'</a></p>'; }));
    });
    window.__pgPending=Promise.all(jobs);
    return window.__pgPending;
  }
  window.addEventListener('resize',function(){ Array.prototype.forEach.call(document.querySelectorAll('.bk-slot.ready'),fitShadow); });

  function partKicker(r){ var P=partOf(r); return P?t(P.t):''; }
  function chapterPage(id){
    var C=CH[id]; if(!C) return null; var B=BOOKSRC[C.bk], P=partOf('b/'+id);
    return '<div class="ihero" style="--acc:'+(P?P.c:'#0D6B54')+'"><span class="big">'+C.icon+'</span><div><div class="kicker">'+(P?t(P.t):'')+'</div><h1>'+t(C.t)+'</h1>'
      +(B.arOnly&&!AR()?'<p class="sub"><em>Available in Arabic</em></p>':'')+'</div></div>'
      +'<div class="bk-slot" data-ch="'+id+'"><div class="bk-loading">'+L('⏳ جارٍ تحميل صفحات الفصل…','⏳ Loading the chapter pages…')+'</div></div>';
  }

  /* ══ «بوصلة التربية» woven natively into the book (data: TARBIYAH, read live) ══ */
  var TB=window.TARBIYAH||{stages:[]};
  function cst(id){ return TB.stages.filter(function(x){return x.id===id;})[0]; }
  function lc(items){ return '<div class="lgrid">'+items.map(function(x){ return '<div class="lcard"><div class="t">'+x[0]+' '+x[1]+'</div><div class="d">'+x[2]+'</div></div>'; }).join('')+'</div>'; }
  function ul(a){ return '<ul class="cmp-ul">'+a.map(function(x){ return '<li>'+t(x)+'</li>'; }).join('')+'</ul>'; }
  var CPAGES={
    base:{icon:'⚓',t:{ar:'ثوابتُ التربية: القاعدةُ النبوية، وأربعةٌ لا تتغيّر، والوقتُ مع الأبناء',en:'Constants: the Prophetic rule, four that never change, and time with children'}},
    map: {icon:'🗺️',t:{ar:'مراحلُ العمر السبع في لمحة — وكيف تقرأ كلَّ مرحلة',en:'The seven life stages at a glance — and how to read each one'}},
    src: {icon:'📜',t:{ar:'المصادر والمراجع',en:'Sources & references'}}
  };
  TB.stages.forEach(function(st){ CPAGES[st.id]={icon:st.ic,t:{ar:'المرحلة '+NUMA(st.age)+': '+st.nm.ar,en:'Stage '+st.age+': '+st.nm.en},st:st}; });
  function NUMA(x){ return String(x).replace(/[0-9]/g,function(d){return '٠١٢٣٤٥٦٧٨٩'[+d];}); }
  function cHero(id){ var C=CPAGES[id], P=partOf('c/'+id);
    return '<div class="ihero" style="--acc:'+(C.st?C.st.c:(P?P.c:'#0D6B54'))+'"><span class="big">'+C.icon+'</span><div><div class="kicker">'+(P?t(P.t):'')+'</div><h1>'+t(C.t)+'</h1>'+(C.st?'<p class="sub">'+t(C.st.sub)+'</p>':'')+'</div></div>'; }
  function compassPage(id){
    var C=CPAGES[id]; if(!C||!TB.stages.length) return null;
    var h=cHero(id), S=[];
    if(id==='base'){
      S.push(['rule','🤍',L('القاعدةُ النبويةُ الكبرى','The great Prophetic rule'),lc(TB.anchors.map(function(a){ return [a.ic,t(a.n),t(a.d)]; }))]);
      S.push(['const','🧱',L('أربعةٌ لا تتغيّرُ مع العمر','Four that never change with age'),'<p class="lead">'+L('مهما تغيّرتِ المراحلُ تبقى هذه الأربعةُ أساسًا تحت كلِّ شيء — إن غابت انهار ما فوقها:','Whatever the stage, these four stay beneath everything — without them the rest collapses:')+'</p>'+lc(TB.constants.map(function(c){ return [c.ic,t(c.n),t(c.d)]; }))]);
      var tp=TB.timePhilosophy; S.push(['time','🕰️',L('الوقتُ مع أطفالك — كميٌّ ونوعيّ','Time with your children — quantity & quality'),'<p class="lead">'+t(tp.intro)+'</p>'+lc(tp.laws.map(function(l){ return [l.ic,t(l.t),t(l.d)]; }))
        +'<div class="ev"><div class="h">'+L('الدليل','Evidence')+'<span class="tag">'+t(tp.evidence.ref)+'</span></div><div class="x">'+t(tp.evidence.text)+'</div></div>']);
    } else if(id==='map'){
      S.push(['windows','🪟',L('كيف تقرأ فصلَ كلِّ مرحلة؟','How to read each stage chapter'),'<p class="lead">'+L('كلُّ مرحلةٍ في هذا الباب تُعرض من النوافذ نفسها، ثم تتبعها خطّتُها التفصيلية. اقرأ مرحلةَ طفلك الآن، وراجع التي قبلها لتستدرك، والتي بعدها لتستعدّ.','Each stage in this part is shown through the same windows, then followed by its detailed plan. Read your child’s stage now, the one before to catch up, and the one after to prepare.')+'</p>'+lc(TB.pillars.map(function(x){ return [x.ic,t(x.n),t(x.d)]; }))]);
      S.push(['stages','🧭',L('المراحل السبع','The seven stages'),'<div class="tgrid">'+TB.stages.map(function(st){ return '<a class="tcard" style="--tc:'+st.c+'" href="#c/'+st.id+'"><span class="ti">'+st.ic+'</span><span><b>'+NUM(st.age)+' · '+t(st.nm)+'</b><small>'+t(st.sub)+'</small></span></a>'; }).join('')+'</div>']);
    } else if(id==='src'){
      S.push(['books','📚',L('أصولُ هذا الكتاب','The foundations of this book'),'<p class="lead">'+L('هذا الكتابُ خلاصةٌ تجمع بين الوحيِ وفهمِ المختصّين من علماءِ الشرعِ والتربيةِ وعلمِ النفس:','This book joins revelation with the understanding of scholars of Shari’ah, education and psychology:')+'</p>'+ul(TB.sources)]);
      S.push(['note','⚖️',L('تنبيه','Note'),'<div class="tip">'+t(TB.disclaimer)+'</div><p class="closing-dua">'+t(TB.closingDua)+'</p>']);
    } else {
      var st=C.st;
      S.push(['glance','👁️',L('المرحلةُ في لمحة','The stage at a glance'),'<p class="lead">'+t(st.intro)+'</p><div class="glance">'+st.glance.map(function(g){ return '<div class="gl"><div class="k">'+g.ic+' '+t(g.k)+'</div><div class="v">'+t(g.v)+'</div></div>'; }).join('')+'</div>']);
      S.push(['views','🔭',L('نظرةُ العلماء ونظرةُ علم النفس','The scholars’ view & the psychology view'),'<div class="lenses"><div class="lens" style="--lc:#0D6B54"><h4>📿 '+L('نظرةُ العلماء','The scholars’ view')+'</h4>'+paras(st.scholar)+'</div><div class="lens" style="--lc:#6C4A9E"><h4>🧠 '+L('نظرةُ علم النفس','The psychology view')+'</h4>'+paras(st.psych)+'</div></div>']);
      S.push(['voices','🎙️',L('أصواتُ المختصّين','Specialists’ voices'),'<div class="voices">'+st.specialists.map(function(v){ return '<blockquote class="voice">'+t(v.q)+'<cite>— '+t(v.by)+'</cite></blockquote>'; }).join('')+'</div>']);
      S.push(['evidence','📜',L('من هَدي الكتاب والسنّة','From the Qur’an & Sunnah'),st.evidences.map(function(e){ var lbl=e.type==='ayah'?L('قرآن','Qur’an'):e.type==='hadith'?L('حديث','Hadith'):L('أثر','Report'); return '<div class="ev"><div class="h">'+lbl+'<span class="tag">'+t(e.ref)+'</span></div><div class="x">'+t(e.text)+'</div>'+(e.note?'<div class="note">'+t(e.note)+'</div>':'')+'</div>'; }).join('')]);
      S.push(['reward','🌟',L('ثوابُ هذا العمل، والقيمُ التي تُغرس','The reward, and the values to plant'),lc(st.rewards.map(function(r){ return [r.ic,t(r.t),t(r.d)]; }))+'<h3>★ '+L('القيمُ التي تُغرس في هذه المرحلة','Values to plant now')+'</h3>'+ul(st.values)]);
      S.push(['needs','⚖️',L('الاحتياجاتُ والمخاطر','Needs & risks'),'<div class="two-col"><div class="nbox ok"><h4>✓ '+L('الاحتياجات','Needs')+'</h4>'+ul(st.needs)+'</div><div class="nbox warn"><h4>⚠ '+L('المخاطر','Risks')+'</h4>'+ul(st.risks)+'</div></div><div class="tip">'+L('<b>القاعدة:</b> لبِّ الاحتياجاتِ تَقِ نفسَك أكثرَ المخاطر؛ فأغلبُ المشكلاتِ حاجةٌ لم تُلَبَّ.','<b>The rule:</b> meet the needs and you avoid most risks — most problems are an unmet need.')+'</div>']);
      S.push(['day','🕰️',L('خريطةُ اليوم والأسبوع','The daily & weekly map'),'<div class="tip">⏱️ <b>'+L('جرعةُ الوقت: ','Time dose: ')+'</b>'+t(st.dose)+'</div><div class="tbl-wrap"><table><thead><tr><th>'+L('الوقت','When')+'</th><th>'+L('المدّة','Length')+'</th><th>'+L('النشاط','Activity')+'</th><th>'+L('مَن','Who')+'</th></tr></thead><tbody>'
        +st.daily.map(function(d){ return '<tr><td class="asp">'+t(d.t)+'</td><td>'+t(d.dur)+'</td><td>'+t(d.act)+'</td><td>'+t(d.who)+'</td></tr>'; }).join('')+'</tbody></table></div><h3>📅 '+L('الإيقاعُ الأسبوعي','The weekly rhythm')+'</h3><div class="tbl-wrap"><table><tbody>'
        +st.weekly.map(function(w){ return '<tr><td class="asp">'+t(w.d)+'</td><td>'+t(w.act)+'</td></tr>'; }).join('')+'</tbody></table></div>']);
      S.push(['father','👨',L('دورُ الأب، وأنشطةٌ تفعلها معه','The father’s role & activities to do together'),'<p class="lead">'+t(st.fatherFocus)+'</p><div class="lgrid">'+st.activities.map(function(a){ return '<div class="lcard"><div class="t">'+a.ic+' '+t(a.t)+'</div><div class="d">'+t(a.how)+'</div><div class="d why">🎯 '+t(a.why)+'</div></div>'; }).join('')+'</div>']);
      S.push(['examples','💡',L('مواقف عملية: افعل / تجنّب','Worked examples: do / avoid'),'<div class="exs">'+st.examples.map(function(e){ return '<div class="ex"><div class="eh">'+t(e.title)+'</div><div class="scene">'+t(e.scene)+'</div><div class="eg"><div class="do"><b>✅ '+L('افعل','Do')+'</b>'+t(e.do)+'</div><div class="dont"><b>🚫 '+L('تجنّب','Avoid')+'</b>'+t(e.dont)+'</div></div>'+(e.root?'<div class="root">🌱 '+t(e.root)+'</div>':'')+'</div>'; }).join('')+'</div>']);
      S.push(['problems','🩹',L('مشكلاتُ هذه المرحلة وعلاجُها','This stage’s problems & their treatment'),st.problems.map(function(pr){ return '<div class="ex"><div class="eh">⚠ '+t(pr.p)+'</div><div class="scene"><b>'+L('السبب: ','Cause: ')+'</b>'+t(pr.why)+'</div><div class="eg"><div class="do"><b>📿 '+L('المنظورُ الشرعي','Islamic lens')+'</b>'+t(pr.islamic)+'</div><div class="do psy"><b>🧠 '+L('المنظورُ النفسي','Psychological lens')+'</b>'+t(pr.psych)+'</div></div><div class="steps">'+pr.steps.map(function(x,i){ return '<div class="st"><span class="sn">'+NUM(i+1)+'</span><div><div class="std">'+t(x)+'</div></div></div>'; }).join('')+'</div></div>'; }).join('')
        +'<p class="hint">🧩 '+L('للمشكلات المفصّلة (العناد، الكذب، الغضب…) ارجع إلى الباب السادس.','For detailed problems (stubbornness, lying, anger…) see Part 6.')+' <a href="#p/start">'+L('الباب السادس ←','Part 6 →')+'</a></p>']);
      S.push(['apply','🧭',L('طبّقها في الموقع والبيت','Apply it on the site & at home'),ul(st.practice.items)+'<p class="hint">🗺️ '+L('ولترتيب ذلك شهرًا بشهر داخل الموقع ارجع إلى ','To arrange this month by month on the site, see ')+'<a href="#x/annual">'+L('الخطة السنوية (الباب الخامس)','the annual plan (Part 5)')+'</a>.</p>']);
      S.push(['checklist','✅',L('قائمةُ المحاسبة — هل أنجزتُ في هذه المرحلة؟','Accountability — have I done it at this stage?'),checklist('cmp-ck-'+st.id,st.checklist)+'<div class="ck-tools"><button data-reset="cmp-ck-'+st.id+'">'+L('إعادة تصفير القائمة','Reset list')+'</button></div>']);
      S.push(['follow','🔄',L('المتابعةُ الدوريّة','Periodic follow-up'),'<div class="tbl-wrap"><table><tbody>'+st.followup.map(function(f){ return '<tr><td class="asp">'+t(f.period)+'</td><td>'+t(f.item)+'</td></tr>'; }).join('')+'</tbody></table></div>']);
    }
    if(S.length>3) h+='<nav class="jump">'+S.map(function(x){ return '<a href="#" data-jump="'+x[0]+'">'+x[1]+' '+x[2].split(/[—:،]/)[0]+'</a>'; }).join('')+'</nav>';
    return h+S.map(function(x){ return blk(x[0],x[1],x[2],x[3]); }).join('');
  }

  /* where each article of «القسم التربوي» now lives */
  function articleHome(i){
    for(var j=0;j<TOPICS.length;j++) if(TOPICS[j].a===i) return {r:'p/'+TOPICS[j].id,anchor:'article',T:TOPICS[j]};
    for(var g in GOAL_ART) if(GOAL_ART[g].indexOf(i)>-1) return {r:'g/'+g,anchor:'art'+i};
    return null;
  }
  function specialPage(id){
    var X=XP[id]; if(!X) return null; var P=partOf('x/'+id);
    var h='<div class="ihero" style="--acc:'+(P?P.c:'#0D6B54')+'"><span class="big">'+X.icon+'</span><div><div class="kicker">'+(P?t(P.t):'')+'</div><h1>'+t(X.t)+'</h1>';
    if(id==='annual'){
      h+='<p>'+L('طريقٌ لعامٍ كامل داخل الموقع حتى لا يضيع طفلك بين الأركان: لكل شهرٍ ركنٌ ورحلاتٌ محدّدة بروابطها، وإيقاعٌ أسبوعي، ونشاطٌ عائلي، وكتابٌ للطباعة، وهدفٌ تتحقّق منه. التقدّم محفوظٌ هنا وفي ركن الأهل معًا.','A whole year’s route through the site so your child never gets lost: each month names a corner and its journeys with links, a weekly rhythm, a family activity, a book to print and a goal to check. Progress is shared with the Parents Corner.')+'</p></div></div>';
      return h+'<div id="apHost">'+(window.ANNUAL_PLAN?ANNUAL_PLAN.render(ANNUAL_PLAN.currentGroup(),lang,'../'):'')+'</div>';
    }
    if(id==='articles'){
      h+='<p>'+L('مقالات «القسم التربوي» في ركن الأهل صارت جزءًا من هذا الكتاب: كلُّ مقالٍ وُضع داخل الصفحة التي يخدمها (المشكلة أو الهدف)، فلا تُقرأ منفصلةً عن خطّتها. هذا فهرسها:','The Parents Corner articles are now part of this book: each one sits inside the page it serves (a problem or a goal). Here is their index:')+'</p></div></div>';
      h+='<div class="tgrid">'+ART.map(function(A,i){ var w=articleHome(i); if(!w) return ''; var info=itemInfo(w.r.split('/')[0],w.r.split('/')[1]);
        return '<a class="tcard art-ix" style="--tc:'+(A.color||'#0D6B54')+'" href="#'+w.r+'@'+w.anchor+'"><span class="ti">'+A.icon+'</span><span><b>'+t(A.title)+'</b><small>'+L('في: ','In: ')+(info?info.icon+' '+info.title:'')+' · '+chapNo(w.r)+'</small></span></a>'; }).join('')+'</div>';
      return h;
    }
    if(id==='printables'){
      var PS=(window.PARENTS_PRINTABLES||{}).sets||[];
      h+='<p>'+L('حزمٌ كاملةٌ للطفل تُطبَع مجّانًا: أنشطة، ملصقات تحفيز، شهادات، خطط، وبطاقات أبطال. تجدها أيضًا في المكتبة المجانية.','Complete packs for your child, free to print: activities, reward stickers, certificates, plans and hero cards. Also in the free library.')+'</p></div></div>';
      h+='<div class="tgrid">'+PS.map(function(s){ return '<a class="tcard" style="--tc:'+s.accent+'" target="_blank" rel="noopener" href="'+PPB+'Printable%20Packs.html?set='+s.id+'&lang='+lang+'"><span class="ti">'+s.icon+'</span><span><b>'+t(s.title)+'</b><small>'+t(s.blurb)+'</small><small class="go">🖨️ '+L('افتح واطبع ('+NUM(s.pages)+' صفحات)','Open & print ('+s.pages+' pages)')+'</small></span></a>'; }).join('')+'</div>';
      return h;
    }
    if(id==='library'){
      var PB=window.PARENT_BOOKS||[];
      h+='<p>'+L('كتبٌ لعلماء ومربّين نرجع إليها في هذا الدليل، نضعها بين يديك للاستزادة — اضغط لفتح الكتاب (PDF).','Books by scholars and educators we draw on — tap to open (PDF, Arabic).')+'</p></div></div>';
      h+=PB.map(function(g){ return blk('lib-'+g.dir,g.icon,t(g),'<ol class="lib-list">'+g.items.map(function(n){ return '<li><a target="_blank" rel="noopener" href="../Books/Parent%20Library/'+encodeURIComponent(g.dir)+'/'+encodeURIComponent(n)+'.pdf">'+n+'</a></li>'; }).join('')+'</ol>'); }).join('');
      return h;
    }
    return h+'</div></div>';
  }

  /* ── small renderers ───────────────────────────────── */
  function paras(o){ return t(o).split('\n\n').map(function(p){ return '<p>'+p+'</p>'; }).join(''); }
  function arBlock(html){
    return (AR()?'':'<div class="ar-only-note">⟵ Available in Arabic</div>')+'<div dir="rtl" class="ar-block" lang="ar">'+html+'</div>';
  }
  function blk(id,ic,title,body,from){
    if(!body) return '';
    return '<section class="blk" id="'+id+'"><h2><span>'+ic+'</span><span>'+title+'</span></h2>'+body+'</section>';
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
      +'<div class="kicker">'+(partKicker('p/'+T.id)||t(PARTS.p.t))+'</div><h1>'+t(T.t)+'</h1>'
      +(B?'<div class="sub">'+t(B.sub)+'</div>':(T.sub?'<div class="sub">'+t(T.sub)+'</div>':''))
      +(intro&&T.special!=='start'?'<p>'+intro+'</p>':'')
      +'</div></div>';
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
      return '<div class="ihero" style="--acc:#0D6B54"><span class="big">🌟</span><div><div class="kicker">'+(partKicker('g/intro')||t(PARTS.g.t))+'</div><h1>'+L('قواعد ذهبية لكل الرحلات','Golden rules for all journeys')+'</h1>'
        +'<p>'+L('كل رحلة «لعبة» في يد الطفل… وهدف تربوي في يدكم. لكل هدف هنا: خطة حسب العمر، برنامج ٩٠ يومًا، جدول متابعة ٣٠ يومًا، أخطاء شائعة، ودوركم في رحلة الطفل.','Each journey is a game in the child’s hands… and a tarbiyah goal in yours.')+'</p></div></div>'
        +blk('rules','🌟',L('القواعد الذهبية','The golden rules'),arBlock(AP.intro.principles||''))
        +(AP.intro.note?blk('note','📝',L('ملاحظة','Note'),arBlock(AP.intro.note)):'')
        +blk('goals','🎯',L('الأهداف الثمانية','The eight goals'),'<div class="tgrid">'+AP.goals.map(function(g){ return '<a class="tcard" style="--tc:'+g.color+'" href="#g/'+g.id+'"><span class="ti">'+g.icon+'</span><span>'+g.title+'</span></a>'; }).join('')+'</div>');
    }
    var g=AP.goals.filter(function(x){return x.id===id;})[0]; if(!g) return null;
    var h='<div class="ihero" style="--acc:'+g.color+'"><span class="big">'+g.icon+'</span><div><div class="kicker">'+(partKicker('g/'+g.id)||t(PARTS.g.t))+'</div><h1>'+g.title+'</h1>'
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
    return '<div class="ihero" style="--acc:'+((partOf('m/'+id)||{}).c||'#A07810')+'"><span class="big">'+s.icon+'</span><div><div class="kicker">'+(partKicker('m/'+id)||t(PARTS.m.t))+'</div><h1>'+cleanTitle(s.title)+'</h1></div></div>'
      +'<section class="blk">'+arBlock(murabbiLinks(s.html))+'</section>';
  }

  /* ── home: the book's cover, how to read it & the full table of contents ── */
  function homeHTML(){
    var total=0; BOOK.forEach(function(P){ total+=partItems(P).length; });
    var h='<div class="hero book-cover"><div class="kicker">'+L('تربية الطفل المسلم · ركن الأهل','Muslim Kids’ Tarbiyah · Parents Corner')+'</div>'
      +'<h1>'+L('دليل الأهل الشامل','The Complete Parents’ Guide')+'</h1>'
      +'<div class="cover-sub">'+L('كتابُ التربية للأسرة المسلمة — من الفهم إلى الخطة إلى العلاج','A tarbiyah book for the Muslim family — from understanding, to planning, to solutions')+'</div>'
      +'<p>'+L('ثمانيةُ أبوابٍ في سلسلةٍ واحدة: أصولُ التربية وفهمُها، ثم مراحلُ العمر من المهد إلى الرشد، ثم بناءُ شخصية الطفل، ثم خططُ الأهداف الإيمانية والعبادية والخلقية، ثم خارطةُ الطريق والبرنامجُ اليومي، ثم المشكلاتُ وحلولها، ثم أدواتُ البيت — وفي آخره الملاحق. على هَدي الكتاب والسنّة، مع فهم علماء التربية وعلم النفس.',
        'Eight parts in one series: the foundations of tarbiyah, the life stages from cradle to maturity, building the child’s personality, the goal plans for faith, worship and character, the roadmap and daily program, problems and their solutions, and home tools — then appendices. Guided by the Qur’an and Sunnah, with the understanding of educators and psychologists.')+'</p>'
      +'<div class="related"><a href="#'+partItems(BOOK[0])[0].r+'">📖 '+L('ابدأ القراءة من الباب الأول','Start reading from Part 1')+'</a><a class="ghost" href="#toc">🗂️ '+L('الفهرس','Contents')+' ('+NUM(total)+' '+L('فصلًا','chapters')+')</a></div></div>';
    h+='<div class="h-sec">🧭 '+L('كيف تقرأ هذا الكتاب؟','How to read this book')+'</div><div class="howto">'
      +[[L('إن كنت تبدأ','Starting out'),L('اقرأ الباب الأول ثم مرحلة طفلك من الباب الثاني.','Read Part 1, then your child’s stage in Part 2.')],
        [L('إن كان لديك هدف','You have a goal'),L('اذهب إلى الباب الرابع (الصلاة، حب الله، الحفظ…) ثم الباب الخامس لتضعه في يومك.','Go to Part 4 (prayer, love of Allah, hifdh…) then Part 5 to fit it into your day.')],
        [L('إن واجهتك مشكلة','Facing a problem'),L('افتح الباب السادس مباشرة، أو ابحث بكلمة (عناد، نوم، شاشات).','Open Part 6 directly, or search a word (stubborn, sleep, screens).')]]
        .map(function(x,i){ return '<div class="how"><b>'+NUM(i+1)+'</b><div><h4>'+x[0]+'</h4><p>'+x[1]+'</p></div></div>'; }).join('')+'</div>';
    h+='<div class="h-sec" id="toc">🗂️ '+L('فهرس الكتاب','Table of contents')+'</div><div class="toc">'
      +BOOK.map(function(P,pi){ var its=partItems(P);
        return '<section class="toc-part" style="--pc:'+P.c+'"><h3><span>'+P.ic+'</span><span>'+t(P.t)+'</span><a class="toc-print no-print" href="#print/'+P.key+'" title="'+L('اطبع الباب كاملًا','Print the whole part')+'">🖨️</a></h3><p>'+t(P.d)+'</p><ol>'
          +its.map(function(x,i){ return '<li><a href="#'+x.r+'"><span class="no">'+NUM(pi+1)+'.'+NUM(i+1)+'</span><span class="ic">'+x.icon+'</span><span>'+x.title+'</span></a></li>'; }).join('')+'</ol></section>'; }).join('')+'</div>';
    h+='<div class="merge-note">'+L(
      '<b>📖 عن هذا الكتاب:</b> كُتب ليُقرأ متسلسلًا كما يُقرأ أيُّ كتابٍ تربويّ: يبدأ بالفهم (ما التربية؟ ولماذا؟)، ثم بالطفل نفسه في كل مرحلةٍ من عمره، ثم بما نبنيه فيه، ثم بالخطط والبرنامج اليومي، ثم بعلاج ما يعترض الطريق من مشكلات، ثم بأدوات البيت. كلُّ موضوعٍ يُشرح في موضعٍ واحدٍ فقط، وما يحتاجه بابٌ من بابٍ آخر يُحال إليه برابط بدل تكراره. تقدّمك في القوائم والبرامج محفوظٌ على جهازك.',
      '<b>📖 About this book:</b> it is meant to be read in order like any parenting book: understanding first (what tarbiyah is and why), then the child at each age, then what we build in them, then the plans and the daily program, then the problems along the way, then home tools. Each topic is explained in one place only; when another part needs it, it links instead of repeating. Your checklist and program progress is saved on this device.')+'</div>';
    var PDF={p:'المشكلات وحلولها.pdf',g:'خطط الأهداف العملية.pdf',m:'مرجع المربي.pdf'};
    h+='<div class="h-sec">🖨️ '+L('ملفات PDF جاهزة','Ready PDF files')+'</div>'
      +'<div class="parts">'+['p','g','m'].map(function(k){ var P=PARTS[k]; return '<div class="part-card" style="--pc:'+P.c+'"><span class="pi">📄</span><b>'+t(P.t)+'</b>'
        +'<span>'+L('ملفٌّ واحدٌ مرتّب لهذا الجزء.','One tidy file for this part.')+'</span>'
        +'<div class="related"><a href="pdf/'+encodeURIComponent(PDF[k])+'" download>⬇ PDF</a></div></div>'; }).join('')
      +'<div class="part-card" style="--pc:#0A2540"><span class="pi">🖨️</span><b>'+L('أيُّ بابٍ كاملًا','Any whole part')+'</b><span>'+L('اضغط 🖨️ بجوار أي باب في الفهرس ثم «طباعة ← حفظ PDF».','Tap 🖨️ beside any part in the contents, then Print → Save as PDF.')+'</span></div></div>';
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
    /* book chapters & special pages: titles now, full text once their pages have loaded */
    BOOK.forEach(function(P){ partItems(P).forEach(function(x){ var k=x.r.split('/')[0]; if(k==='c'){ INDEX.push({r:x.r,icon:x.icon,title:x.title,part:t(P.t),txt:plain(compassPage(x.r.split('/')[1])||'')}); return; } if(k!=='b'&&k!=='x') return;
      var id=x.r.split('/')[1], C=CH[id], txt=x.title+' '+(k==='x'?plain(specialPage(id)||''):'');
      if(C){ var bk=BKTXT[C.bk+'|'+lang]; if(bk) txt+=' '+bk.slice(C.from,C.to+1).join(' '); }
      INDEX.push({r:x.r,icon:x.icon,title:x.title,part:t(P.t),txt:txt}); }); });
    /* parts of each page → the part the page sits in */
    INDEX.forEach(function(it){ var P=partOf(it.r); if(P) it.part=t(P.t); });
  }
  var BKTXT={};
  function indexBooks(){ var used={}; BOOK.forEach(function(P){ P.items.forEach(function(it){ if(it[0]==='b'&&CH[it[1]]) used[CH[it[1]].bk]=1; }); }); Object.keys(used).forEach(function(bk){ loadBook(bk).then(function(b){ BKTXT[bk+'|'+lang]=b.nodes.map(plain); INDEX=null; var m=/^#s\/(.+)/.exec(location.hash); if(m) route(); }); }); }
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
  function pageHTML(r){
    var k=r.split('/')[0], id=r.split('/').slice(1).join('/');
    if(k==='p'){ var T=TOPICS.filter(function(y){return y.id===id;})[0]; return T?topicHTML(T):null; }
    if(k==='g') return goalHTML(id);
    if(k==='m') return murabbiPage(id);
    if(k==='b') return chapterPage(id);
    if(k==='x') return specialPage(id);
    if(k==='c') return compassPage(id);
    return null;
  }
  function printPartHTML(k){
    var P=null, its, title, desc, ic, c;
    BOOK.forEach(function(x){ if(x.key===k) P=x; });
    if(P){ its=partItems(P); title=t(P.t); desc=t(P.d); ic=P.ic; c=P.c; }
    else if(PARTS[k]){ /* legacy unified PDFs (#print/p · g · m) */
      var Q=PARTS[k]; its=Q.items().map(function(x){ return {r:k+'/'+x.id,icon:x.icon,title:x.title}; }); title=t(Q.t); desc=t(Q.d); ic=Q.ic; c=Q.c; }
    else return null;
    var head='<div class="ihero" style="--acc:'+c+'"><span class="big">'+ic+'</span><div><div class="kicker">'+L('دليل الأهل الشامل · ملف موحّد','The Complete Parents’ Guide · unified file')+'</div><h1>'+title+'</h1><p>'+desc+'</p>'
      +'<ol style="margin-top:.6rem">'+its.map(function(x){ return '<li>'+x.icon+' '+x.title+'</li>'; }).join('')+'</ol>'
      +'<div class="related no-print"><a href="#" data-print="1">🖨️ '+L('اطبع / احفظ PDF','Print / Save PDF')+'</a></div></div></div>';
    return head+its.map(function(x){ return '<div class="part-break">'+(pageHTML(x.r)||'')+'</div>'; }).join('');
  }

  /* ── router ────────────────────────────────────────── */
  var $=function(id){ return document.getElementById(id); };
  var FLAT=[]; function flat(){ FLAT=[]; BOOK.forEach(function(P){ partItems(P).forEach(function(x){ FLAT.push({r:x.r,icon:x.icon,title:x.title,k:P.key}); }); }); }
  function route(){
    var hash=decodeURIComponent(location.hash.replace(/^#/,'')), anchor=null;
    if(hash.indexOf('@')>-1&&hash.indexOf('s/')!==0){ anchor=hash.split('@')[1]; hash=hash.split('@')[0]; }
    if(hash==='toc'){ hash=''; anchor='toc'; }
    var seg=hash.split('/'), k=seg[0], id=seg.slice(1).join('/');
    var html=null, crumb=L('دليل الأهل الشامل','Parents’ Guide');
    if(k==='p'){ var T=TOPICS.filter(function(x){return x.id===id;})[0]; if(T){ html=topicHTML(T); crumb=t(PARTS.p.t)+' › '+t(T.t); } }
    else if(k==='g'){ html=goalHTML(id); if(html) crumb=t(PARTS.g.t); }
    else if(k==='m'){ html=murabbiPage(id); if(html) crumb=t(PARTS.m.t); }
    else if(k==='b'){ html=chapterPage(id); }
    else if(k==='x'){ html=specialPage(id); }
    else if(k==='c'){ html=compassPage(id); }
    if(html&&'pgmbxc'.indexOf(k)>-1&&k){ var PP=partOf(hash), inf=null; FLAT.forEach(function(f){ if(f.r===hash) inf=f; }); if(PP&&inf) crumb=t(PP.t).split(':')[0]+' › '+chapNo(hash)+' '+inf.title; }
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
    wire(); markNav(hash); fillSlots($('main'));
    var aph=$('apHost'); if(aph&&window.ANNUAL_PLAN) ANNUAL_PLAN.wire(aph,lang,'../',function(g){ try{ localStorage.setItem('mk-annual-group',g); }catch(e){} var y=window.scrollY; route(); window.scrollTo(0,y); });
    if(k!=='s'){ closeMenu(); var el=anchor&&document.getElementById(anchor); if(el) setTimeout(function(){ el.scrollIntoView({block:'start'}); },60); else window.scrollTo(0,0); }
  }

  /* ── nav ───────────────────────────────────────────── */
  function renderNav(){
    flat();
    var closed=store('pg-nav-closed2')||{};
    $('nav').innerHTML=BOOK.map(function(P,pi){ var its=partItems(P), cur=partOf(decodeURIComponent(location.hash.replace(/^#/,'').split('@')[0]));
      var isClosed = closed[P.key]!==undefined ? closed[P.key] : (cur!==P);
      return '<div class="nav-part'+(isClosed?' closed':'')+'" data-k="'+P.key+'"><button type="button"><span>'+P.ic+'</span><span>'+t(P.t).replace(/^[^:]*:\s*/,function(m){ return '<small>'+m.replace(':','')+'</small>'; })+'</span><span class="n">'+NUM(its.length)+'</span><span class="car">▾</span></button>'
        +'<div class="nav-list">'+its.map(function(x,i){ return '<a href="#'+x.r+'" data-r="'+x.r+'"><span class="ic">'+x.icon+'</span><span>'+x.title+'</span></a>'; }).join('')+'</div></div>'; }).join('');
    Array.prototype.forEach.call(document.querySelectorAll('.nav-part>button'),function(b){ b.onclick=function(){ var p=b.parentNode; p.classList.toggle('closed'); var c=store('pg-nav-closed2')||{}; c[p.dataset.k]=p.classList.contains('closed'); store('pg-nav-closed2',c); }; });
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
    $('brandSub').textContent=L('كتابُ التربية للأسرة المسلمة — ثمانية أبواب في سلسلةٍ واحدة','A tarbiyah book for the Muslim family — eight parts, one series');
    $('q').placeholder=L('ابحث في الدليل كله… (عناد، نوم، صلاة)','Search the whole guide… (stubborn, sleep)');
    $('footBooks').textContent=L('📚 الكتب المطبوعة للأهل (المكتبة المجانية)','📚 Printed parent books (free library)');
    $('footCompass').textContent=L('🗂️ فهرس الكتاب','🗂️ Table of contents'); $('footCompass').href='#toc'; $('footCompass').removeAttribute('target');
    $('footHome').textContent=L('🏠 العودة للمدينة','🏠 Back to the city');
    $('footBooks').href='../corners/shared/store.html?lang='+lang+'#books';
    INDEX=null; renderNav(); route(); indexBooks();
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
    if(/^#print\//.test(location.hash) && /autoprint/.test(location.search)) setTimeout(function(){ (window.__pgPending||Promise.resolve()).then(function(){ setTimeout(function(){ window.print(); },400); }); },600);
  });
})();
