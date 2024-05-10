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
  <div class="film-info>
  <p class="title">${film.title.toUpperCase()}</p>
  <p class="genre">${genres} | ${year}</p>
  </div>
  </li>`;
};

// const movie = {
//   adult: false,
//   backdrop_path: '/8YURPHUqD2ODIffxPf8sG5l5UC7.jpg',
//   genre_ids: [12, 36, 10752, 28],
//   id: 652,
//   original_language: 'en',
//   original_title: 'Troy',
//   overview:
//     'In year 1250 B.C. during the late Bronze age, two emerging nations begin to clash. Paris, the Trojan prince, convinces Helen, Queen of Sparta, to leave her husband Menelaus, and sail with him back to Troy. After Menelaus finds out that his wife was taken by the Trojans, he asks his brother Agamemnon to help him get her back. Agamemnon sees this as an opportunity for power. They set off with 1,000 ships holding 50,000 Greeks to Troy.',
//   popularity: 82.284,
//   poster_path: '/a07wLy4ONfpsjnBqMwhlWTJTcm.jpg',
//   release_date: '2004-05-13',
//   title: 'Troy',
//   video: false,
//   vote_average: 7.16,
//   vote_count: 9817,
// };

// console.log(await makeSingleFilmTile(movie));
