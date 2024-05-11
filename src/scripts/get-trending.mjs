// https://api.themoviedb.org/3/trending/movie/{time_window}

import { apiKey, makeSingleFilmTile } from './make_single_tile.mjs';

const trendingQuery = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;
export const getTrending = async () => {
  return await axios.get(trendingQuery).then((response) => {
    return response.data;
  });
};
