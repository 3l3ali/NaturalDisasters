import { Component, OnInit } from '@angular/core';
import { IEarthquake } from '../shared/models/IEarthquake';
import { EarthquakesService } from './earthquakes.service';

@Component({
  selector: 'app-earthquakes',
  templateUrl: './earthquakes.component.html',
  styleUrls: ['./earthquakes.component.scss']
})
export class EarthquakesComponent implements OnInit {
  EarthQuakes: IEarthquake[];

  constructor(private earthQuakeService: EarthquakesService) { }

  ngOnInit(): void {
    this.earthQuakeService.getEarthQuakes().subscribe(res => {
      console.log(res.features);
      this.EarthQuakes = res.features;
    }, err => {
      console.log(err);
    });
  }

}
