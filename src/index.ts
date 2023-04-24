const images = document.querySelectorAll<HTMLBodyElement>('.content')
const listItems = document.querySelectorAll<HTMLBodyElement>('li')

listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllImages()
        hideAllItems()

        item.classList.add('active')
        images[idx].classList.add('show')
    })
});

function hideAllImages() {
    images.forEach((image) => image.classList.remove('show'))
}
function hideAllItems() {
    listItems.forEach((item) => item.classList.remove('active'))
}