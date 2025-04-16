import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './app/pages/public/dashboard/dashboard.component';
import { LayoutComponent } from './app/components/layout/layout.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
    {
      path: '',
      loadChildren: () =>
        import('./app/pages/public/public.module').then(m => m.PublicModule)
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
