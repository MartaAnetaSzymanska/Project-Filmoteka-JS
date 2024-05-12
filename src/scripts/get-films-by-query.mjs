import axios from 'axios';
import { apiKey } from './make_single_tile.mjs';

export const getFilmsByQueryString = async (string) => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?query=${string}&api_key=6822ab68b639c8d7f457546b90aae724`
    )
    .then((response) => {
      return response.data;
    });
};
