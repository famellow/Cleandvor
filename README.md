# CleanDvor

Веб-сайт для компании CleanDvor — профессиональное благоустройство территории в Москве.

## Технологии

Проект построен с использованием:

- **Vite** — быстрый сборщик и dev-сервер
- **TypeScript** — типизированный JavaScript
- **React** — библиотека для создания пользовательских интерфейсов
- **shadcn-ui** — компоненты UI
- **Tailwind CSS** — утилитарный CSS фреймворк
- **React Router** — маршрутизация

## Установка и запуск

### Требования

- Node.js (рекомендуется установить через [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm

### Шаги для запуска

1. Клонируйте репозиторий:
```bash
git clone https://github.com/famellow/Cleandvor.git
cd Cleandvor
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите dev-сервер:
```bash
npm run dev
```

Приложение будет доступно по адресу `http://localhost:8080`

## Доступные команды

- `npm run dev` — запуск dev-сервера с hot-reload
- `npm run build` — сборка production версии
- `npm run preview` — предпросмотр production сборки
- `npm run lint` — проверка кода линтером
- `npm test` — запуск тестов
- `npm run test:watch` — запуск тестов в watch режиме

## Деплой

Проект настроен для автоматического деплоя на GitHub Pages через GitHub Actions.

После push в ветку `main` автоматически запускается сборка и деплой.

Сайт будет доступен по адресу: `https://famellow.github.io/Cleandvor/`

## Структура проекта

```
Cleandvor/
├── public/          # Статические файлы
├── src/
│   ├── components/ # React компоненты
│   ├── pages/      # Страницы приложения
│   ├── hooks/      # Кастомные хуки
│   ├── lib/        # Утилиты
│   └── App.tsx     # Главный компонент
├── .github/        # GitHub Actions workflows
└── vite.config.ts  # Конфигурация Vite
```
