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
    console.log('WTF!?', storedProcedure);
    return this.http.get(`${this.SERVER_URL}/stats/general?stored=${'sp_select_max_oferta()'}`)
    .pipe((catchError(err => [
      console.log('ERROR: ', err)
    ])));
  }

}
