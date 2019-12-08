"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const listIngredients = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i++) {
  const newElement = document.createElement("li");
  newElement.innerHTML = ingredients[i];
  listIngredients.appendChild(newElement);
}