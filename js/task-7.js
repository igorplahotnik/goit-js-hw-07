"use strict";
const range = document.querySelector("#font-size-slider");
const text = document.querySelector("#text");


range.addEventListener("input", elem => {
  const countFontSize = elem.currentTarget.value;
  text.style.fontSize = range.value + "px"

});