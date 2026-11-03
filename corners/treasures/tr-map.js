/* ════════════════════════════════════════════════════════════════
   tr-map.js — tiny map + photo helpers for landmarks.html / tours.html.
   • Leaflet 1.9.4 (cdnjs) + OpenStreetMap tiles — free, no API key.
     Loaded lazily, only when a map is first shown.
   • If Leaflet can't load (offline / blocked) we draw a calm SVG
     "paper map" sketch of the points instead, plus OpenStreetMap links.
   • Photos come from Wikimedia Commons (Special:FilePath); a broken
     image quietly falls back to a big emoji tile.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var LF = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/';
  var state = 0, waiters = [];   // 0 idle · 1 loading · 2 ok · 3 failed

  var css = '' +
    '.trm-map{height:300px;border-radius:18px;border:2px solid var(--line);overflow:hidden;background:#EAF2F6;position:relative;z-index:0}' +
    '@media (max-width:480px){.trm-map{height:240px}}' +
    '.trm-map .leaflet-popup-content{font-family:inherit;text-align:center;margin:10px 12px}' +
    '.trm-map .leaflet-popup-content b{display:block;font-size:1rem;margin-bottom:.3rem}' +
    '.trm-pop-btn{border:none;background:var(--acc);color:#fff;border-radius:10px;padding:.35rem .8rem;font-weight:800;font-family:inherit;cursor:pointer}' +
    '.trm-pin{width:30px;height:30px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:#fff;border:3px solid var(--acc);display:grid;place-items:center;box-shadow:0 2px 6px rgba(0,0,0,.25)}' +
    '.trm-pin b{transform:rotate(45deg);font-size:12px;font-weight:900;color:var(--acc);font-family:Nunito,sans-serif}' +
    '.trm-pin.on{background:var(--acc)}.trm-pin.on b{color:#fff}' +
    '.trm-sketch{width:100%;height:100%;display:block}' +
    '.trm-sketch .dot{cursor:pointer}' +
    '.trm-off{position:absolute;inset-inline-start:.5rem;top:.4rem;font-size:.72rem;color:var(--muted);background:rgba(255,255,255,.85);border-radius:8px;padding:.1rem .5rem}' +
    '.trm-list{list-style:none;display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:.4rem;margin-top:.7rem;padding:0}' +
    '.trm-list li{background:#fff;border:1px solid var(--line);border-radius:12px;padding:.4rem .7rem;font-size:.86rem;display:flex;gap:.4rem;align-items:center}' +
    '.trm-list .n{flex:0 0 1.6rem;height:1.6rem;border-radius:50%;background:var(--acc);color:#fff;display:grid;place-items:center;font-weight:900;font-size:.78rem}' +
    '.trm-list button{border:none;background:none;font:inherit;font-weight:800;color:var(--ink);cursor:pointer;text-align:start;flex:1;padding:0}' +
    '.trm-list a{font-size:.75rem;color:var(--acc);font-weight:800;white-space:nowrap}' +
    '.trm-fig{margin:0;border-radius:14px;overflow:hidden;background:var(--acc-soft);position:relative;min-height:120px;display:grid;place-items:center}' +
    '.trm-fig img{display:block;width:100%;max-height:300px;object-fit:cover}' +
    '.trm-fig .trm-emoji{display:none;font-size:4rem;padding:1.4rem}' +
    '.trm-fig.noimg img{display:none}.trm-fig.noimg .trm-emoji{display:block}' +
    '.trm-fig figcaption{position:absolute;bottom:0;inset-inline:0;font-size:.68rem;color:#fff;background:linear-gradient(transparent,rgba(0,0,0,.55));padding:.8rem .6rem .25rem}' +
    '.trm-fig.noimg figcaption{display:none}' +
    '.trm-credit{font-size:.78rem;color:var(--muted);text-align:center;margin-top:.8rem}' +
    '.trm-credit a{color:var(--acc);font-weight:800}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  function load(cb) {
    if (window.L && window.L.map) { state = 2; cb(true); return; }
    if (state === 2 || state === 3) { cb(state === 2); return; }
    waiters.push(cb);
    if (state === 1) return;
    state = 1;
    var done = function (ok) { if (state !== 1) return; state = ok && window.L ? 2 : 3; var w = waiters; waiters = []; w.forEach(function (f) { f(state === 2); }); };
    var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = LF + 'leaflet.min.css'; document.head.appendChild(l);
    var s = document.createElement('script'); s.src = LF + 'leaflet.min.js';
    s.onload = function () { done(true); }; s.onerror = function () { done(false); };
    document.head.appendChild(s);
    setTimeout(function () { done(false); }, 9000);
  }

  function leaflet(el) {
    var m = L.map(el, { scrollWheelZoom: false, worldCopyJump: true });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
    }).addTo(m);
    return m;
  }

  /* numbered pin — no external marker images needed */
  function pin(n, on) { return L.divIcon({ className: '', html: '<div class="trm-pin' + (on ? ' on' : '') + '"><b>' + n + '</b></div>', iconSize: [30, 30], iconAnchor: [15, 30], popupAnchor: [0, -28] }); }

  function osm(lat, lng, z) { return 'https://www.openstreetmap.org/?mlat=' + lat + '&mlon=' + lng + '#map=' + (z || 16) + '/' + lat + '/' + lng; }

  /* SVG fallback. pts: [{lat,lng}] · o: {route, upto, current, onPick(i), offline label} */
  function sketch(el, pts, o) {
    o = o || {};
    var W = Math.round(el.clientWidth) || 600, H = Math.round(el.clientHeight) || 300, pad = 30;   // real pixels → readable dots on phones
    var la = pts.map(function (p) { return p.lat; }), ln = pts.map(function (p) { return p.lng; });
    var minLa = Math.min.apply(0, la), maxLa = Math.max.apply(0, la), minLn = Math.min.apply(0, ln), maxLn = Math.max.apply(0, ln);
    var spanLa = Math.max(maxLa - minLa, .02), spanLn = Math.max(maxLn - minLn, .02);
    var sc = Math.min((W - 2 * pad) / spanLn, (H - 2 * pad) / spanLa);
    var ox = (W - spanLn * sc) / 2, oy = (H - spanLa * sc) / 2;
    function xy(p) { return [ox + (p.lng - minLn) * sc, oy + (maxLa - p.lat) * sc]; }
    var g = '';
    for (var i = 1; i < 6; i++) g += '<line x1="' + (W * i / 6) + '" y1="0" x2="' + (W * i / 6) + '" y2="' + H + '" stroke="#D6E4EA" stroke-width="1"/>';
    for (i = 1; i < 4; i++) g += '<line x1="0" y1="' + (H * i / 4) + '" x2="' + W + '" y2="' + (H * i / 4) + '" stroke="#D6E4EA" stroke-width="1"/>';
    var route = '';
    if (o.route && pts.length > 1) {
      var all = pts.map(function (p) { return xy(p).join(','); }).join(' ');
      var upto = o.upto == null ? pts.length - 1 : o.upto;
      var done = pts.slice(0, upto + 1).map(function (p) { return xy(p).join(','); }).join(' ');
      route = '<polyline points="' + all + '" fill="none" stroke="#B9C9D0" stroke-width="3" stroke-dasharray="6 6"/>' +
        (upto > 0 ? '<polyline points="' + done + '" fill="none" stroke="var(--acc)" stroke-width="4" stroke-linecap="round"/>' : '');
    }
    var dots = pts.map(function (p, k) {
      var c = xy(p), cur = k === o.current;
      return '<g class="dot" data-k="' + k + '" tabindex="0" role="button"><circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + (cur ? 15 : 11) + '" fill="' + (cur ? 'var(--acc)' : '#fff') + '" stroke="var(--acc)" stroke-width="3"/>' +
        '<text x="' + c[0] + '" y="' + (c[1] + 4.5) + '" text-anchor="middle" font-size="12" font-weight="900" fill="' + (cur ? '#fff' : 'var(--acc)') + '">' + (k + 1) + '</text></g>';
    }).join('');
    el.innerHTML = '<svg class="trm-sketch" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid meet" aria-hidden="true">' +
      '<rect width="' + W + '" height="' + H + '" fill="#EAF2F6"/>' + g + route + dots + '</svg>' +
      (o.offline ? '<span class="trm-off">' + o.offline + '</span>' : '');
    if (o.onPick) el.querySelectorAll('.dot').forEach(function (d) {
      var f = function () { o.onPick(+d.getAttribute('data-k')); };
      d.addEventListener('click', f); d.addEventListener('keydown', function (e) { if (e.key === 'Enter') f(); });
    });
  }

  function img(file, emoji, alt, credit) {
    var src = 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(file) + '?width=640';
    return '<figure class="trm-fig"><img src="' + src + '" loading="lazy" alt="' + String(alt).replace(/"/g, '&quot;') + '" onerror="this.parentNode.classList.add(\'noimg\')">' +
      '<span class="trm-emoji" aria-hidden="true">' + emoji + '</span>' +
      '<figcaption><a href="https://commons.wikimedia.org/wiki/File:' + encodeURIComponent(file) + '" target="_blank" rel="noopener" style="color:#fff">' + (credit || 'Wikimedia Commons') + '</a></figcaption></figure>';
  }

  function credit(ar) {
    return '<p class="trm-credit">📷 ' + (ar ? 'الصور: <a href="https://commons.wikimedia.org" target="_blank" rel="noopener">ويكيميديا كومنز</a> (رخص حرّة) · الخرائط: <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
      : 'Photos: <a href="https://commons.wikimedia.org" target="_blank" rel="noopener">Wikimedia Commons</a> (free licences) · Maps: <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>') + '</p>';
  }

  window.TRMap = { load: load, leaflet: leaflet, pin: pin, sketch: sketch, osm: osm, img: img, credit: credit };
})();
