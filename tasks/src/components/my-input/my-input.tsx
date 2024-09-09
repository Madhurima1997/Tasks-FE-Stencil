import { Component, h, Host, Prop } from "@stencil/core";

@Component({
    tag: 'my-input',
    styleUrl: 'my-input.scss',
    shadow: true
})
export class MyInput{
    @Prop() inputTitle: string = null;
    @Prop() inputType: string = null;

    render() {
        return <Host>
            <div class="input-container abel-regular">
                {this.inputTitle && 
                    <div>
                        <label class="label">
                            {this.inputTitle}
                        </label>
                    </div>
                }
                <input class="text" type={this.inputType}/>
            </div>
        </Host>
    }
}