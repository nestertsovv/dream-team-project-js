import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';
import { images1x, images2x } from './images';

const ulElem = document.querySelector('.js-swiper');

const imagesProject = [
  {
    description: 'Window registration, white',
  },
  {
    description: 'Pet love , dog',
  },
  {
    description: 'Window registration, black',
  },
];

imagesProject.forEach((el, indx) => {
  const del = images1x.length / 2 + indx;

  el.previewMob1x = `${images1x[del]}`;
  el.previewMob2x = `${images2x[del]}`;
  el.previewDesc1x = `${images1x[indx]}`;
  el.previewDesc2x = `${images2x[indx]}`;
});

const markup = imgsTemplate(imagesProject);
ulElem.innerHTML = markup;

function imgTemplate(img) {
  return ` <li class="swiper-slide">
          <div class="box-content js-content">
            <div class="box-text">
              <div class="box-it-text">
                <p class="it-text">#react</p>
                <p class="it-text">#js</p>
                <p class="it-text">#node js</p>
                <p class="it-text">#git</p>
              </div>
              <h3 class="caption-project">
                Programming Across Borders: Ideas, Technologies, Innovations
              </h3>
              <a
                href="https://github.com/nestertsovv/dream-team-project-js"
                class="main-btn btn-mail"
                target="_blank"
              >
                <div class="btn-bg bg-color btn-projects"></div>
                <span>See project</span>
              </a>
            </div>
            <div class="box-img">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcset="
                    ${img.previewDesc1x} 1x,
                    ${img.previewDesc2x} 2x
                  "
                  type="image/avif"
                />
                <source
                  media="(max-width: 767px)"
                  srcset="
                    ${img.previewMob1x} 1x,
                    ${img.previewMob2x} 2x
                  "
                  type="image/avif"
                />
                <img
                  src="${img.previewDesc2x}"
                  alt="${img.description}"
                  class="img-projects"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </li>`;
}

function imgsTemplate(imgs) {
  return imgs.map(imgTemplate).join('');
}

const swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.js-arrow-r',
    prevEl: '.js-arrow-l',
  },
  simulateTouch: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: false,
  },
  modules: [Navigation, Keyboard],
});
