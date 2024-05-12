import { makeSingleFilmTile } from './make_single_tile.mjs';
import { getTrendingFilms } from './get-trending.mjs';

const gallery = document.querySelector('ul.gallery');
getTrendingFilms().then(async (data) => {
  gallery.innerHTML = '';
  const results = data.results;
  for (let i = 0; i < results.length; i++) {
    const newTile = await makeSingleFilmTile(results[i]);
    gallery.insertAdjacentHTML('beforeend', newTile);
  }
});
