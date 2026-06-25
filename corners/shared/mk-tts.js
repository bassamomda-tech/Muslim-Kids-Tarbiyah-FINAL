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
  function strip(h){ var d=document.createElement('div'); d.innerHTML=h; return (d.textContent||'').replace(/\s+/g,' ').trim(); }
  function L(){ return localStorage.getItem('bunyanLang')||'ar'; }
  var speaking=false, btn=null;
  function label(on){ return on ? ('⏸ '+(L()==='ar'?'إيقاف':'Stop')) : ('🔊 '+(L()==='ar'?'استمِع':'Listen')); }
  function setBtn(on){ speaking=on; if(btn) btn.innerHTML=label(on); }
  function stop(){ try{ synth.cancel(); }catch(e){} setBtn(false); }
  function pickVoice(){ var p=L()==='ar'?'ar':'en'; var vs=(synth.getVoices()||[]).filter(function(v){return v.lang&&v.lang.toLowerCase().indexOf(p)===0;}); return vs[0]||null; }
  function speak(t){
    if(speaking){ stop(); return; }
    if(!t) return;
    var u=new SpeechSynthesisUtterance(t); u.lang=L()==='ar'?'ar-SA':'en-US'; u.rate=.95;
    var v=pickVoice(); if(v) u.voice=v;
    u.onend=function(){ setBtn(false); }; u.onerror=function(){ setBtn(false); };
    synth.speak(u); setBtn(true);
  }
  function text(){
    var sels=['.block.wow p','.block.treasure .maryam p','.block.treasure p','.blocks .block p','.s-hero ~ .blocks .block p'];
    for(var i=0;i<sels.length;i++){ var el=document.querySelector('#rBody '+sels[i]); if(el && strip(el.innerHTML).length>20) return strip(el.innerHTML); }
    return '';
  }
  function inject(){
    var hdr=document.querySelector('#rBody .block.wow h3, #rBody .block.treasure h3, #rBody .blocks .block h3');
    if(!hdr || hdr.querySelector('.mk-listen')) return;
    btn=document.createElement('button'); btn.className='mk-listen';
    btn.style.cssText='margin-inline-start:.6rem;background:rgba(232,181,48,.18);border:1px solid rgba(232,181,48,.5);color:inherit;border-radius:1.2rem;padding:.18rem .7rem;font-size:.78rem;font-weight:800;cursor:pointer;font-family:inherit;vertical-align:middle';
    btn.innerHTML=label(false);
    btn.onclick=function(e){ e.stopPropagation(); speak(text()); };
    hdr.appendChild(btn);
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
