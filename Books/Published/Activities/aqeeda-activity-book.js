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
  /* ---- themed line-art (printable, no external images): each corner gets its own
     spot-the-difference scene (exactly 4 differences) and a craft that matches its title ---- */
  var KEY='aqeeda';
  var SK='stroke="#0A2540" fill="none" stroke-width="2"', SK1='stroke="#0A2540" fill="none" stroke-width="1.4"',
      CUT='stroke="#0A2540" fill="none" stroke-width="2"', FOLD='stroke="#0A2540" fill="none" stroke-width="1.5" stroke-dasharray="6 5"';
  function star(x,y,s){return '<text x="'+x+'" y="'+y+'" font-size="'+(s||18)+'" fill="#0A2540" text-anchor="middle">✦</text>';}
  function moon(x,y,r){return '<path d="M'+x+' '+(y-r)+' A'+r+' '+r+' 0 1 0 '+x+' '+(y+r)+' A'+(r*1.2)+' '+(r*1.2)+' 0 0 1 '+x+' '+(y-r)+'Z" '+SK+'/>';}
  function sun(x,y,r,rays){var s='<circle cx="'+x+'" cy="'+y+'" r="'+r+'" '+SK+'/>';if(rays)for(var i=0;i<8;i++){var a=i*Math.PI/4;s+='<line x1="'+(x+(r+5)*Math.cos(a)).toFixed(1)+'" y1="'+(y+(r+5)*Math.sin(a)).toFixed(1)+'" x2="'+(x+(r+13)*Math.cos(a)).toFixed(1)+'" y2="'+(y+(r+13)*Math.sin(a)).toFixed(1)+'" '+SK1+'/>';}return s;}
  function arch(x,y,w,h){return '<path d="M'+x+' '+(y+h)+' V'+(y+w/2)+' A'+(w/2)+' '+(w/2)+' 0 0 1 '+(x+w)+' '+(y+w/2)+' V'+(y+h)+'" '+SK1+'/>';}
  function flower(x,y){return '<line x1="'+x+'" y1="260" x2="'+x+'" y2="'+y+'" '+SK1+'/><circle cx="'+x+'" cy="'+(y-6)+'" r="6" '+SK1+'/>';}
  function cloud(x,y){return '<path d="M'+x+' '+y+' a12 12 0 0 1 22 -8 a14 14 0 0 1 26 4 a10 10 0 0 1 2 20 h-46 a9 9 0 0 1 -4 -16Z" '+SK1+'/>';}
  function bird(x,y){return '<path d="M'+(x-12)+' '+y+' q6 -8 12 0 q6 -8 12 0" '+SK1+'/>';}
  var SCENES={
    academy:function(d){ /* observatory and a study desk */
      return '<rect x="40" y="170" width="110" height="90" '+SK+'/><path d="M40 170 A55 55 0 0 1 150 170" '+SK+'/>'+
        (d?'':'<line x1="100" y1="130" x2="138" y2="98" stroke="#0A2540" stroke-width="7" stroke-linecap="round"/>')+
        (d?'':'<rect x="85" y="222" width="20" height="38" '+SK1+'/>')+
        '<rect x="210" y="215" width="120" height="8" '+SK+'/><line x1="220" y1="223" x2="220" y2="260" '+SK+'/><line x1="320" y1="223" x2="320" y2="260" '+SK+'/>'+
        '<rect x="232" y="197" width="40" height="18" '+SK1+'/><circle cx="300" cy="198" r="14" '+SK1+'/><line x1="300" y1="212" x2="300" y2="215" '+SK1+'/>'+
        (d?'<circle cx="300" cy="50" r="22" '+SK+'/>':moon(300,50,22))+star(200,45)+star(240,85)+(d?'':star(60,70));},
    heart:function(d){ /* a tree whose crown is a heart, in a garden */
      return '<rect x="168" y="170" width="24" height="90" '+SK+'/><path d="M180 178 C115 140 105 88 148 76 C167 71 178 84 180 95 C182 84 193 71 212 76 C255 88 245 140 180 178Z" '+SK+'/>'+
        (d?'<circle cx="160" cy="110" r="6" '+SK1+'/><circle cx="200" cy="112" r="6" '+SK1+'/>':'<circle cx="160" cy="110" r="6" '+SK1+'/><circle cx="200" cy="112" r="6" '+SK1+'/><circle cx="180" cy="140" r="6" '+SK1+'/>')+
        sun(60,60,20,!d)+flower(80,235)+flower(110,240)+(d?flower(270,238):'')+(d?'':bird(300,70))+bird(260,95);},
    heroes:function(d){ /* a fortress with towers and a flag */
      var m='M100 150 h20 v-14 h20 v14 h20 v-14 h20 v14 h20 v-14 h20 v14 h20 v-14 h20 v14';
      return '<rect x="100" y="150" width="160" height="110" '+SK+'/><path d="'+m+'" '+SK+'/>'+
        '<rect x="62" y="120" width="40" height="140" '+SK+'/><rect x="258" y="120" width="40" height="140" '+SK+'/>'+
        '<path d="M62 120 v-12 h10 v12 m10 0 v-12 h10 v12 m10 0 v-12 h8 v12" '+SK1+'/><path d="M258 120 v-12 h10 v12 m10 0 v-12 h10 v12 m10 0 v-12 h8 v12" '+SK1+'/>'+
        arch(165,215,30,45)+'<line x1="180" y1="136" x2="180" y2="80" '+SK+'/>'+(d?'':'<polygon points="180,80 214,90 180,100" '+SK+'/>')+
        (d?'':'<rect x="74" y="160" width="16" height="22" '+SK1+'/>')+'<rect x="270" y="160" width="16" height="22" '+SK1+'/>'+
        sun(320,50,18,false)+(d?bird(60,60):'')+(d?'':'<rect x="120" y="175" width="14" height="18" '+SK1+'/>');},
    ibada:function(d){ /* a mosque with dome and minaret */
      return '<rect x="100" y="170" width="150" height="90" '+SK+'/><path d="M128 170 A47 47 0 0 1 222 170" '+SK+'/>'+
        '<line x1="175" y1="123" x2="175" y2="108" '+SK+'/>'+(d?'<circle cx="175" cy="102" r="6" '+SK1+'/>':moon(175,100,7))+
        '<rect x="268" y="110" width="26" height="150" '+SK+'/><polygon points="268,110 281,82 294,110" '+SK+'/>'+
        (d?'':'<line x1="262" y1="150" x2="300" y2="150" '+SK+'/>')+
        (d?'<rect x="165" y="215" width="20" height="20" '+SK1+'/>':arch(160,215,30,45))+arch(118,200,18,30)+arch(214,200,18,30)+
        moon(60,55,18)+star(110,40)+star(320,50)+(d?star(220,70):'');},
    quds:function(d){ /* the Dome of the Rock with an olive tree */
      var s='<rect x="110" y="190" width="140" height="70" '+SK+'/>';
      for(var i=1;i<4;i++)s+='<line x1="'+(110+i*35)+'" y1="190" x2="'+(110+i*35)+'" y2="260" '+SK1+'/>';
      s+=arch(120,205,15,30)+arch(155,205,15,30)+(d?'':arch(190,205,15,30))+arch(225,205,15,30);
      s+='<rect x="140" y="170" width="80" height="20" '+SK+'/><path d="M140 170 C140 120 220 120 220 170" '+SK+'/><line x1="180" y1="132" x2="180" y2="114" '+SK+'/>'+(d?'':moon(180,108,6));
      s+='<line x1="300" y1="260" x2="300" y2="200" '+SK+'/><circle cx="288" cy="190" r="13" '+SK1+'/><circle cx="312" cy="190" r="13" '+SK1+'/>'+(d?'':'<circle cx="300" cy="172" r="13" '+SK1+'/>');
      s+=(d?'':'<path d="M60 260 C50 220 55 175 60 150 C65 175 70 220 60 260Z" '+SK1+'/>')+sun(70,55,18,false)+star(250,60);
      return s;},
    quran:function(d){ /* an open mushaf on a rehal stand, a lantern and a palm tree */
      return '<line x1="130" y1="260" x2="230" y2="205" '+SK+'/><line x1="230" y1="260" x2="130" y2="205" '+SK+'/>'+
        '<path d="M180 210 Q150 196 118 204 L118 176 Q150 166 180 182Z" '+SK+'/><path d="M180 210 Q210 196 242 204 L242 176 Q210 166 180 182Z" '+SK+'/>'+
        (d?'':'<path d="M182 182 v34 l5 -6 l5 6 v-30" '+SK1+'/>')+
        '<line x1="70" y1="0" x2="70" y2="40" '+SK1+'/><path d="M58 40 h24 l6 14 l-6 30 h-24 l-6 -30Z" '+SK+'/>'+(d?'':'<line x1="62" y1="62" x2="78" y2="62" '+SK1+'/>')+
        '<path d="M300 260 C296 220 300 180 306 150" '+SK+'/><path d="M306 150 q-30 -10 -44 8 M306 150 q30 -12 44 6 M306 150 q-14 -24 -36 -26 M306 150 q16 -24 38 -24" '+SK1+'/>'+
        (d?'<circle cx="304" cy="160" r="5" '+SK1+'/>':'<circle cx="300" cy="160" r="5" '+SK1+'/><circle cx="311" cy="161" r="5" '+SK1+'/>')+
        star(150,60)+(d?star(220,40):'');},
    social:function(d){ /* two neighbouring houses with a tree between them */
      return '<rect x="40" y="180" width="90" height="80" '+SK+'/><polygon points="34,180 85,140 136,180" '+SK+'/><rect x="75" y="222" width="20" height="38" '+SK1+'/>'+
        (d?'':'<rect x="50" y="195" width="18" height="16" '+SK1+'/>')+
        '<rect x="220" y="170" width="100" height="90" '+SK+'/><polygon points="214,170 270,128 326,170" '+SK+'/><rect x="260" y="215" width="20" height="45" '+SK1+'/><rect x="232" y="188" width="18" height="16" '+SK1+'/>'+
        (d?'<circle cx="300" cy="196" r="9" '+SK1+'/>':'<rect x="291" y="188" width="18" height="16" '+SK1+'/>')+
        '<rect x="168" y="200" width="14" height="60" '+SK+'/><circle cx="175" cy="182" r="26" '+SK+'/>'+
        sun(320,50,16,false)+(d?'':cloud(60,60))+(d?flower(105,240)+flower(115,244):flower(105,240));},
    sport:function(d){ /* a football pitch with a goal, a ball and a corner flag */
      var s='<path d="M210 260 V170 H330 V260" '+SK+'/>';
      for(var i=1;i<(d?4:5);i++)s+='<line x1="'+(210+i*24)+'" y1="170" x2="'+(210+i*24)+'" y2="260" '+SK1+'/>';
      s+='<line x1="210" y1="200" x2="330" y2="200" '+SK1+'/><line x1="210" y1="230" x2="330" y2="230" '+SK1+'/>';
      s+=(d?'':'<circle cx="140" cy="244" r="16" '+SK+'/><polygon points="140,236 147,241 144,249 136,249 133,241" '+SK1+'/>');
      s+='<line x1="40" y1="260" x2="40" y2="200" '+SK+'/>'+(d?'':'<polygon points="40,200 66,208 40,216" '+SK+'/>');
      s+=sun(70,55,18,true)+(d?cloud(150,70):'');
      return s;},
    aqeeda:function(d){ /* Allah's creation: mountains, sea, sun, a tree and birds */
      return '<polyline points="0,200 60,120 110,190 160,110 230,200" '+SK+'/>'+(d?'':'<polyline points="148,128 160,110 172,128" '+SK1+'/>')+
        '<path d="M230 235 q15 -10 30 0 t30 0 t30 0 t30 0" '+SK1+'/>'+(d?'':'<path d="M240 250 q15 -10 30 0 t30 0 t30 0" '+SK1+'/>')+
        sun(300,60,22,!d)+bird(200,60)+(d?'':bird(240,90))+
        '<rect x="96" y="210" width="12" height="50" '+SK+'/><circle cx="102" cy="196" r="22" '+SK+'/>';}
  };
  function themedScene(diff){var f=SCENES[KEY];if(!f)return null;
    return '<svg class="gsvg" width="360" height="300" viewBox="0 0 360 300"><rect width="360" height="300" fill="#fff"/>'+f(diff)+'<line x1="0" y1="260" x2="360" y2="260" stroke="#0A2540" stroke-width="2"/></svg>';}
  var CRAFTS={
    academy:function(){ /* paper astrolabe: a dial and a turning arm, joined with a paper fastener */
      var s='<circle cx="220" cy="200" r="150" '+CUT+'/><circle cx="220" cy="38" r="14" '+CUT+'/><circle cx="220" cy="200" r="120" '+SK1+'/><circle cx="220" cy="200" r="62" '+SK1+'/>';
      for(var i=0;i<24;i++){var a=i*Math.PI/12;s+='<line x1="'+(220+120*Math.cos(a)).toFixed(1)+'" y1="'+(200+120*Math.sin(a)).toFixed(1)+'" x2="'+(220+(i%2?132:142)*Math.cos(a)).toFixed(1)+'" y2="'+(200+(i%2?132:142)*Math.sin(a)).toFixed(1)+'" '+SK1+'/>';}
      s+='<line x1="100" y1="200" x2="340" y2="200" '+SK1+'/><line x1="220" y1="80" x2="220" y2="320" '+SK1+'/><circle cx="220" cy="200" r="4" '+SK+'/>';
      return s+'<rect x="70" y="385" width="300" height="24" rx="12" '+CUT+'/><circle cx="220" cy="397" r="4" '+SK+'/><polygon points="80,397 96,389 96,405" '+SK1+'/><polygon points="360,397 344,389 344,405" '+SK1+'/>';},
    heart:function(){ /* a stand-up heart */
      return '<path d="M220 330 C90 250 70 130 140 100 C180 85 210 110 220 135 C230 110 260 85 300 100 C370 130 350 250 220 330Z" '+CUT+'/>'+
        '<path d="M220 285 C150 240 140 170 175 155 C195 148 212 162 220 175 C228 162 245 148 265 155 C300 170 290 240 220 285Z" '+SK1+'/>'+
        '<path d="M175 318 V400 H265 V318" '+CUT+'/><line x1="175" y1="360" x2="265" y2="360" '+FOLD+'/><text x="220" y="230" font-size="30" text-anchor="middle">🤍</text>';},
    heroes:function(){ /* a fortress with two towers and a flag */
      var m='M120 180';for(var i=0;i<10;i++)m+=(i%2?' h20 v20':' h20 v-20');
      return '<path d="'+m+'" '+CUT+'/><rect x="120" y="180" width="200" height="220" '+CUT+'/>'+
        '<rect x="70" y="140" width="50" height="260" '+CUT+'/><rect x="320" y="140" width="50" height="260" '+CUT+'/>'+
        '<path d="M70 140 v-16 h12 v16 m13 0 v-16 h12 v16 m13 0 v-16 h0" '+SK1+'/><path d="M320 140 v-16 h12 v16 m13 0 v-16 h12 v16" '+SK1+'/>'+
        '<path d="M195 400 V330 A25 25 0 0 1 245 330 V400" '+SK+'/><line x1="220" y1="160" x2="220" y2="70" '+SK+'/><polygon points="220,70 270,84 220,98" '+CUT+'/>'+
        '<rect x="83" y="190" width="24" height="30" '+SK1+'/><rect x="333" y="190" width="24" height="30" '+SK1+'/>'+
        '<rect x="120" y="400" width="200" height="40" '+FOLD+'/><line x1="120" y1="180" x2="120" y2="400" '+FOLD+'/><line x1="320" y1="180" x2="320" y2="400" '+FOLD+'/>';},
    ibada:function(){ /* a mosque with a dome and a minaret */
      return '<rect x="110" y="230" width="190" height="170" '+CUT+'/><path d="M135 230 A70 70 0 0 1 275 230" '+CUT+'/><line x1="205" y1="162" x2="205" y2="140" '+SK+'/>'+moon(205,132,9)+
        '<rect x="320" y="140" width="34" height="260" '+CUT+'/><polygon points="320,140 337,100 354,140" '+CUT+'/><line x1="314" y1="200" x2="360" y2="200" '+SK+'/>'+
        '<path d="M185 400 V345 A20 20 0 0 1 225 345 V400" '+SK+'/><path d="M135 330 V300 A12 12 0 0 1 159 300 V330 M251 330 V300 A12 12 0 0 1 275 300 V330" '+SK1+'/>'+
        '<rect x="110" y="400" width="244" height="40" '+FOLD+'/><rect x="60" y="250" width="50" height="140" '+FOLD+'/><line x1="300" y1="230" x2="300" y2="400" '+FOLD+'/>';},
    quds:function(){ /* Dome of the Rock: an eight-sided wall strip, a drum and the golden dome */
      var s='<path d="M130 200 C130 110 310 110 310 200" '+CUT+'/><line x1="220" y1="125" x2="220" y2="98" '+SK+'/>'+moon(220,90,8)+
        '<rect x="150" y="200" width="140" height="30" '+CUT+'/><rect x="40" y="250" width="360" height="130" '+CUT+'/><rect x="400" y="250" width="26" height="130" '+FOLD+'/>';
      for(var i=1;i<8;i++)s+='<line x1="'+(40+i*45)+'" y1="250" x2="'+(40+i*45)+'" y2="380" '+FOLD+'/>';
      for(i=0;i<8;i++)s+='<path d="M'+(52+i*45)+' 350 V300 A10 10 0 0 1 '+(72+i*45)+' 300 V350" '+SK1+'/>';
      return s+'<text x="220" y="175" font-size="22" text-anchor="middle">✨</text>';},
    quran:function(){ /* a mushaf cover that folds at the spine, and a two-piece rehal stand */
      var s='<rect x="60" y="80" width="320" height="230" '+CUT+'/><line x1="220" y1="80" x2="220" y2="310" '+FOLD+'/>'+
        '<rect x="78" y="98" width="124" height="194" '+SK1+'/><rect x="238" y="98" width="124" height="194" '+SK1+'/>'+
        '<rect x="280" y="175" width="40" height="40" '+SK1+'/><rect x="280" y="175" width="40" height="40" transform="rotate(45 300 195)" '+SK1+'/><circle cx="300" cy="195" r="9" '+SK1+'/>';
      s+='<rect x="80" y="350" width="280" height="34" '+CUT+'/><line x1="220" y1="350" x2="220" y2="367" '+SK+'/>'+
        '<rect x="80" y="410" width="280" height="34" '+CUT+'/><line x1="220" y1="444" x2="220" y2="427" '+SK+'/>';
      return s;},
    social:function(){ /* a neighbourhood house: front, side walls and roof */
      return '<rect x="140" y="220" width="160" height="160" '+CUT+'/><polygon points="140,220 220,140 300,220" '+CUT+'/>'+
        '<rect x="60" y="220" width="80" height="160" '+CUT+'/><rect x="300" y="220" width="80" height="160" '+CUT+'/>'+
        '<line x1="140" y1="220" x2="140" y2="380" '+FOLD+'/><line x1="300" y1="220" x2="300" y2="380" '+FOLD+'/>'+
        '<rect x="205" y="320" width="30" height="60" '+SK+'/><rect x="160" y="245" width="32" height="30" '+SK1+'/><rect x="248" y="245" width="32" height="30" '+SK1+'/>'+
        '<rect x="80" y="260" width="40" height="34" '+SK1+'/><rect x="320" y="260" width="40" height="34" '+SK1+'/>'+
        '<rect x="140" y="380" width="160" height="34" '+FOLD+'/><polygon points="140,220 220,140 300,220 300,226 220,146 140,226" '+FOLD+'/>';},
    sport:function(){ /* a trophy cup on a stand, and a medal */
      return '<path d="M140 90 H300 C300 185 262 228 220 232 C178 228 140 185 140 90Z" '+CUT+'/>'+
        '<path d="M140 110 C92 110 92 175 152 182 M300 110 C348 110 348 175 288 182" '+CUT+'/>'+
        '<rect x="205" y="232" width="30" height="48" '+CUT+'/><rect x="160" y="280" width="120" height="32" '+CUT+'/><rect x="160" y="312" width="120" height="40" '+FOLD+'/>'+
        '<text x="220" y="170" font-size="34" text-anchor="middle">⭐</text>'+
        '<path d="M300 370 L340 420 L380 370" '+CUT+'/><circle cx="340" cy="440" r="34" '+CUT+'/><circle cx="340" cy="440" r="24" '+SK1+'/><text x="340" y="448" font-size="20" text-anchor="middle">🏅</text>';}
  };
  function themedCraft(){var f=CRAFTS[KEY];return f?'<svg class="gsvg" width="440" height="500" viewBox="0 0 440 500" style="border:none">'+f()+'</svg>':null;}
  function scene(diff){
    var t=themedScene(diff);if(t)return t;
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
