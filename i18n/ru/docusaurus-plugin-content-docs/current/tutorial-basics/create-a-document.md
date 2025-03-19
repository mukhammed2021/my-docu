---
sidebar_position: 2
---

# Создать документ

Документы - это **группы страниц**, соединенные между собой:

- **боковая панель**
- **предыдущая/следующая навигация**
- **версионирование**

## Создайте свой первый документ

Создайте файл в формате Markdown по адресу `docs/hello.md`:

```md title="docs/hello.md"
# Привет

Это мой **первый документ Docusaurus**!
```

Новый документ теперь доступен по адресу [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Настройте боковую панель

Docusaurus автоматически **создает боковую панель** из папки `docs`.

Добавьте метаданные, чтобы настроить метку и положение боковой панели:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Привет!'
sidebar_position: 3
---

# Привет

Это мой **первый документ Docusaurus**!
```

Также можно создать боковую панель в явном виде в файле `sidebars.js`:

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```
