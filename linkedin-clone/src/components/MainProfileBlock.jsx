import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import ProfilePicture from "../assets/profilepicture.PNG";
import LatestEducation from "./LatestEducation";
import LatestExperience from "./LatestExperience";

function MainProfileBlock() {
  return (
    <Container>
      <Card id="profile-main" className="mt-5">
        <div className="profile-background-container">
          <div
            className="profile-background-picture"
            style={{
              background: `url(${ProfilePicture})`,
            }}
          ></div>
        </div>

        <Card.Body className="d-flex justify-content-between px-4 py-3 mb-3">
          <div className="profile-left w-50">
            <div className="profile-photo"></div>
            <h3 className="d-inline-block mr-2">Name</h3>
            <h4 className="d-inline-block mb-0 font-weight-light"> - 2nd</h4>
            <h4 className="font-weight-light">Job Title</h4>
            <Card.Text>
              Location - 500+ connections -{" "}
              <a href="#!" className="font-weight-bold">
                Contact info
              </a>
            </Card.Text>
          </div>
          <div className="profile-right w-50 text-right">
            <div className="profile-button-container d-flex align-items-center justify-content-end mb-4">
              <Button className="mr-2 px-4 rounded-pill font-weight-bold" variant="primary">
                Connect
              </Button>
              <Button className="mr-2 px-4 rounded-pill font-weight-bold" variant="outline-primary">
                Message
              </Button>
              <Button className="px-4 rounded-pill font-weight-bold" variant="outline-secondary">
                More...
              </Button>
            </div>
            <div className="d-flex flex-column align-items-end text-left">
              <LatestExperience />
              <LatestEducation />
              <div className="latest-experience"></div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MainProfileBlock;
