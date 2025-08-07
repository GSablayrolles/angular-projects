import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-control',
    standalone: true,
    imports: [],
    templateUrl: './control.component.html',
    styleUrl: './control.component.css',
    // DIsable the emulation of the shadow dom
    encapsulation: ViewEncapsulation.None
})
export class ControlComponent {
    label = input.required<string>();
}
