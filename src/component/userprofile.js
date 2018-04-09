import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Profile extends React.Component {
  render() {
    return (
      <div class="wrapper">
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
        <div class="main-panel">
          <nav class="navbar navbar-transparent navbar-absolute">
            <div class="container-fluid">
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle"
                  data-toggle="collapse"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar" />
                  <span class="icon-bar" />
                  <span class="icon-bar" />
                </button>
                <a class="navbar-brand" href="#">
                  {" "}
                  Profile{" "}
                </a>
              </div>
              <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      <i class="material-icons">notifications</i>
                      {/* <span class="notification"></span> */}
                      <p class="hidden-lg hidden-md">Notifications</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pablo"
                      class="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <i class="material-icons">person</i>
                      <p class="hidden-lg hidden-md">Profile</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div class="content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-8">
                  <div class="card">
                    <div class="card-header" data-background-color="purple">
                      <h4 class="title">Edit Profile</h4>
                      <p class="category">Complete your profile</p>
                    </div>
                    <div class="card-content">
                      <form>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group label-floating">
                              <label class="control-label">Username</label>
                              <input type="text" class="form-control" />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group label-floating">
                              <label class="control-label">Email address</label>
                              <input type="email" class="form-control" />
                            </div>
                          </div>
                        </div>

                        <div class="row">
                        <div class="col-md-4">
                            <div class="form-group label-floating">
                              <label class="control-label">Change your Password</label>
                              <input type="text" class="form-control" />
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group label-floating">
                              <label class="control-label">Phone Number</label>
                              <input type="text" class="form-control" />
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group label-floating">
                              <label class="control-label">City</label>
                              <input type="text" class="form-control" />
                            </div>
                          </div>
                        </div>
                        {/* <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <label>About Me</label>
                              <div class="form-group label-floating">
                                <label class="control-label">
                                  {" "}
                                  You are a very sweet person.
                                </label>
                                <textarea class="form-control" rows="5" />
                              </div>
                            </div>
                          </div>
                        </div> */}
                        <button
                          type="submit"
                          class="btn btn-primary pull-right"
                        >
                          Update Profile
                        </button>
                        <div class="clearfix" />
                      </form>
                    </div>
                  </div>
                </div>
                {/* <div class="col-md-4">
                  <div class="card card-profile">
                    <div class="card-avatar">
                      <a href="#">
                        <img class="img" src="./img/faces/baby.jpg" />
                      </a>
                    </div>
                    <div class="content">
                      <p class="card-content">
                        Don't be scared of the truth because we need to restart
                        the human foundation in truth.
                      </p>
                      <a href="#" class="btn btn-primary btn-round">
                        Change Photo
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
