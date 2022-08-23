## Проект: Messenger

[![Netlify Status](https://api.netlify.com/api/v1/badges/8d2019e6-98b7-43d0-8cad-a2d86bee843b/deploy-status)](https://app.netlify.com/sites/mellifluous-bunny-f4b9fb/deploys)

* [Figma](https://www.figma.com/file/tT9Qv8j6OeVC2AmgQzXEG3/Chat?node-id=0%3A1)
* [Netlify](https://deploy--sprightly-kataifi-71c800.netlify.app)
* [Heroku](https://yandex-practicume-messanger.herokuapp.com)
* [Surge CDN](https://karmyskove.surge.sh/)
* [Swagger](https://ya-praktikum.tech/api/v2/swagger/#/)

### Описание

Cамостоятельная практическая работа, выполняемая в рамках обучения на курсе [Мидл фронтенд-разработчик](https://praktikum.yandex.ru/middle-frontend/) от [Яндекс.Практикум](https://praktikum.yandex.ru) на спринтах №1-3.

### Текущий этап

Спринт 3 из 4

### Спринт 1

https://github.com/Karmyshkov/middle.messenger.praktikum.yandex/pull/1

* Свёрстан макет приложения чат в Figma с использованием шаблонизатора Handlebars. [Ссылка на макет](https://www.figma.com/file/tT9Qv8j6OeVC2AmgQzXEG3/Chat?node-id=0%3A1)
* Настроена сборка с использованием [Parcel](https://parceljs.org/) и раздача статики сервером на Express
* Приложение автоматически деплоится на [Netlify](https://www.netlify.com/) из ветки `deploy`. [Ссылка на приложение](https://deploy--sprightly-kataifi-71c800.netlify.app)

### Спринт 2

https://github.com/Karmyshkov/middle.messenger.praktikum.yandex/pull/2

* Переход на TypeScript
* Реализация шины событий (`core/EventBus.ts`)
* Реализация компонента (`core/Block.ts`) с собственными пропсами, жизненным циклом и реактивным ререндером при изменении пропсов (использованы `Proxy`)
* Приложение переписано с учётом новых компонентов
* На основных формах реализована клиентская валидация
* Реализация аналога fetch для запросов к серверу (`utils/core/HTTPTransport.ts`)

### Спринт 3

https://github.com/Karmyshkov/middle.messenger.praktikum.yandex/pull/3

* Реализация клиентского роутера (`core/Route.ts`, `core/BrowseRouter.ts`)
* Добавлен слой `api`
* Добавлен слой `services`
* Реализация центрального хранилища (`Store.ts`)
* Использован `WebSocket` для сообщений чата
* Реализован виртуальный список для сообщений чата
* В приложении реализованы следующее возможности:
  * Регистрация
  * Логин
  * Выход
  * Обновление данных профиля
  * Изменение аватара
  * Создание и удаление чата
  * Поиск, добавление и удаление пользователей в чате
  * Отправка и получение текстовых сообщений

### Спринт 4

https://github.com/Karmyshkov/middle.messenger.praktikum.yandex/pull/5

* Написаны unit тесты для основных модулей (Jest)
* Переход с Parcel на Webpack
* Настройка образа Dockerfile
* Деплой контейнера на Heroku
* Настроен pre commit (Husky)
* Настройка Surge CDN
* Добавлена защита от DDoS

### Планы по доработке проекта

* Дополнить EventBus в Store
* Добавить HOC для STORE
* Оптимизировать кол-во рендеров (mapStateToProps реализовать)
* Добавить возможность отправлять файлы в чаты
* Реализовать возможность видеозвонков
* Поиск сообщений

### Сборка и запуск

Сборка проекта в Webpack

```bash
npm run build
```

Сборка и запуск статического сервера на Express:

```bash
npm run start
```

Запуск проекта в dev режиме

```bash
npm run dev
```

Eslinter

```bash
npm run lint:ts
```

Проверка на стилистические и типовые ошибки

```bash
npm run lint:style
```

Статический анализ css и postcss файлов

```bash
npm run docker
```

Запуск тестов

```bash
npm run test
```

### Технологии

- HTML
- CSS (PostCSS)
- TypeScript
- Parcel
- Webpack
- Handlebars
- Jest
- Express
- Netlify
- Heroku
- Surge CDN
