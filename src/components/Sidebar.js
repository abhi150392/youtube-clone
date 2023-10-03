import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="p-3 max-h-screen hover:overflow-y-scroll overflow-hidden overscroll-contain  bg-white text-left w-[280px]">
      <ul>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Home
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Shorts
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Subscriptions
        </li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <ul>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Library
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          History
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Your Videos
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Watch Later
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Liked Videos
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Show More
        </li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <h1 className="font-medium pt-5">Subscriptions</h1>
      <ul>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Scary Fun
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Crime Tak
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Show More...
        </li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <h1 className="font-medium pt-5">Explore</h1>
      <ul>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Trending
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Shopping
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Music
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Movies
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Live
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Gaming
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          News
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Sports
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Learning
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Fashion & Beauty
        </li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <h1 className="font-medium pt-5">More From Youtube</h1>
      <ul>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Youtube Premium
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Youtube Studio
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Youtube Music
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Youtube Kids
        </li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <ul>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Settings
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Report History
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Help
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          Send Feedback
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
