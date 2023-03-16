# ProgressPlugin

👷🏻 _Задача нормальной сложности_\
💼 _Часть проекта_

<!--start_statement-->

В приложении реализован компонент `TheTopProgressBar`, запускающий имитацию полосы загрузки в верхней части странице.
Компонент имеет следующие публичные методы:

- `start(key)` - запускает имитацию загрузки с ключом `key`
- `finish(key)` - завершает имитацию загрузки с ключом `key`
- `fail()` - завершает неуспешно все имитации загрузки

Ключ `key` используется для индикации процесса. Так можно запустить индикацию для нескольких независимых процессов так,
чтобы завершение одного не приводило к завершению общей индикации.

Особенно удобно такую индикацию использовать в SPA приложении, когда данные запрашиваются в `guard-е`
[до перехода](https://router.vuejs.org/guide/advanced/data-fetching.html#fetching-before-navigation) в роутере.

Требуется превратить этот компонент в плагин.

Реализуйте функцию `createProgress({ container, router })` создания экземпляра прогресс бара:

- Функция должна создать экземпляр `TheTopProgressBar` и смонтировать в элемент `container`
  - Если `container` не передан, то `createProgress` должна сама создать контейнер для монтирования
- Функция должна вернуть объект (далее `progress`) с методами `start`, `finish` и `fail` для работы с прогрессом
- `progress` должен быть устанавливаемым как Vue плагин для внедрения прогресса в приложение и внедрятся через `provide`
- Если передан `router`, прогресс должен интегрироваться с VueRouter:
  - Перед переходом на маршрут должен запускаться прогресс
  - После завершения перехода на маршрут должен завершаться прогресс
  - В случае ошибки при переходе должен прогресс должен завершаться неуспешно

Подключите плагин в `main.js`.

Будет полезным:

- https://router.vuejs.org/guide/advanced/navigation-guards.html
- https://router.vuejs.org/api/interfaces/Router.html#Methods-onError

### Ручное управление

<img src="https://i.imgur.com/gXfOz3y.gif" alt="Example" style="max-width: 100%" />

### Интеграция с VueRouter

<img src="https://i.imgur.com/wHTUs93.gif" alt="Example" style="max-width: 100%" />

<!--end_statement-->

---

### Инструкция

📝 Для решения задачи отредактируйте файлы: `plugins/progress/index.js`, `main.js`.

🚀 Команда запуска для ручного тестирования: `npm run serve`;\
приложение будет доступно на [http://localhost:8080/13-reusability/01-ProgressPlugin/](http://localhost:8080/13-reusability/01-ProgressPlugin/).

✅ Доступно автоматическое тестирование: `npm test progress`.
