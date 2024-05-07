import React from "react";

import landingVideo from "../media/Nearshore Moorings_Compressed.mp4";

const NearshoreMooring = () => (
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
        VISION SUBSEA specializes in nearshore mooring inspections. Whether it
        is a permanent or seasonal mooring installation, VISION SUBSEA provides
        our clients with high-definition video documenting condition and
        position. This data allows our clients to confirm integrity, plan
        maintenance, and track and trend conditions over time.
      </p>
    </div>
  </div>
);

export default NearshoreMooring;
