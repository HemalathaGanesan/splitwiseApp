import React from "react";
import Dashboard from "./dashboard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Innerdashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      dash_amount: []
    };
  }
  componentWillMount() {
    console.log("component will mount");
    fetch("http://localhost:8080/api/dash")
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        console.log(data);
        let val = data.map(amount => {
          return (
            <table className="table table-hover">
              <thead className="text-warning">
                <th>Totalbalance</th>
                <th>you owe</th>
                <th>you are owed</th>
              </thead>
              <tbody>
                <tr>
                  <td>${amount.totalbalance}</td>
                  <td>${amount.you_owe}</td>
                  <td>${amount.you_are_owed}</td>
                </tr>
              </tbody>
            </table>
          );
        });

        this.setState({ dash_amount: val });
        console.log(this.state.dash_amount);
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
                  Dashboard
                </a>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <i className="material-icons">notifications</i>
                      {/* <span className="notification"></span> */}
                      <p className="hidden-lg hidden-md">Notifications</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pablo"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <i className="material-icons">person</i>
                      <p className="hidden-lg hidden-md">Profile</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="content">
            {/* <div className="row1">
              <a href="#" className="btn btn-primary btn-round">
                Add bill
              </a>
              <a href="#" className="btn btn-primary btn-round">
                Settle
              </a>
            </div> */}
            <div className="row">
              <div className="col-lg-6 ">
                <div className="card">
                  <div className="card-header" data-background-color="purple">
                    <h4 className="title">User Expenses</h4>
                    {/* <p className="category">New employees on 15th September, 2016</p> */}
                  </div>
                  <div className="card-content table-responsive">
                    {this.state.dash_amount}
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
export default Innerdashboard;
