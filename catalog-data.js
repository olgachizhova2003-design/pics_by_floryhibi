const catalog = {
ru:{
  nav:["Пресеты","Плагины","Темы","Стили NovelAI","Гайд","Обо мне"],
  badge:"Для TavoAI от @floryhibi",
  title:"FloryHibi",
  sub:"Мои плагины, темы, пресеты для TavoAI.",
  cta1:"♥ Пресеты",cta2:"Плагины",cta3:"Стили NovelAI",
  s1:"пресета",s2:"плагинов",s3:"стили",
  pTitle:"Пресеты",pLead:"Готовые пресеты для TavoAI.",dl:"Скачать",dev:"В разработке",
  abTitle:"Обо мне",abText:"Привет! Меня зовут FloryHibi, я — креатор для TavoAI. Я создаю плагины, темы, пресеты, красивые плашки и прочее. Вы можете найти меня в моём Discord-канале.",
  presets:[
    {n:"PeonySet 18+ v2",img:"peonyset.jpg",langs:[{l:"RUS",f:["peonyset-18-v2.json","peonyset-regex-naistera.zip","peonyset-regex-yandex.zip"]},{l:"ENG",f:["peonyset-en.json","peonyset-regex-en.zip"]},{l:"ZHN"}],d:"Флагманский пресет для взрослых ролевых историй: глубокие персонажи, живые диалоги, тонкая настройка сцен. В комплекте — пресет и два файла регексов (NAISTERA и Yandex).",t:["Claude","18+"]},
    {n:"Jade Immortal",img:"jade.jpg",langs:[{l:"RUS",f:["jade-ru.json","jade-pics-ru.zip","jade-text-ru.zip"]},{l:"ENG",f:["jade-en.json","jade-pics-en.zip","jade-text-en.zip"]},{l:"ZHN",f:["jade-zh.json","jade-pics-zh.zip","jade-text-zh.zip"]}],d:"Пресет в духе сянься: культивация, бессмертные, древние секты и поэтичные описания мира.",t:["Фэнтези","Сянься"]},
    {n:"Fantasy Engine",img:"fantasy.jpg",dev:true,d:"Универсальный фэнтези-движок: магические системы, квесты, механики мира и приключения.",t:["Фэнтези","Системный"]}
  ],
  plTitle:"Плагины",plLead:"Расширения, добавляющие новые механики в чат.",
  plugins:[
    {n:"Вкусы",img:"facets.jpg",f:"facets.tpg",d:"Генератор досье вкусов и привычек персонажа: еда, музыка, работа, стиль жизни. Модель чата пишет досье, а плагин раскладывает его в лорбук с ключевыми словами — записи всплывают, только когда тема появляется в диалоге.",t:["Механика","Лорбук"]},
    {n:"Дома",img:"estate.jpg",f:"estate.tpg",d:"Генератор лорбука «дом персонажа» по комнатам: кухня, спальня, сад и любые зоны. У каждой записи есть Visual-блок с тегами для генерации изображения комнаты, а срабатывают они, только когда место упоминается в чате.",t:["Мир","Лорбук"]},
    {n:"Любовная лаборатория",img:"lovelab.jpg",f:"love-lab.tpg",d:"Маленькая лаборатория вашей связи: совместимость, динамика отношений и скрытые стороны истории. Нумерология, матрица судьбы, астрология и таро — всё в одной панели.",t:["Отношения"]},
    {n:"Наблюдатель",img:"observer.jpg",f:"observer.tpg",d:"Сторонний мета-комментатор RP: короткие реплики с анимированным аватаром, который никогда не вмешивается в историю. Три режима — Детектив ищет противоречия, Подружка-скептик ехидничает на твоей стороне, Зритель эмоционально реагирует.",t:["Память","Комментатор"]},
    {n:"Репродуктивная система",img:"reproductive.jpg",f:"reproductive-system.tpg",d:"Подробный трекер цикла и беременности для ролевых: фазы цикла с календарём, зачатие через dice-roll с учётом контрацепции, сроки от 4 до 100 недель, осложнения и роды. Рождённые дети попадают в семейный модуль с именем, характером и внешностью.",t:["Симуляция"]},
    {n:"Supernatural Codex",img:"supernatural.jpg",f:"supernatural-codex.tpg",d:"Живой гримуар сверхъестественных существ: энциклопедия, профиль персонажа, способности, слабости, наследия и летопись. Сканирует карточку персонажа и автоматически распознаёт существ прямо в RP.",t:["Лор","Фэнтези"]},
    {n:"Organizer",img:"organizer.png",f:"organizer.tpg",d:"Файловый менеджер для библиотеки Tavo: папки любой вложенности, цветные метки, иконки, теги, избранное, связи, умные папки и поиск — без переименования и копирования оригиналов.",t:["Организация","Библиотека"]},
    {n:"Phone",img:"phone.jpg",f:"phone.tpg",d:"Полноценный айфон внутри ролевой: переписка и звонки с персонажем, Instagram, Твиттер, Дискорд, стримы, банк с Apple Pay, магазин, музыка под сцену и игры против персонажа. Всё, что ты делаешь в телефоне, узнаёт ИИ.",t:["Смартфон","Соцсети"]},
    {n:"Prompt Debugger",img:"prompt-debugger.jpg",f:"prompt-debugger.tpg",d:"Показывает, сколько токенов тратит каждая генерация и из чего состоит промпт: пресет, карточка, персона, сработавшие записи лорбуков, история чата и ответ модели. Заполнение контекста, стоимость по вашим ценам, итоги за чат и кнопка «Оценить сейчас» до отправки.",t:["Токены","Отладка"]},
    {n:"Event Calendar",img:"event-calendar.jpg",f:"event-calendar.tpg",d:"Заставляет ИИ помнить расписание и даты: пары, смены, тренировки, распорядок дня, дни рождения и праздники. Следит за временем сюжета и не даёт ему «сжиматься», строит расписание на неделю по самой ролевой, шлёт скрытые напоминания, готовит мир и подарки к праздникам заранее. Сетка месяца, таймлайн дня, задачи и дневник.",t:["Календарь","Расписание"]},
    {n:"Persona Atelier",img:"persona-atelier.jpg",f:"persona-atelier.tpg",d:"Студия создания персонажей: собери персонажа или свою персону, нажимая на варианты-«таблетки» вместо пустых полей, а ИИ превратит выбор в цельную подробную анкету. Готовые архетипы, 10 коротких шагов, мудборд, редактор по разделам и экспорт прямо в Tavo или в Character Card V3.",t:["Персонажи","Персона"]},
    {n:"Scene Director",img:"scene-director.jpg",f:"scene-director.tpg",d:"ИИ-режиссёр для ролевой: тонкая строка под ответом бота помогает вести сюжет. 16 команд и рекомендации под твою историю, сюжетные линии, случайные события «Судьбы» с легендарными редкостями, атмосфера сцены, «Что если…?» и хроника. В чат ничего не добавляется, ИИ не решает за тебя.",t:["Сюжет","Режиссура"]}
  ],
  thTitle:"Темы",thLead:"Готовые темы оформления для TavoAI.",
  themes:[
    {n:"9 тем",img:"themes/9themes_ru.jpg",f:"themes/9themes.zip",d:"Набор из девяти нежных тем для TavoAI — от Blush Milk до Midnight Plum. Одним архивом.",t:["Темы","9 в 1"]},
    {n:"Dark Sakura",img:"themes/darksakura.jpg",multi:[{l:"iOS",f:"themes/darksakura-ios.thm"},{l:"Android",f:"themes/darksakura-android.thm"}],d:"Тёмная тема с сакурой: глубокие оттенки и розовые акценты. Отдельные файлы для iOS и Android.",t:["Тёмная","Сакура"]}
  ],
  bugQ:"Something isn't working?",bugBtn:"🐛 Сообщить о баге",
  custQ:"Want something made for you?",custBtn:"♡ Custom TavoAI",
  stTitle:"Стили для NovelAI",stLead:"Готовые стилевые пресеты для генерации изображений.",styleWord:"Стиль",copy:"Скопировать",copied:"Скопировано ✓",slides:["Салют","Осень","Ночь"],
  styles:[
    {e:"💎",n:"Facets",d:"Гранёный стиль: чистые линии, блики и драгоценная детализация персонажей.",t:["Портрет"]},
    {e:"🏡",n:"Estate",d:"Усадьбы и интерьеры: уютные поместья, сады и атмосферные локации.",t:["Локации"]},
    {e:"💗",n:"Love Lab",d:"Романтичные сцены: тёплый свет, нежные эмоции, парные композиции.",t:["Романтика"]},
    {e:"👁",n:"Observer",d:"Взгляд со стороны: кинематографичные ракурсы и наблюдательные сцены.",t:["Сцена"]}
  ],
  footer:"Сделано с ♥ · FloryHibi"
},
en:{
  nav:["Presets","Plugins","Themes","NovelAI Styles","Guide","About"],
  badge:"For TavoAI by @floryhibi",
  title:"FloryHibi",
  sub:"My plugins, themes, presets for TavoAI.",
  cta1:"♥ Presets",cta2:"Plugins",cta3:"NovelAI Styles",
  s1:"presets",s2:"plugins",s3:"styles",
  pTitle:"Presets",pLead:"Ready-made presets for TavoAI.",dl:"Download",dev:"In development",
  abTitle:"About",abText:"Hi! My name is FloryHibi, I\u2019m a creator for TavoAI. I make plugins, themes, presets, pretty UI cards and more. You can find me on my Discord channel.",
  presets:[
    {n:"PeonySet 18+ v2",img:"peonyset.jpg",langs:[{l:"RUS",f:["peonyset-18-v2.json","peonyset-regex-naistera.zip","peonyset-regex-yandex.zip"]},{l:"ENG",f:["peonyset-en.json","peonyset-regex-en.zip"]},{l:"ZHN"}],d:"Flagship preset for mature roleplay: deep characters, vivid dialogue, fine-grained scene control. Includes the preset plus two regex files (NAISTERA and Yandex).",t:["Claude","18+"]},
    {n:"Jade Immortal",img:"jade.jpg",langs:[{l:"RUS",f:["jade-ru.json","jade-pics-ru.zip","jade-text-ru.zip"]},{l:"ENG",f:["jade-en.json","jade-pics-en.zip","jade-text-en.zip"]},{l:"ZHN",f:["jade-zh.json","jade-pics-zh.zip","jade-text-zh.zip"]}],d:"Xianxia-flavored preset: cultivation, immortals, ancient sects and poetic worldbuilding.",t:["Fantasy","Xianxia"]},
    {n:"Fantasy Engine",img:"fantasy.jpg",dev:true,d:"Universal fantasy engine: magic systems, quests, world mechanics and adventures.",t:["Fantasy","Systemic"]}
  ],
  plTitle:"Plugins",plLead:"Extensions that add new mechanics to your chats.",
  plugins:[
    {n:"Facets",img:"facets.jpg",f:"facets.tpg",d:"Generates a 'tastes & habits dossier' for a character, user or NPC: food, music, work, lifestyle. The chat model writes the dossier, and the plugin splits it into lorebook entries with keywords that trigger only when the topic comes up.",t:["Mechanics","Lorebook"]},
    {n:"Estate",img:"estate.jpg",f:"estate.tpg",d:"Builds a 'character's home' lorebook room by room: kitchen, bedroom, garden and any custom areas. Each entry includes a [Visual] tag block for room image generation and triggers only when the place is mentioned.",t:["World","Lorebook"]},
    {n:"Love Lab",img:"lovelab.jpg",f:"love-lab.tpg",d:"A little laboratory of your bond: compatibility, relationship dynamics and hidden sides of your story. Numerology, destiny matrix, astrology and tarot — all in one panel.",t:["Relations"]},
    {n:"Observer",img:"observer.jpg",f:"observer.tpg",d:"A third-party meta-commentator for your RP: short remarks with an animated avatar that never interferes with the story. Three modes — Detective hunts contradictions, Skeptical Girlfriend snarks on your side, Spectator reacts emotionally.",t:["Memory","Commentator"]},
    {n:"Reproductive System",img:"reproductive.jpg",f:"reproductive-system.tpg",d:"A detailed cycle and pregnancy tracker for roleplay: cycle phases with a calendar, dice-roll conception with contraception, 4–100 week terms, complications and childbirth. Born children go to the family module with name, personality and appearance.",t:["Simulation"]},
    {n:"Supernatural Codex",img:"supernatural.jpg",f:"supernatural-codex.tpg",d:"A living grimoire of supernatural beings: encyclopedia, character profile, abilities, weaknesses, legacies and chronicle. Scans the character card and auto-detects creatures right in the RP.",t:["Lore","Fantasy"]},
    {n:"Organizer",img:"organizer.png",f:"organizer.tpg",d:"A file manager for your Tavo library: nested folders, colour labels, icons, tags, favourites, links, smart folders and search — without renaming or copying the originals.",t:["Organization","Library"]},
    {n:"Phone",img:"phone.jpg",f:"phone.tpg",d:"A full iPhone inside your roleplay: texting and calls with your character, Instagram, Twitter, Discord, live streams, a bank with Apple Pay, a shop, music picked for the scene and games against your character. Everything you do on the phone, the AI knows.",t:["Smartphone","Social"]},
    {n:"Prompt Debugger",img:"prompt-debugger.jpg",f:"prompt-debugger.tpg",d:"Shows how many tokens every generation spends and what the prompt is made of: preset, card, persona, triggered lorebook entries, chat history and the model reply. Context fill, cost at your prices, per-chat totals and an “Estimate now” button before you send.",t:["Tokens","Debugging"]},
    {n:"Event Calendar",img:"event-calendar.jpg",f:"event-calendar.tpg",d:"Makes the AI remember schedules and dates: classes, work shifts, trainings, daily routine, birthdays and holidays. Tracks story time and stops it from “compressing”, builds a weekly timetable from the roleplay itself, sends hidden reminders, and prepares the world and gifts for holidays ahead of time. Month grid, day timeline, to-dos and a diary.",t:["Calendar","Schedule"]},
    {n:"Persona Atelier",img:"persona-atelier.jpg",f:"persona-atelier.tpg",d:"A character design studio: build a character or your own persona by tapping pill-shaped options instead of filling empty forms, and AI turns your choices into a coherent, detailed profile. Ready archetypes, 10 short steps, a moodboard, a section-by-section editor and export straight into Tavo or as Character Card V3.",t:["Characters","Persona"]},
    {n:"Scene Director",img:"scene-director.jpg",f:"scene-director.tpg",d:"An AI director for your roleplay: a slim strip under the bot’s reply helps you steer the story. 16 commands plus recommendations for your story, story threads, random Fate events with legendary rarities, scene atmosphere, “What if…?” and a chronicle. Nothing is added to the chat, and the AI never decides for you.",t:["Story","Directing"]}
  ],
  thTitle:"Themes",thLead:"Ready-made interface themes for TavoAI.",
  themes:[
    {n:"9 Themes",img:"themes/9themes_en.jpg",f:"themes/9themes.zip",d:"A set of nine gentle themes for TavoAI — from Blush Milk to Midnight Plum. All in one archive.",t:["Themes","9 in 1"]},
    {n:"Dark Sakura",img:"themes/darksakura.jpg",multi:[{l:"iOS",f:"themes/darksakura-ios.thm"},{l:"Android",f:"themes/darksakura-android.thm"}],d:"A dark theme with sakura: deep tones and pink accents. Separate files for iOS and Android.",t:["Dark","Sakura"]}
  ],
  bugQ:"Something isn't working?",bugBtn:"🐛 Report a bug",
  custQ:"Want something made for you?",custBtn:"♡ Custom TavoAI",
  stTitle:"NovelAI Styles",stLead:"Ready-made style presets for image generation.",styleWord:"Style",copy:"Copy",copied:"Copied ✓",slides:["Fireworks","Autumn","Night"],
  styles:[
    {e:"💎",n:"Facets",d:"Faceted style: clean lines, highlights and jewel-like character detail.",t:["Portrait"]},
    {e:"🏡",n:"Estate",d:"Estates and interiors: cozy manors, gardens and atmospheric locations.",t:["Locations"]},
    {e:"💗",n:"Love Lab",d:"Romantic scenes: warm light, tender emotions, couple compositions.",t:["Romance"]},
    {e:"👁",n:"Observer",d:"An outside gaze: cinematic angles and observational scenes.",t:["Scene"]}
  ],
  footer:"Made with ♥ · FloryHibi"
},
zh:{
  nav:["预设","插件","主题","NovelAI 风格","指南","关于"],
  badge:"TavoAI 专用 · @floryhibi 制作",
  title:"FloryHibi",
  sub:"我的 TavoAI 插件、主题与预设。",
  cta1:"♥ 预设",cta2:"插件",cta3:"NovelAI 风格",
  s1:"个预设",s2:"个插件",s3:"风格",
  pTitle:"预设",pLead:"适用于 TavoAI 的现成预设。",dl:"下载",dev:"开发中",
  presets:[
    {n:"PeonySet 18+ v2",img:"peonyset.jpg",langs:[{l:"RUS",f:["peonyset-18-v2.json","peonyset-regex-naistera.zip","peonyset-regex-yandex.zip"]},{l:"ENG",f:["peonyset-en.json","peonyset-regex-en.zip"]},{l:"ZHN"}],d:"成人角色扮演旗舰预设：深刻的角色、生动的对话、细腻的场景控制。内含预设文件与两个正则文件（NAISTERA 与 Yandex）。",t:["Claude","18+"]},
    {n:"Jade Immortal",img:"jade.jpg",langs:[{l:"RUS",f:["jade-ru.json","jade-pics-ru.zip","jade-text-ru.zip"]},{l:"ENG",f:["jade-en.json","jade-pics-en.zip","jade-text-en.zip"]},{l:"ZHN",f:["jade-zh.json","jade-pics-zh.zip","jade-text-zh.zip"]}],d:"仙侠风格预设：修仙、长生、古老宗门与诗意的世界描写。",t:["奇幻","仙侠"]},
    {n:"Fantasy Engine",img:"fantasy.jpg",dev:true,d:"通用奇幻引擎：魔法体系、任务、世界机制与冒险。",t:["奇幻","系统化"]}
  ],
  plTitle:"插件",plLead:"为聊天添加新机制的扩展。",
  plugins:[
    {n:"口味",img:"facets.jpg",f:"facets.tpg",d:"为角色、用户或 NPC 生成「口味与习惯档案」：美食、音乐、工作、生活方式。由当前聊天模型撰写档案，并拆分为带关键词的设定集条目，仅在话题出现时触发。",t:["机制","设定集"]},
    {n:"家园",img:"estate.jpg",f:"estate.tpg",d:"按房间生成「角色之家」设定集：厨房、卧室、花园及任意区域。每条记录附带用于生成房间图片的 [Visual] 标签块，仅在提及该地点时触发。",t:["世界","设定集"]},
    {n:"恋爱实验室",img:"lovelab.jpg",f:"love-lab.tpg",d:"探索你们羁绊的小实验室：契合度、关系动态与故事的隐藏面。数字命理、命运矩阵、占星与塔罗，尽在一个面板中。",t:["关系"]},
    {n:"观察者",img:"observer.jpg",f:"observer.tpg",d:"RP 的第三方元评论者：带动画头像的短评，绝不干预故事。三种模式——侦探寻找矛盾、毒舌闺蜜站在你这边、观众情绪化反应。",t:["记忆","评论"]},
    {n:"繁衍系统",img:"reproductive.jpg",f:"reproductive-system.tpg",d:"详细的经期与怀孕追踪器：周期阶段与日历、考虑避孕措施的掷骰受孕机制、4–100 周孕期、并发症与分娩。出生的孩子自动进入家庭模块，可设置姓名、性格与外貌。",t:["模拟"]},
    {n:"Supernatural Codex",img:"supernatural.jpg",f:"supernatural-codex.tpg",d:"超自然生物的活体魔典：百科全书、角色档案、能力、弱点、传承与编年史。可扫描角色卡并在 RP 中自动识别生物。",t:["设定","奇幻"]},
    {n:"Organizer",img:"organizer.png",f:"organizer.tpg",d:"Tavo 资料库的文件管理器：任意嵌套文件夹、颜色标记、图标、标签、收藏、关联、智能文件夹和搜索——不会重命名或复制原始对象。",t:["整理","资料库"]},
    {n:"Phone",img:"phone.jpg",f:"phone.tpg",d:"角色扮演中的完整 iPhone：与角色发消息和通话、Instagram、Twitter、Discord、直播、支持 Apple Pay 的银行、商店、按场景推荐的音乐，以及与角色对战的游戏。你在手机上做的一切，AI 都会知道。",t:["智能手机","社交"]},
    {n:"Prompt Debugger",img:"prompt-debugger.jpg",f:"prompt-debugger.tpg",d:"显示每次生成消耗多少 token，以及提示词由哪些部分组成：预设、角色卡、人设、触发的世界书条目、聊天记录和模型回复。上下文占用、按您的价格计算费用、聊天累计，以及发送前的“立即估算”按钮。",t:["Token","调试"]},
    {n:"Event Calendar",img:"event-calendar.jpg",f:"event-calendar.tpg",d:"让 AI 记住日程和日期：课程、工作班次、训练、日常作息、生日和节日。追踪剧情时间、防止时间被“压缩”，根据角色扮演本身生成每周课表，发送隐藏提醒，并提前为节日布置环境、准备礼物。月视图、日时间线、待办和日记。",t:["日历","日程"]},
    {n:"Persona Atelier",img:"persona-atelier.jpg",f:"persona-atelier.tpg",d:"角色设计工作室：点选药丸形选项来打造角色或你自己的人设，无需面对空白表单，AI 会把你的选择写成连贯、详细的档案。现成原型、10 个简短步骤、情绪板、分段编辑器，可直接在 Tavo 中创建或导出 Character Card V3。",t:["角色","人设"]},
    {n:"Scene Director",img:"scene-director.jpg",f:"scene-director.tpg",d:"角色扮演的 AI 导演：角色回复下方的细长导演条帮你掌控剧情。16 个指令与为你的故事定制的推荐、剧情线、带传说稀有度的“命运”随机事件、场景氛围、“如果……？”和编年史。聊天中不会添加任何内容，AI 绝不替你做决定。",t:["剧情","导演"]}
  ],
  thTitle:"主题",thLead:"适用于 TavoAI 的现成界面主题。",
  themes:[
    {n:"9 款主题",img:"themes/9themes_zh.jpg",f:"themes/9themes.zip",d:"九款温柔主题的合集——从 Blush Milk 到 Midnight Plum，一个压缩包全部带走。",t:["主题","9合1"]},
    {n:"Dark Sakura",img:"themes/darksakura.jpg",multi:[{l:"iOS",f:"themes/darksakura-ios.thm"},{l:"Android",f:"themes/darksakura-android.thm"}],d:"深色樱花主题：浓郁的色调与粉色点缀。iOS 与 Android 分开下载。",t:["深色","樱花"]}
  ],
  bugQ:"Something isn't working?",bugBtn:"🐛 反馈问题",
  custQ:"Want something made for you?",custBtn:"♡ Custom TavoAI",
  stTitle:"NovelAI 风格",stLead:"用于图像生成的现成风格预设。",styleWord:"风格",copy:"复制",copied:"已复制 ✓",slides:["烟花","秋天","夜晚"],
  styles:[
    {e:"💎",n:"Facets",d:"切面风格：干净线条、高光与宝石般的角色细节。",t:["肖像"]},
    {e:"🏡",n:"Estate",d:"庄园与室内：温馨宅邸、花园与氛围场景。",t:["场景"]},
    {e:"💗",n:"Love Lab",d:"浪漫场景：温暖光线、细腻情感、双人构图。",t:["浪漫"]},
    {e:"👁",n:"Observer",d:"旁观者视角：电影感机位与观察式场景。",t:["场景"]}
  ],
  footer:"用 ♥ 制作 · FloryHibi"
}};