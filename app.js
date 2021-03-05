//Request 1: Click to Change Text
const heroBackground = document.querySelector('.hero-bg');

heroBackground.addEventListener('click', () => {
    heroBackground.innerHTML = `<h1>Have a Good Time</h1>`
});

//Request 2: Click to Show/Close Menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.hidden-menu');
const closeBtn = document.querySelector('#close-btn');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu');
})

closeBtn.addEventListener('click', () => {
    menu.classList.toggle('menu');
})

//Request 3: Click to Show More Content Boxes
const actionBtn = document.querySelector('#action-btn');
const hiddenItems = document.querySelector('.hidden-items');

actionBtn.addEventListener('click', () => {
    hiddenItems.classList.remove('hidden-items')
})