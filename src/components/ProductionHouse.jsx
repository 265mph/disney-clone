import React from "react";

// images
import disney from "./../assets/images/disney.png";
import marvel from "./../assets/images/marvel.png";
import nationalG from "./../assets/images/nationalG.png";
import pixar from "./../assets/images/pixar.png";
import starwars from "./../assets/images/starwar.png";

// videos
import disneyVid from "./../assets/videos/disney.mp4";
import marvelVid from "./../assets/videos/marvel.mp4";
import nationalVid from "./../assets/videos/national-geographic.mp4";
import pixarVid from "./../assets/videos/pixar.mp4";
import starwarsVid from "./../assets/videos/star-wars.mp4";

const ProductionHouse = () => {
  const houseList = [
    {
      id: 1,
      image: disney,
      video: disneyVid,
    },
    {
      id: 2,
      image: marvel,
      video: marvelVid,
    },
    {
      id: 3,
      image: nationalG,
      video: nationalVid,
    },
    {
      id: 4,
      image: pixar,
      video: pixarVid,
    },
    {
      id: 5,
      image: starwars,
      video: starwarsVid,
    },
  ];

  return (
    <div className="flex items-center content-between gap-2 md:gap-5 p-6 px-10 md:px-21.5">
      {houseList.map((item) => (
        <div className="group relative w-fit bg-[#040838] rounded-lg border-2 md:border-4 border-[#3e4cef] shadow-lg shadow-gray-700 hover:scale-105 duration-300 ease-in-out cursor-pointer">
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-45 z-0"
          ></video>
          <img src={item.image} className="relative min-w-full z-1"/>
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
