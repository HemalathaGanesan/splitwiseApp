import React from "react";
import Dashboard from "./dashboard";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { colors } from "material-ui/styles";
import { black } from "material-ui/styles/colors";
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';

const styles = {
    radioButton:{
      marginBottom: 16,
      
    },
    menuItem:{
      color:"rgba(125, 17, 125, 0.87)",
      fontSize:16,
      fontStyle:"italic",
      fontWeight:400
     
    },
    underlineStyle:{
      border:"none"
    },
    checkbox: {
      marginBottom: 16,
    },
  
};

export default class AddBill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paid_by : '',
      popUpBill: "hide_popup",
      friendEmail: "",
      userEmail: "",
      friendName:'',
      showClass:false,
      showRadioButton:'split-equalbill'
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.changeClass = this.changeClass.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }
  
  changeClass(){
    if(this.state.showClass){
      this.setState({
        showRadioButton:'split-equalbill',
        showClass:false
      })
      
    }
    else{
      this.setState({
        showRadioButton:'hide_popup',
        showClass:true
      })
    }
    
  }
  handleChange (event, index, value){
    return this.setState({ paid_by : value })
  }

  show() {
    this.setState({ popUpBill: "show_popup" });
  }
  hide() {
    this.setState({ popUpBill: "hide_popup" });
  }
  componentWillMount() {
    this.setState({
      friendEmail: this.props.match.params.friend_email,
      userEmail: this.props.match.params.username,
      friendName:this.props.match.params.friend_name
    });
  }

  addBill() {
    let userEmail = this.state.userEmail;
    let friendEmail = this.state.friendEmail;
    let amountPaid = document.getElementById("amount").value;
    let description = document.getElementById("description").value;
    
    let checkboxes = document.querySelectorAll('input[name="user"]:checked');
    let checkboxValues = [];
    Array.prototype.forEach.call(checkboxes, function(ele) {
      checkboxValues.push(ele.value);
    });
    let split_between = checkboxValues

    let bill = {
      friend_email : friendEmail,
      user_email : userEmail,
      amount_paid : amountPaid,
      description : description,
      split_between : split_between,
      paid_by : this.state.paid_by
    };
    fetch("http://localhost:8080/api/addBillWithFriend", {
      method: "POST",
      body: JSON.stringify(bill), // data can be `string` or {object}!
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.status === "successful") {
          this.setState({
            successMessage: "Bill added successfully....",
            errorMessage: ""
          });
        } else {
          this.setState({
            errorMessage: response.status,
            successMessage: ""
          });
        }
      });
    this.hide();
  }

  render() {
    return (
      <MuiThemeProvider>
      <div>
        <FriendsTable
          show={this.show}
          friend={this.state.friendEmail}
          user={this.state.userEmail}
          friendname={this.state.friendName}
        />
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
                <div class="bill-dropdown-row">
                <h5 className="paidbill">paid by</h5>                
                <div className="bill-dropdown">
                  <DropDownMenu  value={this.state.value} onChange={this.handleChange} style={styles.menuItem}>
                    <MenuItem value={this.state.userEmail} primaryText="You" />
                    <MenuItem value={this.state.friendEmail} primaryText={this.state.friendName}/>
                  </DropDownMenu>
                </div>
        
        <h5 className="splitbill">and split</h5>
        <a  className="split-equally" onClick={this.changeClass} >equally</a>
        </div>
        <SplitEqually
          showRadioButton={this.state.showRadioButton}
          friendname={this.state.friendName}
          friendEmail={this.state.friendEmail}
          userEmail={this.state.userEmail}
          />
       
                <button onClick={this.hide}>Close</button>
                <button
                  type="button"
                  className="savebtn"
                  onClick={this.addBill.bind(this)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </MuiThemeProvider>
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
  constructor(props) {
    super(props);
    this.state = {
      Friend_data: [],
      isLoading: true
         };
  }
  componentWillMount() {
    // console.log(this.props.name)
    return fetch(
      `http://localhost:8080/api/allExpenses/friends/${this.props.user}/${
        this.props.friend
      }`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          Friend_data: data,
          isLoading: false             
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
                  <a className="navbar-brand" href="#" />
                </div>
              </div>
            </nav>
            <div className="content">
              <CommonPopup show1={this.props.show} />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card card-plain">
                      <div
                        className="card-header"
                        data-background-color="purple"
                      >
                        <h4 className="title">
                          
                          {this.props.friendname}
                        </h4>
                        <p className="category">April 2018</p>
                      </div>
                      <div className="card-content table-responsive">
                        <BootstrapTable
                          data={this.state.Friend_data}
                          striped
                          hover
                        >
                          <TableHeaderColumn isKey dataField="date">
                            Date
                          </TableHeaderColumn>
                          <TableHeaderColumn dataField="description">
                            Description
                          </TableHeaderColumn>
                          <TableHeaderColumn dataField="total_amount">
                            Total ( <i className="fa fa-inr" /> )
                          </TableHeaderColumn>
                          <TableHeaderColumn dataField="lend">
                            Paid/Lend ( <i className="fa fa-inr" /> )
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
}

class SplitEqually extends React.Component{
  constructor(props){
    super(props)
    this.state={
      checked: true
    }
    this.updateCheck=this.updateCheck.bind(this)    
  }
  updateCheck() {
    this.setState({
      checked:!this.state.checked
    })
  }
 
  render(){
    return(
         <div className={this.props.showRadioButton}>
         <div class="checkboxdiv">
         <input type="checkbox" name = "user" value={this.props.userEmail} onChange={this.updateCheck} defaultChecked={this.state.checked}/> <p>You</p><br/>
         <input type="checkbox" name = "user" value={this.props.friendEmail} onChange={this.updateCheck} defaultChecked={this.state.checked}/> <p>{this.props.friendname}</p>

         {/* <Checkbox
          label="username"
          checked={this.state.checked}
          onCheck={this.updateCheck}
          style={styles.checkbox}
        />
        </div>
        <div className="check2">
        <Checkbox
          label="friendname"
          checked={this.state.checked}
          onCheck={this.updateCheck}
          style={styles.checkbox}
        /> */}

        </div>
      
      
      
     
         </div>
    )
  }
}