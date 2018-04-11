import React from "react";
import Dashboard from "./dashboard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Expenses extends React.Component {
  constructor() {
    super();
    this.state = {
      expenses: []
    };
  }
  componentWillMount() {
    fetch("http://localhost:8081/api/expenses")
      .then(response => {
        return response.json();
      })
      .then(expense => {
        console.log(expense);
        let expense_detail = expense.map(expz => {
          return (
            <tbody>
              <tr>
                <td>{expz.date}</td>
                <td>
                  <a href="#">{expz.description}</a>
                </td>
                <td>{expz.person_name}</td>
                <td><i class="fa fa-inr"></i>{expz.you_paid}</td>
                <td><i class="fa fa-inr"></i>{expz.you_lent}</td>
              </tr>
            </tbody>
          );
        });
        this.setState({ expenses: expense_detail });
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
                      <table class="table table-hover">
                        <thead>
                          <th>Date</th>
                          <th>Description</th>
                          <th>PersonName</th>
                          <th>You paid</th>
                          <th>You lent</th>
                        </thead>
                        {this.state.expenses}
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
export default Expenses;
