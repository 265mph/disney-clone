import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className="w-27.5 md:w-50 rounded-lg cursor-pointer hover:border-4 border-[#3e4cef] transition-all duration-200"
      />
    </>
  );
};

export default MovieCard;
