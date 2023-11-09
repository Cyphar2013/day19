const copy = document.querySelector('.copy-me')

copy.addEventListener('copy', () => {
    console.log('My content is copyright')
})

const box = document.querySelector('.box')

box.addEventListener('mouseover', e => {
    box.textContent = `x point - ${e.offsetX} y point - ${e.offsetY}`
});

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
})