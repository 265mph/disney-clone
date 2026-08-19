import DisneyPlus from "./../assets/images/DisneyPlusLogo.svg";
import { HiPlus, HiOutlineDotsVertical, HiStar, HiHome } from "react-icons/hi";
import { HiMagnifyingGlass, HiPlayCircle, HiTv } from "react-icons/hi2";
import HeaderItem from "./HeaderItem";

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

  return (
    <div>
      <img src={DisneyPlus} className="w-20 md:w-37.5 object-cover" />
      {menu.map((item) => (
        <HeaderItem name={item.name} Icon={item.icon} />
      ))}
    </div>
  );
};

export default Header;
