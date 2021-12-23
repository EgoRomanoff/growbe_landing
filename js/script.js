const testimonialsSlider = new Swiper('.testimonials__slider', {
  slidesPerView: 'auto',
  loop: false,
  centeredSlides: true,

  pagination: {
    el: '.slider__dots',
    clickable: true,
    bulletClass: 'dot',
    bulletActiveClass: 'dot--active',
  }
})