import DisneyPlus from "./../assets/images/DisneyPlusLogo.svg";
import { HiPlus, HiOutlineDotsVertical, HiStar, HiHome } from "react-icons/hi";
import { HiMagnifyingGlass, HiPlayCircle, HiTv } from "react-icons/hi2";
import HeaderItem from "./HeaderItem";
import { useState } from "react";

const Header = () => {
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH-LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="flex items-center justify-between px-2 md:px-0">
      <div className="flex items-center gap-4 md:gap-10">
        <img src={DisneyPlus} className="w-18 md:w-20 object-cover" />

        <div className="hidden md:flex gap-2">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>

        <div className="md:hidden flex gap-2">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />,
          )}
        </div>

        <div
          className="md:hidden relative"
          onClick={() => {
            setShowOptions(!showOptions);
          }}
        >
          <HeaderItem Icon={HiOutlineDotsVertical} />
          {showOptions && (
            <div className="absolute right-0 mt-3 px-5 py-4 bg-white border border-gray-400 shadow-xl/35 rounded-lg z-10">
              {menu.map(
                (item, index) =>
                  index > 2 && <HeaderItem name={item.name} Icon={item.icon} />,
              )}
            </div>
          )}
        </div>
      </div>

      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-10 rounded-full"
        alt=""
      />
    </div>
  );
};

export default Header;
