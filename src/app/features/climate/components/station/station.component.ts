import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Station } from 'src/app/shared/models/station.model';
import { TemperatureComponent } from '../temperature/temperature.component';

@Component({
  selector: 'app-station',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, MatCardModule, MatSelectModule, MatFormFieldModule, TemperatureComponent ],
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent {
  selectedStation: Station | null = null;

  mockStations: Station[] = [
    {
      id: 'https://api.weather.gov/stations/0007W',
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-84.1787, 30.53099]
      },
      properties: {
        '@id': 'https://api.weather.gov/stations/0007W',
        '@type': 'wx:ObservationStation',
        elevation: {
          unitCode: 'wmoUnit:m',
          value: 49.0728
        },
        stationIdentifier: '0007W',
        name: 'Montford Middle',
        timeZone: 'America/New_York',
        forecast: 'https://api.weather.gov/zones/forecast/FLZ017',
        county: 'https://api.weather.gov/zones/county/FLC073',
        fireWeatherZone: 'https://api.weather.gov/zones/fire/FLZ017'
      }
    },
    {
      id: 'https://api.weather.gov/stations/000PG',
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-121.33943, 36.78921]
      },
      properties: {
        '@id': 'https://api.weather.gov/stations/000PG',
        '@type': 'wx:ObservationStation',
        elevation: {
          unitCode: 'wmoUnit:m',
          value: 129.2352
        },
        stationIdentifier: '000PG',
        name: 'Southside Road',
        timeZone: 'America/Los_Angeles',
        forecast: 'https://api.weather.gov/zones/forecast/CAZ528',
        county: 'https://api.weather.gov/zones/county/CAC069',
        fireWeatherZone: 'https://api.weather.gov/zones/fire/CAZ528'
      }
    }
  ];
}
