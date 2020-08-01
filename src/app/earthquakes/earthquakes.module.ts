import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarthquakesComponent } from './earthquakes.component';



@NgModule({
  declarations: [EarthquakesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EarthquakesComponent
  ]
})
export class EarthquakesModule { }
