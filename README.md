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

### Кастомный домен

Для настройки кастомного домена (например, `cleandvor.ru`) см. подробную инструкцию в файле [CUSTOM_DOMAIN_SETUP.md](./CUSTOM_DOMAIN_SETUP.md)

**Быстрый старт:**
1. Купите домен (рекомендуется Cloudflare Registrar — самый дешевый вариант)
2. Настройте DNS записи (A записи для apex domain или CNAME для www)
3. Добавьте домен в GitHub Pages (Settings → Pages → Custom domain)
4. Обновите файл `public/CNAME` с вашим доменом
5. Закоммитьте и запушьте изменения

Проект автоматически определит наличие кастомного домена и использует правильную конфигурацию.

### Настройка формы обратной связи

Форма на сайте отправляет данные в Google Sheets. Для настройки:

1. См. подробную инструкцию в файле [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md)
2. Скопируйте код из файла `google-apps-script.js` в Google Apps Script
3. Разверните скрипт как веб-приложение
4. Обновите URL в `src/components/ContactSection.tsx` или используйте переменную окружения `VITE_GOOGLE_SCRIPT_URL`

**Быстрый старт:**
- Создайте Google Таблицу с заголовками: Дата и время | Имя | Телефон | Сообщение
- Создайте Google Apps Script и вставьте код из `google-apps-script.js`
- Разверните как веб-приложение с доступом "Все"
- Скопируйте URL и обновите в коде

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
