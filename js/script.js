const testimonialsSlider = new Swiper('.testimonials__slider', {
  slidesPerView: 4,
  loop: false,
  centeredSlides: true,
  // spaceBetween: 30,
  // slideActiveClass: 'slider__slide--active',
  // slideNextClass: 'slider__slide--next',

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

// window.addEventListener('resize', function() {

// })

const formInputs = document.querySelectorAll('.form__input')
const submitBtn = document.querySelector('#form__button')

function checkInput () {

  Array.from(formInputs)
    .map(e => e.value)
    .includes('') ?
      submitBtn.setAttribute('disabled', '') :
      submitBtn.removeAttribute('disabled')

}

formInputs.forEach(input => input.addEventListener('input', checkInput))
