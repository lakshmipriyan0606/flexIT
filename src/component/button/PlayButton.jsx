import React from "react";
import "./PlayButton.css";
import { IoMdPlay } from "react-icons/io";

const PlayButton = () => {
  return (
    <div className="relative left-10">
      <a id="play-video" className="video-play-button absolute top-3" href="#">
        <span className="w-2 h-2 flex">
        </span>
      </a>
    </div>
  );
};

export default PlayButton;
