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

  // getStatistics(sp: string): Observable<any> {
  //   console.log('WTF!?', sp);
  //   return this.http.get(`${this.SERVER_URL}/stats?wtf=${sp}`)
  //   .pipe((catchError(err => [
  //     console.log('ERROR: ', err)
  //   ])));
  // }

  // SELECCIONA OFERTA MÁS RECIENTE
  selectRecentOfert(): Observable<any> {
    return this.http.get(`${this.SERVER_URL}/stats/recentofert`)
    .pipe((catchError(err => [
      console.log('ERROR: ', err)
    ])));
  }

  // SELECCIONAR OFERTA MÁS ALTA
  selectMaxOfert(): Observable<any> {
    return this.http.get(`${this.SERVER_URL}/stats/maxofert`)
    .pipe((catchError(err => [
      console.log('ERROR: ', err)
    ])));
  }

  // SELECCIONAR OFERTA MÁS BAJA
  selectMinOfert(): Observable<any> {
    return this.http.get(`${this.SERVER_URL}/stats/minofert`)
    .pipe((catchError(err => [
      console.log('ERROR: ', err)
    ])));
  }
}
