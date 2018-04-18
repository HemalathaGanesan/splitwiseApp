import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            successMessage: '',
            errorMessage: ''
        }
    }
    createUser() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('key').value;

        let user = {
            username: name,
            email: email,
            password: password
        }

        fetch('http://localhost:8080/api/signup', {
            method: 'POST',
            body: JSON.stringify(user), // data can be `string` or {object}!
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response) => response.json())
            .then((response) => {
                console.log("inside response", response)
                if (response.status === 'successful') {
                    this.setState({
                        successMessage: 'Your account has been created successfully....',
                        errorMessage: ''
                    })
                    localStorage.setItem('jwt-token', response.token)
                    localStorage.setItem('user_data', JSON.stringify(response.user_data))
                } else {
                    this.setState({
                        errorMessage: 'User already registered !!',
                        successMessage: ''

                    })
                }
                console.log(localStorage.getItem('user_data'));
            })

    }
    showPassword() {
        var data = document.getElementById("key");
        if (data.type === "password") {
            data.type = "text";
        } else {
            data.type = "password";
        }
    }
    render() {
        return (
            <div className='box'>
                <div className="login-box">
                    <div class="box-header">
                        <h1>User Registration Page</h1>
                    </div>
                    <div className="box-body">
                        <div className="form-group">
                            <input type="terxt" className="form-control" id="name" placeholder="Enter full name" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="key" placeholder="Enter password" />
                        </div>
                        <div className="form-group">
                            <input type="checkbox" onClick={this.showPassword.bind(this)} />Show Password
                        </div>
                    </div>
                    <div className="box-footer">
                        <button type="submit" className=" submit" onClick={this.createUser.bind(this)}>SignUp</button>
                        <div className='success-message'>{this.state.successMessage}</div>
                        <div className="error-message">{this.state.errorMessage}</div>
                        <p className='query'>Already registered ? <Link to="/">login</Link></p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Signup;