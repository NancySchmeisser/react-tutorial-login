import React, { Component } from 'react';
import './Login.css';
import LoginView from './LoginView/LoginView';
import RegisterView from './RegisterView/RegisterView';
import EmailReminderView from './EmailReminderView/EmailReminderView';

interface LoginState {
    currentView: any,
}

interface LoginProps {
    handleLogIn: any
    session: any
}

class Login extends Component<LoginProps, LoginState>{
    constructor(props: LoginProps){
        super(props);

        this.state= {
           currentView: <LoginView handleLogIn={this.props.handleLogIn} handleGoto={this.handleGoto} />
        }
    }

   handleGoto = (view: string) => {
       switch(view) {
           case "LoginView":
       this.setState({ currentView : <LoginView handleLogIn={this.props.handleLogIn} handleGoto={this.handleGoto}/> })
           break;
           case "RegisterView":
       this.setState ({ currentView : <RegisterView handleLogIn={this.props.handleLogIn} handleGoto={this.handleGoto}/> })
           break;
           case "SendEmailReminderView":
           this.setState ({ currentView : <EmailReminderView handleGoto={this.handleGoto}/>})
           break; 
       }
   }

    render() {
        return this.state.currentView;
    }
}
           

export default Login;
