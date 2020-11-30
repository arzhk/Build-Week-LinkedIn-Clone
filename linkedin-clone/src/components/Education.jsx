import React, { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";

export default class Education extends Component {
  render() {
    return (
      <Container>
        <div className="education-contain ">
          <h3>Education</h3>
          <ListGroup>
            <ListGroup.Item
              variant="light"
              className="d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center">
                <div className="imgPlace mr-2"></div>Education 1
              </div>
              <i className="fas fa-pen"></i>
            </ListGroup.Item>
            <ListGroup.Item
              variant="light"
              className="d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center">
                <div className="imgPlace mr-2"></div>Education 2
              </div>
              <i className="fas fa-pen"></i>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Container>
    );
  }
}
