import React, { Component } from 'react';


class Sessioninfo extends Component <any,any>{
    render() {
        if (this.props.session){
            return (
                <div className="Sessioninfo">
            {this.props.session.currentUser}
                <button onClick={this.props.onLogOut}className="btn btn-link">Logout</button>
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
