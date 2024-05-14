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
const filmTitle = document.querySelector('h1.modal-film-title');
const vote = document.querySelector('span.vote-data');
const votes = document.querySelector('span.votes-data');
const popularity = document.querySelector('div.modal-popularity-data');
const originalTitle = document.querySelector('div.modal-original-title-data');
const genres = document.querySelector('div.modal-genre-data');
const about = document.querySelector('p.about-title-data');
const filmImage = document.querySelector('div.modal-image img');
const list = document.querySelector('ul.modal-film-features-list');

//funkcja generowania stringa z IDs

const generateGenresString = (genresArray) => {
  const array = [];
  genresArray.forEach((element) => {
    array.push(element.name);
  });
  return array.join(', ');
};

galleryList.addEventListener('click', async (ev) => {
  const parent = ev.target.closest('.movie-block');
  const children = parent.querySelector('.film-info');
  const image = ev.target.src;
  filmId = children.id;
  const getDetails = await getFilmDetails(filmId);
  // Uzyskiwanie danych filmu bezpośrednio z getFilmDetails
  if (getDetails) {
    filmImage.src = `https://image.tmdb.org/t/p/original${getDetails.poster_path}`;
    filmTitle.innerText = getDetails.title;
    vote.innerText = getDetails.vote_average;
    votes.innerText = getDetails.vote_count;
    popularity.innerText = getDetails.popularity;
    originalTitle.innerText = getDetails.original_title;
    about.innerText = getDetails.overview;
    genres.innerText = generateGenresString(getDetails.genres);
  }
});

// --------funkcja pobierania danych filmu-------

async function getFilmDetails(filmId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${filmId}?api_key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    Notify.failure('Wystąpił błąd podczas pobierania szczegółów filmu.');
    console.error('Błąd podczas pobierania szczegółów filmu:', error);
    return null;
  }
}
