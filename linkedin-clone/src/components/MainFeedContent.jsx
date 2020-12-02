import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeedLeft from "./FeedLeft";
import FeedRight from "./FeedRight";

function MainFeedContent() {
  return (
    <Container className="pt-5">
      <Row className="mt-5">
        <Col xs={3}>
          <FeedLeft />
        </Col>
        <Col xs={5}></Col>
        <Col xs={4}>
          <FeedRight />
        </Col>
      </Row>
    </Container>
  );
}

export default MainFeedContent;
