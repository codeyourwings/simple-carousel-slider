// Select the image carousel container
const carousel = document.querySelector('.image-carousel');

// Select all slides
const slides = carousel.querySelectorAll('.slide');

// Select pagination
const pagination = document.querySelectorAll('.pagination .scroll');

// current slide counter
let currentSlide = 0;
let maxSlide = slides.length - 1;

// loop through slides and set each slide's translateX property to index * 100%
slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 150}%)`;
});

slides.forEach((slide, index) => {
    if (index === currentSlide) {
        slide.classList.add('active');
    } else {
        slide.classList.remove('active');
    }
});

pagination.forEach((scroll, index) => {
    if (index === currentSlide) {
        scroll.classList.add('active');
    } else {
        scroll.classList.remove('active');
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        if (currentSlide === maxSlide) {
            currentSlide = 4;
        } else {
            currentSlide++;
        }
    } else if (event.key === "ArrowLeft") {
        if (currentSlide === 0) {
            currentSlide = 0;
        } else {
            currentSlide--;
        }
    }

    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
        slide.style.transform = `translateX(${150 * (index - currentSlide)}%)`;
    });

    pagination.forEach((scroll, index) => {
        if (index === currentSlide) {
            scroll.classList.add('active');
        } else {
            scroll.classList.remove('active');
        }
    });    
});