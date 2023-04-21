'use strict';

const inputRangeControl = document.querySelector('#font-size-control');

const text = document.querySelector('#text')

inputRangeControl.addEventListener('input', onChangeFontSize)

function onChangeFontSize () {
    const currentFontSize = inputRangeControl.value
    text.style.fontSize = `${currentFontSize}px`
}
