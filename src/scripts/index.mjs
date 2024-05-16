import { makeSingleFilmTile } from './make_single_tile.mjs';
import { getTrendingFilms } from './get-trending.mjs';
import { getFilmsByQueryString } from './get-films-by-query.mjs';
import { Notify } from 'notiflix';

Notify.init({
  position: 'center-top',
  distance: '3rem',
  borderRadius: '15px',
  cssAnimationStyle: 'zoom',
});
// GET TRENDING

const gallery = document.querySelector('ul.gallery');

// getTrendingFilms()
//   .then(async (data) => {
//     gallery.innerHTML = '';
//     const results = data.results;
//     for (let i = 0; i < results.length; i++) {
//       const newTile = await makeSingleFilmTile(results[i]);
//       gallery.insertAdjacentHTML('beforeend', newTile);
//     }
//   })
//   .catch((err) => {
//     Notify.failure('Oooops! Something wrong happen. Try again.');
//     console.log(err.message);
//   });

//GET FILMS BY QUERY STRING

const searchForm = document.querySelector('form.search-form');

searchForm.addEventListener('submit', async (ev) => {
  ev.preventDefault();
  const queryString = ev.target.elements.searchinput.value;
  gallery.innerHTML = '';
  getFilmsByQueryString(queryString)
    .then(async (data) => {
      gallery.innerHTML = '';
      const results = data.results;
      if (results.length === 0) {
        Notify.failure("Sorry! We didn't find any films.");
      } else {
        Notify.success(`Hooray! ${data.total_results} films found!`);
        for (let i = 0; i < results.length; i++) {
          const newTile = await makeSingleFilmTile(results[i]);
          gallery.insertAdjacentHTML('beforeend', newTile);
        }
      }
    })
    .catch((err) => {
      Notify.failure('Oooops! Something wrong happen. Try again.');
      console.log(err.message);
    });
});
