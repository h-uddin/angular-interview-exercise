import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Station } from 'src/app/shared/models/station.model';

@Injectable({
  providedIn: 'root'
})
export class NationalWeatherService {
  private stationsUrl = 'https://api.weather.gov/stations?limit=100';

  constructor(private http: HttpClient) {}

  getStations(): Observable<Station[]> {
    return this.http.get<{ features: Station[] }>(this.stationsUrl).pipe(
      retry(2), // Retry up to 2 times before failing
      catchError(this.handleError),
      map(response => response.features)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side/network error
      errorMessage = `A client-side error occurred: ${error.error.message}`;
    } else {
      // Backend/server error
      errorMessage = `Server returned code ${error.status}, body was: ${error.error}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
