import axios from 'axios';
export const apiKey = '6822ab68b639c8d7f457546b90aae724';

//zapytanie pozyskujące tablice obiektów z gatunkami

const genresQuery = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

const getGenres = async () => {
  return await axios.get(genresQuery).then((response) => {
    return response.data.genres;
  });
};

//funkcja zwracająca stringa gatunków po przecinku dostające tablicę genres IDs

const makeGenresString = async (array) => {
  const gensArray = [];
  let genres; //tablica obiektów z IDs
  await getGenres().then((data) => {
    genres = data;
    array.forEach((val) => {
      const element = genres.find((gen) => gen.id === val);
      gensArray.push(element.name);
    });
  });
  return gensArray.join(', ');
};

//funkcja generująca pojedynczy kafelek filmu
//UWAGA - wywoływać z await!!!!

export const makeSingleFilmTile = async (film) => {
  const genres = await makeGenresString(film.genre_ids); //film.genre_ids to tablica IDs gatunków

  const year = film.release_date.slice(0, 4);
  return `
  <li class="movie-block">
  <div class="image"><img src="https://image.tmdb.org/t/p/original${
    film.poster_path
  }" alt="${film.title} poster"/></div>
  <div class="film-info" id="${film.id}">
  <p class="title">${film.title.toUpperCase()}</p>
  <p class="genre">${genres} | ${year}</p>
  </div>
  </li>`;
};
