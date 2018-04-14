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
                    <div className="box-header">
                        <h1>LogIn Page</h1>
                    </div>
                    <div className="box-body">
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
                        <button type="submit" className=" submit" onClick={this.isValidate.bind(this)}>Login</button>
                    </div>
                    <div className="col-md-12">
                        {this.renderRedirect()}
                        <div className='error-message'>{this.state.errorMessage}</div>
                        <p className='query'>Don't have an account ? <Link to="/signup">create account</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;