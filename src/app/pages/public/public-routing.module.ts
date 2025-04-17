import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { StudyComponent } from './study/study.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'tarefas', component: TasksComponent},
  {path: 'estudo', component: StudyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
