# 📚 Books — all published

Every book now lives under **`Published/`**, grouped by **corner name** (activity-only
books sit in **`Activities/`**). The former **Ready to Publish** and **The Rest** tiers
have both been promoted — every book is finished and sold in the support store.

```
Books/
├── Published/                  ← everything live in the store (11 corner bundles, £5 each)
│   ├── Activities/             ← all activity / coloring / maze books (Arabic + English)
│   ├── Faith Minaret/          ← Tawheed, Malaika, Kutub, Aman, Akhira, Qadar, Lab,
│   │                              Maarifa, Thabat, Wonders of Creation
│   ├── Worship Oasis/          ← Salah, Fasting, Zakah, Hajj, Du'a, Adhkar
│   ├── Quran Garden/           ← Quran Stories, Short Surahs, Forty Hadith
│   ├── Little District/        ← Story Treasury, Manners, Etiquette
│   ├── Pure Heart/             ← Beautiful Names, Sound Heart
│   ├── Heroes Fortress/        ← Seerah, Prophets, Companions, Ashara, Successors,
│   │                              Leaders, Battles
│   ├── Innovators Academy/     ← Future Maker, Language, Lighthouse
│   ├── Al-Quds and Ummah/      ← Aqsa, Taghyir, Wahda
│   ├── Parent Plans/           ← Parent Roadmap · Quran Memorization Plan
│   └── Role Models/            ← Heroes of Islam Posters
│
├── Parent Library/             ← online reading library (unchanged, out of scope)
└── book-preview.html           ← the store's preview/paywall viewer (unchanged)
```

### The 11 store bundles (one per corner · £5 each)
Each corner = one bundle; buying it unlocks **all** that corner's books at once.

### Artwork — `corners/shared/book-art.js`
The story / activity / colouring books were designed to be filled with AI-generated
art (the `… - Art Prompts.html` companions). Instead of that external step, every
empty `<image-slot>` is now filled by **`book-art.js`** — an original
Islamic-geometric SVG art engine that draws:
- **Covers** → girih-star medallions
- **Story pages** → mihrab-arch scenes
- **Activity pages** → circular mazes
- **Colouring pages** → line-art mandalas to colour in

Art is themed to each station's accent colour and embedded as a `src` data-URL, so the
books are fully self-contained and print-ready. A user can still **drop a real image**
onto any slot later — it overrides the generated art. The `… - Art Prompts.html` files
are kept for anyone who later wants to commission bespoke illustrations.

### How paths work
- Books keep their shared **engine/data** in `/corners/…` (single source of truth);
  each book references it via `../../../corners/…` and `book-art.js` the same way.
- Each book's **own** assets (`stories-assets/`, `ashara-*.js`, the activity
  `*-cfg.js`/shell files) sit **alongside** the book so each folder is runnable.
- The support store (`corners/shared/store.html`) points at the `Published/…` paths.
