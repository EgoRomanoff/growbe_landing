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

const blogSlider = new Swiper('.blog__slider', {
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