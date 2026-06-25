# Little District — Project Instructions

This project teaches Muslim kids 34 character traits (akhlaq + adab), each as a
"house" in a district. The architecture is fully data-driven — every house is
a single bilingual data file at `pages/data/<slug>.js`.

## 🏠 Building a new house

When the user says something like:
- "build the house of trust"
- "اعمل بيت الأمانة"
- "add الإحسان"
- any phrase naming one of the 34 houses

→ Follow the **HOUSE BUILD WORKFLOW** below. Do NOT ask clarifying questions
unless the user is asking for something else entirely. The workflow has all
the defaults you need.

---

## 🔧 HOUSE BUILD WORKFLOW

### Step 1 — Identify the house

Look up the requested house in `pages/data/_index.js` to get its **slug**,
**color**, **art variant**, and official Arabic + English names. Use those
exact values — don't invent.

The full list of 34 slugs lives in `_index.js`. Common requests:
- truth → truth, trust → trust, courage → courage, ihsan → ihsan
- tongue / pardon / forbearance / respect / sincerity / humility / haya
- striving / patience / loyalty / gratitude / generosity / knowledge
- chivalry / contentment / mercy / justice / altruism / goodthink / mastery
- greeting / eating / permission / dua / sleep / hospitality / bathroom
- masjid / friendship / majlis

If the user names a house that's **already built** (truth, respect), tell
them and ask if they want to revise it or skip to a different one.

### Step 2 — Use a reference

Read **one** existing house as a template:
- `pages/data/truth.js` (best for akhlaq character traits)
- `pages/data/respect.js` (best for traits with rich classical stories)

You don't need to read both. Just one — to copy the shape, field names,
and quality level.

### Step 3 — Write `pages/data/<slug>.js`

Follow the schema EXACTLY. Every text field must be `{ar: "...", en: "..."}`.

```js
window.HOUSES.<slug> = {

  tagline: { ar, en },

  // ROOM 1: KNOWLEDGE
  knowledge: {
    didYouKnow: { title:{ar,en}, sub:{ar,en} },
    definition: {
      linguistic:  {ar, en},        // root meaning
      terminology: {ar, en},        // scholarly definition (use <b>...</b>)
      simile:      {ar, en},        // beautiful analogy for kids
    },
    forms: [   // EXACTLY 6 — types/forms of this character
      { icon:'💬', color:'#27AE60', title:{ar,en}, body:{ar,en} }, ...
    ],
    ranking: [  // 3–4 ranked tiers (highest → lowest)
      { color:'#XXX', title:{ar,en}, body:{ar,en} }, ...
    ],
    verses:       [ { text:{ar,en}, ref:{ar,en} }, ... ],   // 2–3 Quranic verses
    hadiths:      [ { text:{ar,en}, source:{ar,en} }, ... ], // 2 hadiths (with grading)
    benefits:     [ {ar:'🌸 ...', en:'🌸 ...'}, ... ],     // 4–5 — leading emoji shown as badge
    obstacles:    [ {ar, en}, ... ],                         // 4 villains
    acquireMeans: [ {ar, en}, ... ],                         // 4 hero moves
  },

  // ROOM 2: STORIES (3–4 stories, paginated + interactive)
  stories: [
    {
      icon:'😇', scene:'madinah'|'desert'|'night'|'garden'|'mosque', character:'🧔',
      title: { ar, en },
      pages: [   // 4–7 pages per story
        { scene, character, text:{ar,en} },                    // narrative beat
        { scene, character, text:{ar,en},
          choice: {                                            // optional — ONE per story
            q:{ar,en},
            opts: [
              { t:{ar,en}, c:true, exp:{ar,en} },             // correct
              { t:{ar,en}, c:false, exp:{ar,en} }, ...        // distractors
            ]
          }
        }, ...
      ],
      quiz:    [ { q:{ar,en}, opts:[{t:{ar,en},c:true|false}, ...] }, ... ],  // exactly 3 MCQs
      moral:   {ar, en},                                                // one-line takeaway
      badge:   { icon:'🛡️', title:{ar,en} },
      reflect: [ {ar,en}, ... ],     // 2 reflection questions
      didYouKnow: [ {ar,en}, ... ],  // 2 facts/sources (cite collection + #)
    }, ...
  ],

  // ROOM 3: MEMORIZE
  memorize: {
    verses:  [ { text:{ar,en}, ref:{ar,en} }, ... ],  // 2–3
    hadiths: [ { text:{ar,en}, ref:{ar,en} }, ... ],  // 1–2
    pledge: {
      title: {ar, en},
      lines: [ {ar,en}, ... ],   // 4 first-person promises
      dua:   {ar, en},
    },
  },

  // ROOM 4: ACTIVITIES (6 types × 3 levels = 18 mini-games)
  activities: {
    totalPoints: 180,
    list: [
      { id:'know',   icon:'📝', kind:'fill',      title:{ar,en},
        levels: [ {kind:'fillBlanks', points:30, wordBank:{ar:[],en:[]}, items:[{prefix:{ar,en},answer:{ar,en},suffix:{ar,en}}, ...]},
                  {kind:'trueFalse', points:30, items:[{q:{ar,en}, t:true|false}, ...]},
                  {kind:'mcq',       points:30, items:[{q:{ar,en}, opts:[{t:{ar,en},c:bool}, ...]}, ...]} ] },
      { id:'flip',   icon:'🎴', kind:'flipMatch', title:{ar,en},
        levels: [ {kind:'flipMatch', points:30, pairs:[{a:{ar,en},b:{ar,en}}, ...]},
                  {kind:'match',     points:30, left:[{id:N,t:{ar,en}}, ...], right:[{id:N,t:{ar,en}}, ...]},
                  {kind:'mcq',       points:30, items:[...]} ] },
      { id:'sort',   icon:'🗂️', kind:'sort',     title:{ar,en},
        levels: [ {kind:'sort', points:30, items:[{t:{ar,en}, good:true|false}, ...]} × 3 ] },
      { id:'cipher', icon:'🔑', kind:'cipher',   title:{ar,en},
        levels: [ {kind:'cipher', points:30,
                   key:{ar:{symbol:letter, ...}, en:{symbol:letter, ...}},
                   puzzles:[{symbols:{ar,en}, answer:{ar,en}}, ...]},
                  {kind:'cipher', ...},
                  {kind:'mcq', ...} ] },
      { id:'scen',   icon:'🎭', kind:'mcq',      title:{ar,en},
        levels: [ {kind:'mcq', points:30, items:[...real-life scenarios...]} × 3 ] },
      { id:'maze',   icon:'🧩', kind:'maze',     title:{ar,en},
        levels: [ {kind:'maze', points:30, sizes:[5,7,9]}, {sizes:[7,9,11]}, {sizes:[9,11,13]} ] },
    ],
  },

  // ROOM 5: TREASURES
  treasures: [   // 6 stickers, each with its OWN distinct color (rainbow palette)
    { icon:'🏅', color:'#27AE60', title:{ar,en} },  // green
    { icon:'🌳', color:'#1ABC9C', title:{ar,en} },  // teal
    { icon:'🌟', color:'#F4D03F', title:{ar,en} },  // yellow
    { icon:'🛡️', color:'#2980B9', title:{ar,en} },  // blue
    { icon:'📜', color:'#E67E22', title:{ar,en} },  // orange
    { icon:'🗝️', color:'#8E44AD', title:{ar,en} },  // purple
  ],

  icon: '🛡️',   // emoji shown on certificate seal

  // MAGIC RECIPE — daily actions kids can do
  magicMixTitle: {ar, en},        // e.g. "كيف تَعيشُ هذا الخُلق كُلَّ يَوم؟"
  formulaEq:     {ar, en},        // e.g. "مُراقَبة + شَجاعة = صادق 🏆"
  magicMix: [   // 5–6 practical steps — must be ACTIONS, not abstract ideas
    { icon:'💬', title:{ar,en}, body:{ar,en} }, ...
  ],

  certificate: {
    subtitle:  {ar, en},      // "تُمنَحُ هذه الشَّهادة لِمَن أَتَمَّ رِحلَة بيت ..."
    statement: {ar, en},      // 1–2 sentences citing 2–3 role models from the stories
  },
};
```

