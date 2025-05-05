import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StationComponent } from './components/station/station.component';

const routes: Routes = [
  { path: '', loadComponent: () => import('./components/station/station.component').then(m => m.StationComponent) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClimateRoutingModule { }
