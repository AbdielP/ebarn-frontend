import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  insertAccount(body: any): Observable<any> {
    return this.http.post(`${this.SERVER_URL}/insertacc`, body)
    .pipe((catchError(err => [
      console.log('ERROR: ', err)
    ])));
  }
}
