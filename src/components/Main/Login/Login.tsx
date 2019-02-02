import React, { Component } from 'react';
import './Login.css';
import { timingSafeEqual } from 'crypto';
import Register from '../Register/Register';

class Login extends Component<any, any>{
    constructor(props: any){
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
        return this.state.CurrentView;
    }
}
           

export default Login;