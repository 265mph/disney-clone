import React from "react";
import GenresList from "../constants/GenresList";
import GenreMovies from "./GenreMovies";

const MovieGenreList = () => {
  return (
    <div className="">
      {GenresList.genre.map(
        (item, index) =>
          index <= 3 && (
            <div className="p-8 px-8 md:px-14">
              <h2 className="text-[20px] font-bold pb-5">{item.name}</h2>
              <GenreMovies genreId={item.id} />
            </div>
          ),
      )}
    </div>
  );
};

export default MovieGenreList;
