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

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }
  getUser(user){
    this.setState({
      user: user
    });
    console.log('User ',user);
  }
  componentDidUpdate(){
    console.log('user data ', this.state.user);
  }
  render() {
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
                    <Signup />
                  </div>
                );
              }}
            />
            <Route path="/dashboard" render={() => {return <Innerdashboard user={this.state.user}/>}} />
            <Route path="/profile" render={() => {return <Profile user={this.state.user}/>}} />
            <Route path="/expenses" render={() => {return <Expenses user={this.state.user}/>}} />
            <Route path="/group" render={() => {return <Group user={this.state.user}/>}} />
            <Route path="/friend" render={() => {return <Friend user={this.state.user}/>}} />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
