import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { ICON_URL, LOGO_URL, MENU_IMG_URL } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex col-span-3">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-12 cursor-pointer"
          alt="menu"
          src={MENU_IMG_URL}
        />
        <img className="h-12 mx-2" alt="logo" src={LOGO_URL} />
      </div>
      <div className="px-10 col-span-8">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 p-2 rounded-r-full">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user-icon" src={ICON_URL} />
      </div>
    </div>
  );
};

export default Header;
