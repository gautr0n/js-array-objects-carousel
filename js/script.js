const images = [
    {
        image: './img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];

const carouselBody = document.getElementById('carousel-body');
 
const carouselSlide = document.createElement('div');

for ( let i = 0 ; i < images.length ; i++){
    let slide = document.createElement('div');
    if (i === 0){
        slide.classList.add('active');
        slide.classList.add('slide');
    } else{
        slide.classList.add('slide');
    };
    let imagesPrint = images[i];
    slide.innerHTML = `
    <div class="title">${imagesPrint.title}</div>
    <img src="${imagesPrint.image}" alt="">
    <div class="text">${imagesPrint.text}</div>
`  
    carouselSlide.append(slide);
};

carouselBody.append(carouselSlide);

/* carouselBody.innerHTML +=
    `<div class="slide active">
        <img src="./img/01.jpg" alt="">
    </div>`;

for ( let i = 2 ; i <= 5 ; i++){
    carouselBody.innerHTML +=
        `<div class="slide">
            <img src="./img/0${i}.jpg" alt="">
        </div>`; 
} */

carouselBody.innerHTML +=
    `<div class="carousel__arrow arrow-left">
        <i class="fa-solid fa-chevron-left"></i>
    </div>

    <div class="carousel__arrow arrow-right">
        <i class="fa-solid fa-chevron-right"></i>
    </div>`;

let activeSlide = 0;
const slideElements = document.querySelectorAll('.slide');
console.log(slideElements);

const rightBtnElement = document.querySelector('.carousel__arrow.arrow-right');
const leftBtnElement = document.querySelector('.carousel__arrow.arrow-left');

rightBtnElement.addEventListener('click', function () {
	console.log(activeSlide);

    if (activeSlide < 4){

        let actualSlide = slideElements[activeSlide];
        actualSlide.classList.remove('active');

        activeSlide += 1;

        let nextSlide = slideElements[activeSlide];
        nextSlide.classList.add('active');

        console.log(activeSlide);
    } else if (activeSlide = 4){

        let actualSlide = slideElements[activeSlide];
	    actualSlide.classList.remove('active');

        activeSlide = 0;

	    let nextSlide = slideElements[activeSlide];
	    nextSlide.classList.add('active');

        console.log(activeSlide);
    }
})

leftBtnElement.addEventListener('click', function () {
	console.log(activeSlide);

    if (activeSlide == 0){

        let actualSlide = slideElements[activeSlide];
        actualSlide.classList.remove('active');

        activeSlide = 4;

        let nextSlide = slideElements[activeSlide];
        nextSlide.classList.add('active');

        console.log(activeSlide);
    } else if (activeSlide <= 4){

        let actualSlide = slideElements[activeSlide];
	    actualSlide.classList.remove('active');

        activeSlide = activeSlide - 1;

	    let nextSlide = slideElements[activeSlide];
	    nextSlide.classList.add('active');

        console.log(activeSlide);
    }
})