import React, { Component } from 'react';
import LoginService from '../../../../services/LoginService'

class EmailReminderView extends Component<any, any>{
    constructor(props: any){
        super(props);

        this.state= {
            currentEmail: "",
            currentMessage: undefined,
        }
    }

    handleTryEmailReminder = async () => {

        const loginService = new LoginService();
        const reminderResult = await loginService.trySendEmailReminder(this.state.currentEmail );

        if( reminderResult.success ) {
            this.setState( { currentMessage: `Email wurde verschickt: (Passwort: ${reminderResult.password})` });
            return;
        }

        this.setState( { currentMessage: "Email konnte nicht verschickt werden" });
    }

    render() {
        return (
            <div className="login">
                <div className="card">
                    <div className="card-header">
                        <h5>Password reminder per email</h5>
                    </div>
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    Email
                                </div>
                                <div className="col">
                                    <input type="email" className="form-control" placeholder="Please enter email" value={this.state.currentEmail} onChange={ (event) => { this.setState ({ currentEmail: event.target.value}) }} />
                                </div>

                            </div>
                            <div className="row">
                                <div className="col">
                                    <button onClick={ this.handleTryEmailReminder } className="btn btn-primary float-right">Send reminder</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    { this.state.currentMessage ? 
                                    <div className="alert alert-danger" role="alert">
                                        {this.state.currentMessage}
                                    </div> : "" }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button className="btn btn-link text-secondary float-left" onClick={ ()=>this.props.handleGoto("LoginView")}>Login</button>
                                    <button className="btn btn-link text-secondary float-right" onClick={ ()=>this.props.handleGoto("RegisterView")}>Create account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmailReminderView;

    
