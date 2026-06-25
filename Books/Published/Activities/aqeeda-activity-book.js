/* ════════════════════════════════════════════════════════════════
   aqeeda-activity-book.js — منارة العقيدة · دفتر الأنشطة الكامل
   نسخةٌ غنيّةٌ عربيّةٌ بالكامل، صفحاتٌ مملوءةٌ بالنشاط، بدرجاتٍ لكلِّ نشاطٍ
   ومجموعٍ نهائيٍّ وشهادةِ تقدير. ٣ مستويات (window.ABOOK_LEVEL = 1|2|3).
   لا تحتاجُ أيَّ صورٍ خارجية — كلُّ الرسومِ SVG مولّدةٌ بالكود.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var LV = window.ABOOK_LEVEL || 1;
  var META = {
    1: { name:'المستوى الأول', sub:'للأعمار ٦–٧ · المكتشف الصغير', accent:'#1A8A5B', mascot:'🌱', wsSize:10, mazeC:11, mazeR:8 },
    2: { name:'المستوى الثاني', sub:'للأعمار ٨–٩ · المتأمّل', accent:'#2980B9', mascot:'🔭', wsSize:12, mazeC:14, mazeR:10 },
    3: { name:'المستوى الثالث', sub:'للأعمار ١٠–١٢ · الباحث عن اليقين', accent:'#8E44AD', mascot:'🧠', wsSize:13, mazeC:17, mazeR:12 }
  }[LV];

  /* per-level content pools so the 3 books differ */
  var POOL = {
    names: {
      1:[['الخالق','مَن صنعَ كلَّ شيء'],['الرزّاق','مَن يُعطي الطعام'],['النور','مصدرُ الضياء'],['الرحيم','كثيرُ الرحمة']],
      2:[['المصوّر','مَن صوّرَ الخلق'],['العليم','يعلمُ كلَّ شيء'],['الحفيظ','يحفظُ عبادَه'],['اللطيف','رفيقٌ بعباده'],['السميع','يسمعُ كلَّ صوت']],
      3:[['المهيمن','المسيطرُ على الخلق'],['البديع','المبدعُ بلا مثال'],['القدير','القادرُ على كلِّ شيء'],['الحكيم','صاحبُ الحكمة'],['الحيّ','الدائمُ الذي لا يموت'],['الباسط','يبسطُ الرزق']]
    },
    creatures: {
      1:[['🐝','النحلة'],['🐜','النملة'],['🦋','الفراشة'],['🐦','الطائر'],['🐟','السمكة']],
      2:[['🕷️','العنكبوت'],['🐧','البطريق'],['🐪','الجمل'],['🦅','النسر'],['🐢','السلحفاة'],['🦇','الخفّاش']],
      3:[['🧬','الحمض النووي'],['🐙','الأخطبوط'],['🦗','الجراد'],['🪺','هجرة الطيور'],['🦫','القندس'],['🌊','أعماق المحيط']]
    }
  };
  function names(){ return POOL.names[LV]; }
  function creatures(){ return POOL.creatures[LV]; }
  var AR='ابتثجحخدذرزسشصضطظعغفقكلمنهوي';

  /* ─────── generators (SVG/HTML, no images) ─────── */
  function maze(cols,rows){
    var n=cols*rows,c=[],i;for(i=0;i<n;i++)c.push({n:1,e:1,s:1,w:1,v:0});
    function ix(x,y){return y*cols+x;}
    var st=[],x=0,y=0;c[0].v=1;var vis=1;
    while(vis<n){var nb=[];
      if(y>0&&!c[ix(x,y-1)].v)nb.push('n');if(x<cols-1&&!c[ix(x+1,y)].v)nb.push('e');
      if(y<rows-1&&!c[ix(x,y+1)].v)nb.push('s');if(x>0&&!c[ix(x-1,y)].v)nb.push('w');
      if(nb.length){var d=nb[Math.floor(Math.random()*nb.length)];st.push(ix(x,y));
        if(d==='n'){c[ix(x,y)].n=0;y--;c[ix(x,y)].s=0;}else if(d==='e'){c[ix(x,y)].e=0;x++;c[ix(x,y)].w=0;}
        else if(d==='s'){c[ix(x,y)].s=0;y++;c[ix(x,y)].n=0;}else{c[ix(x,y)].w=0;x--;c[ix(x,y)].e=0;}
        c[ix(x,y)].v=1;vis++;}else{var p=st.pop();x=p%cols;y=Math.floor(p/cols);}}
    var cs=36,pad=5,W=cols*cs+pad*2,H=rows*cs+pad*2,d='';
    for(y=0;y<rows;y++)for(x=0;x<cols;x++){var cc=c[ix(x,y)],px=pad+x*cs,py=pad+y*cs;
      if(cc.n)d+='M'+px+' '+py+'h'+cs;if(cc.w)d+='M'+px+' '+py+'v'+cs;}
    d+='M'+pad+' '+pad+'v'+(rows*cs);d+='M'+(pad+cols*cs)+' '+pad+'v'+(rows*cs);
    d+='M'+(pad+cs)+' '+pad+'h'+((cols-1)*cs);d+='M'+pad+' '+(pad+rows*cs)+'h'+((cols-1)*cs);
    return '<svg class="gsvg" width="'+W+'" height="'+H+'" viewBox="0 0 '+W+' '+H+'">'+
      '<path d="'+d+'" stroke="#0A2540" stroke-width="2.6" fill="none" stroke-linecap="round"/>'+
      '<text x="'+(pad+cs/2)+'" y="'+(pad+cs/2+6)+'" font-size="18" text-anchor="middle">★</text>'+
      '<text x="'+(pad+(cols-.5)*cs)+'" y="'+(pad+(rows-.5)*cs+6)+'" font-size="18" text-anchor="middle">🏠</text></svg>';
  }
  function wordSearch(words,size){
    var g=[],i,j;for(i=0;i<size;i++){g[i]=[];for(j=0;j<size;j++)g[i][j]='';}
    var dirs=[[0,1],[1,0],[1,1],[-1,1]];
    words.forEach(function(w){var ok=false,t=0;while(!ok&&t++<300){var d=dirs[Math.floor(Math.random()*4)],
      r=Math.floor(Math.random()*size),c=Math.floor(Math.random()*size),good=true;
      for(i=0;i<w.length;i++){var rr=r+d[0]*i,cc=c+d[1]*i;if(rr<0||cc<0||rr>=size||cc>=size||(g[rr][cc]&&g[rr][cc]!==w[i])){good=false;break;}}
      if(good){for(i=0;i<w.length;i++)g[r+d[0]*i][c+d[1]*i]=w[i];ok=true;}}});
    for(i=0;i<size;i++)for(j=0;j<size;j++)if(!g[i][j])g[i][j]=AR[Math.floor(Math.random()*AR.length)];
    var h='<table class="cells">';for(i=0;i<size;i++){h+='<tr>';for(j=0;j<size;j++)h+='<td>'+g[i][j]+'</td>';h+='</tr>';}
    return h+'</table>';
  }
  function dotToDot(){
    var cx=300,cy=235,pts=[],i;for(i=0;i<10;i++){var a=-Math.PI/2+i*Math.PI/5,r=(i%2?70:170);pts.push([cx+r*Math.cos(a),cy+r*Math.sin(a)]);}
    var num=['١','٢','٣','٤','٥','٦','٧','٨','٩','١٠'];
    var s='<svg class="gsvg" width="600" height="470" viewBox="0 0 600 470" style="border:none">';
    pts.forEach(function(p,k){s+='<circle cx="'+p[0].toFixed(0)+'" cy="'+p[1].toFixed(0)+'" r="5" fill="#0A2540"/>'+
      '<text x="'+(p[0]+(p[0]>cx?16:-16)).toFixed(0)+'" y="'+(p[1]+(p[1]>cy?20:-10)).toFixed(0)+'" font-size="20" text-anchor="middle" fill="#C9A227" font-weight="bold">'+num[k]+'</text>';});
    return s+'</svg>';
  }
  function geoPattern(rings){
    var s='<svg class="gsvg" width="560" height="560" viewBox="0 0 200 200" style="border:none">',cx=100,cy=100,i;
    for(var ring=0;ring<rings;ring++){var R=22+ring*(78/rings),p1=[],p2=[];
      for(i=0;i<8;i++){var a=i*Math.PI/4,a2=a+Math.PI/8;p1.push([cx+R*Math.cos(a),cy+R*Math.sin(a)]);p2.push([cx+R*Math.cos(a2),cy+R*Math.sin(a2)]);}
      var d='';for(i=0;i<8;i++)d+=(i?'L':'M')+p1[i][0].toFixed(1)+' '+p1[i][1].toFixed(1)+'L'+p2[i][0].toFixed(1)+' '+p2[i][1].toFixed(1);
      s+='<path d="'+d+'Z" fill="none" stroke="#0A2540" stroke-width="0.8"/>';}
    for(i=0;i<8;i++){var a=i*Math.PI/4;s+='<line x1="100" y1="100" x2="'+(cx+92*Math.cos(a)).toFixed(1)+'" y2="'+(cy+92*Math.sin(a)).toFixed(1)+'" stroke="#0A2540" stroke-width="0.6"/>';}
    return s+'<circle cx="100" cy="100" r="92" fill="none" stroke="#0A2540" stroke-width="1.3"/><circle cx="100" cy="100" r="60" fill="none" stroke="#0A2540" stroke-width="0.8"/></svg>';
  }
  function scene(diff){
    return '<svg class="gsvg" width="360" height="300" viewBox="0 0 360 300"><rect width="360" height="300" fill="#fff"/>'+
      '<circle cx="290" cy="60" r="30" fill="none" stroke="#0A2540" stroke-width="2"/>'+(diff?'<circle cx="280" cy="54" r="10" fill="none" stroke="#0A2540" stroke-width="1.5"/>':'')+
      '<rect x="160" y="100" width="44" height="160" fill="none" stroke="#0A2540" stroke-width="2"/>'+
      '<polygon points="160,100 182,60 204,100" fill="none" stroke="#0A2540" stroke-width="2"/><circle cx="182" cy="52" r="6" fill="none" stroke="#0A2540" stroke-width="2"/>'+
      '<rect x="40" y="180" width="90" height="80" fill="none" stroke="#0A2540" stroke-width="2"/><polygon points="40,180 85,145 130,180" fill="none" stroke="#0A2540" stroke-width="2"/>'+
      (diff?'':'<text x="70" y="60" font-size="20" fill="#0A2540">✦</text>')+
      (diff?'<rect x="70" y="215" width="22" height="45" fill="none" stroke="#0A2540" stroke-width="1.5"/>':'')+
      (diff?'':'<circle cx="320" cy="250" r="8" fill="none" stroke="#0A2540" stroke-width="1.5"/>')+
      '<line x1="0" y1="260" x2="360" y2="260" stroke="#0A2540" stroke-width="2"/></svg>';
  }
  function lines(n){var s='';for(var i=0;i<n;i++)s+='<div class="wl"></div>';return s;}

  /* ─────── build the scored pages for this level ─────── */
  var P=[];
  function add(p){P.push(p);}

  add({kind:'متاهة',title:'متاهةُ اليقين',pts:10,
    instr:'ساعِدِ الطفلَ لِيصلَ من النجمةِ ★ إلى بيتِه 🏠 عبرَ الطريقِ الصحيح.',
    body:function(){return '<div class="fill center">'+maze(META.mazeC,META.mazeR)+'</div>';}});

  add({kind:'بحثُ كلمات',title:'كلماتُ التوحيد',pts:10,
    instr:'جِدِ الكلماتِ المخبّأةَ في الشبكة (أفقيّاً، رأسيّاً، أو مائلاً) وضَع حولها دائرة.',
    body:function(){var ws=names().map(function(n){return n[0].replace('ال','');}).slice(0,5).concat(['يقين','نور']).slice(0,LV+3);
      ws=['الله','يقين','نور','خالق','واحد'].concat(LV>1?['تأمل','حكمة']:[]).slice(0,4+LV);
      return wordSearch(ws,META.wsSize)+'<div class="bank">'+ws.map(function(w){return '<span class="pill">'+w+'</span>';}).join('')+'</div>';}});

  add({kind:'صِل النقاط',title:'صِل النقاطَ بالترتيب',pts:8,
    instr:'صِلِ النقاطَ من ١ إلى ١٠ لِتظهرَ نجمةُ اليقين، ثمّ لوّنها بألوانِك المفضّلة.',
    body:function(){return '<div class="fill center">'+dotToDot()+'</div>';}});

  add({kind:'توصيل',title:'صِلِ الاسمَ بأثرِه في الكون',pts:10,
    instr:'صِلْ بخطٍّ كلَّ اسمٍ من أسماءِ اللهِ الحسنى بما يدلُّ عليه من حولِك.',
    body:function(){var ns=names(),cr=creatures();
      var L='<div class="col">'+ns.map(function(x){return '<div class="mi">'+x[0]+'<span class="dot"></span></div>';}).join('')+'</div>';
      var R='<div class="col">'+cr.slice(0,ns.length).map(function(x){return '<div class="mi"><span class="dot"></span>'+x[0]+' '+x[1]+'</div>';}).join('')+'</div>';
      return '<div class="fill center"><div class="match">'+L+R+'</div></div>';}});

  add({kind:'ترتيبُ الحروف',title:'رتّبِ الحروفَ — أسماءُ الله',pts:10,
    instr:'رتّبِ الحروفَ المبعثرةَ لِتُكوّنَ اسماً من أسماءِ اللهِ الحسنى، واكتبه على السطر.',
    body:function(){var ns=names().slice(0,LV+3);
      return '<div class="fill">'+ns.map(function(x){var w=x[0],sc=w.split('').sort(function(){return Math.random()-.5;}).join(' ');
        return '<div class="row-line"><span class="pill big">'+sc+'</span><span class="grow"></span></div>';}).join('')+
        '<div class="ans">الحلول: '+ns.map(function(x){return x[0];}).join(' · ')+'</div></div>';}});

  add({kind:'مَن أنا؟',title:'بطاقاتُ عجائبِ الخلق',pts:12,
    instr:'اقرأِ التلميحاتِ وخمّنِ المخلوقَ صاحبَ الأعجوبة، واكتبِ اسمَه.',
    body:function(){
      var pool={1:[['🐝','أبني بيتي بستّةِ أضلاعٍ متساوية، وأصنعُ شراباً فيه شفاء.','النحلة'],['🐜','صغيرةٌ جدّاً لكنّي أحملُ أضعافَ وزني وأبني مدناً تحتَ الأرض.','النملة'],['🐟','أعيشُ في الماءِ وأتنفّسُ بخياشيمي، ولي زعانفُ للسباحة.','السمكة'],['🐦','أبني عشّي بمنقاري، وأطيرُ بجناحينِ خفيفين.','الطائر']],
        2:[['🕷️','أنسجُ خيطاً أرقَّ من الشعرةِ وأقوى من الفولاذِ بوزنِه.','العنكبوت'],['🐧','أعيشُ في أبردِ مكان، وريشي ودهني يدفئاني.','البطريق'],['🐪','أخزّنُ في سنامي وأصبرُ أيّاماً بلا ماء.','الجمل'],['🦇','أطيرُ ليلاً وأرى بأذني عبرَ صدى الصوت.','الخفّاش']],
        3:[['🧬','أحملُ شيفرةَ الحياةِ كلَّها في خيطٍ لولبيٍّ دقيق.','الحمض النووي'],['🪺','أسافرُ آلافَ الكيلومتراتِ ولا أضِلُّ الطريقَ أبداً.','الطيور المهاجرة'],['🦫','أبني سدّاً هندسيّاً يوقفُ النهر.','القندس'],['🐙','أغيّرُ لوني وشكلي في لحظةٍ وأفكّرُ بذكاء.','الأخطبوط']]}[LV];
      return '<div class="fill">'+pool.map(function(x){return '<div class="card-q"><span class="qe">'+x[0]+'</span><div class="qg"><div>'+x[1]+'</div><div class="wl"></div></div></div>';}).join('')+
        '<div class="ans">الحلول: '+pool.map(function(x){return x[2];}).join(' · ')+'</div></div>';}});

  add({kind:'حقيقة أم خرافة',title:'حقيقةٌ أم خرافة؟',pts:10,
    instr:'ضَع ✓ أمامَ الحقيقةِ و ✗ أمامَ الخرافة.',
    body:function(){var s=[['الكونُ نشأَ بالصدفةِ من لا شيء','✗'],['دقّةُ خلقِ النحلةِ دليلٌ على حكمةِ الخالق','✓'],['الإتقانُ العجيبُ لا يحتاجُ إلى صانع','✗'],['كلُّ أثرٍ يدلُّ على مؤثِّر، وكلُّ صنعةٍ تدلُّ على صانع','✓'],['الماءُ والهواءُ وُجِدا بمحضِ المصادفة','✗']].slice(0,LV+2);
      return '<div class="fill">'+s.map(function(x){return '<div class="fm"><span class="grow"><b>'+x[0]+'</b></span><span class="fmb">☐ ✓ &nbsp;&nbsp; ☐ ✗</span></div>';}).join('')+
        '<div class="ans">الحل: '+s.map(function(x){return x[1];}).join(' · ')+'</div></div>';}});

  add({kind:'فكُّ الشيفرة',title:'فُكَّ الشيفرة',pts:10,
    instr:'كلُّ رقمٍ يساوي حرفاً. استعِنْ بالمفتاحِ لِتقرأَ الجملةَ المخفيّة، واكتبها.',
    body:function(){
      var key=[['١','ا'],['٢','ل'],['٣','ه'],['٤','و'],['٥','ح'],['٦','د'],['٧','خ'],['٨','ق'],['٩','ر'],['١٠','ز']];
      var code=LV===1?'١ ٢ ٢ ٣  ١ ٢ ٤ ١ ٥ ٦':(LV===2?'١ ٢ ٧ ١ ٢ ٨  ٥ ٦':'١ ٢ ٩ ١ ١٠ ١ ٨');
      var ans=LV===1?'اللّٰه الواحد':(LV===2?'الخالق هو الله':'الرزّاق الله');
      return '<div class="fill"><div class="code">'+code+'</div>'+lines(2)+
        '<div class="bank">'+key.map(function(k){return '<span class="pill">'+k[0]+'='+k[1]+'</span>';}).join('')+'</div>'+
        '<div class="ans">الحل: '+ans+'</div></div>';}});

  add({kind:'ألغاز',title:'ألغازُ المتأمّل',pts:12,
    instr:'اقرأِ اللغزَ واكتبِ الجوابَ على السطر.',
    body:function(){var r=[['أُضيءُ السماءَ ليلاً، وكلّما تأمّلتَني ازددتَ يقيناً بعظمةِ خالقي. ما أنا؟','النجوم'],
      ['أنزلُ من السماءِ فتحيا بي الأرضُ بعدَ موتها. ما أنا؟','المطر'],
      ['لي لونٌ بعدَ المطرِ من سبعةِ ألوان. ما أنا؟','قوس قزح'],
      ['أدورُ والليلُ والنهارُ بسببي، ولا أتأخّرُ لحظة. ما أنا؟','الأرض/الشمس']].slice(0,LV+1);
      return '<div class="fill">'+r.map(function(x,i){return '<div class="riddle"><b>'+(i+1)+') </b>'+x[0]+lines(1)+'</div>';}).join('')+
        '<div class="ans">الحلول: '+r.map(function(x){return x[1];}).join(' · ')+'</div></div>';}});

  if(LV>=2) add({kind:'سودوكو',title:'سودوكو الرموز',pts:10,
    instr:'املأِ الشبكةَ بحيثُ يظهرُ كلُّ رمزٍ مرّةً واحدةً في كلِّ صفٍّ وعمودٍ ومربّع. الرموز: 🌙 ⭐ 🕌 📖',
    body:function(){var g=[['🌙','','','📖'],['','📖','🌙',''],['','🌙','📖',''],['📖','','','🌙']];
      var h='<div class="fill center"><table class="cells sudoku">';
      for(var r=0;r<4;r++){h+='<tr>';for(var c=0;c<4;c++){var cl=(c===1?'tr ':'')+(r===1?'tb ':'')+(g[r][c]?'gv':'');h+='<td class="'+cl+'">'+g[r][c]+'</td>';}h+='</tr>';}
      return h+'</table></div>';}});

  add({kind:'تصنيف',title:'صنّفْ: مخلوقٌ أم صفةُ الخالق؟',pts:10,
    instr:'اكتبْ كلَّ كلمةٍ من البنكِ في السلّةِ المناسبة.',
    body:function(){var bank=['الشمس','النحلة','الجبل','المطر','الإنسان','الشجرة','النجم','البحر'].slice(0,4+LV);
      return '<div class="fill"><div class="bank">'+bank.map(function(w){return '<span class="pill">'+w+'</span>';}).join('')+'</div>'+
        '<div class="bins"><div class="bin" style="--a:#1A8A5B"><h4>🌿 مخلوقات</h4></div><div class="bin" style="--a:#C9A227"><h4>✨ تدلُّ على عظمةِ الخالق</h4></div></div></div>';}});

  add({kind:'ترتيب',title:'رتّبْ خطواتِ التفكّر',pts:8,
    instr:'ضَعِ الأرقامَ ١-٤ لترتيبِ خطواتِ الوصولِ إلى اليقينِ بالخالق.',
    body:function(){var s=['أتأمّلُ في الكونِ من حولي','ألاحظُ الإتقانَ والنظامَ العجيب','أسألُ: مَن صنعَ هذا بإتقان؟','يطمئنُّ قلبي: إنّه اللهُ الخالقُ الحكيم'];
      return '<div class="fill">'+s.map(function(t){return '<div class="seq"><span class="seqbox"></span><div class="seqt"><b>'+t+'</b></div></div>';}).join('')+'</div>';}});

  add({kind:'تتبُّعُ الحروف',title:'تتبَّعِ اسمَ «اللّٰه»',pts:8,
    instr:'تتبَّعِ الحروفَ الباهتة، ثمّ اكتبها بنفسِك على الأسطر.',
    body:function(){return '<div class="fill"><div class="trow">'+['ا','ل','ل','ه'].map(function(c){return '<div class="tbox">'+c+'</div>';}).join('')+'</div>'+lines(3)+'</div>';}});

  add({kind:'التشكيل',title:'ضَعِ الحركةَ الصحيحة',pts:8,
    instr:'اكتبِ الحركةَ المناسبةَ (ـَ ـِ ـُ) فوقَ الحروفِ لِتُقرأَ الكلمةُ صحيحة.',
    body:function(){var w=[['رَبّ','رب'],['نُور','نور'],['خَلَقَ','خلق'],['يَقين','يقين'],['حَكيم','حكيم'],['عَليم','عليم']].slice(0,LV+3);
      return '<div class="fill center"><div class="tashkeel">'+w.map(function(x){return '<div class="tk"><div class="tkw">'+x[1]+'</div></div>';}).join('')+'</div></div>';}});

  if(LV>=2) add({kind:'وصلِ الحروف',title:'صِلِ الحروفَ لِتُكوّنَ كلمة',pts:10,
    instr:'صِلْ بينَ الحروفِ المنفصلةِ واكتبِ الكلمةَ موصولةً على السطر.',
    body:function(){var rows=[['خ ـ ا ـ ل ـ ق','خالق'],['ر ـ ز ـ ا ـ ق','رزّاق'],['ن ـ و ـ ر','نور'],['ح ـ ك ـ ي ـ م','حكيم']];
      return '<div class="fill">'+rows.map(function(x){return '<div class="row-line"><span class="jl">'+x[0]+'</span><span>⟵</span><span class="grow"></span></div>';}).join('')+
        '<div class="ans">الحلول: '+rows.map(function(x){return x[1];}).join(' · ')+'</div></div>';}});

  add({kind:'ورقةُ أسئلة',title:'اختبارُ التفكّر',pts:12,
    instr:'أجِبْ عنِ الأسئلةِ التالية.',
    body:function(){return '<div class="fill" style="font-size:1.05rem;line-height:2">'+
      '<p><b>١) اختر:</b> مَن خلقَ النجومَ والكواكب؟<br>◯ الصدفة &nbsp; ◯ اللهُ الخالق &nbsp; ◯ العلماء</p>'+
      '<p><b>٢) صحٌّ أم خطأ:</b> كلُّ تصميمٍ بديعٍ لا بدَّ له من مُصمِّم. &nbsp; ☐ صح &nbsp; ☐ خطأ</p>'+
      '<p><b>٣) أكمل:</b> كلّما تأمّلتُ في مخلوقٍ صغير ازددتُ ________ باللهِ خالقي.</p>'+lines(1)+
      '<p><b>٤) اذكر</b> ثلاثةً من عجائبِ خلقِ اللهِ تعرفُها:</p>'+lines(2)+'</div>';}});

  add({kind:'اكتشفِ الفروق',title:'اكتشفِ الفروقَ الأربعة',pts:10,
    instr:'قارِنِ الصورتينِ وضَع دائرةً حولَ الفروقِ الأربعةِ في الصورةِ الثانية.',
    body:function(){return '<div class="fill center" style="gap:24px;flex-wrap:wrap">'+scene(false)+scene(true)+'</div>';}});

  add({kind:'تلوينٌ هندسي',title:'زخرفةُ النورِ الثُّمانية',pts:8,
    instr:'لوّنِ الزخرفةَ الإسلاميّةَ بألوانِك، وتأمّلِ النظامَ والتناسقَ فيها.',
    body:function(){return '<div class="fill center">'+geoPattern(LV+2)+'</div>';}});

  add({kind:'قصٌّ ولصق',title:'مجسّمُ منارةِ العقيدة',pts:8,
    instr:'قُصَّ على الخطوطِ المتّصلة، واطوِ على المتقطّعة، والصِقِ الألسنةَ لِتبنيَ منارتَك.',
    body:function(){return '<div class="fill center"><svg class="gsvg" width="440" height="500" viewBox="0 0 440 500" style="border:none">'+
      '<rect x="130" y="140" width="180" height="280" fill="none" stroke="#0A2540" stroke-width="2"/>'+
      '<polygon points="130,140 220,60 310,140" fill="none" stroke="#0A2540" stroke-width="2"/><circle cx="220" cy="50" r="9" fill="none" stroke="#0A2540" stroke-width="2"/>'+
      '<rect x="130" y="420" width="180" height="44" fill="none" stroke="#0A2540" stroke-width="2" stroke-dasharray="6 5"/>'+
      '<rect x="68" y="180" width="62" height="200" fill="none" stroke="#0A2540" stroke-width="1.5" stroke-dasharray="6 5"/>'+
      '<rect x="310" y="180" width="62" height="200" fill="none" stroke="#0A2540" stroke-width="1.5" stroke-dasharray="6 5"/>'+
      '<text x="220" y="290" font-size="26" text-anchor="middle">★</text></svg></div>'+
      '<div class="legend">— قص ··· اطوِ — الصِق الألسنة الجانبية —</div>';}});

  add({kind:'جدولُ متابعة',title:'جدولُ عاداتِ اليقين الأسبوعي',pts:10,
    instr:'لوّنِ النجمةَ في كلِّ يومٍ تُتمُّ فيه العادة.',
    body:function(){var days=['الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
      var hb=[['🌅','تأمّلتُ في مخلوق'],['🤲','قلتُ سبحانَ الخالق'],['📖','تعلّمتُ اسماً لله'],['💭','سألتُ سؤالاً عنِ الكون'],['⭐','شكرتُ اللهَ على نعمة']];
      var h='<div class="fill"><table class="track"><tr><th>العادة</th>'+days.map(function(d){return '<th>'+d+'</th>';}).join('')+'</tr>';
      hb.forEach(function(x){h+='<tr><td class="rl">'+x[0]+' '+x[1]+'</td>'+days.map(function(){return '<td><div class="star"></div></td>';}).join('')+'</tr>';});
      return h+'</table></div>';}});

  add({kind:'بنغو',title:'بنغو التفكّر في الخلق',pts:10,
    instr:'أكمِلْ كلَّ مهمّةٍ وضَع علامةً عليها. مَن أكملَ صفّاً أو عموداً كاملاً يفوز!',
    body:function(){var c=[['🐜','راقبتُ نملة'],['🌟','عددتُ النجوم'],['🌸','تأمّلتُ زهرة'],['💧','تتبّعتُ قطرةَ ماء'],['🐝','شاهدتُ نحلة'],['🌈','رأيتُ قوسَ قزح'],['🍯','تذوّقتُ العسل'],['🦋','تابعتُ فراشة'],['🌙','نظرتُ للقمر']];
      var h='<div class="fill center"><table class="bingo">';for(var r=0;r<3;r++){h+='<tr>';for(var cc=0;cc<3;cc++){var x=c[r*3+cc];h+='<td><span class="be">'+x[0]+'</span>'+x[1]+'</td>';}h+='</tr>';}
      return h+'</table></div>';}});

  add({kind:'تأمّلٌ سلوكي',title:'ماذا أفعل؟',pts:12,
    instr:'اقرأِ الموقفَ واكتبْ ماذا ستفعلُ ولماذا.',
    body:function(){return '<div class="fill" style="font-size:1.05rem;line-height:1.9">'+
      '<div class="situation"><b>الموقف:</b> قالَ لكَ صديقٌ: «الكونُ وُجِدَ بالصدفةِ بلا خالق». بماذا تُجيبُه بأدبٍ وعقل؟</div>'+lines(4)+
      '<p style="margin-top:14px"><b>فكرةٌ مساعِدة:</b> هل رأيتَ بيتاً بُنيَ بلا بنّاء؟ أو كتاباً كُتِبَ بلا كاتب؟ فكيفَ بالكونِ العظيم؟</p></div>';}});

  /* ─────── final score tally + certificate are added by render ─────── */
  window.ABOOK = { LV:LV, META:META, pages:P };
})();