### Step 4 — Register the file

Add ONE line to `pages/social.html`, right after the existing house-data
`<script>` tags (the ones for truth.js / respect.js):

```html
<script src="data/<slug>.js"></script>
```

### Step 5 — Verify

After writing the file:
1. Call `done` on `pages/social.html` to make sure it parses cleanly.
2. Spot-check: eval `App.openHouse('<slug>')` and confirm the rooms render.
3. Call `fork_verifier_agent` for a thorough sweep.

---

## 📚 Content sources (use these for authentic material)

- **الدرر السنية** (https://dorar.net) — definitions, types, benefits, obstacles, means
- **الموسوعة القرآنية** — verses + kid-friendly tafsir
- **إسلام ويب** (https://islamweb.net) — hadiths with grading + stories
- **صحيح البخاري** / **صحيح مسلم** — primary references; cite hadith numbers
- **سير أعلام النبلاء** للذهبي — biographies of righteous figures
- **مدارج السالكين** لابن القيم — fiqh of the heart

Pick well-known authentic narratives. Prefer stories with drama, dialogue,
and a clear moral that an 8-year-old can grasp.

---

## ✅ Quality bar (match truth.js + respect.js)

- **تشكيل الحروف** — write Arabic with diacritics (الصِّدقُ, not الصدق). Kids read better.
- **Vivid stories** — set the scene, show emotion, use dialogue. Bold key phrases with `<b>...</b>`. Each page ~3–5 sentences.
- **Story choices test understanding**, not trivia. Each option's `exp` is kind and educational.
- **Quiz** = 3 short MCQs answerable by anyone who read the story.
- **English is real English** — translate idioms idiomatically, never transliterate.
- **Source citations** name the collection + hadith number (e.g. "صَحيح البُخاري — حَديث ٤٤١٨").
- **Cipher puzzles verified by hand** — symbols must actually decode to the answer using the key.
- **Magic-mix steps are ACTIONS the kid does today** ("قُل الحَقَّ ولو كان مُرّاً" ✓; "اعرف أن الصدق جميل" ✗).
- **Stickers have rainbow colors** — never all the same house color.
- **No emojis inside Quranic verse text** — keep `﴿ ... ﴾` clean.
- **No filler** — every item must earn its place.

---

## 📦 Downloading the project

When the user asks for the complete project / wants to download everything,
use `present_fs_item_for_download` with no path to bundle the whole project
as a zip. They can extract and open `pages/social.html` in any browser.

To download just the data files: `present_fs_item_for_download` with path
`pages/data`.

---

## 🚫 What NOT to do

- Don't change `pages/assets/*.js` or `pages/assets/*.css` — the engine is done.
- Don't ask the user clarifying questions for a routine "build the house of X" request.
- Don't skip rooms — every house needs all 5 rooms fully populated.
- Don't paraphrase verses — quote the Quran exactly with `﴿ ... ﴾`.
- Don't invent hadiths or assign weak narrations to Bukhari/Muslim.
- Don't make the file shorter than ~600 lines — that means content is missing.
