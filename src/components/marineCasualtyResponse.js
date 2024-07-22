import React from "react";

import landingVideo from "../media/MarineCasualtyResponse.mp4";
import image from "../media/MarineCasualityResponsePoster.png";
import Hero from "./Hero";
import CallToAction from "./CallToAction";
import SectionContainer from "./SectionContainer";

let text = `VISION SUBSEA has the ability to respond to marine casualty incidents
across Alaska. With easily mobilized ROV spreads, VISION SUBSEA provides
a cost-effective means to complete initial assessments of submerged
targets and provide owners and first responders with the decision-making
data they require in these high-pressure situations.`;


const MarineCasualtyResponse = () => (
  <>
    <Hero video={landingVideo} text={text} poster={image} />
    <SectionContainer>
      <CallToAction />
    </SectionContainer>
  </>
);

export default MarineCasualtyResponse;
