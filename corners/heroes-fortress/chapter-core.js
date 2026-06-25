/* ════════════════════════════════════════════════════════════════
   chapter-core.js — core for the «حصن الأبطال» (Heroes' Fortress)
   chapter books: Prophets, Seerah, Companions/Heroes, Battles, and the
   Pure-Heart / Academy chapter sets. Reads window.HISN.chapters plus an
   ordered id list (cfg.ids). Builds figure-safe Nano Banana prompts +
   canonical slot ids. Sets window.ChapterCore and window.RihlaCore.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var STYLE =
    "Style: warm, friendly modern flat-vector children's-storybook illustration with rounded shapes, soft shadows and a sense of wonder. " +
    "Palette: deep navy #0A2540, gold #D4A017, teal #1A9B7B and emerald #1F8A5B on a cream #FEF5DC background. " +
    "Depict the scene only through settings, architecture, nature, objects and light, with at most faceless, modestly-dressed ordinary background people. " +
    "NEVER depict or draw any prophet, messenger, companion, angel, or any named sacred figure as a person — represent them ONLY by their symbol, belongings, or a soft glow; never draw the Ka'bah with a face. " +
    "High-resolution, clean and print-ready with generous margins. Render any Arabic text exactly as written and clearly legible.";
  var LINE_STYLE =
    "Pure crisp BLACK outlines on a WHITE background, no colour and no grey shading, bold clean lines, large simple areas for a child to colour. " +
    "Depict the scene only through settings, architecture, nature, objects and light. NEVER draw any prophet, companion, angel or named sacred figure as a person — use their symbol or belongings instead. Print-ready A4.";

  function clean(s){
    return String(s||'')
      .replace(/<\/?[^>]+>/g,'').replace(/﴿[^﴾]*﴾/g,'').replace(/«[^»]*»/g,'')
      .replace(/ﷺ|عليه السلام|رضي الله عنه|رضي الله عنها/g,'')
      .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}\uFE0F]/gu,'')
      .replace(/\s+/g,' ').trim();
  }
  function sentences(s,n){
    var parts=clean(s).split(/(?<=[.!?])\s+/);
    var out=parts.slice(0,n).join(' ');
    if(out.length<48 && parts.length>n) out=parts.slice(0,n+1).join(' ');
    return out;
  }
  function sceneHint(ch){
    if(ch.story&&ch.story[0]&&ch.story[0].pages&&ch.story[0].pages[0]) return sentences(ch.story[0].pages[0].text.en,2);
    if(ch.knowledge&&ch.knowledge.who) return sentences(ch.knowledge.who.en,2);
    if(ch.tag) return clean(ch.tag.en);
    return clean(ch.name.en);
  }

  function sid(ch, kind){ return 'slot-'+ch.id+'-'+kind; }
  function coverSid(key){ return 'slot-'+key+'-cover'; }

  function pHero(ch){
    return "A warm children's-storybook scene for an Islamic history book, chapter «"+ch.name.ar+"» ("+ch.name.en+"); theme: "+(ch.tag?clean(ch.tag.en):'')+". "+
      "Illustrate this moment ENTIRELY through setting, architecture, nature, objects and light (no main figure at all): "+sceneHint(ch)+" "+
      "Portrait composition with calm space at the top for a title. "+STYLE;
  }
  function pColor(ch){
    return "A full-page COLORING line-art for the chapter «"+ch.name.ar+"» ("+ch.name.en+"): illustrate its theme through setting, objects and symbols only (no figures) — "+sceneHint(ch)+" "+
      "A decorative border and the Arabic title «"+ch.name.ar+"» in a clean outline font at the top. "+LINE_STYLE;
  }
  var PUZ = [
    { ar:'🧩 المتاهة — صِل إلى النهاية', en:'Maze — find the way',
      p:function(ch){ return "A printable children's MAZE puzzle themed around «"+clean(ch.name.en)+"», with a clear START and FINISH and a small themed reward at the goal. Arabic instruction «ابدأ من هنا وصِل إلى النهاية». "+LINE_STYLE; } },
    { ar:'🔍 اكتشف الفروق الثمانية', en:'Find the 8 differences',
      p:function(ch){ return "A printable FIND-THE-DIFFERENCE puzzle: two nearly identical friendly scenes (settings and objects only, no figures) themed around «"+clean(ch.name.en)+"» with exactly 8 small differences and a row of 8 circles to tick. Arabic title «اكتشف الفروق». "+STYLE; } },
    { ar:'✏️ صِل النقاط بالترتيب', en:'Connect the dots',
      p:function(ch){ return "A printable DOT-TO-DOT that reveals an object or symbol linked to «"+clean(ch.name.en)+"» when connected, numbered with Eastern-Arabic numerals ١ ٢ ٣ …, with faint guides. Arabic instruction «صِل النقاط». "+LINE_STYLE; } },
    { ar:'👀 ابحث وعُدّ في الصورة', en:'Search & count',
      p:function(ch){ return "A printable 'search and count' busy scene (objects and settings only, no figures) full of small items linked to «"+clean(ch.name.en)+"» to find and count, with a short checklist. Arabic title «ابحث وعُدّ». "+STYLE; } }
  ];
  function puzFor(ch,i){ return PUZ[i%4]; }

  function items(cfg){
    var ch=window.HISN&&window.HISN.chapters?window.HISN.chapters:{};
    var ids=(cfg.ids||[]).filter(function(id){return ch[id];});
    return ids.map(function(id,i){ var c=ch[id]; return {
      id:id, order:i+1, name:c.name, tag:c.tag, icon:c.icon, emoji:(c.treasures&&c.treasures.medal)?'🏅':'⭐', data:c }; });
  }

  function buildPromptItems(cfg){
    var ITEMS=cfg.items||items(cfg), out=[];
    out.push({ page:1, station:'—', kind:{ar:'الغلاف',en:'Cover'}, ic:'📕',
      slot:coverSid(cfg.key), titleAr:cfg.titleAr, titleEn:cfg.titleEn, prompt:cfg.coverPrompt });
    var page=2;
    ITEMS.forEach(function(it,i){
      var puz=puzFor(it,i);
      out.push({ page:page++, station:it.order, kind:{ar:'قصة',en:'Story scene'}, ic:'📖',
        slot:sid(it,'hero'), titleAr:it.name.ar, titleEn:it.name.en, prompt:pHero(it.data) });
      out.push({ page:page++, station:it.order, kind:{ar:'نشاط',en:'Activity'}, ic:'🧩',
        slot:sid(it,'puz'), titleAr:it.name.ar, titleEn:it.name.en, prompt:puz.p(it.data) });
      out.push({ page:page++, station:it.order, kind:{ar:'تلوين',en:'Coloring'}, ic:'🖍️',
        slot:sid(it,'color'), titleAr:it.name.ar, titleEn:it.name.en, prompt:pColor(it.data) });
    });
    return { style:STYLE, lineStyle:LINE_STYLE, items:out };
  }

  var API = { STYLE:STYLE, LINE_STYLE:LINE_STYLE, sid:sid, coverSid:coverSid, puzFor:puzFor, pHero:pHero, pColor:pColor, items:items, buildPromptItems:buildPromptItems, clean:clean };
  window.ChapterCore = API;
  window.RihlaCore = API;
})();
