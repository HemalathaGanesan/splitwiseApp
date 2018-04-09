import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Expenses extends React.Component {
  constructor() {
    super();
    this.state = {
      expenses: []
    };
  }
  componentWillMount() {
    fetch("http://localhost:4000/api/expenses")
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
                <td>${expz.you_paid}</td>
                <td>${expz.you_lent}</td>
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
                  <i className="material-icons">group</i>
                  <p>Friends</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="main-panel">
          <nav class="navbar navbar-transparent navbar-absolute">
            <div class="container-fluid">
              <div class="navbar-header">
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
