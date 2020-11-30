import React, { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";

class Experince extends Component {
  render() {
    return (
      <Container>
        <div id="experience-main-container" className="experience-contain mb-0">
          <div className="d-flex align-items-center justify-content-between">
            <h4 className="font-weight-normal">Experience</h4>
            <i className="fas fa-plus mr-3 "></i>
          </div>
          <ListGroup>
            <ListGroup.Item variant="light" className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-start">
                <div className="imgPlace mr-4"></div>
                <div className="d-flex flex-column">
                  <h5 className="mb-0 font-weight-normal">Experience 1</h5>
                  <p className="mb-0 ">Subtext</p>
                  <p className="mb-0 font-weight-light">Subtext 2</p>
                  <small className="font-weight-light">Location</small>
                </div>
              </div>
              <i className="fas fa-pen "></i>
            </ListGroup.Item>
            <ListGroup.Item variant="light" className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-start">
                <div className="imgPlace mr-4"></div>
                <div className="d-flex flex-column">
                  <h5 className="mb-0 font-weight-normal">Experience 1</h5>
                  <p className="mb-0 ">Subtext</p>
                  <p className="mb-0 font-weight-light">Subtext 2</p>
                  <small className="font-weight-light">Location</small>
                </div>
              </div>
              <i className="fas fa-pen "></i>
            </ListGroup.Item>
            <ListGroup.Item variant="light" className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-start">
                <div className="imgPlace mr-4"></div>
                <div className="d-flex flex-column">
                  <h5 className="mb-0 font-weight-normal">Experience 1</h5>
                  <p className="mb-0 ">Subtext</p>
                  <p className="mb-0 font-weight-light">Subtext 2</p>
                  <small className="font-weight-light">Location</small>
                </div>
              </div>
              <i className="fas fa-pen "></i>
            </ListGroup.Item>
            <ListGroup.Item
              variant="light"
              className="d-flex no-border align-items-center justify-content-between mb-0"
            >
              <div className="d-flex align-items-start">
                <div className="imgPlace mr-4"></div>
                <div className="d-flex flex-column">
                  <h5 className="mb-0 font-weight-normal">Experience 1</h5>
                  <p className="mb-0 ">Subtext</p>
                  <p className="mb-0 font-weight-light">Subtext 2</p>
                  <small className="font-weight-light">Location</small>
                </div>
              </div>
              <i className="fas fa-pen "></i>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Container>
    );
  }
}
export default Experince;
