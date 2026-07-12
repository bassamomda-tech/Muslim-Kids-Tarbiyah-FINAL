/* parents-printables.js — متجر المطبوعات التربوية (Printables Shop)
   ─────────────────────────────────────────────────────────────────
   حزمٌ مطبوعةٌ كاملةٌ للأطفال — كلُّ حزمةٍ تُطبَع بالكامل مجّاناً (صدقة جارية).
   كلُّ زرِّ طباعةٍ يبني المستندَ الكاملَ (عدّةُ صفحاتِ A4) لا عيّنةً واحدة.

   البنية:
     window.PARENTS_PRINTABLES.sets   ← بطاقات المنتجات (بيانات)
     window.PARENTS_PRINTABLES.build  ← دوالُّ تبني الحزمةَ كاملةً (HTML) حسب اللغة
   منطقُ العرض داخل parents.html. */
(function(){
  var ar2 = function(o, ar){ return o ? (ar ? o.ar : o.en) : ''; };

  /* ── shared print-sheet helpers ─────────────────────────── */
  function paperHead(ar, ic, title, sub){
    return '<div class="psh-head">'
      + '<div class="psh-brand">'+(ar?'تربية الطفل المسلم · ركن الأهل':'Muslim Kids\u2019 Tarbiyah · Parents Corner')+'</div>'
      + '<h2 class="psh-title">'+ic+' '+title+'</h2>'
      + (sub?'<div class="psh-sub">'+sub+'</div>':'')
      + '</div>';
  }
  function paperFoot(ar){
    return '<div class="psh-foot">'+(ar
      ? 'حزمةٌ مجّانيّةٌ كاملة — تربية الطفل المسلم · صدقةٌ جارية 💚'
      : 'A complete, free pack — Muslim Kids\u2019 Tarbiyah · an ongoing charity 💚')+'</div>';
  }
  function slot(ar, label){
    return '<div class="psh-slot"><span class="psh-slot-ic">🖼️</span>'
      + '<span class="psh-slot-tx">'+label+'</span></div>';
  }
  /* one A4 sheet (page-breaks in print) */
  function sheet(inner){ return '<div class="psh-sheet">'+inner+'</div>'; }
  function page(ar, ic, title, sub, body){ return sheet(paperHead(ar,ic,title,sub)+body+paperFoot(ar)); }
  /* content primitives */
  function actH(t){ return '<b class="psh-act-h">'+t+'</b>'; }
  function traceRow(t){ return '<div class="psh-trace-row">'+t+'</div>'; }
  function tfList(rows){ return rows.map(function(r){ return '<div class="psh-tf"><span>'+r+'</span><span class="tfb"><b>✓</b><b>✗</b></span></div>'; }).join(''); }
  function countRow(emo,n,label){ var e=''; for(var i=0;i<n;i++)e+=emo; return '<div class="psh-count"><span class="emos">'+e+'</span><span class="cl">'+label+'</span><span class="box"></span></div>'; }
  function matchBlock(L,R){
    var l=L.map(function(x){ return '<li><span class="m-ic">'+x[0]+'</span> '+x[1]+'</li>'; }).join('');
    var r=R.map(function(x){ return '<li>'+x+' <span class="m-dot">◯</span></li>'; }).join('');
    return '<div class="psh-match"><ul class="m-col">'+l+'</ul><ul class="m-col m-col-r">'+r+'</ul></div>';
  }
  function bank(words){ return '<div class="psh-bank">'+words.map(function(w){ return '<b>'+w+'</b>'; }).join('')+'</div>'; }
  function sortCols(a,b){ return '<div class="psh-sort"><div class="col"><h5>'+a+'</h5></div><div class="col"><h5>'+b+'</h5></div></div>'; }
  function scramble(word){
    var a=word.replace(/\s/g,'').split(''); for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i];a[i]=a[j];a[j]=t; }
    var boxes=''; for(var k=0;k<word.replace(/\s/g,'').length;k++) boxes+='<i></i>';
    return '<div class="psh-scr"><span class="letters">'+a.join(' ')+'</span><span class="ans">'+boxes+'</span></div>';
  }
  function stickerGrid(stk){
    return '<div class="psh-stk-grid">'+stk.map(function(s){
      return '<div class="psh-stk" style="--sc:'+s[2]+'"><span class="psh-stk-ic">'+s[0]+'</span><span class="psh-stk-tx">'+s[1]+'</span></div>';
    }).join('')+'</div>';
  }
  function certPage(ar, emoji, color, title, recognition){
    return sheet('<div class="psh-cert" style="border-color:'+color+'">'
      + '<div class="psh-cert-seal">'+emoji+'</div>'
      + '<div class="psh-cert-kick">'+(ar?'تربية الطفل المسلم · ركن الأهل':'Muslim Kids\u2019 Tarbiyah · Parents Corner')+'</div>'
      + '<div class="psh-cert-title" style="color:'+color+'">'+title+'</div>'
      + '<div class="psh-cert-lbl">'+(ar?'تُمنَحُ بكلِّ فخرٍ إلى':'Proudly awarded to')+'</div>'
      + '<div class="psh-cert-line psh-cert-name">&nbsp;</div>'
      + '<div class="psh-cert-state">'+recognition+'</div>'
      + '<div class="psh-cert-line">&nbsp;</div>'
      + '<div class="psh-cert-row"><div><div class="psh-cert-line sm">&nbsp;</div><span>'+(ar?'التاريخ':'Date')+'</span></div>'
      + '<div class="psh-cert-star">🌟</div>'
      + '<div><div class="psh-cert-line sm">&nbsp;</div><span>'+(ar?'توقيعُ ولِيِّ الأمر':'Parent\u2019s signature')+'</span></div></div>'
      + '<div class="psh-cert-foot">'+(ar?'بارك اللهُ فيك وزادك علماً وإيماناً وخُلُقاً':'May Allah bless you and increase you in knowledge, faith and character')+'</div>'
      + '</div>');
  }

  /* ════════════ FULL PACK BUILDERS (complete multi-page A4 docs) ════════════ */
  var build = {

    /* 🎨 ACTIVITY PACK — 10 pages */
    activitySheet: function(ar){
      var P=[];
      /* 1 · pillars: match + trace + color */
      var pil = ar
        ? [['🕋','الشهادة'],['🤲','الصلاة'],['🌙','الصيام'],['💰','الزكاة'],['🕋','الحج']]
        : [['🕋','Shahada'],['🤲','Salah'],['🌙','Sawm'],['💰','Zakah'],['🕋','Hajj']];
      var pilR = ar
        ? ['حجُّ بيتِ الله لمن استطاع','خمسُ صلواتٍ في اليوم','لا إله إلا الله محمدٌ رسولُ الله','صومُ شهرِ رمضان','إخراجُ حقِّ الفقير']
        : ['Pilgrimage for those able','Five prayers a day','No god but Allah, Muhammad is His Messenger','Fasting Ramadan','Giving the poor\u2019s right'];
      P.push(page(ar,'🎨', ar?'أركانُ الإسلام':'Pillars of Islam', ar?'صِل كلَّ ركنٍ بمعناه':'Match each pillar to its meaning',
        '<div class="psh-act">'+actH(ar?'صِل كلَّ ركنٍ بمعناه (ارسُم خطّاً):':'Match each pillar to its meaning (draw a line):')+matchBlock(pil,pilR)+'</div>'
        +'<div class="psh-act">'+actH(ar?'تتبّعِ الكلمةَ بالقلم:':'Trace the word:')+'<div class="psh-trace">'+(ar?'بِسْمِ اللهِ':'Bismillah')+'</div></div>'));
      /* 2 · wudu order */
      var wudu = ar
        ? ['النيّةُ وغسلُ الكفّين','المضمضةُ والاستنشاق','غسلُ الوجه','غسلُ اليدين إلى المرفقين','مسحُ الرأسِ والأذنين','غسلُ الرجلين إلى الكعبين']
        : ['Intention & washing hands','Rinsing mouth & nose','Washing the face','Washing arms to elbows','Wiping head & ears','Washing feet to ankles'];
      P.push(page(ar,'💧', ar?'خطواتُ الوُضوء':'Steps of Wudu', ar?'رتّبِ الخطواتِ (اكتبِ الرقم ١–٦)':'Order the steps (write 1–6)',
        '<div class="psh-act">'+wudu.slice().sort(function(){return Math.random()-.5;}).map(function(w){
          return '<div class="psh-tf"><span>'+w+'</span><span class="tfb"><b>&nbsp;</b></span></div>'; }).join('')+'</div>'
        +'<div class="psh-tip">💧 '+(ar?'تلميح: ابدأ بالنيّة، واختم بغسلِ الرجلين.':'Hint: start with intention, end with washing the feet.')+'</div>'));
      /* 3 · prayers ↔ rak'ahs */
      var pr = ar
        ? [['🌄','الفجر'],['☀️','الظهر'],['🌤️','العصر'],['🌇','المغرب'],['🌃','العشاء']]
        : [['🌄','Fajr'],['☀️','Dhuhr'],['🌤️','Asr'],['🌇','Maghrib'],['🌃','Isha']];
      var prR = ar ? ['٤ ركعات','٢ ركعتان','٤ ركعات','٤ ركعات','٣ ركعات'] : ['4 rak\u2019ahs','2 rak\u2019ahs','4 rak\u2019ahs','4 rak\u2019ahs','3 rak\u2019ahs'];
      P.push(page(ar,'🕌', ar?'الصلواتُ الخمس':'The Five Prayers', ar?'صِل كلَّ صلاةٍ بعددِ ركعاتها':'Match each prayer to its rak\u2019ahs',
        '<div class="psh-act">'+matchBlock(pr,prR)+'</div>'));
      /* 4 · Arabic alphabet tracing */
      var letters = 'ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن هـ و ي'.split(' ');
      P.push(page(ar,'✏️', ar?'تتبُّعُ الحروفِ العربية':'Arabic Letter Tracing', ar?'تتبّعِ الحروفَ بالقلم':'Trace the letters with a pencil',
        '<div class="psh-arabrow">'+letters.map(function(l){ return '<span>'+l+'</span>'; }).join('')+'</div>'
        +'<div class="psh-act" style="margin-top:1rem">'+actH(ar?'والآن تتبّعِ اسمَك:':'Now trace your name:')+traceRow('&nbsp;')+traceRow('&nbsp;')+'</div>'));
      /* 5 · phrase tracing */
      var phr = ar ? ['الْحَمْدُ لِلّٰه','اللهُ أَكْبَر','سُبْحَانَ الله','لَا إِلٰهَ إِلَّا الله'] : ['Alhamdulillah','Allahu Akbar','SubhanAllah','La ilaha illa Allah'];
      P.push(page(ar,'🖊️', ar?'تتبُّعُ الأذكار':'Tracing the Adhkar', ar?'تتبّعِ الذكرَ ثمّ احفَظه':'Trace each dhikr then memorise it',
        phr.map(traceRow).join('')));
      /* 6 · count & write */
      P.push(page(ar,'🔢', ar?'عُدَّ واكتُب':'Count & Write', ar?'عُدَّ الأشياءَ واكتبِ العددَ في المربّع':'Count and write the number in the box',
        countRow('🕌',3,ar?'كم مسجداً؟':'How many mosques?')
        +countRow('🌙',5,ar?'كم هلالاً؟':'How many moons?')
        +countRow('⭐',7,ar?'كم نجمة؟':'How many stars?')
        +countRow('📖',4,ar?'كم مصحفاً؟':'How many Qur\u2019ans?')
        +countRow('🕋',2,ar?'كم كعبة؟':'How many Ka\u2019bahs?')
        +countRow('🤲',6,ar?'كم يدٍ ترفعُ الدعاء؟':'How many raised hands?')));
      /* 7 · true / false */
      P.push(page(ar,'✅', ar?'صَح أم خطأ؟':'True or False?', ar?'ضع دائرةً حول ✓ أو ✗':'Circle ✓ or ✗',
        tfList(ar
          ? ['الصلواتُ المفروضةُ خمسٌ في اليوم','نصومُ شهرَ شعبان','نبدأُ الطعامَ بالتسمية «بسم الله»','الكذبُ خُلُقٌ حسن','نُسلِّمُ بأيدينا اليمنى','القرآنُ كلامُ الله']
          : ['There are five daily prayers','We fast the month of Sha\u2019ban','We begin food saying \u201CBismillah\u201D','Lying is good manners','We greet with the right hand','The Qur\u2019an is the word of Allah'])));
      /* 8 · good deed / bad deed sorting */
      P.push(page(ar,'⚖️', ar?'أعمالٌ حسنةٌ وأعمالٌ سيّئة':'Good Deeds & Bad Deeds', ar?'صنِّفِ الكلماتِ في العمودِ الصحيح':'Sort the words into the right column',
        bank(ar
          ? ['الصدق','الغِيبة','بِرُّ الوالدين','الكذب','مساعدةُ الجار','الأنانيّة','إفشاءُ السلام','السخرية']
          : ['Honesty','Backbiting','Honoring parents','Lying','Helping a neighbour','Selfishness','Spreading salam','Mockery'])
        +sortCols(ar?'😇 عملٌ حسن':'😇 Good deed', ar?'🚫 عملٌ سيّئ':'🚫 Bad deed')));
      /* 9 · unscramble */
      var scr = ar ? ['صلاة','صيام','زكاة','قرآن','مسجد','صدق'] : ['salah','sawm','zakah','quran','mosque','truth'];
      P.push(page(ar,'🔤', ar?'رتّبِ الحروف':'Unscramble the Letters', ar?'رتّبِ الحروفَ لتُكوِّنَ الكلمة':'Rearrange the letters to form the word',
        scr.map(scramble).join('')));
      /* 10 · draw & color */
      P.push(page(ar,'🖍️', ar?'ارسُم ولوِّن':'Draw & Color', ar?'ارسُم في الإطارِ ثمّ لوِّن':'Draw inside the frame then color',
        '<div class="psh-act">'+actH(ar?'ارسُم مسجدَك المفضّل:':'Draw your favourite mosque:')+slot(ar,ar?'مساحةُ رسمٍ وتلوين':'Drawing & coloring space')+'</div>'
        +'<div class="psh-act">'+actH(ar?'ارسُم مائدةَ إفطارِك في رمضان:':'Draw your Ramadan iftar table:')+slot(ar,ar?'مساحةُ رسمٍ وتلوين':'Drawing & coloring space')+'</div>'));
      return P.join('');
    },

    /* 🌟 STICKER PACK — 6 sheets of cut-out stickers */
    stickerSheet: function(ar){
      var sets = ar ? [
        [ar?'نجومُ التحفيز':'', [['⭐','نجمةُ اليوم','#F5A623'],['🏅','ممتاز','#D4A017'],['🌟','نجمُ الأسبوع','#7D3C98'],['💎','رائع','#117A8B'],['👏','أحسنت','#2B8C7E'],['🎉','مبروك','#C0392B'],['✅','أنجزتَه','#5B6BD6'],['💚','فخورون بك','#1F8A5B'],['🔥','بطلٌ حقيقي','#E67E22']]],
        ['أبطالُ الصلاة', [['🌄','بطلُ الفجر','#2C4C8C'],['☀️','حافظُ الظهر','#1F8A5B'],['🌤️','نجمُ العصر','#16A085'],['🌇','التزمَ المغرب','#8E44AD'],['🌃','ثابتٌ في العشاء','#34495E'],['🕌','صلّى في المسجد','#117A8B'],['🤲','خشعَ في صلاته','#2980B9'],['⏰','صلّى في وقتها','#D4A017'],['🧎','أتمَّ الركوعَ والسجود','#7D3C98']]],
        ['رمضان', [['🌙','صائمٌ صغير','#16A085'],['🍽️','أفطرَ على تمر','#E67E22'],['🌃','صلّى التراويح','#34495E'],['📖','ختمَ جزءاً','#2980B9'],['🤲','دعا عند الفطر','#1F8A5B'],['💰','تصدّقَ اليوم','#D4A017'],['🌅','قامَ للسحور','#F5A623'],['🕌','اعتكفَ ساعة','#8E44AD'],['✨','ليلةُ القدر','#7D3C98']]],
        ['الأخلاقُ والآداب', [['😇','صدَق','#8E44AD'],['🫶','برَّ والديه','#C0392B'],['🤝','شاركَ غيرَه','#2B8C7E'],['🧹','ساعدَ أهلَه','#E67E22'],['🙂','ابتسمَ في وجهِ أخيه','#F5A623'],['🤫','حفظَ لسانَه','#117A8B'],['🕊️','عفا وسامح','#1F8A5B'],['🙏','قال شكراً','#2980B9'],['🚪','استأذنَ قبلَ الدخول','#5B6BD6']]],
        ['القرآنُ والعلم', [['📖','قارئُ القرآن','#2980B9'],['🧠','حفظَ سورة','#7D3C98'],['✏️','أتمَّ واجبه','#5B6BD6'],['📚','تعلّمَ شيئاً جديداً','#117A8B'],['🎧','أنصتَ للدرس','#16A085'],['🗣️','سمّعَ حفظه','#1F8A5B'],['🌱','راجعَ وردَه','#2B8C7E'],['⭐','أتقنَ التجويد','#D4A017'],['🏫','بكّرَ للحلقة','#E67E22']]],
        ['الأعمالُ الصالحة', [['🤲','دعا لوالديه','#1F8A5B'],['💧','لم يُسرِفْ في الماء','#2980B9'],['🐈','رفقَ بالحيوان','#E67E22'],['🌳','لم يؤذِ شجرة','#16A085'],['🗑️','أماطَ الأذى','#2B8C7E'],['🍞','أطعمَ محتاجاً','#D4A017'],['👋','أفشى السلام','#8E44AD'],['💤','نامَ على ذكرٍ','#34495E'],['🌅','أذكارُ الصباح','#F5A623']]]
      ] : [
        ['Reward Stars', [['⭐','Star of the Day','#F5A623'],['🏅','Excellent','#D4A017'],['🌟','Star of the Week','#7D3C98'],['💎','Superb','#117A8B'],['👏','Well done','#2B8C7E'],['🎉','Congrats','#C0392B'],['✅','You did it','#5B6BD6'],['💚','Proud of you','#1F8A5B'],['🔥','True hero','#E67E22']]],
        ['Prayer Heroes', [['🌄','Fajr Hero','#2C4C8C'],['☀️','Dhuhr Keeper','#1F8A5B'],['🌤️','Asr Star','#16A085'],['🌇','Maghrib Done','#8E44AD'],['🌃','Steady at Isha','#34495E'],['🕌','Prayed at masjid','#117A8B'],['🤲','Focused in salah','#2980B9'],['⏰','Prayed on time','#D4A017'],['🧎','Completed ruku & sujud','#7D3C98']]],
        ['Ramadan', [['🌙','Little Faster','#16A085'],['🍽️','Broke fast on dates','#E67E22'],['🌃','Prayed Taraweeh','#34495E'],['📖','Finished a juz','#2980B9'],['🤲','Dua at iftar','#1F8A5B'],['💰','Gave charity','#D4A017'],['🌅','Woke for suhur','#F5A623'],['🕌','I\u2019tikaf hour','#8E44AD'],['✨','Laylat al-Qadr','#7D3C98']]],
        ['Manners & Adab', [['😇','Was honest','#8E44AD'],['🫶','Honored parents','#C0392B'],['🤝','Shared','#2B8C7E'],['🧹','Helped at home','#E67E22'],['🙂','Smiled at others','#F5A623'],['🤫','Guarded the tongue','#117A8B'],['🕊️','Forgave','#1F8A5B'],['🙏','Said thank you','#2980B9'],['🚪','Asked permission','#5B6BD6']]],
        ['Qur\u2019an & Learning', [['📖','Qur\u2019an Reader','#2980B9'],['🧠','Memorized a surah','#7D3C98'],['✏️','Finished homework','#5B6BD6'],['📚','Learned something new','#117A8B'],['🎧','Listened to the lesson','#16A085'],['🗣️','Recited by heart','#1F8A5B'],['🌱','Reviewed portion','#2B8C7E'],['⭐','Mastered tajwid','#D4A017'],['🏫','Early to class','#E67E22']]],
        ['Good Deeds', [['🤲','Dua for parents','#1F8A5B'],['💧','Saved water','#2980B9'],['🐈','Kind to animals','#E67E22'],['🌳','Protected a tree','#16A085'],['🗑️','Removed harm','#2B8C7E'],['🍞','Fed the needy','#D4A017'],['👋','Spread salam','#8E44AD'],['💤','Slept on dhikr','#34495E'],['🌅','Morning adhkar','#F5A623']]]
      ];
      return sets.map(function(g){
        return page(ar,'🌟', (ar?'ملصقاتٌ · ':'Stickers · ')+g[0], ar?'اطبَع · قُصَّ على الحدود · الصِق على لوحةِ طفلك':'Print · cut on the edges · stick on the chart',
          stickerGrid(g[1])+'<div class="psh-tip">✂️ '+(ar?'قُصَّ كلَّ ملصقٍ على حدودِه المنقّطة.':'Cut each sticker along its dotted border.')+'</div>');
      }).join('');
    },

    /* 🏅 CERTIFICATE PACK — 8 full certificate pages */
    certSheet: function(ar){
      var C = ar ? [
        ['🏅','#7D3C98','شهادةُ تميّزٍ وإنجاز','تقديراً لجهودِه المتميّزةِ وأخلاقِه الطيّبة'],
        ['📖','#1F8A5B','شهادةُ حفظِ القرآن','لإتمامِه حفظَ __________ من كتابِ الله'],
        ['🤲','#2C4C8C','شهادةُ بطلِ الصلاة','لمحافظتِه على الصلواتِ الخمسِ في أوقاتها'],
        ['😇','#C0392B','شهادةُ حُسنِ الخُلُق','لصدقِه وأدبِه وإحسانِه إلى مَن حولَه'],
        ['🌙','#16A085','شهادةُ ختمِ رمضان','لصيامِه وقيامِه واجتهادِه في شهرِ رمضان'],
        ['📿','#117A8B','شهادةُ المحافظةِ على الأذكار','لمداومتِه على أذكارِ الصباحِ والمساء'],
        ['🎓','#D4A017','شهادةُ التخرّج','لإتمامِه رحلةَ التعلّمِ بنجاحٍ وتفوّق'],
        ['⭐','#E67E22','نجمُ الأسبوع','لكونِه قدوةً لإخوانِه في هذا الأسبوع']
      ] : [
        ['🏅','#7D3C98','Certificate of Excellence','In recognition of outstanding effort and fine character'],
        ['📖','#1F8A5B','Qur\u2019an Memorization','For completing the memorization of __________'],
        ['🤲','#2C4C8C','Prayer Hero','For guarding the five daily prayers on time'],
        ['😇','#C0392B','Good Character','For honesty, manners and kindness to others'],
        ['🌙','#16A085','Ramadan Completion','For fasting, night prayer and striving in Ramadan'],
        ['📿','#117A8B','Adhkar Keeper','For steadfastness on morning & evening adhkar'],
        ['🎓','#D4A017','Graduation','For completing the learning journey with success'],
        ['⭐','#E67E22','Star of the Week','For being a role model to peers this week']
      ];
      return C.map(function(c){ return certPage(ar, c[0], c[1], c[2], c[3]); }).join('');
    },

    /* 🗓️ PLANS PACK — 6 pages */
    planSheet: function(ar){
      var P=[];
      var days = ar ? ['السبت','الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة'] : ['Sat','Sun','Mon','Tue','Wed','Thu','Fri'];
      function tableChart(rowLabels, title, headColor){
        var head='<tr><th class="h-name"></th>'+days.map(function(d){ return '<th>'+d+'</th>'; }).join('')+'</tr>';
        var rows=rowLabels.map(function(h){ return '<tr><td class="h-name">'+h+'</td>'+days.map(function(){ return '<td class="h-cell">☐</td>'; }).join('')+'</tr>'; }).join('');
        return '<table class="psh-plan">'+(headColor?'':'')+'<thead>'+head+'</thead><tbody>'+rows+'</tbody></table>';
      }
      /* 1 weekly habits */
      var habits = ar ? ['صلاةُ الفجر','أذكارُ الصباح','وِردُ القرآن','خُلُقٌ حسن','مساعدةُ الأهل','أذكارُ المساء'] : ['Fajr prayer','Morning adhkar','Qur\u2019an portion','Good manners','Helping family','Evening adhkar'];
      P.push(page(ar,'🗓️', ar?'الخطّةُ الأسبوعيّة':'Weekly Plan', ar?'لوّن ☐ كلَّ عادةٍ أتممتَها':'Tick each habit you complete',
        tableChart(habits)));
      /* 2 monthly habit tracker */
      var nums=''; for(var i=1;i<=30;i++){ nums += '<span class="psh-month-d">'+i+'</span>'; }
      var mh = ar ? ['الصلوات الخمس','وِردُ القرآن','الأذكار','عملٌ صالح'] : ['5 prayers','Qur\u2019an','Adhkar','A good deed'];
      P.push(page(ar,'📅', ar?'متتبّعُ العاداتِ الشهري':'Monthly Habit Tracker', ar?'لوّن دائرةَ كلِّ يومٍ أتممتَ فيه عادتك':'Color the circle for each day done',
        mh.map(function(h){ return '<div class="psh-act">'+actH(h)+'<div class="psh-month">'+nums+'</div></div>'; }).join('')));
      /* 3 Ramadan day-by-day */
      var rcols = ar ? ['اليوم','الصيام','التراويح','وِردُ القرآن','صدقة','دعاء'] : ['Day','Fast','Taraweeh','Qur\u2019an','Charity','Dua'];
      var rrows=''; for(var d=1;d<=30;d++){ rrows += '<tr><td class="h-name">'+d+'</td>'+[1,2,3,4,5].map(function(){ return '<td>☐</td>'; }).join('')+'</tr>'; }
      P.push(page(ar,'🌙', ar?'خطّةُ رمضان — يوماً بيوم':'Ramadan Plan — Day by Day', ar?'لوّن ☐ كلَّ عبادةٍ أتممتَها في يومها':'Tick each act of worship completed',
        '<table class="psh-plan"><thead><tr>'+rcols.map(function(c){ return '<th'+(c===rcols[0]?' class="h-name"':'')+'>'+c+'</th>'; }).join('')+'</tr></thead><tbody>'+rrows+'</tbody></table>'));
      /* 4 prayer chart */
      var pr = ar ? ['الفجر','الظهر','العصر','المغرب','العشاء'] : ['Fajr','Dhuhr','Asr','Maghrib','Isha'];
      P.push(page(ar,'🕌', ar?'لوحةُ الصلواتِ الأسبوعيّة':'Weekly Prayer Chart', ar?'لوّن ☐ عندَ أداءِ كلِّ صلاةٍ في وقتها':'Tick each prayer prayed on time',
        tableChart(pr)));
      /* 5 reading log */
      var lg = ar ? ['التاريخ','الكتاب / السورة','الصفحات','التقييم'] : ['Date','Book / Surah','Pages','Rating'];
      var lrows=''; for(var r=0;r<12;r++){ lrows += '<tr>'+lg.map(function(){ return '<td>&nbsp;</td>'; }).join('')+'</tr>'; }
      P.push(page(ar,'📚', ar?'سجلُّ القراءة':'Reading Log', ar?'سجِّل ما تقرؤُه كلَّ يوم':'Record what you read each day',
        '<table class="psh-log"><thead><tr>'+lg.map(function(c){ return '<th>'+c+'</th>'; }).join('')+'</tr></thead><tbody>'+lrows+'</tbody></table>'));
      /* 6 summer plan */
      var goals = ar ? ['هدفُ الحفظ','هدفُ القراءة','مهارةٌ جديدة','عملٌ صالحٌ للأسرة','نشاطٌ رياضي'] : ['Memorization goal','Reading goal','A new skill','A good deed for family','A sport activity'];
      P.push(page(ar,'☀️', ar?'خطّةُ العطلةِ الصيفيّة':'Summer Holiday Plan', ar?'اكتُب أهدافَك واملأِ الفراغ':'Write your goals on the lines',
        goals.map(function(g){ return '<div class="psh-act">'+actH(g+':')+'<div class="psh-note-line"></div></div>'; }).join('')));
      return P.join('');
    },

    /* 🦸 HEROES PACK — hero cards (2/page) + timeline + bio worksheet */
    heroSheet: function(ar){
      var heroes = ar ? [
        {ic:'🕊️',name:'آدم عليه السلام',title:'أبو البشر · أوّلُ الأنبياء',facts:['أوّلُ إنسانٍ خلقَه الله بيدِه','علّمَه اللهُ الأسماءَ كلَّها','تابَ فتابَ اللهُ عليه'],lesson:'التوبةُ تمحو الخطأ، فبادِرْ إليها.'},
        {ic:'🚢',name:'نوح عليه السلام',title:'نبيُّ الصبرِ الطويل',facts:['دعا قومَه ٩٥٠ سنة','صنعَ الفُلكَ بأمرِ الله','نجا ومن آمنَ معه'],lesson:'الصبرُ على الحقِّ طريقُ النجاة.'},
        {ic:'🌟',name:'إبراهيم عليه السلام',title:'خليلُ الرحمن · أبو الأنبياء',facts:['حطّمَ الأصنامَ بيدِه','ألقيَ في النارِ فكانت برداً وسلاماً','بنى الكعبةَ مع ابنِه إسماعيل'],lesson:'التوكُّلُ على اللهِ يصنعُ المعجزات.'},
        {ic:'✋',name:'موسى عليه السلام',title:'كليمُ الله',facts:['كلّمَه اللهُ تكليماً','انشقَّ له البحرُ بعصاه','واجهَ فرعونَ بلا خوف'],lesson:'قوّةُ الحقِّ أعظمُ من قوّةِ الطغاة.'},
        {ic:'🕊️',name:'عيسى عليه السلام',title:'رسولٌ من أولي العزم',facts:['تكلّمَ في المهدِ صبيّاً','أحيا الموتى بإذنِ الله','رفعَه اللهُ إليه'],lesson:'المعجزةُ بإذنِ الله وحدَه.'},
        {ic:'🌙',name:'محمدٌ ﷺ',title:'خاتمُ الأنبياءِ والمرسلين',facts:['أصدقُ الناسِ وأأمنُهم','رحمةٌ للعالمين','بلّغَ الرسالةَ وأدّى الأمانة'],lesson:'اتّبِعْ سنّتَه تنلْ محبّةَ الله.'},
        {ic:'🕊️',name:'أبو بكر الصدّيق',title:'أوّلُ الخلفاءِ الراشدين',facts:['صدّقَ النبيَّ ﷺ بلا تردُّد','رفيقُه في الغار','أنفقَ مالَه كلَّه لله'],lesson:'الصدقُ والكرمُ طريقُ المحبّة.'},
        {ic:'⚖️',name:'عمر بن الخطّاب',title:'الفاروق · أميرُ المؤمنين',facts:['أعزَّ اللهُ به الإسلام','عُرِفَ بعدلِه الشديد','فتحَ اللهُ على يدِه بلاداً كثيرة'],lesson:'العدلُ يبني الأوطانَ والقلوب.'},
        {ic:'📖',name:'عثمان بن عفّان',title:'ذو النورين',facts:['جمعَ المسلمينَ على مصحفٍ واحد','جهّزَ جيشَ العُسرةِ بمالِه','عُرِفَ بحيائِه الشديد'],lesson:'الحياءُ والبذلُ خُلُقُ الكرام.'},
        {ic:'🦁',name:'عليّ بن أبي طالب',title:'بابُ مدينةِ العلم',facts:['أوّلُ الصبيانِ إسلاماً','نامَ في فراشِ النبيِّ ﷺ ليلةَ الهجرة','عُرِفَ بعلمِه وشجاعتِه'],lesson:'العلمُ والشجاعةُ يجتمعان في البطل.'},
        {ic:'⚔️',name:'خالد بن الوليد',title:'سيفُ اللهِ المسلول',facts:['قائدٌ لم يُهزَمْ في معركة','أسلمَ قبلَ فتحِ مكّة','قادَ الجيوشَ بحكمةٍ وشجاعة'],lesson:'الشجاعةُ مع التوكُّلِ تصنعُ الأبطال.'},
        {ic:'📣',name:'بلال بن رباح',title:'مؤذّنُ الرسولِ ﷺ',facts:['صبرَ على التعذيبِ وقال: أحدٌ أحد','أوّلُ مؤذّنٍ في الإسلام','رفعَه اللهُ بالإيمان'],lesson:'الإيمانُ يرفعُ صاحبَه مهما ضعُف.'},
        {ic:'🎓',name:'الإمامُ البخاري',title:'أميرُ المؤمنينَ في الحديث',facts:['حفظَ آلافَ الأحاديثِ صغيراً','دعت له أمُّه فردَّ اللهُ بصرَه','جمعَ أصحَّ كتابٍ بعد القرآن'],lesson:'الدعاءُ والجدُّ يصنعان العلماء.'},
        {ic:'📚',name:'الإمامُ الشافعي',title:'ناصرُ السنّة',facts:['حفظَ القرآنَ في السابعة','كتبَ العلمَ على العظامِ لفقرِه','أسّسَ علمَ أصولِ الفقه'],lesson:'الفقرُ لا يمنعُ طلبَ العلم.'},
        {ic:'⛓️',name:'الإمامُ أحمد بن حنبل',title:'إمامُ أهلِ السنّة',facts:['رحلَ آلافَ الأميالِ لطلبِ الحديث','ثبتَ على الحقِّ في المحنة','صبرَ على السجنِ ولم يتراجَعْ'],lesson:'الثباتُ على الحقِّ شرفٌ عظيم.'},
        {ic:'🛡️',name:'نُسيبةُ بنتُ كعب',title:'المجاهدةُ يومَ أُحُد',facts:['دافعَتْ عن النبيِّ ﷺ بنفسِها','ثبتَتْ حين فرَّ كثيرون','ضربَ لها النبيُّ ﷺ المثلَ في الثبات'],lesson:'البطولةُ للفتياتِ أيضاً.'}
      ] : [
        {ic:'🕊️',name:'Adam (AS)',title:'Father of mankind · first prophet',facts:['The first human, created by Allah\u2019s hand','Allah taught him all the names','He repented and Allah accepted it'],lesson:'Repentance erases mistakes — hurry to it.'},
        {ic:'🚢',name:'Nuh (AS)',title:'Prophet of long patience',facts:['Called his people for 950 years','Built the ark by Allah\u2019s command','Was saved with the believers'],lesson:'Patience upon truth is the path to safety.'},
        {ic:'🌟',name:'Ibrahim (AS)',title:'Friend of the Most Merciful',facts:['Broke the idols with his hand','The fire became cool and safe for him','Built the Ka\u2019bah with his son'],lesson:'Trust in Allah works wonders.'},
        {ic:'✋',name:'Musa (AS)',title:'The one Allah spoke to',facts:['Allah spoke to him directly','The sea split by his staff','Faced Pharaoh without fear'],lesson:'The power of truth beats tyranny.'},
        {ic:'🕊️',name:'Isa (AS)',title:'A prophet of firm resolve',facts:['Spoke in the cradle as a baby','Revived the dead by Allah\u2019s leave','Allah raised him up'],lesson:'Miracles come only by Allah\u2019s leave.'},
        {ic:'🌙',name:'Muhammad \uFEFB',title:'Seal of the Prophets',facts:['The most truthful and trustworthy','A mercy to all the worlds','Delivered the message faithfully'],lesson:'Follow his sunnah to earn Allah\u2019s love.'},
        {ic:'🕊️',name:'Abu Bakr as-Siddiq',title:'The first caliph',facts:['Believed the Prophet \uFEFB at once','His companion in the cave','Spent all his wealth for Allah'],lesson:'Truthfulness & generosity win love.'},
        {ic:'⚖️',name:'Umar ibn al-Khattab',title:'Al-Farooq · Commander of the Faithful',facts:['Allah honored Islam through him','Known for his strong justice','Many lands opened in his time'],lesson:'Justice builds nations and hearts.'},
        {ic:'📖',name:'Uthman ibn Affan',title:'The one of two lights',facts:['United Muslims on one Mushaf','Equipped the army from his wealth','Known for great modesty'],lesson:'Modesty & giving are noble traits.'},
        {ic:'🦁',name:'Ali ibn Abi Talib',title:'Gate of the city of knowledge',facts:['First boy to accept Islam','Slept in the Prophet\u2019s bed on Hijra night','Known for knowledge and courage'],lesson:'Knowledge and courage meet in a hero.'},
        {ic:'⚔️',name:'Khalid ibn al-Walid',title:'The Drawn Sword of Allah',facts:['A commander never defeated','Accepted Islam before Makkah\u2019s conquest','Led armies with wisdom & courage'],lesson:'Courage with trust makes heroes.'},
        {ic:'📣',name:'Bilal ibn Rabah',title:'The Prophet\u2019s muezzin',facts:['Endured torture saying: One, One','The first muezzin in Islam','Raised high by his faith'],lesson:'Faith raises a person however weak.'},
        {ic:'🎓',name:'Imam al-Bukhari',title:'Leader in hadith',facts:['Memorized thousands of hadith young','His mother\u2019s dua restored his sight','Compiled the soundest book after Qur\u2019an'],lesson:'Dua and effort make scholars.'},
        {ic:'📚',name:'Imam ash-Shafi\u2019i',title:'Helper of the Sunnah',facts:['Memorized Qur\u2019an by age seven','Wrote on bones due to poverty','Founded the science of usul'],lesson:'Poverty never blocks seeking knowledge.'},
        {ic:'⛓️',name:'Imam Ahmad ibn Hanbal',title:'Imam of Ahl as-Sunnah',facts:['Traveled thousands of miles for hadith','Stood firm on truth in trial','Endured prison without backing down'],lesson:'Steadfastness on truth is great honor.'},
        {ic:'🛡️',name:'Nusaybah bint Ka\u2019b',title:'The warrior of Uhud',facts:['Defended the Prophet \uFEFB herself','Stood firm when many fled','The Prophet praised her steadfastness'],lesson:'Heroism is for girls too.'}
      ];
      var P=[];
      for(var i=0;i<heroes.length;i+=2){
        var pair=heroes.slice(i,i+2);
        var cards=pair.map(function(h){
          var facts=h.facts.map(function(f){ return '<li>'+f+'</li>'; }).join('');
          return '<div class="psh-hero">'
            +'<div class="psh-hero-top">'+slot(ar, ar?'ضع صورةَ/رسمةَ البطل ولوِّنها':'Add the hero\u2019s picture & color it')+'</div>'
            +'<div class="psh-hero-name">'+h.ic+' '+h.name+'</div>'
            +'<div class="psh-hero-title">'+h.title+'</div>'
            +'<ul class="psh-hero-facts">'+facts+'</ul>'
            +'<div class="psh-hero-lesson"><b>'+(ar?'الدرس:':'Lesson:')+'</b> '+h.lesson+'</div>'
            +'</div>';
        }).join('');
        P.push(page(ar,'🦸', (ar?'بطاقاتُ الأبطال ':'Hero Cards ')+(Math.floor(i/2)+1), ar?'اقصُصْها · لوِّنها · تعلَّمْ منها':'Cut · color · learn',
          '<div class="psh-hero-grid">'+cards+'</div>'));
      }
      /* timeline page */
      var tl = ar
        ? [['🕊️','الأنبياء','من آدمَ إلى محمدٍ ﷺ — سلسلةُ الهداية'],['🌙','البعثة','نزولُ الوحيِ في غارِ حراء'],['🕋','الهجرة','من مكّةَ إلى المدينة — بدايةُ التقويم'],['🏛️','الخلفاءُ الراشدون','أبو بكر · عمر · عثمان · علي'],['🎓','عصرُ العلماء','البخاري · الشافعي · أحمد وغيرهم']]
        : [['🕊️','The Prophets','From Adam to Muhammad \uFEFB — the chain of guidance'],['🌙','The Revelation','The Qur\u2019an begins in the cave of Hira'],['🕋','The Hijra','Makkah to Madinah — the calendar begins'],['🏛️','The Rightly-Guided Caliphs','Abu Bakr · Umar · Uthman · Ali'],['🎓','The Age of Scholars','al-Bukhari · ash-Shafi\u2019i · Ahmad & others']];
      P.push(page(ar,'⏳', ar?'خطُّ الزمنِ لأبطالِ الإسلام':'Timeline of Islam\u2019s Heroes', ar?'اقرأِ المحطّاتِ بالترتيب':'Read the stations in order',
        tl.map(function(t){ return '<div class="psh-count"><span class="emos">'+t[0]+'</span><span class="cl"><b>'+t[1]+'</b> — '+t[2]+'</span></div>'; }).join('')));
      /* bio worksheet */
      P.push(page(ar,'📝', ar?'بطلي المفضّل — ورقةُ سيرة':'My Favourite Hero — Bio Sheet', ar?'اختَرْ بطلاً واملأِ الفراغ':'Pick a hero and fill in the blanks',
        '<div class="psh-act">'+actH(ar?'اسمُ بطلي:':'My hero\u2019s name:')+'<div class="psh-note-line"></div></div>'
        +'<div class="psh-act">'+actH(ar?'لماذا أحببتُه؟':'Why do I love him?')+'<div class="psh-note-line"></div><div class="psh-note-line"></div></div>'
        +'<div class="psh-act">'+actH(ar?'خُلُقٌ أتعلّمُه منه:':'A trait I learn from him:')+'<div class="psh-note-line"></div></div>'
        +'<div class="psh-act">'+actH(ar?'ارسُمه هنا:':'Draw him here:')+slot(ar,ar?'مساحةُ رسم':'Drawing space')+'</div>'));
      return P.join('');
    },
  };

  /* ════════════ PRODUCT SETS (cards shown in the shop) ════════════ */
  var sets = [
    { id:'activities', icon:'🎨', accent:'#E67E22', build:'activitySheet', pages:10,
      title:{ar:'حزمةُ الأنشطة الإسلامية المطبوعة', en:'Islamic Printable Activity Pack'},
      blurb:{ar:'١٠ أوراقِ عملٍ كاملة: وصلٌ، وترتيبٌ، وتتبُّعُ حروف، وعَدٌّ، وصح/خطأ، وتصنيف، ورسمٌ وتلوين.', en:'10 complete worksheets: matching, ordering, tracing, counting, true/false, sorting, draw & color.'},
      includes:[
        {ar:'وصلُ أركانِ الإسلام · خطواتِ الوضوء · ركعاتِ الصلاة', en:'Matching pillars · wudu steps · prayer rak\u2019ahs'},
        {ar:'تتبُّعُ الحروفِ العربيةِ والأذكار', en:'Arabic letter & adhkar tracing'},
        {ar:'عَدٌّ وكتابة · صح/خطأ · تصنيفُ الأعمال', en:'Count & write · true/false · deed sorting'},
        {ar:'ترتيبُ الحروف · صفحتا رسمٍ وتلوين', en:'Unscramble · two draw-and-color pages'},
      ] },
    { id:'stickers', icon:'🌟', accent:'#1F8A5B', build:'stickerSheet', pages:6,
      title:{ar:'حزمةُ ملصقاتِ التحفيز', en:'Reward Sticker Pack'},
      blurb:{ar:'٦ صفحاتٍ · ٥٤ ملصقاً ملوّناً جاهزاً للقصِّ حسب الموضوع.', en:'6 sheets · 54 color, cut-out stickers organised by theme.'},
      includes:[
        {ar:'نجومُ التحفيز وأبطالُ الصلاة', en:'Reward stars & prayer heroes'},
        {ar:'ملصقاتُ رمضانَ والأعمالِ الصالحة', en:'Ramadan & good-deed stickers'},
        {ar:'ملصقاتُ الأخلاقِ والآداب', en:'Manners & adab stickers'},
        {ar:'ملصقاتُ القرآنِ والعلم', en:'Qur\u2019an & learning stickers'},
      ] },
    { id:'certificates', icon:'🏅', accent:'#D4A017', build:'certSheet', pages:8,
      title:{ar:'حزمةُ شهاداتِ الإنجاز', en:'Achievement Certificates Pack'},
      blurb:{ar:'٨ شهاداتٍ كاملةٍ قابلةٍ للتعبئةِ والطباعةِ والتعليق.', en:'8 complete fillable, printable certificates to frame.'},
      includes:[
        {ar:'تميّزٌ عام · حفظُ القرآن · بطلُ الصلاة', en:'Excellence · Qur\u2019an memorization · Prayer Hero'},
        {ar:'حُسنُ الخُلُق · ختمُ رمضان', en:'Good character · Ramadan completion'},
        {ar:'المحافظةُ على الأذكار', en:'Adhkar keeper'},
        {ar:'التخرّج · نجمُ الأسبوع', en:'Graduation · Star of the Week'},
      ] },
    { id:'plans', icon:'🗓️', accent:'#2980B9', build:'planSheet', pages:6,
      title:{ar:'حزمةُ الخطط التربوية', en:'Tarbiyah Plans Pack'},
      blurb:{ar:'٦ خططٍ ومتتبّعاتٍ كاملةٍ تبني العباداتِ والأخلاقَ بثبات.', en:'6 complete plans & trackers that build worship and character.'},
      includes:[
        {ar:'خطّةٌ أسبوعيّة · متتبّعُ عاداتٍ شهري', en:'Weekly plan · monthly habit tracker'},
        {ar:'خطّةُ رمضانَ يوماً بيوم', en:'Day-by-day Ramadan plan'},
        {ar:'لوحةُ الصلوات · سجلُّ القراءة', en:'Prayer chart · reading log'},
        {ar:'خطّةُ العطلةِ الصيفيّة', en:'Summer-holiday plan'},
      ] },
    { id:'heroes', icon:'🦸', accent:'#8E44AD', build:'heroSheet', pages:10,
      title:{ar:'حزمةُ أبطالِ الإسلام المطبوعة', en:'Heroes of Islam Printable Pack'},
      blurb:{ar:'١٦ بطاقةَ بطلٍ (أنبياء · صحابة · علماء) + خطُّ زمنٍ + ورقةُ سيرة.', en:'16 hero cards (prophets · companions · scholars) + timeline + bio sheet.'},
      includes:[
        {ar:'٦ من الأنبياءِ من آدمَ إلى محمدٍ ﷺ', en:'6 prophets from Adam to Muhammad \uFEFB'},
        {ar:'الخلفاءُ الراشدونَ وأبطالُ الصحابة', en:'The rightly-guided caliphs & companion heroes'},
        {ar:'علماءُ الأمّة: البخاري · الشافعي · أحمد', en:'Scholars: al-Bukhari · ash-Shafi\u2019i · Ahmad'},
        {ar:'خطُّ زمنٍ + ورقةُ سيرةٍ يملؤها الطفل', en:'A timeline + a bio worksheet to fill'},
      ] },
  ];

  window.PARENTS_PRINTABLES = { sets: sets, build: build, tx: ar2 };
})();
