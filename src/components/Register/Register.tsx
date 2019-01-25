import React, { Component } from 'react';

import { timingSafeEqual } from 'crypto';

class Register extends Component<any, any>{
   
    render() {
        return (
            <div className="Register">
                <div className="card">
                    <div className="card-header">
                        <h5>Register</h5>
                    </div>
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    Email
                                </div>
                                <div className="col">
                                  
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-4">
                                    Password
                                </div>
                                <div className="col">
                                  

                            <div className="row">
                                <div className="col">
                                    <button  className="btn btn-link float-right">Register</button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <div className="alert alert-danger" role="alert">
                                      
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <button  className="btn btn-link float-left">Forget Password</button>
                                    <button  className="btn btn-link float-right">Register</button>
                                </div>
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

export default Register;
