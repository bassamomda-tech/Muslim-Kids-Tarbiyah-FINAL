/* ════════════════════════════════════════════════════════════════
   book-scenes-lib2.js — element library, part 2: boats, objects,
   tools, symbols and hands-only emblems for the scene illustrator
   (book-scenes.js). Same conventions as book-scenes-lib.js.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var B=window.BookScenes; if(!B) return;
  var P=B.P,R=B.R,C=B.C,E=B.E,PL=B.PL,L=B.L,arch=B.arch,mix=B.mix,star=B.star,cres=B.crescent;
  function g(t,inner){ return '<g transform="'+t+'">'+inner+'</g>'; }
  var ANY='oius';

  /* ───────────── ON THE WATER ───────────── */
  B.def('ship',{z:'W',S:128,ar:1.3,grp:'boat',k:'!ship|!سفينه|سفن|!ark|الفلك|!nuh|!نوح|noah|sail*|شراع|اشرعه|fleet|اسطول|naval|بحريه|masts|الصواري|ذات الصواري|sailor*|بحار|ملاح|voyage|⛵|🚢|deck|cross the sea|عبر البحر|tariq|طارق|andalus|الاندلس|khidr|الخضر|ibn majid|navigator|flood|طوفان|الطوفان',bd:{sea:5}},function(c){
    var s=L('M0 -44 V-99',c.woodD,3)+P('M3 -96 Q40 -82 34 -48 H3 Z',c.cloth)+P('M3 -84 Q30 -76 33 -62 H3 Z',c.a,{op:0.85,keep:1})+P('M-3 -90 Q-26 -76 -24 -50 H-3 Z',c.cream)+P('M0 -99 l14 4 l-14 5 Z',c.a);
    s+=R(-24,-46,42,14,c.woodL)+P('M-28 -46 L-3 -56 L22 -46 Z',c.woodD)+R(-17,-42,6,7,c.navy)+R(-6,-42,6,7,c.navy)+R(5,-42,6,7,c.navy);
    s+=P('M-62 -34 Q-52 -6 -32 -2 H36 Q56 -8 66 -38 Q30 -30 0 -32 Q-30 -30 -62 -34 Z',c.wood)+L('M-56 -24 Q0 -18 60 -26 M-48 -13 Q0 -8 52 -15',c.woodD,1.3)+P('M-62 -34 Q-30 -30 0 -32 Q30 -30 66 -38 L64 -32 Q30 -25 0 -27 Q-30 -25 -60 -29 Z',c.woodL,{nl:1});
    s+=L('M-72 -2 q8 -7 16 0 q8 -7 16 0 M40 -2 q8 -7 16 0 q8 -7 16 0','#fff',2,{op:0.9});
    return s; });
  B.def('boat',{z:'W',S:62,ar:1.7,grp:'boat',k:'boat|قارب|قوارب|مركب|زورق|fisherman|صياد|fishing|صيد|🚣|🛶|row*|مجداف|ferry|khidr|الخضر|cross the river',bd:{sea:2,river:2}},function(c){
    var s=L('M-4 -34 V-96',c.woodD,2.6)+P('M-1 -94 Q30 -70 26 -40 H-1 Z',c.cloth)+P('M-1 -72 Q22 -62 25 -52 H-1 Z',c.a,{op:0.85,keep:1});
    s+=P('M-52 -34 Q-40 -4 -22 -2 H26 Q44 -6 54 -36 Z',c.wood)+P('M-52 -34 H54 L52 -28 H-49 Z',c.woodL,{nl:1})+L('M-44 -18 Q0 -12 46 -20',c.woodD,1.3);
    s+=L('M-62 -2 q7 -6 14 0 M36 -2 q7 -6 14 0 q7 -6 14 0','#fff',2,{op:0.9});
    return s; });
  B.def('rocket',{z:'M',S:112,ar:0.5,env:'os',k:'rocket|صاروخ|🚀|spaceship|مركبه فضاء|astronaut|رايد فضاء|launch|انطلاق|ينطلق|future|مستقبل|ambition|طموح|dream big|sky is the limit|space travel',bd:{space:3}},function(c){
    return P('M-11 -22 L-26 -6 V-34 L-11 -48 Z',c.a)+P('M11 -22 L26 -6 V-34 L11 -48 Z',c.a)+P('M-13 -18 V-64 Q-13 -88 0 -100 Q13 -88 13 -64 V-18 Z',c.white,{st:c.stoneL,sw:1})+P('M-11.6 -76 Q-8 -92 0 -100 Q8 -92 11.6 -76 Z',c.a)+
      C(0,-56,7.5,c.waterL,{st:c.grey,sw:2})+R(-13,-30,26,5,c.aL,{nl:1})+P('M-8 -18 Q-10 -4 0 4 Q10 -4 8 -18 Z',c.lit)+P('M-4 -18 Q-5 -9 0 -4 Q5 -9 4 -18 Z',c.red,{nl:1}); });

  /* ───────────── BOOKS & WRITING ───────────── */
  function openBook(c,cover,glow){ var s='';
    if(glow) s+=C(0,-64,34,c.glow,{op:0.3,nl:1});
    s+=P('M-46 -48 L0 -40 L46 -48 V-76 L0 -68 L-46 -76 Z',cover);
    s+=P('M0 -44 Q-22 -56 -43 -50 V-78 Q-22 -84 0 -72 Z',c.cream)+P('M0 -44 Q22 -56 43 -50 V-78 Q22 -84 0 -72 Z',c.white);
    s+=L('M-36 -72 Q-22 -76 -7 -68 M-36 -65 Q-22 -69 -7 -61 M-36 -58 Q-22 -62 -7 -54 M36 -72 Q22 -76 7 -68 M36 -65 Q22 -69 7 -61 M36 -58 Q22 -62 7 -54',c.grey,1.1,{lw:0.9});
    return s; }
  B.def('mushaf',{z:'S',S:84,ar:1.15,grp:'book',k:'!quran|!قران|!القران|!mushaf|!مصحف|ayah|ايه|ايات|surah|سوره|سور|recit*|تلاوه|يتلو|رتل|ترتيل|tajweed|تجويد|hafiz|حافظ|حفظ|📖|كتاب الله|revelation|وحي|انزل|نزل|iqra|اقرا|verses|juz|جزء|ختمه|tadabbur|تدبر|kalam allah|كلام الله|furqan|الفرقان|book of allah|final message|الرساله الخاتمه',bd:{mosqueIn:2,home:1,classroom:1}},function(c){
    var s=P('M-30 0 L8 -46 L16 -42 L-18 0 Z',c.wood)+P('M30 0 L-8 -46 L-16 -42 L18 0 Z',c.woodD)+L('M-22 -8 L-8 -28 M22 -8 L8 -28',c.woodL,1,{nl:1});
    s+=openBook(c,mix(c.leafD,c.teal,0.4),true)+L('M0 -72 V-42',c.gold,1.4,{nl:1})+PL(star(-22,-64,4,1.7,8,0),c.gold,{nl:1})+PL(star(22,-64,4,1.7,8,0),c.gold,{nl:1});
    return s; });
  B.def('book',{z:'S',S:62,ar:1.5,grp:'book',k:'book|كتاب|الكتاب|read*|قراءه|يقرا|📕|📗|📘|📙|page*|صفحه|صفحات|story|قصه|قصص|knowledge|علم|معرفه|record*|صحف|صحيفه|صحايف|scripture*|torah|توراه|injil|انجيل|zabur|زبور|sunan|السنن|sahih|صحيح|musnad|مسند|muwatta|موطا|author|مولف|مصنف|riyad|رياض الصالحين|kitab|books of allah|كتب سماويه|chapter',bd:{classroom:2,home:1}},function(c){
    return g('translate(0,38)',openBook(c,c.a,false))+L('M0 -30 V-2',c.aD,1.2,{nl:1}); });
  B.def('books',{z:'S',S:64,ar:1.3,grp:'book',k:'books|كتب|الكتب|مجلدات|library|مكتبه|study|دراسه|يدرس|scholar*|عالم|علماء|العلماء|imam|امام|ايمه|hadith|حديث|احاديث|محدث|fiqh|فقه|فقيه|📚|collect*|جمع|compil*|تدوين|مذهب|learn*|تعلم|يتعلم|student of knowledge|طالب علم|طلب العلم|bukhari|البخاري|muslim|مسلم|tirmidhi|الترمذي|nasai|النسايي|abu dawud|ابو داود|ibn majah|ابن ماجه|malik|مالك|shafii|الشافعي|ahmad|احمد|abu hanifa|ابو حنيفه|nawawi|النووي|ghazali|الغزالي|ibn taymiyyah|ابن تيميه|ibn kathir|ابن كثير|tabari|الطبري|teacher|معلم|lesson|درس',bd:{classroom:3}},function(c){
    var s=R(-34,-14,68,14,c.a,{rx:2})+R(-30,-11,60,8,c.cream,{nl:1})+R(-28,-28,60,14,c.teal,{rx:2})+R(-24,-25,52,8,c.cream,{nl:1})+R(-32,-42,58,14,c.gold,{rx:2})+R(-28,-39,50,8,c.cream,{nl:1});
    s+=g('rotate(-14 20 -42)',R(6,-92,16,50,c.red,{rx:2})+R(9,-86,10,4,c.goldL,{nl:1}))+R(-26,-90,13,48,c.navy,{rx:2})+R(-23,-84,7,4,c.goldL,{nl:1})+R(-12,-84,12,42,c.purple,{rx:2})+R(-9,-78,6,4,c.goldL,{nl:1});
    return s; });
  B.def('inkwell',{z:'S',S:70,ar:1.3,k:'pen|قلم|اقلام|القلم|ink|حبر|محبره|write*|كتابه|يكتب|كاتب|كتبه|scribe|🖋|✒|✍|calligraph*|خط|خطاط|poet*|شعر|شاعر|شعراء|قصيده|language|لغه|اللغه|العربيه|arabic|grammar|نحو|letters|حروف|حرف|word*|كلمه|كلمات|بيان|eloquen*|فصاحه|بلاغه|dictionary|معجم|sibawayh|سيبويه|khalil|الخليل|zayd ibn thabit|زيد بن ثابت|kuttab al-wahy|كتاب الوحي|dad|الضاد|express*|تعبير',bd:{classroom:2}},function(c){
    var s=g('rotate(-8 26 -20)',R(4,-36,52,36,c.cream,{st:c.stoneL,sw:1})+L('M12 -27 h36 M12 -19 h30 M12 -11 h34',c.grey,1.4,{lw:0.9}));
    s+=P('M-44 0 Q-48 -26 -34 -30 H-18 Q-4 -26 -8 0 Z',B.isLine()?'#fff':c.navy)+R(-36,-38,20,9,c.gold,{rx:2})+E(-26,-38,8,2.4,B.isLine()?'#fff':'#141b2c');
    s+=P('M-27 -36 Q-10 -70 20 -98 Q14 -66 -22 -34 Z',c.white,{st:c.stoneL,sw:1})+L('M-25 -36 Q-6 -66 18 -94',c.grey,1,{nl:1})+P('M-27 -36 Q0 -72 20 -98 Q6 -80 -8 -72 Z',c.aL,{op:0.8,nl:1});
    return s; });
  B.def('scroll',{z:'S',S:62,ar:1.3,k:'scroll|letter|رساله|رسايل|message|treaty|صلح|معاهده|hudaybiyyah|الحديبيه|covenant|عهد|ميثاق|وثيقه|document|charter|صحيفه المدينه|📜|✉|decree|invitation|دعوه|يدعو|will|وصيه|contract|عقد|kings|الملوك|envoy|رسول الي|سفير|ambassador|najashi|النجاشي|heraclius|هرقل|seal|خاتم|history|تاريخ|chronicle|سيره|سجل|lineage|نسب',bd:{classroom:1}},function(c){
    var pa=mix(c.cream,c.sandL,0.5);
    var s=R(-36,-78,72,62,pa)+L('M-24 -64 h48 M-24 -54 h40 M-24 -44 h46 M-24 -34 h30',c.woodD,1.5,{lw:0.9,op:0.7,keep:1});
    s+=R(-42,-88,84,13,pa,{rx:6.5,st:c.sandD,sw:1})+C(-42,-81.5,6.5,c.sandD)+C(42,-81.5,6.5,c.sandD)+R(-42,-22,84,13,pa,{rx:6.5,st:c.sandD,sw:1})+C(-42,-15.5,6.5,c.sandD)+C(42,-15.5,6.5,c.sandD);
    s+=C(22,-30,8,c.red)+PL(star(22,-30,5,2.2,8,0),c.goldL,{nl:1})+P('M18 -24 l-4 16 l6 -4 l4 5 l2 -16 Z',c.red);
    return s; });

  /* ───────────── LIGHT & WORSHIP ───────────── */
  B.def('lantern',{z:'S',S:90,ar:0.5,k:'lantern|فانوس|فوانيس|🏮|ramadan|رمضان|light|نور|النور|lamp|مصباح|مصابيح|سراج|قنديل|🪔|candle|شمعه|🕯|guid*|هدايه|هدي|الهادي|dark*|ظلام|ظلمات|illuminat*|ينير|تنير|ضوء|niche|مشكاه|iman|ايمان|hope|امل|رجاء|basira|بصيره|taraweeh',bd:{home:1,mosqueIn:1}},function(c){
    var s=C(0,-46,36,c.glow,{op:0.3,nl:1})+L('M0 -100 a6 6 0 1 1 0.1 0',c.goldD,2)+P('M-10 -78 Q0 -94 10 -78 Z',c.gold)+R(-13,-78,26,5,c.goldD,{rx:1});
    s+=P('M-13 -73 L-19 -26 H19 L13 -73 Z',c.lit)+P('M-13 -73 L-19 -26 H-10 L-6 -73 Z',c.a,{op:0.85,keep:1})+P('M13 -73 L19 -26 H10 L6 -73 Z',c.a,{op:0.85,keep:1})+P(arch(-5,-64,10,30),'#fff',{op:0.6,nl:1});
    s+=P('M0 -52 q-5 9 0 15 q5 -6 0 -15 Z',c.red,{op:0.9,keep:1})+R(-21,-26,42,6,c.goldD,{rx:1})+P('M-16 -20 H16 L11 -6 H-11 Z',c.gold)+R(-14,-6,28,6,c.goldD,{rx:2});
    return s; });
  B.def('prayerRug',{z:'S',S:58,ar:1.6,env:'oi',k:'prayer rug|prayer mat|سجاده|مصلي|sujud|سجود|سجده|prostrat*|ركوع|pray*|صلاه|الصلاه|صلي|يصلي|صلوات|qiyam|قيام|tahajjud|تهجد|salah|fajr|الفجر|dhuhr|الظهر|asr|العصر|maghrib|المغرب|isha|العشاء|rakah|ركعه|ركعات|khushu|خشوع|witr|وتر|duha|الضحي|istikhara|تكبيره|takbir|fatihah|الفاتحه|tashahhud|تشهد|taslim',bd:{mosqueIn:3,home:1}},function(c){
    var s=P('M-52 0 L-34 -74 H34 L52 0 Z',c.a)+P('M-44 -6 L-29 -68 H29 L44 -6 Z',c.aL,{nl:1})+P('M-36 -10 L-24 -62 H24 L36 -10 Z',c.cream);
    s+=P('M-16 -14 L-12 -42 Q-10 -58 0 -60 Q10 -58 12 -42 L16 -14 Z',c.a)+PL(star(0,-36,7,3,8,0),c.gold)+L('M0 -60 v-4',c.gold,1.4,{nl:1});
    for(var i=0;i<9;i++){ s+=L('M'+(-48+i*12)+' 0 v6',c.aD,1.6)+L('M'+(-32+i*8)+' -74 v-4',c.aD,1.3); }
    return s; });
  B.def('tasbih',{z:'S',S:52,ar:1.1,k:'tasbih|تسبيح|مسبحه|سبحه|📿|dhikr|ذكر|الذكر|اذكار|الاذكار|subhanallah|سبحان الله|الحمد لله|alhamdulillah|استغفار|استغفر|istighfar|remembrance|adhkar|tahlil|takbir|الله اكبر|لا اله الا الله|tongue|لسان|salawat|يسبح|سبح|hawqala|لا حول|morning and evening|الصباح والمساء|hisn|حصن المسلم',bd:{mosqueIn:2,home:1}},function(c){
    var s='', i, k=18;
    for(i=0;i<k;i++){ var a=i*2*Math.PI/k, x=30*Math.cos(a), y=-50+26*Math.sin(a); s+=C(x,y,5,i%6===0?c.gold:c.a); }
    s+=C(0,-20,6,c.gold)+L('M0 -14 V-6',c.goldD,1.6)+P('M-5 -6 h10 l3 20 h-16 Z',c.a)+L('M-3 0 v12 M0 0 v13 M3 0 v12',c.aL,1,{nl:1});
    return g('translate(0,-14)',s); });
  B.def('jug',{z:'S',S:84,ar:1.2,k:'!wudu|!وضوء|الوضوء|ablution|توضا|يتوضا|طهاره|الطهاره|طهور|purity|purif*|wash*|غسل|يغسل|jug|ابريق|pitcher|water|ماء|الماء|🚰|💧|💦|tayammum|تيمم|ghusl|rinse|مضمضه|استنشاق|drink*|شرب|يشرب|سقي|يسقي|thirst*|عطش|عطشان|clean|نظيف',bd:{mosqueIn:1,home:1,oasis:1}},function(c){
    var s=E(30,-8,26,9,c.a)+E(30,-11,22,6.5,c.waterL)+E(30,-11,14,3.4,c.water,{nl:1});
    s+=P('M-30 0 Q-44 -30 -24 -52 L-22 -76 H-4 L-2 -52 Q18 -30 4 0 Z',c.a)+E(-13,-76,10,3.4,c.aD)+P('M-30 -4 Q-40 -30 -24 -48 Q-30 -28 -24 -4 Z',c.aL,{op:0.7,nl:1});
    s+=P('M-4 -58 Q14 -62 20 -84 L26 -80 Q18 -54 0 -46 Z',c.a)+P('M-22 -70 Q-46 -66 -40 -40 Q-36 -32 -30 -34 L-32 -40 Q-36 -58 -22 -62 Z',c.aD);
    s+=L('M-32 -24 Q-12 -18 6 -24',c.gold,2)+L('M24 -78 Q32 -50 30 -18',c.water,2.4)+C(38,-30,2,c.waterL)+C(22,-34,1.6,c.waterL);
    return s; });
  B.def('cup',{z:'S',S:52,ar:1.2,k:'cup|كوب|كاس|glass|drink*|شرب|يشرب|milk|لبن|حليب|🥛|juice|عصير|sip|three breaths|ثلاثا|اداب الشرب|sit and drink|🥤|🍵|tea|شاي',bd:{home:2}},function(c){
    var s=P('M-36 -62 H-6 L-10 0 H-32 Z',c.white,{st:c.grey,sw:1.2})+P('M-34.6 -44 H-7.4 L-10 -2 H-32 Z',c.waterL,{nl:1})+L('M-30 -52 l1.4 34','#fff',2,{nl:1});
    s+=P('M6 -44 H38 L34 0 H10 Z',c.a)+P('M38 -36 Q52 -34 48 -20 Q44 -10 36 -12 L36.6 -18 Q42 -18 43 -24 Q43 -30 37.4 -30 Z',c.a)+E(22,-44,16,4,c.cream)+L('M10 -22 H35',c.aL,2,{nl:1});
    s+=L('M16 -52 q-4 -8 0 -14 M26 -52 q-4 -8 0 -14',c.grey,1.4,{op:0.7});
    return s; });

  /* ───────────── FOOD ───────────── */
  B.def('dates',{z:'S',S:54,ar:1.6,k:'dates|تمر|التمر|تمره|تمرات|رطب|iftar|افطار|الافطار|يفطر|break* fast|fast*|صيام|الصيام|صوم|صايم|صايمون|suhoor|سحور|ramadan|رمضان|ajwa|عجوه|siyam|sunnah of iftar',bd:{home:2,oasis:1}},function(c){
    var d=mix(c.woodD,c.red,0.25), s=P('M-40 -30 H40 Q36 0 14 0 H-14 Q-36 0 -40 -30 Z',c.a)+L('M-32 -16 Q0 -8 32 -16',c.aL,2,{nl:1})+E(0,-30,40,7,c.aD);
    [[-22,-36,-20],[-6,-40,10],[10,-37,-14],[24,-34,24],[-12,-48,30],[6,-50,-24],[-2,-58,4]].forEach(function(p){ s+=g('rotate('+p[2]+' '+p[0]+' '+p[1]+')',E(p[0],p[1],9,5.4,d)+L('M'+(p[0]-5)+' '+(p[1]-1.6)+' h7',c.woodL,1,{nl:1})); });
    s+=g('translate(62,0)',P('M-11 -40 H11 L8 0 H-8 Z',c.white,{st:c.grey,sw:1.2})+P('M-10 -28 H10 L8 -2 H-8 Z',c.waterL,{nl:1}));
    return s; });
  B.def('bread',{z:'S',S:52,ar:1.5,k:'bread|خبز|رغيف|ارغفه|🍞|🥖|🫓|loaf|loaves|food|طعام|feed*|اطعام|يطعم|اطعم|hungry|جايع|جوع|poor|فقير|فقراء|الفقراء|مسكين|مساكين|needy|share|يشارك|مشاركه|يتقاسم|generos*|كرم|جود|كريم|الكريم|giv*|عطاء|يعطي|ايثار|orphan*|يتيم|neighbour|bake|يخبز',bd:{home:1,city:1}},function(c){
    var cr=mix(c.gold,c.brick,0.5);
    var s=E(-6,-34,30,12,cr)+L('M-24 -36 q6 -6 10 0 M-10 -38 q6 -6 10 0 M4 -36 q6 -6 10 0',c.goldL,1.6,{nl:1})+E(18,-42,22,10,mix(cr,'#fff',0.2))+E(-22,-44,18,9,mix(cr,'#fff',0.12));
    s+=P('M-44 -30 H44 Q40 0 16 0 H-16 Q-40 0 -44 -30 Z',c.woodL)+L('M-40 -22 Q0 -12 40 -22 M-34 -12 Q0 -3 34 -12 M-20 -30 L-12 -2 M0 -30 V-1 M20 -30 L12 -2',c.wood,1.3)+P('M-44 -30 H44 v-5 H-44 Z',c.wood);
    return s; });
  B.def('table',{z:'M',S:74,ar:1.9,env:'oi',k:'table|مايده|المايده|سفره|meal|وجبه|eat*|اكل|الاكل|ياكل|طعام|الطعام|food|dinner|عشاء|lunch|غداء|breakfast|فطور|🍽|🍲|🥘|🍛|dish*|طبق|اطباق|plate|صحن|bismillah|بسم الله|سم الله|right hand|بيمينك|guest*|ضيف|ضيوف|الضيف|ضيافه|hospitality|feast|وليمه|اداب الطعام|iftar|افطار|gather*|يجتمع|invite|عزومه',bd:{home:4}},function(c){
    var s=R(-58,-14,8,14,c.woodD)+R(50,-14,8,14,c.woodD)+E(0,-22,74,14,c.wood)+E(0,-26,74,13,c.woodL)+E(0,-27,62,9.6,c.cream,{op:0.9,keep:1});
    s+=P('M-20 -32 Q-22 -52 0 -56 Q22 -52 20 -32 Z',c.a)+E(0,-32,20,5,c.aD)+C(0,-58,3.4,c.gold)+L('M-8 -64 q-4 -8 0 -14 M4 -66 q-4 -8 0 -14',c.grey,1.5,{op:0.7});
    s+=E(-42,-28,13,4.4,c.white,{st:c.stoneL,sw:1})+C(-45,-31,3.4,c.red)+C(-39,-31,3.4,c.gold)+C(-42,-34,3.4,c.leafL);
    s+=E(40,-28,13,4.4,c.white,{st:c.stoneL,sw:1})+E(40,-31,9,3.6,mix(c.gold,c.brick,0.5))+R(22,-40,7,13,c.waterL,{st:c.grey,sw:1})+R(-27,-40,7,13,c.waterL,{st:c.grey,sw:1});
    return s; });
  B.def('campfire',{z:'S',S:70,ar:1.1,env:'o',k:'campfire|bonfire|firewood|flame*|لهب|شعله|موقد|🔥|cook*|طبخ|يطبخ|pot|قدر|warm*|دفء|!nimrod|!نمرود|بردا وسلاما|cool and safe|torch|مشعل|fire of ibrahim|نار ابراهيم|burning|kindle|اوقد|light a fire|نار موسي|انست نارا|tuwa|طوي',bd:{desert:1,mountains:1}},function(c){
    var s=C(0,-34,40,c.glow,{op:0.28,nl:1})+g('rotate(22 0 -8)',R(-32,-13,64,10,c.wood,{rx:5}))+g('rotate(-22 0 -8)',R(-32,-13,64,10,c.woodD,{rx:5}));
    s+=P('M0 -100 C22 -72 30 -50 22 -30 C18 -14 -18 -14 -22 -30 C-28 -48 -12 -54 -14 -74 C-6 -68 -2 -78 0 -100 Z',c.red)+P('M2 -72 C16 -54 18 -40 13 -28 C8 -18 -10 -18 -13 -28 C-16 -40 -6 -44 -6 -56 C-2 -52 0 -60 2 -72 Z',c.lit,{op:0.95,keep:1})+P('M1 -46 C8 -38 8 -30 5 -25 C2 -21 -4 -21 -6 -26 C-7 -32 -2 -36 1 -46 Z','#fff',{op:0.7,nl:1});
    s+=E(-34,-4,9,5,c.stone)+E(34,-4,9,5,c.stoneD)+E(-18,-1,8,4,c.stoneL)+E(20,-1,8,4,c.stoneL);
    return s; });
  B.def('basket',{z:'S',S:58,ar:1.4,k:'fruit*|فاكهه|فواكه|ثمار|الثمار|basket|سله|apple|تفاح|orange|برتقال|pomegranate|رمان|🍎|🍊|🍐|🧺|🍓|healthy food|غذاء|صحي|tayyib|طيبات|blessing*|نعمه|نعم|رزق|الرزاق|provision|gratitude|شكر|الشكر|شاكر|الشكور|grateful|thank*|الحمد|favour*|فضل|bounty|عطايا|vegetables|خضار',bd:{garden:1,home:1}},function(c){
    var s=C(-20,-48,13,c.red)+C(4,-54,13,mix(c.gold,c.red,0.35))+C(26,-46,12,c.leafL)+C(-6,-40,11,c.gold)+L('M-20 -60 q2 -6 6 -6 M4 -66 q2 -6 6 -6',c.leafD,1.6)+P('M6 -70 q8 -6 12 0 q-6 4 -12 0 Z',c.leaf);
    s+=P('M-44 -38 H44 Q40 0 18 0 H-18 Q-40 0 -44 -38 Z',c.woodL)+L('M-41 -27 Q0 -18 41 -27 M-37 -15 Q0 -5 37 -15 M-24 -38 L-14 -1 M-8 -38 L-5 0 M8 -38 L5 0 M24 -38 L14 -1',c.wood,1.4)+R(-46,-42,92,7,c.wood,{rx:3.5});
    return s; });
  B.def('honeyJar',{z:'S',S:56,ar:0.9,k:'honey|عسل|العسل|🍯|sweet*|حلو|حلاوه|cure|شفاء|حلاوه الايمان|nahl|النحل'},function(c){
    return P('M-22 0 Q-30 -4 -30 -14 V-46 Q-30 -56 -20 -58 H20 Q30 -56 30 -46 V-14 Q30 -4 22 0 Z',c.gold,{st:c.goldD,sw:1})+P('M-30 -40 Q-10 -30 0 -40 Q12 -50 30 -38 V-46 Q30 -56 20 -58 H-20 Q-30 -56 -30 -46 Z',c.goldL,{nl:1})+R(-22,-68,44,11,c.a,{rx:3})+R(-13,-34,26,18,c.cream,{rx:3})+
      g('translate(0,-25) scale(0.55)',E(0,0,11,7.5,c.gold)+L('M-4 -7 Q-1 0 -4 7 M3 -7 Q6 0 3 7',c.ink,2.6)+E(-2,-9,6,6,'#fff',{st:c.grey,sw:1}))+g('rotate(30 34 -70)',R(32,-98,4,40,c.wood,{rx:2})+E(34,-98,7,9,c.woodL)); });

  /* ───────────── JUSTICE, WEALTH, GIVING ───────────── */
  B.def('scales',{z:'S',S:92,ar:1.05,k:'scale*|ميزان|الميزان|موازين|balance*|توازن|justice|عدل|العدل|عادل|just|judge|قاضي|قضاء|fair*|انصاف|قسط|⚖|weigh*|وزن|rights|حقوق|law|شريعه|!umar|!الفاروق|equal*|مساواه|oppress*|ظلم|مظلوم|court|محكمه|measure|كيل|مكيال|shuayb|شعيب|المطففين|moderation|وسطيه|اعتدال|shurayh|شريح|umar ibn abdulaziz|عمر بن عبد العزيز',bd:{city:1}},function(c){
    var s=P('M-24 0 Q-22 -8 -6 -9 H6 Q22 -8 24 0 Z',c.goldD)+R(-3,-84,6,76,c.gold)+C(0,-88,6,c.gold)+R(-44,-84,88,4.4,c.goldD,{rx:2});
    s+=L('M-40 -80 L-54 -44 M-40 -80 L-26 -44 M40 -80 L26 -44 M40 -80 L54 -44',c.goldD,1.3)+P('M-58 -44 H-22 Q-24 -28 -40 -28 Q-56 -28 -58 -44 Z',c.gold)+P('M22 -44 H58 Q56 -28 40 -28 Q24 -28 22 -44 Z',c.gold);
    s+=PL(star(0,-50,6,2.6,8,0),c.goldL,{nl:1});
    return s; });
  B.def('coins',{z:'S',S:56,ar:1.4,grp:'money',k:'coin*|دينار|درهم|دراهم|دنانير|money|مال|المال|اموال|wealth|ثروه|غني|الغني|rich|gold|ذهب|فضه|💰|🪙|nisab|نصاب|spend*|انفاق|ينفق|انفق|profit|ربح|debt|دين|loan|قرض|pay|qarun|قارون|uthman|عثمان|abdurrahman|عبد الرحمن بن عوف|talha|طلحه|merchant|تاجر|trade|تجاره|halal earning|كسب حلال|zakah|زكاه|الزكاه|2.5',bd:{city:1}},function(c){
    var s=P('M-36 0 Q-52 -22 -30 -44 L-36 -58 Q-22 -52 -18 -58 Q-8 -52 0 -58 L-6 -44 Q16 -22 0 0 Z',c.a)+L('M-30 -44 H-6',c.gold,3)+PL(star(-18,-22,8,3.4,8,0),c.goldL);
    function coin(x,y){ return E(x,y,14,5.4,c.goldD)+E(x,y-3,14,5.4,c.gold)+E(x,y-3,9,3,c.goldL,{nl:1}); }
    s+=coin(30,-3)+coin(30,-10)+coin(30,-17)+coin(52,-3)+coin(52,-10)+coin(10,-2)+g('rotate(-18 40 -40)',C(40,-40,12,c.gold)+C(40,-40,7.6,c.goldL,{nl:1}));
    return s; });
  B.def('charityBox',{z:'S',S:74,ar:1,grp:'money',k:'charity|صدقه|الصدقه|صدقات|donat*|تبرع|يتصدق|تصدق|sadaqah|zakat|fitr|الفطر|poor|فقير|فقراء|مسكين|needy|محتاج|محتاجين|orphan*|يتيم|ايتام|اليتيم|help*|مساعده|يساعد|عون|اغاثه|relief|waqf|وقف|generos*|كرم|💝|box|صندوق|give|اعطاء|kafalah|كفاله|widow|ارمله|share wealth|حق السايل',bd:{mosqueIn:1,city:1}},function(c){
    var s=R(-32,-50,64,50,c.a,{rx:4})+R(-36,-58,72,12,c.aD,{rx:4})+R(-11,-55,22,4,B.isLine()?'#fff':'#16233d',{rx:2});
    s+=P('M0 -12 C-18 -24 -20 -38 -9 -40 C-3 -41 0 -36 0 -34 C0 -36 3 -41 9 -40 C20 -38 18 -24 0 -12 Z',c.cream);
    s+=g('rotate(14 4 -78)',C(4,-80,13,c.gold)+C(4,-80,8.4,c.goldL,{nl:1}))+L('M-18 -84 l-5 -6 M26 -88 l5 -6 M-12 -96 l-2 -8',c.goldL,1.6,{nl:1});
    return s; });
  B.def('sack',{z:'S',S:64,ar:1,k:'sack|كيس|اكياس|grain|حبوب|flour|دقيق|طحين|rice|ارز|صاع|provisions|مونه|carry*|يحمل|حمل|storehouse|خزاين|famine|قحط|مجاعه|سبع سنين|store|تخزين|yusuf|يوسف|supply|food aid|burden|عام الرماده|night patrol|زكاه الفطر',bd:{city:1,farm:1}},function(c){
    var j=mix(c.sandD,c.wood,0.25);
    var s=P('M-30 0 Q-46 -30 -26 -62 L-14 -70 H14 L26 -62 Q46 -30 30 0 Z',j)+P('M-16 -70 Q-26 -92 -6 -86 Q0 -96 8 -86 Q26 -90 16 -70 Z',j)+L('M-18 -70 H18',c.woodD,3.4);
    s+=L('M-22 -40 Q-14 -20 -20 -6 M18 -52 Q26 -30 18 -8',mix(j,'#000',0.18),1.3,{nl:1})+g('translate(0,-32) scale(0.36)',B.EL.wheat?B.EL.wheat.d(c):'');
    s+=E(42,-2,4,2.4,c.gold)+E(50,-4,4,2.4,c.gold)+E(46,-8,4,2.4,c.goldD);
    return s; });

  /* ───────────── HEROES' GEAR (laid down — never a fight) ───────────── */
  B.def('swordShield',{z:'S',S:74,ar:1.3,k:'sword|سيف|سيوف|shield|درع|ترس|battle|معركه|غزوه|غزوات|war|حرب|army|جيش|جيوش|warrior|مجاهد|مقاتل|jihad|جهاد|brave*|شجاع|شجاعه|courage|hero*|بطل|ابطال|بطوله|knight|فارس|victory|نصر|انتصار|conquest|فتح|defend*|!khalid|!سيف الله|badr|بدر|uhud|احد|hunayn|حنين|mutah|موته|tabuk|تبوك|yarmouk|اليرموك|qadisiyyah|القادسيه|⚔|🛡|martyr*|شهيد|شهداء|commander|قايد|قاده|hamza|حمزه|ali|علي|zubayr|الزبير|bara|البراء|qaqa|القعقاع|fearless|مقدام',bd:{desert:1}},function(c){
    var s=C(-12,-42,40,c.a)+C(-12,-42,33,c.aL,{nl:1})+C(-12,-42,26,c.a)+PL(star(-12,-42,17,7.4,8,0),c.gold)+C(-12,-42,5.4,c.goldD);
    [0,1,2,3].forEach(function(i){ var a=i*Math.PI/2+0.78; s+=C(-12+29.5*Math.cos(a),-42+29.5*Math.sin(a),2.4,c.goldL,{nl:1}); });
    s+=g('rotate(-58 30 -8)',P('M27 -6 L28 -78 L32 -88 L36 -78 L37 -6 Z',c.stoneL,{st:c.grey,sw:1})+L('M32 -80 V-10',c.grey,1,{nl:1})+R(20,-8,24,5,c.gold,{rx:2})+R(29,-3,6,14,c.woodD,{rx:2})+C(32,13,4,c.gold));
    return s; });
  B.def('bow',{z:'S',S:78,ar:1.2,k:'bow|قوس|arrow*|سهم|سهام|نبل|archer*|رمايه|الرمايه|رماه|الرماه|رمي|🏹|🎯|target|هدف|aim|!saad|!سعد بن ابي وقاص|quiver|جعبه|focus|تركيز|precision|دقه|ارموا|shoot',bd:{field:2,mountains:1}},function(c){
    var s=L('M-14 0 L8 -44 L30 0',c.woodD,3.4)+C(8,-56,30,c.white,{st:c.stoneL,sw:1})+C(8,-56,22,c.a)+C(8,-56,14,c.white)+C(8,-56,6.4,c.red);
    s+=L('M8 -56 L-24 -80',c.woodD,2.2)+P('M-24 -80 l-11 -3 l5 8 Z',c.gold)+P('M8 -56 l-9 -2 l4 -7 Z',c.grey,{nl:1});
    s+=P('M-46 -6 Q-70 -50 -46 -96',  'none',{st:c.wood,sw:4.4,lf:'none',lw:2.6})+L('M-46 -6 V-96',c.cream,1.1);
    return s; });
  B.def('armor',{z:'S',S:60,ar:1.2,k:'armor|armour|درع|دروع|helmet|خوذه|!dawud|!داود|david|iron|حديد|الحديد|chain mail|سابغات|blacksmith|حداد|soften*|الان|talut|طالوت|jalut|جالوت|goliath|protect*|يحمي',bd:{mountains:1}},function(c){
    var s=P('M-56 -4 H-2 V-22 H-10 Q-28 -56 -46 -22 H-56 Z',c.greyD)+R(-60,-6,62,6,c.stoneD,{rx:2});
    s+=P('M10 0 V-36 Q10 -72 34 -76 Q58 -72 58 -36 V0 H46 V-30 H22 V0 Z',c.grey)+P('M34 -76 Q26 -60 30 -30 H38 Q42 -60 34 -76 Z',c.gold)+L('M34 -76 V-90',c.goldD,2.4)+P('M34 -90 q10 2 12 10 q-8 -2 -12 2 Z',c.a)+L('M12 -40 H56',c.stoneD,1.4,{nl:1});
    s+=g('rotate(-30 -28 -60)',R(-31,-98,6,50,c.wood,{rx:2})+R(-40,-102,24,14,c.greyD,{rx:2}));
    return s; });
  B.def('flag',{z:'S',S:112,ar:0.62,k:'flag|banner|رايه|الرايه|رايات|لواء|اللواء|🚩|🏳|standard|leader*|قياده|قايد|امير|unity|وحده|ummah|امه|الامه|identity|هويه|pride|عزه|اعتزاز|nation|وطن|musab|مصعب|jafar|جعفر|zayd ibn harithah|زيد بن حارثه|standard-bearer|حامل الرايه|victory|نصر|responsib*|مسووليه|راع'},function(c){
    return E(0,-3,16,4,c.stoneD)+P('M-10 -3 Q-8 -12 0 -12 Q8 -12 10 -3 Z',c.stone)+L('M0 -8 V-98',c.woodD,3.2)+C(0,-99,3,c.gold)+
      P('M2 -94 Q22 -100 36 -92 Q50 -84 62 -90 V-56 Q50 -50 36 -58 Q22 -66 2 -60 Z',c.a)+P('M36 -92 Q50 -84 62 -90 V-56 Q50 -50 36 -58 Z',c.aD,{nl:1,op:0.5})+PL(star(22,-78,7,3,5,0),c.goldL); });
  B.def('staff',{z:'S',S:86,ar:1.1,k:'staff|عصا|العصا|rod|cane|عكاز|!musa|!موسي|moses|cloak|رداء|برده|عباءه|garment|robe|قميص|shirt|sandals|نعل|نعلين|shepherd|راعي|traveller|مسافر|zuhd|زهد|زاهد|ascetic|simple life|humble|تواضع|متواضع|patched|مرقع|abu dharr|ابو ذر|uways|اويس|simplicity|بساطه|poverty|قناعه|content*',bd:{desert:1,mountains:1}},function(c){
    var s=L('M30 0 Q24 -50 28 -84 Q30 -100 42 -94 Q48 -90 44 -84',c.woodD,4.4,{lw:2.6});
    s+=P('M-46 0 Q-50 -34 -24 -40 Q4 -44 12 -18 Q14 -6 8 0 Z',c.stone)+P('M-24 -40 Q4 -44 12 -18 L-2 -14 Z',c.stoneL,{op:0.6,nl:1});
    s+=P('M-44 -28 Q-40 -52 -16 -50 Q6 -50 12 -34 Q16 -20 8 -10 Q2 -24 -8 -18 Q-18 -30 -28 -18 Q-36 -30 -44 -28 Z',c.a)+L('M-30 -44 Q-22 -34 -26 -22 M-10 -46 Q-4 -36 -6 -22',c.aD,1.2,{nl:1});
    s+=E(-34,-2,12,3.6,c.wood)+E(-20,-1,12,3.6,c.woodL)+L('M-40 -4 l6 -4 l6 4 M-26 -3 l6 -4 l6 4',c.woodD,1.3);
    return s; });
  B.def('footprints',{z:'S',S:40,ar:3,env:'o',k:'footprint*|footstep*|اثر|اثار|خطي|خطوات|خطوه|steps|walk*|مشي|يمشي|follow*|اتباع|يتبع|اتبع|hijrah|الهجره|track*|sunnah|سنه|السنه|example|قدوه|اسوه|trace|suraqa|سراقه|way of|نهج|هدي النبي|in his steps|path of|migrat*|مهاجر',bd:{desert:2,road:3}},function(c){
    var s='', p=[[-84,-12,-20],[-58,-40,-12],[-30,-14,-4],[-4,-44,4],[26,-22,12],[54,-54,18],[82,-34,24]], d=B.isLine()?'#fff':mix(c.sandD,c.wood,0.4);
    p.forEach(function(q){ s+=g('translate('+q[0]+','+q[1]+') rotate('+(q[2]+70)+')',E(0,0,6.4,12,d)+E(0,16,5,5,d)); });
    return s; });

  /* ───────────── TREASURES & REWARDS ───────────── */
  B.def('key',{z:'S',S:56,ar:1.7,k:'key|مفتاح|مفاتيح|🔑|🗝|open*|يفتح|lock|قفل|secret*|سر|اسرار|unlock|solution|treasur*|access|بني شيبه|answer|جواب|key to|مفتاح الجنه|password|كلمه السر|الفتاح'},function(c){
    return g('rotate(-22 0 -40)',C(-34,-40,22,c.gold)+C(-34,-40,10,B.isLine()?'#fff':'#fff',{st:c.goldD,sw:1.2})+R(-14,-45,74,10,c.gold,{rx:3})+R(36,-37,9,18,c.gold)+R(50,-37,8,13,c.gold)+L('M-8 -40 H52',c.goldL,2,{nl:1})+PL(star(-34,-66,4,1.6,4,0),c.goldL,{nl:1})); });
  B.def('chest',{z:'S',S:64,ar:1.4,k:'treasure*|كنز|كنوز|chest|صندوق|gem*|jewel*|جوهره|جواهر|pearl*|لولو|riches|precious|ثمين|نفيس|غالي|💎|👑|reward*|ثواب|اجر|الاجر|جزاء|hasanat|حسنات|الحسنات|valuable|qarun|قارون|hidden|مخبا|مخفي|deeds|اعمال صالحه|invest*|تجاره مع الله|ذخر'},function(c){
    var s=C(0,-52,30,c.glow,{op:0.4,nl:1})+P('M-42 -40 Q-44 -78 0 -80 Q44 -78 42 -40 Z',c.wood)+P('M-36 -42 Q-36 -70 0 -72 Q36 -70 36 -42 Z',B.isLine()?'#fff':c.woodD);
    s+=C(-14,-42,9,c.gold)+C(6,-46,10,c.goldL)+C(22,-40,8,c.gold)+PL('-4,-58 4,-66 12,-58 4,-48',c.water)+PL('-26,-48 -20,-56 -14,-48 -20,-40',c.red)+PL(star(26,-58,5,2,4,0),c.goldL,{nl:1});
    s+=R(-44,-40,88,40,c.wood,{rx:3})+R(-44,-40,88,7,c.gold)+R(-30,-40,7,40,c.gold)+R(23,-40,7,40,c.gold)+R(-7,-34,14,15,c.goldD,{rx:3})+C(0,-27,2.4,c.ink,{lf:'#fff'});
    return s; });
  B.def('gift',{z:'S',S:58,ar:1,k:'gift*|هديه|هدايا|الهديه|🎁|present|يهدي|تهادوا|surprise|مفاجاه|مكافاه|جايزه|eid|عيد|العيد|love|kindness|احسان|hidden good|الخير المختبي|blessing in disguise|عطاء|منحه|wahhab|الوهاب'},function(c){
    return R(-30,-46,60,46,c.a,{rx:3})+R(-34,-58,68,14,c.aD,{rx:3})+R(-6,-58,12,58,c.gold)+P('M0 -58 C-28 -86 -42 -62 0 -58 Z',c.gold)+P('M0 -58 C28 -86 42 -62 0 -58 Z',c.gold)+C(0,-60,5,c.goldD)+PL(star(-18,-22,5,2.2,4,0),c.aL,{nl:1})+PL(star(18,-28,4,1.8,4,0),c.aL,{nl:1}); });
  B.def('medal',{z:'S',S:66,ar:0.8,grp:'prize',k:'medal|ميداليه|وسام|🏅|🥇|award|winner|فايز|فوز|champion|excellen*|تفوق|متفوق|اتقان|best|افضل|honor|honour|تكريم|شرف|achievement|انجاز|first|السابقون|rank|درجه|درجات|success|نجاح|certificate|شهاده|promised paradise|المبشرين|virtue|فضيله|فضايل|مناقب',bd:{field:1}},function(c){
    return P('M-22 -100 H-6 L8 -56 H-8 Z',c.a)+P('M22 -100 H6 L-8 -56 H8 Z',c.aD)+C(0,-34,30,c.goldD)+C(0,-34,24,c.gold)+PL(star(0,-34,15,6.4,5,0),c.goldL)+P('M-16 -52 A24 24 0 0 1 10 -56',  'none',{st:'#fff',sw:2.4,op:0.5,nl:1,lf:'none'}); });
  B.def('trophy',{z:'S',S:74,ar:0.9,grp:'prize',k:'trophy|🏆|win*|يفوز|champion*|بطوله|competition|مسابقه|مسابقات|race|سباق|contest|تنافس|يتنافس|podium|منصه|sabiq|سابقوا|فليتنافس|compete in good|استبقوا الخيرات',bd:{field:2}},function(c){
    return R(-22,-10,44,10,c.woodD,{rx:2})+R(-14,-18,28,8,c.wood)+R(-4,-36,8,18,c.goldD)+P('M-26 -92 H26 Q26 -44 0 -36 Q-26 -44 -26 -92 Z',c.gold)+P('M-26 -84 Q-46 -84 -44 -66 Q-42 -52 -22 -54 L-24 -60 Q-37 -60 -38 -68 Q-38 -77 -26 -77 Z',c.goldD)+P('M26 -84 Q46 -84 44 -66 Q42 -52 22 -54 L24 -60 Q37 -60 38 -68 Q38 -77 26 -77 Z',c.goldD)+
      PL(star(0,-68,11,4.6,5,0),c.goldL)+E(0,-92,26,4,c.goldL); });

  /* ───────────── EMBLEMS (symbols; hands only, never a person) ───────────── */
  B.def('star',{z:'E',S:64,ar:1,env:ANY,k:'⭐|🌟|shine|يلمع|تالق|special|مميز|excellent|ممتاز|talent*|موهبه|مواهب|gifted|مبدع|ابداع|brilliant|unique|فريد|dream*|حلم|احلام|ambition|طموح|wish|امنيه|potential|قدرات|you are great|انت اكبر|انت عظيم|role model|قدوه'},function(c){
    return PL(star(0,-50,46,19,5,0),c.gold)+PL(star(0,-50,30,12.4,5,0),c.goldL,{nl:1})+PL(star(36,-88,8,3,4,0),c.goldL)+PL(star(-40,-18,6,2.4,4,0),c.goldL); });
  B.def('heart',{z:'E',S:66,ar:1.1,env:ANY,k:'heart*|قلب|قلوب|القلب|❤|💛|💚|💖|💗|💕|love*|حب|محبه|يحب|احب|نحب|compassion|شفقه|kind*|لطف|لطيف|حنان|tender|sincer*|اخلاص|مخلص|ikhlas|niyyah|نيه|نيات|النيات|intention*|سليم|envy|حسد|حقد|غل|forgiv*|عفو|مغفره|غفور|الغفور|العفو|تسامح|pardon|affection|موده|الودود|feelings|مشاعر|emotion*|taqwa|تقوي|التقوي|soul|نفس|tazkiyah|تزكيه|sound heart|rahmah|رحمه|رحيم|الرحيم|الرحمن|الروف|mercy|merciful|humble|khushu'},function(c){
    var col=mix(c.red,c.a,0.35);
    return P('M0 -10 C-50 -42 -54 -84 -24 -90 C-8 -93 0 -80 0 -74 C0 -80 8 -93 24 -90 C54 -84 50 -42 0 -10 Z',col)+P('M-30 -72 C-30 -82 -20 -86 -14 -82',  'none',{st:'#fff',sw:4,op:0.55,nl:1,lf:'none'})+
      g('translate(42,-22) scale(0.26)',P('M0 -10 C-50 -42 -54 -84 -24 -90 C-8 -93 0 -80 0 -74 C0 -80 8 -93 24 -90 C54 -84 50 -42 0 -10 Z',c.pink))+g('translate(-44,-8) scale(0.2)',P('M0 -10 C-50 -42 -54 -84 -24 -90 C-8 -93 0 -80 0 -74 C0 -80 8 -93 24 -90 C54 -84 50 -42 0 -10 Z',c.pink)); });
  function hand(c,sl){ /* open palm, fingers up, wrist at bottom */
    return P('M-13 0 V-18 Q-25 -30 -28 -44 Q-28 -50 -23 -49 Q-17 -44 -13 -38 V-74 Q-13 -80 -9 -80 Q-5 -80 -5 -74 V-84 Q-5 -90 -1 -90 Q3 -90 3 -84 V-80 Q3 -86 7 -86 Q11 -86 11 -80 V-70 Q11 -76 15 -75 Q18 -75 18 -69 V-24 Q18 -8 13 0 Z',c.skin)+R(-17,-2,34,22,sl,{rx:4}); }
  B.def('duaHands',{z:'E',S:78,ar:1.1,env:ANY,k:'!dua|!دعاء|الدعاء|ادعيه|يدعو|دعا|ادعو|ادع|supplicat*|🤲|ask allah|يسال الله|اسال الله|raise* hands|رفع يديه|invoke|مناجاه|tawakkul|توكل|التوكل|ameen|امين|answer*|استجابه|مستجاب|يستجيب|المجيب|استخاره|need|حاجه|تضرع|qunut|seek refuge|استعاذه|اعوذ|استعانه|نستعين|يا رب|يا الله|اللهم|repent*|توبه|تاب|التواب|يتوب|beg|turn to allah|الصمد|السميع|القريب|hope in allah|رجاء'},function(c){
    c=Object.create(c); c.skin=B.isLine()?'#fff':'#E2B58A';
    return g('translate(-21,-18) rotate(-16) scale(0.86)',hand(c,c.a))+g('translate(21,-18) rotate(16) scale(-0.86,0.86)',hand(c,c.a))+PL(star(0,-98,6,2.4,4,0),c.goldL,{nl:1})+PL(star(-34,-96,4,1.6,4,0),c.goldL,{nl:1})+PL(star(34,-96,4,1.6,4,0),c.goldL,{nl:1}); });
  B.def('handshake',{z:'E',S:58,ar:1.8,env:ANY,k:'handshake|مصافحه|يصافح|🤝|agree*|اتفاق|brotherhood|اخوه|الاخوه|مواخاه|المواخاه|reconcil*|اصلاح ذات البين|friend*|صداقه|cooperat*|تعاون|التعاون|تعاونوا|alliance|حلف|pledge|بيعه|العقبه|promise|وعد|trust|ثقه|greet*|السلام عليكم|افشوا السلام|partner*|شراكه|team*|فريق|ansar|الانصار|muhajirun|المهاجرين|helping each other|يد واحده|together|معا|unity|وحده|اتحاد|united|متحدين|solidar*|تضامن|كالجسد الواحد|كالبنيان'},function(c){
    var sk=B.isLine()?'#fff':'#E2B58A', sk2=B.isLine()?'#fff':'#C99468';
    var s=R(-92,-66,40,36,c.a,{rx:5})+R(52,-66,40,36,c.a2,{rx:5})+R(-58,-68,8,40,c.cream,{rx:2})+R(50,-68,8,40,c.cream,{rx:2});
    s+=P('M-52 -62 L-14 -66 Q4 -70 20 -58 L34 -46 Q40 -38 32 -34 L8 -30 Q-10 -28 -24 -34 L-52 -36 Z',sk);
    s+=P('M52 -62 L22 -66 Q8 -66 -2 -58 L-16 -48 Q-22 -42 -14 -38 Q-6 -38 4 -46 L18 -44 Q30 -30 20 -28 L52 -36 Z',sk2)+L('M10 -32 q-6 -5 -2 -9 M20 -34 q-6 -5 -2 -9 M28 -38 q-6 -4 -2 -8',mix(sk,'#000',0.25),1.4,{nl:1});
    return s; });
  B.def('guard',{z:'E',S:70,ar:0.9,env:ANY,k:'protect*|حمايه|حفظ الله|يحفظ|الحفيظ|guard*|حارس|حراس|حفظه|🛡|safe*|امان|امن|الامن|secur*|shield|تحصين|حصن|fortif*|refuge|ملجا|immun*|مناعه|danger*|خطر|اخطار|مخاطر|beware|احذر|حذر|warning|تحذير|harm|ضرر|اذي|ruqyah|رقيه|ايه الكرسي|المعوذات|المعوذتين|say no|قل لا|stranger*|غريب|غرباء|boundar*|حدود|private|خصوصيه|safety|سلامه|fortress of|soldiers of|جنود'},function(c){
    return P('M0 -98 L38 -84 V-48 Q38 -18 0 -2 Q-38 -18 -38 -48 V-84 Z',c.a)+P('M0 -90 L31 -78 V-48 Q31 -24 0 -10 Q-31 -24 -31 -48 V-78 Z',c.aL,{nl:1})+P('M0 -90 L31 -78 V-48 Q31 -24 0 -10 Z',c.a,{nl:1,op:0.45})+
      PL(star(0,-50,19,8,8,0),c.gold)+C(0,-50,5,c.goldL,{nl:1}); });
  B.def('bulb',{z:'E',S:72,ar:0.8,env:ANY,k:'idea*|فكره|افكار|💡|think*|تفكير|يفكر|فكر|mind*|عقل|عقول|العقل|smart|ذكي|ذكاء|intelligen*|creativ*|ابداع|innovat*|ابتكار|inspir*|الهام|solution*|حل|حلول|problem*|مشكله|مشكلات|question*|سوال|اسيله|why|لماذا|curious|فضول|understand*|فهم|wisdom|حكمه|الحكمه|حكيم|الحكيم|logic|منطق|brain|دماغ|imagin*|خيال|تخيل|riddle|لغز|puzzle|critical|نقد'},function(c){
    var s='',i; for(i=0;i<7;i++){ var a=Math.PI*(1+i/6); s+=L('M'+(46*Math.cos(a)).toFixed(1)+' '+(-60+46*Math.sin(a)).toFixed(1)+' L'+(56*Math.cos(a)).toFixed(1)+' '+(-60+56*Math.sin(a)).toFixed(1),c.gold,3.4); }
    s+=P('M-14 -26 Q-14 -36 -24 -46 A32 32 0 1 1 24 -46 Q14 -36 14 -26 Z',c.lit)+P('M-16 -74 A22 22 0 0 1 4 -86',  'none',{st:'#fff',sw:3.4,op:0.7,nl:1,lf:'none'})+L('M-8 -28 L-4 -50 L0 -42 L4 -50 L8 -28',c.goldD,1.6);
    s+=R(-13,-26,26,7,c.grey,{rx:2})+R(-11,-19,22,6,c.greyD,{rx:2})+R(-7,-13,14,6,c.grey,{rx:3});
    return s; });
  B.def('dna',{z:'E',S:84,ar:0.6,env:ANY,k:'!dna|!الحمض النووي|حمض نووي|🧬|gene*|جينات|وراثه|code|شفره|الشفره|helix|program|برنامج|blueprint|information|معلومات',bd:{lab:2}},function(c){
    var s='', i, a='', b='';
    for(i=0;i<=20;i++){ var y=-2-i*4.8, x=18*Math.sin(i*0.62); a+=(i?' L':'M')+x.toFixed(1)+' '+y.toFixed(1); b+=(i?' L':'M')+(-x).toFixed(1)+' '+y.toFixed(1);
      if(i%2===1 && Math.abs(x)>5) s+=L('M'+(-x).toFixed(1)+' '+y.toFixed(1)+' H'+x.toFixed(1),[c.gold,c.red,c.leaf,c.water][((i-1)/2)%4],3,{lw:1.2}); }
    return s+L(a,c.a,5,{lw:2.2})+L(b,c.a2,5,{lw:2.2}); });
  B.def('cells',{z:'E',S:70,ar:1.2,env:ANY,k:'blood|دم|الدم|🩸|cell*|خليه|خلايا|vein*|عروق|شرايين|نبض|immune|مناعه|المناعه|white cells|inside you|داخل جسمك|organ*|اعضاء|body|جسمك|جسم الانسان|red cells|كريات|antibod*|germs|microb*',bd:{lab:1}},function(c){
    function rc(x,y,r){ return C(x,y,r,c.red)+C(x,y,r*0.5,mix(c.red,'#000',0.18),{op:0.8,keep:1,lf:'#fff'}); }
    var s=rc(-28,-62,20)+rc(16,-74,17)+rc(30,-34,19)+rc(-12,-24,15);
    s+=C(-44,-22,12,c.white,{st:c.grey,sw:1.2})+C(-44,-22,5,c.purple,{op:0.8,keep:1,lf:'#fff'})+PL(star(48,-66,11,7,9,0),c.leafL)+C(48,-66,3.4,c.leafD,{nl:1});
    return s; });
  B.def('drop',{z:'E',S:66,ar:0.9,env:ANY,k:'water|ماء|الماء|drop*|قطره|قطرات|💧|💦|life|حياه|الحياه|pure|river|cycle|دوره الماء|steam|بخار|every living thing|كل شيء حي|miracle of water|معجزه الماء|rain|مطر|غيث|tear*|دمعه|دموع|cry|بكاء|يبكي|sweat|عرق'},function(c){
    function d(x,y,k,col){ return g('translate('+x+','+y+') scale('+k+')',P('M0 -70 C22 -40 30 -26 30 -14 A30 30 0 0 1 -30 -14 C-30 -26 -22 -40 0 -70 Z',col)+P('M-18 -14 A18 18 0 0 0 -4 4','none',{st:'#fff',sw:4,op:0.7,nl:1,lf:'none'})); }
    return d(-6,-26,1,c.water)+d(34,-8,0.42,c.waterL)+d(-38,-4,0.34,c.waterL); });

  /* ───────────── TIME ───────────── */
  B.def('clock',{z:'S',S:66,ar:0.95,grp:'time',k:'clock|ساعه|ساعات|الساعه|time|وقت|اوقات|الوقت|⏰|🕰|⌚|⏱|minute*|دقيقه|دقايق|punctual*|on time|موعد|مواعيد|في وقتها|schedule|جدول|routine|روتين|early|مبكر|مبكرا|بكور|late|تاخر|delay|تسويف|daily|يومي|يوميا|moments|لحظه|لحظات|hour*|wake up|استيقظ|alarm|منبه|organis*|تنظيم|ينظم|plan your day|يومك',bd:{home:1,classroom:1}},function(c){
    return C(-24,-86,9,c.aD)+C(24,-86,9,c.aD)+L('M-22 -12 L-30 -2 M22 -12 L30 -2',c.aD,4)+C(0,-48,40,c.a)+C(0,-48,32,c.cream)+L('M0 -76 v6 M0 -26 v6 M-28 -48 h6 M22 -48 h6',c.greyD,2)+L('M0 -48 V-68 M0 -48 L14 -40',c.ink,3)+C(0,-48,3,c.red)+R(-3,-96,6,10,c.aD); });
  B.def('hourglass',{z:'S',S:70,ar:0.7,grp:'time',k:'hourglass|ساعه رمليه|⏳|⌛|patien*|صبر|الصبر|صابر|صبور|الصبور|يصبر|wait*|انتظار|life span|اجل|عمر|العمر|limited|فان|dunya|دنيا|الدنيا|short|قصير|age|years|سنين|سنوات|past|ماضي|qadar|القدر|قدر|destiny|مقدر|مكتوب|decree|قضاء|asr|العصر|والعصر|time passes|يمضي|endure*|تحمل|persever*|مثابره|steadfast*|ثبات'},function(c){
    return R(-28,-8,56,8,c.wood,{rx:3})+R(-28,-100,56,8,c.wood,{rx:3})+L('M-22 -92 V-8 M22 -92 V-8',c.woodD,2.6)+P('M-18 -92 H18 Q18 -64 3 -50 Q18 -36 18 -8 H-18 Q-18 -36 -3 -50 Q-18 -64 -18 -92 Z',c.waterL,{st:c.grey,sw:1.2})+
      P('M-12 -76 H12 Q8 -62 0 -54 Q-8 -62 -12 -76 Z',c.gold,{nl:1})+P('M-16 -10 Q-12 -30 0 -32 Q12 -30 16 -10 Z',c.gold)+L('M0 -52 V-32',c.gold,1.6,{nl:1}); });

  /* ───────────── EXPLORING & SCIENCE ───────────── */
  B.def('globe',{z:'S',S:80,ar:0.85,k:'globe|world|العالم|earth|ارض|الارض|🌍|🌎|🌏|countr*|بلد|بلاد|بلدان|دول|nation*|امم|شعوب|global|عالمي|continent*|قاره|قارات|geograph*|جغرافيا|spread|انتشار|انتشر|east|شرق|west|غرب|مشارق|مغارب|ibn battuta|ابن بطوطه|idrisi|الادريسي|explor*|مستكشف|رحاله|china|الصين|india|الهند|africa|افريقيا|andalus|الاندلس|transoxiana|ما وراء النهر|sind|السند|lands|civiliz*|حضاره|الحضاره|peoples|لتعارفوا',bd:{classroom:2}},function(c){
    var s=P('M-22 0 Q-20 -8 -6 -9 H6 Q20 -8 22 0 Z',c.woodD)+R(-3,-20,6,12,c.wood)+P('M-36 -30 A38 38 0 0 0 30 -22',  'none',{st:c.gold,sw:4,lf:'none',lw:2})+C(0,-58,34,c.water);
    s+=P('M-22 -82 Q-6 -86 0 -76 Q-4 -66 -14 -66 Q-16 -54 -26 -52 Q-34 -62 -30 -74 Z',c.leaf)+P('M4 -60 Q20 -66 28 -54 Q30 -40 20 -32 Q10 -30 8 -42 Q0 -50 4 -60 Z',c.leaf)+P('M-18 -42 Q-8 -44 -6 -34 Q-10 -26 -18 -30 Z',c.leaf)+P('M-24 -74 A30 30 0 0 1 -2 -88','none',{st:'#fff',sw:3,op:0.5,nl:1,lf:'none'});
    return s; });
  B.def('map',{z:'S',S:64,ar:1.5,k:'map|خريطه|خرايط|🗺|🧭|compass|بوصله|direction*|اتجاه|navigat*|ملاحه|route|plan*|خطه|تخطيط|strateg*|goal*|اهداف|roadmap|treasure map|destination|وجهه|lost|ضل|تايه|ibn majid|ابن ماجد|idrisi|الادريسي|expedition|حمله|khwarizmi|guide|دليل|mission|مهمه|quest',bd:{classroom:1,road:1}},function(c){
    var pa=mix(c.cream,c.sandL,0.5);
    var s=P('M-54 -8 L-18 -18 L18 -8 L54 -18 V-70 L18 -60 L-18 -70 L-54 -60 Z',pa,{st:c.sandD,sw:1})+L('M-18 -18 V-70 M18 -8 V-60',c.sandD,1.2)+P('M-46 -30 Q-36 -44 -26 -36 Q-22 -28 -30 -24 Z',c.leafL)+P('M24 -36 Q36 -46 44 -36 Q42 -28 32 -28 Z',c.waterL);
    s+=L('M-40 -52 Q-24 -40 -8 -48 Q8 -56 18 -40 Q24 -30 36 -50',c.red,2,{da:'4 4',lw:1.2})+C(-40,-52,3.4,c.red)+PL(star(36,-52,6,2.6,5,0),c.gold);
    s+=g('translate(46,-78)',C(0,0,18,c.gold)+C(0,0,14,c.cream)+PL('0,-12 4,0 0,12 -4,0',c.red)+PL('0,0 4,0 0,12 -4,0',c.grey,{nl:1})+C(0,0,2,c.ink,{lf:'#fff'}));
    return s; });
  B.def('telescope',{z:'S',S:90,ar:1,k:'telescope|تلسكوب|مقراب|منظار|🔭|astronom*|فلك|الفلك|stars|نجوم|النجوم|observ*|رصد|يرصد|future|مستقبل|المستقبل|vision|ponder*|تفكر|يتفكر|تامل|reflect*|contemplat*|signs|ايات الله|ايات كونيه|wonder*|عجايب|عجيب|creation|خلق|الخلق|مخلوقات|look up|انظر الي السماء|sky|سماء|السماء|far|بعيد|horizon|افق',bd:{space:1,mountains:1}},function(c){
    var s=L('M0 -44 L-24 0 M0 -44 L24 0 M0 -44 V0',c.woodD,3.4)+C(0,-46,6,c.goldD);
    s+=g('rotate(-32 0 -52)',R(-40,-61,56,17,c.a,{rx:3})+R(14,-64,26,23,c.aD,{rx:3})+R(38,-66,6,27,c.gold,{rx:2})+R(-50,-57,12,9,c.gold,{rx:2})+L('M-34 -57 H10',c.aL,2,{nl:1}));
    s+=PL(star(40,-96,5,2,4,0),c.goldL)+PL(star(-34,-90,4,1.6,4,0),c.goldL);
    return s; });
  B.def('microscope',{z:'S',S:80,ar:0.8,k:'microscope|مجهر|المجهر|ميكروسكوب|🔬|bacteria|بكتيريا|germ*|جراثيم|جرثومه|virus|فيروس|tiny|صغير جدا|دقيقه|biolog*|احياء|research*|بحث|scien*|علمي|العلم الحديث|examine|فحص|detail*|تفاصيل|unseen small|لا تري بالعين',bd:{lab:3}},function(c){
    var s=R(-30,-8,60,8,c.aD,{rx:3})+R(-22,-22,34,5,c.grey,{rx:2})+P('M14 -8 Q34 -34 16 -70 L8 -66 Q22 -36 4 -8 Z',c.a);
    s+=g('rotate(24 2 -60)',R(-6,-94,14,50,c.a,{rx:3})+R(-8,-100,18,10,c.aD,{rx:2})+R(-4,-46,10,10,c.grey)+R(-2,-37,6,7,c.greyD));
    s+=C(20,-56,6,c.gold)+E(-6,-25,9,2,c.waterL);
    return s; });
  B.def('flask',{z:'S',S:70,ar:1.2,k:'flask|beaker|قاروره|انبوب|انابيب|chemistry|كيمياء|الكيمياء|🧪|⚗|experiment*|تجربه|تجارب|lab*|مختبر|jabir|جابر بن حيان|mixture|محلول|potion|acid|test|اختبار|hypothes*|فرضيه|distill*|تقطير|alchemy|substance|ماده|مواد|react*|تفاعل',bd:{lab:3}},function(c){
    var s=P('M-36 -84 H-18 V-52 L0 -8 Q2 0 -8 0 H-46 Q-56 0 -54 -8 L-36 -52 Z',c.white,{st:c.grey,sw:1.4})+P('M-44 -30 H-10 L-1 -8 Q0 -3 -8 -3 H-46 Q-54 -3 -53 -8 Z',c.a,{nl:1})+R(-39,-88,24,6,c.grey,{rx:2})+C(-32,-16,3,'#fff',{op:0.7,nl:1})+C(-20,-22,2,'#fff',{op:0.7,nl:1});
    s+=R(18,-70,16,70,c.white,{rx:8,st:c.grey,sw:1.4})+P('M19 -36 H33 V-8 Q33 -1 26 -1 Q19 -1 19 -8 Z',c.a2,{nl:1})+R(15,-74,22,6,c.grey,{rx:2});
    s+=C(26,-84,3.4,c.a2,{op:0.8,keep:1})+C(32,-94,2.4,c.a2,{op:0.8,keep:1})+C(-26,-96,3,c.a,{op:0.8,keep:1});
    s+=R(40,-56,13,56,c.white,{rx:6.5,st:c.grey,sw:1.4})+P('M41 -24 H52 V-7 Q52 -1 46.5 -1 Q41 -1 41 -7 Z',c.gold,{nl:1});
    return s; });
  function gear(x,y,r,col,c,rot){ var d='', k=8, i; for(i=0;i<k*2;i++){ var a=(rot||0)+i*Math.PI/k, a2=a+Math.PI/k*0.5, ro=i%2?r:r*0.78; d+=(i?' L':'M')+(x+ro*Math.cos(a)).toFixed(1)+' '+(y+ro*Math.sin(a)).toFixed(1)+' L'+(x+ro*Math.cos(a2)).toFixed(1)+' '+(y+ro*Math.sin(a2)).toFixed(1); }
    return P(d+' Z',col)+C(x,y,r*0.34,B.isLine()?'#fff':c.cream)+C(x,y,r*0.12,col,{nl:1}); }
  B.def('gears',{z:'S',S:66,ar:1.3,k:'gear*|تروس|⚙|machine*|اله|الات|engine*|محرك|mechan*|ميكانيكا|robot*|روبوت|automat*|technolog*|تقنيه|تكنولوجيا|engineer*|هندسه|مهندس|system|نظام|industr*|صناعه|صنع|يصنع|skill*|مهاره|مهارات|المهارات|craft|حرفه|jazari|الجزري|factory|مصنع|design*|تصميم|maker|صانع|صناع|productiv*|انتاج|انجاز|programm*|برمجه|ai|ذكاء اصطناعي|future maker|صانع المستقبل',bd:{lab:2}},function(c){
    return gear(-22,-34,32,c.a,c,0)+gear(30,-58,24,c.gold,c,0.2)+gear(34,-16,15,c.a2,c,0.1); });
  B.def('magnifier',{z:'S',S:66,ar:1,k:'eye|عين|العين|عيون|👁|see*|بصر|ابصار|يبصر|البصير|look*|نظر|ينظر|انظر|search*|يبحث|find*|magnif*|عدسه|مكبره|🔍|🔎|investigat*|تحقيق|detective|محقق|evidence|دليل|ادله|برهان|proof|clue|discover*|اكتشف|اكتشاف|ملاحظه|verify|تثبت|تبين|fact*|حقيقه|حقايق|lens|camera|كاميرا|rumou*|اشاعه|شايعات|check the news|نبا|doubt*|شبهه|شبهات|شك'},function(c){
    return g('rotate(40 0 -50)',R(-6,-36,12,44,c.woodD,{rx:5})+R(-7,-40,14,8,c.gold,{rx:2}))+C(-8,-62,32,c.a)+C(-8,-62,25,c.waterL)+P('M-24 -70 A20 20 0 0 1 -6 -82',  'none',{st:'#fff',sw:3.4,op:0.8,nl:1,lf:'none'})+
      g('translate(-8,-60) scale(0.3)',P('M0 -40 Q-28 -20 0 30 Q28 -20 0 -40 Z',c.leaf)+L('M0 -34 V26',c.leafD,3)); });
  B.def('astrolabe',{z:'S',S:74,ar:0.85,k:'astrolabe|اسطرلاب|الاسطرلاب|instrument|navigation|mariam|مريم الاسطرلابي|measure*|قياس|brass|khwarizmi|الخوارزمي|biruni|math*|رياضيات|الرياضيات|algebra|الجبر|geometry|numbers|ارقام|اعداد|calculat*|حساب|zero|الصفر|algorithm|خوارزميه|ibn al-haytham|ابن الهيثم|optics|بصريات|kindi|الكندي|scientist|عالم مسلم|golden age',bd:{lab:2,classroom:1}},function(c){
    var s=C(0,-96,6,'none',{st:c.goldD,sw:3,lf:'none'})+R(-5,-92,10,10,c.goldD,{rx:2})+C(0,-44,40,c.gold)+C(0,-44,33,c.goldL)+C(0,-44,22,'none',{st:c.goldD,sw:1.6,lf:'none'})+C(0,-56,14,'none',{st:c.goldD,sw:1.4,lf:'none'}), i;
    for(i=0;i<12;i++){ var a=i*Math.PI/6; s+=L('M'+(29*Math.cos(a)).toFixed(1)+' '+(-44+29*Math.sin(a)).toFixed(1)+' L'+(33*Math.cos(a)).toFixed(1)+' '+(-44+33*Math.sin(a)).toFixed(1),c.goldD,1.5,{nl:1}); }
    s+=g('rotate(-35 0 -44)',P('M-34 -47 H34 L38 -44 L34 -41 H-34 L-38 -44 Z',c.a))+C(0,-44,4,c.goldD);
    return s; });
  B.def('medicine',{z:'S',S:62,ar:1.3,k:'medicine|دواء|ادويه|علاج|يعالج|cure|شفاء|الشافي|heal*|doctor|طبيب|اطباء|physician|medical|طب|الطب|hospital|مستشفي|بيمارستان|🩺|💊|⚕|herb*|اعشاب|pharmac*|صيدله|!razi|!الرازي|ibn sina|ابن سينا|zahrawi|الزهراوي|ابن النفيس|sick|مريض|مرض|illness|surgery|جراحه|patient*|مرضي|الحبه السوداء|rufaydah|رفيده|nurse|تمريض',bd:{lab:2}},function(c){
    var s=P('M-52 -30 H-12 Q-14 0 -26 0 H-38 Q-50 0 -52 -30 Z',c.stone)+E(-32,-30,20,5,c.stoneL)+g('rotate(28 -26 -40)',R(-29,-70,7,44,c.woodL,{rx:3.5}))+E(-36,-30,9,2.4,c.leaf,{nl:1});
    s+=R(4,-52,30,52,c.waterL,{rx:5,st:c.grey,sw:1.2})+R(4,-34,30,34,c.a,{rx:5,nl:1,op:0.85})+R(9,-64,20,13,c.woodL,{rx:2})+R(10,-30,18,16,c.cream,{rx:2})+L('M19 -27 v10 M14 -22 h10',c.red,3,{lw:1.2});
    s+=P('M42 0 q-4 -14 6 -22 q10 8 6 22 Z',c.leaf)+L('M48 -20 V0',c.leafD,1.2,{nl:1})+P('M52 -4 q6 -12 16 -12 q0 12 -10 14 Z',c.leafL);
    return s; });
  B.def('tools',{z:'S',S:60,ar:1.4,k:'tool*|ادوات|اداه|hammer|مطرقه|saw|منشار|🔨|🛠|🪚|carpenter|نجار|build*|بناء|يبني|بني|repair|fix|يصلح|work*|عمل|العمل|يعمل|عامل|craft*|حرفه|مهنه|job|وظيفه|labour|كسب اليد|عمل يده|earn*|كسب|profession|zakariyya|زكريا|يصنع الفلك|construct*|تشييد|mason|اعمار|عماره|wall|جدار|الجدار|dhul-qarnayn|ذو القرنين|effort|جهد|اجتهاد|مجتهد|diligen*|itqan|اتقان|يتقنه',bd:{city:1,lab:1}},function(c){
    var s=R(-52,-12,104,12,c.woodL,{rx:2})+L('M-40 -6 h30 M4 -8 h34',c.wood,1.2,{nl:1});
    s+=g('rotate(-38 -20 -40)',R(-23,-78,7,62,c.wood,{rx:3})+R(-36,-90,34,15,c.greyD,{rx:3}));
    s+=g('rotate(30 26 -40)',P('M10 -70 H48 L44 -52 H10 Z',c.stoneL,{st:c.grey,sw:1})+L('M12 -52 l3 5 l3 -5 l3 5 l3 -5 l3 5 l3 -5 l3 5 l3 -5 l3 5 l3 -5',c.grey,1.4)+P('M-4 -74 H12 V-48 H-4 Q-12 -61 -4 -74 Z',c.a));
    return s; });

  /* ───────────── MODERN LIFE & SCHOOL ───────────── */
  B.def('screen',{z:'S',S:64,ar:1.4,k:'screen*|شاشه|شاشات|الشاشات|phone*|هاتف|جوال|موبايل|tablet|📱|💻|📺|🎮|🎬|tv|تلفاز|تلفزيون|internet|انترنت|online|video*|فيديو|gaming|العاب الكترونيه|social media|تواصل اجتماعي|app*|تطبيق|digital|رقمي|film*|افلام|فيلم|movie*|song*|اغاني|addict*|ادمان|distract*|انشغال|ملهيات|device*|جهاز|اجهزه|cyber*|electronic*|الكتروني|youtube|waste time|ضياع الوقت|browse|تصفح',bd:{home:2}},function(c){
    var s=R(-50,-74,70,50,c.navy,{rx:5,lf:'#fff'})+R(-45,-69,60,40,c.waterL,{rx:2})+P('M-22 -58 l16 9 l-16 9 Z',c.a)+R(-22,-24,14,10,c.greyD)+R(-34,-14,38,5,c.greyD,{rx:2});
    s+=g('rotate(10 38 -30)',R(24,-60,28,56,c.navy,{rx:5,lf:'#fff'})+R(27,-54,22,42,c.cream,{rx:2})+R(30,-50,16,8,c.a,{rx:2,nl:1})+R(30,-39,16,4,c.grey,{rx:2,nl:1})+R(30,-32,10,4,c.grey,{rx:2,nl:1})+C(38,-8,2,c.grey,{nl:1}));
    return s; });
  B.def('schoolBag',{z:'S',S:66,ar:0.9,k:'bag|حقيبه|شنطه|🎒|school|مدرسه|المدرسه|student|طالب|backpack|ready|استعداد|prepare|تحضير|يستعد|first day|pack',bd:{classroom:2,home:1}},function(c){
    return P('M-16 -78 Q-16 -96 0 -96 Q16 -96 16 -78',  'none',{st:c.aD,sw:5,lf:'none',lw:2.4})+R(-32,-80,64,80,c.a,{rx:12})+R(-32,-80,64,30,c.aD,{rx:12,nl:1,op:0.5})+R(-22,-40,44,30,c.aL,{rx:6})+L('M-22 -30 H22',c.aD,1.6)+R(-5,-54,10,8,c.gold,{rx:2})+R(-40,-50,8,36,c.aD,{rx:4})+R(32,-50,8,36,c.aD,{rx:4}); });
  B.def('pencil',{z:'S',S:60,ar:1.4,k:'pencil|قلم رصاص|✏|📝|📒|📓|notebook|دفتر|كراسه|notes|ملاحظات|homework|واجب|exam|امتحان|draw*|رسم|يرسم|ruler|مسطره|list|قايمه|diary|journal|يوميات|محاسبه|record|plan*|خطه|goals|اهدافك|write down|دون|يدون|schedule|جدول|checklist|track',bd:{classroom:2}},function(c){
    var s=g('rotate(-6 -10 -30)',R(-48,-58,60,58,c.a,{rx:3})+R(-42,-54,52,50,c.cream,{rx:2})+L('M-36 -44 h40 M-36 -34 h34 M-36 -24 h40 M-36 -14 h26',c.grey,1.4,{lw:0.9})+L('M-48 -50 h-5 M-48 -40 h-5 M-48 -30 h-5 M-48 -20 h-5 M-48 -10 h-5',c.greyD,2.4,{lw:1.2}));
    s+=g('rotate(32 34 -40)',R(28,-84,12,62,c.gold)+P('M28 -22 h12 l-6 16 Z',c.woodL)+P('M32 -11 h4 l-2 5 Z',c.ink,{lf:'#fff'})+R(28,-92,12,9,c.pink,{rx:2})+R(28,-84,12,4,c.grey));
    return s; });
  B.def('desk',{z:'S',S:62,ar:1.4,env:'oi',k:'desk|مكتب|طاوله|kuttab|الكتاب|study*|مذاكره|يذاكر|student seat|حلقه|circle|مجلس علم|seek knowledge|طلب العلم',bd:{classroom:3}},function(c){
    return E(0,-4,42,7,c.aL)+P('M-34 -6 L8 -40 L15 -35 L-22 -4 Z',c.wood)+P('M34 -6 L-8 -40 L-15 -35 L22 -4 Z',c.woodD)+g('translate(0,2) scale(0.8)',P('M-46 -48 L0 -40 L46 -48 V-76 L0 -68 L-46 -76 Z',c.a)+P('M0 -44 Q-22 -56 -43 -50 V-78 Q-22 -84 0 -72 Z',c.cream)+P('M0 -44 Q22 -56 43 -50 V-78 Q22 -84 0 -72 Z',c.white)+L('M-36 -70 Q-22 -74 -7 -66 M-36 -62 Q-22 -66 -7 -58 M36 -70 Q22 -74 7 -66 M36 -62 Q22 -66 7 -58',c.grey,1.2,{lw:0.9})); });

  /* ───────────── SPORT & PLAY ───────────── */
  B.def('ball',{z:'S',S:44,ar:1,k:'ball|كره|الكره|⚽|🏀|football|soccer|كره القدم|play*|لعب|يلعب|game*|لعبه|مباراه|match|kick|basketball|fun|مرح|playground|ملعب|sport*|رياضه|الرياضه',bd:{field:3}},function(c){
    return C(0,-50,48,c.white,{st:c.grey,sw:1.6})+PL('0,-68 17,-56 10,-36 -10,-36 -17,-56',c.navy,{lf:'#fff'})+L('M0 -68 V-96 M17 -56 L42 -66 M10 -36 L28 -14 M-10 -36 L-28 -14 M-17 -56 L-42 -66',c.navy,2.4)+P('M-30 -86 Q-12 -98 8 -97',  'none',{st:c.grey,sw:2,op:0.5,nl:1,lf:'none'}); });
  B.def('goal',{z:'M',S:80,ar:1.7,env:'o',k:'goal|مرمي|net|شبكه|score*|يسجل|football|كره القدم|match|مباراه|team|فريق|pitch|ملعب',bd:{field:4}},function(c){
    var s='',i; for(i=0;i<10;i++) s+=L('M'+(-62+i*13.8)+' -90 V0',c.grey,0.9,{op:0.7}); for(i=0;i<6;i++) s+=L('M-62 '+(-14-i*14)+' H62',c.grey,0.9,{op:0.7});
    return s+L('M-64 0 V-92 H64 V0',c.white,6,{lw:3})+L('M-64 0 V-92 H64 V0',c.stoneL,1,{nl:1}); });
  B.def('dumbbell',{z:'S',S:50,ar:1.9,k:'strong|قوي|القوي|قوه|القوه|strength|fitness|لياقه|exercise*|تمرين|تمارين|train*|تدريب|يتدرب|muscle*|عضلات|💪|🏋|gym|weights|اثقال|body|جسم|الجسم|جسد|الجسد|بدن|health*|صحه|الصحه|active|نشيط|المومن القوي|strong believer|energy|طاقه|wrestl*|مصارعه|ركانه|endurance|will|اراده|الاراده|discipline|انضباط|jump rope',bd:{field:3}},function(c){
    var s=R(-34,-27,68,9,c.grey,{rx:3})+R(-58,-46,14,46,c.a,{rx:4})+R(-46,-40,10,34,c.aD,{rx:3})+R(44,-46,14,46,c.a,{rx:4})+R(36,-40,10,34,c.aD,{rx:3});
    s+=g('translate(78,0)',R(-9,-52,18,52,c.waterL,{rx:5,st:c.grey,sw:1.2})+R(-9,-30,18,30,c.water,{rx:5,nl:1})+R(-6,-62,12,11,c.a2,{rx:3}));
    return s; });
  B.def('toys',{z:'S',S:56,ar:1.5,k:'toy*|لعبه|العاب|الالعاب|دميه|🧸|🪀|🧩|blocks|مكعبات|share toys|lego|ليجو|toy car|children room|غرفه الاطفال|tidy|ترتيب|يرتب|play fair|يتشارك|يتشاركون|take turns|الدور|borrow*|استعاره|return|يعيد',bd:{home:3}},function(c){
    var s=R(-52,-26,26,26,c.a,{rx:3})+R(-24,-26,26,26,c.gold,{rx:3})+R(-38,-52,26,26,c.a2,{rx:3})+PL(star(-39,-13,7,3,5,0),c.cream,{nl:1})+C(-11,-13,6,c.cream,{nl:1})+PL('-25,-46 -19,-34 -31,-34',c.cream,{nl:1});
    s+=P('M10 -8 V-22 Q10 -28 18 -28 H26 L32 -40 H50 L56 -28 Q62 -28 62 -22 V-8 Z',c.red)+P('M30 -28 L34 -37 H48 L52 -28 Z',c.waterL)+C(22,-8,8,c.navy,{lf:'#fff'})+C(50,-8,8,c.navy,{lf:'#fff'})+C(22,-8,3,c.grey,{nl:1})+C(50,-8,3,c.grey,{nl:1});
    return s; });

  /* ───────────── HOME & CARE ───────────── */
  B.def('bed',{z:'M',S:66,ar:1.9,env:'i',k:'bed|سرير|فراش|فراشه|sleep*|نوم|النوم|ينام|نام|🛏|😴|bedtime|قبل النوم|pillow|وساده|blanket|غطاء|لحاف|wake*|استيقاظ|يستيقظ|rest|راحه|sick|مريض|illness|عياده المريض|اذكار النوم|right side|الشق الايمن|dream*|رويا|nap|قيلوله',bd:{home:5}},function(c){
    return R(-70,-76,10,76,c.wood,{rx:3})+R(62,-48,8,48,c.wood,{rx:3})+R(-64,-34,130,16,c.woodL)+R(-62,-46,126,14,c.white,{rx:5,st:c.stoneL,sw:1})+P('M-30 -50 H64 V-30 H-30 Q-36 -40 -30 -50 Z',c.a)+P('M-30 -50 H-10 Q-16 -40 -10 -30 H-30 Q-36 -40 -30 -50 Z',c.aL)+
      R(-58,-58,26,13,c.cream,{rx:6,st:c.stoneL,sw:1})+PL(star(20,-40,5,2.2,8,0),c.aL,{nl:1})+PL(star(44,-40,5,2.2,8,0),c.aL,{nl:1})+R(-64,-18,8,18,c.woodD)+R(56,-18,8,18,c.woodD); });
  B.def('cushion',{z:'S',S:44,ar:2.4,env:'i',k:'cushion*|مجلس|المجلس|majlis|sit*|جلوس|يجلس|مجالس|sofa|اريكه|living|gathering|اداب المجلس|make room|تفسحوا|circle',bd:{home:3}},function(c){
    return R(-80,-34,160,34,c.a,{rx:8})+R(-80,-34,160,12,c.aL,{rx:6,nl:1})+R(-74,-78,44,46,c.gold,{rx:9})+PL(star(-52,-55,10,4.4,8,0),c.cream,{nl:1})+R(-24,-74,44,42,c.a2,{rx:9})+R(30,-78,44,46,c.cream,{rx:9,st:c.stoneL,sw:1})+PL(star(52,-55,10,4.4,8,0),c.a,{nl:1}); });
  B.def('plant',{z:'S',S:64,ar:0.8,k:'plant|نبته|pot|اصيص|🪴|green|leaf|ورقه|اوراق|houseplant|care for|يعتني|cactus',bd:{home:1,garden:1}},function(c){
    return P('M0 -30 Q-30 -40 -32 -72 Q-8 -66 0 -34 Z',c.leaf)+P('M0 -30 Q30 -44 34 -78 Q8 -70 0 -36 Z',c.leafD)+P('M0 -30 Q-8 -70 4 -98 Q16 -70 2 -30 Z',c.leafL)+P('M-22 -32 H22 L16 0 H-16 Z',c.brick)+R(-25,-38,50,9,c.brickD,{rx:3}); });
  B.def('toothbrush',{z:'S',S:64,ar:0.9,k:'!siwak|!سواك|السواك|مسواك|miswak|tooth*|اسنان|الاسنان|سن|🪥|🦷|brush*|فرشاه|mouth|فم|الفم|teeth|breath|smile*|ابتسامه|تبسم|fitrah|فطره|الفطره|سنن الفطره|hygiene|mouthwash',bd:{home:1}},function(c){
    var s=g('rotate(-12 -8 -50)',R(-12,-98,7,70,c.a2,{rx:3})+R(-15,-100,13,20,c.white,{rx:2,st:c.grey,sw:1})+L('M-13 -94 h9 M-13 -88 h9',c.grey,1,{nl:1}));
    s+=g('rotate(14 12 -50)',R(8,-92,7,64,c.woodL,{rx:3})+R(8,-92,7,13,c.cream,{st:c.woodL,sw:1})+L('M10 -91 v10 M13 -91 v10',c.woodL,0.8,{nl:1}));
    s+=P('M-24 -46 H24 L19 0 H-19 Z',c.a)+L('M-22 -30 H22',c.aL,3,{nl:1})+E(0,-46,24,5,c.aD);
    return s; });
  B.def('soap',{z:'S',S:54,ar:1.6,k:'soap|صابون|🧼|wash* hands|غسل اليدين|يغسل يديه|hands|اليدين|clean*|نظافه|النظافه|نظيف|نظف|towel|منشفه|bath*|استحمام|اغتسال|غسل الجمعه|shower|bubbles|فقاعات|germs|جراثيم|hygiene|طهاره|طاهر|النظافه من الايمان|cleanliness',bd:{home:1}},function(c){
    var s=E(-18,-6,40,8,c.aL)+R(-44,-32,52,24,c.pink,{rx:10})+R(-36,-27,36,7,'#fff',{rx:3.5,op:0.5,nl:1});
    s+=C(-30,-46,9,c.waterL,{st:c.water,sw:1})+C(-12,-58,6.4,c.waterL,{st:c.water,sw:1})+C(-4,-42,5,c.waterL,{st:c.water,sw:1})+C(-40,-66,4.4,c.waterL,{st:c.water,sw:1})+C(-33,-49,2.2,'#fff',{nl:1});
    s+=P('M28 0 V-62 Q28 -70 36 -70 H62 Q70 -70 70 -62 V0 Z',c.white,{st:c.stoneL,sw:1})+R(28,-22,42,7,c.a)+R(28,-12,42,3,c.a,{nl:1})+L('M36 -64 V-26 M50 -64 V-26',c.stoneL,1,{nl:1});
    return s; });
  B.def('comb',{z:'S',S:60,ar:1.3,k:'comb|مشط|hair|شعر الراس|✂|💇|scissors|مقص|nail*|اظافر|الاظافر|ظفر|تقليم|clip*|قص|trim|mirror|مراه|المراه|🪞|groom*|تزين|زينه|neat|انيق|appearance|مظهر|المظهر|shave|حلق|شارب|الشارب|اناقه|tidy look|حسن الهييه',bd:{home:1}},function(c){
    var s=E(-24,-56,24,32,c.gold)+E(-24,-56,19,27,c.waterL)+P('M-36 -66 Q-30 -78 -20 -78',  'none',{st:'#fff',sw:3,op:0.8,nl:1,lf:'none'})+R(-29,-24,10,24,c.goldD,{rx:4}), i;
    s+=R(8,-36,54,12,c.a,{rx:3}); for(i=0;i<10;i++) s+=R(10+i*5.2,-24,2.6,18,c.a);
    s+=g('rotate(24 36 -70)',L('M30 -52 L44 -92 M42 -52 L28 -92',c.grey,3.4,{lw:1.6})+C(28,-48,6,'none',{st:c.red,sw:3,lf:'none'})+C(44,-48,6,'none',{st:c.red,sw:3,lf:'none'}));
    return s; });
  B.def('clothes',{z:'S',S:84,ar:0.9,k:'cloth*|ملابس|الملابس|لباس|اللباس|ثياب|ثوب|dress*|يلبس|لبس|👕|👗|🧥|wear*|ارتداء|new clothes|ثياب العيد|modest*|حشمه|حياء|الحياء|haya|ستر|عوره|cover*|hijab|حجاب|اداب اللباس|تيامن|shoes|حذاء|احذيه|shy|خجل',bd:{home:2}},function(c){
    var s=L('M0 -86 q0 -8 6 -8 q7 0 5 7',c.greyD,2.2)+L('M-30 -76 L0 -88 L30 -76',c.woodD,3);
    s+=P('M-12 -84 L-40 -72 L-48 -44 L-34 -40 L-28 -56 V0 H28 V-56 L34 -40 L48 -44 L40 -72 L12 -84 Q0 -74 -12 -84 Z',c.cream,{st:c.stoneL,sw:1})+L('M0 -78 V-50',c.stoneL,1.4)+C(0,-70,1.4,c.a)+C(0,-62,1.4,c.a)+C(0,-54,1.4,c.a)+L('M-28 -6 H28',c.a,2.4);
    return s; });
  B.def('broom',{z:'S',S:76,ar:1.1,k:'broom|مكنسه|sweep*|كنس|يكنس|clean* up|تنظيف|ينظف|نظافه|🧹|🗑|trash|قمامه|نفايات|litter|bin|سله المهملات|اماطه الاذي|الاذي عن الطريق|harm from the road|environment|بييه|البييه|recycl*|تدوير|waste|اسراف|help at home|مساعده في البيت|chores|اعمال المنزل|tidy|يرتب|street clean|شعب الايمان',bd:{city:1,home:1}},function(c){
    var s=g('rotate(14 -24 -50)',R(-27,-100,6,74,c.wood,{rx:3})+P('M-38 -28 H-10 L-4 0 H-44 Z',c.gold)+R(-38,-32,28,7,c.red,{rx:2})+L('M-36 -22 L-39 -2 M-30 -22 L-31 -2 M-24 -22 L-23 -2 M-18 -22 L-15 -2 M-12 -22 L-8 -2',c.goldD,1.2));
    s+=P('M10 -50 H50 L45 0 H15 Z',c.a2)+R(6,-58,48,9,mix(c.a2,'#000',0.2),{rx:3})+R(22,-64,16,6,mix(c.a2,'#000',0.2),{rx:2})+L('M22 -42 L24 -8 M30 -42 V-8 M38 -42 L36 -8',mix(c.a2,'#fff',0.4),2,{nl:1});
    return s; });
  B.def('wateringCan',{z:'S',S:60,ar:1.4,k:'watering|يسقي الزرع|ري|water the plants|plant care|يزرع|زرع|nurtur*|رعايه|يرعي|raise|care for|consistent|مداومه|ادومها|small consistent deeds|قليل دايم|gardener|بستاني|tend|cultivat*|تزكيه|grow good|habit*|عادات',bd:{garden:3,farm:1}},function(c){
    var s=R(-26,-52,48,52,c.a,{rx:5})+L('M-26 -34 H22',c.aL,3,{nl:1})+P('M22 -40 L52 -66 L58 -60 L22 -22 Z',c.a)+g('rotate(42 56 -64)',R(48,-72,16,14,c.aD,{rx:3}))+P('M-26 -46 Q-52 -44 -50 -24 Q-48 -8 -26 -10 V-17 Q-42 -16 -43 -26 Q-43 -38 -26 -38 Z',c.aD)+P('M-14 -52 Q-2 -76 12 -52',  'none',{st:c.aD,sw:4.4,lf:'none',lw:2.4});
    s+=L('M62 -66 q8 6 8 20 M66 -72 q14 8 14 28 M58 -60 q4 6 3 16',c.water,2,{da:'3 4'});
    return s; });
  B.def('perfume',{z:'S',S:56,ar:0.8,k:'perfume|عطر|العطر|طيب|الطيب|مسك|المسك|musk|عود|fragran*|scent|رايحه|smell*|good companion|الجليس الصالح|حامل المسك|يتطيب|ريحان|bukhur|بخور|friday sunnah|سنن الجمعه|good company|الصحبه الصالحه|friend|صديق|صاحب',bd:{home:1}},function(c){
    return P('M-24 0 Q-30 -4 -30 -14 V-40 Q-30 -56 0 -58 Q30 -56 30 -40 V-14 Q30 -4 24 0 Z',c.aL,{st:c.a,sw:1.4})+P('M-29 -30 H29 V-14 Q30 -4 24 -1 H-24 Q-30 -4 -29 -14 Z',c.a,{nl:1,op:0.75})+R(-8,-70,16,13,c.gold,{rx:2})+R(-11,-82,22,13,c.goldD,{rx:4})+PL(star(0,-28,10,4.4,8,0),c.goldL)+
      L('M22 -84 q8 -4 10 -12 M30 -76 q10 -2 14 -10',c.aL,1.6,{op:0.8})+C(36,-98,2,c.aL,{nl:1})+C(46,-88,1.6,c.aL,{nl:1}); });
  B.def('umbrella',{z:'S',S:74,ar:1.1,env:'o',k:'umbrella|مظله|☂|☔|shelter*|cover|shade|rainy day|يوم ماطر'},function(c){
    return L('M0 -64 V-8 Q0 2 -10 0',c.woodD,3)+P('M-50 -58 Q-46 -98 0 -100 Q46 -98 50 -58 Q38 -68 25 -58 Q12 -68 0 -58 Q-12 -68 -25 -58 Q-38 -68 -50 -58 Z',c.a)+P('M0 -100 Q-18 -84 -25 -58 Q-12 -68 0 -58 Q12 -68 25 -58 Q18 -84 0 -100 Z',c.aL,{nl:1})+L('M0 -100 v-5',c.woodD,2.4); });

  /* ───────────── UNITY / FREEDOM SYMBOLS ───────────── */
  B.def('rope',{z:'S',S:50,ar:1.9,k:'rope|حبل|حبال|knot|عقده|hold fast|اعتصموا|واعتصموا|حبل الله|bond|رابطه|العروه الوثقي|tie|يربط|ربط|tug|strong bond|firm handhold|connected|مترابطين|tether|اعقلها',bd:{}},function(c){
    var r=mix(c.sandD,c.wood,0.4);
    return P('M-86 -34 Q-50 -52 -24 -36',  'none',{st:r,sw:9,lf:'none',lw:4})+P('M86 -34 Q50 -52 24 -36',  'none',{st:r,sw:9,lf:'none',lw:4})+P('M-26 -38 Q-10 -64 14 -44 Q30 -28 12 -16 Q-6 -8 -18 -24 Q-22 -34 -4 -40 Q16 -44 26 -34',  'none',{st:r,sw:9,lf:'none',lw:4})+
      L('M-78 -38 l6 6 M-62 -44 l6 7 M-46 -46 l5 8 M78 -38 l-6 6 M62 -44 l-6 7 M46 -46 l-5 8',c.woodD,1.3,{nl:1}); });
  B.def('sticks',{z:'S',S:62,ar:1.2,k:'bundle|حزمه|sticks|عصي|اعواد|عود|divis*|تفرق|التفرق|فرقه|divided|متفرقين|break*|ينكسر|تنكسر|كسر|الاتحاد قوه|يد الله مع الجماعه|divide and conquer|فرق تسد|white bull|strength in unity|united we|لا تنازعوا|تنازع|disput*|خلاف|نزاع|quarrel',bd:{}},function(c){
    var s='', i; for(i=0;i<7;i++){ var x=-24+i*8; s+=g('rotate('+((i-3)*3)+' '+x+' -50)',R(x-4,-98+(i%3)*4,8,96-(i%2)*6,i%2?c.wood:c.woodL,{rx:4})); }
    s+=R(-34,-66,68,9,c.a,{rx:3})+R(-34,-34,68,9,c.a,{rx:3})+P('M26 -62 q14 -4 16 -16 q-10 2 -16 10 Z',c.a);
    return s; });
  B.def('chain',{z:'S',S:44,ar:2.6,k:'chain*|سلسله|سلاسل|قيد|قيود|free*|حريه|الحريه|تحرير|حر|احرار|slave*|عبيد|رق|عتق|اعتق|bilal|بلال|captive*|اسير|اسري|prison|سجن|سجين|liberat*|shackle*|اغلال|تعذيب|احد احد|persecut*|اضطهاد|ياسر|yasir|sumayya|سميه|ammar|عمار|khabbab|خباب|boycott|شعب ابي طالب|torment|عذبوا|يعذب|oppress*|bad habit|addiction|ادمان|trap|مصيده|فخ',bd:{}},function(c){
    function lk(x,y,rot){ return g('rotate('+rot+' '+x+' '+y+')',R(x-15,y-8,30,16,'none',{rx:8,st:c.greyD,sw:5.4,lf:'none',lw:2.4})); }
    return lk(-78,-30,0)+lk(-56,-30,90)+lk(-34,-32,-14)+lk(40,-30,10)+lk(62,-30,90)+lk(84,-30,0)+L('M-12 -52 l6 12 M0 -58 v14 M12 -52 l-6 12',c.gold,2.4)+PL(star(0,-22,7,3,4,0),c.goldL,{nl:1}); });
})();
