import React, { Component } from 'react';
import LoginService from '../../../../services/LoginService'

class RegisterView extends Component<any, any>{
    constructor(props: any) {
        super(props);

        this.state = {
            currentEmail: "",
            currentPassword: "",
            repeatedPassowrd: "",
            currentMessage: undefined,
        }
    }

    handleTryRegister = async () => {

        if (this.state.currentPassword !== this.state.repeatPassword) {
            this.setState({ currentMessage: "Passwords do not match" });
            return;
        }
        const loginService = new LoginService();
        const registerResult = await loginService.tryRegister(this.state.currentEmail, this.state.currentPassword);

        if (!registerResult.success) {
            this.setState({ currentMessage: registerResult });
            return;

        }
        const loginResult = await loginService.tryLogin(this.state.currentEmail, this.state.currentPassword);
        if (!loginResult.success) {
            this.setState({ currentMessage: loginResult.message });
            return;
        }
        this.props.handleLogIn(this.state.currentEmail);
    }
    render() {
        return (
            <div className="login">
                <div className="card">
                    <div className="card-header">
                        <h5>Create a new account</h5>
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
                                <div className="col-4">
                                    Repeat password
                                </div>
                                <div className="col">
                                    <input type="password" className="form-control" placeholder="Please repeat the password" value={this.state.repeatedPassword} onChange={(event) => { this.setState({ repeatedPassword: event.target.value }) }} />
                                </div>

                            </div>
                            <div className="row">
                                <div className="col">
                                    <button onClick={this.handleTryRegister} className="btn btn-primary float-right">Create account</button>
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
                            <div className="row">
                                <div className="col">
                                    <button className="btn btn-link text-secondary float-left" onClick={() => this.props.handleGoto("LoginView")}>Login</button>
                                    <button className="btn btn-link text-secondary float-right" onClick={() => this.props.handleGoto("SendEmailReminderView")}>Forgot email</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterView;