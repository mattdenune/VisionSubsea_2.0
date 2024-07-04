import React from "react";

import landingVideo from "../media/Consulting_updated.mp4";
import Hero from "./Hero";
import CallToAction from "./CallToAction";
import SectionContainer from "./SectionContainer";

let text = `VISION SUBSEA provides contract client representation, project
management, and technical advising to a wide range of marine industries
including oil and gas, telecom, and renewables. With extensive
experience and a proven track record, VISION SUBSEA personnel are ready
to go to work to help make your project successful.`;

let videoUrl = "vrhkjpyzwiiqu39acs4c";

const Consulting = () => (
  <>
    <Hero video={videoUrl} text={text} />
    <SectionContainer>
      <CallToAction />
    </SectionContainer>
  </>
);

export default Consulting;
