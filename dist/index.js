"use strict";
const images = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('li');
listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllImages();
        hideAllItems();
        item.classList.add('active');
        images[idx].classList.add('show');
    });
});
function hideAllImages() {
    images.forEach((image) => image.classList.remove('show'));
}
function hideAllItems() {
    listItems.forEach((item) => item.classList.remove('active'));
}
//# sourceMappingURL=index.js.map