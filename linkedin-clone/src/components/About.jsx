import React from "react";

function About({ aboutData }) {
  return (
    <div id="about-container">
      <h4 className="font-weight-normal">About</h4>
      <p className="mb-0">{aboutData}</p>
    </div>
  );
}

export default About;
