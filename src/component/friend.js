import React from "react";
import Dashboard from "./dashboard";
import Popup from "./popup";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Friend extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentWillMount() {
    fetch("http://localhost:8080/api/friend")
      .then(response => {
        return response.json();
      })
      .then(friend => {
        console.log(friend);
        let friend_detail = friend.map(expz => {
          return (
            <tbody>
              <tr>
                <td>{expz.date}</td>
                <td>
                  <a href="#">{expz.friend_name}</a>
                </td>
                <td>{expz.description}</td>
                <td>${expz.owes_you}</td>
              </tr>
            </tbody>
          );
        });
        this.setState({
          friends: friend_detail
        });
        console.log(this.state.friends);
      });
  }
  render() {
    return (
      <div className="wrapper">
        <Dashboard />
        <div className="main-panel">
          <nav className="navbar navbar-transparent navbar-absolute">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="#">
                  Friends
                </a>
              </div>
            </div>
          </nav>
          <div className="content">
            <Popup />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card card-plain">
                    <div className="card-header" data-background-color="purple">
                      <h4 className="title">Friends details</h4>
                      <p className="category">April 2018</p>
                    </div>
                    <div className="card-content table-responsive">
                      <table className="table table-hover">
                      <thead>
                        <th>Date</th>
                        <th>Friend Name</th>
                        <th>Description</th>
                        <th>owes you</th>
                        </thead>
                        {this.state.friends}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Friend;
