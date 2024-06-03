import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

import arrowDown from '../img/about/arrow-down.svg';

import 'swiper/css/bundle';

const description = document.querySelector('.description');
const languagesSwiper = document.querySelector('.languages-swiper');

const descriptionList = [
  {
    header: 'ABOUT ME',
    descriptions: [
      'I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages ​​and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.',
      'Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software.',
    ],
  },
  {
    header: 'ROLE',
    descriptions: [
      'Frontend development',
      'HeadlessCMS,Wordpress',
      'Blender(enjoy)',
    ],
  },
  {
    header: 'EDUCATION',
    descriptions: [
      '2018 - 2019 / Frontend Development Diploma, GoIT IT School, New York',
      '2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York',
      '2020 - 2022 / Advanced Blender Animation Techniques, Udemy',
    ],
  },
];

const languagesList = [
  'HTML/CSS',
  'JavaScript',
  'React',
  'Node. js',
  'React Native',
  'Vue .js',
  'Angular',
  'Soft skills',
];

// Description

renderDescription();

renderLanguages();

async function renderDescription() {
  let innerHTML = '';
  for (const elem of descriptionList) {
    let svgData = '';
    await fetch(arrowDown)
      .then(response => response.text())
      .then(data => {
        svgData = data;
      });

    innerHTML += `<li class="description-li">
                    <div class="description-item">
                        <h3 class="section-name">${elem.header}</h3>
                            <button class="description-button">
                            ${svgData}
                            </button>
                            </div>
                            <div class="description-content">
                                <ul>`;

    for (const description of elem.descriptions) {
      innerHTML += `<li>${description}</li>`;
    }

    innerHTML += `</ul>
                </div>
            </li>`;
  }
  description.innerHTML += innerHTML;

  new Accordion('.description', {
    elementClass: 'description-li',
    triggerClass: 'description-item',
    panelClass: 'description-content',
    activeClass: 'svg-flip',
  }).open(0);
}

// Languages

function renderLanguages() {
  let innerHTML = '';

  languagesList.forEach(elem => {
    innerHTML += `<li class="swiper-slide bg-color">${elem}</li>`;
  });

  languagesSwiper.querySelector('ul').innerHTML += innerHTML;
}

new Swiper('.languages-swiper', {
  modules: [Navigation, Keyboard],
  slidesPerView: 6,
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: false,
  },
  navigation: {
    nextEl: '.languages-next-btn',
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
    722: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});
