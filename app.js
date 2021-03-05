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
const itemList = [
    {title: "Context Box 1"},
    {title: "Context Box 2"},
    {title: "Context Box 3"},
    {title: "Context Box 4"},
    {title: "Context Box 5"},
    {title: "Context Box 6"},
    {title: "Context Box 7"},
    {title: "Context Box 8"},
    {title: "Context Box 9"},
    {title: "Context Box 10"},
    {title: "Context Box 11"},
]
const actionBtn = document.querySelector('#action-btn');
// const hiddenItems = document.querySelector('.hidden-items');

// actionBtn.addEventListener('click', () => {
//     hiddenItems.classList.remove('hidden-items')
// })

const firstLoadedBox = document.querySelector('.content-items');

function createContentBox(content) {
    const contentBox = `
        <div class="box">
            <p>${content.title}</p>
        </div>
    `;
    return contentBox;
};

// loading initial contents
let contentBoxIndex = 0;

for(let i = 0; i <= 3; i++) {
    const boxItem = createContentBox(itemList[i]);
    firstLoadedBox.innerHTML += boxItem;
    contentBoxIndex++
};

actionBtn.addEventListener('click', () => {
    let fourMoreBoxes = (contentBoxIndex + 4);
    if (fourMoreBoxes > itemList.length) {
        fourMoreBoxes = itemList.length;
    }
    for(let i = contentBoxIndex; i < fourMoreBoxes; i++) {
        const boxItem = createContentBox(itemList[i]);
        firstLoadedBox.innerHTML += boxItem;
        contentBoxIndex++
    }
});