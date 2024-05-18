import axios from "axios";
import { Notify } from "notiflix";
import { apiKey } from "./make_single_tile.mjs";
import { getFilmDetails } from "./modal.mjs";
import { makeSingleFilmTile } from "./make_single_tile.mjs";

const watchArr = JSON.parse(localStorage.getItem('watchedFilms'));
const queueArr = JSON.parse(localStorage.getItem('queueFilms'));

document.addEventListener("DOMContentLoaded", ev => {
watchArr.forEach(async (element) => {
    await getFilmDetails(element);
});
});

// // queueArr.forEach(async (element) => {
//     await getFilmDetails(element);
// });