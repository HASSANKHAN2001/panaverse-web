import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

export default function Video() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "450",
    width: "100%",
    playerVars: {
      " https://youtu.be/kHEwlxGlb98": YouTube,
      autoplay: 0,
    },
  };

  return <YouTube videoId="kHEwlxGlb98" opts={opts} onReady={onPlayerReady} />;
}
