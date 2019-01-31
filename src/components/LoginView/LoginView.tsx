import React, { Component } from 'react';
import LoinService from '../../../../services/LoginService'
import { any } from 'prop-types';

class LoginView extends Component<any, any>{
    constructor(props: any) {
        super(props);

        this.state = {
            currentEmail: "",
            currentPassword: "",
            currentMessage: undefined,
        }
    }
    handleTryLogIn = async () => {

        const LoginService = new LoginService();
        const result = await LoginService.tryLogin(this.state.currentEmail, this.state.currentPassword);

        if (result.success) {
            this.props.handleLogIn(this.state.currentEmail);
        } else {
            this.setState({ currentMessage: result.message });
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
                                    <input type="text" className="form-control" placeholder="Please enter email" value={this.state.currentEmail} onChange={(event) => { this.setState({ currentEmail: event.target.value }) }} />
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-4">
                                    Password
                                    </div>
                                <div className="col">
                                    <input type="password" className="form-control" placeholder="Please enter password" value={this.state.currentPassword} onChange={(event) => { this.setState({ currentPassword: event.target.value }) }} />
                                </div>

                            </div>
                            <div className="row">
                                <div className="col">
                                    <button onClick={this.handleTryLogIn} className="btn btn-primary float-right">Login</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <hr style={{ height: "1px" }} />
                                    <button className="btn btn-link text-secondary float-left" onClick={() => this.props.handleGoto("RegisterView")}>Create account</button>
                                    <button className="btn btn-link text-secondary float-right" onClick={() => this.props.handleGoto("SendEmailReminderView")}>Forgot email</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    {this.state.currentMessage ?
                                        <div className="alert alert-danger" role="alert">
                                            {this.state.currentMessage}
                                        </div> : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginView;
