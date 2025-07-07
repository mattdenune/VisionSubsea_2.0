import React from "react";
import { Helmet } from 'react-helmet-async';

import tankInspectionVideo from "../media/tank_inspection.mp4";
import image from "../media/WaterTankPoster.png";
import Hero from "./Hero";
import CallToAction from "./CallToAction";
import SectionContainer from "./SectionContainer";

let text=`VISION SUBSEA deploys Remotely Operated Vehicles to complete inspections
on in-service potable water and firewater tanks. The experienced
inspection team provides all equipment and tooling necessary to perform
the inspection and allow tank owners and engineers to document
condition, plan maintenance, and meet regulatory requirements.`

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Potable and Firewater Tank Inspection",
  "description": "In-service potable and firewater tank inspections using ROVs. Meet regulatory requirements and plan maintenance with Vision Subsea.",
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
  "serviceType": "Water Tank Inspection",
  "image": "https://visionsubsea.com/WaterTankPoster.png",
  "url": "https://visionsubsea.com/waterTank"
};

const WaterTank = () => (
  <main>
    <Helmet>
      <title>Water Tank Inspections | Vision Subsea</title>
      <meta name="description" content="In-service potable and firewater tank inspections using ROVs. Meet regulatory requirements and plan maintenance with Vision Subsea." />
      <meta name="keywords" content="water tank inspection, ROV, potable water, firewater, Alaska, Vision Subsea" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Water Tank Inspections | Vision Subsea" />
      <meta property="og:description" content="In-service potable and firewater tank inspections using ROVs. Meet regulatory requirements and plan maintenance with Vision Subsea." />
      <meta property="og:image" content="/WaterTankPoster.png" />
      <meta property="og:url" content="https://visionsubsea.com/waterTank" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Water Tank Inspections | Vision Subsea" />
      <meta name="twitter:description" content="In-service potable and firewater tank inspections using ROVs. Meet regulatory requirements and plan maintenance with Vision Subsea." />
      <meta name="twitter:image" content="/WaterTankPoster.png" />
      <link rel="canonical" href="https://visionsubsea.com/waterTank" />
      <script type="application/ld+json">
        {JSON.stringify(serviceJsonLd)}
      </script>
    </Helmet>
    <Hero video={tankInspectionVideo} text={text} poster={image} />
    <section className="sectionContainer" aria-labelledby="water-tank-heading">
      <h1 id="water-tank-heading" className="visually-hidden">Water Tank Inspections</h1>
      <SectionContainer>
        <CallToAction />
      </SectionContainer>
    </section>
  </main>
);


export default WaterTank;
