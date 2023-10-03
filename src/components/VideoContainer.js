import React, { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();

    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        return <VideoCard key={video.id} info={video} />;
      })}
    </div>
  );
};

export default VideoContainer;
