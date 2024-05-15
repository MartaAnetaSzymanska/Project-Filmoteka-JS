import axios from "axios";
import { Notify } from "notiflix";
import { apiKey } from "./make_single_tile.mjs";
import { getFilmsByQueryString } from "./get-films-by-query.mjs";

const addWatched = document.querySelector(".add-watched-btn");
const addQueue = document.querySelector(".add-queue-btn");
  
const addToLocalStorage = (film, key) => {
    let films = JSON.parse(localStorage.getItem(key)) || [];
    films.push(film);

    localStorage.setItem(key, JSON.stringify(films));
};

const handleAddToWatched = () => {
    const filmTitle = document.querySelector(".modal-film-title").dataset.title;
    const filmId = addQueue.dataset.id;
    addToLocalStorage(filmId, 'watchedFilms');
    Notify.success(`${filmTitle} add to watched list!`);
};

const handleAddToQueue = () => {
    const filmTitle = document.querySelector(".modal-film-title").dataset.title;
    const filmId = addQueue.dataset.id;
    addToLocalStorage(filmId, 'queueFilms');
    Notify.success(`${filmTitle} add to queue list!`);
};

addWatched.addEventListener("click", handleAddToWatched);
addQueue.addEventListener("click", handleAddToQueue);


// const watchArr = JSON.parse(localStorage.getItem('watchedFilms'));
// watchArr.forEach(element => {
// });


