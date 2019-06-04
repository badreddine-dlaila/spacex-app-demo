import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Launch } from '../Models/launch.model';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {
  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getLaunches(): Observable<Launch[]> {
    const requestEndpoint = this.apiBaseUrl + 'launches';
    return this.http.get<Launch[]>(requestEndpoint).pipe(
      map(launches => {
        console.log(launches);
        return launches;
      })
    );
  }

  convertDate(dateUTC): String {
    var myDate: String = new Date(dateUTC).toISOString();
    return myDate;
  }
}
