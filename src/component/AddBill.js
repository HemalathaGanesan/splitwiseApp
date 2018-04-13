import React from "react";
import Dashboard from "./dashboard";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

export default class AddBill extends React.Component {
  constructor() {
    super();
    this.state = {
      popUpBill: "hide_popup"
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }
  show() {
    console.log("show");
    this.setState({ popUpBill: "show_popup" });
  }
  hide() {
    this.setState({ popUpBill: "hide_popup" });
  }

  render() {
    console.log()
    return (
      <div>
          <FriendsTable show={this.show}/>
          {/* <CommonPopup show={this.show} /> */}
          <div className={this.state.popUpBill}>
            <div id="popupContact">
              <div className="text-field">
                <div className="form">
                  <i className="fa fa-close" onClick={this.hide} />
                  <h2>Add a bill</h2>
                  <hr />
                  <input
                    id="description"
                    placeholder="Enter description"
                    type="text"
                  />
                  <input id="amount" placeholder="Enter amount" type="number" />

                  <button onClick={this.hide}>Close</button>
                  <button type="button" className="savebtn">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          </ div>
       
      
    );
  }
}

class CommonPopup extends React.Component {
  render() {
    return (
      <div className="row1">
        <button onClick={this.props.show1}>Add a bill</button>
        <button type="button" className="savebtn">
          Settle
        </button>
      </div>
    );
  }
}

class FriendsTable extends React.Component {
  constructor() {
    super();
    this.state = {
      Friend_data: [],
      isLoading: true,
      friend_name: []
    };
  }
  componentWillMount() {
    return fetch("http://localhost:8080/api/friend")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        let frnd_data = data.map(val => {
          return <h4 key className="title">{val.friend_name}</h4>
        });
        this.setState({
          Friend_data: data,
          isLoading: false,
          friend_name: frnd_data
        });
      });
  }
  render() {
    if (this.state.isLoading) return <div />;
    else {
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
                 
                </a>
              </div>
            </div>
          </nav>
          
          <div className="content">
          <CommonPopup show1={this.props.show} />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card card-plain">
                  
                    <div className="card-header" data-background-color="purple">
                      {this.state.friend_name}                     
                    </div>
                    <div className="card-content table-responsive">
                      {/* <table className="table table-hover"> */}
                      <BootstrapTable data={this.state.Friend_data} striped hover>
              <TableHeaderColumn isKey dataField="date">
                Date
              </TableHeaderColumn>
              <TableHeaderColumn dataField="description">
                Description
              </TableHeaderColumn>
              <TableHeaderColumn  dataField="you_paid">
                You paid ( <i className="fa fa-inr" /> )
              </TableHeaderColumn>
              <TableHeaderColumn dataField="you_lend">
                You lend ( <i className="fa fa-inr" /> )
              </TableHeaderColumn>
            </BootstrapTable>
                      {/* </table> */}
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
}
