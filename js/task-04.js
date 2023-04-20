'use strict';

const btnDecrement = document.querySelector('[data-action = "decrement"]');

const btnIncrement = document.querySelector('[data-action = "increment"]');

const counterValue = document.querySelector('#value')

let value = 0;
btnDecrement.addEventListener('click', () => {
    value -= 1;
    counterValue.textContent = value;
})

// function onTargetButtonDecrement () {
//     value -= 1;
//     counterValue.textContent = value;
// }
//
// btnDecrement.addEventListener('click', onTargetButtonDecrement)


btnIncrement.addEventListener('click', () =>{
    value += 1;
    counterValue.textContent = value;
})

// function onTargetButtonIncrement () {
//     value += 1;
//     counterValue.textContent = value;
// }
//
// btnIncrement.addEventListener('click', onTargetButtonIncrement)