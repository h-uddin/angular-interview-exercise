import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Station } from 'src/app/shared/models/station.model';
import { MatCardModule } from '@angular/material/card';
import { TempConverterPipe } from 'src/app/shared/pipes/temp-converter.pipe';

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [CommonModule, MatCardModule, TempConverterPipe],
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent {
  @Input() station!: Station;
  @Input() temperature!: number | null;
}
 