"use strict";

const input = document.querySelector("#validation-input");
input.addEventListener("blur", elem => {
  const element = elem.currentTarget;
  if (element.value.length == element.dataset.length) {
    element.classList = "valid";
  } else {
    element.classList = "invalid";
  }
});
