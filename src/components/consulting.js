import React from "react";
import { Helmet } from 'react-helmet-async';

import landingVideo from "../media/Consulting.mp4";
import image from '../media/ConsultingPoster.png'
import Hero from "./Hero";
import CallToAction from "./CallToAction";
import SectionContainer from "./SectionContainer";

let text = `VISION SUBSEA provides contract client representation, project
management, and technical advising to a wide range of marine industries
including oil and gas, telecom, and renewables. With extensive
experience and a proven track record, VISION SUBSEA personnel are ready
to go to work to help make your project successful.`;


const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Marine Consulting Services",
  "description": "Contract client representation, project management, and technical advising for marine industries. Oil, gas, telecom, renewables.",
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
  "serviceType": "Marine Consulting",
  "image": "https://visionsubsea.com/ConsultingPoster.png",
  "url": "https://visionsubsea.com/consulting"
};

const Consulting = () => (
  <main>
    <Helmet>
      <title>Marine Consulting Services | Vision Subsea</title>
      <meta name="description" content="Contract client representation, project management, and technical advising for marine industries. Oil, gas, telecom, renewables." />
      <meta name="keywords" content="consulting, marine, project management, technical advising, Vision Subsea" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Marine Consulting Services | Vision Subsea" />
      <meta property="og:description" content="Contract client representation, project management, and technical advising for marine industries. Oil, gas, telecom, renewables." />
      <meta property="og:image" content="/ConsultingPoster.png" />
      <meta property="og:url" content="https://visionsubsea.com/consulting" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Marine Consulting Services | Vision Subsea" />
      <meta name="twitter:description" content="Contract client representation, project management, and technical advising for marine industries. Oil, gas, telecom, renewables." />
      <meta name="twitter:image" content="/ConsultingPoster.png" />
      <link rel="canonical" href="https://visionsubsea.com/consulting" />
      <script type="application/ld+json">
        {JSON.stringify(serviceJsonLd)}
      </script>
    </Helmet>
    <Hero video={landingVideo} text={text} poster={image} />
    <section className="sectionContainer" aria-labelledby="consulting-heading">
      <h1 id="consulting-heading" className="visually-hidden">Marine Consulting Services</h1>
      <SectionContainer>
        <CallToAction />
      </SectionContainer>
    </section>
  </main>
);

export default Consulting;
