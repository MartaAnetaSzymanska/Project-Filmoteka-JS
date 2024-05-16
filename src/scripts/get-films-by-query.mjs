import axios from 'axios';
import { apiKey } from './make_single_tile.mjs';

export const getFilmsByQueryString = async (string, page = 1) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie`,
      {
        params: {
          query: string,
          api_key: apiKey,
          page: page,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching films by query:', error);
    throw error;
  }
};
