/* ════════════════════════════════════════════════════════════════
   activity-book-core.js — generic Arabic activity-book engine.
   Reads window.ABOOK_CFG (themed content per corner) + window.ABOOK_LEVEL.
   Builds window.ABOOK {LV, META, pages} consumed by aqeeda-book-shell.js.
   Full-page, scored, no external images (all SVG generated in code).
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var CFG = window.ABOOK_CFG || {};
  var LV = window.ABOOK_LEVEL || 1;
  var META = CFG.levels[LV];
  var EN = CFG.lang === 'en';
  var AR='ابتثجحخدذرزسشصضطظعغفقكلمنهوي';
  var ENL='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function pick(o){ return o[LV]||o[1]; }
  function tr(ar,en){ return EN?en:ar; }

  /* ---- generators ---- */
  function maze(cols,rows){
    var n=cols*rows,c=[],i;for(i=0;i<n;i++)c.push({n:1,e:1,s:1,w:1,v:0});
    function ix(x,y){return y*cols+x;}
    var st=[],x=0,y=0;c[0].v=1;var vis=1;
    while(vis<n){var nb=[];if(y>0&&!c[ix(x,y-1)].v)nb.push('n');if(x<cols-1&&!c[ix(x+1,y)].v)nb.push('e');if(y<rows-1&&!c[ix(x,y+1)].v)nb.push('s');if(x>0&&!c[ix(x-1,y)].v)nb.push('w');
      if(nb.length){var d=nb[Math.floor(Math.random()*nb.length)];st.push(ix(x,y));
        if(d==='n'){c[ix(x,y)].n=0;y--;c[ix(x,y)].s=0;}else if(d==='e'){c[ix(x,y)].e=0;x++;c[ix(x,y)].w=0;}else if(d==='s'){c[ix(x,y)].s=0;y++;c[ix(x,y)].n=0;}else{c[ix(x,y)].w=0;x--;c[ix(x,y)].e=0;}
        c[ix(x,y)].v=1;vis++;}else{var p=st.pop();x=p%cols;y=Math.floor(p/cols);}}
    var cs=36,pad=5,W=cols*cs+pad*2,H=rows*cs+pad*2,d='';
    for(y=0;y<rows;y++)for(x=0;x<cols;x++){var cc=c[ix(x,y)],px=pad+x*cs,py=pad+y*cs;if(cc.n)d+='M'+px+' '+py+'h'+cs;if(cc.w)d+='M'+px+' '+py+'v'+cs;}
    d+='M'+pad+' '+pad+'v'+(rows*cs)+'M'+(pad+cols*cs)+' '+pad+'v'+(rows*cs)+'M'+(pad+cs)+' '+pad+'h'+((cols-1)*cs)+'M'+pad+' '+(pad+rows*cs)+'h'+((cols-1)*cs);
    return '<svg class="gsvg" width="'+W+'" height="'+H+'" viewBox="0 0 '+W+' '+H+'"><path d="'+d+'" stroke="#0A2540" stroke-width="2.6" fill="none" stroke-linecap="round"/>'+
      '<text x="'+(pad+cs/2)+'" y="'+(pad+cs/2+6)+'" font-size="18" text-anchor="middle">★</text><text x="'+(pad+(cols-.5)*cs)+'" y="'+(pad+(rows-.5)*cs+6)+'" font-size="18" text-anchor="middle">'+(CFG.mazeGoal||'🏠')+'</text></svg>';
  }
  function wordSearch(words,size){
    var g=[],i,j;for(i=0;i<size;i++){g[i]=[];for(j=0;j<size;j++)g[i][j]='';}
    var dirs=[[0,1],[1,0],[1,1],[-1,1]];
    words.forEach(function(w){var ok=false,t=0;while(!ok&&t++<300){var d=dirs[Math.floor(Math.random()*4)],r=Math.floor(Math.random()*size),c=Math.floor(Math.random()*size),good=true;
      for(i=0;i<w.length;i++){var rr=r+d[0]*i,cc=c+d[1]*i;if(rr<0||cc<0||rr>=size||cc>=size||(g[rr][cc]&&g[rr][cc]!==w[i])){good=false;break;}}
      if(good){for(i=0;i<w.length;i++)g[r+d[0]*i][c+d[1]*i]=w[i];ok=true;}}});
    for(i=0;i<size;i++)for(j=0;j<size;j++)if(!g[i][j])g[i][j]=(EN?ENL:AR)[Math.floor(Math.random()*(EN?ENL:AR).length)];
    var h='<table class="cells">';for(i=0;i<size;i++){h+='<tr>';for(j=0;j<size;j++)h+='<td>'+g[i][j]+'</td>';h+='</tr>';}return h+'</table>';
  }
  function dotToDot(){var cx=300,cy=235,pts=[],i;for(i=0;i<10;i++){var a=-Math.PI/2+i*Math.PI/5,r=(i%2?70:170);pts.push([cx+r*Math.cos(a),cy+r*Math.sin(a)]);}
    var num=EN?['1','2','3','4','5','6','7','8','9','10']:['١','٢','٣','٤','٥','٦','٧','٨','٩','١٠'];var s='<svg class="gsvg" width="600" height="470" viewBox="0 0 600 470" style="border:none">';
    pts.forEach(function(p,k){s+='<circle cx="'+p[0].toFixed(0)+'" cy="'+p[1].toFixed(0)+'" r="5" fill="#0A2540"/><text x="'+(p[0]+(p[0]>cx?16:-16)).toFixed(0)+'" y="'+(p[1]+(p[1]>cy?20:-10)).toFixed(0)+'" font-size="20" text-anchor="middle" fill="#C9A227" font-weight="bold">'+num[k]+'</text>';});return s+'</svg>';}
  function geoPattern(rings){var s='<svg class="gsvg" width="560" height="560" viewBox="0 0 200 200" style="border:none">',cx=100,cy=100,i;
    for(var ring=0;ring<rings;ring++){var R=22+ring*(78/rings),p1=[],p2=[];for(i=0;i<8;i++){var a=i*Math.PI/4,a2=a+Math.PI/8;p1.push([cx+R*Math.cos(a),cy+R*Math.sin(a)]);p2.push([cx+R*Math.cos(a2),cy+R*Math.sin(a2)]);}
      var d='';for(i=0;i<8;i++)d+=(i?'L':'M')+p1[i][0].toFixed(1)+' '+p1[i][1].toFixed(1)+'L'+p2[i][0].toFixed(1)+' '+p2[i][1].toFixed(1);s+='<path d="'+d+'Z" fill="none" stroke="#0A2540" stroke-width="0.8"/>';}
    for(i=0;i<8;i++){var a=i*Math.PI/4;s+='<line x1="100" y1="100" x2="'+(cx+92*Math.cos(a)).toFixed(1)+'" y2="'+(cy+92*Math.sin(a)).toFixed(1)+'" stroke="#0A2540" stroke-width="0.6"/>';}
    return s+'<circle cx="100" cy="100" r="92" fill="none" stroke="#0A2540" stroke-width="1.3"/><circle cx="100" cy="100" r="60" fill="none" stroke="#0A2540" stroke-width="0.8"/></svg>';}
  function scene(diff){return '<svg class="gsvg" width="360" height="300" viewBox="0 0 360 300"><rect width="360" height="300" fill="#fff"/>'+
    '<circle cx="290" cy="60" r="30" fill="none" stroke="#0A2540" stroke-width="2"/>'+(diff?'<circle cx="280" cy="54" r="10" fill="none" stroke="#0A2540" stroke-width="1.5"/>':'')+
    '<rect x="160" y="100" width="44" height="160" fill="none" stroke="#0A2540" stroke-width="2"/><polygon points="160,100 182,60 204,100" fill="none" stroke="#0A2540" stroke-width="2"/><circle cx="182" cy="52" r="6" fill="none" stroke="#0A2540" stroke-width="2"/>'+
    '<rect x="40" y="180" width="90" height="80" fill="none" stroke="#0A2540" stroke-width="2"/><polygon points="40,180 85,145 130,180" fill="none" stroke="#0A2540" stroke-width="2"/>'+
    (diff?'':'<text x="70" y="60" font-size="20" fill="#0A2540">✦</text>')+(diff?'<rect x="70" y="215" width="22" height="45" fill="none" stroke="#0A2540" stroke-width="1.5"/>':'')+(diff?'':'<circle cx="320" cy="250" r="8" fill="none" stroke="#0A2540" stroke-width="1.5"/>')+
    '<line x1="0" y1="260" x2="360" y2="260" stroke="#0A2540" stroke-width="2"/></svg>';}
  function lines(n){var s='';for(var i=0;i<n;i++)s+='<div class="wl"></div>';return s;}
  function craft(){ return CFG.craftSvg ? CFG.craftSvg() :
    '<svg class="gsvg" width="440" height="500" viewBox="0 0 440 500" style="border:none"><rect x="130" y="140" width="180" height="280" fill="none" stroke="#0A2540" stroke-width="2"/><polygon points="130,140 220,60 310,140" fill="none" stroke="#0A2540" stroke-width="2"/><circle cx="220" cy="50" r="9" fill="none" stroke="#0A2540" stroke-width="2"/><rect x="130" y="420" width="180" height="44" fill="none" stroke="#0A2540" stroke-width="2" stroke-dasharray="6 5"/><rect x="68" y="180" width="62" height="200" fill="none" stroke="#0A2540" stroke-width="1.5" stroke-dasharray="6 5"/><rect x="310" y="180" width="62" height="200" fill="none" stroke="#0A2540" stroke-width="1.5" stroke-dasharray="6 5"/><text x="220" y="290" font-size="26" text-anchor="middle">★</text></svg>'; }

  var T=CFG.t; /* themed text bundle */
  var P=[];function add(p){P.push(p);}
  function ansLbl(){ return EN?'Answers: ':'الحلول: '; }

  add({kind:tr('متاهة','Maze'),title:T.mazeTitle,pts:10,instr:T.mazeInstr,body:function(){return '<div class="fill center">'+maze(META.mazeC,META.mazeR)+'</div>';}});
  add({kind:tr('بحثُ كلمات','Word Search'),title:T.wsTitle,pts:10,instr:tr('جِدِ الكلماتِ المخبّأةَ في الشبكة (أفقيّاً، رأسيّاً، أو مائلاً) وضَع حولها دائرة.','Find the hidden words in the grid (across, down, or diagonal) and circle them.'),
    body:function(){var src=(CFG.pools.wordsearch&&pick(CFG.pools.wordsearch))||pick(CFG.pools.names).map(function(x){return (x[0]||'').replace(/^ال/,'').replace(/\s.*/,'').toUpperCase();}).filter(function(w){return w.length>=2&&w.length<=7;}).slice(0,LV+3);
      var ws=src;return wordSearch(ws,META.wsSize)+'<div class="bank">'+ws.map(function(w){return '<span class="pill">'+w+'</span>';}).join('')+'</div>';}});
  add({kind:tr('صِل النقاط','Dot-to-Dot'),title:tr('صِل النقاطَ بالترتيب','Connect the Dots'),pts:8,instr:tr('صِلِ النقاطَ من ١ إلى ١٠ لِتظهرَ النجمة، ثمّ لوّنها.','Join the dots 1→10 to reveal the star, then colour it.'),body:function(){return '<div class="fill center">'+dotToDot()+'</div>';}});
  add({kind:tr('توصيل','Matching'),title:T.matchTitle,pts:10,instr:T.matchInstr,body:function(){var ns=pick(CFG.pools.names),it=pick(CFG.pools.items);
    var Lc='<div class="col">'+ns.map(function(x){return '<div class="mi">'+x[0]+'<span class="dot"></span></div>';}).join('')+'</div>';
    var Rc='<div class="col">'+it.slice(0,ns.length).map(function(x){return '<div class="mi"><span class="dot"></span>'+x[0]+' '+x[1]+'</div>';}).join('')+'</div>';
    return '<div class="fill center"><div class="match">'+Lc+Rc+'</div></div>';}});
  add({kind:tr('ترتيبُ الحروف','Unscramble'),title:T.anagramTitle,pts:10,instr:tr('رتّبِ الحروفَ المبعثرةَ لِتُكوّنَ الكلمة، واكتبها على السطر.','Rearrange the scrambled letters to form the word, then write it on the line.'),
    body:function(){var ns=pick(CFG.pools.names);return '<div class="fill">'+ns.map(function(x){var sc=x[0].split('').sort(function(){return Math.random()-.5;}).join(' ');return '<div class="row-line"><span class="pill big">'+sc+'</span><span class="grow"></span></div>';}).join('')+'<div class="ans">'+ansLbl()+ns.map(function(x){return x[0];}).join(' · ')+'</div></div>';}});
  add({kind:tr('مَن أنا؟','Who Am I?'),title:T.whoTitle,pts:12,instr:tr('اقرأِ التلميحاتِ وخمّنِ الجواب، واكتبه على السطر.','Read the clues, guess the answer, and write it on the line.'),
    body:function(){var w=pick(CFG.pools.whoami);return '<div class="fill">'+w.map(function(x){return '<div class="card-q"><span class="qe">'+x[0]+'</span><div class="qg"><div>'+x[1]+'</div><div class="wl"></div></div></div>';}).join('')+'<div class="ans">'+ansLbl()+w.map(function(x){return x[2];}).join(' · ')+'</div></div>';}});
  add({kind:tr('حقيقة أم خرافة','Fact or Myth'),title:tr('حقيقةٌ أم خطأ؟','Fact or Myth?'),pts:10,instr:tr('ضَع ✓ أمامَ الصحيحةِ و ✗ أمامَ الخطأ.','Mark ✓ for true and ✗ for false.'),
    body:function(){var s=CFG.pools.factmyth.slice(0,LV+2);return '<div class="fill">'+s.map(function(x){return '<div class="fm"><span class="grow"><b>'+x[0]+'</b></span><span class="fmb">☐ ✓ &nbsp;&nbsp; ☐ ✗</span></div>';}).join('')+'<div class="ans">'+tr('الحل: ','Key: ')+s.map(function(x){return x[1];}).join(' · ')+'</div></div>';}});
  add({kind:tr('فكُّ الشيفرة','Crack the Code'),title:tr('فُكَّ الشيفرة','Crack the Code'),pts:10,instr:tr('كلُّ رقمٍ يساوي حرفاً. استعِنْ بالمفتاحِ لِتقرأَ الجملةَ المخفيّة.','Each number is a letter. Use the key to read the hidden phrase.'),
    body:function(){var c=pick(CFG.pools.cipher),key=CFG.cipherKey;return '<div class="fill"><div class="code">'+c.code+'</div>'+lines(2)+'<div class="bank">'+key.map(function(k){return '<span class="pill">'+k[0]+'='+k[1]+'</span>';}).join('')+'</div><div class="ans">'+tr('الحل: ','Answer: ')+c.ans+'</div></div>';}});
  add({kind:tr('ألغاز','Riddles'),title:tr('ألغازٌ ممتعة','Fun Riddles'),pts:12,instr:tr('اقرأِ اللغزَ واكتبِ الجوابَ على السطر.','Read each riddle and write the answer on the line.'),
    body:function(){var r=pick(CFG.pools.riddles);return '<div class="fill">'+r.map(function(x,i){return '<div class="riddle"><b>'+(i+1)+') </b>'+x[0]+lines(1)+'</div>';}).join('')+'<div class="ans">'+ansLbl()+r.map(function(x){return x[1];}).join(' · ')+'</div></div>';}});
  if(LV>=2) add({kind:tr('سودوكو','Sudoku'),title:tr('سودوكو الرموز','Symbol Sudoku'),pts:10,instr:tr('املأِ الشبكةَ بحيثُ يظهرُ كلُّ رمزٍ مرّةً واحدةً في كلِّ صفٍّ وعمودٍ ومربّع. الرموز: ','Fill the grid so each symbol appears once per row, column and box. Symbols: ')+(CFG.sudokuSyms||['🌙','⭐','🕌','📖']).join(' '),
    body:function(){var sy=CFG.sudokuSyms||['🌙','⭐','🕌','📖'];var g=[[sy[0],'','',sy[3]],['',sy[3],sy[0],''],['',sy[0],sy[3],''],[sy[3],'','',sy[0]]];
      var h='<div class="fill center"><table class="cells sudoku">';for(var r=0;r<4;r++){h+='<tr>';for(var c=0;c<4;c++){var cl=(c===1?'tr ':'')+(r===1?'tb ':'')+(g[r][c]?'gv':'');h+='<td class="'+cl+'">'+g[r][c]+'</td>';}h+='</tr>';}return h+'</table></div>';}});
  add({kind:tr('تصنيف','Sorting'),title:T.sortTitle,pts:10,instr:tr('اكتبْ كلَّ كلمةٍ من البنكِ في السلّةِ المناسبة.','Write each word from the bank into the right bin.'),
    body:function(){var so=CFG.pools.sort,bank=so.bank.slice(0,4+LV);return '<div class="fill"><div class="bank">'+bank.map(function(w){return '<span class="pill">'+w+'</span>';}).join('')+'</div><div class="bins"><div class="bin" style="--a:#1A8A5B"><h4>'+so.binA+'</h4></div><div class="bin" style="--a:#C9A227"><h4>'+so.binB+'</h4></div></div></div>';}});
  add({kind:tr('ترتيب','Sequencing'),title:T.seqTitle,pts:8,instr:tr('ضَعِ الأرقامَ بالترتيبِ الصحيح.','Number the steps in the correct order.'),
    body:function(){var s=CFG.pools.sequence;return '<div class="fill">'+s.map(function(t){return '<div class="seq"><span class="seqbox"></span><div class="seqt"><b>'+t+'</b></div></div>';}).join('')+'</div>';}});
  add({kind:tr('تتبُّعُ الحروف','Tracing'),title:tr('تتبَّعِ كلمةَ «'+CFG.traceWord+'»','Trace the word "'+CFG.traceWord+'"'),pts:8,instr:tr('تتبَّعِ الحروفَ الباهتة، ثمّ اكتبها بنفسِك على الأسطر.','Trace the faint letters, then write them yourself on the lines.'),
    body:function(){return '<div class="fill"><div class="trow">'+CFG.traceWord.split('').map(function(c){return '<div class="tbox">'+c+'</div>';}).join('')+'</div>'+lines(3)+'</div>';}});
  if(!EN) add({kind:'التشكيل',title:'ضَعِ الحركةَ الصحيحة',pts:8,instr:'اكتبِ الحركةَ المناسبةَ (ـَ ـِ ـُ) فوقَ الحروفِ لِتُقرأَ الكلمةُ صحيحة.',
    body:function(){var w=pick(CFG.pools.tashkeel);return '<div class="fill center"><div class="tashkeel">'+w.map(function(x){return '<div class="tk"><div class="tkw">'+x+'</div></div>';}).join('')+'</div></div>';}});
  if(LV>=2&&CFG.pools.joinwords) add({kind:tr('وصلِ الحروف','Join the Letters'),title:tr('صِلِ الحروفَ لِتُكوّنَ كلمة','Join the Letters into a Word'),pts:10,instr:tr('صِلْ بينَ الحروفِ المنفصلةِ واكتبِ الكلمةَ موصولةً على السطر.','Join the separated letters and write the word on the line.'),
    body:function(){var rows=CFG.pools.joinwords;return '<div class="fill">'+rows.map(function(x){return '<div class="row-line"><span class="jl">'+x[0]+'</span><span>'+tr('⟵','→')+'</span><span class="grow"></span></div>';}).join('')+'<div class="ans">'+ansLbl()+rows.map(function(x){return x[1];}).join(' · ')+'</div></div>';}});
  add({kind:tr('ورقةُ أسئلة','Worksheet'),title:tr('ورقةُ الأسئلة','Question Worksheet'),pts:12,instr:tr('أجِبْ عنِ الأسئلةِ التالية.','Answer the questions below.'),body:function(){return '<div class="fill" style="font-size:1.05rem;line-height:2">'+CFG.quiz+lines(2)+'</div>';}});
  add({kind:tr('اكتشفِ الفروق','Spot the Difference'),title:tr('اكتشفِ الفروقَ الأربعة','Spot the 4 Differences'),pts:10,instr:tr('قارِنِ الصورتينِ وضَع دائرةً حولَ الفروقِ الأربعةِ في الصورةِ الثانية.','Compare the two pictures and circle the 4 differences in the second.'),body:function(){return '<div class="fill center" style="gap:24px;flex-wrap:wrap">'+scene(false)+scene(true)+'</div>';}});
  add({kind:tr('تلوينٌ هندسي','Geometry Colouring'),title:tr('زخرفةٌ إسلاميّة','Islamic Pattern'),pts:8,instr:tr('لوّنِ الزخرفةَ الإسلاميّةَ بألوانِك، وتأمّلِ التناسقَ فيها.','Colour this Islamic geometric pattern and admire its symmetry.'),body:function(){return '<div class="fill center">'+geoPattern(LV+2)+'</div>';}});
  add({kind:tr('قصٌّ ولصق','Craft'),title:T.craftTitle,pts:8,instr:tr('قُصَّ على الخطوطِ المتّصلة، واطوِ على المتقطّعة، والصِقِ الألسنة.','Cut on solid lines, fold on dashed lines, and glue the tabs.'),body:function(){return '<div class="fill center">'+craft()+'</div><div class="legend">'+tr('— قص ··· اطوِ — الصِق —','— cut ··· fold — glue —')+'</div>';}});
  add({kind:tr('جدولُ متابعة','Habit Tracker'),title:T.trackTitle,pts:10,instr:tr('لوّنِ النجمةَ في كلِّ يومٍ تُتمُّ فيه العمل.','Colour the star each day you complete the habit.'),
    body:function(){var days=EN?['Sun','Mon','Tue','Wed','Thu','Fri','Sat']:['الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];var hb=CFG.pools.habits;
      var h='<div class="fill"><table class="track"><tr><th>'+tr('العمل','Habit')+'</th>'+days.map(function(d){return '<th>'+d+'</th>';}).join('')+'</tr>';
      hb.forEach(function(x){h+='<tr><td class="rl">'+x+'</td>'+days.map(function(){return '<td><div class="star"></div></td>';}).join('')+'</tr>';});return h+'</table></div>';}});
  add({kind:tr('بنغو','Bingo'),title:T.bingoTitle,pts:10,instr:tr('أكمِلْ كلَّ مهمّةٍ وضَع علامةً عليها. مَن أكملَ صفّاً كاملاً يفوز!','Complete each task and mark it. A full row wins!'),
    body:function(){var c=CFG.pools.bingo;var h='<div class="fill center"><table class="bingo">';for(var r=0;r<3;r++){h+='<tr>';for(var cc=0;cc<3;cc++){var x=c[r*3+cc];h+='<td><span class="be">'+x[0]+'</span>'+x[1]+'</td>';}h+='</tr>';}return h+'</table></div>';}});
  add({kind:tr('تأمّلٌ سلوكي','Reflection'),title:tr('ماذا أفعل؟','What Would I Do?'),pts:12,instr:tr('اقرأِ الموقفَ واكتبْ ماذا ستفعلُ ولماذا.','Read the situation and write what you would do and why.'),
    body:function(){return '<div class="fill" style="font-size:1.05rem;line-height:1.9"><div class="situation"><b>'+tr('الموقف:','Situation:')+'</b> '+CFG.situation+'</div>'+lines(4)+'</div>';}});

  window.ABOOK={LV:LV,META:META,pages:P,certTitle:CFG.certTitle,certBody:CFG.certBody,title:CFG.title,corner:CFG.corner,lang:(EN?'en':'ar')};
})();
