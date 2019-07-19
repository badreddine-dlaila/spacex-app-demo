import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { About } from '../models/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3';
  }
  getAboutInformation(): Observable<About> {
    const requestEndpoint = `${this.apiBaseUrl}`;
    return this.http.get<About>(requestEndpoint).pipe(
      map(aboutinfo => {
        return aboutinfo;
      })
    );
  }
}
