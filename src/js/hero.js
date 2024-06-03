const defaultColor = 'olive';

const colorsBG = {
  olive: '#9db425',
  orange: '#fe902b',
  rosy: '#e64f79',
  terracotta: '#9a4360',
  lilac: '#786bcb',
  turquoise: '#005d7c',
};

const colorsText = {
  olive: '#acc720',
  orange: '#ff8514',
  rosy: '#f35480',
  terracotta: '#9a4360',
  lilac: '#9679f8',
  turquoise: '#147da1',
};

const colorSelectorBtn = document.querySelector('.color-selector-btn');
const ul = document.querySelector('.color-circles');
const classBgColor = '.bg-color';
const classTextColor = '.text-color';

let userColorTheme = localStorage.getItem('colorTheme') || defaultColor;

document.addEventListener('DOMContentLoaded', () => {
  changeColorTheme(userColorTheme);
});

colorSelectorBtn.addEventListener('click', onSelectorClick);

function onSelectorClick(e) {
  colorSelectorBtn.classList.add('hidden');

  ul.classList.remove('hidden');

  document.addEventListener('mousedown', hideColors);

  ul.querySelector(`button[data-color=${userColorTheme}]`).classList.add(
    'active'
  );
  ul.addEventListener('click', onColorClick);
  ul.addEventListener('mousemove', onColorsSlide);
  ul.addEventListener('mouseout', colorThemePreviewOff);
}

function hideColors(e) {
  if (e.target.classList.contains('color-circle')) {
    return;
  }

  ul.classList.add('hidden');
  colorSelectorBtn.classList.remove('hidden');
  document.removeEventListener('mousedown', hideColors);

  ul.removeEventListener('click', onColorClick);
  ul.removeEventListener('mousemove', onColorsSlide);
  ul.removeEventListener('mouseout', colorThemePreviewOff);
}

function onColorClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  userColorTheme = e.target.dataset.color;
  ul.querySelector('.active').classList.remove('active');
  e.target.classList.add('active');

  saveColorToLocalStorage(userColorTheme);
  changeColorTheme(userColorTheme);
}

function changeColorTheme(value) {
  const bgArr = document.querySelectorAll(classBgColor);
  const colorArr = document.querySelectorAll(classTextColor);

  bgArr.forEach(color => {
    color.style.setProperty('--main-color', colorsBG[value]);
  });

  colorArr.forEach(color => {
    color.style.setProperty('--main-color-text', colorsText[value]);
  });
}

function saveColorToLocalStorage(value) {
  localStorage.setItem('colorTheme', value);
}
// THEME CHANGE ON HOVER

function onColorsSlide(e) {
  const hoveredColor = e.target.dataset.color;
  if (userColorTheme !== hoveredColor) changeColorTheme(hoveredColor);
}

function colorThemePreviewOff(e) {
  changeColorTheme(userColorTheme);
}
