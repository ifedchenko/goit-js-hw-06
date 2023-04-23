'use strict';

const inputRangeControl = document.querySelector('#font-size-control');

const text = document.querySelector('#text')

const defaultTextValue = inputRangeControl.value

text.style.fontSize = `${defaultTextValue}px`


inputRangeControl.addEventListener('input', () => {
    const currentFontSize = inputRangeControl.value;
    text.style.fontSize = `${currentFontSize}px`
})

// function onChangeFontSize () {
//     const currentFontSize = inputRangeControl.value;
//     text.style.fontSize = `${currentFontSize}px`
// }
