import React, { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";

class Experince extends Component {
  render() {
    return (
      <Container>
        <div className="experience-contain">
          <h3>Experience</h3>

          <ListGroup>
            <ListGroup.Item
              variant="light"
              className="d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center">
                <div className="imgPlace mr-2"></div>Experince 1
              </div>
              <i className="fas fa-pen "></i>
            </ListGroup.Item>
            <ListGroup.Item
              variant="light"
              className="d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center">
                <div className="imgPlace mr-2"></div>Experince 1
              </div>
              <i className="fas fa-pen"></i>
            </ListGroup.Item>
            <ListGroup.Item
              variant="light"
              className="d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center">
                <div className="imgPlace mr-2"></div>Experince 1
              </div>
              <i className="fas fa-pen"></i>
            </ListGroup.Item>
            <ListGroup.Item
              variant="light"
              className="d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center">
                <div className="imgPlace mr-2"></div>Experince 1
              </div>
              <i className="fas fa-pen"></i>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Container>
    );
  }
}
export default Experince;
