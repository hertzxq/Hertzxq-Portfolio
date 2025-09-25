# HertzxqPortfolio — Мое персональное портфолио

Адаптивный сайт‑портфолио в тёмной теме с плавными анимациями и аккуратными карточками проектов.

## 🔗 Демо

Посмотрите живую версию — там лучше всего видно анимации, интерактив и навигацию:

➡️ Открыть: [hertzxq-portfolio.vercel.app](https://hertzxq-portfolio.vercel.app/)


## ✨ Особенности

- Современный дизайн с градиентами и неоновыми акцентами
- Плавные анимации (Framer Motion)
- Полная адаптивность под мобильные и десктоп
- Лёгкая кастомизация контента через компоненты React

## 🛠️ Технологии

- React 18
- Framer Motion
- React Icons
- CSS3, HTML5

## 📦 Установка и запуск

1. Клонировать репозиторий
```bash
git clone https://github.com/hertzxq/mySitePortfolio.git
cd mySitePortfolio
```

2. Установить зависимости
```bash
npm install
```

3. Запустить проект
```bash
npm start
```

Откройте http://localhost:3000

## ⚙️ Кастомизация

Правьте тексты и ссылки в компонентах:
- `src/components/Hero.js`
- `src/components/About.js`
- `src/components/Skills.js`
- `src/components/Projects.js`
- `src/components/Contact.js`
- `src/components/Navbar.js`

Цвета и отступы — в соответствующих `*.css`. Базовые акценты:
- Зелёный: `#00ff88`
- Голубой: `#00ccff`
- Фон: `#0f0f0f` → `#1a1a1a`

## 🗂️ Структура

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

Netlify: build `npm run build`, директория `build`.

Vercel: импорт репозитория, автодеплой при push в `main`.

Онлайн: [hertzxq-portfolio.vercel.app](https://hertzxq-portfolio.vercel.app/)

## 📄 Лицензия

MIT License

## 💬 Контакты

Открывайте Issue или пишите автору: `https://github.com/hertzxq`
