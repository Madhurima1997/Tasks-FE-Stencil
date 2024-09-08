import { Component, h, Host } from "@stencil/core";

@Component({
    tag: 'task-login',
    styleUrl: 'login.scss',
    shadow: true
})
export class TaskLogin {
    render() {
        return <Host>
            <h1> Hey There !</h1>
            <input type="text"/>
            <input type="password"/>
        </Host>
    }
}