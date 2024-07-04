import React from "react";

import landingVideo from "../media/MarineCasualtyResponse_Compressed.mp4";
import Hero from "./Hero";
import CallToAction from "./CallToAction";
import SectionContainer from "./SectionContainer";

let text = `VISION SUBSEA has the ability to respond to marine casualty incidents
across Alaska. With easily mobilized ROV spreads, VISION SUBSEA provides
a cost-effective means to complete initial assessments of submerged
targets and provide owners and first responders with the decision-making
data they require in these high-pressure situations.`;

let videoUrl = 'ak2fvjj2u6ykzatwlu8j'

const MarineCasualtyResponse = () => (
  <>
    <Hero video={videoUrl} text={text} />
    <SectionContainer>
      <CallToAction />
    </SectionContainer>
  </>
);

export default MarineCasualtyResponse;
