/* ════════════════════════════════════════════════════════════════
   surahs-core.js — core for the «بستان السور» (Short Surahs) book.
   Reads window.SURAH_INDEX + window.SURAHS (per-slug: tagline · verses ·
   about · tafsir · tadabbur · story · practice · lesson · action ·
   treasures · certificate). Builds figure-safe Nano Banana prompts +
   slot ids. Sets window.SurahsCore and window.RihlaCore.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var STYLE =
    "Style: warm, friendly modern flat-vector children's-storybook illustration with rounded shapes, soft shadows and a sense of wonder. " +
    "Palette: deep navy #0A2540, gold #D4A017, teal #1A9B7B and emerald #1E8449 on a cream #FEF5DC background. " +
    "Depict only settings, nature, objects and light, with faceless, modestly-dressed ordinary people. " +
    "NEVER draw any prophet, messenger, angel, or sacred figure, and never draw the Ka'bah with a face — use light, nature, objects, or symbols. " +
    "High-resolution, clean and print-ready with generous margins. Render any Arabic text exactly as written and clearly legible.";
  var LINE_STYLE =
    "Pure crisp BLACK outlines on a WHITE background, no colour and no grey shading, bold clean lines, large simple areas for a child to colour. " +
    "Depict only nature, settings, objects, light and faceless modest people. NEVER draw any prophet, messenger, angel or sacred figure. Print-ready A4.";

  function clean(s){
    return String(s||'')
      .replace(/<\/?[^>]+>/g,'').replace(/﴿[^﴾]*﴾/g,'').replace(/«[^»]*»/g,'')
      .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}\uFE0F]/gu,'')
      .replace(/\s+/g,' ').trim();
  }
  function sentences(s,n){
    var parts=clean(s).split(/(?<=[.!?])\s+/);
    var out=parts.slice(0,n).join(' ');
    if(out.length<48 && parts.length>n) out=parts.slice(0,n+1).join(' ');
    return out;
  }
  function themeHint(it){
    var d=it.data;
    if(d.tagline) return clean(d.tagline.en);
    if(d.about&&d.about.intro) return sentences(d.about.intro.en,1);
    if(d.story&&d.story.pages&&d.story.pages[0]) return sentences(d.story.pages[0].text.en,1);
    return it.nameEn;
  }

  function sid(it, kind){ return 'slot-surah-'+it.slug+'-'+kind; }
  function coverSid(){ return 'slot-surah-cover'; }

  function pHero(it){
    return "A warm children's-storybook scene celebrating the short Quran surah «"+it.nameAr+"» ("+it.nameEn+", "+it.metaEn+"). "+
      "Evoke its theme gently and symbolically through nature, light and objects (no Quranic text needed in the art): "+themeHint(it)+". "+
      "Faceless modest characters if any; portrait composition with calm space at the top for a title. "+STYLE;
  }
  function pColor(it){
    return "A full-page COLORING line-art celebrating the surah «"+it.nameAr+"» ("+it.nameEn+"): evoke its theme through nature and gentle objects — "+themeHint(it)+". "+
      "A decorative border and the Arabic surah name «"+it.nameAr+"» in a clean outline font at the top. "+LINE_STYLE;
  }
  var PUZ = [
    { ar:'🧩 المتاهة — صِل إلى النهاية', en:'Maze — find the way',
      p:function(it){ return "A printable children's MAZE puzzle themed around the surah «"+it.nameEn+"», with a clear START and FINISH and a small themed reward at the goal. Arabic instruction «ابدأ من هنا وصِل إلى النهاية». "+LINE_STYLE; } },
    { ar:'🔍 اكتشف الفروق الثمانية', en:'Find the 8 differences',
      p:function(it){ return "A printable FIND-THE-DIFFERENCE puzzle: two nearly identical friendly nature scenes evoking «"+it.nameEn+"» with exactly 8 small differences and a row of 8 circles to tick. Arabic title «اكتشف الفروق». "+STYLE; } },
    { ar:'✏️ صِل النقاط بالترتيب', en:'Connect the dots',
      p:function(it){ return "A printable DOT-TO-DOT that reveals a nature object evoking «"+it.nameEn+"» when connected, numbered with Eastern-Arabic numerals ١ ٢ ٣ …, with faint guides. Arabic instruction «صِل النقاط». "+LINE_STYLE; } },
    { ar:'👀 ابحث وعُدّ في الصورة', en:'Search & count',
      p:function(it){ return "A printable 'search and count' busy nature scene full of small items evoking «"+it.nameEn+"» to find and count, with a short checklist. Arabic title «ابحث وعُدّ». "+STYLE; } }
  ];
  function puzFor(it,i){ return PUZ[i%4]; }

  function items(){
    var idx=window.SURAH_INDEX||[], data=window.SURAHS||{};
    return idx.filter(function(e){return data[e.slug];}).map(function(e,i){
      return { slug:e.slug, order:i+1, num:e.num, emoji:e.emoji, tree:e.tree, nameAr:e.nameAr, nameEn:e.nameEn,
        metaAr:e.metaAr, metaEn:e.metaEn, data:data[e.slug] };
    });
  }

  function buildPromptItems(cfg){
    var ITEMS=cfg.items||items(), out=[];
    out.push({ page:1, station:'—', kind:{ar:'الغلاف',en:'Cover'}, ic:'📕',
      slot:coverSid(), titleAr:cfg.titleAr, titleEn:cfg.titleEn, prompt:cfg.coverPrompt });
    var page=2;
    ITEMS.forEach(function(it,i){
      var puz=puzFor(it,i);
      out.push({ page:page++, station:it.order, kind:{ar:'السورة',en:'Surah scene'}, ic:'📖',
        slot:sid(it,'hero'), titleAr:it.nameAr, titleEn:it.nameEn, prompt:pHero(it) });
      out.push({ page:page++, station:it.order, kind:{ar:'نشاط',en:'Activity'}, ic:'🧩',
        slot:sid(it,'puz'), titleAr:it.nameAr, titleEn:it.nameEn, prompt:puz.p(it) });
      out.push({ page:page++, station:it.order, kind:{ar:'تلوين',en:'Coloring'}, ic:'🖍️',
        slot:sid(it,'color'), titleAr:it.nameAr, titleEn:it.nameEn, prompt:pColor(it) });
    });
    return { style:STYLE, lineStyle:LINE_STYLE, items:out };
  }

  var API = { STYLE:STYLE, LINE_STYLE:LINE_STYLE, sid:sid, coverSid:coverSid, puzFor:puzFor, pHero:pHero, pColor:pColor, items:items, buildPromptItems:buildPromptItems, clean:clean };
  window.SurahsCore = API;
  window.RihlaCore = API;
})();
