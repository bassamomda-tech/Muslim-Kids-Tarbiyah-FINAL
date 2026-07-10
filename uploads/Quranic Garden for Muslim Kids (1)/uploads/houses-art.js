/* ═══════════════════════════════════════════════════════════════
   HOUSE ART — Reusable SVG illustrations for each "house type".
   Each fn returns SVG markup parameterized by a base color.
   ─────────────────────────────────────────────────────────────── */

window.HouseArt = (function () {

  // Helper: darken hex
  function darken(hex, pct) {
    pct = pct == null ? 0.25 : pct;
    const c = parseInt(hex.slice(1), 16);
    let r = (c >> 16) & 255, g = (c >> 8) & 255, b = c & 255;
    r = Math.max(0, Math.round(r * (1 - pct)));
    g = Math.max(0, Math.round(g * (1 - pct)));
    b = Math.max(0, Math.round(b * (1 - pct)));
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  // 1. Classic peaked-roof cottage  (default — used by most akhlaq houses)
  function cottage(color, accent) {
    const dk = darken(color, 0.3);
    accent = accent || '#FFE082';
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- chimney -->
      <rect x="68" y="20" width="9" height="18" fill="${dk}" rx="1.5"/>
      <!-- roof -->
      <polygon points="50,18 14,46 86,46" fill="${dk}"/>
      <polygon points="50,22 18,46 82,46" fill="${color}"/>
      <!-- body -->
      <rect x="22" y="46" width="56" height="42" fill="${color}" rx="2"/>
      <rect x="22" y="46" width="56" height="42" fill="${dk}" opacity=".12" rx="2"/>
      <!-- door -->
      <rect x="44" y="64" width="14" height="24" rx="6" fill="${dk}"/>
      <circle cx="55" cy="78" r="1.5" fill="${accent}"/>
      <!-- windows -->
      <rect x="28" y="52" width="12" height="11" rx="2" fill="${accent}"/>
      <rect x="60" y="52" width="12" height="11" rx="2" fill="${accent}"/>
      <line x1="34" y1="52" x2="34" y2="63" stroke="${dk}" stroke-width="1"/>
      <line x1="28" y1="57.5" x2="40" y2="57.5" stroke="${dk}" stroke-width="1"/>
      <line x1="66" y1="52" x2="66" y2="63" stroke="${dk}" stroke-width="1"/>
      <line x1="60" y1="57.5" x2="72" y2="57.5" stroke="${dk}" stroke-width="1"/>
      <!-- heart over door -->
      <path d="M51,52 Q49,48 46,50 Q44,53 51,57 Q58,53 56,50 Q53,48 51,52z" fill="${accent}" opacity=".9"/>
      <!-- grass -->
      <rect x="0" y="88" width="100" height="12" fill="#7CC576"/>
      <rect x="0" y="88" width="100" height="3" fill="#5BA84F"/>
    </svg>`;
  }

  // 2. Fortress with battlements (Truth = حصن)
  function fortress(color, accent) {
    const dk = darken(color, 0.35);
    accent = accent || '#FFE082';
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- left tower -->
      <rect x="12" y="32" width="20" height="56" fill="${color}" rx="1"/>
      <polyline points="12,32 12,28 16,28 16,32 20,32 20,28 24,28 24,32 28,32 28,28 32,28 32,32" fill="${dk}"/>
      <rect x="12" y="30" width="20" height="4" fill="${dk}"/>
      <!-- right tower -->
      <rect x="68" y="32" width="20" height="56" fill="${color}" rx="1"/>
      <polyline points="68,32 68,28 72,28 72,32 76,32 76,28 80,28 80,32 84,32 84,28 88,28 88,32" fill="${dk}"/>
      <rect x="68" y="30" width="20" height="4" fill="${dk}"/>
      <!-- center wall -->
      <rect x="28" y="42" width="44" height="46" fill="${color}"/>
      <polyline points="28,42 28,38 32,38 32,42 36,42 36,38 40,38 40,42 60,42 60,38 64,38 64,42 68,42 68,38 72,38 72,42" fill="${dk}"/>
      <rect x="28" y="40" width="44" height="4" fill="${dk}"/>
      <!-- flag -->
      <line x1="50" y1="40" x2="50" y2="22" stroke="${dk}" stroke-width="1.5"/>
      <polygon points="50,22 64,26 50,32" fill="${accent}"/>
      <!-- arch door -->
      <path d="M40,88 L40,64 Q40,54 50,54 Q60,54 60,64 L60,88 z" fill="${dk}"/>
      <circle cx="55" cy="74" r="1.4" fill="${accent}"/>
      <!-- tower windows -->
      <rect x="18" y="46" width="8" height="10" rx="4" fill="${accent}"/>
      <rect x="74" y="46" width="8" height="10" rx="4" fill="${accent}"/>
      <rect x="18" y="62" width="8" height="8" rx="2" fill="${dk}"/>
      <rect x="74" y="62" width="8" height="8" rx="2" fill="${dk}"/>
      <!-- ground -->
      <rect x="0" y="88" width="100" height="12" fill="#A6926F"/>
      <rect x="0" y="88" width="100" height="3" fill="#8B7855"/>
    </svg>`;
  }

  // 3. Garden-front house with flowers (Respect = توقير)
  function garden(color, accent) {
    const dk = darken(color, 0.3);
    accent = accent || '#FFE082';
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- roof -->
      <path d="M18,46 Q50,16 82,46 Z" fill="${dk}"/>
      <path d="M22,46 Q50,20 78,46 Z" fill="${color}"/>
      <!-- body -->
      <rect x="22" y="46" width="56" height="38" fill="${color}" rx="2"/>
      <rect x="22" y="46" width="56" height="38" fill="${dk}" opacity=".1" rx="2"/>
      <!-- archway door -->
      <path d="M40,84 L40,66 Q40,58 50,58 Q60,58 60,66 L60,84 z" fill="${dk}"/>
      <path d="M40,68 Q50,60 60,68" fill="none" stroke="${accent}" stroke-width="1.5"/>
      <!-- round window -->
      <circle cx="50" cy="50" r="5" fill="${accent}"/>
      <circle cx="50" cy="50" r="5" fill="none" stroke="${dk}" stroke-width="1"/>
      <line x1="45" y1="50" x2="55" y2="50" stroke="${dk}" stroke-width=".8"/>
      <line x1="50" y1="45" x2="50" y2="55" stroke="${dk}" stroke-width=".8"/>
      <!-- side windows -->
      <rect x="26" y="56" width="9" height="10" rx="1.5" fill="${accent}"/>
      <rect x="65" y="56" width="9" height="10" rx="1.5" fill="${accent}"/>
      <!-- garden -->
      <rect x="0" y="84" width="100" height="16" fill="#7CC576"/>
      <rect x="0" y="84" width="100" height="3" fill="#5BA84F"/>
      <!-- flowers -->
      <circle cx="14" cy="86" r="3" fill="#EC407A"/>
      <circle cx="14" cy="83" r="2" fill="#F8BBD0"/>
      <line x1="14" y1="86" x2="14" y2="98" stroke="#2E7D32" stroke-width="1"/>
      <circle cx="86" cy="86" r="3" fill="#FFD54F"/>
      <circle cx="86" cy="83" r="2" fill="#FFF59D"/>
      <line x1="86" y1="86" x2="86" y2="98" stroke="#2E7D32" stroke-width="1"/>
      <circle cx="30" cy="88" r="2" fill="#CE93D8"/>
      <line x1="30" y1="88" x2="30" y2="96" stroke="#2E7D32" stroke-width=".8"/>
      <circle cx="70" cy="88" r="2" fill="#9CCC65"/>
      <line x1="70" y1="88" x2="70" y2="96" stroke="#2E7D32" stroke-width=".8"/>
    </svg>`;
  }

  // 4. Mosque-style (Adab houses about prayer / mosque)
  function mosque(color, accent) {
    const dk = darken(color, 0.3);
    accent = accent || '#FFE082';
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- minarets -->
      <rect x="12" y="34" width="8" height="50" fill="${color}" rx="1"/>
      <path d="M10,34 L16,26 L22,34 z" fill="${dk}"/>
      <circle cx="16" cy="24" r="2" fill="${accent}"/>
      <rect x="80" y="34" width="8" height="50" fill="${color}" rx="1"/>
      <path d="M78,34 L84,26 L90,34 z" fill="${dk}"/>
      <circle cx="84" cy="24" r="2" fill="${accent}"/>
      <!-- dome -->
      <path d="M30,52 Q50,22 70,52 z" fill="${dk}"/>
      <path d="M32,52 Q50,26 68,52 z" fill="${color}"/>
      <rect x="48" y="20" width="4" height="6" fill="${dk}"/>
      <path d="M50,16 Q53,19 50,22 Q47,19 50,16 z" fill="${accent}"/>
      <!-- body -->
      <rect x="22" y="52" width="56" height="32" fill="${color}" rx="2"/>
      <!-- arched door -->
      <path d="M44,84 L44,68 Q44,62 50,62 Q56,62 56,68 L56,84 z" fill="${dk}"/>
      <!-- arched windows -->
      <path d="M30,72 L30,64 Q30,60 34,60 Q38,60 38,64 L38,72 z" fill="${accent}"/>
      <path d="M62,72 L62,64 Q62,60 66,60 Q70,60 70,64 L70,72 z" fill="${accent}"/>
      <!-- ground -->
      <rect x="0" y="84" width="100" height="16" fill="#A6926F"/>
      <rect x="0" y="84" width="100" height="3" fill="#8B7855"/>
    </svg>`;
  }

  // 5. Round / hut / love-pavilion (Heart-style)
  function pavilion(color, accent) {
    const dk = darken(color, 0.3);
    accent = accent || '#FFE082';
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- columns -->
      <rect x="18" y="44" width="6" height="40" fill="${color}"/>
      <rect x="76" y="44" width="6" height="40" fill="${color}"/>
      <!-- roof dome -->
      <path d="M14,44 Q50,8 86,44 z" fill="${dk}"/>
      <path d="M18,44 Q50,14 82,44 z" fill="${color}"/>
      <rect x="48" y="14" width="4" height="6" fill="${dk}"/>
      <path d="M50,10 Q54,14 50,18 Q46,14 50,10 z" fill="${accent}"/>
      <!-- platform -->
      <rect x="14" y="76" width="72" height="10" fill="${dk}"/>
      <rect x="14" y="76" width="72" height="3" fill="${color}"/>
      <!-- center heart -->
      <path d="M50,68 Q44,58 38,62 Q34,68 50,78 Q66,68 62,62 Q56,58 50,68 z" fill="${accent}"/>
      <!-- ground -->
      <rect x="0" y="86" width="100" height="14" fill="#7CC576"/>
      <rect x="0" y="86" width="100" height="3" fill="#5BA84F"/>
    </svg>`;
  }

  // 6. Library / school (Knowledge house)
  function library(color, accent) {
    const dk = darken(color, 0.3);
    accent = accent || '#FFE082';
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- triangular pediment -->
      <polygon points="50,18 14,42 86,42" fill="${dk}"/>
      <polygon points="50,22 18,42 82,42" fill="${color}"/>
      <!-- columns -->
      <rect x="20" y="42" width="6" height="42" fill="#fff"/>
      <rect x="36" y="42" width="6" height="42" fill="#fff"/>
      <rect x="58" y="42" width="6" height="42" fill="#fff"/>
      <rect x="74" y="42" width="6" height="42" fill="#fff"/>
      <rect x="20" y="80" width="60" height="4" fill="${color}"/>
      <rect x="16" y="42" width="68" height="3" fill="${dk}"/>
      <!-- center entry -->
      <rect x="44" y="58" width="12" height="26" fill="${dk}"/>
      <!-- book over pediment -->
      <rect x="44" y="14" width="12" height="9" fill="${accent}"/>
      <line x1="50" y1="14" x2="50" y2="23" stroke="${dk}" stroke-width="1"/>
      <!-- steps -->
      <rect x="14" y="84" width="72" height="3" fill="${dk}"/>
      <rect x="10" y="87" width="80" height="3" fill="${color}"/>
      <rect x="0" y="90" width="100" height="10" fill="#A6926F"/>
    </svg>`;
  }

  // 7. Caravan tent (for travel / hospitality)
  function tent(color, accent) {
    const dk = darken(color, 0.3);
    accent = accent || '#FFE082';
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- left tent -->
      <polygon points="12,84 32,38 52,84" fill="${color}"/>
      <polygon points="12,84 32,38 52,84" fill="${dk}" opacity=".15"/>
      <line x1="32" y1="38" x2="32" y2="84" stroke="${dk}" stroke-width="1.5"/>
      <path d="M32,84 L26,68 L32,72 L38,68 z" fill="${accent}"/>
      <!-- right tent -->
      <polygon points="48,84 70,28 92,84" fill="${color}"/>
      <polygon points="48,84 70,28 92,84" fill="${dk}" opacity=".15"/>
      <line x1="70" y1="28" x2="70" y2="84" stroke="${dk}" stroke-width="1.5"/>
      <path d="M70,84 L62,62 L70,68 L78,62 z" fill="${accent}"/>
      <!-- crescent on top -->
      <path d="M70,24 Q73,26 70,28 Q68,26 70,24 z" fill="${accent}"/>
      <!-- ground -->
      <rect x="0" y="84" width="100" height="16" fill="#E8C97A"/>
      <rect x="0" y="84" width="100" height="3" fill="#C5A55C"/>
    </svg>`;
  }

  /* Public API: pick variant by name */
  const ARTS = { cottage, fortress, garden, mosque, pavilion, library, tent };

  return {
    render(name, color, accent) {
      const fn = ARTS[name] || cottage;
      return fn(color, accent);
    },
    darken
  };
})();
