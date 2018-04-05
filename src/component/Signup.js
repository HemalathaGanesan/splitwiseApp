import React, { Component } from 'react';
import Users from '../users';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class Signup extends React.Component{
    render(){
        return (
            <div className = 'container'>
                <div id="signup-box">
                    <h1>Create an account</h1>
                    <p className = 'label'>Enter your name : <input type='email' id='name'/></p>
                    <p className = 'label'>Enter your email : <input type='email' id='newEmail'/></p>
                    <p className = 'label'>Enter your Password : <input type = 'password' id='password'/></p>
                    <Button color ='twitter' fluid ={true} size = 'huge' /* onClick={this.createUser.bind(this)} */>Sign Up</Button>
                    <p className='query'>Already registered ? <Link to="/">login</Link></p>
                </div>
            </div>
        )
    }
}

export default Signup;