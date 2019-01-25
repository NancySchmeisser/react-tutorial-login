import React, { Component } from 'react';
import LoginService from '../../services/LoginService';


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
            {this.props.session.currentUser}
                <button onClick={this.handleLogout}className="btn btn-link">Logout</button>
                </div>
            );
        } else {
            return (
                <div className="Sessioninfo">
              Sessioninfo - logged out
                </div>
            );
        }
      
    }
}

export default Sessioninfo;
