const refs = {
  btn: document.querySelector('.js-change-theme'),
  select: document.querySelector('.theme-color'),
};

const colors = [
  '#c6e327',
  '#ed3b44',
  '#0041e8',
  '#e6533c',
  '#2b4441',
  '#ff7f08',
];

const classBgColor = '.bg-color';
const classTextColor = '.text-color';

refs.select.addEventListener('change', onChangeColor);

function onChangeColor(e) {
  const value = e.target.value;

  const bgArr = document.querySelectorAll(classBgColor);
  const colorArr = document.querySelectorAll(classTextColor);

  bgArr.forEach(color => {
    color.style.setProperty('--main-color', colors[value]);
  });

  colorArr.forEach(color => {
    color.style.setProperty('--main-color', colors[value]);
  });
}
