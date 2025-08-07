import { Component, input, ViewEncapsulation } from '@angular/core';

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
        class: "control"
    }
})
export class ControlComponent {
    label = input.required<string>();
}
