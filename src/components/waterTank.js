import React from "react";

import tankInspectionVideo from "../media/tank_inspection_Compressed.mp4";
import Hero from "./Hero";
import CallToAction from "./CallToAction";
import SectionContainer from "./SectionContainer";

let text=`VISION SUBSEA deploys Remotely Operated Vehicles to complete inspections
on in-service potable water and firewater tanks. The experienced
inspection team provides all equipment and tooling necessary to perform
the inspection and allow tank owners and engineers to document
condition, plan maintenance, and meet regulatory requirements.`

const WaterTank = () => (
  <>
    <Hero video={tankInspectionVideo} text={text} />
    <SectionContainer>
      <CallToAction />
    </SectionContainer>
  </>
);


export default WaterTank;
