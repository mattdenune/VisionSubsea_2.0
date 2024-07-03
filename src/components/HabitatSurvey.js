import React from "react";

import landingVideo from "../media/habitat_survey_compressed.mp4";
import Hero from "./Hero";
import CallToAction from "./CallToAction";
import SectionContainer from "./SectionContainer";

let text = "Completing marine environment surveys and investigations using remotely operated vehiceles. Providing HD video and data for nearshore marine environments."
const HabitatSurvey = () => (
  <>
    <Hero video={landingVideo} text={text} />
    <SectionContainer>
      <CallToAction />
    </SectionContainer>
  </>
);


export default HabitatSurvey;
