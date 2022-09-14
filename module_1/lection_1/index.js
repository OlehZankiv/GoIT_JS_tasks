// # Модуль 1. Заняття 1. Змінні, типи і оператори

// ## Example 1 - Математичні оператори

// Виведи на екран загальну колькість яблук і винограду. Різницю яблук і винограду.

// const grapes = 135;
// const apples = 47;
// const total = grapes + apples;

// console.log(total);

// const diff = apples - grapes;

// console.log(diff);

// ## Example 2 - Комбинированные операторы

// Замени выражение переопределения комбинированным оператором `+=`.

// let students = 100;

// students += 50;

// console.log(students);

// ## Example 3 - Приоритет операторов

// Разбери приоритет операторов в инструкции присвоения значения переменной
// `result`.

// const result = 108 + 223 - 2 * 5;
// 1) 2 * 5
// 2) 108 + 223
// 3) (2) - (1)

// console.log(result);

// ## Example 4 - Класс Math

// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения
// переменной `value`. Используй методы `Math.floor()`, `Math.ceil()` и
// `Math.round()`. Проверь что будет в консоли при значениях `27.3` и `27.9`.

// const value = 27.5;

// console.log(Math.round(value));

// ## Example 5 - Шаблонные строки

// Составь фразу с помощью шаблонных строк `A has B bots in stock`, где A, B -
// переменные вставленные в строку.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// ## Example 6 - Методы строк и чейнинг

// Напиши скрипт который рассчитывает индекс массы тела человека. Для этого
// необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных `weight` и `height`, но не как числа, а в
// виде строк (специально для задачи). Нецелые числа могут быть заданы в виде
// `24.7` или `24,7`, то есть в качестве разделителя дробной части может быть
// запятая.

// Индекс массиы тела необходимо округлить до одной цифры после запятой;

// const weight = "88,3"; // replace , - . => 88.3
// const height = "1.75";

// const parsedWeight = parseFloat(weight.replace(",", "."));
// const parsedHeight = parseFloat(height);

// const bmi = parsedWeight / Math.pow(parsedHeight, 2);

// console.log(bmi.toFixed(2)); // 28.8

// ## Example 7 - Операторы сравнения и приведение типов

// Каким будет результат выражений?

// console.log(5 > 4);

// console.log(10 >= "7");

// 3 -> 51
// 2 -> 50
// 1 -> 49

// console.log("abc" > "abwac");

// const firstCode = "2".charCodeAt();
// const secondCode = "1".charCodeAt();

// console.log(firstCode > secondCode);

// console.log("2" < "12");

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log("Papaya" < "papaya");

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);

// ## Example 8 - Логические операторы

// Каким будет результат выражений?

// && -> зупиняється на першій брехні(false) або останній правді(true)
// || -> зупиняється на першій правді(true) або останній брехні(false)

// console.log(true && 3);

// console.log(22 && 3 && undefined);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

// ## Example 9 - Значение по умолчанию и оператор нулевого слияния

// Отрефактори код так, чтобы в переменную `value` присваивалось значение
// переменной `incomingValue`, если оно не равно `undefined` или `null`. В
// противном случае должно присваиваться значение `defaultValue`. Проверь работу
// скрипта для слепдующих значений переменной `incomingValue`: null, undefined, 0,
// false. Используй оператор `??` (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);
// ```

// ## Example 10 - Опертор % и методы строк

// Напиши скрипт который переведёт значение `totalMinutes` (количество минут) в
// строку в формате часов и минут `HH:MM`.

// - 70 покажет 01:10
// - 450 покажет 07:30
// - 1441 покажет 24:01

// const totalMinutes = 70;

// Нижче відповідь до задачки, якщо не впораєтесь самі - зможете переглянути.

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
