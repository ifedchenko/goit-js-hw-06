'use strict';


const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item')

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {

    const categoryName = item.children.item(0).textContent;
    const elementsAmount = item.lastElementChild.children.length

    // const categoryName = item.querySelector('h2').textContent;
    // const elementsAmount = item.querySelectorAll('li').length;

    console.log(`Category: ${categoryName}`)
    console.log(`Elements: ${elementsAmount}`)
})






















