import React from 'react';

import landingVideo from "../media/MarineCasualtyResponse_Compressed.mp4";

const MarineCasualtyResponse = () => (
  <>
    <Hero />
  </>
)

const Hero = () => (
  <div className="landingpage">
    <video src={landingVideo} autoPlay muted loop className="video-bg" />
    <div className="bg-overlay"></div>

    <div className="home-text">
      <p>
        VISION SUBSEA has the ability to respond to marine casualty incidents
        across Alaska. With easily mobilized ROV spreads, VISION SUBSEA provides
        a cost-effective means to complete initial assessments of submerged
        targets and provide owners and first responders with the decision-making
        data they require in these high-pressure situations.
      </p>
    </div>
  </div>
);


export default MarineCasualtyResponse;