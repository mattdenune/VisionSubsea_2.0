import React from "react";

import customerComments from "../Data/customer_comments";
import "../styles/carousel.css";

const Carousel = () => (
  <div className="carouselContainer">
    <section className="carouselSection d-flex justify-content-center align-items-start">
      <div
        id="carouselExampleControls"
        className="innerContainer carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner carouselTextContainer">
          {customerComments.map((comment, i) => (
            <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
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
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  </div>
);

export default Carousel;
