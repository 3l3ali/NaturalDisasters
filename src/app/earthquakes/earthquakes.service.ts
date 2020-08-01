import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from '../shared/models/IResponse';

@Injectable({
  providedIn: 'root'
})
export class EarthquakesService {
  baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';
            

  constructor(private http: HttpClient) { }

  getEarthQuakes() {
    return this.http.get<IResponse>(this.baseUrl + '&starttime=2014-01-01&endtime=2014-01-02');
  }

  getSearchResults(lat: string, lng: string, start: string, end: string){
    if (start === ''){
      start = '0000-00-00';
    }
    return this.http.get<IResponse>(this.baseUrl + `&latitude=${lat}&longitude=${lng}&maxradiuskm=200&minmagnitude=7&starttime=${start}&endtime=${end}`);
  }
}
