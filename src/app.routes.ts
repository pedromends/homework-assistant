import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { DashboardComponent } from './app/pages/public/dashboard/dashboard.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'uikit', loadChildren: () => import('./app/pages/public/uikit/uikit.routes') },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },
    { path: 'auth', loadChildren: () => import('./app/pages/public/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
