import React, { Component } from 'react';
import Login from './Login/Login';
import Home from './Home/Home';
import Session from '../../state/Session';

interface MainProps {
    session: Session,
    handleLogIn: (email: string) => void,
}

class Main extends Component <MainProps,any>{
    render() {
        if (this.props.session.isLoggedIn) {
            return (
                <Home session={this.props.session} />
            );
            
        } else {
            return (
            <Login session={this.props.session} handleLogIn={this.props.handleLogIn}/>)
        }
    }
}

export default Main;