import React from "react";
import MainProfileBlock from "./MainProfileBlock";
import Main from "./Main";
import SideBar from "./SideBar";
import { Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function MainContent(props) {
  let { id } = useParams();
  const [currentUserID, setCurrentUserID] = React.useState(id);

  return (
    <>
      <Container>
        <Row>
          <Col xs={8}>
            <MainProfileBlock userID={currentUserID} userNameHandler={props.currentUserNameHandler} />
            <Main userID={currentUserID} />
          </Col>
          <Col xs={4}>
            <SideBar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MainContent;
