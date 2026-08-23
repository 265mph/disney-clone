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
    <div className="relative">
      <HiChevronLeft
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#080d69]/80 text-white p-2 rounded-full text-[40px] cursor-pointer hover:bg-[#080d69] transition-all duration-200"
        onClick={() => slideLeft(elementRef.current)}
      />

      <HiChevronRight
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#080d69]/80 text-white p-2 rounded-full text-[40px] cursor-pointer hover:bg-[#080d69] transition-all duration-200"
        onClick={() => slideRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto scroll-bar-none w-full px-[5%] py-4 scrollbar-none scroll-smooth snap-x snap-mandatory"
        ref={elementRef}
      >
        {trendingMovieList.map((item, index) => (
          <img
            key={item.id}
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt=""
            className="min-w-full md:min-w-full md:h-150 object-cover object-top mr-5 rounded-lg snap-center shadow-lg shadow-gray-700 hover:border-4 border-[#3e4cef] transition-all duration-200"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
