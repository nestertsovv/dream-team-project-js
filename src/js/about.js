import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css/bundle';



new Accordion('.description', {
    elementClass: "description-li",
    triggerClass: "description-button",
    panelClass: "description-content",
    activeClass: "svg-flip"
});

var swiper = new Swiper(".languages", {
    slidesPerView: "auto",
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
    },
});


