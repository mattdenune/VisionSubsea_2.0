import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/infoSection.css";

const InfoSection = () => (
  <>
    <Helmet>
      <title>Services | Vision Subsea</title>
      <meta
        name="description"
        content="Explore Vision Subsea's underwater inspection services using ROVs and sonar for Alaska's marine and inland environments."
      />
      <meta
        name="keywords"
        content="services, underwater inspection, ROV, sonar, Alaska, Vision Subsea"
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Services | Vision Subsea" />
      <meta
        property="og:description"
        content="Explore Vision Subsea's underwater inspection services using ROVs and sonar for Alaska's marine and inland environments."
      />
      <meta property="og:image" content="/logo512.png" />
      <meta property="og:url" content="https://visionsubsea.com/services" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Services | Vision Subsea" />
      <meta
        name="twitter:description"
        content="Explore Vision Subsea's underwater inspection services using ROVs and sonar for Alaska's marine and inland environments."
      />
      <meta name="twitter:image" content="/logo512.png" />
    </Helmet>
    <section className="page-section" id="services">
      <div className="container-fluid">
        <div className="container">
          <h1 className="containerText">Underwater Inspection Services</h1>
          <hr />
          <h4>
            VISION SUBSEA utilizes Remotely Operated Vehicles and multibeam sonar
            equipment to provide high-quality cost-effective data collection for
            clients across Alaska.
          </h4>
        </div>
      </div>
    </section>
  </>
);

export default InfoSection;
