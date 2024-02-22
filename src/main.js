const btnMenu = document.getElementById('btnMenu');

btnMenu.addEventListener('click' , () => {
    

    document.querySelector('.hamburguer').classList.toggle('is-active');
    document.querySelector('.mobile-nav').classList.toggle('is-active');
})