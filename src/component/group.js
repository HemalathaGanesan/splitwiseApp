import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Group extends React.Component{
    constructor() {
        super();
        this.state = {
          groups: [],
          popUpBill:'hide_popup'
        };
        this.show=this.show.bind(this)
        this.hide=this.hide.bind(this)
      }
      show(){
        this.setState({popUpBill:'show_popup'})
      }
      hide(){
        this.setState({popUpBill:'hide_popup'})
      }
      componentWillMount() {
        fetch("http://localhost:4000/api/group")
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
                    <td>${expz.you_paid}</td>
                    <td>${expz.you_lent}</td>
                  </tr>
                </tbody>
              );
            });
            this.setState({ groups: group_detail });
            console.log(this.state.groups);
          });
      }
    render(){
        return(
          
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
                    {/* <a href="/expenses"> */}
                    <Link to="/expenses">
                      <i className="material-icons">content_paste</i>
                      <p>All Expenses</p>
                    {/* </a> */}</Link>
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
                      Groups
                    </a>
                  </div>
                </div>
              </nav>
              <div class="content">
              <div className="row1">
             <button onClick={this.show}>Add a bill</button>
             <div className={this.state.popUpBill}>
             <div id="popupContact">
             <div className="text-field">
            <i className="fa fa-close" onClick={this.hide}></i>
             <h2>Add a bill</h2>
             <hr/><p>
             With you and:<input id="name" placeholder="Enter name or Email address" type="text"/></p>
             <button onClick={this.hide}>Close</button>
             <button type="button" className="savebtn">Save</button>
             </div>
             </div>
             </div>

              <button type="button" className="savebtn">Settle</button>
            </div>
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="card card-plain">
                        <div class="card-header" data-background-color="purple">
                          <h4 class="title">Groups expenses details</h4>
                          <p class="category">April 2018</p>
                        </div>
                        <div class="card-content table-responsive">
                          <table class="table table-hover">
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
       
        
        )
    }
}
export default Group