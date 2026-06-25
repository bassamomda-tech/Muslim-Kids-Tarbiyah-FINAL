/* ════════════════════════════════════════════════════════════════
   yaqeen-book.js — builds the "عجائب الخلق" FLIP book from the live
   رحلة اليقين stations (window.YAQEEN_STATIONS). Pages:
     cover → how-to → [Story · Activity · Coloring]×20 → certificate.
   Page-turn (rotateY) flip, image slots with Nano Banana prompts,
   interactive Mr-Chance flip card + matching game. Bilingual.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var ST = window.YAQEEN_STATIONS || [];
  var PUBLISH = !!window.YAQEEN_PUBLISH;   // publish/print mode: clean pages, no prompts, no nav

  var BOOK_STYLE =
    "Style: warm, friendly modern flat-vector children's-storybook illustration with rounded shapes, soft shadows and wonder. " +
    "Palette: deep navy #0A2540, gold #D4A017, royal purple #8E44AD and teal #1A9B7B on a cream #FEF5DC background. " +
    "Any human characters are faceless and modestly dressed; never depict a prophet or sacred figure. " +
    "High-resolution, clean and print-ready with generous margins. Render any Arabic text exactly as written and clearly legible.";
  var LINE_STYLE =
    "Pure crisp BLACK outlines on a WHITE background, no colour and no grey shading, bold clean lines, large simple areas for a child to colour. " +
    "Any human characters are faceless and modest; never depict a prophet or sacred figure. Print-ready A4.";

  var SCENE = {
    cell:'inside a glowing, friendly living cell', forest:'in a sunny green forest on a tree trunk',
    night:'flying through a starry night sky', ice:'on bright Antarctic ice and snow',
    web:'on a sparkling dew-covered web at dawn', sky:'high in an open sky above seas and deserts',
    ocean:'in a colourful coral reef under the sea', desert:'in a golden sand desert under a warm sun',
    river:'beside a flowing river with a wooden dam', hive:'inside a golden honeycomb of perfect hexagons',
    soil:'in a cross-section underground city of tunnels', space:'among planets and stars in outer space',
    body:'in a wondrous glowing world inside the human body', cloud:'among soft rain clouds and a rainbow',
    deep:'on the dark ocean floor lit by glowing creatures'
  };
  function sc(s){ return SCENE[s] || 'in its wonderful natural home'; }
  function subjEn(st){ var p=st.title.en.split('—'); return p[p.length-1].trim(); }
  function subjAr(st){ var p=st.title.ar.split('—'); return p[p.length-1].trim(); }

  function pScene(st){ return "A warm children's-storybook illustration about the wonders of Allah's creation. Scene «"+st.title.ar+"» ("+st.title.en+"). Show "+subjEn(st)+" "+sc(st.scene)+" as the joyful hero of the page, full of wonder. Portrait composition with calm space at the top for a title. "+BOOK_STYLE; }
  function pColor(st){ return "A full-page COLORING line-art of "+subjEn(st)+" "+sc(st.scene)+", for children to colour, with a decorative border and the Arabic title «"+st.title.ar+"» in a clean outline font at the top. "+LINE_STYLE; }
  var PUZ = [
    { ar:'🧩 المتاهة — صِل إلى النهاية', en:'Maze — find the way',
      p:function(st){ return "A printable children's MAZE themed around "+subjEn(st)+", with a clear START and FINISH and "+subjEn(st)+" at the goal. Add the Arabic instruction «ابدأ من هنا وصِل إلى النهاية». "+LINE_STYLE; } },
    { ar:'🔍 اكتشف الفروق الثمانية', en:'Find the 8 differences',
      p:function(st){ return "A printable FIND-THE-DIFFERENCE puzzle: two nearly identical friendly pictures of "+subjEn(st)+" "+sc(st.scene)+" with exactly 8 small differences and a row of 8 circles to tick. Arabic title «اكتشف الفروق». "+BOOK_STYLE; } },
    { ar:'✏️ صِل النقاط بالترتيب', en:'Connect the dots',
      p:function(st){ return "A printable DOT-TO-DOT that reveals "+subjEn(st)+" when connected, numbered with Eastern-Arabic numerals ١ ٢ ٣ …, with faint guides. Arabic instruction «صِل النقاط». "+LINE_STYLE; } },
    { ar:'👀 ابحث وعُدّ في الصورة', en:'Search & count',
      p:function(st){ return "A printable 'search and count' busy scene full of "+subjEn(st)+" and "+st.scene+" items to find and count, with a small checklist. Arabic title «ابحث وعُدّ». "+BOOK_STYLE; } },
  ];

  function esc(s){ return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
  function shuffle(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t; } return a; }

  function slotBlock(id,h,ph,prompt){
    var frame='<div class="slot-wrap"><div class="slot-frame"><image-slot id="'+id+'" style="width:100%;height:'+h+'px" placeholder="'+esc(ph)+'"></image-slot></div>';
    if(PUBLISH) return frame+'</div>';   // no Nano prompt in the publishing version
    return frame+'<div class="nano"><div class="nano-bar"><span class="nb-ic">🍌</span><span class="nb-t">وصف الرسمة لِـ Nano Banana — Art prompt</span>'+
      '<button class="nb-copy">📋 نسخ</button><span class="nb-chev">▾</span></div><div class="nano-body">'+esc(prompt)+'</div></div></div>';
  }
  function head(st,ic,kt){
    return '<div class="pg-head" style="--acc:'+st.color+'"><div class="pg-num" style="--acc:'+st.color+'">'+st.num+'</div>'+
      '<div class="pg-titles"><span class="ar">'+st.title.ar+'</span><span class="en lat">'+st.title.en+'</span></div>'+
      '<div class="pg-kind"><span class="ki">'+ic+'</span><span class="kt">'+kt+'</span></div></div>';
  }

  /* ── page builders ── */
  function buildStory(st){
    var leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',st.color);
    leaf.innerHTML=head(st,'📖','قصة Story')+
      slotBlock('slot-'+st.id+'-scene',320,'ضع رسمة '+subjAr(st)+' — Drop art',pScene(st))+
      '<div class="story"><span class="ar">'+st.complexity.ar+'</span><span class="en lat">'+st.complexity.en+'</span></div>'+
      '<div class="logic-key" style="--acc:'+st.color+'">🔑 '+st.logicKey.ar+'<span class="en lat">'+st.logicKey.en+'</span></div>'+
      '<div class="name-ribbon"><span class="nr-ic">🌟</span><div><div class="nr-lbl">مِن أسماء الله — A Name of Allah</div>'+
        '<div class="nr-name">'+st.nameOfAllah.name.ar+'<span class="en lat">'+st.nameOfAllah.name.en+'</span></div>'+
        '<div class="nr-mean">'+st.nameOfAllah.meaning.ar+'</div></div></div>';
    return leaf;
  }
  function buildActivity(st){
    var leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',st.color);
    var puz=PUZ[(st.num-1)%4];
    var tools=shuffle(st.match.pairs.map(function(p,i){return {i:i,t:p.tool};}));
    var jobs=shuffle(st.match.pairs.map(function(p,i){return {i:i,t:p.job};}));
    function col(arr,side){ return arr.map(function(o){return '<button class="mtile" data-key="'+o.i+'" data-side="'+side+'"><span class="ar">'+o.t.ar+'</span><span class="en lat">'+o.t.en+'</span></button>';}).join(''); }
    leaf.innerHTML=head(st,'🎯','نشاط Activity')+
      '<div class="flip"><div class="flip-face flip-front"><span class="flip-tag">🎲 السيّد «صُدفة» يقول — Mr Chance says</span>'+
        '<span class="flip-txt"><span class="ar">'+st.mrChance.ar+'</span></span><span class="flip-hint">اضغط للحقيقة — tap to reveal ↻</span></div>'+
        '<div class="flip-face flip-back"><span class="flip-tag">✅ الحقيقة — The truth</span>'+
        '<span class="flip-txt"><span class="ar">'+st.myth.bust.ar+'</span><span class="en lat">'+st.myth.bust.en+'</span></span></div></div>'+
      '<div class="match"><h4>🧩 '+st.match.title.ar+' <span class="en lat">'+st.match.title.en+'</span></h4>'+
        '<div class="match-cols"><div class="match-col">'+col(tools,'a')+'</div><div class="match-col">'+col(jobs,'b')+'</div></div>'+
        '<div class="match-done">🎉 أحسنت! — Great, all matched!</div></div>'+
      '<div class="puzzle-instr">'+puz.ar+'<br><span class="en lat" style="font-weight:600;color:var(--ink-soft)">'+puz.en+'</span></div>'+
      slotBlock('slot-'+st.id+'-puz',260,'ضع اللغز — Drop puzzle art',puz.p(st))+
      '<div class="acard exp"><span class="ac-ic">🧪</span><div class="ac-mid"><b>جرِّب بنفسك — Try it</b><div class="body"><span class="ar">'+st.experiment.ar+'</span><span class="en lat">'+st.experiment.en+'</span></div></div></div>'+
      '<div class="acard fam"><span class="ac-ic">👨‍👩‍👧</span><div class="ac-mid"><b>سؤال العائلة — Family question</b><div class="body"><span class="ar">'+st.familyQ.ar+'</span><span class="en lat">'+st.familyQ.en+'</span></div></div></div>';
    return leaf;
  }
  function buildColoring(st){
    var leaf=document.createElement('section'); leaf.className='leaf'; leaf.style.setProperty('--acc',st.color);
    leaf.innerHTML=head(st,'🖍️','تلوّن وتأمّل Colour')+
      slotBlock('slot-'+st.id+'-color',420,'ضع رسمة التلوين — Drop coloring line-art',pColor(st))+
      '<div class="reflect"><div class="ayah">'+st.reflection.ayah+'</div>'+
        '<div class="ref">'+st.reflection.ref.ar+' · '+st.reflection.ref.en+'</div>'+
        '<div class="explain"><span class="ar">'+st.reflection.explain.ar+'</span><span class="en lat">'+st.reflection.explain.en+'</span></div></div>'+
      '<div class="dua-trace"><span class="dt-ic">🤲</span><div style="flex:1"><div class="dt-lbl">ادْعُ وتتبَّع — Trace the du\'a</div>'+
        '<div class="dt-ar">'+st.dua.ar+'</div><div class="dt-en lat">'+st.dua.en+'</div></div></div>'+
      '<div class="badge-color"><div class="badge-circle" style="--acc:'+st.color+'">'+st.badge.icon+'</div>'+
        '<div class="bc-tx"><b>وسامك — Your badge</b><span class="en lat">'+st.badge.title.en+'</span><small>لوِّن الوسام «'+st.badge.title.ar+'»!</small></div></div>';
    return leaf;
  }
  function buildCover(){
    var leaf=document.createElement('section'); leaf.className='leaf dark';
    leaf.innerHTML='<div class="cover-mid"><div class="cover-kick">منارة العقيدة · FAITH MINARET</div>'+
      '<h1 class="cover-title">عجائب الخلق<span class="en lat">Wonders of Creation</span></h1>'+
      '<div style="width:60%;max-width:420px">'+slotBlock('slot-cover',280,'ضع رسمة الغلاف — Drop cover art',
        "A beautiful children's-book COVER «عجائب الخلق» (Wonders of Creation): a wonder-filled collage of a honeybee, a woodpecker, a camel, a penguin and stars around a glowing minaret of light. Joyful and magical. "+BOOK_STYLE)+'</div>'+
      '<div class="cover-sub">رحلةُ اليقين — ٢٠ محطّةً تكتشفُ فيها بدائعَ خلقِ الله، وتُثبتُ أنّ لكلِّ تصميمٍ مُصمِّماً حكيماً.<br>'+
        '<span class="en lat" style="font-size:.92rem;color:rgba(254,245,220,.7)">The Journey of Certainty — 20 stations of wonder proving every design has a wise Designer.</span></div>'+
      '<span class="cover-badge">📖 كتاب قصص وأنشطة · للأعمار ٦–١٢</span>'+
      '<button class="start-btn" id="startBtn">ابدأ الرحلة — Start ✦</button></div>';
    return leaf;
  }
  function buildHowto(){
    var leaf=document.createElement('section'); leaf.className='leaf dark';
    function row(ic,b,ar,en){ return '<div class="howto-row"><span class="hr-ic">'+ic+'</span><div class="hr-mid"><b>'+b+'</b><span class="ar">'+ar+'</span><span class="en lat">'+en+'</span></div></div>'; }
    leaf.innerHTML='<div class="pg-head"><div class="pg-titles"><span class="ar" style="color:var(--gold-lt)">كيف نستخدم الكتاب</span><span class="en lat">How to use this book</span></div><div class="pg-kind"><span class="ki">🧭</span><span class="kt">دليل</span></div></div>'+
      '<div class="howto-list">'+
        row('📖','اقلب الصفحات — Turn the pages','استخدم الأسهم على الجانبين أو مفاتيح ← → لِتقليبِ الصفحات كأنها كتابٌ حقيقي.','Use the side arrows or ← → keys to flip the pages like a real book.')+
        row('🖼️','املأ الرسمات — Fill the frames','كلُّ إطارٍ منقّطٍ مكانٌ لرسمة. وَلِّد الرسمةَ بِوصفِ «Nano Banana» المرفق، ثم اسحبها وأفلِتها داخلَ الإطار — وتبقى محفوظة.','Each dashed frame is an image slot. Generate the art with the attached Nano Banana prompt, then drag-and-drop it in — it stays saved.')+
        row('🎯','العب وتعلّم — Play & learn','في صفحة النشاط: اقلب بطاقةَ «صُدفة»، وصِل المطابقات بِلمسةٍ على البطاقتين، وجرِّب التجربة مع عائلتك.','On the activity page: flip the "Mr Chance" card, match the pairs by tapping two tiles, and try the experiment with your family.')+
        row('🖨️','اطبع — Print','بعدَ إضافةِ الصُّور، اطبع الكتابَ صفحةً لكلِّ ورقةِ A4 أو احفظهُ PDF.','When the pictures are in, print one page per A4 sheet, or save as PDF.')+
      '</div>'+
      '<div class="howto-note">⚠️ <b>النص العربي في الرسمات:</b> مولّد Nano Banana قد يُخطئ في رسم الحروف. وَلِّد ٢–٣ نسخٍ واختر الأفضل، أو اطلب الرسمةَ بلا نصٍّ وأضِف العنوانَ بنفسك.'+
        '<span class="en lat">Arabic text inside generated art can be distorted — generate a few versions and pick the best, or omit text and add titles yourself.</span></div>';
    return leaf;
  }
  function buildCert(){
    var leaf=document.createElement('section'); leaf.className='leaf dark';
    var badges=ST.map(function(s){return '<div class="cert-badge" title="'+esc(s.badge.title.ar)+'">'+s.badge.icon+'</div>';}).join('');
    leaf.innerHTML='<div class="cert-frame"><div class="cert-seal">🏅</div>'+
      '<div class="cert-kick">شهادة إتمام — CERTIFICATE OF COMPLETION</div>'+
      '<h2 class="cert-title">بطل اليقين<span class="en lat">Hero of Certainty</span></h2>'+
      '<div class="cert-line">هذه شهادةٌ بأنّ — This certifies that</div>'+
      '<div class="cert-name" contenteditable="true" spellcheck="false">✍️ اكتب اسمك</div>'+
      '<div class="cert-line">أتمَّ رحلةَ اليقين، وتأمَّلَ في عجائبِ خلقِ الله، وعرَفَ أنّ لكلِّ شيءٍ خالقاً حكيماً.<br>'+
        '<span class="en lat" style="font-size:.85rem;color:rgba(254,245,220,.7)">completed the Journey of Certainty and saw that every wonder has a wise Creator.</span></div>'+
      '<div class="cert-badges">'+badges+'</div></div>';
    return leaf;
  }

  /* ── page registry ── */
  var PAGES = PUBLISH ? [{t:'cover'}] : [{t:'cover'},{t:'howto'}];   // publish: skip how-to (app/prompt guidance)
  ST.forEach(function(st,i){ PAGES.push({t:'story',i:i},{t:'activity',i:i},{t:'coloring',i:i}); });
  PAGES.push({t:'cert'});
  var TOTAL=PAGES.length, cache={}, current=-1, animing=false, built=false;

  function nodeFor(idx){
    if(cache[idx]) return cache[idx];
    var d=PAGES[idx], n;
    if(d.t==='cover') n=buildCover(); else if(d.t==='howto') n=buildHowto();
    else if(d.t==='cert') n=buildCert(); else if(d.t==='story') n=buildStory(ST[d.i]);
    else if(d.t==='activity') n=buildActivity(ST[d.i]); else n=buildColoring(ST[d.i]);
    document.getElementById('book').appendChild(n); wire(n); cache[idx]=n; return n;
  }

  function wire(node){
    node.querySelectorAll('.nano-bar').forEach(function(bar){
      bar.addEventListener('click',function(e){ if(e.target.closest('.nb-copy')) return; bar.parentElement.classList.toggle('open'); });
    });
    node.querySelectorAll('.nb-copy').forEach(function(btn){
      btn.addEventListener('click',function(e){ e.stopPropagation();
        var body=btn.closest('.nano').querySelector('.nano-body');
        copyText(body.textContent.trim()).then(function(){ btn.classList.add('done'); var t=btn.textContent; btn.textContent='✓ تم';
          toast('✓ نُسخ وصف الرسمة — Art prompt copied'); setTimeout(function(){btn.classList.remove('done');btn.textContent=t;},1500); });
      });
    });
    var flip=node.querySelector('.flip'); if(flip) flip.addEventListener('click',function(){ flip.classList.toggle('flipped'); });
    var match=node.querySelector('.match'); if(match) wireMatch(match);
    var sb=node.querySelector('#startBtn'); if(sb) sb.addEventListener('click',function(){ go(2); });
  }
  function wireMatch(match){
    var sel=null, done=0, total=match.querySelectorAll('.mtile').length/2;
    match.querySelectorAll('.mtile').forEach(function(tile){
      tile.addEventListener('click',function(){
        if(tile.classList.contains('matched')) return;
        if(!sel){ sel=tile; tile.classList.add('sel'); return; }
        if(sel===tile){ tile.classList.remove('sel'); sel=null; return; }
        if(sel.dataset.side===tile.dataset.side){ sel.classList.remove('sel'); sel=tile; tile.classList.add('sel'); return; }
        if(sel.dataset.key===tile.dataset.key){ sel.classList.remove('sel'); sel.classList.add('matched'); tile.classList.add('matched'); sel=null; done++;
          if(done>=total) match.querySelector('.match-done').classList.add('show'); }
        else { var a=sel,b=tile; a.classList.add('wrong'); b.classList.add('wrong'); setTimeout(function(){a.classList.remove('wrong','sel');b.classList.remove('wrong');},380); sel=null; }
      });
    });
  }

  /* ── build all leaves (for print) ── */
  function buildAll(){ if(built) return; for(var i=0;i<TOTAL;i++) nodeFor(i); built=true; }

  /* ── navigation + flip ── */
  function go(idx,animate){
    idx=Math.max(0,Math.min(TOTAL-1,idx));
    if(idx===current||animing) return;
    var dir=idx>current?'next':'prev';
    var oldNode=current>=0?cache[current]:null;
    var node=nodeFor(idx);
    node.classList.remove('flat','turn-next','turn-prev','enter-next','enter-prev','animating');
    if(animate===false||current<0){ node.classList.add('show','flat'); if(oldNode) oldNode.classList.remove('show'); }
    else{
      animing=true;
      node.classList.add('show','enter-'+dir); void node.offsetWidth;
      node.classList.add('animating'); node.classList.remove('enter-'+dir); node.classList.add('flat');
      if(oldNode){ oldNode.classList.add('animating'); oldNode.classList.remove('flat'); oldNode.classList.add('turn-'+dir);
        setTimeout(function(){ oldNode.classList.remove('show','animating','turn-next','turn-prev'); },580); }
      setTimeout(function(){ animing=false; },590);
    }
    current=idx; afterShow();
  }
  function afterShow(){
    fit();
    try{ localStorage.setItem('yaqeenFlipPage',String(current)); }catch(e){}
    var d=PAGES[current], label;
    if(d.t==='cover') label='الغلاف Cover'; else if(d.t==='howto') label='دليل Guide';
    else if(d.t==='cert') label='الشهادة Certificate';
    else label='محطة '+ST[d.i].num+' · '+({story:'قصة',activity:'نشاط',coloring:'تلوين'}[d.t]);
    document.getElementById('pageno').textContent=(current+1)+' / '+TOTAL+'  —  '+label;
    document.getElementById('navPrev').disabled=current<=0;
    document.getElementById('navNext').disabled=current>=TOTAL-1;
    var jump=document.getElementById('jump'); if(jump) jump.value=String(current);
  }
  function fit(){
    var node=cache[current]; if(!node) return;
    var h=node.offsetHeight, book=document.getElementById('book');
    var scale=Math.min((window.innerWidth-150)/880,(window.innerHeight-92)/h,1.15);
    book.style.height=h+'px'; book.style.transform='scale('+scale+')';
  }

  function copyText(str){
    if(navigator.clipboard&&navigator.clipboard.writeText) return navigator.clipboard.writeText(str);
    return new Promise(function(res){var ta=document.createElement('textarea');ta.value=str;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');}catch(e){}document.body.removeChild(ta);res();});
  }
  var toastTimer;
  function toast(m){var t=document.getElementById('toast');t.textContent=m;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(function(){t.classList.remove('show');},1800);}

  function buildJump(){
    var jump=document.getElementById('jump'); if(!jump) return;
    var o='<option value="0">📕 الغلاف — Cover</option><option value="1">🧭 الدليل — How to use</option>';
    ST.forEach(function(st,i){ o+='<option value="'+(2+i*3)+'">'+st.num+'. '+st.title.ar+'</option>'; });
    o+='<option value="'+(TOTAL-1)+'">🏅 الشهادة — Certificate</option>';
    jump.innerHTML=o; jump.addEventListener('change',function(){ go(parseInt(jump.value,10)); });
  }

  window.addEventListener('DOMContentLoaded',function(){
    if(!ST.length){ document.getElementById('book').innerHTML='<p style="color:#fff;padding:2rem">تعذّر تحميل بيانات المحطات.</p>'; return; }

    if(PUBLISH){                                   // ── publish/print: all pages flat, clean, no chrome ──
      document.body.classList.add('publish');
      for(var i=0;i<TOTAL;i++){ var n=nodeFor(i); n.classList.add('show','flat'); }
      built=true;
      return;
    }

    buildJump();
    document.getElementById('navPrev').addEventListener('click',function(){ go(current-1); });
    document.getElementById('navNext').addEventListener('click',function(){ go(current+1); });
    var hb=document.getElementById('homeBtn'); if(hb) hb.addEventListener('click',function(){ go(0); });
    var pb=document.getElementById('printBtn'); if(pb) pb.addEventListener('click',function(){ buildAll(); setTimeout(function(){window.print();},300); });
    document.addEventListener('keydown',function(e){
      if(e.target.isContentEditable||/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return;
      if(e.key==='ArrowLeft'||e.key===' '){ e.preventDefault(); go(current+1); }
      else if(e.key==='ArrowRight'){ e.preventDefault(); go(current-1); }
    });
    window.addEventListener('beforeprint',buildAll);
    window.addEventListener('resize',fit);
    var saved=parseInt(localStorage.getItem('yaqeenFlipPage'),10);
    go(isNaN(saved)?0:saved,false);
  });

  window.YaqeenFlip={ go:function(i){go(i);}, total:function(){return TOTAL;}, buildAll:buildAll };
})();
