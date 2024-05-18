import axios from "axios";
import { Notify } from "notiflix";
import { apiKey } from "./make_single_tile.mjs";
import { getFilmDetails } from "./modal.mjs";
import { makeSingleFilmTile } from "./make_single_tile.mjs";

const addWatched = document.querySelector(".add-watched-btn");
const addQueue = document.querySelector(".add-queue-btn");


const handleAddToWatched = () => {
    const filmTitle = document.querySelector(".modal-film-title").dataset.title;
    const filmId = addQueue.dataset.id;
    const addToLocalStorage = (film, key) => {
        let films = JSON.parse(localStorage.getItem(key)) || [];
        if (films.includes(film)) {
            Notify.failure(`${filmTitle} is already watched!`);
            return false;
        } else {
        Notify.success(`${filmTitle} is added to watched list!`);
        films.push(film);
        localStorage.setItem(key, JSON.stringify(films));
        }
    };
    addToLocalStorage(filmId, 'watchedFilms')
    };

    const handleAddToQueue = () => {
        const filmTitle = document.querySelector(".modal-film-title").dataset.title;
        const filmId = addQueue.dataset.id;
        const addToLocalStorage = (film, key) => {
            let films = JSON.parse(localStorage.getItem(key)) || [];
            if (films.includes(film)) {
                Notify.failure(`${filmTitle} is already in on the queue!`);
                return false;
            } else {
            Notify.success(`${filmTitle} is added to queue list!`);
            films.push(film);
            localStorage.setItem(key, JSON.stringify(films));
            }
        };
        addToLocalStorage(filmId, 'queueFilms');
    };

addWatched.addEventListener("click", handleAddToWatched);
addQueue.addEventListener("click", handleAddToQueue);

