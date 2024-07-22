import React from "react";

import landingVideo from "../media/landingVideo.mp4";
import image from "../media/LandingPagePoster.png";
import logo from "../media/Logo_VS Horizontal white.png";
import Hero from "./Hero";
import InfoSection from "./InfoSection";
import Carousel from "./Carousel";
import CallToAction from "./CallToAction";
import "../styles/landingpage.css";

const Landingpage = () => (
  <>
    <Hero video={landingVideo} logo={logo} text="See Below the Surface" poster={image}/>
    <div className="sectionContainer">
      <InfoSection />
      <CallToAction />
      <Carousel />
    </div>
  </>
);

export default Landingpage;
