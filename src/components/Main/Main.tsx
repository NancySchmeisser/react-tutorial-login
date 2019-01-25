import React, { Component } from 'react';
import Login from '../Login/Login';
import Home from '../Home/Home';


class Main extends Component <any,any>{
    render() {
        if (this.props.session) {
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
