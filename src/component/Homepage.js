import React, { Component } from 'react';
import Users from '../users';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';

class Homepage extends React.Component{
    isValidate(){
        const email = document.getElementById('email').value;
        const password = document.getElementById('pwd').value;
        for( var i=0;i<Users.length;i++){
            if(Users[i].email.toString()===email && Users[i].password.toString()===password){
                console.log(`${Users[i].name} is successfully logged!! `,`and his email-id is : ${Users[i].email}`);
                return
            }
        } 
        console.log('failed') 
    }
    render(){
        
        //console.log(Users);
        
        return (
            <div className = 'container'>
                <div className="login-box">
                    <p className = 'label'>Enter your email : <input type='email' id='email'/></p>
                    <p className = 'label'>Enter your Password : <input type = 'password' id='pwd'/></p>
                    <Button color ='twitter' fluid ={true} onClick={this.isValidate.bind(this)}>Log In</Button>
                    <p className='query'>Don't have an account ? <a href='#'>join</a> it</p>
                </div>
                <div id="signup-box">
                    <p className = 'label'>Enter your name : <input type='email' id='name'/></p>
                    <p className = 'label'>Enter your email : <input type='email' id='newEmail'/></p>
                    <p className = 'label'>Enter your Password : <input type = 'password' id='password'/></p>
                    <Button color ='twitter' fluid ={true} size = 'huge' /* onClick={this.createUser.bind(this)} */>Sign Up</Button>
                    <p className='query'>Already registered ? <a href="#">login</a></p>
                </div>
            </div>
        )
    }
}

export default Homepage;