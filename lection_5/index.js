// Модуль 3. Занятие 1. Объекты

// =>
// Example 1 - Основы обьектов
// Напиши скрипт, который, для объекта user, последовательно:
// Добавляет поле mood со значением 'happy'
// Заменяет значение hobby на 'skydiving'
// Заменяет значение premium на false
// Выводит содержимое объекта user в формате ключ:значение
// используя Object.keys() и for...of

// const user = {
// 	name: "Mango",
// 	age: 20,
// 	hobby: "html",
// 	premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// function showObjectInfo(obj) {
// 	const keys = Object.keys(obj);

// 	for (const key of keys) {
// 		console.log(`${key}: ${obj[key]}`);
// 	}
// }

// const user2 = {
// 	name: "Oleh",
// 	position: "Developer",
// };

// showObjectInfo(user2);

// =>
// Example 2 - метод Object.values()
// У нас есть объект, в котором хранятся зарплаты нашей команды.
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

// const salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130,
// };

// let sum = 0;

// for (const salary of Object.values(salaries)) {
//     sum += salary;
// }

// console.log(sum);

// =>
// Example 3 - Массив объектов
// Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов
// и строку с названием камня. Ф-ция считает и возвращает общую стоимость камней
// с таким именем, ценой и количеством из обьекта

// function calcTotalPrice(stones, stoneName) {
// 	const result = {
// 		totalPrice: 0,
// 		quantity: 0,
// 		prices: [],
// 		name: null,
// 	};

// 	for (const stone of stones) {
// 		if (stone.name === stoneName) {
// 			result.name = stone.name;
// 			result.prices.push(stone.price);
// 			result.quantity += stone.quantity;
// 			result.totalPrice += stone.price * stone.quantity;
// 		}
// 	}

// 	return result;
// }

// const stones = [
// 	{ name: "Изумруд", price: 1300, quantity: 4 },
// 	{ name: "Бриллиант", price: 2700, quantity: 3 },
// 	{ name: "Сапфир", price: 700, quantity: 2 },
// 	{ name: "Щебень", price: 200, quantity: 2 },
// 	{ name: "Щебень", price: 300, quantity: 1 },
// ];

// const result = calcTotalPrice(stones, "Сапфир");

// console.log(result);

// =>
// Example 4 - Комплексные задачи
// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать
// методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
// const Transaction = {
// 	DEPOSIT: "deposit",
// 	WITHDRAW: "withdraw",
// };

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

// const account = {
// 	// Текущий баланс счета
// 	balance: 0,

// 	// История транзакций
// 	transactions: [],

// 	/*
// 	 * Метод создает и возвращает объект транзакции.
// 	 * Принимает сумму и тип транзакции.
// 	 */
// 	createTransaction(amount, type) {
// 		const newTransaction = {
// 			id: `${type}__${this.transactions.length + 1}`,
// 			type,
// 			amount,
// 		};

// 		this.transactions.push(newTransaction);

// 		return newTransaction;
// 	},

// 	/*
// 	 * Метод отвечающий за добавление суммы к балансу.
// 	 * Принимает сумму танзакции.
// 	 * Вызывает createTransaction для создания объекта транзакции
// 	 * после чего добавляет его в историю транзакций
// 	 */
// 	deposit(amount) {
// 		this.createTransaction(amount, Transaction.DEPOSIT);
// 		this.balance += amount;
// 	},

// 	/*
// 	 * Метод отвечающий за снятие суммы с баланса.
// 	 * Принимает сумму танзакции.
// 	 * Вызывает createTransaction для создания объекта транзакции
// 	 * после чего добавляет его в историю транзакций.
// 	 *
// 	 * Если amount больше чем текущий баланс, выводит сообщение
// 	 * о том, что снятие такой суммы не возможно, недостаточно средств.
// 	 */
// 	withdraw(amount) {
// 		this.createTransaction(amount, Transaction.WITHDRAW);

// 		if (amount > this.balance) console.log("You don't have anough money!");
// 		else this.balance -= amount;
// 	},

// 	/*
// 	 * Метод возвращает текущий баланс
// 	 */
// 	getBalance() {
// 		return this.balance;
// 	},

// 	/*
// 	 * Метод ищет и возвращает объект транзации по id
// 	 */
// 	getTransactionDetails(id) {
// 		for (const transaction of this.transactions) {
// 			if (transaction.id === id) return transaction;
// 		}
// 	},

// 	/*
// 	 * Метод возвращает количество средств
// 	 * определенного типа транзакции из всей истории транзакций
// 	 */
// 	getTransactionTotal(type) {
// 		let total = 0;

// 		for (const transaction of this.transactions) {
// 			if (transaction.type === type) total += transaction.amount;
// 		}

// 		return total;
// 	},
// };

// account.deposit(1000);

// console.log(account.getBalance());

// account.deposit(40000);

// console.log(account.getBalance());

// console.log(account.transactions);

// 2 weeks

// account.withdraw(15000);
// account.withdraw(2000);
// account.withdraw(10000);
// account.withdraw(14000); //ZSY

// console.log(account.getBalance());
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// transaction
// {
//  amount: 1000,
//  type: Transaction.DEPOSIT,
// }

// Simple Variant
// const Transaction = {
// 	DEPOSIT: "deposit",
// 	WITHDRAW: "withdraw",
// };

// const account = {
// 	balance: 0,
// 	transactions: [],

// 	createTransaction(amount, type) {
// 		this.transactions.push({
// 			amount,
// 			type,
// 		});
// 	},
// 	deposit(amount) {
// 		this.createTransaction(amount, Transaction.DEPOSIT);
// 		this.balance += amount;
// 	},

// 	withdraw(amount) {
// 		this.createTransaction(amount, Transaction.WITHDRAW);
// 		this.balance -= amount;
// 	},

// 	getBalance() {
// 		return this.balance;
// 	},
// };

// account.deposit(1000);
// account.deposit(10000); // 11 000

// account.withdraw(500);
// account.withdraw(1000); // 9 500

// console.log(account.getBalance());
// console.log(account.transactions);
