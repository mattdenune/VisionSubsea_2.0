import React from "react";

import landingVideo from "../media/landingVideo_Compressed.mp4";
import logo from '../media/Logo_VS Horizontal white.png';
import customerComments from '../Data/customer_comments';
import Hero from "./Hero";


const Landingpage = () => (
  <>
    <Hero video={landingVideo} logo={logo} text="See Below the Surface" />
    <InfoSection />
    <Carousel />
  </>
)

const InfoSection = () => (
  <section className="page-section mt-5" id="services">
    <div class="container-fluid text-center p-5">
      <div class="container p-5">
        <h1 class="display-4">Underwater Inspection Services</h1>
        <hr />
        <h4>
          VISION SUBSEA utilizes Remotely Operated Vehicles and multibeam sonar
          equipment to provide high-quality cost-effective data collection for
          clients across Alaska.
        </h4>
      </div>
    </div>
  </section>
);

const Carousel = () => (
  <section className="carouselSection bg-light d-flex justify-content-center align-items-start">
    <div
      id="carouselExampleControls"
      className="innerContainer carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {customerComments.map((comment, i) => (
          <div
            className={`carousel-item ${i === 0 ? "active" : ""}`}
            key={i}
          >
            <figure className="text-center">
              <blockquote className="blockquote">
                <p className="h3">"{comment.comment}"</p>
              </blockquote>
              <p className="h4 text-muted">- {comment.name}</p>
            </figure>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </section>
);

export default Landingpage;
