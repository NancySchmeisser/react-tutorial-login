import React, {Component} from 'react';
import LoginService from '../../../../services/LoginService'

class RegisterView extends Component <any, any>{
    constructor (props: any){
        super(props);

        this.state = {
            currentEmail: "",
            currentPassword: "",
            repeatedPassowrd: "",
            currentMessage: undefined,
        }
    }

    handleTryRegister = async () => {

        if(this.state.currentPassword !== this.state.repeatPassword) {
            this.setState ({ currentMessage: "Passwords do not match"});
            return;
        }
    }
}