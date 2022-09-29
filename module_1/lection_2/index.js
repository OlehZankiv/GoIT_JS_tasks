//
//
//
//
//
//
//
//

// && -> повертає першу брехню(false) або останню правду(true);
// || -> повертає першу правду(true) або останню брехню(false);

// console.log("&& -> ", 0 && 10);
// console.log("|| -> ", 0 || 10);

// && -> Boolean(0) -> false

// || -> Boolean(0) -> false; Boolean(10) -> true

// console.log(10 || 90);
// console.log(10 && 90);

// while(true) {
// чекай годину
// відправляй повідомлення

// якщо людина прочитала повідомлення, то більше не відправляти
// if (false) break;
// }

// const name = undefined;
// const surname = "LLL";

// const isAuth = false;
// const homePage = "HELLO";

// console.log(isAuth && homePage);

// Модуль 1. Занятие 2. Ветвления. Циклы

// =>
// Example 1 - Ввод пользователя и ветвления
// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать:
// "Какое официальное название JavaScript?". Если пользователь вводит ECMAScript,
// то показывай alert со строкой "Верно!", в противном случае - "Не знаете? ECMAScript!"

// const answer = prompt("Какое официальное название JavaScript?");
// const correctResult = "ECMAScript";

// if (answer.toLowerCase() === correctResult.toLowerCase()) {
// 	alert("Верно!");
// } else {
// 	alert("Не знаете? ECMAScript!");
// }

// =>
// Example 2 - Отображение времени (if...else)
// Напиши скрипт для отображения часов и минут в консоли браузера в
// виде строки формата "14 ч. 26 мин.". Если значение переменной minutes равно 0,
// то выводи строку "14 ч.", без минут.

// const hours = 14;
// const minutes = 60;

// if (minutes === 0 || minutes > 59) {
// 	console.log(`${hours} hr.`);
// } else {
// 	console.log(`${hours} hr. ${minutes} min.`);
// }

// =>
// Example 3 - Ветвеления
// Напиши скрипт, который выводит в консоль строку "Это положительное число",
// если в prompt пользователь ввел число больше нуля. Если был введен ноль,
// выводи в консоль строку "Это ноль". Если передали отрицательное число, в
// консоли должна быть строка "Это отрицательное число".

// const userInput = Number(prompt("Введите число:"));

// if (userInput > 0) {
// 	console.log("Это положительное число");
// } else if (userInput < 0) {
// 	console.log("Это отрицательное число");
// } else if (isNaN(userInput)) {
// 	console.log("Ви ввели не вірне значення");
// } else {
// 	console.log("Это ноль");
// }

// =>
// Example 4 - Вложенные ветвления
// Напиши скрипт, который сравнивает числа в переменных a и b.
// Если оба значения больше 100, то выведи в консоль максимальное из них.
// В противном случае в консоли должна быть сумма значения b и числа 512.

// const a = 80;
// const b = 180;

// if (a > 100 && b > 100) {
// 	console.log(Math.max(a, b));
// } else {
// 	console.log(b + 512);
// }

// =>
// Example 5 - Форматирование ссылки (endsWith)
// Напиши скрипт который проверяет заканчивается ли значение
// переменной link символом /. Если нет, добавь в конец
// значения link этот символ. Используй конструкцию if...else.

// let link = "https://my-site.com/about";
// // Пиши код ниже этой строки

// if (!link.endsWith("/")) {
// 	link += "/";
// }
// // Пиши код выше этой строки
// console.log(link);

// =>
// Example 6 - Форматирование ссылки (includes и логическое «И»)
// Напиши скрипт который проверяет заканчивается ли значение переменной
// link символом /. Если нет, добавь в конец значения link этот символ,
// но только в том случае, если в link есть подстрока "my-site".
// Используй конструкцию if...else.

// let link = "https://somesite.com/about";
// // Пиши код ниже этой строки

// if (!link.endsWith("/") && link.includes("my-site")) {
// 	link += "/";
// }
// // Пиши код выше этой строки
// console.log(link);

