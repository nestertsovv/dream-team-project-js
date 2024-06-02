// const refs = {
//   btn: document.querySelector('.js-change-theme'),
//   select: document.querySelector('.theme-color'),
// };

// const colorsBG = [
//   '#9db425',
//   '#005d7c',
//   '#786bcb',
//   '#e64f79',
//   '#9a4360',
//   '#fe902b',
// ];

// const colorsText = [
//   '#acc720',
//   '#147da1',
//   '#9679f8',
//   '#f35480',
//   '#9a4360',
//   '#ff8514',
// ];

// const classBgColor = '.bg-color';
// const classTextColor = '.text-color';

// refs.select.addEventListener('change', onChangeColor);

// function onChangeColor(e) {
//   const value = e.target.value;

//   const bgArr = document.querySelectorAll(classBgColor);
//   const colorArr = document.querySelectorAll(classTextColor);

//   bgArr.forEach(color => {
//     color.style.setProperty('--main-color', colorsBG[value]);
//   });

//   colorArr.forEach(color => {
//     color.style.setProperty('--main-color-text', colorsText[value]);
//   });
// }
