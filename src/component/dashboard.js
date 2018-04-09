import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Dashboard extends React.Component {
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
                    <p>Groups </p>
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
        </div>
    );
  }
}
export default Dashboard;
