import axios from "axios";
import { apiKey } from "./make_single_tile.mjs";
import { getFilmDetails } from "./modal.mjs";
import { makeSingleFilmTile } from "./make_single_tile.mjs";

const watchedList = document.querySelector(".library-btn-active");
const queueList = document.querySelector(".library-btn");

const watchArr = JSON.parse(localStorage.getItem('watchedFilms'));
const queueArr = JSON.parse(localStorage.getItem('queueFilms'));

// console.log(watchArr);

watchArr.forEach(async (element) => {
    await getFilmDetails(element);
});

queueArr.forEach(async (element) => {
    await getFilmDetails(element);
});