/* district-core.js — core for «حيّنا الصغير» (Little District): Akhlaq & Adab
   books. Reads window.HOUSES + window.HOUSE_BY_SLUG. cfg.ids = slugs.
   Figure-safe Nano Banana prompts + slot ids. Sets DistrictCore + RihlaCore. */
(function () {
  'use strict';
  var STYLE =
    "Style: warm, friendly modern flat-vector children's-storybook illustration with rounded shapes, soft shadows and a sense of wonder. " +
    "Palette: deep navy #0A2540, gold #D4A017, teal #1A9B7B and emerald #1F8A5B on a cream #FEF5DC background. " +
    "Show the good manner through cheerful everyday children's scenes with faceless, modestly-dressed characters in a warm little Muslim neighbourhood of domes and arches. " +
    "NEVER depict any prophet, companion, angel, or sacred figure, and never draw the Ka'bah with a face — use symbols or light instead. " +
    "High-resolution, clean and print-ready with generous margins. Render any Arabic text exactly as written and clearly legible.";
  var LINE_STYLE =
    "Pure crisp BLACK outlines on a WHITE background, no colour and no grey shading, bold clean lines, large simple areas for a child to colour. " +
    "Show the manner through a cheerful everyday scene with faceless modest children in a little Muslim neighbourhood. NEVER draw any prophet, companion, angel or sacred figure. Print-ready A4.";

  function clean(s){
    return String(s||'').replace(/<\/?[^>]+>/g,'').replace(/﴿[^﴾]*﴾/g,'').replace(/«[^»]*»/g,'')
      .replace(/ﷺ|عليه السلام|رضي الله عنه|رضي الله عنها/g,'')
      .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}\uFE0F]/gu,'').replace(/\s+/g,' ').trim();
  }
  function simileOf(h){ var d=h&&h.knowledge&&h.knowledge.definition; return d&&d.simile?clean(d.simile.en):''; }
  function sid(it, kind){ return 'slot-district-'+it.slug+'-'+kind; }
  function coverSid(key){ return 'slot-'+key+'-cover'; }

  function pHero(it){
    var h=it.data, sim=simileOf(h);
    return "A warm children's-storybook scene about the good manner «"+it.shortAr+"» ("+it.shortEn+"); meaning: "+(h.tagline?clean(h.tagline.en):'')+". "+
      (sim?"Bring this gentle metaphor to life: "+sim+". ":"")+
      "Show children practising this manner kindly in a warm little Muslim neighbourhood, faceless and modest. Portrait composition with calm space at the top for a title. "+STYLE;
  }
  function pColor(it){
    var sim=simileOf(it.data)||it.shortEn;
    return "A full-page COLORING line-art about the good manner «"+it.shortAr+"» ("+it.shortEn+"): a cheerful neighbourhood scene of children practising it — "+sim+". "+
      "A decorative border and the Arabic title «"+it.nameAr+"» in a clean outline font at the top. "+LINE_STYLE;
  }
  var PUZ = [
    { ar:'🧩 المتاهة — صِل إلى النهاية', en:'Maze — find the way',
      p:function(it){ return "A printable children's MAZE puzzle themed around «"+it.shortEn+"», with a clear START and FINISH and a small themed reward at the goal. Arabic instruction «ابدأ من هنا وصِل إلى النهاية». "+LINE_STYLE; } },
    { ar:'🔍 اكتشف الفروق الثمانية', en:'Find the 8 differences',
      p:function(it){ return "A printable FIND-THE-DIFFERENCE puzzle: two nearly identical friendly neighbourhood scenes about «"+it.shortEn+"» with exactly 8 small differences and a row of 8 circles to tick. Arabic title «اكتشف الفروق». "+STYLE; } },
    { ar:'✏️ صِل النقاط بالترتيب', en:'Connect the dots',
      p:function(it){ return "A printable DOT-TO-DOT that reveals an object symbolising «"+it.shortEn+"» when connected, numbered with Eastern-Arabic numerals ١ ٢ ٣ …, with faint guides. Arabic instruction «صِل النقاط». "+LINE_STYLE; } },
    { ar:'👀 ابحث وعُدّ في الصورة', en:'Search & count',
      p:function(it){ return "A printable 'search and count' busy neighbourhood scene full of small items about «"+it.shortEn+"» to find and count, with a short checklist. Arabic title «ابحث وعُدّ». "+STYLE; } }
  ];
  function puzFor(it,i){ return PUZ[i%4]; }

  function items(cfg){
    var H=window.HOUSES||{}, BY=window.HOUSE_BY_SLUG||{};
    var ids=(cfg.ids||[]).filter(function(s){return H[s];});
    return ids.map(function(s,i){ var m=BY[s]||{}; return {
      slug:s, order:i+1, nameAr:m.nameAr||s, nameEn:m.nameEn||s, shortAr:m.shortAr||m.nameAr||s, shortEn:m.shortEn||m.nameEn||s, emoji:'🏅', data:H[s] }; });
  }
  function buildPromptItems(cfg){
    var ITEMS=cfg.items||items(cfg), out=[];
    out.push({ page:1, station:'—', kind:{ar:'الغلاف',en:'Cover'}, ic:'📕', slot:coverSid(cfg.key), titleAr:cfg.titleAr, titleEn:cfg.titleEn, prompt:cfg.coverPrompt });
    var page=2;
    ITEMS.forEach(function(it,i){ var puz=puzFor(it,i);
      out.push({ page:page++, station:it.order, kind:{ar:'قصة',en:'Story scene'}, ic:'📖', slot:sid(it,'hero'), titleAr:it.shortAr, titleEn:it.shortEn, prompt:pHero(it) });
      out.push({ page:page++, station:it.order, kind:{ar:'نشاط',en:'Activity'}, ic:'🧩', slot:sid(it,'puz'), titleAr:it.shortAr, titleEn:it.shortEn, prompt:puz.p(it) });
      out.push({ page:page++, station:it.order, kind:{ar:'تلوين',en:'Coloring'}, ic:'🖍️', slot:sid(it,'color'), titleAr:it.shortAr, titleEn:it.shortEn, prompt:pColor(it) });
    });
    return { style:STYLE, lineStyle:LINE_STYLE, items:out };
  }

  var API = { STYLE:STYLE, LINE_STYLE:LINE_STYLE, sid:sid, coverSid:coverSid, puzFor:puzFor, pHero:pHero, pColor:pColor, simileOf:simileOf, items:items, buildPromptItems:buildPromptItems, clean:clean };
  window.DistrictCore = API;
  window.RihlaCore = API;
})();
