/* ════════════════════════════════════════════════════════════════
   heroes-art.js — symbolic crests for «قدوات أطفال المسلمين».
   NO faces, NO living figures — each hero is shown through a
   geometric gold medallion + an iconographic motif (objects/symbols).
   ART.emblem(key, accent, tint) → 300×300 medallion SVG string.
   ART.icon(key, accent)        → 64×64 small symbol SVG string.
   ════════════════════════════════════════════════════════════════ */
(function () {
  var N = '#0A2540', G = '#C9A227';
  function S(w){ return 'fill="none" stroke="'+N+'" stroke-width="'+(w||5)+'" stroke-linecap="round" stroke-linejoin="round"'; }
  function GS(w){ return 'fill="none" stroke="'+G+'" stroke-width="'+(w||5)+'" stroke-linecap="round" stroke-linejoin="round"'; }
  function FA(a,w){ return 'fill="'+a+'" stroke="'+N+'" stroke-width="'+(w||4)+'" stroke-linejoin="round" stroke-linecap="round"'; }

  function nstar(cx,cy,R,r,n,rot,attr){var p='',i;rot=(rot==null?-90:rot)*Math.PI/180;for(i=0;i<2*n;i++){var a=rot+i*Math.PI/n,rr=(i%2?r:R);p+=(i?'L':'M')+(cx+rr*Math.cos(a)).toFixed(1)+' '+(cy+rr*Math.sin(a)).toFixed(1);}return '<path d="'+p+'Z" '+(attr)+'/>';}
  function ngon(cx,cy,R,n,rot,attr){var p='',i;rot=(rot==null?-90:rot)*Math.PI/180;for(i=0;i<n;i++){var a=rot+i*2*Math.PI/n;p+=(i?'L':'M')+(cx+R*Math.cos(a)).toFixed(1)+' '+(cy+R*Math.sin(a)).toFixed(1);}return '<path d="'+p+'Z" '+(attr)+'/>';}
  function circ(cx,cy,r,attr){return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" '+attr+'/>';}
  function petals(cx,cy,R,n,rw,rl,attr){var s='',i;for(i=0;i<n;i++){var a=i*2*Math.PI/n,x=(cx+R*Math.cos(a)).toFixed(1),y=(cy+R*Math.sin(a)).toFixed(1),d=(a*180/Math.PI+90).toFixed(1);s+='<ellipse cx="'+x+'" cy="'+y+'" rx="'+rw+'" ry="'+rl+'" transform="rotate('+d+' '+x+' '+y+')" '+attr+'/>';}return s;}

  /* ── central motifs (centered ~150,150, fit ~Ø150) ── */
  var M = {
    cave:function(a){ // Abu Bakr — cave of Thawr + spider web + star (loyalty in the Hijrah)
      var g='<path d="M96 214 V150 Q150 86 204 150 V214" '+FA(a,5)+'/>';
      g+='<path d="M120 214 V158 Q150 120 180 158 V214" '+S(4)+'/>';
      g+=nstar(150,168,20,9,5,-90,FA('#fff',3.5));
      // spider web top-left
      g+='<path d="M96 150 L120 158 M104 134 L126 150 M120 122 L138 142" '+GS(2.4)+'/>';
      g+='<path d="M100 158 Q116 138 134 126" '+GS(2.4)+'/>';
      return g;
    },
    scales:function(a){ // Umar — justice scales + lamp glow star
      var g=nstar(150,80,15,7,5,-90,FA(G,3));
      g+='<path d="M150 92 V206" '+S(6)+'/>';
      g+='<path d="M122 214 H178" '+S(6)+'/>';
      g+='<path d="M92 120 H208" '+S(6)+'/>';
      g+='<path d="M92 120 V134 M208 120 V134" '+S(4)+'/>';
      g+='<path d="M70 162 a22 13 0 0 0 44 0 Z" '+FA(a,4)+'/><path d="M92 120 L72 162 M92 120 L112 162" '+S(3)+'/>';
      g+='<path d="M186 162 a22 13 0 0 0 44 0 Z" '+FA(a,4)+'/><path d="M208 120 L188 162 M208 120 L228 162" '+S(3)+'/>';
      g+=circ(150,108,6,FA(G,3));
      return g;
    },
    book:function(a){ // Ali — open book of knowledge + star + pen
      var g='<path d="M150 110 Q112 92 80 104 V196 Q112 184 150 200 Q188 184 220 196 V104 Q188 92 150 110 Z" '+FA(a,5)+'/>';
      g+='<path d="M150 110 V200" '+S(4)+'/>';
      g+='<path d="M94 124 Q120 116 142 126 M94 144 Q120 136 142 146 M94 164 Q120 156 142 166" '+GS(2.6)+'/>';
      g+='<path d="M158 126 Q180 116 206 124 M158 146 Q180 136 206 144 M158 166 Q180 156 206 164" '+GS(2.6)+'/>';
      g+=nstar(150,82,16,7,5,-90,FA(G,3));
      return g;
    },
    swords:function(a){ // Khalid — two crossed swords + shield boss + banner
      function sword(rot){return '<g transform="rotate('+rot+' 150 150)">'+
        '<path d="M150 70 L160 92 V196 H140 V92 Z" '+FA('#e9eef3',4)+'/>'+
        '<path d="M150 70 L160 92 H140 Z" '+FA(a,3)+'/>'+
        '<path d="M126 196 H174" '+S(6)+'/>'+
        '<path d="M150 196 V222" '+S(6)+'/>'+circ(150,228,7,FA(G,3))+'</g>';}
      var g=sword(28)+sword(-28);
      g+=ngon(150,150,30,5,-90,FA(a,4))+nstar(150,150,16,7,5,-90,FA('#fff',2.6));
      return g;
    },
    minaret:function(a){ // Bilal — minaret of the first adhan + crescent + "Ahad" star
      var g='<rect x="132" y="96" width="36" height="118" rx="4" '+FA(a,5)+'/>';
      g+='<path d="M126 96 Q150 60 174 96 Z" '+FA(a,5)+'/>';
      g+='<path d="M150 60 V44" '+S(4)+'/>';
      g+=crescent(150,32,12,FA(G,3));
      g+='<rect x="138" y="120" width="24" height="30" rx="3" '+S(3.4)+'/>';
      g+='<path d="M126 214 H174" '+S(6)+'/>';
      g+=nstar(150,176,14,6,8,-90,FA('#fff',2.6));
      return g;
    },
    kaaba:function(a){ // Khadijah — first to believe: kaaba + heart + star
      var g='<rect x="106" y="120" width="88" height="92" '+FA(N,4)+'/>';
      g+='<path d="M106 150 H194" '+GS(5)+'/>';                 // kiswah band
      g+='<rect x="150" y="172" width="20" height="40" '+FA(G,3)+'/>'; // door
      g+=nstar(150,86,18,8,5,-90,FA(G,3));
      g+='<path d="M92 118 q-18 -22 -36 0 q-18 22 36 46 q54 -24 36 -46 q-18 -22 -36 0 Z" transform="translate(8 -6) scale(.6) translate(60 70)" '+FA(a,3)+'/>';
      return g;
    },
    pen:function(a){ // Aisha — the teacher: reed pen + ink + scattered stars (knowledge)
      var g='<path d="M196 84 L208 96 L120 184 L104 196 L100 192 L112 176 Z" '+FA(a,4)+'/>';
      g+='<path d="M104 196 L100 192 L96 200 Z" '+FA(N,3)+'/>';
      g+='<path d="M120 184 L108 172" '+S(3)+'/>';
      g+='<path d="M96 214 q22 -14 44 0" '+S(4)+'/>'; // line of writing
      g+=nstar(120,110,12,5,5,-90,FA(G,2.6))+nstar(170,140,9,4,5,-90,FA(G,2.4))+nstar(196,196,11,5,5,-90,FA(G,2.6));
      return g;
    },
    pillar:function(a){ // Sumayyah — steadfast: strong column + flame/star on top + palm
      var g='<path d="M120 96 H180 L188 110 H112 Z" '+FA(a,4)+'/>';      // capital
      g+='<rect x="126" y="110" width="48" height="92" '+FA('#eef2f6',4)+'/>';
      g+='<path d="M134 110 V202 M150 110 V202 M166 110 V202" '+S(2.6)+'/>'; // fluting
      g+='<path d="M112 202 H188 L196 216 H104 Z" '+FA(a,4)+'/>';        // base
      g+=nstar(150,74,18,8,8,-90,FA(G,3))+circ(150,74,6,FA('#fff',2.4));
      return g;
    },
    flower:function(a){ // Fatimah Az-Zahra — the radiant flower + beads + heart
      var g=petals(150,150,52,8,16,30,FA(a,3.4));
      g+=petals(150,150,30,8,11,20,FA('#fff',2.6));
      g+=circ(150,150,16,FA(G,3));
      g+='<path d="M84 150 a66 66 0 0 0 132 0" '+GS(2.6)+' stroke-dasharray="2 13"/>';
      return g;
    }
  };
  function crescent(cx,cy,R,attr){var ox=0.55*R,rc=0.95*R,x=(R*R-rc*rc+ox*ox)/(2*ox),y=Math.sqrt(R*R-x*x),tx=(cx+x).toFixed(1),t1=(cy-y).toFixed(1),t2=(cy+y).toFixed(1);return '<path d="M'+tx+' '+t1+' A'+R+' '+R+' 0 1 0 '+tx+' '+t2+' A'+rc.toFixed(1)+' '+rc.toFixed(1)+' 0 0 1 '+tx+' '+t1+'Z" '+attr+'/>';}

  /* ── medallion crest frame + chosen motif ── */
  function emblem(key, accent, tint){
    var g='';
    g+=circ(150,150,144,'fill="'+(tint||'#fff')+'" stroke="'+G+'" stroke-width="6"');
    g+=nstar(150,150,140,118,8,-90,GS(2.4));
    g+=ngon(150,150,118,8,-90+22.5,'fill="#fff" stroke="'+N+'" stroke-width="3"');
    // corner studs
    var i,ring='';for(i=0;i<8;i++){var a=Math.PI*2*i/8;ring+=circ((150+131*Math.cos(a)).toFixed(0),(150+131*Math.sin(a)).toFixed(0),4,'fill="'+G+'"');}
    g+=ring;
    g+=(M[key]?M[key](accent):'');
    return '<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">'+g+'</svg>';
  }

  /* ── small footer icons (64×64) ── */
  var I = {
    star:function(a){return nstar(32,32,24,11,5,-90,FA(a,3));},
    crescent:function(a){return crescent(36,32,22,FA(a,3));},
    heart:function(a){return '<path d="M32 50 q-26 -16 -26 -32 q0 -12 13 -12 q9 0 13 10 q4 -10 13 -10 q13 0 13 12 q0 16 -26 32 Z" '+FA(a,3)+'/>';},
    book:function(a){return '<path d="M32 16 Q20 10 8 14 V48 Q20 44 32 50 Q44 44 56 48 V14 Q44 10 32 16 Z" '+FA(a,3)+'/><path d="M32 16 V50" '+S(2.4)+'/>';},
    scales:function(a){return '<path d="M32 10 V52 M18 54 H46 M14 22 H50" '+S(3)+'/><path d="M14 22 L7 40 a7 4 0 0 0 14 0 Z" '+FA(a,2.6)+'/><path d="M50 22 L43 40 a7 4 0 0 0 14 0 Z" '+FA(a,2.6)+'/>';},
    lamp:function(a){return '<path d="M24 14 H40 L36 22 H28 Z" '+S(2.6)+'/><path d="M22 22 H42 L46 48 Q32 56 18 48 Z" '+FA(a,3)+'/><path d="M32 22 V48" '+S(2)+'/>';},
    sword:function(a){return '<path d="M32 6 L37 16 V42 H27 V16 Z" '+FA('#e9eef3',2.6)+'/><path d="M22 42 H42 M32 42 V56" '+S(3)+'/>';},
    shield:function(a){return '<path d="M32 8 L52 16 V32 Q52 50 32 58 Q12 50 12 32 V16 Z" '+FA(a,3)+'/>'+nstar(32,32,11,5,5,-90,FA('#fff',2.2));},
    arch:function(a){return '<path d="M14 56 V30 Q14 10 32 10 Q50 10 50 30 V56" '+FA(a,3)+'/><path d="M24 56 V32 Q24 20 32 20 Q40 20 40 32 V56" '+S(2.4)+'/>';},
    web:function(a){return '<path d="M10 10 L54 54 M10 10 L40 14 M10 10 L14 40" '+GS(2.2)+'/><path d="M14 26 Q26 18 38 14 M22 40 Q34 30 46 24" '+GS(2.2)+'/>';},
    minaret:function(a){return '<rect x="26" y="20" width="12" height="36" rx="2" '+FA(a,2.6)+'/><path d="M22 20 Q32 6 42 20 Z" '+FA(a,2.6)+'/><path d="M32 6 V0" '+S(2)+'/>';},
    rock:function(a){return '<path d="M10 52 Q14 30 34 30 Q56 30 54 52 Z" '+FA(a,3)+'/>'+nstar(34,40,7,3,8,-90,FA('#fff',1.8));},
    kaaba:function(a){return '<rect x="14" y="20" width="36" height="36" '+FA(N,2.6)+'/><path d="M14 30 H50" '+GS(3)+'/><rect x="34" y="40" width="9" height="16" '+FA(a,2)+'/>';},
    banner:function(a){return '<path d="M16 10 V54" '+S(3)+'/><path d="M16 12 H50 L42 24 L50 36 H16 Z" '+FA(a,2.6)+'/>';},
    pen:function(a){return '<path d="M50 12 L54 16 L20 50 L14 52 L16 46 Z" '+FA(a,2.6)+'/><path d="M14 56 q9 -5 18 0" '+S(2.4)+'/>';},
    beads:function(a){var s='',i;for(i=0;i<10;i++){var ang=Math.PI*2*i/10;s+=circ((32+20*Math.cos(ang)).toFixed(0),(32+20*Math.sin(ang)).toFixed(0),3.4,FA(a,1.6));}return s+'<path d="M32 52 v8" '+S(2.4)+'/>';},
    palm:function(a){return '<path d="M32 56 V28" '+S(3)+'/><path d="M32 28 Q16 22 8 28 M32 28 Q48 22 56 28 M32 28 Q22 14 26 8 M32 28 Q42 14 38 8 M32 28 Q32 14 32 8" '+GS(2.4)+'/>';},
    pillar:function(a){return '<path d="M22 14 H42 L46 20 H18 Z" '+FA(a,2.4)+'/><rect x="24" y="20" width="16" height="30" '+FA('#eef2f6',2.4)+'/><path d="M18 50 H46 L50 56 H14 Z" '+FA(a,2.4)+'/>';},
    flower:function(a){return petals(32,32,16,8,6,11,FA(a,2.4))+circ(32,32,6,FA(G,2));}
  };
  function icon(key, accent){
    return '<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">'+(I[key]?I[key](accent):'')+'</svg>';
  }

  window.ART = { emblem:emblem, icon:icon };
})();
