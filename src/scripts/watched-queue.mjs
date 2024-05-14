import axios from "axios";
import Notiflix from "notiflix";
import { apiKey } from "./make_single_tile.mjs";

const addWatched = document.querySelector(".add-watched-btn");
const addQueue = document.querySelector(".add-queue-btn");

  
const addToLocalStorage = (film, key) => {
    let films = JSON.parse(localStorage.getItem(key)) || [];
    films.push(film);

    localStorage.setItem(key, JSON.stringify(films));
};

const handleAddToWatched = () => {
    const filmId = document.querySelector(".film-info").id;
    console.log(filmId);
    addToLocalStorage(filmId, 'watchedFilms');
};

const handleAddToQueue = () => {
    const filmId = document.querySelector(".film-info").id;
    addToLocalStorage(filmId, 'queueFilms');
};

addWatched.addEventListener("click", handleAddToWatched);
addQueue.addEventListener("click", handleAddToQueue);

