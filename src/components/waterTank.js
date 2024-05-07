import React from "react";

import tankInspectionVideo from "../media/tank_inspection_Compressed.mp4";

const WaterTank = () => (
  <>
    <Hero />
  </>
);

const Hero = () => (
  <div className="landingpage">
    <video src={tankInspectionVideo} autoPlay muted loop className="video-bg" />
    <div className="bg-overlay"></div>

    <div className="home-text">
      <p>
        VISION SUBSEA deploys Remotely Operated Vehicles to complete inspections
        on in-service potable water and firewater tanks. The experienced
        inspection team provides all equipment and tooling necessary to perform
        the inspection and allow tank owners and engineers to document
        condition, plan maintenance, and meet regulatory requirements.
      </p>
    </div>
  </div>
);

export default WaterTank;
