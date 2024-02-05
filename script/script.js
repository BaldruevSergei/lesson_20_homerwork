//Создайте HTML-страницу с кнопкой. При клике на кнопку измените текст элемента с id "target" на "Привет, мир!" с использованием JavaScript и DOM.

const changeTextButton = document.getElementById("changeTextButton");
const targetElement = document.getElementById("target");

// Добавляем обработчик события click для кнопки
changeTextButton.addEventListener("click", function() {
    // Изменяем текст элемента с id "target"
    targetElement.textContent = "Привет, мир!";
});

//Создайте HTML-страницу с формой (input и button). При отправке формы выведите в консоль введенное значение из input с использованием JavaScript и DOM.
// Получаем ссылку на форму и элемент input
const myForm = document.getElementById("myForm");
const myInput = document.getElementById("myInput");

// Добавляем обработчик события submit для формы
myForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы (чтобы страница не перезагружалась)

    const inputValue = myInput.value; // Получаем значение из input

    // Выводим значение в консоль
    console.log("Введенное значение: " + inputValue);
});

// Создайте HTML-страницу, в которой присутсвует кнопка. При нажатии на нее текст кнопки меняется на случайное число от 5 до 15.
 // Функция для генерации случайного числа от 5 до 15
 function getRandomNumber() {
    return Math.floor(Math.random() * 11) + 5;
}

// Добавляем обработчик события click для кнопки
myButton.addEventListener("click", function() {
    // Получаем случайное число
    const randomNumber = getRandomNumber();
    
    // Устанавливаем случайное число как текст кнопки
    myButton.textContent = randomNumber;
});