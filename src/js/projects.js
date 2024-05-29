import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

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
  modules: [Navigation],
});
