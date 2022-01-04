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
