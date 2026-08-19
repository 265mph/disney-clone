import React from "react";

const HeaderItem = ({ name, Icon }) => {
  return (
    <div className="text-[#080D69] font-semibold flex item-center gap-3">
      <Icon />
      <h2>{name}</h2>
    </div>
  );
};

export default HeaderItem;
