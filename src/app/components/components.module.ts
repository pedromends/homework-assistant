import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportsModule } from '../imports';
import { Ripple } from 'primeng/ripple';
import { StyleClass } from 'primeng/styleclass';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ImportsModule,
    Ripple,
    StyleClass
  ],
  exports: [
    SidebarComponent
  ]
})
export class ComponentsModule { }
