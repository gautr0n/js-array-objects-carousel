const carouselBody = document.getElementById('carousel-body');

carouselBody.innerHTML +=
    `<div class="slide active">
        <img src="./img/01.jpg" alt="">
    </div>`;

for ( let i = 2 ; i <= 5 ; i++){
    carouselBody.innerHTML +=
        `<div class="slide">
            <img src="./img/0${i}.jpg" alt="">
        </div>`; 
}

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