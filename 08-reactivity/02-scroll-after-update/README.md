# Скроллинг после обновления

👷🏻 _Задача нормальной сложности_\
📚 _Закрепление материала_

<!--start_statement-->

Компонент `MiniMessenger` реализуется маленький "мессенджер": выводит список сообщений и форму добавления нового
сообщения. Мессенджер фиксированный по размеру, а новые сообщения добавляются в конец.

Требуется изменить компонент `MiniMessenger` так, чтобы после добавления "отправленного" сообщения список автоматически
прокручивался вниз.

<details>
<summary>Подсказки</summary>

1. Используйте [`template refs`](https://vuejs.org/guide/essentials/template-refs.html) для обращения к DOM элементу и
   непосредственно прокрутки.
2. Используйте [`nextTick`](https://vuejs.org/api/general.html#nexttick) для прокрутки уже после обновления DOM после
добавления нового сообщения.
</details>

<img src="https://i.imgur.com/RP8kNJL.gif" alt="Example" />

<!--end_statement-->

---

### Инструкция

📝 Для решения задачи отредактируйте файл: `components/MiniMessenger.vue`.

🚀 Команда запуска для ручного тестирования: `npm run serve`;\
приложение будет доступно на [http://localhost:8080/08-reactivity/02-scroll-after-update/](http://localhost:8080/08-reactivity/02-scroll-after-update/).

💬 Задача проверяется вручную на Code Review.
