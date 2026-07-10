/* ═══ ورشة الصانع الصغير — رسوم توضيحية وخطوات مفصَّلة ═══
   يعمل بعد تحميل كل ملفات البيانات: يضيف svg لكل خطوة ويستبدل
   خطوات بعض الأنشطة اليدوية بنسخ أكثر تفصيلاً. */
(function(){
var A = window.WS.acts;
function act(id){ for(var i=0;i<A.length;i++) if(A[i].id===id) return A[i]; return null; }

/* أدوات رسم مختصرة — كل رسم SVG بسيط بخطوط واضحة */
function svg(inner){ return '<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#C4DA76" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">'+inner+'</svg>'; }

/* ═══ فانوس المسجد الورقي — خطوات مفصلة + رسوم ═══ */
var lantern = act('lantern');
if(lantern){
  lantern.steps = [
    { ic:'📄', svg: svg('<rect x="20" y="15" width="80" height="60" rx="3"/><line x1="60" y1="15" x2="60" y2="75" stroke-dasharray="5 4"/><path d="M78 30 L92 30 M85 23 L92 30 L85 37" stroke="#F2F8E8"/>'),
      ar:'خذْ ورقةً ملوَّنةً مستطيلةً واطوِها من المنتصفِ طولياً (الحافةُ الطويلةُ على الحافةِ الطويلة). اضغطْ على خطِّ الطيِّ بظفرِك حتى يصيرَ حاداً.',
      en:'Take a rectangular colored sheet and fold it in half lengthwise (long edge to long edge). Run your nail along the fold to make a sharp crease.' },
    { ic:'✏️', svg: svg('<rect x="20" y="30" width="80" height="40" rx="3"/><line x1="20" y1="30" x2="100" y2="30" stroke-width="4"/><line x1="30" y1="30" x2="30" y2="62"/><line x1="42" y1="30" x2="42" y2="62"/><line x1="54" y1="30" x2="54" y2="62"/><line x1="66" y1="30" x2="66" y2="62"/><line x1="78" y1="30" x2="78" y2="62"/><line x1="90" y1="30" x2="90" y2="62"/><line x1="20" y1="70" x2="100" y2="70" stroke-dasharray="4 3" stroke="#F2F8E8"/>'),
      ar:'قبلَ القص: ارسمْ بالمسطرةِ خطاً على بعدِ إصبعَينِ من الحافةِ المفتوحةِ — هذا «خطُّ الأمان» الذي لا نقصُّ بعدَه. ثم ارسمْ خطوطاً رأسيةً متباعدةً بعرضِ إصبعٍ تقريباً.',
      en:'Before cutting: rule a line two fingers from the open edge — the "safety line" you never cut past. Then mark vertical lines about a finger-width apart.' },
    { ic:'✂️', svg: svg('<rect x="20" y="30" width="80" height="40" rx="3"/><line x1="20" y1="30" x2="100" y2="30" stroke-width="4"/><line x1="30" y1="30" x2="30" y2="62"/><line x1="42" y1="30" x2="42" y2="62"/><line x1="54" y1="30" x2="54" y2="62"/><path d="M66 45 l8 -6 M66 45 l8 6 M66 45 l-6 0" stroke="#F2F8E8"/><circle cx="76" cy="37" r="3" stroke="#F2F8E8"/><circle cx="76" cy="53" r="3" stroke="#F2F8E8"/>'),
      ar:'قصَّ على الخطوطِ الرأسيةِ بدءاً من جهةِ الطيَّةِ المغلقةِ وتوقفْ عندَ خطِّ الأمان — لا تصلْ للحافةِ أبداً وإلا انفصلتِ الورقة! (المقصُّ مع الأهلِ للصغار).',
      en:'Cut along the vertical lines starting from the folded edge, stopping at the safety line — never reach the open edge or the paper falls apart! (Scissors with a parent for little ones.)' },
    { ic:'🔄', svg: svg('<path d="M30 20 Q30 15 35 15 L85 15 Q90 15 90 20"/><ellipse cx="60" cy="70" rx="30" ry="8"/><path d="M30 20 Q35 45 30 70 M90 20 Q85 45 90 70"/><path d="M45 18 Q48 44 45 68 M60 17 Q60 44 60 69 M75 18 Q72 44 75 68"/>'),
      ar:'افتحِ الورقةَ برفقٍ ولُفَّها حتى يلتقيَ طرفاها القصيرانِ وألصقْهما فوقَ بعضِهما بالصمغ. اضغطْ من الأعلى قليلاً نحوَ الأسفل — تنتفخُ الشرائحُ للخارجِ ويظهرُ شكلُ الفانوس!',
      en:'Gently open the sheet and roll it so the short ends meet; glue them overlapping. Press down slightly from the top — the strips bow outward and the lantern shape appears!' },
    { ic:'🌙', svg: svg('<ellipse cx="60" cy="72" rx="26" ry="7"/><path d="M36 25 Q40 48 36 72 M84 25 Q80 48 84 72"/><path d="M34 25 Q60 15 86 25"/><path d="M60 8 Q52 8 52 16 Q52 24 60 24 Q55 21 55 16 Q55 11 60 8 Z" fill="#C4DA76"/><path d="M75 12 l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1 Z" fill="#C4DA76" stroke="none"/>'),
      ar:'اقصصْ من بقايا الورقِ هلالاً ونجوماً صغيرة: للهلالِ ارسمْ دائرةً ثم دائرةً أصغرَ متداخلةً واقصصْ ما بينَهما. ألصقِ الزينةَ على جسمِ الفانوس.',
      en:'From the paper scraps cut a crescent and small stars: for the crescent draw a circle, then a smaller overlapping one, and cut between them. Glue the décor onto the lantern body.' },
    { ic:'🕌', svg: svg('<line x1="60" y1="5" x2="60" y2="20"/><path d="M45 20 L75 20"/><ellipse cx="60" cy="65" rx="22" ry="6"/><path d="M40 26 Q44 46 40 65 M80 26 Q76 46 80 65"/><path d="M38 26 Q60 18 82 26"/><rect x="20" y="76" width="80" height="8" rx="2" stroke-dasharray="4 3"/>'),
      ar:'اثقبْ ثقبَينِ متقابلَينِ في الحافةِ العلويةِ ومرِّرْ خيطاً واربطْه — صارَ للفانوسِ علاقة. علِّقْه فوقَ سجّادةِ صلاتِك أو عندَ بابِ غرفتِك.',
      en:'Punch two facing holes in the top edge, thread a string through and tie it — now it has a hanger. Hang it above your prayer mat or at your door.' },
  ];
}

/* ═══ مجسم الكعبة — رسوم ═══ */
var kaaba = act('kaaba');
if(kaaba && kaaba.steps.length===5){
  kaaba.steps[0].svg = svg('<rect x="35" y="25" width="50" height="45" rx="2"/><path d="M35 25 L50 12 L100 12 L85 25 M100 12 L100 57 L85 70" /><path d="M20 40 L32 40 M26 34 L32 40 L26 46" stroke="#F2F8E8"/>');
  kaaba.steps[1].svg = svg('<rect x="35" y="22" width="50" height="50" rx="2"/><rect x="35" y="30" width="50" height="8" fill="#C4DA76" stroke="none"/><rect x="35" y="30" width="50" height="8"/>');
  kaaba.steps[2].svg = svg('<rect x="35" y="22" width="50" height="50" rx="2"/><rect x="35" y="30" width="50" height="7"/><rect x="53" y="48" width="14" height="24" rx="2" stroke="#C4DA76"/>');
  kaaba.steps[3].svg = svg('<circle cx="60" cy="45" r="30"/><line x1="60" y1="45" x2="60" y2="22" stroke="#F2F8E8"/><path d="M55 27 L60 20 L65 27" stroke="#F2F8E8"/><text x="56" y="14" fill="#C4DA76" stroke="none" font-size="10">ق</text>');
}

/* ═══ الطيارة الورقية — رسوم ═══ */
var kite = act('kite');
if(kite && kite.steps.length===5){
  kite.steps[0].svg = svg('<line x1="60" y1="10" x2="60" y2="80"/><line x1="30" y1="32" x2="90" y2="32"/><circle cx="60" cy="32" r="6" stroke="#F2F8E8"/>');
  kite.steps[1].svg = svg('<path d="M60 8 L92 32 L60 80 L28 32 Z"/><line x1="60" y1="8" x2="60" y2="80" stroke-dasharray="4 3"/><line x1="28" y1="32" x2="92" y2="32" stroke-dasharray="4 3"/>');
  kite.steps[2].svg = svg('<path d="M60 8 L88 30 L60 62 L32 30 Z"/><path d="M60 62 Q66 68 60 72 Q54 78 60 82" stroke="#C4DA76"/><path d="M56 70 l8 0 M56 78 l8 0" stroke="#C4DA76"/>');
  kite.steps[3].svg = svg('<path d="M60 10 L86 30 L60 58 L34 30 Z"/><circle cx="60" cy="30" r="4" stroke="#F2F8E8"/><path d="M60 30 Q40 55 20 78" stroke="#F2F8E8"/>');
  kite.steps[4].svg = svg('<path d="M78 12 L96 26 L78 46 L60 26 Z"/><path d="M78 46 Q70 60 30 74" stroke="#F2F8E8" stroke-dasharray="5 4"/><circle cx="24" cy="76" r="6"/><path d="M10 60 q6 -4 10 0 q6 4 10 0 M8 70 q6 -4 10 0" stroke="#C4DA76"/>');
}

/* ═══ الكرة الشراب — رسوم ═══ */
var sock = act('sockball');
if(sock && sock.steps.length===5){
  sock.steps[0].svg = svg('<path d="M30 15 L58 15 L58 48 Q58 66 42 66 Q28 66 28 52 L30 15 Z"/><circle cx="44" cy="44" r="10" stroke="#C4DA76"/><circle cx="80" cy="40" r="14"/><path d="M70 30 q10 -8 20 0" stroke-dasharray="3 3"/>');
  sock.steps[1].svg = svg('<circle cx="60" cy="48" r="20"/><path d="M60 28 Q78 20 84 34 Q88 44 80 48" stroke="#F2F8E8"/><path d="M74 26 L84 34 L74 40" stroke="#F2F8E8"/>');
  sock.steps[2].svg = svg('<circle cx="60" cy="45" r="22"/><path d="M52 24 L54 20 M60 23 L60 18 M68 24 L66 20" stroke="#C4DA76"/><path d="M48 30 q4 6 0 12 q-4 6 0 12" stroke="#C4DA76" stroke-dasharray="3 2"/>');
  sock.steps[3].svg = svg('<circle cx="60" cy="45" r="24"/><path d="M38 40 Q60 28 82 40 M38 52 Q60 64 82 52" stroke="#C4DA76"/>');
}

/* ═══ مصفاة الماء — رسوم ═══ */
var filter = act('filter');
if(filter && filter.steps.length===5){
  filter.steps[0].svg = svg('<path d="M35 12 L85 12 L64 42 L64 55 L56 55 L56 42 Z"/><path d="M40 60 L80 60 L80 84 L40 84 Z"/><path d="M100 30 q-8 12 -22 16" stroke="#F2F8E8" stroke-dasharray="4 3"/>');
  filter.steps[1].svg = svg('<path d="M35 8 L85 8 L64 38 L64 52 L56 52 L56 38 Z"/><path d="M52 44 q8 6 16 0" stroke="#F2F8E8"/><circle cx="52" cy="28" r="2.5" fill="#C4DA76" stroke="none"/><circle cx="60" cy="24" r="2.5" fill="#C4DA76" stroke="none"/><circle cx="68" cy="28" r="2.5" fill="#C4DA76" stroke="none"/><circle cx="56" cy="18" r="4"/><circle cx="66" cy="16" r="4"/>');
  filter.steps[2].svg = svg('<path d="M35 8 L85 8 L64 38 L64 52 L56 52 L56 38 Z"/><path d="M30 4 q6 -4 12 2" stroke="#F2F8E8"/><path d="M78 0 L70 10" stroke="#F2F8E8"/>');
  filter.steps[3].svg = svg('<path d="M35 8 L85 8 L64 38 L64 50 L56 50 L56 38 Z"/><path d="M58 52 l1 6 M60 52 l0 8 M62 52 l-1 6" stroke="#C4DA76"/><path d="M40 62 L80 62 L80 86 L40 86 Z"/><path d="M44 78 q8 4 16 0 q8 -4 16 0" stroke="#C4DA76"/>');
}

/* ═══ دورة الماء في كيس — رسوم ═══ */
var wc = act('watercycle');
if(wc && wc.steps.length===5){
  wc.steps[0].svg = svg('<rect x="25" y="12" width="70" height="66" rx="5"/><line x1="25" y1="20" x2="95" y2="20"/><circle cx="42" cy="34" r="8" stroke="#C4DA76"/><path d="M64 32 q4 -8 12 -4 q8 -6 12 2 q6 2 2 8 L64 38 Z" stroke="#F2F8E8"/><path d="M32 66 q10 6 22 0 q12 -6 24 0 q6 3 10 0" stroke="#F2F8E8"/>');
  wc.steps[1].svg = svg('<rect x="25" y="12" width="70" height="66" rx="5"/><line x1="25" y1="20" x2="95" y2="20"/><path d="M30 62 L90 62 L90 74 L30 74 Z" fill="#C4DA76" stroke="none" opacity=".4"/><path d="M30 62 L90 62"/>');
  wc.steps[2].svg = svg('<rect x="30" y="18" width="56" height="54" rx="4"/><circle cx="100" cy="14" r="9" stroke="#C4DA76"/><path d="M100 0 v4 M114 14 h-4 M110 4 l-3 3 M110 24 l-3 -3" stroke="#C4DA76"/><rect x="24" y="10" width="10" height="18" rx="2" stroke="#F2F8E8"/>');
  wc.steps[3].svg = svg('<rect x="25" y="10" width="70" height="70" rx="5"/><path d="M40 68 q3 -10 0 -20 M55 70 q3 -12 0 -24 M70 68 q3 -10 0 -20" stroke="#F2F8E8" stroke-dasharray="3 3"/><path d="M44 26 l0 8 M56 22 l0 8 M68 26 l0 8" stroke="#C4DA76"/><circle cx="44" cy="40" r="2" fill="#C4DA76" stroke="none"/><circle cx="56" cy="36" r="2" fill="#C4DA76" stroke="none"/><circle cx="68" cy="40" r="2" fill="#C4DA76" stroke="none"/>');
}

/* ═══ المسبحة — رسوم ═══ */
var mas = act('masbaha');
if(mas && mas.steps.length===5){
  mas.steps[1].svg = svg('<line x1="20" y1="45" x2="100" y2="45"/><circle cx="96" cy="45" r="7" fill="#C4DA76" stroke="none"/><path d="M14 40 q-4 5 0 10 q5 4 10 0" stroke="#F2F8E8"/>');
  mas.steps[2].svg = svg('<line x1="15" y1="45" x2="105" y2="45"/><circle cx="30" cy="45" r="6"/><circle cx="44" cy="45" r="6" fill="#C4DA76" stroke="none"/><circle cx="58" cy="45" r="6"/><circle cx="72" cy="45" r="6" fill="#C4DA76" stroke="none"/><path d="M92 38 L100 45 L92 52" stroke="#F2F8E8"/>');
  mas.steps[3].svg = svg('<circle cx="60" cy="45" r="28"/><circle cx="60" cy="17" r="7" fill="#C4DA76" stroke="none"/><circle cx="83" cy="30" r="5"/><circle cx="88" cy="50" r="5"/><circle cx="74" cy="66" r="5"/><circle cx="46" cy="66" r="5"/><circle cx="32" cy="50" r="5"/><circle cx="37" cy="30" r="5"/>');
}

/* ═══ المزولة — رسوم ═══ */
var sd = act('sundial');
if(sd && sd.steps.length===5){
  sd.steps[0].svg = svg('<ellipse cx="60" cy="60" rx="40" ry="14"/><line x1="60" y1="60" x2="60" y2="18"/><path d="M56 24 L60 16 L64 24"/>');
  sd.steps[2].svg = svg('<ellipse cx="60" cy="60" rx="40" ry="14"/><line x1="60" y1="60" x2="60" y2="22"/><line x1="60" y1="60" x2="88" y2="52" stroke="#C4DA76"/><line x1="60" y1="60" x2="82" y2="66" stroke="#C4DA76"/><line x1="60" y1="60" x2="34" y2="64" stroke="#C4DA76"/><circle cx="18" cy="14" r="8" stroke="#F2F8E8"/><path d="M18 2 v4 M30 14 h-4 M27 5 l-3 3" stroke="#F2F8E8"/>');
}

/* ═══ فانوس البرطمان — رسوم ═══ */
var fan = act('ram-fanoos');
if(fan && fan.steps.length===5){
  fan.steps[0].svg = svg('<path d="M30 20 L54 20 M30 34 L54 34 L54 20 L30 34 Z" stroke="#C4DA76"/><path d="M66 18 l14 0 l-7 12 Z" stroke="#C4DA76"/><rect x="66" y="40" width="14" height="14" stroke="#C4DA76"/><path d="M30 50 l12 0 l-6 10 Z M46 50 l12 12 M58 50 l-12 12" stroke="#F2F8E8"/>');
  fan.steps[1].svg = svg('<path d="M42 22 L78 22 L78 18 L42 18 Z"/><path d="M40 24 L80 24 L78 74 Q60 80 42 74 Z"/><path d="M48 34 l10 0 l-5 9 Z" stroke="#C4DA76"/><rect x="62" y="40" width="10" height="10" stroke="#C4DA76"/><path d="M50 56 l8 8 M58 56 l-8 8" stroke="#C4DA76"/>');
  fan.steps[2].svg = svg('<path d="M40 24 L80 24 L78 74 Q60 80 42 74 Z"/><path d="M55 60 Q55 50 60 46 Q65 50 65 60 Q65 66 60 66 Q55 66 55 60 Z" fill="#C4DA76" stroke="none"/><line x1="60" y1="66" x2="60" y2="72"/>');
  fan.steps[3].svg = svg('<path d="M44 26 L76 26 L74 68 Q60 74 46 68 Z"/><path d="M44 26 Q60 6 76 26" stroke="#C4DA76"/><circle cx="60" cy="10" r="3" stroke="#C4DA76"/>');
}

/* ═══ جسر الورقة — رسوم ═══ */
var pb = act('paper-bridge');
if(pb && pb.steps.length===5){
  pb.steps[1].svg = svg('<rect x="10" y="45" width="26" height="30"/><rect x="84" y="45" width="26" height="30"/><path d="M36 46 Q60 56 84 46" stroke="#F2F8E8"/><circle cx="60" cy="42" r="8" stroke="#C4DA76"/><path d="M56 54 l8 8 M64 54 l-8 8" stroke="#C4DA76"/>');
  pb.steps[2].svg = svg('<rect x="10" y="45" width="26" height="30"/><rect x="84" y="45" width="26" height="30"/><path d="M36 45 L42 38 L48 45 L54 38 L60 45 L66 38 L72 45 L78 38 L84 45" stroke="#C4DA76" stroke-width="3"/>');
  pb.steps[3].svg = svg('<rect x="10" y="50" width="26" height="28"/><rect x="84" y="50" width="26" height="28"/><path d="M36 50 L42 43 L48 50 L54 43 L60 50 L66 43 L72 50 L78 43 L84 50" stroke="#C4DA76" stroke-width="3"/><path d="M52 26 L68 26 L66 40 L54 40 Z"/><circle cx="60" cy="16" r="5" stroke="#F2F8E8"/><circle cx="60" cy="8" r="5" stroke="#F2F8E8"/>');
}

/* ═══ البركان — رسوم ═══ */
var vol = act('volcano');
if(vol && vol.steps.length===5){
  vol.steps[0].svg = svg('<path d="M50 20 L70 20 L70 45 L50 45 Z" stroke-dasharray="4 3"/><path d="M20 80 L48 22 L52 22 M68 22 L72 22 L100 80 Z M20 80 L100 80"/>');
  vol.steps[2].svg = svg('<path d="M20 80 L50 24 L70 24 L100 80 Z"/><path d="M78 6 q8 4 4 12 L74 26" stroke="#F2F8E8"/><path d="M54 22 q6 -8 12 0" stroke="#C4DA76"/>');
  vol.steps[3].svg = svg('<path d="M20 80 L50 30 L70 30 L100 80 Z"/><path d="M52 30 Q48 14 56 8 M60 30 Q60 10 60 4 M68 30 Q72 14 64 8" stroke="#C4DA76" stroke-width="4"/><circle cx="50" cy="6" r="3" stroke="#C4DA76"/><circle cx="70" cy="8" r="3" stroke="#C4DA76"/>');
}

})();
