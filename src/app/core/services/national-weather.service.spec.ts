import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { NationalWeatherService } from './national-weather.service';
import { Station } from 'src/app/shared/models/station.model';


describe('NationalWeatherService', () => {
  let service: NationalWeatherService;
  let httpMock: HttpTestingController;

  const mockStations: Station[] = [
    {
      id: 'station-1',
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [0, 0]
      },
      properties: {
        '@id': 'station-1',
        '@type': 'wx:ObservationStation',
        elevation: {
          unitCode: 'wmoUnit:m',
          value: 10
        },
        stationIdentifier: 'STN1',
        name: 'Station One',
        timeZone: 'America/New_York',
        forecast: '',
        county: '',
        fireWeatherZone: ''
      }
    },
    {
      id: 'station-2',
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [1, 1]
      },
      properties: {
        '@id': 'station-2',
        '@type': 'wx:ObservationStation',
        elevation: {
          unitCode: 'wmoUnit:m',
          value: 20
        },
        stationIdentifier: 'STN2',
        name: 'Station Two',
        timeZone: 'America/Chicago',
        forecast: '',
        county: '',
        fireWeatherZone: ''
      }
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        NationalWeatherService
      ]
    });

    service = TestBed.inject(NationalWeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch stations successfully', () => {
    service.getStations().subscribe((stations) => {
      expect(stations.length).toBe(2);
      expect(stations[0].properties.name).toBe('Station One');
      expect(stations[1].properties.name).toBe('Station Two');
    });

    const req = httpMock.expectOne('https://api.weather.gov/stations?limit=100');
    expect(req.request.method).toBe('GET');
    req.flush({ features: mockStations });
  });

  it('should fetch the latest observation for a station', () => {
    const mockObservation = {
      features: [
        {
          properties: {
            temperature: {
              value: 25.6,
              unitCode: 'wmoUnit:degC'
            },
            textDescription: 'Partly Cloudy'
          }
        }
      ]
    };
  
    const stationId = 'STN1';
  
    service.getLatestObservation(stationId).subscribe((observation) => {
      expect(observation.features.length).toBe(1);
      expect(observation.features[0].properties.temperature.value).toBe(25.6);
      expect(observation.features[0].properties.textDescription).toBe('Partly Cloudy');
    });
  
    const req = httpMock.expectOne(`https://api.weather.gov/stations/${stationId}/observations?limit=1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockObservation);
  });
  
});
