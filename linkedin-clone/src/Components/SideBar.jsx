import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

class SideBar extends React.Component {
  state = {
    connectionsArray: [],
  };

  getData = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/ ", {
      method: "GET",
      headers: new Headers({
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzEwNmVkMjY2ODAwMTcwZWEzZDAiLCJpYXQiOjE2MDY3MzA2MTYsImV4cCI6MTYwNzk0MDIxNn0.0SA5BuCxgs7H-mWOcIfvvED6ga9_s3jGPIvujZ4KSbA",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          connectionsArray: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  componentDidMount = () => {
    this.getData();
  };

  componentDidUpdate = () => {
    if (this.state.connectionsArray.length < 9) {
      this.getData();
    }
  };

  render() {
    return (
      <div id="sidebar-main-container">
        <div className="side-bar w-100 pt-5 pb-3 mt-5">
          <div className="side mb-3">
            <div className="pt-3 pb-1 px-4">
              <h4 className="font-weight-normal mb-2">People also viewed</h4>
              {this.state.connectionsArray.splice(0, 6).map((people, index) => (
                <div key={index} className="d-flex justify-content-between mb-2 py-3 brdr-bottom">
                  <div className="d-flex">
                    <Link to={"/" + `${people._id}`} className="d-flex myLink">
                      <img className="image mr-3" src={people.image} alt="user-img" />
                      <div className="d-flex flex-column">
                        <div className="name">
                          <p className="font-weight-bold mb-0" style={{ width: "95%" }}>
                            {people.name} {people.surname}
                          </p>
                        </div>
                        <p className="font-weight-light mb-0">1st</p>
                        <p className="mb-0">{people.title}</p>
                      </div>
                    </Link>
                  </div>
                  <button className="d-flex justify-content-center align-items-center">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link to="/" className="see-all-btn font-weight-bold d-block py-2 brdr-top">
                Show More
              </Link>
            </div>
          </div>

          <div className="side w-100 mb-3">
            <div className="pt-3 pb-1 px-4">
              <h4 className="font-weight-normal mb-4">People you may know</h4>
              {this.state.connectionsArray.splice(11, 5).map((people, index) => (
                <div key={index} className="d-flex justify-content-between mb-2 pb-3 brdr-bottom">
                  <div className="d-flex">
                    <Link to={"/" + `${people._id}`} className="d-flex myLink">
                      <img className="image mr-3" src={people.image} alt="user-img" />
                      <div className="d-flex flex-column">
                        <div className="name">
                          <p className="font-weight-bold mb-0">
                            {people.name} {people.surname}
                          </p>
                        </div>
                        <p className="font-weight-light mb-0">1st</p>
                        <p className="mb-0">{people.title}</p>
                      </div>
                    </Link>
                  </div>
                  <button className="d-flex justify-content-center align-items-center">
                    <i className="fas fa-user-plus"></i>
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link to="/" className="see-all-btn font-weight-bold d-block py-2 brdr-top">
                Show More
              </Link>
            </div>
          </div>

          <div id="learning-sidebar-main" className="side w-100 ">
            <div className="pt-3 pb-1 px-4">
              <div className="d-flex align-items center mb-2">
                <i className="fab fa-linkedin mr-1"></i>
                <span className="learning-title font-weight-bold">LEARNING</span>
              </div>
              <p>Add new skills with these courses</p>
              <div className="d-flex justify-content-start align-items-start mb-3">
                <div className="mr-2">
                  <div className="video-placeholder"></div>
                </div>
                <div>
                  <p className="font-weight-bold mb-1">Video title</p>
                  <small>21,000 viewers</small>
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-start mb-3">
                <div className="mr-2">
                  <div className="video-placeholder"></div>
                </div>
                <div>
                  <p className="font-weight-bold mb-1">Video title 2</p>
                  <small>54,000 viewers</small>
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-start mb-3">
                <div className="mr-2">
                  <div className="video-placeholder"></div>
                </div>
                <div>
                  <p className="font-weight-bold mb-1">Video title 3</p>
                  <small>36,000 viewers</small>
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-start mb-3">
                <div className="mr-2">
                  <div className="video-placeholder"></div>
                </div>
                <div>
                  <p className="font-weight-bold mb-1">Video title 4</p>
                  <small>61,000 viewers</small>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link to="/" className="see-all-btn font-weight-bold d-block py-2 brdr-top">
                Show more on LinkedIn Learning
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SideBar;
