/* ════════════════════════════════════════════════════════════════
   rihla-prompts.js — generic "Art Prompts by page" renderer for any
   منارة العقيدة journey. Reads window.RIHLA (key, stations, titleAr/En,
   bookHref) and builds the page list via RihlaCore.buildPromptItems.
   Expects DOM: #results #count #copyAllBtn #styleBtn #lineBtn, and
   .brand / .hero text already in the shell. Bilingual.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var C = window.RIHLA || {};
  var DATA = window.RihlaCore.buildPromptItems(C);
  var lang = localStorage.getItem('bunyanLang') || 'ar';

  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function copyText(str){
    if(navigator.clipboard&&navigator.clipboard.writeText) return navigator.clipboard.writeText(str);
    return new Promise(function(res){var ta=document.createElement('textarea');ta.value=str;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');}catch(e){}document.body.removeChild(ta);res();});
  }
  var tt; function toast(m){var t=document.getElementById('toast');t.textContent=m;t.classList.add('show');clearTimeout(tt);tt=setTimeout(function(){t.classList.remove('show');},1800);}
  function flash(id){var b=document.getElementById(id);if(!b)return;b.classList.add('done');setTimeout(function(){b.classList.remove('done');},1400);}

  window.setLang=function(l){
    lang=l; localStorage.setItem('bunyanLang',l);
    document.documentElement.lang=l; document.documentElement.dir=l==='ar'?'rtl':'ltr'; document.body.dir=l==='ar'?'rtl':'ltr';
    var be=document.getElementById('btnEn'),ba=document.getElementById('btnAr');
    if(be)be.classList.toggle('active',l==='en'); if(ba)ba.classList.toggle('active',l==='ar');
    render();
  };
  window.copyStyle=function(){ copyText(DATA.style).then(function(){ flash('styleBtn'); toast(lang==='ar'?'✓ نُسخ نمط القصة':'✓ Story style copied'); }); };
  window.copyLine=function(){ copyText(DATA.lineStyle).then(function(){ flash('lineBtn'); toast(lang==='ar'?'✓ نُسخ نمط التلوين':'✓ Coloring style copied'); }); };
  window.copyAll=function(){
    var txt=DATA.items.map(function(it){ return '═══ '+(lang==='ar'?'صفحة ':'PAGE ')+it.page+' · '+it.kind.en+' · '+it.titleEn+' ['+it.slot+'] ═══\n'+it.prompt; }).join('\n\n');
    copyText(txt).then(function(){ flash('copyAllBtn'); toast(lang==='ar'?'✓ نُسخت كل الأوصاف ('+DATA.items.length+')':'✓ All '+DATA.items.length+' prompts copied'); });
  };

  function render(){
    var root=document.getElementById('results'); root.innerHTML='';
    var cn=document.getElementById('count'); if(cn) cn.textContent=(lang==='ar'? DATA.items.length+' وصف · بترتيب الصفحات' : DATA.items.length+' prompts · in page order');
    DATA.items.forEach(function(it){
      var cover=it.station==='—';
      var cc=cover?'#8E44AD':(it.kind.en.indexOf('Story')>-1?'#1A9B7B':it.kind.en.indexOf('Coloring')>-1?'#D4A017':'#2980B9');
      var row=document.createElement('div'); row.className='prow'; row.style.setProperty('--cc',cc);
      row.innerHTML=
        '<div class="pnum"><span class="pn-lbl">'+(lang==='ar'?'صفحة':'page')+'</span><span class="pn-val">'+it.page+'</span></div>'+
        '<div class="pmid"><div class="ptop">'+
          '<span class="ptag kind">'+it.ic+' '+esc(lang==='ar'?it.kind.ar:it.kind.en)+'</span>'+
          (cover?'':'<span class="ptag kind">'+(lang==='ar'?'محطة ':'Station ')+it.station+'</span>')+
          '<span class="ptag slot">'+esc(it.slot)+'</span></div>'+
          '<div class="ptitle">'+esc(lang==='ar'?it.titleAr:it.titleEn)+'<span class="en lat">'+esc(lang==='ar'?it.titleEn:it.titleAr)+'</span></div>'+
          '<div class="pbody">'+esc(it.prompt)+'</div>'+
          '<div class="pacts"><button class="copy-btn">📋 '+(lang==='ar'?'نسخ الوصف':'Copy prompt')+'</button></div>'+
        '</div>';
      row.querySelector('.copy-btn').onclick=function(){ var b=this; copyText(it.prompt).then(function(){ b.classList.add('done'); var t=b.textContent; b.textContent='✓ '+(lang==='ar'?'تم':'Copied'); toast(lang==='ar'?'✓ نُسخ وصف الصفحة '+it.page:'✓ Page '+it.page+' prompt copied'); setTimeout(function(){b.classList.remove('done');b.textContent=t;},1500); }); };
      root.appendChild(row);
    });
  }

  window.addEventListener('DOMContentLoaded',function(){ window.setLang(lang); });
})();
