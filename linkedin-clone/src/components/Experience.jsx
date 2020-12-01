import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import ExperienceItem from "./ExperienceItem";

class Experience extends Component {
  state = {
    editShow: false,
    addShow: false,
    experiences: [],
    currentexperience: {},
  };

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
      if (response.ok) {
        const result = await response.json();
        this.setState({ experiences: result });
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount = () => {
    this.getExperienceFetcher();
  };

  editExperiencePut = async (experiences) => {
    this.setState({ editShow: false });
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/5fc4c5e0ed266800170ea3dc/experiences/" + experiences._id,
        {
          method: "PUT",
          body: JSON.stringify(experiences),
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzVlMGVkMjY2ODAwMTcwZWEzZGMiLCJpYXQiOjE2MDY3MzEyMzMsImV4cCI6MTYwNzk0MDgzM30.8dIOQ4c_SEmlt4usGkxACHqgxOYcvoY2KyXESe9vgyM",
          }),
        }
      );
      if (response.ok) {
        console.log("ok");
        this.getExperienceFetcher();
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  };

  addExperiencePost = async (exp) => {
    this.setState({ addShow: false });
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/5fc4c5e0ed266800170ea3dc/experiences",
        {
          method: "POST",
          body: JSON.stringify(exp),
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzVlMGVkMjY2ODAwMTcwZWEzZGMiLCJpYXQiOjE2MDY3MzEyMzMsImV4cCI6MTYwNzk0MDgzM30.8dIOQ4c_SEmlt4usGkxACHqgxOYcvoY2KyXESe9vgyM",
          }),
        }
      );
      console.log(response);
      if (response.ok) {
        console.log("ok", response);
        this.getExperienceFetcher();
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  };
  deleteExperience = async (id) => {
    this.setState({ editShow: false });
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/5fc4c5e0ed266800170ea3dc/experiences/" + id,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzVlMGVkMjY2ODAwMTcwZWEzZGMiLCJpYXQiOjE2MDY3MzEyMzMsImV4cCI6MTYwNzk0MDgzM30.8dIOQ4c_SEmlt4usGkxACHqgxOYcvoY2KyXESe9vgyM",
          },
        }
      );
      if (response.ok) {
        console.log("ok");
        this.getExperienceFetcher();
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  };

  addModalToggleHandler = () => {
    this.state.addShow ? this.setState({ addShow: false }) : this.setState({ addShow: true });
  };
  editModalToggleHandler = (e) => {
    this.state.editShow ? this.setState({ editShow: false }) : this.setState({ editShow: true, currentexperience: e });
  };

  render() {
    return (
      <div>
        <div id="experience-main-container" className="experience-contain mb-0">
          <div className="d-flex align-items-center justify-content-between mr-2">
            <h3 className="font-weight-normal">Experience</h3>
            <div onClick={() => this.addModalToggleHandler()} style={{ cursor: "pointer" }}>
              <i className="fas fa-plus"></i>
            </div>
          </div>
          <ListGroup>
            {this.state.experiences.length > 0 &&
              this.state.experiences.map((exp, key) => (
                <ExperienceItem key={key} experience={exp} editModal={this.editModalToggleHandler} />
              ))}
          </ListGroup>
        </div>

        {this.state.addShow && (
          <AddModal
            show={true}
            addExperiencePost={this.addExperiencePost}
            addModalToggleHandler={() => this.addModalToggleHandler()}
          />
        )}
        {this.state.editShow && (
          <EditModal
            show={true}
            deleteExperience={this.deleteExperience}
            editModalToggleHandler={() => this.editModalToggleHandler()}
            experience={this.state.currentexperience}
            editExperiencePut={this.editExperiencePut}
          />
        )}
      </div>
    );
  }
}

export default Experience;
