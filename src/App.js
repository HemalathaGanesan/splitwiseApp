import React from 'react';
import './App.css';
import Homepage from './component/Homepage';
import Header from './component/Header';
import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Signup from './component/Signup';
import Dashboard from "./component/dashboard";
import Innerdashboard from "./component/innerdashboard";
import Profile from "./component/userprofile";
import Expenses from './component/allexpenses'
import Group from './component/group'
import Friend from './component/friend'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" exact render = {
              () => {
                return(
                  <div>
                    <Header />
                    <Homepage />
                  </div>
                );
              }
            }/>
            <Route path="/signup" exact render = {
              () => {
                return(
                  <div>
                    <Header />
                    <Signup />
                  </div>
                );
              }
            }/>
            <Route path="/main" component={Dashboard} />
            <Route path="/dashboard" component={Innerdashboard} />
            <Route path="/profile" component={Profile} />
            <Route path="/expenses" component={Expenses} />
            <Route path="/group" component={Group} />
            <Route path="/friend" component={Friend} />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
