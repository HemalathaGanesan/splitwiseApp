import React from 'react';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
import Dashboard from '../component/dashboard';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: '',
            redirect: false,
        }
    }
    isValidate() {
        let scope = this;
        const email = document.getElementById('email').value;
        const password = document.getElementById('key').value;
        let data = {
            email: email,
            password: password
        }
        fetch('http://localhost:8080/api/login', {
            method: 'POST',
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response) => response.json())
            .then((response) => {
                if (response.status === 'successful') {
                    scope.props.userData(response.user_data)
                    //window.location.href='/dashboard'
                    this.setState({
                        redirect: true
                    });

                } else {
                    this.setState({
                        errorMessage: 'Invalid email/password....!!!'
                    })
                }
            })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/dashboard' />
        }
    }
    myFunction() {
        var x = document.getElementById("key");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    render() {
        return (
            <div className='box'>
                <div className="login-box">
                    <h1>LogIn Page</h1>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="key" placeholder="Enter password" />
                    </div>
                    <div className="form-group">
                        <input type="checkbox" onClick={this.myFunction.bind(this)}/>Show Password
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm" onClick={this.isValidate.bind(this)}>Login</button>
                    {this.renderRedirect()}
                    <div className='error-message'>{this.state.errorMessage}</div>
                    <p className='query'>Don't have an account ? <Link to="/signup">create account</Link></p>
                </div>
            </div>
        )
    }
}

export default Homepage;