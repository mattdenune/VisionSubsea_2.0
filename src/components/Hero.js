import React from "react";
import AutoPlaySilentVideo from "./Video";




const Hero = ({ video, logo, text }) => (
  <div className="landingpage">
    <AutoPlaySilentVideo video={video} className={"video-bg"} />
    <div className="bg-overlay"></div>

    <div className="home-text">
      {logo && <img src={logo} alt="Vision Subsea logo" className="heroLogo" loading="lazy" />}
      {text && <p>{text}</p>}
    </div>
  </div>
);

export default Hero;
