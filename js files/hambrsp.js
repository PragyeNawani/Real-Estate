burger = document.querySelector('.hamb')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightnav = document.querySelector('.navright')
button = document.querySelector('.btnnavsearch')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('navbar-rsp');
    rightnav.classList.toggle('navright-rsp');
    navlist.classList.toggle('navlist-rsp');
    button.classList.toggle('btnnavsearch-rsp');
})