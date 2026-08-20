import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "307c6966685745d1f7e8f252b63fea63";

const getTrendingMovies = axios.get(
  `${movieBaseUrl}/trending/all/day?api_key=${api_key}`,
);

export default {
  getTrendingMovies,
};
