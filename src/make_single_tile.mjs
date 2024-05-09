import axios from 'axios';
const apiKey = '6822ab68b639c8d7f457546b90aae724';

//zapytanie pozyskujące tablice obiektów z gatunkami

const genresQuery =
  'http://api.themoviedb.org/3/genre/movie/list?api_key=6822ab68b639c8d7f457546b90aae724';

const getGenres = async () => {
  return await axios.get(genresQuery).then((response) => {
    return response.data.genres;
  });
};

//funkcja zwracająca stringa gatunków po przecinku dostające tablicę genres IDs

const makeGenresString = (array) => {
  const gensArray = [];
  let genres; //tablica obiektów z IDs
  getGenres().then((data) => {
    genres = data;
  });
  genres.forEach((val) => {
    gensArray.push(genres.find((gen) => gen.id === val).name);
  });
  return gensArray.join(', ');
};

//funkcja generująca pojedynczy kafelek filmu

export const makeSingleFilmTile = (film) => {
  const genres = makeGenresString(film.genre_ids); //film.genre_ids to tablica IDs gatunków

  const year = film.release_date.slice(0, 4);
  return `
  <li class="film-tile">
  <div class="film-poster"><img src="https://image.tmdb.org/t/p/original${
    film.poster_path
  }" alt="${film.title} poster"/></div>
  <div class="film-info>
  <p class="film-title">${film.title.toUppercase()}</p>
  <p class="film-details">${genres} | ${year}</p>
  </div>
  </li>`;
};
