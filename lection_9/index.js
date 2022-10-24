// Модуль 5. Занятие 9. Контекст вызова функции и this
//
// THEORY ====>
//
// 1. Що таке this? [window, контекст виклику]
// parseFloat, parseInt, Math ........

// function voice() {
//   console.log(this)
// }

// const user = {
// 	name: "Ivan",
// 	voice() {
// 		console.log(this);
// 	},
// };

// user.voice();

// 2. Стрілочні функції і this;

// const sayThis = () => console.log(this);
// sayThis();

// const user = {
// 	name: "Ivan",
// 	voice() {
// 		sayThis();
// 	},
// };

// 3. Як з this працює "use strict"? [window, стрілочні функції]
// "use strict";

// 4. bind, call i apply.
// const user = {
// 	nickname: "Ivan",
// 	getName() {
// 		return this.nickname;
// 	},
// };

// function logCallbackResult(callback) {
// 	console.log(callback());
// }

// logCallbackResult(user.getName);

//
// <==== THEORY
//
// EXCEL ====>
//
//
// <==== EXCEL

// =>
// Example 1 - Мастерская драгоценностей
// Напишите метод calcTotalPrice(stoneName),
// который принимает название камня и рассчитывает и возвращает
// общую стоимость камней с таким именем, ценой и количеством из свойства stones.

// const chopShop = {
// 	stones: [
// 		{ name: "Emerald", price: 1300, quantity: 4 },
// 		{ name: "Diamond", price: 2700, quantity: 3 },
// 		{ name: "Sapphire", price: 1400, quantity: 7 },
// 		{ name: "Ruby", price: 800, quantity: 2 },
// 	],
// 	calcTotalPrice(stoneName) {},
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

// =>
// Example 2 - Телефонная книга
// Выполните рефакторинг методов объекта phonebook чтобы код заработал.

// const phonebook = {
// 	contacts: [],

// 	add(contact) {
// 		const newContact = {
// 			list: "default",
// 			...contact,
// 			id: this.generateId(),
// 			createdAt: getDate(),
// 		};

// 		contacts.push(newContact);
// 	},

// 	generateId() {
// 		return "_" + Math.random().toString(36).substr(2, 9);
// 	},

// 	getDate() {
// 		return Date.now();
// 	},
// };

// console.log(
// 	phonebook.add({
// 		name: "Mango",
// 		email: "mango@mail.com",
// 		list: "friends",
// 	})
// );
// console.log(
// 	phonebook.add({
// 		name: "Poly",
// 		email: "poly@hotmail.com",
// 	})
// );

// =>
// Example 3 - Калькулятор
// Создайте объект calculator с тремя методами:

// read(a, b)- принимает два значения и сохраняет их как свойства объекта.
// add() - возвращает сумму сохранённых значений.
// mult() - перемножает сохранённые значения и возвращает результат.

// const calculator = {};
