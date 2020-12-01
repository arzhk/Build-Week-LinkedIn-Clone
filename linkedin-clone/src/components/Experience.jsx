import React, { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";
import ExperienceItem from "./ExperienceItem";

class Experience extends Component {
  state = {
    editShow: false,
    addShow: false,
    experiences: [],
  };
  addModal = () => {};
  editModal = () => {};

  getExperienceFetcher = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/5fc4c5e0ed266800170ea3dc/experiences",
        {
          headers: new Headers({
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzVlMGVkMjY2ODAwMTcwZWEzZGMiLCJpYXQiOjE2MDY3MzEyMzMsImV4cCI6MTYwNzk0MDgzM30.8dIOQ4c_SEmlt4usGkxACHqgxOYcvoY2KyXESe9vgyM",
          }),
        }
      );
      const result = await response.json();
      if (response.ok) {
        this.setState({ experiences: result });
        //console.log(result);
      } else {
      }
    } catch (e) {}
  };
  componentDidMount = () => {
    this.getExperienceFetcher();
  };
  editExperiencePut = (e) => {
    let experiences = { ...this.state.experiences };
    let currentId = e.currentTarget.id;

    experiences[currentId] = e.currentTarget.value;

    this.setState({ experiences: experiences });
  };

  addExperiencePost = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/5fc4c5e0ed266800170ea3dc/experiences",
        {
          method: "POST",
          body: JSON.stringify(this.state.experiences),
          headers: new Headers({
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzVlMGVkMjY2ODAwMTcwZWEzZGMiLCJpYXQiOjE2MDY3MzEyMzMsImV4cCI6MTYwNzk0MDgzM30.8dIOQ4c_SEmlt4usGkxACHqgxOYcvoY2KyXESe9vgyM",
          }),
        }
      );
      const result = await response.json();
      if (response.ok) {
        this.setState({ experiences: result });
      } else {
      }
    } catch (e) {}
  };

  render() {
    return (
      <Container>
        <div id="experience-main-container" className="experience-contain mb-0">
          <div className="d-flex align-items-center justify-content-between">
            <h4 className="font-weight-normal">Experience</h4>
            <a onClick={this.addModal}>
              <i className="fas fa-plus mr-3 "></i>
            </a>
          </div>
          <ListGroup>
            {this.state.experiences.length > 0 &&
              this.state.experiences.map((exp) => (
                <ExperienceItem experience={exp} editModal={this.editModal} />
              ))}
          </ListGroup>
        </div>
      </Container>
    );
  }
}
export default Experience;
