import React from "react";

const About = () => (
  <div>
    <img
      src={require("../media/about_2.jpg")}
      alt="a vision subsea worker"
      style={{ width: "100%", height: "auto", position: "absolute" }}
    />
    <div
      className="border d-flex flex-column text-center"
      style={{
        width: "900px",
        borderRadius: "16px",
        marginLeft: "50px",
        marginRight: "50px",
        padding: "15px",
        position: "relative",
        left: "45%",
        top: "90px",
        backgroundColor: "white",
        opacity: "0.8",
      }}
    >
      <h3 className="my-4">
        VISION SUBSEA LLC is an Alaska based underwater inspection services
        company founded in 2019. Since its inception, VISION SUBSEA has
        supported a wide range of industries and clients across Alaska and
        beyond. From inland water tank inspections to ocean marine habitat
        surveys, VISION SUBSEA has completed projects for municipal, state and
        federal agencies as well as private and non-profit companies.
      </h3>
      <h3 className="my-4">
        When not in the shop developing and maintaining our custom ROV packages
        or in the field completing inspections for clients, VISION SUBSEA
        personnel put our experience and expertise to work supporting clients by
        providing subsea subject matter expert consulting services.
      </h3>
      <h3 className="my-4">
        Whether operating VISION SUBSEA equipment, or consulting on large
        capital marine construction projects the team has one goal in mind: safe
        and successful project completion.
      </h3>
    </div>
  </div>
);

export default About;
