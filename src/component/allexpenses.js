import React from "react";
import Dashboard from "./dashboard";
import Homepage from "./Homepage";
import Header from "./Header";
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
    fetch(`http://localhost:8080/api/allExpenses/${this.props.user.email}`,{
      method: 'GET',  
      headers: new Headers({
          'Authorization': 'Bearer' + ' ' + localStorage.getItem('jwt-token'),
          'Content-type': 'application/json'
      }),
    }).then(response => {
        return response.json();
      })
      .then(expense => {
        this.setState({ expenses: expense });
      });
  }

  render() {
    if (localStorage.getItem('jwt-token') !== null){
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
                          <TableHeaderColumn dataField="to_whom">
                            to whoom
                          </TableHeaderColumn>
                          <TableHeaderColumn dataField="from_whom">
                            from whoom
                          </TableHeaderColumn>
                          <TableHeaderColumn dataField="description">
                            Description ( <i class="fa fa-inr" /> )
                          </TableHeaderColumn>
                          <TableHeaderColumn dataField="total_amount">
                            Total amount ( <i class="fa fa-inr" /> )
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
    return (
    <div>
      <Header />
      <Homepage />
    </div>
  );
  }
}
export default Expenses;
