# TemplateRenderer

🔥 _Задача повышенной сложности_\
📚 _Закрепление материала_

<!--start_statement-->

Требуется реализовать компонент для динамического рендеринга шаблона в других компонентах.

Входные параметры:

- `template` - обязательный строковый параметр с шаблоном, который требуется отрендерить;
- `bindings` - объект с данными, передаваемыми в компонент;
- `components` - объект или массив для регистрации компонентов, используемых в шаблоне `template`, аналогично обычной
  опции `components`.

```html
<template-renderer template="<div>{{ foo }}</div>" :bindings="{ foo: 'bar' }" />

<!-- Рендерится как -->

<div>bar</div>
```

<img src="https://i.imgur.com/33Rjdyz.gif" alt="Example" />

Для решения задачи рекомендуется прочитать подразделы по этой теме: "7. Компиляция шаблона" и "8. Включение
runtime-компиляции".

<!--end_statement-->

---

### Инструкция

📝 Для решения задачи отредактируйте файл: `components/TemplateRenderer.vue`.

🚀 Команда запуска для ручного тестирования: `npm run serve`;\
приложение будет доступно на [http://localhost:8080/09-rendering/02-TemplateRenderer/](http://localhost:8080/09-rendering/02-TemplateRenderer/).

✅ Доступно автоматическое тестирование: `npm test TemplateRenderer`.