//
//
//
//
//
//
// =>
// Example 7 - Форматирование ссылки (тернарный оператор)
// Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.

// const a = 320;
// const b = 180;

// const max = Math.max(a, b);
// const sum = b + 512;

// const isBigger100 = a > 100 && b > 100;

// console.log(isBigger100 ? max : sum);

// =>
// Example 8 - if...else и логические операторы
// Напиши скрипт который будет выводить в консоль браузера
// строку в зависимости от значения переменной hours.

// Если значение переменной hours:
// меньше 17, выводи строку "Pending"
// больше либо равно 17 и меньше либо равно 22, выводи строку "Expires"
// больше либо равно 22 и меньше либо равно 24, выводи строку "Expires_2" // HomeWork
// больше 24, выводи строку "Overdue"

// const hours = 10;

// if (hours < 17) console.log("Pending");
// else if (hours > 24) console.log("Overdue");
// else console.log("Expires");

// =>
// Example 9 - Дедлайн сдачи проекта (if...else)
// Напиши скрипт для отображения времени дедлайна сдачи проекта.
// Используй конструкцию if...else.

// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"
// const daysUntilDeadline = 5;
// // Пиши код ниже этой строки

// if (!daysUntilDeadline) console.log("Сегодня");
// else if (daysUntilDeadline === 1) console.log("Завтра");
// else if (daysUntilDeadline === 2) console.log("Послезавтра");
// else if (daysUntilDeadline > 2) console.log("Дата в будущем");
// else console.log("Дедлай вийшов")

// =>
// Example 10 - Дедлайн сдачи проекта (switch)
// Выполни рефакторинг кода задачи номер 9 используя switch.

// const daysUntilDeadline = 5;

// switch (daysUntilDeadline) {
// 	case 0:
// 		console.log("Сегодня");
// 		break;
// 	case 1:
// 		console.log("Завтра");
// 		break;
// 	case 2:
// 		console.log("Послезавтра");
// 		break;
// 	default:
// 		console.log("Дата в будущем");
// 		break;
// }

// const color = "red";

// switch (color) {
// 	case "red":
// 	case "white":
// 	case "yellow":
// 		console.log("Light");
// 		break;
// 	case "black":
// 	case "green":
// 	case "gray":
// 		console.log("Dark");
// 		break;
// }

// =>
// Example 11 - Цикл for
// Напиши цикл for который выводит в консоль браузера
// числа по возрастанию от min до max, но только если число кратное 5.

// const max = 100;
// const min = 20;

// for (let i = min; i < max; i += 1) {
// 	if (i % 7 === 0) console.log(i);
// }

// =>
// Example 12 - Ввод пользователя и ветвления
// Напиши скрипт, который будет спрашивать логин с помощью
// prompt и логировать результат в консоль браузера.

// Если посетитель вводит "Admin", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Cancel"
// В противном случае вывести строку "I don't know you"
// Пароль проверять так:

// Если введён пароль "I am admin", то вывести строку "Hello!"
// Иначе выводить строку "Password is incorrect"

// const login = prompt("Hello. Write me your login: ");

// if (!login) {
// 	console.log("Cancel");
// } else if (login === "Admin") {
// 	const password = prompt("Hello. Write me your password: ");

// 	if (password === "I am admin") console.log("Hello!");
// 	else console.log("Password is incorrect");
// } else {
// 	console.log("We don't have this name in data base");
// }

// SWITCH -> true

// const userInput = 10;

// const isAdmin = false;

// switch (isAdmin) {
// 	case true:
// 		console.log("It is admin");
// 		break;
// 	case false:
// 		console.log("It is not admin");
// 		break;
// }

// const isAdmin = true;
// const name = "Oleh";

// switch (true) {
// 	case userInput > 0 && isAdmin && name:
// 		console.log("Это положительное число");
// 		break;
// 	case userInput < 0:
// 		console.log("Это отрицательное число");
// 		break;
// 	case isNaN(userInput):
// 		console.log("Ви ввели не вірне значення");
// 		break;
// 	default:
// 		console.log("Это ноль");
// 		break;
// }
