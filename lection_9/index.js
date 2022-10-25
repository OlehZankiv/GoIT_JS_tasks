// Модуль 5. Занятие 9. Контекст вызова функции и this
//
// THEORY ====>
//
// 1. Що таке this? [window, контекст виклику]
// parseFloat, parseInt, Math ........

// console.log(window);

// window.parseFloat()

// function voice() {
// 	console.log(this);
// }

// voice();

// const user = {
// 	name: "Ivan",
// 	voice: voice,
// };

// user.voice();

// 2. Стрілочні функції і this;

// const sayThis = () => console.log(this);
// sayThis();

// const user = {
// 	name: "Ivan",
// 	voice() {
// 		const childFunction = () => console.log(this);

// 		childFunction();
// 	},
// };

// user.voice();

// 3. Як з this працює "use strict"? [window, стрілочні функції]
// "use strict";

// const foo = () => {
// 	console.log(this);
// };

// foo();

// const user = {
// 	name: "Ivan",
// 	voice: () => {
// 		const childFunction = () => console.log(this);

// 		childFunction();
// 	},
// };

// user.voice();

// 4. bind, call i apply.

// const user = {
// 	nickname: "Ivan",
// 	getNickname(a, b, c) {
// 		// console.log(a, b, c);
// 		console.log(this);
// 		// return this.nickname;
// 	},
// };

// const f = user.getNickname.bind(user);

// f.apply(user, [1, 2, 3]);
// f.call(user, 1, 2, 3);

// f.call(user);
// const newF = f.bind(user);
// newF();

// console.log(f.apply(user, [1, 2, 3, 4]));

// function logCallbackResult(callback) {
//   console.log(callback());
// }

// logCallbackResult(user.getNickname.bind(user));

// const f = user.getNickname.bind(user);

// console.log(f());
//
// <==== THEORY
//
// EXCEL ====>
//
// "use strict";

// this -> window
// function foo() {
//   this // -> this of foo
// }

// foo()

// const foo = () => console.log(this);

// const user = {
//     voice: () => console.log(this),
// }

// foo();
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
// 	calcTotalPrice(stoneName) {
// 		const foundStone = this.stones.find((stone) => stone.name === stoneName);

// 		if (!foundStone) return 0;

// 		const { price, quantity } = foundStone;

// 		return price * quantity;
// 	},
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
// 			createdAt: this.getDate(),
// 		};

// 		this.contacts.push(newContact);
// 	},

// 	generateId() {
// 		return "_" + Math.random().toString(36).substr(2, 9);
// 	},

// 	getDate() {
// 		return Date.now();
// 	},
// };

// phonebook.add({
// 	name: "Mango",
// 	email: "mango@mail.com",
// 	list: "friends",
// });
// phonebook.add({
// 	name: "Poly",
// 	email: "poly@hotmail.com",
// });

// console.log(phonebook.contacts);

// =>
// Example 3 - Калькулятор
// Создайте объект calculator с тремя методами:

// read(a, b)- принимает два значения и сохраняет их как свойства объекта.
// add() - возвращает сумму сохранённых значений.
// mult() - перемножает сохранённые значения и возвращает результат.

// const calculator = {
// 	a: null,
// 	b: null,

// 	read(a, b) {
// 		this.a = a;
// 		this.b = b;
// 	},
// 	add() {
// 		if (!this._getIsCalculatorValid()) return 0;

// 		return this.a + this.b;
// 	},
// 	mult() {
// 		if (!this._getIsCalculatorValid()) return 0;

// 		return this.a * this.b;
// 	},

// 	_getIsCalculatorValid() {
// 		return this.a !== null && this.b !== null;
// 	},
// };

// calculator.read(10, 20);

// console.log(calculator.add());
// console.log(calculator.mult());
