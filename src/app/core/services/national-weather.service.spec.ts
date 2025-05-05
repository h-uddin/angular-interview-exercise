import { TestBed } from '@angular/core/testing';

import { NationalWeatherService } from './national-weather.service';

describe('NationalWeatherService', () => {
  let service: NationalWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NationalWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
