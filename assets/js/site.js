// VanagStudy: квадрат из уголков, пометки ручкой, фильтр команды, заявка в Telegram.

// Адрес Cloudflare Worker, который пересылает заявку боту в Telegram (см. worker/README.md).
// Если адрес пуст или сервер не ответил, форма открывает Telegram с готовым текстом заявки.
const LEAD_ENDPOINT = "https://vanagstudy-leads.vanagstudy.workers.dev";
// Запасной путь: ник в Telegram, кому писать заявку вручную, без «@».
const TELEGRAM_CONTACT = "PetrVanag";

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const SVG_NS = "http://www.w3.org/2000/svg";

/* ---------- Меню: закрывать после перехода ---------- */
$$(".menu a").forEach((a) =>
  a.addEventListener("click", () => a.closest("details")?.removeAttribute("open"))
);
document.addEventListener("click", (e) => {
  const menu = $(".menu[open]");
  if (menu && !menu.contains(e.target)) menu.removeAttribute("open");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") $(".menu[open]")?.removeAttribute("open");
});

/* ---------- Пометки ручкой: рисуются, когда до них доходит взгляд ---------- */
const MARKS = {
  circle: ["0 0 100 40", "M62 5C34 1 6 7 4 20c-2 13 26 18 50 17 26-1 43-8 42-19C95 8 76 3 48 5c-9 1-16 3-21 6"],
  underline: ["0 0 300 16", "M3 11C60 5 130 4 196 7s76 2 101-2"],
  check: ["0 0 24 24", "M3 13.5 9.5 20 21.5 4"],
};

function addMark(el) {
  const [viewBox, d] = MARKS[el.dataset.mark] || [];
  if (!viewBox) return;
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("class", `mark mark--${el.dataset.mark}`);
  svg.setAttribute("viewBox", viewBox);
  svg.setAttribute("preserveAspectRatio", "none");
  svg.setAttribute("aria-hidden", "true");
  const path = document.createElementNS(SVG_NS, "path");
  path.setAttribute("d", d);
  path.setAttribute("pathLength", "1");
  svg.append(path);
  el.append(svg);
}

const marked = $$("[data-mark]");
marked.forEach(addMark);
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-drawn");
        io.unobserve(entry.target);
      }),
    { rootMargin: "0px 0px -18% 0px" }
  );
  // двойной кадр, чтобы штрих успел встать в начальное положение и анимация сработала
  requestAnimationFrame(() => requestAnimationFrame(() => marked.forEach((el) => io.observe(el))));
} else {
  marked.forEach((el) => el.classList.add("is-drawn"));
}

/* ---------- Квадрат из уголков: 1 + 3 + … + (2n − 1) = n² ---------- */
const square = $("#square");
const range = $("#n-range");
if (square && range) {
  const SIZE = 296;
  const GAP = 4;
  const INK = [22, 23, 27];
  const PALE = [176, 178, 184];
  const mix = (t) => `rgb(${INK.map((v, i) => Math.round(v + (PALE[i] - v) * t)).join(",")})`;
  let current = 5;

  const equation = (n) => {
    const odd = Array.from({ length: n }, (_, k) => 2 * k + 1);
    const left = n <= 6 ? odd.join(" + ") : `1 + 3 + … + ${2 * n - 1}`;
    return `${left} = <span class="r">${n}²</span>`;
  };

  function draw(n) {
    const cell = (SIZE - GAP * (n - 1)) / n;
    square.replaceChildren();
    for (let k = 0; k < n; k++) {
      const g = document.createElementNS(SVG_NS, "g");
      const isNew = k >= current;
      g.setAttribute("class", isNew ? "layer layer--new" : "");
      g.style.setProperty("--i", isNew ? k - current : 0);
      const last = k === n - 1;
      const t = n > 2 ? k / (n - 2) : 0;
      const fill = last ? "#c02a1b" : mix(t);
      const cells = [...Array.from({ length: k + 1 }, (_, i) => [k, i]), ...Array.from({ length: k }, (_, i) => [i, k])];
      for (const [r, c] of cells) {
        const rect = document.createElementNS(SVG_NS, "rect");
        rect.setAttribute("x", c * (cell + GAP));
        rect.setAttribute("y", r * (cell + GAP));
        rect.setAttribute("width", cell);
        rect.setAttribute("height", cell);
        rect.setAttribute("fill", fill);
        g.append(rect);
      }
      if (cell >= 30) {
        const text = document.createElementNS(SVG_NS, "text");
        const cx = k * (cell + GAP) + cell / 2;
        const fs = Math.min(15, cell * 0.36);
        text.setAttribute("x", cx);
        text.setAttribute("y", cx + fs / 3);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("fill", last || t < 0.62 ? "#fff" : "#16171b");
        text.style.fontSize = `${fs}px`;
        text.textContent = k === 0 ? "1" : `+${2 * k + 1}`;
        g.append(text);
      }
      square.append(g);
    }
    square.setAttribute("aria-label", `Квадрат ${n} на ${n}, сложенный из ${n} уголков`);
    $("#n-eq").innerHTML = equation(n);
    $("#n-out").textContent = n;
    current = n;
  }

  $("#ruler").hidden = false;
  range.addEventListener("input", () => draw(Number(range.value)));
}

