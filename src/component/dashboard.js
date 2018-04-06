import React from "react";
// import Innerdashboard from "./innerdashboard";

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
                <a href="/dashboard">
                  <i className="material-icons">dashboard</i>
                  <p>Dashboard</p>
                </a>
              </li>
              <li>
                <a href="/profile">
                  <i className="material-icons">person</i>
                  <p>User Profile</p>
                </a>
              </li>
              <li>
                <a href="/expenses">
                  <i className="material-icons">content_paste</i>
                  <p>All Expenses</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="material-icons">library_books</i>
                  <p>Groups </p>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="material-icons">group</i>
                  <p>Friends</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <Innerdashboard /> */}
      </div>
    );
  }
}
export default Dashboard;
