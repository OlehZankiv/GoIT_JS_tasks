//
//
//

const loginModalButton = document.querySelector("#login-button");
const loginModal = document.querySelector(".modal-wrapper");
const title = document.querySelector("h2");
const error = document.querySelector(".form-error");
const loginForm = document.querySelector("#login-form");
const loginModalCloseButton = document.querySelector(
	".modal-wrapper .close-button"
);
const loginModalOverlay = document.querySelector(".modal-wrapper .overlay");

const onEscapePress = (e) => {
	if (e.code === "Escape" && isLoginModalWindowOpen()) {
		closeLoginModalWindow();
	}
};

const closeLoginModalWindow = () => {
	loginModal.classList.add("hidden");
	document.removeEventListener("keyup", onEscapePress);
	loginForm.reset();

	if (!error.classList.contains("hidden")) {
		error.classList.add("hidden");
	}
};

const showLoginModalWindow = () => {
	loginModal.classList.remove("hidden");

	document.addEventListener("keyup", onEscapePress);
};

const isLoginModalWindowOpen = () => !loginModal.classList.contains("hidden");

loginModalButton.addEventListener("click", showLoginModalWindow);

loginModalCloseButton.addEventListener("click", closeLoginModalWindow);

loginModalOverlay.addEventListener("click", closeLoginModalWindow);

const correctLogin = "goit@gmail.com";
const correctPasword = "1234";

loginForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const data = new FormData(event.target);
	const login = data.get("login");
	const password = data.get("password");

	if (login === correctLogin && password === correctPasword) {
		closeLoginModalWindow();
		title.classList.remove("hidden");
		loginModalButton.classList.add("hidden");
	} else {
		error.classList.remove("hidden");
	}

	return data;
});

// =>
// Задача 1.
// Створити модальне вікно яке буде відкриватися
// при кліку на кнопку всередині тега body
// Модальне вікно має закриватися при кліку на напівпрозорий оверлей,
// та на іконку хрестика всередині модалки

// =>
// Задача 2.
// Додати в модальне вікно логіку закриття
// при натисканні на кнопку "Escape"

// =>
// Задача 3.
// Створити форму реєстрації в модалці користувача за допомогою js,
// де буде 2 поля:
//   1. Поле логіна
//   2. Поле пароль
// Захаркодити вірні логін і пароль в константах
// Додати логіку сабміта форми, при сабміті перевіряємо введені логін і пароль.
// Умови:
//   1. Якщо логін і пароль співпадають,
//     то видаляємо форму з документа і показуємо h2 з написом "Вхід успішний"
//   2. Якщо логін і пароль не співпадають з даними з констант,
//      то показуємо під формою помилку червоним кольором “Логін або пароль не вірні”
