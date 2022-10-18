// Модуль 4. Занятие 7. Коллбеки. Стрелочные функции. forEach

// EXCEL QUESTION ===>

// function changeEven(numbers, value) {
// 	const newArray = [];

// 	for (let i = 0; i < numbers.length; i += 1) {
// 		let element = numbers[i];

// 		if (element % 2 === 0) {
// 			element += value;

// 			newArray.push(element);
// 		}

// 		newArray.push(element);
// 	}

// 	return newArray;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// const add = (a) => {
// 	return a + 5;
// };

// const greet = () => {
// 	console.log("Привет!");
// };

// const x = add(20);

// console.log(x);

// greet();

// const sayHello = () => {
// 	console.log("Hello");
// };

// const logResult = (callback) => {
// 	callback();
// };

// logResult(sayHello);

// const arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i += 1){
//     const value = arr[i]
// }

// function a() {}

// function b(callback) {
//     callback()
// }

// b(a)

// function foo(callback) {
// 	callback(10);
// }

// function logger(value) {
// 	console.log(value);
// } // undefined

// foo(logger);

// const voice = (text) => {
// 	console.log(text);
// };

// voice("GAFFF");

// const sum = (x, y) => x + y;

// console.log(sum(10, 5));

// const foo = (...args) => {
// 	console.log(args);
// };

// foo(1, 2, 3, 4);

// <==== EXCEL QUESTIONS

// =>
// Example 1 - Коллбек функции
// Напишите следующие функции:

// ***
// createProduct(obj, callback) - принимает объект товара без id, а также колбек.
// Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство id
// и вызывает колбек передавая ему созданный обьект.

// logProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль
// logTotalPrice(product) - коллбек принимающий обьект продукта и логирующий общую стоимость товара в консоль

// function createProduct(product, callback) {
// 	const newProduct = {
// 		...product,
// 		id: Math.random(),
// 	};

// 	callback(newProduct);
// }

// Callback
// function logProduct(product) {
// 	console.log(product);
// }

// function logTotalPrice(product) {
// 	console.log(product.price * product.quantity);
// }

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

// =>
// Example 2 - Коллбек функции
// Добавьте объекту account методы withdraw(amount, onSuccess, onError)
// и deposit(amount, onSuccess, onError), где первый параметр это сумма операции,
// а второй и третий - колбеки.

// Метод withdraw вызывает onError если amount больше TRANSACTION_LIMIT или this.balance,
// и onSuccess в противном случае.
// Метод deposit вызывает onError если amount больше TRANSACTION_LIMIT или меньше либо равен нулю,
// и onSuccess в противном случае.

// const TRANSACTION_LIMIT = 1000;

// const account = {
// 	username: "Jacob",
// 	balance: 400,

// 	withdraw(amount, onSuccess, onError) {
// 		if (amount > TRANSACTION_LIMIT) {
// 			onError(`It's more than ${TRANSACTION_LIMIT}`);
// 		} else if (amount > this.balance) {
// 			onError(`You don't have enough money`);
// 		} else {
// 			onSuccess("Everything is OK!");
// 		}
// 	},
// 	deposit(amount, onSuccess, onError) {
// 		if (amount > TRANSACTION_LIMIT) {
// 			onError(`It's more than ${TRANSACTION_LIMIT}`);
// 		} else if (amount <= 0) {
// 			onError(`You can't set zero or less for deposit`);
// 		} else {
// 			onSuccess("Everything is OK!");
// 		}
// 	},
// };

// function handleSuccess(message) {
// 	console.log(`✅ Success! ${message}`);
// }

// function handleError(message) {
// 	console.log(`❌ Error! ${message}`);
// }
// function handleError2(message) {
// 	console.log(`YOU HAVE ERROR! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError2);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// =>
// Example 3 - Коллбек функции
// Напишите функцию each(array, callback),
// которая первым параметром ожидает массив,
// а вторым - функцию, которая применится к каждому элементу массива.
// Функция each должна вернуть новый массив, элементами которого будут результаты вызова коллбека.

function each(array, callback) {
	const newArr = [];

	for (const value of array) {
		const newValue = callback(value);
		newArr.push(newValue);
	}

	return newArr;
}

// const mutateValue = (value) => value + 10;

// const arr = [1, 2, 3];

// const result = each(arr, mutateValue); // [11, 12, 13]

// console.log(result);

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );

// =>
// Example 4 - Стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.

// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// =>
// Example 5 - Инлайн стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.

// function each(array, callback) {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// }

// console.log(
// 	each([64, 49, 36, 25, 16], function (value) {
// 		return value * 2;
// 	})
// );
// console.log(
// 	each([64, 49, 36, 25, 16], function (value) {
// 		return value - 10;
// 	})
// );
// console.log(
// 	each([64, 49, 36, 25, 16], function (value) {
// 		return Math.sqrt(value);
// 	})
// );
// console.log(
// 	each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
// 		return Math.ceil(value);
// 	})
// );
// console.log(
// 	each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
// 		return Math.floor(value);
// 	})
// );

// =>
// Example 6 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// function logItems(items = []) {
// 	function itemIterator(item, i) {
// 		console.log(`${i + 1} - ${item}`);
// 	}

// 	items.forEach(itemIterator);
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// =>
// Example 7 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// function printContactsInfo({ names, phones }) {
// 	const nameList = names.split(",");
// 	const phoneList = phones.split(",");

// 	nameList.forEach((value, i) => {
// 		console.log(`${value}: ${phoneList[i]}`);
// 	});
// }

// printContactsInfo({
// 	names: "Jacob,William,Solomon,Artemis",
// 	phones: "89001234567,89001112233,890055566377,890055566300",
// });

// =>
// Example 8 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// const calсulateAverage = (...args) => {
// 	let total = 0;

// 	args.forEach((value) => (total += value));

// 	return total / args.length;
// };

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

// (value, index, array)

// const customForEach = (arr, callback) => {
// 	for (let i = 0; i < arr.length; i += 1) {
// 		const element = arr[i];

// 		callback(element, i, arr);
// 	}
// };

// customForEach([11, 22, 43, 54, 65], (value, i) => {
// 	console.log(value, i);
// });
// console.log("///////");
// [11, 22, 43, 54, 65].forEach((value, i) => console.log(value, i));
