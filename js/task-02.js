const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients"); // Знаходимо список ul за його id

const liElements = ingredients.map((ingredient) => {
  const li = document.createElement("li"); // Створюємо елемент <li>
  li.textContent = ingredient; // Додаємо текстовий вміст (назву інгредієнта)
  li.classList.add("item"); // Додаємо клас "item" до елементу <li>
  return li;
});

ul.append(...liElements); // Додаємо створені елементи <li> до списку ul за допомогою оператора spread (...)
