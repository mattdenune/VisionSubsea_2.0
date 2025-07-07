import React from "react";
import { Helmet } from 'react-helmet-async';

import landingVideo from "../media/Habitat Survey.mp4";
import image from '../media/HabitatSurveyPoster.png'
import Hero from "./Hero";
import CallToAction from "./CallToAction";
import SectionContainer from "./SectionContainer";

let text = "Completing marine environment surveys and investigations using remotely operated vehiceles. Providing HD video and data for nearshore marine environments."

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Habitat Survey Services",
  "description": "Marine environment surveys and investigations using ROVs. HD video and data for nearshore marine environments in Alaska.",
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
  "serviceType": "Habitat Survey",
  "image": "https://visionsubsea.com/HabitatSurveyPoster.png",
  "url": "https://visionsubsea.com/habitatSurvey"
};

const HabitatSurvey = () => (
  <main>
    <Helmet>
      <title>Habitat Survey Services | Vision Subsea</title>
      <meta name="description" content="Marine environment surveys and investigations using ROVs. HD video and data for nearshore marine environments in Alaska." />
      <meta name="keywords" content="habitat survey, marine environment, ROV, Alaska, Vision Subsea" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Habitat Survey Services | Vision Subsea" />
      <meta property="og:description" content="Marine environment surveys and investigations using ROVs. HD video and data for nearshore marine environments in Alaska." />
      <meta property="og:image" content="/HabitatSurveyPoster.png" />
      <meta property="og:url" content="https://visionsubsea.com/habitatSurvey" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Habitat Survey Services | Vision Subsea" />
      <meta name="twitter:description" content="Marine environment surveys and investigations using ROVs. HD video and data for nearshore marine environments in Alaska." />
      <meta name="twitter:image" content="/HabitatSurveyPoster.png" />
      <link rel="canonical" href="https://visionsubsea.com/habitatSurvey" />
      <script type="application/ld+json">
        {JSON.stringify(serviceJsonLd)}
      </script>
    </Helmet>
    <Hero video={landingVideo} text={text} poster={image} />
    <section className="sectionContainer" aria-labelledby="habitat-survey-heading">
      <h1 id="habitat-survey-heading" className="visually-hidden">Habitat Survey Services</h1>
      <SectionContainer>
        <CallToAction />
      </SectionContainer>
    </section>
  </main>
);


export default HabitatSurvey;
