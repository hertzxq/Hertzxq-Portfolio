# Портфолио Python Backend Developer

Адаптивный сайт‑портфолио в темной теме с плавными анимациями. Сфокусирован на Python backend, автоматизации и DevOps‑инструментах.

## ✨ Возможности

- **Чистый тёмный UI**: градиенты, неоновые акценты, аккуратные карточки
- **Плавные анимации**: Framer Motion для появления и hover‑эффектов
- **Адаптивность**: смотрится одинаково хорошо на desktop и мобильных
- **Легко настраивается**: весь контент вынесен в компоненты React

## 🛠️ Технологический стек

- React 18
- Framer Motion (анимации)
- React Icons
- CSS3 (модульные стили компонентов)

## 📌 Разделы сайта

- `Hero` — интро и быстрые CTA
- `About` — кратко о профиле и статистика
- `Skills` — навыки и инструменты (Python, FastAPI/Flask, Docker, GitHub Actions и др.)
- `Projects` — проекты с ссылками на GitHub/демо
- `Contact` — контакты и быстрые ссылки

## 📦 Установка и запуск

Требования: Node.js 18+ и npm.

1) Клонирование
```bash
git clone https://github.com/hertzxq/mySitePortfolio.git
cd mySitePortfolio
```

2) Установка зависимостей
```bash
npm install
```

3) Локальный запуск
```bash
npm start
```

Откройте `http://localhost:3000`.

## ⚙️ Настройка контента

Отредактируйте тексты и ссылки в компонентах:
- `src/components/Hero.js` — приветствие и социальные ссылки
- `src/components/About.js` — описание профиля и метрики
- `src/components/Skills.js` — навыки и инструменты
- `src/components/Projects.js` — список проектов (GitHub/демо)
- `src/components/Contact.js` — контакты
- `src/components/Navbar.js` — пункты меню

Цвета/отступы — в соответствующих `*.css` рядом с компонентами. Базовые акценты:
- Зеленый: `#00ff88`
- Голубой: `#00ccff`
- Фон: от `#0f0f0f` до `#1a1a1a`

## 🗂️ Структура проекта

```
src/
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── About.js
│   ├── Skills.js
│   ├── Projects.js
│   ├── Contact.js
│   └── *.css
├── App.js
├── index.js
└── index.css
```

## 🚀 Деплой

### Netlify
1. Подключите репозиторий
2. Build команда: `npm run build`
3. Папка билда: `build`

### Vercel
1. Импортируйте репозиторий
2. Deploy запускается автоматически при push в `main`

## 📄 Лицензия

MIT — свободно используйте и модифицируйте.

## 🙌 Обратная связь

Идеи и предложения — через Issues.