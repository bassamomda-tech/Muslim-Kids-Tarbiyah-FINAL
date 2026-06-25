/* book-shell.js — generic renderer (cover + scored pages + tally + certificate)
   from window.ABOOK. Arabic. Theme-neutral; all text comes from the config. */
(function(){
  'use strict';
  var B=window.ABOOK; if(!B)return;
  var EN=B.lang==='en';
  function tr(ar,en){return EN?en:ar;}
  var P=B.pages,M=B.META,AC=M.accent,total=P.reduce(function(s,p){return s+p.pts;},0);
  function sheet(i,acc,cls){return '<div class="sheet '+(cls||'')+'" style="--acc:'+(acc||AC)+'">'+i+'</div>';}
  var cover=sheet('<div class="cover"><div class="c-kick">'+tr('تربية الطفل المسلم · ',"Muslim Kids' Tarbiyah · ")+B.corner+'</div><div class="c-mascot">'+M.mascot+'</div>'+
    '<h1 class="c-title">'+B.title+'</h1><div class="c-lvl">'+M.name+'</div><div class="c-sub">'+M.sub+'</div><div class="c-mosque">🕌</div>'+
    '<div class="c-note">'+P.length+tr(' نشاطاً ممتعاً · المجموع ',' fun activities · total ')+total+tr(' نقطة · لوّن وتعلّم وتأمّل',' points · colour, learn & reflect')+'</div>'+
    '<div class="c-name">'+tr('الاسم: ','Name: ')+'<span class="nl"></span></div></div>',AC,'dark');
  var pages=P.map(function(p,i){return sheet('<div class="sh-head"><div class="sh-num">'+(i+1)+'</div><div class="sh-tt"><span class="t">'+p.title+'</span><span class="k">'+p.kind+'</span></div><div class="sh-pts">⭐ <b>'+p.pts+'</b><small>'+tr('نقطة','pts')+'</small></div></div><div class="instr">'+p.instr+'</div>'+p.body()+'<div class="sh-foot"><span>'+B.corner+' · '+M.name+'</span><span class="score-box">'+tr('درجتي: ','My score: ')+'<span class="sb-line"></span> / '+p.pts+'</span><span>'+tr('نشاط ','Activity ')+(i+1)+' / '+P.length+'</span></div>',p.acc||AC);}).join('');
  var rows=P.map(function(p,i){return '<tr><td class="rl">'+(i+1)+'. '+p.title+'</td><td class="kc">'+p.kind+'</td><td class="mx">'+p.pts+'</td><td><span class="sb-line"></span></td></tr>';}).join('');
  var tally=sheet('<div class="sh-head"><div class="sh-num">∑</div><div class="sh-tt"><span class="t">'+tr('مجموعُ درجاتي','My Total Score')+'</span><span class="k">'+tr('جدولُ النتائج','Score Sheet')+'</span></div></div><div class="instr">'+tr('انقُلْ درجةَ كلِّ نشاطٍ هنا، ثمّ اجمَعْها لِتعرفَ نتيجتَك النهائية!','Copy each activity score here, then add them up for your final result!')+'</div><table class="tally"><tr><th>'+tr('النشاط','Activity')+'</th><th>'+tr('النوع','Type')+'</th><th>'+tr('النهاية','Max')+'</th><th>'+tr('درجتي','Mine')+'</th></tr>'+rows+'<tr class="sum"><td colspan="2">'+tr('المجموع النهائي','Final Total')+'</td><td class="mx">'+total+'</td><td><span class="sb-line big"></span></td></tr></table><div class="grade-key">'+tr('٩٠٪ فأكثر: 🌟 بطل &nbsp;·&nbsp; ٧٥–٨٩٪: 🏅 ماهر &nbsp;·&nbsp; ٥٠–٧٤٪: 👍 مجتهد &nbsp;·&nbsp; أقل: 💪 واصِلِ المحاولة','90%+: 🌟 Champion &nbsp;·&nbsp; 75–89%: 🏅 Skilled &nbsp;·&nbsp; 50–74%: 👍 Hard-worker &nbsp;·&nbsp; below: 💪 Keep trying')+'</div>','#C9A227');
  var cert=sheet('<div class="cert"><div class="cert-corner tl">✦</div><div class="cert-corner tr">✦</div><div class="cert-corner bl">✦</div><div class="cert-corner br">✦</div><div class="seal">🏅</div><div class="cert-kick">'+B.corner+' · '+M.name+'</div><h2 class="cert-title">'+B.certTitle+'</h2><div class="cert-line">'+tr('تُمنَحُ هذه الشهادةُ بكلِّ فخرٍ إلى','This certificate is proudly awarded to')+'</div><div class="cert-name"></div><div class="cert-body">'+B.certBody+'</div><div class="cert-badges">🌟 🏅 🧠 🕌 ⭐</div><div class="cert-sign"><span>'+tr('التاريخ: ______','Date: ______')+'</span><span>'+tr('التوقيع: ______','Signature: ______')+'</span></div></div>',AC,'dark');
  document.getElementById('book').innerHTML=cover+pages+tally+cert;
})();
