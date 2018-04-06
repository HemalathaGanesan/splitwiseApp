import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Appbar from 'material-ui/AppBar'


class App extends Component {

  render() {
    return (
      <div className="App">
        <MuiThemeProvider >
       <Dashboard />
       
       </MuiThemeProvider>
      </div>
    );
  }
}
export default App;