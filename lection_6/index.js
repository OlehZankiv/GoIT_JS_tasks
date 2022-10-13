// Модуль 3 Занятие 6. Деструктуризация и rest/spread
//
//
//

// const user = {
// 	name: "Мій плейлист",
// 	rating: 5,
// 	tracks: ["трек-1", "трек-2", "трек-3"],
// 	trackCount: 3,
// };

// function getUserInfo({ name, age, position }) {
// 	return `User name is ${name}. Age is ${age}. And he/she has position: ${position}`;
// }

// const userData = {
// 	name: "Oleh",
// 	age: 22,
// 	position: "developer",
// };

// getUserInfo(userData);

// const object = {
// 	key: [
// 		{ name: "Ivan", id: 1 },
// 		{ name: "Sergiy", id: 2 },
// 		{ name: "Petro", id: 3 },
// 		{ name: "Oleh", id: 4 },
// 	],
// };

// const user = {
// 	name: "Ivan",
// 	age: 22,
// 	gender: "M",
// 	book: {
// 		page: 10,
// 		totalPages: 122,
// 	},
// };

// const {
// 	age: secondAge,
// 	gender,
// 	name,
// 	book: { page, totalPages },
// } = user;

// console.log(page, totalPages);

// function foo(user = {}) {
// 	console.log(user);
// }
// foo();

// const user1 = {
// 	name: "Oleh",
// 	age: 22,
// };

// const { username } = user1;
// console.log(username);

// foo();

// const numbers = [2, 6, 33, 1, 50];

// const min = Math.min(...numbers)

// console.log(min);

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];

// console.log(arr1 === arr2);

// const products = [
// 	{ name: "Radar", price: 1300, quantity: 4 },
// 	{ name: "Scanner", price: 2700, quantity: 3 },
// 	{ name: "Droid", price: 400, quantity: 7 },
// 	{ name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
// 	const newArray = [];

// 	for (const product of products) {
// 		newArray.push(product[propName]);
// 	}

// 	return newArray;
// }

// console.log(getAllPropValues("quantity"));

// const x = {
// 	name: "Oleh",
// 	age: 22,
// };

// const y = {
// 	name: "Ivan",
// 	age: 18,
// };

// const info = {
// 	name: "Petro",
// 	...x,
// 	...y,
// 	name: "Sergiy",
// };

// console.log(info);

// const arr = [1, 2, 3];

// arr.splice(1, 1, "Hello", "World");

// console.log(arr);
// function foo(index, deleteCount, ...newElements) {

// }

// function foo({ name, age, gender, position, ...props }) {
// 	console.log(name, age);
// 	console.log(props);
// }

// foo({
// 	name: "Svitlana",
// 	age: 22,
// 	position: "Developer",
// 	gender: "Female",
// });

// =>
// Example 1 - Деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров,
// вместо набора независимых аргументов.

// function calcBMI({ weight, height }) {
// 	const numericWeight = Number(weight.replace(",", "."));
// 	const numericHeight = Number(height.replace(",", "."));

// 	return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// Было
// console.log(calcBMI("88,3", "1.75"));
// console.log(calcBMI("68,3", "1.65"));
// console.log(calcBMI("118,3", "1.95"));

// Ожидается
// console.log(
// 	calcBMI({
// 		weight: "88,3",
// 		height: "1.75",
// 	})
// );
// console.log(
// 	calcBMI({
// 		weight: "68,3",
// 		height: "1.65",
// 	})
// );
// console.log(
// 	calcBMI({
// 		weight: "118,3",
// 		height: "1.95",
// 	})
// );

// =>
// Example 2 - Деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров,
// вместо набора независимых аргументов.

// function printContactsInfo({ names, phones }) {
// 	const nameList = names.split(",");
// 	const phoneList = phones.split(",");
// 	for (let i = 0; i < nameList.length; i += 1) {
// 		console.log(`${nameList[i]}: ${phoneList[i]}`);
// 	}
// }

// Было
// printContactsInfo(
// 	"Jacob,William,Solomon,Artemis",
// 	"89001234567,89001112233,890055566377,890055566300"
// );

