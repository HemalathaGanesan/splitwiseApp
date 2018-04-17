import React from "react";
import Dashboard from "./dashboard";
import AddBill from "./AddBill";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      friendemail:''
    };
  }

  friendNameData(cell, row) {
    return (
      <div>
        <Link to={`/friendData/${row.friend_name}/${row.friend_email}/${this.props.user.email}`}>{row.friend_name}</Link>
      </div>
    );
  }
  componentWillMount() {
    let email = this.props.user.email;
    fetch(`http://localhost:8080/api/friends/${email}`)
      .then(response => {
        return response.json();
      })
      .then(friend => {
        console.log(friend)
        this.setState({
          friends: friend
        });
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
                <a className="navbar-brand" href="#" />
              </div>
            </div>
          </nav>
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card card-plain">
                    <div className="card-header" data-background-color="purple">
                      <h4 className="title">Friends details</h4>
                      <p className="category">April 2018</p>
                    </div>
                    <div className="card-content table-responsive">
                      <BootstrapTable data={this.state.friends} striped hover>
                        <TableHeaderColumn
                          isKey
                          dataField="friend_name"
                          dataFormat={this.friendNameData.bind(this)}
                        >
                          Friend Name
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="total">
                          Total ( <i className="fa fa-inr" /> )
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="paid">
                          You paid ( <i className="fa fa-inr" /> )
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="borrowed">
                          You lend ( <i className="fa fa-inr" /> )
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
export default Friend;
