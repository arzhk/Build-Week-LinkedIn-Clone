import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Interests extends Component {
  render() {
    return (
      <Container>
        <div className="interests-contain mb-3">
          <h3>Interests</h3>
          <Row className="striped">
            <Col className="d-flex align-items-center">
              <div className="imgPlace2 mr-2"></div>
              <div>
                <p className="mb-0 font-weight-bold">
                  Mobile Phone Developer Jobs
                </p>
                <p className="mb-0">5000 members</p>
              </div>
            </Col>
            <Col className="d-flex align-items-center">
              <div className="imgPlace2 mr-2"></div>
              <div>
                <p className="mb-0 font-weight-bold">
                  Ios App Developer WorldWide
                </p>
                <p className="mb-0">6000 members</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex align-items-center">
              <div className="imgPlace mr-2"></div>
              <div>
                <p className="mb-0 font-weight-bold">Microsoft</p>
                <p className="mb-0">3000 members</p>
              </div>
            </Col>
            <Col className="d-flex align-items-center">
              <div className="imgPlace mr-2"></div>
              <div>
                <p className="mb-0 font-weight-bold">
                  Islamic Banking and Finance
                </p>
                <p className="mb-0">4000 members</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex align-items-center">
              <div className="imgPlace2 mr-2"></div>
              <div>
                <p className="mb-0 font-weight-bold">Atos</p>
                <p className="mb-0">2000 members</p>
              </div>
            </Col>
            <Col className="d-flex align-items-center">
              <div className="imgPlace2 mr-2"></div>
              <div>
                <p className="mb-0 font-weight-bold">Aditef</p>
                <p className="mb-0">4000 members</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
