import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeedLeft from "./FeedLeft";
import FeedMiddle from "./FeedMiddle";
import FeedRight from "./FeedRight";

function MainFeedContent({ jobTitle, name, userID }) {
  return (
    <Container className="pt-5">
      <Row className="mt-5">
        <Col xs={3}>
          <FeedLeft jobTitle={jobTitle} name={name} userID={userID} />
        </Col>
        <Col xs={5}>
          <FeedMiddle userID={userID} />
        </Col>
        <Col xs={4}>
          <FeedRight />
        </Col>
      </Row>
    </Container>
  );
}

export default MainFeedContent;
