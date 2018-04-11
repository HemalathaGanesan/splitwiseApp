import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      popUpBill: "hide_popup"
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }
  //  componentDidMount(){
  //   console.log("dashboard",this.props.user.email)
  // }
  /*addFriend(){
   console.log('inside addFriend....',this.props.user.email);
    let userEmail = this.props.user.email; 
    let friendEmail = document.getElementById('friend_email').value;
    console.log(friendEmail);
  } */
  show() {
    console.log("show");
    this.setState({ popUpBill: "show_popup" });
  }
  hide() {
    this.setState({ popUpBill: "hide_popup" });
  }

  render() {    
    // console.log("dashboard",this.props.user.friends[0].friend_email)
    return (
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
                <div className="friendrow">
                  <i className="material-icons">group</i>
                  <p>Friends</p>
                  <i className="material-icons" id="plus" onClick={this.show}>
                    add circle
                  </i>
                  <div className={this.state.popUpBill}>
                    <div id="popupContact">
                      <div className="text-field">
                        <i className="fa fa-close" onClick={this.hide} />
                        <h2>Add a Friend</h2>
                        <hr />
                        <p>
                          
                          Friend Email:<input
                            id="friend_email"
                            placeholder="Email address"
                            type="text"
                          />
                        </p>
                        <button onClick={this.hide}>Close</button>
                        <button type="button" className="savebtn"/*  onClick={this.addFriend.bind(this)} */>
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Dashboard;
