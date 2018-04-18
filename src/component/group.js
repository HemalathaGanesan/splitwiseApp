import React from "react";
import Dashboard from "./dashboard";
import AddBill from "./AddBill";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class Group extends React.Component {
  constructor() {
    super();
    this.state = {
      groups: [],
      // popUpBill: "hide_popup"
    };
    // this.show = this.show.bind(this);
    // this.hide = this.hide.bind(this);
  }
  // show() {
  //   this.setState({ popUpBill: "show_popup" });
  // }
  // hide() {
  //   this.setState({ popUpBill: "hide_popup" });
  // }

  GroupNameData(cell, row) {
    return (
      <div>
        <Link to="/groupData">{row.group_name}</Link>
      </div>
    );
  }
  componentWillMount() {
    fetch("http://localhost:8080/api/group")
      .then(response => {
        return response.json();
      })
      .then(group => {
        console.log(group);       
        this.setState({ groups: group });
        console.log(this.state.groups);
      });
  }
  render() {
    return (
      <div className="wrapper">
        <Dashboard  user={this.props.user} />
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
         
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card card-plain">
                    <div className="card-header" data-background-color="purple">
                      <h4 className="title">Groups expenses details</h4>
                      <p className="category">April 2018</p>
                    </div>
                    <div className="card-content table-responsive">
                    <BootstrapTable data={this.state.groups} striped hover>
                        <TableHeaderColumn
                          isKey
                          dataField="group_name"
                          dataFormat={this.GroupNameData.bind(this)}
                        >
                          Group Name
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="date">
                          Date 
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="description">
                          Description 
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="you_paid">
                          You paid ( <i className="fa fa-inr" /> )
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="you_lent">
                          You lend ( <i className="fa fa-inr" /> )
                        </TableHeaderColumn>
                      </BootstrapTable>
                      {/* <table className="table table-hover">
                        <thead>
                          <th>Date</th>
                          <th>Group Name</th>
                          <th>Description</th>
                          <th>You paid ( <i class="fa fa-inr" /> )</th>
                          <th>You lent ( <i class="fa fa-inr" /> )</th>
                        </thead>
                        {this.state.groups}
                      </table> */}
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
