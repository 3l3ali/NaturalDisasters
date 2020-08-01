import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from '../shared/models/IResponse';

@Injectable({
  providedIn: 'root'
})
export class EarthquakesService {
  url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02';
  // url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=34&longitude=-118&maxradiuskm=200.0&minmagnitude=7&starttime=0000-00-00''

  constructor(private http: HttpClient) { }

  getEarthQuakes() {
    return this.http.get<IResponse>(this.url);
  }
}
