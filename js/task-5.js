"use strict";

const input = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

input.addEventListener('input', () => {
  output.textContent = input.value || "незнакомец";
});
