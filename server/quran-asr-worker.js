/* ═══════════════════════════════════════════════════════════════════════════
   quran-asr-worker.js — Cloudflare Worker لتسميع القرآن عبر Groq Whisper
   ───────────────────────────────────────────────────────────────────────────
   • يستقبل مقطعًا صوتيًّا (POST، الصوت في جسم الطلب مباشرةً).
   • يقرأ الآيةَ المتوقَّعة من ?prompt= ويمرّرها لِـ Whisper كتوجيه (يرفع الدقة كثيرًا).
   • يستدعي Groq Whisper (رخيص جدًّا: ٠٫٠٤$–٠٫١١$ للساعة) ويُعيد { text }.
   • المفتاح السرّي GROQ_API_KEY يُحفَظ في إعدادات الـ Worker، ولا يظهر في الموقع أبدًا.

   المتغيّرات (Settings → Variables):
     GROQ_API_KEY     (سرّي، إلزامي)  — مفتاح Groq
     MODEL            (اختياري)       — whisper-large-v3 (الأدق، الافتراضي) أو
                                        whisper-large-v3-turbo (أرخص وأسرع)
     ALLOWED_ORIGINS  (اختياري)       — نطاقاتك مفصولةً بفواصل لمنع إساءة الاستخدام،
                                        مثال: https://yoursite.com,https://www.yoursite.com
   ═══════════════════════════════════════════════════════════════════════════ */

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '*';
    const cors = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
      'Vary': 'Origin'
    };

    // ── فحص مبدئي (preflight) ──
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (request.method !== 'POST') return json({ error: 'post_audio_only' }, 405, cors);
    if (!env.GROQ_API_KEY) return json({ error: 'server_not_configured' }, 500, cors);

    // ── حماية اختيارية بقائمة النطاقات ──
    if (env.ALLOWED_ORIGINS) {
      const allow = env.ALLOWED_ORIGINS.split(',').map(s => s.trim()).filter(Boolean);
      if (origin && origin !== '*' && allow.length && allow.indexOf(origin) < 0) {
        return json({ error: 'forbidden_origin' }, 403, cors);
      }
    }

    const url = new URL(request.url);
    const prompt = (url.searchParams.get('prompt') || '').slice(0, 800);
    const model = env.MODEL || 'whisper-large-v3';

    // ── قراءة الصوت ──
    const buf = await request.arrayBuffer();
    if (!buf || buf.byteLength < 1200) return json({ text: '' }, 200, cors); // صمت/مقطع فارغ

    const ct = request.headers.get('Content-Type') || 'audio/webm';
    const ext = ct.indexOf('mp4') >= 0 ? 'mp4' : ct.indexOf('ogg') >= 0 ? 'ogg' : 'webm';

    // ── بناء الطلب لِـ Groq ──
    const form = new FormData();
    form.append('file', new File([buf], 'audio.' + ext, { type: ct }));
    form.append('model', model);
    form.append('language', 'ar');       // العربية
    form.append('temperature', '0');     // يقلّل الهلوسة على الضوضاء
    form.append('response_format', 'json');
    if (prompt) form.append('prompt', prompt); // ← الآية المتوقَّعة: أهمّ سطر للدقة

    let r;
    try {
      r = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + env.GROQ_API_KEY },
        body: form
      });
    } catch (e) {
      return json({ error: 'upstream_fetch_failed' }, 502, cors);
    }

    if (!r.ok) {
      const t = await r.text().catch(() => '');
      return json({ error: 'groq_error', status: r.status, detail: t.slice(0, 300) }, 502, cors);
    }

    const data = await r.json().catch(() => ({}));
    let text = (data && data.text) ? String(data.text).trim() : '';

    // تنظيف هلوسات Whisper الشائعة على شبه الصمت
    if (/^(?:[.\s\u060C]|ترجمة|اشترك|شكرا|المزيد)+$/i.test(text)) text = '';

    return json({ text }, 200, cors);
  }
};

function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: Object.assign({ 'Content-Type': 'application/json; charset=utf-8' }, cors || {})
  });
}
