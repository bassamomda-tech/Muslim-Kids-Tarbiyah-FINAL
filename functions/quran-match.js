/* quran-match.js — find where a Quran quote is in the mushaf, so the website can play
   Sheikh Al-Husary's recitation of exactly those words. Same rules as the website's
   quran-verse-map.js (built by tools/quran-verse-map/build.py); this one runs on the
   server, so quotes added to the site later are recognised automatically.
   Data: quran-words.json = [[surah, ayah, "word|word|…", [start,end, start,end …ms]], …]
   (words + Al-Husary word timings from quran.com, recitation 6 = Husary_64kbps files). */
const path = require('path');
let IDX = null;
function norm(t) {
  return String(t).replace(/<[^>]*>/g, '').replace(/[ىو]\u0670(?=[\u064B-\u065F\u0670\u06D6-\u06ED]*[\u0621-\u064A])/g, 'ا')
    .replace(/[ؐ-ًؚ-ٰٟۖ-ۭـ࣓-ࣿ]/g, '')
    .replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه').replace(/ؤ/g, 'و').replace(/ئ/g, 'ي')
    .replace(/[^ء-ي]/g, '').replace(/[اء]/g, '');
}
function load() {
  if (IDX) return IDX;
  const rows = require(path.join(__dirname, 'quran-words.json'));
  const refs = [], starts = [], lens = [], wofs = [], times = []; let big = '', pos = 0;
  for (const [s, a, words, t] of rows) {
    const ws = words.split('|').map(norm), offs = []; let o = 0;
    for (const w of ws) { offs.push(o); o += w.length; }
    const n = ws.join('');
    refs.push([s, a]); starts.push(pos); lens.push(n.length); wofs.push(offs); times.push(t); big += n; pos += n.length;
  }
  return (IDX = { refs, starts, lens, wofs, times, big });
}
function bisectRight(arr, x) { let lo = 0, hi = arr.length; while (lo < hi) { const m = (lo + hi) >> 1; if (x < arr[m]) hi = m; else lo = m + 1; } return lo; }
function ayahAt(p) { return bisectRight(IDX.starts, p) - 1; }
function wordAt(a, rel) { return bisectRight(IDX.wofs[a], rel); }   // 1-based word position
function grams(str, k) { const g = new Map(); for (let i = 0; i + k <= str.length; i++) { const x = str.substr(i, k); g.set(x, (g.get(x) || 0) + 1); } return g; }
/* returns 'surah:ayah[-ayah][@startMs][~endMs]' or null */
function match(quote) {
  load();
  const n = norm(quote); if (n.length < 6) return null;
  const { big, starts, lens, refs, wofs, times } = IDX;
  let a, b, wa, wb;
  const i = big.indexOf(n);
  if (i >= 0) {
    a = ayahAt(i); b = ayahAt(i + n.length - 1);
    wa = wordAt(a, i - starts[a]); wb = wordAt(b, i + n.length - 1 - starts[b]);
  } else {
    // loose match (a quote with "…" or a small spelling difference): vote with 6-letter pieces
    const K = 6, votes = new Map();
    for (let j = 0; j + K <= n.length; j += 3) {
      const c = n.substr(j, K); let k = big.indexOf(c), hits = 0;
      while (k >= 0 && hits < 40) { const x = ayahAt(k); votes.set(x, (votes.get(x) || 0) + 1); hits++; k = big.indexOf(c, k + 1); }
    }
    if (!votes.size) return null;
    const top = [...votes.entries()].sort((p, q) => q[1] - p[1])[0][0];
    const qg = grams(n, 4); let best = null;
    for (let lo = Math.max(0, top - 3); lo <= top; lo++) for (let hi = top; hi <= Math.min(refs.length - 1, top + 3); hi++) {
      const seg = big.slice(starts[lo], starts[hi] + lens[hi]), sg = grams(seg, 4); let hit = 0, tot = 0;
      qg.forEach((c, g) => { tot += c; hit += Math.min(c, sg.get(g) || 0); });
      const cov = hit / tot, prec = Math.min(1, (cov * n.length) / seg.length), sc = cov * 0.75 + prec * 0.25;
      if (cov >= 0.8 && (!best || sc > best[2])) best = [lo, hi, sc];
    }
    if (!best) return null;
    [a, b] = best; wa = 1; wb = wofs[b].length;
  }
  if (b - a > 12) return null;
  const [s1, a1] = refs[a], [s2, a2] = refs[b];
  if (s1 !== s2) return null;
  let ref = a === b ? `${s1}:${a1}` : `${s1}:${a1}-${a2}`;
  const W = (x) => wofs[x].length;
  if (wa > 1) { let p = wa; while (p > 1 && times[a][(p - 1) * 2] < 0) p--; if (p > 1) ref += '@' + Math.max(0, times[a][(p - 1) * 2] - 60); }
  if (wb < W(b)) { let p = wb; while (p < W(b) && times[b][(p - 1) * 2 + 1] < 0) p++; if (p < W(b)) ref += '~' + (times[b][(p - 1) * 2 + 1] + 180); }
  return ref;
}
module.exports = { match, norm };
