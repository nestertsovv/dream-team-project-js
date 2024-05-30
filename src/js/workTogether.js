import { createNewComment } from './api';
import { createModal } from './createModal';
import {
  onBackdropCloseModal,
  onBtnCloseModal,
  onEscCloseModal,
} from './closeModal';
import {
  onValidationMail,
  onValidationMessage,
  initValid,
  renderErrorMessage,
} from './validation';
import { validationEmail, validationMessage } from './validation';

export const modalEl = document.querySelector('#modal');
const notificationEl = document.querySelector('#modal-error');
const formElem = document.querySelector('.js-works-form');
const emailInput = document.querySelector('.email-input');
const messageInput = document.querySelector('.comment-input');

formElem.addEventListener('submit', onSubmit);
emailInput.addEventListener('blur', onValidationMail);
messageInput.addEventListener('blur', onValidationMessage);

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
    e.target.reset();
  } catch (error) {
    notificationEl.classList.add('is-open');
    notificationEl.innerHTML = renderErrorMessage();
    const hideNotification = setTimeout(() => {
      notificationEl.classList.remove('is-open');
    }, 2000);

    console.log(error);
  } finally {
    initValid(validationEmail);
    initValid(validationMessage);
  }
}
