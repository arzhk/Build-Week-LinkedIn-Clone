import React from "react";
import { Alert, Spinner } from "react-bootstrap";

function About({ aboutData, isFinishedLoading }) {
  return (
    <div id="about-container">
      <h4 className="font-weight-normal">About</h4>
      {isFinishedLoading ? (
        aboutData.length !== 0 ? (
          <p className="mb-0">{aboutData}</p>
        ) : (
          <Alert variant="light" className="pl-0">
            No data to display.
          </Alert>
        )
      ) : (
        <div className="pt-3">
          <h5 className="d-inline-block mr-2">Loading...</h5>
          <Spinner animation="border" variant="primary">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
}

export default About;
