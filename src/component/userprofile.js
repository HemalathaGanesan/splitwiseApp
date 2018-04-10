import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Profile extends React.Component {
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
                  {" "}
                  Profile{" "}
                </a>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
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
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-header" data-background-color="purple">
                      <h4 className="title">Edit Profile</h4>
                      <p className="category">Complete your profile</p>
                    </div>
                    <div className="card-content">
                      <form>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group label-floating">
                              <label className="control-label">UserName</label>
                              <input type="text" value={this.props.user.username} className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group label-floating">
                              <label className="control-label">Email address</label>
                              <input type="email" value={this.props.user.email} className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-group label-floating">
                              <label className="control-label">Change your Password</label>
                              <input type="text" value={this.props.user.password} className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group label-floating">
                              <label className="control-label">Phone Number</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>

                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary pull-right"
                        >
                          Update Profile
                        </button>
                        <div className="clearfix" />
                      </form>
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
export default Profile;
