/* ═══ book2 · scenes for «واحة العبادة» — one picture recipe per station ═══
   No prophet, companion or righteous predecessor is ever drawn: their stories use places, objects and light. */
(function () {
  'use strict';
  var B = 'boy', G = 'girl', M = 'man', W = 'woman';
  function f(who, pose, x, y, o) { var r = { who: who, pose: pose, x: x, y: y || 520 }; for (var k in o || {}) r[k] = o[k]; return r; }
  var S = window.IBADA_SCENES = {
    /* ── الصلاة ── */
    'salah-1': { bg: 'courtyard', time: 'dawn', figs: [f(B, 'walk', 300, 520), f(G, 'walk', 470, 530, { s: .95 })] },
    'salah-2': { bg: 'interior', props: [{ t: 'halo', x: 400, y: 380, r: 150 }], figs: [f(G, 'qiyam', 400, 530, { s: 1.15 })] },
    'salah-3': { bg: 'garden', noTree: true, props: [{ t: 'house', x: 560, y: 380, s: 1 }, { t: 'river', x: 400, y: 420 }], figs: [f(B, 'stand', 240, 520, { dir: 'r' })] },
    'salah-4': { bg: 'vignette', color: '#D4A017', props: [{ t: 'scale', x: 400, y: 300, s: .9, heavy: true }] },
    'salah-5': { bg: 'vignette', color: '#1A9B7B', props: [{ t: 'tent', x: 400, y: 400, s: 1.05 }] },
    'salah-6': { bg: 'home', time: 'day', props: [{ t: 'mat', x: 420, y: 520, s: 1.1 }, { t: 'clock', x: 640, y: 290, s: 1 }] },
    'salah-7': { bg: 'courtyard', time: 'dawn', props: [{ t: 'fountain', x: 290, y: 450, s: 1 }], figs: [f(B, 'wudu', 410, 530, { s: 1.05 })] },
    'salah-8': { bg: 'vignette', color: '#2F6FD6', props: [{ t: 'jug', x: 380, y: 360, s: 1.4 }] },
    'salah-9': { bg: 'vignette', color: '#F5A623', props: [{ t: 'times', x: 400, y: 300, s: 1 }] },
    'salah-10': { bg: 'home', time: 'day', props: [{ t: 'mat', x: 380, y: 530, s: 1.3, c: '#1A6E8E' }, { t: 'compass', x: 640, y: 300, s: .9 }], figs: [f(G, 'qiyam', 380, 515, { s: 1.05 })] },
    'salah-11': { bg: 'courtyard', time: 'dawn', adhan: true, figs: [f(M, 'walk', 220, 530, { s: .95 }), f(B, 'walk', 330, 530)] },
    'salah-12': { bg: 'interior', figs: [f(M, 'qiyam', 300, 530), f(B, 'qiyam', 410, 530), f(M, 'qiyam', 520, 530, { skin: 1 }), f(B, 'qiyam', 630, 530, { skin: 2 }), f(M, 'qiyam', 740, 530, { skin: 1 })] },
    'salah-13': { bg: 'interior', figs: [f(B, 'takbir', 400, 535, { s: 1.2 })] },
    'salah-14': { bg: 'interior', props: [{ t: 'mat', x: 400, y: 540, s: 1.4 }], figs: [f(G, 'qiyam', 400, 528, { s: 1.15 })] },
    'salah-15': { bg: 'interior', figs: [f(M, 'ruku', 400, 535), f(B, 'ruku', 620, 535, { s: 1.05 })] },
    'salah-16': { bg: 'interior', props: [{ t: 'halo', x: 400, y: 470, r: 130 }, { t: 'mat', x: 420, y: 545, s: 1.6 }], figs: [f(B, 'sujud', 420, 535, { s: 1.2 })] },
    'salah-17': { bg: 'interior', props: [{ t: 'mat', x: 400, y: 545, s: 1.4 }], figs: [f(G, 'sit', 410, 535, { s: 1.2 })] },
    'salah-18': { bg: 'interior', figs: [f(B, 'takbir', 330, 535, { s: .85 }), f(B, 'qiyam', 450, 535, { s: .85 }), f(B, 'ruku', 590, 535, { s: .85 }), f(B, 'sujud', 730, 535, { s: .85 })] },
    'salah-19': { bg: 'interior', figs: [f(G, 'sujud', 410, 535, { s: 1.05 }), f(G, 'sit', 640, 535, { s: 1.05 })] },
    'salah-20': { bg: 'vignette', color: '#1A9B7B', props: [{ t: 'mat', x: 400, y: 380, s: 1.6 }, { t: 'miswak', x: 300, y: 250, s: .9, rot: -15 }, { t: 'attar', x: 500, y: 270, s: 1.1 }, { t: 'sparkles', at: [[260, 170, 12], [560, 180, 10], [400, 140, 14]] }] },
    'salah-21': { bg: 'interior', props: [{ t: 'halo', x: 400, y: 400, r: 170, c: '#FFF6D6' }], figs: [f(G, 'qiyam', 400, 530, { s: 1.15, skin: 1 })] },
    'salah-22': { bg: 'vignette', color: '#2E9E5B', props: [{ t: 'shield', x: 400, y: 290, s: 1.25 }] },
    'salah-23': { bg: 'interior', figs: [f(M, 'qiyam', 300, 530, { skin: 2 }), f(B, 'qiyam', 390, 530), f(M, 'qiyam', 480, 530), f(B, 'qiyam', 570, 530, { skin: 1 }), f(M, 'qiyam', 660, 530, { skin: 1 }), f(B, 'qiyam', 750, 530, { skin: 2 })] },
    'salah-24': { bg: 'home', time: 'day', props: [{ t: 'mat', x: 420, y: 535, s: 1.4 }], figs: [f(B, 'qiyam', 420, 520, { s: 1.1 })] },
    'salah-25': { bg: 'home', time: 'day', winX: 80, props: [{ t: 'mat', x: 470, y: 535, s: 1.4, c: '#2E9E5B' }], figs: [f(G, 'qiyam', 470, 520, { s: 1.1, skin: 2 })] },
    'salah-26': { bg: 'home', time: 'night', props: [{ t: 'mat', x: 430, y: 535, s: 1.4, c: '#3949AB' }, { t: 'lantern', x: 640, y: 520, s: .9 }], figs: [f(M, 'qiyam', 430, 520)] },
    'salah-27': { bg: 'home', time: 'night', props: [{ t: 'mat', x: 430, y: 535, s: 1.4, c: '#8E44AD' }], figs: [f(G, 'dua', 430, 520, { s: 1.1 })] },
    'salah-28': { bg: 'vignette', color: '#1A9B7B', props: [{ t: 'tracker', x: 400, y: 290, s: 1.2 }] },
    'salah-29': { bg: 'vignette', color: '#2E9E5B', props: [{ t: 'greenDome', x: 380, y: 400, s: 1 }] },
    'salah-30': { bg: 'vignette', color: '#123A6B', props: [{ t: 'mihrab', x: 400, y: 470, s: 1.15 }, { t: 'mat', x: 400, y: 480, s: 1.2 }] },
    'salah-31': { bg: 'vignette', color: '#7A4E0A', props: [{ t: 'mat', x: 450, y: 430, s: 1.5, c: '#1A6E8E' }, { t: 'lantern', x: 300, y: 430, s: 1.7 }] },
    'salah-32': { bg: 'valley', time: 'night', props: [{ t: 'tent', x: 260, y: 470, s: .7 }, { t: 'quran', x: 520, y: 470, s: 1.3 }, { t: 'halo', x: 520, y: 400, r: 90 }] },
    'salah-33': { bg: 'vignette', color: '#5D4E8C', props: [{ t: 'quran', x: 400, y: 380, s: 2 }, { t: 'sparkles', at: [[260, 160, 14], [560, 150, 12], [400, 110, 10]] }] },
    'salah-34': { bg: 'interior', time: 'night', props: [{ t: 'halo', x: 115, y: 260, r: 120 }, { t: 'mat', x: 330, y: 540, s: 1.6 }] },

    /* ── الصيام ── */
    'fast-1': { bg: 'home', time: 'sunset', figs: [f(B, 'stand', 330, 525, { dir: 'r' }), f(G, 'stand', 450, 530, { dir: 'r', s: .95 })] },
    'fast-2': { bg: 'vignette', color: '#8E44AD', props: [{ t: 'shield', x: 400, y: 290, s: 1.25, c: '#8E44AD' }] },
    'fast-3': { bg: 'vignette', color: '#1A9B7B', props: [{ t: 'door', x: 400, y: 520, s: 1.05, label: 'الرَّيّان' }] },
    'fast-4': { bg: 'vignette', color: '#D4A017', props: [{ t: 'gift', x: 400, y: 420, s: 1.4 }] },
    'fast-5': { bg: 'home', time: 'night', props: [{ t: 'table', x: 400, y: 510, s: 1 }, { t: 'lantern', x: 700, y: 520, s: .8 }], figs: [f(B, 'sit', 230, 540, { dir: 'r' }), f(W, 'sit', 580, 540, { s: .9 })] },
    'fast-6': { bg: 'vignette', color: '#C0392B', props: [{ t: 'heart', x: 400, y: 290, s: 1.3 }] },
    'fast-7': { bg: 'home', time: 'sunset', props: [{ t: 'table', x: 400, y: 510, s: 1 }], figs: [f(B, 'dua', 220, 540, { dir: 'r' }), f(G, 'sit', 590, 540, { s: .95 })] },
    'fast-8': { bg: 'home', time: 'night', props: [{ t: 'quran', x: 340, y: 520, s: 1.2 }, { t: 'lantern', x: 160, y: 520, s: .9 }], figs: [f(G, 'sitread', 470, 530, { s: 1.1 })] },
    'fast-9': { bg: 'home', time: 'sunset', props: [{ t: 'table', x: 430, y: 510, s: 1 }], figs: [f(M, 'dua', 220, 540, { dir: 'r' })] },
    'fast-10': { bg: 'vignette', color: '#8E44AD', props: [{ t: 'calendar', x: 400, y: 290, s: 1.1 }] },

    /* ── الزكاة والصدقة ── */
    'zakah-1': { bg: 'street', props: [{ t: 'bag', x: 340, y: 405, s: .9 }], figs: [f(B, 'give', 420, 530), f(M, 'stand', 250, 530, { dir: 'r', c: '#C9B38A', skin: 1 })] },
    'zakah-2': { bg: 'vignette', color: '#C9A23A', props: [{ t: 'wheat', x: 400, y: 450, s: 1.25 }] },
    'zakah-3': { bg: 'vignette', color: '#1A9B7B', props: [{ t: 'box', x: 400, y: 420, s: 1.6 }, { t: 'coins', x: 560, y: 420, s: 1.2 }] },
    'zakah-4': { bg: 'street', props: [{ t: 'basket', x: 320, y: 420, s: .9 }], figs: [f(G, 'give', 410, 530), f(W, 'stand', 240, 530, { dir: 'r', skin: 2, c: '#6B4E3D' })] },
    'zakah-5': { bg: 'garden', props: [{ t: 'cup', x: 370, y: 415, s: 1 }], figs: [f(B, 'give', 440, 530, { skin: 1 }), f(M, 'stand', 280, 530, { dir: 'r' })] },
    'zakah-6': { bg: 'vignette', color: '#F5A623', props: [{ t: 'cloudShade', x: 400, y: 230, s: 1.2 }], figs: [f(B, 'dua', 400, 470, { s: .9 })] },
    'zakah-7': { bg: 'vignette', color: '#8C7A4A', props: [{ t: 'wilted', x: 400, y: 430, s: 1.1 }] },
    'zakah-8': { bg: 'street', props: [{ t: 'basket', x: 380, y: 535, s: 1 }], figs: [f(W, 'walk', 280, 530), f(G, 'hold', 470, 530, { s: .95 })] },
    'zakah-9': { bg: 'garden', noTree: true, props: [{ t: 'well', x: 560, y: 470, s: 1 }], front: [], figs: [f(B, 'stand', 380, 520, { dir: 'r' })], trees: true },
    'zakah-10': { bg: 'vignette', color: '#2E9E5B', props: [{ t: 'bag', x: 400, y: 330, s: 1.2 }], figs: [f(B, 'give', 480, 470, { s: 1.05 }), f(G, 'dua', 300, 470, { dir: 'r', s: 1 })] },

    /* ── الحج ── */
    'hajj-1': { bg: 'makkah', time: 'day' },
    'hajj-2': { bg: 'makkah', time: 'night' },
    'hajj-3': { bg: 'valley', props: [{ t: 'foundation', x: 400, y: 480, s: 1 }] },
    'hajj-4': { bg: 'arafah', figs: [f('pilgrim', 'stand', 320, 530), f('pilgrimW', 'stand', 480, 530, { skin: 1 })] },
    'hajj-5': { bg: 'arafah', figs: [f('pilgrim', 'walk', 280, 530, { skin: 2 }), f('pilgrim', 'walk', 420, 530), f('pilgrimW', 'walk', 560, 530, { skin: 1 })] },
    'hajj-6': { bg: 'makkah', time: 'dawn' },
    'hajj-7': { bg: 'valley', props: [{ t: 'spring', x: 400, y: 470, s: 1 }] },
    'hajj-8': { bg: 'arafah', figs: [f('pilgrim', 'dua', 220, 530), f('pilgrim', 'dua', 340, 530, { skin: 2 }), f('pilgrimW', 'dua', 600, 530, { skin: 1 })] },
    'hajj-9': { bg: 'vignette', color: '#C0392B', props: [{ t: 'sheep', x: 470, y: 420, s: 1.4 }, { t: 'pebbles', x: 280, y: 410, s: 1.3 }, { t: 'label', x: 400, y: 150, text: 'عيدٌ مُبارَك', size: 44 }] },
    'hajj-10': { bg: 'vignette', color: '#2E9E5B', props: [{ t: 'door', x: 400, y: 520, s: 1.05, label: 'الجَنّة', c: '#2E9E5B' }] },

    /* ── الدعاء ── */
    'dua-1': { bg: 'home', time: 'day', props: [{ t: 'halo', x: 420, y: 330, r: 110 }], figs: [f(G, 'dua', 420, 525, { s: 1.15 })] },
    'dua-2': { bg: 'courtyard', time: 'night', noPalm: false, props: [{ t: 'halo', x: 300, y: 330, r: 110 }], figs: [f(B, 'dua', 300, 530, { s: 1.1 })] },
    'dua-3': { bg: 'home', time: 'day', props: [{ t: 'mat', x: 420, y: 535, s: 1.4 }], figs: [f(B, 'dua', 420, 520, { s: 1.1, skin: 1 })] },
    'dua-4': { bg: 'home', time: 'night', props: [{ t: 'clock', x: 650, y: 290 }, { t: 'mat', x: 400, y: 535, s: 1.4, c: '#3949AB' }], figs: [f(G, 'dua', 400, 520, { s: 1.1, skin: 2 })] },
    'dua-5': { bg: 'garden', props: [{ t: 'sparkles', at: [[300, 200, 12], [480, 160, 14], [560, 240, 10]] }], figs: [f(G, 'dua', 400, 525, { s: 1.15 })] },
    'dua-6': { bg: 'home', time: 'day', figs: [f(M, 'stand', 220, 525, { dir: 'r' }), f(W, 'stand', 330, 525, { dir: 'r', s: .95 }), f(B, 'dua', 520, 525, { s: 1.05 })] },
    'dua-7': { bg: 'garden', time: 'day', props: [{ t: 'rain', x: 400, y: 120, s: 1 }], figs: [f(B, 'dua', 420, 530, { s: 1.05, skin: 2 })] },
    'dua-8': { bg: 'home', time: 'day', props: [{ t: 'quran', x: 330, y: 525, s: 1.2 }], figs: [f(B, 'sitread', 460, 535, { s: 1.1 })] },
    'dua-9': { bg: 'interior', props: [{ t: 'halo', x: 400, y: 470, r: 130 }, { t: 'mat', x: 420, y: 545, s: 1.6 }], figs: [f(G, 'sujud', 420, 535, { s: 1.2 })] },
    'dua-10': { bg: 'garden', time: 'day', props: [{ t: 'rainbow', x: 400, y: 380, s: 1.1 }], figs: [f(W, 'dua', 330, 530, { skin: 1 }), f(G, 'dua', 480, 535, { skin: 1 })] },

    /* ── الأذكار ── */
    'dhikr-1': { bg: 'vignette', color: '#2980B9', props: [{ t: 'tasbih', x: 400, y: 260, s: 2.2, c: '#2980B9' }] },
    'dhikr-2': { bg: 'garden', props: [{ t: 'halo', x: 400, y: 400, r: 120, c: '#E7FFF2' }], figs: [f(G, 'sit', 400, 535, { s: 1.2 })] },
    'dhikr-3': { bg: 'vignette', color: '#57B368', props: [{ t: 'wilted', x: 400, y: 430, s: 1.1 }] },
    'dhikr-4': { bg: 'vignette', color: '#D4A017', props: [{ t: 'scale', x: 400, y: 300, s: .9, heavy: true }, { t: 'label', x: 400, y: 140, text: 'سُبحانَ اللهِ وبِحَمدِه · سُبحانَ اللهِ العَظيم', size: 28 }] },
    'dhikr-5': { bg: 'garden', noTree: true, palms: true, figs: [f(B, 'walk', 420, 530)] },
    'dhikr-6': { bg: 'garden', props: [{ t: 'sparkles', at: [[300, 200, 12], [500, 170, 12]] }], figs: [f(W, 'dua', 360, 525), f(G, 'dua', 480, 530, { s: .95, skin: 1 })] },
    'dhikr-7': { bg: 'vignette', color: '#1A9B7B', props: [{ t: 'key', x: 430, y: 290, s: 1.3 }] },
    'dhikr-8': { bg: 'courtyard', time: 'day', adhan: true, figs: [f(B, 'takbir', 320, 530, { s: 1.05 })] },
    'dhikr-9': { bg: 'vignette', color: '#2F6FD6', props: [{ t: 'sea', x: 400, y: 330, s: 1 }, { t: 'label', x: 400, y: 170, text: 'سُبحانَ اللهِ وبِحَمدِه', size: 40 }] },
    'dhikr-10': { bg: 'vignette', color: '#D4A017', props: [{ t: 'chest', x: 400, y: 430, s: 1.3 }] },
    'dhikr-11': { bg: 'home', time: 'night', props: [{ t: 'mat', x: 420, y: 535, s: 1.4, c: '#3949AB' }], figs: [f(B, 'dua', 420, 520, { s: 1.1 })] },
    'dhikr-12': { bg: 'vignette', color: '#2E9E5B', props: [{ t: 'greenDome', x: 380, y: 400, s: 1 }, { t: 'sparkles', at: [[200, 120, 12], [620, 130, 12]] }] },
    'dhikr-13': { bg: 'garden', time: 'dawn', props: [{ t: 'tasbih', x: 300, y: 470, s: .6 }], figs: [f(B, 'sit', 420, 535, { s: 1.15 })] },
    'dhikr-14': { bg: 'courtyard', time: 'sunset', figs: [f(G, 'sit', 300, 535, { s: 1.1 })] },
    'dhikr-15': { bg: 'home', time: 'night', props: [{ t: 'bed', x: 430, y: 530, s: 1 }, { t: 'shield', x: 640, y: 300, s: .45 }] },
    'dhikr-16': { bg: 'home', time: 'night', props: [{ t: 'bed', x: 430, y: 530, s: 1, c: '#8E44AD' }, { t: 'lantern', x: 700, y: 520, s: .7 }] },
    'dhikr-17': { bg: 'home', time: 'day', props: [{ t: 'table', x: 430, y: 510, s: 1 }], figs: [f(B, 'sit', 220, 540, { dir: 'r' }), f(G, 'sit', 630, 540, { s: .95, skin: 1 })] },
    'dhikr-18': { bg: 'interior', props: [{ t: 'tasbih', x: 300, y: 470, s: .55 }], figs: [f(B, 'sit', 420, 535, { s: 1.15 })] },
    'dhikr-19': { bg: 'street', figs: [f(B, 'walk', 380, 530, { s: 1.05 })], props: [{ t: 'sparkles', at: [[300, 300, 10], [450, 280, 12]] }] },
    'dhikr-20': { bg: 'vignette', color: '#F5A623', props: [{ t: 'lantern', x: 400, y: 420, s: 2.2 }] }
  };
  /* part openers (big picture at the start of each part) */
  window.IBADA_OPENERS = {
    salah: { bg: 'courtyard', time: 'dawn', adhan: true, figs: [f(M, 'walk', 210, 530, { s: .9 }), f(B, 'walk', 300, 530), f(G, 'walk', 600, 535, { dir: 'r', s: .95 })] },
    fasting: { bg: 'home', time: 'sunset', props: [{ t: 'table', x: 400, y: 510, s: 1 }, { t: 'lantern', x: 700, y: 520, s: .8 }], figs: [f(M, 'sit', 200, 540, { dir: 'r' }), f(G, 'sit', 600, 540, { s: .95 })] },
    zakah: { bg: 'street', props: [{ t: 'basket', x: 340, y: 420, s: .9 }], figs: [f(G, 'give', 420, 530), f(W, 'stand', 260, 530, { dir: 'r', skin: 2, c: '#6B4E3D' })] },
    hajj: { bg: 'makkah', time: 'sunset' },
    dua: { bg: 'courtyard', time: 'night', figs: [f(W, 'dua', 280, 530), f(G, 'dua', 400, 535, { s: 1.05 })] },
    adhkar: { bg: 'garden', time: 'dawn', props: [{ t: 'tasbih', x: 560, y: 470, s: .6 }], figs: [f(M, 'sit', 330, 535, { skin: 1 }), f(B, 'sit', 470, 535, { s: 1.1, skin: 1 })] }
  };
  window.IBADA_COVER = { bg: 'courtyard', time: 'dawn', adhan: true, props: [{ t: 'fountain', x: 230, y: 470, s: .8 }], figs: [f(B, 'walk', 380, 535, { s: 1.05 }), f(G, 'walk', 520, 540, { s: 1 }), f(M, 'walk', 640, 540, { s: .9, skin: 1 })] };
})();
