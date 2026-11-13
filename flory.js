const ui = {
  ru: {
    skip: "К каталогу", language: "Язык", guide: "Гайд", start: "Гайд по TavoAI",
    hero: "Плагины для историй, в которых хочется остаться.",
    intro: "Телефон внутри ролевой, календарь событий, инструменты для персонажей и мира. Всё, что я создаю для TavoAI, в одном месте.",
    browse: "Смотреть плагины", install: "Как установить", search: "Поиск плагинов",
    pluginLead: "Выбери, чего не хватает твоей ролевой.", presetLead: "Настрой голос модели, ритм сцен и детали мира.",
    styleLead: "Выбери пример, скопируй промпт и попробуй его со своим персонажем.",
    categories: ["Все", "Сюжет и мир", "Персонажи", "Инструменты"], details: "Подробнее",
    empty: "Плагины не найдены. Попробуй изменить запрос или категорию.",
    unavailable: "Файл пока недоступен", close: "Закрыть", prev: "Предыдущий кадр", next: "Следующий кадр",
    styleDetails: "Открыть", copyFailed: "Выдели и скопируй промпт вручную.", promptMissing: "Не удалось загрузить промпт.",
    bug: "Сообщить о баге ↗", custom: "Заказать для TavoAI ↗", top: "Наверх ↑",
    installNote: "Скачай .tpg и импортируй его в разделе Plugins приложения TavoAI.",
    presetFile: "Пресет (.json)", regexFile: "Регексы", artRegex: "Регексы с картинками", textRegex: "Текстовые регексы"
  },
  en: {
    skip: "Skip to plugins", language: "Language", guide: "Guide", start: "TavoAI guide",
    hero: "Plugins for stories you want to stay in.",
    intro: "An in-story phone, an event calendar, and tools for your characters and worlds. Everything I make for TavoAI, in one place.",
    browse: "Explore plugins", install: "How to install", search: "Search plugins",
    pluginLead: "Find what your roleplay is missing.", presetLead: "Set the model’s voice, scene pacing, and world details.",
    styleLead: "Pick an example, copy its prompt, and try it with your own character.",
    categories: ["All", "Story & world", "Characters", "Utilities"], details: "Details",
    empty: "No plugins found. Try a different search or category.",
    unavailable: "File currently unavailable", close: "Close", prev: "Previous frame", next: "Next frame",
    styleDetails: "Open", copyFailed: "Select and copy the prompt manually.", promptMissing: "Could not load the prompt.",
    bug: "Report a bug ↗", custom: "Request custom work ↗", top: "Back to top ↑",
    installNote: "Download the .tpg file and import it from Plugins in the TavoAI app.",
    presetFile: "Preset (.json)", regexFile: "Regex", artRegex: "Regex with images", textRegex: "Text-only regex"
  },
  zh: {
    skip: "跳到插件列表", language: "语言", guide: "指南", start: "TavoAI 指南",
    hero: "为让人流连的故事而做的插件。",
    intro: "剧情内手机、事件日历，以及角色与世界设定工具。我的 TavoAI 作品都在这里。",
    browse: "浏览插件", install: "安装方法", search: "搜索插件",
    pluginLead: "为你的角色扮演找到合适的功能。", presetLead: "调整模型的文风、场景节奏和世界细节。",
    styleLead: "选择示例、复制提示词，并用自己的角色试一试。",
    categories: ["全部", "剧情与世界", "角色", "工具"], details: "详情",
    empty: "未找到插件。请试试其他关键词或分类。",
    unavailable: "文件暂不可用", close: "关闭", prev: "上一张", next: "下一张",
    styleDetails: "打开", copyFailed: "请选择并手动复制提示词。", promptMissing: "无法加载提示词。",
    bug: "反馈问题 ↗", custom: "定制 TavoAI 作品 ↗", top: "返回顶部 ↑",
    installNote: "下载 .tpg 文件，在 TavoAI 的插件页面导入。",
    presetFile: "预设 (.json)", regexFile: "正则", artRegex: "带图正则", textRegex: "纯文本正则"
  }
};

