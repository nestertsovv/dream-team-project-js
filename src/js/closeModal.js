import { modalEl } from './workTogether';

export function onBtnCloseModal(e) {
  modalEl.classList.remove('is-open');
  document.body.style.overflow = '';
}

export function onBackdropCloseModal(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  modalEl.classList.remove('is-open');
  document.body.style.overflow = '';
}

export function onEscCloseModal(e) {
  if (e.key === 'Escape') {
    modalEl.classList.remove('is-open');
    document.removeEventListener('keydown', onEscCloseModal);
    document.body.style.overflow = '';
  }
}
