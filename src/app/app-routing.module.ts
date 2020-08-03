import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlParser } from '@angular/compiler';
import { HomeComponent } from './home/home.component';
import { EarthquakesComponent } from './earthquakes/earthquakes.component';
import { PreparedComponent } from './prepared/prepared.component';
import { FaqComponent } from './faq/faq.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'EarthQuakes', component: EarthquakesComponent},
  {path: 'BePrepared', component: PreparedComponent},
  {path: 'FrequentlyAsked', component: FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
