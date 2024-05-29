import { createNewComment } from './api';

const formElem = document.querySelector('.js-works-form');

formElem.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const newComment = {
    email: formData.get('email'),
    comment: formData.get('comment'),
  };

  try {
    createNewComment(newComment);
  } catch (error) {
    console.log(error);
  } finally {
    e.target.reset();
  }
}
