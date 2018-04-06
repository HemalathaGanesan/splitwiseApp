import React, { Component } from 'react';
import Users from '../users';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
import Dashboard from '../component/Dashboard';

class Homepage extends React.Component {
   
    isValidate() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('pwd').value;
        //console.log('i am here');
        // for (var i = 0; i < Users.length; i++) {
        //     if (Users[i].email.toString() === email && Users[i].password.toString() === password) {
        //         console.log(Users[i]);
        //         // <Redirect to='/dashboard'/>
        //         window.location.href='/dashboard';
        //         return null;
        //     }
        // }
        // alert('Invalid User')
        // console.log('invalid email/password')
        let data = {
            email : email,
            password : password
        }
        fetch('http://localhost:8080/api/login', {
            method: 'POST',
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: new Headers({
              'Content-Type': 'application/json'
            })
        }).then((response) => response.json())
        .then((response) => {
            if(response.status === 'successful'){
                window.location.href='/dashboard'
            }
        })
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