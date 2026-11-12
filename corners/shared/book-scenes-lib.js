/* ════════════════════════════════════════════════════════════════
   book-scenes-lib.js — element library, part 1: places, buildings,
   nature, sky things and (simple, faceless) animals for the scene
   illustrator (book-scenes.js). Every element is drawn in a box 100
   units tall with the origin at bottom-centre (y is negative upward).
   meta: z = L landmark · M medium · S small prop · K sky · W water ·
           E emblem · P people;  S = natural height in px;  ar = w/h;
         env = allowed places (o outdoor · i indoor · u underwater ·
           s space; default: L/M outdoor only, others anywhere);
         k = keywords (ar/en/emoji, '!' = strong, '*' = prefix);
         bd = backdrop votes.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var B=window.BookScenes; if(!B) return;
  var P=B.P,R=B.R,C=B.C,E=B.E,PL=B.PL,L=B.L,arch=B.arch,mix=B.mix,star=B.star,cres=B.crescent;
  function g(t,inner){ return '<g transform="'+t+'">'+inner+'</g>'; }
  function finial(x,y,c){ return L('M'+x+' '+y+' v-8',c.goldD,1.4)+C(x,y-3,1.6,c.gold)+P(cres(x,y-11,3.6),c.gold); }

  /* ───────────── PLACES & BUILDINGS ───────────── */
  B.def('kaaba',{z:'L',S:150,ar:0.86,noflip:1,k:'!kaaba|!ka\'bah|!ka\'ba|!كعبه|بيت الله|البيت الحرام|البيت العتيق|tawaf|طواف|qibla|قبله|🕋|hajj|حج|umrah|عمره|مكه|makkah|mecca|quraysh|قريش|haram|ismail|اسماعيل|black stone|الحجر الاسود|fil|الفيل',bd:{haram:5}},function(c){
    var bl=c.black, s='';
    s+=R(-44,-5,88,5,c.stoneL)+P('M-38 -5 V-90 H22 V-5 Z',bl)+P('M22 -5 V-90 L38 -83 V-5 Z',mix(bl,'#000',0.3));
    s+=R(-38,-72,60,10,c.gold)+P('M22 -72 L38 -66 V-57 L22 -62 Z',c.goldD);
    s+=L('M-33 -67 H17',bl,2.2,{da:'7 4',nl:1})+L('M-38 -76 H22 M-38 -59 H22',c.goldL,0.8,{nl:1});
    s+=R(-4,-44,17,39,c.gold,{rx:1})+R(-1,-41,11,33,c.goldD,{nl:1})+L('M4.5 -41 V-8',c.goldL,0.8,{nl:1});
    s+=R(-38,-93,60,3.5,c.cloth)+P('M22 -93 L38 -86 V-83 L22 -90 Z',c.stoneL,{nl:1});
    return s; });

  function mosqueBody(c,dome,one){
    var s='', w=c.cream, win=c.tod==='night'?c.lit:mix(c.navy,c.a,0.3);
    s+=R(-66,-3,132,3,c.stone);
    if(!one) s+=R(-62,-80,11,77,w)+R(-65,-64,17,4,c.stoneL)+P('M-63 -80 L-56.5 -96 L-50 -80 Z',dome)+finial(-56.5,-95,c);
    s+=R(51,-80,11,77,w)+R(48,-64,17,4,c.stoneL)+P('M50 -80 L56.5 -96 L63 -80 Z',dome)+finial(56.5,-95,c);
    s+=R(-44,-44,88,41,w)+R(-46,-47,92,5,c.stoneL);
    s+=P('M-27 -47 C-32 -72 -10 -80 0 -88 C10 -80 32 -72 27 -47 Z',dome)+P('M-18 -52 C-21 -66 -9 -74 -3 -79',  'none',{st:'#fff',sw:2.4,op:0.45,nl:1,lf:'none'})+finial(0,-87,c);
    s+=P(arch(-9,-30,18,27),c.aD)+L('M0 -29 V-3',c.aL,0.8,{nl:1});
    s+=P(arch(-34,-32,10,17),win)+P(arch(-22,-32,10,17),win)+P(arch(12,-32,10,17),win)+P(arch(24,-32,10,17),win);
    return s; }
  B.def('mosque',{z:'L',S:165,ar:1.3,grp:'mosque',k:'mosque|masjid|مسجد|مساجد|جامع|🕌|dome|قبه|minaret*|adhan|اذان|muezzin|موذن|prayer|صلاه|jumuah|جمعه|friday|worship|عباده|quba|قباء|house of allah|بيوت الله|congregation|جماعه',bd:{city:1,oasis:1,garden:1}},function(c){ return mosqueBody(c,c.a,false); });
  B.def('nabawi',{z:'L',S:165,ar:1.3,grp:'mosque',k:'!nabawi|!المسجد النبوي|!green dome|!القبه الخضراء|madinah|medina|المدينه|يثرب|yathrib|rawdah|الروضه|hijrah|هجره|ansar|انصار|muhajir*|مهاجرين|prophet\'s mosque|taybah|طيبه',bd:{oasis:3,city:1}},function(c){ return mosqueBody(c,mix(c.leaf,c.teal,0.3),true)+B.place('palm',-58,0,62,false,c); });

  B.def('domeRock',{z:'L',S:150,ar:1.15,grp:'mosque',noflip:1,k:'!quds|!القدس|!aqsa|!الاقصي|!dome of the rock|!قبه الصخره|jerusalem|بيت المقدس|المقدس|palestin*|فلسطين|مسري|isra|اسراء|sham|الشام|salahuddin|صلاح الدين|hittin|حطين|blessed land|الارض المباركه|ummah',bd:{city:2,mountains:1}},function(c){
    var s='', tile=mix(c.water,c.teal,0.35);
    s+=R(-50,-3,100,3,c.stone)+P('M-44 -3 V-36 L-30 -43 H30 L44 -36 V-3 Z',tile)+P('M-44 -3 V-17 H44 V-3 Z',c.stoneL);
    s+=L('M-44 -36 H44',c.goldL,1.2)+L('M-30 -43 V-3 M30 -43 V-3',mix(tile,'#000',0.2),0.9,{nl:1});
    for(var i=0;i<5;i++) s+=P(arch(-25+i*11,-33,7,13),c.navy);
    s+=P(arch(-5,-18,10,15),c.aD);
    s+=R(-23,-56,46,14,c.cream)+L('M-23 -49 H23',tile,3,{da:'3 3',nl:1})+R(-25,-58,50,3,c.stoneL);
    s+=P('M-22 -58 C-29 -84 -8 -90 0 -96 C8 -90 29 -84 22 -58 Z',c.gold)+P('M-14 -62 C-17 -76 -7 -84 -2 -88','none',{st:'#fff',sw:2.2,op:0.5,nl:1,lf:'none'});
    s+=L('M0 -96 v-3',c.goldD,1.2)+P(cres(0,-99.5,0.1),c.gold,{nl:1});
    return s; });

  B.def('minaret',{z:'M',S:150,ar:0.26,k:'minaret|ميذنه|ماذنه|مناره|adhan|اذان|muezzin|موذن|call to prayer|النداء|bilal|بلال|حي علي الصلاه'},function(c){
    var w=c.cream, s='';
    s+=R(-9,-66,18,66,w)+R(-12,-70,24,5,c.stoneL)+R(-6.5,-88,13,18,w)+R(-9,-90,18,3.5,c.stoneL)+P('M-7 -90 Q-8 -98 0 -103 Q8 -98 7 -90 Z',c.a);
    s+=P(arch(-3,-84,6,10),c.navy)+P(arch(-3.5,-50,7,12),c.navy)+P(arch(-3.5,-22,7,12),c.aD)+L('M-9 -34 H9',c.stoneL,1.4,{nl:1});
    s+=L('M0 -103 v-4',c.goldD,1)+C(0,-108,1.6,c.gold);
    return s; });

  B.def('mountain',{z:'L',S:170,ar:1.5,k:'mountain|جبل|جبال|peak|قمه|uhud|احد|sinai|طور|الطور|safa|الصفا|marwah|المروه|arafat|عرفات|noor|judi|الجودي|rock|صخره|summit|climb|تسلق|صعد|⛰|🏔',bd:{mountains:4}},function(c){
    return P('M-76 0 L-30 -76 L-15 -60 L4 -98 L32 -46 L45 -58 L76 0 Z',c.stone)+P('M4 -98 L32 -46 L45 -58 L76 0 H22 L12 -40 Z',c.stoneD,{op:0.4,nl:1})+
      P('M4 -98 L-8 -74 L-1 -79 L5 -70 L11 -79 L17 -74 Z',c.white)+P('M-30 -76 L-37 -64 L-30 -67 L-24 -62 L-21 -66 Z',c.white)+
      L('M-48 -20 l10 -14 M40 -18 l8 -12 M-8 -30 l6 -10',c.stoneD,1.3,{op:0.6,nl:1}); });

  B.def('cave',{z:'L',S:135,ar:1.5,k:'cave|غار|كهف|مغاره|hira|حراء|thawr|غار ثور|kahf|الكهف|sleepers|اصحاب الكهف|اهل الكهف|refuge|ماوي|seclusion|خلوه|revelation|وحي|iqra|اقرا|🕳',bd:{mountains:4}},function(c){
    var s=P('M-76 0 Q-72 -56 -34 -80 Q0 -104 36 -78 Q72 -54 76 0 Z',c.stone)+P('M10 -92 Q62 -66 76 0 H44 Q40 -50 10 -92 Z',c.stoneD,{op:0.35,nl:1});
    s+=P('M-24 0 Q-27 -46 1 -52 Q27 -46 25 0 Z',B.isLine()?'#fff':mix(c.navy,'#000',0.25))+E(1,-12,15,20,c.glow,{op:0.45,nl:1})+E(1,-6,8,10,'#fff',{op:0.4,nl:1});
    s+=L('M-54 -30 l8 -12 M50 -28 l-6 -12 M-14 -70 l6 -8 M30 -64 l5 -8',c.stoneD,1.4,{op:0.6,nl:1});
    s+=E(-40,-3,13,7,c.stoneL)+E(40,-2,10,5,c.stoneL)+E(52,-4,6,4,c.stoneD);
    return s; });

  B.def('tent',{z:'M',S:96,ar:1.5,grp:'tent',k:'tent|خيمه|خيام|bedouin|بدو|بدوي|camp|مخيم|معسكر|nomad|⛺|🏕|encamp*|army camp|جيش|scout|كشافه|halimah|حليمه|بني سعد',bd:{desert:3}},function(c){
    var s=P('M-72 0 L-42 -52 Q0 -76 42 -52 L72 0 Z',c.cloth);
    s+=P('M-42 -52 Q-22 -64 -14 -66 L-26 0 H-50 Z',c.a,{op:0.85,keep:1})+P('M42 -52 Q22 -64 14 -66 L26 0 H50 Z',c.a,{op:0.85,keep:1});
    s+=P('M-13 0 L0 -46 L13 0 Z',B.isLine()?'#fff':mix(c.woodD,c.navy,0.4))+L('M0 -72 V-92',c.woodD,2)+P('M0 -92 l16 5 l-16 6 Z',c.a);
    s+=L('M-72 0 l-10 4 M72 0 l10 4',c.woodD,1.4);
    return s; });
  B.def('tents',{z:'L',S:86,ar:2.3,grp:'tent',k:'!mina|!مني|tents|خيام|muzdalifah|مزدلفه|pilgrims|حجاج|hajj|حج|camp',bd:{mountains:2,desert:2}},function(c){
    var s='',xs=[-70,-34,0,36,70],i; for(i=0;i<5;i++){ var x=xs[i], h=i%2?50:62;
      s+=P('M'+(x-22)+' 0 L'+x+' '+(-h)+' L'+(x+22)+' 0 Z',c.white,{st:c.stoneL,sw:1})+P('M'+(x-5)+' 0 L'+x+' '+(-h*0.5)+' L'+(x+5)+' 0 Z',c.stone)+L('M'+x+' '+(-h)+' v-7',c.goldD,1.2)+C(x,-h-8,1.6,c.gold); }
    return s; });

  B.def('houses',{z:'L',S:118,ar:1.6,k:'houses|بيوت|منازل|village|قريه|town|بلده|مدينه|city|neighbourhood|حي|حاره|neighbor*|neighbour*|جار|جيران|الجار|street|homes|دار الارقم|madinah|mud-brick|community|society|مجتمع|people of|اهل|قوم',bd:{city:3}},function(c){
    var win=c.tod==='night'?c.lit:c.woodD, s='';
    s+=R(-78,-52,46,52,c.mud)+R(-80,-56,50,5,c.mudD)+P(arch(-62,-22,13,22),c.aD)+P(arch(-72,-44,8,12),win)+P(arch(-46,-44,8,12),win);
    s+=R(-30,-76,52,76,c.mudD)+R(-32,-80,56,5,mix(c.mudD,'#000',0.1))+P('M-16 -80 Q-4 -100 8 -80 Z',c.a)+P(arch(-10,-26,14,26),c.woodD)+P(arch(-22,-62,9,14),win)+P(arch(-4,-62,9,14),win)+P(arch(12,-62,9,14),win);
    s+=R(24,-44,52,44,c.mud)+R(22,-48,56,5,c.mudD)+P(arch(42,-22,13,22),c.aD)+P(arch(30,-38,8,12),win)+P(arch(62,-38,8,12),win);
    s+=L('M-78 -30 h10 M36 -14 h8 M-24 -40 h8',c.mudD,1,{op:0.6,nl:1});
    return s; });

  B.def('fortress',{z:'L',S:128,ar:1.7,k:'fortress|حصن|حصون|قلعه|castle|wall|walls|سور|اسوار|gate|بوابه|khaybar|خيبر|constantinople|القسطنطينيه|siege|حصار|tower|برج|ابراج|citadel|stronghold|conquest|فتح|فتوحات|battle|معركه|defend*|دفاع|city gates|حطين|ain jalut|عين جالوت|qadisiyyah|القادسيه|yarmouk|اليرموك|heroes|ابطال|commander|قايد',bd:{desert:1,mountains:1}},function(c){
    var s='', i, st=c.stone, sd=c.stoneD;
    s+=R(-50,-52,100,52,st);
    for(i=0;i<8;i++) s+=R(-50+i*13,-60,8,9,st);
    s+=R(-82,-82,30,82,mix(st,'#fff',0.15))+R(52,-82,30,82,mix(st,'#fff',0.15));
    for(i=0;i<3;i++) s+=R(-84+i*12,-90,8,9,mix(st,'#fff',0.15))+R(50+i*12,-90,8,9,mix(st,'#fff',0.15));
    s+=P(arch(-16,-42,32,42),c.woodD)+L('M0 -41 V0',c.wood,1.2)+L('M-16 -14 H16',c.wood,1,{nl:1})+P(arch(-20,-46,40,46),'none',{st:sd,sw:2.4,lf:'none',nl:1});
    s+=P(arch(-71,-62,8,14),c.navy)+P(arch(63,-62,8,14),c.navy);
    s+=L('M-40 -30 h10 M28 -22 h10 M-44 -12 h8 M34 -40 h8',sd,1,{op:0.6,nl:1});
    s+=L('M-67 -90 V-106',c.woodD,1.4)+P('M-67 -106 l15 4.5 l-15 5 Z',c.a);
    return s; });

  B.def('door',{z:'M',S:112,ar:0.72,env:'oi',k:'door|باب|ابواب|knock|طرق|يطرق|استيذان|permission|🚪|entrance|مدخل|visit|زياره|visitor|زاير|guest|ضيف|welcome|ترحيب|greeting|تحيه|salam|سلام|enter|دخول|doorstep|threshold'},function(c){
    var s=P(arch(-34,-98,68,98),c.stoneL)+P(arch(-26,-88,52,88),c.wood)+L('M0 -87 V0',c.woodD,1.6);
    s+=P(arch(-21,-80,18,34),c.woodL,{op:0.9,keep:1})+P(arch(3,-80,18,34),c.woodL,{op:0.9,keep:1})+R(-21,-38,18,30,c.woodL,{op:0.9,keep:1})+R(3,-38,18,30,c.woodL,{op:0.9,keep:1});
    s+=C(-5,-44,2.6,c.gold)+C(5,-44,2.6,c.gold)+R(-40,-3,80,3,c.stone);
    return s; });

  B.def('palace',{z:'L',S:136,ar:1.5,k:'palace|قصر|قصور|pharaoh|فرعون|nimrod|نمرود|sultan|سلطان|emperor|قيصر|caesar|كسري|chosroes|heraclius|هرقل|najashi|نجاشي|negus|court|بلاط|queen|ملكه|بلقيس|sheba|سبا|sulayman|سليمان|solomon|caliph|خليفه|خلافه|throne room|royal|aziz|العزيز|minister|وزير|kingdom|مملكه|rule|حكم|arrogant king',bd:{city:2,desert:1}},function(c){
    var s='', i, w=c.cream;
    s+=R(-78,-6,156,6,c.stone)+R(-70,-12,140,6,c.stoneL)+R(-64,-62,128,50,w);
    for(i=0;i<6;i++){ var x=-58+i*23.2; s+=R(x-3,-62,6,50,c.stoneL)+R(x-5,-64,10,4,c.stone)+R(x-5,-16,10,4,c.stone); }
    s+=P(arch(-12,-50,24,38),c.aD)+P(arch(-40,-44,12,20),c.navy)+P(arch(28,-44,12,20),c.navy);
    s+=R(-70,-70,140,8,c.stoneL)+P('M-70 -70 L0 -92 L70 -70 Z',c.a)+PL(star(0,-78,6,2.6,8,0),c.gold);
    s+=L('M-60 -70 V-96',c.woodD,1.2)+P('M-60 -96 l13 4 l-13 4 Z',c.gold)+L('M60 -70 V-96',c.woodD,1.2)+P('M60 -96 l13 4 l-13 4 Z',c.gold);
    return s; });

  B.def('pyramids',{z:'L',S:105,ar:2.1,k:'egypt|مصر|pyramid*|اهرام|هرم|pharaoh|فرعون|nile|النيل|musa|موسي|moses|yusuf|يوسف|joseph',bd:{desert:3,river:1}},function(c){
    return P('M-98 0 L-40 -78 L18 0 Z',c.sandD)+P('M-40 -78 L18 0 H-14 Z',mix(c.sandD,'#000',0.16),{nl:1})+P('M-4 0 L48 -98 L100 0 Z',c.sand)+P('M48 -98 L100 0 H66 Z',mix(c.sand,'#000',0.16),{nl:1})+
      L('M-70 -20 h44 M-58 -40 h26 M22 -24 h56 M34 -50 h30',c.sandL,1,{op:0.6,nl:1}); });

  B.def('lighthouse',{z:'L',S:160,ar:0.42,env:'o',k:'!lighthouse|!فنار|!manara|مناره|منارات|beacon|guide|يهدي|civilization|حضاره|golden age|العصر الذهبي|enlighten*|تنوير|🗼|nahda|نهضه',bd:{sea:3}},function(c){
    var s=P('M-26 0 Q-22 -12 -4 -14 H4 Q22 -12 26 0 Z',c.stone);
    s+=P('M-11 -12 L-7.5 -72 H7.5 L11 -12 Z',c.white)+P('M-10.3 -26 L-9.4 -40 H9.4 L10.3 -26 Z',c.a)+P('M-8.7 -54 L-7.9 -66 H7.9 L8.7 -54 Z',c.a);
    s+=R(-11,-76,22,4,c.stoneD)+R(-6.5,-88,13,12,c.lit)+L('M0 -88 v12 M-6.5 -82 h13',c.stoneD,0.8,{nl:1})+P('M-9 -88 L0 -98 L9 -88 Z',c.aD)+C(0,-99,1.6,c.gold);
    s+=P('M6 -84 L60 -98 V-70 Z',c.glow,{op:0.5,nl:1})+P('M-6 -84 L-60 -98 V-70 Z',c.glow,{op:0.5,nl:1});
    s+=P(arch(-3,-24,6,10),c.aD)+P(arch(-2.5,-50,5,8),c.navy);
    return s; });

  B.def('well',{z:'M',S:104,ar:0.9,k:'well|بير|ابار|bucket|دلو|🪣|rumah|رومه|yusuf|يوسف|joseph|draw water|سقايه|سقي|thirst|عطش|water|ماء|zamzam|زمزم|badr|بدر',bd:{desert:2,oasis:2}},function(c){
    var s=L('M-26 -40 V-86 M26 -40 V-86',c.woodD,4.2)+P('M-36 -84 L0 -100 L36 -84 Z',c.a)+L('M-24 -72 H24',c.wood,3);
    s+=L('M0 -72 V-52',c.cream,1.2)+P('M-7 -52 h14 l-2 13 h-10 Z',c.woodL)+L('M-7 -52 q7 -9 14 0',c.woodD,1.2);
    s+=P('M-32 0 V-36 H32 V0 Z',c.stone)+E(0,-36,32,7,c.stoneL)+E(0,-36,24,4.6,B.isLine()?'#fff':c.waterD);
    s+=L('M-32 -24 H32 M-32 -12 H32 M-16 -36 V-24 M12 -36 V-24 M-2 -24 V-12 M22 -24 V-12 M-22 -24 V-12 M-12 -12 V0 M10 -12 V0',c.stoneD,0.9,{op:0.7,nl:1});
    return s; });

  B.def('spring',{z:'S',S:66,ar:1.6,env:'o',k:'!zamzam|!زمزم|spring|نبع|ينبوع|ينابيع|عين ماء|gush*|تفجر|fountain|نافوره|hajar|هاجر|ayyub|ايوب|water from rock|kawthar? |stream|جدول|flow*|pure water|ماء عذب'},function(c){
    var s=E(0,-6,58,10,c.waterL)+E(6,-6,40,6,c.water);
    s+=P('M-50 -4 Q-52 -40 -28 -46 Q-8 -50 -4 -20 Q-4 -6 -14 -2 Z',c.stone)+P('M-30 -44 Q-12 -48 -6 -22 L-16 -10 Z',c.stoneD,{op:0.35,nl:1});
    s+=P('M-20 -34 Q4 -40 10 -8 Q0 -6 -2 -10 Q-4 -26 -20 -28 Z',c.water)+L('M-14 -31 Q2 -32 6 -10',c.waterL,1.6,{nl:1});
    s+=C(14,-14,2.2,c.waterL)+C(20,-22,1.6,c.waterL)+C(4,-20,1.4,'#fff',{nl:1})+E(36,-3,10,5,c.stoneL)+E(-40,-2,8,4,c.stoneL);
    return s; });

  B.def('bridge',{z:'M',S:66,ar:2.6,env:'o',k:'bridge|جسر|جسور|قنطره|🌉|cross*|عبور|connect*|link|يربط|تواصل|unity|وحده',bd:{river:4}},function(c){
    return P('M-88 0 V-34 Q0 -70 88 -34 V0 H62 Q62 -30 34 -30 Q8 -30 8 0 H-8 Q-8 -30 -34 -30 Q-62 -30 -62 0 Z',c.stone)+
      P('M-88 -34 Q0 -70 88 -34 V-40 Q0 -78 -88 -40 Z',c.stoneL)+L('M-70 -26 h12 M-20 -44 h12 M24 -42 h12 M60 -24 h12',c.stoneD,1,{op:0.6,nl:1}); });

  B.def('waterwheel',{z:'M',S:118,ar:1,env:'o',k:'waterwheel|noria|ناعوره|نواعير|ساقيه|windmill|طاحونه|mill|irrigation|ري|jazari|الجزري|pump|مضخه|engine|invention|اختراع|مخترع|mechanic*|ميكانيكا|الحيل|banu musa|بنو موسي|water clock|ingenious',bd:{river:3}},function(c){
    var s='',i; s+=P('M-40 0 L-6 -52 H6 L40 0 H28 L0 -40 L-28 0 Z',c.woodD);
    s+=C(0,-52,44,'none',{st:c.wood,sw:5,lf:'none',lw:3})+C(0,-52,33,'none',{st:c.woodL,sw:2.5,lf:'none'});
    for(i=0;i<8;i++){ var a=i*Math.PI/4, x=Math.cos(a), y=Math.sin(a);
      s+=L('M0 -52 L'+(44*x).toFixed(1)+' '+(-52+44*y).toFixed(1),c.wood,2.4)+g('translate('+(46*x).toFixed(1)+','+(-52+46*y).toFixed(1)+') rotate('+(i*45+90)+')',R(-6,-3.5,12,7,c.a)); }
    s+=C(0,-52,6,c.gold)+E(0,-2,50,5,c.water)+L('M-30 -3 q6 -4 12 0 M14 -3 q6 -4 12 0','#fff',1.4,{nl:1});
    return s; });

  B.def('observatory',{z:'L',S:124,ar:1.1,k:'observatory|مرصد|astronom*|فلكي|علم الفلك|biruni|البيروني|battani|البتاني|ulugh|الغ بيك|tusi|الطوسي|sufi stars|constellation*|ابراج|stargaz*|رصد النجوم|khwarizmi|الخوارزمي',bd:{mountains:2,space:1}},function(c){
    var s=R(-40,-44,80,44,c.cream)+R(-44,-48,88,6,c.stoneL)+P(arch(-8,-28,16,28),c.aD)+P(arch(-30,-34,10,16),c.navy)+P(arch(20,-34,10,16),c.navy);
    s+=P('M-30 -48 A30 30 0 0 1 30 -48 Z',c.a)+P('M-4 -48 L-1 -78 H9 L10 -48 Z',B.isLine()?'#fff':c.navy);
    s+=g('rotate(-38 4 -66)',R(0,-70,34,8,c.gold,{rx:2})+R(32,-72,6,12,c.goldD,{rx:1}));
    s+=PL(star(48,-92,5,2,4,0),c.goldL)+PL(star(-44,-84,4,1.6,4,0),c.goldL);
    return s; });

  B.def('stall',{z:'M',S:108,ar:1.3,k:'market|سوق|اسواق|merchant|تاجر|تجار|trade|تجاره|sell*|بيع|يبيع|بايع|buy*|شراء|يشتري|shop|دكان|متجر|bazaar|🛒|🏪|customer|زبون|goods|بضاعه|سلعه|price|ثمن|سعر|cheat*|غش|honest*|امانه|امين|الصادق الامين|trustworth*|khadijah|خديجه|rizq|رزق|halal|حلال|earn*|كسب|work|عمل',bd:{city:3}},function(c){
    var s='',i; s+=L('M-52 0 V-84 M52 0 V-84',c.woodD,3.6);
    s+=P('M-62 -66 L-54 -92 H54 L62 -66 Z',c.cream);
    for(i=0;i<4;i++) s+=P('M'+(-54+i*31)+' -92 h15.5 l'+(i<2?-2:2)+' 26 h-'+(i<2?17.5:13.5)+' Z',c.a,{op:0.9,keep:1});
    s+=P('M-62 -66 q7.7 9 15.5 0 q7.7 9 15.5 0 q7.7 9 15.5 0 q7.7 9 15.5 0 q7.7 9 15.5 0 q7.7 9 15.5 0 q7.7 9 15.5 0 q7.7 9 15.5 0 Z',c.cream);
    s+=R(-56,-36,112,8,c.wood)+R(-52,-28,104,28,c.woodL)+L('M-26 -28 V0 M0 -28 V0 M26 -28 V0',c.wood,1,{nl:1});
    s+=C(-40,-41,5,c.red)+C(-31,-41,5,c.gold)+C(-35.5,-48,5,c.red)+R(-14,-46,22,10,c.wood)+C(-8,-48,4,c.leafL)+C(0,-48,4,c.leafL)+C(-4,-52,4,c.leafL);
    s+=P('M20 -36 q2 -16 10 -16 q8 0 10 16 Z',c.brick)+E(30,-52,6,2,c.brickD);
    return s; });

  B.def('hive',{z:'M',S:92,ar:0.8,env:'o',k:'bee|bees|نحل|نحله|hive|خليه نحل|honey|عسل|🐝|🍯|nahl|pollen|رحيق|nectar|hexagon*|سداسي',bd:{garden:4}},function(c){
    var s=R(-30,-12,60,6,c.wood)+L('M-22 -6 V0 M22 -6 V0',c.woodD,4);
    s+=P('M-26 -12 Q-30 -40 -16 -58 Q0 -74 16 -58 Q30 -40 26 -12 Z',c.gold);
    s+=L('M-27 -24 Q0 -18 27 -24 M-25 -38 Q0 -32 25 -38 M-19 -52 Q0 -46 19 -52',c.goldD,1.6);
    s+=P(arch(-6,-24,12,12),B.isLine()?'#fff':c.woodD);
    s+=B.place('bees',34,-58,34,false,c);
    return s; });

  B.def('bookshelf',{z:'M',S:150,ar:0.62,env:'i',k:'library|مكتبه|bookshelf|رف|shelves|books|كتب|house of wisdom|بيت الحكمه|مخطوطات|manuscripts|volumes|مجلدات'},function(c){
    var s=R(-30,-100,60,100,c.wood)+R(-26,-96,52,92,c.woodL), cols=[c.a,c.teal,c.gold,c.red,c.navy,c.purple], i, j, k=0;
    for(j=0;j<4;j++){ var y=-76+j*23; s+=R(-26,y,52,3,c.wood); var x=-24;
      for(i=0;i<6;i++){ var w=5+((i*7+j*3)%4), h=14+((i*5+j*7)%6); if(x+w>24) break; s+=R(x,y-h,w,h,cols[(k++)%6]); x+=w+1.2; } }
    return s; });

  B.def('minbar',{z:'M',S:122,ar:0.85,env:'oi',k:'minbar|منبر|khutbah|خطبه|sermon|خطيب|friday|جمعه|pulpit|speech|address|farewell sermon|خطبه الوداع|preach*|وعظ|موعظه|khatib'},function(c){
    var s='',i; s+=P('M-34 0 V-18 H-20 V-34 H-6 V-50 H8 V-66 H34 V0 Z',c.wood);
    for(i=0;i<4;i++) s+=L('M'+(-34+i*14)+' '+(-18-i*16)+' h14',c.woodL,1.4,{nl:1});
    s+=P('M-34 -18 L8 -66 V-76 L-34 -30 Z',c.woodL)+R(8,-66,26,6,c.woodD);
    s+=L('M10 -66 V-92 M32 -66 V-92',c.woodD,3)+P(arch(8,-100,26,14),c.a)+C(21,-102,2,c.gold);
    s+=PL(star(21,-30,8,3.5,8,0),c.gold)+L('M-20 -6 h10 M-6 -22 h10',c.woodD,1,{nl:1});
    return s; });

  B.def('trench',{z:'M',S:54,ar:3,env:'o',k:'!trench|!خندق|!khandaq|ahzab|احزاب|dig*|حفر|يحفر|pickaxe|معول|shovel|مجرفه|salman|سلمان|confederates',bd:{desert:2,oasis:1}},function(c){
    var s=P('M-96 0 Q-70 -14 -50 -6 Q0 -22 50 -6 Q72 -14 96 0 Z',B.isLine()?'#fff':mix(c.woodD,c.navy,0.3));
    s+=P('M-98 0 Q-84 -30 -64 -22 Q-52 -18 -46 -4 Z',c.sandD)+P('M98 0 Q84 -26 62 -18 Q50 -14 46 -4 Z',c.sandD)+E(-70,-18,8,3,c.sandL,{nl:1,op:0.7});
    s+=g('rotate(24 -18 -40)',L('M-18 -8 V-80',c.wood,3.4)+P('M-36 -70 Q-18 -90 0 -70 L-2 -66 Q-18 -80 -34 -66 Z',c.greyD));
    s+=g('rotate(-20 22 -40)',L('M22 -30 V-84',c.wood,3.4)+P('M14 -30 h16 v14 q-8 10 -16 0 Z',c.grey));
    return s; });

  /* ───────────── NATURE ───────────── */
  B.def('palm',{z:'M',S:150,ar:0.8,env:'o',k:'palm|نخله|نخل|نخيل|dates|تمر|تمور|رطب|🌴|date palm|maryam|مريم|trunk|جذع|oasis|واحه',bd:{oasis:3,desert:1}},function(c){
    var s=P('M-5 0 Q-9 -34 0 -66 L7 -64 Q0 -32 6 0 Z',c.wood)+L('M-5 -12 q6 -4 11 0 M-6 -26 q6 -4 10 0 M-5 -40 q5 -4 9 0 M-3 -53 q5 -4 9 0',c.woodD,1.2,{nl:1});
    var fr=['M3 -66 Q-20 -92 -46 -74 Q-24 -80 3 -62 Z','M3 -66 Q26 -94 52 -76 Q28 -80 5 -62 Z','M3 -66 Q-30 -76 -40 -48 Q-22 -64 3 -61 Z','M3 -66 Q36 -76 46 -48 Q26 -64 5 -61 Z','M3 -66 Q-8 -96 -22 -98 Q-8 -88 2 -62 Z','M3 -66 Q16 -96 30 -97 Q14 -86 6 -62 Z','M4 -64 Q4 -92 6 -100 Q10 -88 6 -62 Z'];
    for(var i=0;i<fr.length;i++) s+=P(fr[i],i%2?c.leaf:c.leafD);
    s+=C(-3,-60,3,c.goldD)+C(1,-57,3,c.brick)+C(6,-60,3,c.goldD)+C(9,-56,2.6,c.brick);
    return s; });

  B.def('tree',{z:'M',S:136,ar:0.86,env:'o',k:'tree|شجره|اشجار|شجر|🌳|🌲|shade|ظل|branch*|غصن|اغصان|fruit|ثمر|ثمره|apple|تفاح|🍎|roots|جذور|good word|كلمه طيبه|forest|غابه|plant|woodpecker|نقار|ridwan|الرضوان|sadaqah jariyah|غرس',bd:{garden:2,river:1}},function(c){
    var s=P('M-7 0 Q-3 -24 -6 -46 H7 Q3 -24 8 0 Z',c.wood)+L('M0 -44 Q-10 -56 -18 -58 M2 -44 Q10 -56 16 -62',c.wood,3);
    s+=P('M-34 -44 C-54 -50 -48 -80 -26 -78 C-24 -100 14 -106 22 -84 C46 -88 52 -58 34 -48 C36 -32 -30 -30 -34 -44 Z',c.leaf);
    s+=P('M-28 -74 C-24 -92 6 -98 14 -86 C-2 -90 -18 -84 -28 -74 Z',c.leafL,{op:0.7,nl:1})+P('M-30 -46 C-10 -36 22 -38 34 -50 C34 -34 -28 -32 -30 -46 Z',c.leafD,{op:0.5,nl:1});
    s+=C(-16,-58,3.6,c.red)+C(8,-66,3.6,c.red)+C(22,-56,3.6,c.red)+C(-4,-78,3.6,c.red);
    return s; });

  B.def('olive',{z:'M',S:118,ar:1,env:'o',k:'olive|زيتون|زيتونه|🫒|tin|التين|fig|palestin*|فلسطين|blessed tree|شجره مباركه|oil|زيت|quds|القدس|aqsa|الاقصي|rooted|صمود|steadfast*|ثبات',bd:{mountains:1,garden:1}},function(c){
    var og=mix(c.leaf,c.grey,0.4), ol=mix(c.leafL,c.stoneL,0.35);
    var s=P('M-12 0 Q-2 -14 -10 -30 Q-14 -40 -4 -50 L6 -50 Q14 -38 8 -28 Q4 -14 14 0 Z',c.woodD)+L('M-2 -8 Q2 -22 -4 -36 M4 -6 Q8 -18 4 -30',c.wood,1.2,{nl:1});
    s+=P('M-44 -52 C-58 -64 -44 -84 -28 -78 C-22 -100 18 -102 24 -82 C46 -86 58 -62 42 -52 C40 -42 -40 -40 -44 -52 Z',og);
    s+=P('M-30 -74 C-24 -92 8 -94 16 -84 C0 -86 -18 -82 -30 -74 Z',ol,{op:0.8,nl:1});
    for(var i=0;i<7;i++){ var x=-30+i*10, y=-56-((i*7)%18); s+=E(x,y,2.2,3,B.isLine()?'#fff':c.navy); }
    return s; });

  B.def('vine',{z:'M',S:100,ar:1.2,env:'o',k:'grape*|عنب|اعناب|كرم|vine|vineyard|🍇|two gardens|الجنتين|صاحب الجنتين|trellis|عريش',bd:{garden:3}},function(c){
    var s=L('M-46 0 V-84 M46 0 V-84 M-52 -84 H52 M-52 -64 H52',c.wood,3.4),i;
    s+=L('M-46 -4 Q-30 -40 -20 -84 M46 -4 Q30 -44 14 -84',c.leafD,2.2);
    for(i=0;i<5;i++){ var x=-36+i*18; s+=P('M'+x+' -84 q-10 -2 -9 8 q-4 8 6 8 q4 6 9 -2 q8 -2 4 -9 q-2 -8 -10 -5 Z',i%2?c.leaf:c.leafL); }
    [-26,2,30].forEach(function(x){ var y=-60; s+=L('M'+x+' -82 V'+y,c.leafD,1.2);
      [[0,0],[-4,6],[4,6],[-8,12],[0,12],[8,12],[-4,18],[4,18],[0,24]].forEach(function(p){ s+=C(x+p[0],y+p[1],4,c.purple); }); });
    return s; });

  B.def('wheat',{z:'S',S:84,ar:0.7,env:'o',k:'wheat|قمح|سنبله|سنابل|grain|حبه|حبوب|harvest|حصاد|🌾|ears|زرع|barley|شعير|crop|محصول|seven hundred|سبعمايه|bread|multipl*|يضاعف|zakah|زكاه|sadaqah|صدقه',bd:{farm:3}},function(c){
    var s='', st=[[-16,-8],[0,0],[16,8]];
    st.forEach(function(p,i){ var x=p[0], lean=p[1];
      s+=L('M'+x+' 0 Q'+(x+lean*0.3)+' -40 '+(x+lean)+' -66',c.goldD,2)+L('M'+x+' -22 q'+(i%2?10:-10)+' -6 '+(i%2?14:-14)+' -20',c.leaf,1.8);
      for(var j=0;j<5;j++){ var y=-64-j*7, xx=x+lean+lean*0.02*j; s+=E(xx-3.4,y,3,5,c.gold)+E(xx+3.4,y,3,5,c.gold); }
      s+=E(x+lean,-98,3,5,c.gold); });
    return s; });

  B.def('flowers',{z:'S',S:58,ar:1.2,k:'flower*|زهره|زهور|ازهار|ورد|ورده|ورود|🌸|🌷|🌹|🌺|🌼|🌻|blossom|bloom|rose|fragran*|عطر|beaut*|جمال|جميل|spring|ربيع|kind word|gentle*|لطف|رفق',bd:{garden:2}},function(c){
    var s='', fl=[[-22,-58,c.pink],[0,-80,c.a],[22,-56,c.gold]];
    fl.forEach(function(f){ var x=f[0], y=f[1];
      s+=L('M'+(x*0.3)+' 0 Q'+(x*0.6)+' '+(y*0.5)+' '+x+' '+y,c.leafD,2.2)+P('M'+(x*0.5)+' '+(y*0.45)+' q'+(x<0?-14:14)+' -4 '+(x<0?-16:16)+' -16 q-2 12 '+(x<0?16:-16)+' 16 Z',c.leaf);
      for(var i=0;i<6;i++){ var a=i*Math.PI/3; s+=E(x+9*Math.cos(a),y+9*Math.sin(a),6,6,f[2]); }
      s+=C(x,y,5.4,c.goldL); });
    return s; });

  B.def('sprout',{z:'S',S:62,ar:0.9,k:'seed|بذره|بذور|sprout|نبته|برعم|seedling|غرس|فسيله|grow*|ينمو|نمو|planting|🌱|germinat*|انبات|potential|begin*|بدايه|small deed*|nurtur*|تربيه|habit|عاده|patience|صبر',bd:{garden:2,farm:2}},function(c){
    var s=P('M-36 0 Q-28 -22 0 -22 Q28 -22 36 0 Z',c.woodD)+E(-12,-8,3,1.6,c.wood,{nl:1})+E(14,-12,3,1.6,c.wood,{nl:1});
    s+=L('M0 -20 Q-2 -48 2 -72',c.leafD,3.2)+P('M2 -62 Q-28 -70 -34 -96 Q-4 -96 2 -62 Z',c.leaf)+P('M2 -54 Q30 -58 38 -82 Q8 -86 2 -54 Z',c.leafL)+L('M2 -62 Q-14 -76 -28 -90 M2 -54 Q18 -66 32 -78',c.leafD,1,{nl:1});
    return s; });

  B.def('rock',{z:'S',S:44,ar:1.7,env:'o',k:'rock|صخره|صخور|stone|حجر|حجاره|boulder|pebble*|حصي'},function(c){
    return P('M-40 0 Q-42 -40 -14 -52 Q10 -60 20 -30 Q24 -8 16 0 Z',c.stone)+P('M-14 -52 Q10 -60 20 -30 L4 -22 Z',c.stoneL,{op:0.6,nl:1})+P('M8 0 Q8 -30 28 -32 Q44 -28 42 0 Z',c.stoneD)+L('M-26 -18 l8 -8 M-10 -30 l6 -6',c.stoneD,1.2,{nl:1}); });

  B.def('logs',{z:'S',S:46,ar:1.8,k:'wood|حطب|خشب|log*|beaver|قندس|dam|سد|carpenter|نجار|timber|lumber|firewood|planks|الواح'},function(c){
    var s='',p=[[-22,-14],[22,-14],[0,-14],[-11,-40],[11,-40],[0,-66]];
    p.forEach(function(q){ s+=C(q[0],q[1]-0,13.5,c.woodL)+C(q[0],q[1],8,c.wood,{nl:1})+C(q[0],q[1],3,c.woodD,{nl:1}); });
    return g('translate(0,-0.5)',s); });

  /* ───────────── SKY THINGS ───────────── */
  B.def('birds',{z:'K',S:50,ar:2.2,k:'birds|طيور|طير|flock|سرب|ababil|ابابيل|migrat*|هجره الطيور|🦅|fly*|يطير|تطير|wings|اجنحه|tawakkul|توكل|trust in allah|freedom|حريه|ibrahim and the birds|skies'},function(c){
    var s='',p=[[-40,-40,1],[-12,-70,1.25],[18,-48,0.9],[46,-74,1.05],[2,-22,0.8]];
    p.forEach(function(q){ s+=g('translate('+q[0]+','+q[1]+') scale('+q[2]+')',L('M-12 2 Q-6 -8 0 0 Q6 -8 12 2',c.ink,2.6)); });
    return s; });
  B.def('bees',{z:'K',S:46,ar:1.6,k:'bee|bees|نحل|نحله|🐝|buzz*|طنين|swarm'},function(c){
    function bee(x,y,k){ return g('translate('+x+','+y+') scale('+k+')',E(-3,-9,6,8,'#fff',{st:c.grey,sw:0.8})+E(6,-9,6,8,'#fff',{st:c.grey,sw:0.8})+E(0,0,11,7.5,c.gold)+P('M-4 -7 Q-1 0 -4 7 M3 -7.3 Q6 0 3 7.3',  'none',{st:c.ink,sw:2.6,lf:'none',lw:1.6})+C(-11,0,3.2,c.ink,{lf:'#fff'})); }
    return L('M-50 -20 Q-30 -40 -10 -28 T30 -56',c.goldD,1.2,{da:'2 5',nl:1})+bee(-36,-30,1)+bee(8,-66,1.2)+bee(40,-34,0.85); });
  B.def('butterfly',{z:'K',S:46,ar:1.2,k:'butterfl*|فراشه|فراشات|🦋|caterpillar|يرقه|cocoon|شرنقه|metamorph*|transform*|تحول|تغيير|change',bd:{garden:3}},function(c){
    function bf(x,y,k,col){ return g('translate('+x+','+y+') scale('+k+') rotate(12)',P('M0 0 C-10 -28 -34 -26 -30 -6 C-28 4 -12 4 0 0 Z',col)+P('M0 0 C10 -28 34 -26 30 -6 C28 4 12 4 0 0 Z',col)+P('M0 0 C-8 6 -24 10 -20 22 C-14 30 -4 16 0 4 Z',c.gold)+P('M0 0 C8 6 24 10 20 22 C14 30 4 16 0 4 Z',c.gold)+C(-18,-10,4,'#fff',{op:0.8,keep:1})+C(18,-10,4,'#fff',{op:0.8,keep:1})+E(0,2,2.4,13,c.ink,{lf:'#fff'})+L('M-1 -10 q-4 -8 -8 -9 M1 -10 q4 -8 8 -9',c.ink,1.2)); }
    return bf(-18,-36,1.05,c.a)+bf(30,-74,0.7,c.pink); });
  B.def('bat',{z:'K',S:44,ar:2,k:'bat|bats|خفاش|خفافيش|🦇|echo*|صدي|sonar|ultrasound'},function(c){
    return P('M0 -52 L-5 -62 L-8 -52 Q-22 -62 -34 -54 Q-52 -52 -58 -34 Q-48 -42 -40 -34 Q-32 -42 -24 -32 Q-14 -40 -8 -30 Q0 -22 8 -30 Q14 -40 24 -32 Q32 -42 40 -34 Q48 -42 58 -34 Q52 -52 34 -54 Q22 -62 8 -52 L5 -62 Z',B.isLine()?'#fff':mix(c.navy,c.purple,0.3))+
      L('M-70 -10 q8 6 0 14 M-80 -14 q14 10 0 22 M70 -10 q-8 6 0 14',c.grey,1.4,{nl:1}); });
  B.def('planet',{z:'K',S:64,ar:1.5,env:'os',k:'planet*|كوكب|كواكب|saturn|زحل|🪐|jupiter|المشتري|orbit*|مدار|solar system|المجموعه الشمسيه|galaxy|مجره|universe|الكون',bd:{space:3}},function(c){
    return E(0,-50,58,13,'none',{st:c.goldL,sw:5,lf:'none',lw:1.6,op:0.9,keep:1})+C(0,-50,32,c.a)+P('M-30 -60 Q0 -50 30 -62 M-32 -46 Q0 -36 32 -48',  'none',{st:c.aL,sw:5,op:0.6,nl:1,lf:'none'})+
      P('M-57 -53 Q0 -30 57 -53 Q0 -24 -57 -53 Z',c.goldL)+C(-11,-62,6,'#fff',{op:0.25,nl:1}); });
  B.def('comet',{z:'K',S:40,ar:2,env:'os',k:'comet|meteor*|شهاب|شهب|نيزك|shooting star|☄|🌠'},function(c){
    return P('M30 -30 L-70 -74 L-58 -58 L-80 -52 L-50 -40 L-64 -28 Z',c.goldL,{op:0.7,keep:1})+PL(star(34,-30,22,9,5,0.3),c.gold); });
  B.def('kite',{z:'K',S:62,ar:0.9,k:'kite|طايره ورقيه|🪁|play*|لعب|joy|فرح|happy|سعاده|سعيد|fun|مرح|eid|عيد|holiday|عطله|free time|وقت الفراغ'},function(c){
    return PL('0,-100 26,-64 0,-28 -26,-64',c.a)+PL('0,-100 26,-64 0,-64',c.aL,{nl:1})+PL('0,-64 0,-28 -26,-64',c.aD,{nl:1})+L('M0 -100 V-28 M-26 -64 H26',c.cream,1.2,{nl:1})+
      L('M0 -28 Q14 -14 -4 -4 Q-14 2 0 10',c.ink,1.3)+P('M4 -18 l8 -4 l-2 9 Z',c.gold)+P('M-8 -4 l-9 -2 l5 8 Z',c.pink); });
  B.def('balloons',{z:'K',S:70,ar:0.9,k:'balloon*|بالون|🎈|🎉|🎊|celebrat*|احتفال|eid|عيد|العيد|party|joy|فرح|فرحه|سرور|happiness|بهجه|congratulat*|تهنيه|مبارك|success|نجاح|graduat*'},function(c){
    function b(x,y,col){ return L('M'+x+' '+(y+17)+' Q'+(x*0.4)+' -20 0 0',c.grey,1.1)+E(x,y,13,16,col)+P('M'+(x-3)+' '+(y+15)+' h6 l-3 5 Z',col)+E(x-4,y-6,3,5,'#fff',{op:0.5,nl:1}); }
    return b(-18,-68,c.a)+b(16,-74,c.gold)+b(0,-52,c.pink); });
  B.def('crescent',{z:'K',S:64,ar:1,k:'!ramadan|!رمضان|crescent|هلال|eid|عيد|month|شهر|hilal|🌙|moon sighting|رويه الهلال|fast*|صيام|صوم|laylat|ليله القدر|shaban|شعبان|hijri|هجري|تقويم|calendar'},function(c){
    return C(0,-52,44,c.glow,{op:0.22,nl:1})+P(cres(-4,-52,34),c.gold)+PL(star(22,-58,11,4.6,5,0.2),c.goldL)+L('M-4 -100 v12',c.goldD,1.2,{nl:1}); });

  /* ───────────── ANIMALS (simple, no faces) ───────────── */
  B.def('camel',{z:'M',S:94,ar:1.15,env:'o',grp:'mount',k:'camel|جمل|ناقه|ابل|بعير|جمال|🐪|🐫|caravan|قافله|قوافل|salih|صالح|thamud|ثمود|she-camel|qaswa|القصواء|ride|راحله|رحله|hijrah|هجره|journey|trade|تجاره|ghashiyah',bd:{desert:3,road:2}},function(c){
    var col=mix(c.sandD,c.wood,0.4);
    var s=L('M-33 -52 Q-42 -44 -38 -30',col,2.2);
    s+=P('M-34 -44 C-36 -58 -22 -62 -14 -60 C-8 -80 6 -80 10 -60 C16 -58 20 -60 24 -68 L30 -88 C32 -95 44 -95 46 -88 L49 -84 L41 -81 C37 -80 36 -74 34 -66 C34 -50 30 -42 24 -40 L24 -3 H19 L18 -34 L14 -36 L13 -3 H8 L8 -36 L-16 -36 L-17 -3 H-22 L-21 -34 L-26 -36 L-27 -3 H-32 L-30 -38 Z',col);
    s+=P('M-17 -60 Q-3 -74 11 -60 L9 -44 H-15 Z',c.a)+L('M-15 -44 H9',c.gold,1.6)+L('M-16 -52 H10',c.aL,1,{nl:1})+P('M34 -94 l2 -6 l3 5 Z',col);
    return s; });

  B.def('horse',{z:'M',S:90,ar:1.2,env:'o',grp:'mount',k:'horse*|حصان|خيل|فرس|خيول|فارس|فرسان|knight*|cavalry|فروسيه|🐎|🐴|steed|جواد|stallion|rider|khalid|خالد|adiyat|العاديات|gallop|charge|commander|قايد|فاتح|conqueror|army|جيش',bd:{desert:1,field:1}},function(c){
    var col=mix(c.wood,c.brick,0.35), dk=mix(c.woodD,'#000',0.25);
    var s=P('M-34 -52 C-50 -50 -48 -24 -42 -14 C-44 -30 -40 -40 -33 -44 Z',dk);
    s+=P('M-34 -46 C-36 -58 -26 -62 -14 -60 L8 -60 C14 -62 18 -70 22 -80 L29 -94 L33 -85 C40 -83 45 -76 45 -71 L38 -69 C34 -72 32 -68 30 -62 C30 -50 26 -42 22 -40 L22 -3 H17 L16 -34 L12 -36 L11 -3 H6 L6 -38 L-16 -38 L-17 -3 H-22 L-21 -36 L-26 -38 L-27 -3 H-32 L-30 -40 Z',col);
    s+=P('M27 -92 C16 -86 12 -72 8 -60 L14 -60 C18 -70 22 -80 29 -86 Z',dk)+P('M-12 -61 H6 L4 -46 H-10 Z',c.a)+L('M-10 -46 H4',c.gold,1.6);
    s+=R(-28,-5,6,3,dk,{nl:1})+R(-18,-5,6,3,dk,{nl:1})+R(5,-5,6,3,dk,{nl:1})+R(16,-5,6,3,dk,{nl:1});
    return s; });

  B.def('sheep',{z:'S',S:56,ar:1.4,env:'o',k:'sheep|غنم|خروف|خراف|شاه|lamb|flock|قطيع|shepherd|راعي|رعي|يرعي|🐑|🐏|ram|كبش|goat|ماعز|عنزه|sacrifice|اضحيه|adha|الاضحي|qurbani|ذبح|herd*|رعي الغنم',bd:{farm:2,mountains:1,garden:1}},function(c){
    function one(x,k){ var s=R(-16,-24,5,24,c.greyD)+R(-6,-24,5,24,c.greyD)+R(8,-24,5,24,c.greyD)+R(16,-24,5,24,c.greyD);
      s+=P('M-26 -34 C-36 -40 -30 -56 -20 -54 C-18 -68 0 -70 4 -60 C14 -70 30 -62 26 -50 C36 -44 30 -28 20 -30 C14 -20 -2 -20 -8 -28 C-16 -20 -28 -24 -26 -34 Z',c.white,{st:c.stoneL,sw:1});
      s+=P('M22 -58 Q38 -62 40 -48 Q40 -38 30 -38 Q22 -40 22 -50 Z',c.greyD)+P('M24 -56 q-8 -4 -9 3 q4 2 9 0 Z',c.greyD);
      return g('translate('+x+',0) scale('+k+')',s); }
    return one(-22,0.86)+one(26,1.15); });

  B.def('cow',{z:'M',S:74,ar:1.5,env:'o',k:'cow|بقره|بقر|bull|ثور|ثيران|الثور|calf|عجل|🐄|🐂|ox|baqarah|البقره|cattle|انعام|ploug*|white bull|الثور الابيض',bd:{farm:3,garden:1}},function(c){
    var col=c.cream;
    var s=L('M-40 -58 Q-50 -48 -46 -32',c.woodD,2)+R(-32,-30,7,30,col)+R(-20,-30,7,30,col)+R(14,-30,7,30,col)+R(26,-30,7,30,col);
    s+=P('M-40 -34 Q-44 -66 -20 -66 H22 Q40 -66 40 -44 Q40 -28 26 -28 H-28 Q-40 -28 -40 -34 Z',col,{st:c.stoneL,sw:1});
    s+=P('M-18 -66 Q-8 -52 -22 -44 Q-34 -50 -30 -64 Z',c.woodD,{op:0.85,keep:1})+P('M8 -30 Q12 -44 26 -40 Q30 -32 24 -29 Z',c.woodD,{op:0.85,keep:1});
    s+=P('M34 -70 Q52 -74 56 -58 Q58 -44 46 -42 Q34 -44 32 -58 Z',col,{st:c.stoneL,sw:1})+P('M36 -70 Q30 -82 38 -84 M50 -70 Q56 -82 48 -84',  'none',{st:c.stoneD,sw:2.6,lf:'none',lw:1.6})+E(49,-48,7,5,c.pink);
    s+=R(-32,-4,7,4,c.woodD,{nl:1})+R(-20,-4,7,4,c.woodD,{nl:1})+R(14,-4,7,4,c.woodD,{nl:1})+R(26,-4,7,4,c.woodD,{nl:1});
    return s; });

  B.def('elephant',{z:'M',S:100,ar:1.35,env:'o',k:'!elephant*|!فيل|!الفيل|فيله|🐘|abraha|ابرهه|year of the elephant|عام الفيل|اصحاب الفيل',bd:{desert:2,haram:1}},function(c){
    var col=mix(c.grey,c.stone,0.5);
    var s=L('M-46 -62 Q-56 -50 -52 -36',col,2.4);
    s+=P('M-46 -40 C-50 -76 -24 -84 0 -82 C8 -92 34 -94 42 -78 C50 -64 48 -46 44 -30 C42 -18 46 -10 52 -8 L50 -2 C38 -2 34 -14 36 -30 L32 -44 L28 -40 L28 -3 H16 V-34 H-14 V-3 H-26 V-34 L-34 -36 V-3 H-44 Z',col);
    s+=P('M6 -80 C-8 -78 -8 -50 10 -46 C22 -48 22 -74 6 -80 Z',mix(col,'#000',0.14))+P('M34 -42 Q42 -36 44 -26 L40 -28 Q38 -36 32 -40 Z',c.white);
    s+=P('M-30 -80 H-4 L-6 -62 H-28 Z',c.a)+L('M-28 -62 H-6',c.gold,1.6);
    return s; });

  B.def('dog',{z:'S',S:56,ar:0.9,env:'oi',k:'dog|كلب|🐕|kahf|الكهف|sleepers|اصحاب الكهف|guard*|يحرس|loyal*|وفاء'},function(c){
    var col=mix(c.sandD,c.wood,0.35);
    return P('M-14 0 H22 Q28 -2 24 -8 H16 Q24 -40 6 -58 L8 -74 L-2 -66 Q-14 -72 -18 -60 Q-24 -58 -24 -50 Q-16 -46 -12 -50 Q-10 -36 -14 -22 Q-18 -8 -14 0 Z',col)+
      L('M22 -4 Q38 -6 36 -24',col,4)+P('M-2 -66 L8 -74 L5 -60 Z',mix(col,'#000',0.2),{nl:1})+L('M-4 0 V-18 M4 0 V-18',mix(col,'#000',0.2),1.2,{nl:1}); });

  B.def('cat',{z:'S',S:46,ar:0.9,env:'oi',k:'cat|قطه|هره|هر|قط|kitten|🐈|🐱|abu hurayrah|ابو هريره|kindness to animals|رفق بالحيوان|الرفق|mercy|animal*|حيوان|حيوانات|pet|feed*|اطعام'},function(c){
    var col=mix(c.gold,c.brick,0.4);
    return L('M14 -6 Q36 -8 32 -34',col,5)+P('M-18 0 Q-24 -40 0 -46 Q24 -40 18 0 Z',col)+C(0,-58,15,col)+P('M-13 -66 L-12 -84 L-2 -71 Z',col)+P('M13 -66 L12 -84 L2 -71 Z',col)+
      L('M-6 -30 Q0 -34 6 -30 M-7 -18 Q0 -22 7 -18',mix(col,'#000',0.2),1.4,{nl:1}); });

  B.def('bird',{z:'S',S:40,ar:1.3,k:'bird|طاير|عصفور|dove|حمامه|حمام|🕊|🐦|sparrow|hoopoe|هدهد|crow|غراب|eagle|falcon|صقر|نسر|chick|فرخ|pigeon|peace|سلام|nightingale|بلبل|woodpecker|نقار الخشب|qabil|قابيل|habil|هابيل'},function(c){
    return L('M-4 0 V-22 M6 0 V-22',c.goldD,1.8)+P('M-30 -48 Q-34 -76 -6 -78 Q4 -92 20 -84 L34 -80 L22 -74 Q28 -46 4 -24 Q-12 -18 -22 -28 L-46 -16 Z',c.white,{st:c.stoneL,sw:1})+
      P('M-22 -52 Q-6 -66 10 -52 Q0 -30 -18 -32 Z',c.aL)+P('M22 -74 L34 -80 L24 -82 Z',c.gold); });

  B.def('ant',{z:'S',S:34,ar:2.6,k:'ant|ants|نمل|نمله|النمل|🐜|sulayman|سليمان|solomon|colony|مستعمره|teamwork|تعاون|يتعاون|hard work|اجتهاد|نشاط|cooperat*|together|معا|organis*|نظام',bd:{garden:1,desert:1}},function(c){
    function a(x,carry){ var d=B.isLine()?'#fff':mix(c.woodD,'#000',0.35);
      var s=L('M-10 -22 l-6 -20 M0 -22 l0 -22 M8 -22 l8 -20 M-10 -30 l-10 14 M0 -30 l-2 16 M8 -30 l10 14',c.ink,1.6);
      s+=E(-16,-44,13,10,d)+E(2,-46,8,7,d)+E(18,-50,10,9,d)+L('M24 -58 q6 -10 12 -8 M22 -60 q2 -12 8 -14',c.ink,1.4);
      if(carry) s+=P('M-6 -62 Q8 -88 30 -72 Q14 -60 -6 -62 Z',c.leaf)+L('M-4 -63 Q12 -74 28 -72',c.leafD,1,{nl:1});
      return g('translate('+x+',16) scale(0.62)',s); }
    return a(-68,false)+a(0,true)+a(68,false); });

  B.def('fish',{z:'W',S:44,ar:1.7,env:'ou',k:'fish|سمك|سمكه|اسماك|🐟|🐠|glowfish|anglerfish|fisherman|صياد|net|شبكه|sabbath|السبت|اصحاب السبت|sea creature*',bd:{sea:1,underwater:3,river:1}},function(c){
    function f(x,y,k,col){ return g('translate('+x+','+y+') scale('+k+')',P('M26 0 L44 -14 V14 Z',col)+P('M-36 0 Q-10 -28 26 0 Q-10 28 -36 0 Z',col)+P('M-8 -17 Q4 -30 14 -11 Z',mix(col,'#000',0.15))+L('M-14 -12 Q-8 0 -14 12 M0 -15 Q6 0 0 15',c.cream,2,{op:0.8})+C(-24,-3,2.4,'#fff',{lf:'#fff'})); }
    return f(-14,-62,1,c.a)+f(30,-24,0.6,c.gold); });

  B.def('whale',{z:'W',S:92,ar:2,env:'ou',noflip:0,k:'!whale|!حوت|!الحوت|حيتان|!yunus|!يونس|jonah|ذو النون|ذا النون|🐋|🐳|belly|بطن|darkness*|الظلمات',bd:{sea:5,underwater:2}},function(c){
    var col=mix(c.waterD,c.navy,0.55);
    var s=P('M-90 -40 C-80 -80 -10 -92 40 -66 C56 -58 66 -62 74 -82 C80 -70 96 -72 98 -88 C104 -62 90 -38 62 -34 C30 -8 -60 -6 -90 -40 Z',col);
    s+=P('M-86 -36 C-50 -16 20 -14 56 -34 C24 -10 -58 -10 -86 -36 Z',c.waterL)+P('M-24 -30 Q-18 -8 -2 -6 Q-8 -22 -8 -32 Z',mix(col,'#000',0.2));
    s+=C(-66,-48,2.6,'#fff',{lf:'#fff'})+L('M-88 -38 Q-76 -32 -66 -36',c.waterL,1.4,{nl:1});
    s+=L('M-40 -80 Q-42 -96 -52 -100 M-40 -80 Q-38 -96 -28 -100 M-40 -80 V-100',c.waterL,2.4);
    return s; });

  B.def('octopus',{z:'W',S:76,ar:1.2,env:'u',k:'!octopus|!اخطبوط|🐙|tentacle*|camouflage|تمويه',bd:{underwater:5}},function(c){
    var col=c.a, s='', i;
    for(i=0;i<6;i++){ var x=-25+i*10, dir=(i<3?-1:1), w=(3-Math.abs(i-2.5))*8; s+=L('M'+x+' -44 Q'+(x+dir*(22-w))+' -22 '+(x+dir*(14+ (i%2?10:0)))+' -6 Q'+(x+dir*10)+' 2 '+(x+dir*22)+' 0',col,6.5,{lw:2.4}); }
    s+=P('M-30 -44 C-36 -84 -14 -100 0 -100 C14 -100 36 -84 30 -44 C20 -36 -20 -36 -30 -44 Z',col)+E(-10,-78,6,10,'#fff',{op:0.25,nl:1})+C(-9,-56,3,'#fff',{lf:'#fff'})+C(9,-56,3,'#fff',{lf:'#fff'});
    return s; });

  B.def('penguin',{z:'S',S:62,ar:0.9,env:'o',k:'!penguin*|!بطريق|🐧|antarctic*|القطب|polar|ice|جليد',bd:{sea:3}},function(c){
    function p(x,k){ return g('translate('+x+',0) scale('+k+')',P('M-8 0 h-10 l6 -6 Z',c.gold)+P('M8 0 h10 l-6 -6 Z',c.gold)+P('M-18 -8 Q-24 -70 0 -92 Q24 -70 18 -8 Q0 2 -18 -8 Z',B.isLine()?'#fff':c.navy)+P('M-11 -12 Q-14 -56 0 -66 Q14 -56 11 -12 Q0 -6 -11 -12 Z',c.white)+P('M-18 -52 Q-30 -36 -24 -18 Q-18 -30 -16 -42 Z',B.isLine()?'#fff':c.navy)+P('M18 -52 Q30 -36 24 -18 Q18 -30 16 -42 Z',B.isLine()?'#fff':c.navy)+P('M-4 -76 h8 l-4 7 Z',c.gold)); }
    return p(-16,1)+p(22,0.66); });

  B.def('web',{z:'S',S:78,ar:1,env:'oi',k:'spider*|عنكبوت|العنكبوت|web|نسيج|🕷|🕸|thawr|غار ثور|silk|خيط|frail*|اوهن|weakest house',bd:{mountains:1}},function(c){
    var s=L('M-40 0 Q-44 -50 -34 -98 M40 0 Q46 -48 36 -96',c.woodD,3.4)+L('M-36 -70 l-12 -8 M38 -60 l12 -8',c.woodD,2.4), i;
    for(i=0;i<8;i++){ var a=i*Math.PI/4; s+=L('M0 -52 L'+(36*Math.cos(a)).toFixed(1)+' '+(-52+36*Math.sin(a)).toFixed(1),B.isLine()?c.ink:'#fff',1.4,{lw:1}); }
    [12,22,32].forEach(function(r){ var d=''; for(i=0;i<=8;i++){ var a=i*Math.PI/4, x=(r*Math.cos(a)).toFixed(1), y=(-52+r*Math.sin(a)).toFixed(1); d+= (i?' Q'+((r*0.82)*Math.cos(a-Math.PI/8)).toFixed(1)+' '+(-52+(r*0.82)*Math.sin(a-Math.PI/8)).toFixed(1)+' ':'M')+x+' '+y; } s+=L(d,B.isLine()?c.ink:'#fff',1.3,{lw:1}); });
    s+=L('M10 -52 V-30',c.grey,0.9)+E(10,-26,5,6,c.ink,{lf:'#fff'})+L('M5 -28 l-7 -4 M5 -25 l-8 2 M15 -28 l7 -4 M15 -25 l8 2',c.ink,1.2);
    return s; });

  B.def('nest',{z:'S',S:44,ar:1.5,k:'nest|عش|اعشاش|eggs|بيض|بيضه|🪺|hatch*|chick*|فراخ|dove|حمامه|shelter|ماوي|care|رعايه|حنان'},function(c){
    var s=P('M-44 -34 Q-40 0 0 0 Q40 0 44 -34 Q0 -16 -44 -34 Z',c.wood)+L('M-36 -24 Q-10 -6 30 -16 M-30 -12 Q0 -2 34 -24 M-40 -30 Q-6 -14 40 -30',c.woodD,1.3)+L('M-46 -34 l-8 -6 M44 -32 l10 -4 M-20 -2 l-6 6',c.woodD,1.5);
    s+=E(-16,-38,10,13,c.cream,{st:c.stoneL,sw:1})+E(4,-42,10,13,c.waterL,{st:c.stoneL,sw:1})+E(22,-36,9,12,c.cream,{st:c.stoneL,sw:1})+P('M-44 -34 Q0 -16 44 -34 Q0 -24 -44 -34 Z',c.woodL,{nl:1});
    return s; });

  B.def('fossil',{z:'S',S:56,ar:1.4,k:'fossil*|احافير|احفوره|bone*|عظم|عظام|dinosaur*|ديناصور|🦴|🦕|skeleton|هيكل|dig|excavat*|حفريات|ancient|missing pieces|evolution|تطور'},function(c){
    var s=P('M-52 0 Q-56 -50 -20 -58 Q30 -66 50 -34 Q58 -10 46 0 Z',c.sandD)+P('M-20 -58 Q30 -66 50 -34 L30 -30 Q14 -50 -20 -58 Z',c.sandL,{op:0.6,nl:1});
    s+=L('M-8 -22 a4 4 0 1 1 5 -6 a9 9 0 1 1 -12 12 a14 14 0 1 1 20 -18 a19 19 0 0 1 4 26',c.cream,3.2,{lw:1.6});
    s+=g('rotate(-24 28 -18)',R(18,-21,22,5,c.cream,{rx:2})+C(18,-21,3.4,c.cream)+C(18,-16,3.4,c.cream)+C(40,-21,3.4,c.cream)+C(40,-16,3.4,c.cream));
    return s; });

  B.def('shell',{z:'S',S:40,ar:1.6,k:'shell*|صدف|صدفه|pearl|لولو|لولوه|🐚|starfish|نجم البحر|treasure of the sea|مرجان',bd:{sea:2,underwater:2}},function(c){
    var s=P('M-36 -6 Q-56 -44 -30 -62 Q-4 -70 6 -44 Q10 -18 -8 -4 Q-22 2 -36 -6 Z',c.pink,{st:c.cream,sw:1})+L('M-22 -4 Q-36 -30 -28 -60 M-18 -4 Q-20 -34 -12 -62 M-14 -5 Q-6 -34 2 -50',c.cream,1.6,{lw:1})+C(-20,-8,5,c.white,{st:c.stoneL,sw:0.8});
    s+=PL(star(30,-20,22,9,5,0.3),c.a)+C(30,-20,3,c.aL,{nl:1});
    return s; });

  /* ───────────── PEOPLE (ordinary, faceless, from behind / far) ───────────── */
  function boy(x,k,c,robe,cap){ var hair='#3b2b24';
    return g('translate('+x+',0) scale('+k+')',P('M-15 0 Q-17 -44 -10 -60 Q0 -66 10 -60 Q17 -44 15 0 Z',robe)+L('M0 -58 V-4',mix(robe,'#000',0.12),1,{nl:1})+P('M-10 -58 Q-18 -44 -17 -28 M10 -58 Q18 -44 17 -28','none',{st:mix(robe,'#000',0.12),sw:1.2,nl:1,lf:'none'})+
      C(0,-74,12.5,B.isLine()?'#fff':hair)+P('M-12 -77 Q0 -94 12 -77 Q0 -82 -12 -77 Z',cap)+R(-9,-2,7,3,c.woodD,{nl:1})+R(2,-2,7,3,c.woodD,{nl:1})); }
  function girl(x,k,c,dress,scarf){
    return g('translate('+x+',0) scale('+k+')',P('M-18 0 Q-16 -40 -9 -58 H9 Q16 -40 18 0 Z',dress)+P('M-13 -42 Q-17 -70 0 -90 Q17 -70 13 -42 Q0 -36 -13 -42 Z',scarf)+L('M-4 -44 Q0 -62 -2 -80',mix(scarf,'#000',0.12),1,{nl:1})+L('M-17 -8 H17',mix(dress,'#fff',0.3),1.6,{nl:1})); }
  B.def('kids',{z:'P',S:66,ar:1.1,k:'child|children|kid|kids|طفل|اطفال|طفله|ولد|اولاد|بنت|بنات|boy|boys|girl|girls|صبي|صبيان|فتي|فتاه|friend*|اصدقاء|صديق|صديقه|رفيق|رفاق|صحبه|classmate*|زميل|زملاء|brother|sister|اخ|اخت|اخوه|sibling*|🧒|👦|👧|pupil*|neighbourhood kids|young|صغير|صغار|ياسين|نور|play together'},function(c){
    return boy(-20,0.96,c,c.cream,c.white)+girl(18,0.9,c,c.a,c.aL); });
  B.def('family',{z:'P',S:86,ar:1.2,k:'family|اسره|عايله|parents|والدين|الوالدين|والداي|mother|father|ام|اب|امي|ابي|والد|والده|mum|dad|👨‍👩‍👧|بر الوالدين|honour* parents|household|grandparent*|جد|جده|relatives|اقارب|ارحام|صله الرحم|kin'},function(c){
    return boy(-30,1.04,c,c.cloth,c.white)+girl(30,1,c,c.aD,c.a)+girl(0,0.6,c,c.pink,c.aL); });
  B.def('pilgrims',{z:'P',S:54,ar:2.4,k:'pilgrim*|حجاج|حاج|حجيج|ihram|احرام|crowd|جموع|حشد|worshippers|مصلين|مصلون|المصلون|rows|صفوف|people gather*|جماعه|congregation|ummah|امه|muslims|مسلمون|المسلمون|المسلمين|brotherhood|اخوه|unity|وحده|together'},function(c){
    var s='',i; for(i=0;i<6;i++){ var x=-60+i*24, k=0.72+(i%2)*0.08;
      s+=g('translate('+x+',0) scale('+k+')',P('M-14 0 Q-16 -44 -9 -60 Q0 -66 9 -60 Q16 -44 14 0 Z',c.white,{st:c.stoneL,sw:1})+P('M-9 -60 Q4 -50 12 -30','none',{st:c.stoneL,sw:1.6,nl:1,lf:'none'})+C(0,-74,12,B.isLine()?'#fff':'#3b2b24')+(i%3===1?P('M-12 -77 Q0 -94 12 -77 Q0 -82 -12 -77 Z',c.white):'')); }
    return s; });
})();
