import { makeSingleFilmTile } from './make_single_tile.mjs';
import { getTrending } from './get-trending.mjs';
//UWAGA - wywoływać z await!!!!
console.log(window);
const gallery = document.querySelector('ul.gallery');

const displayTrending = () => {
  getTrending().then((data) => {
    console.log(data);
  });
};
