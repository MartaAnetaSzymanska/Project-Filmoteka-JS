import axios from 'axios';

const galleryList = document.querySelector('ul.gallery');
const modal = document.querySelector('[data-modal]');
const closeBtn = document.querySelector('[modal-close]');

galleryList.addEventListener('click', toggleModal);
modal.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-hidden');
}

galleryList.addEventListener('click', (ev) => {
  const filmId = ev.target.id;
  console.log(filmId);
});
