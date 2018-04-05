import React, { Component } from 'react';
import './App.css';
import Homepage from './component/Homepage';
import Header from './component/Header';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Homepage />
      </div>
    );
  }
}
export default App;
