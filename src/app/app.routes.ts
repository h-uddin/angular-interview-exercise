import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/climate/climate.routes').then(m => m.climateRoutes)
  }
];
