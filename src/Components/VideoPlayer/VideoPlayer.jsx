import React, { useRef } from "react";
import "./VideoPlayer.css";
import edusity_video from "../../assets/edusity-video.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={edusity_video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
