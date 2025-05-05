import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter',
  standalone: true
})

export class TempConverterPipe implements PipeTransform {
  transform(value: number, unit: 'F' | 'C' = 'F'): string {
    if (typeof value !== 'number' || isNaN(value)) return 'N/A';

    if (unit === 'F') {
      return `${((value * 9 / 5) + 32).toFixed(1)} °F`;
    } else {
      return `${value.toFixed(1)} °C`;
    }
  }
}
