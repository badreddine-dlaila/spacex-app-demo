import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Past } from '../Models/past.model';

@Injectable({
  providedIn: 'root'
})
export class PastService {
  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getPasts(): Observable<Past[]> {
    const requestEndpoint = this.apiBaseUrl + 'launches/past';
    return this.http.get<Past[]>(requestEndpoint).pipe(
      map(pasts => {
        console.log(pasts);
        return pasts;
      })
    );
  }

  convertDate(dateUTC): String {
    var myDate: String = new Date(dateUTC).toISOString();
    return myDate;
  }
}
