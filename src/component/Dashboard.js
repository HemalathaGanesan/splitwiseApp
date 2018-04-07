import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Header from './Header';

class Dashboard extends React.Component{
    render(){
        return (
            <div>
                <Header />
                <h1>Dashboard</h1>
            </div>
        )
    }
}
export default Dashboard;