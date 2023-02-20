# UiInputDate

🔥 _Задача повышенной сложности_\
💼 _Часть проекта_

<!--start_statement-->

В HTML есть особые типы элементов форм для ввода даты и времени. В тоже время значение `value` у полей ввода всегда
строка, даже если оно имеет `type="number"` или `type="date"`. Работать со строковым значением `value` в дальнейшем
может быть неудобно, особенно для поля ввода даты и времени, формат которых сильно варьируется.

Требуется разработать компонент `UiInputDate`, оборачивающий `UiInput` для выбора даты и/или времени:

- Новые входные параметры компонента:
  - `type` - тип поля ввода в соответствии с `type` элемента `input` (`'date' | 'time' | 'datetime-local'`), по
    умолчанию `date`;
  - `modelValue` - значение поля ввода с **числовым представлением даты** или `null` при отсутствии значения;
  - `step` - соответствует атрибуту [step](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/step);
- Значение непосредственно поля ввода должно определяться значением модели и соответствовать требуемому формату полей
  [date](https://developer.mozilla.org/en/docs/Web/HTML/Element/input/date),
  [time](https://developer.mozilla.org/en/docs/Web/HTML/Element/input/time),
  [datetime-local](https://developer.mozilla.org/en/docs/Web/HTML/Element/input/datetime-local).

_Примечания и подсказки:_

- Нативное поле ввода ожидает дату по UTC, а не в часовом поясе пользователя;
- Можно не парсить строковое значение поля ввода самостоятельно, а использовать свойство полей ввода даты и времени:
  [valueAsNumber](https://developer.mozilla.org/en/docs/Web/API/HTMLInputElement).

<img src="https://i.imgur.com/bsbyR6n.gif" alt="Example" style="max-width: 100%" />

<!--end_statement-->

---

### Инструкция

📝 Для решения задачи отредактируйте файл: `components/UiInputDate.vue`.

🚀 Команда запуска для ручного тестирования: `npm run serve`;\
приложение будет доступно на [http://localhost:8080/06-wrappers/06-UiInputDate/](http://localhost:8080/06-wrappers/06-UiInputDate/).

✅ Доступно автоматическое тестирование: `npm test UiInputDate`.
