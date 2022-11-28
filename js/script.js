let menu = document.querySelector('#menu');
let menuBtn = document.querySelector('#menuBtn');
let closeBtn = document.querySelector('#closeBtn');

menuBtn.addEventListener('click', ()=> {
    menuBtn.classList.toggle('hidden')

    if(closeBtn.classList.contains('hidden')){
        closeBtn.classList.remove('hidden')
        closeBtn.classList.add('block')
    }

    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
        menu.classList.add('flex')
    }
    
})

closeBtn.addEventListener('click', ()=> {
    closeBtn.classList.toggle('hidden')

    menu.classList.remove('flex')
    menu.classList.add('hidden')

    if(menuBtn.classList.contains('hidden')){
        menuBtn.classList.remove('hidden')
        menuBtn.classList.add('block')
    }
})