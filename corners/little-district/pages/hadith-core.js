/* ════════════════════════════════════════════════════════════════
   hadith-core.js — core for the «الأربعون النووية» (40 Hadith) book.
   Reads window.HADITH_INDEX + window.HADITHS (per-slug: matn ·
   narrator · source · explain[] · benefits[] · apply · quiz ·
   treasures · certificate). Builds figure-safe Nano Banana prompts +
   slot ids. Sets window.HadithCore and window.RihlaCore (so the
   shared rihla-prompts.js renders the prompts page unchanged).
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var STYLE =
    "Style: warm, friendly modern flat-vector children's-storybook illustration with rounded shapes, soft shadows and a sense of wonder. " +
    "Palette: deep navy #0A2540, gold #D4A017, teal #1A9B7B and emerald #1E8449 on a cream #FEF5DC background. " +
    "Depict the lesson through everyday children's scenes, objects and light, with faceless, modestly-dressed ordinary people. " +
    "NEVER draw the Prophet ﷺ or any prophet, messenger, angel, or sacred figure, and never draw the Ka'bah with a face — use light, objects, or symbols. " +
    "High-resolution, clean and print-ready with generous margins. Render any Arabic text exactly as written and clearly legible.";
  var LINE_STYLE =
    "Pure crisp BLACK outlines on a WHITE background, no colour and no grey shading, bold clean lines, large simple areas for a child to colour. " +
    "Depict the lesson through everyday children's scenes, objects and faceless modest people. NEVER draw the Prophet ﷺ or any prophet, messenger, angel or sacred figure. Print-ready A4.";

  function clean(s){
    return String(s||'')
      .replace(/<\/?[^>]+>/g,'')
      .replace(/﴿[^﴾]*﴾/g,'').replace(/«[^»]*»/g,'')
      .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}\uFE0F]/gu,'')
      .replace(/\s+/g,' ').trim();
  }
  function sentences(s,n){
    var parts=clean(s).split(/(?<=[.!?])\s+/);
    var out=parts.slice(0,n).join(' ');
    if(out.length<48 && parts.length>n) out=parts.slice(0,n+1).join(' ');
    return out;
  }
  function sceneHint(it){
    var d=it.data;
    if(d.explain&&d.explain[0]) return sentences(d.explain[0].en,2);
    if(d.apply) return sentences(d.apply.en,1);
    return it.themeEn;
  }

  function sid(it, kind){ return 'slot-hadith-'+it.slug+'-'+kind; }
  function coverSid(){ return 'slot-hadith-cover'; }

  function pHero(it){
    return "A warm children's-storybook scene symbolically illustrating the lesson of a prophetic hadith, titled «"+it.titleAr+"» ("+it.titleEn+"); theme: "+it.themeEn+". "+
      "Bring the lesson to life with an everyday children's scene: "+sceneHint(it)+" "+
      "Faceless modest characters; portrait composition with calm space at the top for a title. "+STYLE;
  }
  function pColor(it){
    return "A full-page COLORING line-art illustrating the lesson of the hadith «"+it.titleAr+"» ("+it.titleEn+"), theme: "+it.themeEn+". "+
      "A friendly everyday scene for a child to colour, with a decorative border and the Arabic title «"+it.titleAr+"» in a clean outline font at the top. "+LINE_STYLE;
  }
  var PUZ = [
    { ar:'🧩 المتاهة — صِل إلى النهاية', en:'Maze — find the way',
      p:function(it){ return "A printable children's MAZE puzzle themed around «"+it.themeEn+"», with a clear START and FINISH and a small themed reward at the goal. Arabic instruction «ابدأ من هنا وصِل إلى النهاية». "+LINE_STYLE; } },
    { ar:'🔍 اكتشف الفروق الثمانية', en:'Find the 8 differences',
      p:function(it){ return "A printable FIND-THE-DIFFERENCE puzzle: two nearly identical friendly everyday scenes about «"+it.themeEn+"» with exactly 8 small differences and a row of 8 circles to tick. Arabic title «اكتشف الفروق». "+STYLE; } },
    { ar:'✏️ صِل النقاط بالترتيب', en:'Connect the dots',
      p:function(it){ return "A printable DOT-TO-DOT that reveals an object symbolising «"+it.themeEn+"» when connected, numbered with Eastern-Arabic numerals ١ ٢ ٣ …, with faint guides. Arabic instruction «صِل النقاط». "+LINE_STYLE; } },
    { ar:'👀 ابحث وعُدّ في الصورة', en:'Search & count',
      p:function(it){ return "A printable 'search and count' busy scene full of small items about «"+it.themeEn+"» to find and count, with a short checklist. Arabic title «ابحث وعُدّ». "+STYLE; } }
  ];
  function puzFor(it){ return PUZ[(it.num-1)%4]; }

  function items(){
    var idx=window.HADITH_INDEX||[], data=window.HADITHS||{};
    return idx.filter(function(e){return data[e.slug];}).map(function(e){
      return { slug:e.slug, num:e.num, emoji:e.emoji, titleAr:e.titleAr, titleEn:e.titleEn,
        themeAr:e.themeAr, themeEn:e.themeEn, data:data[e.slug] };
    });
  }

  function buildPromptItems(cfg){
    var ITEMS=cfg.items||items(), out=[];
    out.push({ page:1, station:'—', kind:{ar:'الغلاف',en:'Cover'}, ic:'📕',
      slot:coverSid(), titleAr:cfg.titleAr, titleEn:cfg.titleEn, prompt:cfg.coverPrompt });
    var page=2;
    ITEMS.forEach(function(it){
      var puz=puzFor(it);
      out.push({ page:page++, station:it.num, kind:{ar:'حديث',en:'Hadith scene'}, ic:'📖',
        slot:sid(it,'hero'), titleAr:it.titleAr, titleEn:it.titleEn, prompt:pHero(it) });
      out.push({ page:page++, station:it.num, kind:{ar:'نشاط',en:'Activity'}, ic:'🧩',
        slot:sid(it,'puz'), titleAr:it.titleAr, titleEn:it.titleEn, prompt:puz.p(it) });
      out.push({ page:page++, station:it.num, kind:{ar:'تلوين',en:'Coloring'}, ic:'🖍️',
        slot:sid(it,'color'), titleAr:it.titleAr, titleEn:it.titleEn, prompt:pColor(it) });
    });
    return { style:STYLE, lineStyle:LINE_STYLE, items:out };
  }

  var API = { STYLE:STYLE, LINE_STYLE:LINE_STYLE, sid:sid, coverSid:coverSid, puzFor:puzFor, pHero:pHero, pColor:pColor, items:items, buildPromptItems:buildPromptItems, clean:clean };
  window.HadithCore = API;
  window.RihlaCore = API;
})();
