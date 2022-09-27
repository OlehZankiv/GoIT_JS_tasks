//
//
//
//
//
const a = 232;

// =>
// Example 1 - Математические операторы
// Выведи на экран общее количество яблок 
// и винограда.
// Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes; 
// console.log(total)
// const diff = apples - grapes;
// console.log(diff)

// =>
// Example 2 - Комбинированные операторы
// Замени выражение переопределения комбинированным оператором +=.

// let students = 100;
// students -= 50;
// console.log(students);

// =>
// Example 3 - Приоритет операторов
// Разбери приоритет операторов в инструкции присвоения значения переменной result.

// const result = 108 + 223 - 8 + 2 * 5;
// console.log(result);

// =>
// Example 4 - Класс Math
// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной value. Используй методы Math.floor(), Math.ceil() и Math.round(). Проверь что будет в консоли при значениях 27.3 и 27.9.

// const value = 27.9;

// console.log(Math.ceil(value));

// =>
// Example 5 - Шаблонные строки
// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const total =repairBots + defenceBots;
// const message = `${companyName} has ${total} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// =>
// Example 6 - Методы строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела человека.
// Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массиы тела необходимо округлить до одной цифры после запятой;

// let weight = '88,3';
// let height = '1,75';

// const parsedWeight = weight.replace(',', '.')
// const parsedHeight = height.replace(',', '.')

// const result = parseFloat(parsedWeight) / parseFloat(parsedHeight)**2;

// const bmi = result.toFixed(1);
// console.log(bmi); // 28.8

// =>
// Example 7 - Операторы сравнения и приведение типов
// Каким будет результат выражений?

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('A' > 'Z'); 

// console.log('3' > '111'); // 51 > 49

// console.log('A'.charCodeAt());
// console.log('B'.charCodeAt());

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);

// =>
// Example 8 - Логические операторы
// Каким будет результат выражений?

// && -> першу брехню(false) або останню правду(true);
// || -> першу правду(true) або останню брехню(false);

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(1232 || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

// =>
// Example 9 - Значение по умолчанию и оператор нулевого слияния
// Отрефактори код так, чтобы в переменную value присваивалось значение переменной
//  incomingValue, если оно не равно undefined или null.
// В противном случае должно присваиваться значение defaultValue.
// Проверь работу скрипта для слепдующих значений переменной incomingValue: 
// null, undefined, 0, false. Используй оператор ?? (nullish coalescing operator).

// const dbName = '';
// const name = dbName ?? '';
// console.log(name);

// =>
// Example 10 - Опертор % и методы строк
// Напиши скрипт который переведёт значение totalMinutes
// (количество минут) в строку в формате часов и минут HH:MM.

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:01
// const totalMinutes = 1441;
 
// const hours = (totalMinutes / 60).toFixed(0)
// const minutes = (totalMinutes % 60).toString();

// const parsedHours = hours.padStart(2, 0);
// const parsedMinutes = minutes.padStart(2, 0);

// console.log(`${parsedHours}:${parsedMinutes}`);

// 1. null > 0; null < 0 -> false;
// 2. null == 0 -> false;
// 3. null >= 0; null <= 0 -> true;


// Explanations
// 1. null > 0; null < 0 -> false;
// тому що null приводиться до 0;


// 2. null == 0 -> false;

// 3. null >= 0; null <= 0 -> true;
// 

// const x = 5;

// x >= 10; // x < 10 => true; | x < 10 => false

// null >= 0; // null < 0 => false; true
