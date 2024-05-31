const colorsBG = {
  olive: '#9db425',
  orange: '#fe902b',
  rosy: '#e64f79',
  terracotte: '#9a4360',
  lilac: '#786bcb',
  turquoise: '#005d7c',
};

const colorsText = {
  olive: '#acc720',
  orange: '#ff8514',
  rosy: '#f35480',
  terracotte: '#9a4360',
  lilac: '#9679f8',
  turquoise: '#147da1',
};

const colorSelectorBtn = document.querySelector('.color-selector-btn');
const ul = document.querySelector('.color-circles');
const classBgColor = '.bg-color';
const classTextColor = '.text-color';

colorSelectorBtn.addEventListener('click', onSelectorClick);

function onSelectorClick(e) {
  colorSelectorBtn.classList.add('hidden');

  ul.classList.remove('hidden');

  document.addEventListener('mousedown', hideColors);
}

function hideColors(e) {
  if (e.target.classList.contains('color-circle')) {
    return;
  }

  ul.classList.add('hidden');
  colorSelectorBtn.classList.remove('hidden');
  document.removeEventListener('mousedown', hideColors);
}

ul.addEventListener('click', onColorClick);

function onColorClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const target = e.target;
  const value = e.target.value;
  const active = ul.querySelector('.active');

  const bgArr = document.querySelectorAll(classBgColor);
  const colorArr = document.querySelectorAll(classTextColor);

  active.classList.remove('active');
  target.classList.add('active');

  bgArr.forEach(color => {
    color.style.setProperty('--main-color', colorsBG[value]);
  });

  colorArr.forEach(color => {
    color.style.setProperty('--main-color-text', colorsText[value]);
  });
}
