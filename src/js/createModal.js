export function createModal(title, message) {
  return `<div class="modal-message">
    <button type="button" class="close-modal-btn js-modal-btn">
      <svg class="modal-pict" width="24" height="24">
        <use href="/img/icons.svg#icon-close"></use>
      </svg>
    </button>
    <h4 class="modal-title">${title}</h4>
    <p class="modal-descr">
      ${message}
    </p>
  </div>`;
}
