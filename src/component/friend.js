import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Friend extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      popUpBill: "hide_popup"
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }
  show() {
    this.setState({ popUpBill: "show_popup" });
  }
  hide() {
    this.setState({ popUpBill: "hide_popup" });
  }
  componentWillMount() {
    fetch("http://localhost:4000/api/friend")
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
                <td><a href="#">{expz.friend_name}</a></td>
                <td>
                  {expz.description}
                </td>
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
        <div
          className="sidebar"
          data-color="purple"
          data-image="../img/sidebar-1.jpg"
        >
          <div className="logo">
            <a href="#" className="simple-text">
              SplitXpenz
            </a>
          </div>
          <div className="sidebar-wrapper">
            <ul className="nav">
              <li className="active">
                <Link to="/dashboard">
                  <i className="material-icons">dashboard</i>
                  <p>Dashboard</p>
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <i className="material-icons">person</i>
                  <p>User Profile</p>
                </Link>
              </li>
              <li>
                <Link to="/expenses">
                  <i className="material-icons">content_paste</i>
                  <p>All Expenses</p>
                </Link>
              </li>
              <li>
                <Link to="/group">
                  <i className="material-icons">library_books</i>
                  <p>Groups</p>
                </Link>
              </li>
              <li>
                <Link to="/friend">
                  <i className="material-icons">group</i>
                  <p>Friends</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-panel">
          <nav className="navbar navbar-transparent navbar-absolute">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">
                  Friends
                </a>
              </div>
            </div>
          </nav>
          <div className="content">
            <div className="row1">
              <button onClick={this.show}>Add a bill</button>
              <div className={this.state.popUpBill}>
                <div id="popupContact">
                  <div className="text-field">
                    <i className="fa fa-close" onClick={this.hide} />
                    <h2>Add a bill</h2>
                    <hr />
                    <p>
                      With you and:<input
                        id="name"
                        placeholder="Enter name or Email address"
                        type="text"
                      />
                    </p>
                    <button onClick={this.hide}>Close</button>
                    <button type="button" className="savebtn">
                      Save
                    </button>
                  </div>
                </div>
              </div>

              <button type="button" className="savebtn">
                Settle
              </button>
            </div>
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
