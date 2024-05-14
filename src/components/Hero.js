import React from "react";
import AutoPlaySilentVideo from "./Video";

const Hero = ({ video, logo, text }) => (
  <div className="landingpage">
    {/* <video playsinline src={video} autoPlay muted loop className="video-bg" /> */}
    <AutoPlaySilentVideo video={video} className={'video-bg'} />
    <div className="bg-overlay"></div>

    <div className="home-text">
      {logo && (
        <img src={logo} alt="Vision Subsea logo" className="heroLogo" />
      )}
      <p>{text}</p>
    </div>
  </div>
);

export default Hero;
