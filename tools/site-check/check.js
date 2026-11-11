/* tools/site-check/check.js — the nightly health check (run by .github/workflows/site-check.yml).
   Opens every page of the site on a phone-sized screen, straight from the repository files, and reports:
     • script errors on a page
     • files the page asks for that do not exist (broken links to scripts, styles, images, data)
     • pages wider than the phone screen (sideways scrolling)
   The voice server is never called (a silent clip is returned instead), so the check costs nothing.
   Usage:  npm i playwright && npx playwright install chromium && node tools/site-check/check.js
   Exit code 1 when something is wrong → GitHub marks the run red and emails the owner. */
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '../..');
const SKIP = /node_modules|minaret-art|admin-report|upload-package|uploads|Books|\.github|tools/;
function walk(d, out) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f), rel = path.relative(ROOT, p);
    if (SKIP.test(rel)) continue;
    const s = fs.statSync(p);
    if (s.isDirectory()) walk(p, out); else if (f.endsWith('.html')) out.push(rel.split(path.sep).join('/'));
  }
  return out;
}
const SILENT = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=';
(async () => {
  const pages = ['index.html', 'parents.html', 'privacy.html'].filter(p => fs.existsSync(path.join(ROOT, p))).concat(walk(path.join(ROOT, 'corners'), []));
  const b = await chromium.launch(); const bad = []; let i = 0, n = 0;
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (i < pages.length) {
      const pg = pages[i++];
      const ctx = await b.newContext({ viewport: { width: 390, height: 844 } }); const p = await ctx.newPage();
      const errs = [], missing = new Set();
      p.on('pageerror', e => errs.push(String(e.message).slice(0, 160)));
      await ctx.route('**/*', r => {
        const u = r.request().url();
        if (u.startsWith('http://site.test/')) {
          const f = path.join(ROOT, decodeURIComponent(new URL(u).pathname));
          if (fs.existsSync(f) && fs.statSync(f).isFile()) return r.fulfill({ path: f });
          if (!/favicon|apple-touch|\.map$|\/cdn-cgi\//.test(u)) missing.add(new URL(u).pathname);
          return r.fulfill({ status: 404, body: '' });
        }
        if (u.includes('narrate')) return r.fulfill({ contentType: 'application/json', body: JSON.stringify({ url: SILENT, cached: true }) });
        if (/unpkg\.com|cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net|fonts\.(googleapis|gstatic)\.com/.test(u)) return r.continue();
        return r.abort();   // everything else outside the site (Firebase, Wikimedia, maps…) is skipped
      });
      try { await p.goto('http://site.test/' + encodeURI(pg), { waitUntil: 'load', timeout: 30000 }); } catch (e) { errs.push('did not finish loading'); }
      await p.waitForTimeout(1800); n++;
      const wide = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth).catch(() => 0);
      const out = [];
      if (errs.length) out.push('script error: ' + [...new Set(errs)].join(' | '));
      if (missing.size) out.push('missing file: ' + [...missing].slice(0, 6).join(', '));
      if (wide > 2) out.push('wider than a phone by ' + wide + 'px');
      if (out.length) bad.push(pg + '\n     ' + out.join('\n     '));
      await ctx.close();
    }
  }));
  console.log('Checked ' + n + ' pages — ' + (bad.length ? bad.length + ' with problems:' : 'all fine ✅'));
  bad.forEach(x => console.log(' • ' + x));
  await b.close();
  process.exit(bad.length ? 1 : 0);
})();
