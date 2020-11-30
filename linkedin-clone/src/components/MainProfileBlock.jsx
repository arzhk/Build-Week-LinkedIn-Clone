import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import ProfilePicture from "../assets/profilepicture.PNG";
import ContactInfoPopup from "./ContactInfoPopup";
import Highlights from "./Highlights";
import LatestEducation from "./LatestEducation";
import LatestExperience from "./LatestExperience";
import About from "./About";

function MainProfileBlock() {
  const [isMoreClicked, setIsMoreClicked] = React.useState(false);
  const [isContactInfoOpen, setIsContactInfoOpen] = React.useState(false);
  const [userData, setUserData] = React.useState({});

  const fetchUserDataHandler = async () => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/me/`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
        },
      });
      let data = await response.json();
      setUserData(data);
    } catch (er) {
      console.log(er);
    }
  };

  const moreMenuHandler = () => {
    setIsMoreClicked(!isMoreClicked);
  };

  const contactInfoHandler = () => {
    setIsContactInfoOpen(!isContactInfoOpen);
  };

  React.useEffect(() => {
    fetchUserDataHandler();
  }, []);

  return (
    <>
      {isContactInfoOpen && <ContactInfoPopup contactInfoHandler={contactInfoHandler} />}
      <Container
        className="pt-5 pb-3"
        onClick={() => {
          isMoreClicked && setIsMoreClicked(false);
        }}
      >
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
              <div
                className="profile-photo d-flex align-items-end justify-content-center"
                style={{ background: `url(${userData.image})` }}
              ></div>
              <h3 className="d-inline-block mr-2">
                {userData.name} {userData.surname}
              </h3>
              <h4 className="d-inline-block mb-0 font-weight-light"> - 1st</h4>
              <h4 className="font-weight-light">{userData.title}</h4>
              <Card.Text>
                {userData.area} - 500+ connections -{" "}
                <a href="#!" className="font-weight-bold" onClick={contactInfoHandler}>
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
                <Button
                  className="px-4 rounded-pill font-weight-bold"
                  variant="outline-secondary"
                  onClick={moreMenuHandler}
                >
                  More...
                </Button>
                {isMoreClicked && (
                  <div className="profile-more-menu">
                    <ul>
                      <li>
                        <a href="#!">
                          <i class="fas fa-paper-plane mr-4"></i>Share profile in a message
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i class="fas fa-download mr-4"></i>Save to PDF
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i class="fas fa-plus mr-4"></i>Follow
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i class="fas fa-flag mr-4"></i>Report/Block
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="d-flex flex-column align-items-end text-left">
                <LatestExperience />
                <LatestEducation />
                <div className="latest-experience"></div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Highlights />
        <About aboutData={userData.bio} />
      </Container>
    </>
  );
}

export default MainProfileBlock;
