import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  registerService(storedProcedure: string): Observable<any> {
    return this.http.get(`${this.SERVER_URL}/register/${storedProcedure}`)
    .pipe((catchError(err => [
      console.log('ERROR: ', err)
    ])));
  }
}
