import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

const Carousel = () => {
  const [trendingMovieList, setTrendingMovieList] = useState([]);

  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingMovies.then((res) => {
      console.log(res.data.results);
      setTrendingMovieList(res.data.results);
    });
  };

  const slideRight = (element) => {
    element.scrollLeft += screenWidth - 64;
  };

  const slideLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-[#080d49] mx-8 mt-60 text-[50px] absolute cursor-pointer left-0"
        onClick={() => slideLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-[#080d49] mx-8 mt-60 text-[50px] absolute cursor-pointer right-0"
        onClick={() => slideRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {trendingMovieList.map((item, index) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt=""
            className="min-w-full md:h-150 object-cover object-top mr-5 rounded-2xl hover:border-4 border-blue-800 transition-all duration-200 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
