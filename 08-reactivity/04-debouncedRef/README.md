# debouncedRef

👷🏻 _Задача нормальной сложности_\
📚 _Закрепление материала_

<!--start_statement-->

Требуется реализовать вспомогательную функцию реактивности `debouncedRef`, которая для реактивного значения `ref`
создаст новое реактивное значение, обновляемое при изменении исходного с
[`debounce`](https://lodash.com/docs/4.17.15#debounce).

- Параметры функции:
  - `source` - исходное реактивное значение `ref`
  - `wait` - число ms задержки в `debounce`
- Возвращаемое значение: новое реактивное значение `ref`, обновляемое при изменении `source` с `debounce`.

Глубокое отслеживание не требуется.

<img src="https://i.imgur.com/VsESBWJ.gif" alt="Example" />
<!--end_statement-->

---

### Инструкция

📝 Для решения задачи отредактируйте файл: `utils/debouncedRef.js`.

🚀 Команда запуска для ручного тестирования: `npm run serve`;\
приложение будет доступно на [http://localhost:8080/08-reactivity/04-debouncedRef/](http://localhost:8080/08-reactivity/04-debouncedRef/).

✅ Доступно автоматическое тестирование: `npm test debouncedRef`.
