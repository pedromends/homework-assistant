import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { StyleClassModule } from 'primeng/styleclass';
import { TopbarComponent } from './topbar/topbar.component';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuComponent } from './menu/menu.component';
import { RippleModule } from 'primeng/ripple';
import { CardSubjectProgressComponent } from './card-subject-progress/card-subject-progress.component';
import { StatusComponent } from './status/status.component';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ChartModule } from 'primeng/chart';
import { DashChartComponent } from './dash-chart/dash-chart.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    LayoutComponent,
    TopbarComponent,
    MenuItemComponent,
    MenuComponent,
    SidebarComponent,
    CardSubjectProgressComponent,
    StatusComponent,
    FooterComponent,
    DashChartComponent,
    ChatBoxComponent,
  ],

  imports: [
    CommonModule,
    RouterModule,
    RouterModule,
    StyleClassModule,
    FormsModule,
    SelectButtonModule,
    ButtonModule,
    RippleModule,
    ProgressBarModule,
    CardModule,
    ToastModule,
    ChartModule,
  ],
  exports: [
    LayoutComponent,
    TopbarComponent,
    MenuItemComponent,
    MenuComponent,
    SidebarComponent,
    CardSubjectProgressComponent,
    StatusComponent,
    ButtonModule,
    DashChartComponent,
    ChatBoxComponent
  ]
})
export class ComponentsModule { }
