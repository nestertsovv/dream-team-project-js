import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

import 'swiper/css/bundle';

new Accordion('.description', {
    elementClass: "description-li",
    triggerClass: "description-item",
    panelClass: "description-content",
    activeClass: "svg-flip"
}).open(0);

new Swiper(".languages", {
    modules: [Navigation, Keyboard],
    slidesPerView: 'auto',
    freeMode: true,
    loop: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    navigation: {
        nextEl: ".languages-next-btn",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        462: {
            slidesPerView: 3,
        },
        592: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 6,
        },
    },
});