const order = {
  phone: 1, "scene-director": 1, "event-calendar": 1, "persona-atelier": 2, organizer: 3,
  observer: 1, "supernatural-codex": 1, "reproductive-system": 2, facets: 2, estate: 1,
  "prompt-debugger": 3, "love-lab": 2
};
const featuredPlugins = ["phone", "scene-director", "event-calendar"];
const summaries = {
  phone: ["Переписка, звонки и соцсети прямо внутри ролевой.", "Text, call and browse social apps inside your roleplay.", "在角色扮演中发消息、通话和浏览社交应用。"],
  "scene-director": ["Сюжетные линии, случайные события и подсказки под сцену.", "Story threads, random events and scene-specific suggestions.", "剧情线、随机事件和场景建议。"],
  "event-calendar": ["Расписание и даты, которые ИИ учитывает в сюжете.", "Schedules and dates the AI can use in your story.", "让 AI 在剧情中记住日期和日程。"],
  "persona-atelier": ["Создай персонажа или персону по готовым архетипам.", "Build a character or persona from ready-made archetypes.", "从现成原型创建角色或人设。"],
  organizer: ["Папки, теги и поиск по библиотеке Tavo.", "Folders, tags and search for your Tavo library.", "用文件夹、标签和搜索整理 Tavo 资料库。"],
  observer: ["Реакции на ролевую от детектива, скептика или зрителя.", "Roleplay commentary from a detective, skeptic, or spectator.", "从侦探、怀疑者或观众的角度评论剧情。"],
  "supernatural-codex": ["Энциклопедия существ, их способностей и слабостей.", "A grimoire of supernatural creatures, abilities and weaknesses.", "超自然生物、能力和弱点的百科。"],
  "reproductive-system": ["Цикл, беременность и семья персонажа в ролевой.", "Cycle, pregnancy and family tracking for roleplay characters.", "追踪角色的周期、怀孕与家庭。"],
  facets: ["Досье вкусов и привычек персонажа в лорбуке.", "A lorebook of your character’s tastes and habits.", "将角色的口味和习惯写入设定集。"],
  estate: ["Лорбук дома персонажа с описанием каждой комнаты.", "A room-by-room lorebook for your character’s home.", "为角色的家逐个房间建立设定集。"],
  "prompt-debugger": ["Состав промпта, токены и расходы на генерацию.", "Prompt breakdowns, token counts and generation costs.", "查看提示词构成、token 用量与生成费用。"],
  "love-lab": ["Совместимость и динамика отношений персонажей.", "Explore compatibility and relationship dynamics.", "探索角色之间的契合度与关系动态。"]
};
const $ = (selector) => document.querySelector(selector);
const dialog = $("#details");
const content = $("#dialog-content");
const search = $("#search");
const language = $("#language");
let lang = "ru";
try {
  const saved = localStorage.getItem("pg-lang");
  if (Object.hasOwn(ui, saved)) lang = saved;
} catch {}
let category = 0;
let model = "v5";

function downloadLink(file, label) {
  return `<a class="download" href="${file}" download>${label} ↓</a>`;
}

function renderPlugins() {
  const t = catalog[lang];
  const words = ui[lang];
  const query = search.value.trim().toLowerCase();
  const plugins = Object.keys(order).map(id => {
    const item = t.plugins.find(plugin => plugin.f === id + ".tpg");
    return { ...item, id };
  }).filter(item => {
    const aliases = Object.values(catalog).map(locale => locale.plugins.find(plugin => plugin.f === item.f).n);
    const searchable = [item.id, item.d, ...aliases, ...item.t].join(" ").toLowerCase();
    return (!category || order[item.id] === category) && searchable.includes(query);
  });
  $("#result").textContent = plugins.length ? String(plugins.length) : words.empty;
  $("#plugin-grid").innerHTML = plugins.length ? plugins.map(item => `
    <article class="plugin${!category && !query && featuredPlugins.includes(item.id) ? " featured" : ""}">
      <div class="plugin-main"><img src="assets/${item.id}.webp" alt="" width="76" height="76" loading="lazy">
      <div><span class="category">${words.categories[order[item.id]]}</span><h3>${item.n}</h3>
      <p>${summaries[item.id][Object.keys(ui).indexOf(lang)]}</p></div></div>
      <div class="plugin-footer"><button type="button" class="text-link" data-plugin="${item.id}" aria-label="${words.details} · ${item.n}">${words.details} ↗</button>
      ${item.id === "love-lab" ? `<span class="category">${words.unavailable}</span>` : downloadLink(item.f, t.dl + " .tpg")}</div>
    </article>`).join("") : `<p class="empty">${words.empty}</p>`;
}

