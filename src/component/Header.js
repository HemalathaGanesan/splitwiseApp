import React, { Component } from 'react';
import logo from './images/logo.png';

class Header extends React.Component {
    render(){
        return (
            <div className = 'header'><img className="logo-img" alt="" src={logo} /></div>
        )
    }
}
export default Header;