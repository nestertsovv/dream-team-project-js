import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';

const ulElem = document.querySelector('.js-swiper');
const IMG_BASE_URL = '/img/projects/';

//!=======================================================================
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
//!=======================================================================
imagesProject.forEach((el, indx) => {
  el.previewMob1x = `${IMG_BASE_URL}img-mob/img${indx + 1}`;
  el.previewDesc1x = `${IMG_BASE_URL}img-desk-tab/img${indx + 1}`;
});
console.log(imagesProject);
//!=======================================================================

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
                class="main-btn"
                target="_blank"
              >
                <div class="btn-bg bg-color btn-projects"></div>
                <span>See project</span>
              </a>
            </div>
            <div class="box-img">
              <picture>
                <source
                  media="(min-width: 1378px)"
                  srcset="
                    ..${img.previewDesc1x}@1x.avif 1x,
                    ..${img.previewDesc1x}@2x.avif 2x
                  "
                  type="image/avif"
                />
                <source
                  media="(min-width: 768px)"
                  srcset="
                    ..${img.previewDesc1x}@1x.avif 1x,
                    ..${img.previewDesc1x}@2x.avif 2x
                  "
                  type="image/avif"
                />
                <source
                  media="(max-width: 767px)"
                  srcset="
                    ..${img.previewMob1x}-mob@1x.avif 1x,
                    ..${img.previewMob1x}-mob@2x.avif 2x
                  "
                  type="image/avif"
                />
                <img
                  src="..${img.previewDesc1x}"
                  alt="${img.description}"
                  class="img-projects"
                />
              </picture>
            </div>
          </div>
        </li>`;
}

function imgsTemplate(imgs) {
  return imgs.map(imgTemplate).join('');
}
const markup = imgsTemplate(imagesProject);
ulElem.innerHTML = markup;

//!=======================================================================
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
