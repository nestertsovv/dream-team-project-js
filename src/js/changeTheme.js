const refs = {
  btn: document.querySelector('.js-change-theme'),
  select: document.querySelector('.theme-color'),
};

const lime = '#c6e327';
const red = '#ed3b44';
const blue = '#0041e8';
const tomato = '#e6533c';
const green = '#2b4441';
const orange = '#ff7f08';
let newColor = lime;

const classBG = '.bg-color';
const classTextColor = '.text-color';

refs.select.addEventListener('change', onChangeColor);

function onChangeColor(e) {
  const value = e.target.value;

  const bgArr = document.querySelectorAll(classBG);
  const colorArr = document.querySelectorAll(classTextColor);

  switch (value) {
    case 'lime':
      newColor = lime;
      break;

    case 'red':
      newColor = red;
      break;

    case 'blue':
      newColor = blue;
      break;

    case 'tomato':
      newColor = tomato;
      break;

    case 'green':
      newColor = green;
      break;

    case 'orange':
      newColor = orange;
      break;

    default:
      break;
  }

  bgArr.forEach(color => {
    color.style.setProperty('--red', newColor);
  });

  colorArr.forEach(color => {
    color.style.setProperty('--red', newColor);
  });
}
