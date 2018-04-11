import React from "react";
import Dashboard from "./dashboard";
import AddBillPopup from "./AddBillpopup";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Group extends React.Component {
  constructor() {
    super();
    this.state = {
      groups: [],
      popUpBill: "hide_popup"
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }
  show() {
    this.setState({ popUpBill: "show_popup" });
  }
  hide() {
    this.setState({ popUpBill: "hide_popup" });
  }
  componentWillMount() {
    fetch("http://localhost:8081/api/group")
      .then(response => {
        return response.json();
      })
      .then(group => {
        console.log(group);
        let group_detail = group.map(expz => {
          return (
            <tbody>
              <tr>
                <td>{expz.date}</td>
                <td>{expz.group_name}</td>
                <td>
                  <a href="#">{expz.description}</a>
                </td>
                <td>
                  <i class="fa fa-inr" />
                  {expz.you_paid}
                </td>
                <td>
                  <i class="fa fa-inr" />
                  {expz.you_lent}
                </td>
              </tr>
            </tbody>
          );
        });
        this.setState({ groups: group_detail });
        console.log(this.state.groups);
      });
  }
  render() {
    return (
      <div className="wrapper">
        <Dashboard />
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
                  Groups
                </a>
              </div>
            </div>
          </nav>
          <div className="content">
            <AddBillPopup />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card card-plain">
                    <div className="card-header" data-background-color="purple">
                      <h4 className="title">Groups expenses details</h4>
                      <p className="category">April 2018</p>
                    </div>
                    <div className="card-content table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <th>Date</th>
                          <th>Group Name</th>
                          <th>Description</th>
                          <th>You paid</th>
                          <th>You lent</th>
                        </thead>
                        {this.state.groups}
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
export default Group;
