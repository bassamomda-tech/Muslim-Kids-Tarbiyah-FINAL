/* Builds functions/warm-list.jsonl — the lines the server's warmVoices job voices ahead of time.
   Order: Arabic podcasts → Arabic stories (stories-ar.jsonl, most-read first) → English podcasts.
   Run after adding podcasts or recording a new story list, then redeploy the functions:
       node tools/voice-warm/build-list.js                                                       */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', '..');
global.window = {};
const DATA = path.join(ROOT, 'corners', 'skills', 'data');
fs.readdirSync(DATA).filter((f) => f.endsWith('.js')).forEach((f) => eval(fs.readFileSync(path.join(DATA, f), 'utf8')));
// split long lines exactly like the website does (mk-tts-cloud.js), so every clip is the one a child asks for
const TTS = fs.readFileSync(path.join(ROOT, 'corners', 'shared', 'mk-tts-cloud.js'), 'utf8');
const chunks = new Function(TTS.match(/function chunks[\s\S]*?\n  }\n/)[0] + 'return chunks;')();
const pod = { ar: [], en: [] };
Object.values(window.SKILLS || {}).forEach((S) => S.stations.forEach((st) => (st.podcast ? st.podcast.lines : []).forEach((l) => {
  const who = (S.cast || {})[l[0]] || {};
  [['ar', l[1]], ['en', l[2]]].forEach(([lang, t]) => chunks(String(t).replace(/<[^>]+>/g, '')).forEach((text) => pod[lang].push([text, lang, who.g || 'female', 'podcast'])));
})));
const stories = fs.readFileSync(path.join(__dirname, 'stories-ar.jsonl'), 'utf8').split('\n').filter(Boolean)
  .map((l) => JSON.parse(l)).map((j) => [j.text, j.lang || 'ar', j.gender || 'female', j.style || 'story']);
const seen = new Set(), out = [];
[...pod.ar, ...stories, ...pod.en].forEach((j) => { const k = j.join('|'); if (!seen.has(k)) { seen.add(k); out.push(JSON.stringify(j)); } });
fs.writeFileSync(path.join(ROOT, 'functions', 'warm-list.jsonl'), out.join('\n') + '\n');
console.log('functions/warm-list.jsonl:', out.length, 'lines (Arabic podcasts', pod.ar.length, '· stories', stories.length, '· English podcasts', pod.en.length + ')');
