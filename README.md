# Проект The Сard game
- Игра доступна по [ссылке](https://daria-bnn.github.io/The-Card-Game/)

### Описание

**Логика:**
Игра The card game заключается в том, что пользователь должен найти все пары карт из предложенного массива.

-   Игра не требует регистрации.
-   Пользователь может выбрать один из трех уровней сложностей игры. В зависимости от выбранного уровня пользователю будет предложено определенное колличество карт.
-   Для каждого уровня сложности пользователю также предоставляется определенное колличество попыток на ошибку.
-   Если пользователь находит все пары карт, то у него отображается экран, на котором будет сообщение о победе, а также время затраченное на игру.
-   Если пользователь выбирает карточки, которые не совпадают между собой, то у него уменьшается колличество попыток и предоставляется возможность изменить ход. По истечению попыток пользователю выводится сообщение о проигрыше и информация о затраченном времени на игру.

### Технологии

_JavaScript, TypeScript, SCSS, Webpack_

### Игра реализована как SPA (Single page application).

### В проекте настроено рабочее окружение и настроен единый стиль кодирования:
#### Использованы следующие линтеры (для TS и Css кода): 
- Prettier
- Stylint
- Eslint

### Особенности

- В проект интегрирован ```TypeScript```.
- Входные аргументы функций и методов объектов затипизированы
- В проекте не используется тип ```any```
- Перед созданием коммита автоматичсекие запускается проверка кода (с помощью ```husky```)

### Как запустить проект

-   Клонировать репозиторий и перейти в него в командной строке.

```Bash
git clone <url-адрес репозитория на GitHub>

cd <название папки>
```

-   Установить зависимости из файла package.json:

```Bash
npm i
```

-   Запустить проект:

```Bash
npm run start
```

Разработчик:
[Дарья](https://github.com/daria-bnn)


[![telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/dari_bnnn)
