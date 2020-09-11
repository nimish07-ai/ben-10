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



// *****************************modal script


go_to = "contact-us"
len = document.location.href.length
con = document.location.href.substring(len - 5, len)
if (con !== ".html") {
    con = '';
}

modal_container = document.querySelector('.modal-container')

function modal_magic(flag) //true appear false disappear
{
    if (flag) {
        modal_container.style.display = "block";
    } else {
        // modal_container.style.visiblity = "hidden"
        modal_container.style.display = 'none';

    }
}
modal_magic(false)





but = document.querySelector(".catogree-name-quire-to-contactus")
// lin_length=but.href.last('/')
lin = but.href.lastIndexOf('/')
but.href = but.href.substring(0, lin) + `/contact-us${con} `
// but.href=but.href.[lin_length-1]+`#${document.location.href.split('#')[1]}=`;

cls_modal = document.querySelector(".close-modal")
cls_modal.addEventListener('click', ev => {
    modal_magic(false)
})

opt = ["checkout", "buying"]
opt.forEach(ele => {
    elem = document.querySelector(`#${ele}`)
    elem.addEventListener('click', ev => {
        // link=but.href.split('=')[0]
        but.href = but.href.split('=')[0] + `=${ev.target.value}`;
        // console.log(but.href.split('=')[0]+`${ev.target.value}`)


    })
})



catogree_API = document.querySelectorAll("#catogree_API");
catogree_API.forEach(ev => {
    // console.log(ev,b[i]);

    ev.addEventListener('click', catogree)

})

async function catogree() {
    setTimeout(() => {
        console.log(document.location.href.split('#')[1]);
        // catogree_name=document.location.href.split('#')[1];
        // but.href=but.href.split('#')[0]+`#${catogree_name}`;
        but.href = but.href.split('#')[0] + `#${document.location.href.split('#')[1]}=`;
    }, 100)
    modal_magic(true)

}