import React from "react";

import landingVideo from "../media/Consulting_Compressed.mp4";
import Hero from "./Hero";

let text = `VISION SUBSEA provides contract client representation, project
management, and technical advising to a wide range of marine industries
including oil and gas, telecom, and renewables. With extensive
experience and a proven track record, VISION SUBSEA personnel are ready
to go to work to help make your project successful.`;

const Consulting = () => (
  <>
    <Hero video={landingVideo} text={text} />
  </>
);


export default Consulting;
