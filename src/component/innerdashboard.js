import React from "react";
class Innerdashboard extends React.Component {
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
                <a href="http://localhost:3000/dashboard">
                  <i className="material-icons">dashboard</i>
                  <p>Dashboard</p>
                </a>
              </li>
              <li>
                <a href="http://localhost:3000/profile">
                  <i className="material-icons">person</i>
                  <p>User Profile</p>
                </a>
              </li>
              <li>
                <a href="./table.html">
                  <i className="material-icons">content_paste</i>
                  <p>All Expenses</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="material-icons">library_books</i>
                  <p>Groups List</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="material-icons">group</i>
                  <p>Friend List</p>
                </a>
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
                  Dashboard{" "}
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
                    {/* <ul class="dropdown-menu">
                      <li>
                        <a href="#">Mike John responded to your email</a>
                      </li>
                      <li>
                        <a href="#">You have 5 new tasks</a>
                      </li>
                      <li>
                        <a href="#">You're now friend with Andrew</a>
                      </li>
                      <li>
                        <a href="#">Another Notification</a>
                      </li>
                      <li>
                        <a href="#">Another One</a>
                      </li>
                    </ul> */}
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
                {/* <form class="navbar-form navbar-right" role="search">
                                <div class="form-group  is-empty">
                                    <input type="text" class="form-control" placeholder="Search"/>
                                    <span class="material-input"></span>
                                </div>
                                <button type="submit" class="btn btn-white btn-round btn-just-icon">
                                    <i class="material-icons">search</i>
                                    <div class="ripple-container"></div>
                                </button>
                            </form> */}
              </div>
            </div>
          </nav>
          <div class="content">
          <div class="row1">
          <a href="#" class="btn btn-primary btn-round">Add bill</a>
          <a href="#" class="btn btn-primary btn-round">Settle</a>

          </div>
            <div class="row">
              <div class="col-lg-6 col-md-12">
                <div class="card">
                  <div class="card-header" data-background-color="purple">
                    <h4 class="title">User Expenses</h4>
                    {/* <p class="category">New employees on 15th September, 2016</p> */}
                  </div>
                  <div class="card-content table-responsive">
                    <table class="table table-hover">
                      <thead class="text-warning">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Totalbalance</th>
                        <th>you owe</th>
                        <th>you are owed</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Dakota Rice</td>
                          <td>$36,738</td>
                          <td>$36,738</td>
                          <td>$0.00</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Minerva Hooper</td>
                          <td>$23,789</td>
                          <td>$36,738</td>
                          <td>$0.00</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Sage Rodriguez</td>
                          <td>$56,142</td>
                          <td>$36,738</td>
                          <td>$0.00</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Philip Chaney</td>
                          <td>$38,735</td>
                          <td>$36,738</td>
                          <td>$0.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <footer class="footer">
          <div class="container-fluid">
            <nav class="pull-left">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </nav>
          </div>
        </footer> */}
      </div>
      // </div>
    );
  }
}
export default Innerdashboard;
