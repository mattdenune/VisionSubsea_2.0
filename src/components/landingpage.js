import React from "react";

import landingVideo from "../media/landingVideo_Compressed.mp4";
import logo from "../media/Logo_VS Horizontal white.png";
import Hero from "./Hero";
import InfoSection from "./InfoSection";
import Carousel from "./Carousel";
import CallToAction from "./CallToAction";

const Landingpage = () => (
  <>
    <Hero video={landingVideo} logo={logo} text="See Below the Surface" />
    <div className="sectionContainer">
      <InfoSection />
      <CallToAction />
      <Carousel />
    </div>
  </>
);

export default Landingpage;
