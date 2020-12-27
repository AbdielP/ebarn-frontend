import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  getProducts(storedProcedure: any): Observable<any> {
    return this.http.get(`${this.SERVER_URL}/products/${storedProcedure}`)
    .pipe((catchError(err => [
      console.log('ERROR: ', err)
    ])));
  }
}
