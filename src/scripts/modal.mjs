import axios from 'axios';
import { apiKey } from './make_single_tile.mjs';
import { Notify } from 'notiflix';
// ----------otwieranie/zamykanie Modala-----------

const galleryList = document.querySelector('ul.gallery');
const modal = document.querySelector('[data-modal]');
const closeBtn = document.querySelector('[modal-close]');

galleryList.addEventListener('click', toggleModal);
modal.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-hidden');
}

// ------------pobieranie API------------

let filmId;
// let vote;
// let votes;
// let popularity;
// let about;
// let genre;

const list = document.querySelector('ul.modal-film-features-list');

galleryList.addEventListener('click', async (ev) => {
  const parent = ev.target.closest('.movie-block');
  const children = parent.querySelector('.film-info');
  const image = ev.target.src;
  filmId = children.id;
  const getDetails = await getFilmDetails(filmId);
  console.log(getDetails);
  // Uzyskiwanie danych filmu bezpośrednio z getFilmDetails
  if (getDetails) {
    getDetails
      .then((data) => {
        console.log(data);
        // vote = data.vote_average;
        // votes = data.vote_count;
        // popularity = data.popularity;
        // about = data.overview;
        // let genresArray = data.genres;
        // genre = genresArray.join(' ');
        // console.log(genre);
      })
      .catch((error) => console.log(error));
  }
});

// --------funkcja pobierania danych filmu-------

async function getFilmDetails(filmId) {
  try {
    const response = await axios
      .get(`https://api.themoviedb.org/3/movie/${filmId}?api_key=${apiKey}`)
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  } catch {
    Notify.failure('Wystąpił błąd podczas pobierania szczegółów filmu.');
    console.error('Błąd podczas pobierania szczegółów filmu:', error);
    return null;
  }
}
//-------funkcja dodawania elementów filmu------
