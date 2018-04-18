import React from "react";
import "./App.css";
import Homepage from "./component/Homepage";
import Header from "./component/Header";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Signup from "./component/Signup";
import Dashboard from "./component/dashboard";
import Innerdashboard from "./component/innerdashboard";
import Profile from "./component/userprofile";
import Expenses from "./component/allexpenses";
import Group from "./component/group";
import Friend from "./component/friend";
import AddBill from "./component/AddBill"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
      message : ''
    }
  }
  getUser(user){
    this.setState({
      user: user
    });
  }
  getMessage(message){
    this.setState({
      message : message
    })
  }
  render() {
    console.log(this.state.message)
    return (
      <div className="App">
        <Router>
          <div>
            <Route
              path="/"
              exact
              render={() => {
                return (
                  <div>
                    <Header />
                    <Homepage userData={this.getUser.bind(this)}/>
                  </div>
                );
              }}
            />
            <Route
              path="/signup"
              exact
              render={() => {
                return (
                  <div>
                    <Header />
                    <Signup userData={this.getUser.bind(this)}/>
                  </div>
                );
              }}
            />
            <Route path="/dashboard" render={() => {return <Innerdashboard user={this.state.user}/>}} />
            <Route path="/profile"  render={() => {return <Profile user={this.state.user}/>}} />
            <Route path="/expenses" render={() => {return <Expenses user={this.state.user}/>}} />
            <Route path="/group" render={() => {return <Group user={this.state.user}/>}} />
            <Route path="/friend" render={() => {return <Friend user={this.state.user} addFriendSuccess={this.getMessage.bind(this)}/>}} />
            {/* <Route path="/friendData" component={AddBill}/> */}
            <Route path="/friendData/:friend_name/:friend_email/:username" component={AddBill} />
            <Route path="/groupData" component={AddBill} />

          </div>
        </Router>
      </div>
    );
  }
}
export default App;
