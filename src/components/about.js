import React from "react";
import { Helmet } from "react-helmet-async";

import "../styles/about.css";
import SectionContainer from "./SectionContainer";

const About = () => (
  <main>
    <Helmet>
      <title>About | Vision Subsea</title>
      <meta
        name="description"
        content="Learn about Vision Subsea LLC, Alaska's trusted underwater inspection company serving municipal, state, federal, and private clients since 2019."
      />
      <meta
        name="keywords"
        content="about, Vision Subsea, Alaska, underwater inspection, company, ROV, marine"
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="About | Vision Subsea" />
      <meta
        property="og:description"
        content="Learn about Vision Subsea LLC, Alaska's trusted underwater inspection company serving municipal, state, federal, and private clients since 2019."
      />
      <meta property="og:image" content="/VisionSubseaWhiteMockup.png" />
      <meta property="og:url" content="https://visionsubsea.com/about" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About | Vision Subsea" />
      <meta
        name="twitter:description"
        content="Learn about Vision Subsea LLC, Alaska's trusted underwater inspection company serving municipal, state, federal, and private clients since 2019."
      />
      <meta name="twitter:image" content="/VisionSubseaWhiteMockup.png" />
      <link rel="canonical" href="https://visionsubsea.com/about" />
    </Helmet>
    <section className="aboutContainer" aria-labelledby="about-heading">
      <div className="imageContainer">
        {/* <img
          src={require("../media/about_2.jpg")}
          alt="A Vision Subsea worker performing underwater inspection"
          className="aboutImage"
        /> */}
        <article className="aboutCard">
          <h1 id="about-heading" className="aboutText">About Vision Subsea</h1>
          <h2 className="aboutText">Alaska based underwater inspection services company</h2>
          <p className="aboutText">
            VISION SUBSEA LLC is an Alaska based underwater inspection services
            company founded in 2019. Since its inception, VISION SUBSEA has
            supported a wide range of industries and clients across Alaska and
            beyond. From inland water tank inspections to ocean marine habitat
            surveys, VISION SUBSEA has completed projects for municipal, state and
            federal agencies as well as private and non-profit companies.
          </p>
          <h2 className="aboutText">Expertise and Experience</h2>
          <p className="aboutText">
            When not in the shop developing and maintaining our custom ROV
            packages or in the field completing inspections for clients, VISION
            SUBSEA personnel put our experience and expertise to work supporting
            clients by providing subsea subject matter expert consulting services.
          </p>
          <h2 className="aboutText">Our Mission</h2>
          <p className="aboutText">
            Whether operating VISION SUBSEA equipment, or consulting on large
            capital marine construction projects the team has one goal in mind:
            safe and successful project completion.
          </p>
        </article>
      </div>
    </section>
  </main>
);

export default About;
