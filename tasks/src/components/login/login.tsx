import { Component, h, Host } from "@stencil/core";

@Component({
    tag: 'task-login',
    styleUrl: 'login.scss',
    shadow: true
})
export class TaskLogin {
    render() {
        return <Host>
            <div class="greeting abel-regular">
                <h1> Hey There !</h1>  
                <h1>Sign In To Continue</h1>
            </div>
            
            <my-input inputTitle="Username" inputType="text"></my-input>
            <my-input inputTitle="Password" inputType="password"></my-input>
            <button></button>
        </Host>
    }
}