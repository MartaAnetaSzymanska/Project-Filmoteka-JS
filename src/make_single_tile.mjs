export const makeSingleFilmTile = (film) => {
  const year = film.release_date.slice(0, 4);

  return `
  <li class="film-tile">
  <div class="film-poster"><img src="https://image.tmdb.org/t/p/original${
    film.poster_path
  }" alt="${film.title} poster"/></div>
  <div class="film-info>
  <p class="film-title">${film.title.toUppercase()}</p>
  <p class="film-details">Gatunki, po, przecinkach | ${year}</p>
  </div>
  </li>`;
};
