const button = document.querySelector('button')
const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const ul = document.querySelector('ul')

button.addEventListener('click',()=>{
    menu.style.height = '190px';
    menu.style.display = "flex";
    close.style.display="flex";
})

close.addEventListener('click',()=>{
    menu.style.height = '0';
    menu.style.display = 'none';
    close.style.display = 'none';
})
