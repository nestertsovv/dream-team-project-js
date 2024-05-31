export let validationEmail;
export let validationMessage;

export function onValidationMail(e) {
  let value = e.target.value.trim();
  const regPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  validationEmail = e.target
    .closest('.small-text')
    .querySelector('.validation');

  if (regPattern.test(value)) {
    onSuccess(validationEmail);
    return validationEmail;
  } else {
    onInvalid(validationEmail);
    return validationEmail;
  }
}

export function onValidationMessage(e) {
  const value = e.target.value.trim();
  validationMessage = e.target
    .closest('.small-text')
    .querySelector('.validation');

  if (value.length <= 3 || value === '') {
    onInvalid(validationMessage);
    return validationMessage;
  } else {
    onSuccess(validationMessage);
    return validationMessage;
  }
}

export function onSuccess(elem) {
  elem.innerHTML = 'Sucsess!';
  elem.style.color = '#3cbc81';
  elem.closest('.small-text').querySelector('.works-input').style[
    'border-bottom'
  ] = '1px solid #3cbc81';
}
export function onInvalid(elem) {
  elem.innerHTML = 'Invalid email, try again!';
  elem.style.color = '#e74a3b';
  elem.closest('.small-text').querySelector('.works-input').style[
    'border-bottom'
  ] = '1px solid #e74a3b';
}
export function initValid(elem) {
  elem.innerHTML = '';
  elem.closest('.small-text').querySelector('.works-input').style[
    'border-bottom'
  ] = '1px solid rgba(250, 250, 250, 0.2)';
}
export function renderErrorMessage() {
  return ` <div class="error-wrapper">
    <h4 class="error-title">Error!</h4>
    <p class="error-message">&#160;&#160;&#160;The input fields are filled in incorrectly</p>
  </div>`;
}
