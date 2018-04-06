import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class Signup extends React.Component{
    createUser() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        let user = {
            name : name,
            email : email,
            password : password
        }
        console.log(user);
        fetch('http://localhost:8080/api/signup', {
            method: 'POST',
            body: JSON.stringify(user), // data can be `string` or {object}!
            headers: new Headers({
              'Content-Type': 'application/json'
            })
        }).then((response) => response.json())
        .then((response) => {
            // if(response.status === 'successful'){
            //     window.location.href='/dashboard'
            // }
            console.log(response.status,response)
        })
    }
    render(){
        return (
            <div className = 'container'>
                <div id="signup-box">
                    <h1>Create an account</h1>
                    <p className = 'label'>Enter your name : <input type='email' id='name'/></p>
                    <p className = 'label'>Enter your email : <input type='email' id='email'/></p>
                    <p className = 'label'>Enter your Password : <input type = 'password' id='password'/></p>
                    <Button color ='twitter' fluid ={true} size = 'huge'  onClick={this.createUser.bind(this)} >Sign Up</Button>
                    <p className='query'>Already registered ? <Link to="/">login</Link></p>
                </div>
            </div>
        )
    }
}

export default Signup;