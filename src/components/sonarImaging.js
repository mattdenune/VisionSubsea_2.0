import React from "react";
import { Helmet } from 'react-helmet-async';

import landingVideo from "../media/SonarImaging.mp4";
import image from "../media/SonarImagingPoster.png";
import Hero from "./Hero";
import CallToAction from "./CallToAction";
import SectionContainer from "./SectionContainer";

let text = `VISION SUBSEA utilizes Sound Metrics industry leading ARIS Explorer line
of high-resolution sonars to provide clients with quality acoustic
images in turbid waters in Alaska and beyond. VISION SUBSEA’s
experienced sonar operators work with clients to develop site specific
inspection plans that allow for close visual inspections using the
industry leading ARIS forward-looking sonars.`;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Sonar Imaging Services",
  "description": "High-resolution ARIS Explorer sonar imaging for underwater inspections in turbid waters. Site-specific plans and expert operators.",
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
  "serviceType": "Sonar Imaging",
  "image": "https://visionsubsea.com/SonarImagingPoster.png",
  "url": "https://visionsubsea.com/sonarImaging"
};


const SonarImaging = () => (
  <main>
    <Helmet>
      <title>Sonar Imaging Services | Vision Subsea</title>
      <meta name="description" content="High-resolution ARIS Explorer sonar imaging for underwater inspections in turbid waters. Site-specific plans and expert operators." />
      <meta name="keywords" content="sonar imaging, ARIS Explorer, underwater inspection, Alaska, Vision Subsea" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Sonar Imaging Services | Vision Subsea" />
      <meta property="og:description" content="High-resolution ARIS Explorer sonar imaging for underwater inspections in turbid waters. Site-specific plans and expert operators." />
      <meta property="og:image" content="/SonarImagingPoster.png" />
      <meta property="og:url" content="https://visionsubsea.com/sonarImaging" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Sonar Imaging Services | Vision Subsea" />
      <meta name="twitter:description" content="High-resolution ARIS Explorer sonar imaging for underwater inspections in turbid waters. Site-specific plans and expert operators." />
      <meta name="twitter:image" content="/SonarImagingPoster.png" />
      <link rel="canonical" href="https://visionsubsea.com/sonarImaging" />
      <script type="application/ld+json">
        {JSON.stringify(serviceJsonLd)}
      </script>
    </Helmet>
    <Hero video={landingVideo} text={text} poster={image} />
    <section className="sectionContainer" aria-labelledby="sonar-imaging-heading">
      <h1 id="sonar-imaging-heading" className="visually-hidden">Sonar Imaging Services</h1>
      <SectionContainer>
        <CallToAction />
      </SectionContainer>
    </section>
  </main>
);

export default SonarImaging;
