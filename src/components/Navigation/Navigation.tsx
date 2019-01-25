import React, { Component } from 'react';
import Sessioninfo from './Sessioninfo/Sessioninfo';

class Navigation extends Component<any, any> {
    render() {

        if (!this.props.session) {
            return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">React Tutorial - Login</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                          </ul>
                    </div>                    
                    <Sessioninfo session={this.props.session} handleLogout={this.props.handleLogout} />
                </nav>
            );
        } else {
            return (

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">React Tutorial - Login</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>

                        </ul>
                    </div>
                    <Sessioninfo session={this.props.session} handleLogout={this.props.handleLogout} />
                </nav>
            );
        }
    }
}

export default Navigation;
