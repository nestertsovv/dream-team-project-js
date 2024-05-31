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
} from './validation';

export const modalEl = document.querySelector('#modal');
export const emailInput = document.querySelector('.email-input');
export const messageInput = document.querySelector('.comment-input');
export const btnEl = document.querySelector('.js-works-btn');
const notificationEl = document.querySelector('#modal-error');
const formElem = document.querySelector('.js-works-form');
const validEmail = document.querySelector('.js-small-email');
const validComment = document.querySelector('.js-small-comment');

formElem.addEventListener('submit', onSubmit);
formElem.addEventListener('input', onChangeForm);

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
    initValid(validEmail);
    initValid(validComment);
    emailInput.value = '';
    messageInput.value = '';
    e.target.reset();
  } catch (error) {
    notificationEl.classList.add('is-open');
    notificationEl.innerHTML = renderErrorMessage(error);
    const hideNotification = setTimeout(async () => {
      notificationEl.classList.remove('is-open');
    }, 2000);
  } finally {
    btnEl.disabled = true;
    emailInput.removeEventListener('click', onClickEmailInput);
    messageInput.removeEventListener('click', onClickCommentInput);
  }
}
