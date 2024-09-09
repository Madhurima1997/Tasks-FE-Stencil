import { Component, h, Host } from "@stencil/core";

@Component({
    tag: 'task-login',
    styleUrl: 'login.scss',
    shadow: true
})
export class TaskLogin {
    render() {
        return <Host>
            <div class="login-content">
                <div class="headings abel-regular">
                    <h1>Hey There !</h1>  
                    <h1>Sign In To Continue</h1>
                </div>
                <div>
                    <my-input inputTitle="Username" inputType="text"></my-input>
                    <my-input inputTitle="Password" inputType="password"></my-input>
                </div>
                <button>Login</button>
            </div>
        </Host>
    }
}