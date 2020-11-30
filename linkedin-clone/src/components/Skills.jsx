import React, { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";
export default class Skills extends Component {
  render() {
    return (
      <Container>
        <div className="interests-contain">
          <h3>Skills & Endorsments</h3>
          <ListGroup>
            <ListGroup.Item variant="light" src="hold.it/150x150">
              Skills 1
            </ListGroup.Item>
            <ListGroup.Item variant="light">Skills 2</ListGroup.Item>
          </ListGroup>
        </div>
      </Container>
    );
  }
}