// Ожидается
// printContactsInfo({
// 	names: "Jacob,William,Solomon,Artemis",
// 	phones: "89001234567,89001112233,890055566377,890055566300",
// });

// =>
// Example 3 - Глубокая деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров,
// вместо набора независимых аргументов.

// function getBotReport({ companyName, bots: { repair, defence } }) {
// 	return `${companyName} has ${repair + defence} bots in stock`;
// }

// Было
// console.log(getBotReport("Cyberdyne Systems", 150, 50));

// Ожидается
// console.log(
// 	getBotReport({
// 		companyName: "Cyberdyne Systems",
// 		bots: {
// 			repair: 150,
// 			defence: 50,
// 		},
// 	})
// ); // "Cyberdyne Systems has 200 bots in stock"

// =>
// Example 4 - Деструктуризация
// Перепиши функцию так, чтобы она принимала объект параметров
// со свойствами companyName и stock
// и выводила репорт о количестве товаров на складе любой компании.

// function getStockReport({ companyName, stock }) {
// 	let sum = 0;

// 	for (const count of Object.values(stock)) {
// 		sum += count;
// 	}

// 	return `${companyName} has ${sum} items in stock`;
// }

// const info = {
// 	companyName: "Cyberdyne Systems",
// 	stock: {
// 		repairBots: 150,
// 		defenceBots: 50,
// 		hats: 200,
// 	},
// };

// console.log(getStockReport(info)); // "Cyberdyne Systems has 200 items in stock"

// console.log(
// 	getStockReport({
// 		companyName: "Belacci",
// 		stock: {
// 			shoes: 20,
// 			skirts: 10,
// 			hats: 5,
// 		},
// 	})
// ); // "Belacci has 35 item in stock"

// =>
// Example 5 - Операция spread
// Дополни функцию createContact(partialContact) так,
// чтобы она возвращала новый объект контакта
// с добавленными свойствами id и createdAt,
// а также list со значением "default" если в partialContact нет такого свойства.

// const o1 = {
// 	name: "Oleh",
// };

// console.log({
// 	...o1,
//     age: 25
// });

// function createContact(partialContact) {
// 	return {
// 		list: "default",
// 		...partialContact,
// 		id: generateId(),
// 		createdAt: Date.now(),
// 	};
// }

// console.log(
// 	createContact({
// 		name: "Mango",
// 		email: "mango@mail.com",
// 		list: "friends",
// 	})
// );
// console.log(
// 	createContact({
// 		name: "Poly",
// 		email: "poly@hotmail.com",
// 	})
// );

// function generateId() {
// 	return "_" + Math.random().toString(36).substr(2, 9);
// }

// =>
// Example 6 - Операция rest
// Напиши функцию transformUsername(user) так,
// чтобы она возвращала новый обьект со свойством fullName, вместо firstName и lastName.

// function transformUsername({ firstName, lastName, ...rest }) {
// 	return {
// 		...rest,
// 		fullName: `${firstName} ${lastName}`,
// 	};
// }

// console.log(
// 	transformUsername({
// 		id: 1,
// 		firstName: "Jacob",
// 		lastName: "Mercer",
// 		email: "j.mercer@mail.com",
// 		friendCount: 40,
// 	})
// );

// console.log(
// 	transformUsername({
// 		id: 2,
// 		firstName: "Adrian",
// 		lastName: "Cross",
// 		email: "a.cross@hotmail.com",
// 		friendCount: 20,
// 	})
// );

// console.log({
// 	c: 4,
// 	b: 2,
// 	a: 1,
// });

// function foo(product, user, ...ids) {
// 	const { name, price, mark, company } = product;
// 	const { name: userName, age } = user;

// 	console.log(name, mark, price);
// 	console.log(company.name, company.code);
// 	console.log(userName, age);
// 	console.log(ids);
// }

// const product = {
// 	name: "Pencil",
// 	price: 2000,
// 	mark: "AC/DC",
// 	company: {
// 		name: "HELLO",
// 		code: 123213,
// 	},
// };

// const user = {
// 	name: "Veronica",
// 	age: 18,
// };

// foo(product, user, "aowidhowugdwy", "awdwdw", "awdwdwddw");
