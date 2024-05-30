import { createNewComment } from './api';
import { createModal } from './createModal';
import {
  onBackdropCloseModal,
  onBtnCloseModal,
  onEscCloseModal,
} from './closeModal';

const formElem = document.querySelector('.js-works-form');
const modalEl = document.querySelector('#modal');

formElem.addEventListener('submit', onSubmit);

async function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const newComment = {
    email: formData.get('email'),
    comment: formData.get('comment'),
  };

  try {
    const result = await createNewComment(newComment);
    const modalTitle = result.title;
    const modalDescr = result.message;

    const markup = createModal(modalTitle, modalDescr);

    modalEl.innerHTML = markup;

    modalEl.classList.add('is-open');

    const modalBtn = document.querySelector('.js-modal-btn');

    modalBtn.addEventListener('click', onBtnCloseModal);
    modalEl.addEventListener('click', onBackdropCloseModal);
    document.addEventListener('keydown', onEscCloseModal);
  } catch (error) {
    console.log(error);
  } finally {
    e.target.reset();
  }
}

function onBtnCloseModal(e) {
  modalEl.classList.remove('is-open');
}

function onBackdropCloseModal(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  modalEl.classList.remove('is-open');
}

function onEscCloseModal(e) {
  if (e.key === 'Escape') {
    modalEl.classList.remove('is-open');
    document.removeEventListener('keydown', onEscCloseModal);
  }
}
