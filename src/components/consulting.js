import React from "react";

import landingVideo from "../media/Consulting_Compressed.mp4";

const Consulting = () => (
  <>
    <Hero />
  </>
);

const Hero = () => (
  <div className="landingpage">
    <video src={landingVideo} autoPlay muted loop className="video-bg" />
    <div className="bg-overlay"></div>

    <div className="home-text">
      <p>
        VISION SUBSEA provides contract client representation, project
        management, and technical advising to a wide range of marine industries
        including oil and gas, telecom, and renewables. With extensive
        experience and a proven track record, VISION SUBSEA personnel are ready
        to go to work to help make your project successful.
      </p>
    </div>
  </div>
);

export default Consulting;