function fileLabel(file, words) {
  if (file.endsWith(".json")) return words.presetFile;
  if (file.includes("-pics-")) return words.artRegex;
  if (file.includes("-text-")) return words.textRegex;
  const provider = file.match(/regex-(naistera|yandex)/);
  return provider ? words.regexFile + " · " + provider[1].toUpperCase() : words.regexFile;
}

function renderResources(items, grid) {
  const t = catalog[lang];
  const words = ui[lang];
  $(grid).innerHTML = items.map(item => {
    let files = "";
    if (item.langs) {
      files = item.langs.map(entry => entry.f ? `<details><summary>${entry.l}</summary><div class="files">${entry.f.map(file => downloadLink(file, fileLabel(file, words))).join("")}</div></details>`
        : `<p>${entry.l} · ${t.dev}</p>`).join("");
    } else if (item.multi) {
      files = `<div class="actions">${item.multi.map(entry => downloadLink(entry.f, entry.l)).join("")}</div>`;
    } else if (item.f) {
      files = downloadLink(item.f, t.dl + " .zip");
    } else {
      files = `<span class="category">${t.dev}</span>`;
    }
    return `<article class="resource"><img src="${item.img}" alt="" loading="lazy"><div class="resource-body"><h3>${item.n}</h3><p>${item.d}</p>${files}</div></article>`;
  }).join("");
}

function renderStyles() {
  const t = catalog[lang];
  const words = ui[lang];
  for (const button of $("#model-filters").querySelectorAll("button")) {
    button.setAttribute("aria-pressed", String(button.dataset.model === model));
  }
  $("#style-grid").innerHTML = styleIndex[model].map(item => `
    <article class="style-card">
      <button type="button" class="style-preview" data-style="${item.number}" aria-label="${words.styleDetails} · ${t.styleWord} ${item.number}">
        <span class="style-frame" style="--frame-ratio:${item.ratio};--strip-width:${item.frames * 100}%;--frame-offset:${-Math.floor(item.frames / 2) * 100}%">
          <img src="${item.image}" alt="" loading="lazy">
        </span>
      </button>
      <div class="style-body"><h3>${t.styleWord} ${item.number}</h3><button type="button" class="download" data-style="${item.number}">${words.styleDetails} ↗</button></div>
    </article>`).join("");
}

function render() {
  const t = catalog[lang];
  const words = ui[lang];
  document.documentElement.lang = lang;
  document.title = "FloryHibi — " + t.plTitle + " · TavoAI";
  language.value = lang;
  search.placeholder = words.search;
  $("#close-dialog").ariaLabel = words.close;
  document.querySelectorAll("[data-ui]").forEach(node => { node.textContent = words[node.dataset.ui]; });
  document.querySelectorAll("[data-text]").forEach(node => { node.textContent = t[node.dataset.text]; });
  $("#filters").innerHTML = words.categories.map((label, index) =>
    `<button type="button" data-category="${index}" aria-pressed="${category === index}">${label}</button>`).join("");
  renderPlugins();
  renderResources(t.presets, "#preset-grid");
  renderResources(t.themes, "#theme-grid");
  renderStyles();
}

