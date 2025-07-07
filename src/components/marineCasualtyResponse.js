import React from "react";
import { Helmet } from 'react-helmet-async';

import landingVideo from "../media/MarineCasualtyResponse.mp4";
import image from "../media/MarineCasualityResponsePoster.png";
import Hero from "./Hero";
import CallToAction from "./CallToAction";
import SectionContainer from "./SectionContainer";

let text = `VISION SUBSEA has the ability to respond to marine casualty incidents
across Alaska. With easily mobilized ROV spreads, VISION SUBSEA provides
a cost-effective means to complete initial assessments of submerged
targets and provide owners and first responders with the decision-making
data they require in these high-pressure situations.`;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Marine Casualty Response",
  "description": "Rapid marine casualty response across Alaska. ROV assessments for submerged targets, supporting owners and first responders.",
  "provider": {
    "@type": "Organization",
    "name": "Vision Subsea LLC",
    "url": "https://visionsubsea.com/",
    "logo": "https://visionsubsea.com/logo512.png"
  },
  "areaServed": {
    "@type": "State",
    "name": "Alaska"
  },
  "serviceType": "Marine Casualty Response",
  "image": "https://visionsubsea.com/MarineCasualityResponsePoster.png",
  "url": "https://visionsubsea.com/marineResponse"
};

const MarineCasualtyResponse = () => (
  <main>
    <Helmet>
      <title>Marine Casualty Response | Vision Subsea</title>
      <meta name="description" content="Rapid marine casualty response across Alaska. ROV assessments for submerged targets, supporting owners and first responders." />
      <meta name="keywords" content="marine casualty, response, ROV, Alaska, emergency, Vision Subsea" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Marine Casualty Response | Vision Subsea" />
      <meta property="og:description" content="Rapid marine casualty response across Alaska. ROV assessments for submerged targets, supporting owners and first responders." />
      <meta property="og:image" content="/MarineCasualityResponsePoster.png" />
      <meta property="og:url" content="https://visionsubsea.com/marineResponse" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Marine Casualty Response | Vision Subsea" />
      <meta name="twitter:description" content="Rapid marine casualty response across Alaska. ROV assessments for submerged targets, supporting owners and first responders." />
      <meta name="twitter:image" content="/MarineCasualityResponsePoster.png" />
      <link rel="canonical" href="https://visionsubsea.com/marineResponse" />
      <script type="application/ld+json">
        {JSON.stringify(serviceJsonLd)}
      </script>
    </Helmet>
    <Hero video={landingVideo} text={text} poster={image} />
    <section className="sectionContainer" aria-labelledby="marine-casualty-heading">
      <h1 id="marine-casualty-heading" className="visually-hidden">Marine Casualty Response</h1>
      <SectionContainer>
        <CallToAction />
      </SectionContainer>
    </section>
  </main>
);

export default MarineCasualtyResponse;
