import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudyComponent } from './study/study.component';
import { TasksComponent } from './tasks/tasks.component';
import { RevenueStreamWidget } from '../../components/revenuestreamwidget';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DashboardComponent,
    TasksComponent,
    StudyComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RevenueStreamWidget,
    CardModule,
    DropdownModule,
    FormsModule,
    ComponentsModule
  ]
})
export class PublicModule { }
