function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const boxDiv = document.querySelector('#boxes');

function createBoxes(amount) {
  let baseSize = 30;
  for (let i = 0; i < amount; i+=1) {
    const div = document.createElement('div');
    div.style.width = `${baseSize}px`;
    div.style.height = `${baseSize}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxDiv.append(div);
    baseSize += 10;
  }
}
createBtn.addEventListener('click', () => {
    if (input.value === '') {
     alert('Please type number')
    } else {
      createBoxes(input.value);
      input.value = '';
    }
})

destroyBtn.addEventListener('click', () => {
  boxDiv.innerHTML = '';
})
