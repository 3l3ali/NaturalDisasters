import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlParser } from '@angular/compiler';
import { HomeComponent } from './home/home.component';
import { EarthquakesComponent } from './earthquakes/earthquakes.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'earthquakes', component: EarthquakesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
