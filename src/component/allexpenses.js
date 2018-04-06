import React from 'react'


class Expenses extends React.Component{
    render(){
        return(
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
                        <button type="button" class="navbar-toggle" data-toggle="collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#"> All Expenses </a>
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
                                <a href="#pablo" class="dropdown-toggle" data-toggle="dropdown">
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
                <div class="container-fluid">
                    <div class="row">                        
                        <div class="col-md-12">
                            <div class="card card-plain">
                                <div class="card-header" data-background-color="purple">
                                    <h4 class="title">All expenses details</h4>
                                    <p class="category">April 2018</p>
                                </div>
                                <div class="card-content table-responsive">
                                    <table class="table table-hover">
                                        <thead>
                                            <th>Date</th>
                                            <th>Description</th>
                                            <th>PersonName</th>
                                            <th>You paid</th>
                                            <th>You lent</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Apr 3</td>
                                                <td><a href="#">Coffee</a></td>
                                                <td>hema</td>
                                                <td>$66</td>
                                                <td>$6</td>
                                            </tr>
                                            <tr>
                                            <td>Apr 3</td>
                                                <td><a href="#">Trip</a></td>
                                                <td>mnju</td>
                                                <td>$66</td>
                                                <td>$6</td>
                                            </tr>
                                            <tr>
                                                <td>Apr 3</td>
                                                <td><a href="#">Dinner</a></td>
                                                <td>ganesan</td>
                                                <td>$366</td>
                                                <td>$156</td>
                                            </tr>
                                            <tr>
                                            <td>Apr 5</td>
                                                <td><a href="#">Movie</a></td>
                                                <td>Nevi</td>
                                                <td>$366</td>
                                                <td>$100</td>
                                            </tr>                                           
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
        
        )
    }
}
export default Expenses;