import Config from "../configuration/Config";

export default class LoginService{

    public async tryLogin(email: string, password: string) : Promise<{ success: boolean, email: string, message: string }>{
        return await (await fetch(`${Config.ApiUrl}login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) })).json();
    }

    public async tryLogout(email: string) : Promise<{ success: boolean, email: string, message: string }>{
        return await (await fetch(`${Config.ApiUrl}logout`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) })).json();
    }

    public async tryRegister(email: string, password: string) : Promise<{ success: boolean, email: string, message: string }>{
        return await (await fetch(`${Config.ApiUrl}register`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) })).json();
    }

    public async trySendEmailReminder(email: string) : Promise<{ success: boolean, email: string, message: string }>{
        return await (await fetch(`${Config.ApiUrl}sendEmailReminder`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) })).json();
    }
}