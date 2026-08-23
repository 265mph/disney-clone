import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function GenreMovies({ genreId }) {
  useEffect(() => {
    getMoviesByGenreId();
  }, []);

  const elementRef = useRef();

  const [movieList, setMovieList] = useState([]);

  const getMoviesByGenreId = () => {
    GlobalApi.getMoviesByGenre(genreId).then((res) => {
      setMovieList(res.data.results);
    });
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };

  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="flex items-center scroll-bar-none">
      <HiChevronLeft
        className="hidden md:block absolute left-6 z-10 text-gray-900 p-2 text-[50px] cursor-pointer transition-all duration-200"
        onClick={() => slideLeft(elementRef.current)}
      />

      <div
        className="flex items-center gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <MovieCard movie={item} />
        ))}
      </div>

      <HiChevronRight
        className="hidden md:block absolute right-3 z-10 text-gray-900 p-2 text-[50px] cursor-pointer transition-all duration-200"
        onClick={() => slideRight(elementRef.current)}
      />
    </div>
  );
}

export default GenreMovies;
