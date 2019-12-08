"use strict";

const input = document.querySelector("input#name-input");
const result = document.querySelector("span#name-output");
input.addEventListener("change", el => {
  result.textContent = el.currentTarget.value;
  if (el.currentTarget.value.length === 0) {
    result.textContent = "незнакомец";
  }
});
