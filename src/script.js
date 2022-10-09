new Swiper('.image-slider', {
  autoHeight: true,

  // Включено перетаскивание на ПК
  simulateTouch: true,

  // Чувчтвительность свайпа
  touchRatio: 2,

  // Угол срабатівания сайпа
  touchAngle: 45,

  // Курсор перетаскивания
  grabCursor: true,

  // Переключение при клике на слайд
  slideToClickedSlide: true,

  //   Управление клавиатурой
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  spaceBetween: 10,

  slidesPerGroup: 1,

  centeredSlides: true,

  freemode: true,

  autoplay: {
    delay: 1000,
    stopOnLastSlide: true,
    disableOnIneraction: false,
  },
  speed: 800,

  effect: 'flip',
  flipEffect: {
    slideShadows: true,
    limitRotation: true,
  },
});
