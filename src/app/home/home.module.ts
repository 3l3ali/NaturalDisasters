import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from '../shared/components/banner/banner.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
