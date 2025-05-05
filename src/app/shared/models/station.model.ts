export interface Station {
    id: string;
    type: string;
    geometry: {
      type: string;
      coordinates: [number, number];
    };
    properties: {
      '@id': string;
      '@type': string;
      elevation: {
        unitCode: string;
        value: number;
      };
      stationIdentifier: string;
      name: string;
      timeZone: string;
      forecast: string;
      county: string;
      fireWeatherZone: string;
    };
  }
  