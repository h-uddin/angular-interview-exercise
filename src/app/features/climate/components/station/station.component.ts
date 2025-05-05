import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Station } from 'src/app/shared/models/station.model';
import { TemperatureComponent } from '../temperature/temperature.component';
import { NationalWeatherService } from 'src/app/core/services/national-weather.service';

@Component({
  selector: 'app-station',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, MatCardModule, MatSelectModule, MatFormFieldModule, TemperatureComponent],
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {
  selectedStation: Station | null = null;
  stations: Station[] = [];
  errorMessage: string = '';
  temperature: number | null = null;

  constructor(private weatherService: NationalWeatherService) {}

  ngOnInit(): void {
    this.weatherService.getStations().subscribe({
      next: (data) => {
        this.stations = data;
      },
      error: (error) => {
        console.error('Error fetching observation:', error);
        this.stations = null;
      }
    });
  }
  
  onStationSelect(station: Station): void {
    this.selectedStation = station;
    this.weatherService.getLatestObservation(station.properties.stationIdentifier)
      .subscribe({
        next: (data) => {
          const temp = data.features[0]?.properties?.temperature?.value;
          this.temperature = temp !== null ? temp : null;
        },
        error: (error) => {
          console.error('Error fetching observation:', error);
          this.temperature = null;
        }
      });
  }
}
