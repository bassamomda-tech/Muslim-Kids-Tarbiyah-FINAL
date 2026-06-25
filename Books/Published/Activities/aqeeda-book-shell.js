/* aqeeda-book-shell.js — renders the full book DOM (cover + scored pages +
   tally + certificate) using window.ABOOK from aqeeda-activity-book.js. Arabic. */
(function(){
  'use strict';
  var B=window.ABOOK; if(!B){return;}
  var P=B.pages, M=B.META, AC=M.accent;
  var total=P.reduce(function(s,p){return s+p.pts;},0);

  function sheet(inner,acc,cls){ return '<div class="sheet '+(cls||'')+'" style="--acc:'+(acc||AC)+'">'+inner+'</div>'; }

  /* cover */
  var cover=sheet(
    '<div class="cover">'+
      '<div class="c-kick">تربية الطفل المسلم · منارة العقيدة</div>'+
      '<div class="c-mascot">'+M.mascot+'</div>'+
      '<h1 class="c-title">دفترُ أنشطةِ العقيدة</h1>'+
      '<div class="c-lvl">'+M.name+'</div>'+
      '<div class="c-sub">'+M.sub+'</div>'+
      '<div class="c-mosque">🕌</div>'+
      '<div class="c-note">'+P.length+' نشاطاً ممتعاً · المجموع '+total+' نقطة · لوّن وتعلّم وتأمّل في عجائبِ خلقِ الله</div>'+
      '<div class="c-name">الاسم: <span class="nl"></span></div>'+
    '</div>', AC, 'dark');

  /* activity pages */
  var pages=P.map(function(p,i){
    return sheet(
      '<div class="sh-head"><div class="sh-num">'+(i+1)+'</div>'+
        '<div class="sh-tt"><span class="t">'+p.title+'</span><span class="k">'+p.kind+'</span></div>'+
        '<div class="sh-pts">⭐ <b>'+p.pts+'</b><small>نقطة</small></div></div>'+
      '<div class="instr">'+p.instr+'</div>'+
      p.body()+
      '<div class="sh-foot"><span>منارة العقيدة · '+M.name+'</span>'+
        '<span class="score-box">درجتي: <span class="sb-line"></span> / '+p.pts+'</span>'+
        '<span>نشاط '+(i+1)+' / '+P.length+'</span></div>',
      p.acc||AC);
  }).join('');

  /* score tally */
  var rows=P.map(function(p,i){return '<tr><td class="rl">'+(i+1)+'. '+p.title+'</td><td class="kc">'+p.kind+'</td><td class="mx">'+p.pts+'</td><td><span class="sb-line"></span></td></tr>';}).join('');
  var tally=sheet(
    '<div class="sh-head"><div class="sh-num">∑</div><div class="sh-tt"><span class="t">مجموعُ درجاتي</span><span class="k">جدولُ النتائج</span></div></div>'+
    '<div class="instr">انقُلْ درجةَ كلِّ نشاطٍ هنا، ثمّ اجمَعْها لِتعرفَ نتيجتَك النهائية!</div>'+
    '<table class="tally"><tr><th>النشاط</th><th>النوع</th><th>النهاية</th><th>درجتي</th></tr>'+rows+
      '<tr class="sum"><td colspan="2">المجموع النهائي</td><td class="mx">'+total+'</td><td><span class="sb-line big"></span></td></tr></table>'+
    '<div class="grade-key">٩٠٪ فأكثر: 🌟 بطلُ اليقين &nbsp;·&nbsp; ٧٥–٨٩٪: 🏅 متأمّلٌ ماهر &nbsp;·&nbsp; ٥٠–٧٤٪: 👍 مكتشفٌ مجتهد &nbsp;·&nbsp; أقل: 💪 واصِلِ المحاولة</div>', '#C9A227');

  /* certificate */
  var cert=sheet(
    '<div class="cert">'+
      '<div class="cert-corner tl">✦</div><div class="cert-corner tr">✦</div><div class="cert-corner bl">✦</div><div class="cert-corner br">✦</div>'+
      '<div class="seal">🏅</div>'+
      '<div class="cert-kick">منارةُ العقيدة · '+M.name+'</div>'+
      '<h2 class="cert-title">شهادةُ بطلِ اليقين</h2>'+
      '<div class="cert-line">تُمنَحُ هذه الشهادةُ بكلِّ فخرٍ إلى</div>'+
      '<div class="cert-name"></div>'+
      '<div class="cert-body">لإتمامِه دفترَ أنشطةِ منارةِ العقيدة كاملاً، وتأمّلِه في عجائبِ خلقِ الله، وسعيِه إلى اليقينِ بقلبٍ مفتوحٍ وعقلٍ متفكّر. بارك الله فيه وزاده علماً وإيماناً.</div>'+
      '<div class="cert-badges">🔭 ⭐ 🧠 🕋 🌟</div>'+
      '<div class="cert-sign"><span>التاريخ: ______</span><span>التوقيع: ______</span></div>'+
    '</div>', AC, 'dark');

  document.getElementById('book').innerHTML = cover + pages + tally + cert;
})();
