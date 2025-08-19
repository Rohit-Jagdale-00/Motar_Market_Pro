import { Routes } from '@angular/router';
import { VehicleManagementComponent } from './components/vehicle-management/vehicle-management';
import { SoldVehicleManagementComponent } from './components/sold-vehicle-management/sold-vehicle-management';
import { AboutComponent } from './components/about/about';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'vehicles', component: VehicleManagementComponent },
  { path: 'sold-vehicles', component: SoldVehicleManagementComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];