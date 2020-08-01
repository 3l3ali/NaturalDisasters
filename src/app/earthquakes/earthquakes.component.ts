import { Component, OnInit } from '@angular/core';
import { IEarthquake } from '../shared/models/IEarthquake';
import { EarthquakesService } from './earthquakes.service';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-earthquakes',
  templateUrl: './earthquakes.component.html',
  styleUrls: ['./earthquakes.component.scss']
})
export class EarthquakesComponent implements OnInit {
  EarthQuakes: IEarthquake[];


  constructor(private earthQuakeService: EarthquakesService, private title: Title) {
    this.title.setTitle('EarthQuakes | NaturalDisasters');
  }

  ngOnInit(): void {
    this.earthQuakeService.getEarthQuakes().subscribe(res => {
      this.EarthQuakes = res.features;
    }, err => {
      console.log(err);
    });
  }

  onSearch(searchForm: NgForm){
    console.log(searchForm.value);
    this.earthQuakeService.getSearchResults(searchForm.value.lat, searchForm.value.lng, searchForm.value.start, searchForm.value.end)
    .subscribe( res => {
      this.EarthQuakes = res.features;
    }, err => {
      console.log(err);
    });
  }

  timeConvert(date: number){
    const curdate = new Date(null);
    curdate.setTime(date);
    return curdate.toLocaleString();
  }
}
