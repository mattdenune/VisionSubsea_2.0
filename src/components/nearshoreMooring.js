import React from "react";

import landingVideo from "../media/nearshore_mooring.mp4";
import image from "../media/NearshoreMooringsPoster.png";
import Hero from "./Hero";
import CallToAction from "./CallToAction";
import SectionContainer from "./SectionContainer";

let text = `VISION SUBSEA specializes in nearshore mooring inspections. Whether it
is a permanent or seasonal mooring installation, VISION SUBSEA provides
our clients with high-definition video documenting condition and
position. This data allows our clients to confirm integrity, plan
maintenance, and track and trend conditions over time.`;


const NearshoreMooring = () => (
  <>
    <Hero video={landingVideo} text={text} poster={image} />
    <SectionContainer>
      <CallToAction />
    </SectionContainer>
  </>
);

export default NearshoreMooring;
