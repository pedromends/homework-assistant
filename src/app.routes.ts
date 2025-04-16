import { Routes } from '@angular/router';
import { DashboardComponent } from './app/pages/public/dashboard/dashboard.component';
import { LayoutComponent } from './app/components/layout/layout.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'pages', loadChildren: () => import('./app/pages/public/public.module').then(m => m.PublicModule) }
        ]
    },
    { path: '**', redirectTo: '/notfound' }
];
