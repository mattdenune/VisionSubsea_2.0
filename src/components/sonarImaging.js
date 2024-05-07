import React from "react";

import landingVideo from "../media/SonarImaging_Compressed.mp4";
import Hero from "./Hero";

let text = `VISION SUBSEA utilizes Sound Metrics industry leading ARIS Explorer line
of high-resolution sonars to provide clients with quality acoustic
images in turbid waters in Alaska and beyond. VISION SUBSEA’s
experienced sonar operators work with clients to develop site specific
inspection plans that allow for close visual inspections using the
industry leading ARIS forward-looking sonars.`;

const SonarImaging = () => (
  <>
    <Hero video={landingVideo} text={text}/>
  </>
);


export default SonarImaging;
