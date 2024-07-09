let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let slideInterval = null;

function startSlideShow() {
  slideInterval = setInterval(() => {
    slideIndex = (slideIndex + 1) % totalSlides;
    updateSlide();
  }, 3000); 
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

function updateSlide() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - slideIndex) * 100}%)`;
  });
}

startSlideShow();

document.querySelectorAll('.prev, .next').forEach(button => {
  button.addEventListener('click', () => {
    stopSlideShow();
    if (button.classList.contains('prev')) {
      slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    } else {
      slideIndex = (slideIndex + 1) % totalSlides;
    }
    updateSlide();
    startSlideShow();
  });
});
