import React, { Component } from 'react';
import Users from '../users';

class Homepage extends React.Component{
    render(){
        console.log(Users);
        return (
            <div>
                <div className="header"><button>login</button><button>signUp</button></div>
            </div>
        )
    }
}

export default Homepage;