import {
  emailInput,
  messageInput,
  btnEl,
  formElem,
  LS_KEY_FORM,
} from './workTogether';

let emailValue = null;
let commentValue = null;
const regPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let form = { email: '', comment: '' };

export function onChangeForm(e) {
  emailInput.addEventListener('focus', onFocusMail);
  messageInput.addEventListener('focus', onFocusMessage);

  const newForm = new FormData(formElem);
  form.email = newForm.get('email').trim();
  form.comment = newForm.get('comment').trim();

  emailInput.addEventListener('blur', onValidationMail);
  messageInput.addEventListener('blur', onValidationMessage);
  const json = JSON.stringify(form);
  localStorage.setItem(LS_KEY_FORM, json);

  if (form.email && form.comment) {
    btnEl.disabled = false;
  } else {
    btnEl.disabled = true;
  }
}

export function onValidationMail(e) {
  emailValue = form.email;

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
  commentValue = form.comment;

  const validationMessage = e.target
    .closest('.small-text')
    .querySelector('.validation');
  let valueNotFocus;

  messageInput.addEventListener('click', onClickCommentInput);

  if (commentValue.length > 35) {
    valueNotFocus = commentValue.slice(0, 35) + '...';
    e.target.value = valueNotFocus;
  }

  if (commentValue.length < 1) {
    onInvalid(validationMessage);
  } else {
    onSuccess(validationMessage);
  }

  if (commentValue.length === 0) {
    initValid(validationMessage);
  }
}

export function onSuccess(elem) {
  elem.innerHTML = 'Success!';
  elem.classList.add('success');
  elem
    .closest('.small-text')
    .querySelector('.works-input')
    .classList.add('success');
  elem
    .closest('.small-text')
    .querySelector('.works-input')
    .classList.remove('error');
}

export function onInvalid(elem) {
  const dataValue = elem.dataset.input;
  elem.innerHTML = `Invalid ${dataValue}, try again!`;
  elem.classList.add('error');
  elem
    .closest('.small-text')
    .querySelector('.works-input')
    .classList.add('error');
  elem
    .closest('.small-text')
    .querySelector('.works-input')
    .classList.remove('success');
}

export function initValid(elem) {
  elem.innerHTML = '';
  elem.classList.remove('error');
  elem.classList.remove('success');

  elem
    .closest('.small-text')
    .querySelector('.works-input')
    .classList.remove('success');
  elem
    .closest('.small-text')
    .querySelector('.works-input')
    .classList.remove('error');
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
    if (regPattern.test(emailValue)) {
      onSuccess(e.target);
    } else {
      onInvalid(e.target);
    }
  }
}

export function onClickCommentInput(e) {
  if (document.activeElement === e.target) {
    e.target.value = commentValue;
  }
}

function onFocusMail(e) {
  const validationMessage = e.target
    .closest('.small-text')
    .querySelector('.validation');
  initValid(validationMessage);
}
function onFocusMessage(e) {
  const validationMessage = e.target
    .closest('.small-text')
    .querySelector('.validation');
  initValid(validationMessage);
}

export function renderPage() {
  const lsData = localStorage.getItem(LS_KEY_FORM);
  const result = JSON.parse(lsData);

  if (result.email || result.comment) {
    formElem.elements.email.value = result.email;
    formElem.elements.comment.value = result.comment;
  }

  if (result.email && result.comment) btnEl.disabled = false;
}
