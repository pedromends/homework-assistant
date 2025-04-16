import { Component, ElementRef } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

@Component({
    selector: 'app-sidebar',
    standalone: false,
    template: ` <div class="layout-sidebar">
        <app-menu></app-menu>
    </div>`
})
export class AppSidebar {
    constructor(public el: ElementRef) {}
}
