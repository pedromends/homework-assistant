import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
    selector: 'app-menu',
    imports: [CommonModule, MenuItemComponent, RouterModule],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss'
})
export class MenuComponent {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
            },
            {
                label: 'SEUS ESTUDOS',
                items: [
                    {
                        label: 'Tarefa',
                        icon: 'pi pi-fw pi-bookmark',
                        // items: [
                        //     {
                        //         label: 'Submenu 1.1',
                        //         icon: 'pi pi-fw pi-bookmark',
                        //         items: [
                        //             { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                        //             { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                        //             { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                        //         ]
                        //     },
                        //     {
                        //         label: 'Submenu 1.2',
                        //         icon: 'pi pi-fw pi-bookmark',
                        //         items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
                        //     }
                        // ]
                    },
                    {
                        label: 'Estudo',
                        icon: 'pi pi-fw pi-book',
                        // items: [
                        //     {
                        //         label: 'Submenu 2.1',
                        //         icon: 'pi pi-fw pi-book',
                        //         items: [
                        //             { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-book' },
                        //             { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-book' }
                        //         ]
                        //     },
                        //     {
                        //         label: 'Submenu 2.2',
                        //         icon: 'pi pi-fw pi-bookmark',
                        //         items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
                        //     }
                        // ]
                    },
                    {
                        label: 'Questões',
                        icon: 'pi pi-fw pi-question',
                        // items: [
                        //     {
                        //         label: 'Submenu 2.1',
                        //         icon: 'pi pi-fw pi-question',
                        //         items: [
                        //             { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-question' },
                        //             { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-question' }
                        //         ]
                        //     },
                        //     {
                        //         label: 'Submenu 2.2',
                        //         icon: 'pi pi-fw pi-question',
                        //         items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-question' }]
                        //     }
                        // ]
                    },
                    {
                        label: 'Revisão',
                        icon: 'pi pi-fw pi-undo',
                        // items: [
                        //     {
                        //         label: 'Submenu 2.1',
                        //         icon: 'pi pi-fw pi-question',
                        //         items: [
                        //             { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-question' },
                        //             { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-question' }
                        //         ]
                        //     },
                        //     {
                        //         label: 'Submenu 2.2',
                        //         icon: 'pi pi-fw pi-question',
                        //         items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-question' }]
                        //     }
                        // ]
                    },
                    {
                        label: 'Estatísticas',
                        icon: 'pi pi-fw pi-undo',
                        // items: [
                        //     {
                        //         label: 'Submenu 2.1',
                        //         icon: 'pi pi-fw pi-question',
                        //         items: [
                        //             { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-question' },
                        //             { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-question' }
                        //         ]
                        //     },
                        //     {
                        //         label: 'Submenu 2.2',
                        //         icon: 'pi pi-fw pi-question',
                        //         items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-question' }]
                        //     }
                        // ]
                    },
                    {
                        label: 'Calendário',
                        icon: 'pi pi-fw pi-calendar',
                        // items: [
                        //     {
                        //         label: 'Submenu 2.1',
                        //         icon: 'pi pi-fw pi-question',
                        //         items: [
                        //             { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-question' },
                        //             { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-question' }
                        //         ]
                        //     },
                        //     {
                        //         label: 'Submenu 2.2',
                        //         icon: 'pi pi-fw pi-question',
                        //         items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-question' }]
                        //     }
                        // ]
                    },
                ]
            },
        ];
    }
}
