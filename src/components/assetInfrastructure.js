import React from "react";

import landingVideo from "../media/Asset and Infrastructure.mp4";
import image from '../media/AssetAndIfrastructurePoster.png'
import Hero from "./Hero";
import CallToAction from "./CallToAction";
import SectionContainer from "./SectionContainer";

let text = `From Port and Harbor pilings and sewer lines to inland dam and large
pipeline inspections, VISION SUBSEA uses Remotely Operated Vehicles to
provide close and general visual inspection of our client’s assets. We
support our clients needs by providing cost-effective high- quality data
collection to for regulatory compliance and general condition
assessment.`;


const AssetInfrastructure = () => (
  <>
    <Hero video={landingVideo} text={text} poster={image}/>
    <SectionContainer>
      <CallToAction />
    </SectionContainer>
  </>
);

export default AssetInfrastructure;
