import React, { Component } from 'react';
import './Login.css';
import LoginView from './LoginView/LoginView';
import RegisterView from './RegisterView/RegisterView';

class Login extends Component<any, any>{
    constructor(props: any){
        super(props);
    }

    render() {
        return ( <RegisterView handleLogIn={this.props.handleLogIn}/>) ;
    }
}

export default Login;
