import React from "react";

import landingVideo from "../media/Nearshore Moorings_Compressed.mp4";
import Hero from "./Hero";

let text = `VISION SUBSEA specializes in nearshore mooring inspections. Whether it
is a permanent or seasonal mooring installation, VISION SUBSEA provides
our clients with high-definition video documenting condition and
position. This data allows our clients to confirm integrity, plan
maintenance, and track and trend conditions over time.`

const NearshoreMooring = () => (
  <>
    <Hero video={landingVideo} text={text}/>
  </>
);


export default NearshoreMooring;
