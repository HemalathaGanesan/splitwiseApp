import React from "react";
import "./App.css";
// import Dashboard from './component/Dashboard';
import Dashboard from "./component/dashboard";
import Innerdashboard from "./component/innerdashboard";
import Profile from "./component/userprofile";
import Expenses from './component/allexpenses'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Dashboard} />
          <Route path="/dashboard" exact strict component={Innerdashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/expenses" component={Expenses} />
        </div>
      </Router>
    );
  }
}
export default App;
