/* behavior-render.js — builds «مفاتيح السلوك» from BEHAVIOR data */
(function(){
  var B = window.BEHAVIOR;
  var lang = localStorage.getItem('bunyanLang') || 'ar';
  function tx(o){ return o ? (o[lang]||o.ar||'') : ''; }
  function AR(){ return lang==='ar'; }
  function paras(o){ return tx(o).split('\n\n').map(function(p){return '<p>'+p+'</p>';}).join(''); }

  function sheet(opts, body){
    var head = opts.h ? '<div class="ph"><div class="ph-ic">'+opts.h.ic+'</div><div class="ph-tx"><div class="ph-k">'+tx(opts.h.k)+'</div><h2>'+tx(opts.h.t)+'</h2></div>'+(opts.h.n?'<div class="ph-n">'+opts.h.n+'</div>':'')+'</div>' : '';
    var foot = opts.nofoot ? '' : '<div class="pfoot"><span class="brand">'+(AR()?'تربية الطفل المسلم · مفاتيح السلوك':'Muslim Kids\u2019 Tarbiyah · Keys to Behaviour')+'</span><span>'+(opts.pg||'')+'</span></div>';
    return '<div class="sheet'+(opts.cls?' '+opts.cls:'')+'"><div class="flow">'+head+body+foot+'</div></div>';
  }
  function pbanner(p){ return '<div class="pbanner" style="--sc:'+p.c+'"><span class="pb-ic">'+p.ic+'</span><span class="pb-nm">'+tx(p.nm)+'</span><span class="pb-tag">'+tx(p.sub)+'</span></div>'; }

  function build(){
    var P=[], pg=0; function N(){ return (AR()?'صفحة ':'p. ')+(++pg); }

    /* COVER */
    P.push(sheet({cls:'cover',nofoot:true},
      '<div class="crest">🗝️</div>'+
      '<div class="ckick">'+(AR()?'تربية الطفل المسلم · دليلُ الأهل':'Muslim Kids\u2019 Tarbiyah · Parents\u2019 Guide')+'</div>'+
      '<h1>'+tx(B.meta.title)+'</h1>'+
      '<div class="csub">'+tx(B.meta.subtitle)+'</div>'+
      '<div class="cdesc">'+tx(B.meta.blurb)+'</div>'+
      '<div class="crow"><span>🤥</span><span>😨</span><span>😡</span><span>🗯️</span><span>🌀</span><span>😒</span><span>🙉</span><span>🎒</span></div>'+
      '<div class="cdiv"></div>'+
      '<div class="cbadge">'+(AR()?'بقلمِ خبيرٍ تربويٍّ وطبيبٍ ومختصٍّ سلوكيّ · أربعُ رؤًى: شرعيّةٌ وتربويّةٌ ونفسيّةٌ وطبّيّة':'By an educator, physician & behavioural specialist · four lenses: religious, educational, psychological & medical')+'</div>'));

    /* HOW TO USE + 4 lenses */
    P.push(sheet({pg:N(),h:{ic:'🧭',k:{ar:'ابدأ من هنا',en:'Start here'},t:{ar:'كيف تستخدم هذا الكتاب',en:'How to use this book'}}},
      '<p class="lead">'+(AR()?'لكلِّ مشكلةٍ بابٌ كاملٌ من ستِّ نوافذ: الفرقُ بين الطبيعيِّ وغيرِ الطبيعيّ، والرؤى الأربع (شرعيّة · تربويّة · نفسيّة · طبّيّة)، والأسباب، وأمثلةٌ عمليّة، وبرنامجٌ واقعيّ، وقائمةُ متابعة. اقرأ المشكلةَ التي تواجهك الآن، وطبّق برنامجَها أسبوعًا قبل أن تحكم.':'Each problem is a full chapter of six windows: the natural vs the concerning, the four lenses (religious, educational, psychological, medical), causes, worked examples, a realistic program & a follow-up checklist. Read the problem you face now & apply its program for a week before judging.')+'</p>'+
      '<div class="lensgrid">'+B.lenses.map(function(l){return '<div class="lens"><div class="l-ic">'+l.ic+'</div><div class="l-n">'+tx(l.n)+'</div><div class="l-d">'+tx(l.d)+'</div></div>';}).join('')+'</div>'+
      '<div class="tip">'+(AR()?'<b>قاعدةٌ ذهبيّة:</b> لا يوجد طفلٌ «سيّئ»، بل سلوكٌ يحمل رسالةً عن حاجة. افهم الرسالةَ تحلّ المشكلة.':'<b>Golden rule:</b> there is no \u201cbad\u201d child, only behaviour carrying a message about a need. Understand the message & you solve the problem.')+'</div>'));

    /* UNIVERSAL METHOD */
    P.push(sheet({pg:N(),h:{ic:'🛠️',k:{ar:'المنهج',en:'The method'},t:{ar:'ستُّ قواعدَ لعلاجِ أيِّ سلوك',en:'Six rules to treat any behaviour'}}},
      '<p class="lead">'+tx(B.method.intro)+'</p>'+
      '<div class="steps6">'+B.method.steps.map(function(s){return '<div class="s6"><div class="s6n">'+s.n+'</div><div><div class="s6t">'+tx(s.t)+'</div><div class="s6d">'+tx(s.d)+'</div></div></div>';}).join('')+'</div>'+
      '<div class="note danger">⚠ '+tx(B.method.warn)+'</div>'));

    /* NORMAL VS ABNORMAL (front concept) */
    P.push(sheet({pg:N(),h:{ic:'⚖️',k:{ar:'سؤالٌ مهمّ',en:'A key question'},t:{ar:'الطبيعيُّ ومتى نقلق؟',en:'The natural — & when to worry'}}},
      '<p class="lead">'+tx(B.normalIntro.intro)+'</p>'+
      '<div class="lensgrid">'+B.normalIntro.flags.map(function(f){return '<div class="lens" style="--lc:#C0392B"><div class="l-ic">'+f.ic+'</div><div class="l-n">'+tx(f.t)+'</div><div class="l-d">'+tx(f.d)+'</div></div>';}).join('')+'</div>'+
      '<div class="note danger">'+tx(B.normalIntro.note)+'</div>'));

    /* TOC */
    P.push(sheet({pg:N(),h:{ic:'🗺️',k:{ar:'المحتوى',en:'Contents'},t:{ar:'ثماني مشكلاتٍ وحلولُها',en:'Eight problems & their solutions'}}},
      '<div class="toc">'+B.problems.map(function(p,i){return '<div class="trow" style="--tc:'+p.c+'"><span class="ti">'+p.ic+'</span><div><div class="tn">'+(i+1)+'. '+tx(p.nm)+'</div><div class="td">'+tx(p.sub)+'</div></div></div>';}).join('')+'</div>'));

    /* PER PROBLEM */
    B.problems.forEach(function(p){
      var pb = pbanner(p);
      // 1 divider
      P.push(sheet({nofoot:true},
        '<div class="prob-div" style="--sc:'+p.c+'"><div class="pd-ic">'+p.ic+'</div><div class="pd-nm">'+tx(p.nm)+'</div><div class="pd-sub">'+tx(p.sub)+'</div>'+
        '<div class="pd-intro">'+tx(p.intro)+'</div>'+
        '<div class="glance">'+p.glance.map(function(g){return '<div class="gl"><div class="gl-k">'+g.ic+' '+tx(g.k)+'</div><div class="gl-v">'+tx(g.v)+'</div></div>';}).join('')+'</div></div>'));
      // 2 normal vs abnormal
      P.push(sheet({pg:N()}, pb+
        '<div class="subh" style="margin-top:0">⚖️ '+(AR()?'الفرقُ بين الطبيعيِّ وغيرِ الطبيعيّ':'The natural vs the concerning')+'</div>'+
        '<p class="lead" style="font-size:.96rem;margin-bottom:.7rem">'+tx(p.normal.intro)+'</p>'+
        '<table class="nvtable"><thead><tr><th>'+tx(p.normal.col||{ar:'الجانب',en:'Aspect'})+'</th><th class="nat">✅ '+(AR()?'طبيعيّ':'Natural')+'</th><th class="abn">⚠ '+(AR()?'يستدعي الانتباه':'Concerning')+'</th></tr></thead><tbody>'+
        p.normal.rows.map(function(r){return '<tr><td class="asp">'+tx(r.k)+'</td><td>'+tx(r.nat)+'</td><td>'+tx(r.abn)+'</td></tr>';}).join('')+'</tbody></table>'+
        '<div class="whenbox"><div class="wb-h">🩺 '+(AR()?'متى تستشير مختصًّا؟':'When to consult a specialist')+'</div><ul>'+p.normal.specialist.map(function(s){return '<li>'+tx(s)+'</li>';}).join('')+'</ul></div>'));
      // 3 religious + educational
      P.push(sheet({pg:N()}, pb+
        '<div class="vbox rel"><h3>📿 '+(AR()?'الرؤيةُ الشرعيّة':'The religious lens')+'</h3>'+paras(p.religious)+'</div>'+
        '<div class="vbox edu"><h3>🌱 '+(AR()?'الرؤيةُ التربويّة':'The educational lens')+'</h3>'+paras(p.educational)+'</div>'));
      // 4 psych + medical
      P.push(sheet({pg:N()}, pb+
        '<div class="vbox psy"><h3>🧠 '+(AR()?'الرؤيةُ النفسيّة':'The psychological lens')+'</h3>'+paras(p.psych)+'</div>'+
        '<div class="vbox med"><h3>🩺 '+(AR()?'الرؤيةُ الطبّيّة':'The medical lens')+'</h3>'+paras(p.medical)+'</div>'));
      // 5 causes + evidences
      P.push(sheet({pg:N()}, pb+
        '<div class="subh" style="margin-top:0">🔍 '+(AR()?'الأسبابُ خلف السلوك':'The causes behind it')+'</div>'+
        '<div class="causes">'+p.causes.map(function(c){return '<div class="cause"><span class="c-ic">'+(c.ic||'•')+'</span><span>'+tx(c.t||c)+'</span></div>';}).join('')+'</div>'+
        '<div class="subh">📜 '+(AR()?'من هَدي الشرع':'From the guidance')+'</div>'+
        p.evidences.map(function(e){var lbl=e.type==='ayah'?(AR()?'قرآن':'Qur\u2019an'):e.type==='hadith'?(AR()?'حديث':'Hadith'):(AR()?'أثر':'Report');return '<div class="evbox"><div class="ev-h">'+lbl+'<span class="tag">'+tx(e.ref)+'</span></div><div class="ev-txt">'+tx(e.text)+'</div>'+(e.note?'<div class="ev-note">'+tx(e.note)+'</div>':'')+'</div>';}).join('')));
      // 6 examples
      P.push(sheet({pg:N()}, pb+
        '<div class="subh" style="margin-top:0">💡 '+(AR()?'أمثلةٌ عمليّةٌ مشروحة':'Worked, practical examples')+'</div>'+
        '<div class="exs">'+p.examples.map(function(e){return '<div class="ex" style="--sc:'+p.c+'"><div class="ex-h">'+tx(e.title)+'</div><div class="ex-scene">'+tx(e.scene)+'</div><div class="ex-grid"><div class="ex-do"><b>✅ '+(AR()?'افعل':'Do')+'</b>'+tx(e.do)+'</div><div class="ex-dont"><b>🚫 '+(AR()?'تجنّب':'Avoid')+'</b>'+tx(e.dont)+'</div></div><div class="ex-root">🌱 '+tx(e.root)+'</div></div>';}).join('')+'</div>'));
      // 7 program + checklist
      P.push(sheet({pg:N()}, pb+
        '<div class="prog" style="--sc:'+p.c+'"><div class="prog-h">📋 '+tx(p.program.name)+'</div><div class="prog-b">'+
        '<p class="prog-intro">'+tx(p.program.intro)+'</p>'+
        p.program.steps.map(function(s){return '<div class="prow"><span class="pn">'+s.n+'</span><div><div class="pt">'+tx(s.t)+'</div><div class="pd">'+tx(s.d)+'</div></div></div>';}).join('')+'</div></div>'+
        (p.program.tip?'<div class="tip">'+tx(p.program.tip)+'</div>':'')+
        '<div class="clbox" style="--sc:'+p.c+'"><h4>'+p.ic+' '+(AR()?'قائمةُ متابعةِ الأهل':'Parent follow-up checklist')+'</h4>'+
        p.checklist.map(function(c){return '<div class="clrow"><span class="cbx"></span><span class="clt">'+tx(c)+'</span></div>';}).join('')+'</div>'));
    });

    /* PRINCIPLES */
    P.push(sheet({pg:N(),h:{ic:'💎',k:{ar:'خلاصة',en:'Summary'},t:{ar:'مبادئُ تصلح لكلِّ مشكلة',en:'Principles for every problem'}}},
      '<div class="lensgrid two">'+B.principles.map(function(g){return '<div class="lens"><div class="l-ic">'+g[0]+'</div><div class="l-n">'+tx(g[1])+'</div><div class="l-d">'+tx(g[2])+'</div></div>';}).join('')+'</div>'));

    /* SOURCES */
    P.push(sheet({pg:N(),h:{ic:'📚',k:{ar:'المراجع',en:'References'},t:{ar:'مصادرُ هذا الكتاب',en:'Sources of this book'}}},
      '<ul class="srclist">'+B.sources.map(function(x){return '<li>'+tx(x)+'</li>';}).join('')+'</ul>'+
      '<div class="tip">'+tx(B.disclaimer)+'</div>'+
      '<div class="note" style="text-align:center;font-weight:800;color:var(--navy);margin-top:1rem">'+tx(B.closing)+'</div>'));

    document.getElementById('book').innerHTML = P.join('');
  }

  window.setLang = function(l){
    lang=l; localStorage.setItem('bunyanLang',l);
    document.documentElement.lang=l; document.documentElement.dir=l==='ar'?'rtl':'ltr';
    var a=document.getElementById('segAr'), e=document.getElementById('segEn');
    if(a) a.classList.toggle('on',l==='ar'); if(e) e.classList.toggle('on',l==='en');
    build();
  };
  setLang(lang);
})();
