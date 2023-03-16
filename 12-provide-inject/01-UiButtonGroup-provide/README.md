# UiButtonGroup через provide/inject

👷🏻 _Задача нормальной сложности_\
💼 _Часть проекта_

<!--start_statement-->

## Задача

Требуется обновить реализацию компонента **UiButtonGroup** - компонента группы кнопок. **В этот раз задача должна быть
решена через `provide/inject`, а не `$parent`.**

Повторно реализуйте два компонента:

**UiButtonGroup** - компонент группы кнопок:

- Единственный обязательный входной параметр - модель `modelValue` со значением выбранной кнопки;
- Компонент порождает событие обновления модели;
- Непосредственно кнопки в группу передаются через слот по умолчанию компонентами **UiButtonGroupItem**.

**UiButtonGroupItem** - компонент кнопки в группе **UiButtonGroup**:

- Единственный обязательный параметр `value` - значение кнопки;
- Слот по умолчанию - содержимое кнопки;
- Кнопка должна иметь класс `button-group__item_active`, если её значение `value` совпадает со значением модели
  **UiButtonGroup**;
- Клик по кнопке должен инициировать обновления модели **UiButtonGroup**.

```html
<UiButtonGroup v-model="participation">
  <UiButtonGroupItem value="">Все</UiButtonGroupItem>
  <UiButtonGroupItem value="attending">Участие</UiButtonGroupItem>
  <UiButtonGroupItem value="organizing">Организация</UiButtonGroupItem>
</UiButtonGroup>
```

<img src="https://i.imgur.com/gTHgyeE.gif" alt="Example" />
<!--end_statement-->

---

### Инструкция

📝 Для решения задачи отредактируйте файлы: `components/UiButtonGroup.vue`, `components/UiButtonGroupItem.vue`.

🚀 Команда запуска для ручного тестирования: `npm run serve`;\
приложение будет доступно на [http://localhost:8080/12-provide-inject/01-UiButtonGroup-provide/](http://localhost:8080/12-provide-inject/01-UiButtonGroup-provide/).

✅ Доступно автоматическое тестирование: `npm test UiButtonGroup-provide`.
