import React from "react";
import Dashboard from "./dashboard";
import AddBillPopup from "./AddBillpopup";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Friend extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  } 
  componentWillMount() {
      let email=this.props.user.email
      console.log(email)
    fetch(`http://localhost:8080/api/friends/${email}`)
      .then((response) => {
        return response.json();
      })
      .then(friend => {
        console.log(friend);
        let friend_detail = friend.map(data => {
          console.log(data)
          return (
            <tbody>
              <tr>
                <td>
                  <Link to="/popup">{data.friend_name}</Link>
                </td>
                <td>₹{data.total_balance}</td>
                <td>₹{data.paid_balance}</td>
                <td>₹{data.lend_balance}</td>
              </tr>
            </tbody>
          );
        });
        this.setState({
          friends: friend_detail
        });
        console.log(this.state.friends);
      });
  }
  render() {
    return (
      <div className="wrapper">
        <Dashboard user={this.props.user}/>
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
                  Friends
                </a>
              </div>
            </div>
          </nav>
          <div className="content">
            {/* <AddBillPopup /> */}
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card card-plain">
                    <div className="card-header" data-background-color="purple">
                      <h4 className="title">Friends details</h4>
                      <p className="category">April 2018</p>
                    </div>
                    <div className="card-content table-responsive">
                      <table className="table table-hover">
                      <thead>
                        <th>Friends Name</th>
                        <th>Total Balance</th>
                        <th>You paid</th>
                        <th>You lend</th>
                        </thead>
                        {this.state.friends}
                      </table>
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
export default Friend;
