import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NationalWeatherService {
  constructor(private http: HttpClient) {}

  getStations(): Observable<any> {
    return this.http.get('https://api.weather.gov/stations?limit=100');
  }
}
