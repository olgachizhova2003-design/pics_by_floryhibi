# FloryHibi · TavoAI

[Открыть сайт](https://floryhibi.ru/) · [Плагины в Tavo Hub](https://hub.tavoai.dev/creators/HQ4G1?scene=plugin)

Плагины, пресеты, темы и материалы для TavoAI от **@floryhibi**. Сайт работает на GitHub Pages.

## Где находятся файлы

| Папка или файл | Содержимое |
| --- | --- |
| [downloads/plugins](downloads/plugins) | 14 актуальных плагинов `.tpg` с авторскими названиями, эмодзи и подписью `@floryhibi` |
| [downloads/presets](downloads/presets) | Пресеты и архивы регексов, отдельно для Jade Immortal и PeonySet |
| [downloads/themes](downloads/themes) | Темы `.thm` и архив с набором тем |
| [assets/previews](assets/previews) | Скриншоты для галерей плагинов и пресетов |
| [assets/images](assets/images) | Исходные обложки и ранее добавленные изображения; сохранены при уборке |
| [assets/guide](assets/guide) | Изображения для гайда |
| [assets/novelai](assets/novelai) | Примеры стилей NovelAI и соответствующие текстовые промпты |
| [assets/themes](assets/themes) | Обложки тем |
| [assets/js](assets/js) | Каталог, новости, список скриншотов и логика сайта |
| [assets/css](assets/css) | Оформление сайта |
| [index.html](index.html) | Главная страница |
| [guide.html](guide.html) | Гайд по TavoAI |
| [CNAME](CNAME) | Домен сайта; сохранять при обновлениях |
| [.nojekyll](.nojekyll) | Публикация статических файлов без обработки Jekyll |

## Версии плагинов

Актуальность набора проверена **21 ноября 2026 года**.

| Плагин | Версия |
| --- | --- |
| Persona Atelier | 1.5.0 |
| ProsePolisher | 1.0.0 |
| Supernatural Codex | 1.7.2 |
| Facets | 1.3.1 |
| Scene Director | 2.1.1 |
| Estate | 1.3.1 |
| Observer | 2.4.0 |
| Love Lab | 1.8.1 |
| Recall | 1.2.2 |
| Organizer | 1.1.0 |
| Event Calendar | 1.6.1 |
| Phone | 1.42.0 |
| Reproductive System | 4.0.0 |
| Prompt Debugger | 1.4.1 |

## Как обновить сайт

1. Заменить нужный пакет в `downloads/plugins`, сохранив его авторское имя. В этой папке должна оставаться одна актуальная копия каждого плагина.
2. В `assets/js/catalog-data.js` обновить версию в `pluginDownloads`. Если имя файла изменилось, обновить там же поле `file`. Короткие ключи вида `phone.tpg` служат идентификаторами каталога; это не дополнительные файлы.
3. Описания на русском, английском и китайском находятся в `assets/js/catalog-data.js`. Новости с датами — в `assets/js/news-data.js`.
4. Скриншоты добавлять в `assets/previews`, а их имена — в `assets/js/preview-images.js`.
5. В `index.html` изменить значение `site-release` и такой же параметр `v` в ссылках на CSS и скрипты, чтобы посетители получили свежие файлы.
6. После публикации проверить скачивания и галереи на [floryhibi.ru](https://floryhibi.ru/).

Короткие дубликаты пакетов из корня удалены. Все ссылки текущего сайта ведут на файлы в `downloads`; старые внешние ссылки на перемещённые файлы нужно заменить новыми.

Авторство оригинальных расширений и условия лицензий сохранены внутри соответствующих пакетов и в описаниях сайта.
