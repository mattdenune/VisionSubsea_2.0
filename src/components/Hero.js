import React from "react";

const Hero = ({ video, logo, text }) => (
  <div className="landingpage">
    <video src={video} autoPlay muted loop className="video-bg" />
    <div className="bg-overlay"></div>

    <div className="home-text">
      {logo && (
        <img src={logo} alt="Vision Subsea logo" style={{ width: "50vw" }} />
      )}
      <p>{text}</p>
    </div>
  </div>
);

export default Hero;
