/* parents-printables.js — متجر المطبوعات التربوية (Printables Shop)
   ─────────────────────────────────────────────────────────────────
   حزمٌ مطبوعةٌ للأطفال تُعرَض في ركن الأهل لدعم الموقع (صدقة جارية).
   كل حزمة: عيّنةٌ مجّانيّةٌ حقيقيّةٌ قابلةٌ للطباعة (PDF) + الحزمةُ كاملةً بالدعم.

   البنية:
     window.PARENTS_PRINTABLES.sets   ← بطاقات المنتجات (بيانات)
     window.PARENTS_PRINTABLES.build  ← دوالُّ تبني صفحةَ العيّنة (HTML) حسب اللغة
   منطقُ العرض داخل parents.html (مثل parents-programs.js تماماً). */
(function(){
  var ar2 = function(o, ar){ return o ? (ar ? o.ar : o.en) : ''; };

  /* ── small shared print-sheet helpers ─────────────────────────── */
  function paperHead(ar, ic, title, sub){
    return '<div class="psh-head">'
      + '<div class="psh-brand">'+(ar?'تربية الطفل المسلم · ركن الأهل':'Muslim Kids\u2019 Tarbiyah · Parents Corner')+'</div>'
      + '<h2 class="psh-title">'+ic+' '+title+'</h2>'
      + (sub?'<div class="psh-sub">'+sub+'</div>':'')
      + '</div>';
  }
  function paperFoot(ar){
    return '<div class="psh-foot">'+(ar
      ? 'عيّنةٌ مجّانيّة من «حزم المطبوعات» — تربية الطفل المسلم · صدقةٌ جارية 💚'
      : 'Free sample from the Printable Packs — Muslim Kids\u2019 Tarbiyah · an ongoing charity 💚')+'</div>';
  }
  function slot(ar, label){
    return '<div class="psh-slot"><span class="psh-slot-ic">🖼️</span>'
      + '<span class="psh-slot-tx">'+label+'</span></div>';
  }

  /* ════════════ SAMPLE BUILDERS (real printable A4 pages) ════════════ */
  var build = {

    /* 🎨 ACTIVITY sample — matching + tracing + coloring */
    activitySheet: function(ar){
      var pillars = ar
        ? [['🕋','الشهادة','أشهد أن لا إله إلا الله'],['🤲','الصلاة','خمسُ صلواتٍ في اليوم'],['🌙','الصيام','صومُ شهرِ رمضان'],['💰','الزكاة','إخراجُ حقِّ الفقير']]
        : [['🕋','Shahada','There is no god but Allah'],['🤲','Salah','Five prayers a day'],['🌙','Sawm','Fasting Ramadan'],['💰','Zakah','Giving the poor\u2019s right']];
      var left = pillars.map(function(p){ return '<li><span class="m-ic">'+p[0]+'</span> '+p[1]+'</li>'; }).join('');
      var right = pillars.slice().reverse().map(function(p){ return '<li>'+p[2]+' <span class="m-dot">◯</span></li>'; }).join('');
      return paperHead(ar,'🎨', ar?'حزمةُ الأنشطة — عيّنة':'Activity Pack — Sample', ar?'أركانُ الإسلام: صِل · تتبّع · لوِّن':'Pillars of Islam: match · trace · color')
        + '<div class="psh-act"><b class="psh-act-h">1) '+(ar?'صِل كلَّ ركنٍ بمعناه (ارسُم خطّاً):':'Match each pillar to its meaning (draw a line):')+'</b>'
        + '<div class="psh-match"><ul class="m-col">'+left+'</ul><ul class="m-col m-col-r">'+right+'</ul></div></div>'
        + '<div class="psh-act"><b class="psh-act-h">2) '+(ar?'تتبّعِ الكلمةَ بالقلم:':'Trace the word with a pencil:')+'</b>'
        + '<div class="psh-trace">'+(ar?'بِسْمِ اللهِ':'Bismillah')+'</div></div>'
        + '<div class="psh-act"><b class="psh-act-h">3) '+(ar?'لوِّنِ المسجدَ بألوانِك المفضّلة:':'Color the mosque with your favourite colors:')+'</b>'
        + slot(ar, ar?'مساحةُ تلوين — اطبَعها ولوِّنها (في الحزمة الكاملة ٢٠ صفحةَ تلوين)':'Coloring space — print & color (full pack has 20 coloring pages)')+'</div>'
        + paperFoot(ar);
    },

    /* 🌟 STICKER sample — a printable, cuttable sticker sheet */
    stickerSheet: function(ar){
      var stk = ar ? [
        ['⭐','نجمةُ اليوم','#F5A623'],['🤲','بطلُ الصلاة','#1F8A5B'],['📖','قارئُ القرآن','#2980B9'],
        ['😇','خُلُقٌ حسن','#8E44AD'],['🫶','بَرَّ والديه','#C0392B'],['🌙','صائمٌ صغير','#16A085'],
        ['🧹','ساعدَ أهلَه','#E67E22'],['🤝','شاركَ غيرَه','#2B8C7E'],['✅','أحسنتَ صنعاً','#5B6BD6'],
        ['🏅','ممتاز','#D4A017'],['💎','صادقٌ أمين','#117A8B'],['🌟','نجمُ الأسبوع','#7D3C98']
      ] : [
        ['⭐','Star of the Day','#F5A623'],['🤲','Prayer Hero','#1F8A5B'],['📖','Qur\u2019an Reader','#2980B9'],
        ['😇','Good Manners','#8E44AD'],['🫶','Honored Parents','#C0392B'],['🌙','Little Faster','#16A085'],
        ['🧹','Helped at Home','#E67E22'],['🤝','Shared & Cared','#2B8C7E'],['✅','Well Done','#5B6BD6'],
        ['🏅','Excellent','#D4A017'],['💎','Honest & True','#117A8B'],['🌟','Star of the Week','#7D3C98']
      ];
      var cells = stk.map(function(s){
        return '<div class="psh-stk" style="--sc:'+s[2]+'"><span class="psh-stk-ic">'+s[0]+'</span>'
          + '<span class="psh-stk-tx">'+s[1]+'</span></div>';
      }).join('');
      return paperHead(ar,'🌟', ar?'حزمةُ ملصقات التحفيز — عيّنة':'Reward Sticker Pack — Sample', ar?'اطبَعها · قُصَّها · الصِقها على لوحةِ طفلك':'Print · cut · stick on your child\u2019s chart')
        + '<div class="psh-stk-grid">'+cells+'</div>'
        + '<div class="psh-tip">✂️ '+(ar?'قُصَّ على الخطِّ المنقّط. الحزمةُ الكاملة فيها ١٢٠ ملصقاً ملوّناً + ملصقاتُ رمضان والأخلاق.':'Cut along the dotted line. The full pack has 120 color stickers + Ramadan & manners sets.')+'</div>'
        + paperFoot(ar);
    },

    /* 🏅 CERTIFICATE sample — a fillable certificate */
    certSheet: function(ar){
      return '<div class="psh-cert">'
        + '<div class="psh-cert-seal">🏅</div>'
        + '<div class="psh-cert-kick">'+(ar?'تربية الطفل المسلم · ركن الأهل':'Muslim Kids\u2019 Tarbiyah · Parents Corner')+'</div>'
        + '<div class="psh-cert-title">'+(ar?'شهادةُ تميّزٍ وإنجاز':'Certificate of Excellence')+'</div>'
        + '<div class="psh-cert-lbl">'+(ar?'تُمنَحُ بكلِّ فخرٍ إلى':'Proudly awarded to')+'</div>'
        + '<div class="psh-cert-line psh-cert-name">&nbsp;</div>'
        + '<div class="psh-cert-state">'+(ar?'تقديراً لِـ':'In recognition of')+'</div>'
        + '<div class="psh-cert-line">&nbsp;</div>'
        + '<div class="psh-cert-row"><div><div class="psh-cert-line sm">&nbsp;</div><span>'+(ar?'التاريخ':'Date')+'</span></div>'
        + '<div class="psh-cert-star">🌟</div>'
        + '<div><div class="psh-cert-line sm">&nbsp;</div><span>'+(ar?'توقيعُ ولِيِّ الأمر':'Parent\u2019s signature')+'</span></div></div>'
        + '<div class="psh-cert-foot">'+(ar?'بارك اللهُ فيك وزادك علماً وإيماناً وخُلُقاً':'May Allah bless you and increase you in knowledge, faith and character')+'</div>'
        + '</div>'
        + '<div class="psh-tip" style="text-align:center">🏅 '+(ar?'الحزمةُ الكاملة: ٨ شهاداتٍ (حفظُ القرآن · بطلُ الصلاة · حُسنُ الخُلُق · ختمُ رمضان · التخرّج…).':'Full pack: 8 certificates (Qur\u2019an memorization · Prayer Hero · Good Character · Ramadan completion · Graduation…).')+'</div>';
    },

    /* 🗓️ PLAN sample — weekly plan + monthly habit tracker */
    planSheet: function(ar){
      var days = ar ? ['السبت','الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة']
                    : ['Sat','Sun','Mon','Tue','Wed','Thu','Fri'];
      var habits = ar ? ['صلاةُ الفجر','أذكارُ الصباح','وِردُ القرآن','خُلُقٌ حسن','مساعدةُ الأهل','أذكارُ المساء']
                      : ['Fajr prayer','Morning adhkar','Qur\u2019an portion','Good manners','Helping family','Evening adhkar'];
      var head = '<tr><th class="h-name"></th>'+days.map(function(d){return '<th>'+d+'</th>';}).join('')+'</tr>';
      var rows = habits.map(function(h){
        return '<tr><td class="h-name">'+h+'</td>'+days.map(function(){return '<td class="h-cell">☐</td>';}).join('')+'</tr>';
      }).join('');
      // mini month strip 1..30
      var nums=''; for(var i=1;i<=30;i++){ nums += '<span class="psh-month-d">'+i+'</span>'; }
      return paperHead(ar,'🗓️', ar?'حزمةُ الخطط التربوية — عيّنة':'Tarbiyah Plans Pack — Sample', ar?'جدولٌ أسبوعيٌّ للعاداتِ الإيمانية':'A weekly chart of faith habits')
        + '<table class="psh-plan"><thead>'+head+'</thead><tbody>'+rows+'</tbody></table>'
        + '<div class="psh-act" style="margin-top:1rem"><b class="psh-act-h">'+(ar?'متتبّعُ الشهر — لوِّن دائرةَ كلِّ يومٍ أتممتَ فيه وِردَك:':'Month tracker — color the circle for each day you complete your portion:')+'</b>'
        + '<div class="psh-month">'+nums+'</div></div>'
        + '<div class="psh-tip">⭐ '+(ar?'الحزمةُ الكاملة: خطّةٌ أسبوعيّة · متتبّعُ عاداتٍ شهري · خطّةُ رمضان · خطّةُ العطلةِ الصيفيّة · سجلُّ القراءة.':'Full pack: weekly plan · monthly habit tracker · Ramadan plan · summer plan · reading log.')+'</div>'
        + paperFoot(ar);
    },

    /* 🦸 HEROES sample — two cut-out hero cards */
    heroSheet: function(ar){
      var heroes = ar ? [
        {ic:'🦁', name:'خالد بن الوليد', title:'سيفُ الله المسلول', era:'صحابيٌّ وقائد', facts:['قائدٌ لم يُهزَم في معركة','أسلمَ قبل فتحِ مكّة','قادَ جيوشَ المسلمين بحكمةٍ وشجاعة'], lesson:'الشجاعةُ مع التوكُّلِ على الله تصنعُ الأبطال.'},
        {ic:'🕊️', name:'أبو بكر الصدّيق', title:'أوّلُ الخلفاءِ الراشدين', era:'صاحبُ النبيِّ ﷺ', facts:['صدَّقَ النبيَّ ﷺ بلا تردُّد','رفيقُه في الهجرةِ إلى الغار','أنفقَ مالَه كلَّه في سبيلِ الله'], lesson:'الصِّدقُ والكرمُ والثباتُ طريقُ المحبّة.'}
      ] : [
        {ic:'🦁', name:'Khalid ibn al-Walid', title:'The Drawn Sword of Allah', era:'Companion & commander', facts:['A commander never defeated in battle','Accepted Islam before the conquest of Makkah','Led the Muslim armies with wisdom and courage'], lesson:'Courage with trust in Allah makes heroes.'},
        {ic:'🕊️', name:'Abu Bakr as-Siddiq', title:'The First Rightly-Guided Caliph', era:'Companion of the Prophet \uFEFB', facts:['Believed the Prophet \uFEFB without hesitation','His companion in the cave during the Hijra','Spent all his wealth in the cause of Allah'], lesson:'Truthfulness, generosity and steadfastness win love.'}
      ];
      var cards = heroes.map(function(h){
        var facts = h.facts.map(function(f){ return '<li>'+f+'</li>'; }).join('');
        return '<div class="psh-hero">'
          + '<div class="psh-hero-top">'+slot(ar, ar?'ضع صورةَ/رسمةَ البطل ولوِّنها':'Add the hero\u2019s picture & color it')+'</div>'
          + '<div class="psh-hero-name">'+h.name+'</div>'
          + '<div class="psh-hero-title">'+h.title+' · '+h.era+'</div>'
          + '<ul class="psh-hero-facts">'+facts+'</ul>'
          + '<div class="psh-hero-lesson"><b>'+(ar?'الدرسُ المستفاد:':'Lesson learned:')+'</b> '+h.lesson+'</div>'
          + '</div>';
      }).join('');
      return paperHead(ar,'🦸', ar?'حزمةُ أبطالِ الإسلام — عيّنة':'Heroes of Islam Pack — Sample', ar?'بطاقاتٌ للقصِّ والتلوينِ والتعلُّم':'Cards to cut, color & learn from')
        + '<div class="psh-hero-grid">'+cards+'</div>'
        + '<div class="psh-tip">🦸 '+(ar?'الحزمةُ الكاملة: ٣٠ بطاقةَ بطل (أنبياء · صحابة · علماء) + بوسترات + خطٌّ زمنيٌّ + ورقةُ سيرة.':'Full pack: 30 hero cards (prophets · companions · scholars) + posters + a timeline + a bio worksheet.')+'</div>'
        + paperFoot(ar);
    },
  };

  /* ════════════ PRODUCT SETS (cards shown in the shop) ════════════ */
  var sets = [
    { id:'activities', icon:'🎨', accent:'#E67E22', build:'activitySheet',
      title:{ar:'حزمةُ الأنشطة الإسلامية المطبوعة', en:'Islamic Printable Activity Pack'},
      blurb:{ar:'أوراقُ عملٍ تجمعُ المتعةَ والتعلُّم: تلوينٌ، ومتاهاتٌ، ووصلٌ، وتتبُّعُ حروف.', en:'Worksheets blending fun and learning: coloring, mazes, matching & letter tracing.'},
      includes:[
        {ar:'٢٠ صفحةَ تلوينٍ إسلامية (مساجد · أخلاق · مناسبات)', en:'20 Islamic coloring pages (mosques · manners · occasions)'},
        {ar:'١٢ ورقةَ وصلٍ ومطابقةٍ للمفاهيم', en:'12 matching & connect-the-concept sheets'},
        {ar:'متاهاتٌ وألغازٌ وتتبُّعُ حروفٍ عربية', en:'Mazes, puzzles & Arabic letter tracing'},
        {ar:'بطاقاتُ قصٍّ ولصقٍ للأنشطة اليدوية', en:'Cut-and-paste cards for hands-on crafts'},
      ] },
    { id:'stickers', icon:'🌟', accent:'#1F8A5B', build:'stickerSheet',
      title:{ar:'حزمةُ ملصقاتِ التحفيز', en:'Reward Sticker Pack'},
      blurb:{ar:'ملصقاتٌ ملوّنةٌ تُكافئ الصلاةَ والصدقَ وبرَّ الوالدين وحُسنَ الخُلُق.', en:'Colorful stickers rewarding prayer, honesty, honoring parents & good character.'},
      includes:[
        {ar:'١٢٠ ملصقاً ملوّناً جاهزاً للقصّ', en:'120 ready-to-cut color stickers'},
        {ar:'ملصقاتُ متابعةِ الصلواتِ الخمس', en:'Five-daily-prayer tracking stickers'},
        {ar:'ملصقاتُ رمضانَ والأعمالِ الصالحة', en:'Ramadan & good-deeds stickers'},
        {ar:'ملصقاتُ الأخلاقِ والآدابِ اليومية', en:'Daily manners & adab stickers'},
      ] },
    { id:'certificates', icon:'🏅', accent:'#D4A017', build:'certSheet',
      title:{ar:'حزمةُ شهاداتِ الإنجاز', en:'Achievement Certificates Pack'},
      blurb:{ar:'شهاداتٌ أنيقةٌ قابلةٌ للتعبئةِ تُكرِّمُ كلَّ إنجازٍ وتُعلَّقُ بفخر.', en:'Elegant fillable certificates that honor every achievement, framed with pride.'},
      includes:[
        {ar:'٨ تصاميمَ شهاداتٍ جاهزةٍ للطباعة', en:'8 print-ready certificate designs'},
        {ar:'شهادةُ حفظِ القرآنِ والأجزاء', en:'Qur\u2019an & juz\u2019 memorization certificate'},
        {ar:'شهادةُ «بطلِ الصلاة» وحُسنِ الخُلُق', en:'\u201CPrayer Hero\u201D & good-character certificates'},
        {ar:'شهادةُ ختمِ رمضانَ والتخرّج', en:'Ramadan completion & graduation certificates'},
      ] },
    { id:'plans', icon:'🗓️', accent:'#2980B9', build:'planSheet',
      title:{ar:'حزمةُ الخطط التربوية', en:'Tarbiyah Plans Pack'},
      blurb:{ar:'خططٌ ومتتبّعاتُ عاداتٍ تبني العباداتِ والأخلاقَ بثباتٍ وتدرُّج.', en:'Plans & habit trackers that build worship and character steadily and gradually.'},
      includes:[
        {ar:'خطّةٌ أسبوعيّةٌ ومتتبّعُ عاداتٍ شهري', en:'Weekly plan & monthly habit tracker'},
        {ar:'خطّةُ رمضانَ للطفلِ يوماً بيوم', en:'Day-by-day Ramadan plan for kids'},
        {ar:'خطّةُ العطلةِ الصيفيّةِ النافعة', en:'A purposeful summer-holiday plan'},
        {ar:'لوحةُ الصلواتِ وسجلُّ القراءة', en:'Prayer chart & reading log'},
      ] },
    { id:'heroes', icon:'🦸', accent:'#8E44AD', build:'heroSheet',
      title:{ar:'حزمةُ أبطالِ الإسلام المطبوعة', en:'Heroes of Islam Printable Pack'},
      blurb:{ar:'بطاقاتٌ وبوستراتٌ عن الأنبياءِ والصحابةِ والعلماءِ تُلهِمُ طفلك القدوة.', en:'Cards & posters of prophets, companions & scholars to inspire your child with role models.'},
      includes:[
        {ar:'٣٠ بطاقةَ بطلٍ للقصِّ والتعلُّم', en:'30 hero cards to cut and learn from'},
        {ar:'بوستراتٌ ملوّنةٌ للتعليقِ في الغرفة', en:'Color posters to hang in the room'},
        {ar:'خطٌّ زمنيٌّ لأبطالِ الإسلام', en:'A timeline of Islam\u2019s heroes'},
        {ar:'ورقةُ سيرةٍ يملؤها الطفلُ عن بطلِه', en:'A bio worksheet the child fills about his hero'},
      ] },
  ];

  window.PARENTS_PRINTABLES = { sets: sets, build: build, tx: ar2 };
})();
