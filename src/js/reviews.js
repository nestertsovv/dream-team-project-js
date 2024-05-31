import axios from 'axios';
import Swiper from 'swiper';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const listEl = document.querySelector('.js-swiper');

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';
async function getComment(obj) {
  return axios.get('/requests', obj);
}

function createMarkup(arr) {
  return arr
    .map(obj => {
      return `
      
    <li class="reviews-item">
    <div class="reviews-list-container">
    <img class ="reviews-image" src="${image}" 
    alt="picture"/>
        </div>
        <div class= "text-container-img">
        <h2>${obj.result.title}</h2>
        <p class = "text">
${obj.result.message}
         </p> 
        </div>
    </li>`;
    })
    .join('');
}

try {
} catch (error) {
  return iziToast.error({
    title: 'Error',
    titleColor: '#fff',
    messageColor: '#fff',
    iconUrl: errorSvg,
    message: 'Not found!',
    backgroundColor: 'red',
    position: 'topRight',
  });
}

const response = await getPhotos(searchQuery, page);
listEl.insertAdjacentHTML('beforeend', createMarkup(response.data.results));

const swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.js-arrow-r',
    prevEl: '.js-arrow-l',
  },
  simulateTouch: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  modules: [Navigation, Keyboard],
});
