import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import ReactPlayer from "react-player";

class Learning extends Component {
  render() {
    return (
      <Container className="pt-5 mt-5">
        <div className="banner-learning-contain mt-5">iewhedewudwedwe</div>

        <div className="d-flex mt-5">
          <div className="mr-3">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <ReactPlayer
                  controls
                  width="250px"
                  height="250px"
                  url="https://www.youtube.com/watch?v=N3AkSS5hXMA"
                />
                <Card.Title>React Basics</Card.Title>
                <Card.Text>by:Shaun Wassel</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="mr-3">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <ReactPlayer
                  controls
                  width="250px"
                  height="250px"
                  url="https://www.youtube.com/watch?v=Ke90Tje7VS0"
                />
                <Card.Title>React for Beginners</Card.Title>
                <Card.Text>by:Mosh hamedani</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="mr-3">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <ReactPlayer
                  controls
                  width="250px"
                  height="250px"
                  url="https://www.youtube.com/watch?v=6oFuwhIibo4"
                />
                <Card.Title>what is React Native?</Card.Title>
                <Card.Text>by:Mosh hamedani</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="mr-3">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <ReactPlayer
                  controls
                  width="250px"
                  height="250px"
                  url="https://www.youtube.com/watch?v=i8xsbYgMiBs"
                />
                <Card.Title>React Vs Angular</Card.Title>
                <Card.Text>by:Mosh hamedani</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    );
  }
}
export default Learning;
