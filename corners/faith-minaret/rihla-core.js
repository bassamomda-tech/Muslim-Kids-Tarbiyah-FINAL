/* ════════════════════════════════════════════════════════════════
   rihla-core.js — shared core for every منارة العقيدة "rihla" journey
   (tawheed · malaika · kutub · aman · akhira · qadar · thabat · lab ·
   maarifa). Defines the house art-style, the Nano Banana prompt
   builders, and the canonical slot-id scheme so the BOOK and the
   PROMPTS page always agree on which frame each prompt fills.
   Exposes window.RihlaCore. Read journey config from window.RIHLA.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var STYLE =
    "Style: warm, friendly modern flat-vector children's-storybook illustration with rounded shapes, soft shadows and a sense of wonder. " +
    "Palette: deep navy #0A2540, gold #D4A017, royal purple #8E44AD and teal #1A9B7B on a cream #FEF5DC background. " +
    "Depict only settings, objects, light and faceless, modestly-dressed ordinary people. " +
    "NEVER draw any prophet, messenger, angel, or sacred figure — represent them only with light, an empty glowing robe, objects, or symbols. Never draw the Ka'bah with a face. " +
    "High-resolution, clean and print-ready with generous margins. Render any Arabic text exactly as written and clearly legible.";
  var LINE_STYLE =
    "Pure crisp BLACK outlines on a WHITE background, no colour and no grey shading, bold clean lines, large simple areas for a child to colour. " +
    "Depict only settings, objects, light and faceless modest people. NEVER draw any prophet, messenger, angel, or sacred figure — use light, symbols or objects instead. Print-ready A4.";

  /* ── text helpers ── */
  function clean(s){
    return String(s||'')
      .replace(/<\/?[^>]+>/g,'')                         // strip tags
      .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}\uFE0F]/gu,'') // strip emoji/symbols
      .replace(/\s+/g,' ').trim();
  }
  function sentences(s,n){
    var parts=clean(s).split(/(?<=[.!?])\s+/);
    var out=parts.slice(0,n).join(' ');
    if(out.length<48 && parts.length>n) out=parts.slice(0,n+1).join(' ');
    return out;
  }
  function topic(st){ var p=st.title.en.split('—'); return clean(p[p.length-1]); }
  function topicFull(st){ return clean(st.title.en); }

  /* ── canonical slot ids ── */
  function sid(key, st, kind){ return 'slot-'+key+'-'+st.id+'-'+kind; }
  function coverSid(key){ return 'slot-'+key+'-cover'; }

  /* ── art-prompt builders ── */
  function pHero(st){
    return "A warm children's-storybook scene for an Islamic faith book, page titled «"+st.title.ar+"» ("+st.title.en+"). "+
      "Depict this moment: "+sentences(st.narration.en,1)+" "+
      "Show it warmly and symbolically through setting, light and objects, with faceless modest characters for ordinary people. Portrait composition with calm space at the top for a title. "+STYLE;
  }
  function pColor(st){
    return "A full-page COLORING line-art illustrating «"+st.title.ar+"» ("+st.title.en+"): "+sentences(st.narration.en,1)+" "+
      "Render it as a friendly scene for a child to colour, with a decorative border and the Arabic title «"+st.title.ar+"» in a clean outline font at the top. "+LINE_STYLE;
  }
  var PUZ = [
    { key:'maze', ar:'🧩 المتاهة — صِل إلى النهاية', en:'Maze — find the way',
      p:function(st){ return "A printable children's MAZE puzzle themed around «"+topic(st)+"», with a clear START and FINISH and a small themed reward at the goal. Add the Arabic instruction «ابدأ من هنا وصِل إلى النهاية». "+LINE_STYLE; } },
    { key:'find', ar:'🔍 اكتشف الفروق الثمانية', en:'Find the 8 differences',
      p:function(st){ return "A printable FIND-THE-DIFFERENCE puzzle: two nearly identical friendly pictures themed around «"+topic(st)+"» with exactly 8 small differences and a row of 8 circles to tick. Arabic title «اكتشف الفروق». "+STYLE; } },
    { key:'dots', ar:'✏️ صِل النقاط بالترتيب', en:'Connect the dots',
      p:function(st){ return "A printable DOT-TO-DOT that reveals an object themed around «"+topic(st)+"» when connected, numbered with Eastern-Arabic numerals ١ ٢ ٣ …, with faint guides. Arabic instruction «صِل النقاط». "+LINE_STYLE; } },
    { key:'search', ar:'👀 ابحث وعُدّ في الصورة', en:'Search & count',
      p:function(st){ return "A printable 'search and count' busy scene full of small items themed around «"+topic(st)+"» to find and count, with a short checklist. Arabic title «ابحث وعُدّ». "+STYLE; } }
  ];
  function puzFor(st){ return PUZ[(st.num-1)%4]; }

  /* ── build the by-page prompt list for a journey config ── */
  function buildPromptItems(cfg){
    var key=cfg.key, ST=cfg.stations, items=[];
    items.push({ page:1, station:'—', kind:{ar:'الغلاف',en:'Cover'}, ic:'📕',
      slot:coverSid(key), titleAr:cfg.titleAr, titleEn:cfg.titleEn, prompt:cfg.coverPrompt });
    var page=2;
    ST.forEach(function(st){
      var puz=puzFor(st);
      items.push({ page:page++, station:st.num, kind:{ar:'قصة',en:'Story scene'}, ic:'📖',
        slot:sid(key,st,'hero'), titleAr:st.title.ar, titleEn:st.title.en, prompt:pHero(st) });
      items.push({ page:page++, station:st.num, kind:{ar:'نشاط · '+puz.ar.replace(/^[^\s]+\s/,''),en:'Activity · '+puz.en}, ic:'🧩',
        slot:sid(key,st,'puz'), titleAr:st.title.ar, titleEn:st.title.en, prompt:puz.p(st) });
      items.push({ page:page++, station:st.num, kind:{ar:'تلوين',en:'Coloring'}, ic:'🖍️',
        slot:sid(key,st,'color'), titleAr:st.title.ar, titleEn:st.title.en, prompt:pColor(st) });
    });
    return { style:STYLE, lineStyle:LINE_STYLE, items:items };
  }

  window.RihlaCore = {
    STYLE:STYLE, LINE_STYLE:LINE_STYLE,
    sid:sid, coverSid:coverSid, puzFor:puzFor,
    pHero:pHero, pColor:pColor,
    buildPromptItems:buildPromptItems,
    clean:clean
  };
})();
