const images = document.querySelectorAll('#carousel img');

let currentActiveIndex = 0;

images[currentActiveIndex].classList.add('active');

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

nextButton.addEventListener('click', function () {
    images[currentActiveIndex].classList.remove('active');

    currentActiveIndex++;

    if (currentActiveIndex === images.length) {
        currentActiveIndex = 0;
    }

    images[currentActiveIndex].classList.add('active');
});