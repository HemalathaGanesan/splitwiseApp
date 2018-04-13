import React from "react";
import Dashboard from "./dashboard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class Expenses extends React.Component {
  constructor() {
    super();
    this.state = {
      expenses: []
    };
  }
  componentWillMount() {
    fetch("http://localhost:8080/api/expenses")
      .then(response => {
        return response.json();
      })
      .then(expense => {
        console.log(expense);

        this.setState({ expenses: expense });
        console.log(this.state.expenses);
      });
  }

  render() {
    return (
      <div className="wrapper">
        <Dashboard />
        <div class="main-panel">
          <nav class="navbar navbar-transparent navbar-absolute">
            <div class="container-fluid">
              <div class="navbar-header">
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
                <a class="navbar-brand" href="#">
                  All Expenses
                </a>
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
                      <BootstrapTable data={this.state.expenses} striped hover>
                        <TableHeaderColumn isKey dataField="date">
                          Date
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="description">
                          Description
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="person_name">
                          Person Name
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="you_paid">
                          You paid ( <i class="fa fa-inr" /> )
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="you_lent">
                          You lend ( <i class="fa fa-inr" /> )
                        </TableHeaderColumn>
                      </BootstrapTable>
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
export default Expenses;