/* ---------- Фильтр преподавателей ---------- */
const filterButtons = $$(".filter button");
const teachers = $$("#team-list .teacher");
filterButtons.forEach((btn) => {
  const key = btn.dataset.filter;
  const count = key === "all" ? teachers.length : teachers.filter((t) => t.dataset.subjects.split(" ").includes(key)).length;
  const badge = document.createElement("span");
  badge.className = "filter__count";
  badge.textContent = count;
  btn.append(badge);
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    teachers.forEach((t) => {
      t.hidden = key !== "all" && !t.dataset.subjects.split(" ").includes(key);
    });
  });
});

/* ---------- Кнопка записи внизу экрана (телефон) ---------- */
const dock = $("#dock");
if (dock && "IntersectionObserver" in window) {
  const watched = { hero: true, apply: false };
  const sync = () => {
    const on = !watched.hero && !watched.apply;
    dock.classList.toggle("is-on", on);
    dock.setAttribute("aria-hidden", String(!on));
    dock.tabIndex = on ? 0 : -1;
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      watched[e.target.dataset.dock] = e.isIntersecting;
    });
    sync();
  });
  const hero = $(".hero__actions");
  const apply = $("#apply");
  if (hero) { hero.dataset.dock = "hero"; io.observe(hero); }
  if (apply) { apply.dataset.dock = "apply"; io.observe(apply); }
}

/* ---------- Заявка ---------- */
const form = $("#lead-form");

function prefill({ subject, format } = {}) {
  if (!form) return;
  if (subject) {
    const select = $("#f-subject", form);
    const option = [...select.options].find((o) => o.text === subject);
    if (option) select.value = option.value;
  }
  if (format) {
    const radio = $$('input[name="format"]', form).find((r) => r.value === format);
    if (radio) radio.checked = true;
  }
}

$$("a[data-format], a[data-subject]").forEach((a) =>
  a.addEventListener("click", () => prefill({ subject: a.dataset.subject, format: a.dataset.format }))
);

function setError(input, message) {
  const err = $(`#${input.id}-err`);
  input.setAttribute("aria-invalid", message ? "true" : "false");
  if (message) input.setAttribute("aria-describedby", err.id);
  else input.removeAttribute("aria-describedby");
  err.textContent = message;
}

function showFallback(text) {
  $("#lead-sent-title").textContent = "Заявка готова";
  $("#lead-sent-text").textContent = "Осталось отправить её нам в Telegram — текст уже подставлен. Если Telegram не открылся, скопируйте текст и напишите нам.";
  $("#lead-text").textContent = text;
  $("#lead-text").hidden = false;
  $("#lead-fallback").hidden = false;
  $("#lead-tg").href = `https://t.me/${TELEGRAM_CONTACT}?text=${encodeURIComponent(text)}`;
  $("#lead-copy").onclick = async () => {
    const status = $("#lead-status");
    try {
      await navigator.clipboard.writeText(text);
      status.textContent = "Текст скопирован. Вставьте его в сообщение нам в Telegram.";
    } catch {
      status.textContent = "Не получилось скопировать автоматически — выделите текст выше и скопируйте вручную.";
    }
  };
}

function showSent(name) {
  $("#lead-sent-title").textContent = "Заявка отправлена";
  $("#lead-sent-text").textContent = `Спасибо${name ? ", " + name : ""}! Пётр напишет вам в Telegram или перезвонит, чтобы договориться о диагностике.`;
  $("#lead-text").hidden = true;
  $("#lead-fallback").hidden = true;
}

if (form) {
  const sent = $("#lead-sent");
  const submit = $(".form__submit", form);
  const sendStatus = $("#lead-status-send");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = $("#f-name", form);
    const contact = $("#f-contact", form);
    setError(name, name.value.trim() ? "" : "Напишите, как к вам обращаться.");
    setError(contact, contact.value.trim().length >= 3 ? "" : "Оставьте ник в Telegram или телефон, чтобы мы могли ответить.");
    const firstInvalid = $('[aria-invalid="true"]', form);
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    const data = new FormData(form);
    const lead = {
      name: data.get("name").trim(),
      contact: data.get("contact").trim(),
      subject: data.get("subject"),
      format: data.get("format"),
      website: data.get("website"),
      page: location.pathname,
    };
    const text = [
      "Здравствуйте! Хочу записаться на диагностику в VanagStudy.",
      `Имя: ${lead.name}`,
      `Контакт: ${lead.contact}`,
      `Цель / предмет: ${lead.subject}`,
      `Формат: ${lead.format}`,
    ].join("\n");

    let delivered = false;
    if (LEAD_ENDPOINT) {
      submit.setAttribute("aria-busy", "true");
      submit.disabled = true;
      sendStatus.textContent = "Отправляем…";
      try {
        const res = await fetch(LEAD_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        });
        delivered = res.ok;
      } catch {
        delivered = false;
      }
      submit.removeAttribute("aria-busy");
      submit.disabled = false;
      sendStatus.textContent = "";
    }

    if (delivered) showSent(lead.name);
    else showFallback(text);
    form.hidden = true;
    sent.hidden = false;
    sent.focus();
  });
}
