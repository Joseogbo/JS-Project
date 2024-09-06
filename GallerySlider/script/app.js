const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn')

let currentIndex = 0;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(${-index * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});