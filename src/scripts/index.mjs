import { makeSingleFilmTile } from './make_single_tile.mjs';
import { getTrendingFilms } from './get-trending.mjs';
import { getFilmsByQueryString } from './get-films-by-query.mjs';

// GET TRENDING

const gallery = document.querySelector('ul.gallery');

getTrendingFilms()
  .then(async (data) => {
    gallery.innerHTML = '';
    const results = data.results;
    for (let i = 0; i < results.length; i++) {
      const newTile = await makeSingleFilmTile(results[i]);
      gallery.insertAdjacentHTML('beforeend', newTile);
    }
  })
  .catch((err) => {
    console.log(err.message);
  });

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
      for (let i = 0; i < results.length; i++) {
        const newTile = await makeSingleFilmTile(results[i]);
        gallery.insertAdjacentHTML('beforeend', newTile);
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
});
