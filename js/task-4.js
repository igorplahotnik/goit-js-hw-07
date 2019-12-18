"use-strict";

let counterValue = 0;
const value = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

// decrement.addEventListener("click", () => {
//   counterValue -= 1;
//   return (value.textContent = counterValue);
// });

// increment.addEventListener("click", () => {
//   counterValue += 1;
//   return (value.textContent = counterValue);
// });


const increment = () => {
  counterValue += 1;
  value.textContent = counterValue;

};
const decrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);