/* tarbiyah-render.js — builds «بوصلة التربية» pages from TARBIYAH data */
(function(){
  var T = window.TARBIYAH;
  var lang = localStorage.getItem('bunyanLang') || 'ar';
  function tx(o){ return o ? (o[lang]||o.ar||'') : ''; }
  function AR(){ return lang==='ar'; }
  function paras(o){ return tx(o).split('\n\n').map(function(p){return '<p>'+p+'</p>';}).join(''); }

  function sheet(opts, body){
    var head = opts.h ? '<div class="ph"><div class="ph-ic">'+opts.h.ic+'</div><div class="ph-tx"><div class="ph-k">'+tx(opts.h.k)+'</div><h2>'+tx(opts.h.t)+'</h2></div>'+(opts.h.n?'<div class="ph-n">'+opts.h.n+'</div>':'')+'</div>' : '';
    var foot = opts.nofoot ? '' : '<div class="pfoot"><span class="brand">'+(AR()?'تربية الطفل المسلم · بوصلة التربية':'Muslim Kids\u2019 Tarbiyah · The Tarbiyah Compass')+'</span><span>'+(opts.pg||'')+'</span></div>';
    var fill = opts.nofill ? body : '<div class="sheet-body">'+body+'</div>';
    return '<div class="sheet'+(opts.cls?' '+opts.cls:'')+'"><div class="flow">'+head+fill+foot+'</div></div>';
  }
  function sbanner(s){ return '<div class="sbanner" style="--sc:'+s.c+'"><span class="sb-age">'+s.age+'</span><span class="sb-ic">'+s.ic+'</span><span class="sb-nm">'+tx(s.nm)+'</span><span class="sb-tag">'+tx(s.sub)+'</span></div>'; }

  function build(){
    var P=[], pg=0; function N(){ return (AR()?'صفحة ':'p. ')+(++pg); }

    /* ─── COVER ─── */
    P.push(sheet({cls:'cover',nofoot:true,nofill:true},
      '<div class="crest">🧭</div>'+
      '<div class="ckick">'+(AR()?'تربية الطفل المسلم · دليلُ الأهل':'Muslim Kids\u2019 Tarbiyah · Parents\u2019 Guide')+'</div>'+
      '<h1>'+tx(T.meta.title)+'</h1>'+
      '<div class="csub">'+tx(T.meta.subtitle)+'</div>'+
      '<div class="cdesc">'+tx(T.meta.blurb)+'</div>'+
      '<div class="crow"><span>🍼</span><span>🧸</span><span>📿</span><span>🧭</span><span>🤝</span><span>🦅</span><span>🌳</span></div>'+
      '<div class="cdiv"></div>'+
      '<div class="cname">'+(AR()?'اسمُ الطفل:':'Child\u2019s name:')+' <b></b></div>'+
      '<div class="cbadge">'+(AR()?'بقلمِ عالمٍ مسلمٍ وطبيبٍ نفسيٍّ وخبيرٍ تربويّ · على هَدي الكتابِ والسنّةِ وعلمِ النفس':'In the voice of a Muslim scholar, a psychiatrist & a parenting expert · upon the Qur\u2019an, Sunnah & psychology')+'</div>'));

    /* ─── HOW TO USE ─── */
    P.push(sheet({pg:N(),h:{ic:'🧭',k:{ar:'ابدأ من هنا',en:'Start here'},t:{ar:'كيف تستخدم هذا الدليل',en:'How to use this guide'}}},
      '<p class="lead">'+(AR()?'هذا الكتابُ رفيقُك من ميلادِ طفلك إلى رشده. سبعُ مراحلَ عمريّة، يأخذ كلٌّ منها حقَّه عبر ستِّ نوافذ: نظرةُ العلماء، ونظرةُ علم النفس، وخريطةُ الوقت، والأنشطةُ والأمثلة، والمشكلاتُ وعلاجُها، والمحاسبةُ والمتابعة.':'This book accompanies you from your child\u2019s birth to maturity. Seven life-stages, each given its due through six windows: the scholars\u2019 view, the psychology view, the time-map, activities & examples, problems & their cure, and accountability & follow-up.')+'</p>'+
      '<div class="acts">'+T.pillars.map(function(p){return '<div class="act"><div class="a-t">'+p.ic+' '+tx(p.n)+'</div><div class="a-how">'+tx(p.d)+'</div></div>';}).join('')+'</div>'+
      '<div class="subh">'+(AR()?'القاعدةُ النبويّةُ الكبرى':'The great prophetic rule')+'</div>'+
      '<div class="weekly">'+T.anchors.map(function(a){return '<div class="wrow" style="--sc:#C9A227"><span class="wd">'+a.ic+' '+tx(a.n)+'</span><span class="wa">'+tx(a.d)+'</span></div>';}).join('')+'</div>'+
      '<div class="tip">'+(AR()?'<b>طريقة القراءة:</b> اقرأ مرحلةَ طفلك الآن، وراجِع التي قبلها لتستدرك، والتي بعدها لتستعدّ. وعُد كلَّ شهرٍ إلى قائمةِ المحاسبة.':'<b>How to read:</b> read your child\u2019s current stage, review the one before to catch up, and the next to prepare. Return monthly to the accountability checklist.')+'</div>'));

    /* ─── FOUR CONSTANTS ─── */
    P.push(sheet({pg:N(),h:{ic:'🧱',k:{ar:'ثوابتُ كلِّ مرحلة',en:'Constants of every stage'},t:{ar:'أربعةٌ لا تتغيّرُ مع العمر',en:'Four that never change with age'}}},
      '<p class="lead">'+(AR()?'مهما تغيّرتِ المراحلُ تبقى هذه الأربعةُ أساسًا تحت كلِّ شيء — إن غابت انهار ما فوقها:':'Whatever the stage, these four remain the foundation beneath everything — if they are absent, all above collapses:')+'</p>'+
      '<div class="acts">'+T.constants.map(function(c){return '<div class="act"><div class="a-t">'+c.ic+' '+tx(c.n)+'</div><div class="a-how">'+tx(c.d)+'</div></div>';}).join('')+'</div>'+
      '<div class="note">'+(AR()?'هذه الثوابتُ هي «خزّانُ الحبِّ» الذي يجعل التوجيهَ مقبولًا؛ فلا توجيهَ ينفع على قلبٍ فارغٍ من الأمان.':'These constants are the \u201clove-tank\u201d that makes guidance acceptable; no guidance works on a heart empty of security.')+'</div>'));

    /* ─── TIME PHILOSOPHY ─── */
    P.push(sheet({pg:N(),h:{ic:'🕰️',k:{ar:'فلسفةُ الوقت',en:'The philosophy of time'},t:{ar:'الوقتُ مع أطفالك — كميٌّ ونوعيّ',en:'Time with your children — quantity & quality'}}},
      '<p class="lead">'+tx(T.timePhilosophy.intro)+'</p>'+
      '<div class="acts">'+T.timePhilosophy.laws.map(function(l){return '<div class="act"><div class="a-t">'+l.ic+' '+tx(l.t)+'</div><div class="a-how">'+tx(l.d)+'</div></div>';}).join('')+'</div>'+
      '<div class="evbox"><div class="ev-h">'+(AR()?'الدليل':'Evidence')+'<span class="tag">'+tx(T.timePhilosophy.evidence.ref)+'</span></div><div class="ev-txt">'+tx(T.timePhilosophy.evidence.text)+'</div></div>'));

    /* ─── PROBLEM METHOD ─── */
    P.push(sheet({pg:N(),h:{ic:'🩹',k:{ar:'منهجُ الحلّ',en:'The method'},t:{ar:'كيف تعالج أيَّ سلوكٍ صعب',en:'How to handle any difficult behaviour'}}},
      '<p class="lead">'+tx(T.problemMethod.intro)+'</p>'+
      '<div class="steps6">'+T.problemMethod.steps.map(function(s){return '<div class="s6"><div class="s6n">'+s.n+'</div><div><div class="s6t">'+tx(s.t)+'</div><div class="s6d">'+tx(s.d)+'</div></div></div>';}).join('')+'</div>'+
      '<div class="note" style="background:#fcf2f0;border-color:#e6c9c2;color:#8a3a2e">⚠ '+tx(T.problemMethod.warn)+'</div>'));

    /* ─── TABLE OF STAGES ─── */
    P.push(sheet({pg:N(),h:{ic:'🗺️',k:{ar:'خارطةُ الرحلة',en:'The journey map'},t:{ar:'مراحلُ العمرِ السبع',en:'The seven life-stages'}}},
      '<p class="lead">'+(AR()?'من المهدِ إلى الرشد. لكلِّ مرحلةٍ بابٌ كاملٌ في هذا الكتاب — لا تتخطَّ مرحلةً قبل أن تُتقِن أساسَها:':'From cradle to maturity. Each stage has a full chapter here — don\u2019t skip a stage before mastering its foundation:')+'</p>'+
      '<div class="toc">'+T.stages.map(function(s){return '<div class="trow" style="--tc:'+s.c+'"><span class="ta">'+s.age+'</span><span class="ti">'+s.ic+'</span><div><div class="tn">'+tx(s.nm)+'</div><div class="td">'+tx(s.sub)+'</div></div></div>';}).join('')+'</div>'));

    /* ─── PER STAGE ─── */
    T.stages.forEach(function(s){
      var sb = sbanner(s);
      // 1 · divider
      P.push(sheet({nofoot:true,nofill:true},
        '<div class="stage-div" style="--sc:'+s.c+'"><div class="sd-age">'+s.age+'</div><div class="sd-ic">'+s.ic+'</div><div class="sd-nm">'+tx(s.nm)+'</div><div class="sd-sub">'+tx(s.sub)+'</div>'+
        '<div class="sd-intro">'+tx(s.intro)+'</div>'+
        '<div class="glance">'+s.glance.map(function(g){return '<div class="gl"><div class="gl-k">'+g.ic+' '+tx(g.k)+'</div><div class="gl-v">'+tx(g.v)+'</div></div>';}).join('')+'</div></div>'));
      // 2 · scholars' view (own page)
      P.push(sheet({pg:N()}, sb+
        '<div class="vbox scholar"><h3>📿 '+(AR()?'نظرةُ العلماء':'The scholars\u2019 view')+'</h3>'+paras(s.scholar)+'</div>'));
      // 3 · psychology view (own page)
      P.push(sheet({pg:N()}, sb+
        '<div class="vbox psych"><h3>🧠 '+(AR()?'نظرةُ علمِ النفس':'The psychology view')+'</h3>'+paras(s.psych)+'</div>'));
      // 4 · specialists' voices (own page)
      P.push(sheet({pg:N()}, sb+'<div class="subh" style="margin-top:0">🎙️ '+(AR()?'أصواتُ المختصّين':'Specialists\u2019 voices')+'</div>'+
        '<p class="lead" style="margin-bottom:.8rem">'+(AR()?'خلاصةُ مدارسِ مربّين وعلماءِ نفسٍ في هذه المرحلة:':'The distilled wisdom of educators & psychologists for this stage:')+'</p>'+
        '<div class="voices" style="--sc:'+s.c+'">'+s.specialists.map(function(v){return '<div class="voice"><span class="vq">\u201c</span><div><div class="vtxt">'+tx(v.q)+'</div><div class="vby">— '+tx(v.by)+'</div></div></div>';}).join('')+'</div>'));
      // 5 · evidences (own page)
      P.push(sheet({pg:N()}, sb+'<div class="subh" style="margin-top:0">📜 '+(AR()?'الأدلّةُ والآثارُ من الكتابِ والسنّة':'Evidence & reports from Qur\u2019an & Sunnah')+'</div>'+
        s.evidences.map(function(e){var lbl=e.type==='ayah'?(AR()?'قرآن':'Qur\u2019an'):e.type==='hadith'?(AR()?'حديث':'Hadith'):(AR()?'أثر':'Report');return '<div class="evbox"><div class="ev-h">'+lbl+'<span class="tag">'+tx(e.ref)+'</span></div><div class="ev-txt">'+tx(e.text)+'</div>'+(e.note?'<div class="ev-note">'+tx(e.note)+'</div>':'')+'</div>';}).join('')));
      // 4 · rewards + values
      P.push(sheet({pg:N()}, sb+'<div class="subh" style="margin-top:0">🌟 '+(AR()?'ثوابُ هذا العمل عند الله':'The reward of this work with Allah')+'</div>'+
        '<div class="rewards">'+s.rewards.map(function(r){return '<div class="reward"><span class="r-ic">'+r.ic+'</span><div><div class="r-t">'+tx(r.t)+'</div><div class="r-d">'+tx(r.d)+'</div></div></div>';}).join('')+'</div>'+
        '<div class="subh">★ '+(AR()?'القيمُ التي تُغرَس في هذه المرحلة':'Values to plant at this stage')+'</div>'+
        '<div class="listbox values"><ul>'+s.values.map(function(x){return '<li>'+tx(x)+'</li>';}).join('')+'</ul></div>'));
      // 5 · needs + risks
      P.push(sheet({pg:N()}, sb+'<div class="subh" style="margin-top:0">⚖️ '+(AR()?'الاحتياجاتُ والمخاطر':'Needs & risks')+'</div>'+
        '<div class="threecol">'+
        '<div class="listbox needs"><h4>✓ '+(AR()?'الاحتياجات':'Needs')+'</h4><ul>'+s.needs.map(function(x){return '<li>'+tx(x)+'</li>';}).join('')+'</ul></div>'+
        '<div class="listbox risks"><h4>⚠ '+(AR()?'المخاطر':'Risks')+'</h4><ul>'+s.risks.map(function(x){return '<li>'+tx(x)+'</li>';}).join('')+'</ul></div></div>'+
        '<div class="note">'+(AR()?'<b>القاعدة:</b> لبِّ الاحتياجاتِ تَقِ نفسَك أكثرَ المخاطر؛ فأغلبُ المشكلاتِ حاجةٌ لم تُلَبَّ.':'<b>The rule:</b> meet the needs and you avert most risks; most problems are an unmet need.')+'</div>'));
      // 6 · time map: daily + dose + weekly
      P.push(sheet({pg:N()}, sb+'<div class="subh" style="margin-top:0">🕰️ '+(AR()?'خريطةُ اليومِ — كم وقتًا وأيُّ نشاط':'The daily map — how much & what')+'</div>'+
        '<div class="dose"><span class="d-ic">⏱️</span><span class="d-tx"><b>'+(AR()?'جرعةُ الوقت: ':'Time dose: ')+'</b>'+tx(s.dose)+'</span></div>'+
        '<table class="tmap"><thead><tr><th>'+(AR()?'الوقت':'When')+'</th><th>'+(AR()?'المدّة':'Length')+'</th><th>'+(AR()?'النشاط':'Activity')+'</th><th>'+(AR()?'مَن':'Who')+'</th></tr></thead><tbody>'+
        s.daily.map(function(d){return '<tr><td class="tt">'+tx(d.t)+'</td><td class="tdur">'+tx(d.dur)+'</td><td>'+tx(d.act)+'</td><td class="twho">'+tx(d.who)+'</td></tr>';}).join('')+'</tbody></table>'+
        '<div class="subh">📅 '+(AR()?'الإيقاعُ الأسبوعيّ':'The weekly rhythm')+'</div>'+
        '<div class="weekly">'+s.weekly.map(function(w){return '<div class="wrow" style="--sc:'+s.c+'"><span class="wd">'+tx(w.d)+'</span><span class="wa">'+tx(w.act)+'</span></div>';}).join('')+'</div>'));
      // 7 · father's role + activities
      P.push(sheet({pg:N()}, sb+'<div class="practice" style="--sc:'+s.c+'"><div class="ptop">👨 '+(AR()?'دورُ الأبِ في هذه المرحلة':'The father\u2019s role at this stage')+'</div><div class="pbody"><div class="prow"><span>'+tx(s.fatherFocus)+'</span></div></div></div>'+
        '<div class="subh">🧩 '+(AR()?'أنشطةٌ عمليّةٌ تفعلها معه':'Practical activities to do with him')+'</div>'+
        '<div class="acts">'+s.activities.map(function(a){return '<div class="act"><div class="a-t">'+a.ic+' '+tx(a.t)+'</div><div class="a-how">'+tx(a.how)+'</div><div class="a-why">🎯 '+tx(a.why)+'</div></div>';}).join('')+'</div>'));
      // 8 · worked examples
      P.push(sheet({pg:N()}, sb+'<div class="subh" style="margin-top:0">💡 '+(AR()?'أمثلةٌ عمليّةٌ مشروحة':'Worked, practical examples')+'</div>'+
        '<div class="exs">'+s.examples.map(function(e){return '<div class="ex" style="--sc:'+s.c+'"><div class="ex-h">'+tx(e.title)+'</div><div class="ex-scene">'+tx(e.scene)+'</div><div class="ex-grid"><div class="ex-do"><b>✅ '+(AR()?'افعل':'Do')+'</b>'+tx(e.do)+'</div><div class="ex-dont"><b>🚫 '+(AR()?'تجنّب':'Avoid')+'</b>'+tx(e.dont)+'</div></div><div class="ex-root">🌱 '+tx(e.root)+'</div></div>';}).join('')+'</div>'));
      // 9 · problems
      P.push(sheet({pg:N()}, sb+'<div class="subh" style="margin-top:0">🩹 '+(AR()?'مشكلاتٌ شائعةٌ وعلاجُها':'Common problems & their treatment')+'</div>'+
        s.problems.map(function(p){return '<div class="prob" style="--sc:'+s.c+'"><div class="p-h">⚠ '+tx(p.p)+'</div><div class="p-why"><b>'+(AR()?'السبب: ':'Cause: ')+'</b>'+tx(p.why)+'</div><div class="p-two"><div class="p-isl"><b>📿 '+(AR()?'المنظورُ الشرعيّ':'Islamic lens')+'</b>'+tx(p.islamic)+'</div><div class="p-psy"><b>🧠 '+(AR()?'المنظورُ النفسيّ':'Psychological lens')+'</b>'+tx(p.psych)+'</div></div><div class="p-steps">'+p.steps.map(function(st,i){return '<div class="pst"><span class="pn">'+(i+1)+'</span><span>'+tx(st)+'</span></div>';}).join('')+'</div></div>';}).join('')));
      // 10 · practice + checklist + followup
      P.push(sheet({pg:N()}, sb+'<div class="practice" style="--sc:'+s.c+'"><div class="ptop">🧭 '+(AR()?'طبّقها بكتبِ «ركن الأهل» وأركانِ الموقع · ':'Apply it with the Parents\u2019-Corner books & the site · ')+tx(s.practice.track)+'</div><div class="pbody">'+s.practice.items.map(function(it,i){return '<div class="prow"><span class="pn">'+(i+1)+'</span><span>'+tx(it)+'</span></div>';}).join('')+'</div></div>'+
        '<div class="clbox" style="--sc:'+s.c+'"><h4>'+s.ic+' '+(AR()?'قائمةُ المحاسبة — هل أنجزتُ في مرحلة ':'Accountability — have I done it at ')+s.age+'؟</h4>'+
        s.checklist.map(function(c){return '<div class="clrow"><span class="cbx"></span><span class="clt">'+tx(c)+'</span></div>';}).join('')+'</div>'+
        '<div class="fubox"><div class="fu-h">🔄 '+(AR()?'المتابعةُ الدوريّة':'Periodic follow-up')+'</div>'+s.followup.map(function(f){return '<div class="furow"><span class="fup">'+tx(f.period)+'</span><span class="fui">'+tx(f.item)+'</span></div>';}).join('')+'</div>'));
    });

    /* ─── PRINCIPLES ─── */
    P.push(sheet({pg:N(),h:{ic:'💎',k:{ar:'خلاصةٌ جامعة',en:'A gathering summary'},t:{ar:'مبادئُ لا تتغيّرُ مع العمر',en:'Principles that never change'}}},
      '<div class="acts">'+T.principles.map(function(g){return '<div class="act"><div class="a-t">'+g[0]+' '+tx(g[1])+'</div><div class="a-how">'+tx(g[2])+'</div></div>';}).join('')+'</div>'));

    /* ─── SOURCES ─── */
    P.push(sheet({pg:N(),h:{ic:'📚',k:{ar:'المراجع',en:'References'},t:{ar:'مصادرُ هذا الدليل',en:'Sources of this guide'}}},
      '<p class="lead">'+(AR()?'هذا الكتابُ خلاصةٌ تجمع بين الوحيِ وفهمِ المختصّين من علماءِ الشرعِ والتربيةِ وعلمِ النفس:':'This book is a synthesis joining revelation with the understanding of specialists in Shari\u2019ah, education & psychology:')+'</p>'+
      '<ul class="srclist">'+T.sources.map(function(x){return '<li>'+tx(x)+'</li>';}).join('')+'</ul>'+
      '<div class="tip">'+tx(T.disclaimer)+'</div>'+
      '<div class="note" style="margin-top:1rem;text-align:center;font-weight:800;color:var(--navy)">'+tx(T.closingDua)+'</div>'));

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
