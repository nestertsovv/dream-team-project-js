import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css/navigation';
import { Navigation, Keyboard } from 'swiper/modules';
import { getComment } from './api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorSvg from '../img/reviews/error.svg';

const listEl = document.querySelector('.js-swiper-rev');

document.addEventListener('DOMContentLoaded', renderReviews);

function createMarkup(arr) {
  return arr
    .map(obj => {
      return `
      <li class="swiper-slide reviews-item">
        <div class="reviews-list-container">
          <img class ="reviews-image" src="${obj.avatar_url}" 
          alt="picture" loading="lazy"/>
        </div>
        <div class= "text-container-img">
          <h2 class="title-rev">${obj.author}</h2>
          <p class = "text-rev">
            ${obj.review}
          </p> 
        </div>
      </li>`;
    })
    .join('');
}

async function renderReviews() {
  try {
    const response = await getComment();

    response.data.forEach(el => {
      if (el.review.length >= 180) {
        el.review = el.review.slice(0, 180) + '...';
      }
    });

    listEl.insertAdjacentHTML('beforeend', createMarkup(response.data));
  } catch (error) {
    iziToast.error({
      title: 'Error',
      titleColor: '#fff',
      messageColor: '#fff',
      iconUrl: errorSvg,
      message: 'Not found!',
      backgroundColor: 'red',
      position: 'topRight',
    });
  }
}

const swiper = new Swiper('.revSwiper', {
  navigation: {
    nextEl: '.js-r',
    prevEl: '.js-l',
  },
  simulateTouch: true,
  slidesPerView: 4,
  freeMode: true,
  spaceBetween: 16,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  modules: [Navigation, Keyboard],
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});
