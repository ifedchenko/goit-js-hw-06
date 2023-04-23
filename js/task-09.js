'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnChangeColor = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');


btnChangeColor.addEventListener('click', onButtonClick);
function onButtonClick() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color
  colorValue.textContent= color
}