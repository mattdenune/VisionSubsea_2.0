import React from "react";
import { Helmet } from 'react-helmet-async';

import landingVideo from "../media/nearshore_mooring.mp4";
import image from "../media/NearshoreMooringsPoster.png";
import Hero from "./Hero";
import CallToAction from "./CallToAction";
import SectionContainer from "./SectionContainer";

let text = `VISION SUBSEA specializes in nearshore mooring inspections. Whether it
is a permanent or seasonal mooring installation, VISION SUBSEA provides
our clients with high-definition video documenting condition and
position. This data allows our clients to confirm integrity, plan
maintenance, and track and trend conditions over time.`;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Nearshore Mooring Inspection",
  "description": "High-definition video inspections for permanent and seasonal nearshore moorings. Confirm integrity and plan maintenance with Vision Subsea.",
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
  "serviceType": "Nearshore Mooring Inspection",
  "image": "https://visionsubsea.com/NearshoreMooringsPoster.png",
  "url": "https://visionsubsea.com/nearshoreMooring"
};

const NearshoreMooring = () => (
  <main>
    <Helmet>
      <title>Nearshore Mooring Inspections | Vision Subsea</title>
      <meta name="description" content="High-definition video inspections for permanent and seasonal nearshore moorings. Confirm integrity and plan maintenance with Vision Subsea." />
      <meta name="keywords" content="nearshore mooring, inspection, ROV, Alaska, Vision Subsea" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Nearshore Mooring Inspections | Vision Subsea" />
      <meta property="og:description" content="High-definition video inspections for permanent and seasonal nearshore moorings. Confirm integrity and plan maintenance with Vision Subsea." />
      <meta property="og:image" content="/NearshoreMooringsPoster.png" />
      <meta property="og:url" content="https://visionsubsea.com/nearshoreMooring" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Nearshore Mooring Inspections | Vision Subsea" />
      <meta name="twitter:description" content="High-definition video inspections for permanent and seasonal nearshore moorings. Confirm integrity and plan maintenance with Vision Subsea." />
      <meta name="twitter:image" content="/NearshoreMooringsPoster.png" />
      <link rel="canonical" href="https://visionsubsea.com/nearshoreMooring" />
      <script type="application/ld+json">
        {JSON.stringify(serviceJsonLd)}
      </script>
    </Helmet>
    <Hero video={landingVideo} text={text} poster={image} />
    <section className="sectionContainer" aria-labelledby="nearshore-mooring-heading">
      <h1 id="nearshore-mooring-heading" className="visually-hidden">Nearshore Mooring Inspections</h1>
      <SectionContainer>
        <CallToAction />
      </SectionContainer>
    </section>
  </main>
);

export default NearshoreMooring;
