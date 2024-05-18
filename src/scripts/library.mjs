import axios from "axios";
import { Notify } from "notiflix";
import { apiKey } from "./make_single_tile.mjs";
import { makeSingleFilmTile } from "./make_single_tile.mjs";


async function getFilmDetails(filmId) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${filmId}?api_key=${apiKey}`
      );
      return response.data;
    } catch (error) {
      Notify.failure('Wystąpił błąd podczas pobierania szczegółów filmu.');
      console.error('Błąd podczas pobierania szczegółów filmu:', error);
      return null;
    }
  }

const watchArr = JSON.parse(localStorage.getItem('watchedFilms'));
const queueArr = JSON.parse(localStorage.getItem('queueFilms'));

document.addEventListener("DOMContentLoaded", ev => {
watchArr.forEach(async (element) => {
    await getFilmDetails(element);
    makeSingleFilmTile(element);
});
});