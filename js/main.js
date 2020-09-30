///NAVBAR


window.addEventListener("scroll", () => {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
})

const arraySparse = [1,3,,7]
let numCallbackRuns = 0





const navLinks = document.getElementsByClassName('navigation__link');

for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
        navLinks[i].classList.toggle('active');
        let j = i;
        for(k = 0; k < navLinks.length; k++) {
            if(k !== j) {
                navLinks[k].classList.remove('active');
            }
        }
    })

    
}

//SLIDER

const nextBtn = document.querySelector('.carousel-control-next');
const prevBtn = document.querySelector('.carousel-control-prev');
const slides = document.querySelectorAll('.slider__item');

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})  


let counter = 0;

nextBtn.addEventListener('click', () => {
    counter++;
    carousel();
})

prevBtn.addEventListener('click', () => {
    counter--;
    carousel();
})


const carousel = () => {
    if(counter === slides.length) {
        counter = 0;
    } else if(counter < 0) {
        counter = slides.length - 1;
    }


    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}


// TOGGLE BUTTON
const toggleBtn = document.querySelector('.toggle-button');
const nav = document.querySelector('.navigation__list');

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    nav.classList.toggle('u-margin-top-sm');
})





//WORK

const items = document.getElementsByClassName('gallery-images__item');
const menu = document.getElementsByClassName('menu__item');


menu[0].addEventListener('click', () => {
    for(j = 0; j < items.length; j++) {
        
            items[j].classList.remove('disable');
        
    }
})

for(let i = 1; i < menu.length; i++) {
    menu[i].addEventListener('click', () => {
         
            for(j = 0; j < items.length; j++) {
                if(!(items[j].classList.contains(menu[i].textContent.toLowerCase()))) {
                    items[j].classList.toggle('disable');
                }
            }
        

        
    })
}







