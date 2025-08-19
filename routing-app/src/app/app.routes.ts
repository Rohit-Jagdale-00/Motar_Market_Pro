import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '',redirectTo: 'hello',pathMatch: 'full'},
    {path: 'hello',loadComponent: () => import('./hello/hello').then(m => m.Hello)},
    {path: 'signal',loadComponent: () => import('./signal/signal').then(m => m.Signal)}
];
