import { makeSingleFilmTile } from './make_single_tile.mjs';
import { getTrendingFilms } from './get-trending.mjs';

const gallery = document.querySelector('ul.gallery');

getTrendingFilms().then((data) => {
  gallery.innerHTML = '';
  const results = data.results;
  for (let i = 0; i < results.length; i++) {
    gallery.insertAdjacentElement(makeSingleFilmTile(results[i]));
  }
});
