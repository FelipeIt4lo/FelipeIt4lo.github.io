let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('op-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('op-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('op-menu')
})