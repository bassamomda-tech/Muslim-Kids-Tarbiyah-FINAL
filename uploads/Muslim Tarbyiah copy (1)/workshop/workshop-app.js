/* ═══ ورشة الصانع الصغير — التطبيق ═══ */
(function(){
'use strict';
var WS = window.WS;
var K = { done:'wsDone', photos:'wsPhotos' };

function jget(k,fb){ try{ var v=localStorage.getItem(k); return v==null?fb:JSON.parse(v); }catch(e){ return fb; } }
function jset(k,v){ try{ localStorage.setItem(k,JSON.stringify(v)); return true; }catch(e){ return false; } }
function lang(){ try{ return localStorage.getItem('bunyanLang')==='en'?'en':'ar'; }catch(e){ return 'ar'; } }
function L(o){ return lang()==='en' ? (o.en!=null?o.en:o.ar) : o.ar; }
function LT(a,e){ return lang()==='en'?e:a; }
function esc(s){ return String(s).replace(/</g,'&lt;'); }

var doneMap  = jget(K.done,{});
var photoMap = jget(K.photos,{});
var curAct = null;

/* ── week number (for weekly mission) ── */
function weekIndex(){
  var d = new Date();
  var start = new Date(d.getFullYear(),0,1);
  return Math.floor((d - start) / (7*24*3600*1000)) + d.getFullYear();
}

/* ── weekly mission ── */
function renderWeekly(){
  var act = WS.acts[ weekIndex() % WS.acts.length ];
  var el = document.getElementById('weeklyCard');
  var done = !!doneMap[act.id];
  el.innerHTML =
    '<div class="weekly-ic">'+act.ic+'</div>'+
    '<div style="flex:1;min-width:0">'+
      '<span class="weekly-lbl">'+LT('⭐ مهمةُ هذا الأسبوع','⭐ This week\'s mission')+'</span>'+
      '<div class="weekly-t">'+esc(L(act))+'</div>'+
      '<div class="weekly-s">'+esc(L({ar:act.descAr,en:act.descEn}))+'</div>'+
    '</div>'+
    (done ? '<span class="weekly-done" title="">✅</span>' : '<span class="weekly-done">👉</span>');
  el.onclick = function(){ openAct(act.id); };
}

/* ── meter + stamps ── */
function catDone(catId){
  var acts = WS.acts.filter(function(a){return a.cat===catId;});
  return acts.length>0 && acts.every(function(a){return !!doneMap[a.id];});
}
function renderMeter(){
  var total = WS.acts.length;
  var n = WS.acts.filter(function(a){return !!doneMap[a.id];}).length;
  document.getElementById('pCount').textContent = n+' / '+total;
  document.getElementById('pFill').style.width = (n/total*100)+'%';
  var lbl = document.getElementById('meterLabel');
  if(n===0)          lbl.textContent = LT('ابدأْ أولَ نشاطٍ لك اليوم!','Start your first activity today!');
  else if(n<total/2) lbl.textContent = LT('أحسنت! يداكَ تتعلّمانِ الصنعة 👏','Well done! Your hands are learning the craft 👏');
  else if(n<total)   lbl.textContent = LT('ما شاء الله — صانعٌ ماهرٌ حقاً! 🌟','MashaAllah — a truly skilled maker! 🌟');
  else               lbl.textContent = LT('🎉 أتممتَ كلَّ أنشطةِ الورشة — أنتَ الصانعُ الكبير!','🎉 You finished every workshop activity — Master Maker!');

  var st = document.getElementById('stamps');
  st.innerHTML = WS.cats.map(function(c){
    var earned = catDone(c.id);
    return '<span class="stamp'+(earned?' earned':'')+'"><span class="s-ic">'+c.stamp+'</span>'+esc(L(c))+'</span>';
  }).join('');
}

/* ── activity groups (one section per category) ── */
function actCard(a,i){
  var cor = WS.corners[a.corner];
  var done = !!doneMap[a.id];
  var photo = photoMap[a.id];
  return '<div class="act" data-id="'+a.id+'" style="animation-delay:'+(i*0.05)+'s">'+
    (done?'<span class="act-done-badge">✔</span>':'')+
    '<div class="act-top"><div class="act-ic">'+a.ic+'</div><div><div class="act-name">'+esc(L(a))+'</div></div></div>'+
    (photo?'<img class="act-photo" src="'+photo+'" alt="">':'')+
    '<p class="act-desc">'+esc(L({ar:a.descAr,en:a.descEn}))+'</p>'+
    '<div class="act-tags">'+
      '<span class="act-tag corner" style="--tag-c:'+cor.color+'">'+cor.ic+' '+esc(L(cor))+'</span>'+
      a.themes.map(function(t){var th=WS.themes[t];return '<span class="act-tag">'+th.ic+' '+esc(L(th))+'</span>';}).join('')+
    '</div>'+
  '</div>';
}
function renderActs(){
  var wrap = document.getElementById('acts');
  wrap.innerHTML = WS.cats.map(function(cat){
    var list = WS.acts.filter(function(a){return a.cat===cat.id;});
    if(!list.length) return '';
    var n = list.filter(function(a){return !!doneMap[a.id];}).length;
    var badge = catDone(cat.id) ? cat.stamp+' '+LT('اكتمل','Complete') : (n+' / '+list.length);
    return '<div class="sec-t" data-screen-label="'+esc(cat.ar)+'"><span class="l">'+cat.ic+'</span>'+esc(L(cat))+
      '<span class="sec-badge">'+badge+'</span></div>'+
      '<div class="acts">'+list.map(actCard).join('')+'</div>';
  }).join('');
  wrap.querySelectorAll('.act').forEach(function(el){
    el.onclick = function(){ openAct(el.dataset.id); };
  });
}

/* ── journal ── */
function renderJournal(){
  var wrap = document.getElementById('journalWrap');
  var doneActs = WS.acts.filter(function(a){return !!doneMap[a.id];});
  if(!doneActs.length){
    wrap.innerHTML = '<div class="j-empty">'+LT('دفترُك ما زالَ فارغاً — أنجزْ أولَ نشاطٍ وسيظهرُ هنا مع ختمِك الأول! 🏵️','Your journal is still empty — finish your first activity and it will appear here with your first stamp! 🏵️')+'</div>';
    return;
  }
  wrap.innerHTML = '<div class="journal">'+doneActs.map(function(a){
    var cat = WS.cats.filter(function(c){return c.id===a.cat;})[0];
    var photo = photoMap[a.id];
    var d = new Date(doneMap[a.id]);
    var date = d.toLocaleDateString(lang()==='ar'?'ar-EG':'en-GB',{day:'numeric',month:'long',year:'numeric'});
    return '<div class="j-card">'+
      (photo?'<img class="j-photo" src="'+photo+'" alt="">':'<div class="j-noph">'+a.ic+'</div>')+
      '<div class="j-name">'+cat.stamp+' '+esc(L(a))+'</div>'+
      '<div class="j-date">'+date+'</div>'+
    '</div>';
  }).join('')+'</div>';
}

/* ── reader ── */
function openAct(id){
  var a = WS.acts.filter(function(x){return x.id===id;})[0];
  if(!a) return;
  curAct = a;
  var cor = WS.corners[a.corner];
  var body = document.getElementById('rBody');
  document.getElementById('rCorner').innerHTML = cor.ic+' '+esc(L(cor));
  document.getElementById('rCorner').style.setProperty('--rc', cor.color);

  var photo = photoMap[a.id];
  body.innerHTML =
    '<div class="r-hero"><div class="h-ic">'+a.ic+'</div><div><h2>'+esc(L(a))+'</h2><div class="h-desc">'+esc(L({ar:a.descAr,en:a.descEn}))+'</div></div></div>'+
    '<div class="r-why"><span class="w-lbl">'+LT('🔗 لماذا هذا النشاط؟','🔗 Why this activity?')+'</span>'+esc(L({ar:a.whyAr,en:a.whyEn}))+'</div>'+
    '<div class="r-h3">🧺 '+LT('نحتاجُ إلى','We need')+'</div>'+
    '<div class="r-tools">'+a.tools.map(function(t){return '<span class="r-tool">'+t.ic+' '+esc(L(t))+'</span>';}).join('')+'</div>'+
    '<div class="r-h3">👣 '+LT('الخطوات','Steps')+'</div>'+
    '<ol class="r-steps">'+a.steps.map(function(s,i){
      return '<li class="r-step'+(s.svg?' has-svg':'')+'"><span class="st-n">'+(i+1)+'</span>'+
        (s.svg?'<span class="st-svg">'+s.svg+'</span>':'<span class="st-ic">'+s.ic+'</span>')+
        '<p>'+esc(L(s))+'</p></li>';
    }).join('')+'</ol>'+
    '<div class="r-h3">🎚️ '+LT('لكلِّ عمرٍ طريقتُه','A way for every age')+'</div>'+
    '<div class="r-ages">'+
      '<div class="r-age"><span class="a-lbl">🐥 '+LT('للصغار ٣–٦','Ages 3–6')+'</span>'+esc(L(a.little))+'</div>'+
      '<div class="r-age"><span class="a-lbl">🦅 '+LT('للكبار ٩+','Ages 9+')+'</span>'+esc(L(a.big))+'</div>'+
    '</div>'+
    (a.wisdom?'<div class="r-wisdom">'+esc(L(a.wisdom))+'</div>':'')+
    (photo?'<img class="r-myphoto" id="rMyPhoto" src="'+photo+'" alt="">':'<img class="r-myphoto" id="rMyPhoto" style="display:none" alt="">');

  updateReaderBtns();
  var rd = document.getElementById('reader');
  rd.classList.add('open');
  rd.querySelector('.sheet').scrollTop = 0;
  document.body.style.overflow = 'hidden';
}
function updateReaderBtns(){
  if(!curAct) return;
  var done = !!doneMap[curAct.id];
  var hasPhoto = !!photoMap[curAct.id];
  document.getElementById('rPhotoBtn').innerHTML = '📷 '+(hasPhoto?LT('غيِّر صورةَ عملي','Change my photo'):LT('أضفْ صورةَ عملي','Add a photo of my work'));
  var db = document.getElementById('rDoneBtn');
  db.innerHTML = done ? '🏵️ '+LT('أُنجز! (اضغطْ للتراجع)','Done! (tap to undo)') : '✅ '+LT('أنجزتُ النشاط!','I finished it!');
  db.classList.toggle('is-done', done);
}
function closeReader(){
  document.getElementById('reader').classList.remove('open');
  document.body.style.overflow = '';
  curAct = null;
}

/* ── done + stamp splash ── */
function toggleDone(){
  if(!curAct) return;
  var a = curAct;
  if(doneMap[a.id]){
    delete doneMap[a.id];
    jset(K.done, doneMap);
    updateReaderBtns(); refreshAll();
    return;
  }
  doneMap[a.id] = Date.now();
  jset(K.done, doneMap);
  updateReaderBtns(); refreshAll();
  var cat = WS.cats.filter(function(c){return c.id===a.cat;})[0];
  if(catDone(a.cat)){
    showSplash(cat.stamp, LT('حصلتَ على ختمِ «'+cat.ar+'»!','You earned the "'+cat.en+'" stamp!'), LT('أكملتَ كلَّ أنشطةِ هذه الفئة 🎉','You completed every activity in this category 🎉'));
  } else {
    showSplash('🌟', LT('أحسنتَ يا صانعُ الصغير!','Well done, little maker!'), LT('أُضيفَ النشاطُ إلى دفترِ إنجازِك','Added to your achievement journal'));
  }
}
var splashTimer = null;
function showSplash(ic,t,s){
  document.getElementById('splashIc').textContent = ic;
  document.getElementById('splashT').textContent = t;
  document.getElementById('splashS').textContent = s;
  var sp = document.getElementById('splash');
  sp.classList.add('show');
  clearTimeout(splashTimer);
  splashTimer = setTimeout(function(){ sp.classList.remove('show'); }, 2200);
  sp.onclick = function(){ sp.classList.remove('show'); };
}

/* ── toast ── */
var toastTimer = null;
function toast(msg){
  var t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function(){ t.classList.remove('show'); }, 2600);
}

/* ── photo upload (resized, stored locally) ── */
document.getElementById('rPhotoBtn').onclick = function(){
  document.getElementById('photoInput').click();
};
document.getElementById('photoInput').onchange = function(){
  var f = this.files && this.files[0];
  this.value = '';
  if(!f || !curAct) return;
  var img = new Image();
  var url = URL.createObjectURL(f);
  img.onload = function(){
    URL.revokeObjectURL(url);
    var max = 560;
    var sc = Math.min(1, max/Math.max(img.width,img.height));
    var cv = document.createElement('canvas');
    cv.width = Math.round(img.width*sc); cv.height = Math.round(img.height*sc);
    cv.getContext('2d').drawImage(img,0,0,cv.width,cv.height);
    var data = cv.toDataURL('image/jpeg',.62);
    photoMap[curAct.id] = data;
    if(!jset(K.photos, photoMap)){
      delete photoMap[curAct.id];
      jset(K.photos, photoMap);
      toast(LT('لم تُحفَظِ الصورة — الذاكرةُ ممتلئة. النشاطُ يُحسَبُ لك بلا صورة.','Photo not saved — storage is full. Your activity still counts without it.'));
      return;
    }
    var ph = document.getElementById('rMyPhoto');
    if(ph){ ph.src = data; ph.style.display = 'block'; }
    updateReaderBtns(); refreshAll();
    toast(LT('📷 حُفِظتْ صورةُ عملِك في دفترِ إنجازِك!','📷 Your work photo is saved in your journal!'));
  };
  img.onerror = function(){ URL.revokeObjectURL(url); toast(LT('تعذَّرَ فتحُ الصورة','Could not open the image')); };
  img.src = url;
};

/* ── language toggle ── */
function applyLang(l){
  try{ localStorage.setItem('bunyanLang', l); }catch(e){}
  var h = document.documentElement;
  h.dir = (l==='en')?'ltr':'rtl';
  h.lang = l;
  document.querySelectorAll('.lang button').forEach(function(b){
    b.classList.toggle('active', b.dataset.lang===l);
  });
  refreshAll();
}
document.querySelectorAll('.lang button').forEach(function(b){
  b.onclick = function(){ applyLang(b.dataset.lang); };
});

/* ── wiring ── */
document.getElementById('rClose').onclick = closeReader;
document.getElementById('reader').addEventListener('click', function(e){ if(e.target===this) closeReader(); });
document.getElementById('rDoneBtn').onclick = toggleDone;
document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeReader(); });

function refreshAll(){ renderWeekly(); renderMeter(); renderActs(); renderJournal(); }
document.querySelectorAll('.lang button').forEach(function(b){
  b.classList.toggle('active', b.dataset.lang===lang());
});
refreshAll();
})();
