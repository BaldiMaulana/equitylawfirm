import React from "react";

const YouTubeVideo = ({ videoSrc }) => {
  return (
    <div className="flex justify-center items-center">
      <iframe
        className="rounded-xl"
        title="YouTube video"
        width="auto"
        height="auto"
        src={videoSrc}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
