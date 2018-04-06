import React, { Component } from 'react';
import './App.css';
import Homepage from './component/Homepage';
import Header from './component/Header';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Signup from './component/Signup';
import Dashboard from './component/Dashboard';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




class App extends Component {

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
            <Route path="/dashboard" exact component={Dashboard}/>
            {/* <MuiThemeProvider >
              <Dashboard />
            </MuiThemeProvider> */}
          </div>
        </Router>
        {/* <Header/> */}
        {/* <Homepage /> */}
      </div>
    );
  }
}
export default App;
