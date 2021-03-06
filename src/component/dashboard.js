import React from "react";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popUpBill: "hide_popup",
      successMessage: "",
      errorMessage: ""
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }
  addFriend() {
    let userEmail = this.props.user.email;
    let friendEmail = document.getElementById("friend_email").value;
    let addFriend = {
      friend_email: friendEmail,
      user_email: userEmail
    };
    console.log(JSON.stringify(addFriend));
    fetch("http://localhost:8080/api/addFriend", {
      method: "PUT",
      body: JSON.stringify(addFriend), // data can be `string` or {object}!
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === "successful") {
          this.setState({
            successMessage: "Friend added successfully....",
            errorMessage: "",
          });
        } else {
          this.setState({
            errorMessage: "Your Friend is not registered !!",
            successMessage: ""
          });
        }
        this.props.addFriendSuccess(this.state.successMessage);
        //this.props.addFriendFailure(this.state.errorMessage);
      });
    this.hide();
  }
  show() {
    this.setState({ popUpBill: "show_popup" });
  }
  hide() {
    this.setState({ popUpBill: "hide_popup" });
  }
  render() {
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
            <i className="material-icons" id="plus" onClick={this.show}>
            add circle
          </i>
            <li>
              <Link to="/friend">
                <i className="material-icons">group</i>
                <p>Friends</p>
              </Link>
            </li>
          </ul>
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
                    onChange={this.updateInput}
                  />
                </p>
                <button onClick={this.hide}>Close</button>
                <button
                  type="button"
                  className="savebtn"
                  onClick={this.addFriend.bind(this)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
