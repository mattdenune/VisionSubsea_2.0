import React, { useRef, useEffect } from "react";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

import "cloudinary-video-player/cld-video-player.min.css";

export default function AutoPlaySilentVideo({video, className}) {
  // const videoRef = useRef(undefined);
  // useEffect(() => {
  //   videoRef.current.defaultMuted = true;
  // });

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dv5zlm77w",
    },
  });


  const myVideo = cld
    .video(video)
    .quality("auto")
    .format('auto')

  return (
    <AdvancedVideo
      id="video-player"
      className={className}
      cldVid={myVideo}
      cldPoster="auto"
      // cldPoster={myVideo.format('jpg')}
      // ref={videoRef}
      preload="none"
      loop
      autoPlay
      muted
      playsInline
    />
  );
}
