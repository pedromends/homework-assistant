import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportsModule } from '../imports';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';

@NgModule({
  declarations: [
    SidebarComponent,
    ThemeSwitcherComponent
  ],
  imports: [
    CommonModule,
    ImportsModule,
  ],
  exports: [
    SidebarComponent,
    ThemeSwitcherComponent
  ]
})
export class ComponentsModule { }
