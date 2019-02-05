import React, { Component } from 'react';
import Session from '../../../state/Session';

interface SessionInfoProps {
    session: Session,
    onLogOut: () => void,
}
class Sessioninfo extends Component <SessionInfoProps,any>{
    render() {
        if (this.props.session.isLoggedIn){
            return (
                <div className="Sessioninfo">
            {this.props.session.currentUser}
                <button onClick={this.props.onLogOut}className="btn btn-link">Logout</button>
                </div>
            );
        } else {
            return (
                <div className="Sessioninfo">
              Logged out
                </div>
            );
        }
      
    }
}

export default Sessioninfo;
