export function onBtnCloseModal(e) {
  modalEl.classList.remove('is-open');
}

export function onBackdropCloseModal(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  modalEl.classList.remove('is-open');
}

export function onEscCloseModal(e) {
  if (e.key === 'Escape') {
    modalEl.classList.remove('is-open');
    document.removeEventListener('keydown', onEscCloseModal);
  }
}
