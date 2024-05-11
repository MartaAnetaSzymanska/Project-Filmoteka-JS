import { makeSingleFilmTile } from './make_single_tile.mjs';
import { getTrendingFilms } from './get-trending.mjs';

getTrendingFilms().then((data) => {
  console.log(data);
});
