window.QG=window.QG||{};
window.QG.juzList = [
  { id:'juz1', num:1, name:'الفاتحة', short:'الفاتحة', desc:'فاتحة الكتاب وأمّ القرآن — أعظم سورة في القرآن', grad:'linear-gradient(135deg,#1b8a5f,#0f6e4a)', surahs:['fatiha'] },
  { id:'juz23', num:23, name:'جزء ومالي', short:'ومالي', desc:'الجزء الثالث والعشرون — سور يس والصافات وص', grad:'linear-gradient(120deg,#2a6a4a,#16462e)', surahs:["yasin","saffat","sad"] },
  { id:'juz24', num:24, name:'جزء فمن أظلم', short:'فمن أظلم', desc:'الجزء الرابع والعشرون — سور الزمر وغافر وفصّلت', grad:'linear-gradient(120deg,#6a3a2a,#462214)', surahs:["zumar","ghafir","fussilat"] },
  { id:'juz25', num:25, name:'جزء إليه يُردّ', short:'إليه يُردّ', desc:'الجزء الخامس والعشرون — من سورة الشورى إلى سورة الجاثية', grad:'linear-gradient(120deg,#3a3a8a,#22225f)', surahs:["shura","zukhruf","dukhan","jathiya"] },
  { id:'juz26', num:26, name:'جزء حم الأحقاف', short:'حم الأحقاف', desc:'الجزء السادس والعشرون — من سورة الأحقاف إلى سورة ق', grad:'linear-gradient(120deg,#8a2a4a,#5f1630)', surahs:["ahqaf","muhammad","fath","hujurat","qaf"] },
  { id:'juz27', num:27, name:'جزء قال فما خطبكم', short:'قال فما خطبكم', desc:'الجزء السابع والعشرون — من سورة الذاريات إلى سورة الحديد', grad:'linear-gradient(120deg,#6a3a8a,#46225f)', surahs:["dhariyat","tur","najm","qamar","rahman","waqia","hadid"] },
  { id:'juz28', num:28, name:'جزء قد سمع', short:'قد سمع', desc:'الجزء الثامن والعشرون — من سورة المجادلة إلى سورة التحريم', grad:'linear-gradient(120deg,#8a5a2a,#6b3f16)', surahs:["mujadila","hashr","mumtahana","saff","jumua","munafiqun","taghabun","talaq","tahrim"] },
  { id:'juz29', num:29, name:'جزء تبارك', short:'تبارك', desc:'الجزء التاسع والعشرون — من سورة الملك إلى سورة المرسلات', grad:'linear-gradient(120deg,#2a6f8a,#16506b)', surahs:["mulk","qalam","haqqah","maarij","nuh","jinn","muzzammil","muddathir","qiyamah","insan","mursalat"] },
  { id:'juz30', num:30, name:'جزء عمّ', short:'عمّ', desc:'الجزء الثلاثون — من سورة النبأ إلى سورة الناس', grad:'linear-gradient(120deg,#1b6e4e,#0f5c4a)', surahs:["naba","naziat","abasa","takwir","infitar","mutaffifin","inshiqaq","buruj","tariq","ala","ghashiyah","fajr","balad","shams","layl","duha","sharh","tin","alaq","qadr","bayyinah","zalzalah","adiyat","qariah","takathur","asr","humazah","fil","quraysh","maun","kawthar","kafirun","nasr","masad","ikhlas","falaq","nas"] }
];
window.QG.order = window.QG.juzList.reduce(function(a,j){ return a.concat(j.surahs); }, []);
