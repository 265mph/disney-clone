import React from "react";

const HeaderItem = ({ name, Icon }) => {
  return (
    <div className="text-[#080D69] p-3 font-semibold flex items-center gap-1 cursor-pointer hover:underline underline-offset-8">
      <Icon className="text-[25px]" />
      <h2 className="text-[15px]">{name}</h2>
    </div>
  );
};

export default HeaderItem;
