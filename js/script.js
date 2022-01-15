const testimonialsSlider = new Swiper('.testimonials__slider', {
  slidesPerView: 'auto',
  loop: false,
  centeredSlides: true,
  spaceBetween: 30,
  // setWrapperSize: true,

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
  spaceBetween: 30,
  // setWrapperSize: true,

  pagination: {
    el: '.slider__dots',
    clickable: true,
    bulletClass: 'dot',
    bulletActiveClass: 'dot--active',
  }
})

const formInputs = document.querySelectorAll('.form__input')
const submitBtn = document.querySelector('#form__button')
const burgerBtn = document.querySelector('#button--burger')
const headerMenu = document.querySelector('.header__menu')
const dimmer = document.querySelector('.dimmer')

function checkInput () {

  Array.from(formInputs)
    .map(e => e.value)
    .includes('') ?
      submitBtn.setAttribute('disabled', '') :
      submitBtn.removeAttribute('disabled')

}

burgerBtn.addEventListener('click', function() {
  burgerBtn.classList.toggle('active')

  if (!dimmer.classList.contains('showed')) {
    dimmer.style.display = 'block'
    headerMenu.classList.toggle('showed')
    setTimeout(() => {
      dimmer.classList.toggle('showed')
    }, 0)
  } else {
    headerMenu.classList.toggle('showed')
    setTimeout(() => {
      dimmer.style.display = 'none'
    }, 400)
    dimmer.classList.toggle('showed')
  }

  if(!burgerBtn.classList.contains('active')) {
    burgerBtn.classList.toggle('not-active')
  } else {
    burgerBtn.classList.remove('not-active')
  }

})

formInputs.forEach(input => input.addEventListener('input', checkInput))
