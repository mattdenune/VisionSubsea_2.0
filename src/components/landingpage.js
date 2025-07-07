import React from "react";
import { Helmet } from 'react-helmet-async';

import landingVideo from "../media/landingVideo.mp4";
import image from "../media/LandingPagePoster.png";
import logo from "../media/Logo_VS Horizontal white.png";
import Hero from "./Hero";
import InfoSection from "./InfoSection";
import Carousel from "./Carousel";
import CallToAction from "./CallToAction";
import "../styles/landingpage.css";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Vision Subsea LLC",
  "url": "https://visionsubsea.com/",
  "logo": "https://visionsubsea.com/logo512.png",
  "description": "Alaska-based underwater inspection services using ROVs and sonar for ports, harbors, tanks, and marine environments.",
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+1-907-299-4403",
    "contactType": "customer service",
    "email": "info@visionsubsea.com"
  }],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Alaska",
    "addressCountry": "USA"
  }
  // Add social media if available, e.g. "sameAs": ["https://www.linkedin.com/company/visionsubsea"]
};

const Landingpage = () => (
  <main id="main-content">
    <Helmet>
      <title>Vision Subsea | Underwater Inspection Services</title>
      <meta name="description" content="Alaska-based underwater inspection services using ROVs and sonar for ports, harbors, tanks, and marine environments. See below the surface with Vision Subsea." />
      <meta name="keywords" content="underwater inspection, ROV, Alaska, marine survey, sonar, Vision Subsea" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Vision Subsea | Underwater Inspection Services" />
      <meta property="og:description" content="Alaska-based underwater inspection services using ROVs and sonar for ports, harbors, tanks, and marine environments." />
      <meta property="og:image" content="/logo512.png" />
      <meta property="og:url" content="https://visionsubsea.com/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Vision Subsea | Underwater Inspection Services" />
      <meta name="twitter:description" content="Alaska-based underwater inspection services using ROVs and sonar for ports, harbors, tanks, and marine environments." />
      <meta name="twitter:image" content="/logo512.png" />
      <link rel="canonical" href="https://visionsubsea.com/" />
      <script type="application/ld+json">
        {JSON.stringify(organizationJsonLd)}
      </script>
    </Helmet>
    <Hero video={landingVideo} logo={logo} text="See Below the Surface" poster={image}/>
    <section className="sectionContainer" aria-labelledby="main-services-heading">
      <h1 id="main-services-heading" className="visually-hidden">Vision Subsea Underwater Inspection Services</h1>
      <InfoSection />
      <CallToAction />
      <Carousel />
    </section>
  </main>
);

export default Landingpage;
