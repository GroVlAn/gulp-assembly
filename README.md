# 🚀 Frontend Build System (Gulp + Webpack)

Универсальная система сборки фронтенд-проекта на основе **Gulp**, включающая обработку HTML, JavaScript, TypeScript, SCSS и изображений.
Проект также использует **Webpack** для сборки модулей и **Babel** для поддержки современных возможностей JavaScript.

## 📦 Основные возможности

- Сборка и обработка **HTML**
- Компиляция **SCSS → CSS**
- Сборка **JavaScript и TypeScript**
- Транспиляция **JavaScript через Babel**
- Бандлинг модулей через **Webpack**
- Оптимизация **изображений**
- Минификация **CSS и JS**
- Автоматическое обновление страницы (при использовании dev-сервера)
- Отслеживание изменений файлов (**watch mode**)

---

# 🛠 Технологии

Проект использует следующие инструменты:

- **Gulp** — task-runner для автоматизации сборки
- **Webpack** — сборка модулей JavaScript
- **Babel** — транспиляция современного JavaScript
- **TypeScript** — типизированный JavaScript
- **SCSS (Sass)** — расширенный синтаксис CSS
- **Autoprefixer** — добавление вендорных префиксов
- **ImageMin** — оптимизация изображений

---

```
📂 Структура проекта
project
│
├── gulp
│ ├── core
│ │ ├── config.js
│ │ └── paths.js
│ │
│ ├── tasks
│ │ ├── clean.js
│ │ ├── html.js
│ │ ├── img.js
│ │ ├── javascript.js
│ │ ├── server.js
│ │ └── styles.js
│ │
│ ├── dev.js # задачи для разработки
│ └── prod.js # задачи для production сборки
│
├── src
│ ├── fonts
│ ├── img
│ ├── js
│ ├── scss
│ ├── svg
│ └── index.html
│
├── .babelrc
├── gulpfile.mjs
├── package.json
├── tsconfig.json
└── webpack.config.js
```

# ⚙️ Установка

Клонируйте репозиторий и установите зависимости:

```bash
git clone https://github.com/your-repo/project.git
cd project
yarn install
```

---

# ▶️ Запуск проекта

### Development режим

```bash
gulp
```

Запускает:

- сборку проекта
- watcher файлов
- локальный dev-сервер

---

### Production сборка

```bash
gulp prod
```

Создаёт оптимизированную production-сборку в папке **build**.

---

# 📋 Основные Gulp задачи

| Задача    | Описание                     |
| --------- | ---------------------------- |
| `html`    | Обработка и копирование HTML |
| `styles`  | Компиляция SCSS в CSS        |
| `scripts` | Сборка JS/TS через Webpack   |
| `images`  | Оптимизация изображений      |
| `watch`   | Отслеживание изменений       |
| `build`   | Полная сборка проекта        |

---
