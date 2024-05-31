// MENU DESKTOP

const nav = document.querySelector('.js-desk-menu');
const menu = nav.querySelector('.js-menu-btn');
const menuList = nav.querySelector('.js-menu-list');
nav.addEventListener('click', onNavClick);

function onNavClick(evt) {
  if (evt.target === menu) {
    menuList.classList.toggle('is-open-menu');
    return;
  }
  if (evt.target.classList.contains('menu-link')) {
    menuList.classList.remove('is-open-menu');
  }
}

// MENU MOBILE
// open
const burgerBtn = document.querySelector('.js-burger-btn');
const mobMenu = document.querySelector('.js-mob-menu');
burgerBtn.addEventListener('click', onBurgerClick);

function onBurgerClick() {
  document.body.classList.add('is-open');
}
// close
const crossBtn = document.querySelector('.js-cross');
crossBtn.addEventListener('click', onCrossClick);

function onCrossClick() {
  document.body.classList.remove('is-open');
}

mobMenu.addEventListener('click', onMobMenuItemClick);

function onMobMenuItemClick(evt) {
  if (evt.target.nodeName === 'A') {
    document.body.classList.remove('is-open');
  }
}
