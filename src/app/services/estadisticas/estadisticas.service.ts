import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  private SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  getStatistics(storedProcedure: any): Observable<any> {
    return this.http.get(`${this.SERVER_URL}/stats/general/${storedProcedure}`)
    .pipe((catchError(err => [
      console.log('ERROR: ', err)
    ])));
  }

}
