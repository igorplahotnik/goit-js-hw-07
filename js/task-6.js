"use strict";
const input = document.querySelector("#validation-input");
input.addEventListener("blur", elem => {
  const element = elem.currentTarget;
  if (element.value.length == element.dataset.length) {
    element.className = "valid";
  } else {
    element.className = "invalid";
  }
});
