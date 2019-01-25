import React, { Component } from 'react';
import LoginService from '../../../services/LoginService';
import './SessionInfo.css';

class Sessioninfo extends Component <any,any>{

    handleLogout = async () => {
        const loginService = new LoginService();
        const result = await  loginService.tryLogout(this.props.session.currentUser);

        if(result.success) {
            this.props.handleLogout(this.props.session.currentUser);
        }
    }

    render() {
        if (this.props.session){
            return (
                <div className="Sessioninfo">
                <button onClick={this.handleLogout} className="logoutButton btn btn-link logoutButton">Logout {this.props.session.currentUser}</button>
                </div>
            );
        } else {
            return (
                <div className="Sessioninfo">
                    not logged in
                </div>
            );
        }
      
    }
}

export default Sessioninfo;
