const slides = document.getElementById('slides');
const allSlides = document.querySelectorAll('.slide');
const slideWidth = allSlides[0].offsetWidth;

const prev = document.getElementById('prev');
const next = document.getElementById('next');

next.addEventListener('click', () => switchSlide("next"));
prev.addEventListener('click', () => switchSlide("prev"));

function switchSlide(arg){
    if (arg == 'next') {
        slides.style.left = `${slides.offsetLeft - slideWidth}px`;
    }
}
