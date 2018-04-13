import React from "react";
import ReactDOM from 'react-dom'
import Dashboard from "./dashboard";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


export default class AddBillPopup extends React.Component {
  constructor() {
    super();
    this.state = {
      popUpBill: "hide_popup"
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    //console.log(this.props.data);
  }
  show() {
    console.log("show");
    this.setState({ popUpBill: "show_popup" });
  }
  hide() {
    this.setState({ popUpBill: "hide_popup" });
  }

  render() {
    return (
      <div className="friend-container">
      <div className="friend-table-div">
      <FriendsTable/>
        <CommonPopup show={this.show} />
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
                <input id="amount" placeholder="Enter amount" type="number"/>
              
              <button onClick={this.hide}>Close</button>
              <button type="button" className="savebtn">
                Save
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

class CommonPopup extends React.Component {
  render() {
    return (
      <div className="row1">
        <button onClick={this.props.show}>Add a bill</button>
        <button type="button" className="savebtn">
          Settle
        </button>
      </div>
    );
  }
}


class FriendsTable extends React.Component{
  constructor(){
    super()
    this.state={
      friend_data:[],
      isLoading:true,
      friend_name:[]
    }
  }
  componentWillMount(){
    return fetch("http://localhost:8080/api/friend").then((response)=>{
      return response.json();
    }).then((data)=>{  
      console.log(data) 
      let friend_name=data.map(val=>{
        return(
          < h1 className="name">{val.friend_name} </h1> 
        )
      }) 
      this.setState({
        friend_data:data,
        isLoading:false,
        friend_name:friend_name
      })
    })    
  }
  render(){
    console.log(ReactDOM.findDOMNode(this.refs.pop_name))
    if(this.state.isLoading)
    return <div></div>
    else{
    return(
      <div className="frnd-name"> {this.state.friend_name}
        <div  className="friend-table">
          <BootstrapTable data={this.state.Friend_data} striped hover>
            <TableHeaderColumn isKey dataField="date">Date</TableHeaderColumn>
            <TableHeaderColumn dataField="description">Description</TableHeaderColumn>
            <TableHeaderColumn dataField="you_paid">You paid</TableHeaderColumn>
            <TableHeaderColumn dataField="you_lend">You lend</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    )
  }
}
}


