# 🏢 Деловой Парк — Официальный сайт

**Бизнес-центр класса 5★ в Селятино, Московская область**

[![Deploy to Cloudflare Pages](https://github.com/aylisrg/Delovoy-Park.ru/actions/workflows/deploy.yml/badge.svg)](https://github.com/aylisrg/Delovoy-Park.ru/actions/workflows/deploy.yml)

## Технологии

- **Next.js 14** (App Router) со статическим экспортом
- **TypeScript**
- **Tailwind CSS**
- Деплой: **Cloudflare Pages** через **GitHub Actions**

## Запуск разработки

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

## Сборка

```bash
npm run build
```

Статические файлы будут в директории `out/`

## Структура проекта

```
/
├── .github/workflows/deploy.yml  # CI/CD деплой на Cloudflare Pages
├── public/
│   ├── images/                   # Изображения (см. IMAGES_REGISTRY.md)
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Корневой layout с SEO мета-тегами
│   │   ├── page.tsx              # Главная страница
│   │   ├── about/page.tsx        # О нас
│   │   ├── waitlist/page.tsx     # Лист ожидания
│   │   └── contacts/page.tsx     # Контакты
│   ├── components/
│   │   ├── Header.tsx            # Шапка сайта
│   │   ├── Footer.tsx            # Подвал сайта
│   │   ├── Hero.tsx              # Hero-блок главной страницы
│   │   ├── SoldOutBanner.tsx     # Баннер SOLD OUT
│   │   ├── WaitListForm.tsx      # Форма записи в лист ожидания
│   │   ├── Advantages.tsx        # Преимущества БЦ
│   │   ├── Ratings.tsx           # Рейтинги (Яндекс, Google, 2ГИС)
│   │   ├── NewsPreview.tsx       # Превью новостей
│   │   ├── Map.tsx               # Яндекс.Карта
│   │   ├── ContactForm.tsx       # Форма обратной связи
│   │   └── Gallery.tsx           # Фотогалерея
│   └── data/
│       └── tenants.json          # Данные арендаторов (Phase 2)
├── IMAGES_REGISTRY.md            # Реестр изображений
├── next.config.mjs               # Конфигурация Next.js
├── tailwind.config.ts            # Конфигурация Tailwind CSS
└── tsconfig.json
```

## Страницы (Фаза 1)

| Страница | URL | Описание |
|----------|-----|----------|
| Главная | `/` | Hero, SOLD OUT, Wait List форма, преимущества, рейтинги, новости, карта |
| О нас | `/about` | История, ценности, галерея, ключевые метрики |
| Лист ожидания | `/waitlist` | Форма записи, FAQ |
| Контакты | `/contacts` | Адрес, телефон, форма, карта |

## Деплой

### Настройка Cloudflare Pages

1. Создайте проект в [Cloudflare Pages](https://pages.cloudflare.com/)
2. Добавьте секреты в GitHub репозиторий:
   - `CLOUDFLARE_API_TOKEN` — API токен Cloudflare
   - `CLOUDFLARE_ACCOUNT_ID` — ID аккаунта Cloudflare
3. Push в `main` — автоматически задеплоится

### Настройка форм

Замените `YOUR_FORM_ID` в `WaitListForm.tsx` и `ContactForm.tsx` на реальный ID формы [Formspree](https://formspree.io/).

## SEO

- Мета-теги и Open Graph на каждой странице
- Schema.org LocalBusiness разметка
- `sitemap.xml` и `robots.txt`
- Семантическая HTML-вёрстка

## Следующие фазы

- **Фаза 2**: Каталог арендаторов `/tenants`, Новости `/news`
- **Фаза 3**: Бронирование беседок `/gazebos`, Инициативы `/initiatives`
- **Фаза 4**: Мероприятия `/events`, Коммьюнити `/community`

---

© 2025 Деловой Парк. Все права защищены.
