import React from "react";

import landingVideo from "../media/landingVideo_3.mp4";

const Services = () => (
  <div>
    <div
      className="border d-flex flex-column flex-md-row text-center"
      style={{
        height: "80vh",
        width: "80wv",
        marginTop: "100px",
        marginLeft: "50px",
        marginRight: "50px",
      }}
    >
      <section className="mt-auto mb-auto" style={{ maxWidth: "50%" }}>
        <video
          src={landingVideo}
          autoPlay
          muted
          loop
          className="rounded"
          style={{ objectFit: "cover", overflow: "hidden", width: "90%" }}
        />
      </section>

      <section className="">
        <div className="d-flex flex-wrap justify-content-between">
          <div className="card m-5" style={{ width: "18rem", height: "15rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card One</h5>
              {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="card m-5" style={{ width: "18rem", height: "15rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card Two</h5>
              {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          <div className="card m-5" style={{ width: "18rem", height: "15rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card Three</h5>
              {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="card m-5" style={{ width: "18rem", height: "15rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card Four</h5>
              {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div
      className="border d-flex flex-column flex-md-row text-center"
      style={{
        height: "80vh",
        width: "80wv",
        marginTop: "100px",
        marginLeft: "50px",
        marginRight: "50px",
      }}
    >
      <section className="mt-auto mb-auto" style={{ maxWidth: "50%" }}>
        <video
          src={landingVideo}
          autoPlay
          muted
          loop
          className="rounded"
          style={{ objectFit: "cover", overflow: "hidden", width: "90%" }}
        />
      </section>

      <section className="">
        <div className="d-flex flex-wrap justify-content-between">
          <div className="card m-5" style={{ width: "18rem", height: "15rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card One</h5>
              {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="card m-5" style={{ width: "18rem", height: "15rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card Two</h5>
              {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          <div className="card m-5" style={{ width: "18rem", height: "15rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card Three</h5>
              {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="card m-5" style={{ width: "18rem", height: "15rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card Four</h5>
              {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Services;
