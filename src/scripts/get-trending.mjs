import axios from 'axios';
import { apiKey } from './make_single_tile.mjs';

const trendingQuery = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

//UWAGA - wywoływać z await!!!!

export const getTrendingFilms = async () => {
  return await axios.get(trendingQuery).then((response) => {
    return response.data;
  });
};
