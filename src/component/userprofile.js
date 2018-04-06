import React from 'react';

class Profile extends React.Component{
    render(){
        return(
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
                  <p>Groups</p>
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
                        <a class="navbar-brand" href="#"> Profile </a>
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
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-header" data-background-color="purple">
                                    <h4 class="title">Edit Profile</h4>
                                    <p class="category">Complete your profile</p>
                                </div>  
                                <div class="card-content">
                                    <form>
                                        <div class="row">
                                            {/* <div class="col-md-5">
                                                <div class="form-group label-floating">
                                                    <label class="control-label">Company (disabled)</label>
                                                    <input type="text" class="form-control" disabled/>
                                                </div>
                                            </div> */}
                                            <div class="col-md-3">
                                                <div class="form-group label-floating">
                                                    <label class="control-label">Username</label>
                                                    <input type="text" class="form-control"/>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group label-floating">
                                                    <label class="control-label">Email address</label>
                                                    <input type="email" class="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group label-floating">
                                                    <label class="control-label">Fist Name</label>
                                                    <input type="text" class="form-control"/>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group label-floating">
                                                    <label class="control-label">Last Name</label>
                                                    <input type="text" class="form-control"/>
                                                </div>
                                            </div>
                                        </div> */}
                                        {/* <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group label-floating">
                                                    <label class="control-label">Adress</label>
                                                    <input type="text" class="form-control"/>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div class="row">
                                            {/* <div class="col-md-4">
                                                <div class="form-group label-floating">
                                                    <label class="control-label">City</label>
                                                    <input type="text" class="form-control"/>
                                                </div>
                                            </div> */}
                                            <div class="col-md-4">
                                                <div class="form-group label-floating">
                                                    <label class="control-label">City</label>
                                                    <input type="text" class="form-control"/>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group label-floating">
                                                    <label class="control-label">Phone Number</label>
                                                    <input type="text" class="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>About Me</label>
                                                    <div class="form-group label-floating">
                                                        <label class="control-label"> You are a very sweet person.</label>
                                                        <textarea class="form-control" rows="5"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary pull-right">Update Profile</button>
                                        <div class="clearfix"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-profile">
                                <div class="card-avatar">
                                    <a href="#">
                                        <img class="img" src="../assets/img/faces/baby.jpg" />
                                    </a>
                                </div>
                                <div class="content">
                                    {/* <h6 class="category text-gray">CEO / Co-Founder</h6> */}
                                    {/* <h4 class="card-title">Alec Thompson</h4> */}
                                    <p class="card-content">
                                        Don't be scared of the truth because we need to restart the human foundation in truth. 
                                    </p>
                                    <a href="#" class="btn btn-primary btn-round">Change Photo</a>
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
                                <a href="#">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Company
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </nav> 
                   
                </div>
            </footer> */}
        </div>
    </div>

        )
    }
}
export default Profile;