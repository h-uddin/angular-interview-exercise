import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Station } from 'src/app/shared/models/station.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent {
  @Input() station!: Station;
}
 