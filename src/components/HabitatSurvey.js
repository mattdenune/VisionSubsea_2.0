import React from "react";

import landingVideo from "../media/habitat_survey_compressed.mp4";
import Hero from "./Hero";
import CallToAction from "./CallToAction";
import SectionContainer from "./SectionContainer";


const HabitatSurvey = () => (
  <>
    <Hero video={landingVideo}/>
    <SectionContainer>
      <CallToAction />
    </SectionContainer>
  </>
);


export default HabitatSurvey;
