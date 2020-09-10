const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-link');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line3');


burger.addEventListener('click', () => {
    menu.classList.toggle('open');
    burger.classList.toggle('burger-rotate');
    line1.classList.toggle('line-rotate');
    line2.classList.toggle('line-rotate');
    links.forEach(link => {
        link.classList.toggle('fade');
    })
});


// script for carousel***************


// function slidedown() {
//     $('.heading-slider').animate({
//         top: '-=150'
//     }, 2000)
// };

// function slideup() {
//     $('.heading-slider').animate({
//         top: '+=150px'
//     }, 2000)
// };

// function headingslider() {
//     var m = 2;
//     while (m > 0) {
//         var i = 0,
//             j = 0;

//         for (i = 0; i < 3; i++) {
//             setTimeout(slidedown(), 3000);
//             console.log('on');
//         };
//         for (j = 0; j < 3; j++) {
//             setTimeout(slidedown(), 3000);
//             console.log('off');
//         };
//     }
// }
// headingslider();








const categorycard = document.querySelector('.category-section-column');

function alert() {
    alert('mkbsda')
}