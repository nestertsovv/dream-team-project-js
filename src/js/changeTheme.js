const refs = {
  btn: document.querySelector('.js-change-theme'),
  select: document.querySelector('.theme-color'),
};

let color = '#ed3b44';
const classBG = '.bg-color';
const classTextColor = '.text-color';

refs.select.addEventListener('change', onChangeColor);

function onChangeColor(e) {
  const value = e.target.value;

  const bgArr = document.querySelectorAll(classBG);
}
