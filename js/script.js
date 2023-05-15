let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');


burger.addEventListener('click',
  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  });
});

let icon = document.querySelector('.search__icon');
let search = document.querySelector('.search-form');
let closeForm = document.querySelector('.search-form__close');


icon.addEventListener('click', function () {
  search.classList.toggle('search-form--active');
});

closeForm.addEventListener('click', function (event) {
  event.preventDefault();
  search.classList.remove('search-form--active');
});




const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

let tabsBtn = document.querySelectorAll('.how__link');
let tabsItem = document.querySelectorAll('.how__body');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('how__link--active') });
    e.currentTarget.classList.add('how__link--active');

    tabsItem.forEach(function (element) { element.classList.remove('how__link-content--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('how__link-content--active');
  });
});


new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active',
});


