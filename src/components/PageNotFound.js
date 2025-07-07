import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function PageNotFound() {
  return (
    <main>
      <Helmet>
        <title>404 Not Found | Vision Subsea</title>
        <meta
          name="description"
          content="The page you are looking for was moved, removed, or might never have existed. Return to Vision Subsea homepage."
        />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="404 Not Found | Vision Subsea" />
        <meta
          property="og:description"
          content="The page you are looking for was moved, removed, or might never have existed. Return to Vision Subsea homepage."
        />
        <meta property="og:image" content="/VisionSubseaWhiteMockup.png" />
        <meta property="og:url" content="https://visionsubsea.com/404" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="404 Not Found | Vision Subsea" />
        <meta
          name="twitter:description"
          content="The page you are looking for was moved, removed, or might never have existed. Return to Vision Subsea homepage."
        />
        <meta name="twitter:image" content="/VisionSubseaWhiteMockup.png" />
      </Helmet>
      <div>
        <section
          className="d-flex align-items-center min-vh-100 py-5"
          aria-labelledby="not-found-heading"
        >
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-md-6 order-md-2">
                <div className="lc-block">
                  <img
                    src={require("../media/Vision Subsea White Mockup.png")}
                    alt="Vision Subsea logo"
                    className="aboutImage w-100 rounded"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-md-6 text-center text-md-start ">
                <div className="lc-block mb-3">
                  <div editable="rich">
                    <h1 id="not-found-heading" className="fw-bold h4">
                      PAGE NOT FOUND!
                      <br />
                    </h1>
                  </div>
                </div>
                <div className="lc-block mb-3">
                  <div editable="rich">
                    <h2 className="display-1 fw-bold text-muted">Error 404</h2>
                  </div>
                </div>
                <div className="lc-block mb-5">
                  <div editable="rich">
                    <p className="rfs-11 fw-light">
                      {" "}
                      The page you are looking for was moved, removed or might
                      never existed.
                    </p>
                  </div>
                </div>
                <div className="lc-block">
                  <Link
                    className="btn btn-lg btn-primary"
                    to="/"
                    role="button"
                    aria-label="Back to homepage"
                  >
                    Back to homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default PageNotFound;
