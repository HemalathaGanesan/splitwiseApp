import React from "react";
import Dashboard from "./dashboard";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class Innerdashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dash_amount: []
    };
  }
  componentWillMount() {
    fetch(`http://localhost:8080/api/userBill/${this.props.user.email}`)
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.setState({ dash_amount: [data] });
      });
      
  }
  render() {
    return (
      <div className="wrapper">
        <Dashboard user={this.props.user} />
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
                  Dashboard
                </a>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <i className="material-icons">notifications</i>
                      {/* <span className="notification"></span> */}
                      <p className="hidden-lg hidden-md">Notifications</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pablo"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <i className="material-icons">person</i>
                      <p className="hidden-lg hidden-md">Profile</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="content">
            <div className="row">
              <div className="col-lg-6 ">
                <div className="card">
                  <div className="card-header" data-background-color="purple">
                    <h4 className="title">User Expenses</h4>
                  </div>
                  <div className="card-content table-responsive">
                    <BootstrapTable data={this.state.dash_amount} striped hover>
                      <TableHeaderColumn isKey dataField="total">
                        Total Balance (<i className="fa fa-inr" /> )
                      </TableHeaderColumn>
                      <TableHeaderColumn dataField="borrowed">
                        You borrowed (<i className="fa fa-inr" /> )
                      </TableHeaderColumn>
                      <TableHeaderColumn dataField="paid">
                        You will get (<i className="fa fa-inr" /> )
                      </TableHeaderColumn>
                    </BootstrapTable>
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
export default Innerdashboard;
