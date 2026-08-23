import { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function GenreMovies({ genreId }) {
  useEffect(() => {
    getMoviesByGenreId();
  }, []);

  const [movieList, setMovieList] = useState([]);

  const getMoviesByGenreId = () => {
    GlobalApi.getMoviesByGenre(genreId).then((res) => {
      setMovieList(res.data.results);
    });
  };

  return (
    <div className="flex items-center gap-4 overflow-x-auto">
      {movieList.map((item, index) => (
        <MovieCard movie={item}/>
      ))}
    </div>
  );
}

export default GenreMovies;
