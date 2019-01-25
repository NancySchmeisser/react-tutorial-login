import React, { Component } from 'react';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Register from '../Register/Register';


class Main extends Component <any,any>{

    constructor(props: any) {
        super(props)
        this.state={
            loginView:  <Login session={this.props.session} handleLogIn={this.props.handleLogIn} handleGoToRegister={this.handleGoToRegister} handleGoToEmailReminder={this.handleGoToEmailReminder}/>
        }
    }

    handleGoToRegister = () => {
        this.setState(
            {
                loginView: <Register session={this.props.session}/>
            }
        )
    }

    handleGoToEmailReminder = () => {
        this.setState(
            {
                loginView: <Register session={this.props.session}/> //TODO: EMailReminder component still missing
            }
        )
    }

    render() {
        if (this.props.session) {
            return (
                <Home session={this.props.session} />
            );
            
        } else {
            return ( this.state.loginView );
        }
      
    }
}

export default Main;
