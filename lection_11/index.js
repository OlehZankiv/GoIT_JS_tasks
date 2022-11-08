//
//
//
// const parent = document.querySelector("#parent");
// console.log(parent.childNodes);

// const newEl = document.createElement("a");
// parent.append(newEl);

// 1. document (DOM, DOM-tree);
// 2. document.querySelector
// 3. Node types
// 4. classList, style
// parent.style.width = "200px";
// parent.style.backgroundColor = "green";
// parent.style.fontSize = "24px";
// 5. createElement, append
// 6. textContent, innerHTML

// parent.insertAdjacentHTML("afterend", "<div>awdpiohwd<div>");
// const newDiv = document.createElement("div");
// newDiv.classList.add("wrapper");
// newDiv.style.width = "50px";
// newDiv.style.height = "50px";
// newDiv.style.backgroundColor = "white";

// const newDiv2 = document.createElement("div");
// newDiv2.classList.add("wrapper");
// newDiv2.style.width = "50px";
// newDiv2.style.height = "50px";
// newDiv2.style.backgroundColor = "yellow";

// parent.append(newDiv, newDiv2);

// -> EXCEL

// const divEl = document.querySelector("#im-div");
// const newEl = document.createElement("p");

// divEl.after(newEl);

// <- EXCEL

const body = document.body;
// Задача 1.
// Створити список технологій що вивчаються на курсі Fullstack
// за допомогою js, використовуючи два способи(map та reduce).

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

// const res = `<ul>
// 	    ${technologies.map((technologie) => `<li>${technologie}</li>`).join("")}
// 	</ul>`;

// const res = `
//     <ol>
//         ${technologies.reduce(
// 					(previous, current) => previous + `<li>${current}</li>`,
// 					""
// 				)}
//     </ol>
// `;

// body.insertAdjacentHTML("beforeend", res);

// Задача 2.
// Створити декілька кнопок на основі масива з об'єктами,
// використовуючи createElement.

// const colors = [
// 	{ label: "red", color: "#FF0000" },
// 	{ label: "green", color: "#00FF00" },
// 	{ label: "blue", color: "#0000FF" },
// 	{ label: "yellow", color: "#FFFF00" },
// ];

// const colorButtonElements = colors.map(({ color, label }) => {
// const colorButton = document.createElement("button");
// colorButton.style.backgroundColor = color;
// colorButton.style.margin = "px";

// colorButton.textContent = label;

// return colorButton;
// });

// body.append(...colorButtonElements);

// Задача 3.
// Створити сайт з розміткою записаною у файлі "example.html",
// використовуючи лише JS в html файлі має бути лише тег body.

//  { name: "hello", age: 22 } => [['name', 'hello'], ['age', 22]]

const getNewElement = (tagName, config) => {
	const newElement = document.createElement(tagName);

	// config -> { id: "id", textContent: "Hello World" }
	// [["id", "id"], ["textContent", "Hello World"]]
	if (config) {
		// newElement['id'] = "id"
		// newElement['textContent'] = "Hello World"
		Object.entries(config).forEach(([key, value]) => {
			newElement[key] = value;
		});
	}

	return newElement;
};

// <main>
const main = getNewElement("main", { id: "main" });

//   <h1>
const title = getNewElement("h1", {
	id: "title",
	textContent: "- Michel Legrand -",
});
//   </h1>

//   <figure>
const figure = getNewElement("figure", { id: "img-div" });

//      <img>
const img = getNewElement("img", {
	id: "image",
	src: "https://i.discogs.com/LGcISJRXQR30Q--KBtFgh8nf5bAY-UT9PfVp4mPM4_8/rs:fit/g:sm/q:90/h:788/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTg0MjM2/LTE0Nzc2ODIxNDgt/NDUyOC5qcGVn.jpeg",
	alt: "Michel Legrand conducting his orchestra.",
});

//     <figcaption>
const figcaption = getNewElement("figcaption", {
	id: "img-caption",
	textContent: "Michel Legrand conducting his orcherstra.",
});
//     </figcaption>

figure.append(img, figcaption);
//   </figure>

main.append(title, figure);
// </main>

body.appendChild(main);
