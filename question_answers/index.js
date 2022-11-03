// Question - Answer
//

// const arr = [
// 	{ id: "a", parentId: null },
// 	{ id: "b", parentId: "a" },
// 	{ id: "c", parentId: "a" },
// 	{ id: "e", parentId: null },
// 	{ id: "d", parentId: "e" },
// ];
// =>
// const newObj = {
// 	a: {
// 		id: "a",
// 		parentId: null,
// 		b: { id: "b", parentId: "a" },
// 		c: { id: "c", parentId: "a" },
// 	},
// 	e: {
// 		id: "e",
// 		parentId: null,
// 		d: { id: "d", parentId: "e" },
// 	},
// };

// Number.parseInt("22"); // 22

// parseInt("22"); // 22
// class Admin {

// }

// class User {
//     static defaultAge = 18;

// 	name;
// 	surname;
// 	age;
// 	#password;

// 	constructor({ name, surname, age, password }) {
// 		this.name = name;
// 		this.surname = surname;
// 		this.age = age;

// 		this.#password = password;
// 	}

// 	set password(value) {
//         if (value = '0000') return;
// 		if (value) {
// 			this.#password = value;
// 		}
// 	}

//     getAge() {
//         return this.age;
//     }
// }

// const user = new User({
// 	name: "Ivan",
// 	surname: "Zelenskii",
// 	age: 22,
// 	password: "p@ssw0rd!",
// });

// user.password = "";

// ("Hello {0}, how are you?", "Oleh") => "Hello Oleh, how are you?"

// const stringModifier = (text, ...args) => {
// 	let res = text;

// 	args.forEach((item, i) => (res = res.replace("{" + i + "}", item)));

// 	return res;
// };

// const r = stringModifier("Hello {0}, how are you? {1}", "Oleh", "Ok");

// const parent = {
// 	lang: "UA",
// };

// const child = Object.create(parent);

// console.log(child);

// class Parent {
// 	lagn = "UA";
// }

// class Child extends Parent {
// 	name = "child";
// }

// const child = new Child();

// console.log(child.__proto__ === Child.prototype);

// const foo = () => {
// 	const foo2 = () => {
// 		console.log(this);
// 	};

// 	foo2();
// };

// const obj = {
// 	name: "Wdwd",
// 	say() {
// 		const foo = () => console.log(this);

// 		foo();
// 	},
// };

// obj.say();

// const obj = {};

// const obj2 = Object.create(Object.prototype);
//
// console.log(obj2.__proto__.);

// console.log(Object.prototype);

// const x = new Number(4);

// console.log(x.__proto__ === Number.prototype);

// function factorial(num) {
// 	if (num === 1) return 1;

// 	return num * factorial(num - 1);
// }

// console.log(factorial(3)); // 1 * 2 * 3 * 4 .... * 10

// function foo() {
// 	let count = 0;

// 	console.log(count);
// 	return function () {
// 		count += 1;

// 		console.log(count);
// 	};
// }

// const increase = foo();

// increase();
// increase();
// increase();
// increase();

// count(YES)

// let i = 0;

// do {
// 	console.log("HELLO");
// 	i += 1;
// } while (i < 0);

// const userRole = "User"; // "User" || "Owner";

// if (userRole === "Admin") {
// 	console.log("You are admin");
// } else if (userRole === "User") {
// 	console.log("You are simple user");
// } else if (userRole === "Owner") {
// 	console.log("You are cool man");
// }

// switch (userRole) {
// 	case "Admin":
// 		console.log("You are admin");
// 		break;
// 	case "User":
// 		console.log("You are simple user");
// 		break;
// 	case "Owner":
// 		console.log("You are cool man");
// 		break;
// 	default:
// 		console.log("I don't know who are you");
// 		break;
// }

// for (let i = 0; i <= 100; i += 1) {
// 	if (i % 2 === 1) continue;

// 	console.log(i);
// }

// const car = {
// 	make: "BMW",
// 	wheels: 4,
// };

// function showCarInfo({ make, wheels, age, name }) {
// 	console.log(`It's ${make} and count of wheels equals ${wheels}`);
// }

// showCarInfo({
// 	make: "MBW",
// 	wheels: 4,
// 	age: 22,
// 	name: "Oleh",
// });

// const arr = [1, 2, 3];

// const [first, second, third] = arr;

// console.log(first, second, third);

// function name(params) {

// }

// const name2 = () => "wdwd"

// const initialValues = {
// 	make: "",
// 	wheels: 0,
// 	age: 0,
// 	name: "",
// };

// const car = {
// 	...initialValues,
// 	make: "BMW",
// 	wheels: 4,
// };

// console.log(car);

// const arr = [1, 2, 3, 4];

// const res = arr.reduce((previous, current) => previous + current, 0);
// console.log(res);
