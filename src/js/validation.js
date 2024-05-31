import { emailInput, messageInput, btnEl } from './workTogether';

let emailValue = null;
let commentValue = null;
const regPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export function onValidationMail(e) {
  emailValue = e.target.value.trim();

  const validationEmail = e.target
    .closest('.small-text')
    .querySelector('.validation');
  let valueNotFocus;

  emailInput.addEventListener('click', onClickEmailInput);

  if (emailValue.length > 45) {
    valueNotFocus = emailValue.slice(0, 45) + '...';
    e.target.value = valueNotFocus;
  }

  if (regPattern.test(emailValue)) {
    onSuccess(validationEmail);
  } else {
    onInvalid(validationEmail);
  }
  if (emailValue.length === 0) {
    initValid(validationEmail);
  }
}

export function onValidationMessage(e) {
  commentValue = e.target.value.trim();
  const validationMessage = e.target
    .closest('.small-text')
    .querySelector('.validation');
  let valueNotFocus;

  messageInput.addEventListener('click', onClickCommentInput);

  if (commentValue.length > 25) {
    valueNotFocus = commentValue.slice(0, 25) + '...';
    e.target.value = valueNotFocus;
  }

  if (commentValue.length <= 1) {
    onInvalid(validationMessage);
  } else {
    onSuccess(validationMessage);
  }
  if (commentValue.length === 0) {
    initValid(validationMessage);
  }
}

export function onChangeForm(e) {
  emailInput.addEventListener('blur', onValidationMail);
  messageInput.addEventListener('blur', onValidationMessage);
  const email = emailInput.value;
  const comment = messageInput.value;
  if (email && comment) {
    btnEl.disabled = false;
  } else {
    btnEl.disabled = true;
  }
}

export function onSuccess(elem) {
  elem.innerHTML = 'Success!';
  elem.style.color = '#3cbc81';
  elem.closest('.small-text').querySelector('.works-input').style[
    'border-bottom'
  ] = '1px solid #3cbc81';
}

export function onInvalid(elem) {
  const dataValue = elem.dataset.input;
  elem.innerHTML = `Invalid ${dataValue}, try again!`;
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

export function renderErrorMessage(error) {
  const errorMessage = error.response.data.message;
  return ` <div class="error-wrapper">
    <h4 class="error-title">Error!</h4>
    <p class="error-message">&#160;&#160;&#160;${errorMessage}</p>
  </div>`;
}

export function onClickEmailInput(e) {
  if (document.activeElement === e.target) {
    e.target.value = emailValue;
  }
}

export function onClickCommentInput(e) {
  if (document.activeElement === e.target) {
    e.target.value = commentValue;
  }
}
