import React, { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";
import ExperienceItem from "./ExperienceItem";

class Experince extends Component {
  state = {
    editShow: false,
    addShow: false,
    experiences: [],
  }
  addModal = () => { }
  editModal = () => { }
  getExperienceFetcher = () => { }
  addExperiencePost = () => { }
  editExperiencePut = () => { }
  render() {
    return (
      <Container>
        <div id="experience-main-container" className="experience-contain mb-0">
          <div className="d-flex align-items-center justify-content-between">
            <h4 className="font-weight-normal">Experience</h4>
            <a onClick={this.addModal}><i className="fas fa-plus mr-3 "></i></a>
          </div>
          <ListGroup>
            {this.state.experiences.map((exp) => <ExperienceItem experience={exp} editModal={this.editModal} />)}
          </ListGroup>
        </div>
      </Container>
    );
  }
}
export default Experince;
