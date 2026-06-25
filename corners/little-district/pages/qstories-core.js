/* ════════════════════════════════════════════════════════════════
   qstories-core.js — core for the «قصص القرآن» (Quran Stories) book.
   Reads window.QS_INDEX + window.QSTORIES (per-slug rich content:
   tagline · story.pages · verses · figures · lessons · reflect ·
   quiz · magicMix · treasures · certificate). Builds the figure-safe
   Nano Banana prompt list + canonical slot ids. Sets window.QSCore
   and window.RihlaCore (so the shared rihla-prompts.js renders the
   prompts page unchanged).
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var STYLE =
    "Style: warm, friendly modern flat-vector children's-storybook illustration with rounded shapes, soft shadows and a sense of wonder. " +
    "Palette: deep navy #0A2540, gold #D4A017, teal #1A9B7B and emerald #1E8449 on a cream #FEF5DC background. " +
    "Depict only settings, objects, light and faceless, modestly-dressed ordinary people. " +
    "NEVER draw any prophet, messenger, angel, or sacred figure — represent them only with light, objects, or symbols; never write text on the Ka'bah or draw it with a face. " +
    "High-resolution, clean and print-ready with generous margins. Render any Arabic text exactly as written and clearly legible.";
  var LINE_STYLE =
    "Pure crisp BLACK outlines on a WHITE background, no colour and no grey shading, bold clean lines, large simple areas for a child to colour. " +
    "Depict only settings, objects, light and faceless modest people. NEVER draw any prophet, messenger, angel or sacred figure — use light, symbols or objects. Print-ready A4.";

  function clean(s){
    return String(s||'')
      .replace(/<\/?[^>]+>/g,'')
      .replace(/﴿[^﴾]*﴾/g,'')
      .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}\uFE0F]/gu,'')
      .replace(/\s+/g,' ').trim();
  }
  function firstPageText(item){
    var st=item.data.story; if(st&&st.pages&&st.pages[0]) return clean(st.pages[0].text.en);
    return clean(item.data.tagline?item.data.tagline.en:'');
  }
  function sentences(s,n){
    var parts=clean(s).split(/(?<=[.!?])\s+/);
    var out=parts.slice(0,n).join(' ');
    if(out.length<48 && parts.length>n) out=parts.slice(0,n+1).join(' ');
    return out;
  }

  function sid(st, kind){ return 'slot-qstory-'+st.slug+'-'+kind; }
  function coverSid(){ return 'slot-qstory-cover'; }

  function pHero(item){
    return "A warm children's-storybook scene for a Quran-stories book, titled «"+item.nameAr+"» ("+item.nameEn+") from "+item.surahEn+". "+
      "Theme: "+(item.data.tagline?clean(item.data.tagline.en):item.metaEn)+". "+
      "Depict the scene of this story: "+sentences(firstPageText(item),2)+" "+
      "Show it warmly and symbolically through setting, light and objects, with faceless modest characters for ordinary people. Portrait composition with calm space at the top for a title. "+STYLE;
  }
  function pColor(item){
    return "A full-page COLORING line-art illustrating the Quran story «"+item.nameAr+"» ("+item.nameEn+"): "+sentences(firstPageText(item),1)+" "+
      "A friendly scene for a child to colour, with a decorative border and the Arabic title «"+item.nameAr+"» in a clean outline font at the top. "+LINE_STYLE;
  }
  var PUZ = [
    { ar:'🧩 المتاهة — صِل إلى النهاية', en:'Maze — find the way',
      p:function(it){ return "A printable children's MAZE puzzle themed around the story «"+it.nameEn+"», with a clear START and FINISH and a small themed reward at the goal. Arabic instruction «ابدأ من هنا وصِل إلى النهاية». "+LINE_STYLE; } },
    { ar:'🔍 اكتشف الفروق الثمانية', en:'Find the 8 differences',
      p:function(it){ return "A printable FIND-THE-DIFFERENCE puzzle: two nearly identical friendly pictures from the story «"+it.nameEn+"» with exactly 8 small differences and a row of 8 circles to tick. Arabic title «اكتشف الفروق». "+STYLE; } },
    { ar:'✏️ صِل النقاط بالترتيب', en:'Connect the dots',
      p:function(it){ return "A printable DOT-TO-DOT that reveals an object from the story «"+it.nameEn+"» when connected, numbered with Eastern-Arabic numerals ١ ٢ ٣ …, with faint guides. Arabic instruction «صِل النقاط». "+LINE_STYLE; } },
    { ar:'👀 ابحث وعُدّ في الصورة', en:'Search & count',
      p:function(it){ return "A printable 'search and count' busy scene full of small items from the story «"+it.nameEn+"» to find and count, with a short checklist. Arabic title «ابحث وعُدّ». "+STYLE; } }
  ];
  function puzFor(it){ return PUZ[(it.num-1)%4]; }

  /* merge QS_INDEX entries with their rich QSTORIES content */
  function items(){
    var idx=window.QS_INDEX||[], data=window.QSTORIES||{};
    return idx.filter(function(e){return data[e.slug];}).map(function(e){
      return { slug:e.slug, num:e.num, emoji:e.emoji, nameAr:e.nameAr, nameEn:e.nameEn,
        metaAr:e.metaAr, metaEn:e.metaEn, surahAr:e.surahAr, surahEn:e.surahEn, data:data[e.slug] };
    });
  }

  function buildPromptItems(cfg){
    var ITEMS=cfg.items||items(), out=[];
    out.push({ page:1, station:'—', kind:{ar:'الغلاف',en:'Cover'}, ic:'📕',
      slot:coverSid(), titleAr:cfg.titleAr, titleEn:cfg.titleEn, prompt:cfg.coverPrompt });
    var page=2;
    ITEMS.forEach(function(it){
      var puz=puzFor(it);
      out.push({ page:page++, station:it.num, kind:{ar:'قصة',en:'Story scene'}, ic:'📖',
        slot:sid(it,'hero'), titleAr:it.nameAr, titleEn:it.nameEn, prompt:pHero(it) });
      out.push({ page:page++, station:it.num, kind:{ar:'نشاط',en:'Activity'}, ic:'🧩',
        slot:sid(it,'puz'), titleAr:it.nameAr, titleEn:it.nameEn, prompt:puz.p(it) });
      out.push({ page:page++, station:it.num, kind:{ar:'تلوين',en:'Coloring'}, ic:'🖍️',
        slot:sid(it,'color'), titleAr:it.nameAr, titleEn:it.nameEn, prompt:pColor(it) });
    });
    return { style:STYLE, lineStyle:LINE_STYLE, items:out };
  }

  var API = { STYLE:STYLE, LINE_STYLE:LINE_STYLE, sid:sid, coverSid:coverSid, puzFor:puzFor, pHero:pHero, pColor:pColor, items:items, buildPromptItems:buildPromptItems, clean:clean };
  window.QSCore = API;
  window.RihlaCore = API;
})();
