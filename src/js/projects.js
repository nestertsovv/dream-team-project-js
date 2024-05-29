import projects1 from '../img/projects/projects2@1x.png';

const refs = {
  arrowLeft: document.querySelector('.js-arrow-l'),
  arrowRight: document.querySelector('.js-arrow-r'),
  arrowEl: document.querySelector('.js-arrow'),
  contentEl: document.querySelector('.js-content'),
};

const imgs = {
  projects1: {
    smalUrl: projects1,
  },
};

refs.arrowEl.addEventListener('click', e => {
  const target = e.target;

  if (target.nodeName !== 'svg') return;
  refs.contentEl.innerHTML = '';

  refs.contentEl.innerHTML = `  <div class="box-text">
        <div class="box-it-text">
          <p class="it-text">#react</p>
          <p class="it-text">#js</p>
          <p class="it-text">#node js</p>
          <p class="it-text">#git</p>
        </div>
        <h3 class="caption-project">
          Programming Across Borders: Ideas, Technologies, Innovations
        </h3>
        <button type="button" class="main-btn">
          <div class="btn-bg bg-color"></div>
          <span>See project</span>
        </button>
      </div>
      <div class="box-img">
        <picture>
          <!-- <source
            media="(min-width: 1378px)"
            srcset="
          ./img/projects/projects1@1x.png 1x
          ./img/projects/projects1@2x.png 2x"
            type="image/png"
          /> -->
          <!-- <source media="(min-width: )" srcset="" type="image/" />
        <source media="(min-width: )" srcset="" type="image/" /> -->
          <img src="${imgs.projects1.smalUrl}" alt="Modal window" />
        </picture>
      </div>
    </div>`;
});
