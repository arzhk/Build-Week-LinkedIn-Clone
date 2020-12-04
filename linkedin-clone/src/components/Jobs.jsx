import React, { Component } from "react";
import {
  Button,
  Col,
  Row,
  InputGroup,
  FormControl,
  Container,
  Card,
  Dropdown,
} from "react-bootstrap";

export default class Jobs extends Component {
  render() {
    return (
      <Container className="mt-5">
        <div className="p-3 mb-2 bg-white text-secondary d-flex ">
          <p className="font-weight-bold mr-3">
            <i class="fas fa-bookmark pr-2"></i>My Jobs
          </p>
          <p className="font-weight-bold mr-3">
            <i class="fas fa-bell pr-2"></i>My Alerts
          </p>
          <p className="font-weight-bold mr-3">
            <i class="fas fa-money-bill-alt pr-2"></i>Salary
          </p>
          <p className="font-weight-bold mr-3">
            <i class="fas fa-file pr-2"></i>Interview Prep
          </p>

          <p className="mr-5 pr-5">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                more
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </p>
          <span className=" ml-5  ">
            <a href="/talentSolutions">
              <button
                className=" ml-5  pl-5"
                style={{ borderRadius: "16px" }}
                type="button"
                class="btn btn-outline-info "
              >
                <i class="fas fa-edit"></i>
                Post for a free job
              </button>
            </a>
          </span>
        </div>
        <div
          className=" d-flex flex-column mb-3"
          style={{
            backgroundColor: "rgb(179, 195, 201)",
            height: "150px",
            borderRadius: "24px",
          }}
        >
          <div className="align-self-center font-weight-light">
            <h4 className=" font-weight-light">Search for your next Job</h4>
          </div>
          <div className=" d-flex justify-content-between ">
            <div> </div>
            <div style={{ width: "400px" }}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Search by title skill or company"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>

            <div className="mr-0" style={{ width: "400px" }}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="City State or zip code"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
            </div>

            <div style={{ width: "200px" }}>
              <Button style={{ borderRadius: " 1rem", width: "150px" }}>
                Search
              </Button>
            </div>
          </div>
        </div>

        <div>
          <p className=" font-weight-bold mb-0 justify-content-center">
            Recommended for you
          </p>
          <p className=" font-weight-light">
            Based on your profile and search history
          </p>
        </div>
        <div
          className=" d-flex flex-column mb-3 align-items-center"
          style={{
            backgroundColor: "white",

            borderRadius: "16px",
          }}
        >
          <Row className="mb-3">
            <Col>
              <Card style={{ width: "16rem", height: "18rem" }}>
                <Card.Body>
                  <img className="img-card-jobs" />
                  <Card.Title>AI Consultant</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    London
                  </Card.Subtitle>
                  <Card.Text></Card.Text>
                  <Card.Link href="#">Actively Recruiting</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "16rem", height: "18rem" }}>
                <Card.Body>
                  <img className="img-card-jobs" />
                  <Card.Title>Machine Learning Analyst</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Spain
                  </Card.Subtitle>
                  <Card.Text></Card.Text>
                  <Card.Link href="#">Actively Recruiting</Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "16rem", height: "18rem" }}>
                <Card.Body>
                  <img className="img-card-jobs" />
                  <Card.Title>Data Analyst</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Prague
                  </Card.Subtitle>
                  <Card.Text></Card.Text>
                  <Card.Link href="#">Actively Recruiting</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "16rem", height: "18rem" }}>
                <Card.Body>
                  <img className="img-card-jobs" />
                  <Card.Title>React Developer</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Berlin
                  </Card.Subtitle>
                  <Card.Text></Card.Text>
                  <Card.Link href="#">Actively Recruiting</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "16rem", height: "18rem" }}>
                <Card.Body>
                  <img className="img-card-jobs" />
                  <Card.Title>Mobile Developer</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">NYC</Card.Subtitle>
                  <Card.Text></Card.Text>
                  <Card.Link href="#">Actively Recruiting</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "16rem", height: "18rem" }}>
                <Card.Body>
                  <img className="img-card-jobs" />
                  <Card.Title>Financial Analyst</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Paris
                  </Card.Subtitle>
                  <Card.Text></Card.Text>
                  <Card.Link href="#">Actively Recruiting</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "16rem", height: "18rem" }}>
                <Card.Body>
                  <img className="img-card-jobs" />
                  <Card.Title>Android Developer</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Dubai
                  </Card.Subtitle>
                  <Card.Text></Card.Text>
                  <Card.Link href="#">Actively Recruiting</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "16rem", height: "18rem" }}>
                <Card.Body>
                  <img className="img-card-jobs" />
                  <Card.Title>FullStack Developer</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    London
                  </Card.Subtitle>
                  <Card.Text></Card.Text>
                  <Card.Link href="#">Actively Recruiting</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
