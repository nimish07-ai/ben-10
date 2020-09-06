const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-link');


burger.addEventListener('click', () => {
    menu.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    })
})