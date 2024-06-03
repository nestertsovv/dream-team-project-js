import closeSvg from '../img/close.svg';

export async function createModal(title, message) {
  let svgData = '';
  await fetch(closeSvg)
    .then(response => response.text())
    .then(data => {
      svgData = data;
    });
  return `<div class="modal-message">
    <button type="button" class="close-modal-btn js-modal-btn">
      ${svgData}
    </button>
    <h4 class="modal-title">${title}</h4>
    <p class="modal-descr">
      ${message}
    </p>
  </div>`;
}
