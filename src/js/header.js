// MENU DESKTOP

const nav = document.querySelector('.js-desk-menu');
const menu = nav.querySelector('.js-menu-btn');
const menuList = nav.querySelector('.js-menu-list');
const burgerBtn = document.querySelector('.js-burger-btn');
const mobMenu = document.querySelector('.js-mob-menu');
const crossBtn = document.querySelector('.js-cross');

nav.addEventListener('click', onNavClick);
mobMenu.addEventListener('click', onMobMenuItemClick);
burgerBtn.addEventListener('click', onBurgerClick);
crossBtn.addEventListener('click', onCrossClick);

function onNavClick(evt) {
  if (evt.target === menu) {
    menuList.classList.toggle('is-open-menu');
    evt.stopPropagation();
    document.addEventListener('click', quitMenu);
    return;
  }
  if (evt.target.classList.contains('menu-link')) {
    menuList.classList.remove('is-open-menu');
  }
}

function quitMenu(e) {
  if (e.target.nodeName === 'A') return;
  menuList.classList.remove('is-open-menu');
  document.removeEventListener('click', quitMenu);
}

// MENU MOBILE
// open
function onBurgerClick() {
  document.body.classList.add('is-open');
}

// close
function onCrossClick() {
  document.body.classList.remove('is-open');
}

function onMobMenuItemClick(evt) {
  if (evt.target.nodeName === 'A') {
    document.body.classList.remove('is-open');
  }
}
