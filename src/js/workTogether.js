import { createNewComment } from './api';
import { createModal } from './createModal';
import {
  onBackdropCloseModal,
  onBtnCloseModal,
  onEscCloseModal,
} from './closeModal';
import {
  onChangeForm,
  initValid,
  renderErrorMessage,
  onClickEmailInput,
  onClickCommentInput,
  renderPage,
} from './validation';

export const modalEl = document.querySelector('#modal');
export const emailInput = document.querySelector('.email-input');
export const messageInput = document.querySelector('.comment-input');
export const btnEl = document.querySelector('.js-works-btn');
export const LS_KEY_FORM = 'feedback-form-works';
export const formElem = document.querySelector('.js-works-form');
const validEmail = document.querySelector('.js-small-email');
const validComment = document.querySelector('.js-small-comment');
const notificationEl = document.querySelector('#modal-error');

formElem.addEventListener('submit', onSubmit);
formElem.addEventListener('input', onChangeForm);
document.addEventListener('DOMContentLoaded', renderPage);

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

    const markup = await createModal(modalTitle, modalDescr);

    modalEl.innerHTML = markup;

    modalEl.classList.add('is-open');

    const modalBtn = document.querySelector('.js-modal-btn');

    modalBtn.addEventListener('click', onBtnCloseModal);
    modalEl.addEventListener('click', onBackdropCloseModal);
    document.addEventListener('keydown', onEscCloseModal);

    document.body.style.overflow = 'hidden';

    initValid(validEmail);
    initValid(validComment);

    emailInput.value = '';
    messageInput.value = '';
    btnEl.disabled = true;

    localStorage.removeItem(LS_KEY_FORM);
    e.target.reset();
  } catch (error) {
    notificationEl.classList.add('is-open');
    notificationEl.innerHTML = renderErrorMessage(error);

    const hideNotification = setTimeout(async () => {
      notificationEl.classList.remove('is-open');
    }, 5000);
  } finally {
    emailInput.removeEventListener('click', onClickEmailInput);
    messageInput.removeEventListener('click', onClickCommentInput);
  }
}
