import { Component } from '@angular/core';

@Component({
    // Attribute selector : <button appButton> and <a appButton>
    selector: 'button[appButton], a[appButton]',
    standalone: true,
    imports: [],
    templateUrl: './button.component.html',
    styleUrl: './button.component.css'
})
export class ButtonComponent {

}
