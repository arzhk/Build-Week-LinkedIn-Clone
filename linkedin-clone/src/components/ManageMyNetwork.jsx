import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ManageMyNetwork.css";

export default class ManageMyNetwork extends Component {
  render() {
    return (
      <div className="mt-5 mr-4 d-flex d-flex flex-column border" id="work">
        <h5 className="m-2">Manage my network</h5>
        <div className="d-flex flex-column">
          <Link to="/connections" className="list p-3 d-flex justify-content-between">
            <div className="d-flex justify-content-center align-items-center">
              <i className="fas fa-user-friends mr-3"></i>
              <p className="p-0 m-0">Connections</p>
            </div>
            <p className="p-0 m-0"></p>
          </Link>
          <Link to="/contacts" className="list p-3 d-flex justify-content-between">
            <div className="d-flex justify-content-center align-items-center">
              <i className="far fa-address-book mr-3"></i>
              <p className="p-0 m-0">Contacts</p>
            </div>
            <p className="p-0 m-0"></p>
          </Link>
          <Link to="/following" className="list p-3 d-flex justify-content-between">
            <div className="d-flex justify-content-center align-items-center">
              <i className="far fa-user-circle mr-3"></i>
              <p className="p-0 m-0">People | Follow</p>
            </div>
            <p className="p-0 m-0"></p>
          </Link>
          <Link to="/groups" className="list p-3 d-flex justify-content-between">
            <div className="d-flex justify-content-center align-items-center">
              <i className="fas fa-users mr-3"></i>
              <p className="p-0 m-0">Groups</p>
            </div>
            <p className="p-0 m-0"></p>
          </Link>
          <Link to="/events" className="list p-3 d-flex justify-content-between">
            <div className="d-flex justify-content-center align-items-center">
              <i className="far fa-calendar-alt mr-3"></i>
              <p className="p-0 m-0">Events</p>
            </div>
            <p className="p-0 m-0"></p>
          </Link>
          <Link to="/pages" className="list p-3 d-flex justify-content-between">
            <div className="d-flex justify-content-center align-items-center">
              <i className="far fa-file-alt mr-3"></i>
              <p className="p-0 m-0">Pages</p>
            </div>
            <p className="p-0 m-0"></p>
          </Link>
          <Link to="/newsletters" className="list p-3 d-flex justify-content-between">
            <div className="d-flex justify-content-center align-items-center">
              <i className="far fa-newspaper mr-3"></i>
              <p className="p-0 m-0">Newsletters</p>
            </div>
            <p className="p-0 m-0"></p>
          </Link>
          <Link to="/hashtags" className="list p-3 d-flex justify-content-between">
            <div className="d-flex justify-content-center align-items-center">
              <i className="fas fa-hashtag mr-3"></i>
              <p className="p-0 m-0">Hashtags</p>
            </div>
            <p className="p-0 m-0"></p>
          </Link>
        </div>
      </div>
    );
  }
}
