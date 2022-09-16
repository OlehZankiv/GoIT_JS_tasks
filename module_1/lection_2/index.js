//
//
//
//
//
//
//
//
//

// null > 0; null < 0; -> false
// null == 0; -> false;
// null >= 0; null <= 0;
// null >= 0; null < 0 (false -> true);

// x >= 10; -> true
// 1) x > 10 -> false; x === 10 -> false;
// x < 10 -> false

// console.log(null >= 0);

// KAHOOT

// && -> зупиняється на першій брехні(false) або останній правді(true)
// || -> зупиняється на першій правді(true) або останній брехні(false)

// const color = "Yellow";

// switch (color) {
//   case "Black":
//   case "Green":
//     console.log("Color is dark");
//     break;
//   case "Yellow":
//   case "White":
//   case "Orange":
//     console.log("Color is light");
//     break;
// }

// console.log(0 || "Mango");

// const status_ = "Old"; // 'Young' || 'Old'

// const isYoung = status_ === "Young";
// const isOld = status_ === "Old";

// const isGood = isYoung || isOld;

// const age = isGood ? 18 : 22;

// console.log(age);

//
//
//
//
//
//
//
//
//
//

// Модуль 1. Занятие 2. Ветвления. Циклы
// Example 1 - Ввод пользователя и ветвления
// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать:
// "Какое официальное название JavaScript?".
// Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!",
// в противном случае - "Не знаете? ECMAScript!"

// const answer = prompt("Яка офійна назва JavaScript?");

// const message = answer === "ECMAScript" ? "Вірно!" : "Не знаєте? ECMAScript!";

// alert(message);

// Example 2 - Отображение времени (if...else)
// Напиши скрипт для отображения часов и минут в консоли браузера в виде
// строки формата "14 ч. 26 мин.". Если значение переменной minutes равно 0,
// то выводи строку "14 ч.", без минут.

// const hours = 15;
// const minutes = 20;

// let timeString = `${hours} год.`;

// if (minutes > 0) {
//   timeString += ` ${minutes} хв.`;
// }

// console.log(timeString);

//
// Example 3 - Ветвеления
// Напиши скрипт, который выводит в консоль строку "Это положительное число",
// если в prompt пользователь ввел число больше нуля. Если был введен ноль, выводи в консоль строку "Это ноль". Если передали отрицательное число, в консоли должна быть строка "Это отрицательное число".

// const number = Number(prompt("Введіть число: "));

// let message; // false || true

// switch (true) {
//   case number === 0:
//     console.log("Це число нуль");
//     break;
//   case number > 0:
//     console.log("Число більше нуля");
//     break;
//   case number < 0:
//     console.log("Число менше нуля");
//     break;
//   default:
//     console.log("Це не число");
//     break;
// }

// if (number > 0) {
//   console.log("Число більше нуля");
// } else if (number === 0) {
//   console.log("Це число нуль");
// } else {
//   console.log("Число менше нуля");
// }

// Example 4 - Вложенные ветвления
// Напиши скрипт, который сравнивает числа в переменных a и b.
// Если оба значения больше 100, то выведи в консоль максимальное из них.
// В противном случае в консоли должна быть сумма значения b и числа 512.

// const a = 100;
// const b = 180;

// let result = b + 512;

// if (a > 100 && b > 100) {
//   if (a === b) {
//     result = b;
//   } else {
//     result = a > b ? a : b;
//   }
// }

// console.log(result);

// Example 5 - Форматирование ссылки (endsWith)
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
// Если нет, добавь в конец значения link этот символ. Используй конструкцию if...else.

// let link = "https://my-site.com/about";

// const correctString = link.endsWith("/"); // -> true || false

// if (!correctString) {
//   link += "/";
// }

// console.log(link);

// Example 6 - Форматирование ссылки (includes и логическое «И»)
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
// Если нет, добавь в конец значения link этот символ, но только в том случае,
// если в link есть подстрока "my-site". Используй конструкцию if...else.

// let link = "https://somesite.com/about";

// const isStringCorrect = link.endsWith("/") && link.includes("my-site"); // -> true || false

// if (!isStringCorrect) {
//   link += "/";
// }

// console.log(link);
// Example 7 - Форматирование ссылки (тернарный оператор)
// Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.
//
//
//
//
//
//
//
//
//
//
//
// let link = 'https://somesite.com/about';
// if (link.includes('my-site') && !link.endsWith('/')) {
//   link += '/';
// }
// console.log(link);

// Example 8 - if...else и логические операторы
// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от значения переменной hours.

// Если значение переменной hours:

// меньше 17, выводи строку "Pending"
// больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// больше 24 , выводи строку "Overdue"

// const hours = 30;

// if (hours < 17) {
//   console.log("Pending");
// } else if (hours >= 17 && hours <= 24) {
//   console.log("Expires");
// } else {
//   console.log("Overdue");
// }

// switch (true) {
//   case hours < 17:
//     console.log("Pending");
//     break;
//   case hours >= 17 && hours <= 24:
//     console.log("Expires");
//     break;
//   default:
//     console.log("Overdue");
//     break;
// }

// Example 9 - Дедлайн сдачи проекта (if...else)
// Напиши скрипт для отображения времени дедлайна сдачи проекта.
// Используй конструкцию if...else.

// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"

// const daysUntilDeadline = -10;

// let message;

// if (daysUntilDeadline < 0) {
//   message = "You are bad developer";
// } else {
//   switch (daysUntilDeadline) {
//     case 0:
//       message = "Today";
//       break;
//     case 1:
//       message = "Tomorrow";
//       break;
//     case 2:
//       message = "After Tomorrow";
//       break;
//     default:
//       message = "Date in the future";
//       break;
//   }
// }
// console.log(message);

// Example 10 - Дедлайн сдачи проекта (switch)
// Выполни рефакторинг кода задачи номер 5 используя switch.

// const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//   console.log('Сегодня');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Послезавтра');
// } else {
//   console.log('Дата в будущем');
// }

//
//
//
//
//
//
//
//           GOOD LUNK
//         IT IS FOR YOU
//
//
//
//
// Example 11 - Цикл for
// Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max,
// но только если число кратное 5.

// const max = 100;
// const min = 20;
// Example 12 - Ввод пользователя и ветвления
// Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.

// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:

// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"
