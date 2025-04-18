import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudyComponent } from './study/study.component';
import { TasksComponent } from './tasks/tasks.component';
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
    CardModule,
    DropdownModule,
    FormsModule,
    ComponentsModule
  ]
})
export class PublicModule { }
