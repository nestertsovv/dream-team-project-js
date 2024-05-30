import { createNewComment } from './api';
import { createModal } from './createModal';
import {
  onBackdropCloseModal,
  onBtnCloseModal,
  onEscCloseModal,
} from './closeModal';

const formElem = document.querySelector('.js-works-form');
export const modalEl = document.querySelector('#modal');

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
    document.body.style.overflow = 'hidden';
  } catch (error) {
    console.log(error);
  } finally {
    e.target.reset();
  }
}
