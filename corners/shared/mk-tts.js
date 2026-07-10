/* ════════════════════════════════════════════════════════════════
   mk-tts.js — shared read-aloud (browser SpeechSynthesis) for story
   readers that use a per-journey app.js engine. Include AFTER the
   engine script. Auto-injects a 🔊 Listen button into the reader and
   reads the narration/teach text in Arabic or English.
   (rihla-engine.js journeys already embed this same logic.)
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (window.__mkTTS) return; window.__mkTTS = true;
  var synth = window.speechSynthesis; if (!synth) return;
  function strip(h){ var d=document.createElement('div'); d.innerHTML=h; var t=(d.textContent||''); try{ t=t.replace(/[\u{1F000}-\u{1FFFF}\u{2190}-\u{2BFF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}]/gu,''); }catch(e){} return t.replace(/\s+/g,' ').trim(); }
  function L(){ return localStorage.getItem('bunyanLang')||'ar'; }
  var activeBtn=null;
  function label(on){ return on ? ('⏸ '+(L()==='ar'?'إيقاف':'Stop')) : ('🔊 '+(L()==='ar'?'استمِع':'Listen')); }
  function reset(){ document.querySelectorAll('#rBody .mk-listen').forEach(function(b){ b.innerHTML=label(false); }); activeBtn=null; }
  function stop(){ try{ synth.cancel(); }catch(e){} reset(); }
  function pickVoice(){ var p=L()==='ar'?'ar':'en'; var vs=(synth.getVoices()||[]).filter(function(v){return v.lang&&v.lang.toLowerCase().indexOf(p)===0;}); return vs[0]||null; }
  function speak(button, t){
    if(activeBtn===button){ stop(); return; }   // click the playing button = stop
    stop();                                      // stop any other block first
    if(!t) return;
    var u=new SpeechSynthesisUtterance(t); u.lang=L()==='ar'?'ar-SA':'en-US'; u.rate=.95;
    var v=pickVoice(); if(v) u.voice=v;
    u.onend=function(){ reset(); }; u.onerror=function(){ reset(); };
    synth.speak(u); activeBtn=button; button.innerHTML=label(true);
  }
  // Blocks that carry a “اقرأ لي / Listen” button — each reads its own text.
  var TARGETS=[
    { hdr:'#rBody .block.wow h3, #rBody .block.treasure h3, #rBody .blocks .block h3',
      txt:['.block.wow p','.block.treasure .maryam p','.block.treasure p','.blocks .block p','.s-hero ~ .blocks .block p'] },
    { hdr:'#rBody .block.chance h3', txt:['.block.chance p'] }   // الرد على الشبهة
  ];
  function readText(sels){
    for(var i=0;i<sels.length;i++){ var el=document.querySelector('#rBody '+sels[i]); if(el && strip(el.innerHTML).length>20) return strip(el.innerHTML); }
    return '';
  }
  function addBtn(hdr, sels){
    if(!hdr || hdr.querySelector('.mk-listen')) return;
    var b=document.createElement('button'); b.className='mk-listen';
    b.style.cssText='margin-inline-start:.6rem;background:rgba(232,181,48,.18);border:1px solid rgba(232,181,48,.5);color:inherit;border-radius:1.2rem;padding:.18rem .7rem;font-size:.78rem;font-weight:800;cursor:pointer;font-family:inherit;vertical-align:middle';
    b.innerHTML=label(false);
    b.onclick=function(e){ e.stopPropagation(); speak(b, readText(sels)); };
    hdr.appendChild(b);
  }
  function inject(){
    TARGETS.forEach(function(tg){ addBtn(document.querySelector(tg.hdr), tg.txt); });
  }
  function start(){
    var rb=document.getElementById('rBody');
    if(rb) new MutationObserver(function(){ stop(); setTimeout(inject,30); }).observe(rb,{childList:true});
    var rd=document.getElementById('reader');
    if(rd) new MutationObserver(function(){ if(!rd.classList.contains('open')) stop(); }).observe(rd,{attributes:true,attributeFilter:['class']});
    inject();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
