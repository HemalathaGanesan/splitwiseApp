import React, { Component } from 'react';
import Users from '../users';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Homepage extends React.Component {
    isValidate() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('pwd').value;
        for (var i = 0; i < Users.length; i++) {
            if (Users[i].email.toString() === email && Users[i].password.toString() === password) {
                console.log(Users[i]);
                return
            }
        }
        console.log('invalid email/password')
    }
    render() {

        //console.log(Users);

        return (
            <div className = 'container'>
                <div id="login-box">
                    <h1>LogIn Page</h1>
                    <p className = 'label'>Enter your email : <input type='email' id='email'/></p>
                    <p className = 'label'>Enter your Password : <input type = 'password' id='pwd'/></p>
                    <Button color ='twitter' fluid ={true} size = 'huge' onClick={this.isValidate.bind(this)}>LogIn</Button>
                    <p className='query'>Don't have an account ? <Link to="/signup">create account</Link></p>
                </div>
            </div>
        )
    }
}

export default Homepage;