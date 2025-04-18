import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppFooter } from './app.footer';
import { AppSidebar } from './app.sidebar';
import { LayoutComponent } from './layout/layout.component';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigurator } from './app.configurator';
import { TopbarComponent } from './topbar/topbar.component';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AppFloatingConfigurator } from './app.floatingconfigurator';
import { ButtonModule } from 'primeng/button';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuComponent } from './menu/menu.component';
import { RippleModule } from 'primeng/ripple';
import { CardSubjectProgressComponent } from './card-subject-progress/card-subject-progress.component';
import { StatusComponent } from './status/status.component';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    LayoutComponent,
    TopbarComponent,
    AppConfigurator,
    AppFloatingConfigurator,
    MenuItemComponent,
    MenuComponent,
    AppSidebar,
    CardSubjectProgressComponent,
    StatusComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    AppFooter,
    RouterModule,
    StyleClassModule,
    FormsModule,
    SelectButtonModule,
    ButtonModule,
    RippleModule,
    ProgressBarModule,
    ToastModule,
  ],

  exports: [
    LayoutComponent,
    TopbarComponent,
    AppConfigurator,
    AppFloatingConfigurator,
    MenuItemComponent,
    MenuComponent,
    AppSidebar,
    CardSubjectProgressComponent,
    StatusComponent,
    ButtonModule
  ]
})
export class ComponentsModule { }
