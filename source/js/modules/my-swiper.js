const swiper = document.querySelector('#swiper-1');

function initSwiper() {

  if (!swiper) {
    return;
  }

  // eslint-disable-next-line
  new Swiper('#swiper-1', {
    navigation: {
      nextEl: '.swiper-btn--next',
      prevEl: '.swiper-btn--prev',
    },
    loop: false,
    slidesPerView: '8',
    spaceBetween: 47,
  });
}

export {initSwiper};
