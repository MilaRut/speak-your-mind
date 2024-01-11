const slider = document.querySelector('.slider');
const prev = document.querySelector('.btn-prev');
const next = document.querySelector('.btn-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let index = 0;

function initSlider() {
  if (slider) {
    const activeSlide = (n) => {
      slides.forEach((slide) => {
        slide.classList.remove('is-active');
      });
      slides[n].classList.add('is-active');
    };

    const activeDot = (n) => {
      dots.forEach((dot) => {
        dot.classList.remove('is-active');
      });
      dots[n].classList.add('is-active');
    };

    const prepareCurrentSlide = () => {
      activeSlide(index);
      activeDot(index);
    };

    const nextSlide = () => {
      if (index === slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
      } else {
        index++;
        prepareCurrentSlide(index);
      }
    };

    const prevSlide = () => {
      if (index === 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
      } else {
        index--;
        prepareCurrentSlide(index);
      }
    };

    dots.forEach((item, indexDot) => {
      item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
      });
    });

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    // Автоматическое переключение слайдов

    setInterval(() => nextSlide(), 3000);
  }
}

export {initSlider};


