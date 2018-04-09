import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
import Dashboard from '../component/dashboard';

class Homepage extends React.Component {
    constructor(){
        super();
        this.state={
            errorMessage : '',
            redirect : false
        }
    }
   
    isValidate() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('pwd').value;
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
                //window.location.href='/dashboard'
                this.setState({
                    redirect : true
                });
            }else{
                this.setState({
                    errorMessage : 'Invalid email/password....!!!'
                })
            }
        })
    }
    renderRedirect = () =>{
        if (this.state.redirect) {
          return <Redirect to='/dashboard' />
        }
      }
    render() {
        return (
            <div className = 'container1'>
                <div id="login-box">
                    <h1>LogIn Page</h1>
                    <p className = 'label'>Enter your email : <input type='email' id='email'/></p>
                    <p className = 'label'>Enter your Password : <input type = 'password' id='pwd'/></p>
                    <Button color ='twitter' fluid ={true} size = 'huge' onClick={this.isValidate.bind(this)}>LogIn</Button>
                    {this.renderRedirect()}
                    <div className = 'error-message'>{this.state.errorMessage}</div>
                    <p className='query'>Don't have an account ? <Link to="/signup">create account</Link></p>
                </div>
            </div>
        )
    }
}

export default Homepage;