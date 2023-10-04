import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  ICON_URL,
  LOGO_URL,
  MENU_IMG_URL,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { Link } from "react-router-dom";
import { cacheResult } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  //De-Bouncing--Make an API call if diffrence between two key strokes is > 200ms
  useEffect(() => {
    //make an API call after every key press
    //if diffr between 2 api calls < 200ms
    //decline API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    //API call

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      })
    );
  };

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
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full px-5 py-2"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full ">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[28rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions?.map((items) => {
                return (
                  <li
                    className="py-2 px-3 shadow-sm hover:bg-gray-100"
                    key={items.id}
                  >
                    {items}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user-icon" src={ICON_URL} />
      </div>
    </div>
  );
};

export default Header;
