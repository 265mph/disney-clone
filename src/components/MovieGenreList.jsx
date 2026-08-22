import React from "react";
import GenresList from "../constants/GenresList";

const MovieGenreList = () => {
  return (
    <div>
      {GenresList.genre.map((item) => (
        <div>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default MovieGenreList;
