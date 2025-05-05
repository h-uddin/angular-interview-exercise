import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { climateRoutes } from './climate.routes';

@NgModule({
  imports: [
    CommonModule,
    climateRoutes
  ]
})
export class ClimateModule { }
