import { Component, ViewChild } from '@angular/core';
import { Drawer } from 'primeng/drawer';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @ViewChild('drawerRef') drawerRef!: Drawer;

  closeCallback(e): void {
      this.drawerRef.close(e);
  }

  visible: boolean = false;
}
