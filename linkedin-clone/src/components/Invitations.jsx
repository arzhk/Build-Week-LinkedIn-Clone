import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Invitations.css";
import InvitationsLoader from "./loaders/InvitationsLoader";

export default class Invitations extends Component {
  state = {
    myInfo: [],
    myShow: true,
  };

  getInfo = async () => {
    try {
      const res = await fetch("https://striveschool-api.herokuapp.com/api/profile/ ", {
        method: "GET",
        headers: new Headers({
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
        }),
      });
      if (res.ok) {
        const info = await res.json();
        this.setState({
          myInfo: info.splice(0, 18),
        });
      } else {
        console.log("error occured");
      }
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.getInfo();
    }, 1000);
  };
  showMoreHandler = () => {
    if (this.state.myShow) {
      this.setState({
        myShow: false,
      });
    } else {
      this.setState({
        myShow: true,
      });
    }
  };

  render() {
    const { myInfo } = this.state;
    return (
      <div className="invitations p-0 border mt-5">
        {/* {Array.from({ length: 1 }, (_, i) => i + 1).map((e, index) => <InvitationsLoader key={index}/>)} */}
        <div className="top d-flex justify-content-between pl-3 py-2 brdr-bottom">
          <h5>Invitations</h5>
          <button className="ignore d-flex justify-content-center align-items-center" style={{ width: "6rem" }}>
            See all 5
          </button>
        </div>

        <div className="info">
          {this.state.myInfo.length > 0
            ? myInfo.splice(0, this.state.myShow ? 3 : 6).map((personIMayKnow, index) => (
                <div key={index} className="d-flex justify-content-between brdr-bottom py-2 my-2">
                  <div className="d-flex myLink">
                    <img className="image mx-3" src={personIMayKnow.image} alt="user-img" id="profile-img" />
                    <div className="d-flex flex-column">
                      <div className="name">
                        <Link to={`/profile/${personIMayKnow._id}`}>
                          <p className="mb-0">
                            {personIMayKnow.name} {personIMayKnow.surname}
                          </p>
                        </Link>
                      </div>
                      <p className="mb-0 text-secondary">{personIMayKnow.title}</p>
                      <p className="font-weight-light mb-0 text-secondary">
                        <i className="fas fa-infinity mr-1"></i>
                        Alessia Luminari and 6 others
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button className="ignore mr-1 d-flex justify-content-center align-items-center">Ignore</button>
                    <button id="accept" className="d-flex justify-content-center align-items-center mr-3">
                      Accept
                    </button>
                  </div>
                </div>
              ))
            : Array.from({ length: 3 }, (_, i) => i + 1).map((e, index) => <InvitationsLoader key={index} />)}
        </div>
        <div className="text-center brdr-top">
          <div
            to="/"
            className="see-all-btn font-weight-bold d-block py-2"
            style={{ cursor: "pointer" }}
            onClick={() => this.showMoreHandler()}
          >
            {this.state.myShow ? "Show more" : "Show less"}
          </div>
        </div>
      </div>
    );
  }
}
