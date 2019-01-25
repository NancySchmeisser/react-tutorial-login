import React, { Component } from 'react';
import './Login.css';
import { timingSafeEqual } from 'crypto';

class Login extends Component<any, any>{
    constructor(props: any){
        super(props);

        this.state= {
            currentEmail: "",
            currentPassword: "",
            currentMessage: "Please enter something",
        }
    }

    handleTryLogIn = () => {

        if( this.state.currentEmail === "nancy" && this.state.currentPassword === "nancy") {
            this.props.handleLogIn(this.state.currentEmail);
        } else {
            this.setState( { currentMessage: "Wrong username or password" });
        }
    }

    render() {
        return (
            <div className="login">
                <div className="card">
                    <div className="card-header">
                        <h5>Login</h5>
                    </div>
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    Email
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Please enter email" value={this.state.currentEmail} onChange={ (event) => { this.setState ({ currentEmail: event.target.value}) }} />
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-4">
                                    Password
                                </div>
                                <div className="col">
                                    <input type="password" className="form-control" placeholder="Please enter password" value={this.state.currentPassword} onChange={ (event) => { this.setState ({ currentPassword: event.target.value}) }}/>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col">
                                    <button onClick={ this.handleTryLogIn} className="btn btn-link float-right">Login</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="alert alert-danger" role="alert">
                                        {this.state.currentMessage}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