function openPlugin(id) {
  const t = catalog[lang];
  const words = ui[lang];
  const item = t.plugins.find(plugin => plugin.f === id + ".tpg");
  content.innerHTML = `<div class="detail-head"><img src="assets/${id}.webp" alt="" width="80" height="80">
    <div><span class="category">${item.t.join(" · ")}</span><h2 id="detail-title">${item.n}</h2></div></div>
    <p class="dialog-desc">${item.d}</p>
    ${id === "love-lab" ? `<p class="dialog-note">${words.unavailable}</p>` :
      `<p class="dialog-note">${words.installNote}</p>
      <div class="actions">${downloadLink(item.f, t.dl + " .tpg")}<a class="button secondary" href="guide.html#plugins">${words.install} ↗</a></div>`}`;
  dialog.showModal();
}

let promptRequest;
async function openStyle(number) {
  const t = catalog[lang];
  const words = ui[lang];
  const item = styleIndex[model].find(style => style.number === number);
  content.innerHTML = `<h2 id="detail-title">${t.styleWord} ${item.number} · ${model}</h2>
    <div class="dialog-photo" role="img" aria-label="${t.styleWord} ${item.number}"></div>
    ${item.frames > 1 ? `<div class="frame-controls">
      <button type="button" class="download" aria-label="${words.prev}" data-frame="-1">‹</button>
      <output></output><button type="button" class="download" aria-label="${words.next}" data-frame="1">›</button>
    </div>` : ""}
    <pre class="prompt" tabindex="0" aria-live="polite">…</pre>
    <button type="button" class="button primary" hidden>${t.copy}</button>
    <span role="status" class="category"></span>`;
  const photo = content.querySelector(".dialog-photo");
  photo.style.aspectRatio = item.ratio;
  photo.style.width = `min(100%, ${53 * item.ratio}dvh)`;
  photo.style.backgroundImage = `url("${item.image}")`;
  photo.style.backgroundSize = `${item.frames * 100}% 100%`;
  let frame = 0;
  const output = content.querySelector("output");
  if (output) output.textContent = `1 / ${item.frames}`;
  content.querySelectorAll("[data-frame]").forEach(button => button.addEventListener("click", () => {
    frame = (frame + Number(button.dataset.frame) + item.frames) % item.frames;
    photo.style.backgroundPositionX = `${frame * 100 / (item.frames - 1)}%`;
    output.textContent = `${frame + 1} / ${item.frames}`;
  }));
  const prompt = content.querySelector(".prompt");
  const copy = content.querySelector(".primary");
  const status = content.querySelector("[role=status]");
  dialog.showModal();
  const request = new AbortController();
  promptRequest = request;
  try {
    const response = await fetch(item.image.replace(/\.jpg$/, ".txt"), { signal: request.signal });
    if (!response.ok) throw new Error(response.status);
    const text = (await response.text()).trim();
    prompt.textContent = text;
    copy.hidden = false;
    copy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(text);
        status.textContent = t.copied;
      } catch {
        status.textContent = words.copyFailed;
      }
    });
  } catch {
    if (!request.signal.aborted) prompt.textContent = words.promptMissing;
  }
}

language.addEventListener("change", () => {
  lang = language.value;
  try { localStorage.setItem("pg-lang", lang); } catch {}
  render();
});
search.addEventListener("input", renderPlugins);
$("#filters").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  category = Number(button.dataset.category);
  for (const filter of $("#filters").querySelectorAll("button")) filter.setAttribute("aria-pressed", String(filter === button));
  renderPlugins();
});
$("#plugin-grid").addEventListener("click", event => {
  const button = event.target.closest("[data-plugin]");
  if (button) openPlugin(button.dataset.plugin);
});
$("#model-filters").addEventListener("click", event => {
  const button = event.target.closest("[data-model]");
  if (!button) return;
  model = button.dataset.model;
  renderStyles();
});
$("#style-grid").addEventListener("click", event => {
  const button = event.target.closest("[data-style]");
  if (button) openStyle(Number(button.dataset.style));
});
dialog.addEventListener("close", () => {
  promptRequest?.abort();
  content.replaceChildren();
});
dialog.addEventListener("click", event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});

render();
