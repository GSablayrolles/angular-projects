import { Component, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-control',
    standalone: true,
    imports: [],
    templateUrl: './control.component.html',
    styleUrl: './control.component.css',
    // Disable the emulation of the shadow dom
    encapsulation: ViewEncapsulation.None,
    // Host design 'app-control' and add properties to it
    host: {
        class: "control",
        "(click)": "onClick()"
    }
})
export class ControlComponent {
    // Equivalent to the host: {class: "control"}
    // @HostBinding("class") className = "control";
    label = input.required<string>();

    // Equivalent to host: {"(click)" : "onClick()"}
    // @HostListener("click")
    onClick() {
        console.log("Clicked")
    }
}
