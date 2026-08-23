import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import ProductionHouse from "./components/ProductionHouse";
import MovieGenreList from "./components/MovieGenreList";

function App() {
  return (
    <div className="px-8 py-5">
      <Header />
      <Carousel />
      <ProductionHouse />
      <MovieGenreList />
    </div>
  );
}

export default App;
