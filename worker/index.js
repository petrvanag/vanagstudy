// Приём заявок с сайта VanagStudy: принимает JSON из формы и пересылает его ботом в Telegram.
// Секреты (BOT_TOKEN, CHAT_ID) задаются через `npx wrangler secret put`, в код не попадают.

const ALLOWED_ORIGINS = [
  "https://vanagstudy.ru",
  "https://www.vanagstudy.ru",
  "https://petrvanag.github.io",
];

const LIMITS = { name: 80, contact: 80, subject: 80, format: 60, page: 60 };

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function json(body, status, headers) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...headers, "Content-Type": "application/json; charset=utf-8" },
  });
}

// Убираем управляющие символы и обрезаем до разумной длины.
function clean(value, max) {
  return String(value ?? "")
    .replace(/[\u0000-\u001f\u007f]+/g, " ")
    .trim()
    .slice(0, max);
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const cors = corsHeaders(origin);

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (request.method !== "POST") return json({ ok: false, error: "method" }, 405, cors);
    if (!ALLOWED_ORIGINS.includes(origin)) return json({ ok: false, error: "origin" }, 403, cors);

    let data;
    try {
      data = await request.json();
    } catch {
      return json({ ok: false, error: "bad_json" }, 400, cors);
    }

    // Ловушка для ботов: настоящий посетитель это поле не видит и не заполняет.
    if (clean(data.website, 200)) return json({ ok: true }, 200, cors);

    const lead = Object.fromEntries(Object.entries(LIMITS).map(([key, max]) => [key, clean(data[key], max)]));
    if (!lead.name || lead.contact.length < 3) return json({ ok: false, error: "invalid" }, 422, cors);

    const text = [
      "Новая заявка на диагностику",
      `Имя: ${lead.name}`,
      `Контакт: ${lead.contact}`,
      `Цель / предмет: ${lead.subject || "не указано"}`,
      `Формат: ${lead.format || "не указан"}`,
      `Страница: ${lead.page || "/"}`,
    ].join("\n");

    // Обычный текст без parse_mode: разметка из полей формы не интерпретируется.
    const tg = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: env.CHAT_ID, text, disable_web_page_preview: true }),
    });

    // Для диагностики в `wrangler tail`: какой бот отправил и в какой чат (без токена и без текста заявки).
    const result = await tg.json().catch(() => ({}));
    console.log(JSON.stringify({
      ok: result.ok === true,
      bot: result.result?.from?.username,
      chat: result.result?.chat?.username || result.result?.chat?.title || result.result?.chat?.id,
      error: result.description,
    }));

    if (!tg.ok) return json({ ok: false, error: "telegram" }, 502, cors);
    return json({ ok: true }, 200, cors);
  },
};
