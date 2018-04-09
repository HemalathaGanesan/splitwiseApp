import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class Signup extends React.Component{
    constructor(){
        super();
        this.state={
            successMessage : ''   
        }
    }
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
            if(response.status === 'successful'){
                this.setState({
                    successMessage : 'Your account has been created successfully....',
                })
            }
        })
    }
    render(){
        return (
            <div className = 'box'>
                <div className="login-box">
                    <h1>User Registration Page</h1>
                    <div className="form-group">
                        <label>Full Name :</label>
                        <input type="terxt" className="form-control" id="name" placeholder="Enter full name" />
                    </div>
                    <div className="form-group">
                        <label><span className="glyphicon glyphicon-user"></span>Email-Id :</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label> Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter password" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm" onClick={this.createUser.bind(this)}>SignUp</button>
                    <div className = 'success-message'>{this.state.successMessage}</div>
                    <p className='query'>Already registered ? <Link to="/">login</Link></p>
                </div>
            </div>
        )
    }
}

export default Signup;