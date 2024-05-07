import React from "react";

import landingVideo from "../media/Asset and Infrastructure_Compressed.mp4";

const AssetInfrastructure = () => (
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
        From Port and Harbor pilings and sewer lines to inland dam and large
        pipeline inspections, VISION SUBSEA uses Remotely Operated Vehicles to
        provide close and general visual inspection of our client’s assets. We
        support our clients needs by providing cost-effective high- quality data
        collection to for regulatory compliance and general condition
        assessment.
      </p>
    </div>
  </div>
);

export default AssetInfrastructure;
