import React from "react";
import { Helmet } from 'react-helmet-async';

import landingVideo from "../media/Asset and Infrastructure.mp4";
import image from '../media/AssetAndIfrastructurePoster.png'
import Hero from "./Hero";
import CallToAction from "./CallToAction";
import SectionContainer from "./SectionContainer";

let text = `From Port and Harbor pilings and sewer lines to inland dam and large
pipeline inspections, VISION SUBSEA uses Remotely Operated Vehicles to
provide close and general visual inspection of our client’s assets. We
support our clients needs by providing cost-effective high- quality data
collection to for regulatory compliance and general condition
assessment.`;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Underwater Asset & Infrastructure Inspection",
  "description": "ROV inspections for ports, harbors, sewer lines, dams, and pipelines. High-quality data for compliance and condition assessment.",
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
  "serviceType": "Asset and Infrastructure Inspection",
  "image": "https://visionsubsea.com/AssetAndIfrastructurePoster.png",
  "url": "https://visionsubsea.com/assetInfrastructure"
};

const AssetInfrastructure = () => (
  <main>
    <Helmet>
      <title>Asset & Infrastructure Inspections | Vision Subsea</title>
      <meta name="description" content="ROV inspections for ports, harbors, sewer lines, dams, and pipelines. High-quality data for compliance and condition assessment." />
      <meta name="keywords" content="asset inspection, infrastructure, ROV, pipeline, dam, harbor, Vision Subsea" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Asset & Infrastructure Inspections | Vision Subsea" />
      <meta property="og:description" content="ROV inspections for ports, harbors, sewer lines, dams, and pipelines. High-quality data for compliance and condition assessment." />
      <meta property="og:image" content="/AssetAndIfrastructurePoster.png" />
      <meta property="og:url" content="https://visionsubsea.com/assetInfrastructure" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Asset & Infrastructure Inspections | Vision Subsea" />
      <meta name="twitter:description" content="ROV inspections for ports, harbors, sewer lines, dams, and pipelines. High-quality data for compliance and condition assessment." />
      <meta name="twitter:image" content="/AssetAndIfrastructurePoster.png" />
      <link rel="canonical" href="https://visionsubsea.com/assetInfrastructure" />
      <script type="application/ld+json">
        {JSON.stringify(serviceJsonLd)}
      </script>
    </Helmet>
    <Hero video={landingVideo} text={text} poster={image}/>
    <section className="sectionContainer" aria-labelledby="asset-infrastructure-heading">
      <h1 id="asset-infrastructure-heading" className="visually-hidden">Asset & Infrastructure Inspections</h1>
      <SectionContainer>
        <CallToAction />
      </SectionContainer>
    </section>
  </main>
);

export default AssetInfrastructure;
