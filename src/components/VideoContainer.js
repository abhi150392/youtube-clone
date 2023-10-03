import React, { useEffect } from "react";
import { API_URL } from "../utils/constants";

const VideoContainer = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    console.log(json);
  };
  return <div>VideoContainer</div>;
};

export default VideoContainer;
